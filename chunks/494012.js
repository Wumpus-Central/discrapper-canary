"use strict";
n.d(t, { Ay: () => o, i4: () => u, wR: () => l });
var i = n(64700),
    r = n(621466),
    s = n(535185),
    a = n(148839);
function o() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, s] = i.useState(void 0),
        [a, o] = i.useState(void 0),
        l = i.useRef(null);
    return (
        u(
            l,
            (e) => {
                let { width: t, height: n } = e;
                o(n), s(t);
            },
            t,
        ),
        { ref: l, width: r, height: a }
    );
}
function l() {
    let [e, t] = i.useState(void 0),
        [n, o] = i.useState(void 0),
        l = (0, a.A)((e) => {
            if (!(0, r.vq)(e.target, HTMLElement)) return { scrollWidth: void 0, scrollHeight: void 0 };
            let n = e.target;
            o(n.scrollHeight), t(n.scrollWidth);
        });
    return { ref: (0, s.w)(l, [], { fireOnMount: !0 }), scrollWidth: e, scrollHeight: n };
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useCallback(
            (n) => {
                let i = n?.borderBoxSize?.[0]?.inlineSize,
                    r = n?.borderBoxSize?.[0]?.blockSize;
                if (null == i || null == r) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == i && (i = parseFloat(e.width ?? "0")), null == r && (r = parseFloat(e.height ?? "0"));
                    }
                }
                t({ width: i, height: r });
            },
            [e, t],
        );
    (0, s.g)(e, r, n);
}
