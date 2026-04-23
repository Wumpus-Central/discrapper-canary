n.d(t, { A: () => j }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(665260),
    o = n(189213),
    d = n(314116),
    c = n(243721),
    u = n(150934),
    h = n(192308),
    A = n(687709),
    _ = n(843472),
    m = n(47167),
    g = n(12351),
    p = n(386467),
    f = n(928658),
    E = n(226698),
    x = n(994500),
    I = n(287809),
    C = n(628691),
    b = n(636922),
    N = n(652215),
    S = n(985018),
    v = n(221314),
    T = n(893727);
class y extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: a } = l ?? {};
        e
            ? (0, f.V2)(i, "message_delete_alert", () =>
                  _.A.deleteMessage(n.id, i.id).then(() => {
                      null != s && (t && !a && E.A.resolveFlag(s), this.props.onClose?.());
                  }),
              )
            : _.A.deleteMessage(n.id, i.id).then(() => {
                  null != s && (t && !a && E.A.resolveFlag(s), this.props.onClose?.());
              });
    };
    handleDeleteMana = () => {
        this.handleDelete(), this.props.onClose?.();
    };
    handleToggleReport = (e) => {
        this.setState({ report: e });
    };
    handleToggleResolveFlag = (e) => {
        this.setState({ resolveFlag: e });
    };
    render() {
        let e,
            t,
            { report: n, resolveFlag: l } = this.state,
            { channel: s, message: a, showContextMenuHint: d, moderatorReportData: h, ...A } = this.props,
            _ = s.type === N.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(a.flags, N.pr7.CROSSPOSTED);
        d && (e = (0, i.jsx)(g.A, { className: T.Vc, children: S.intl.format(S.t.IxY7E6, {}) })),
            (0, C.AR)(a) &&
                (t = (0, i.jsx)("div", {
                    className: T.Vc,
                    children: (0, i.jsx)(c.d, {
                        label: S.intl.string(S.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let m = _ ? S.intl.string(S.t["2kHABX"]) : S.intl.string(S.t.AMvpS4),
            f = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: T.iU,
                        children: (0, i.jsx)(b.A, { channel: s, message: a, disableInteraction: !0 }),
                    }),
                    t,
                    e,
                ],
            });
        if (h?.moderatorReportChannelId != null) {
            let { isFlagResolved: e } = h;
            return (0, i.jsx)(p.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: S.intl.string(S.t.MWMcg7),
                    subtitle: m,
                    actions: [
                        { variant: "critical-primary", text: S.intl.string(S.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(u.S, {
                              checked: l,
                              label: S.intl.string(v.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...A,
                    children: f,
                }),
            });
        }
        return (0, i.jsx)(p.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: _ ? S.intl.string(S.t.aIz1oV) : S.intl.string(S.t.MWMcg7),
                subtitle: m,
                actions: [
                    { text: S.intl.string(S.t["ETE/oC"]), onClick: A.onClose, variant: "secondary" },
                    { text: S.intl.string(S.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: A.onClose,
                transitionState: A.transitionState,
                children: f,
            }),
        });
    }
}
let j = {
    confirmPin: function (e, t) {
        let n,
            l = (0, m.m1)(e, I.default, x.A);
        (n = e.isPrivate() ? S.intl.string(S.t.hMRngA) : S.intl.formatToPlainString(S.t["3IRluI"], { channelName: l })),
            (0, d.A)({
                title: S.intl.string(S.t.bKMaZX),
                subtitle: n,
                confirmText: S.intl.string(S.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    A.A.pinMessage(e, t.id);
                },
                cancelText: S.intl.string(S.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: T.iU,
                    children: (0, i.jsx)(b.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, d.A)({
            title: S.intl.string(S.t.CFF2vL),
            subtitle: S.intl.string(S.t.NjEPp7),
            confirmText: S.intl.string(S.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                A.A.unpinMessage(e, t.id);
            },
            cancelText: S.intl.string(S.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: a()(T.iU, T.YK),
                        children: (0, i.jsx)(b.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(g.A, { children: S.intl.format(S.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, h.openModal)((s) =>
            (0, i.jsx)(y, { channel: e, message: t, showContextMenuHint: n, moderatorReportData: l, ...s }),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, d.A)({
            title: S.intl.string(S.t.aIz1oV),
            subtitle: S.intl.string(S.t.grBcM8),
            confirmText: S.intl.string(S.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                _.A.editMessage(e, t, n);
            },
            cancelText: S.intl.string(S.t["ETE/oC"]),
        });
    },
};
