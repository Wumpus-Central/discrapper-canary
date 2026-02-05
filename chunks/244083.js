"use strict";
n.d(t, { Ay: () => m, YL: () => f, oN: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(235986),
    u = n(954571),
    c = n(652215),
    d = n(985018),
    _ = n(478507),
    f = (function (e) {
        return (e.CENTER = "center"), (e.LEFT = "left"), e;
    })({}),
    p = (function (e) {
        return (e.TOP = "top"), (e.MIDDLE = "middle"), e;
    })({});
class h extends i.PureComponent {
    state = { confirmed: !1 };
    componentDidMount() {
        let { uniqueId: e } = this.props;
        u.default.track(c.HAw.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        u.default.track(c.HAw.CLOSE_TUTORIAL, { tutorial: this.props.uniqueId, acknowledged: this.state.confirmed });
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
                body: a,
                className: u,
                onClickSkipAll: c,
            } = this.props,
            f = "string" == typeof a ? "p" : "div",
            p = "left" === t || n,
            h = "center" === t || !p;
        return (0, r.jsxs)(o.lGe, {
            className: s()(_.Sy, u),
            children: [
                null != e &&
                    (0, r.jsx)(l.A, {
                        className: _.il,
                        justify: p ? l.A.Justify.START : l.A.Justify.CENTER,
                        children: e(),
                    }),
                (0, r.jsx)(o.H, { className: s()({ [_.Av]: h, [_.gH]: p }), children: i }),
                (0, r.jsx)(f, { className: s()({ [_.IF]: h, [_.If]: p }), children: a }),
                (0, r.jsxs)(o.ButtonGroup, {
                    fullWidth: !0,
                    direction: "vertical",
                    children: [
                        (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            variant: "primary",
                            onClick: this.handleDismiss,
                            text: d.intl.string(d.t["+IrDzN"]),
                        }),
                        (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            onClick: c,
                            text: d.intl.string(d.t["33wtxt"]),
                        }),
                    ],
                }),
            ],
        });
    }
}
class m extends i.PureComponent {
    static TextAlignments = f;
    static defaultProps = { textAlign: "left" };
    onClickComplete = (e) => {
        e(), this.props.onComplete();
    };
    onClickSkipAll = (e) => {
        let { onSkipAll: t, uniqueId: n } = this.props;
        e(), t(), u.default.track(c.HAw.DISMISS_ALL_TUTORIALS, { tutorial: n });
    };
    renderPopoutContent = (e) => {
        let { closePopout: t, position: n } = e,
            { forceTheme: i, isLongText: a, arrowAlignment: l, renderMedia: u } = this.props,
            c = null != u;
        return (0, r.jsx)(o.NPJ, {
            theme: i,
            children: (e) =>
                (0, r.jsx)(h, {
                    ...this.props,
                    className: s()(
                        {
                            [_.sQ]: "bottom" === n,
                            [_.eV]: !a && !c,
                            [_.tJ]: !a && c,
                            [_.II]: a && !c,
                            [_.HU]: a && c,
                            [_.pG]: "right" === n,
                            [_.Mn]: "top" === n,
                            [_.kb]: "left" === n,
                            [_.ks]: "top" === l,
                            [_.Eo]: "middle" === l,
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
                isLongText: a,
                title: s,
                body: l,
                children: u,
                spacing: c,
                forceTheme: d,
                innerRef: _,
                ...f
            } = this.props,
            p = "top" === f.position || "bottom" === f.position ? "center" : "top";
        return (0, r.jsx)(o.YNO, {
            targetElementRef: _,
            ...f,
            align: p,
            spacing: c ?? 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: u,
        });
    }
}
