n.d(t, {
    ZP: () => E,
    cy: () => O,
    iu: () => v,
}),
    n(388685);
var r,
    i,
    l,
    a = n(951288),
    o = n(647438),
    s = n(120356),
    c = n.n(s),
    u = n(780384),
    d = n(755721),
    p = n(481060),
    f = n(600164),
    h = n(626135),
    m = n(981631),
    g = n(388032),
    b = n(105853);
function _(e, t, n) {
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
function y(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var v = (((i = {}).CENTER = "center"), (i.LEFT = "left"), i),
    O = (((l = {}).TOP = "top"), (l.MIDDLE = "middle"), l);
class x extends o.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        h.default.track(m.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        h.default.track(m.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed,
        });
    }
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                isLongText: n,
                title: r,
                body: i,
                className: l,
                forceTheme: o,
                onClickSkipAll: s,
            } = this.props,
            h = "left" === t || n,
            m = "center" === t || !h;
        return (0, a.jsxs)(p.VqE, {
            className: c()(b.popoutRoot, l),
            children: [
                null != e &&
                    (0, a.jsx)(f.Z, {
                        className: b.mediaContainer,
                        justify: h ? f.Z.Justify.START : f.Z.Justify.CENTER,
                        children: e(),
                    }),
                (0, a.jsx)(p.H, {
                    className: c()({
                        [b.titleCenter]: m,
                        [b.titleLeft]: h,
                    }),
                    children: r,
                }),
                (0, a.jsx)("string" == typeof i ? "p" : "div", {
                    className: c()({
                        [b.bodyCenter]: m,
                        [b.bodyLeft]: h,
                    }),
                    children: i,
                }),
                (0, a.jsxs)(f.Z, {
                    className: b.buttonContainer,
                    justify: h ? f.Z.Justify.BETWEEN : f.Z.Justify.CENTER,
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
                            className: h ? b.buttonSkipLeftAlign : b.buttonSkipCenterAlign,
                            children: g.intl.string(g.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", { confirmed: !1 }),
            _(this, "handleDismiss", () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class E extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            {
                renderMedia: t,
                textAlign: n,
                onComplete: r,
                onSkipAll: i,
                isLongText: l,
                title: o,
                body: s,
                children: c,
                spacing: u,
                forceTheme: d,
                innerRef: f,
            } = e,
            h = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
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
            m = "top" === h.position || "bottom" === h.position ? "center" : "top";
        return (0, a.jsx)(
            p.yRy,
            C(y({ targetElementRef: f }, h), {
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
            _(this, "onClickComplete", (e) => {
                e(), this.props.onComplete();
            }),
            _(this, "onClickSkipAll", (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), h.default.track(m.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            _(this, "renderPopoutContent", (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: r, isLongText: i, arrowAlignment: l, renderMedia: o } = this.props,
                    s = null != o;
                return (0, a.jsx)(p.f6W, {
                    theme: r,
                    children: (e) =>
                        (0, a.jsx)(
                            x,
                            C(y({}, this.props), {
                                className: c()(
                                    {
                                        [b.bottom]: "bottom" === n,
                                        [b.contentNarrowNoMedia]: !i && !s,
                                        [b.contentNarrowWithMedia]: !i && s,
                                        [b.contentWideNoMedia]: i && !s,
                                        [b.contentWideWithMedia]: i && s,
                                        [b.right]: "right" === n,
                                        [b.top]: "top" === n,
                                        [b.left]: "left" === n,
                                        [b.arrowAlignmentTop]: "top" === l,
                                        [b.arrowAlignmentMiddle]: "middle" === l,
                                        "force-theme": null != r,
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
_(E, "TextAlignments", v), _(E, "defaultProps", { textAlign: "left" });
