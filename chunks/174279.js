n.d(t, {
    A: () => L,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(157559),
    u = n(308528),
    d = n(442433),
    p = n(793574),
    h = n(70730),
    g = n(777426),
    f = n(976860),
    m = n(734057),
    A = n(430452),
    _ = n(994500),
    b = n(427262),
    E = n(607272),
    O = n(513297),
    y = n(414711),
    I = n(187696),
    v = n(723690),
    S = n(652215),
    C = n(788868),
    N = n(731854),
    T = n(985018),
    j = n(847295);

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

function P(e) {
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: a } = e,
        p = i.useCallback(() => {
            u.A.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
            });
        }, [t.id]),
        h = i.useCallback(() => {
            u.A.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
                joinCallVideo: !0,
            });
        }, [t.id]),
        g = i.useCallback(() => {
            E.A.removeFriend({
                userId: t.id,
                applicationId: l ? n : null,
                location: "Friends",
            });
        }, [n, l, t.id]),
        f = i.useCallback(() => {
            let e = l ? T.intl.string(T.t.RLcE6x) : T.intl.string(T.t.cvSt1J);
            c.A.show({
                title: T.intl.formatToPlainString(T.t.fPLvZd, {
                    name: b.Ay.getName(t),
                }),
                body: T.intl.formatToPlainString(T.t.l5FFq6, {
                    name: b.Ay.getName(t),
                }),
                confirmText: e,
                confirmVariant: "critical-primary",
                cancelText: T.intl.string(T.t["ETE/oC"]),
                onConfirm: g,
            });
        }, [g, l, t]),
        m = (0, s.bG)([A.A], () => A.A.supports(N.O5.VIDEO)),
        _ = t.isProvisional,
        O = l ? T.intl.string(T.t.RLcE6x) : T.intl.string(T.t.cvSt1J);
    return (0, r.jsxs)(o.W1t, {
        "data-menu-migration-ready": !0,
        navId: "friend-row",
        "aria-label": T.intl.string(T.t.liqwPJ),
        onClose: d.Z_,
        onSelect: a,
        children: [
            !_ && m
                ? (0, r.jsx)(o.Drp, {
                      id: "start-video-call",
                      label: T.intl.string(T.t.oCqlGG),
                      action: h,
                  })
                : null,
            !_ &&
                (0, r.jsx)(o.Drp, {
                    id: "start-voice-call",
                    label: T.intl.string(T.t.focH1t),
                    action: p,
                }),
            (0, r.jsx)(o.Drp, {
                id: "remove-friend",
                label: O,
                action: f,
                color: "danger",
            }),
        ],
    });
}
class w extends i.PureComponent {
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
                hasFriendAnniversarySection: u,
                sectionIndex: f,
            } = this.props,
            { isActiveRow: m } = this.state;
        return (0, h.p)(p.A.FRIENDS_LIST) && c === C.np.FRIEND_ANNIVERSARY && u && 0 === f
            ? (0, r.jsx)(g.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: m,
                  recipientUser: e,
                  onOtherHover: () => (m ? null : (0, d.Z_)()),
                  onClick: this.handleOpenPrivateChannel,
                  giftIntentType: c,
                  status: l,
                  activities: n,
                  applicationStream: i,
                  isMobile: a,
                  isGameRelationship: s,
              })
            : (0, r.jsx)(y.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: m,
                  user: e,
                  onOtherHover: () => (m ? null : (0, d.Z_)()),
                  onClick: this.handleOpenPrivateChannel,
                  children: (t) =>
                      (0, r.jsxs)("div", {
                          className: j.a4,
                          children: [
                              (0, r.jsx)(v.A, {
                                  user: e,
                                  status: l,
                                  isMobile: a,
                                  subText: (0, r.jsx)(I.A, {
                                      hovered: t,
                                      activities: n,
                                      applicationStream: i,
                                      status: l,
                                      user: e,
                                      userIgnored: _.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !s && !e.isProvisional,
                              }),
                              (0, r.jsxs)("div", {
                                  className: j.o1,
                                  children: [
                                      (0, r.jsx)(O.A, {
                                          icon: o.oyn,
                                          tooltip: T.intl.string(T.t["g33r/P"]),
                                          onClick: this.handleOpenPrivateChannel,
                                          shouldHighlight: t,
                                      }),
                                      (0, r.jsx)(O.A, {
                                          icon: o.FHP,
                                          tooltip: T.intl.string(T.t["UKOtz+"]),
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
            x(this, "state", {
                isActiveRow: !1,
            }),
            x(this, "handleOpenPrivateChannel", (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = a().find(
                    m.A.getMutablePrivateChannels(),
                    (e) => e.type === S.rbe.DM && e.getRecipientId() === t.id,
                );
                null != n
                    ? (0, f.pX)(S.BVt.CHANNEL(S.ME, n.id))
                    : u.A.openPrivateChannel({
                          recipientIds: t.id,
                      });
            }),
            x(this, "handleOpenActionsMenu", (e) => {
                let { user: t, isGameRelationship: n, applicationId: i } = this.props;
                (0, d.jA)(
                    e,
                    (e) => {
                        var l, a;
                        return (0, r.jsx)(
                            P,
                            ((l = (function (e) {
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
                            })({}, e)),
                            (a = a =
                                {
                                    user: t,
                                    applicationId: i,
                                    isGameRelationship: n,
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
                            l),
                        );
                    },
                    {
                        onClose: () => {
                            this.setState({
                                isActiveRow: !1,
                            });
                        },
                    },
                ),
                    this.setState({
                        isActiveRow: !0,
                    });
            });
    }
}
let L = w;
