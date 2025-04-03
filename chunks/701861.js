n.d(t, { Z: () => Z }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(443589),
    p = n(703656),
    h = n(592125),
    f = n(131951),
    g = n(699516),
    m = n(51144),
    b = n(298213),
    _ = n(321488),
    E = n(417183),
    O = n(825682),
    N = n(170245),
    y = n(981631),
    I = n(65154),
    v = n(388032),
    C = n(887563);
function S(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: a } = e,
        d = i.useCallback(() => {
            c.Z.openPrivateChannel(t.id, !0);
        }, [t.id]),
        p = i.useCallback(() => {
            c.Z.openPrivateChannel(t.id, !0, !0);
        }, [t.id]),
        h = i.useCallback(() => {
            b.Z.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: 'Friends'
            });
        }, [n, l, t.id]),
        g = i.useCallback(() => {
            let e = l ? v.NW.string(v.t['RLcE6+']) : v.NW.string(v.t.cvSt1N);
            (0, s.h7j)((n) =>
                (0, r.jsx)(
                    s.ConfirmModal,
                    P(
                        T(
                            {
                                header: v.NW.formatToPlainString(v.t.fPLvZW, { name: m.ZP.getName(t) }),
                                confirmText: e,
                                cancelText: v.NW.string(v.t['ETE/oK']),
                                onConfirm: h
                            },
                            n
                        ),
                        {
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: v.NW.format(v.t.l5FFq6, { name: m.ZP.getName(t) })
                            })
                        }
                    )
                )
            );
        }, [h, l, t]),
        _ = (0, o.e7)([f.Z], () => f.Z.supports(I.AN.VIDEO)),
        E = t.isProvisional,
        O = l ? v.NW.string(v.t['RLcE6+']) : v.NW.string(v.t.cvSt1N);
    return (0, r.jsxs)(s.v2r, {
        navId: 'friend-row',
        'aria-label': v.NW.string(v.t.liqwPD),
        onClose: u.Zy,
        onSelect: a,
        children: [
            !E && _
                ? (0, r.jsx)(s.sNh, {
                      id: 'start-video-call',
                      label: v.NW.string(v.t.oCqlGB),
                      action: p
                  })
                : null,
            !E &&
                (0, r.jsx)(s.sNh, {
                    id: 'start-voice-call',
                    label: v.NW.string(v.t.focH1t),
                    action: d
                }),
            (0, r.jsx)(s.sNh, {
                id: 'remove-friend',
                label: O,
                action: g,
                color: 'danger'
            })
        ]
    });
}
class A extends i.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let { user: e, isFocused: t, activities: n, applicationStream: i, status: l, isMobile: a, isGameRelationship: o, giftIntentType: c } = this.props,
            { isActiveRow: p } = this.state;
        return (0, r.jsx)(E.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: p,
            user: e,
            onOtherHover: () => (p ? null : (0, u.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, r.jsxs)('div', {
                    className: C.listItemContents,
                    children: [
                        (0, r.jsx)(N.Z, {
                            user: e,
                            status: l,
                            isMobile: a,
                            subText: (0, r.jsx)(O.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: i,
                                status: l,
                                user: e,
                                userIgnored: g.Z.isIgnored(e.id)
                            }),
                            hovered: t,
                            showAccountIdentifier: !o && !e.isProvisional
                        }),
                        (0, r.jsxs)('div', {
                            className: C.actions,
                            children: [
                                null != c &&
                                    (0, r.jsx)(d.Z, {
                                        recipientUser: e,
                                        giftIntentType: c,
                                        analyticsPage: y.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t
                                    }),
                                (0, r.jsx)(_.Z, {
                                    icon: s.kBi,
                                    tooltip: v.NW.string(v.t['g33r/P']),
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }),
                                (0, r.jsx)(_.Z, {
                                    icon: s.Huf,
                                    tooltip: v.NW.string(v.t.UKOtz8),
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
            S(this, 'peopleListItemRef', i.createRef()),
            S(this, 'state', { isActiveRow: !1 }),
            S(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(h.Z.getMutablePrivateChannels(), (e) => e.type === y.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, p.uL)(y.Z5c.CHANNEL(y.ME, n.id)) : c.Z.openPrivateChannel(t.id);
            }),
            S(this, 'handleOpenActionsMenu', (e) => {
                let { user: t, isGameRelationship: n, applicationId: i } = this.props;
                (0, u.vq)(
                    e,
                    (e) =>
                        (0, r.jsx)(
                            j,
                            P(T({}, e), {
                                user: t,
                                applicationId: i,
                                isGameRelationship: n
                            })
                        ),
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
let Z = A;
