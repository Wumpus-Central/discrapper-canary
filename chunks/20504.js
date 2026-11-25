var a = s(477900),
    n = s(582128),
    i = s(503698),
    r = s.n(i),
    o = s(983851),
    l = s(358618),
    h = s(793920),
    d = s(939249),
    u = s(122641),
    p = s(792996),
    c = s(28680);
class g extends n.PureComponent {
    _mediaBar = n.createRef();
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
        let { minValue: t, value: s, maxValue: a, onValueChange: n } = this.props,
            i = 0.05 * (a - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                n?.(Math.min(a, s + i));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                n?.(Math.max(t, s - i));
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
                focusProps: e,
                iconClassName: t,
                iconColor: s,
                className: n,
                sliderWrapperClassName: i,
                sliderClassName: g,
                currentWindow: v,
                muted: m,
                minValue: f,
                maxValue: w,
                value: D,
                onVolumeShow: M,
                onVolumeHide: b,
            } = this.props,
            { hovered: E, focused: L, dragging: T } = this.state,
            x = o.VoiceNormalIcon;
        return (
            m || D === f ? (x = l.VoiceXIcon) : D < w / 2 && (x = h.VoiceLowIcon),
            (0, a.jsxs)("div", {
                className: r()(n, c.kL),
                onMouseEnter: () => {
                    (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), M?.());
                },
                onMouseLeave: () => {
                    (clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            (this.setState({ hovered: !1 }), b?.());
                        }, 150)));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, a.jsx)("div", {
                        className: r()(c.QS, i, { [c.OZ]: E || L || T }),
                        onMouseEnter: () => {
                            (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }));
                        },
                        onMouseLeave: () => {
                            (clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150)));
                        },
                        children: (0, a.jsx)(u.A, {
                            className: c.YZ,
                            sliderClassName: g,
                            type: u.A.Types.VOLUME,
                            value: D / w,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: v,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, a.jsx)(d.D, {
                        focusProps: e,
                        className: c.bk,
                        "aria-label": p.intl.string(p.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, a.jsx)(x, { color: s, className: t }),
                    }),
                ],
            })
        );
    }
}
s.d(t, {}, { A: g });
