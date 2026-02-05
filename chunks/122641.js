"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(785809);
let u = { friction: 14, tension: 200 },
    c = { DURATION: "DURATION", VOLUME: "VOLUME" };
function d(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
class _ extends i.Component {
    static Types = c;
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
            props: { value: r },
        } = this;
        t || null == e || (e.innerText = d(n._value * r));
    };
    handleAnimatedChange = () => {
        let {
            bubble: e,
            state: { dragging: t, animatedProgress: n },
            props: { value: r },
        } = this;
        t && null != e && (e.innerText = d(n._value * r));
    };
    componentDidUpdate(e, t) {
        let { dragging: n, previewWidth: r, animatedProgress: i } = this.state;
        !n && t.dragging && r.setValue(i._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: n } = this.state;
        t ? o.A.spring(n, { toValue: e, ...u }).start() : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: r },
        } = this;
        if (null == n) return 0;
        let { left: i, width: a, bottom: s, height: o } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, r === c.VOLUME ? (s - t) / o : (e - i) / a));
    }
    handleMouseMove = (e) => {
        let { dragging: t, previewWidth: n } = this.state;
        if (t) return;
        let { clientX: r, clientY: i } = e;
        n.setValue(this.calculatePercentage(r, i));
    };
    handleDragMove = (e) => {
        let { onDrag: t, type: n } = this.props,
            { clientX: r, clientY: i } = e;
        t(this.calculatePercentage(r, i), n);
    };
    handleDragStart = (e) => {
        let { onDragStart: t, onDrag: n, type: r, currentWindow: i } = this.props,
            { clientX: a, clientY: s } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: o, width: l } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: o, offsetWidth: l }, () => {
            t(r),
                n(this.calculatePercentage(a, s), r),
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
            { dragging: a, previewWidth: u, animatedProgress: d } = this.state,
            _ = a ? d : u;
        return (0, r.jsx)("div", {
            className: s()(n, t === c.VOLUME ? l.Vd : l.xM),
            children: (0, r.jsx)("div", {
                className: s()(i, a ? l.h4 : l.GU, t === c.VOLUME ? l.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, r.jsxs)("div", {
                    className: s()(l.HY, t === c.VOLUME ? l.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [n, i] = e;
                                  return (0, r.jsx)(
                                      "div",
                                      { className: l.r, style: { width: `${100 * i}%`, left: `${100 * n}%` } },
                                      t,
                                  );
                              })
                            : null,
                        t === c.DURATION
                            ? (0, r.jsx)(o.A.div, {
                                  className: l.mk,
                                  style: { width: u.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, r.jsx)(o.A.div, {
                            className: l.vG,
                            style: { width: d.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, r.jsx)("span", { className: l.Pq }),
                        }),
                        t === c.DURATION
                            ? (0, r.jsx)(o.A.div, {
                                  ref: this.setBubbleRef,
                                  className: l.Tq,
                                  style: { left: _.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
}
let f = _;
