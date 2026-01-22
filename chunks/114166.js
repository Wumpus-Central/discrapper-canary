n.d(t, {
    A: () => g,
    x: () => m,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(735438),
    o = n.n(s),
    l = n(615300),
    c = n(531685);

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

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var _ = (function (e) {
    return (e[(e.ABOVE = 0)] = "ABOVE"), (e[(e.VISIBLE = 1)] = "VISIBLE"), (e[(e.BELOW = 2)] = "BELOW"), e;
})(_ || {});

function h(e, t) {
    return {
        toValue: e,
        duration: null != t ? t : 300,
        easing: l.A.Easing.inOut(l.A.Easing.back()),
    };
}

function m(e, t, n) {
    if (null != t) {
        let r = Math.ceil(Math.log10(e + 1));
        return null != n && n > 0 ? Math.min(r, n) * t : r * t;
    }
}
class g extends (r = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { prevValue: n, currValue: r, nextValue: i } = t;
        return null == n && r !== e.value
            ? {
                  prevValue: c.A.isFocused() ? r : null,
                  currValue: e.value,
              }
            : null != i && i !== e.value
              ? {
                    nextValue: e.value,
                }
              : null;
    }
    componentDidUpdate(e, t) {
        let { prevValue: n, currValue: r } = this.state;
        n !== t.prevValue && null != n && this.animateBetween(n, r);
    }
    animateBetween(e, t) {
        let n,
            { forcePosition: r, animationSpeed: i } = this.props;
        this.prevAnimate.setValue(1),
            null != r
                ? 0 === r
                    ? (this.currAnimate.setValue(0), (n = 2))
                    : 2 === r && (this.currAnimate.setValue(2), (n = 0))
                : e > t
                  ? (this.currAnimate.setValue(0), (n = 2))
                  : (this.currAnimate.setValue(2), (n = 0)),
            l.A.parallel([l.A.timing(this.prevAnimate, h(n, i)), l.A.timing(this.currAnimate, h(1, i))]).start(
                this.animateNext,
            );
    }
    getAnimatedStyle(e) {
        let { animationColor: t } = this.props;
        return d(
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
        return m(e, t, n);
    }
    padValue(e) {
        let { padStartLength: t } = this.props;
        return null != t ? String(e).padStart(t, "0") : e;
    }
    render() {
        let { prevValue: e, currValue: t } = this.state,
            { color: n, formatString: r } = this.props,
            a = o().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
        if (null == e)
            return (0, i.jsx)(
                "div",
                p(d({}, a), {
                    style: {
                        color: n,
                        minWidth: this.getMinWidth(t),
                    },
                    children: null != r ? r(this.padValue(t)) : this.padValue(t),
                }),
            );
        let s = Math.max(e, t);
        return (0, i.jsxs)(
            "div",
            p(d({}, a), {
                style: {
                    color: n,
                    position: "relative",
                    overflow: "hidden",
                },
                children: [
                    (0, i.jsx)("div", {
                        style: {
                            visibility: "hidden",
                            minWidth: this.getMinWidth(s),
                        },
                        children: this.padValue(s),
                    }),
                    (0, i.jsx)(l.A.div, {
                        style: d(
                            {
                                color: n,
                            },
                            this.getAnimatedStyle(this.prevAnimate),
                        ),
                        children: null != r ? r(this.padValue(e)) : this.padValue(e),
                    }),
                    (0, i.jsx)(l.A.div, {
                        style: d(
                            {
                                color: n,
                            },
                            this.getAnimatedStyle(this.currAnimate),
                        ),
                        children: null != r ? r(this.padValue(t)) : this.padValue(t),
                    }),
                ],
            }),
        );
    }
    constructor(e) {
        super(e),
            u(this, "prevAnimate", void 0),
            u(this, "currAnimate", void 0),
            u(this, "animateNext", () => {
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
            (this.prevAnimate = new l.A.Value(0)),
            (this.currAnimate = new l.A.Value(1));
    }
}
u(g, "Positions", _);
