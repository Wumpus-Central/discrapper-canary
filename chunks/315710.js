var i = n(582128),
    r = n(557361);
let a = "u" < typeof document ? void 0 : document,
    s = null == a ? () => void 0 : r.Ay,
    l = null == a ? i.useEffect : i.useLayoutEffect;
function o(e) {
    return null != e && "element" in e ? e.element : e;
}
let d = 0,
    c = new Set(),
    u = { current: !0 };
function _(e) {
    var t, n, r;
    let _,
        E,
        A,
        f,
        h,
        I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((t = I.returnRef),
        (n = !0 === I.disable),
        (r = !0 === I.disableReturn),
        (_ = i.useRef(a?.activeElement)),
        (E = i.useRef(null)),
        (A = i.useRef(t)),
        (f = i.useRef(n)),
        (h = i.useRef(r)),
        l(() => {
            (null != e.current && (E.current = e.current), (A.current = t), (f.current = n), (h.current = r));
        }),
        l(() => {
            let e = null == E.current ? null : { containerElementRef: E, disabledRef: f, sequence: d++ };
            return (
                null != e && c.add(e),
                () => {
                    if (!f.current && !h.current) {
                        let t = A.current?.current ?? null,
                            n = o(t),
                            i = null != t && "element" in t && !n?.isConnected ? null : n;
                        if (null != (i ?? _.current)) {
                            let t = !0,
                                n = [],
                                r = E.current?.ownerDocument ?? a,
                                s = r?.activeElement;
                            n =
                                null != s && null != e
                                    ? Array.from(c).filter((t) => {
                                          let { containerElementRef: n, disabledRef: i, sequence: r } = t;
                                          return !i.current && r > e.sequence && n.current?.contains(s) === !0;
                                      })
                                    : [];
                            let l = null == s || s === r?.body,
                                d = null != s && E.current?.contains(s) === !0;
                            if (null == i) {
                                let e = null == E.current;
                                t = l || d || n.length > 0 || e;
                            }
                            t &&
                                requestAnimationFrame(() => {
                                    let t = A.current?.current ?? null,
                                        i = o(t),
                                        r = i?.isConnected ? i : _.current,
                                        s = E.current?.ownerDocument ?? a,
                                        u = s?.activeElement,
                                        f = l || d;
                                    Array.from(c).some((t) => {
                                        let n, i;
                                        return (
                                            t !== e &&
                                            null != u &&
                                            t.containerElementRef.current?.contains(u) === !0 &&
                                            ((n = null != e && t.sequence < e.sequence),
                                            (i = null != r && t.containerElementRef.current?.contains(r) === !0),
                                            !f || !n || !i)
                                        );
                                    }) ||
                                        null == r ||
                                        !r.isConnected ||
                                        n.some((e) => c.has(e) && !e.disabledRef.current) ||
                                        (null != t && r === i ? t.focus() : r.focus({ preventScroll: !0 }));
                                });
                        }
                    }
                    null != e && c.delete(e);
                }
            );
        }, []));
    let p = i.useMemo(() => I.attachTo ?? e.current?.ownerDocument ?? a, [I.attachTo, e]),
        m = i.useRef(null);
    return s(I.disable ? m : e, { disable: I.disable, disableReturnRef: u, attachTo: p });
}
n.d(
    t,
    {},
    {
        Ok: function (e) {
            let { disableReturn: t } = e;
            return (_(e.containerRef, { disableReturn: t }), e.children);
        },
        se: function () {
            return r.rx.isActive();
        },
        tj: _,
    },
);
