"use strict";
n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(615300),
    o = n(152950);
let u = { friction: 14, tension: 200 },
    c = { DURATION: "DURATION", VOLUME: "VOLUME" };
function d(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
class h extends i.Component {
    static Types = c;
    static defaultProps = { currentWindow: window };
    state = {
        animatedProgress: new a.A.Value(0),
        dragging: !1,
        offsetLeft: 0,
        offsetWidth: 0,
        previewWidth: new a.A.Value(0),
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
        t ? a.A.spring(n, { toValue: e, ...u }).start() : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: l },
        } = this;
        if (null == n) return 0;
        let { left: i, width: s, bottom: r, height: a } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, l === c.VOLUME ? (r - t) / a : (e - i) / s));
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
            { clientX: s, clientY: r } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: a, width: o } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: a, offsetWidth: o }, () => {
            t(l),
                n(this.calculatePercentage(s, r), l),
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
            { dragging: s, previewWidth: u, animatedProgress: d } = this.state,
            h = s ? d : u;
        return (0, l.jsx)("div", {
            className: r()(n, t === c.VOLUME ? o.Vd : o.xM),
            children: (0, l.jsx)("div", {
                className: r()(i, s ? o.h4 : o.GU, t === c.VOLUME ? o.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, l.jsxs)("div", {
                    className: r()(o.HY, t === c.VOLUME ? o.xw : null),
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
                        t === c.DURATION
                            ? (0, l.jsx)(a.A.div, {
                                  className: o.mk,
                                  style: { width: u.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, l.jsx)(a.A.div, {
                            className: o.vG,
                            style: { width: d.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, l.jsx)("span", { className: o.Pq }),
                        }),
                        t === c.DURATION
                            ? (0, l.jsx)(a.A.div, {
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
