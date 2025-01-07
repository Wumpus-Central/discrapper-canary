n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(194359),
    h = n(443589),
    m = n(703656),
    p = n(592125),
    g = n(131951),
    f = n(699516),
    _ = n(51144),
    E = n(321488),
    I = n(417183),
    C = n(825682),
    N = n(170245),
    v = n(981631),
    S = n(65154),
    T = n(388032),
    A = n(401207);
function b(e, t, n) {
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
function Z(e) {
    let { user: t, onSelect: n } = e,
        r = () => {
            u.Z.removeFriend(t.id, { location: 'Friends' });
        },
        l = (0, s.e7)([g.Z], () => g.Z.supports(S.AN.VIDEO)),
        a = t.isProvisional;
    return (0, i.jsxs)(o.Menu, {
        navId: 'friend-row',
        'aria-label': T.intl.string(T.t.liqwPD),
        onClose: d.Zy,
        onSelect: n,
        children: [
            !a && l
                ? (0, i.jsx)(o.MenuItem, {
                      id: 'start-video-call',
                      label: T.intl.string(T.t.oCqlGB),
                      action: function () {
                          c.Z.openPrivateChannel(t.id, !0, !0);
                      }
                  })
                : null,
            !a &&
                (0, i.jsx)(o.MenuItem, {
                    id: 'start-voice-call',
                    label: T.intl.string(T.t.focH1t),
                    action: () => {
                        c.Z.openPrivateChannel(t.id, !0);
                    }
                }),
            (0, i.jsx)(o.MenuItem, {
                id: 'remove-friend',
                label: T.intl.string(T.t.cvSt1N),
                action: () => {
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: T.intl.formatToPlainString(T.t.fPLvZW, { name: _.ZP.getName(t) }),
                            confirmText: T.intl.string(T.t.cvSt1N),
                            cancelText: T.intl.string(T.t['ETE/oK']),
                            onConfirm: r,
                            ...e,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: T.intl.format(T.t.l5FFq6, { name: _.ZP.getName(t) })
                            })
                        })
                    );
                },
                color: 'danger'
            })
        ]
    });
}
class x extends r.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let { user: e, isFocused: t, activities: n, applicationStream: r, status: l, isMobile: a, giftIntentType: s } = this.props,
            { isActiveRow: c } = this.state;
        return (0, i.jsx)(I.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: c,
            user: e,
            onOtherHover: () => (c ? null : (0, d.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, i.jsxs)('div', {
                    className: A.listItemContents,
                    children: [
                        (0, i.jsx)(N.Z, {
                            user: e,
                            status: l,
                            isMobile: a,
                            subText: (0, i.jsx)(C.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: r,
                                status: l,
                                user: e,
                                userIgnored: f.Z.isIgnored(e.id)
                            }),
                            hovered: t,
                            showAccountIdentifier: !0
                        }),
                        (0, i.jsxs)('div', {
                            className: A.actions,
                            children: [
                                null != s &&
                                    (0, i.jsx)(h.Z, {
                                        recipientUser: e,
                                        giftIntentType: s,
                                        analyticsPage: v.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t
                                    }),
                                (0, i.jsx)(E.Z, {
                                    icon: o.ChatIcon,
                                    tooltip: T.intl.string(T.t['g33r/P']),
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }),
                                (0, i.jsx)(E.Z, {
                                    icon: o.MoreVerticalIcon,
                                    tooltip: T.intl.string(T.t.UKOtz8),
                                    onClick: this.handleOpenActionsMenu,
                                    shouldHighlight: t
                                })
                            ]
                        })
                    ]
                })
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'peopleListItemRef', r.createRef()),
            b(this, 'state', { isActiveRow: !1 }),
            b(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(p.Z.getMutablePrivateChannels(), (e) => e.type === v.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, m.uL)(v.Z5c.CHANNEL(v.ME, n.id)) : c.Z.openPrivateChannel(t.id);
            }),
            b(this, 'handleOpenActionsMenu', (e) => {
                let { user: t } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, i.jsx)(Z, {
                            ...e,
                            user: t
                        }),
                    {
                        onClose: () => {
                            this.setState({ isActiveRow: !1 });
                        }
                    }
                ),
                    this.setState({ isActiveRow: !0 });
            });
    }
}
t.Z = x;
