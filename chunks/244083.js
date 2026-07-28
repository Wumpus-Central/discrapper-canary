"use strict";
n.d(t, { Ay: () => N, YL: () => m, oN: () => g });
var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(503698),
    o = n.n(l),
    d = n(305866),
    c = n(707554),
    u = n(825484),
    _ = n(821609),
    E = n(43990),
    A = n(922016),
    h = n(235986),
    I = n(174459),
    f = n(652215),
    p = n(375708),
    T = n(373834),
    m = (((i = {}).CENTER = "center"), (i.LEFT = "left"), i),
    g = (((r = {}).TOP = "top"), (r.MIDDLE = "middle"), r);
class S extends s.PureComponent {
    state = { confirmed: !1 };
    componentDidMount() {
        let { uniqueId: e } = this.props;
        I.default.track(f.HAw.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        I.default.track(f.HAw.CLOSE_TUTORIAL, { tutorial: this.props.uniqueId, acknowledged: this.state.confirmed });
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
                title: i,
                body: r,
                className: s,
                onClickSkipAll: l,
            } = this.props,
            E = "left" === t || n,
            A = "center" === t || !E;
        return (0, a.jsxs)(d.l, {
            className: o()(T.Sy, s),
            children: [
                null != e &&
                    (0, a.jsx)(h.A, {
                        className: T.il,
                        justify: E ? h.A.Justify.START : h.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, a.jsx)(c.H, { className: o()({ [T.Av]: A, [T.gH]: E }), children: i }),
                (0, a.jsx)("string" == typeof r ? "p" : "div", {
                    className: o()({ [T.IF]: A, [T.If]: E }),
                    children: r,
                }),
                (0, a.jsxs)(u.e, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, a.jsx)(_.$, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: p.intl.string(p.t["+IrDzN"]),
                        }),
                        (0, a.jsx)(_.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: l,
                            text: p.intl.string(p.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class N extends s.PureComponent {
    static TextAlignments = m;
    static defaultProps = { textAlign: "left" };
    onClickComplete = (e) => {
        e(), this.props.onComplete();
    };
    onClickSkipAll = (e) => {
        let { onSkipAll: t, uniqueId: n } = this.props;
        e(), t(), I.default.track(f.HAw.DISMISS_ALL_TUTORIALS, { tutorial: n });
    };
    renderPopoutContent = (e) => {
        let { closePopout: t, position: n } = e,
            { forceTheme: i, isLongText: r, arrowAlignment: s, renderMedia: l } = this.props,
            d = null != l;
        return (0, a.jsx)(E.N, {
            theme: i,
            children: (e) =>
                (0, a.jsx)(S, {
                    ...this.props,
                    className: o()(
                        {
                            [T.sQ]: "bottom" === n,
                            [T.eV]: !r && !d,
                            [T.tJ]: !r && d,
                            [T.II]: r && !d,
                            [T.HU]: r && d,
                            [T.pG]: "right" === n,
                            [T.Mn]: "top" === n,
                            [T.kb]: "left" === n,
                            [T.ks]: "top" === s,
                            [T.Eo]: "middle" === s,
                            "force-theme": null != i,
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
                onSkipAll: i,
                isLongText: r,
                title: s,
                body: l,
                children: o,
                spacing: d,
                forceTheme: c,
                innerRef: u,
                ..._
            } = this.props,
            E = "top" === _.position || "bottom" === _.position ? "center" : "top";
        return (0, a.jsx)(A.Y, {
            targetElementRef: u,
            ..._,
            align: E,
            spacing: d ?? 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: o,
        });
    }
}
