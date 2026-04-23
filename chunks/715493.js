"use strict";
n.d(t, { Mm: () => o, eX: () => u, lV: () => r, p2: () => h, xA: () => i });
var l = n(64700),
    a = n(635377),
    s = n.n(a);
let i = 0,
    r = 4,
    o = 4,
    d = "absolute",
    c = new (s())({ max: 100 });
function u(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: a } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    a = `${t}-${n}-${l}`,
                    s = c.get(a);
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
                                a = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: d, width: n, height: t },
                                { top: 0, left: n + l, position: d, width: n, height: a },
                                { top: a + l, left: n + l, position: d, width: n, height: a },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                a = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: d, width: n, height: a },
                                { top: a + l, left: 0, position: d, width: n, height: a },
                                { top: 0, left: n + l, position: d, width: n, height: a },
                                { top: a + l, left: n + l, position: d, width: n, height: a },
                            ];
                        }
                    })(n, l, t, 4);
                    return c.set(a, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: a }),
        [t, n, a],
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
    let { imageContainerStyles: t, containerWidth: n, containerHeight: a } = e,
        s = l.useRef(m(t)),
        i = l.useRef(n),
        r = l.useRef(a),
        o = n > i.current + 100,
        d = a > r.current + 100;
    return (o || d) && (s.current = m(t)), s.current;
}
