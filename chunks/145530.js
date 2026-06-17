n.d(e, { A: () => b }), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(665260),
    o = n(189213),
    c = n(314116),
    d = n(243721),
    g = n(150934),
    h = n(192308),
    A = n(687709),
    E = n(493336),
    m = n(47167),
    p = n(12351),
    u = n(386467),
    N = n(928658),
    I = n(226698),
    S = n(994500),
    f = n(287809),
    C = n(628691),
    x = n(636922),
    _ = n(652215),
    M = n(375708),
    T = n(297897),
    v = n(42015);
class P extends r.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: t, resolveFlag: e } = this.state,
            { channel: n, message: i, moderatorReportData: r } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: l } = r ?? {};
        t
            ? (0, N.V2)(i, "message_delete_alert", () =>
                  E.A.deleteMessage(n.id, i.id).then(() => {
                      null != s && (e && !l && I.A.resolveFlag(s), this.props.onClose?.());
                  }),
              )
            : E.A.deleteMessage(n.id, i.id).then(() => {
                  null != s && (e && !l && I.A.resolveFlag(s), this.props.onClose?.());
              });
    };
    handleDeleteMana = () => {
        this.handleDelete(), this.props.onClose?.();
    };
    handleToggleReport = (t) => {
        this.setState({ report: t });
    };
    handleToggleResolveFlag = (t) => {
        this.setState({ resolveFlag: t });
    };
    render() {
        let t,
            e,
            { report: n, resolveFlag: r } = this.state,
            { channel: s, message: l, showContextMenuHint: c, moderatorReportData: h, ...A } = this.props,
            E = s.type === _.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(l.flags, _.pr7.CROSSPOSTED);
        c && (t = (0, i.jsx)(p.A, { className: v.Vc, children: M.intl.format(M.t.IxY7E6, {}) })),
            (0, C.AR)(l) &&
                (e = (0, i.jsx)("div", {
                    className: v.Vc,
                    children: (0, i.jsx)(d.d, {
                        label: M.intl.string(M.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let m = E ? M.intl.string(M.t["2kHABX"]) : M.intl.string(M.t.AMvpS4),
            N = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: v.iU,
                        children: (0, i.jsx)(x.A, { channel: s, message: l, disableInteraction: !0 }),
                    }),
                    e,
                    t,
                ],
            });
        if (h?.moderatorReportChannelId != null) {
            let { isFlagResolved: t } = h;
            return (0, i.jsx)(u.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: M.intl.string(M.t.MWMcg7),
                    subtitle: m,
                    actions: [
                        { variant: "critical-primary", text: M.intl.string(M.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: t
                        ? void 0
                        : (0, i.jsx)(g.S, {
                              checked: r,
                              label: M.intl.string(T.default["8yIKem"]),
                              onChange: (t) => this.handleToggleResolveFlag(t),
                          }),
                    ...A,
                    children: N,
                }),
            });
        }
        return (0, i.jsx)(u.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: E ? M.intl.string(M.t.aIz1oV) : M.intl.string(M.t.MWMcg7),
                subtitle: m,
                actions: [
                    { text: M.intl.string(M.t["ETE/oC"]), onClick: A.onClose, variant: "secondary" },
                    { text: M.intl.string(M.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: A.onClose,
                transitionState: A.transitionState,
                children: N,
            }),
        });
    }
}
let b = {
    confirmPin: function (t, e) {
        let n,
            r = (0, m.m1)(t, f.default, S.A);
        (n = t.isPrivate() ? M.intl.string(M.t.hMRngA) : M.intl.formatToPlainString(M.t["3IRluI"], { channelName: r })),
            (0, c.A)({
                title: M.intl.string(M.t.bKMaZX),
                subtitle: n,
                confirmText: M.intl.string(M.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    A.A.pinMessage(t, e.id);
                },
                cancelText: M.intl.string(M.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: v.iU,
                    children: (0, i.jsx)(x.A, { channel: t, message: e, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (t, e) {
        (0, c.A)({
            title: M.intl.string(M.t.CFF2vL),
            subtitle: M.intl.string(M.t.NjEPp7),
            confirmText: M.intl.string(M.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                A.A.unpinMessage(t, e.id);
            },
            cancelText: M.intl.string(M.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: l()(v.iU, v.YK),
                        children: (0, i.jsx)(x.A, { channel: t, message: e, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(p.A, { children: M.intl.format(M.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, h.openModal)((s) =>
            (0, i.jsx)(P, { channel: t, message: e, showContextMenuHint: n, moderatorReportData: r, ...s }),
        );
    },
    confirmEdit: function (t, e, n) {
        (0, c.A)({
            title: M.intl.string(M.t.aIz1oV),
            subtitle: M.intl.string(M.t.grBcM8),
            confirmText: M.intl.string(M.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                E.A.editMessage(t, e, n);
            },
            cancelText: M.intl.string(M.t["ETE/oC"]),
        });
    },
};
