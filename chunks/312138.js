n.d(t, {
    Op: () => p,
    R7: () => u,
    sk: () => d,
}),
    n(627968);
var r = n(64700),
    i = n(52724),
    a = n(621466),
    s = n(650583);
let o = "data-jump-section",
    l = "global",
    c = r.createContext(l);
function u() {
    let e = r.useContext(c);
    return r.useMemo(() => ({ [o]: e }), [e]);
}
function d(e) {
    let t = u();
    return e.children(t);
}
async function f(e) {
    var t, n, r, c;
    if (e.key !== s.mi) return;
    let u = (0, a.BF)(e);
    if (null == u) return;
    let d = null,
        f = null,
        p = e.target;
    for (; null != p; ) {
        if (p.hasAttribute(o)) {
            (d = p.getAttribute(o)), (f = p);
            break;
        }
        p = p.parentElement;
    }
    let _ = (0, i.C)({
        getFocusableElements: () => Array.from(u.querySelectorAll("[".concat(o, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => u.activeElement,
    });
    if ((null == (t = (0, a.BF)(e)) ? void 0 : t.activeElement) == null || null == f) {
        null == (n = _.getFirstFocusableElement()) || n.focus();
        return;
    }
    e.getModifierState("Shift")
        ? null ==
              (r = await _.getPreviousFocusableElement({
                  wrap: !0,
                  from: f,
              })) || r.focus()
        : null ==
              (c = await _.getNextFocusableElement({
                  wrap: !0,
                  from: f,
              })) || c.focus();
}
function p(e) {
    r.useEffect(() => {
        if (e)
            return (
                window.addEventListener("keydown", f),
                () => {
                    window.removeEventListener("keydown", f);
                }
            );
    }, [e]);
}
