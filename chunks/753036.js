n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(846857),
    i = n(311907),
    s = n(397927),
    o = n(796104),
    c = n(854987),
    u = n(719718),
    d = n(751758),
    m = n(778007),
    f = n(308021);

function p() {
    let e = (0, l.useContext)(c.P),
        t = (0, s.rdh)(e.primaryColor).hex(),
        n = (0, l.useRef)(null),
        { volume: p, isMuted: h } = (0, i.cf)([u.A], () => ({
            volume: u.A.volume,
            isMuted: u.A.isMuted,
        })),
        [b, g] = (0, l.useState)(!1),
        [x, y] = (0, l.useState)(!1),
        v = (0, l.useRef)(-1),
        j = h ? 0 : 100 * p,
        C = b || x;
    (0, l.useEffect)(() => {
        null != n.current && (n.current.volume = p);
    }, [p]);
    let _ = h ? s._RO : j > 90 ? s.HKD : s.S24;
    return (0, r.jsxs)("div", {
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        className: d.kL,
        children: [
            (0, r.jsx)(s.DUT, {
                onClick: o.K8,
                className: m.b,
                style: {
                    color: t,
                    borderLeft: C ? 0 : void 0,
                },
                children: (0, r.jsx)(_, {
                    colorClass: f.d7,
                    color: t,
                }),
            }),
            C
                ? (0, r.jsx)("div", {
                      className: d.xJ,
                      style: {
                          borderColor: t,
                      },
                      children: (0, r.jsx)(s.Apm, {
                          initialValue: j,
                          minValue: 0,
                          maxValue: 100,
                          asValueChanges: (e) => {
                              (0, o.ls)(e / 100),
                                  y(!0),
                                  clearTimeout(v.current),
                                  (v.current = setTimeout(() => {
                                      y(!1);
                                  }, 1e3));
                          },
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
                muted: h,
                children: (0, r.jsx)("source", {
                    src: a.A,
                }),
            }),
        ],
    });
}
