"use strict";
n.d(t, { y: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(289873),
    l = n(480504),
    u = n(652215),
    c = n(503117);
function d(e) {
    let {
            readyState: t,
            aspectRatio: n,
            placeholder: s,
            placeholderVersion: d,
            placeholderStyle: _,
            children: f,
            disableSpinner: p = !1,
        } = e,
        h = t === u.Rv1.LOADING,
        [E] = i.useState(h),
        [m, g] = i.useState(!1),
        [A] = i.useState(() => Date.now()),
        I = (0, l._)(s, d, E),
        T = t === u.Rv1.READY && Date.now() - A < 200;
    return (
        i.useEffect(() => {
            if (p) return;
            let e = setTimeout(() => {
                g(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [p, E]),
        (0, r.jsxs)("div", {
            className: c.bX,
            style: { aspectRatio: n },
            children: [
                f,
                null != I &&
                    (0, r.jsx)("img", {
                        style: _,
                        className: a()(c.bc, { [c.t5]: h, [c.Jh]: !h, [c.zg]: T }),
                        src: I,
                        alt: "",
                    }),
                p
                    ? null
                    : (0, r.jsx)("div", {
                          "aria-hidden": !(h && m),
                          className: a()(c.oM, { [c.__]: h && m }),
                          children: (0, r.jsx)(o.y, {
                              type: o.t.SPINNING_CIRCLE_SIMPLE,
                              animated: h && m,
                              className: c.Xd,
                          }),
                      }),
            ],
        })
    );
}
