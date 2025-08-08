n.d(t, { Z: () => x });
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
    m = n(388032),
    p = n(436860),
    g = n(467514),
    b = n(418718);
function j(e) {
    let { text: t, user: n, guildId: l, channelId: o } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.PEf, {
                size: "xxs",
                color: i.TVs.colors.ICON_TERTIARY,
                className: b.icon,
            }),
            (0, r.jsx)(i.nn4, { children: m.intl.format(m.t.TM0XDQ, { name: c.ZP.getName(l, o, n) }) }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function h(e) {
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
        p = null != c ? c : m.intl.string(m.t.GIWFlJ),
        g = null != u;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            g &&
                (0, r.jsx)(i.P3F, {
                    className: b.clickableCard,
                    "aria-label": m.intl.formatToPlainString(m.t["8QLQBw"], { gameName: p }),
                    onClick: f,
                }),
            d,
        ],
    });
}
function x(e) {
    let { user: t, guildId: n, channelId: l, game: o, loading: a = !1, disableInteraction: c = !1 } = e,
        { gameName: x, imageSrc: y, applicationId: v, comment: O, tags: I } = o,
        _ = (0, f.Z)(o.applicationId),
        P = _.length > 0,
        Z = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        imageSrc: y,
                        gameName: x,
                        applicationId: v,
                        userId: t.id,
                        disableInteraction: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: b.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: x,
                            }),
                            null != O &&
                                (0, r.jsx)(j, {
                                    text: O,
                                    user: t,
                                    guildId: n,
                                    channelId: l,
                                }),
                            (0, r.jsx)(u.Z, { tags: I }),
                            P &&
                                (0, r.jsx)(s.Z, {
                                    label: m.intl.formatToPlainString(m.t.ujhJdH, { numFriends: _.length }),
                                    className: b.socialProof,
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
              className: b.card,
              children: [
                  (0, r.jsx)("div", { className: g.loadingCover }),
                  (0, r.jsx)("div", {
                      className: b.details,
                      children: (0, r.jsxs)("div", {
                          className: p.placeholderText,
                          children: [
                              (0, r.jsx)("div", { className: p.placeholderBar }),
                              (0, r.jsx)("div", { className: p.placeholderBar }),
                          ],
                      }),
                  }),
              ],
          })
        : c
          ? (0, r.jsx)("div", {
                className: b.card,
                children: Z(),
            })
          : (0, r.jsx)(h, {
                applicationId: v,
                userId: t.id,
                gameName: x,
                className: b.card,
                children: Z(),
            });
}
