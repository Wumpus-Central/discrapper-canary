n.d(t, {
    Z: () => em,
    l: () => eg,
}),
    n(642613),
    n(415506),
    n(539854),
    n(388685),
    n(35282),
    n(49124);
var i,
    r = n(54381),
    l = n(473749),
    a = n(392711),
    o = n(913527),
    s = n.n(o),
    c = n(793030),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    h = n(570140),
    f = n(26151),
    m = n(493683),
    g = n(529103),
    b = n(447543),
    y = n(708690),
    C = n(194359),
    v = n(425493),
    _ = n(794433),
    x = n(493773),
    j = n(100527),
    O = n(367907),
    E = n(906732),
    S = n(43267),
    P = n(933557),
    I = n(313201),
    Z = n(429090),
    T = n(912114),
    N = n(366980),
    A = n(728285),
    w = n(703656),
    M = n(93127),
    R = n(752048),
    L = n(131704),
    k = n(592125),
    D = n(341165),
    U = n(544610),
    B = n(19780),
    H = n(306680),
    V = n(699516),
    F = n(246946),
    G = n(594174),
    z = n(626135),
    W = n(572004),
    q = n(585483),
    K = n(823379),
    Y = n(709054),
    X = n(51144),
    J = n(73752),
    Q = n(665149),
    $ = n(575464),
    ee = n(981631),
    et = n(388032),
    en = n(497072);
function ei(e, t, n) {
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
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ea(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let eo = (0, I.hQ)(),
    es = (0, I.hQ)(),
    ec = (e) => {
        var t;
        let { channel: n, onClose: i } = e,
            l = null != (t = (0, P.ZP)(n)) ? t : "",
            a = (0, u.e7)([H.ZP], () => {
                var e;
                return null != (e = H.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, r.jsx)(p.P3F, {
            onClick: () => {
                (0, w.XU)(ee.ME, n.id), i();
            },
            children: (0, r.jsxs)("div", {
                className: en.confirmChannelItemContainer,
                children: [
                    (0, r.jsx)(p.qEK, {
                        src: (0, S.x)(n),
                        size: p.EFr.SIZE_24,
                        "aria-label": l,
                    }),
                    (0, r.jsx)("span", {
                        className: en.confirmChannelName,
                        children: l,
                    }),
                    (0, r.jsx)("span", {
                        className: en.lastActiveTimestamp,
                        children: s()(Y.default.extractTimestamp(a)).fromNow(),
                    }),
                ],
            }),
        });
    },
    eu = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            i = ea(e, ["onConfirm", "channelIds"]);
        let l = (0, u.Wu)([k.Z], () => Array.from(n).map(k.Z.getChannel), [n]);
        return (0, r.jsx)(
            c.Modal,
            el(
                er(
                    {
                        title: et.intl.string(et.t.uFHxNd),
                        subtitle: et.intl.string(et.t.rIsSqE),
                        actions: [
                            {
                                variant: "secondary",
                                text: et.intl.string(et.t["ETE/oC"]),
                                onClick: i.onClose,
                            },
                            {
                                variant: "primary",
                                text: et.intl.string(et.t.KCNNJu),
                                onClick: () => {
                                    t(), i.onClose();
                                },
                            },
                        ],
                        input: (0, r.jsx)(p.Text, {
                            variant: "text-md/normal",
                            className: en.selectExistingFormHeader,
                            children: et.intl.string(et.t.cjE7wH),
                        }),
                    },
                    i,
                ),
                {
                    children: l
                        .filter(K.lm)
                        .sort((e, t) => {
                            var n, i;
                            let r = null != (n = e.lastMessageId) ? n : e.id,
                                l = null != (i = t.lastMessageId) ? i : t.id;
                            return Y.default.compare(l, r);
                        })
                        .map((e) =>
                            (0, r.jsx)(
                                ec,
                                {
                                    onClose: i.onClose,
                                    channel: e,
                                },
                                e.id,
                            ),
                        ),
                },
            ),
        );
    };
class ed extends (i = l.PureComponent) {
    componentDidUpdate(e) {
        if (e.selectedUsers !== this.props.selectedUsers || e.query !== this.props.query) {
            var t, n;
            null == (t = (n = this.props).updatePosition) || t.call(n);
        }
    }
    _getAnalyticsEntryPoint() {
        let { channel: e } = this.props,
            t = "",
            n = "";
        return (
            null != e
                ? e.isDM()
                    ? ((t = "Add Friends to DM"), (n = "DM"))
                    : ((t = "Add Friends to DM"), (n = "Group DM"))
                : ((t = "New Group DM"), (n = "Friends List")),
            {
                entryPointType: t,
                entryPointSource: n,
            }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        h.Z.wait(() => y.Z.open(null == e ? void 0 : e.id));
        let t = (0, O.v_)(e);
        z.default.track(
            ee.rMx.OPEN_POPOUT,
            el(er({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends(),
            }),
        ),
            q.S.subscribe(ee.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            q.S.subscribe(ee.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        q.S.unsubscribe(ee.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            q.S.unsubscribe(ee.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            h.Z.wait(() => y.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error("no recipient in DM");
        return !V.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = J.Z.getCurrentConfig({ location: "5326c5_1" }, { autoTrackExposure: !1 });
        b.ZP.createInvite(e.id, { max_age: t }, ee.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = G.default.getCurrentUser();
        return null != t && t.isStaff() ? ee.p3w : null != e && e.userLimit > 0 ? e.userLimit : ee.pAY;
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    getCreateGroupButtonAction() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            i = (null != e && 0 === t.size) || n < 0,
            r = t.size > 1 || null != e ? et.intl.string(et.t.ZGMNA8) : et.intl.string(et.t["6Urw1t"]);
        return {
            variant: "primary",
            disabled: i,
            onClick: this.handleInviteUsers,
            text: r,
        };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, r.jsx)("div", {
            className: en.addButton,
            children: (0, r.jsx)(p.Button, {
                variant: "primary",
                size: "sm",
                text: et.intl.string(et.t.OYkgVk),
                disabled: i,
                onClick: this.handleInviteUsers,
            }),
        });
    }
    getTitle() {
        return this.isNotFriends()
            ? et.intl.string(et.t.Xjlbvs)
            : this.isPartyFull()
              ? et.intl.string(et.t.OtTQDz)
              : et.intl.string(et.t.CdNhGX);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) return et.intl.string(et.t["7orY6K"]);
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = G.default.getUser(t),
                i = null != n ? n.username : "";
            return et.intl.format(et.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? et.intl.formatToPlainString(et.t.xYr004, { number: this.getMaxParticipants() })
            : et.intl.formatToPlainString(et.t.HrSDPF, { number: n });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: i, selectedRow: l, selectedUsers: a } = this.props;
        if (!n || this.isNotFriends() || this.isPartyFull()) return null;
        let o = [];
        return (
            a.forEach((e) => {
                let t = G.default.getUser(e);
                null != t && o.push(X.ZP.getName(t));
            }),
            (0, r.jsxs)("div", {
                className: en.searchBar,
                children: [
                    (0, r.jsx)(_.Z, {
                        ref: this.searchBarRef,
                        className: en.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === a.size ? et.intl.string(et.t.Wxnb6q) : "",
                        disabled: this.isPartyFull(),
                        size: _.Z.Sizes.MEDIUM,
                        maxHeight: this.props.inBornThisNamedExperiment ? 110 : void 0,
                        query: t,
                        selectedRow: l,
                        sections: [null != (e = null == i ? void 0 : i.length) ? e : 0],
                        tags: o,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        onHeightChange: this.scrollToCounterSearchBarHeightChange,
                        inputProps: {
                            "aria-labelledby": eo,
                            "aria-controls": es,
                            "aria-expanded": !0,
                            "aria-activedescendant": "user-row-".concat(l),
                            autoComplete: "off",
                        },
                    }),
                    this.renderAddUsersButton(),
                ],
            })
        );
    }
    renderPopoutBody() {
        let { hasFriends: e, results: t } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, r.jsx)(p.Text, {
                    className: en.popoutContent,
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: et.intl.format(et.t.xYr004, { number: this.getMaxParticipants() }),
                })
              : 0 === t.length
                ? (0, r.jsx)("div", {
                      className: en.noResults,
                      children: (0, r.jsx)(p.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: et.intl.string(et.t.SV4DJ1),
                      }),
                  })
                : (0, r.jsx)(p.aVo, {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: en.scroller,
                      innerClassName: en.scrollerInner,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      onScroll: this.handleScroll,
                      paddingTop: 0,
                      paddingBottom: 14,
                      fade: !0,
                      role: void 0,
                      innerRole: "listbox",
                      innerId: es,
                      innerAriaMultiselectable: !0,
                      innerAriaOrientation: "vertical",
                  });
    }
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, r.jsx)("div", { children: et.intl.format(et.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (!(this.isNotFriends() || !e || this.isPartyFull()))
            return 0 === t.length
                ? {
                      sections: [1],
                      sectionHeight: 0,
                      rowHeight: 32,
                      renderRow: () =>
                          (0, r.jsx)("div", {
                              className: en.noResults,
                              children: (0, r.jsx)(p.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.SV4DJ1),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: en.scroller,
                      innerClassName: en.scrollerInner,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      onScroll: this.handleScroll,
                      paddingTop: 0,
                      paddingBottom: 14,
                      fade: !0,
                      role: void 0,
                      innerRole: "listbox",
                      innerId: es,
                      innerAriaMultiselectable: !0,
                      innerAriaOrientation: "vertical",
                  };
    }
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let l = null != t ? (0, N.Z)(t.code) : "",
            a = l.length > 0;
        return (0, r.jsx)(p.gNt, {
            label: et.intl.string(et.t.t3O2BR),
            helperText: l.length > 0 ? et.intl.format(et.t.ZVdJMy, { numHours: "".concat(24) }) : void 0,
            children: (0, r.jsx)(p.kO8, {
                supportsCopy: W.wS,
                placeholder: (0, N.Z)(et.intl.string(et.t.lPVBqP)),
                value: a ? (n ? et.intl.string(et.t["6HzNgZ"]) : l) : "",
                buttonColor: d.zx.Colors.BRAND,
                text: a ? (i ? et.intl.string(et.t.q30c5i) : et.intl.string(et.t.OpuAlK)) : et.intl.string(et.t.qzxqUf),
                mode: i ? p.uA3.SUCCESS : p.uA3.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(l) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = G.default.getUser(e),
                i = null != n && V.Z.getRelationshipType(n.id) === ee.OGo.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? et.intl.string(et.t.xMH6vD) : et.intl.string(et.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    {
                        variant: "primary",
                        text: et.intl.string(et.t.w5uwoI),
                        onClick: this.handleAddFriendNavigation,
                    },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, r.jsx)(ep, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    {
                        variant: "secondary",
                        text: et.intl.string(et.t["ETE/oC"]),
                        onClick: this.props.onClose,
                    },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let i = this.getInviteLinkFooter();
        return null != i ? { actionBarInput: i } : {};
    }
    render() {
        var e;
        let { transitionState: t, onClose: n, inBornThisNamedExperiment: i } = this.props,
            { actionBarInput: l, actions: a } = this.getFooterProps();
        return i
            ? (0, r.jsx)(c.Modal, {
                  transitionState: null != t ? t : p.Dvm.ENTERED,
                  onClose: async () => await n(),
                  title: this.getTitle(),
                  subtitle: this.getSubtitle(),
                  input: null != (e = this.renderSearchBar()) ? e : void 0,
                  actionBarInput: l,
                  listProps: this.getListProps(),
                  actions: null != a ? a : [],
                  children: this.renderBody(),
              })
            : (0, r.jsxs)("div", {
                  className: en.popout,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          className: en.popoutContent,
                          variant: "heading-lg/semibold",
                          color: "text-primary",
                          children: this.getTitle(),
                      }),
                      (0, r.jsx)(p.Text, {
                          className: en.popoutContent,
                          variant: "text-md/normal",
                          color: "text-secondary",
                          children: this.getSubtitle(),
                      }),
                      (0, r.jsx)("div", {
                          className: en.popoutContent,
                          children: this.renderSearchBar(),
                      }),
                      this.renderPopoutBody(),
                      null != l &&
                          (0, r.jsx)("div", {
                              className: en.footer,
                              children: l,
                          }),
                      null != a &&
                          (0, r.jsx)("div", {
                              className: en.popoutContent,
                              children: (0, r.jsx)(c.hE2, {
                                  padding: { top: 12 },
                                  fullWidth: !0,
                                  children: a.map((e, t) => (0, r.jsx)(p.Button, er({}, e), t)),
                              }),
                          }),
                  ],
              });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            C.Z.sendRequest({
                discordTag: X.ZP.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = R.Z.getUserAffinity(e);
                return null != (t = null == n ? void 0 : n.communicationProbability) ? t : -1;
            }),
        };
    }
    constructor(...e) {
        super(...e),
            ei(this, "state", {
                separator: !1,
                copied: !1,
                newChannelName: "",
                previewIcon: void 0,
            }),
            ei(this, "copyTimeout", void 0),
            ei(this, "scrollerRef", l.createRef()),
            ei(this, "searchBarRef", l.createRef()),
            ei(this, "_mobileCloseRef", l.createRef()),
            ei(this, "_searchCounter", 0),
            ei(this, "_existingTimeout", null),
            ei(this, "scrollPageUp", () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageUp({ animate: !0 });
            }),
            ei(this, "scrollPageDown", () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageDown({ animate: !0 });
            }),
            ei(this, "renderMobileCloseButton", () =>
                (0, r.jsx)("div", {
                    className: en.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, r.jsx)(p.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(v.Z, {
                                className: en.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: "ESC",
                            }),
                        }),
                    }),
                }),
            ),
            ei(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? (this.props.inBornThisNamedExperiment ? 48 : 42) : 0;
            }),
            ei(this, "renderRow", (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: i, selectedUsers: l, selectedRow: a, hideDiscriminator: o } = this.props,
                    s = i[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id),
                    p = !d && 0 >= this.getRemaining();
                return (0, r.jsx)(
                    $.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: o,
                        comparator: u,
                        checked: d,
                        disabled: p,
                        selected: n === a,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        "aria-posinset": n + 1,
                        "aria-setsize": i.length,
                        inlineUsername: !this.props.inBornThisNamedExperiment,
                    },
                    c.id,
                );
            }),
            ei(this, "forceFocus", () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            ei(this, "focusResult", (e) => {
                y.Z.select(e);
            }),
            ei(this, "handleSelect", (e, t) => {
                let { results: n, channel: i } = this.props;
                null == t ? y.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
            }),
            ei(this, "handleSelectionChange", (e, t) => {
                y.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8,
                    });
            }),
            ei(this, "handleQueryChange", (e) => {
                let { channel: t } = this.props,
                    n = (0, O.v_)(t);
                y.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        z.default.track(
                            ee.rMx.SEARCH_USER_LIST_STARTED,
                            el(er({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length,
                            }),
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            ei(this, "handleRemoveUser", (e) => {
                let t = Array.from(this.props.selectedUsers);
                y.Z.removeUser(t[e]), this.forceFocus();
            }),
            ei(this, "handleClick", (e) => {
                let { selectedUsers: t, query: n, channel: i } = this.props;
                t.has(e)
                    ? y.Z.removeUser(e)
                    : this.getRemaining() > 0 && (y.Z.addUser(e), n.length > 0 && y.Z.clear(null == i ? void 0 : i.id)),
                    this.forceFocus();
            }),
            ei(this, "handleAddFriendNavigation", () => {
                g.Z.transitionToSection(ee.pJs.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
            }),
            ei(this, "handleScroll", () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            ei(this, "handleChannelNameChange", (e) => {
                this.setState({ newChannelName: e });
            }),
            ei(this, "handleIconChange", (e) => {
                let { imageUri: t } = e;
                this.setState({ previewIcon: t });
            }),
            ei(this, "handleIconRemove", () => {
                this.setState({ previewIcon: null });
            }),
            ei(this, "createNewDM", (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    i = (0, O.v_)(n),
                    r = !0;
                1 === e.length && (r = null == m.Z._openCachedDMChannel(e[0])),
                    z.default.track(
                        ee.rMx.CREATE_DM_USER_LIST_CLICKED,
                        el(er({}, i), {
                            is_new_dm: r,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: e,
                            num_searches: t,
                            affinity_score: this._getUserAffinities(e).affinities,
                            name_is_set: "" !== this.state.newChannelName,
                            icon_is_set: null != this.state.previewIcon,
                        }),
                    ),
                    m.Z.openPrivateChannel({
                        recipientIds: e,
                        location: "New Group DM",
                    }).then((e) => {
                        let t = {};
                        "" !== this.state.newChannelName && (t.name = this.state.newChannelName),
                            null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                            (null != t.name || null != t.icon) &&
                                m.Z.updateChannel(e, t, j.Z.NEW_GROUP_DM_INVITE_MODAL),
                            z.default.track(ee.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: ee.d4z.GROUP_DM,
                                location: j.Z.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: "" !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon,
                            });
                    });
            }),
            ei(this, "pushToExistingDM", (e, t) => {
                let n = this._searchCounter,
                    i = (0, O.v_)(e),
                    r = B.Z.getChannelId() === e.id;
                m.Z.addRecipients(e.id, t, ee.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (r) {
                        if (e.isDM() && n !== e.id) return void f.Z.call(n, !1, !0);
                        f.Z.ring(n, t, "dm_invite");
                    }
                }),
                    z.default.track(
                        ee.rMx.CREATE_DM_USER_LIST_CLICKED,
                        el(er({}, i), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities,
                        }),
                    );
            }),
            ei(this, "handleInviteUsers", () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    i = Array.from(t);
                if (null != e) {
                    let t = eb(Array.from(new Set([...e.recipients, ...i])));
                    t.size > 0
                        ? (0, p.h7j)(
                              (n) =>
                                  (0, r.jsx)(
                                      eu,
                                      el(er({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, i),
                                          channelIds: t,
                                      }),
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext),
                          )
                        : this.pushToExistingDM(e, i);
                } else {
                    let e = eb(i);
                    i.length > 1 && e.size > 0
                        ? (0, p.h7j)(
                              (t) =>
                                  (0, r.jsx)(
                                      eu,
                                      el(er({}, t), {
                                          onConfirm: () => this.createNewDM(i),
                                          channelIds: e,
                                      }),
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext),
                          )
                        : this.createNewDM(i);
                }
                n();
            }),
            ei(this, "handleCopyInvite", (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, W.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    z.default.track(ee.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: ee.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null,
                    });
            }),
            ei(this, "scrollToCounterSearchBarHeightChange", (e) => {
                var t, n;
                if (!this.props.inBornThisNamedExperiment) return;
                let i = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != i && (i.scrollTop = Math.max(0, i.scrollTop + e));
            });
    }
}
function ep(e) {
    let { selectedUsers: t, channelName: n, previewIcon: i, onIconChange: l, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: s } = (0, E.ZP)(j.Z.NEW_GROUP_DM_INVITE_MODAL);
    if (!(0, Z.a)(j.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
    let c = (0, P.pT)(Array.from(t), G.default, V.Z);
    return (0, r.jsxs)("div", {
        className: en.customizationContainer,
        children: [
            (0, r.jsx)(T.B, {
                className: en.iconSelector,
                channel: null,
                previewIcon: i,
                onIconChange: l,
                onIconRemove: a,
                analyticsLocations: s,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, r.jsx)(p.Text, {
                className: en.channelNameLabel,
                variant: "text-sm/medium",
                color: "header-muted",
                children: et.intl.string(et.t.YynaLK),
            }),
            (0, r.jsx)(p.oil, {
                "aria-label": et.intl.string(et.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function eh(e) {
    var { channel: t } = e,
        n = ea(e, ["channel"]);
    let i = (0, u.cj)([U.Z, D.Z, F.Z], () => {
        let e;
        return (
            null != t && null != (e = D.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            el(er({}, U.Z.getState()), {
                invite: e,
                hideDiscriminator: F.Z.hidePersonalInformation,
                hideInstantInvites: F.Z.hideInstantInvites,
            })
        );
    });
    return (0, r.jsx)(ed, er({ channel: t }, n, i));
}
function ef(e) {
    let { channel: t, location: n, subscribeToGlobalHotkey: i, initialPopoutOpen: a } = e,
        [o, s] = l.useState(null != a && a),
        c = (0, Z.a)(n),
        u = "channel-invite-modal-".concat(null == t ? void 0 : t.id),
        d = (0, p.VXO)(u),
        h = l.useCallback(
            () =>
                (0, p.ZDy)(
                    () =>
                        Promise.resolve((e) =>
                            (0, r.jsx)(
                                eh,
                                el(er({}, e), {
                                    channel: t,
                                    inBornThisNamedExperiment: c,
                                }),
                            ),
                        ),
                    { modalKey: u },
                ),
            [t, u, c],
        ),
        f = l.useCallback(() => (c ? (d ? (0, p.Mr3)(u) : h()) : s((e) => !e)), [c, d, u, h, s]);
    return (
        l.useEffect(
            () => (
                i && q.S.subscribe(ee.CkL.TOGGLE_DM_CREATE, f),
                () => {
                    q.S.unsubscribe(ee.CkL.TOGGLE_DM_CREATE, f);
                }
            ),
            [i, f, c],
        ),
        (0, x.ZP)(() => {
            (0, M._)();
        }),
        {
            showModal: h,
            renderPopout: (e) =>
                (0, r.jsx)(
                    eh,
                    el(er({}, e), {
                        onClose: e.closePopout,
                        channel: t,
                        inBornThisNamedExperiment: c,
                    }),
                ),
            toggleVisible: f,
            popoutOpen: o,
            setPopoutOpen: s,
            inBornThisNamedExperiment: c,
        }
    );
}
function em(e) {
    var t, n;
    let {
            channel: i,
            iconClassName: a,
            className: o,
            icon: s,
            tooltip: c,
            tooltipPosition: d = "bottom",
            popoutPosition: h = "bottom",
            popoutAlign: f = "right",
            subscribeToGlobalHotkey: m = !1,
            location: g,
        } = e,
        b = l.useRef(null),
        y = null != s ? s : null == i ? p.kL_ : p.ejJ,
        {
            showModal: C,
            renderPopout: v,
            toggleVisible: _,
            popoutOpen: x,
            setPopoutOpen: j,
            inBornThisNamedExperiment: O,
        } = ef({
            initialPopoutOpen: null != i && i.isGroupDM() && 0 === i.recipients.length,
            channel: i,
            location: g,
            subscribeToGlobalHotkey: m,
        }),
        E = (0, u.e7)([G.default], () => G.default.getUser(null == i ? void 0 : i.getRecipientId()));
    return (null != (t = null == E ? void 0 : E.bot) && t) || (null != (n = null == E ? void 0 : E.isProvisional) && n)
        ? null
        : O
          ? (0, r.jsx)(Q.ZP.Icon, {
                ref: b,
                onClick: C,
                icon: y,
                className: o,
                iconClassName: a,
                tooltip: c,
                tooltipPosition: d,
            })
          : (0, r.jsx)(p.yRy, {
                targetElementRef: b,
                renderPopout: v,
                position: h,
                shouldShow: x,
                nudgeAlignIntoViewport: !0,
                autoInvert: !0,
                align: f,
                onRequestClose: () => j(!1),
                animation: p.yRy.Animation.NONE,
                ignoreModalClicks: !0,
                clickTrap: !0,
                children: (e) =>
                    (0, r.jsx)(
                        Q.ZP.Icon,
                        el(er({}, e), {
                            ref: b,
                            onClick: _,
                            icon: y,
                            className: o,
                            iconClassName: a,
                            tooltip: c,
                            tooltipPosition: d,
                        }),
                    ),
            });
}
function eg(e) {
    var {
            channel: t,
            popoutPosition: n = "bottom",
            popoutAlign: i = "right",
            fullWidth: a = !1,
            text: o,
            icon: s,
            subscribeToGlobalHotkey: c = !1,
        } = e,
        u = ea(e, ["channel", "popoutPosition", "popoutAlign", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]);
    let d = l.useRef(null),
        {
            showModal: h,
            renderPopout: f,
            toggleVisible: m,
            popoutOpen: g,
            setPopoutOpen: b,
            inBornThisNamedExperiment: y,
        } = ef({
            initialPopoutOpen: !1,
            channel: t,
            location: "PrivateChannelRecipientsInviteTextButton",
            subscribeToGlobalHotkey: c,
        });
    return y
        ? (0, r.jsx)(
              p.Button,
              el(er({}, u), {
                  onClick: h,
                  variant: "primary",
                  buttonRef: d,
                  text: o,
                  "aria-label": o,
                  icon: s,
                  fullWidth: a,
              }),
          )
        : (0, r.jsx)(p.yRy, {
              targetElementRef: d,
              renderPopout: f,
              position: n,
              shouldShow: g,
              nudgeAlignIntoViewport: !0,
              autoInvert: !0,
              align: i,
              onRequestClose: () => b(!1),
              animation: p.yRy.Animation.NONE,
              ignoreModalClicks: !0,
              clickTrap: !0,
              children: (e) =>
                  (0, r.jsx)(
                      p.Button,
                      el(er({}, e, u), {
                          onClick: m,
                          variant: "primary",
                          buttonRef: d,
                          text: o,
                          "aria-label": o,
                          icon: s,
                          fullWidth: a,
                      }),
                  ),
          });
}
function eb(e) {
    let t = ey(e);
    return new Set(
        (0, a.chain)(k.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, L.bc)(e.type))
            .filter((e) => ey(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function ey(e) {
    return JSON.stringify(e.sort());
}
ei(ed, "contextType", A.ZP);
