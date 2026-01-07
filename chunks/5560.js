n.d(t, {
    V: () => I,
    Z: () => T,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(374470),
    u = n(442837),
    d = n(481060),
    f = n(260300),
    p = n(819640),
    _ = n(451478),
    m = n(350707),
    h = n(21825),
    g = n(232495),
    E = n(10401),
    b = n(261473);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class I extends i.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: r },
            targetWidth: i,
            targetHeight: a,
            position: o,
            offset: s,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== r ||
            this.props.targetWidth !== i ||
            this.props.targetHeight !== a ||
            this.props.position !== o ||
            this.props.offset.x !== s.x ||
            this.props.offset.y !== s.y) &&
            this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = this.contentRef.current;
        if (null == n || !(0, c.kK)(n, HTMLElement)) return;
        let { offsetWidth: r, offsetHeight: i } = n,
            a = {
                offsetX: (this.props.targetWidth - r) / 2,
                offsetY: (this.props.targetHeight - i) / 2,
            };
        switch (this.props.position) {
            case "left":
                a.offsetX = -r;
                break;
            case "right":
                a.offsetX = this.props.targetWidth;
                break;
            case "bottom":
                a.offsetY = this.props.targetHeight;
                break;
            default:
                a.offsetY = -i;
        }
        (a.offsetX += null != (e = this.props.offset.x) ? e : 0),
            (a.offsetY += null != (t = this.props.offset.y) ? t : 0),
            this.setState(a);
    }
    handleSkipTips() {
        f.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, g.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: i } = this.props,
            a = (0, h.S)(e);
        if (null == a) return null;
        let {
                media: s,
                textAlign: l,
                isLongText: c,
                highPriority: u,
                spacing: f,
                arrowAlignment: p = m.cy.TOP,
                popoutPosition: _,
            } = a,
            { offsetX: g, offsetY: E } = this.state,
            y = {
                left: null != g ? i.x + g : void 0,
                top: null != E ? i.y + E : void 0,
            },
            v = (e) => {
                let t = n && !e;
                return !0 !== u
                    ? null
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", {
                                  className: o()(b.top, {
                                      [b.animating]: t,
                                      [b.notAnimating]: !t,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: o()(b.bottom, {
                                      [b.animating]: t,
                                      [b.notAnimating]: !t,
                                  }),
                              }),
                          ],
                      });
            },
            I = (e) => {
                let t = n && !e;
                return {
                    [b.animating]: t,
                    [b.notAnimating]: !t,
                    [b.highPriority]: u,
                };
            },
            T = this.getTutorialPopoutText();
        return (0, r.jsx)(
            m.ZP,
            S(
                O(
                    {
                        innerRef: this.contentRef,
                        position: _,
                        renderMedia: s,
                        textAlign: l,
                        spacing: f,
                        isLongText: c,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: p,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss,
                    },
                    T,
                ),
                {
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, r.jsx)(
                            d.P3F,
                            S(O({}, e), {
                                className: b.indicator,
                                style: y,
                                innerRef: this.contentRef,
                                children: (0, r.jsxs)("div", {
                                    className: o()(b.animationContainer, I(n)),
                                    children: [
                                        v(n),
                                        (0, r.jsx)("div", { className: o()(b.innerCircle, I(n)) }),
                                        (0, r.jsx)("div", { className: o()(b.outerCircle, I(n)) }),
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
            y(this, "state", {
                offsetX: null,
                offsetY: null,
            }),
            y(this, "contentRef", i.createRef()),
            y(this, "handleDismiss", () => {
                f.Z.dismiss(this.props.tutorialId);
            });
    }
}
let T = function () {
    let {
        indicators: e,
        tutorialData: t,
        windowFocused: n,
        shouldShowAny: i,
    } = (0, u.cj)([E.Z, _.Z, p.Z], () => ({
        indicators: E.Z.getIndicators(),
        tutorialData: E.Z.getData(),
        shouldShowAny: E.Z.shouldShowAnyIndicators() && !p.Z.hasLayers(),
        windowFocused: _.Z.isFocused(),
    }));
    return i
        ? (0, r.jsx)(r.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [i, a] = e,
                      o = t[i];
                  return (
                      l()(null != o, "Missing tutorial definition for ".concat(i)),
                      (0, r.jsx)(
                          I,
                          O(
                              {
                                  tutorialId: i,
                                  tutorialDefinition: o,
                                  focused: n,
                              },
                              a,
                          ),
                          i,
                      )
                  );
              }),
          })
        : null;
};
