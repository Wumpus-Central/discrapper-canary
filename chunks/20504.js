s.d(t, { A: () => g });
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(983851),
    o = s(358618),
    u = s(793920),
    h = s(939249),
    d = s(122641),
    c = s(105292),
    p = s(28680);
class m extends i.PureComponent {
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
        let { muted: e, value: t, maxValue: s } = this.props,
            a = this._mediaBar.current;
        null != a && (e ? a.setGrabber(0) : a.setGrabber(t / s));
    }
    handleValueChange = (e) => {
        let { maxValue: t, onValueChange: s } = this.props;
        s?.(e * t);
    };
    handleToggleMute = () => {
        let { onToggleMute: e } = this.props;
        e?.();
    };
    handleKeyDown = (e) => {
        let { minValue: t, value: s, maxValue: a, onValueChange: i } = this.props,
            n = 0.05 * (a - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.min(a, s + n));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                i?.(Math.max(t, s - n));
                break;
            case "Escape":
                (this.setState({ focused: !1 }), e.stopPropagation(), e.preventDefault());
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
                className: s,
                sliderWrapperClassName: i,
                sliderClassName: n,
                currentWindow: m,
                muted: g,
                minValue: f,
                maxValue: v,
                value: y,
                onVolumeShow: S,
                onVolumeHide: C,
            } = this.props,
            { hovered: T, focused: b, dragging: x } = this.state,
            M = r.H;
        return (
            g || y === f ? (M = o._) : y < v / 2 && (M = u.S),
            (0, a.jsxs)("div", {
                className: l()(s, p.kL),
                onMouseEnter: () => {
                    (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), S?.());
                },
                onMouseLeave: () => {
                    (clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            (this.setState({ hovered: !1 }), C?.());
                        }, 150)));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, a.jsx)("div", {
                        className: l()(p.QS, i, { [p.OZ]: T || b || x }),
                        onMouseEnter: () => {
                            (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }));
                        },
                        onMouseLeave: () => {
                            (clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150)));
                        },
                        children: (0, a.jsx)(d.A, {
                            className: p.YZ,
                            sliderClassName: n,
                            type: d.A.Types.VOLUME,
                            value: y / v,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: m,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, a.jsx)(h.D, {
                        className: p.bk,
                        "aria-label": c.intl.string(c.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, a.jsx)(M, { color: t, className: e }),
                    }),
                ],
            })
        );
    }
}
let g = m;
