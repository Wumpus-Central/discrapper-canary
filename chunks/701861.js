n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(668781),
    u = n(493683),
    d = n(239091),
    p = n(100527),
    f = n(522558),
    g = n(762500),
    h = n(703656),
    m = n(592125),
    b = n(131951),
    _ = n(699516),
    E = n(51144),
    O = n(298213),
    v = n(321488),
    y = n(417183),
    I = n(825682),
    C = n(170245),
    S = n(981631),
    T = n(474936),
    N = n(65154),
    j = n(388032),
    P = n(756853);
function x(e, t, n) {
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
function A(e) {
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
        g = i.useCallback(() => {
            O.Z.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: "Friends",
            });
        }, [n, l, t.id]),
        h = i.useCallback(() => {
            let e = l ? j.intl.string(j.t.RLcE6x) : j.intl.string(j.t.cvSt1J);
            c.Z.show({
                title: j.intl.formatToPlainString(j.t.fPLvZd, { name: E.ZP.getName(t) }),
                body: j.intl.formatToPlainString(j.t.l5FFq6, { name: E.ZP.getName(t) }),
                confirmText: e,
                confirmVariant: "critical-primary",
                cancelText: j.intl.string(j.t["ETE/oC"]),
                onConfirm: g,
            });
        }, [g, l, t]),
        m = (0, o.e7)([b.Z], () => b.Z.supports(N.AN.VIDEO)),
        _ = t.isProvisional,
        v = l ? j.intl.string(j.t.RLcE6x) : j.intl.string(j.t.cvSt1J);
    return (0, r.jsxs)(s.v2r, {
        navId: "friend-row",
        "aria-label": j.intl.string(j.t.liqwPJ),
        onClose: d.Zy,
        onSelect: a,
        children: [
            !_ && m
                ? (0, r.jsx)(s.sNh, {
                      id: "start-video-call",
                      label: j.intl.string(j.t.oCqlGG),
                      action: f,
                  })
                : null,
            !_ &&
                (0, r.jsx)(s.sNh, {
                    id: "start-voice-call",
                    label: j.intl.string(j.t.focH1t),
                    action: p,
                }),
            (0, r.jsx)(s.sNh, {
                id: "remove-friend",
                label: v,
                action: h,
                color: "danger",
            }),
        ],
    });
}
class Z extends i.PureComponent {
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
                isGameRelationship: o,
                giftIntentType: c,
                hasFriendAnniversarySection: u,
                sectionIndex: h,
            } = this.props,
            { isActiveRow: m } = this.state;
        return (0, f.i)(p.Z.FRIENDS_LIST) && c === T.hX.FRIEND_ANNIVERSARY && u && 0 === h
            ? (0, r.jsx)(g.Z, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: m,
                  recipientUser: e,
                  onOtherHover: () => (m ? null : (0, d.Zy)()),
                  onClick: this.handleOpenPrivateChannel,
                  giftIntentType: c,
                  status: l,
                  activities: n,
                  applicationStream: i,
                  isMobile: a,
                  isGameRelationship: o,
              })
            : (0, r.jsx)(y.Z, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: m,
                  user: e,
                  onOtherHover: () => (m ? null : (0, d.Zy)()),
                  onClick: this.handleOpenPrivateChannel,
                  children: (t) =>
                      (0, r.jsxs)("div", {
                          className: P.listItemContents,
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
                                      userIgnored: _.Z.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !o && !e.isProvisional,
                              }),
                              (0, r.jsxs)("div", {
                                  className: P.actions,
                                  children: [
                                      (0, r.jsx)(v.Z, {
                                          icon: s.kBi,
                                          tooltip: j.intl.string(j.t["g33r/P"]),
                                          onClick: this.handleOpenPrivateChannel,
                                          shouldHighlight: t,
                                      }),
                                      (0, r.jsx)(v.Z, {
                                          icon: s.Huf,
                                          tooltip: j.intl.string(j.t["UKOtz+"]),
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
            x(this, "peopleListItemRef", i.createRef()),
            x(this, "state", { isActiveRow: !1 }),
            x(this, "handleOpenPrivateChannel", (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(
                    m.Z.getMutablePrivateChannels(),
                    (e) => e.type === S.d4z.DM && e.getRecipientId() === t.id,
                );
                null != n ? (0, h.uL)(S.Z5c.CHANNEL(S.ME, n.id)) : u.Z.openPrivateChannel({ recipientIds: t.id });
            }),
            x(this, "handleOpenActionsMenu", (e) => {
                let { user: t, isGameRelationship: n, applicationId: i } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, r.jsx)(
                            A,
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
                                                x(e, t, n[t]);
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
let w = Z;
