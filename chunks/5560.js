n.d(t, {
    V: () => I,
    Z: () => b
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(995295),
    d = n(374470),
    u = n(442837),
    h = n(481060),
    p = n(260300),
    m = n(997638),
    f = n(819640),
    g = n(451478),
    _ = n(21825),
    C = n(232495),
    x = n(10401),
    v = n(300578);
function E(e, t, n) {
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
class I extends l.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: l,
            targetHeight: a,
            position: r,
            offset: s
        } = e;
        (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== i || this.props.targetWidth !== l || this.props.targetHeight !== a || this.props.position !== r || this.props.offset.x !== s.x || this.props.offset.y !== s.y) && this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = (0, c.findDOMNode)(this);
        if (null == n || !(0, d.k)(n, HTMLElement)) return;
        let { offsetWidth: i, offsetHeight: l } = n,
            a = {
                offsetX: (this.props.targetWidth - i) / 2,
                offsetY: (this.props.targetHeight - l) / 2
            };
        switch (this.props.position) {
            case 'left':
                a.offsetX = -i;
                break;
            case 'right':
                a.offsetX = this.props.targetWidth;
                break;
            case 'bottom':
                a.offsetY = this.props.targetHeight;
                break;
            default:
                a.offsetY = -l;
        }
        (a.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0), (a.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0), this.setState(a);
    }
    handleSkipTips() {
        p.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, C.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: l } = this.props,
            a = (0, _.S)(e);
        if (null == a) return null;
        let { media: s, textAlign: o, isLongText: c, highPriority: d, spacing: u, arrowAlignment: p = m.cy.TOP, popoutPosition: f } = a,
            { offsetX: g, offsetY: C } = this.state,
            x = {
                left: null != g ? l.x + g : void 0,
                top: null != C ? l.y + C : void 0
            },
            E = (e) => {
                let t = n && !e;
                return !0 !== d
                    ? null
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: r()(v.top, {
                                      [v.animating]: t,
                                      [v.notAnimating]: !t
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: r()(v.bottom, {
                                      [v.animating]: t,
                                      [v.notAnimating]: !t
                                  })
                              })
                          ]
                      });
            },
            I = (e) => {
                let t = n && !e;
                return {
                    [v.animating]: t,
                    [v.notAnimating]: !t,
                    [v.highPriority]: d
                };
            },
            b = this.getTutorialPopoutText();
        return (0, i.jsx)(m.ZP, {
            position: f,
            renderMedia: s,
            textAlign: o,
            spacing: u,
            isLongText: c,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: p,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...b,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(h.P3F, {
                    ...e,
                    className: v.indicator,
                    style: x,
                    children: (0, i.jsxs)('div', {
                        className: r()(v.animationContainer, I(n)),
                        children: [E(n), (0, i.jsx)('div', { className: r()(v.innerCircle, I(n)) }), (0, i.jsx)('div', { className: r()(v.outerCircle, I(n)) })]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                offsetX: null,
                offsetY: null
            }),
            E(this, 'handleDismiss', () => {
                p.Z.dismiss(this.props.tutorialId);
            });
    }
}
let b =
    12633 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: l
              } = (0, u.cj)([x.Z, g.Z, f.Z], () => ({
                  indicators: x.Z.getIndicators(),
                  tutorialData: x.Z.getData(),
                  shouldShowAny: x.Z.shouldShowAnyIndicators() && !f.Z.hasLayers(),
                  windowFocused: g.Z.isFocused()
              }));
              return l
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [l, a] = e,
                                r = t[l];
                            return (
                                o()(null != r, 'Missing tutorial definition for '.concat(l)),
                                (0, i.jsx)(
                                    I,
                                    {
                                        tutorialId: l,
                                        tutorialDefinition: r,
                                        focused: n,
                                        ...a
                                    },
                                    l
                                )
                            );
                        })
                    })
                  : null;
          }
        : null;
