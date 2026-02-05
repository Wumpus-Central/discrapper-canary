n.d(t, { A: () => j }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(665260),
    o = n(158954),
    d = n(314116),
    c = n(397927),
    u = n(687709),
    h = n(843472),
    A = n(47167),
    g = n(12351),
    m = n(386467),
    p = n(928658),
    _ = n(226698),
    x = n(994500),
    f = n(287809),
    E = n(628691),
    C = n(636922),
    I = n(652215),
    S = n(985018),
    b = n(641131),
    N = n(378720);
class T extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: a } = l ?? {};
        e
            ? (0, p.V2)(i, "message_delete_alert", () =>
                  h.A.deleteMessage(n.id, i.id).then(() => {
                      null != s && (t && !a && _.A.resolveFlag(s), this.props.onClose?.());
                  }),
              )
            : h.A.deleteMessage(n.id, i.id).then(() => {
                  null != s && (t && !a && _.A.resolveFlag(s), this.props.onClose?.());
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
            { channel: s, message: a, showContextMenuHint: d, moderatorReportData: u, ...h } = this.props,
            A = s.type === I.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(a.flags, I.pr7.CROSSPOSTED);
        d && (e = (0, i.jsx)(g.A, { className: N.Vc, children: S.intl.format(S.t.IxY7E6, {}) })),
            (0, E.AR)(a) &&
                (t = (0, i.jsx)("div", {
                    className: N.Vc,
                    children: (0, i.jsx)(c.dOG, {
                        label: S.intl.string(S.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let p = A ? S.intl.string(S.t["2kHABX"]) : S.intl.string(S.t.AMvpS4),
            _ = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: N.iU,
                        children: (0, i.jsx)(C.A, { channel: s, message: a, disableInteraction: !0 }),
                    }),
                    t,
                    e,
                ],
            });
        if (u?.moderatorReportChannelId != null) {
            let { isFlagResolved: e } = u;
            return (0, i.jsx)(m.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: S.intl.string(S.t.MWMcg7),
                    subtitle: p,
                    actions: [
                        { variant: "critical-primary", text: S.intl.string(S.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(c.Checkbox, {
                              checked: l,
                              label: S.intl.string(b.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...h,
                    children: _,
                }),
            });
        }
        return (0, i.jsx)(m.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: A ? S.intl.string(S.t.aIz1oV) : S.intl.string(S.t.MWMcg7),
                subtitle: p,
                actions: [
                    { text: S.intl.string(S.t["ETE/oC"]), onClick: h.onClose, variant: "secondary" },
                    { text: S.intl.string(S.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: _,
            }),
        });
    }
}
let j = {
    confirmPin: function (e, t) {
        let n,
            l = (0, A.m1)(e, f.default, x.A);
        (n = e.isPrivate() ? S.intl.string(S.t.hMRngA) : S.intl.formatToPlainString(S.t["3IRluI"], { channelName: l })),
            (0, d.A)({
                title: S.intl.string(S.t.bKMaZX),
                subtitle: n,
                confirmText: S.intl.string(S.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    u.A.pinMessage(e, t.id);
                },
                cancelText: S.intl.string(S.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: N.iU,
                    children: (0, i.jsx)(C.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
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
                u.A.unpinMessage(e, t.id);
            },
            cancelText: S.intl.string(S.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: a()(N.iU, N.YK),
                        children: (0, i.jsx)(C.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(g.A, { children: S.intl.format(S.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, c.qfG)((s) =>
            (0, i.jsx)(T, { channel: e, message: t, showContextMenuHint: n, moderatorReportData: l, ...s }),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, d.A)({
            title: S.intl.string(S.t.aIz1oV),
            subtitle: S.intl.string(S.t.grBcM8),
            confirmText: S.intl.string(S.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                h.A.editMessage(e, t, n);
            },
            cancelText: S.intl.string(S.t["ETE/oC"]),
        });
    },
};
