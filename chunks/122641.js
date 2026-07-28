"use strict";
n.d(t, { A: () => E });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(152950);
let d = { friction: 14, tension: 200 },
    c = { DURATION: "DURATION", VOLUME: "VOLUME" };
function u(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
class _ extends r.Component {
    static Types = c;
    static defaultProps = { currentWindow: window };
    state = {
        animatedProgress: new l.A.Value(0),
        dragging: !1,
        offsetLeft: 0,
        offsetWidth: 0,
        previewWidth: new l.A.Value(0),
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
            props: { value: i },
        } = this;
        t || null == e || (e.innerText = u(n._value * i));
    };
    handleAnimatedChange = () => {
        let {
            bubble: e,
            state: { dragging: t, animatedProgress: n },
            props: { value: i },
        } = this;
        t && null != e && (e.innerText = u(n._value * i));
    };
    componentDidUpdate(e, t) {
        let { dragging: n, previewWidth: i, animatedProgress: r } = this.state;
        !n && t.dragging && i.setValue(r._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: n } = this.state;
        t ? l.A.spring(n, { toValue: e, ...d }).start() : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: i },
        } = this;
        if (null == n) return 0;
        let { left: r, width: a, bottom: s, height: l } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, i === c.VOLUME ? (s - t) / l : (e - r) / a));
    }
    handleMouseMove = (e) => {
        let { dragging: t, previewWidth: n } = this.state;
        if (t) return;
        let { clientX: i, clientY: r } = e;
        n.setValue(this.calculatePercentage(i, r));
    };
    handleDragMove = (e) => {
        let { onDrag: t, type: n } = this.props,
            { clientX: i, clientY: r } = e;
        t(this.calculatePercentage(i, r), n);
    };
    handleDragStart = (e) => {
        let { onDragStart: t, onDrag: n, type: i, currentWindow: r } = this.props,
            { clientX: a, clientY: s } = e;
        if ((e.preventDefault(), null == this.wrapper)) return;
        let { left: l, width: o } = this.wrapper.getBoundingClientRect();
        this.setState({ dragging: !0, offsetLeft: l, offsetWidth: o }, () => {
            t(i),
                n(this.calculatePercentage(a, s), i),
                r.removeEventListener("mouseup", this.handleDragEnd, !1),
                r.removeEventListener("mousemove", this.handleDragMove, !1),
                r.addEventListener("mouseup", this.handleDragEnd, !1),
                r.addEventListener("mousemove", this.handleDragMove, !1);
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
        let { buffers: e, type: t, className: n, sliderClassName: r } = this.props,
            { dragging: a, previewWidth: d, animatedProgress: u } = this.state,
            _ = a ? u : d;
        return (0, i.jsx)("div", {
            className: s()(n, t === c.VOLUME ? o.Vd : o.xM),
            children: (0, i.jsx)("div", {
                className: s()(r, a ? o.h4 : o.GU, t === c.VOLUME ? o.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, i.jsxs)("div", {
                    className: s()(o.HY, t === c.VOLUME ? o.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [n, r] = e;
                                  return (0, i.jsx)(
                                      "div",
                                      { className: o.r, style: { width: `${100 * r}%`, left: `${100 * n}%` } },
                                      t,
                                  );
                              })
                            : null,
                        t === c.DURATION
                            ? (0, i.jsx)(l.A.div, {
                                  className: o.mk,
                                  style: { width: d.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                        (0, i.jsx)(l.A.div, {
                            className: o.vG,
                            style: { width: u.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                            children: (0, i.jsx)("span", { className: o.Pq }),
                        }),
                        t === c.DURATION
                            ? (0, i.jsx)(l.A.div, {
                                  ref: this.setBubbleRef,
                                  className: o.Tq,
                                  style: { left: _.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
}
let E = _;
