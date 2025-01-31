n.d(t, {
    JD: () => _,
    Wd: () => d,
    mF: () => c
}),
    n(200651);
var i = n(192379),
    r = n(372817),
    a = n(5967),
    s = n(420212);
let o = 'data-jump-section',
    l = 'global',
    u = i.createContext(l);
function c() {
    let e = i.useContext(u);
    return i.useMemo(() => ({ [o]: e }), [e]);
}
function d(e) {
    let t = c();
    return e.children(t);
}
async function f(e) {
    var t, n, i, u;
    if (e.key !== s.LT) return;
    let c = (0, a.uB)(e);
    if (null == c) return;
    let d = null,
        f = null,
        _ = e.target;
    for (; null != _; ) {
        if (_.hasAttribute(o)) {
            (d = _.getAttribute(o)), (f = _);
            break;
        }
        _ = _.parentElement;
    }
    let p = (0, r.E)({
        getFocusableElements: () => Array.from(c.querySelectorAll('['.concat(o, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => c.activeElement
    });
    if ((null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == f) {
        null === (n = p.getFirstFocusableElement()) || void 0 === n || n.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ===
              (i = await p.getPreviousFocusableElement({
                  wrap: !0,
                  from: f
              })) ||
          void 0 === i ||
          i.focus()
        : null ===
              (u = await p.getNextFocusableElement({
                  wrap: !0,
                  from: f
              })) ||
          void 0 === u ||
          u.focus();
}
function _(e) {
    i.useEffect(() => {
        if (e)
            return (
                window.addEventListener('keydown', f),
                () => {
                    window.removeEventListener('keydown', f);
                }
            );
    }, [e]);
}
