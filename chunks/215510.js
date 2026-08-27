"use strict";
r.d(t, { U7: () => a, jZ: () => o });
var n = r(582128);
"u" > typeof HTMLTemplateElement &&
    (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.content.firstChild;
        },
    }),
    Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
        configurable: !0,
        enumerable: !0,
        value: function (e) {
            return this.content.appendChild(e);
        },
    }),
    Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
        configurable: !0,
        enumerable: !0,
        value: function (e) {
            return this.content.removeChild(e);
        },
    }),
    Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
        configurable: !0,
        enumerable: !0,
        value: function (e, t) {
            return this.content.insertBefore(e, t);
        },
    }));
let i = (0, n.createContext)(!1);
function o(e) {
    if ((0, n.useContext)(i)) return n.createElement(n.Fragment, null, e.children);
    let t = n.createElement(i.Provider, { value: !0 }, e.children);
    return n.createElement("template", null, t);
}
function a(e) {
    let t = (t, r) => ((0, n.useContext)(i) ? null : e(t, r));
    return (t.displayName = e.displayName || e.name), (0, n.forwardRef)(t);
}
