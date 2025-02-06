n.d(t, { Z: () => _ }), n(789020), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    r = n(481060),
    o = n(332148),
    d = n(904245),
    c = n(933557),
    u = n(576855),
    g = n(372900),
    f = n(726521),
    m = n(294218),
    h = n(699516),
    E = n(594174),
    v = n(630388),
    Z = n(970257),
    x = n(981631),
    S = n(388032),
    N = n(463096);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends l.PureComponent {
    render() {
        let e, t;
        let { report: n } = this.state,
            { channel: l, message: a, showContextMenuHint: s, ...o } = this.props,
            d = l.type === x.d4z.GUILD_ANNOUNCEMENT && (0, v.yE)(a.flags, x.iLy.CROSSPOSTED);
        return (
            s &&
                (e = (0, i.jsx)(u.Z, {
                    className: N.spacingTop,
                    children: S.intl.format(S.t.IxY7Ex, {})
                })),
            (0, Z.vc)(a) &&
                (t = (0, i.jsx)(r.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: N.spacingTop,
                    children: S.intl.string(S.t.x0jzo6)
                })),
            (0, i.jsx)(g.Z.Provider, {
                value: l.guild_id,
                children: (0, i.jsxs)(r.ConfirmModal, {
                    header: d ? S.intl.string(S.t.aIz1oa) : S.intl.string(S.t.MWMcg4),
                    confirmText: S.intl.string(S.t.oyYWHB),
                    cancelText: S.intl.string(S.t['ETE/oK']),
                    onConfirm: this.handleDelete,
                    ...o,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: N.spacing,
                            children: d ? S.intl.string(S.t['2kHABQ']) : S.intl.string(S.t.AMvpS0)
                        }),
                        (0, i.jsx)('div', {
                            className: N.message,
                            children: (0, i.jsx)(m.Z, {
                                channel: l,
                                message: a,
                                disableInteraction: !0
                            })
                        }),
                        t,
                        e
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { report: !1 }),
            I(this, 'handleDelete', () => {
                let { report: e } = this.state,
                    { channel: t, message: n } = this.props;
                e ? (0, f.ak)(n, 'message_delete_alert', () => d.Z.deleteMessage(t.id, n.id)) : d.Z.deleteMessage(t.id, n.id);
            }),
            I(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            });
    }
}
let _ = {
    confirmPin: function (e, t) {
        (0, r.h7j)((n) => {
            let l;
            let a = (0, c.F6)(e, E.default, h.Z);
            return (
                (l = e.isPrivate() ? S.intl.string(S.t.hMRngI) : S.intl.formatToPlainString(S.t['3IRluL'], { channelName: a })),
                (0, i.jsx)(g.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(r.ConfirmModal, {
                        header: S.intl.string(S.t.bKMaZW),
                        confirmText: S.intl.string(S.t.rOQ5BQ),
                        cancelText: S.intl.string(S.t['ETE/oK']),
                        confirmButtonColor: r.zxk.Colors.BRAND,
                        onConfirm: () => o.Z.pinMessage(e, t.id),
                        ...n,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: N.spacing,
                                children: l
                            }),
                            (0, i.jsx)('div', {
                                className: N.message,
                                children: (0, i.jsx)(m.Z, {
                                    channel: e,
                                    message: t,
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
    confirmUnpin: function (e, t) {
        (0, r.h7j)((n) =>
            (0, i.jsx)(g.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(r.ConfirmModal, {
                    header: S.intl.string(S.t.CFF2vL),
                    confirmText: S.intl.string(S.t.lAU5jI),
                    cancelText: S.intl.string(S.t['ETE/oK']),
                    onConfirm: () => o.Z.unpinMessage(e, t.id),
                    ...n,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: N.spacing,
                            children: S.intl.string(S.t.NjEPp6)
                        }),
                        (0, i.jsx)('div', {
                            className: s()(N.message, N.spacing),
                            children: (0, i.jsx)(m.Z, {
                                channel: e,
                                message: t,
                                disableInteraction: !0
                            })
                        }),
                        (0, i.jsx)(u.Z, { children: S.intl.format(S.t.oCVB3d, {}) })
                    ]
                })
            })
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, r.h7j)((l) =>
            (0, i.jsx)(p, {
                channel: e,
                message: t,
                showContextMenuHint: n,
                ...l
            })
        );
    },
    confirmEdit: function (e, t, n) {
        (0, r.h7j)((l) =>
            (0, i.jsx)(r.ConfirmModal, {
                header: S.intl.string(S.t.aIz1oa),
                confirmText: S.intl.string(S.t['cY+Ooa']),
                cancelText: S.intl.string(S.t['ETE/oK']),
                confirmButtonColor: r.zxk.Colors.BRAND,
                onConfirm: () => d.Z.editMessage(e, t, { content: n }),
                ...l,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: N.spacing,
                    children: S.intl.string(S.t.grBcMz)
                })
            })
        );
    }
};
