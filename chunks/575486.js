"use strict";
n.d(t, { A: () => T, Y: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(621466),
    c = n(311907),
    d = n(939249),
    _ = n(186111),
    f = n(531685),
    p = n(787541),
    h = n(244083),
    E = n(31456),
    m = n(574842),
    g = n(482361),
    A = n(234645);
class I extends i.PureComponent {
    state = { offsetX: null, offsetY: null };
    contentRef = i.createRef();
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: r },
            targetWidth: i,
            targetHeight: s,
            position: a,
            offset: o,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== r ||
            this.props.targetWidth !== i ||
            this.props.targetHeight !== s ||
            this.props.position !== a ||
            this.props.offset.x !== o.x ||
            this.props.offset.y !== o.y) &&
            this.updateCache();
    }
    updateCache() {
        let e = this.contentRef.current;
        if (null == e || !(0, u.vq)(e, HTMLElement)) return;
        let { offsetWidth: t, offsetHeight: n } = e,
            r = { offsetX: (this.props.targetWidth - t) / 2, offsetY: (this.props.targetHeight - n) / 2 };
        switch (this.props.position) {
            case "left":
                r.offsetX = -t;
                break;
            case "right":
                r.offsetX = this.props.targetWidth;
                break;
            case "bottom":
                r.offsetY = this.props.targetHeight;
                break;
            default:
                r.offsetY = -n;
        }
        (r.offsetX += this.props.offset.x ?? 0), (r.offsetY += this.props.offset.y ?? 0), this.setState(r);
    }
    handleSkipTips() {
        p.n7();
    }
    handleDismiss = () => {
        p.X8(this.props.tutorialId);
    };
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, m.F)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: i } = this.props,
            s = (0, E.p)(e);
        if (null == s) return null;
        let {
                media: o,
                textAlign: l,
                isLongText: u,
                highPriority: c,
                spacing: _,
                arrowAlignment: f = h.oN.TOP,
                popoutPosition: p,
            } = s,
            { offsetX: m, offsetY: g } = this.state,
            I = { left: null != m ? i.x + m : void 0, top: null != g ? i.y + g : void 0 },
            T = (e) => {
                let t = n && !e;
                return { [A.bW]: t, [A.EO]: !t, [A.TX]: c };
            },
            S = this.getTutorialPopoutText();
        return (0, r.jsx)(h.Ay, {
            innerRef: this.contentRef,
            position: p,
            renderMedia: o,
            textAlign: l,
            spacing: _,
            isLongText: u,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: f,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...S,
            children: (e, t) => {
                let i,
                    { isShown: s } = t;
                return (0, r.jsx)(d.D, {
                    ...e,
                    className: A.q3,
                    style: I,
                    innerRef: this.contentRef,
                    children: (0, r.jsxs)("div", {
                        className: a()(A.Mp, T(s)),
                        children: [
                            ((i = n && !s),
                            !0 !== c
                                ? null
                                : (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)("div", { className: a()(A.Mn, { [A.bW]: i, [A.EO]: !i }) }),
                                          (0, r.jsx)("div", { className: a()(A.sQ, { [A.bW]: i, [A.EO]: !i }) }),
                                      ],
                                  })),
                            (0, r.jsx)("div", { className: a()(A.r6, T(s)) }),
                            (0, r.jsx)("div", { className: a()(A.CY, T(s)) }),
                        ],
                    }),
                });
            },
        });
    }
}
let T = function () {
    let {
        indicators: e,
        tutorialData: t,
        windowFocused: n,
        shouldShowAny: i,
    } = (0, c.cf)([g.A, f.A, _.A], () => ({
        indicators: g.A.getIndicators(),
        tutorialData: g.A.getData(),
        shouldShowAny: g.A.shouldShowAnyIndicators() && !_.A.hasLayers(),
        windowFocused: f.A.isFocused(),
    }));
    return i
        ? (0, r.jsx)(r.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [i, s] = e,
                      a = t[i];
                  return (
                      l()(null != a, `Missing tutorial definition for ${i}`),
                      (0, r.jsx)(I, { tutorialId: i, tutorialDefinition: a, focused: n, ...s }, i)
                  );
              }),
          })
        : null;
};
