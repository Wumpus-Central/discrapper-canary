n.d(t, { A: () => h }), n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(122641),
    u = n(985018),
    d = n(573810);
function f(e, t, n) {
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
let p = 150;
class _ extends (r = a.PureComponent) {
    componentDidMount() {
        this.updateMediaBar();
    }
    componentDidUpdate(e) {
        (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
    }
    updateMediaBar() {
        let { muted: e, value: t, maxValue: n } = this.props,
            r = this._mediaBar.current;
        null != r && (e ? r.setGrabber(0) : r.setGrabber(t / n));
    }
    render() {
        let {
                iconClassName: e,
                iconColor: t,
                className: n,
                sliderWrapperClassName: r,
                sliderClassName: a,
                currentWindow: s,
                muted: f,
                minValue: _,
                maxValue: h,
                value: m,
                onVolumeShow: g,
                onVolumeHide: E,
            } = this.props,
            { hovered: b, focused: y, dragging: O } = this.state,
            A = l.HKD;
        return (
            f || m === _ ? (A = l._RO) : m < h / 2 && (A = l.S24),
            (0, i.jsxs)("div", {
                className: o()(n, d.kL),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == g || g();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), null == E || E();
                        }, p));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, i.jsx)("div", {
                        className: o()(d.QS, r, { [d.OZ]: b || y || O }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), p));
                        },
                        children: (0, i.jsx)(c.A, {
                            sliderClassName: a,
                            type: c.A.Types.VOLUME,
                            value: m / h,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: s,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, i.jsx)(l.DUT, {
                        className: d.bk,
                        "aria-label": u.intl.string(u.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, i.jsx)(A, {
                            color: t,
                            className: e,
                        }),
                    }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            f(this, "_mediaBar", a.createRef()),
            f(this, "_hoverTimeout", void 0),
            f(this, "state", {
                hovered: !1,
                focused: !1,
                dragging: !1,
            }),
            f(this, "handleValueChange", (e) => {
                let { maxValue: t, onValueChange: n } = this.props,
                    r = e * t;
                null == n || n(r);
            }),
            f(this, "handleToggleMute", () => {
                let { onToggleMute: e } = this.props;
                null == e || e();
            }),
            f(this, "handleKeyDown", (e) => {
                let { minValue: t, value: n, maxValue: r, onValueChange: i } = this.props,
                    a = 0.05 * (r - t);
                switch (e.key) {
                    case "ArrowUp":
                        if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                            this.setState({ focused: !0 });
                            break;
                        }
                        null == i || i(Math.min(r, n + a));
                        break;
                    case "ArrowDown":
                        if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                            this.setState({ focused: !0 });
                            break;
                        }
                        null == i || i(Math.max(t, n - a));
                        break;
                    case "Escape":
                        this.setState({ focused: !1 }), e.stopPropagation(), e.preventDefault();
                }
            }),
            f(this, "handleDragStart", () => {
                this.setState({ dragging: !0 });
            }),
            f(this, "handleDragEnd", () => {
                this.setState({ dragging: !1 });
            }),
            f(this, "blur", () => {
                this.setState({ focused: !1 });
            });
    }
}
f(_, "defaultProps", {
    minValue: 0,
    maxValue: 100,
    handleSize: 16,
});
let h = _;
