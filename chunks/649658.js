a.d(t, { y: () => u });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    l = a.n(i),
    o = a(289873),
    s = a(480504),
    d = a(652215),
    c = a(503117);
function u(e) {
    let {
            readyState: t,
            aspectRatio: a,
            placeholder: i,
            placeholderVersion: u,
            placeholderStyle: p,
            children: m,
            disableSpinner: h = !1,
        } = e,
        v = t === d.Rv1.LOADING,
        [_] = r.useState(v),
        [g, f] = r.useState(!1),
        [b] = r.useState(() => Date.now()),
        x = (0, s._)(i, u, _),
        E = t === d.Rv1.READY && Date.now() - b < 200;
    return (
        r.useEffect(() => {
            if (h) return;
            let e = setTimeout(() => {
                f(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [h, _]),
        (0, n.jsxs)("div", {
            className: c.bX,
            style: { aspectRatio: a },
            children: [
                m,
                null != x &&
                    (0, n.jsx)("img", {
                        style: p,
                        className: l()(c.bc, { [c.t5]: v, [c.Jh]: !v, [c.zg]: E }),
                        src: x,
                        alt: "",
                    }),
                h
                    ? null
                    : (0, n.jsx)("div", {
                          "aria-hidden": !(v && g),
                          className: l()(c.oM, { [c.__]: v && g }),
                          children: (0, n.jsx)(o.y, {
                              type: o.t.SPINNING_CIRCLE_SIMPLE,
                              animated: v && g,
                              className: c.Xd,
                          }),
                      }),
            ],
        })
    );
}
