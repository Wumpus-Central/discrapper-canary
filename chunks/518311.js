n.d(t, {
    Z: () => ef,
    l: () => eh,
}),
    n(642613),
    n(415506),
    n(539854),
    n(388685),
    n(35282),
    n(49124);
var r,
    i = n(54381),
    l = n(473749),
    a = n(392711),
    o = n(913527),
    s = n.n(o),
    c = n(793030),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    f = n(570140),
    h = n(26151),
    g = n(493683),
    m = n(529103),
    b = n(447543),
    y = n(708690),
    v = n(194359),
    O = n(425493),
    j = n(493773),
    x = n(100527),
    C = n(367907),
    E = n(906732),
    S = n(43267),
    _ = n(933557),
    I = n(313201),
    P = n(912114),
    Z = n(366980),
    N = n(728285),
    T = n(703656),
    A = n(93127),
    w = n(752048),
    R = n(131704),
    D = n(592125),
    M = n(341165),
    k = n(544610),
    L = n(19780),
    U = n(306680),
    G = n(699516),
    B = n(246946),
    F = n(594174),
    H = n(626135),
    V = n(572004),
    z = n(585483),
    W = n(823379),
    K = n(709054),
    Y = n(51144),
    q = n(73752),
    X = n(665149),
    Q = n(575464),
    J = n(981631),
    $ = n(295907),
    ee = n(388032),
    et = n(176260);
function en(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
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
function el(e, t) {
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
let ea = (0, I.hQ)(),
    eo = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            l = null != (t = (0, _.ZP)(n)) ? t : "",
            a = (0, u.e7)([U.ZP], () => {
                var e;
                return null != (e = U.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, i.jsx)(p.P3F, {
            onClick: () => {
                (0, T.XU)(J.ME, n.id), r();
            },
            children: (0, i.jsxs)("div", {
                className: et.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(p.qEK, {
                        src: (0, S.x)(n),
                        size: p.EFr.SIZE_24,
                        "aria-label": l,
                    }),
                    (0, i.jsx)("span", {
                        className: et.confirmChannelName,
                        children: l,
                    }),
                    (0, i.jsx)("span", {
                        className: et.lastActiveTimestamp,
                        children: s()(K.default.extractTimestamp(a)).fromNow(),
                    }),
                ],
            }),
        });
    },
    es = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = el(e, ["onConfirm", "channelIds"]);
        let l = (0, u.Wu)([D.Z], () => Array.from(n).map(D.Z.getChannel), [n]);
        return (0, i.jsx)(
            c.Modal,
            ei(
                er(
                    {
                        title: ee.intl.string(ee.t.uFHxNd),
                        subtitle: ee.intl.string(ee.t.rIsSqE),
                        actions: [
                            {
                                variant: "secondary",
                                text: ee.intl.string(ee.t["ETE/oC"]),
                                onClick: r.onClose,
                            },
                            {
                                variant: "primary",
                                text: ee.intl.string(ee.t.KCNNJu),
                                onClick: () => {
                                    t(), r.onClose();
                                },
                            },
                        ],
                        input: (0, i.jsx)(p.Text, {
                            variant: "text-md/normal",
                            className: et.selectExistingFormHeader,
                            children: ee.intl.string(ee.t.cjE7wH),
                        }),
                    },
                    r,
                ),
                {
                    children: l
                        .filter(W.lm)
                        .sort((e, t) => {
                            var n, r;
                            let i = null != (n = e.lastMessageId) ? n : e.id,
                                l = null != (r = t.lastMessageId) ? r : t.id;
                            return K.default.compare(l, i);
                        })
                        .map((e) =>
                            (0, i.jsx)(
                                eo,
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
class ec extends (r = l.PureComponent) {
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
        f.Z.wait(() => y.Z.open(null == e ? void 0 : e.id));
        let t = (0, C.v_)(e);
        H.default.track(
            J.rMx.OPEN_POPOUT,
            ei(er({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends(),
            }),
        ),
            z.S.subscribe(J.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            z.S.subscribe(J.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        z.S.unsubscribe(J.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            z.S.unsubscribe(J.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            f.Z.wait(() => y.Z.close());
    }
    isNotFriends() {
        let { channel: e, isStaffOnlyDM: t } = this.props;
        if (null == e || !e.isDM()) return !1;
        let n = e.getRecipientId();
        if (null == n) throw Error("no recipient in DM");
        return !G.Z.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = q.Z.getCurrentConfig({ location: "5326c5_1" }, { autoTrackExposure: !1 });
        b.ZP.createInvite(e.id, { max_age: t }, J.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = F.default.getCurrentUser();
        return null != t && t.isStaff() ? J.p3w : null != e && e.userLimit > 0 ? e.userLimit : J.pAY;
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
            i = t.size > 1 || null != e ? ee.intl.string(ee.t.ZGMNA8) : ee.intl.string(ee.t["6Urw1t"]);
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
        return (0, i.jsx)(p.Button, {
            variant: "primary",
            text: ee.intl.string(ee.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        return this.isNotFriends()
            ? ee.intl.string(ee.t.Xjlbvs)
            : this.isPartyFull()
              ? ee.intl.string(ee.t.OtTQDz)
              : ee.intl.string(ee.t.CdNhGX);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) return ee.intl.string(ee.t["7orY6K"]);
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = F.default.getUser(t),
                r = null != n ? n.username : "";
            return ee.intl.format(ee.t["eg+R9x"], { username: r });
        }
        let n = this.getRemaining();
        return n <= 0
            ? ee.intl.formatToPlainString(ee.t.xYr004, { number: this.getMaxParticipants() })
            : ee.intl.formatToPlainString(ee.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: r, query: i } = this.props,
            { current: l } = this.searchBarRef;
        if (null == l) return;
        let a = t;
        switch (e.key) {
            case $.vn.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case $.vn.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= r.length && (a = 0), this.handleSelectionChange(a);
                break;
            case $.vn.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = r.length - 1), this.handleSelectionChange(a);
                break;
            case $.vn.ENTER:
                e.preventDefault(), e.stopPropagation(), r.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let r = [];
        return (
            n.forEach((e) => {
                let t = F.default.getUser(e);
                null != t &&
                    r.push({
                        id: e,
                        label: Y.ZP.getName(t),
                    });
            }),
            (0, i.jsxs)("div", {
                className: et.searchBar,
                children: [
                    (0, i.jsx)(p.oil, {
                        inputRef: this.searchBarRef,
                        autoFocus: !0,
                        fullWidth: !0,
                        placeholder: 0 === n.size ? ee.intl.string(ee.t.Wxnb6q) : "",
                        disabled: this.isPartyFull(),
                        value: e,
                        leading: {
                            type: "tags",
                            items: r,
                            onRemove: this.handleRemoveUser,
                        },
                        onChange: this.handleQueryChange,
                        onKeyDown: this.handleKeyDown.bind(this),
                    }),
                    this.renderAddUsersButton(),
                ],
            })
        );
    }
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: ee.intl.format(ee.t.xYr004, { number: this.getMaxParticipants() }) })
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
                              className: et.noResults,
                              children: (0, i.jsx)(p.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ee.intl.string(ee.t.SV4DJ1),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: et.scroller,
                      innerClassName: et.scrollerInner,
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
                      innerId: ea,
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
        let l = null != t ? (0, Z.Z)(t.code) : "",
            a = l.length > 0;
        return (0, i.jsx)(p.gNt, {
            label: ee.intl.string(ee.t.t3O2BR),
            helperText: l.length > 0 ? ee.intl.format(ee.t.ZVdJMy, { numHours: "".concat(24) }) : void 0,
            children: (0, i.jsx)(p.kO8, {
                supportsCopy: V.wS,
                placeholder: (0, Z.Z)(ee.intl.string(ee.t.lPVBqP)),
                value: a ? (n ? ee.intl.string(ee.t["6HzNgZ"]) : l) : "",
                buttonColor: d.zx.Colors.BRAND,
                text: a ? (r ? ee.intl.string(ee.t.q30c5i) : ee.intl.string(ee.t.OpuAlK)) : ee.intl.string(ee.t.qzxqUf),
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
            let n = F.default.getUser(e),
                r = null != n && G.Z.getRelationshipType(n.id) === J.OGo.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: r ? ee.intl.string(ee.t.xMH6vD) : ee.intl.string(ee.t["PMsq/b"]),
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
                        text: ee.intl.string(ee.t.w5uwoI),
                        onClick: this.handleAddFriendNavigation,
                    },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, i.jsx)(eu, {
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
                        text: ee.intl.string(ee.t["ETE/oC"]),
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
        let { transitionState: t, onClose: n } = this.props,
            { actionBarInput: r, actions: l } = this.getFooterProps();
        return (0, i.jsx)(c.Modal, {
            transitionState: null != t ? t : p.Dvm.ENTERED,
            onClose: async () => await n(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: null != (e = this.renderSearchBar()) ? e : void 0,
            actionBarInput: r,
            listProps: this.getListProps(),
            actions: null != l ? l : [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            v.Z.sendRequest({
                discordTag: Y.ZP.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = w.Z.getUserAffinity(e);
                return null != (t = null == n ? void 0 : n.communicationProbability) ? t : -1;
            }),
        };
    }
    constructor(...e) {
        super(...e),
            en(this, "state", {
                separator: !1,
                copied: !1,
                newChannelName: "",
                previewIcon: void 0,
            }),
            en(this, "copyTimeout", void 0),
            en(this, "scrollerRef", l.createRef()),
            en(this, "searchBarRef", l.createRef()),
            en(this, "_mobileCloseRef", l.createRef()),
            en(this, "_searchCounter", 0),
            en(this, "_existingTimeout", null),
            en(this, "scrollPageUp", () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageUp({ animate: !0 });
            }),
            en(this, "scrollPageDown", () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageDown({ animate: !0 });
            }),
            en(this, "renderMobileCloseButton", () =>
                (0, i.jsx)("div", {
                    className: et.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(p.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(O.Z, {
                                className: et.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: "ESC",
                            }),
                        }),
                    }),
                }),
            ),
            en(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return 48 * (null != n[t]);
            }),
            en(this, "renderRow", (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: l, selectedRow: a, hideDiscriminator: o } = this.props,
                    s = r[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id),
                    p = !d && 0 >= this.getRemaining();
                return (0, i.jsx)(
                    Q.Z,
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
                    },
                    c.id,
                );
            }),
            en(this, "forceFocus", () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            en(this, "focusResult", (e) => {
                y.Z.select(e);
            }),
            en(this, "handleSelect", (e) => {
                let { results: t, channel: n } = this.props;
                null == e ? y.Z.clear(null == n ? void 0 : n.id) : null != t && this.handleClick(t[e].user.id);
            }),
            en(this, "handleSelectionChange", (e) => {
                y.Z.select(e);
                let t = this.scrollerRef.current;
                null != t &&
                    t.scrollToIndex({
                        section: 0,
                        row: e,
                        padding: 8,
                    });
            }),
            en(this, "handleQueryChange", (e) => {
                let { channel: t } = this.props,
                    n = (0, C.v_)(t);
                y.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        H.default.track(
                            J.rMx.SEARCH_USER_LIST_STARTED,
                            ei(er({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length,
                            }),
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            en(this, "handleRemoveTag", (e) => {
                let t = Array.from(this.props.selectedUsers);
                y.Z.removeUser(t[e]);
            }),
            en(this, "handleRemoveUser", (e) => {
                e.forEach((e) => {
                    y.Z.removeUser(e);
                }),
                    this.forceFocus();
            }),
            en(this, "handleClick", (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                t.has(e)
                    ? y.Z.removeUser(e)
                    : this.getRemaining() > 0 && (y.Z.addUser(e), n.length > 0 && y.Z.clear(null == r ? void 0 : r.id)),
                    this.forceFocus();
            }),
            en(this, "handleAddFriendNavigation", () => {
                m.Z.transitionToSection(J.pJs.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
            }),
            en(this, "handleScroll", () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            en(this, "handleChannelNameChange", (e) => {
                this.setState({ newChannelName: e });
            }),
            en(this, "handleIconChange", (e) => {
                let { imageUri: t } = e;
                this.setState({ previewIcon: t });
            }),
            en(this, "handleIconRemove", () => {
                this.setState({ previewIcon: null });
            }),
            en(this, "createNewDM", (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, C.v_)(n),
                    i = !0;
                1 === e.length && (i = null == g.Z._openCachedDMChannel(e[0])),
                    H.default.track(
                        J.rMx.CREATE_DM_USER_LIST_CLICKED,
                        ei(er({}, r), {
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
                    g.Z.openPrivateChannel({
                        recipientIds: e,
                        location: "New Group DM",
                    }).then((e) => {
                        let t = {};
                        "" !== this.state.newChannelName && (t.name = this.state.newChannelName),
                            null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                            (null != t.name || null != t.icon) &&
                                g.Z.updateChannel(e, t, x.Z.NEW_GROUP_DM_INVITE_MODAL),
                            H.default.track(J.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: J.d4z.GROUP_DM,
                                location: x.Z.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: "" !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon,
                            });
                    });
            }),
            en(this, "pushToExistingDM", (e, t) => {
                let n = this._searchCounter,
                    r = (0, C.v_)(e),
                    i = L.Z.getChannelId() === e.id;
                g.Z.addRecipients(e.id, t, J.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) return void h.Z.call(n, !1, !0);
                        h.Z.ring(n, t, "dm_invite");
                    }
                }),
                    H.default.track(
                        J.rMx.CREATE_DM_USER_LIST_CLICKED,
                        ei(er({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities,
                        }),
                    );
            }),
            en(this, "handleInviteUsers", () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = eg(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, p.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      es,
                                      ei(er({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t,
                                      }),
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext),
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = eg(r);
                    r.length > 1 && e.size > 0
                        ? (0, p.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      es,
                                      ei(er({}, t), {
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
            en(this, "handleCopyInvite", (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, V.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    H.default.track(J.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: J.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null,
                    });
            }),
            en(this, "scrollToCounterSearchBarHeightChange", (e) => {
                var t, n;
                let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != r && (r.scrollTop = Math.max(0, r.scrollTop + e));
            });
    }
}
function eu(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: l, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: s } = (0, E.ZP)(x.Z.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, _.pT)(Array.from(t), F.default, G.Z);
    return (0, i.jsxs)("div", {
        className: et.customizationContainer,
        children: [
            (0, i.jsx)(P.B, {
                className: et.iconSelector,
                channel: null,
                previewIcon: r,
                onIconChange: l,
                onIconRemove: a,
                analyticsLocations: s,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(p.Text, {
                className: et.channelNameLabel,
                variant: "text-sm/medium",
                color: "text-muted",
                children: ee.intl.string(ee.t.YynaLK),
            }),
            (0, i.jsx)(p.oil, {
                "aria-label": ee.intl.string(ee.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function ed(e) {
    var { channel: t } = e,
        n = el(e, ["channel"]);
    let r = (0, u.cj)([k.Z, M.Z, B.Z], () => {
            let e;
            return (
                null != t && null != (e = M.Z.getInvite(t.id)) && e.isExpired() && (e = null),
                ei(er({}, k.Z.getState()), {
                    invite: e,
                    hideDiscriminator: B.Z.hidePersonalInformation,
                    hideInstantInvites: B.Z.hideInstantInvites,
                })
            );
        }),
        l = (0, u.e7)([F.default], () => {
            var e;
            return (
                !!(null == (e = F.default.getCurrentUser()) ? void 0 : e.isStaff()) &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => {
                    var t;
                    return null == (t = F.default.getUser(e)) ? void 0 : t.isStaff();
                })
            );
        }, [t]);
    return (0, i.jsx)(
        ec,
        er(
            {
                channel: t,
                isStaffOnlyDM: l,
            },
            n,
            r,
        ),
    );
}
function ep(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        r = "channel-invite-modal-".concat(null == t ? void 0 : t.id),
        a = (0, p.VXO)(r),
        o = l.useCallback(
            () =>
                (0, p.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(ed, ei(er({}, e), { channel: t }))), {
                    modalKey: r,
                }),
            [t, r],
        ),
        s = l.useCallback(() => (a ? (0, p.Mr3)(r) : o()), [a, r, o]);
    return (
        l.useEffect(
            () => (
                n && z.S.subscribe(J.CkL.TOGGLE_DM_CREATE, s),
                () => {
                    z.S.unsubscribe(J.CkL.TOGGLE_DM_CREATE, s);
                }
            ),
            [n, s],
        ),
        (0, j.ZP)(() => {
            (0, A._)();
        }),
        {
            showModal: o,
            toggleVisible: s,
        }
    );
}
function ef(e) {
    var t, n;
    let {
            channel: r,
            iconClassName: a,
            className: o,
            icon: s,
            tooltip: c,
            tooltipPosition: d = "bottom",
            subscribeToGlobalHotkey: f = !1,
        } = e,
        h = l.useRef(null),
        g = null != s ? s : null == r ? p.kL_ : p.ejJ,
        { showModal: m } = ep({
            channel: r,
            subscribeToGlobalHotkey: f,
        }),
        b = (0, u.e7)([F.default], () => F.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return (null != (t = null == b ? void 0 : b.bot) && t) || (null != (n = null == b ? void 0 : b.isProvisional) && n)
        ? null
        : (0, i.jsx)(X.ZP.Icon, {
              ref: h,
              onClick: m,
              icon: g,
              className: o,
              iconClassName: a,
              tooltip: c,
              tooltipPosition: d,
          });
}
function eh(e) {
    var { channel: t, fullWidth: n = !1, text: r, icon: a, subscribeToGlobalHotkey: o = !1 } = e,
        s = el(e, ["channel", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]);
    let c = l.useRef(null),
        { showModal: u } = ep({
            channel: t,
            subscribeToGlobalHotkey: o,
        });
    return (0, i.jsx)(
        p.Button,
        ei(er({}, s), {
            onClick: u,
            variant: "primary",
            buttonRef: c,
            text: r,
            "aria-label": r,
            icon: a,
            fullWidth: n,
        }),
    );
}
function eg(e) {
    let t = em(e);
    return new Set(
        (0, a.chain)(D.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, R.bc)(e.type))
            .filter((e) => em(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function em(e) {
    return JSON.stringify(e.sort());
}
en(ec, "contextType", N.ZP);
