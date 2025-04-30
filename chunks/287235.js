n.d(t, {
    JD: () => _,
    Wd: () => d,
    mF: () => u
}),
    n(200651);
var r = n(192379),
    i = n(372817),
    o = n(5967),
    a = n(420212);
let s = 'data-jump-section',
    l = 'global',
    c = r.createContext(l);
function u() {
    let e = r.useContext(c);
    return r.useMemo(() => ({ [s]: e }), [e]);
}
function d(e) {
    let t = u();
    return e.children(t);
}
async function f(e) {
    var t, n, r, c;
    if (e.key !== a.LT) return;
    let u = (0, o.uB)(e);
    if (null == u) return;
    let d = null,
        f = null,
        _ = e.target;
    for (; null != _; ) {
        if (_.hasAttribute(s)) {
            (d = _.getAttribute(s)), (f = _);
            break;
        }
        _ = _.parentElement;
    }
    let p = (0, i.E)({
        getFocusableElements: () => Array.from(u.querySelectorAll('['.concat(s, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => u.activeElement
    });
    if ((null == (t = (0, o.uB)(e)) ? void 0 : t.activeElement) == null || null == f) {
        null == (n = p.getFirstFocusableElement()) || n.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ==
              (r = await p.getPreviousFocusableElement({
                  wrap: !0,
                  from: f
              })) || r.focus()
        : null ==
              (c = await p.getNextFocusableElement({
                  wrap: !0,
                  from: f
              })) || c.focus();
}
function _(e) {
    r.useEffect(() => {
        if (e)
            return (
                window.addEventListener('keydown', f),
                () => {
                    window.removeEventListener('keydown', f);
                }
            );
    }, [e]);
}
