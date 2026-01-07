n.d(t, {
    ZP: () => S,
    cy: () => O,
    iu: () => y,
}),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(600164),
    u = n(626135),
    d = n(981631),
    f = n(388032),
    p = n(308779);
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
function m(e) {
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
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var y = (function (e) {
        return (e.CENTER = "center"), (e.LEFT = "left"), e;
    })({}),
    O = (function (e) {
        return (e.TOP = "top"), (e.MIDDLE = "middle"), e;
    })({});
class v extends a.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        u.default.track(d.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        u.default.track(d.rMx.CLOSE_TUTORIAL, {
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
                body: a,
                className: o,
                onClickSkipAll: u,
            } = this.props,
            d = "string" == typeof a ? "p" : "div",
            _ = "left" === t || n,
            m = "center" === t || !_;
        return (0, i.jsxs)(l.VqE, {
            className: s()(p.popoutRoot, o),
            children: [
                null != e &&
                    (0, i.jsx)(c.Z, {
                        className: p.mediaContainer,
                        justify: _ ? c.Z.Justify.START : c.Z.Justify.CENTER,
                        children: e(),
                    }),
                (0, i.jsx)(l.H, {
                    className: s()({
                        [p.titleCenter]: m,
                        [p.titleLeft]: _,
                    }),
                    children: r,
                }),
                (0, i.jsx)(d, {
                    className: s()({
                        [p.bodyCenter]: m,
                        [p.bodyLeft]: _,
                    }),
                    children: a,
                }),
                (0, i.jsxs)(l.ButtonGroup, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(l.Button, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: f.intl.string(f.t["+IrDzN"]),
                        }),
                        (0, i.jsx)(l.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: u,
                            text: f.intl.string(f.t["33wtxt"]),
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
class S extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            {
                renderMedia: t,
                textAlign: n,
                onComplete: r,
                onSkipAll: a,
                isLongText: o,
                title: s,
                body: c,
                children: u,
                spacing: d,
                forceTheme: f,
                innerRef: p,
            } = e,
            _ = E(e, [
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
            h = "top" === _.position || "bottom" === _.position ? "center" : "top";
        return (0, i.jsx)(
            l.yRy,
            g(m({ targetElementRef: p }, _), {
                align: h,
                spacing: null != d ? d : 0,
                renderPopout: this.renderPopoutContent,
                nudgeAlignIntoViewport: !0,
                children: u,
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
                e(), t(), u.default.track(d.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            _(this, "renderPopoutContent", (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: r, isLongText: a, arrowAlignment: o, renderMedia: c } = this.props,
                    u = null != c;
                return (0, i.jsx)(l.f6W, {
                    theme: r,
                    children: (e) =>
                        (0, i.jsx)(
                            v,
                            g(m({}, this.props), {
                                className: s()(
                                    {
                                        [p.bottom]: "bottom" === n,
                                        [p.contentNarrowNoMedia]: !a && !u,
                                        [p.contentNarrowWithMedia]: !a && u,
                                        [p.contentWideNoMedia]: a && !u,
                                        [p.contentWideWithMedia]: a && u,
                                        [p.right]: "right" === n,
                                        [p.top]: "top" === n,
                                        [p.left]: "left" === n,
                                        [p.arrowAlignmentTop]: "top" === o,
                                        [p.arrowAlignmentMiddle]: "middle" === o,
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
_(S, "TextAlignments", y), _(S, "defaultProps", { textAlign: "left" });
