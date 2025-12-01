n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(699553),
    f = n(314852),
    p = n(65361),
    _ = n(878184),
    m = n(798476),
    h = n(423252),
    g = n(626807);
let E = 50001;
function b(e) {
    let { guildId: t, name: n, setPopoutRef: a, onClose: b } = e,
        { analyticsLocations: y } = (0, u.ZP)(c.Z.GUILD_PROFILE),
        { guildProfile: O, fetchGuildProfile: v, fetchStatus: S } = (0, p.u)(t),
        I = (0, s.e7)([f.Z], () => f.Z.getErrorCode(t)),
        T = i.useRef(null),
        A = i.useCallback(() => {
            v(!0);
        }, [v]);
    i.useEffect(() => {
        v();
    }, [v]),
        i.useEffect(() => {
            (0, d.vb)(t, y);
        }, [t, y]),
        i.useEffect(() => {
            null == a || a(null == T ? void 0 : T.current);
        }, [T, a]);
    let C = i.useMemo(
        () =>
            S === f.a.NOT_FETCHED || S === f.a.FETCHING
                ? (0, r.jsx)("div", {
                      className: o()(g.container, g.spinnerContainer),
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : null == O && I === E
                  ? (0, r.jsx)("div", {
                        className: g.container,
                        children: (0, r.jsx)(h.Z, {
                            guildId: t,
                            name: n,
                        }),
                    })
                  : null == O
                    ? (0, r.jsx)("div", {
                          className: g.container,
                          children: (0, r.jsx)(_.Z, {
                              name: n,
                              onRetry: A,
                          }),
                      })
                    : (0, r.jsx)("div", {
                          className: g.container,
                          children: (0, r.jsx)(m.ZP, {
                              profile: O,
                              onClose: b,
                          }),
                      }),
        [S, O, I, t, n, A, b],
    );
    return (0, r.jsx)(l.VqE, {
        ref: T,
        "aria-label": null == O ? void 0 : O.name,
        children: C,
    });
}
