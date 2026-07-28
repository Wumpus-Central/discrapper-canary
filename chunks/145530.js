n.d(t, { A: () => w }), n(938796);
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
    _ = n(148494),
    h = n(47167),
    A = n(12351),
    S = n(386467),
    I = n(928658),
    f = n(226698),
    C = n(994500),
    m = n(287809),
    p = n(628691),
    T = n(636922),
    R = n(652215),
    L = n(375708),
    v = n(221314),
    P = n(359287);
class O extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: r, isFlagResolved: s } = l ?? {};
        e
            ? (0, I.V2)(i, "message_delete_alert", () =>
                  _.A.deleteMessage(n.id, i.id).then(() => {
                      null != r && (t && !s && f.A.resolveFlag(r), this.props.onClose?.());
                  }),
              )
            : _.A.deleteMessage(n.id, i.id).then(() => {
                  null != r && (t && !s && f.A.resolveFlag(r), this.props.onClose?.());
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
            _ = r.type === R.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(s.flags, R.pr7.CROSSPOSTED);
        d && (e = (0, i.jsx)(A.A, { className: P.Vc, children: L.intl.format(L.t.IxY7E6, {}) })),
            (0, p.AR)(s) &&
                (t = (0, i.jsx)("div", {
                    className: P.Vc,
                    children: (0, i.jsx)(u.d, {
                        label: L.intl.string(L.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let h = _ ? L.intl.string(L.t["2kHABX"]) : L.intl.string(L.t.AMvpS4),
            I = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: P.iU,
                        children: (0, i.jsx)(T.A, { channel: r, message: s, disableInteraction: !0 }),
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
                    title: L.intl.string(L.t.MWMcg7),
                    subtitle: h,
                    actions: [
                        { variant: "critical-primary", text: L.intl.string(L.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(c.S, {
                              checked: l,
                              label: L.intl.string(v.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...g,
                    children: I,
                }),
            });
        }
        return (0, i.jsx)(S.A.Provider, {
            value: r.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: _ ? L.intl.string(L.t.aIz1oV) : L.intl.string(L.t.MWMcg7),
                subtitle: h,
                actions: [
                    { text: L.intl.string(L.t["ETE/oC"]), onClick: g.onClose, variant: "secondary" },
                    { text: L.intl.string(L.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: I,
            }),
        });
    }
}
let w = {
    confirmPin: function (e, t) {
        let n,
            l = (0, h.m1)(e, m.default, C.A);
        (n = e.isPrivate() ? L.intl.string(L.t.hMRngA) : L.intl.formatToPlainString(L.t["3IRluI"], { channelName: l })),
            (0, d.A)({
                title: L.intl.string(L.t.bKMaZX),
                subtitle: n,
                confirmText: L.intl.string(L.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    g.A.pinMessage(e, t.id);
                },
                cancelText: L.intl.string(L.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: P.iU,
                    children: (0, i.jsx)(T.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, d.A)({
            title: L.intl.string(L.t.CFF2vL),
            subtitle: L.intl.string(L.t.NjEPp7),
            confirmText: L.intl.string(L.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                g.A.unpinMessage(e, t.id);
            },
            cancelText: L.intl.string(L.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: s()(P.iU, P.YK),
                        children: (0, i.jsx)(T.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(A.A, { children: L.intl.format(L.t.oCVB3Y, {}) }),
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
            title: L.intl.string(L.t.aIz1oV),
            subtitle: L.intl.string(L.t.grBcM8),
            confirmText: L.intl.string(L.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                _.A.editMessage(e, t, n);
            },
            cancelText: L.intl.string(L.t["ETE/oC"]),
        });
    },
};
