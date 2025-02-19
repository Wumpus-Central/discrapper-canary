n.d(t, {
    V: () => O,
    Z: () => N
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(995295),
    u = n(374470),
    d = n(442837),
    p = n(481060),
    h = n(260300),
    f = n(997638),
    m = n(819640),
    g = n(451478),
    b = n(21825),
    _ = n(232495),
    C = n(10401),
    v = n(527928);
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class O extends i.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: r },
            targetWidth: i,
            targetHeight: l,
            position: o,
            offset: a
        } = e;
        (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== r || this.props.targetWidth !== i || this.props.targetHeight !== l || this.props.position !== o || this.props.offset.x !== a.x || this.props.offset.y !== a.y) && this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = (0, c.findDOMNode)(this);
        if (null == n || !(0, u.k)(n, HTMLElement)) return;
        let { offsetWidth: r, offsetHeight: i } = n,
            l = {
                offsetX: (this.props.targetWidth - r) / 2,
                offsetY: (this.props.targetHeight - i) / 2
            };
        switch (this.props.position) {
            case 'left':
                l.offsetX = -r;
                break;
            case 'right':
                l.offsetX = this.props.targetWidth;
                break;
            case 'bottom':
                l.offsetY = this.props.targetHeight;
                break;
            default:
                l.offsetY = -i;
        }
        (l.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0), (l.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0), this.setState(l);
    }
    handleSkipTips() {
        h.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, _.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: i } = this.props,
            l = (0, b.S)(e);
        if (null == l) return null;
        let { media: a, textAlign: s, isLongText: c, highPriority: u, spacing: d, arrowAlignment: h = f.cy.TOP, popoutPosition: m } = l,
            { offsetX: g, offsetY: _ } = this.state,
            C = {
                left: null != g ? i.x + g : void 0,
                top: null != _ ? i.y + _ : void 0
            },
            y = (e) => {
                let t = n && !e;
                return !0 !== u
                    ? null
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: o()(v.top, {
                                      [v.animating]: t,
                                      [v.notAnimating]: !t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(v.bottom, {
                                      [v.animating]: t,
                                      [v.notAnimating]: !t
                                  })
                              })
                          ]
                      });
            },
            O = (e) => {
                let t = n && !e;
                return {
                    [v.animating]: t,
                    [v.notAnimating]: !t,
                    [v.highPriority]: u
                };
            },
            N = this.getTutorialPopoutText();
        return (0, r.jsx)(
            f.ZP,
            j(
                x(
                    {
                        position: m,
                        renderMedia: a,
                        textAlign: s,
                        spacing: d,
                        isLongText: c,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: h,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss
                    },
                    N
                ),
                {
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, r.jsx)(
                            p.P3F,
                            j(x({}, e), {
                                className: v.indicator,
                                style: C,
                                children: (0, r.jsxs)('div', {
                                    className: o()(v.animationContainer, O(n)),
                                    children: [y(n), (0, r.jsx)('div', { className: o()(v.innerCircle, O(n)) }), (0, r.jsx)('div', { className: o()(v.outerCircle, O(n)) })]
                                })
                            })
                        );
                    }
                }
            )
        );
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', {
                offsetX: null,
                offsetY: null
            }),
            y(this, 'handleDismiss', () => {
                h.Z.dismiss(this.props.tutorialId);
            });
    }
}
let N =
    12633 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: i
              } = (0, d.cj)([C.Z, g.Z, m.Z], () => ({
                  indicators: C.Z.getIndicators(),
                  tutorialData: C.Z.getData(),
                  shouldShowAny: C.Z.shouldShowAnyIndicators() && !m.Z.hasLayers(),
                  windowFocused: g.Z.isFocused()
              }));
              return i
                  ? (0, r.jsx)(r.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [i, l] = e,
                                o = t[i];
                            return (
                                s()(null != o, 'Missing tutorial definition for '.concat(i)),
                                (0, r.jsx)(
                                    O,
                                    x(
                                        {
                                            tutorialId: i,
                                            tutorialDefinition: o,
                                            focused: n
                                        },
                                        l
                                    ),
                                    i
                                )
                            );
                        })
                    })
                  : null;
          }
        : null;
