n.d(t, {
    JD: () => f,
    Wd: () => d,
    mF: () => u
}),
    n(255367);
var r = n(73800),
    i = n(372817),
    a = n(5967),
    o = n(420212);
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
async function _(e) {
    var t, n, r, c;
    if (e.key !== o.LT) return;
    let u = (0, a.uB)(e);
    if (null == u) return;
    let d = null,
        _ = null,
        f = e.target;
    for (; null != f; ) {
        if (f.hasAttribute(s)) {
            (d = f.getAttribute(s)), (_ = f);
            break;
        }
        f = f.parentElement;
    }
    let p = (0, i.E)({
        getFocusableElements: () => Array.from(u.querySelectorAll('['.concat(s, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => u.activeElement
    });
    if ((null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) == null || null == _) {
        null == (n = p.getFirstFocusableElement()) || n.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ==
              (r = await p.getPreviousFocusableElement({
                  wrap: !0,
                  from: _
              })) || r.focus()
        : null ==
              (c = await p.getNextFocusableElement({
                  wrap: !0,
                  from: _
              })) || c.focus();
}
function f(e) {
    r.useEffect(() => {
        if (e)
            return (
                window.addEventListener('keydown', _),
                () => {
                    window.removeEventListener('keydown', _);
                }
            );
    }, [e]);
}
