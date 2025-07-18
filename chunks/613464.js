(t.d(e, { Z: () => H }), t(388685));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(442837),
    a = t(481060),
    o = t(749210),
    g = t(110924),
    f = t(410030),
    c = t(616780),
    v = t(100527),
    h = t(906732),
    u = t(527379),
    E = t(687158),
    d = t(184301),
    C = t(502762),
    B = t(271383),
    w = t(594174),
    D = t(189357),
    M = t(718617),
    I = t(327250),
    p = t(50767);
function H(A) {
    let { userId: e, guildId: t, onClose: l, className: H, infoPanelClassName: b, style: Q } = A,
        O = (0, D.m)(t),
        P = (0, s.e7)([w.default], () => w.default.getUser(e), [e]),
        V = (0, s.e7)([B.ZP], () => B.ZP.getMember(t, e), [t, e]),
        [j, T] = r.useState(null == P || null == V),
        y = (0, g.Z)(V),
        m = r.useRef(null),
        { analyticsLocations: L } = (0, h.ZP)(v.Z.GUILD_MEMBER_MOD_VIEW),
        x = (0, E.ZP)(e, t),
        Z = (0, f.ZP)();
    return (r.useEffect(() => {
        O || l();
    }, [O, l]),
    r.useEffect(() => {
        null == y || null != V || j || l();
    }, [j, V, l, y]),
    r.useEffect(() => {
        null != P && null != V && T(!1);
    }, [P, V]),
    r.useEffect(() => {
        let A = null == V;
        return (
            !j && A && (m.current = window.setTimeout(l, 500)),
            () => {
                null != m.current && window.clearTimeout(m.current);
            }
        );
    }, [j, V, l]),
    (0, c.$)({ [t]: [e] }),
    r.useEffect(() => {
        !(async function () {
            let A = [
                o.Z.requestMembersById(t, [e]),
                (0, u.nb)(t, [e]),
                (0, d.Z)(e, void 0, {
                    guildId: t,
                    dispatchWait: !0
                })
            ];
            (await Promise.all(A), T(!1));
        })();
    }, [t, e]),
    O)
        ? j || null == P || null == V
            ? (0, n.jsx)('div', {
                  className: i()(p.sidebarContainer, p.loadingContainer, H),
                  style: Q,
                  children: (0, n.jsx)(a.$jN, {
                      animated: !0,
                      type: j ? a.$jN.Type.SPINNING_CIRCLE : a.$jN.Type.CHASING_DOTS
                  })
              })
            : (0, n.jsx)(h.Gt, {
                  value: L,
                  children: (0, n.jsx)('div', {
                      className: i()(p.sidebarContainer, H),
                      style: Q,
                      children: (0, n.jsx)(C.Z, {
                          user: P,
                          displayProfile: x,
                          themeType: null,
                          themeOverride: Z,
                          forceShowPremium: !0,
                          className: p.profileThemedContainer,
                          children: (0, n.jsxs)('div', {
                              className: p.innerContainer,
                              children: [
                                  (0, n.jsx)(I.ZP, {
                                      userId: e,
                                      guildId: t,
                                      onClose: l
                                  }),
                                  (0, n.jsx)(M.Z, {
                                      userId: e,
                                      guildId: t,
                                      onClose: l,
                                      className: b
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
