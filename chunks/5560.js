n.d(t, {
    V: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(995295),
    d = n(513431),
    u = n(442837),
    h = n(481060),
    p = n(260300),
    m = n(997638),
    f = n(819640),
    g = n(451478),
    C = n(21825),
    x = n(232495),
    v = n(10401),
    _ = n(879249);
function I(e, t, n) {
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
class E extends l.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: l,
            targetHeight: r,
            position: a,
            offset: s
        } = e;
        (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== i || this.props.targetWidth !== l || this.props.targetHeight !== r || this.props.position !== a || this.props.offset.x !== s.x || this.props.offset.y !== s.y) && this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = (0, c.findDOMNode)(this);
        if (null == n || !(0, d.k)(n, HTMLElement)) return;
        let { offsetWidth: i, offsetHeight: l } = n,
            r = {
                offsetX: (this.props.targetWidth - i) / 2,
                offsetY: (this.props.targetHeight - l) / 2
            };
        switch (this.props.position) {
            case 'left':
                r.offsetX = -i;
                break;
            case 'right':
                r.offsetX = this.props.targetWidth;
                break;
            case 'bottom':
                r.offsetY = this.props.targetHeight;
                break;
            default:
                r.offsetY = -l;
        }
        (r.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0), (r.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0), this.setState(r);
    }
    handleSkipTips() {
        p.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, x.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: l } = this.props,
            r = (0, C.S)(e);
        if (null == r) return null;
        let { media: s, textAlign: o, isLongText: c, highPriority: d, spacing: u, arrowAlignment: p = m.cy.TOP, popoutPosition: f } = r,
            { offsetX: g, offsetY: x } = this.state,
            v = {
                left: null != g ? l.x + g : void 0,
                top: null != x ? l.y + x : void 0
            },
            I = (e) => {
                let t = n && !e;
                return !0 !== d
                    ? null
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: a()(_.top, {
                                      [_.animating]: t,
                                      [_.notAnimating]: !t
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(_.bottom, {
                                      [_.animating]: t,
                                      [_.notAnimating]: !t
                                  })
                              })
                          ]
                      });
            },
            E = (e) => {
                let t = n && !e;
                return {
                    [_.animating]: t,
                    [_.notAnimating]: !t,
                    [_.highPriority]: d
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
                return (0, i.jsx)(h.Clickable, {
                    ...e,
                    className: _.indicator,
                    style: v,
                    children: (0, i.jsxs)('div', {
                        className: a()(_.animationContainer, E(n)),
                        children: [I(n), (0, i.jsx)('div', { className: a()(_.innerCircle, E(n)) }), (0, i.jsx)('div', { className: a()(_.outerCircle, E(n)) })]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', {
                offsetX: null,
                offsetY: null
            }),
            I(this, 'handleDismiss', () => {
                p.Z.dismiss(this.props.tutorialId);
            });
    }
}
t.Z =
    12633 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: l
              } = (0, u.cj)([v.Z, g.Z, f.Z], () => ({
                  indicators: v.Z.getIndicators(),
                  tutorialData: v.Z.getData(),
                  shouldShowAny: v.Z.shouldShowAnyIndicators() && !f.Z.hasLayers(),
                  windowFocused: g.Z.isFocused()
              }));
              return l
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [l, r] = e,
                                a = t[l];
                            return (
                                o()(null != a, 'Missing tutorial definition for '.concat(l)),
                                (0, i.jsx)(
                                    E,
                                    {
                                        tutorialId: l,
                                        tutorialDefinition: a,
                                        focused: n,
                                        ...r
                                    },
                                    l
                                )
                            );
                        })
                    })
                  : null;
          }
        : null;
