"use strict";
n.d(t, { z: () => s });
var r = n(627968),
    i = n(64700);
class s extends i.Component {
    _input = null;
    static defaultProps = { multiple: !1, disabled: !1, tabIndex: 0 };
    activateUploadDialogue = () => {
        this._input && this._input.click();
    };
    handleNativeClick = () => {
        this.props.handleNativeClick && this.props.handleNativeClick(this.props);
    };
    handleNativeKeyDown = (e) => {
        (" " === e.key || "Enter" === e.key) && this.handleNativeClick();
    };
    handleBrowserInputMouseDown = (e) => {
        e.currentTarget.value = null;
    };
    render() {
        let { disabled: e, tabIndex: t, className: n, name: i, "aria-label": s, "aria-hidden": a, id: o } = this.props,
            l = "";
        return (
            this.props.filters &&
                (l = this.props.filters.map((e) => e.extensions.map((e) => `.${e}`).join(",")).join(",")),
            (0, r.jsx)("input", {
                id: o,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: e ? "not-allowed" : "pointer",
                    fontSize: 0,
                },
                className: n || "file-input",
                disabled: e,
                type: "file",
                tabIndex: t,
                onMouseDown: this.handleBrowserInputMouseDown,
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                multiple: this.props.multiple,
                accept: l,
                name: i,
                "aria-label": s,
                "aria-hidden": a || void 0,
                ref: (e) => {
                    this._input = e;
                },
                title: this.props.title,
            })
        );
    }
}
