"use strict";
n.d(t, { Ay: () => l, i4: () => d, wR: () => o });
var i = n(582128),
    r = n(621466),
    a = n(535185),
    s = n(148839);
function l() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, a] = i.useState(void 0),
        [s, l] = i.useState(void 0),
        o = i.useRef(null);
    return (
        d(
            o,
            (e) => {
                let { width: t, height: n } = e;
                l(n), a(t);
            },
            t,
        ),
        { ref: o, width: r, height: s }
    );
}
function o() {
    let [e, t] = i.useState(void 0),
        [n, l] = i.useState(void 0),
        o = (0, s.A)((e) => {
            if (!(0, r.vq)(e.target, HTMLElement)) return { scrollWidth: void 0, scrollHeight: void 0 };
            let n = e.target;
            l(n.scrollHeight), t(n.scrollWidth);
        });
    return { ref: (0, a.w)(o, [], { fireOnMount: !0 }), scrollWidth: e, scrollHeight: n };
}
function d(e, t) {
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
    (0, a.g)(e, r, n);
}
