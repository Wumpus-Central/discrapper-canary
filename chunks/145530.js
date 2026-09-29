(n.d(t, { A: () => y }), n(938796));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(665260),
    o = n(314116),
    d = n(189213),
    c = n(150934),
    u = n(192308),
    m = n(687709),
    h = n(148494),
    g = n(47167),
    p = n(12351),
    A = n(386467),
    x = n(928658),
    f = n(226698),
    E = n(994500),
    I = n(287809),
    C = n(628691),
    _ = n(636922),
    v = n(652215),
    N = n(375708),
    j = n(256416),
    T = n(19478);
class S extends l.PureComponent {
    state = { report: !1, resolveFlag: !1 };
    handleDelete = () => {
        let { report: e, resolveFlag: t } = this.state,
            { channel: n, message: i, moderatorReportData: l } = this.props,
            { moderatorReportChannelId: s, isFlagResolved: a } = l ?? {},
            r = !1;
        function o() {
            r ||
                ((r = !0),
                h.A.deleteMessage(n.id, i.id).then(() => {
                    null != s && t && !a && f.A.resolveFlag(s);
                }));
        }
        (e ? (0, x.V2)(i, "message_delete_alert", o, o) : o(), this.props.onClose?.());
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
            { channel: s, message: a, showContextMenuHint: o, moderatorReportData: u, ...m } = this.props,
            h = s.type === v.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(a.flags, v.pr7.CROSSPOSTED);
        (o && (e = (0, i.jsx)(p.A, { className: T.Vc, children: N.intl.format(N.t.IxY7E6, {}) })),
            (0, C.AR)(a) &&
                (t = (0, i.jsx)("div", {
                    className: T.Vc,
                    children: (0, i.jsx)(c.S, {
                        label: N.intl.string(N.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                })));
        let g = h ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
            x = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: T.iU,
                        children: (0, i.jsx)(_.A, { channel: s, message: a, disableInteraction: !0 }),
                    }),
                    t,
                    e,
                ],
            });
        if (u?.moderatorReportChannelId != null) {
            let { isFlagResolved: e } = u;
            return (0, i.jsx)(A.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(d.a, {
                    title: N.intl.string(N.t.MWMcg7),
                    subtitle: g,
                    actions: [
                        { variant: "critical-primary", text: N.intl.string(N.t.oyYWHE), onClick: this.handleDelete },
                    ],
                    actionBarInput: e
                        ? void 0
                        : (0, i.jsx)(c.S, {
                              checked: l,
                              label: N.intl.string(j.default["8yIKem"]),
                              onChange: (e) => this.handleToggleResolveFlag(e),
                          }),
                    ...m,
                    children: x,
                }),
            });
        }
        return (0, i.jsx)(A.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(d.a, {
                title: h ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
                subtitle: g,
                actions: [
                    { text: N.intl.string(N.t["ETE/oC"]), onClick: m.onClose, variant: "secondary" },
                    { text: N.intl.string(N.t.oyYWHE), onClick: this.handleDelete, variant: "critical-primary" },
                ],
                onClose: m.onClose,
                transitionState: m.transitionState,
                children: x,
            }),
        });
    }
}
let y = {
    confirmPin: function (e, t) {
        let n,
            l = (0, g.m1)(e, I.default, E.A);
        ((n = e.isPrivate()
            ? N.intl.string(N.t.hMRngA)
            : N.intl.formatToPlainString(N.t["3IRluI"], { channelName: l })),
            (0, o.A)({
                title: N.intl.string(N.t.bKMaZX),
                subtitle: n,
                confirmText: N.intl.string(N.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    m.A.pinMessage(e, t.id);
                },
                cancelText: N.intl.string(N.t["ETE/oC"]),
                children: (0, i.jsx)("div", {
                    className: T.iU,
                    children: (0, i.jsx)(_.A, { channel: e, message: t, animateAvatar: !1, disableInteraction: !0 }),
                }),
            }));
    },
    confirmUnpin: function (e, t) {
        (0, o.A)({
            title: N.intl.string(N.t.CFF2vL),
            subtitle: N.intl.string(N.t.NjEPp7),
            confirmText: N.intl.string(N.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                m.A.unpinMessage(e, t.id);
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: a()(T.iU, T.YK),
                        children: (0, i.jsx)(_.A, { channel: e, message: t, disableInteraction: !0 }),
                    }),
                    (0, i.jsx)(p.A, { children: N.intl.format(N.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, u.openModal)((s) =>
            (0, i.jsx)(S, { channel: e, message: t, showContextMenuHint: n, moderatorReportData: l, ...s }),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, o.A)({
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
