t(789020), t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(332148),
    u = t(904245),
    d = t(933557),
    c = t(576855),
    m = t(372900),
    g = t(726521),
    f = t(294218),
    h = t(699516),
    E = t(594174),
    I = t(630388),
    v = t(970257),
    p = t(981631),
    x = t(388032),
    M = t(463096);
function S(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class Z extends l.PureComponent {
    render() {
        let e, n;
        let { report: t } = this.state,
            { channel: l, message: r, showContextMenuHint: a, ...s } = this.props,
            u = l.type === p.d4z.GUILD_ANNOUNCEMENT && (0, I.yE)(r.flags, p.iLy.CROSSPOSTED);
        return (
            a &&
                (e = (0, i.jsx)(c.Z, {
                    className: M.spacingTop,
                    children: x.intl.format(x.t.IxY7Ex, {})
                })),
            (0, v.vc)(r) &&
                (n = (0, i.jsx)(o.FormSwitch, {
                    value: t,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: M.spacingTop,
                    children: x.intl.string(x.t.x0jzo6)
                })),
            (0, i.jsx)(m.Z.Provider, {
                value: l.guild_id,
                children: (0, i.jsxs)(o.ConfirmModal, {
                    header: u ? x.intl.string(x.t.aIz1oa) : x.intl.string(x.t.MWMcg4),
                    confirmText: x.intl.string(x.t.oyYWHB),
                    cancelText: x.intl.string(x.t['ETE/oK']),
                    onConfirm: this.handleDelete,
                    ...s,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: M.spacing,
                            children: u ? x.intl.string(x.t['2kHABQ']) : x.intl.string(x.t.AMvpS0)
                        }),
                        (0, i.jsx)('div', {
                            className: M.message,
                            children: (0, i.jsx)(f.Z, {
                                channel: l,
                                message: r,
                                disableInteraction: !0
                            })
                        }),
                        n,
                        e
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { report: !1 }),
            S(this, 'handleDelete', () => {
                let { report: e } = this.state,
                    { channel: n, message: t } = this.props;
                e ? (0, g.ak)(t, 'message_delete_alert', () => u.Z.deleteMessage(n.id, t.id)) : u.Z.deleteMessage(n.id, t.id);
            }),
            S(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            });
    }
}
n.Z = {
    confirmPin: function (e, n) {
        (0, o.openModal)((t) => {
            let l;
            let r = (0, d.F6)(e, E.default, h.Z);
            return (
                (l = e.isPrivate() ? x.intl.string(x.t.hMRngI) : x.intl.formatToPlainString(x.t['3IRluL'], { channelName: r })),
                (0, i.jsx)(m.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(o.ConfirmModal, {
                        header: x.intl.string(x.t.bKMaZW),
                        confirmText: x.intl.string(x.t.rOQ5BQ),
                        cancelText: x.intl.string(x.t['ETE/oK']),
                        confirmButtonColor: o.Button.Colors.BRAND,
                        onConfirm: () => s.Z.pinMessage(e, n.id),
                        ...t,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: M.spacing,
                                children: l
                            }),
                            (0, i.jsx)('div', {
                                className: M.message,
                                children: (0, i.jsx)(f.Z, {
                                    channel: e,
                                    message: n,
                                    animateAvatar: !1,
                                    disableInteraction: !0
                                })
                            })
                        ]
                    })
                })
            );
        });
    },
    confirmUnpin: function (e, n) {
        (0, o.openModal)((t) =>
            (0, i.jsx)(m.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(o.ConfirmModal, {
                    header: x.intl.string(x.t.CFF2vL),
                    confirmText: x.intl.string(x.t.lAU5jI),
                    cancelText: x.intl.string(x.t['ETE/oK']),
                    onConfirm: () => s.Z.unpinMessage(e, n.id),
                    ...t,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: M.spacing,
                            children: x.intl.string(x.t.NjEPp6)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(M.message, M.spacing),
                            children: (0, i.jsx)(f.Z, {
                                channel: e,
                                message: n,
                                disableInteraction: !0
                            })
                        }),
                        (0, i.jsx)(c.Z, { children: x.intl.format(x.t.oCVB3d, {}) })
                    ]
                })
            })
        );
    },
    confirmDelete: function (e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, o.openModal)((l) =>
            (0, i.jsx)(Z, {
                channel: e,
                message: n,
                showContextMenuHint: t,
                ...l
            })
        );
    },
    confirmEdit: function (e, n, t) {
        (0, o.openModal)((l) =>
            (0, i.jsx)(o.ConfirmModal, {
                header: x.intl.string(x.t.aIz1oa),
                confirmText: x.intl.string(x.t['cY+Ooa']),
                cancelText: x.intl.string(x.t['ETE/oK']),
                confirmButtonColor: o.Button.Colors.BRAND,
                onConfirm: () => u.Z.editMessage(e, n, { content: t }),
                ...l,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: M.spacing,
                    children: x.intl.string(x.t.grBcMz)
                })
            })
        );
    }
};
