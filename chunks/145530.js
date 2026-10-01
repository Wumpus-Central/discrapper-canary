(i.d(e, { A: () => P }), i(938796));
var n = i(477900),
    r = i(582128),
    s = i(503698),
    l = i.n(s),
    a = i(665260),
    o = i(314116),
    c = i(189213),
    g = i(150934),
    d = i(192308),
    h = i(687709),
    A = i(148494),
    E = i(47167),
    m = i(12351),
    p = i(386467),
    u = i(928658),
    N = i(226698),
    I = i(994500),
    S = i(287809),
    f = i(628691),
    C = i(636922),
    x = i(652215),
    _ = i(375708),
    T = i(39470),
    v = i(19478);
class M extends r.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: t, resolveFlag: e } = this.state,
            { channel: i, message: n, moderatorReportData: r } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: l } = r ?? {},
            a = !1;
        function o() {
            a ||
                ((a = !0),
                A.A.deleteMessage(i.id, n.id).then(() => {
                    null != s && e && !l && N.A.resolveFlag(s);
                }));
        }
        (t ? (0, u.V2)(n, "message_delete_alert", o, o) : o(), this.props.onClose?.());
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
            { report: i, resolveFlag: r } = this.state,
            { channel: s, message: l, showContextMenuHint: o, moderatorReportData: d, ...h } = this.props,
            A = s.type === x.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(l.flags, x.pr7.CROSSPOSTED);
        (o && (t = (0, n.jsx)(m.A, { className: v.Vc, children: _.intl.format(_.t.IxY7E6, {}) })),
            (0, f.AR)(l) &&
                (e = (0, n.jsx)("div", {
                    className: v.Vc,
                    children: (0, n.jsx)(g.S, {
                        label: _.intl.string(_.t.x0jzo9),
                        checked: i,
                        onChange: this.handleToggleReport,
                    }),
                })));
        let E = A ? _.intl.string(_.t["2kHABX"]) : _.intl.string(_.t.AMvpS4),
            u = (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: v.iU,
                        children: (0, n.jsx)(C.A, { channel: s, message: l, disableInteraction: !0 }),
                    }),
                    e,
                    t,
                ],
            });
        if (d?.moderatorReportChannelId != null) {
            let { isFlagResolved: t } = d;
            return (0, n.jsx)(p.A.Provider, {
                value: s.guild_id,
                children: (0, n.jsx)(c.a, {
                    title: _.intl.string(_.t.MWMcg7),
                    subtitle: E,
                    actions: [
                        { variant: "critical-primary", text: _.intl.string(_.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: t
                        ? void 0
                        : (0, n.jsx)(g.S, {
                              checked: r,
                              label: _.intl.string(T.default["8yIKem"]),
                              onChange: (t) => this.handleToggleResolveFlag(t),
                          }),
                    ...h,
                    children: u,
                }),
            });
        }
        return (0, n.jsx)(p.A.Provider, {
            value: s.guild_id,
            children: (0, n.jsx)(c.a, {
                title: A ? _.intl.string(_.t.aIz1oV) : _.intl.string(_.t.MWMcg7),
                subtitle: E,
                actions: [
                    { text: _.intl.string(_.t["ETE/oC"]), onClick: h.onClose, variant: "secondary" },
                    { text: _.intl.string(_.t.oyYWHE), onClick: this.handleDelete, variant: "critical-primary" },
                ],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: u,
            }),
        });
    }
}
let P = {
    confirmPin: function (t, e) {
        let i,
            r = (0, E.m1)(t, S.default, I.A);
        ((i = t.isPrivate()
            ? _.intl.string(_.t.hMRngA)
            : _.intl.formatToPlainString(_.t["3IRluI"], { channelName: r })),
            (0, o.A)({
                title: _.intl.string(_.t.bKMaZX),
                subtitle: i,
                confirmText: _.intl.string(_.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    h.A.pinMessage(t, e.id);
                },
                cancelText: _.intl.string(_.t["ETE/oC"]),
                children: (0, n.jsx)("div", {
                    className: v.iU,
                    children: (0, n.jsx)(C.A, { channel: t, message: e, animateAvatar: !1, disableInteraction: !0 }),
                }),
            }));
    },
    confirmUnpin: function (t, e) {
        (0, o.A)({
            title: _.intl.string(_.t.CFF2vL),
            subtitle: _.intl.string(_.t.NjEPp7),
            confirmText: _.intl.string(_.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                h.A.unpinMessage(t, e.id);
            },
            cancelText: _.intl.string(_.t["ETE/oC"]),
            children: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: l()(v.iU, v.YK),
                        children: (0, n.jsx)(C.A, { channel: t, message: e, disableInteraction: !0 }),
                    }),
                    (0, n.jsx)(m.A, { children: _.intl.format(_.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.openModal)((s) =>
            (0, n.jsx)(M, { channel: t, message: e, showContextMenuHint: i, moderatorReportData: r, ...s }),
        );
    },
    confirmEdit: function (t, e, i) {
        (0, o.A)({
            title: _.intl.string(_.t.aIz1oV),
            subtitle: _.intl.string(_.t.grBcM8),
            confirmText: _.intl.string(_.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                A.A.editMessage(t, e, i);
            },
            cancelText: _.intl.string(_.t["ETE/oC"]),
        });
    },
};
