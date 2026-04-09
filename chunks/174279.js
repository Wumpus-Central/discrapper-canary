n.d(t, { A: () => P });
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(308528),
    u = n(442433),
    A = n(793574),
    h = n(70730),
    _ = n(777426),
    m = n(976860),
    g = n(734057),
    p = n(430452),
    E = n(994500),
    I = n(427262),
    f = n(607272),
    C = n(513297),
    T = n(414711),
    N = n(187696),
    S = n(723690),
    x = n(652215),
    v = n(788868),
    b = n(731854),
    y = n(985018),
    O = n(955017);
function L(e) {
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: r } = e,
        A = a.useCallback(() => {
            c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        h = a.useCallback(() => {
            c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        _ = a.useCallback(() => {
            f.A.removeFriend({ userId: t.id, applicationId: l ? n : null, location: "Friends" });
        }, [n, l, t.id]),
        m = a.useCallback(() => {
            let e = l ? y.intl.string(y.t.RLcE6x) : y.intl.string(y.t.cvSt1J);
            d.A.show({
                title: y.intl.formatToPlainString(y.t.fPLvZd, { name: I.Ay.getName(t) }),
                body: y.intl.formatToPlainString(y.t.l5FFq6, { name: I.Ay.getName(t) }),
                confirmText: e,
                confirmVariant: "critical-primary",
                cancelText: y.intl.string(y.t["ETE/oC"]),
                onConfirm: _,
            });
        }, [_, l, t]),
        g = (0, s.bG)([p.Ay], () => p.Ay.supports(b.O5.VIDEO)),
        E = t.isProvisional,
        C = l ? y.intl.string(y.t.RLcE6x) : y.intl.string(y.t.cvSt1J);
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": y.intl.string(y.t.liqwPJ),
        onClose: u.Z_,
        onSelect: r,
        children: [
            !E && g ? (0, i.jsx)(o.Drp, { id: "start-video-call", label: y.intl.string(y.t.oCqlGG), action: h }) : null,
            !E && (0, i.jsx)(o.Drp, { id: "start-voice-call", label: y.intl.string(y.t.focH1t), action: A }),
            (0, i.jsx)(o.Drp, { id: "remove-friend", label: C, action: m, color: "danger" }),
        ],
    });
}
class R extends a.PureComponent {
    peopleListItemRef = a.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    handleOpenPrivateChannel = (e) => {
        let { user: t } = this.props;
        e.stopPropagation();
        let n = r().find(g.A.getMutablePrivateChannels(), (e) => e.type === x.rbe.DM && e.getRecipientId() === t.id);
        null != n ? (0, m.pX)(x.BVt.CHANNEL(x.ME, n.id)) : c.A.openPrivateChannel({ recipientIds: t.id });
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: a } = this.props;
        (0, u.jA)(e, (e) => (0, i.jsx)(L, { ...e, user: t, applicationId: a, isGameRelationship: n }), {
            onClose: () => {
                this.setState({ isActiveRow: !1 });
            },
        }),
            this.setState({ isActiveRow: !0 });
    };
    render() {
        let {
                user: e,
                isFocused: t,
                analyticsLocations: n,
                activities: a,
                applicationStream: l,
                status: r,
                isMobile: s,
                isVR: d,
                isGameRelationship: c,
                giftIntentType: m,
                hasFriendAnniversarySection: g,
                sectionIndex: p,
            } = this.props,
            { isActiveRow: I } = this.state;
        return (0, h.p)(A.A.FRIENDS_LIST) && m === v.np.FRIEND_ANNIVERSARY && g && 0 === p
            ? (0, i.jsx)(_.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: I,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (I ? null : (0, u.Z_)()),
                  onClick: this.handleOpenPrivateChannel,
                  giftIntentType: m,
                  status: r,
                  activities: a,
                  applicationStream: l,
                  isMobile: s,
                  isVR: d,
                  isGameRelationship: c,
              })
            : (0, i.jsx)(T.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: I,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (I ? null : (0, u.Z_)()),
                  onClick: this.handleOpenPrivateChannel,
                  children: (t) =>
                      (0, i.jsxs)("div", {
                          className: O.a4,
                          children: [
                              (0, i.jsx)(S.A, {
                                  user: e,
                                  status: r,
                                  isMobile: s,
                                  isVR: d,
                                  subText: (0, i.jsx)(N.A, {
                                      hovered: t,
                                      activities: a,
                                      applicationStream: l,
                                      status: r,
                                      user: e,
                                      userIgnored: E.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !c && !e.isProvisional,
                              }),
                              (0, i.jsxs)("div", {
                                  className: O.o1,
                                  children: [
                                      (0, i.jsx)(C.A, {
                                          icon: o.oyn,
                                          tooltip: y.intl.string(y.t["g33r/P"]),
                                          onClick: this.handleOpenPrivateChannel,
                                          shouldHighlight: t,
                                      }),
                                      (0, i.jsx)(C.A, {
                                          icon: o.FHP,
                                          tooltip: y.intl.string(y.t["UKOtz+"]),
                                          onClick: this.handleOpenActionsMenu,
                                          shouldHighlight: t,
                                      }),
                                  ],
                              }),
                          ],
                      }),
              });
    }
}
let P = R;
