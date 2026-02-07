"use strict";
s.d(t, { A: () => C }), s(938796);
var n = s(627968),
    i = s(64700),
    r = s(503698),
    a = s.n(r),
    l = s(665260),
    c = s(158954),
    o = s(314116),
    d = s(397927),
    u = s(687709),
    p = s(843472),
    g = s(47167),
    h = s(12351),
    f = s(386467),
    m = s(928658),
    A = s(226698),
    x = s(994500),
    E = s(287809),
    b = s(628691),
    _ = s(636922),
    T = s(652215),
    I = s(985018),
    S = s(641131),
    v = s(378720);
class N extends i.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: s, message: n, moderatorReportData: i } = this.props,
            { moderatorReportChannelId: r, isFlagResolved: a } = i ?? {};
        e
            ? (0, m.V2)(n, "message_delete_alert", () =>
                  p.A.deleteMessage(s.id, n.id).then(() => {
                      null != r && (t && !a && A.A.resolveFlag(r), this.props.onClose?.());
                  }),
              )
            : p.A.deleteMessage(s.id, n.id).then(() => {
                  null != r && (t && !a && A.A.resolveFlag(r), this.props.onClose?.());
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
            { report: s, resolveFlag: i } = this.state,
            { channel: r, message: a, showContextMenuHint: o, moderatorReportData: u, ...p } = this.props,
            g = r.type === T.rbe.GUILD_ANNOUNCEMENT && (0, l.Lt)(a.flags, T.pr7.CROSSPOSTED);
        o && (e = (0, n.jsx)(h.A, { className: v.Vc, children: I.intl.format(I.t.IxY7E6, {}) })),
            (0, b.AR)(a) &&
                (t = (0, n.jsx)("div", {
                    className: v.Vc,
                    children: (0, n.jsx)(d.dOG, {
                        label: I.intl.string(I.t.x0jzo9),
                        checked: s,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let m = g ? I.intl.string(I.t["2kHABX"]) : I.intl.string(I.t.AMvpS4),
            A = (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: v.iU,
                        children: (0, n.jsx)(_.A, { channel: r, message: a, disableInteraction: !0 }),
                    }),
                    t,
                    e,
                ],
            });
        if (u?.moderatorReportChannelId != null) {
            let { isFlagResolved: e } = u;
            return (0, n.jsx)(f.A.Provider, {
                value: r.guild_id,
                children: (0, n.jsx)(c.Modal, {
                    title: I.intl.string(I.t.MWMcg7),
                    subtitle: m,
                    actions: [
                        { variant: "critical-primary", text: I.intl.string(I.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, n.jsx)(d.Checkbox, {
                              checked: i,
                              label: I.intl.string(S.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...p,
                    children: A,
                }),
            });
        }
        return (0, n.jsx)(f.A.Provider, {
            value: r.guild_id,
            children: (0, n.jsx)(c.Modal, {
                title: g ? I.intl.string(I.t.aIz1oV) : I.intl.string(I.t.MWMcg7),
                subtitle: m,
                actions: [
                    { text: I.intl.string(I.t["ETE/oC"]), onClick: p.onClose, variant: "secondary" },
                    { text: I.intl.string(I.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: p.onClose,
                transitionState: p.transitionState,
                children: A,
            }),
        });
    }
}
let C = {
    confirmPin: function (e, t) {
        let s,
            i = (0, g.m1)(e, E.default, x.A);
        (s = e.isPrivate() ? I.intl.string(I.t.hMRngA) : I.intl.formatToPlainString(I.t["3IRluI"], { channelName: i })),
            (0, o.A)({
                title: I.intl.string(I.t.bKMaZX),
                subtitle: s,
                confirmText: I.intl.string(I.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    u.A.pinMessage(e, t.id);
                },
                cancelText: I.intl.string(I.t["ETE/oC"]),
                children: (0, n.jsx)("div", {
                    className: v.iU,
                    children: (0, n.jsx)(_.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, o.A)({
            title: I.intl.string(I.t.CFF2vL),
            subtitle: I.intl.string(I.t.NjEPp7),
            confirmText: I.intl.string(I.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                u.A.unpinMessage(e, t.id);
            },
            cancelText: I.intl.string(I.t["ETE/oC"]),
            children: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: a()(v.iU, v.YK),
                        children: (0, n.jsx)(_.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, n.jsx)(h.A, { children: I.intl.format(I.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)((r) =>
            (0, n.jsx)(N, { channel: e, message: t, showContextMenuHint: s, moderatorReportData: i, ...r }),
        );
    },
    confirmEdit: function (e, t, s) {
        (0, o.A)({
            title: I.intl.string(I.t.aIz1oV),
            subtitle: I.intl.string(I.t.grBcM8),
            confirmText: I.intl.string(I.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                p.A.editMessage(e, t, s);
            },
            cancelText: I.intl.string(I.t["ETE/oC"]),
        });
    },
};
