n.d(t, { A: () => f, Y: () => R });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(284009),
    l = n.n(_),
    o = n(621466),
    E = n(17928),
    d = n(939249),
    c = n(186111),
    u = n(531685),
    I = n(787541),
    A = n(244083),
    T = n(867348),
    S = n(574842),
    N = n(79858),
    O = n(234645);
class R extends r.PureComponent {
    state = { offsetX: null, offsetY: null };
    contentRef = r.createRef();
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: r,
            targetHeight: a,
            position: s,
            offset: _,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== r ||
            this.props.targetHeight !== a ||
            this.props.position !== s ||
            this.props.offset.x !== _.x ||
            this.props.offset.y !== _.y) &&
            this.updateCache();
    }
    updateCache() {
        let e = this.contentRef.current;
        if (null == e || !(0, o.vq)(e, HTMLElement)) return;
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
        I.n7();
    }
    handleDismiss = () => {
        I.X8(this.props.tutorialId);
    };
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, S.F)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: r } = this.props,
            a = (0, T.p)(e);
        if (null == a) return null;
        let {
                media: _,
                textAlign: l,
                isLongText: o,
                highPriority: E,
                spacing: c,
                arrowAlignment: u = A.oN.TOP,
                popoutPosition: I,
            } = a,
            { offsetX: S, offsetY: N } = this.state,
            R = { left: null != S ? r.x + S : void 0, top: null != N ? r.y + N : void 0 },
            f = (e) => {
                let t = n && !e;
                return { [O.bW]: t, [O.EO]: !t, [O.TX]: E };
            },
            C = this.getTutorialPopoutText();
        return (0, i.jsx)(A.Ay, {
            innerRef: this.contentRef,
            position: I,
            renderMedia: _,
            textAlign: l,
            spacing: c,
            isLongText: o,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: u,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...C,
            children: (e, t) => {
                let r,
                    { isShown: a } = t;
                return (0, i.jsx)(d.D, {
                    ...e,
                    className: O.q3,
                    style: R,
                    innerRef: this.contentRef,
                    children: (0, i.jsxs)("div", {
                        className: s()(O.Mp, f(a)),
                        children: [
                            ((r = n && !a),
                            !0 !== E
                                ? null
                                : (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)("div", { className: s()(O.Mn, { [O.bW]: r, [O.EO]: !r }) }),
                                          (0, i.jsx)("div", { className: s()(O.sQ, { [O.bW]: r, [O.EO]: !r }) }),
                                      ],
                                  })),
                            (0, i.jsx)("div", { className: s()(O.r6, f(a)) }),
                            (0, i.jsx)("div", { className: s()(O.CY, f(a)) }),
                        ],
                    }),
                });
            },
        });
    }
}
let f = function () {
    let {
        indicators: e,
        tutorialData: t,
        windowFocused: n,
        shouldShowAny: r,
    } = (0, E.cf)([N.A, u.A, c.A], () => ({
        indicators: N.A.getIndicators(),
        tutorialData: N.A.getData(),
        shouldShowAny: N.A.shouldShowAnyIndicators() && !c.A.hasLayers(),
        windowFocused: u.A.isFocused(),
    }));
    return r
        ? (0, i.jsx)(i.Fragment, {
              children: Object.entries(e).map((e) => {
                  let [r, a] = e,
                      s = t[r];
                  return (
                      l()(null != s, `Missing tutorial definition for ${r}`),
                      (0, i.jsx)(R, { tutorialId: r, tutorialDefinition: s, focused: n, ...a }, r)
                  );
              }),
          })
        : null;
};
