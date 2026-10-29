n.d(t, { Ay: () => N, oN: () => C });
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
    g = n(265872),
    A = n(235986),
    p = n(174459),
    m = n(652215),
    E = n(105292),
    I = n(51377),
    S = (((i = {}).CENTER = "center"), (i.LEFT = "left"), i),
    C = (((l = {}).TOP = "top"), (l.MIDDLE = "middle"), l);
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
                body: l,
                className: s,
                onClickSkipAll: a,
            } = this.props,
            f = "left" === t || n,
            g = "center" === t || !f;
        return (0, r.jsxs)(u.l, {
            className: o()(I.Sy, s),
            children: [
                null != e &&
                    (0, r.jsx)(A.A, {
                        className: I.il,
                        justify: f ? A.A.Justify.START : A.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, r.jsx)(d.H, { className: o()({ [I.Av]: g, [I.gH]: f }), children: i }),
                (0, r.jsx)("string" == typeof l ? "p" : "div", {
                    className: o()({ [I.IF]: g, [I.If]: f }),
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
                            text: E.intl.string(E.t["+IrDzN"]),
                        }),
                        (0, r.jsx)(h.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: a,
                            text: E.intl.string(E.t["33wtxt"]),
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
            { forceTheme: i, isLongText: l, arrowAlignment: s, renderMedia: a } = this.props,
            u = null != a;
        return (0, r.jsx)(f.N, {
            theme: i,
            children: (e) =>
                (0, r.jsx)(_, {
                    ...this.props,
                    className: o()(
                        {
                            [I.sQ]: "bottom" === n,
                            [I.eV]: !l && !u,
                            [I.tJ]: !l && u,
                            [I.II]: l && !u,
                            [I.HU]: l && u,
                            [I.pG]: "right" === n,
                            [I.Mn]: "top" === n,
                            [I.kb]: "left" === n,
                            [I.ks]: "top" === s,
                            [I.Eo]: "middle" === s,
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
