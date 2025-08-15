t.d(e, { Z: () => H }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    a = t(442837),
    s = t(481060),
    o = t(749210),
    g = t(110924),
    c = t(410030),
    f = t(616780),
    v = t(100527),
    u = t(906732),
    h = t(527379),
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
    let { userId: e, guildId: t, onClose: l, className: H, infoPanelClassName: b, style: O } = A,
        Q = (0, D.m)(t),
        P = (0, a.e7)([w.default], () => w.default.getUser(e), [e]),
        j = (0, a.e7)([B.ZP], () => B.ZP.getMember(t, e), [t, e]),
        [V, m] = r.useState(null == P || null == j),
        T = (0, g.Z)(j),
        y = r.useRef(null),
        { analyticsLocations: L } = (0, u.ZP)(v.Z.GUILD_MEMBER_MOD_VIEW),
        x = (0, d.ZP)(e, t),
        N = (0, c.ZP)();
    return (r.useEffect(() => {
        Q || l();
    }, [Q, l]),
    r.useEffect(() => {
        null == T || null != j || V || l();
    }, [V, j, l, T]),
    r.useEffect(() => {
        null != P && null != j && m(!1);
    }, [P, j]),
    r.useEffect(() => {
        let A = null == j;
        return (
            !V && A && (y.current = window.setTimeout(l, 500)),
            () => {
                null != y.current && window.clearTimeout(y.current);
            }
        );
    }, [V, j, l]),
    (0, f.$)({ [t]: [e] }),
    r.useEffect(() => {
        !(async function () {
            let A = [
                o.Z.requestMembersById(t, [e]),
                (0, h.nb)(t, [e]),
                (0, E.Z)(e, void 0, {
                    guildId: t,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(A), m(!1);
        })();
    }, [t, e]),
    Q)
        ? V || null == P || null == j
            ? (0, n.jsx)("div", {
                  className: i()(I.sidebarContainer, I.loadingContainer, H),
                  style: O,
                  children: (0, n.jsx)(s.$jN, {
                      animated: !0,
                      type: V ? s.$jN.Type.SPINNING_CIRCLE : s.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, n.jsx)(u.Gt, {
                  value: L,
                  children: (0, n.jsx)("div", {
                      className: i()(I.sidebarContainer, H),
                      style: O,
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
