n.d(t, {
    Mm: () => c,
    eX: () => u,
    lV: () => s,
    p2: () => h,
    xA: () => i,
});
var l = n(64700),
    r = n(635377),
    a = n.n(r);
let i = 0,
    s = 4,
    c = 4,
    o = "absolute",
    d = new (a())({ max: 100 });
function u(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: r } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    r = "".concat(t, "-").concat(n, "-").concat(l),
                    a = d.get(r);
                if (null != a) return a;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n)
                            return [
                                {
                                    width: e,
                                    height: t,
                                    top: 0,
                                    left: 0,
                                    position: o,
                                },
                            ];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: o,
                                    width: n,
                                    height: t,
                                },
                                {
                                    top: 0,
                                    left: n + l,
                                    position: o,
                                    width: n,
                                    height: t,
                                },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                r = Math.ceil((t - l) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: o,
                                    width: n,
                                    height: t,
                                },
                                {
                                    top: 0,
                                    left: n + l,
                                    position: o,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: r + l,
                                    left: n + l,
                                    position: o,
                                    width: n,
                                    height: r,
                                },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                r = Math.ceil((t - l) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: o,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: r + l,
                                    left: 0,
                                    position: o,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: 0,
                                    left: n + l,
                                    position: o,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: r + l,
                                    left: n + l,
                                    position: o,
                                    width: n,
                                    height: r,
                                },
                            ];
                        }
                    })(n, l, t, 4);
                    return d.set(r, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: r,
            }),
        [t, n, r],
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
    let { imageContainerStyles: t, containerWidth: n, containerHeight: r } = e,
        a = l.useRef(m(t)),
        i = l.useRef(n),
        s = l.useRef(r),
        c = n > i.current + 100,
        o = r > s.current + 100;
    return (c || o) && (a.current = m(t)), a.current;
}
