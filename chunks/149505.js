"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(860923),
    a = n(460472);
let o = [0, 68, 123, 61, 165, 224, 181],
    l = [684, 720, 774, 798, 720, 803, 815],
    u = () => {
        let e = (0, s.A)(),
            t = r.useMemo(() => (null == e ? [] : Object.values(e?.clouds)), [e]);
        return (0, i.jsx)("div", {
            className: a.P,
            children: t.map((e, t) => {
                let n = t > o.length - 1 ? 0 : t;
                return (0, i.jsx)(
                    "img",
                    { className: a.g, style: { top: l[n], animationDelay: `${o[n]}s` }, src: e, alt: "Cloud" },
                    e,
                );
            }),
        });
    };
