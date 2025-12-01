n.d(t, {
    RG: () => c,
    kc: () => d,
});
var r = n(172395),
    i = n(114206),
    a = n(607413),
    o = n(741433),
    s = n(158821),
    l = n(473749);
let c = l.createContext(null);
function u(e) {
    let t = (0, l.useContext)(c) || {};
    (0, o.l)(t, e);
    let { ref: n, ...r } = t;
    return r;
}
function d(e, t) {
    let { focusProps: n } = (0, i.K)(e),
        { keyboardProps: o } = (0, a.v)(e),
        c = (0, s.d)(n, o),
        d = u(t),
        f = e.isDisabled ? {} : d,
        p = (0, l.useRef)(e.autoFocus);
    (0, l.useEffect)(() => {
        p.current && t.current && (0, r.e)(t.current), (p.current = !1);
    }, [t]);
    let _ = e.excludeFromTabOrder ? -1 : 0;
    return (
        e.isDisabled && (_ = void 0),
        {
            focusableProps: (0, s.d)(
                {
                    ...c,
                    tabIndex: _,
                },
                f,
            ),
        }
    );
}
