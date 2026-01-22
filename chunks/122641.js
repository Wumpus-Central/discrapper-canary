n.d(t, { A: () => m }), n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(615300),
    c = n(785809);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {
        friction: 14,
        tension: 200,
    },
    p = {
        DURATION: "DURATION",
        VOLUME: "VOLUME",
    };
function _(e) {
    let t = 0 | e,
        n = t % 60;
    return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
}
class h extends (r = a.Component) {
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
    componentDidUpdate(e, t) {
        let { dragging: n, previewWidth: r, animatedProgress: i } = this.state;
        !n && t.dragging && r.setValue(i._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: n } = this.state;
        t ? l.A.spring(n, d({ toValue: e }, f)).start() : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: r },
        } = this;
        if (null == n) return 0;
        let { left: i, width: a, bottom: s, height: o } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, r === p.VOLUME ? (s - t) / o : (e - i) / a));
    }
    render() {
        let { buffers: e, type: t, className: n, sliderClassName: r } = this.props,
            { dragging: a, previewWidth: s, animatedProgress: u } = this.state,
            d = a ? u : s;
        return (0, i.jsx)("div", {
            className: o()(n, t === p.VOLUME ? c.Vd : c.xM),
            children: (0, i.jsx)("div", {
                className: o()(r, a ? c.h4 : c.GU, t === p.VOLUME ? c.iR : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => {
                    this.wrapper = e;
                },
                children: (0, i.jsxs)("div", {
                    className: o()(c.HY, t === p.VOLUME ? c.xw : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [n, r] = e;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: c.r,
                                          style: {
                                              width: "".concat(100 * r, "%"),
                                              left: "".concat(100 * n, "%"),
                                          },
                                      },
                                      t,
                                  );
                              })
                            : null,
                        t === p.DURATION
                            ? (0, i.jsx)(l.A.div, {
                                  className: c.mk,
                                  style: {
                                      width: s.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ["0%", "100%"],
                                      }),
                                  },
                              })
                            : null,
                        (0, i.jsx)(l.A.div, {
                            className: c.vG,
                            style: {
                                width: u.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"],
                                }),
                            },
                            children: (0, i.jsx)("span", { className: c.Pq }),
                        }),
                        t === p.DURATION
                            ? (0, i.jsx)(l.A.div, {
                                  ref: this.setBubbleRef,
                                  className: c.Tq,
                                  style: {
                                      left: d.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ["0%", "100%"],
                                      }),
                                  },
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "state", {
                animatedProgress: new l.A.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new l.A.Value(0),
            }),
            u(this, "wrapper", void 0),
            u(this, "bubble", void 0),
            u(this, "_previewId", void 0),
            u(this, "_progressId", void 0),
            u(this, "handlePreviewChange", () => {
                let {
                    bubble: e,
                    state: { dragging: t, previewWidth: n },
                    props: { value: r },
                } = this;
                t || null == e || (e.innerText = _(n._value * r));
            }),
            u(this, "handleAnimatedChange", () => {
                let {
                    bubble: e,
                    state: { dragging: t, animatedProgress: n },
                    props: { value: r },
                } = this;
                t && null != e && (e.innerText = _(n._value * r));
            }),
            u(this, "handleMouseMove", (e) => {
                let { dragging: t, previewWidth: n } = this.state;
                if (t) return;
                let { clientX: r, clientY: i } = e;
                n.setValue(this.calculatePercentage(r, i));
            }),
            u(this, "handleDragMove", (e) => {
                let { onDrag: t, type: n } = this.props,
                    { clientX: r, clientY: i } = e;
                t(this.calculatePercentage(r, i), n);
            }),
            u(this, "handleDragStart", (e) => {
                let { onDragStart: t, onDrag: n, type: r, currentWindow: i } = this.props,
                    { clientX: a, clientY: s } = e;
                if ((e.preventDefault(), null == this.wrapper)) return;
                let { left: o, width: l } = this.wrapper.getBoundingClientRect();
                this.setState(
                    {
                        dragging: !0,
                        offsetLeft: o,
                        offsetWidth: l,
                    },
                    () => {
                        t(r),
                            n(this.calculatePercentage(a, s), r),
                            i.removeEventListener("mouseup", this.handleDragEnd, !1),
                            i.removeEventListener("mousemove", this.handleDragMove, !1),
                            i.addEventListener("mouseup", this.handleDragEnd, !1),
                            i.addEventListener("mousemove", this.handleDragMove, !1);
                    },
                );
            }),
            u(this, "handleDragEnd", () => {
                let { onDragEnd: e, currentWindow: t } = this.props;
                e(),
                    t.removeEventListener("mouseup", this.handleDragEnd, !1),
                    t.removeEventListener("mousemove", this.handleDragMove, !1),
                    this.setState({ dragging: !1 });
            }),
            u(this, "setBubbleRef", (e) => {
                null == e
                    ? (this.bubble = null)
                    : null != e.componentRef
                      ? (this.bubble = e.componentRef)
                      : null != e.refs && (this.bubble = e.refs.node);
            });
    }
}
u(h, "Types", p), u(h, "defaultProps", { currentWindow: window });
let m = h;
