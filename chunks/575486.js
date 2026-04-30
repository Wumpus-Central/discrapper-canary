n.d(t, { A: () => I, Y: () => S });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(621466),
    d = n(17928),
    c = n(939249),
    h = n(186111),
    p = n(531685),
    m = n(787541),
    f = n(244083),
    E = n(867348),
    g = n(574842),
    A = n(79858),
    _ = n(234645);
class S extends l.PureComponent {
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
            targetHeight: r,
            position: s,
            offset: a,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== l ||
            this.props.targetHeight !== r ||
            this.props.position !== s ||
            this.props.offset.x !== a.x ||
            this.props.offset.y !== a.y) &&
            this.updateCache();
    }
    updateCache() {
        let e = this.contentRef.current;
        if (null == e || !(0, u.vq)(e, HTMLElement)) return;
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
        m.n7();
    }
    handleDismiss = () => {
        m.X8(this.props.tutorialId);
    };
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, g.F)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: l } = this.props,
            r = (0, E.p)(e);
        if (null == r) return null;
        let {
                media: a,
                textAlign: o,
                isLongText: u,
                highPriority: d,
                spacing: h,
                arrowAlignment: p = f.oN.TOP,
                popoutPosition: m,
            } = r,
            { offsetX: g, offsetY: A } = this.state,
            S = { left: null != g ? l.x + g : void 0, top: null != A ? l.y + A : void 0 },
            I = (e) => {
                let t = n && !e;
                return { [_.bW]: t, [_.EO]: !t, [_.TX]: d };
            },
            y = this.getTutorialPopoutText();
        return (0, i.jsx)(f.Ay, {
            innerRef: this.contentRef,
            position: m,
            renderMedia: a,
            textAlign: o,
            spacing: h,
            isLongText: u,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: p,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...y,
            children: (e, t) => {
                let l,
                    { isShown: r } = t;
                return (0, i.jsx)(c.D, {
                    ...e,
                    className: _.q3,
                    style: S,
                    innerRef: this.contentRef,
                    children: (0, i.jsxs)("div", {
                        className: s()(_.Mp, I(r)),
                        children: [
                            ((l = n && !r),
                            !0 !== d
                                ? null
                                : (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)("div", { className: s()(_.Mn, { [_.bW]: l, [_.EO]: !l }) }),
                                          (0, i.jsx)("div", { className: s()(_.sQ, { [_.bW]: l, [_.EO]: !l }) }),
                                      ],
                                  })),
                            (0, i.jsx)("div", { className: s()(_.r6, I(r)) }),
                            (0, i.jsx)("div", { className: s()(_.CY, I(r)) }),
                        ],
                    }),
                });
            },
        });
    }
}
let I =
    21552 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: l,
              } = (0, d.cf)([A.A, p.A, h.A], () => ({
                  indicators: A.A.getIndicators(),
                  tutorialData: A.A.getData(),
                  shouldShowAny: A.A.shouldShowAnyIndicators() && !h.A.hasLayers(),
                  windowFocused: p.A.isFocused(),
              }));
              return l
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [l, r] = e,
                                s = t[l];
                            return (
                                o()(null != s, `Missing tutorial definition for ${l}`),
                                (0, i.jsx)(S, { tutorialId: l, tutorialDefinition: s, focused: n, ...r }, l)
                            );
                        }),
                    })
                  : null;
          }
        : null;
