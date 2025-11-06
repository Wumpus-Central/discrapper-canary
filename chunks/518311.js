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
var r,
    i = n(951288),
    l = n(647438),
    a = n(392711),
    o = n(913527),
    s = n.n(o),
    c = n(793030),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    f = n(570140),
    h = n(26151),
    m = n(493683),
    g = n(529103),
    b = n(447543),
    _ = n(708690),
    y = n(194359),
    C = n(425493),
    v = n(794433),
    O = n(493773),
    x = n(100527),
    E = n(367907),
    j = n(906732),
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
    D = n(131704),
    k = n(592125),
    L = n(341165),
    U = n(544610),
    B = n(19780),
    F = n(306680),
    V = n(699516),
    H = n(246946),
    G = n(594174),
    W = n(626135),
    z = n(572004),
    q = n(585483),
    Y = n(823379),
    K = n(709054),
    X = n(51144),
    J = n(73752),
    Q = n(665149),
    $ = n(575464),
    ee = n(981631),
    et = n(388032),
    en = n(918324);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eo = (0, I.hQ)(),
    es = (0, I.hQ)(),
    ec = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            l = null != (t = (0, P.ZP)(n)) ? t : "",
            a = (0, u.e7)([F.ZP], () => {
                var e;
                return null != (e = F.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, i.jsx)(p.P3F, {
            onClick: () => {
                (0, w.XU)(ee.ME, n.id), r();
            },
            children: (0, i.jsxs)("div", {
                className: en.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(p.qEK, {
                        src: (0, S.x)(n),
                        size: p.EFr.SIZE_24,
                        "aria-label": l,
                    }),
                    (0, i.jsx)("span", {
                        className: en.confirmChannelName,
                        children: l,
                    }),
                    (0, i.jsx)("span", {
                        className: en.lastActiveTimestamp,
                        children: s()(K.default.extractTimestamp(a)).fromNow(),
                    }),
                ],
            }),
        });
    },
    eu = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = ea(e, ["onConfirm", "channelIds"]);
        let l = (0, u.Wu)([k.Z], () => Array.from(n).map(k.Z.getChannel), [n]);
        return (0, i.jsx)(
            c.Modal,
            el(
                ei(
                    {
                        title: et.intl.string(et.t.uFHxNd),
                        subtitle: et.intl.string(et.t.rIsSqE),
                        actions: [
                            {
                                variant: "secondary",
                                text: et.intl.string(et.t["ETE/oC"]),
                                onClick: r.onClose,
                            },
                            {
                                variant: "primary",
                                text: et.intl.string(et.t.KCNNJu),
                                onClick: () => {
                                    t(), r.onClose();
                                },
                            },
                        ],
                        input: (0, i.jsx)(p.Text, {
                            variant: "text-md/normal",
                            className: en.selectExistingFormHeader,
                            children: et.intl.string(et.t.cjE7wH),
                        }),
                    },
                    r,
                ),
                {
                    children: l
                        .filter(Y.lm)
                        .sort((e, t) => {
                            var n, r;
                            let i = null != (n = e.lastMessageId) ? n : e.id,
                                l = null != (r = t.lastMessageId) ? r : t.id;
                            return K.default.compare(l, i);
                        })
                        .map((e) =>
                            (0, i.jsx)(
                                ec,
                                {
                                    onClose: r.onClose,
                                    channel: e,
                                },
                                e.id,
                            ),
                        ),
                },
            ),
        );
    };
class ed extends (r = l.PureComponent) {
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
        f.Z.wait(() => _.Z.open(null == e ? void 0 : e.id));
        let t = (0, E.v_)(e);
        W.default.track(
            ee.rMx.OPEN_POPOUT,
            el(ei({}, t), {
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
            f.Z.wait(() => _.Z.close());
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
            r = (null != e && 0 === t.size) || n < 0,
            i = t.size > 1 || null != e ? et.intl.string(et.t.ZGMNA8) : et.intl.string(et.t["6Urw1t"]);
        return {
            variant: "primary",
            disabled: r,
            onClick: this.handleInviteUsers,
            text: i,
        };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)("div", {
            className: en.addButton,
            children: (0, i.jsx)(p.Button, {
                variant: "primary",
                size: "sm",
                text: et.intl.string(et.t.OYkgVk),
                disabled: r,
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
                r = null != n ? n.username : "";
            return et.intl.format(et.t["eg+R9x"], { username: r });
        }
        let n = this.getRemaining();
        return n <= 0
            ? et.intl.formatToPlainString(et.t.xYr004, { number: this.getMaxParticipants() })
            : et.intl.formatToPlainString(et.t.HrSDPF, { number: n });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: r, selectedRow: l, selectedUsers: a } = this.props;
        if (!n || this.isNotFriends() || this.isPartyFull()) return null;
        let o = [];
        return (
            a.forEach((e) => {
                let t = G.default.getUser(e);
                null != t && o.push(X.ZP.getName(t));
            }),
            (0, i.jsxs)("div", {
                className: en.searchBar,
                children: [
                    (0, i.jsx)(v.Z, {
                        ref: this.searchBarRef,
                        className: en.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === a.size ? et.intl.string(et.t.Wxnb6q) : "",
                        disabled: this.isPartyFull(),
                        size: v.Z.Sizes.MEDIUM,
                        maxHeight: this.props.inBornThisNamedExperiment ? 110 : void 0,
                        query: t,
                        selectedRow: l,
                        sections: [null != (e = null == r ? void 0 : r.length) ? e : 0],
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
              ? (0, i.jsx)(p.Text, {
                    className: en.popoutContent,
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: et.intl.format(et.t.xYr004, { number: this.getMaxParticipants() }),
                })
              : 0 === t.length
                ? (0, i.jsx)("div", {
                      className: en.noResults,
                      children: (0, i.jsx)(p.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: et.intl.string(et.t.SV4DJ1),
                      }),
                  })
                : (0, i.jsx)(p.aVo, {
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
              ? (0, i.jsx)("div", { children: et.intl.format(et.t.xYr004, { number: this.getMaxParticipants() }) })
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
                          (0, i.jsx)("div", {
                              className: en.noResults,
                              children: (0, i.jsx)(p.Text, {
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
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let l = null != t ? (0, N.Z)(t.code) : "",
            a = l.length > 0;
        return (0, i.jsx)(p.gNt, {
            label: et.intl.string(et.t.t3O2BR),
            helperText: l.length > 0 ? et.intl.format(et.t.ZVdJMy, { numHours: "".concat(24) }) : void 0,
            children: (0, i.jsx)(p.kO8, {
                supportsCopy: z.wS,
                placeholder: (0, N.Z)(et.intl.string(et.t.lPVBqP)),
                value: a ? (n ? et.intl.string(et.t["6HzNgZ"]) : l) : "",
                buttonColor: d.zx.Colors.BRAND,
                text: a ? (r ? et.intl.string(et.t.q30c5i) : et.intl.string(et.t.OpuAlK)) : et.intl.string(et.t.qzxqUf),
                mode: r ? p.uA3.SUCCESS : p.uA3.DEFAULT,
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
                r = null != n && V.Z.getRelationshipType(n.id) === ee.OGo.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: r ? et.intl.string(et.t.xMH6vD) : et.intl.string(et.t["PMsq/b"]),
                        disabled: r,
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
                        ? (0, i.jsx)(ep, {
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
        let r = this.getInviteLinkFooter();
        return null != r ? { actionBarInput: r } : {};
    }
    render() {
        var e;
        let { transitionState: t, onClose: n, inBornThisNamedExperiment: r } = this.props,
            { actionBarInput: l, actions: a } = this.getFooterProps();
        return r
            ? (0, i.jsx)(c.Modal, {
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
            : (0, i.jsxs)("div", {
                  className: en.popout,
                  children: [
                      (0, i.jsx)(c.X6q, {
                          className: en.popoutContent,
                          variant: "heading-lg/semibold",
                          color: "text-primary",
                          children: this.getTitle(),
                      }),
                      (0, i.jsx)(p.Text, {
                          className: en.popoutContent,
                          variant: "text-md/normal",
                          color: "text-secondary",
                          children: this.getSubtitle(),
                      }),
                      (0, i.jsx)("div", {
                          className: en.popoutContent,
                          children: this.renderSearchBar(),
                      }),
                      this.renderPopoutBody(),
                      null != l &&
                          (0, i.jsx)("div", {
                              className: en.footer,
                              children: l,
                          }),
                      null != a &&
                          (0, i.jsx)("div", {
                              className: en.popoutContent,
                              children: (0, i.jsx)(c.hE2, {
                                  padding: { top: 12 },
                                  fullWidth: !0,
                                  children: a.map((e, t) => (0, i.jsx)(p.Button, ei({}, e), t)),
                              }),
                          }),
                  ],
              });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            y.Z.sendRequest({
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
            er(this, "state", {
                separator: !1,
                copied: !1,
                newChannelName: "",
                previewIcon: void 0,
            }),
            er(this, "copyTimeout", void 0),
            er(this, "scrollerRef", l.createRef()),
            er(this, "searchBarRef", l.createRef()),
            er(this, "_mobileCloseRef", l.createRef()),
            er(this, "_searchCounter", 0),
            er(this, "_existingTimeout", null),
            er(this, "scrollPageUp", () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageUp({ animate: !0 });
            }),
            er(this, "scrollPageDown", () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageDown({ animate: !0 });
            }),
            er(this, "renderMobileCloseButton", () =>
                (0, i.jsx)("div", {
                    className: en.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(p.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(C.Z, {
                                className: en.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: "ESC",
                            }),
                        }),
                    }),
                }),
            ),
            er(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? (this.props.inBornThisNamedExperiment ? 48 : 42) : 0;
            }),
            er(this, "renderRow", (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: l, selectedRow: a, hideDiscriminator: o } = this.props,
                    s = r[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id),
                    p = !d && 0 >= this.getRemaining();
                return (0, i.jsx)(
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
                        "aria-setsize": r.length,
                        inlineUsername: !this.props.inBornThisNamedExperiment,
                    },
                    c.id,
                );
            }),
            er(this, "forceFocus", () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            er(this, "focusResult", (e) => {
                _.Z.select(e);
            }),
            er(this, "handleSelect", (e, t) => {
                let { results: n, channel: r } = this.props;
                null == t ? _.Z.clear(null == r ? void 0 : r.id) : null != n && this.handleClick(n[t].user.id);
            }),
            er(this, "handleSelectionChange", (e, t) => {
                _.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8,
                    });
            }),
            er(this, "handleQueryChange", (e) => {
                let { channel: t } = this.props,
                    n = (0, E.v_)(t);
                _.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        W.default.track(
                            ee.rMx.SEARCH_USER_LIST_STARTED,
                            el(ei({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length,
                            }),
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            er(this, "handleRemoveUser", (e) => {
                let t = Array.from(this.props.selectedUsers);
                _.Z.removeUser(t[e]), this.forceFocus();
            }),
            er(this, "handleClick", (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                t.has(e)
                    ? _.Z.removeUser(e)
                    : this.getRemaining() > 0 && (_.Z.addUser(e), n.length > 0 && _.Z.clear(null == r ? void 0 : r.id)),
                    this.forceFocus();
            }),
            er(this, "handleAddFriendNavigation", () => {
                g.Z.transitionToSection(ee.pJs.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
            }),
            er(this, "handleScroll", () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            er(this, "handleChannelNameChange", (e) => {
                this.setState({ newChannelName: e });
            }),
            er(this, "handleIconChange", (e) => {
                let { imageUri: t } = e;
                this.setState({ previewIcon: t });
            }),
            er(this, "handleIconRemove", () => {
                this.setState({ previewIcon: null });
            }),
            er(this, "createNewDM", (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, E.v_)(n),
                    i = !0;
                1 === e.length && (i = null == m.Z._openCachedDMChannel(e[0])),
                    W.default.track(
                        ee.rMx.CREATE_DM_USER_LIST_CLICKED,
                        el(ei({}, r), {
                            is_new_dm: i,
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
                                m.Z.updateChannel(e, t, x.Z.NEW_GROUP_DM_INVITE_MODAL),
                            W.default.track(ee.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: ee.d4z.GROUP_DM,
                                location: x.Z.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: "" !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon,
                            });
                    });
            }),
            er(this, "pushToExistingDM", (e, t) => {
                let n = this._searchCounter,
                    r = (0, E.v_)(e),
                    i = B.Z.getChannelId() === e.id;
                m.Z.addRecipients(e.id, t, ee.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) return void h.Z.call(n, !1, !0);
                        h.Z.ring(n, t, "dm_invite");
                    }
                }),
                    W.default.track(
                        ee.rMx.CREATE_DM_USER_LIST_CLICKED,
                        el(ei({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities,
                        }),
                    );
            }),
            er(this, "handleInviteUsers", () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = eb(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, p.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      eu,
                                      el(ei({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t,
                                      }),
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext),
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = eb(r);
                    r.length > 1 && e.size > 0
                        ? (0, p.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      eu,
                                      el(ei({}, t), {
                                          onConfirm: () => this.createNewDM(r),
                                          channelIds: e,
                                      }),
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext),
                          )
                        : this.createNewDM(r);
                }
                n();
            }),
            er(this, "handleCopyInvite", (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, z.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    W.default.track(ee.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: ee.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null,
                    });
            }),
            er(this, "scrollToCounterSearchBarHeightChange", (e) => {
                var t, n;
                if (!this.props.inBornThisNamedExperiment) return;
                let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != r && (r.scrollTop = Math.max(0, r.scrollTop + e));
            });
    }
}
function ep(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: l, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: s } = (0, j.ZP)(x.Z.NEW_GROUP_DM_INVITE_MODAL);
    if (!(0, Z.a)(x.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
    let c = (0, P.pT)(Array.from(t), G.default, V.Z);
    return (0, i.jsxs)("div", {
        className: en.customizationContainer,
        children: [
            (0, i.jsx)(T.B, {
                className: en.iconSelector,
                channel: null,
                previewIcon: r,
                onIconChange: l,
                onIconRemove: a,
                analyticsLocations: s,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(p.Text, {
                className: en.channelNameLabel,
                variant: "text-sm/medium",
                color: "header-muted",
                children: et.intl.string(et.t.YynaLK),
            }),
            (0, i.jsx)(p.oil, {
                "aria-label": et.intl.string(et.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function ef(e) {
    var { channel: t } = e,
        n = ea(e, ["channel"]);
    let r = (0, u.cj)([U.Z, L.Z, H.Z], () => {
        let e;
        return (
            null != t && null != (e = L.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            el(ei({}, U.Z.getState()), {
                invite: e,
                hideDiscriminator: H.Z.hidePersonalInformation,
                hideInstantInvites: H.Z.hideInstantInvites,
            })
        );
    });
    return (0, i.jsx)(ed, ei({ channel: t }, n, r));
}
function eh(e) {
    let { channel: t, location: n, subscribeToGlobalHotkey: r, initialPopoutOpen: a } = e,
        [o, s] = l.useState(null != a && a),
        c = (0, Z.a)(n),
        u = "channel-invite-modal-".concat(null == t ? void 0 : t.id),
        d = (0, p.VXO)(u),
        f = l.useCallback(
            () =>
                (0, p.ZDy)(
                    () =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(
                                ef,
                                el(ei({}, e), {
                                    channel: t,
                                    inBornThisNamedExperiment: c,
                                }),
                            ),
                        ),
                    { modalKey: u },
                ),
            [t, u, c],
        ),
        h = l.useCallback(() => (c ? (d ? (0, p.Mr3)(u) : f()) : s((e) => !e)), [c, d, u, f, s]);
    return (
        l.useEffect(
            () => (
                r && q.S.subscribe(ee.CkL.TOGGLE_DM_CREATE, h),
                () => {
                    q.S.unsubscribe(ee.CkL.TOGGLE_DM_CREATE, h);
                }
            ),
            [r, h, c],
        ),
        (0, O.ZP)(() => {
            (0, M._)();
        }),
        {
            showModal: f,
            renderPopout: (e) =>
                (0, i.jsx)(
                    ef,
                    el(ei({}, e), {
                        onClose: e.closePopout,
                        channel: t,
                        inBornThisNamedExperiment: c,
                    }),
                ),
            toggleVisible: h,
            popoutOpen: o,
            setPopoutOpen: s,
            inBornThisNamedExperiment: c,
        }
    );
}
function em(e) {
    var t, n;
    let {
            channel: r,
            iconClassName: a,
            className: o,
            icon: s,
            tooltip: c,
            tooltipPosition: d = "bottom",
            popoutPosition: f = "bottom",
            popoutAlign: h = "right",
            subscribeToGlobalHotkey: m = !1,
            location: g,
        } = e,
        b = l.useRef(null),
        _ = null != s ? s : null == r ? p.kL_ : p.ejJ,
        {
            showModal: y,
            renderPopout: C,
            toggleVisible: v,
            popoutOpen: O,
            setPopoutOpen: x,
            inBornThisNamedExperiment: E,
        } = eh({
            initialPopoutOpen: null != r && r.isGroupDM() && 0 === r.recipients.length,
            channel: r,
            location: g,
            subscribeToGlobalHotkey: m,
        }),
        j = (0, u.e7)([G.default], () => G.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return (null != (t = null == j ? void 0 : j.bot) && t) || (null != (n = null == j ? void 0 : j.isProvisional) && n)
        ? null
        : E
          ? (0, i.jsx)(Q.ZP.Icon, {
                ref: b,
                onClick: y,
                icon: _,
                className: o,
                iconClassName: a,
                tooltip: c,
                tooltipPosition: d,
            })
          : (0, i.jsx)(p.yRy, {
                targetElementRef: b,
                renderPopout: C,
                position: f,
                shouldShow: O,
                nudgeAlignIntoViewport: !0,
                autoInvert: !0,
                align: h,
                onRequestClose: () => x(!1),
                animation: p.yRy.Animation.NONE,
                ignoreModalClicks: !0,
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(
                        Q.ZP.Icon,
                        el(ei({}, e), {
                            ref: b,
                            onClick: v,
                            icon: _,
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
            popoutAlign: r = "right",
            fullWidth: a = !1,
            text: o,
            icon: s,
            subscribeToGlobalHotkey: c = !1,
        } = e,
        u = ea(e, ["channel", "popoutPosition", "popoutAlign", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]);
    let d = l.useRef(null),
        {
            showModal: f,
            renderPopout: h,
            toggleVisible: m,
            popoutOpen: g,
            setPopoutOpen: b,
            inBornThisNamedExperiment: _,
        } = eh({
            initialPopoutOpen: !1,
            channel: t,
            location: "PrivateChannelRecipientsInviteTextButton",
            subscribeToGlobalHotkey: c,
        });
    return _
        ? (0, i.jsx)(
              p.Button,
              el(ei({}, u), {
                  onClick: f,
                  variant: "primary",
                  buttonRef: d,
                  text: o,
                  "aria-label": o,
                  icon: s,
                  fullWidth: a,
              }),
          )
        : (0, i.jsx)(p.yRy, {
              targetElementRef: d,
              renderPopout: h,
              position: n,
              shouldShow: g,
              nudgeAlignIntoViewport: !0,
              autoInvert: !0,
              align: r,
              onRequestClose: () => b(!1),
              animation: p.yRy.Animation.NONE,
              ignoreModalClicks: !0,
              clickTrap: !0,
              children: (e) =>
                  (0, i.jsx)(
                      p.Button,
                      el(ei({}, e, u), {
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
    let t = e_(e);
    return new Set(
        (0, a.chain)(k.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, D.bc)(e.type))
            .filter((e) => e_(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function e_(e) {
    return JSON.stringify(e.sort());
}
er(ed, "contextType", A.ZP);
