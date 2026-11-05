var i,
    r,
    l = n(477900),
    s = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(305866),
    d = n(707554),
    c = n(825484),
    h = n(821609),
    f = n(43990),
    g = n(265872),
    A = n(235986),
    p = n(129230),
    m = n(652215),
    I = n(792996),
    E = n(51377),
    S = (((i = {}).CENTER = "center"), (i.LEFT = "left"), i),
    C = (((r = {}).TOP = "top"), (r.MIDDLE = "middle"), r);
class _ extends s.PureComponent {
    state = { confirmed: !1 };
    componentDidMount() {
        let { uniqueId: e } = this.props;
        p.default.track(m.HAw.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        p.default.track(m.HAw.CLOSE_TUTORIAL, { tutorial: this.props.uniqueId, acknowledged: this.state.confirmed });
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
                onClickSkipAll: a,
            } = this.props,
            f = "left" === t || n,
            g = "center" === t || !f;
        return (0, l.jsxs)(u.l, {
            className: o()(E.Sy, s),
            children: [
                null != e &&
                    (0, l.jsx)(A.A, {
                        className: E.il,
                        justify: f ? A.A.Justify.START : A.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, l.jsx)(d.H, { className: o()({ [E.Av]: g, [E.gH]: f }), children: i }),
                (0, l.jsx)("string" == typeof r ? "p" : "div", {
                    className: o()({ [E.IF]: g, [E.If]: f }),
                    children: r,
                }),
                (0, l.jsxs)(c.e, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, l.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: I.intl.string(I.t["+IrDzN"]),
                        }),
                        (0, l.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: a,
                            text: I.intl.string(I.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class N extends s.PureComponent {
    static TextAlignments = S;
    static defaultProps = { textAlign: "left" };
    onClickComplete = (e) => {
        (e(), this.props.onComplete());
    };
    onClickSkipAll = (e) => {
        let { onSkipAll: t, uniqueId: n } = this.props;
        (e(), t(), p.default.track(m.HAw.DISMISS_ALL_TUTORIALS, { tutorial: n }));
    };
    renderPopoutContent = (e) => {
        let { closePopout: t, position: n } = e,
            { forceTheme: i, isLongText: r, arrowAlignment: s, renderMedia: a } = this.props,
            u = null != a;
        return (0, l.jsx)(f.N, {
            theme: i,
            children: (e) =>
                (0, l.jsx)(_, {
                    ...this.props,
                    className: o()(
                        {
                            [E.sQ]: "bottom" === n,
                            [E.eV]: !r && !u,
                            [E.tJ]: !r && u,
                            [E.II]: r && !u,
                            [E.HU]: r && u,
                            [E.pG]: "right" === n,
                            [E.Mn]: "top" === n,
                            [E.kb]: "left" === n,
                            [E.ks]: "top" === s,
                            [E.Eo]: "middle" === s,
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
                body: a,
                children: o,
                spacing: u,
                forceTheme: d,
                innerRef: c,
                ...h
            } = this.props,
            f = "top" === h.position || "bottom" === h.position ? "center" : "top";
        return (0, l.jsx)(g.Y, {
            targetElementRef: c,
            ...h,
            align: f,
            spacing: u ?? 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: o,
        });
    }
}
n.d(t, {}, { Ay: N, oN: C });
