n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    r = n(735438),
    a = n.n(r),
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
    I = n(595623),
    f = n(427262),
    C = n(22212),
    T = n(607272),
    S = n(513297),
    N = n(414711),
    x = n(187696),
    v = n(723690),
    b = n(652215),
    y = n(788868),
    O = n(731854),
    L = n(985018),
    R = n(664184);
function P(e) {
    let { user: t, applicationId: n, isGameRelationship: r, onSelect: a } = e,
        A = l.useCallback(() => {
            (0, C.X9)({ targetUserId: t.id, tab: I.Ay.getState().section }),
                c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        h = l.useCallback(() => {
            (0, C.Cf)({ targetUserId: t.id, tab: I.Ay.getState().section }),
                c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        _ = l.useCallback(() => {
            T.A.removeFriend({ userId: t.id, applicationId: r ? n : null, location: "Friends" });
        }, [n, r, t.id]),
        m = l.useCallback(() => {
            let e = r ? L.intl.string(L.t.RLcE6x) : L.intl.string(L.t.cvSt1J);
            (0, C.lP)({ targetUserId: t.id, tab: I.Ay.getState().section }),
                d.A.show({
                    title: L.intl.formatToPlainString(L.t.fPLvZd, { name: f.Ay.getName(t) }),
                    body: L.intl.formatToPlainString(L.t.l5FFq6, { name: f.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: L.intl.string(L.t["ETE/oC"]),
                    onConfirm: _,
                });
        }, [_, r, t]),
        g = (0, s.bG)([p.Ay], () => p.Ay.supports(O.O5.VIDEO)),
        E = t.isProvisional,
        S = r ? L.intl.string(L.t.RLcE6x) : L.intl.string(L.t.cvSt1J);
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": L.intl.string(L.t.liqwPJ),
        onClose: u.Z_,
        onSelect: a,
        children: [
            !E && g ? (0, i.jsx)(o.Drp, { id: "start-video-call", label: L.intl.string(L.t.oCqlGG), action: h }) : null,
            !E && (0, i.jsx)(o.Drp, { id: "start-voice-call", label: L.intl.string(L.t.focH1t), action: A }),
            (0, i.jsx)(o.Drp, { id: "remove-friend", label: S, action: m, color: "danger" }),
        ],
    });
}
class D extends l.PureComponent {
    peopleListItemRef = l.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = a().find(g.A.getMutablePrivateChannels(), (t) => t.type === b.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, m.pX)(b.BVt.CHANNEL(b.ME, t.id)) : c.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, C.xF)({ targetUserId: this.props.user.id, tab: I.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, C.WD)({ targetUserId: this.props.user.id, tab: I.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: l } = this.props;
        (0, u.jA)(e, (e) => (0, i.jsx)(P, { ...e, user: t, applicationId: l, isGameRelationship: n }), {
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
                activities: l,
                applicationStream: r,
                status: a,
                isMobile: s,
                isVR: d,
                isGameRelationship: c,
                giftIntentType: m,
                hasFriendAnniversarySection: g,
                sectionIndex: p,
            } = this.props,
            { isActiveRow: I } = this.state;
        return (0, h.p)(A.A.FRIENDS_LIST) && m === y.np.FRIEND_ANNIVERSARY && g && 0 === p
            ? (0, i.jsx)(_.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: I,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (I ? null : (0, u.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: m,
                  status: a,
                  activities: l,
                  applicationStream: r,
                  isMobile: s,
                  isVR: d,
                  isGameRelationship: c,
              })
            : (0, i.jsx)(N.A, {
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
                                  status: a,
                                  isMobile: s,
                                  isVR: d,
                                  subText: (0, i.jsx)(x.A, {
                                      hovered: t,
                                      activities: l,
                                      applicationStream: r,
                                      status: a,
                                      user: e,
                                      userIgnored: E.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !c && !e.isProvisional,
                              }),
                              (0, i.jsxs)("div", {
                                  className: R.o1,
                                  children: [
                                      (0, i.jsx)(S.A, {
                                          icon: o.oyn,
                                          tooltip: L.intl.string(L.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, i.jsx)(S.A, {
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
