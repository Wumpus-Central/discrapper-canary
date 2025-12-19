n.d(t, {
    ZP: () => O,
    cy: () => v,
    iu: () => C,
}),
    n(388685);
var i,
    r,
    l,
    a = n(54381),
    o = n(473749),
    s = n(120356),
    c = n.n(s),
    u = n(481060),
    d = n(600164),
    p = n(626135),
    f = n(981631),
    h = n(388032),
    m = n(308779);
function g(e, t, n) {
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
function b(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
var C = (((r = {}).CENTER = "center"), (r.LEFT = "left"), r),
    v = (((l = {}).TOP = "top"), (l.MIDDLE = "middle"), l);
class x extends o.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        p.default.track(f.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        p.default.track(f.rMx.CLOSE_TUTORIAL, {
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
                onClickSkipAll: o,
            } = this.props,
            s = "left" === t || n,
            p = "center" === t || !s;
        return (0, a.jsxs)(u.VqE, {
            className: c()(m.popoutRoot, l),
            children: [
                null != e &&
                    (0, a.jsx)(d.Z, {
                        className: m.mediaContainer,
                        justify: s ? d.Z.Justify.START : d.Z.Justify.CENTER,
                        children: e(),
                    }),
                (0, a.jsx)(u.H, {
                    className: c()({
                        [m.titleCenter]: p,
                        [m.titleLeft]: s,
                    }),
                    children: i,
                }),
                (0, a.jsx)("string" == typeof r ? "p" : "div", {
                    className: c()({
                        [m.bodyCenter]: p,
                        [m.bodyLeft]: s,
                    }),
                    children: r,
                }),
                (0, a.jsxs)(u.ButtonGroup, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, a.jsx)(u.Button, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: h.intl.string(h.t["+IrDzN"]),
                        }),
                        (0, a.jsx)(u.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: o,
                            text: h.intl.string(h.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "state", { confirmed: !1 }),
            g(this, "handleDismiss", () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class O extends (i = o.PureComponent) {
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
                spacing: d,
                forceTheme: p,
                innerRef: f,
            } = e,
            h = (function (e, t) {
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
            m = "top" === h.position || "bottom" === h.position ? "center" : "top";
        return (0, a.jsx)(
            u.yRy,
            y(b({ targetElementRef: f }, h), {
                align: m,
                spacing: null != d ? d : 0,
                renderPopout: this.renderPopoutContent,
                nudgeAlignIntoViewport: !0,
                children: c,
            }),
        );
    }
    constructor(...e) {
        super(...e),
            g(this, "onClickComplete", (e) => {
                e(), this.props.onComplete();
            }),
            g(this, "onClickSkipAll", (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), p.default.track(f.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            g(this, "renderPopoutContent", (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: i, isLongText: r, arrowAlignment: l, renderMedia: o } = this.props,
                    s = null != o;
                return (0, a.jsx)(u.f6W, {
                    theme: i,
                    children: (e) =>
                        (0, a.jsx)(
                            x,
                            y(b({}, this.props), {
                                className: c()(
                                    {
                                        [m.bottom]: "bottom" === n,
                                        [m.contentNarrowNoMedia]: !r && !s,
                                        [m.contentNarrowWithMedia]: !r && s,
                                        [m.contentWideNoMedia]: r && !s,
                                        [m.contentWideWithMedia]: r && s,
                                        [m.right]: "right" === n,
                                        [m.top]: "top" === n,
                                        [m.left]: "left" === n,
                                        [m.arrowAlignmentTop]: "top" === l,
                                        [m.arrowAlignmentMiddle]: "middle" === l,
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
g(O, "TextAlignments", C), g(O, "defaultProps", { textAlign: "left" });
