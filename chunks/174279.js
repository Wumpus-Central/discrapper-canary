n.d(t, { A: () => P });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(308528),
    u = n(442433),
    A = n(793574),
    h = n(70730),
    _ = n(777426),
    m = n(976860),
    p = n(734057),
    g = n(430452),
    E = n(994500),
    I = n(427262),
    f = n(607272),
    C = n(513297),
    N = n(414711),
    T = n(187696),
    S = n(723690),
    x = n(652215),
    v = n(788868),
    b = n(731854),
    y = n(985018),
    L = n(847295);
function O(e) {
    let { user: t, applicationId: n, isGameRelationship: a, onSelect: l } = e,
        A = r.useCallback(() => {
            c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        h = r.useCallback(() => {
            c.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        _ = r.useCallback(() => {
            f.A.removeFriend({ userId: t.id, applicationId: a ? n : null, location: "Friends" });
        }, [n, a, t.id]),
        m = r.useCallback(() => {
            let e = a ? y.intl.string(y.t.RLcE6x) : y.intl.string(y.t.cvSt1J);
            d.A.show({
                title: y.intl.formatToPlainString(y.t.fPLvZd, { name: I.Ay.getName(t) }),
                body: y.intl.formatToPlainString(y.t.l5FFq6, { name: I.Ay.getName(t) }),
                confirmText: e,
                confirmVariant: "critical-primary",
                cancelText: y.intl.string(y.t["ETE/oC"]),
                onConfirm: _,
            });
        }, [_, a, t]),
        p = (0, s.bG)([g.Ay], () => g.Ay.supports(b.O5.VIDEO)),
        E = t.isProvisional,
        C = a ? y.intl.string(y.t.RLcE6x) : y.intl.string(y.t.cvSt1J);
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": y.intl.string(y.t.liqwPJ),
        onClose: u.Z_,
        onSelect: l,
        children: [
            !E && p ? (0, i.jsx)(o.Drp, { id: "start-video-call", label: y.intl.string(y.t.oCqlGG), action: h }) : null,
            !E && (0, i.jsx)(o.Drp, { id: "start-voice-call", label: y.intl.string(y.t.focH1t), action: A }),
            (0, i.jsx)(o.Drp, { id: "remove-friend", label: C, action: m, color: "danger" }),
        ],
    });
}
class R extends r.PureComponent {
    peopleListItemRef = r.createRef();
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
        let n = l().find(p.A.getMutablePrivateChannels(), (e) => e.type === x.rbe.DM && e.getRecipientId() === t.id);
        null != n ? (0, m.pX)(x.BVt.CHANNEL(x.ME, n.id)) : c.A.openPrivateChannel({ recipientIds: t.id });
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: r } = this.props;
        (0, u.jA)(e, (e) => (0, i.jsx)(O, { ...e, user: t, applicationId: r, isGameRelationship: n }), {
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
                activities: n,
                applicationStream: r,
                status: a,
                isMobile: l,
                isVR: s,
                isGameRelationship: d,
                giftIntentType: c,
                hasFriendAnniversarySection: m,
                sectionIndex: p,
            } = this.props,
            { isActiveRow: g } = this.state;
        return (0, h.p)(A.A.FRIENDS_LIST) && c === v.np.FRIEND_ANNIVERSARY && m && 0 === p
            ? (0, i.jsx)(_.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: g,
                  recipientUser: e,
                  onOtherHover: () => (g ? null : (0, u.Z_)()),
                  onClick: this.handleOpenPrivateChannel,
                  giftIntentType: c,
                  status: a,
                  activities: n,
                  applicationStream: r,
                  isMobile: l,
                  isVR: s,
                  isGameRelationship: d,
              })
            : (0, i.jsx)(N.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: g,
                  user: e,
                  onOtherHover: () => (g ? null : (0, u.Z_)()),
                  onClick: this.handleOpenPrivateChannel,
                  children: (t) =>
                      (0, i.jsxs)("div", {
                          className: L.a4,
                          children: [
                              (0, i.jsx)(S.A, {
                                  user: e,
                                  status: a,
                                  isMobile: l,
                                  isVR: s,
                                  subText: (0, i.jsx)(T.A, {
                                      hovered: t,
                                      activities: n,
                                      applicationStream: r,
                                      status: a,
                                      user: e,
                                      userIgnored: E.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !d && !e.isProvisional,
                              }),
                              (0, i.jsxs)("div", {
                                  className: L.o1,
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
