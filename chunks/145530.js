n.d(t, { A: () => b }), n(938796);
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(665260),
    o = n(189213),
    c = n(314116),
    d = n(243721),
    u = n(150934),
    m = n(192308),
    h = n(687709),
    g = n(148494),
    A = n(47167),
    p = n(12351),
    x = n(386467),
    f = n(928658),
    E = n(226698),
    I = n(994500),
    C = n(287809),
    _ = n(628691),
    v = n(636922),
    N = n(652215),
    j = n(375708),
    T = n(256416),
    S = n(19478);
class y extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: a } = l ?? {};
        e
            ? (0, f.V2)(i, "message_delete_alert", () =>
                  g.A.deleteMessage(n.id, i.id).then(() => {
                      null != s && (t && !a && E.A.resolveFlag(s), this.props.onClose?.());
                  }),
              )
            : g.A.deleteMessage(n.id, i.id).then(() => {
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
            { channel: s, message: a, showContextMenuHint: c, moderatorReportData: m, ...h } = this.props,
            g = s.type === N.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(a.flags, N.pr7.CROSSPOSTED);
        c && (e = (0, i.jsx)(p.A, { className: S.Vc, children: j.intl.format(j.t.IxY7E6, {}) })),
            (0, _.AR)(a) &&
                (t = (0, i.jsx)("div", {
                    className: S.Vc,
                    children: (0, i.jsx)(d.d, {
                        label: j.intl.string(j.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let A = g ? j.intl.string(j.t["2kHABX"]) : j.intl.string(j.t.AMvpS4),
            f = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: S.iU,
                        children: (0, i.jsx)(v.A, { channel: s, message: a, disableInteraction: !0 }),
                    }),
                    t,
                    e,
                ],
            });
        if (m?.moderatorReportChannelId != null) {
            let { isFlagResolved: e } = m;
            return (0, i.jsx)(x.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: j.intl.string(j.t.MWMcg7),
                    subtitle: A,
                    actions: [
                        { variant: "critical-primary", text: j.intl.string(j.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(u.S, {
                              checked: l,
                              label: j.intl.string(T.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...h,
                    children: f,
                }),
            });
        }
        return (0, i.jsx)(x.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: g ? j.intl.string(j.t.aIz1oV) : j.intl.string(j.t.MWMcg7),
                subtitle: A,
                actions: [
                    { text: j.intl.string(j.t["ETE/oC"]), onClick: h.onClose, variant: "secondary" },
                    { text: j.intl.string(j.t.oyYWHE), onClick: this.handleDeleteMana, variant: "critical-primary" },
                ],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: f,
            }),
        });
    }
}
let b = {
    confirmPin: function (e, t) {
        let n,
            l = (0, A.m1)(e, C.default, I.A);
        (n = e.isPrivate() ? j.intl.string(j.t.hMRngA) : j.intl.formatToPlainString(j.t["3IRluI"], { channelName: l })),
            (0, c.A)({
                title: j.intl.string(j.t.bKMaZX),
                subtitle: n,
                confirmText: j.intl.string(j.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    h.A.pinMessage(e, t.id);
                },
                cancelText: j.intl.string(j.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: S.iU,
                    children: (0, i.jsx)(v.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, c.A)({
            title: j.intl.string(j.t.CFF2vL),
            subtitle: j.intl.string(j.t.NjEPp7),
            confirmText: j.intl.string(j.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                h.A.unpinMessage(e, t.id);
            },
            cancelText: j.intl.string(j.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: a()(S.iU, S.YK),
                        children: (0, i.jsx)(v.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(p.A, { children: j.intl.format(j.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, m.openModal)((s) =>
            (0, i.jsx)(y, { channel: e, message: t, showContextMenuHint: n, moderatorReportData: l, ...s }),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, c.A)({
            title: j.intl.string(j.t.aIz1oV),
            subtitle: j.intl.string(j.t.grBcM8),
            confirmText: j.intl.string(j.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                g.A.editMessage(e, t, n);
            },
            cancelText: j.intl.string(j.t["ETE/oC"]),
        });
    },
};
