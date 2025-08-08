n.d(t, { Z: () => y });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(810568),
    a = n(168524),
    c = n(5192),
    s = n(971082),
    d = n(817053),
    u = n(879877),
    f = n(853072),
    p = n(388032),
    m = n(436860),
    g = n(467514),
    b = n(418718);
function h(e) {
    let { text: t, user: n, guildId: l, channelId: o } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.PEf, {
                size: "xxs",
                color: i.TVs.colors.ICON_TERTIARY,
                className: b.icon,
            }),
            (0, r.jsx)(i.nn4, { children: p.intl.format(p.t.TM0XDQ, { name: c.ZP.getName(l, o, n) }) }),
            (0, r.jsx)(i.Text, {
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
            source: o.m1.UserProfile,
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
        g = null != u;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            g &&
                (0, r.jsx)(i.P3F, {
                    className: b.clickableCard,
                    "aria-label": p.intl.formatToPlainString(p.t["8QLQBw"], { gameName: m }),
                    onClick: f,
                }),
            d,
        ],
    });
}
function y(e) {
    let { user: t, guildId: n, channelId: l, game: o, loading: a = !1, disableInteraction: c = !1 } = e,
        { gameName: y, imageSrc: x, applicationId: O, comment: v, tags: _ } = o,
        I = (0, f.Z)(o.applicationId),
        P = I.length > 0,
        E = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        imageSrc: x,
                        gameName: y,
                        applicationId: O,
                        userId: t.id,
                        disableInteraction: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: b.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: y,
                            }),
                            null != v &&
                                (0, r.jsx)(h, {
                                    text: v,
                                    user: t,
                                    guildId: n,
                                    channelId: l,
                                }),
                            (0, r.jsx)(u.Z, { tags: _ }),
                            P &&
                                (0, r.jsx)(s.Z, {
                                    label: p.intl.formatToPlainString(p.t.ujhJdH, { numFriends: I.length }),
                                    className: b.socialProof,
                                    users: I,
                                    guildId: n,
                                    channelId: l,
                                }),
                        ],
                    }),
                ],
            });
    return a
        ? (0, r.jsxs)("div", {
              className: b.card,
              children: [
                  (0, r.jsx)("div", { className: g.loadingCover }),
                  (0, r.jsx)("div", {
                      className: b.details,
                      children: (0, r.jsxs)("div", {
                          className: m.placeholderText,
                          children: [
                              (0, r.jsx)("div", { className: m.placeholderBar }),
                              (0, r.jsx)("div", { className: m.placeholderBar }),
                          ],
                      }),
                  }),
              ],
          })
        : c
          ? (0, r.jsx)("div", {
                className: b.card,
                children: E(),
            })
          : (0, r.jsx)(j, {
                applicationId: O,
                userId: t.id,
                gameName: y,
                className: b.card,
                children: E(),
            });
}
