"use strict";
n.d(t, { A: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(983851),
    o = n(358618),
    d = n(793920),
    c = n(939249),
    u = n(122641),
    _ = n(375708),
    E = n(476133);
class A extends r.PureComponent {
    _mediaBar = r.createRef();
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
            i = this._mediaBar.current;
        null != i && (e ? i.setGrabber(0) : i.setGrabber(t / n));
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
        let { minValue: t, value: n, maxValue: i, onValueChange: r } = this.props,
            a = 0.05 * (i - t);
        switch (e.key) {
            case "ArrowUp":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                r?.(Math.min(i, n + a));
                break;
            case "ArrowDown":
                if ((e.stopPropagation(), e.preventDefault(), !this.state.focused)) {
                    this.setState({ focused: !0 });
                    break;
                }
                r?.(Math.max(t, n - a));
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
                sliderWrapperClassName: r,
                sliderClassName: a,
                currentWindow: A,
                muted: h,
                minValue: I,
                maxValue: f,
                value: p,
                onVolumeShow: T,
                onVolumeHide: m,
            } = this.props,
            { hovered: g, focused: S, dragging: N } = this.state,
            C = l.H;
        return (
            h || p === I ? (C = o._) : p < f / 2 && (C = d.S),
            (0, i.jsxs)("div", {
                className: s()(n, E.kL),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), T?.();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), m?.();
                        }, 150));
                },
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, i.jsx)("div", {
                        className: s()(E.QS, r, { [E.OZ]: g || S || N }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout),
                                (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150));
                        },
                        children: (0, i.jsx)(u.A, {
                            className: E.YZ,
                            sliderClassName: a,
                            type: u.A.Types.VOLUME,
                            value: p / f,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: A,
                            ref: this._mediaBar,
                        }),
                    }),
                    (0, i.jsx)(c.D, {
                        className: E.bk,
                        "aria-label": _.intl.string(_.t["19lt24"]),
                        onClick: this.handleToggleMute,
                        children: (0, i.jsx)(C, { color: t, className: e }),
                    }),
                ],
            })
        );
    }
}
let h = A;
