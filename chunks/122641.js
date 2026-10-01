s.d(t, { A: () => m });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    i = s.n(l),
    r = s(615300),
    o = s(913483);
let u = { friction: 14, tension: 200 },
    d = { DURATION: "DURATION", VOLUME: "VOLUME" };
function c(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
class h extends a.Component {
    static Types = d;
    static defaultProps = { currentWindow: window };
    state = {
        animatedProgress: new r.A.Value(0),
        dragging: !1,
        offsetLeft: 0,
        offsetWidth: 0,
        previewWidth: new r.A.Value(0),
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
            props: { value: n },
        } = this;
        t || null == e || (e.innerText = c(s._value * n));
    };
    handleAnimatedChange = () => {
        let {
            bubble: e,
            state: { dragging: t, animatedProgress: s },
            props: { value: n },
        } = this;
        t && null != e && (e.innerText = c(s._value * n));
    };
    componentDidUpdate(e, t) {
        let { dragging: s, previewWidth: n, animatedProgress: a } = this.state;
        !s && t.dragging && n.setValue(a._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: s } = this.state;
        t ? r.A.spring(s, { toValue: e, ...u }).start() : s.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: s,
            props: { type: n },
        } = this;
        if (null == s) return 0;
        let { left: a, width: l, bottom: i, height: r } = s.getBoundingClientRect();
        return Math.min(1, Math.max(0, n === d.VOLUME ? (i - t) / r : (e - a) / l));
    }
    handleMouseMove = (e) => {
        let { dragging: t, previewWidth: s } = this.state;
        if (t) return;
        let { clientX: n, clientY: a } = e;
        s.setValue(this.calculatePercentage(n, a));
    };
    handleDragMove = (e) => {
        let { onDrag: t, type: s } = this.props,
            { clientX: n, clientY: a } = e;
        t(this.calculatePercentage(n, a), s);
    };
    handleDragStart = (e) => {
        let { onDragStart: t, onDrag: s, type: n, currentWindow: a } = this.props,
            { clientX: l, clientY: i } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: r, width: o } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: r, offsetWidth: o }, () => {
            (t(n),
                s(this.calculatePercentage(l, i), n),
                a.removeEventListener("mouseup", this.handleDragEnd, !1),
                a.removeEventListener("mousemove", this.handleDragMove, !1),
                a.addEventListener("mouseup", this.handleDragEnd, !1),
                a.addEventListener("mousemove", this.handleDragMove, !1));
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
        let { buffers: e, type: t, className: s, sliderClassName: a } = this.props,
            { dragging: l, previewWidth: u, animatedProgress: c } = this.state,
            h = l ? c : u;
        return (0, n.jsx)("div", {
            className: i()(s, t === d.VOLUME ? o.Vd : o.xM),
            children: (0, n.jsx)("div", {
                className: i()(a, l ? o.h4 : o.GU, t === d.VOLUME ? o.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, n.jsxs)("div", {
                    className: i()(o.HY, t === d.VOLUME ? o.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [s, a] = e;
                                  return (0, n.jsx)(
                                      "div",
                                      { className: o.r, style: { width: `${100 * a}%`, left: `${100 * s}%` } },
                                      t,
                                  );
                              })
                            : null,
                        t === d.DURATION
                            ? (0, n.jsx)(r.A.div, {
                                  className: o.mk,
                                  style: { width: u.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, n.jsx)(r.A.div, {
                            className: o.vG,
                            style: { width: c.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, n.jsx)("span", { className: o.Pq }),
                        }),
                        t === d.DURATION
                            ? (0, n.jsx)(r.A.div, {
                                  ref: this.setBubbleRef,
                                  className: o.Tq,
                                  style: { left: h.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
}
let m = h;
