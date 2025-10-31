n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(668781),
    u = n(493683),
    d = n(239091),
    p = n(443589),
    f = n(703656),
    m = n(592125),
    h = n(131951),
    g = n(699516),
    _ = n(51144),
    b = n(298213),
    E = n(321488),
    O = n(417183),
    I = n(825682),
    y = n(170245),
    v = n(981631),
    C = n(65154),
    S = n(388032),
    T = n(934422);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: a } = e,
        p = i.useCallback(() => {
            u.Z.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
            });
        }, [t.id]),
        f = i.useCallback(() => {
            u.Z.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
                joinCallVideo: !0,
            });
        }, [t.id]),
        m = i.useCallback(() => {
            b.Z.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: "Friends",
            });
        }, [n, l, t.id]),
        g = i.useCallback(() => {
            let e = l ? S.intl.string(S.t.RLcE6x) : S.intl.string(S.t.cvSt1J);
            c.Z.show({
                title: S.intl.formatToPlainString(S.t.fPLvZd, { name: _.ZP.getName(t) }),
                body: S.intl.formatToPlainString(S.t.l5FFq6, { name: _.ZP.getName(t) }),
                confirmText: e,
                confirmVariant: "critical-primary",
                cancelText: S.intl.string(S.t["ETE/oC"]),
                onConfirm: m,
            });
        }, [m, l, t]),
        E = (0, s.e7)([h.Z], () => h.Z.supports(C.AN.VIDEO)),
        O = t.isProvisional,
        I = l ? S.intl.string(S.t.RLcE6x) : S.intl.string(S.t.cvSt1J);
    return (0, r.jsxs)(o.v2r, {
        navId: "friend-row",
        "aria-label": S.intl.string(S.t.liqwPJ),
        onClose: d.Zy,
        onSelect: a,
        children: [
            !O && E
                ? (0, r.jsx)(o.sNh, {
                      id: "start-video-call",
                      label: S.intl.string(S.t.oCqlGG),
                      action: f,
                  })
                : null,
            !O &&
                (0, r.jsx)(o.sNh, {
                    id: "start-voice-call",
                    label: S.intl.string(S.t.focH1t),
                    action: p,
                }),
            (0, r.jsx)(o.sNh, {
                id: "remove-friend",
                label: I,
                action: g,
                color: "danger",
            }),
        ],
    });
}
class P extends i.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let {
                user: e,
                isFocused: t,
                activities: n,
                applicationStream: i,
                status: l,
                isMobile: a,
                isGameRelationship: s,
                giftIntentType: c,
            } = this.props,
            { isActiveRow: u } = this.state;
        return (0, r.jsx)(O.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: u,
            user: e,
            onOtherHover: () => (u ? null : (0, d.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, r.jsxs)("div", {
                    className: T.listItemContents,
                    children: [
                        (0, r.jsx)(y.Z, {
                            user: e,
                            status: l,
                            isMobile: a,
                            subText: (0, r.jsx)(I.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: i,
                                status: l,
                                user: e,
                                userIgnored: g.Z.isIgnored(e.id),
                            }),
                            hovered: t,
                            showAccountIdentifier: !s && !e.isProvisional,
                        }),
                        (0, r.jsxs)("div", {
                            className: T.actions,
                            children: [
                                null != c &&
                                    (0, r.jsx)(p.Z, {
                                        recipientUser: e,
                                        giftIntentType: c,
                                        analyticsPage: v.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t,
                                    }),
                                (0, r.jsx)(E.Z, {
                                    icon: o.kBi,
                                    tooltip: S.intl.string(S.t["g33r/P"]),
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t,
                                }),
                                (0, r.jsx)(E.Z, {
                                    icon: o.Huf,
                                    tooltip: S.intl.string(S.t["UKOtz+"]),
                                    onClick: this.handleOpenActionsMenu,
                                    shouldHighlight: t,
                                }),
                            ],
                        }),
                    ],
                }),
        });
    }
    constructor(...e) {
        super(...e),
            N(this, "peopleListItemRef", i.createRef()),
            N(this, "state", { isActiveRow: !1 }),
            N(this, "handleOpenPrivateChannel", (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(
                    m.Z.getMutablePrivateChannels(),
                    (e) => e.type === v.d4z.DM && e.getRecipientId() === t.id,
                );
                null != n ? (0, f.uL)(v.Z5c.CHANNEL(v.ME, n.id)) : u.Z.openPrivateChannel({ recipientIds: t.id });
            }),
            N(this, "handleOpenActionsMenu", (e) => {
                let { user: t, isGameRelationship: n, applicationId: i } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, r.jsx)(
                            j,
                            (function (e, t) {
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
                            })(
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                N(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, e),
                                {
                                    user: t,
                                    applicationId: i,
                                    isGameRelationship: n,
                                },
                            ),
                        ),
                    {
                        onClose: () => {
                            this.setState({ isActiveRow: !1 });
                        },
                    },
                ),
                    this.setState({ isActiveRow: !0 });
            });
    }
}
let x = P;
