"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(122641),
    u = n(985018),
    c = n(573810);
let d = 150;
class _ extends i.PureComponent {
    _mediaBar = i.createRef();
    _hoverTimeout;
    state = { hovered: !1, focused: !1, dragging: !1 };
    static defaultProps = { minValue: 0, maxValue: 100, handleSize: 16 };
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
    handleValueChange = (e) => {
        let { maxValue: t, onValueChange: n } = this.props,
            r = e * t;
        n?.(r);
    };
    handleToggleMute = () => {
        let { onToggleMute: e } = this.props;
        e?.();
    };
    handleKeyDown = (e) => {
        let { minValue: t, value: n, maxValue: r, onValueChange: i } = this.props,
            a = 0.05 * (r - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.min(r, n + a));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.max(t, n - a));
                break;
            case "Escape":
                this.setState({ focused: !1 }), e.stopPropagation(), e.preventDefault();
        }
    };
    handleDragStart = () => {
        this.setState({ dragging: !0 });
    };
    handleDragEnd = () => {
        this.setState({ dragging: !1 });
    };
    blur = () => {
        this.setState({ focused: !1 });
    };
    render() {
        let {
                iconClassName: e,
                iconColor: t,
                className: n,
                sliderWrapperClassName: i,
                sliderClassName: a,
                currentWindow: _,
                muted: f,
                minValue: p,
                maxValue: h,
                value: m,
                onVolumeShow: g,
                onVolumeHide: E,
            } = this.props,
            { hovered: A, focused: I, dragging: T } = this.state,
            y = o.HKD;
        return (
            f || m === p ? (y = o._RO) : m < h / 2 && (y = o.S24),
            (0, r.jsxs)("div", {
                className: s()(n, c.kL),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), g?.();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), E?.();
                        }, d));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, r.jsx)("div", {
                        className: s()(c.QS, i, { [c.OZ]: A || I || T }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), d));
                        },
                        children: (0, r.jsx)(l.A, {
                            className: c.YZ,
                            sliderClassName: a,
                            type: l.A.Types.VOLUME,
                            value: m / h,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: _,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, r.jsx)(o.DUT, {
                        className: c.bk,
                        "aria-label": u.intl.string(u.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, r.jsx)(y, { color: t, className: e }),
                    }),
                ],
            })
        );
    }
}
let f = _;
