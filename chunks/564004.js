n.d(t, {
    U7: () => s,
    jZ: () => a,
});
var r = n(64700);
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
let i = (0, r.createContext)(!1);
function a(e) {
    if ((0, r.useContext)(i)) return r.createElement(r.Fragment, null, e.children);
    let t = r.createElement(i.Provider, { value: !0 }, e.children);
    return r.createElement("template", { "data-react-aria-hidden": !0 }, t);
}
function s(e) {
    let t = (t, n) => ((0, r.useContext)(i) ? null : e(t, n));
    return (t.displayName = e.displayName || e.name), (0, r.forwardRef)(t);
}
