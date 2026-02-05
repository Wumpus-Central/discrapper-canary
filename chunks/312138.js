"use strict";
n.d(t, { Op: () => f, R7: () => c, sk: () => d }), n(627968);
var r = n(64700),
    i = n(52724),
    a = n(621466),
    s = n(650583);
let o = "data-jump-section",
    l = "global",
    u = r.createContext(l);
function c() {
    let e = r.useContext(u);
    return r.useMemo(() => ({ [o]: e }), [e]);
}
function d(e) {
    let t = c();
    return e.children(t);
}
async function _(e) {
    if (e.key !== s.mi) return;
    let t = (0, a.BF)(e);
    if (null == t) return;
    let n = null,
        r = null,
        u = e.target;
    for (; null != u; ) {
        if (u.hasAttribute(o)) {
            (n = u.getAttribute(o)), (r = u);
            break;
        }
        u = u.parentElement;
    }
    let c = (0, i.C)({
        getFocusableElements: () => Array.from(t.querySelectorAll(`[${o}="${n ?? l}"]`)),
        getActiveElement: () => t.activeElement,
    });
    (0, a.BF)(e)?.activeElement == null || null == r
        ? c.getFirstFocusableElement()?.focus()
        : e.getModifierState("Shift")
          ? (await c.getPreviousFocusableElement({ wrap: !0, from: r }))?.focus()
          : (await c.getNextFocusableElement({ wrap: !0, from: r }))?.focus();
}
function f(e) {
    r.useEffect(() => {
        if (e)
            return (
                window.addEventListener("keydown", _),
                () => {
                    window.removeEventListener("keydown", _);
                }
            );
    }, [e]);
}
