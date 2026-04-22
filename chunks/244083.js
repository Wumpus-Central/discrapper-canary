"use strict";
n.d(t, { Ay: () => v, YL: () => C, oN: () => E });
var i,
    l,
    s = n(627968),
    r = n(64700),
    a = n(503698),
    o = n.n(a),
    c = n(305866),
    u = n(707554),
    d = n(825484),
    h = n(821609),
    m = n(43990),
    p = n(265872),
    f = n(235986),
    g = n(954571),
    _ = n(652215),
    x = n(985018),
    A = n(291506),
    C = (((i = {}).CENTER = "center"), (i.LEFT = "left"), i),
    E = (((l = {}).TOP = "top"), (l.MIDDLE = "middle"), l);
class I extends r.PureComponent {
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
                title: i,
                body: l,
                className: r,
                onClickSkipAll: a,
            } = this.props,
            m = "left" === t || n,
            p = "center" === t || !m;
        return (0, s.jsxs)(c.l, {
            className: o()(A.Sy, r),
            children: [
                null != e &&
                    (0, s.jsx)(f.A, {
                        className: A.il,
                        justify: m ? f.A.Justify.START : f.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, s.jsx)(u.H, { className: o()({ [A.Av]: p, [A.gH]: m }), children: i }),
                (0, s.jsx)("string" == typeof l ? "p" : "div", {
                    className: o()({ [A.IF]: p, [A.If]: m }),
                    children: l,
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
                            onClick: a,
                            text: x.intl.string(x.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class v extends r.PureComponent {
    static TextAlignments = C;
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
            { forceTheme: i, isLongText: l, arrowAlignment: r, renderMedia: a } = this.props,
            c = null != a;
        return (0, s.jsx)(m.N, {
            theme: i,
            children: (e) =>
                (0, s.jsx)(I, {
                    ...this.props,
                    className: o()(
                        {
                            [A.sQ]: "bottom" === n,
                            [A.eV]: !l && !c,
                            [A.tJ]: !l && c,
                            [A.II]: l && !c,
                            [A.HU]: l && c,
                            [A.pG]: "right" === n,
                            [A.Mn]: "top" === n,
                            [A.kb]: "left" === n,
                            [A.ks]: "top" === r,
                            [A.Eo]: "middle" === r,
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
                title: r,
                body: a,
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
