n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(668781),
    u = n(493683),
    d = n(239091),
    p = n(100527),
    f = n(522558),
    h = n(762500),
    g = n(703656),
    m = n(592125),
    _ = n(131951),
    b = n(699516),
    E = n(51144),
    O = n(298213),
    y = n(321488),
    v = n(417183),
    I = n(825682),
    C = n(170245),
    S = n(981631),
    T = n(65154),
    N = n(388032),
    j = n(934422);
function P(e, t, n) {
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
function x(e) {
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
        h = i.useCallback(() => {
            O.Z.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: "Friends",
            });
        }, [n, l, t.id]),
        g = i.useCallback(() => {
            let e = l ? N.intl.string(N.t.RLcE6x) : N.intl.string(N.t.cvSt1J);
            c.Z.show({
                title: N.intl.formatToPlainString(N.t.fPLvZd, { name: E.ZP.getName(t) }),
                body: N.intl.formatToPlainString(N.t.l5FFq6, { name: E.ZP.getName(t) }),
                confirmText: e,
                confirmVariant: "critical-primary",
                cancelText: N.intl.string(N.t["ETE/oC"]),
                onConfirm: h,
            });
        }, [h, l, t]),
        m = (0, s.e7)([_.Z], () => _.Z.supports(T.AN.VIDEO)),
        b = t.isProvisional,
        y = l ? N.intl.string(N.t.RLcE6x) : N.intl.string(N.t.cvSt1J);
    return (0, r.jsxs)(o.v2r, {
        navId: "friend-row",
        "aria-label": N.intl.string(N.t.liqwPJ),
        onClose: d.Zy,
        onSelect: a,
        children: [
            !b && m
                ? (0, r.jsx)(o.sNh, {
                      id: "start-video-call",
                      label: N.intl.string(N.t.oCqlGG),
                      action: f,
                  })
                : null,
            !b &&
                (0, r.jsx)(o.sNh, {
                    id: "start-voice-call",
                    label: N.intl.string(N.t.focH1t),
                    action: p,
                }),
            (0, r.jsx)(o.sNh, {
                id: "remove-friend",
                label: y,
                action: g,
                color: "danger",
            }),
        ],
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
        return (0, f.i)(p.Z.FRIENDS_LIST) && null != c
            ? (0, r.jsx)(h.Z, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: u,
                  recipientUser: e,
                  onOtherHover: () => (u ? null : (0, d.Zy)()),
                  onClick: this.handleOpenPrivateChannel,
                  giftIntentType: c,
                  status: l,
                  activities: n,
                  applicationStream: i,
                  isMobile: a,
                  isGameRelationship: s,
              })
            : (0, r.jsx)(v.Z, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: u,
                  user: e,
                  onOtherHover: () => (u ? null : (0, d.Zy)()),
                  onClick: this.handleOpenPrivateChannel,
                  children: (t) =>
                      (0, r.jsxs)("div", {
                          className: j.listItemContents,
                          children: [
                              (0, r.jsx)(C.Z, {
                                  user: e,
                                  status: l,
                                  isMobile: a,
                                  subText: (0, r.jsx)(I.Z, {
                                      hovered: t,
                                      activities: n,
                                      applicationStream: i,
                                      status: l,
                                      user: e,
                                      userIgnored: b.Z.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !s && !e.isProvisional,
                              }),
                              (0, r.jsxs)("div", {
                                  className: j.actions,
                                  children: [
                                      (0, r.jsx)(y.Z, {
                                          icon: o.kBi,
                                          tooltip: N.intl.string(N.t["g33r/P"]),
                                          onClick: this.handleOpenPrivateChannel,
                                          shouldHighlight: t,
                                      }),
                                      (0, r.jsx)(y.Z, {
                                          icon: o.Huf,
                                          tooltip: N.intl.string(N.t["UKOtz+"]),
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
            P(this, "peopleListItemRef", i.createRef()),
            P(this, "state", { isActiveRow: !1 }),
            P(this, "handleOpenPrivateChannel", (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(
                    m.Z.getMutablePrivateChannels(),
                    (e) => e.type === S.d4z.DM && e.getRecipientId() === t.id,
                );
                null != n ? (0, g.uL)(S.Z5c.CHANNEL(S.ME, n.id)) : u.Z.openPrivateChannel({ recipientIds: t.id });
            }),
            P(this, "handleOpenActionsMenu", (e) => {
                let { user: t, isGameRelationship: n, applicationId: i } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, r.jsx)(
                            x,
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
                                                P(e, t, n[t]);
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
let Z = A;
