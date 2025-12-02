n.d(t, {
    ZP: () => E,
    cy: () => O,
    iu: () => _,
}),
    n(388685);
var i,
    r,
    l,
    a = n(54381),
    o = n(473749),
    s = n(120356),
    c = n.n(s),
    u = n(780384),
    d = n(755721),
    p = n(481060),
    h = n(600164),
    f = n(626135),
    m = n(981631),
    g = n(388032),
    b = n(105853);
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var _ = (((r = {}).CENTER = "center"), (r.LEFT = "left"), r),
    O = (((l = {}).TOP = "top"), (l.MIDDLE = "middle"), l);
class x extends o.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        f.default.track(m.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        f.default.track(m.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed,
        });
    }
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                isLongText: n,
                title: i,
                body: r,
                className: l,
                forceTheme: o,
                onClickSkipAll: s,
            } = this.props,
            f = "left" === t || n,
            m = "center" === t || !f;
        return (0, a.jsxs)(p.VqE, {
            className: c()(b.popoutRoot, l),
            children: [
                null != e &&
                    (0, a.jsx)(h.Z, {
                        className: b.mediaContainer,
                        justify: f ? h.Z.Justify.START : h.Z.Justify.CENTER,
                        children: e(),
                    }),
                (0, a.jsx)(p.H, {
                    className: c()({
                        [b.titleCenter]: m,
                        [b.titleLeft]: f,
                    }),
                    children: i,
                }),
                (0, a.jsx)("string" == typeof r ? "p" : "div", {
                    className: c()({
                        [b.bodyCenter]: m,
                        [b.bodyLeft]: f,
                    }),
                    children: r,
                }),
                (0, a.jsxs)(h.Z, {
                    className: b.buttonContainer,
                    justify: f ? h.Z.Justify.BETWEEN : h.Z.Justify.CENTER,
                    children: [
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            size: "sm",
                            text: g.intl.string(g.t["+IrDzN"]),
                            onClick: this.handleDismiss,
                        }),
                        (0, a.jsx)(d.zx, {
                            size: d.Ph.SMALL,
                            look: d.zx.Looks.BLANK,
                            onClick: s,
                            color: (0, u.ap)(o) ? d.zx.Colors.PRIMARY : d.zx.Colors.WHITE,
                            className: f ? b.buttonSkipLeftAlign : b.buttonSkipCenterAlign,
                            children: g.intl.string(g.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "state", { confirmed: !1 }),
            y(this, "handleDismiss", () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class E extends (i = o.PureComponent) {
    render() {
        let e = this.props,
            {
                renderMedia: t,
                textAlign: n,
                onComplete: i,
                onSkipAll: r,
                isLongText: l,
                title: o,
                body: s,
                children: c,
                spacing: u,
                forceTheme: d,
                innerRef: h,
            } = e,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, [
                "renderMedia",
                "textAlign",
                "onComplete",
                "onSkipAll",
                "isLongText",
                "title",
                "body",
                "children",
                "spacing",
                "forceTheme",
                "innerRef",
            ]),
            m = "top" === f.position || "bottom" === f.position ? "center" : "top";
        return (0, a.jsx)(
            p.yRy,
            v(C({ targetElementRef: h }, f), {
                align: m,
                spacing: null != u ? u : 0,
                renderPopout: this.renderPopoutContent,
                nudgeAlignIntoViewport: !0,
                children: c,
            }),
        );
    }
    constructor(...e) {
        super(...e),
            y(this, "onClickComplete", (e) => {
                e(), this.props.onComplete();
            }),
            y(this, "onClickSkipAll", (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), f.default.track(m.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            y(this, "renderPopoutContent", (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: i, isLongText: r, arrowAlignment: l, renderMedia: o } = this.props,
                    s = null != o;
                return (0, a.jsx)(p.f6W, {
                    theme: i,
                    children: (e) =>
                        (0, a.jsx)(
                            x,
                            v(C({}, this.props), {
                                className: c()(
                                    {
                                        [b.bottom]: "bottom" === n,
                                        [b.contentNarrowNoMedia]: !r && !s,
                                        [b.contentNarrowWithMedia]: !r && s,
                                        [b.contentWideNoMedia]: r && !s,
                                        [b.contentWideWithMedia]: r && s,
                                        [b.right]: "right" === n,
                                        [b.top]: "top" === n,
                                        [b.left]: "left" === n,
                                        [b.arrowAlignmentTop]: "top" === l,
                                        [b.arrowAlignmentMiddle]: "middle" === l,
                                        "force-theme": null != i,
                                    },
                                    e,
                                ),
                                onClickComplete: () => this.onClickComplete(t),
                                onClickSkipAll: () => this.onClickSkipAll(t),
                            }),
                        ),
                });
            });
    }
}
y(E, "TextAlignments", _), y(E, "defaultProps", { textAlign: "left" });
