n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(443589),
    h = n(703656),
    m = n(592125),
    p = n(131951),
    g = n(699516),
    f = n(51144),
    _ = n(298213),
    E = n(321488),
    I = n(417183),
    C = n(825682),
    N = n(170245),
    v = n(981631),
    S = n(65154),
    T = n(388032),
    b = n(401207);
function A(e, t, n) {
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
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: a } = e,
        u = r.useCallback(() => {
            c.Z.openPrivateChannel(t.id, !0);
        }, [t.id]),
        h = r.useCallback(() => {
            c.Z.openPrivateChannel(t.id, !0, !0);
        }, [t.id]),
        m = r.useCallback(() => {
            _.Z.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: 'Friends'
            });
        }, [n, l, t.id]),
        g = r.useCallback(() => {
            let e = l ? T.intl.string(T.t['RLcE6+']) : T.intl.string(T.t.cvSt1N);
            (0, o.openModal)((n) =>
                (0, i.jsx)(o.ConfirmModal, {
                    header: T.intl.formatToPlainString(T.t.fPLvZW, { name: f.ZP.getName(t) }),
                    confirmText: e,
                    cancelText: T.intl.string(T.t['ETE/oK']),
                    onConfirm: m,
                    ...n,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.format(T.t.l5FFq6, { name: f.ZP.getName(t) })
                    })
                })
            );
        }, [m, l, t]),
        E = (0, s.e7)([p.Z], () => p.Z.supports(S.AN.VIDEO)),
        I = t.isProvisional,
        C = l ? T.intl.string(T.t['RLcE6+']) : T.intl.string(T.t.cvSt1N);
    return (0, i.jsxs)(o.Menu, {
        navId: 'friend-row',
        'aria-label': T.intl.string(T.t.liqwPD),
        onClose: d.Zy,
        onSelect: a,
        children: [
            !I && E
                ? (0, i.jsx)(o.MenuItem, {
                      id: 'start-video-call',
                      label: T.intl.string(T.t.oCqlGB),
                      action: h
                  })
                : null,
            !I &&
                (0, i.jsx)(o.MenuItem, {
                    id: 'start-voice-call',
                    label: T.intl.string(T.t.focH1t),
                    action: u
                }),
            (0, i.jsx)(o.MenuItem, {
                id: 'remove-friend',
                label: C,
                action: g,
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
        let { user: e, isFocused: t, activities: n, applicationStream: r, status: l, isMobile: a, isGameRelationship: s, giftIntentType: c } = this.props,
            { isActiveRow: h } = this.state;
        return (0, i.jsx)(I.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: h,
            user: e,
            onOtherHover: () => (h ? null : (0, d.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, i.jsxs)('div', {
                    className: b.listItemContents,
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
                                userIgnored: g.Z.isIgnored(e.id)
                            }),
                            hovered: t,
                            showAccountIdentifier: !s
                        }),
                        (0, i.jsxs)('div', {
                            className: b.actions,
                            children: [
                                null != c &&
                                    (0, i.jsx)(u.Z, {
                                        recipientUser: e,
                                        giftIntentType: c,
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
            A(this, 'peopleListItemRef', r.createRef()),
            A(this, 'state', { isActiveRow: !1 }),
            A(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(m.Z.getMutablePrivateChannels(), (e) => e.type === v.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, h.uL)(v.Z5c.CHANNEL(v.ME, n.id)) : c.Z.openPrivateChannel(t.id);
            }),
            A(this, 'handleOpenActionsMenu', (e) => {
                let { user: t, isGameRelationship: n, applicationId: r } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, i.jsx)(Z, {
                            ...e,
                            user: t,
                            applicationId: r,
                            isGameRelationship: n
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
