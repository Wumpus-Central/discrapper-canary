n.d(t, { default: () => ea }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(989349),
    d = n.n(r),
    o = n(452027),
    c = n(189213),
    u = n(311907),
    h = n(827734),
    g = n(417048),
    m = n(444550),
    x = n(990078),
    A = n(331322),
    N = n(243721),
    j = n(691885),
    S = n(404778),
    p = n(954197),
    v = n(611677),
    b = n(349288),
    E = n(834730),
    f = n(602853),
    _ = n(534514),
    C = n(832712),
    G = n(544743),
    M = n(999903),
    y = n(47167),
    L = n(713654),
    O = n(585510),
    I = n(610136),
    T = n(594061),
    k = n(95701),
    R = n(734057),
    w = n(769765),
    D = n(498642),
    U = n(71393),
    P = n(994500),
    Y = n(543465),
    H = n(287809),
    V = n(403362),
    W = n(975571),
    B = n(477427),
    z = n(769591),
    F = n(717115),
    Z = n(506849),
    J = n(652215),
    Q = n(355097),
    q = n(985018),
    K = n(964952);
function X(e) {
    let { label: t, channelId: n } = e,
        [s, l] = (0, u.yK)([R.A], () => {
            let e = R.A.getChannel(n);
            return [e, e?.parent_id != null ? R.A.getChannel(e.parent_id) : null];
        });
    return null == s ? t : (0, i.jsx)(g.X, { icon: (0, L.gU)(s), title: t, subtitle: l?.name });
}
function $(e) {
    let { muteConfig: t, muted: n, guild: s, handleCheckboxChange: l } = e,
        a = t?.selected_time_window ?? Q.Xx.ALWAYS;
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: K.bj,
              children: [
                  (0, i.jsxs)(A.B, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(N.d, {
                              label: q.intl.formatToPlainString(q.t["J+7D9E"], { name: s.name }),
                              description: q.intl.string(q.t["8wbTQ6"]),
                              checked: n,
                              onChange: (e) => l("muted", e, B.G_.muted(e)),
                          }),
                          n
                              ? (0, i.jsx)(j.l, {
                                    label: q.intl.string(q.t.Ztu2Yo),
                                    options: (0, z.b8)(),
                                    value: a,
                                    onSelectionChange: (e) => {
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        C.A.updateGuildNotificationSettings(
                                            s.id,
                                            { muted: !0, mute_config: { selected_time_window: e, end_time: t } },
                                            B.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(S.c, { gap: 20 }),
              ],
          });
}
function ee(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: K.YK,
        children: [
            (0, i.jsx)("div", {
                className: K.bj,
                children: (0, i.jsx)(p.z, {
                    label: q.intl.string(q.t.lprV7V),
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, B.G_.notifications(e)),
                    options: [
                        {
                            name: q.intl.string(q.t["n/bTaY"]),
                            value: J.orn.ALL_MESSAGES,
                            desc: null != s && s >= J._4N ? q.intl.string(q.t.Dh5p5j) : null,
                        },
                        { name: q.intl.format(q.t.L2hmYy, {}), value: J.orn.ONLY_MENTIONS },
                        { name: q.intl.string(q.t.CtVGyQ), value: J.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, i.jsx)(S.c, {}),
        ],
    });
}
function et(e) {
    let { guildId: t } = e,
        n = (0, O._g)(t),
        s = (0, u.bG)([I.A], () => I.A.getGuildAlertSettings()[t]);
    if (n)
        return (0, i.jsxs)("div", {
            className: K.YK,
            children: [
                (0, i.jsx)(v.l, {
                    className: K.bj,
                    children: (0, i.jsxs)(o.D, {
                        label: q.intl.string(q.t.D9yVAH),
                        description: q.intl.string(q.t["0PhAOH"]),
                        children: [
                            (0, i.jsx)(N.d, {
                                label: q.intl.string(q.t.u6dc5B),
                                description: q.intl.string(q.t.z8Td48),
                                checked: !s?.disableRaidAlertNag,
                                onChange: (e) =>
                                    (0, T.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        T.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, i.jsx)(N.d, {
                                label: q.intl.string(q.t.P8MG6q),
                                description: q.intl.string(q.t.PyxXs8),
                                checked: !s?.disableRaidAlertPush,
                                onChange: (e) =>
                                    (0, T.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        T.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(S.c, {}),
            ],
        });
}
function en(e) {
    let {
        suppressEveryone: t,
        suppressRoles: n,
        handleCheckboxChange: s,
        notifyHighlights: l,
        muteEvents: a,
        mobilePush: r,
        muted: d,
        guildId: o,
    } = e;
    return (0, i.jsxs)(A.B, {
        className: K.bj,
        gap: 16,
        children: [
            (0, i.jsx)(N.d, {
                label: q.intl.format(q.t.OWiWAp, {}),
                onChange: (e) => s("suppress_everyone", e, B.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(S.c, {}),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t["O/QdoD"]),
                onChange: (e) => s("suppress_roles", e, B.G_.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(S.c, {}),
            (0, i.jsxs)(A.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(N.d, {
                        label: q.intl.string(q.t.gPuteJ),
                        onChange: (e) => {
                            C.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? J.guM.DISABLED : J.guM.ENABLED },
                                B.G_.highlights(!e),
                            );
                        },
                        checked: d || l === J.guM.DISABLED,
                        disabled: d,
                        description: q.intl.string(q.t["Vw/Xn8"]),
                    }),
                    (0, i.jsx)(b.Anchor, {
                        href: W.A.getArticleURL(J.MVz.HIGHLIGHTS),
                        children: (0, i.jsx)(E.E, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: q.intl.string(q.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(S.c, {}),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t.ONG3Yz),
                checked: a,
                onChange: (e) => s("mute_scheduled_events", e, B.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(S.c, {}),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t.h1DL66),
                checked: !d && r,
                disabled: d,
                onChange: (e) => s("mobile_push", e, B.G_.mobilePush(e)),
            }),
        ],
    });
}
function ei(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: s, channels: l, categories: r } = e,
        d = a()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== J.rbe.GUILD_CATEGORY || (null != r[t.id] && r[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, y.m1)(t, H.default, P.A) };
            })
            .value();
    return (0, i.jsx)("div", {
        className: K.bj,
        children: (0, i.jsx)(m.p, {
            label: q.intl.string(q.t["Z+oF8h"]),
            description: q.intl.string(q.t["2Y9ZfA"]),
            value: J.dJq,
            placeholder: q.intl.string(q.t["Z+oF8h"]),
            renderOptionLabel: (e) => (0, i.jsx)(X, { label: e.label, channelId: e.value }),
            options: d,
            onChange: (e) => {
                if (null == e) return;
                let i = new Set(n);
                i.add(e), t(i), s(e);
            },
            "data-migration-pending": !0,
        }),
    });
}
function es(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: n,
            channels: l,
            categories: a,
            muted: r,
            setNewChannelOverrides: d,
            latestOverrideId: o,
            messageNotifications: c,
        } = e,
        u = s.useMemo(() => new Set([...t, ...(0, z.ct)(n)]), [n, t]),
        g = (0, f.r)(h.A.unsafe_rawColors.GREEN_360).hex(),
        m = (e) => {
            let n = new Set(t);
            n.delete(e), d(n);
        },
        A = l
            .map((e) => {
                let { channel: t } = e;
                if (!u.has(t.id) || (null != a[t.id] && 0 === a[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    F.O,
                    {
                        channel: t,
                        guildMuted: r,
                        muted: null != s && (0, G.tG)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: m,
                        checkboxColor: g,
                        autoFocus: t.id === o,
                    },
                    t.id,
                );
            })
            .filter(V.Vq);
    return (
        (0 === u.size || 0 === A.length) &&
            A.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: K.uZ,
                        children: (0, i.jsx)(E.E, {
                            className: K.sr,
                            variant: "text-sm/semibold",
                            children: q.intl.string(q.t["2Y9ZfA"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: K.n_,
                    children: [
                        (0, i.jsx)(_.D, { variant: "eyebrow", className: K.Bv, children: q.intl.string(q.t.uShwWv) }),
                        (0, i.jsx)(_.D, { variant: "eyebrow", className: K.BO, children: q.intl.string(q.t.e29Z12) }),
                        (0, i.jsx)(_.D, { variant: "eyebrow", className: K.BO, children: q.intl.string(q.t.DD6gNd) }),
                        (0, i.jsx)(_.D, { variant: "eyebrow", className: K.BO, children: q.intl.string(q.t.CtVGyQ) }),
                        (0, i.jsx)(_.D, {
                            variant: "eyebrow",
                            className: K.BO,
                            children: (0, i.jsx)(x.m, {
                                text: q.intl.string(q.t["8wbTQ6"]),
                                position: "bottom",
                                children: (0, i.jsx)("span", { children: q.intl.string(q.t.sWmtI6) }),
                            }),
                        }),
                    ],
                }),
                A,
            ],
        })
    );
}
function el(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        a = (0, u.bG)([w.A], () => w.A.getCategories(t)),
        r = (0, u.bG)([U.A], () => U.A.getGuild(t)),
        d = (0, u.bG)([D.A], () => D.A.getMemberCount(t)),
        {
            suppressEveryone: o,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: x,
            muteConfig: A,
            messageNotifications: N,
            channelOverrides: j,
            notifyHighlights: S,
        } = (0, u.cf)([Y.Ay], () => ({
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            muteEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            muted: Y.Ay.isMuted(t),
            muteConfig: Y.Ay.getMuteConfig(t),
            messageNotifications: Y.Ay.getMessageNotifications(t),
            channelOverrides: Y.Ay.getChannelOverrides(t),
            notifyHighlights: Y.Ay.getNotifyHighlights(t),
        })),
        [p, v] = s.useState(new Set()),
        [b, E] = s.useState(null),
        f = s.useMemo(
            () =>
                (0, M.A)(a._categories, a, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, k.tr)(t) || t === J.rbe.GUILD_CATEGORY;
                }),
            [a],
        ),
        _ = (e, n, i) => {
            C.A.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(c.Modal, {
        title: q.intl.string(q.t.h850Ss),
        actions: [{ text: q.intl.string(q.t.i4jeWR), onClick: n }],
        onClose: n,
        transitionState: l,
        children: [
            (0, i.jsx)($, { muteConfig: A, muted: x, guild: r, handleCheckboxChange: _ }),
            (0, i.jsx)(ee, {
                muted: x,
                messageNotifications: N,
                memberCount: d,
                handleRadioChange: (e, n, i) => {
                    C.A.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(et, { guildId: t }),
            (0, i.jsx)(en, {
                suppressEveryone: o,
                suppressRoles: h,
                handleCheckboxChange: _,
                notifyHighlights: S,
                muteEvents: g,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, i.jsx)(ei, {
                setNewChannelOverrides: v,
                newChannelOverrides: p,
                setLatestOverrideId: E,
                channels: f,
                categories: a,
            }),
            (0, i.jsx)(es, {
                newChannelOverrides: p,
                channelOverrides: j,
                channels: f,
                categories: a,
                muted: x,
                setNewChannelOverrides: v,
                latestOverrideId: b,
                messageNotifications: N,
            }),
        ],
    });
}
function ea(e) {
    let { ...t } = e;
    return (0, z.os)("NotificationSettingsModal") ? (0, i.jsx)(Z.A, { ...t }) : (0, i.jsx)(el, { ...t });
}
