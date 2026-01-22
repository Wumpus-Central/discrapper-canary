n.d(t, {
    A: () => g,
}),
    n(896048);
var l,
    i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(821589),
    c = n(765163);

function d(e, t, n) {
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
let u = {
    XSMALL: c.xsmall,
    SMALL: c.small,
    MEDIUM: c.medium,
    LARGE: c.large,
};
class h extends (l = r.PureComponent) {
    render() {
        let e = this.props,
            { size: t, src: n, srcHover: l, className: r } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    i,
                    r = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (l = n[i]),
                            !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
                    return r;
                }
                if (
                    ((r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            i = {},
                            r = Object.getOwnPropertyNames(e);
                        for (l = 0; l < r.length; l++)
                            (n = r[l]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (l = n[i]),
                            !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
                return r;
            })(e, ["size", "src", "srcHover", "className"]),
            { hovered: u } = this.state,
            h = this.getMode();
        return (0, i.jsx)(
            "button",
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            d(e, t, n[t]);
                        });
                }
                return e;
            })(
                {
                    className: a()((0, o.t)(c, "iconButton", h), r, t),
                    style: {
                        backgroundImage: "url('".concat(u && null != l ? l : n, "')"),
                    },
                    onMouseEnter: this.handleHover,
                    onFocus: this.handleHover,
                    onMouseLeave: this.handleBlur,
                    onBlur: this.handleBlur,
                },
                s,
            ),
        );
    }
    constructor(...e) {
        super(...e),
            d(this, "state", {
                hovered: !1,
            }),
            d(this, "getMode", () => (null != this.props.srcHover ? "static" : "default")),
            d(this, "handleHover", (e) => {
                let { onMouseEnter: t } = this.props;
                null == t || t(e),
                    this.state.hovered ||
                        this.setState({
                            hovered: !0,
                        });
            }),
            d(this, "handleBlur", (e) => {
                let { onMouseLeave: t } = this.props;
                null == t || t(e),
                    this.state.hovered &&
                        this.setState({
                            hovered: !1,
                        });
            });
    }
}
d(h, "Sizes", u),
    d(h, "defaultProps", {
        size: u.MEDIUM,
        disabled: !1,
    });
let g = h;
