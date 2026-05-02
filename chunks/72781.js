n.d(t, { Jz: () => eO, Ay: () => eU, NE: () => eL }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(989349),
    a = n.n(r),
    o = n(189213),
    u = n(17928),
    d = n(862482),
    c = n(939249),
    h = n(97808),
    g = n(778712),
    A = n(834730),
    f = n(821609),
    E = n(292666),
    I = n(187322),
    S = n(452027),
    m = n(109802),
    p = n(231723),
    C = n(192308);
if (21552 == n.j) var _ = n(888366);
if (21552 == n.j) var N = n(241541);
var T = n(228366),
    v = n(387755),
    M = n(308528),
    y = n(711950),
    D = n(376728);
let x = {
    search(e, t) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var R = n(717398),
    O = n(684136),
    U = n(964486),
    L = n(793574),
    w = n(95561),
    P = n(688810),
    G = n(571694),
    j = n(47167),
    b = n(915089),
    F = n(66442),
    V = n(279208),
    k = n(267102),
    H = n(976860),
    B = n(219271),
    Y = n(427358),
    W = n(95701),
    z = n(734057),
    Z = n(958590),
    J = n(584777),
    $ = n(763827),
    K = n(222823),
    X = n(994500),
    Q = n(351906),
    q = n(287809),
    ee = n(174459),
    et = n(957565),
    en = n(625494),
    ei = n(403362),
    el = n(935208),
    es = n(427262),
    er = n(240921);
let ea = (0, er.Ay)({
        kind: "user",
        name: "2026-04-add-to-dm-updates",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eo = (0, er.Ay)({
        kind: "user",
        name: "2026-02-longer-group-dm-invites",
        defaultConfig: { inviteMaxAgeSeconds: 86400 },
        variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
    });
var eu = n(58736),
    ed = n(503698),
    ec = n.n(ed),
    eh = n(837381),
    eg = n(658675),
    eA = n(297413),
    ef = n(966327),
    eE = n(235986),
    eI = n(290863),
    eS = n(973081);
function em(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: s,
            selected: r,
            checked: a,
            disabled: o = !1,
            onClick: d,
            onMouseEnter: h,
            "aria-setsize": g,
            "aria-posinset": f,
        } = e,
        E = (0, u.bG)([eI.A], () => eI.A.getStatus(t.id)),
        I = (0, eh.rm)(String(t.id));
    return (0, i.jsx)(c.D, {
        id: `user-row-${n}`,
        className: ec()(eS.Se, { [eS.r9]: o }),
        onClick: () => {
            d?.(t.id);
        },
        onMouseEnter: () => {
            h?.(n);
        },
        ...I,
        role: "checkbox",
        "aria-checked": a,
        "aria-disabled": o,
        "aria-setsize": g,
        "aria-posinset": f,
        children: (0, i.jsxs)(eE.A, {
            align: eE.A.Align.CENTER,
            className: ec()(eS.Bc, { [eS.oz]: r }),
            children: [
                (0, i.jsx)(ef.A, { user: t, status: E, className: eS.my }),
                (0, i.jsxs)("div", {
                    className: eS.YW,
                    children: [
                        (0, i.jsx)(A.E, {
                            tag: "strong",
                            className: eS.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? es.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : es.Ay.getName(t),
                        }),
                        (0, i.jsx)(A.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (0, i.jsx)(eA.A, {
                                user: t,
                                hideDiscriminator: l,
                                className: eS.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(eg.P, { checked: a, disabled: o }),
            ],
        }),
    });
}
var ep = n(652215),
    eC = n(650583),
    e_ = n(375708),
    eN = n(426057);
let eT = (0, b.Ld)(),
    ev = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, j.Ay)(t) ?? "",
            s = (0, u.bG)([K.Ay], () => K.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(c.D, {
            onClick: () => {
                (0, H.uh)(ep.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eN.us,
                children: [
                    (0, i.jsx)(h.eu, { src: (0, G.Y)(t), size: g._3.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: eN.J2, children: l }),
                    (0, i.jsx)("span", { className: eN.Pd, children: a()(el.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eM = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            s = (0, u.yK)([z.A], () => Array.from(n).map(z.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: e_.intl.string(e_.t.uFHxNd),
            subtitle: e_.intl.string(e_.t.rIsSqE),
            actions: [
                { variant: "secondary", text: e_.intl.string(e_.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: e_.intl.string(e_.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(A.E, {
                variant: "text-md/normal",
                className: eN.Jv,
                children: e_.intl.string(e_.t.cjE7wH),
            }),
            ...l,
            children: s
                .filter(ei.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return el.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(ev, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class ey extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = k.Ay;
    copyTimeout;
    scrollerRef = l.createRef();
    searchBarRef = l.createRef();
    _mobileCloseRef = l.createRef();
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
        T.h.wait(() => x.open(e?.id));
        let t = (0, w.dI)(e);
        ee.default.track(ep.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            en._.subscribe(ep.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.subscribe(ep.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        en._.unsubscribe(ep.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.unsubscribe(ep.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            T.h.wait(() => x.close());
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
                { inviteMaxAgeSeconds: n } = eo.getConfig({ location: t });
            return n;
        })({ location: "5326c5_1" });
        D.Ay.createInvite(e.id, { max_age: t }, ep.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = q.default.getCurrentUser();
        return null != t && t.isStaff() ? ep.$aF : null != e && e.userLimit > 0 ? e.userLimit : ep.wLU;
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
            l = t.size > 1 || null != e ? e_.intl.string(e_.t["h1/FMu"]) : e_.intl.string(e_.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(f.$, {
            variant: "primary",
            text: e_.intl.string(e_.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends()) return e_.intl.string(e_.t.Xjlbvs);
        if (this.isPartyFull()) return e_.intl.string(e_.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e ? e_.intl.string(e_.t.jD1qzM) : e_.intl.string(e.isMultiUserDM() ? e_.t.AQAPts : e_.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = q.default.getUser(t),
                        n = null != e ? e.username : "";
                    return e_.intl.format(e_.t["eg+R9x"], { username: n });
                }
            }
            return e_.intl.string(e_.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = q.default.getUser(t),
                i = null != n ? n.username : "";
            return e_.intl.format(e_.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? e_.intl.formatToPlainString(e_.t.xYr004, { number: this.getMaxParticipants() })
            : e_.intl.formatToPlainString(e_.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: l } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let r = t;
        switch (e.key) {
            case eC.dh.BACKSPACE:
                (null == l || 0 === l.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eC.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++r >= i.length && (r = 0), this.handleSelectionChange(r);
                break;
            case eC.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (r = i.length - 1), this.handleSelectionChange(r);
                break;
            case eC.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > r && this.handleSelect(r);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let l = [];
        n.forEach((e) => {
            let t = q.default.getUser(e);
            null != t && l.push({ id: e, label: es.Ay.getName(t) });
        });
        let { results: s, selectedRow: r } = this.props,
            a = s.length > 0;
        return (0, i.jsxs)("div", {
            className: eN.ON,
            children: [
                (0, i.jsx)(E.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? e_.intl.string(e_.t.K5e6bn) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: l, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eT,
                    "aria-expanded": a,
                    "aria-activedescendant": a ? `user-row-${r}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eN.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(I.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(O.A, { className: eN.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: e_.intl.format(e_.t.xYr004, { number: this.getMaxParticipants() }) })
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
                              children: (0, i.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: e_.intl.string(e_.t.z3yXsY),
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
                      innerId: eT,
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
        let { results: l, selectedUsers: s, selectedRow: r, hideDiscriminator: a, channel: o } = this.props,
            u = l[n];
        if (null == u) return null;
        let { user: d, comparator: c } = u,
            h = s.has(d.id) || o?.recipients.includes(d.id),
            g = (!h && 0 >= this.getRemaining()) || o?.recipients.includes(d.id);
        return (0, i.jsx)(
            em,
            {
                row: n,
                user: d,
                hideDiscriminator: a,
                comparator: c,
                checked: h,
                disabled: g,
                selected: n === r,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": l.length,
            },
            d.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = null != t ? (0, V.A)(t.code) : "",
            r = s.length > 0;
        return (0, i.jsx)(S.D, {
            label: e_.intl.string(e_.t.t3O2BR),
            helperText: s.length > 0 ? e_.intl.format(e_.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(m.e, {
                supportsCopy: et.p5,
                placeholder: (0, V.A)(e_.intl.string(e_.t.lPVBqP)),
                value: r ? (n ? e_.intl.string(e_.t["6HzNgZ"]) : s) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: r ? (l ? e_.intl.string(e_.t.q30c5i) : e_.intl.string(e_.t.OpuAlK)) : e_.intl.string(e_.t.qzxqUf),
                mode: l ? m.q.SUCCESS : m.q.DEFAULT,
                onCopy: () => {
                    r ? this.handleCopyInvite(s) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: l } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = q.default.getUser(e),
                i = null != n && X.A.getRelationshipType(n.id) === ep.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? e_.intl.string(e_.t.xMH6vD) : e_.intl.string(e_.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: e_.intl.string(e_.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && l))
            return {
                actionBarInput:
                    null != t || n.size > 1
                        ? (0, i.jsx)(eD, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: e_.intl.string(e_.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let s = this.getInviteLinkFooter();
        return null != s ? { actionBarInput: s } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? p.ip.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: this.renderSearchBar() ?? void 0,
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: l ?? [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            R.A.sendRequest({
                discordTag: es.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        x.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) x.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        x.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, w.dI)(t);
        x.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ee.default.track(ep.HAw.SEARCH_USER_LIST_STARTED, {
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
        x.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            x.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? x.removeUser(e)
                : this.getRemaining() > 0 && (x.addUser(e), n.length > 0 && (x.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        y.A.transitionToSection(ep.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            (null != n.name || null != n.icon) && M.A.updateChannel(e, n, t),
            ee.default.track(ep.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: ep.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, w.dI)(n),
            l = !0;
        1 === e.length && (l = null == M.A._openCachedDMChannel(e[0])),
            ee.default.track(ep.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: l,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            }),
            M.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, L.A.NEW_GROUP_DM_INVITE_MODAL);
            });
    };
    pushToExistingDM = (e, t) => {
        let { addToDMUpdatesEnabled: n } = this.props,
            i = this._searchCounter,
            l = (0, w.dI)(e),
            s = $.A.getChannelId() === e.id;
        M.A.addRecipients(e.id, t, ep.ThZ.ADD_FRIENDS_TO_DM).then((i) => {
            if ((this.props.onComplete?.(i), n && this.updateGDM(i, ep.ThZ.ADD_FRIENDS_TO_DM), s)) {
                if (e.isDM() && i !== e.id) return void v.A.call(i, !1, !0);
                v.A.ring(i, t, "dm_invite");
            }
        }),
            ee.default.track(ep.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...l,
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
            l = Array.from(t);
        if (null != e) {
            let t = ew(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, C.openModal)(
                      (n) => (0, i.jsx)(eM, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, C.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = ew(l);
            l.length > 1 && e.size > 0
                ? (0, C.openModal)(
                      (t) => (0, i.jsx)(eM, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, C.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
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
            ee.default.track(ep.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: ep.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eD(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: s, onIconRemove: r, onChange: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(L.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, j.Jo)(Array.from(t), q.default, X.A);
    return (0, i.jsxs)("div", {
        className: eN.zj,
        children: [
            (0, i.jsx)(F.X, {
                className: eN.r9,
                channel: null,
                previewIcon: l,
                onIconChange: s,
                onIconRemove: r,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(A.E, {
                className: eN.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: e_.intl.string(e_.t.YynaLK),
            }),
            (0, i.jsx)(E.k, {
                "aria-label": e_.intl.string(e_.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function ex(e) {
    let { channel: t, onComplete: n, ...l } = e,
        s = (0, u.cf)([J.A, Z.A, Q.A], () => {
            let e;
            return (
                null != t && null != (e = Z.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...J.A.getState(),
                    invite: e,
                    hideDiscriminator: Q.A.hidePersonalInformation,
                    hideInstantInvites: Q.A.hideInstantInvites,
                }
            );
        }),
        r = (0, u.bG)(
            [q.default],
            () =>
                !!q.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => q.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: a } = ea.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(ey, {
        channel: t,
        isStaffOnlyDM: r,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && a),
        ...l,
        ...s,
    });
}
function eR(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        r = (0, C.useHasModalOpen)(s),
        a = l.useCallback(
            () =>
                (0, C.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ex, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        o = l.useCallback(() => (r ? (0, C.closeModal)(s) : a()), [r, s, a]);
    return (
        l.useEffect(
            () => (
                n && en._.subscribe(ep.jej.TOGGLE_DM_CREATE, o),
                () => {
                    en._.unsubscribe(ep.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, U.Ay)(() => {
            (0, B.u)();
        }),
        { showModal: a, toggleVisible: o }
    );
}
function eO(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, C.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ex, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function eU(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: r,
            tooltip: a,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        c = l.useRef(null),
        h = r ?? (null == t ? _.g : N.D),
        { showModal: g } = eR({ channel: t, subscribeToGlobalHotkey: d }),
        A = (0, u.bG)([q.default], () => q.default.getUser(t?.getRecipientId()));
    return A?.bot || A?.isProvisional
        ? null
        : (0, i.jsx)(eu.Ay.Icon, {
              ref: c,
              onClick: g,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: a,
              tooltipPosition: o,
          });
}
function eL(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: r, subscribeToGlobalHotkey: a = !1, ...o } = e,
        u = l.useRef(null),
        { showModal: d } = eR({ channel: t, subscribeToGlobalHotkey: a });
    return (0, i.jsx)(f.$, {
        ...o,
        onClick: d,
        variant: "primary",
        buttonRef: u,
        text: s,
        "aria-label": s,
        icon: r,
        fullWidth: n,
    });
}
function ew(e) {
    let t = eP(e);
    return new Set(
        (0, s.chain)(z.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, W.MK)(e.type))
            .filter((e) => eP(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eP(e) {
    return JSON.stringify(e.sort());
}
