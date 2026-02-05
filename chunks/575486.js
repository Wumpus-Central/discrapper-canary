"use strict";
n.d(t, { A: () => T, Y: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(621466),
    c = n(311907),
    d = n(397927),
    _ = n(166649),
    f = n(186111),
    p = n(531685),
    h = n(244083),
    m = n(31456),
    g = n(574842),
    E = n(482361),
    A = n(378496);
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
        _.A.suppressAll();
    }
    handleDismiss = () => {
        _.A.dismiss(this.props.tutorialId);
    };
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
                isLongText: u,
                highPriority: c,
                spacing: _,
                arrowAlignment: f = h.oN.TOP,
                popoutPosition: p,
            } = a,
            { offsetX: g, offsetY: E } = this.state,
            I = { left: null != g ? i.x + g : void 0, top: null != E ? i.y + E : void 0 },
            T = (e) => {
                let t = n && !e;
                return !0 !== c
                    ? null
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", { className: s()(A.Mn, { [A.bW]: t, [A.EO]: !t }) }),
                              (0, r.jsx)("div", { className: s()(A.sQ, { [A.bW]: t, [A.EO]: !t }) }),
                          ],
                      });
            },
            y = (e) => {
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
                let { isShown: n } = t;
                return (0, r.jsx)(d.DUT, {
                    ...e,
                    className: A.q3,
                    style: I,
                    innerRef: this.contentRef,
                    children: (0, r.jsxs)("div", {
                        className: s()(A.Mp, y(n)),
                        children: [
                            T(n),
                            (0, r.jsx)("div", { className: s()(A.r6, y(n)) }),
                            (0, r.jsx)("div", { className: s()(A.CY, y(n)) }),
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
    } = (0, c.cf)([E.A, p.A, f.A], () => ({
        indicators: E.A.getIndicators(),
        tutorialData: E.A.getData(),
        shouldShowAny: E.A.shouldShowAnyIndicators() && !f.A.hasLayers(),
        windowFocused: p.A.isFocused(),
    }));
    return i
        ? (0, r.jsx)(r.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [i, a] = e,
                      s = t[i];
                  return (
                      l()(null != s, `Missing tutorial definition for ${i}`),
                      (0, r.jsx)(I, { tutorialId: i, tutorialDefinition: s, focused: n, ...a }, i)
                  );
              }),
          })
        : null;
};
