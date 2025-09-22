n.d(t, { kc: () => d });
var r = n(533339),
    i = n(783849),
    a = n(543756),
    o = n(125547),
    s = n(506364),
    l = n(647438);
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
        _ = (0, l.useRef)(e.autoFocus);
    (0, l.useEffect)(() => {
        _.current && t.current && (0, r.e)(t.current), (_.current = !1);
    }, [t]);
    let p = e.excludeFromTabOrder ? -1 : 0;
    return (
        e.isDisabled && (p = void 0),
        {
            focusableProps: (0, s.d)(
                {
                    ...c,
                    tabIndex: p,
                },
                f,
            ),
        }
    );
}
