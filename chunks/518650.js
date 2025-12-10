n.d(t, { Z: () => A }), n(388685);
var r = n(473749),
    i = n(21890),
    a = n(854062),
    o = n(481743),
    s = n(747732),
    l = n(38581),
    c = n(391767),
    u = n(949875),
    d = n(419763),
    f = n(518711),
    p = n(396754),
    _ = n(193071),
    m = n(544891),
    h = n(5888),
    g = n(824480),
    E = n(167262),
    b = n(550770),
    y = n(807808),
    O = n(464633),
    v = n(270586),
    S = n(868981),
    I = n(918746),
    T = n(228137);
let C = [u.Z, d.Z, p.Z, _.Z, f.Z, E.Z, b.Z, y.Z, O.Z, v.Z, S.Z, I.Z, T.Z, a.Z, c.Z, l.Z, i.Z, o.Z, s.Z];
function A() {
    let e = r.useRef(0),
        t = r.useRef(!0),
        n = (0, g.d)(),
        i = n === h.p.SUCCESS || n === h.p.ERROR,
        [a, o] = r.useState(!1);
    return (
        (0, r.useEffect)(() => {
            C.forEach((n) =>
                m.tn
                    .get({
                        url: n,
                        rejectWithError: !0,
                    })
                    .then(() => {
                        t.current && ((e.current += 1), e.current === C.length && o(!0));
                    }),
            );
        }, []),
        (0, r.useEffect)(
            () => () => {
                t.current = !1;
            },
            [],
        ),
        a && i
    );
}
