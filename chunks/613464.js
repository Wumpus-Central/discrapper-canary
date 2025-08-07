n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(110924),
    d = n(410030),
    E = n(616780),
    _ = n(100527),
    A = n(906732),
    T = n(527379),
    m = n(687158),
    I = n(184301),
    g = n(502762),
    f = n(271383),
    N = n(594174),
    h = n(189357),
    O = n(718617),
    p = n(327250),
    R = n(50767);
function S(e) {
    let { userId: t, guildId: n, onClose: s, className: S, infoPanelClassName: C, style: v } = e,
        D = (0, h.m)(n),
        b = (0, a.e7)([N.default], () => N.default.getUser(t), [t]),
        L = (0, a.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]),
        [x, U] = l.useState(null == b || null == L),
        M = (0, c.Z)(L),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, m.ZP)(t, n),
        w = (0, d.ZP)();
    return (l.useEffect(() => {
        D || s();
    }, [D, s]),
    l.useEffect(() => {
        null == M || null != L || x || s();
    }, [x, L, s, M]),
    l.useEffect(() => {
        null != b && null != L && U(!1);
    }, [b, L]),
    l.useEffect(() => {
        let e = null == L;
        return (
            !x && e && (P.current = window.setTimeout(s, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [x, L, s]),
    (0, E.$)({ [n]: [t] }),
    l.useEffect(() => {
        !(async function () {
            let e = [
                u.Z.requestMembersById(n, [t]),
                (0, T.nb)(n, [t]),
                (0, I.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(e), U(!1);
        })();
    }, [n, t]),
    D)
        ? x || null == b || null == L
            ? (0, r.jsx)("div", {
                  className: i()(R.sidebarContainer, R.loadingContainer, S),
                  style: v,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)("div", {
                      className: i()(R.sidebarContainer, S),
                      style: v,
                      children: (0, r.jsx)(g.Z, {
                          user: b,
                          displayProfile: y,
                          themeType: null,
                          themeOverride: w,
                          forceShowPremium: !0,
                          className: R.profileThemedContainer,
                          children: (0, r.jsxs)("div", {
                              className: R.innerContainer,
                              children: [
                                  (0, r.jsx)(p.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s,
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s,
                                      className: C,
                                  }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
