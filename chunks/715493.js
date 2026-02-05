"use strict";
n.d(t, { Mm: () => o, eX: () => u, lV: () => r, p2: () => h, xA: () => a });
var l = n(64700),
    i = n(635377),
    s = n.n(i);
let a = 0,
    r = 4,
    o = 4,
    d = "absolute",
    c = new (s())({ max: 100 });
function u(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: i } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = c.get(i);
                if (null != s) return s;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: d }];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                { top: 0, left: 0, position: d, width: n, height: t },
                                { top: 0, left: n + l, position: d, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: d, width: n, height: t },
                                { top: 0, left: n + l, position: d, width: n, height: i },
                                { top: i + l, left: n + l, position: d, width: n, height: i },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: d, width: n, height: i },
                                { top: i + l, left: 0, position: d, width: n, height: i },
                                { top: 0, left: n + l, position: d, width: n, height: i },
                                { top: i + l, left: n + l, position: d, width: n, height: i },
                            ];
                        }
                    })(n, l, t, 4);
                    return c.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: i }),
        [t, n, i],
    );
}
function m(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
function h(e) {
    let { imageContainerStyles: t, containerWidth: n, containerHeight: i } = e,
        s = l.useRef(m(t)),
        a = l.useRef(n),
        r = l.useRef(i),
        o = n > a.current + 100,
        d = i > r.current + 100;
    return (o || d) && (s.current = m(t)), s.current;
}
