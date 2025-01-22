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
    g = t(372900),
    f = t(726521),
    m = t(294218),
    h = t(699516),
    E = t(594174),
    I = t(630388),
    v = t(970257),
    M = t(981631),
    p = t(388032),
    Z = t(463096);
function x(e, n, t) {
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
class S extends l.PureComponent {
    render() {
        let e, n;
        let { report: t } = this.state,
            { channel: l, message: r, showContextMenuHint: a, ...s } = this.props,
            u = l.type === M.d4z.GUILD_ANNOUNCEMENT && (0, I.yE)(r.flags, M.iLy.CROSSPOSTED);
        return (
            a &&
                (e = (0, i.jsx)(c.Z, {
                    className: Z.spacingTop,
                    children: p.intl.format(p.t.IxY7Ex, {})
                })),
            (0, v.vc)(r) &&
                (n = (0, i.jsx)(o.FormSwitch, {
                    value: t,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: Z.spacingTop,
                    children: p.intl.string(p.t.x0jzo6)
                })),
            (0, i.jsx)(g.Z.Provider, {
                value: l.guild_id,
                children: (0, i.jsxs)(o.ConfirmModal, {
                    header: u ? p.intl.string(p.t.aIz1oa) : p.intl.string(p.t.MWMcg4),
                    confirmText: p.intl.string(p.t.oyYWHB),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: this.handleDelete,
                    ...s,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: Z.spacing,
                            children: u ? p.intl.string(p.t['2kHABQ']) : p.intl.string(p.t.AMvpS0)
                        }),
                        (0, i.jsx)('div', {
                            className: Z.message,
                            children: (0, i.jsx)(m.Z, {
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
            x(this, 'state', { report: !1 }),
            x(this, 'handleDelete', () => {
                let { report: e } = this.state,
                    { channel: n, message: t } = this.props;
                e ? (0, f.ak)(t, 'message_delete_alert', () => u.Z.deleteMessage(n.id, t.id)) : u.Z.deleteMessage(n.id, t.id);
            }),
            x(this, 'handleToggleReport', (e) => {
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
                (l = e.isPrivate() ? p.intl.string(p.t.hMRngI) : p.intl.formatToPlainString(p.t['3IRluL'], { channelName: r })),
                (0, i.jsx)(g.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(o.ConfirmModal, {
                        header: p.intl.string(p.t.bKMaZW),
                        confirmText: p.intl.string(p.t.rOQ5BQ),
                        cancelText: p.intl.string(p.t['ETE/oK']),
                        confirmButtonColor: o.Button.Colors.BRAND,
                        onConfirm: () => s.Z.pinMessage(e, n.id),
                        ...t,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: Z.spacing,
                                children: l
                            }),
                            (0, i.jsx)('div', {
                                className: Z.message,
                                children: (0, i.jsx)(m.Z, {
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
            (0, i.jsx)(g.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(o.ConfirmModal, {
                    header: p.intl.string(p.t.CFF2vL),
                    confirmText: p.intl.string(p.t.lAU5jI),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: () => s.Z.unpinMessage(e, n.id),
                    ...t,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: Z.spacing,
                            children: p.intl.string(p.t.NjEPp6)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(Z.message, Z.spacing),
                            children: (0, i.jsx)(m.Z, {
                                channel: e,
                                message: n,
                                disableInteraction: !0
                            })
                        }),
                        (0, i.jsx)(c.Z, { children: p.intl.format(p.t.oCVB3d, {}) })
                    ]
                })
            })
        );
    },
    confirmDelete: function (e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, o.openModal)((l) =>
            (0, i.jsx)(S, {
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
                header: p.intl.string(p.t.aIz1oa),
                confirmText: p.intl.string(p.t['cY+Ooa']),
                cancelText: p.intl.string(p.t['ETE/oK']),
                confirmButtonColor: o.Button.Colors.BRAND,
                onConfirm: () => u.Z.editMessage(e, n, { content: t }),
                ...l,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: Z.spacing,
                    children: p.intl.string(p.t.grBcMz)
                })
            })
        );
    }
};
