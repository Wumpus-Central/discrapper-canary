n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(110924),
    d = n(410030),
    p = n(616780),
    h = n(100527),
    f = n(906732),
    m = n(527379),
    g = n(687158),
    b = n(184301),
    _ = n(502762),
    C = n(271383),
    y = n(594174),
    x = n(189357),
    v = n(718617),
    j = n(327250),
    O = n(50767);
function E(e) {
    let { userId: t, guildId: n, onClose: l, className: E, infoPanelClassName: N, style: I } = e,
        P = (0, x.m)(n),
        S = (0, a.e7)([y.default], () => y.default.getUser(t), [t]),
        Z = (0, a.e7)([C.ZP], () => C.ZP.getMember(n, t), [n, t]),
        [T, A] = i.useState(null == S || null == Z),
        w = (0, u.Z)(Z),
        R = i.useRef(null),
        { analyticsLocations: M } = (0, f.ZP)(h.Z.GUILD_MEMBER_MOD_VIEW),
        k = (0, g.ZP)(t, n),
        L = (0, d.ZP)();
    return (i.useEffect(() => {
        P || l();
    }, [P, l]),
    i.useEffect(() => {
        null == w || null != Z || T || l();
    }, [T, Z, l, w]),
    i.useEffect(() => {
        null != S && null != Z && A(!1);
    }, [S, Z]),
    i.useEffect(() => {
        let e = null == Z;
        return (
            !T && e && (R.current = window.setTimeout(l, 500)),
            () => {
                null != R.current && window.clearTimeout(R.current);
            }
        );
    }, [T, Z, l]),
    (0, p.$)({ [n]: [t] }),
    i.useEffect(() => {
        !(async function () {
            let e = [
                c.Z.requestMembersById(n, [t]),
                (0, m.nb)(n, [t]),
                (0, b.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            await Promise.all(e), A(!1);
        })();
    }, [n, t]),
    P)
        ? T || null == S || null == Z
            ? (0, r.jsx)('div', {
                  className: o()(O.sidebarContainer, O.loadingContainer, E),
                  style: I,
                  children: (0, r.jsx)(s.$jN, {
                      animated: !0,
                      type: T ? s.$jN.Type.SPINNING_CIRCLE : s.$jN.Type.CHASING_DOTS
                  })
              })
            : (0, r.jsx)(f.Gt, {
                  value: M,
                  children: (0, r.jsx)('div', {
                      className: o()(O.sidebarContainer, E),
                      style: I,
                      children: (0, r.jsx)(_.Z, {
                          user: S,
                          displayProfile: k,
                          profileType: null,
                          themeOverride: L,
                          forceShowPremium: !0,
                          className: O.profileThemedContainer,
                          children: (0, r.jsxs)('div', {
                              className: O.innerContainer,
                              children: [
                                  (0, r.jsx)(j.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: l
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: l,
                                      className: N
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
