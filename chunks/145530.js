n.d(t, { A: () => y }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(665260),
    o = n(158954),
    c = n(314116),
    d = n(397927),
    u = n(687709),
    h = n(843472),
    A = n(47167),
    _ = n(12351),
    m = n(386467),
    g = n(928658),
    p = n(226698),
    f = n(994500),
    x = n(287809),
    E = n(628691),
    I = n(636922),
    C = n(652215),
    N = n(985018),
    T = n(641131),
    S = n(759375);
class b extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: a } = l ?? {};
        e
            ? (0, g.V2)(i, "message_delete_alert", () =>
                  h.A.deleteMessage(n.id, i.id).then(() => {
                      null != s && (t && !a && p.A.resolveFlag(s), this.props.onClose?.());
                  }),
              )
            : h.A.deleteMessage(n.id, i.id).then(() => {
                  null != s && (t && !a && p.A.resolveFlag(s), this.props.onClose?.());
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
            { channel: s, message: a, showContextMenuHint: c, moderatorReportData: u, ...h } = this.props,
            A = s.type === C.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(a.flags, C.pr7.CROSSPOSTED);
        c && (e = (0, i.jsx)(_.A, { className: S.Vc, children: N.intl.format(N.t.IxY7E6, {}) })),
            (0, E.AR)(a) &&
                (t = (0, i.jsx)("div", {
                    className: S.Vc,
                    children: (0, i.jsx)(d.dOG, {
                        label: N.intl.string(N.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let g = A ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
            p = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: S.iU,
                        children: (0, i.jsx)(I.A, { channel: s, message: a, disableInteraction: !0 }),
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
                    title: N.intl.string(N.t.MWMcg7),
                    subtitle: g,
                    actions: [
                        { variant: "critical-primary", text: N.intl.string(N.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(d.Checkbox, {
                              checked: l,
                              label: N.intl.string(T.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...h,
                    children: p,
                }),
            });
        }
        return (0, i.jsx)(m.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: A ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
                subtitle: g,
                actions: [
                    { text: N.intl.string(N.t["ETE/oC"]), onClick: h.onClose, variant: "secondary" },
                    { text: N.intl.string(N.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: p,
            }),
        });
    }
}
let y = {
    confirmPin: function (e, t) {
        let n,
            l = (0, A.m1)(e, x.default, f.A);
        (n = e.isPrivate() ? N.intl.string(N.t.hMRngA) : N.intl.formatToPlainString(N.t["3IRluI"], { channelName: l })),
            (0, c.A)({
                title: N.intl.string(N.t.bKMaZX),
                subtitle: n,
                confirmText: N.intl.string(N.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    u.A.pinMessage(e, t.id);
                },
                cancelText: N.intl.string(N.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: S.iU,
                    children: (0, i.jsx)(I.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, c.A)({
            title: N.intl.string(N.t.CFF2vL),
            subtitle: N.intl.string(N.t.NjEPp7),
            confirmText: N.intl.string(N.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                u.A.unpinMessage(e, t.id);
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: a()(S.iU, S.YK),
                        children: (0, i.jsx)(I.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(_.A, { children: N.intl.format(N.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)((s) =>
            (0, i.jsx)(b, { channel: e, message: t, showContextMenuHint: n, moderatorReportData: l, ...s }),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, c.A)({
            title: N.intl.string(N.t.aIz1oV),
            subtitle: N.intl.string(N.t.grBcM8),
            confirmText: N.intl.string(N.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                h.A.editMessage(e, t, n);
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
        });
    },
};
