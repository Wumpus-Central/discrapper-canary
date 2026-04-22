n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(861672),
    c = n(477782),
    d = n(534890),
    u = n(530005),
    m = n(157559),
    A = n(308528),
    h = n(442433),
    x = n(793574),
    p = n(70730),
    g = n(777426),
    N = n(976860),
    f = n(734057),
    _ = n(430452),
    I = n(994500),
    v = n(595623),
    j = n(427262),
    C = n(22212),
    y = n(607272),
    S = n(513297),
    E = n(414711),
    T = n(187696),
    b = n(723690),
    P = n(652215),
    L = n(788868),
    R = n(731854),
    D = n(985018),
    O = n(728552);
function k(e) {
    let { user: t, applicationId: n, isGameRelationship: l, onSelect: a } = e,
        d = s.useCallback(() => {
            (0, C.X9)({ targetUserId: t.id, tab: v.Ay.getState().section }),
                A.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        u = s.useCallback(() => {
            (0, C.Cf)({ targetUserId: t.id, tab: v.Ay.getState().section }),
                A.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        x = s.useCallback(() => {
            y.A.removeFriend({ userId: t.id, applicationId: l ? n : null, location: "Friends" });
        }, [n, l, t.id]),
        p = s.useCallback(() => {
            let e = l ? D.intl.string(D.t.RLcE6x) : D.intl.string(D.t.cvSt1J);
            (0, C.lP)({ targetUserId: t.id, tab: v.Ay.getState().section }),
                m.A.show({
                    title: D.intl.formatToPlainString(D.t.fPLvZd, { name: j.Ay.getName(t) }),
                    body: D.intl.formatToPlainString(D.t.l5FFq6, { name: j.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: D.intl.string(D.t["ETE/oC"]),
                    onConfirm: x,
                });
        }, [x, l, t]),
        g = (0, r.bG)([_.Ay], () => _.Ay.supports(R.O5.VIDEO)),
        N = t.isProvisional,
        f = l ? D.intl.string(D.t.RLcE6x) : D.intl.string(D.t.cvSt1J);
    return (0, i.jsxs)(o.W, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": D.intl.string(D.t.liqwPJ),
        onClose: h.Z_,
        onSelect: a,
        children: [
            !N && g ? (0, i.jsx)(c.Dr, { id: "start-video-call", label: D.intl.string(D.t.oCqlGG), action: u }) : null,
            !N && (0, i.jsx)(c.Dr, { id: "start-voice-call", label: D.intl.string(D.t.focH1t), action: d }),
            (0, i.jsx)(c.Dr, { id: "remove-friend", label: f, action: p, color: "danger" }),
        ],
    });
}
class F extends s.PureComponent {
    peopleListItemRef = s.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = a().find(f.A.getMutablePrivateChannels(), (t) => t.type === P.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, N.pX)(P.BVt.CHANNEL(P.ME, t.id)) : A.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, C.xF)({ targetUserId: this.props.user.id, tab: v.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, C.WD)({ targetUserId: this.props.user.id, tab: v.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: s } = this.props;
        (0, h.jA)(e, (e) => (0, i.jsx)(k, { ...e, user: t, applicationId: s, isGameRelationship: n }), {
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
                activities: s,
                applicationStream: l,
                status: a,
                isMobile: r,
                isVR: o,
                isGameRelationship: c,
                giftIntentType: m,
                hasFriendAnniversarySection: A,
                sectionIndex: N,
            } = this.props,
            { isActiveRow: f } = this.state;
        return (0, p.p)(x.A.FRIENDS_LIST) && m === L.np.FRIEND_ANNIVERSARY && A && 0 === N
            ? (0, i.jsx)(g.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: f,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (f ? null : (0, h.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: m,
                  status: a,
                  activities: s,
                  applicationStream: l,
                  isMobile: r,
                  isVR: o,
                  isGameRelationship: c,
              })
            : (0, i.jsx)(E.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: f,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (f ? null : (0, h.Z_)()),
                  onClick: this.handleRowClick,
                  children: (t) =>
                      (0, i.jsxs)("div", {
                          className: O.a4,
                          children: [
                              (0, i.jsx)(b.A, {
                                  user: e,
                                  status: a,
                                  isMobile: r,
                                  isVR: o,
                                  subText: (0, i.jsx)(T.A, {
                                      hovered: t,
                                      activities: s,
                                      applicationStream: l,
                                      status: a,
                                      user: e,
                                      userIgnored: I.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !c && !e.isProvisional,
                              }),
                              (0, i.jsxs)("div", {
                                  className: O.o1,
                                  children: [
                                      (0, i.jsx)(S.A, {
                                          icon: d.o,
                                          tooltip: D.intl.string(D.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, i.jsx)(S.A, {
                                          icon: u.F,
                                          tooltip: D.intl.string(D.t["UKOtz+"]),
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
let w = F;
