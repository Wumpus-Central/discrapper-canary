n.d(t, { Ok: () => E, se: () => c, tj: () => _ });
var i = n(582128),
    r = n(557361);
let a = "u" < typeof document ? void 0 : document,
    s = null == a ? () => void 0 : r.Ay,
    l = null == a ? i.useEffect : i.useLayoutEffect,
    o = 0,
    d = new Set();
function c() {
    return r.rx.isActive();
}
let u = { current: !0 };
function _(e) {
    var t, n, r;
    let c,
        _,
        E,
        A,
        h,
        I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((t = I.returnRef),
        (n = !0 === I.disable),
        (r = !0 === I.disableReturn),
        (c = i.useRef(a?.activeElement)),
        (_ = i.useRef(null)),
        (E = i.useRef(t)),
        (A = i.useRef(n)),
        (h = i.useRef(r)),
        l(() => {
            (null != e.current && (_.current = e.current), (E.current = t), (A.current = n), (h.current = r));
        }),
        l(() => {
            let e = null == _.current ? null : { containerElementRef: _, disabledRef: A, sequence: o++ };
            return (
                null != e && d.add(e),
                () => {
                    if (!A.current && !h.current) {
                        let t = E.current?.current ?? null;
                        if (null != (t ?? c.current)) {
                            let n = !0,
                                i = [],
                                r = _.current?.ownerDocument ?? a,
                                s = r?.activeElement;
                            if (
                                ((i =
                                    null != s && null != e
                                        ? Array.from(d).filter((t) => {
                                              let { containerElementRef: n, disabledRef: i, sequence: r } = t;
                                              return !i.current && r > e.sequence && n.current?.contains(s) === !0;
                                          })
                                        : []),
                                null == t)
                            ) {
                                let e = null == s || s === r?.body,
                                    t = null != s && _.current?.contains(s) === !0,
                                    a = null == _.current;
                                n = e || t || i.length > 0 || a;
                            }
                            n &&
                                requestAnimationFrame(() => {
                                    let t = E.current?.current ?? null,
                                        n = t?.isConnected ? t : c.current,
                                        r = _.current?.ownerDocument ?? a,
                                        s = r?.activeElement;
                                    Array.from(d).some(
                                        (t) =>
                                            t !== e && null != s && t.containerElementRef.current?.contains(s) === !0,
                                    ) ||
                                        null == n ||
                                        !n.isConnected ||
                                        i.some((e) => d.has(e) && !e.disabledRef.current) ||
                                        (t?.isConnected ? n.focus() : n.focus({ preventScroll: !0 }));
                                });
                        }
                    }
                    null != e && d.delete(e);
                }
            );
        }, []));
    let f = i.useMemo(() => I.attachTo ?? e.current?.ownerDocument ?? a, [I.attachTo, e]),
        p = i.useRef(null);
    return s(I.disable ? p : e, { disable: I.disable, disableReturnRef: u, attachTo: f });
}
function E(e) {
    let { disableReturn: t } = e;
    return (_(e.containerRef, { disableReturn: t }), e.children);
}
