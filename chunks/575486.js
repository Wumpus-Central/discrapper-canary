"use strict";
n.d(t, { A: () => y, Y: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(621466),
    c = n(311907),
    d = n(397927),
    _ = n(186111),
    f = n(531685),
    h = n(787541),
    p = n(244083),
    g = n(31456),
    E = n(574842),
    A = n(482361),
    I = n(378496);
class T extends i.PureComponent {
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
        h.n7();
    }
    handleDismiss = () => {
        h.X8(this.props.tutorialId);
    };
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, E.F)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: i } = this.props,
            a = (0, g.p)(e);
        if (null == a) return null;
        let {
                media: o,
                textAlign: l,
                isLongText: u,
                highPriority: c,
                spacing: _,
                arrowAlignment: f = p.oN.TOP,
                popoutPosition: h,
            } = a,
            { offsetX: E, offsetY: A } = this.state,
            T = { left: null != E ? i.x + E : void 0, top: null != A ? i.y + A : void 0 },
            y = (e) => {
                let t = n && !e;
                return !0 !== c
                    ? null
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)("div", { className: s()(I.Mn, { [I.bW]: t, [I.EO]: !t }) }),
                              (0, r.jsx)("div", { className: s()(I.sQ, { [I.bW]: t, [I.EO]: !t }) }),
                          ],
                      });
            },
            S = (e) => {
                let t = n && !e;
                return { [I.bW]: t, [I.EO]: !t, [I.TX]: c };
            },
            v = this.getTutorialPopoutText();
        return (0, r.jsx)(p.Ay, {
            innerRef: this.contentRef,
            position: h,
            renderMedia: o,
            textAlign: l,
            spacing: _,
            isLongText: u,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: f,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...v,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsx)(d.DUT, {
                    ...e,
                    className: I.q3,
                    style: T,
                    innerRef: this.contentRef,
                    children: (0, r.jsxs)("div", {
                        className: s()(I.Mp, S(n)),
                        children: [
                            y(n),
                            (0, r.jsx)("div", { className: s()(I.r6, S(n)) }),
                            (0, r.jsx)("div", { className: s()(I.CY, S(n)) }),
                        ],
                    }),
                });
            },
        });
    }
}
let y = function () {
    let {
        indicators: e,
        tutorialData: t,
        windowFocused: n,
        shouldShowAny: i,
    } = (0, c.cf)([A.A, f.A, _.A], () => ({
        indicators: A.A.getIndicators(),
        tutorialData: A.A.getData(),
        shouldShowAny: A.A.shouldShowAnyIndicators() && !_.A.hasLayers(),
        windowFocused: f.A.isFocused(),
    }));
    return i
        ? (0, r.jsx)(r.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [i, a] = e,
                      s = t[i];
                  return (
                      l()(null != s, `Missing tutorial definition for ${i}`),
                      (0, r.jsx)(T, { tutorialId: i, tutorialDefinition: s, focused: n, ...a }, i)
                  );
              }),
          })
        : null;
};
