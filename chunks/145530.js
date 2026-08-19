n.d(t, { A: () => N }), n(938796);
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(665260),
    o = n(189213),
    d = n(314116),
    u = n(243721),
    c = n(150934),
    E = n(192308),
    g = n(687709),
    h = n(148494),
    A = n(47167),
    _ = n(12351),
    S = n(386467),
    f = n(928658),
    I = n(226698),
    C = n(994500),
    m = n(287809),
    p = n(628691),
    v = n(636922),
    T = n(652215),
    R = n(375708),
    L = n(544482),
    P = n(19478);
class O extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: r, isFlagResolved: s } = l ?? {};
        e
            ? (0, f.V2)(i, "message_delete_alert", () =>
                  h.A.deleteMessage(n.id, i.id).then(() => {
                      null != r && (t && !s && I.A.resolveFlag(r), this.props.onClose?.());
                  }),
              )
            : h.A.deleteMessage(n.id, i.id).then(() => {
                  null != r && (t && !s && I.A.resolveFlag(r), this.props.onClose?.());
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
            { channel: r, message: s, showContextMenuHint: d, moderatorReportData: E, ...g } = this.props,
            h = r.type === T.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(s.flags, T.pr7.CROSSPOSTED);
        d && (e = (0, i.jsx)(_.A, { className: P.Vc, children: R.intl.format(R.t.IxY7E6, {}) })),
            (0, p.AR)(s) &&
                (t = (0, i.jsx)("div", {
                    className: P.Vc,
                    children: (0, i.jsx)(u.d, {
                        label: R.intl.string(R.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let A = h ? R.intl.string(R.t["2kHABX"]) : R.intl.string(R.t.AMvpS4),
            f = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: P.iU,
                        children: (0, i.jsx)(v.A, { channel: r, message: s, disableInteraction: !0 }),
                    }),
                    t,
                    e,
                ],
            });
        if (E?.moderatorReportChannelId != null) {
            let { isFlagResolved: e } = E;
            return (0, i.jsx)(S.A.Provider, {
                value: r.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: R.intl.string(R.t.MWMcg7),
                    subtitle: A,
                    actions: [
                        { variant: "critical-primary", text: R.intl.string(R.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(c.S, {
                              checked: l,
                              label: R.intl.string(L.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...g,
                    children: f,
                }),
            });
        }
        return (0, i.jsx)(S.A.Provider, {
            value: r.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: h ? R.intl.string(R.t.aIz1oV) : R.intl.string(R.t.MWMcg7),
                subtitle: A,
                actions: [
                    { text: R.intl.string(R.t["ETE/oC"]), onClick: g.onClose, variant: "secondary" },
                    { text: R.intl.string(R.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: f,
            }),
        });
    }
}
let N = {
    confirmPin: function (e, t) {
        let n,
            l = (0, A.m1)(e, m.default, C.A);
        (n = e.isPrivate() ? R.intl.string(R.t.hMRngA) : R.intl.formatToPlainString(R.t["3IRluI"], { channelName: l })),
            (0, d.A)({
                title: R.intl.string(R.t.bKMaZX),
                subtitle: n,
                confirmText: R.intl.string(R.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    g.A.pinMessage(e, t.id);
                },
                cancelText: R.intl.string(R.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: P.iU,
                    children: (0, i.jsx)(v.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, d.A)({
            title: R.intl.string(R.t.CFF2vL),
            subtitle: R.intl.string(R.t.NjEPp7),
            confirmText: R.intl.string(R.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                g.A.unpinMessage(e, t.id);
            },
            cancelText: R.intl.string(R.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: s()(P.iU, P.YK),
                        children: (0, i.jsx)(v.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(_.A, { children: R.intl.format(R.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, E.openModal)((r) =>
            (0, i.jsx)(O, { channel: e, message: t, showContextMenuHint: n, moderatorReportData: l, ...r }),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, d.A)({
            title: R.intl.string(R.t.aIz1oV),
            subtitle: R.intl.string(R.t.grBcM8),
            confirmText: R.intl.string(R.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                h.A.editMessage(e, t, n);
            },
            cancelText: R.intl.string(R.t["ETE/oC"]),
        });
    },
};
