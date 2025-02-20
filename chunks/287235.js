n.d(t, {
    JD: () => p,
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
        p = e.target;
    for (; null != p; ) {
        if (p.hasAttribute(s)) {
            (d = p.getAttribute(s)), (f = p);
            break;
        }
        p = p.parentElement;
    }
    let _ = (0, i.E)({
        getFocusableElements: () => Array.from(u.querySelectorAll('['.concat(s, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => u.activeElement
    });
    if ((null === (t = (0, o.uB)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == f) {
        null === (n = _.getFirstFocusableElement()) || void 0 === n || n.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ===
              (r = await _.getPreviousFocusableElement({
                  wrap: !0,
                  from: f
              })) ||
          void 0 === r ||
          r.focus()
        : null ===
              (c = await _.getNextFocusableElement({
                  wrap: !0,
                  from: f
              })) ||
          void 0 === c ||
          c.focus();
}
function p(e) {
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
