s.d(t, { A: () => f });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    i = s.n(l),
    r = s(983851),
    o = s(358618),
    u = s(793920),
    d = s(939249),
    c = s(122641),
    h = s(375708),
    m = s(28680);
class p extends a.PureComponent {
    _mediaBar = a.createRef();
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
            n = this._mediaBar.current;
        null != n && (e ? n.setGrabber(0) : n.setGrabber(t / s));
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
        let { minValue: t, value: s, maxValue: n, onValueChange: a } = this.props,
            l = 0.05 * (n - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                a?.(Math.min(n, s + l));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                a?.(Math.max(t, s - l));
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
                sliderWrapperClassName: a,
                sliderClassName: l,
                currentWindow: p,
                muted: f,
                minValue: g,
                maxValue: v,
                value: C,
                onVolumeShow: A,
                onVolumeHide: x,
            } = this.props,
            { hovered: y, focused: S, dragging: _ } = this.state,
            E = r.H;
        return (
            f || C === g ? (E = o._) : C < v / 2 && (E = u.S),
            (0, n.jsxs)("div", {
                className: i()(s, m.kL),
                onMouseEnter: () => {
                    (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), A?.());
                },
                onMouseLeave: () => {
                    (clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            (this.setState({ hovered: !1 }), x?.());
                        }, 150)));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, n.jsx)("div", {
                        className: i()(m.QS, a, { [m.OZ]: y || S || _ }),
                        onMouseEnter: () => {
                            (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }));
                        },
                        onMouseLeave: () => {
                            (clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150)));
                        },
                        children: (0, n.jsx)(c.A, {
                            className: m.YZ,
                            sliderClassName: l,
                            type: c.A.Types.VOLUME,
                            value: C / v,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: p,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, n.jsx)(d.D, {
                        className: m.bk,
                        "aria-label": h.intl.string(h.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, n.jsx)(E, { color: t, className: e }),
                    }),
                ],
            })
        );
    }
}
let f = p;
