n.d(t, { Ay: () => N, YL: () => I, oN: () => S });
var i,
    l,
    r = n(477900),
    s = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(305866),
    d = n(707554),
    c = n(825484),
    h = n(821609),
    f = n(43990),
    g = n(922016),
    C = n(235986),
    A = n(174459),
    p = n(652215),
    m = n(375708),
    E = n(51377),
    I = (((i = {}).CENTER = "center"), (i.LEFT = "left"), i),
    S = (((l = {}).TOP = "top"), (l.MIDDLE = "middle"), l);
class _ extends s.PureComponent {
    state = { confirmed: !1 };
    componentDidMount() {
        let { uniqueId: e } = this.props;
        A.default.track(p.HAw.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        A.default.track(p.HAw.CLOSE_TUTORIAL, { tutorial: this.props.uniqueId, acknowledged: this.state.confirmed });
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
                body: l,
                className: s,
                onClickSkipAll: a,
            } = this.props,
            f = "left" === t || n,
            g = "center" === t || !f;
        return (0, r.jsxs)(u.l, {
            className: o()(E.Sy, s),
            children: [
                null != e &&
                    (0, r.jsx)(C.A, {
                        className: E.il,
                        justify: f ? C.A.Justify.START : C.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, r.jsx)(d.H, { className: o()({ [E.Av]: g, [E.gH]: f }), children: i }),
                (0, r.jsx)("string" == typeof l ? "p" : "div", {
                    className: o()({ [E.IF]: g, [E.If]: f }),
                    children: l,
                }),
                (0, r.jsxs)(c.e, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, r.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: m.intl.string(m.t["+IrDzN"]),
                        }),
                        (0, r.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: a,
                            text: m.intl.string(m.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class N extends s.PureComponent {
    static TextAlignments = I;
    static defaultProps = { textAlign: "left" };
    onClickComplete = (e) => {
        (e(), this.props.onComplete());
    };
    onClickSkipAll = (e) => {
        let { onSkipAll: t, uniqueId: n } = this.props;
        (e(), t(), A.default.track(p.HAw.DISMISS_ALL_TUTORIALS, { tutorial: n }));
    };
    renderPopoutContent = (e) => {
        let { closePopout: t, position: n } = e,
            { forceTheme: i, isLongText: l, arrowAlignment: s, renderMedia: a } = this.props,
            u = null != a;
        return (0, r.jsx)(f.N, {
            theme: i,
            children: (e) =>
                (0, r.jsx)(_, {
                    ...this.props,
                    className: o()(
                        {
                            [E.sQ]: "bottom" === n,
                            [E.eV]: !l && !u,
                            [E.tJ]: !l && u,
                            [E.II]: l && !u,
                            [E.HU]: l && u,
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
                isLongText: l,
                title: s,
                body: a,
                children: o,
                spacing: u,
                forceTheme: d,
                innerRef: c,
                ...h
            } = this.props,
            f = "top" === h.position || "bottom" === h.position ? "center" : "top";
        return (0, r.jsx)(g.Y, {
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
