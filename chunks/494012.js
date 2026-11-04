var i = l(582128),
    r = l(621466),
    o = l(535185),
    n = l(148839);
function u(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useCallback(
            (l) => {
                let i = l?.borderBoxSize?.[0]?.inlineSize,
                    r = l?.borderBoxSize?.[0]?.blockSize;
                if (null == i || null == r) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        (null == i && (i = parseFloat(e.width ?? "0")), null == r && (r = parseFloat(e.height ?? "0")));
                    }
                }
                t({ width: i, height: r });
            },
            [e, t],
        );
    (0, o.g)(e, r, l);
}
l.d(
    t,
    {},
    {
        Ay: function () {
            for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
            let [r, o] = i.useState(void 0),
                [n, d] = i.useState(void 0),
                a = i.useRef(null);
            return (
                u(
                    a,
                    (e) => {
                        let { width: t, height: l } = e;
                        (d(l), o(t));
                    },
                    t,
                ),
                { ref: a, width: r, height: n }
            );
        },
        i4: u,
        wR: function () {
            let [e, t] = i.useState(void 0),
                [l, u] = i.useState(void 0),
                d = (0, n.A)((e) => {
                    if (!(0, r.vq)(e.target, HTMLElement)) return { scrollWidth: void 0, scrollHeight: void 0 };
                    let l = e.target;
                    (u(l.scrollHeight), t(l.scrollWidth));
                });
            return { ref: (0, o.w)(d, [], { fireOnMount: !0 }), scrollWidth: e, scrollHeight: l };
        },
    },
);
