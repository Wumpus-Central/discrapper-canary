"use strict";
r.d(t, { U7: () => a, jZ: () => o });
var n = r(582128);
if ("u" > typeof HTMLTemplateElement) {
    let e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
    Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this);
        },
    });
}
let i = (0, n.createContext)(!1);
function o(e) {
    if ((0, n.useContext)(i)) return n.createElement(n.Fragment, null, e.children);
    let t = n.createElement(i.Provider, { value: !0 }, e.children);
    return n.createElement("template", { "data-react-aria-hidden": !0 }, t);
}
function a(e) {
    let t = (t, r) => ((0, n.useContext)(i) ? null : e(t, r));
    return (t.displayName = e.displayName || e.name), (0, n.forwardRef)(t);
}
