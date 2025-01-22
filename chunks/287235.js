r.d(n, {
    JD: function () {
        return h;
    },
    Wd: function () {
        return f;
    },
    mF: function () {
        return d;
    }
}),
    r(200651);
var i = r(192379),
    a = r(372817),
    o = r(5967),
    s = r(420212);
let l = 'data-jump-section',
    u = 'global',
    c = i.createContext(u);
function d() {
    let e = i.useContext(c);
    return i.useMemo(() => ({ [l]: e }), [e]);
}
function f(e) {
    let n = d();
    return e.children(n);
}
async function p(e) {
    var n, r, i, c;
    if (e.key !== s.LT) return;
    let d = (0, o.uB)(e);
    if (null == d) return;
    let f = null,
        p = null,
        h = e.target;
    for (; null != h; ) {
        if (h.hasAttribute(l)) {
            (f = h.getAttribute(l)), (p = h);
            break;
        }
        h = h.parentElement;
    }
    let _ = (0, a.E)({
        getFocusableElements: () => Array.from(d.querySelectorAll('['.concat(l, '="').concat(null != f ? f : u, '"]'))),
        getActiveElement: () => d.activeElement
    });
    if ((null === (n = (0, o.uB)(e)) || void 0 === n ? void 0 : n.activeElement) == null || null == p) {
        null === (r = _.getFirstFocusableElement()) || void 0 === r || r.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ===
              (i = await _.getPreviousFocusableElement({
                  wrap: !0,
                  from: p
              })) ||
          void 0 === i ||
          i.focus()
        : null ===
              (c = await _.getNextFocusableElement({
                  wrap: !0,
                  from: p
              })) ||
          void 0 === c ||
          c.focus();
}
function h(e) {
    i.useEffect(() => {
        if (e)
            return (
                window.addEventListener('keydown', p),
                () => {
                    window.removeEventListener('keydown', p);
                }
            );
    }, [e]);
}
