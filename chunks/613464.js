t.d(e, { Z: () => H }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    s = t(442837),
    a = t(481060),
    o = t(749210),
    g = t(110924),
    c = t(410030),
    f = t(616780),
    v = t(100527),
    h = t(906732),
    u = t(527379),
    d = t(687158),
    E = t(184301),
    C = t(502762),
    B = t(271383),
    w = t(594174),
    D = t(189357),
    M = t(718617),
    p = t(327250),
    I = t(345226);
function H(A) {
    let { userId: e, guildId: t, onClose: l, className: H, infoPanelClassName: b, style: Q } = A,
        O = (0, D.m)(t),
        P = (0, s.e7)([w.default], () => w.default.getUser(e), [e]),
        V = (0, s.e7)([B.ZP], () => B.ZP.getMember(t, e), [t, e]),
        [j, m] = r.useState(null == P || null == V),
        T = (0, g.Z)(V),
        y = r.useRef(null),
        { analyticsLocations: L } = (0, h.ZP)(v.Z.GUILD_MEMBER_MOD_VIEW),
        x = (0, d.ZP)(e, t),
        N = (0, c.ZP)();
    return (r.useEffect(() => {
        O || l();
    }, [O, l]),
    r.useEffect(() => {
        null == T || null != V || j || l();
    }, [j, V, l, T]),
    r.useEffect(() => {
        null != P && null != V && m(!1);
    }, [P, V]),
    r.useEffect(() => {
        let A = null == V;
        return (
            !j && A && (y.current = window.setTimeout(l, 500)),
            () => {
                null != y.current && window.clearTimeout(y.current);
            }
        );
    }, [j, V, l]),
    (0, f.$)({ [t]: [e] }),
    r.useEffect(() => {
        !(async function () {
            let A = [
                o.Z.requestMembersById(t, [e]),
                (0, u.nb)(t, [e]),
                (0, E.Z)(e, void 0, {
                    guildId: t,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(A), m(!1);
        })();
    }, [t, e]),
    O)
        ? j || null == P || null == V
            ? (0, n.jsx)("div", {
                  className: i()(I.sidebarContainer, I.loadingContainer, H),
                  style: Q,
                  children: (0, n.jsx)(a.$jN, {
                      animated: !0,
                      type: j ? a.$jN.Type.SPINNING_CIRCLE : a.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, n.jsx)(h.Gt, {
                  value: L,
                  children: (0, n.jsx)("div", {
                      className: i()(I.sidebarContainer, H),
                      style: Q,
                      children: (0, n.jsx)(C.Z, {
                          user: P,
                          displayProfile: x,
                          themeType: null,
                          themeOverride: N,
                          forceShowPremium: !0,
                          className: I.profileThemedContainer,
                          children: (0, n.jsxs)("div", {
                              className: I.innerContainer,
                              children: [
                                  (0, n.jsx)(p.ZP, {
                                      userId: e,
                                      guildId: t,
                                      onClose: l,
                                  }),
                                  (0, n.jsx)(M.Z, {
                                      userId: e,
                                      guildId: t,
                                      onClose: l,
                                      className: b,
                                  }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
