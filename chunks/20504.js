var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(983851),
    o = s(358618),
    h = s(793920),
    u = s(939249),
    d = s(122641),
    c = s(792996),
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
                focusProps: e,
                iconClassName: t,
                iconColor: s,
                className: i,
                sliderWrapperClassName: n,
                sliderClassName: m,
                currentWindow: g,
                muted: f,
                minValue: v,
                maxValue: y,
                value: S,
                onVolumeShow: C,
                onVolumeHide: T,
            } = this.props,
            { hovered: b, focused: x, dragging: w } = this.state,
            M = r.VoiceNormalIcon;
        return (
            f || S === v ? (M = o.VoiceXIcon) : S < y / 2 && (M = h.VoiceLowIcon),
            (0, a.jsxs)("div", {
                className: l()(i, p.kL),
                onMouseEnter: () => {
                    (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), C?.());
                },
                onMouseLeave: () => {
                    (clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            (this.setState({ hovered: !1 }), T?.());
                        }, 150)));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, a.jsx)("div", {
                        className: l()(p.QS, n, { [p.OZ]: b || x || w }),
                        onMouseEnter: () => {
                            (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }));
                        },
                        onMouseLeave: () => {
                            (clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150)));
                        },
                        children: (0, a.jsx)(d.A, {
                            className: p.YZ,
                            sliderClassName: m,
                            type: d.A.Types.VOLUME,
                            value: S / y,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: g,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, a.jsx)(u.D, {
                        focusProps: e,
                        className: p.bk,
                        "aria-label": c.intl.string(c.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, a.jsx)(M, { color: s, className: t }),
                    }),
                ],
            })
        );
    }
}
s.d(t, {}, { A: m });
