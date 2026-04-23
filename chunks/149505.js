"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(860923),
    a = n(460472);
let o = [0, 68, 123, 61, 165, 224, 181],
    l = [684, 720, 774, 798, 720, 803, 815],
    u = () => {
        let e = (0, s.A)(),
            t = i.useMemo(() => (null == e ? [] : Object.values(e?.clouds)), [e]);
        return (0, r.jsx)("div", {
            className: a.P,
            children: t.map((e, t) => {
                let n = t > o.length - 1 ? 0 : t;
                return (0, r.jsx)(
                    "img",
                    { className: a.g, style: { top: l[n], animationDelay: `${o[n]}s` }, src: e, alt: "Cloud" },
                    e,
                );
            }),
        });
    };
