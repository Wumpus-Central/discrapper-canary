n.d(t, {
    V: () => j,
    Z: () => O
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(374470),
    u = n(442837),
    d = n(481060),
    p = n(260300),
    h = n(997638),
    f = n(819640),
    m = n(451478),
    g = n(21825),
    b = n(232495),
    _ = n(10401),
    C = n(322274);
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
function v(e, t) {
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
class j extends i.PureComponent {
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
        let n = this.contentRef.current;
        if (null == n || !(0, c.k)(n, HTMLElement)) return;
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
        (l.offsetX += null != (e = this.props.offset.x) ? e : 0), (l.offsetY += null != (t = this.props.offset.y) ? t : 0), this.setState(l);
    }
    handleSkipTips() {
        p.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, b.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: i } = this.props,
            l = (0, g.S)(e);
        if (null == l) return null;
        let { media: a, textAlign: s, isLongText: c, highPriority: u, spacing: p, arrowAlignment: f = h.cy.TOP, popoutPosition: m } = l,
            { offsetX: b, offsetY: _ } = this.state,
            y = {
                left: null != b ? i.x + b : void 0,
                top: null != _ ? i.y + _ : void 0
            },
            j = (e) => {
                let t = n && !e;
                return !0 !== u
                    ? null
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: o()(C.top, {
                                      [C.animating]: t,
                                      [C.notAnimating]: !t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(C.bottom, {
                                      [C.animating]: t,
                                      [C.notAnimating]: !t
                                  })
                              })
                          ]
                      });
            },
            O = (e) => {
                let t = n && !e;
                return {
                    [C.animating]: t,
                    [C.notAnimating]: !t,
                    [C.highPriority]: u
                };
            },
            E = this.getTutorialPopoutText();
        return (0, r.jsx)(
            h.ZP,
            v(
                x(
                    {
                        position: m,
                        renderMedia: a,
                        textAlign: s,
                        spacing: p,
                        isLongText: c,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: f,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss
                    },
                    E
                ),
                {
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, r.jsx)(
                            d.P3F,
                            v(x({}, e), {
                                className: C.indicator,
                                style: y,
                                innerRef: this.contentRef,
                                children: (0, r.jsxs)('div', {
                                    className: o()(C.animationContainer, O(n)),
                                    children: [j(n), (0, r.jsx)('div', { className: o()(C.innerCircle, O(n)) }), (0, r.jsx)('div', { className: o()(C.outerCircle, O(n)) })]
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
            y(this, 'contentRef', i.createRef()),
            y(this, 'handleDismiss', () => {
                p.Z.dismiss(this.props.tutorialId);
            });
    }
}
let O =
    12633 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: i
              } = (0, u.cj)([_.Z, m.Z, f.Z], () => ({
                  indicators: _.Z.getIndicators(),
                  tutorialData: _.Z.getData(),
                  shouldShowAny: _.Z.shouldShowAnyIndicators() && !f.Z.hasLayers(),
                  windowFocused: m.Z.isFocused()
              }));
              return i
                  ? (0, r.jsx)(r.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [i, l] = e,
                                o = t[i];
                            return (
                                s()(null != o, 'Missing tutorial definition for '.concat(i)),
                                (0, r.jsx)(
                                    j,
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
