(n.d(t, {
    V: () => T,
    Z: () => S
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(374470),
    u = n(442837),
    d = n(481060),
    f = n(260300),
    _ = n(997638),
    p = n(819640),
    h = n(451478),
    m = n(21825),
    g = n(232495),
    E = n(10401),
    b = n(322274);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
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
class T extends i.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: r },
            targetWidth: i,
            targetHeight: o,
            position: a,
            offset: s
        } = e;
        (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== r || this.props.targetWidth !== i || this.props.targetHeight !== o || this.props.position !== a || this.props.offset.x !== s.x || this.props.offset.y !== s.y) && this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = this.contentRef.current;
        if (null == n || !(0, c.k)(n, HTMLElement)) return;
        let { offsetWidth: r, offsetHeight: i } = n,
            o = {
                offsetX: (this.props.targetWidth - r) / 2,
                offsetY: (this.props.targetHeight - i) / 2
            };
        switch (this.props.position) {
            case 'left':
                o.offsetX = -r;
                break;
            case 'right':
                o.offsetX = this.props.targetWidth;
                break;
            case 'bottom':
                o.offsetY = this.props.targetHeight;
                break;
            default:
                o.offsetY = -i;
        }
        ((o.offsetX += null != (e = this.props.offset.x) ? e : 0), (o.offsetY += null != (t = this.props.offset.y) ? t : 0), this.setState(o));
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
            o = (0, m.S)(e);
        if (null == o) return null;
        let { media: s, textAlign: l, isLongText: c, highPriority: u, spacing: f, arrowAlignment: p = _.cy.TOP, popoutPosition: h } = o,
            { offsetX: g, offsetY: E } = this.state,
            y = {
                left: null != g ? i.x + g : void 0,
                top: null != E ? i.y + E : void 0
            },
            v = (e) => {
                let t = n && !e;
                return !0 !== u
                    ? null
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: a()(b.top, {
                                      [b.animating]: t,
                                      [b.notAnimating]: !t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(b.bottom, {
                                      [b.animating]: t,
                                      [b.notAnimating]: !t
                                  })
                              })
                          ]
                      });
            },
            T = (e) => {
                let t = n && !e;
                return {
                    [b.animating]: t,
                    [b.notAnimating]: !t,
                    [b.highPriority]: u
                };
            },
            S = this.getTutorialPopoutText();
        return (0, r.jsx)(
            _.ZP,
            I(
                O(
                    {
                        innerRef: this.contentRef,
                        position: h,
                        renderMedia: s,
                        textAlign: l,
                        spacing: f,
                        isLongText: c,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: p,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss
                    },
                    S
                ),
                {
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, r.jsx)(
                            d.P3F,
                            I(O({}, e), {
                                className: b.indicator,
                                style: y,
                                innerRef: this.contentRef,
                                children: (0, r.jsxs)('div', {
                                    className: a()(b.animationContainer, T(n)),
                                    children: [v(n), (0, r.jsx)('div', { className: a()(b.innerCircle, T(n)) }), (0, r.jsx)('div', { className: a()(b.outerCircle, T(n)) })]
                                })
                            })
                        );
                    }
                }
            )
        );
    }
    constructor(...e) {
        (super(...e),
            y(this, 'state', {
                offsetX: null,
                offsetY: null
            }),
            y(this, 'contentRef', i.createRef()),
            y(this, 'handleDismiss', () => {
                f.Z.dismiss(this.props.tutorialId);
            }));
    }
}
let S = function () {
    let {
        indicators: e,
        tutorialData: t,
        windowFocused: n,
        shouldShowAny: i
    } = (0, u.cj)([E.Z, h.Z, p.Z], () => ({
        indicators: E.Z.getIndicators(),
        tutorialData: E.Z.getData(),
        shouldShowAny: E.Z.shouldShowAnyIndicators() && !p.Z.hasLayers(),
        windowFocused: h.Z.isFocused()
    }));
    return i
        ? (0, r.jsx)(r.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [i, o] = e,
                      a = t[i];
                  return (
                      l()(null != a, 'Missing tutorial definition for '.concat(i)),
                      (0, r.jsx)(
                          T,
                          O(
                              {
                                  tutorialId: i,
                                  tutorialDefinition: a,
                                  focused: n
                              },
                              o
                          ),
                          i
                      )
                  );
              })
          })
        : null;
};
