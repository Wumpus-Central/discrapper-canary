"use strict";
n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(983851),
    o = n(358618),
    u = n(793920),
    c = n(939249),
    d = n(122641),
    m = n(375708),
    h = n(420397);
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
            r = 0.05 * (l - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.min(l, n + r));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.max(t, n - r));
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
                sliderClassName: r,
                currentWindow: p,
                muted: f,
                minValue: g,
                maxValue: E,
                value: A,
                onVolumeShow: C,
                onVolumeHide: x,
            } = this.props,
            { hovered: I, focused: _, dragging: S } = this.state,
            y = a.H;
        return (
            f || A === g ? (y = o._) : A < E / 2 && (y = u.S),
            (0, l.jsxs)("div", {
                className: s()(n, h.kL),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), C?.();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), x?.();
                        }, 150));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, l.jsx)("div", {
                        className: s()(h.QS, i, { [h.OZ]: I || _ || S }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150));
                        },
                        children: (0, l.jsx)(d.A, {
                            className: h.YZ,
                            sliderClassName: r,
                            type: d.A.Types.VOLUME,
                            value: A / E,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: p,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, l.jsx)(c.D, {
                        className: h.bk,
                        "aria-label": m.intl.string(m.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, l.jsx)(y, { color: t, className: e }),
                    }),
                ],
            })
        );
    }
}
let f = p;
