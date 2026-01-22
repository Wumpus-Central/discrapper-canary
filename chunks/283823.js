n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(250527),
    f = n(837011),
    p = n(90084),
    _ = n(635853),
    h = n(42780),
    m = n(576055),
    g = n(363551);
let E = 50001;

function b(e) {
    let { guildId: t, name: n, setPopoutRef: a, onClose: b } = e,
        { analyticsLocations: y } = (0, u.Ay)(c.A.GUILD_PROFILE),
        { guildProfile: O, fetchGuildProfile: A, fetchStatus: v } = (0, p.u)(t),
        S = (0, o.bG)([f.A], () => f.A.getErrorCode(t)),
        I = i.useRef(null),
        T = i.useCallback(() => {
            A(!0);
        }, [A]);
    i.useEffect(() => {
        A();
    }, [A]),
        i.useEffect(() => {
            (0, d.sf)(t, y);
        }, [t, y]),
        i.useEffect(() => {
            null == a || a(null == I ? void 0 : I.current);
        }, [I, a]);
    let C = i.useMemo(
        () =>
            v === f.X.NOT_FETCHED || v === f.X.FETCHING
                ? (0, r.jsx)("div", {
                      className: s()(g.k, g.d),
                      children: (0, r.jsx)(l.y$y, {}),
                  })
                : null == O && S === E
                  ? (0, r.jsx)("div", {
                        className: g.k,
                        children: (0, r.jsx)(m.A, {
                            guildId: t,
                            name: n,
                        }),
                    })
                  : null == O
                    ? (0, r.jsx)("div", {
                          className: g.k,
                          children: (0, r.jsx)(_.A, {
                              name: n,
                              onRetry: T,
                          }),
                      })
                    : (0, r.jsx)("div", {
                          className: g.k,
                          children: (0, r.jsx)(h.Ay, {
                              profile: O,
                              onClose: b,
                          }),
                      }),
        [v, O, S, t, n, T, b],
    );
    return (0, r.jsx)(l.lGe, {
        ref: I,
        "aria-label": null == O ? void 0 : O.name,
        children: C,
    });
}
