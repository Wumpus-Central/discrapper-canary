n.d(t, { z: () => c }), n(896048);
var r,
    i = n(627968),
    a = n(64700);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = "file-input",
    l = (e) => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        cursor: e ? "not-allowed" : "pointer",
        fontSize: 0,
    });
class c extends (r = a.Component) {
    render() {
        let { disabled: e, tabIndex: t, className: n, name: r, "aria-label": a, "aria-hidden": s, id: c } = this.props,
            u = "";
        return (
            this.props.filters &&
                (u = this.props.filters.map((e) => e.extensions.map((e) => ".".concat(e)).join(",")).join(",")),
            (0, i.jsx)("input", {
                id: c,
                style: l(e),
                className: n || o,
                disabled: e,
                type: "file",
                tabIndex: t,
                onMouseDown: this.handleBrowserInputMouseDown,
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                multiple: this.props.multiple,
                accept: u,
                name: r,
                "aria-label": a,
                "aria-hidden": s || void 0,
                ref: (e) => {
                    this._input = e;
                },
                title: this.props.title,
            })
        );
    }
    constructor(...e) {
        super(...e),
            s(this, "_input", null),
            s(this, "activateUploadDialogue", () => {
                this._input && this._input.click();
            }),
            s(this, "handleNativeClick", () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props);
            }),
            s(this, "handleNativeKeyDown", (e) => {
                (" " === e.key || "Enter" === e.key) && this.handleNativeClick();
            }),
            s(this, "handleBrowserInputMouseDown", (e) => {
                e.currentTarget.value = null;
            });
    }
}
s(c, "defaultProps", {
    multiple: !1,
    disabled: !1,
    tabIndex: 0,
});
