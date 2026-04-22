"use strict";
n.d(t, { A: () => E, Y: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    c = n(621466),
    u = n(311907),
    d = n(939249),
    h = n(186111),
    m = n(531685),
    p = n(787541),
    f = n(244083),
    g = n(31456),
    _ = n(574842),
    x = n(482361),
    A = n(234645);
class C extends l.PureComponent {
    state = { offsetX: null, offsetY: null };
    contentRef = l.createRef();
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: l,
            targetHeight: s,
            position: r,
            offset: a,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== l ||
            this.props.targetHeight !== s ||
            this.props.position !== r ||
            this.props.offset.x !== a.x ||
            this.props.offset.y !== a.y) &&
            this.updateCache();
    }
    updateCache() {
        let e = this.contentRef.current;
        if (null == e || !(0, c.vq)(e, HTMLElement)) return;
        let { offsetWidth: t, offsetHeight: n } = e,
            i = { offsetX: (this.props.targetWidth - t) / 2, offsetY: (this.props.targetHeight - n) / 2 };
        switch (this.props.position) {
            case "left":
                i.offsetX = -t;
                break;
            case "right":
                i.offsetX = this.props.targetWidth;
                break;
            case "bottom":
                i.offsetY = this.props.targetHeight;
                break;
            default:
                i.offsetY = -n;
        }
        (i.offsetX += this.props.offset.x ?? 0), (i.offsetY += this.props.offset.y ?? 0), this.setState(i);
    }
    handleSkipTips() {
        p.n7();
    }
    handleDismiss = () => {
        p.X8(this.props.tutorialId);
    };
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, _.F)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: l } = this.props,
            s = (0, g.p)(e);
        if (null == s) return null;
        let {
                media: a,
                textAlign: o,
                isLongText: c,
                highPriority: u,
                spacing: h,
                arrowAlignment: m = f.oN.TOP,
                popoutPosition: p,
            } = s,
            { offsetX: _, offsetY: x } = this.state,
            C = { left: null != _ ? l.x + _ : void 0, top: null != x ? l.y + x : void 0 },
            E = (e) => {
                let t = n && !e;
                return { [A.bW]: t, [A.EO]: !t, [A.TX]: u };
            },
            I = this.getTutorialPopoutText();
        return (0, i.jsx)(f.Ay, {
            innerRef: this.contentRef,
            position: p,
            renderMedia: a,
            textAlign: o,
            spacing: h,
            isLongText: c,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: m,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...I,
            children: (e, t) => {
                let l,
                    { isShown: s } = t;
                return (0, i.jsx)(d.D, {
                    ...e,
                    className: A.q3,
                    style: C,
                    innerRef: this.contentRef,
                    children: (0, i.jsxs)("div", {
                        className: r()(A.Mp, E(s)),
                        children: [
                            ((l = n && !s),
                            !0 !== u
                                ? null
                                : (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)("div", { className: r()(A.Mn, { [A.bW]: l, [A.EO]: !l }) }),
                                          (0, i.jsx)("div", { className: r()(A.sQ, { [A.bW]: l, [A.EO]: !l }) }),
                                      ],
                                  })),
                            (0, i.jsx)("div", { className: r()(A.r6, E(s)) }),
                            (0, i.jsx)("div", { className: r()(A.CY, E(s)) }),
                        ],
                    }),
                });
            },
        });
    }
}
let E =
    21552 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: l,
              } = (0, u.cf)([x.A, m.A, h.A], () => ({
                  indicators: x.A.getIndicators(),
                  tutorialData: x.A.getData(),
                  shouldShowAny: x.A.shouldShowAnyIndicators() && !h.A.hasLayers(),
                  windowFocused: m.A.isFocused(),
              }));
              return l
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [l, s] = e,
                                r = t[l];
                            return (
                                o()(null != r, `Missing tutorial definition for ${l}`),
                                (0, i.jsx)(C, { tutorialId: l, tutorialDefinition: r, focused: n, ...s }, l)
                            );
                        }),
                    })
                  : null;
          }
        : null;
