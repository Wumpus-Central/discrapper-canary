"use strict";
n.d(t, { A: () => m });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(478606);
let c = { friction: 14, tension: 200 },
    u = { DURATION: "DURATION", VOLUME: "VOLUME" };
function d(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
class h extends i.Component {
    static Types = u;
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
        (this._previewId = e.addListener(this.handlePreviewChange)),
            (this._progressId = t.addListener(this.handleAnimatedChange));
    }
    componentWillUnmount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        e.removeListener(this._previewId),
            t.removeListener(this._progressId),
            window.removeEventListener("mouseup", this.handleDragEnd, !1),
            window.removeEventListener("mousemove", this.handleDragMove, !1);
    }
    handlePreviewChange = () => {
        let {
            bubble: e,
            state: { dragging: t, previewWidth: n },
            props: { value: l },
        } = this;
        t || null == e || (e.innerText = d(n._value * l));
    };
    handleAnimatedChange = () => {
        let {
            bubble: e,
            state: { dragging: t, animatedProgress: n },
            props: { value: l },
        } = this;
        t && null != e && (e.innerText = d(n._value * l));
    };
    componentDidUpdate(e, t) {
        let { dragging: n, previewWidth: l, animatedProgress: i } = this.state;
        !n && t.dragging && l.setValue(i._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: n } = this.state;
        t ? r.A.spring(n, { toValue: e, ...c }).start() : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: l },
        } = this;
        if (null == n) return 0;
        let { left: i, width: s, bottom: a, height: r } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, l === u.VOLUME ? (a - t) / r : (e - i) / s));
    }
    handleMouseMove = (e) => {
        let { dragging: t, previewWidth: n } = this.state;
        if (t) return;
        let { clientX: l, clientY: i } = e;
        n.setValue(this.calculatePercentage(l, i));
    };
    handleDragMove = (e) => {
        let { onDrag: t, type: n } = this.props,
            { clientX: l, clientY: i } = e;
        t(this.calculatePercentage(l, i), n);
    };
    handleDragStart = (e) => {
        let { onDragStart: t, onDrag: n, type: l, currentWindow: i } = this.props,
            { clientX: s, clientY: a } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: r, width: o } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: r, offsetWidth: o }, () => {
            t(l),
                n(this.calculatePercentage(s, a), l),
                i.removeEventListener("mouseup", this.handleDragEnd, !1),
                i.removeEventListener("mousemove", this.handleDragMove, !1),
                i.addEventListener("mouseup", this.handleDragEnd, !1),
                i.addEventListener("mousemove", this.handleDragMove, !1);
        });
    };
    handleDragEnd = () => {
        let { onDragEnd: e, currentWindow: t } = this.props;
        e(),
            t.removeEventListener("mouseup", this.handleDragEnd, !1),
            t.removeEventListener("mousemove", this.handleDragMove, !1),
            this.setState({ dragging: !1 });
    };
    setBubbleRef = (e) => {
        null == e
            ? (this.bubble = null)
            : null != e.componentRef
              ? (this.bubble = e.componentRef)
              : null != e.refs && (this.bubble = e.refs.node);
    };
    render() {
        let { buffers: e, type: t, className: n, sliderClassName: i } = this.props,
            { dragging: s, previewWidth: c, animatedProgress: d } = this.state,
            h = s ? d : c;
        return (0, l.jsx)("div", {
            className: a()(n, t === u.VOLUME ? o.Vd : o.xM),
            children: (0, l.jsx)("div", {
                className: a()(i, s ? o.h4 : o.GU, t === u.VOLUME ? o.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, l.jsxs)("div", {
                    className: a()(o.HY, t === u.VOLUME ? o.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [n, i] = e;
                                  return (0, l.jsx)(
                                      "div",
                                      { className: o.r, style: { width: `${100 * i}%`, left: `${100 * n}%` } },
                                      t,
                                  );
                              })
                            : null,
                        t === u.DURATION
                            ? (0, l.jsx)(r.A.div, {
                                  className: o.mk,
                                  style: { width: c.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, l.jsx)(r.A.div, {
                            className: o.vG,
                            style: { width: d.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, l.jsx)("span", { className: o.Pq }),
                        }),
                        t === u.DURATION
                            ? (0, l.jsx)(r.A.div, {
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
