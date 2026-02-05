"use strict";
n.d(t, { Ay: () => o, i4: () => u, wR: () => l });
var r = n(64700),
    i = n(621466),
    a = n(535185),
    s = n(148839);
function o() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, a] = r.useState(void 0),
        [s, o] = r.useState(void 0),
        l = r.useRef(null);
    return (
        u(
            l,
            (e) => {
                let { width: t, height: n } = e;
                o(n), a(t);
            },
            t,
        ),
        { ref: l, width: i, height: s }
    );
}
function l() {
    let [e, t] = r.useState(void 0),
        [n, o] = r.useState(void 0),
        l = (0, s.A)((e) => {
            if (!(0, i.vq)(e.target, HTMLElement)) return { scrollWidth: void 0, scrollHeight: void 0 };
            let n = e.target;
            o(n.scrollHeight), t(n.scrollWidth);
        });
    return { ref: (0, a.w)(l, [], { fireOnMount: !0 }), scrollWidth: e, scrollHeight: n };
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = r.useCallback(
            (n) => {
                let r = n?.borderBoxSize?.[0]?.inlineSize,
                    i = n?.borderBoxSize?.[0]?.blockSize;
                if (null == r || null == i) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == r && (r = parseFloat(e.width ?? "0")), null == i && (i = parseFloat(e.height ?? "0"));
                    }
                }
                t({ width: r, height: i });
            },
            [e, t],
        );
    (0, a.g)(e, i, n);
}
