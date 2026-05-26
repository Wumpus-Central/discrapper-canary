"use strict";
n.d(t, { Jz: () => e1, Ay: () => e2, NE: () => e3 }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(989349),
    o = n.n(a),
    l = n(189213),
    u = n(17928),
    c = n(554146),
    d = n(862482),
    _ = n(691540),
    f = n(857250),
    h = n(97483),
    p = n(939249),
    E = n(97808),
    m = n(778712),
    g = n(834730),
    A = n(821609),
    I = n(292666),
    T = n(187322),
    S = n(289873),
    N = n(320448),
    y = n(847374),
    C = n(534514),
    v = n(452027),
    O = n(109802),
    R = n(231723),
    b = n(192308),
    D = n(888366),
    L = n(241541),
    w = n(228366),
    M = n(387755),
    P = n(308528),
    x = n(711950),
    U = n(376728);
let k = {
    search(e, t) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var G = n(717398),
    F = n(684136),
    V = n(964486),
    B = n(793574),
    H = n(95561),
    j = n(688810),
    Y = n(571694),
    W = n(47167),
    K = n(915089),
    z = n(131607),
    $ = n(66442),
    q = n(774300);
let X = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function Z(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = X.getConfig({ location: t });
    return n;
}
var Q = n(287809),
    J = n(427262),
    ee = n(652215),
    et = n(375708);
async function en(e, t) {
    if (0 !== t.length)
        try {
            let n = await U.Ay.createInvite(e, { max_age: Z({ location: "5326c5_1" }) }, ee.PE1.GROUP_DM),
                i = new Set();
            for (let e of t) {
                let t = Q.default.getUser(e);
                null == t ||
                    t.bot ||
                    (q.A.enqueue(
                        {
                            inviteKey: n.code,
                            type: q.F.USER,
                            user: t,
                            location: ee.PE1.GROUP_DM,
                            inviteAnalyticsMetadata: { source: ee.PE1.GROUP_DM },
                        },
                        () => {},
                    ),
                    i.add(t));
            }
            i.size > 0 &&
                (function (e) {
                    let t = Array.from(e).map((e) => J.Ay.getName(e));
                    if (0 === t.length) return;
                    let n = et.intl.formatToPlainString(et.t.gztrTs, {
                        inviteCount: t.length,
                        username1: t[0],
                        username2: t[1] ?? "",
                        remaining: Math.max(0, t.length - 2),
                    });
                    (0, _.P0)((0, f.o)(n, h.Ck.SUCCESS));
                })(i);
        } catch {
            (0, _.P0)((0, f.o)(et.intl.string(et.t.iRntUl), h.Ck.FAILURE));
        }
}
var ei = n(279208),
    er = n(267102),
    es = n(976860),
    ea = n(219271),
    eo = n(427358),
    el = n(95701),
    eu = n(734057),
    ec = n(71393),
    ed = n(958590),
    e_ = n(584777),
    ef = n(763827),
    eh = n(222823),
    ep = n(994500),
    eE = n(351906),
    em = n(174459),
    eg = n(957565),
    eA = n(625494),
    eI = n(403362),
    eT = n(935208),
    eS = n(41e4),
    eN = n(18707),
    ey = n(58736),
    eC = n(503698),
    ev = n.n(eC),
    eO = n(837381),
    eR = n(692617),
    eb = n(658675),
    eD = n(297413),
    eL = n(966327),
    ew = n(235986),
    eM = n(548118),
    eP = n(640708),
    ex = n(290863),
    eU = n(973081);
function ek(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: r,
            comparator: s,
            mutualGuilds: a,
            selected: o,
            checked: l,
            disabled: c = !1,
            onClick: d,
            onMouseEnter: _,
            "aria-setsize": f,
            "aria-posinset": h,
        } = e,
        E = (0, u.bG)([ex.A], () => ex.A.getStatus(t.id)),
        m = (0, eO.rm)(String(t.id));
    return (0, i.jsx)(p.D, {
        id: `user-row-${n}`,
        className: ev()(eU.Se, { [eU.r9]: c }),
        onClick: () => {
            d?.(t.id);
        },
        onMouseEnter: () => {
            _?.(n);
        },
        ...m,
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": c,
        "aria-setsize": f,
        "aria-posinset": h,
        children: (0, i.jsxs)(ew.A, {
            align: ew.A.Align.CENTER,
            className: ev()(eU.Bc, { [eU.oz]: o }),
            children: [
                (0, i.jsx)(eL.A, { user: t, status: E, className: eU.my }),
                (0, i.jsxs)("div", {
                    className: eU.YW,
                    children: [
                        (0, i.jsx)(g.E, {
                            tag: "strong",
                            className: eU.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? J.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : J.Ay.getName(t),
                        }),
                        (0, i.jsxs)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != a && a.length > 0 ? eU.dj : void 0,
                            children: [
                                (0, i.jsx)(eD.A, {
                                    user: t,
                                    hideDiscriminator: r,
                                    className: eU.xK,
                                    forceUsername: !0,
                                }),
                                null != a && a.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eP.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eU.a6,
                                              }),
                                              (0, i.jsx)(eR.A, {
                                                  className: eU.gP,
                                                  guilds: a,
                                                  maxGuilds: 3,
                                                  size: eM.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eU.tz,
                                                  children:
                                                      1 === a.length
                                                          ? a[0].name
                                                          : et.intl.format(et.t.E215W7, { count: a.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eb.P, { checked: l, disabled: c }),
            ],
        }),
    });
}
var eG = n(43105),
    eF = n(49999);
function eV(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        s = r.useCallback(() => {
            n(eF.i.USER_DISMISS);
        }, [n]);
    return (0, i.jsx)(eG.A, {
        targetElementRef: t,
        position: "left",
        alignmentStrategy: "edge",
        align: "center",
        badge: "new",
        title: et.intl.string(et.t["//DXrW"]),
        body: et.intl.string(et.t.AVPtNF),
        actions: [{ text: et.intl.string(et.t["NX+WJN"]), onClick: s }],
        onRequestClose: s,
    });
}
var eB = n(650583),
    eH = n(426057);
let ej = (0, K.Ld)();
function eY(e) {
    if (ep.A.isFriend(e)) return !0;
    let t = Q.default.getCurrentUser(),
        n = Q.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function eW(e) {
    let t = [],
        n = [];
    for (let i of e) eY(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function eK(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? P.A.createGroupDmShell({ recipientId: t[0], location: n })
        : P.A.openPrivateChannel({ recipientIds: t, location: n });
}
function ez() {
    (0, _.P0)((0, f.o)(et.intl.string(et.t.fEptJP), h.Ck.FAILURE));
}
let e$ = (e) => {
        let { channel: t, onClose: n } = e,
            r = (0, W.Ay)(t) ?? "",
            s = (0, u.bG)([eh.Ay], () => eh.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(p.D, {
            onClick: () => {
                (0, es.uh)(ee.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eH.us,
                children: [
                    (0, i.jsx)(E.eu, { src: (0, Y.Y)(t), size: m._3.SIZE_24, "aria-label": r }),
                    (0, i.jsx)("span", { className: eH.J2, children: r }),
                    (0, i.jsx)("span", { className: eH.Pd, children: o()(eT.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eq = (e) => {
        let { onConfirm: t, channelIds: n, ...r } = e,
            s = (0, u.yK)([eu.A], () => Array.from(n).map(eu.A.getChannel), [n]);
        return (0, i.jsx)(l.Modal, {
            title: et.intl.string(et.t.uFHxNd),
            subtitle: et.intl.string(et.t.rIsSqE),
            actions: [
                { variant: "secondary", text: et.intl.string(et.t["ETE/oC"]), onClick: r.onClose },
                {
                    variant: "primary",
                    text: et.intl.string(et.t.KCNNJu),
                    onClick: () => {
                        t(), r.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(g.E, {
                variant: "text-md/normal",
                className: eH.Jv,
                children: et.intl.string(et.t.cjE7wH),
            }),
            ...r,
            children: s
                .filter(eI.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return eT.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(e$, { onClose: r.onClose, channel: e }, e.id)),
        });
    };
function eX(e) {
    let { targetElementRef: t } = e,
        [n, r] = (0, z.kn)([c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK]);
    return n !== c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK
        ? null
        : (0, i.jsx)(eV, { targetElementRef: t, markAsDismissed: r });
}
class eZ extends r.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = er.Ay;
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
        w.h.wait(() => k.open(e?.id));
        let t = (0, H.dI)(e);
        em.default.track(ee.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            eA._.subscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eA._.subscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        eA._.unsubscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eA._.unsubscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            w.h.wait(() => k.close());
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
        return !ep.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds && (0, eN.G)("PrivateChannelRecipientsInvite");
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            r = [];
        for (let t of e) ep.A.isFriend(t.user.id) ? i.push(t) : r.push(t);
        let s = [];
        return (
            i.length > 0 && s.push({ type: "friends", results: i, showSpinner: !1 }),
            (r.length > 0 || n) && s.push({ type: "serverMembers", results: r, showSpinner: n }),
            s
        );
    }
    getDisplayedResults() {
        let e = this.getResultsSections();
        if (null == e) return this.props.results;
        let { collapsedSections: t } = this.state,
            n = [];
        for (let i of e) t.has(i.type) || n.push(...i.results);
        return n;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = Z({ location: "5326c5_1" });
        U.Ay.createInvite(e.id, { max_age: t }, ee.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = Q.default.getCurrentUser();
        return null != t && t.isStaff() ? ee.$aF : null != e && e.userLimit > 0 ? e.userLimit : ee.wLU;
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
            r = t.size > 1 || null != e ? et.intl.string(et.t["h1/FMu"]) : et.intl.string(et.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)(A.$, {
            variant: "primary",
            text: et.intl.string(et.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        let { addToDMUpdatesEnabled: e } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return et.intl.string(et.t.Xjlbvs);
        if (this.isPartyFull()) return et.intl.string(et.t.OtTQDz);
        let { channel: t } = this.props;
        return null == t
            ? et.intl.string(et.t.jD1qzM)
            : t.isDM() && e
              ? et.intl.string(et.t.IIOxgV)
              : (0, eN.G)("PrivateChannelRecipientsInvite")
                ? et.intl.string(t.isMultiUserDM() ? et.t.FFxUQ0 : et.t["PWkO7+"])
                : et.intl.string(t.isMultiUserDM() ? et.t.AQAPts : et.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = Q.default.getUser(t),
                        n = null != e ? e.username : "";
                    return et.intl.format(et.t["eg+R9x"], { username: n });
                }
            }
            return et.intl.string(et.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = Q.default.getUser(t),
                i = null != n ? n.username : "";
            return et.intl.format(et.t["eg+R9x"], { username: i });
        }
        let n = (0, eN.G)("PrivateChannelRecipientsInvite");
        if (null == e && n) return et.intl.format(et.t.t9mhPt, { number: this.getMaxParticipants() });
        let i = this.getRemaining();
        return i <= 0
            ? et.intl.formatToPlainString(et.t.xYr004, { number: this.getMaxParticipants() })
            : n
              ? et.intl.formatToPlainString(et.t.barkEr, { number: i })
              : et.intl.formatToPlainString(et.t.HrSDPF, { number: i });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, query: i } = this.props,
            { current: r } = this.searchBarRef;
        if (null == r) return;
        let s = this.getDisplayedResults(),
            a = t;
        switch (e.key) {
            case eB.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eB.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= s.length && (a = 0), this.handleSelectionChange(a);
                break;
            case eB.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = s.length - 1), this.handleSelectionChange(a);
                break;
            case eB.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), s.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let r = (0, eN.G)("PrivateChannelRecipientsInvite"),
            s = [];
        n.forEach((e) => {
            let t = Q.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: J.Ay.getName(t),
                    icon: r ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: a, selectedRow: o, isLoading: l } = this.props,
            u = a.length > 0 || l,
            c = !1;
        if (r)
            for (let e of n) {
                if (ep.A.isFriend(e)) continue;
                let t = Q.default.getUser(e);
                if (null != t && !t.bot) {
                    c = !0;
                    break;
                }
            }
        return (0, i.jsxs)("div", {
            className: eH.ON,
            children: [
                (0, i.jsx)(I.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: r ? et.intl.string(c ? et.t.xHuK72 : et.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (r ? et.intl.string(et.t["5h0QOP"]) : et.intl.string(et.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": ej,
                    "aria-expanded": u,
                    "aria-activedescendant": u ? `user-row-${o}` : void 0,
                }),
                this.renderAddUsersButton(),
                r && (0, i.jsx)(eX, { targetElementRef: this.searchBarRef }),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eH.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(T.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(F.A, { className: eH.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: et.intl.format(et.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return;
        let n = this.getResultsSections();
        return null != n
            ? 0 === n.length
                ? this.getEmptyStateListProps()
                : this.getSectionedListProps(n)
            : 0 === t.length
              ? this.getEmptyStateListProps()
              : {
                    ref: this.scrollerRef,
                    sections: [t.length],
                    className: eH.XG,
                    innerClassName: eH.bv,
                    renderRow: this.renderFlatRow,
                    rowHeight: this.getFlatRowHeight,
                    renderSection: this.renderEmptySection,
                    sectionHeight: 0,
                    onScroll: this.handleScroll,
                    paddingTop: 0,
                    paddingBottom: 14,
                    fade: !0,
                    role: void 0,
                    innerRole: "group",
                    innerId: ej,
                };
    }
    getEmptyStateListProps() {
        let { channel: e } = this.props;
        return {
            sections: [1],
            sectionHeight: 0,
            rowHeight: 32,
            renderRow: () => {
                if ((0, eN.G)("PrivateChannelRecipientsInvite")) {
                    let t = null != e && e.isMultiUserDM();
                    return (0, i.jsxs)("div", {
                        className: eH.wV,
                        children: [
                            (0, i.jsx)(g.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: et.intl.string(et.t.z3yXsY),
                            }),
                            (0, i.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: et.intl.string(t ? et.t["l6Rj+t"] : et.t["7w2iq7"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsx)("div", {
                    className: eH.wV,
                    children: (0, i.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: et.intl.string(et.t.z3yXsY),
                    }),
                });
            },
        };
    }
    getSectionedListProps(e) {
        let { collapsedSections: t } = this.state,
            n = Array(e.length).fill(-1),
            r = 0;
        for (let i = 0; i < e.length; i++) t.has(e[i].type) || ((n[i] = r), (r += e[i].results.length));
        let s = r;
        return {
            ref: this.scrollerRef,
            sections: e.map((e) => e.results.length + +!!e.showSpinner),
            className: eH.XG,
            innerClassName: eH.bv,
            renderRow: (r) => {
                let { section: a, row: o } = r,
                    l = e[a];
                if (null == l || t.has(l.type)) return null;
                if (o >= l.results.length)
                    return (0, i.jsx)("div", {
                        className: eH.Q_,
                        children: (0, i.jsx)(S.y, { type: S.t.SPINNING_CIRCLE, className: eH.u1 }),
                    });
                let u = l.results[o];
                if (null == u) return null;
                let c = n[a] + o;
                return this.renderUserRow(u, c, s);
            },
            rowHeight: (n, i) => {
                let r = e[n];
                return null == r || t.has(r.type) ? 0 : i >= r.results.length ? 40 : 48 * (null != r.results[i]);
            },
            renderSection: (n) => {
                let { section: r } = n,
                    s = e[r];
                if (null == s) return null;
                let a = t.has(s.type),
                    o = "friends" === s.type ? et.intl.string(et.t.TdEu5X) : et.intl.string(et.t.y29JXs),
                    l = a ? N._ : y.a;
                return (0, i.jsxs)(p.D, {
                    className: eH.bV,
                    onClick: () => this.handleSectionToggle(s.type),
                    "aria-expanded": !a,
                    "aria-label": o,
                    children: [
                        (0, i.jsx)(C.D, { variant: "heading-sm/semibold", color: "text-muted", children: o }),
                        (0, i.jsx)(l, { size: "xxs" }),
                    ],
                });
            },
            sectionHeight: 32,
            onScroll: this.handleScroll,
            paddingTop: 0,
            paddingBottom: 14,
            fade: !0,
            role: void 0,
            innerRole: "group",
            innerId: ej,
        };
    }
    handleSectionToggle = (e) => {
        this.setState(
            (t) => {
                let { collapsedSections: n } = t,
                    i = new Set(n);
                return i.has(e) ? i.delete(e) : i.add(e), { collapsedSections: i };
            },
            () => {
                let e = this.getDisplayedResults();
                this.props.selectedRow >= e.length && k.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: r, selectedRow: s, hideDiscriminator: a, channel: o } = this.props,
            { user: l, comparator: u, mutualGuilds: c } = e,
            d = r.has(l.id) || o?.recipients.includes(l.id),
            _ = (!d && 0 >= this.getRemaining()) || o?.recipients.includes(l.id);
        return (0, i.jsx)(
            ek,
            {
                row: t,
                user: l,
                hideDiscriminator: a,
                comparator: u,
                mutualGuilds: c,
                checked: d,
                disabled: _,
                selected: t === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": t + 1,
                "aria-setsize": n,
            },
            l.id,
        );
    }
    getFlatRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    renderFlatRow = (e) => {
        let { section: t, row: n } = e;
        if (t > 0) return null;
        let { results: i } = this.props,
            r = i[n];
        return null == r ? null : this.renderUserRow(r, n, i.length);
    };
    renderEmptySection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = (0, eN.G)("PrivateChannelRecipientsInvite"),
            a = null != t ? (0, ei.A)(t.code) : "",
            o = a.length > 0;
        return (0, i.jsx)(v.D, {
            label: s ? et.intl.string(et.t.dTqtcN) : et.intl.string(et.t.t3O2BR),
            helperText: a.length > 0 ? et.intl.format(et.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(O.e, {
                supportsCopy: eg.p5,
                placeholder: (0, ei.A)(et.intl.string(et.t.lPVBqP)),
                value: o ? (n ? et.intl.string(et.t["6HzNgZ"]) : a) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: o ? (r ? et.intl.string(et.t.q30c5i) : et.intl.string(et.t.OpuAlK)) : et.intl.string(et.t.qzxqUf),
                mode: r ? O.q.SUCCESS : O.q.DEFAULT,
                onCopy: () => {
                    o ? this.handleCopyInvite(a) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: r } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = Q.default.getUser(e),
                i = null != n && ep.A.getRelationshipType(n.id) === ee.eA$.PENDING_OUTGOING;
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
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: et.intl.string(et.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && r)) {
            let e = null != t || n.size > 1,
                s = new Set(t?.isDM() && r ? [t.getRecipientId(), ...n] : n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(eQ, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: s,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: et.intl.string(et.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        }
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let s = this.getInviteLinkFooter();
        return null != s ? { actionBarInput: s } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: r } = this.getFooterProps();
        return (0, i.jsx)(l.Modal, {
            transitionState: e ?? R.ip.ENTERED,
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
            G.A.sendRequest({
                discordTag: J.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        k.select(e);
    };
    handleSelect = (e) => {
        let { channel: t } = this.props;
        if (null == e) return void k.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id);
    };
    handleSelectionChange = (e) => {
        k.select(e);
        let t = this.scrollerRef.current;
        if (null == t) return;
        let n = this.getResultsSections();
        if (null == n) return void t.scrollToIndex({ section: 0, row: e, padding: 8 });
        let { collapsedSections: i } = this.state,
            r = e;
        for (let e = 0; e < n.length; e++)
            if (!i.has(n[e].type)) {
                if (r < n[e].results.length) return void t.scrollToIndex({ section: e, row: r, padding: 8 });
                r -= n[e].results.length;
            }
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, H.dI)(t);
        k.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                em.default.track(ee.HAw.SEARCH_USER_LIST_STARTED, {
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
        k.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            k.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? k.removeUser(e)
                : this.getRemaining() > 0 && (k.addUser(e), n.length > 0 && (k.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        x.A.transitionToSection(ee.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = eo.A.getUserAffinity(e);
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
            (null != n.name || null != n.icon) && P.A.updateChannel(e, n, t),
            em.default.track(ee.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: ee.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, H.dI)(n),
            r = !0;
        1 === e.length && (r = null == P.A._openCachedDMChannel(e[0])),
            em.default.track(ee.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: r,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            });
        let s = (0, eN.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: a, inviteLinkOnlyUserIds: o } =
                s && e.length > 1 ? eW(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        eK({ recipientIds: a, location: "New Group DM", useGroupDmShell: s && o.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, B.A.NEW_GROUP_DM_INVITE_MODAL), en(e, o);
            })
            .catch(ez);
    };
    pushToExistingDM = (e, t) => {
        let n = (0, eN.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: i, inviteLinkOnlyUserIds: r } = n
                ? eW(t)
                : { channelRecipientIds: t, inviteLinkOnlyUserIds: [] },
            s = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(s, i, r)
            : e.isDM() && this._promoteDMToGroupDM(s, e.getRecipientId(), i, r, n),
            em.default.track(ee.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...(0, H.dI)(e),
                is_new_dm: !0,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: t,
                num_searches: this._searchCounter,
                affinity_score: this._getUserAffinities(t).affinities,
            });
    };
    _addRecipientsToExistingGroupDM = (e, t, n) => {
        let { addToDMUpdatesEnabled: i } = this.props,
            r = ef.A.getChannelId() === e;
        (t.length > 0 ? P.A.addRecipients(e, t, ee.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e),
                    i && this.updateGDM(e, ee.ThZ.ADD_FRIENDS_TO_DM),
                    en(e, n),
                    r && t.length > 0 && M.A.ring(e, t, "dm_invite");
            })
            .catch(ez);
    };
    _promoteDMToGroupDM = (e, t, n, i, r) => {
        let { addToDMUpdatesEnabled: s } = this.props,
            a = ef.A.getChannelId() === e,
            o = eY(t),
            l = r && o ? [...n, t] : n,
            u = r && !o ? [...i, t] : i;
        (o && n.length > 0
            ? P.A.addRecipients(e, n, ee.ThZ.ADD_FRIENDS_TO_DM)
            : l.length > 0 || u.length > 0
              ? eK({ recipientIds: l, location: "New Group DM", useGroupDmShell: r && u.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), s && this.updateGDM(t, ee.ThZ.ADD_FRIENDS_TO_DM), en(t, u), a)) {
                    if (t !== e) return void M.A.call(t, !1, !0);
                    n.length > 0 && M.A.ring(t, n, "dm_invite");
                }
            })
            .catch(ez);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            r = Array.from(t);
        if (null != e) {
            let t = e6(Array.from(new Set([...e.recipients, ...r])));
            t.size > 0
                ? (0, b.openModal)(
                      (n) => (0, i.jsx)(eq, { ...n, onConfirm: () => this.pushToExistingDM(e, r), channelIds: t }),
                      {},
                      (0, b.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, r);
        } else {
            let e = e6(r);
            r.length > 1 && e.size > 0
                ? (0, b.openModal)(
                      (t) => (0, i.jsx)(eq, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
                      {},
                      (0, b.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(r);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, eg.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            em.default.track(ee.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: ee.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eQ(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: s, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: l } = (0, j.Ay)(B.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, W.Jo)(Array.from(t), Q.default, ep.A);
    return (0, i.jsxs)("div", {
        className: eH.zj,
        children: [
            (0, i.jsx)($.X, {
                className: eH.r9,
                channel: null,
                previewIcon: r,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: l,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(g.E, {
                className: eH.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: et.intl.string(et.t.YynaLK),
            }),
            (0, i.jsx)(I.k, {
                "aria-label": et.intl.string(et.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function eJ(e) {
    let { channel: t, onComplete: n, ...r } = e,
        s = (0, u.cf)([eE.A, e_.A, ed.A, ec.A, ep.A], () => {
            let e;
            return (
                null != t && null != (e = ed.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...e_.A.getState(),
                    hasFriends: ep.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: eE.A.hidePersonalInformation,
                    hideInstantInvites: eE.A.hideInstantInvites,
                    hasGuilds: ec.A.getGuildCount() > 0,
                }
            );
        }),
        a = (0, u.bG)(
            [Q.default],
            () =>
                !!Q.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => Q.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: o } = eS.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eZ, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && o),
        ...r,
        ...s,
    });
}
function e0(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, b.useHasModalOpen)(s),
        o = r.useCallback(
            () =>
                (0, b.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eJ, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        l = r.useCallback(() => (a ? (0, b.closeModal)(s) : o()), [a, s, o]);
    return (
        r.useEffect(
            () => (
                n && eA._.subscribe(ee.jej.TOGGLE_DM_CREATE, l),
                () => {
                    eA._.unsubscribe(ee.jej.TOGGLE_DM_CREATE, l);
                }
            ),
            [n, l],
        ),
        (0, V.Ay)(() => {
            (0, ea.u)();
        }),
        { showModal: o, toggleVisible: l }
    );
}
function e1(e) {
    let { channel: t, onComplete: n } = e,
        r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, b.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eJ, { ...e, channel: t, onComplete: n })), {
        modalKey: r,
    });
}
function e2(e) {
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
        _ = a ?? (null == t ? D.g : L.D),
        { showModal: f } = e0({ channel: t, subscribeToGlobalHotkey: c }),
        h = (0, u.bG)([Q.default], () => Q.default.getUser(t?.getRecipientId()));
    return h?.bot || h?.isProvisional
        ? null
        : (0, i.jsx)(ey.Ay.Icon, {
              ref: d,
              onClick: f,
              icon: _,
              className: s,
              iconClassName: n,
              tooltip: o,
              tooltipPosition: l,
          });
}
function e3(e) {
    let {
            channel: t,
            fullWidth: n = !1,
            text: s,
            icon: a,
            subscribeToGlobalHotkey: o = !1,
            allowFrictionlessGDMUpsell: l,
            ...u
        } = e,
        d = r.useRef(null),
        { showModal: _ } = e0({ channel: t, subscribeToGlobalHotkey: o }),
        f = r.useMemo(() => (l ? [c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK] : []), [l]),
        [h, p] = (0, z.kn)(f),
        E = r.useCallback(() => {
            h === c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && p(eF.i.TAKE_ACTION), _();
        }, [_, h, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.$, {
                variant: "primary",
                ...u,
                onClick: E,
                buttonRef: d,
                text: s,
                "aria-label": s,
                icon: a,
                fullWidth: n,
            }),
            h === c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && (0, i.jsx)(eV, { targetElementRef: d, markAsDismissed: p }),
        ],
    });
}
function e6(e) {
    let t = e4(e);
    return new Set(
        (0, s.chain)(eu.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, el.MK)(e.type))
            .filter((e) => e4(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function e4(e) {
    return JSON.stringify(e.sort());
}
