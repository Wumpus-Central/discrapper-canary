"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(860923),
    s = n(607376);
let l = [0, 68, 123, 61, 165, 224, 181],
    o = [684, 720, 774, 798, 720, 803, 815],
    d = function () {
        let e = (0, a.A)(),
            t = r.useMemo(() => (null == e ? [] : Object.values(e?.clouds)), [e]);
        return (0, i.jsx)("div", {
            className: s.P,
            children: t.map((e, t) => {
                let n = t > l.length - 1 ? 0 : t;
                return (0, i.jsx)(
                    "img",
                    { className: s.g, style: { top: o[n], animationDelay: `${l[n]}s` }, src: e, alt: "Cloud" },
                    e,
                );
            }),
        });
    };
