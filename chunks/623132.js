n.d(t, { Z: () => j });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(810568),
    a = n(168524),
    c = n(5192),
    s = n(817053),
    d = n(879877),
    u = n(919498),
    f = n(388032),
    p = n(467514),
    m = n(418718);
function g(e) {
    let { text: t, user: n, guildId: l, channelId: i } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.PEf, {
                size: "xxs",
                color: o.TVs.colors.ICON_TERTIARY,
                className: m.icon,
            }),
            (0, r.jsx)(o.nn4, { children: f.intl.format(f.t.TM0XDQ, { name: c.ZP.getName(l, i, n) }) }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function b(e) {
    let { applicationId: t, userId: n, gameName: c, className: s, children: d } = e,
        u = (0, a.Z)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: i.m1.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        }),
        p = l.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == u || u(e));
            },
            [u],
        ),
        g = null != c ? c : f.intl.string(f.t.GIWFlJ),
        b = null != u;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            b &&
                (0, r.jsx)(o.P3F, {
                    className: m.clickableCard,
                    "aria-label": f.intl.formatToPlainString(f.t["8QLQBw"], { gameName: g }),
                    onClick: p,
                }),
            d,
        ],
    });
}
function j(e) {
    let { user: t, guildId: n, channelId: l, game: i, loading: a = !1, disableInteraction: c = !1 } = e,
        { gameName: f, imageSrc: j, applicationId: h, comment: y, tags: v } = i,
        O = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Z, {
                        imageSrc: j,
                        gameName: f,
                        applicationId: h,
                        userId: t.id,
                        disableInteraction: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: m.details,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: f,
                            }),
                            null != y &&
                                (0, r.jsx)(g, {
                                    text: y,
                                    user: t,
                                    guildId: n,
                                    channelId: l,
                                }),
                            (0, r.jsx)(d.Z, { tags: v }),
                            (0, r.jsx)(u.Z, {
                                applicationId: h,
                                guildId: n,
                                channelId: l,
                                className: m.socialProof,
                            }),
                        ],
                    }),
                ],
            });
    return a
        ? (0, r.jsxs)("div", {
              className: m.card,
              children: [(0, r.jsx)("div", { className: p.gameCover }), (0, r.jsx)("div", { className: m.details })],
          })
        : c
          ? (0, r.jsx)("div", {
                className: m.card,
                children: O(),
            })
          : (0, r.jsx)(b, {
                applicationId: h,
                userId: t.id,
                gameName: f,
                className: m.card,
                children: O(),
            });
}
