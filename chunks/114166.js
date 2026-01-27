n.d(t, {
    A: () => b,
    x: () => g,
});
var i,
    l,
    r = n(627968),
    o = n(64700),
    a = n(735438),
    s = n.n(a),
    u = n(615300),
    c = n(531685);

function d(e, t, n) {
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

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var m = (((i = m || {})[(i.ABOVE = 0)] = "ABOVE"), (i[(i.VISIBLE = 1)] = "VISIBLE"), (i[(i.BELOW = 2)] = "BELOW"), i);

function f(e, t) {
    return {
        toValue: e,
        duration: null != t ? t : 300,
        easing: u.A.Easing.inOut(u.A.Easing.back()),
    };
}

function g(e, t, n) {
    if (null != t) {
        let i = Math.ceil(Math.log10(e + 1));
        return null != n && n > 0 ? Math.min(i, n) * t : i * t;
    }
}
class b extends (l = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { prevValue: n, currValue: i, nextValue: l } = t;
        return null == n && i !== e.value
            ? {
                  prevValue: c.A.isFocused() ? i : null,
                  currValue: e.value,
              }
            : null != l && l !== e.value
              ? {
                    nextValue: e.value,
                }
              : null;
    }
    componentDidUpdate(e, t) {
        let { prevValue: n, currValue: i } = this.state;
        n !== t.prevValue && null != n && this.animateBetween(n, i);
    }
    animateBetween(e, t) {
        let n,
            { forcePosition: i, animationSpeed: l } = this.props;
        this.prevAnimate.setValue(1),
            null != i
                ? 0 === i
                    ? (this.currAnimate.setValue(0), (n = 2))
                    : 2 === i && (this.currAnimate.setValue(2), (n = 0))
                : e > t
                  ? (this.currAnimate.setValue(0), (n = 2))
                  : (this.currAnimate.setValue(2), (n = 0)),
            u.A.parallel([u.A.timing(this.prevAnimate, f(n, l)), u.A.timing(this.currAnimate, f(1, l))]).start(
                this.animateNext,
            );
    }
    getAnimatedStyle(e) {
        let { animationColor: t } = this.props;
        return p(
            {
                transform: [
                    {
                        translateY: e.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: ["-100%", "0%", "100%"],
                        }),
                    },
                ],
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            null != t && {
                color: t,
            },
        );
    }
    getMinWidth(e) {
        let { digitWidth: t, padStartLength: n } = this.props;
        return g(e, t, n);
    }
    padValue(e) {
        let { padStartLength: t } = this.props;
        return null != t ? String(e).padStart(t, "0") : e;
    }
    render() {
        let { prevValue: e, currValue: t } = this.state,
            { color: n, formatString: i } = this.props,
            l = s().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
        if (null == e)
            return (0, r.jsx)(
                "div",
                h(p({}, l), {
                    style: {
                        color: n,
                        minWidth: this.getMinWidth(t),
                    },
                    children: null != i ? i(this.padValue(t)) : this.padValue(t),
                }),
            );
        let o = Math.max(e, t);
        return (0, r.jsxs)(
            "div",
            h(p({}, l), {
                style: {
                    color: n,
                    position: "relative",
                    overflow: "hidden",
                },
                children: [
                    (0, r.jsx)("div", {
                        style: {
                            visibility: "hidden",
                            minWidth: this.getMinWidth(o),
                        },
                        children: this.padValue(o),
                    }),
                    (0, r.jsx)(u.A.div, {
                        style: p(
                            {
                                color: n,
                            },
                            this.getAnimatedStyle(this.prevAnimate),
                        ),
                        children: null != i ? i(this.padValue(e)) : this.padValue(e),
                    }),
                    (0, r.jsx)(u.A.div, {
                        style: p(
                            {
                                color: n,
                            },
                            this.getAnimatedStyle(this.currAnimate),
                        ),
                        children: null != i ? i(this.padValue(t)) : this.padValue(t),
                    }),
                ],
            }),
        );
    }
    constructor(e) {
        super(e),
            d(this, "prevAnimate", void 0),
            d(this, "currAnimate", void 0),
            d(this, "animateNext", () => {
                let { currValue: e, nextValue: t } = this.state;
                null != t
                    ? this.setState({
                          prevValue: c.A.isFocused() ? e : null,
                          currValue: t,
                          nextValue: null,
                      })
                    : this.setState({
                          prevValue: null,
                      });
            }),
            (this.state = {
                prevValue: null,
                currValue: e.value,
                nextValue: null,
            }),
            (this.prevAnimate = new u.A.Value(0)),
            (this.currAnimate = new u.A.Value(1));
    }
}
d(b, "Positions", m);
