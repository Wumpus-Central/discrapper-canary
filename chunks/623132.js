n.d(t, { Z: () => h });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(810568),
    a = n(168524),
    c = n(5192),
    s = n(971082),
    d = n(817053),
    u = n(879877),
    f = n(853072),
    p = n(388032),
    m = n(467514),
    g = n(418718);
function b(e) {
    let { text: t, user: n, guildId: l, channelId: i } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.PEf, {
                size: "xxs",
                color: o.TVs.colors.ICON_TERTIARY,
                className: g.icon,
            }),
            (0, r.jsx)(o.nn4, { children: p.intl.format(p.t.TM0XDQ, { name: c.ZP.getName(l, i, n) }) }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function j(e) {
    let { applicationId: t, userId: n, gameName: c, className: s, children: d } = e,
        u = (0, a.Z)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: i.m1.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        }),
        f = l.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == u || u(e));
            },
            [u],
        ),
        m = null != c ? c : p.intl.string(p.t.GIWFlJ),
        b = null != u;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            b &&
                (0, r.jsx)(o.P3F, {
                    className: g.clickableCard,
                    "aria-label": p.intl.formatToPlainString(p.t["8QLQBw"], { gameName: m }),
                    onClick: f,
                }),
            d,
        ],
    });
}
function h(e) {
    let { user: t, guildId: n, channelId: l, game: i, loading: a = !1, disableInteraction: c = !1 } = e,
        { gameName: h, imageSrc: y, applicationId: x, comment: v, tags: O } = i,
        _ = (0, f.Z)(i.applicationId),
        I = _.length > 0,
        P = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        imageSrc: y,
                        gameName: h,
                        applicationId: x,
                        userId: t.id,
                        disableInteraction: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.details,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: h,
                            }),
                            null != v &&
                                (0, r.jsx)(b, {
                                    text: v,
                                    user: t,
                                    guildId: n,
                                    channelId: l,
                                }),
                            (0, r.jsx)(u.Z, { tags: O }),
                            I &&
                                (0, r.jsx)(s.Z, {
                                    label: p.intl.formatToPlainString(p.t.ujhJdH, { numFriends: _.length }),
                                    className: g.socialProof,
                                    users: _,
                                    guildId: n,
                                    channelId: l,
                                }),
                        ],
                    }),
                ],
            });
    return a
        ? (0, r.jsxs)("div", {
              className: g.card,
              children: [(0, r.jsx)("div", { className: m.gameCover }), (0, r.jsx)("div", { className: g.details })],
          })
        : c
          ? (0, r.jsx)("div", {
                className: g.card,
                children: P(),
            })
          : (0, r.jsx)(j, {
                applicationId: x,
                userId: t.id,
                gameName: h,
                className: g.card,
                children: P(),
            });
}
