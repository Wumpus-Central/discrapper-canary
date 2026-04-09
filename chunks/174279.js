n.d(t, { A: () => j });
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(308528),
    u = n(442433),
    A = n(793574),
    _ = n(70730),
    h = n(777426),
    m = n(976860),
    g = n(734057),
    p = n(430452),
    E = n(994500),
    I = n(595623),
    f = n(427262),
    C = n(607272),
    T = n(352127),
    N = n(513297),
    S = n(414711),
    x = n(187696),
    v = n(723690),
    b = n(652215),
    y = n(788868),
    O = n(731854),
    L = n(985018),
    R = n(955017);
function P(e) {
    let { user: t, applicationId: n, isGameRelationship: r, onSelect: l } = e,
        A = a.useCallback(() => {
            (0, T.X9)({ targetUserId: t.id, tab: I.Ay.getState().section }),
                c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        _ = a.useCallback(() => {
            (0, T.Cf)({ targetUserId: t.id, tab: I.Ay.getState().section }),
                c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        h = a.useCallback(() => {
            C.A.removeFriend({ userId: t.id, applicationId: r ? n : null, location: "Friends" });
        }, [n, r, t.id]),
        m = a.useCallback(() => {
            let e = r ? L.intl.string(L.t.RLcE6x) : L.intl.string(L.t.cvSt1J);
            (0, T.lP)({ targetUserId: t.id, tab: I.Ay.getState().section }),
                d.A.show({
                    title: L.intl.formatToPlainString(L.t.fPLvZd, { name: f.Ay.getName(t) }),
                    body: L.intl.formatToPlainString(L.t.l5FFq6, { name: f.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: L.intl.string(L.t["ETE/oC"]),
                    onConfirm: h,
                });
        }, [h, r, t]),
        g = (0, s.bG)([p.Ay], () => p.Ay.supports(O.O5.VIDEO)),
        E = t.isProvisional,
        N = r ? L.intl.string(L.t.RLcE6x) : L.intl.string(L.t.cvSt1J);
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": L.intl.string(L.t.liqwPJ),
        onClose: u.Z_,
        onSelect: l,
        children: [
            !E && g ? (0, i.jsx)(o.Drp, { id: "start-video-call", label: L.intl.string(L.t.oCqlGG), action: _ }) : null,
            !E && (0, i.jsx)(o.Drp, { id: "start-voice-call", label: L.intl.string(L.t.focH1t), action: A }),
            (0, i.jsx)(o.Drp, { id: "remove-friend", label: N, action: m, color: "danger" }),
        ],
    });
}
class D extends a.PureComponent {
    peopleListItemRef = a.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = l().find(g.A.getMutablePrivateChannels(), (t) => t.type === b.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, m.pX)(b.BVt.CHANNEL(b.ME, t.id)) : c.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, T.xF)({ targetUserId: this.props.user.id, tab: I.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, T.WD)({ targetUserId: this.props.user.id, tab: I.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: a } = this.props;
        (0, u.jA)(e, (e) => (0, i.jsx)(P, { ...e, user: t, applicationId: a, isGameRelationship: n }), {
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
                applicationStream: r,
                status: l,
                isMobile: s,
                isVR: d,
                isGameRelationship: c,
                giftIntentType: m,
                hasFriendAnniversarySection: g,
                sectionIndex: p,
            } = this.props,
            { isActiveRow: I } = this.state;
        return (0, _.p)(A.A.FRIENDS_LIST) && m === y.np.FRIEND_ANNIVERSARY && g && 0 === p
            ? (0, i.jsx)(h.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: I,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (I ? null : (0, u.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: m,
                  status: l,
                  activities: a,
                  applicationStream: r,
                  isMobile: s,
                  isVR: d,
                  isGameRelationship: c,
              })
            : (0, i.jsx)(S.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: I,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (I ? null : (0, u.Z_)()),
                  onClick: this.handleRowClick,
                  children: (t) =>
                      (0, i.jsxs)("div", {
                          className: R.a4,
                          children: [
                              (0, i.jsx)(v.A, {
                                  user: e,
                                  status: l,
                                  isMobile: s,
                                  isVR: d,
                                  subText: (0, i.jsx)(x.A, {
                                      hovered: t,
                                      activities: a,
                                      applicationStream: r,
                                      status: l,
                                      user: e,
                                      userIgnored: E.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !c && !e.isProvisional,
                              }),
                              (0, i.jsxs)("div", {
                                  className: R.o1,
                                  children: [
                                      (0, i.jsx)(N.A, {
                                          icon: o.oyn,
                                          tooltip: L.intl.string(L.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, i.jsx)(N.A, {
                                          icon: o.FHP,
                                          tooltip: L.intl.string(L.t["UKOtz+"]),
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
let j = D;
