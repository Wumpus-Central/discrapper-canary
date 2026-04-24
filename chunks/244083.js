"use strict";
n.d(t, { Ay: () => v, YL: () => A, oN: () => E });
var l,
    i,
    s = n(627968),
    a = n(64700),
    r = n(503698),
    o = n.n(r),
    c = n(305866),
    u = n(707554),
    d = n(825484),
    h = n(821609),
    m = n(43990),
    p = n(922016),
    f = n(235986),
    g = n(954571),
    _ = n(652215),
    x = n(985018),
    C = n(291506),
    A = (((l = {}).CENTER = "center"), (l.LEFT = "left"), l),
    E = (((i = {}).TOP = "top"), (i.MIDDLE = "middle"), i);
class I extends a.PureComponent {
    state = { confirmed: !1 };
    componentDidMount() {
        let { uniqueId: e } = this.props;
        g.default.track(_.HAw.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        g.default.track(_.HAw.CLOSE_TUTORIAL, { tutorial: this.props.uniqueId, acknowledged: this.state.confirmed });
    }
    handleDismiss = () => {
        let { onClickComplete: e } = this.props;
        this.setState({ confirmed: !0 }, () => e?.());
    };
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                isLongText: n,
                title: l,
                body: i,
                className: a,
                onClickSkipAll: r,
            } = this.props,
            m = "left" === t || n,
            p = "center" === t || !m;
        return (0, s.jsxs)(c.l, {
            className: o()(C.Sy, a),
            children: [
                null != e &&
                    (0, s.jsx)(f.A, {
                        className: C.il,
                        justify: m ? f.A.Justify.START : f.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, s.jsx)(u.H, { className: o()({ [C.Av]: p, [C.gH]: m }), children: l }),
                (0, s.jsx)("string" == typeof i ? "p" : "div", {
                    className: o()({ [C.IF]: p, [C.If]: m }),
                    children: i,
                }),
                (0, s.jsxs)(d.e, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, s.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: x.intl.string(x.t["+IrDzN"]),
                        }),
                        (0, s.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: r,
                            text: x.intl.string(x.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class v extends a.PureComponent {
    static TextAlignments = A;
    static defaultProps = { textAlign: "left" };
    onClickComplete = (e) => {
        e(), this.props.onComplete();
    };
    onClickSkipAll = (e) => {
        let { onSkipAll: t, uniqueId: n } = this.props;
        e(), t(), g.default.track(_.HAw.DISMISS_ALL_TUTORIALS, { tutorial: n });
    };
    renderPopoutContent = (e) => {
        let { closePopout: t, position: n } = e,
            { forceTheme: l, isLongText: i, arrowAlignment: a, renderMedia: r } = this.props,
            c = null != r;
        return (0, s.jsx)(m.N, {
            theme: l,
            children: (e) =>
                (0, s.jsx)(I, {
                    ...this.props,
                    className: o()(
                        {
                            [C.sQ]: "bottom" === n,
                            [C.eV]: !i && !c,
                            [C.tJ]: !i && c,
                            [C.II]: i && !c,
                            [C.HU]: i && c,
                            [C.pG]: "right" === n,
                            [C.Mn]: "top" === n,
                            [C.kb]: "left" === n,
                            [C.ks]: "top" === a,
                            [C.Eo]: "middle" === a,
                            "force-theme": null != l,
                        },
                        e,
                    ),
                    onClickComplete: () => this.onClickComplete(t),
                    onClickSkipAll: () => this.onClickSkipAll(t),
                }),
        });
    };
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                onComplete: n,
                onSkipAll: l,
                isLongText: i,
                title: a,
                body: r,
                children: o,
                spacing: c,
                forceTheme: u,
                innerRef: d,
                ...h
            } = this.props,
            m = "top" === h.position || "bottom" === h.position ? "center" : "top";
        return (0, s.jsx)(p.Y, {
            targetElementRef: d,
            ...h,
            align: m,
            spacing: c ?? 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: o,
        });
    }
}
