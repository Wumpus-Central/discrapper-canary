var a = s(477900),
    n = s(582128),
    i = s(503698),
    r = s.n(i),
    o = s(615300),
    l = s(913483);
let h = { friction: 14, tension: 200 },
    d = { DURATION: "DURATION", VOLUME: "VOLUME" };
function u(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
class p extends n.Component {
    static Types = d;
    static defaultProps = { currentWindow: window };
    state = {
        animatedProgress: new o.A.Value(0),
        dragging: !1,
        offsetLeft: 0,
        offsetWidth: 0,
        previewWidth: new o.A.Value(0),
    };
    wrapper;
    bubble;
    _previewId;
    _progressId;
    componentDidMount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        ((this._previewId = e.addListener(this.handlePreviewChange)),
            (this._progressId = t.addListener(this.handleAnimatedChange)));
    }
    componentWillUnmount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        (e.removeListener(this._previewId),
            t.removeListener(this._progressId),
            window.removeEventListener("mouseup", this.handleDragEnd, !1),
            window.removeEventListener("mousemove", this.handleDragMove, !1));
    }
    handlePreviewChange = () => {
        let {
            bubble: e,
            state: { dragging: t, previewWidth: s },
            props: { value: a },
        } = this;
        t || null == e || (e.innerText = u(s._value * a));
    };
    handleAnimatedChange = () => {
        let {
            bubble: e,
            state: { dragging: t, animatedProgress: s },
            props: { value: a },
        } = this;
        t && null != e && (e.innerText = u(s._value * a));
    };
    componentDidUpdate(e, t) {
        let { dragging: s, previewWidth: a, animatedProgress: n } = this.state;
        !s && t.dragging && a.setValue(n._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: s } = this.state;
        t ? o.A.spring(s, { toValue: e, ...h }).start() : s.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: s,
            props: { type: a },
        } = this;
        if (null == s) return 0;
        let { left: n, width: i, bottom: r, height: o } = s.getBoundingClientRect();
        return Math.min(1, Math.max(0, a === d.VOLUME ? (r - t) / o : (e - n) / i));
    }
    handleMouseMove = (e) => {
        let { dragging: t, previewWidth: s } = this.state;
        if (t) return;
        let { clientX: a, clientY: n } = e;
        s.setValue(this.calculatePercentage(a, n));
    };
    handleDragMove = (e) => {
        let { onDrag: t, type: s } = this.props,
            { clientX: a, clientY: n } = e;
        t(this.calculatePercentage(a, n), s);
    };
    handleDragStart = (e) => {
        let { onDragStart: t, onDrag: s, type: a, currentWindow: n } = this.props,
            { clientX: i, clientY: r } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: o, width: l } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: o, offsetWidth: l }, () => {
            (t(a),
                s(this.calculatePercentage(i, r), a),
                n.removeEventListener("mouseup", this.handleDragEnd, !1),
                n.removeEventListener("mousemove", this.handleDragMove, !1),
                n.addEventListener("mouseup", this.handleDragEnd, !1),
                n.addEventListener("mousemove", this.handleDragMove, !1));
        });
    };
    handleDragEnd = () => {
        let { onDragEnd: e, currentWindow: t } = this.props;
        (e(),
            t.removeEventListener("mouseup", this.handleDragEnd, !1),
            t.removeEventListener("mousemove", this.handleDragMove, !1),
            this.setState({ dragging: !1 }));
    };
    setBubbleRef = (e) => {
        null == e
            ? (this.bubble = null)
            : null != e.componentRef
              ? (this.bubble = e.componentRef)
              : null != e.refs && (this.bubble = e.refs.node);
    };
    render() {
        let { buffers: e, type: t, className: s, sliderClassName: n } = this.props,
            { dragging: i, previewWidth: h, animatedProgress: u } = this.state,
            p = i ? u : h;
        return (0, a.jsx)("div", {
            className: r()(s, t === d.VOLUME ? l.Vd : l.xM),
            children: (0, a.jsx)("div", {
                className: r()(n, i ? l.h4 : l.GU, t === d.VOLUME ? l.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, a.jsxs)("div", {
                    className: r()(l.HY, t === d.VOLUME ? l.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [s, n] = e;
                                  return (0, a.jsx)(
                                      "div",
                                      { className: l.r, style: { width: `${100 * n}%`, left: `${100 * s}%` } },
                                      t,
                                  );
                              })
                            : null,
                        t === d.DURATION
                            ? (0, a.jsx)(o.A.div, {
                                  className: l.mk,
                                  style: { width: h.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, a.jsx)(o.A.div, {
                            className: l.vG,
                            style: { width: u.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, a.jsx)("span", { className: l.Pq }),
                        }),
                        t === d.DURATION
                            ? (0, a.jsx)(o.A.div, {
                                  ref: this.setBubbleRef,
                                  className: l.Tq,
                                  style: { left: p.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
}
s.d(t, {}, { A: p });
