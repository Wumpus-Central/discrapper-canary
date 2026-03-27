"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(821589),
    o = n(75753);
let d = { XSMALL: o.xsmall, SMALL: o.small, MEDIUM: o.medium, LARGE: o.large };
class c extends i.PureComponent {
    static Sizes = d;
    static defaultProps = { size: d.MEDIUM, disabled: !1 };
    state = { hovered: !1 };
    getMode = () => (null != this.props.srcHover ? "static" : "default");
    handleHover = (e) => {
        let { onMouseEnter: t } = this.props;
        t?.(e), this.state.hovered || this.setState({ hovered: !0 });
    };
    handleBlur = (e) => {
        let { onMouseLeave: t } = this.props;
        t?.(e), this.state.hovered && this.setState({ hovered: !1 });
    };
    render() {
        let { size: e, src: t, srcHover: n, className: i, ...s } = this.props,
            { hovered: d } = this.state,
            c = { backgroundImage: `url('${d && null != n ? n : t}')` },
            u = this.getMode();
        return (0, l.jsx)("button", {
            className: a()((0, r.t)(o, "iconButton", u), i, e),
            style: c,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
let u = c;
