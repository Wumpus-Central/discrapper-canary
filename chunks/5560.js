n.d(t, {
    V: () => x,
    Z: () => E,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(374470),
    u = n(442837),
    d = n(481060),
    p = n(260300),
    h = n(819640),
    f = n(451478),
    m = n(350707),
    g = n(21825),
    b = n(232495),
    C = n(10401),
    y = n(131257);
function v(e, t, n) {
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
function _(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
class x extends r.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: r,
            targetHeight: l,
            position: a,
            offset: o,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== r ||
            this.props.targetHeight !== l ||
            this.props.position !== a ||
            this.props.offset.x !== o.x ||
            this.props.offset.y !== o.y) &&
            this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = this.contentRef.current;
        if (null == n || !(0, c.kK)(n, HTMLElement)) return;
        let { offsetWidth: i, offsetHeight: r } = n,
            l = {
                offsetX: (this.props.targetWidth - i) / 2,
                offsetY: (this.props.targetHeight - r) / 2,
            };
        switch (this.props.position) {
            case "left":
                l.offsetX = -i;
                break;
            case "right":
                l.offsetX = this.props.targetWidth;
                break;
            case "bottom":
                l.offsetY = this.props.targetHeight;
                break;
            default:
                l.offsetY = -r;
        }
        (l.offsetX += null != (e = this.props.offset.x) ? e : 0),
            (l.offsetY += null != (t = this.props.offset.y) ? t : 0),
            this.setState(l);
    }
    handleSkipTips() {
        p.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, b.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: r } = this.props,
            l = (0, g.S)(e);
        if (null == l) return null;
        let {
                media: o,
                textAlign: s,
                isLongText: c,
                highPriority: u,
                spacing: p,
                arrowAlignment: h = m.cy.TOP,
                popoutPosition: f,
            } = l,
            { offsetX: b, offsetY: C } = this.state,
            v = {
                left: null != b ? r.x + b : void 0,
                top: null != C ? r.y + C : void 0,
            },
            x = (e) => {
                let t = n && !e;
                return {
                    [y.animating]: t,
                    [y.notAnimating]: !t,
                    [y.highPriority]: u,
                };
            },
            E = this.getTutorialPopoutText();
        return (0, i.jsx)(
            m.ZP,
            O(
                _(
                    {
                        innerRef: this.contentRef,
                        position: f,
                        renderMedia: o,
                        textAlign: s,
                        spacing: p,
                        isLongText: c,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: h,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss,
                    },
                    E,
                ),
                {
                    children: (e, t) => {
                        let { isShown: r } = t;
                        return (0, i.jsx)(
                            d.P3F,
                            O(_({}, e), {
                                className: y.indicator,
                                style: v,
                                innerRef: this.contentRef,
                                children: (0, i.jsxs)("div", {
                                    className: a()(y.animationContainer, x(r)),
                                    children: [
                                        ((e) => {
                                            let t = n && !e;
                                            return !0 !== u
                                                ? null
                                                : (0, i.jsxs)("div", {
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: a()(y.top, {
                                                                  [y.animating]: t,
                                                                  [y.notAnimating]: !t,
                                                              }),
                                                          }),
                                                          (0, i.jsx)("div", {
                                                              className: a()(y.bottom, {
                                                                  [y.animating]: t,
                                                                  [y.notAnimating]: !t,
                                                              }),
                                                          }),
                                                      ],
                                                  });
                                        })(r),
                                        (0, i.jsx)("div", { className: a()(y.innerCircle, x(r)) }),
                                        (0, i.jsx)("div", { className: a()(y.outerCircle, x(r)) }),
                                    ],
                                }),
                            }),
                        );
                    },
                },
            ),
        );
    }
    constructor(...e) {
        super(...e),
            v(this, "state", {
                offsetX: null,
                offsetY: null,
            }),
            v(this, "contentRef", r.createRef()),
            v(this, "handleDismiss", () => {
                p.Z.dismiss(this.props.tutorialId);
            });
    }
}
let E =
    12633 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: r,
              } = (0, u.cj)([C.Z, f.Z, h.Z], () => ({
                  indicators: C.Z.getIndicators(),
                  tutorialData: C.Z.getData(),
                  shouldShowAny: C.Z.shouldShowAnyIndicators() && !h.Z.hasLayers(),
                  windowFocused: f.Z.isFocused(),
              }));
              return r
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [r, l] = e,
                                a = t[r];
                            return (
                                s()(null != a, "Missing tutorial definition for ".concat(r)),
                                (0, i.jsx)(
                                    x,
                                    _(
                                        {
                                            tutorialId: r,
                                            tutorialDefinition: a,
                                            focused: n,
                                        },
                                        l,
                                    ),
                                    r,
                                )
                            );
                        }),
                    })
                  : null;
          }
        : null;
