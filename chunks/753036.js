n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(846857),
    s = n(311907),
    o = n(397927),
    l = n(796104),
    c = n(854987),
    u = n(719718),
    d = n(751758),
    f = n(778007),
    p = n(308021);
let _ = 1e3;

function h() {
    let e = (0, i.useContext)(c.P),
        t = (0, o.rdh)(e.primaryColor).hex(),
        n = (0, i.useRef)(null),
        { volume: h, isMuted: m } = (0, s.cf)([u.A], () => ({
            volume: u.A.volume,
            isMuted: u.A.isMuted,
        })),
        [g, E] = (0, i.useState)(!1),
        [b, y] = (0, i.useState)(!1),
        O = (0, i.useRef)(-1),
        A = m ? 0 : 100 * h,
        v = g || b,
        S = (e) => {
            (0, l.ls)(e / 100),
                y(!0),
                clearTimeout(O.current),
                (O.current = setTimeout(() => {
                    y(!1);
                }, _));
        };
    (0, i.useEffect)(() => {
        null != n.current && (n.current.volume = h);
    }, [h]);
    let I = m ? o._RO : A > 90 ? o.HKD : o.S24;
    return (0, r.jsxs)("div", {
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        className: d.kL,
        children: [
            (0, r.jsx)(o.DUT, {
                onClick: l.K8,
                className: f.b,
                style: {
                    color: t,
                    borderLeft: v ? 0 : void 0,
                },
                children: (0, r.jsx)(I, {
                    colorClass: p.d7,
                    color: t,
                }),
            }),
            v
                ? (0, r.jsx)("div", {
                      className: d.xJ,
                      style: {
                          borderColor: t,
                      },
                      children: (0, r.jsx)(o.Apm, {
                          initialValue: A,
                          minValue: 0,
                          maxValue: 100,
                          asValueChanges: S,
                          grabberClassName: d.Ub,
                          fillStyles: {
                              backgroundColor: t,
                              transition: "background-color 0.5s ease",
                          },
                      }),
                  })
                : null,
            (0, r.jsx)("audio", {
                ref: n,
                autoPlay: !0,
                loop: !0,
                muted: m,
                children: (0, r.jsx)("source", {
                    src: a.A,
                }),
            }),
        ],
    });
}
