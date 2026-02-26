"use strict";
n.d(t, { y: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(480504),
    u = n(652215),
    c = n(393754);
let d = 200;
function _(e) {
    let {
            readyState: t,
            aspectRatio: n,
            placeholder: s,
            placeholderVersion: _,
            placeholderStyle: f,
            children: p,
            disableSpinner: h = !1,
        } = e,
        m = t === u.Rv1.LOADING,
        [E] = i.useState(m),
        [g, A] = i.useState(!1),
        [I] = i.useState(() => Date.now()),
        T = (0, l._)(s, _, E),
        S = t === u.Rv1.READY && Date.now() - I < d;
    return (
        i.useEffect(() => {
            if (h) return;
            let e = setTimeout(() => {
                A(!0);
            }, 2e3);
            return () => {
                clearTimeout(e);
            };
        }, [h, E]),
        (0, r.jsxs)("div", {
            className: c.bX,
            style: { aspectRatio: n },
            children: [
                p,
                null != T &&
                    (0, r.jsx)("img", {
                        style: f,
                        className: a()(c.bc, { [c.t5]: m, [c.Jh]: !m, [c.zg]: S }),
                        src: T,
                        alt: "",
                    }),
                h
                    ? null
                    : (0, r.jsx)("div", {
                          "aria-hidden": !(m && g),
                          className: a()(c.oM, { [c.__]: m && g }),
                          children: (0, r.jsx)(o.y$y, {
                              type: o.tVU.SPINNING_CIRCLE_SIMPLE,
                              animated: m && g,
                              className: c.Xd,
                          }),
                      }),
            ],
        })
    );
}
