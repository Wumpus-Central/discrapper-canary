"use strict";
n.d(t, { Ay: () => S, YL: () => C, oN: () => I });
var l,
    i,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(305866),
    c = n(707554),
    d = n(825484),
    h = n(821609),
    m = n(43990),
    f = n(922016),
    p = n(235986),
    g = n(174459),
    x = n(652215),
    A = n(375708),
    E = n(373834),
    C = (((l = {}).CENTER = "center"), (l.LEFT = "left"), l),
    I = (((i = {}).TOP = "top"), (i.MIDDLE = "middle"), i);
class y extends r.PureComponent {
    state = { confirmed: !1 };
    componentDidMount() {
        let { uniqueId: e } = this.props;
        g.default.track(x.HAw.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        g.default.track(x.HAw.CLOSE_TUTORIAL, { tutorial: this.props.uniqueId, acknowledged: this.state.confirmed });
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
                className: r,
                onClickSkipAll: a,
            } = this.props,
            m = "left" === t || n,
            f = "center" === t || !m;
        return (0, s.jsxs)(u.l, {
            className: o()(E.Sy, r),
            children: [
                null != e &&
                    (0, s.jsx)(p.A, {
                        className: E.il,
                        justify: m ? p.A.Justify.START : p.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, s.jsx)(c.H, { className: o()({ [E.Av]: f, [E.gH]: m }), children: l }),
                (0, s.jsx)("string" == typeof i ? "p" : "div", {
                    className: o()({ [E.IF]: f, [E.If]: m }),
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
                            text: A.intl.string(A.t["+IrDzN"]),
                        }),
                        (0, s.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: a,
                            text: A.intl.string(A.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class S extends r.PureComponent {
    static TextAlignments = C;
    static defaultProps = { textAlign: "left" };
    onClickComplete = (e) => {
        e(), this.props.onComplete();
    };
    onClickSkipAll = (e) => {
        let { onSkipAll: t, uniqueId: n } = this.props;
        e(), t(), g.default.track(x.HAw.DISMISS_ALL_TUTORIALS, { tutorial: n });
    };
    renderPopoutContent = (e) => {
        let { closePopout: t, position: n } = e,
            { forceTheme: l, isLongText: i, arrowAlignment: r, renderMedia: a } = this.props,
            u = null != a;
        return (0, s.jsx)(m.N, {
            theme: l,
            children: (e) =>
                (0, s.jsx)(y, {
                    ...this.props,
                    className: o()(
                        {
                            [E.sQ]: "bottom" === n,
                            [E.eV]: !i && !u,
                            [E.tJ]: !i && u,
                            [E.II]: i && !u,
                            [E.HU]: i && u,
                            [E.pG]: "right" === n,
                            [E.Mn]: "top" === n,
                            [E.kb]: "left" === n,
                            [E.ks]: "top" === r,
                            [E.Eo]: "middle" === r,
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
                title: r,
                body: a,
                children: o,
                spacing: u,
                forceTheme: c,
                innerRef: d,
                ...h
            } = this.props,
            m = "top" === h.position || "bottom" === h.position ? "center" : "top";
        return (0, s.jsx)(f.Y, {
            targetElementRef: d,
            ...h,
            align: m,
            spacing: u ?? 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: o,
        });
    }
}
