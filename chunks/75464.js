n.d(t, { Z: () => g }), n(47120);
var i,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(153066),
    d = n(374394);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = {
        XSMALL: d.xsmall,
        SMALL: d.small,
        MEDIUM: d.medium,
        LARGE: d.large
    },
    h = {
        DEFAULT: 'default',
        STATIC: 'static'
    };
class m extends (i = s.PureComponent) {
    render() {
        let { size: e, src: t, srcHover: n, className: i, ...s } = this.props,
            { hovered: a } = this.state,
            c = this.getMode();
        return (0, l.jsx)('button', {
            className: r()((0, o.l)(d, 'iconButton', c), i, e),
            style: { backgroundImage: "url('".concat(a && null != n ? n : t, "')") },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', { hovered: !1 }),
            c(this, 'getMode', () => (null != this.props.srcHover ? h.STATIC : h.DEFAULT)),
            c(this, 'handleHover', (e) => {
                let { onMouseEnter: t } = this.props;
                null == t || t(e), this.state.hovered || this.setState({ hovered: !0 });
            }),
            c(this, 'handleBlur', (e) => {
                let { onMouseLeave: t } = this.props;
                null == t || t(e), this.state.hovered && this.setState({ hovered: !1 });
            });
    }
}
c(m, 'Sizes', u),
    c(m, 'defaultProps', {
        size: u.MEDIUM,
        disabled: !1
    });
let g = m;
