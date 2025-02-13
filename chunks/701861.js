n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(443589),
    h = n(703656),
    m = n(592125),
    p = n(131951),
    g = n(699516),
    _ = n(51144),
    f = n(298213),
    E = n(321488),
    I = n(417183),
    C = n(825682),
    N = n(170245),
    v = n(981631),
    T = n(65154),
    S = n(388032),
    A = n(88079);
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
    let { user: t, applicationId: n, isGameRelationship: r, onSelect: a } = e,
        u = l.useCallback(() => {
            c.Z.openPrivateChannel(t.id, !0);
        }, [t.id]),
        h = l.useCallback(() => {
            c.Z.openPrivateChannel(t.id, !0, !0);
        }, [t.id]),
        m = l.useCallback(() => {
            f.Z.removeFriend({
                userId: t.id,
                applicationId: r ? n : null,
                location: 'Friends'
            });
        }, [n, r, t.id]),
        g = l.useCallback(() => {
            let e = r ? S.intl.string(S.t['RLcE6+']) : S.intl.string(S.t.cvSt1N);
            (0, o.h7j)((n) =>
                (0, i.jsx)(o.ConfirmModal, {
                    header: S.intl.formatToPlainString(S.t.fPLvZW, { name: _.ZP.getName(t) }),
                    confirmText: e,
                    cancelText: S.intl.string(S.t['ETE/oK']),
                    onConfirm: m,
                    ...n,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: S.intl.format(S.t.l5FFq6, { name: _.ZP.getName(t) })
                    })
                })
            );
        }, [m, r, t]),
        E = (0, s.e7)([p.Z], () => p.Z.supports(T.AN.VIDEO)),
        I = t.isProvisional,
        C = r ? S.intl.string(S.t['RLcE6+']) : S.intl.string(S.t.cvSt1N);
    return (0, i.jsxs)(o.v2r, {
        navId: 'friend-row',
        'aria-label': S.intl.string(S.t.liqwPD),
        onClose: d.Zy,
        onSelect: a,
        children: [
            !I && E
                ? (0, i.jsx)(o.sNh, {
                      id: 'start-video-call',
                      label: S.intl.string(S.t.oCqlGB),
                      action: h
                  })
                : null,
            !I &&
                (0, i.jsx)(o.sNh, {
                    id: 'start-voice-call',
                    label: S.intl.string(S.t.focH1t),
                    action: u
                }),
            (0, i.jsx)(o.sNh, {
                id: 'remove-friend',
                label: C,
                action: g,
                color: 'danger'
            })
        ]
    });
}
class x extends l.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let { user: e, isFocused: t, activities: n, applicationStream: l, status: r, isMobile: a, isGameRelationship: s, giftIntentType: c } = this.props,
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
                    className: A.listItemContents,
                    children: [
                        (0, i.jsx)(N.Z, {
                            user: e,
                            status: r,
                            isMobile: a,
                            subText: (0, i.jsx)(C.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: l,
                                status: r,
                                user: e,
                                userIgnored: g.Z.isIgnored(e.id)
                            }),
                            hovered: t,
                            showAccountIdentifier: !s
                        }),
                        (0, i.jsxs)('div', {
                            className: A.actions,
                            children: [
                                null != c &&
                                    (0, i.jsx)(u.Z, {
                                        recipientUser: e,
                                        giftIntentType: c,
                                        analyticsPage: v.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t
                                    }),
                                (0, i.jsx)(E.Z, {
                                    icon: o.kBi,
                                    tooltip: S.intl.string(S.t['g33r/P']),
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }),
                                (0, i.jsx)(E.Z, {
                                    icon: o.Huf,
                                    tooltip: S.intl.string(S.t.UKOtz8),
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
            b(this, 'peopleListItemRef', l.createRef()),
            b(this, 'state', { isActiveRow: !1 }),
            b(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(m.Z.getMutablePrivateChannels(), (e) => e.type === v.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, h.uL)(v.Z5c.CHANNEL(v.ME, n.id)) : c.Z.openPrivateChannel(t.id);
            }),
            b(this, 'handleOpenActionsMenu', (e) => {
                let { user: t, isGameRelationship: n, applicationId: l } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, i.jsx)(Z, {
                            ...e,
                            user: t,
                            applicationId: l,
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
let L = x;
