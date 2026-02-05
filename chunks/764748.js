"use strict";
n.d(t, { z: () => o });
var r = n(627968),
    i = n(64700);
let a = "file-input",
    s = (e) => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        cursor: e ? "not-allowed" : "pointer",
        fontSize: 0,
    });
class o extends i.Component {
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
        let { disabled: e, tabIndex: t, className: n, name: i, "aria-label": o, "aria-hidden": l, id: u } = this.props,
            c = "";
        return (
            this.props.filters &&
                (c = this.props.filters.map((e) => e.extensions.map((e) => `.${e}`).join(",")).join(",")),
            (0, r.jsx)("input", {
                id: u,
                style: s(e),
                className: n || a,
                disabled: e,
                type: "file",
                tabIndex: t,
                onMouseDown: this.handleBrowserInputMouseDown,
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                multiple: this.props.multiple,
                accept: c,
                name: i,
                "aria-label": o,
                "aria-hidden": l || void 0,
                ref: (e) => {
                    this._input = e;
                },
                title: this.props.title,
            })
        );
    }
}
