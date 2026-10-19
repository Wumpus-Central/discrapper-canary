s.d(t, { A: () => p });
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(615300),
    o = s(913483);
let u = { friction: 14, tension: 200 },
    h = { DURATION: "DURATION", VOLUME: "VOLUME" };
function d(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
class c extends i.Component {
    static Types = h;
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
            props: { value: a },
        } = this;
        t || null == e || (e.innerText = d(s._value * a));
    };
    handleAnimatedChange = () => {
        let {
            bubble: e,
            state: { dragging: t, animatedProgress: s },
            props: { value: a },
        } = this;
        t && null != e && (e.innerText = d(s._value * a));
    };
    componentDidUpdate(e, t) {
        let { dragging: s, previewWidth: a, animatedProgress: i } = this.state;
        !s && t.dragging && a.setValue(i._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: s } = this.state;
        t ? r.A.spring(s, { toValue: e, ...u }).start() : s.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: s,
            props: { type: a },
        } = this;
        if (null == s) return 0;
        let { left: i, width: n, bottom: l, height: r } = s.getBoundingClientRect();
        return Math.min(1, Math.max(0, a === h.VOLUME ? (l - t) / r : (e - i) / n));
    }
    handleMouseMove = (e) => {
        let { dragging: t, previewWidth: s } = this.state;
        if (t) return;
        let { clientX: a, clientY: i } = e;
        s.setValue(this.calculatePercentage(a, i));
    };
    handleDragMove = (e) => {
        let { onDrag: t, type: s } = this.props,
            { clientX: a, clientY: i } = e;
        t(this.calculatePercentage(a, i), s);
    };
    handleDragStart = (e) => {
        let { onDragStart: t, onDrag: s, type: a, currentWindow: i } = this.props,
            { clientX: n, clientY: l } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: r, width: o } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: r, offsetWidth: o }, () => {
            (t(a),
                s(this.calculatePercentage(n, l), a),
                i.removeEventListener("mouseup", this.handleDragEnd, !1),
                i.removeEventListener("mousemove", this.handleDragMove, !1),
                i.addEventListener("mouseup", this.handleDragEnd, !1),
                i.addEventListener("mousemove", this.handleDragMove, !1));
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
        let { buffers: e, type: t, className: s, sliderClassName: i } = this.props,
            { dragging: n, previewWidth: u, animatedProgress: d } = this.state,
            c = n ? d : u;
        return (0, a.jsx)("div", {
            className: l()(s, t === h.VOLUME ? o.Vd : o.xM),
            children: (0, a.jsx)("div", {
                className: l()(i, n ? o.h4 : o.GU, t === h.VOLUME ? o.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, a.jsxs)("div", {
                    className: l()(o.HY, t === h.VOLUME ? o.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [s, i] = e;
                                  return (0, a.jsx)(
                                      "div",
                                      { className: o.r, style: { width: `${100 * i}%`, left: `${100 * s}%` } },
                                      t,
                                  );
                              })
                            : null,
                        t === h.DURATION
                            ? (0, a.jsx)(r.A.div, {
                                  className: o.mk,
                                  style: { width: u.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, a.jsx)(r.A.div, {
                            className: o.vG,
                            style: { width: d.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, a.jsx)("span", { className: o.Pq }),
                        }),
                        t === h.DURATION
                            ? (0, a.jsx)(r.A.div, {
                                  ref: this.setBubbleRef,
                                  className: o.Tq,
                                  style: { left: c.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
}
let p = c;
