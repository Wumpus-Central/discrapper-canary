n.d(t, { Z: () => c });
var i = n(54381),
    r = n(473749),
    l = n(195045),
    a = n(678668);
let o = [0, 68, 123, 61, 165, 224, 181],
    s = [684, 720, 774, 798, 720, 803, 815],
    c = () => {
        let e = (0, l.Z)(),
            t = r.useMemo(() => (null == e ? [] : Object.values(null == e ? void 0 : e.clouds)), [e]);
        return (0, i.jsx)("div", {
            className: a.clouds,
            children: t.map((e, t) => {
                let n = t > o.length - 1 ? 0 : t;
                return (0, i.jsx)(
                    "img",
                    {
                        className: a.cloud,
                        style: {
                            top: s[n],
                            animationDelay: "".concat(o[n], "s"),
                        },
                        src: e,
                        alt: "Cloud",
                    },
                    e,
                );
            }),
        });
    };
