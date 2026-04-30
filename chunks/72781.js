"use strict";
n.d(t, { Jz: () => eL, Ay: () => ew, NE: () => eM }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(989349),
    o = n.n(a),
    l = n(189213),
    u = n(17928),
    c = n(862482),
    d = n(939249),
    _ = n(97808),
    f = n(778712),
    h = n(834730),
    p = n(821609),
    E = n(292666),
    m = n(187322),
    g = n(452027),
    A = n(109802),
    I = n(231723),
    T = n(192308),
    S = n(888366),
    N = n(241541),
    y = n(228366),
    C = n(387755),
    v = n(308528),
    O = n(711950),
    R = n(376728);
let b = {
    search(e, t) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var D = n(717398),
    L = n(684136),
    w = n(964486),
    M = n(793574),
    P = n(95561),
    x = n(688810),
    U = n(571694),
    k = n(47167),
    G = n(915089),
    F = n(66442),
    V = n(279208),
    B = n(267102),
    H = n(976860),
    j = n(219271),
    Y = n(427358),
    W = n(95701),
    K = n(734057),
    z = n(958590),
    $ = n(584777),
    q = n(763827),
    Z = n(222823),
    X = n(994500),
    Q = n(351906),
    J = n(287809),
    ee = n(174459),
    et = n(957565),
    en = n(625494),
    ei = n(403362),
    er = n(935208),
    es = n(427262),
    ea = n(240921);
let eo = (0, ea.Ay)({
        kind: "user",
        name: "2026-04-add-to-dm-updates",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    el = (0, ea.Ay)({
        kind: "user",
        name: "2026-02-longer-group-dm-invites",
        defaultConfig: { inviteMaxAgeSeconds: 86400 },
        variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
    });
var eu = n(58736),
    ec = n(503698),
    ed = n.n(ec),
    e_ = n(837381),
    ef = n(658675),
    eh = n(297413),
    ep = n(966327),
    eE = n(235986),
    em = n(290863),
    eg = n(973081);
function eA(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: r,
            comparator: s,
            selected: a,
            checked: o,
            disabled: l = !1,
            onClick: c,
            onMouseEnter: _,
            "aria-setsize": f,
            "aria-posinset": p,
        } = e,
        E = (0, u.bG)([em.A], () => em.A.getStatus(t.id)),
        m = (0, e_.rm)(String(t.id));
    return (0, i.jsx)(d.D, {
        id: `user-row-${n}`,
        className: ed()(eg.Se, { [eg.r9]: l }),
        onClick: () => {
            c?.(t.id);
        },
        onMouseEnter: () => {
            _?.(n);
        },
        ...m,
        role: "checkbox",
        "aria-checked": o,
        "aria-disabled": l,
        "aria-setsize": f,
        "aria-posinset": p,
        children: (0, i.jsxs)(eE.A, {
            align: eE.A.Align.CENTER,
            className: ed()(eg.Bc, { [eg.oz]: a }),
            children: [
                (0, i.jsx)(ep.A, { user: t, status: E, className: eg.my }),
                (0, i.jsxs)("div", {
                    className: eg.YW,
                    children: [
                        (0, i.jsx)(h.E, {
                            tag: "strong",
                            className: eg.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? es.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : es.Ay.getName(t),
                        }),
                        (0, i.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (0, i.jsx)(eh.A, {
                                user: t,
                                hideDiscriminator: r,
                                className: eg.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(ef.P, { checked: o, disabled: l }),
            ],
        }),
    });
}
var eI = n(652215),
    eT = n(650583),
    eS = n(375708),
    eN = n(426057);
let ey = (0, G.Ld)(),
    eC = (e) => {
        let { channel: t, onClose: n } = e,
            r = (0, k.Ay)(t) ?? "",
            s = (0, u.bG)([Z.Ay], () => Z.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(d.D, {
            onClick: () => {
                (0, H.uh)(eI.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eN.us,
                children: [
                    (0, i.jsx)(_.eu, { src: (0, U.Y)(t), size: f._3.SIZE_24, "aria-label": r }),
                    (0, i.jsx)("span", { className: eN.J2, children: r }),
                    (0, i.jsx)("span", { className: eN.Pd, children: o()(er.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    ev = (e) => {
        let { onConfirm: t, channelIds: n, ...r } = e,
            s = (0, u.yK)([K.A], () => Array.from(n).map(K.A.getChannel), [n]);
        return (0, i.jsx)(l.Modal, {
            title: eS.intl.string(eS.t.uFHxNd),
            subtitle: eS.intl.string(eS.t.rIsSqE),
            actions: [
                { variant: "secondary", text: eS.intl.string(eS.t["ETE/oC"]), onClick: r.onClose },
                {
                    variant: "primary",
                    text: eS.intl.string(eS.t.KCNNJu),
                    onClick: () => {
                        t(), r.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(h.E, {
                variant: "text-md/normal",
                className: eN.Jv,
                children: eS.intl.string(eS.t.cjE7wH),
            }),
            ...r,
            children: s
                .filter(ei.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return er.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(eC, { onClose: r.onClose, channel: e }, e.id)),
        });
    };
class eO extends r.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = B.Ay;
    copyTimeout;
    scrollerRef = r.createRef();
    searchBarRef = r.createRef();
    _mobileCloseRef = r.createRef();
    _searchCounter = 0;
    _existingTimeout = null;
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
            { entryPointType: t, entryPointSource: n }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        y.h.wait(() => b.open(e?.id));
        let t = (0, P.dI)(e);
        ee.default.track(eI.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            en._.subscribe(eI.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.subscribe(eI.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        en._.unsubscribe(eI.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.unsubscribe(eI.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            y.h.wait(() => b.close());
    }
    scrollPageUp = () => {
        this.scrollerRef.current?.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        this.scrollerRef.current?.scrollPageDown({ animate: !0 });
    };
    isNotFriends() {
        let { channel: e, isStaffOnlyDM: t } = this.props;
        if (null == e || !e.isDM()) return !1;
        let n = e.getRecipientId();
        if (null == n) throw Error("no recipient in DM");
        return !X.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = (function (e) {
            let { location: t } = e,
                { inviteMaxAgeSeconds: n } = el.getConfig({ location: t });
            return n;
        })({ location: "5326c5_1" });
        R.Ay.createInvite(e.id, { max_age: t }, eI.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = J.default.getCurrentUser();
        return null != t && t.isStaff() ? eI.$aF : null != e && e.userLimit > 0 ? e.userLimit : eI.wLU;
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
            r = t.size > 1 || null != e ? eS.intl.string(eS.t["h1/FMu"]) : eS.intl.string(eS.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)(p.$, {
            variant: "primary",
            text: eS.intl.string(eS.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends()) return eS.intl.string(eS.t.Xjlbvs);
        if (this.isPartyFull()) return eS.intl.string(eS.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e ? eS.intl.string(eS.t.jD1qzM) : eS.intl.string(e.isMultiUserDM() ? eS.t.AQAPts : eS.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = J.default.getUser(t),
                        n = null != e ? e.username : "";
                    return eS.intl.format(eS.t["eg+R9x"], { username: n });
                }
            }
            return eS.intl.string(eS.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = J.default.getUser(t),
                i = null != n ? n.username : "";
            return eS.intl.format(eS.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? eS.intl.formatToPlainString(eS.t.xYr004, { number: this.getMaxParticipants() })
            : eS.intl.formatToPlainString(eS.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: r } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let a = t;
        switch (e.key) {
            case eT.dh.BACKSPACE:
                (null == r || 0 === r.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eT.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= i.length && (a = 0), this.handleSelectionChange(a);
                break;
            case eT.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = i.length - 1), this.handleSelectionChange(a);
                break;
            case eT.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let r = [];
        n.forEach((e) => {
            let t = J.default.getUser(e);
            null != t && r.push({ id: e, label: es.Ay.getName(t) });
        });
        let { results: s, selectedRow: a } = this.props,
            o = s.length > 0;
        return (0, i.jsxs)("div", {
            className: eN.ON,
            children: [
                (0, i.jsx)(E.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? eS.intl.string(eS.t.K5e6bn) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: r, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": ey,
                    "aria-expanded": o,
                    "aria-activedescendant": o ? `user-row-${a}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eN.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(m.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(L.A, { className: eN.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: eS.intl.format(eS.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (!(!e || this.isNotFriends() || this.isPartyFull()))
            return 0 === t.length
                ? {
                      sections: [1],
                      sectionHeight: 0,
                      rowHeight: 32,
                      renderRow: () =>
                          (0, i.jsx)("div", {
                              className: eN.wV,
                              children: (0, i.jsx)(h.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eS.intl.string(eS.t.z3yXsY),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: eN.XG,
                      innerClassName: eN.bv,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      onScroll: this.handleScroll,
                      paddingTop: 0,
                      paddingBottom: 14,
                      fade: !0,
                      role: void 0,
                      innerRole: "group",
                      innerId: ey,
                  };
    }
    getRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    renderRow = (e) => {
        let { section: t, row: n } = e;
        if (t > 0) return null;
        let { results: r, selectedUsers: s, selectedRow: a, hideDiscriminator: o, channel: l } = this.props,
            u = r[n];
        if (null == u) return null;
        let { user: c, comparator: d } = u,
            _ = s.has(c.id) || l?.recipients.includes(c.id),
            f = (!_ && 0 >= this.getRemaining()) || l?.recipients.includes(c.id);
        return (0, i.jsx)(
            eA,
            {
                row: n,
                user: c,
                hideDiscriminator: o,
                comparator: d,
                checked: _,
                disabled: f,
                selected: n === a,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": r.length,
            },
            c.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = null != t ? (0, V.A)(t.code) : "",
            a = s.length > 0;
        return (0, i.jsx)(g.D, {
            label: eS.intl.string(eS.t.t3O2BR),
            helperText: s.length > 0 ? eS.intl.format(eS.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(A.e, {
                supportsCopy: et.p5,
                placeholder: (0, V.A)(eS.intl.string(eS.t.lPVBqP)),
                value: a ? (n ? eS.intl.string(eS.t["6HzNgZ"]) : s) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: a ? (r ? eS.intl.string(eS.t.q30c5i) : eS.intl.string(eS.t.OpuAlK)) : eS.intl.string(eS.t.qzxqUf),
                mode: r ? A.q.SUCCESS : A.q.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(s) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: r } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = J.default.getUser(e),
                i = null != n && X.A.getRelationshipType(n.id) === eI.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? eS.intl.string(eS.t.xMH6vD) : eS.intl.string(eS.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: eS.intl.string(eS.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && r))
            return {
                actionBarInput:
                    null != t || n.size > 1
                        ? (0, i.jsx)(eR, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: eS.intl.string(eS.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let s = this.getInviteLinkFooter();
        return null != s ? { actionBarInput: s } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: r } = this.getFooterProps();
        return (0, i.jsx)(l.Modal, {
            transitionState: e ?? I.ip.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: this.renderSearchBar() ?? void 0,
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: r ?? [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            D.A.sendRequest({
                discordTag: es.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        b.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) b.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        b.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, P.dI)(t);
        b.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ee.default.track(eI.HAw.SEARCH_USER_LIST_STARTED, {
                    ...n,
                    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                    search_query_length: e.length,
                }),
                    this._searchCounter++;
            }, 500));
    };
    handleRemoveTag = (e) => {
        let t = Array.from(this.props.selectedUsers);
        b.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            b.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? b.removeUser(e)
                : this.getRemaining() > 0 && (b.addUser(e), n.length > 0 && (b.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        O.A.transitionToSection(eI.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = Y.A.getUserAffinity(e);
                return t?.communicationProbability ?? -1;
            }),
        };
    }
    handleChannelNameChange = (e) => {
        this.setState({ newChannelName: e });
    };
    handleIconChange = (e) => {
        let { imageUri: t } = e;
        this.setState({ previewIcon: t });
    };
    handleIconRemove = () => {
        this.setState({ previewIcon: null });
    };
    updateGDM = (e, t) => {
        let n = {};
        "" !== this.state.newChannelName && (n.name = this.state.newChannelName),
            null != this.state.previewIcon && (n.icon = this.state.previewIcon),
            (null != n.name || null != n.icon) && v.A.updateChannel(e, n, t),
            ee.default.track(eI.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: eI.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, P.dI)(n),
            r = !0;
        1 === e.length && (r = null == v.A._openCachedDMChannel(e[0])),
            ee.default.track(eI.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: r,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            }),
            v.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, M.A.NEW_GROUP_DM_INVITE_MODAL);
            });
    };
    pushToExistingDM = (e, t) => {
        let { addToDMUpdatesEnabled: n } = this.props,
            i = this._searchCounter,
            r = (0, P.dI)(e),
            s = q.A.getChannelId() === e.id;
        v.A.addRecipients(e.id, t, eI.ThZ.ADD_FRIENDS_TO_DM).then((i) => {
            if ((this.props.onComplete?.(i), n && this.updateGDM(i, eI.ThZ.ADD_FRIENDS_TO_DM), s)) {
                if (e.isDM() && i !== e.id) return void C.A.call(i, !1, !0);
                C.A.ring(i, t, "dm_invite");
            }
        }),
            ee.default.track(eI.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...r,
                is_new_dm: !0,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: t,
                num_searches: i,
                affinity_score: this._getUserAffinities(t).affinities,
            });
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            r = Array.from(t);
        if (null != e) {
            let t = eP(Array.from(new Set([...e.recipients, ...r])));
            t.size > 0
                ? (0, T.openModal)(
                      (n) => (0, i.jsx)(ev, { ...n, onConfirm: () => this.pushToExistingDM(e, r), channelIds: t }),
                      {},
                      (0, T.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, r);
        } else {
            let e = eP(r);
            r.length > 1 && e.size > 0
                ? (0, T.openModal)(
                      (t) => (0, i.jsx)(ev, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
                      {},
                      (0, T.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(r);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, et.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            ee.default.track(eI.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: eI.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eR(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: s, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: l } = (0, x.Ay)(M.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, k.Jo)(Array.from(t), J.default, X.A);
    return (0, i.jsxs)("div", {
        className: eN.zj,
        children: [
            (0, i.jsx)(F.X, {
                className: eN.r9,
                channel: null,
                previewIcon: r,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: l,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(h.E, {
                className: eN.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: eS.intl.string(eS.t.YynaLK),
            }),
            (0, i.jsx)(E.k, {
                "aria-label": eS.intl.string(eS.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function eb(e) {
    let { channel: t, onComplete: n, ...r } = e,
        s = (0, u.cf)([$.A, z.A, Q.A], () => {
            let e;
            return (
                null != t && null != (e = z.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...$.A.getState(),
                    invite: e,
                    hideDiscriminator: Q.A.hidePersonalInformation,
                    hideInstantInvites: Q.A.hideInstantInvites,
                }
            );
        }),
        a = (0, u.bG)(
            [J.default],
            () =>
                !!J.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => J.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: o } = eo.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eO, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && o),
        ...r,
        ...s,
    });
}
function eD(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, T.useHasModalOpen)(s),
        o = r.useCallback(
            () =>
                (0, T.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eb, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        l = r.useCallback(() => (a ? (0, T.closeModal)(s) : o()), [a, s, o]);
    return (
        r.useEffect(
            () => (
                n && en._.subscribe(eI.jej.TOGGLE_DM_CREATE, l),
                () => {
                    en._.unsubscribe(eI.jej.TOGGLE_DM_CREATE, l);
                }
            ),
            [n, l],
        ),
        (0, w.Ay)(() => {
            (0, j.u)();
        }),
        { showModal: o, toggleVisible: l }
    );
}
function eL(e) {
    let { channel: t, onComplete: n } = e,
        r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, T.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eb, { ...e, channel: t, onComplete: n })), {
        modalKey: r,
    });
}
function ew(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: a,
            tooltip: o,
            tooltipPosition: l = "bottom",
            subscribeToGlobalHotkey: c = !1,
        } = e,
        d = r.useRef(null),
        _ = a ?? (null == t ? S.g : N.D),
        { showModal: f } = eD({ channel: t, subscribeToGlobalHotkey: c }),
        h = (0, u.bG)([J.default], () => J.default.getUser(t?.getRecipientId()));
    return h?.bot || h?.isProvisional
        ? null
        : (0, i.jsx)(eu.Ay.Icon, {
              ref: d,
              onClick: f,
              icon: _,
              className: s,
              iconClassName: n,
              tooltip: o,
              tooltipPosition: l,
          });
}
function eM(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: o = !1, ...l } = e,
        u = r.useRef(null),
        { showModal: c } = eD({ channel: t, subscribeToGlobalHotkey: o });
    return (0, i.jsx)(p.$, {
        ...l,
        onClick: c,
        variant: "primary",
        buttonRef: u,
        text: s,
        "aria-label": s,
        icon: a,
        fullWidth: n,
    });
}
function eP(e) {
    let t = ex(e);
    return new Set(
        (0, s.chain)(K.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, W.MK)(e.type))
            .filter((e) => ex(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function ex(e) {
    return JSON.stringify(e.sort());
}
