n.d(t, {
    A: () => I,
    Y: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(621466),
    u = n(311907),
    d = n(397927),
    f = n(166649),
    p = n(186111),
    _ = n(531685),
    h = n(244083),
    m = n(31456),
    g = n(574842),
    E = n(482361),
    b = n(378496);

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

function A(e, t) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class S extends i.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: r },
            targetWidth: i,
            targetHeight: a,
            position: s,
            offset: o,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== r ||
            this.props.targetWidth !== i ||
            this.props.targetHeight !== a ||
            this.props.position !== s ||
            this.props.offset.x !== o.x ||
            this.props.offset.y !== o.y) &&
            this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = this.contentRef.current;
        if (null == n || !(0, c.vq)(n, HTMLElement)) return;
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
        f.A.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, g.F)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: i } = this.props,
            a = (0, m.p)(e);
        if (null == a) return null;
        let {
                media: o,
                textAlign: l,
                isLongText: c,
                highPriority: u,
                spacing: f,
                arrowAlignment: p = h.oN.TOP,
                popoutPosition: _,
            } = a,
            { offsetX: g, offsetY: E } = this.state,
            y = {
                left: null != g ? i.x + g : void 0,
                top: null != E ? i.y + E : void 0,
            },
            A = (e) => {
                let t = n && !e;
                return !0 !== u
                    ? null
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", {
                                  className: s()(b.Mn, {
                                      [b.bW]: t,
                                      [b.EO]: !t,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: s()(b.sQ, {
                                      [b.bW]: t,
                                      [b.EO]: !t,
                                  }),
                              }),
                          ],
                      });
            },
            S = (e) => {
                let t = n && !e;
                return {
                    [b.bW]: t,
                    [b.EO]: !t,
                    [b.TX]: u,
                };
            },
            I = this.getTutorialPopoutText();
        return (0, r.jsx)(
            h.Ay,
            v(
                O(
                    {
                        innerRef: this.contentRef,
                        position: _,
                        renderMedia: o,
                        textAlign: l,
                        spacing: f,
                        isLongText: c,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: p,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss,
                    },
                    I,
                ),
                {
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, r.jsx)(
                            d.DUT,
                            v(O({}, e), {
                                className: b.q3,
                                style: y,
                                innerRef: this.contentRef,
                                children: (0, r.jsxs)("div", {
                                    className: s()(b.Mp, S(n)),
                                    children: [
                                        A(n),
                                        (0, r.jsx)("div", {
                                            className: s()(b.r6, S(n)),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: s()(b.CY, S(n)),
                                        }),
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
                f.A.dismiss(this.props.tutorialId);
            });
    }
}
let I = function () {
    let {
        indicators: e,
        tutorialData: t,
        windowFocused: n,
        shouldShowAny: i,
    } = (0, u.cf)([E.A, _.A, p.A], () => ({
        indicators: E.A.getIndicators(),
        tutorialData: E.A.getData(),
        shouldShowAny: E.A.shouldShowAnyIndicators() && !p.A.hasLayers(),
        windowFocused: _.A.isFocused(),
    }));
    return i
        ? (0, r.jsx)(r.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [i, a] = e,
                      s = t[i];
                  return (
                      l()(null != s, "Missing tutorial definition for ".concat(i)),
                      (0, r.jsx)(
                          S,
                          O(
                              {
                                  tutorialId: i,
                                  tutorialDefinition: s,
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
