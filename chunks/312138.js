"use strict";
n.d(t, { Op: () => E, R7: () => c, sk: () => u }), n(477900);
var i = n(582128),
    r = n(52724),
    a = n(621466),
    s = n(650583);
let l = "data-jump-section",
    o = "global",
    d = i.createContext(o);
function c() {
    let e = i.useContext(d);
    return i.useMemo(() => ({ [l]: e }), [e]);
}
function u(e) {
    let t = c();
    return e.children(t);
}
async function _(e) {
    if (e.key !== s.mi) return;
    let t = (0, a.BF)(e);
    if (null == t) return;
    let n = null,
        i = null,
        d = e.target;
    for (; null != d; ) {
        if (d.hasAttribute(l)) {
            (n = d.getAttribute(l)), (i = d);
            break;
        }
        d = d.parentElement;
    }
    let c = (0, r.C)({
        getFocusableElements: () => Array.from(t.querySelectorAll(`[${l}="${n ?? o}"]`)),
        getActiveElement: () => t.activeElement,
    });
    (0, a.BF)(e)?.activeElement == null || null == i
        ? c.getFirstFocusableElement()?.focus()
        : e.getModifierState("Shift")
          ? (await c.getPreviousFocusableElement({ wrap: !0, from: i }))?.focus()
          : (await c.getNextFocusableElement({ wrap: !0, from: i }))?.focus();
}
function E(e) {
    i.useEffect(() => {
        if (e)
            return (
                window.addEventListener("keydown", _),
                () => {
                    window.removeEventListener("keydown", _);
                }
            );
    }, [e]);
}
