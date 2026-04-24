"use strict";
n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(983851),
    o = n(358618),
    c = n(793920),
    u = n(939249),
    d = n(122641),
    h = n(985018),
    m = n(420397);
class p extends i.PureComponent {
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
            l = this._mediaBar.current;
        null != l && (e ? l.setGrabber(0) : l.setGrabber(t / n));
    }
    handleValueChange = (e) => {
        let { maxValue: t, onValueChange: n } = this.props;
        n?.(e * t);
    };
    handleToggleMute = () => {
        let { onToggleMute: e } = this.props;
        e?.();
    };
    handleKeyDown = (e) => {
        let { minValue: t, value: n, maxValue: l, onValueChange: i } = this.props,
            s = 0.05 * (l - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.min(l, n + s));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.max(t, n - s));
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
                sliderClassName: s,
                currentWindow: p,
                muted: f,
                minValue: g,
                maxValue: _,
                value: x,
                onVolumeShow: C,
                onVolumeHide: A,
            } = this.props,
            { hovered: E, focused: I, dragging: v } = this.state,
            y = r.H;
        return (
            f || x === g ? (y = o._) : x < _ / 2 && (y = c.S),
            (0, l.jsxs)("div", {
                className: a()(n, m.kL),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), C?.();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), A?.();
                        }, 150));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, l.jsx)("div", {
                        className: a()(m.QS, i, { [m.OZ]: E || I || v }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150));
                        },
                        children: (0, l.jsx)(d.A, {
                            className: m.YZ,
                            sliderClassName: s,
                            type: d.A.Types.VOLUME,
                            value: x / _,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: p,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, l.jsx)(u.D, {
                        className: m.bk,
                        "aria-label": h.intl.string(h.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, l.jsx)(y, { color: t, className: e }),
                    }),
                ],
            })
        );
    }
}
let f = p;
