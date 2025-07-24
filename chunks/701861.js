(n.d(t, { Z: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(668781),
    u = n(493683),
    d = n(239091),
    p = n(443589),
    h = n(703656),
    f = n(592125),
    g = n(131951),
    m = n(699516),
    b = n(51144),
    _ = n(298213),
    O = n(321488),
    E = n(417183),
    y = n(825682),
    v = n(170245),
    I = n(981631),
    C = n(65154),
    S = n(388032),
    N = n(887563);
function T(e, t, n) {
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
function P(e) {
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: a } = e,
        p = i.useCallback(() => {
            u.Z.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0
            });
        }, [t.id]),
        h = i.useCallback(() => {
            u.Z.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
                joinCallVideo: !0
            });
        }, [t.id]),
        f = i.useCallback(() => {
            _.Z.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: 'Friends'
            });
        }, [n, l, t.id]),
        m = i.useCallback(() => {
            let e = l ? S.intl.string(S.t['RLcE6+']) : S.intl.string(S.t.cvSt1N);
            c.Z.show({
                title: S.intl.formatToPlainString(S.t.fPLvZW, { name: b.ZP.getName(t) }),
                body: S.intl.formatToPlainString(S.t.l5FFq6, { name: b.ZP.getName(t) }),
                confirmText: e,
                confirmVariant: 'critical-primary',
                cancelText: S.intl.string(S.t['ETE/oK']),
                onConfirm: f
            });
        }, [f, l, t]),
        O = (0, o.e7)([g.Z], () => g.Z.supports(C.AN.VIDEO)),
        E = t.isProvisional,
        y = l ? S.intl.string(S.t['RLcE6+']) : S.intl.string(S.t.cvSt1N);
    return (0, r.jsxs)(s.v2r, {
        navId: 'friend-row',
        'aria-label': S.intl.string(S.t.liqwPD),
        onClose: d.Zy,
        onSelect: a,
        children: [
            !E && O
                ? (0, r.jsx)(s.sNh, {
                      id: 'start-video-call',
                      label: S.intl.string(S.t.oCqlGB),
                      action: h
                  })
                : null,
            !E &&
                (0, r.jsx)(s.sNh, {
                    id: 'start-voice-call',
                    label: S.intl.string(S.t.focH1t),
                    action: p
                }),
            (0, r.jsx)(s.sNh, {
                id: 'remove-friend',
                label: y,
                action: m,
                color: 'danger'
            })
        ]
    });
}
class j extends i.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let { user: e, isFocused: t, activities: n, applicationStream: i, status: l, isMobile: a, isGameRelationship: o, giftIntentType: c } = this.props,
            { isActiveRow: u } = this.state;
        return (0, r.jsx)(E.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: u,
            user: e,
            onOtherHover: () => (u ? null : (0, d.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, r.jsxs)('div', {
                    className: N.listItemContents,
                    children: [
                        (0, r.jsx)(v.Z, {
                            user: e,
                            status: l,
                            isMobile: a,
                            subText: (0, r.jsx)(y.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: i,
                                status: l,
                                user: e,
                                userIgnored: m.Z.isIgnored(e.id)
                            }),
                            hovered: t,
                            showAccountIdentifier: !o && !e.isProvisional
                        }),
                        (0, r.jsxs)('div', {
                            className: N.actions,
                            children: [
                                null != c &&
                                    (0, r.jsx)(p.Z, {
                                        recipientUser: e,
                                        giftIntentType: c,
                                        analyticsPage: I.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t
                                    }),
                                (0, r.jsx)(O.Z, {
                                    icon: s.kBi,
                                    tooltip: S.intl.string(S.t['g33r/P']),
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }),
                                (0, r.jsx)(O.Z, {
                                    icon: s.Huf,
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
        (super(...e),
            T(this, 'peopleListItemRef', i.createRef()),
            T(this, 'state', { isActiveRow: !1 }),
            T(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(f.Z.getMutablePrivateChannels(), (e) => e.type === I.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, h.uL)(I.Z5c.CHANNEL(I.ME, n.id)) : u.Z.openPrivateChannel({ recipientIds: t.id });
            }),
            T(this, 'handleOpenActionsMenu', (e) => {
                let { user: t, isGameRelationship: n, applicationId: i } = this.props;
                ((0, d.vq)(
                    e,
                    (e) => {
                        var l, a;
                        return (0, r.jsx)(
                            P,
                            ((l = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            T(e, t, n[t]);
                                        }));
                                }
                                return e;
                            })({}, e)),
                            (a = a =
                                {
                                    user: t,
                                    applicationId: i,
                                    isGameRelationship: n
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            l)
                        );
                    },
                    {
                        onClose: () => {
                            this.setState({ isActiveRow: !1 });
                        }
                    }
                ),
                    this.setState({ isActiveRow: !0 }));
            }));
    }
}
let x = j;
