var i = n(435558),
    r = n(626584),
    a = n(54546);
let s = ["post", "carousel", "server_row"],
    l = /[\s:\x00-\x1f\x7f]/u,
    o = new r.A("WaterwheelsCardParser");
function d(e) {
    return (0, i.isPlainObject)(e);
}
function c(e, t) {
    if (0 === t.length || l.test(t)) return !1;
    let n = `${t}:`,
        i = e.slice(n.length);
    return e.startsWith(n) && i.length > 0 && !l.test(i);
}
function u(e) {
    if (!d(e.value)) return !1;
    switch (e.type) {
        case a.Y.JOIN_GUILD:
        case a.Y.OPEN_GUILD:
            return "string" == typeof e.value.guild_id;
        case a.Y.OPEN_GAME:
            return "string" == typeof e.value.game_id;
        case a.Y.OPEN_CONNECTION:
            return "string" == typeof e.value.provider;
        case a.Y.OPEN_URI:
            return "string" == typeof e.value.url;
        case a.Y.OPEN_NUDGE:
            return "enable_notifications" === e.value.nudge;
        default:
            return !1;
    }
}
function _(e) {
    let { guild_id: t, icon_url: n, online: i, members: r, description: a, partnered: s, ...l } = e;
    return {
        ...l,
        guildId: t,
        iconUrl: n,
        description: "string" == typeof a ? a : null,
        partnered: !0 === s,
        online: Number(i),
        members: Number(r),
    };
}
function E(e) {
    return (o.warn(`Rejected Waterwheels card: ${e}`), { ok: !1, reason: e });
}
n.d(
    t,
    {},
    {
        b: function (e) {
            try {
                if (
                    !d(e) ||
                    "string" != typeof e.id ||
                    "string" != typeof e.type ||
                    !c(e.id, e.type) ||
                    !d(e.layout) ||
                    !Array.isArray(e.actions)
                )
                    return E("invalid_card");
                if (!s.includes(e.layout.type)) return E("unknown_layout");
                if (!e.actions.every((e) => d(e) && Object.values(a.Y).includes(e.type))) return E("unknown_action");
                if (void 0 !== e.client_eligibility && "notifications_permission" !== e.client_eligibility)
                    return E("unknown_eligibility");
                if (!e.actions.every(u)) return E("invalid_card");
                return {
                    ok: !0,
                    card: {
                        id: e.id,
                        type: e.type,
                        layout: (function (e) {
                            switch (e.type) {
                                case "server_row":
                                    return _(e);
                                case "post": {
                                    let { image_url: t, action_label: n, ...i } = e;
                                    return { ...i, imageUrl: t, actionLabel: n };
                                }
                                case "carousel": {
                                    let { header: t, items: n, ...i } = e;
                                    return {
                                        ...i,
                                        header: { title: t.title, subtitle: t.subtitle, iconUrl: t.icon_url },
                                        items: n.map((e) => {
                                            let { game_id: t, cover_url: n, server: i, ...r } = e;
                                            return { ...r, gameId: t, coverUrl: n, server: null == i ? null : _(i) };
                                        }),
                                    };
                                }
                            }
                        })(e.layout),
                        actions: e.actions,
                        clientEligibility: e.client_eligibility ?? null,
                    },
                };
            } catch {
                return E("invalid_card");
            }
        },
        l: c,
    },
);
