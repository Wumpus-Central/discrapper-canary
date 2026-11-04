i.d(e, { A: () => C });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(834730),
    d = i(821609),
    o = i(688810),
    u = i(429913),
    c = i(769015),
    A = i(390848),
    m = i(39623),
    f = i(420825),
    g = i(22212),
    h = i(792996),
    I = i(266600);
function x(t) {
    let { userId: e, analyticsLocation: i } = t,
        s = (0, f.z)(e),
        [r, o] = l.useState(!1),
        u = l.useCallback(() => {
            (o(!0), (0, g.Yq)({ analyticsLocation: i, noteLength: s?.length ?? 0 }));
        }, [i, s]);
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: I.kL,
              children: [
                  r
                      ? null
                      : (0, n.jsx)("div", {
                            className: I.p6,
                            children: (0, n.jsx)(d.$, {
                                icon: m.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: u,
                                text: h.intl.string(h.t.sB0q4C),
                            }),
                        }),
                  (0, n.jsx)(a.E, {
                      tag: "div",
                      className: r ? void 0 : I.R,
                      "aria-label": r ? s : "",
                      variant: "heading-sm/medium",
                      children: s,
                  }),
              ],
          });
}
var v = i(562153),
    E = i(183555),
    y = i(939496),
    b = i(996988),
    j = i(216057);
function C(t) {
    let { user: e, guildId: i, channelId: s, applicationId: m, isGameRelationship: f = !1, className: g } = t,
        { themeType: I } = (0, y.E)(),
        C = I === b.d.MODAL_V2,
        p = v.Ay.getName(i, s, e),
        { trackUserProfileAction: N } = (0, E.NJ)(),
        { newestAnalyticsLocation: k } = (0, o.Ay)(),
        { acceptFriendRequest: R, cancelFriendRequest: L } = (0, A.I)({
            userId: e.id,
            applicationId: m,
            isGameRelationship: f,
            location: k,
        }),
        P = l.useCallback(() => {
            (R(), N({ action: f ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [R, f, N]),
        S = l.useCallback(() => {
            (L(), N({ action: f ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [L, f, N]),
        U = null != m,
        _ = (0, u.h)(m);
    return U && null == _
        ? null
        : (0, n.jsxs)("div", {
              className: r()(j.kL, g),
              children: [
                  U
                      ? (0, n.jsx)(a.E, {
                            variant: "body-sm/normal",
                            children: h.intl.format(f ? h.t.syHjLL : h.t.V15uUI, {
                                username: p,
                                applicationIcon: () =>
                                    (0, n.jsx)(c.A, { className: j.Gt, game: _, size: c.M.XXSMALL }, _?.id),
                                applicationName: _?.name,
                            }),
                        })
                      : (0, n.jsx)(a.E, {
                            variant: "body-sm/normal",
                            children: h.intl.format(h.t.uIomXw, { username: p }),
                        }),
                  (0, n.jsx)(x, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, n.jsxs)("div", {
                      className: j.UD,
                      children: [
                          (0, n.jsx)(d.$, {
                              variant: C ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: h.intl.string(h.t.Zcibdf),
                          }),
                          (0, n.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: S,
                              text: h.intl.string(h.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
