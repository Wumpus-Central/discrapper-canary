"use strict";
n.d(t, { Ay: () => e6, NE: () => e4, Jz: () => e3, YW: () => eW }), n(321073);
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
    h = n(857250),
    f = n(97483),
    p = n(939249),
    E = n(97808),
    m = n(778712),
    g = n(834730),
    A = n(821609),
    I = n(292666),
    T = n(187322),
    S = n(289873),
    y = n(320448),
    C = n(847374),
    N = n(534514),
    v = n(452027),
    R = n(109802),
    O = n(231723),
    b = n(765178),
    D = n(192308),
    L = n(888366),
    w = n(241541),
    M = n(228366),
    P = n(387755),
    x = n(308528),
    k = n(711950),
    U = n(376728);
let G = {
    search(e, t) {
        M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open: (e) => M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e }),
    close() {
        M.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var F = n(717398),
    V = n(684136),
    B = n(964486),
    j = n(793574),
    H = n(95561),
    Y = n(688810),
    W = n(571694),
    K = n(47167),
    $ = n(915089),
    z = n(131607),
    q = n(66442),
    Z = n(774300);
let X = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function Q(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = X.getConfig({ location: t });
    return n;
}
var J = n(287809),
    ee = n(427262),
    et = n(652215),
    en = n(375708);
async function ei(e, t) {
    if (0 === t.length) return;
    let n = [];
    for (let e of t) {
        let t = J.default.getUser(e);
        null == t || t.bot || n.push(t);
    }
    if (0 !== n.length)
        try {
            let t = await U.Ay.createInvite(e, { max_age: Q({ location: "5326c5_1" }) }, et.PE1.GROUP_DM),
                i = await Promise.all(
                    n.map(async (e) => {
                        var n;
                        return {
                            user: e,
                            success: await ((n = t.code),
                            new Promise((t) => {
                                Z.A.enqueue(
                                    {
                                        inviteKey: n,
                                        type: Z.F.USER,
                                        user: e,
                                        location: et.PE1.GROUP_DM,
                                        inviteAnalyticsMetadata: { source: et.PE1.GROUP_DM },
                                    },
                                    (e) => {
                                        t(e);
                                    },
                                );
                            })),
                        };
                    }),
                ),
                r = [],
                s = [];
            for (let { user: e, success: t } of i) t ? r.push(e) : s.push(e);
            if (s.length > 0) {
                let e, t;
                (t =
                    (e = s.map((e) => ee.Ay.getName(e))).length > 0
                        ? en.intl.formatToPlainString(en.t["wWp/+6"], {
                              inviteCount: e.length,
                              username1: e[0],
                              username2: e[1] ?? "",
                              remaining: Math.max(0, e.length - 2),
                          })
                        : en.intl.string(en.t.iRntUl)),
                    (0, _.P0)((0, h.o)(t, f.Ck.FAILURE));
            } else
                r.length > 0 &&
                    (function (e) {
                        let t = e.map((e) => ee.Ay.getName(e));
                        if (0 === t.length) return;
                        let n = en.intl.formatToPlainString(en.t.gztrTs, {
                            inviteCount: t.length,
                            username1: t[0],
                            username2: t[1] ?? "",
                            remaining: Math.max(0, t.length - 2),
                        });
                        (0, _.P0)((0, h.o)(n, f.Ck.SUCCESS));
                    })(r);
        } catch {
            (0, _.P0)((0, h.o)(en.intl.string(en.t.iRntUl), f.Ck.FAILURE));
        }
}
var er = n(279208),
    es = n(267102),
    ea = n(976860),
    eo = n(219271),
    el = n(427358),
    eu = n(95701),
    ec = n(734057),
    ed = n(71393),
    e_ = n(958590),
    eh = n(584777),
    ef = n(763827),
    ep = n(222823),
    eE = n(994500),
    em = n(351906),
    eg = n(174459),
    eA = n(957565),
    eI = n(625494),
    eT = n(403362),
    eS = n(935208),
    ey = n(41e4),
    eC = n(18707),
    eN = n(58736),
    ev = n(503698),
    eR = n.n(ev),
    eO = n(837381),
    eb = n(692617),
    eD = n(658675),
    eL = n(297413),
    ew = n(966327),
    eM = n(235986),
    eP = n(548118),
    ex = n(640708),
    ek = n(290863),
    eU = n(973081);
function eG(e) {
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
            "aria-setsize": h,
            "aria-posinset": f,
        } = e,
        E = (0, u.bG)([ek.A], () => ek.A.getStatus(t.id)),
        m = (0, eO.rm)(String(t.id));
    return (0, i.jsx)(p.D, {
        id: `user-row-${n}`,
        className: eR()(eU.Se, { [eU.r9]: c }),
        onClick: () => {
            d?.(t.id, n);
        },
        onMouseEnter: () => {
            _?.(n);
        },
        ...m,
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": c,
        "aria-setsize": h,
        "aria-posinset": f,
        children: (0, i.jsxs)(eM.A, {
            align: eM.A.Align.CENTER,
            className: eR()(eU.Bc, { [eU.oz]: o }),
            children: [
                (0, i.jsx)(ew.A, { user: t, status: E, className: eU.my }),
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
                                    ? ee.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : ee.Ay.getName(t),
                        }),
                        (0, i.jsxs)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != a && a.length > 0 ? eU.dj : void 0,
                            children: [
                                (0, i.jsx)(eL.A, {
                                    user: t,
                                    hideDiscriminator: r,
                                    className: eU.xK,
                                    forceUsername: !0,
                                }),
                                null != a && a.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(ex.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eU.a6,
                                              }),
                                              (0, i.jsx)(eb.A, {
                                                  className: eU.gP,
                                                  guilds: a,
                                                  maxGuilds: 3,
                                                  size: eP.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eU.tz,
                                                  children:
                                                      1 === a.length
                                                          ? a[0].name
                                                          : en.intl.format(en.t.E215W7, { count: a.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eD.P, { checked: l, disabled: c }),
            ],
        }),
    });
}
var eF = n(43105),
    eV = n(49999);
function eB(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        s = r.useCallback(() => {
            n(eV.i.USER_DISMISS);
        }, [n]);
    return (0, i.jsx)(eF.A, {
        targetElementRef: t,
        position: "left",
        alignmentStrategy: "edge",
        align: "center",
        badge: "new",
        title: en.intl.string(en.t["Ur/4dI"]),
        body: en.intl.string(en.t.AVPtNF),
        actions: [{ text: en.intl.string(en.t["NX+WJN"]), onClick: s }],
        onRequestClose: s,
    });
}
var ej = n(650583),
    eH = n(426057);
let eY = (0, $.Ld)(),
    eW = { ADD_FRIENDS_TO_DM: "Add Friends to DM", NEW_GROUP_DM: "New Group DM", MEMBER_LIST: "Member List" };
function eK(e) {
    if (eE.A.isFriend(e)) return !0;
    let t = J.default.getCurrentUser(),
        n = J.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function e$(e) {
    let t = [],
        n = [];
    for (let i of e) eK(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function ez(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? x.A.createGroupDmShell({ recipientId: t[0], location: n })
        : x.A.openPrivateChannel({ recipientIds: t, location: n });
}
function eq() {
    (0, _.P0)((0, h.o)(en.intl.string(en.t.fEptJP), f.Ck.FAILURE));
}
let eZ = (e) => {
        let { channel: t, onClose: n } = e,
            r = (0, K.Ay)(t) ?? "",
            s = (0, u.bG)([ep.Ay], () => ep.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(p.D, {
            onClick: () => {
                (0, ea.uh)(et.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eH.us,
                children: [
                    (0, i.jsx)(E.eu, { src: (0, W.Y)(t), size: m._3.SIZE_24, "aria-label": r }),
                    (0, i.jsx)("span", { className: eH.J2, children: r }),
                    (0, i.jsx)("span", { className: eH.Pd, children: o()(eS.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eX = (e) => {
        let { onConfirm: t, channelIds: n, ...r } = e,
            s = (0, u.yK)([ec.A], () => Array.from(n).map(ec.A.getChannel), [n]);
        return (0, i.jsx)(l.Modal, {
            title: en.intl.string(en.t.uFHxNd),
            subtitle: en.intl.string(en.t.rIsSqE),
            actions: [
                { variant: "secondary", text: en.intl.string(en.t["ETE/oC"]), onClick: r.onClose },
                {
                    variant: "primary",
                    text: en.intl.string(en.t.KCNNJu),
                    onClick: () => {
                        t(), r.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(g.E, {
                variant: "text-md/normal",
                className: eH.Jv,
                children: en.intl.string(en.t.cjE7wH),
            }),
            ...r,
            children: s
                .filter(eT.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return eS.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(eZ, { onClose: r.onClose, channel: e }, e.id)),
        });
    };
function eQ(e) {
    let { targetElementRef: t } = e,
        [n, r] = (0, z.kn)([c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK]);
    return n !== c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK
        ? null
        : (0, i.jsx)(eB, { targetElementRef: t, markAsDismissed: r });
}
class eJ extends r.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = es.Ay;
    copyTimeout;
    scrollerRef = r.createRef();
    searchBarRef = r.createRef();
    _mobileCloseRef = r.createRef();
    _searchCounter = 0;
    _existingTimeout = null;
    _getAnalyticsEntryPoint() {
        let { channel: e, entryPointType: t } = this.props,
            n = "",
            i = "";
        return (
            null != e
                ? ((n = t ?? eW.ADD_FRIENDS_TO_DM), (i = e.isDM() ? "DM" : "Group DM"))
                : ((n = eW.NEW_GROUP_DM), (i = "Friends List")),
            { entryPointType: n, entryPointSource: i }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        M.h.wait(() => {
            G.open(e?.id).then(() => {
                this.trackModalOpened();
            });
        });
        let t = (0, H.dI)(e);
        eg.default.track(et.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            eI._.subscribe(et.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eI._.subscribe(et.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            (0, eC.G)("PrivateChannelRecipientsInvite") && this.createInvite(),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    trackModalOpened = () => {
        let { channel: e } = this.props,
            t = eh.A.getResults(),
            { friendCount: n, nonFriendCount: i } = (0, H.g4)(t.map((e) => e.user.id)),
            r = this._getAnalyticsEntryPoint();
        eg.default.track(et.HAw.PRIVATE_CHANNEL_INVITE_MODAL_OPENED, {
            ...(0, H.dI)(e),
            default_results_count: t.length,
            default_results_friend_count: n,
            default_results_non_friend_count: i,
            entry_point_type: r.entryPointType,
            entry_point_source: r.entryPointSource,
        });
    };
    componentWillUnmount() {
        eI._.unsubscribe(et.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eI._.unsubscribe(et.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            M.h.wait(() => G.close());
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
        return !eE.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds && (0, eC.G)("PrivateChannelRecipientsInvite");
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            r = [];
        for (let t of e) eE.A.isFriend(t.user.id) ? i.push(t) : r.push(t);
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
        let t = Q({ location: "5326c5_1" });
        U.Ay.createInvite(e.id, { max_age: t }, et.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = J.default.getCurrentUser();
        return null != t && t.isStaff() ? et.$aF : null != e && e.userLimit > 0 ? e.userLimit : et.wLU;
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
            r = t.size > 1 || null != e ? en.intl.string(en.t["h1/FMu"]) : en.intl.string(en.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)(A.$, {
            variant: "primary",
            text: en.intl.string(en.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        let { addToDmTitleUpdate: e } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return en.intl.string(en.t.Xjlbvs);
        if (this.isPartyFull()) return en.intl.string(en.t.OtTQDz);
        let { channel: t } = this.props;
        return null == t
            ? en.intl.string(en.t.jD1qzM)
            : t.isMultiUserDM()
              ? en.intl.string(en.t.NB5DFD)
              : t.isDM() && e
                ? en.intl.string(en.t.IIOxgV)
                : en.intl.string(en.t["PWkO7+"]);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = J.default.getUser(t),
                        n = null != e ? e.username : "";
                    return en.intl.format(en.t["eg+R9x"], { username: n });
                }
            }
            return en.intl.string(en.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = J.default.getUser(t),
                i = null != n ? n.username : "";
            return en.intl.format(en.t["eg+R9x"], { username: i });
        }
        let n = (0, eC.G)("PrivateChannelRecipientsInvite");
        if (null == e && n) return en.intl.format(en.t.t9mhPt, { number: this.getMaxParticipants() });
        let i = this.getRemaining();
        return i <= 0
            ? en.intl.formatToPlainString(en.t.xYr004, { number: this.getMaxParticipants() })
            : n
              ? en.intl.formatToPlainString(en.t.barkEr, { number: i })
              : en.intl.formatToPlainString(en.t.HrSDPF, { number: i });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, query: i } = this.props,
            { current: r } = this.searchBarRef;
        if (null == r) return;
        let s = this.getDisplayedResults(),
            a = t;
        switch (e.key) {
            case ej.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case ej.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= s.length && (a = 0), this.handleSelectionChange(a);
                break;
            case ej.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = s.length - 1), this.handleSelectionChange(a);
                break;
            case ej.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), s.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let r = (0, eC.G)("PrivateChannelRecipientsInvite"),
            s = [];
        n.forEach((e) => {
            let t = J.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: ee.Ay.getName(t),
                    icon: r ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: a, selectedRow: o, isLoading: l } = this.props,
            u = a.length > 0 || l,
            c = !1;
        if (r)
            for (let e of n) {
                if (eE.A.isFriend(e)) continue;
                let t = J.default.getUser(e);
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
                    helperText: r ? en.intl.string(c ? en.t.xHuK72 : en.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (r ? en.intl.string(en.t["5h0QOP"]) : en.intl.string(en.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eY,
                    "aria-expanded": u,
                    "aria-activedescendant": u ? `user-row-${o}` : void 0,
                }),
                this.renderAddUsersButton(),
                r && (0, i.jsx)(eQ, { targetElementRef: this.searchBarRef }),
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
                    children: (0, i.jsx)(V.A, { className: eH.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: en.intl.format(en.t.xYr004, { number: this.getMaxParticipants() }) })
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
                    innerId: eY,
                };
    }
    getEmptyStateListProps() {
        let { channel: e } = this.props;
        return {
            sections: [1],
            sectionHeight: 0,
            rowHeight: 32,
            renderRow: () => {
                if ((0, eC.G)("PrivateChannelRecipientsInvite")) {
                    let t = null != e && e.isMultiUserDM();
                    return (0, i.jsxs)("div", {
                        className: eH.wV,
                        children: [
                            (0, i.jsx)(g.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: en.intl.string(en.t.z3yXsY),
                            }),
                            (0, i.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: en.intl.string(t ? en.t["l6Rj+t"] : en.t["7w2iq7"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsx)("div", {
                    className: eH.wV,
                    children: (0, i.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: en.intl.string(en.t.z3yXsY),
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
                    o = "friends" === s.type ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
                    l = a ? y._ : C.a;
                return (0, i.jsxs)(p.D, {
                    className: eH.bV,
                    onClick: () => this.handleSectionToggle(s.type),
                    "aria-expanded": !a,
                    "aria-label": o,
                    children: [
                        (0, i.jsx)(N.D, { variant: "heading-sm/semibold", color: "text-muted", children: o }),
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
            innerId: eY,
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
                this.props.selectedRow >= e.length && G.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: r, selectedRow: s, hideDiscriminator: a, channel: o } = this.props,
            { user: l, comparator: u, mutualGuilds: c } = e,
            d = r.has(l.id) || o?.recipients.includes(l.id),
            _ = (!d && 0 >= this.getRemaining()) || o?.recipients.includes(l.id);
        return (0, i.jsx)(
            eG,
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
        let s = (0, eC.G)("PrivateChannelRecipientsInvite"),
            a = null != t ? (0, er.A)(t.code) : "",
            o = a.length > 0;
        return (0, i.jsx)(v.D, {
            label: s ? en.intl.string(en.t.dTqtcN) : en.intl.string(en.t.t3O2BR),
            helperText: a.length > 0 ? en.intl.format(en.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(R.e, {
                supportsCopy: eA.p5,
                placeholder: (0, er.A)(en.intl.string(en.t.lPVBqP)),
                value: o ? (n ? en.intl.string(en.t["6HzNgZ"]) : a) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: o ? (r ? en.intl.string(en.t.q30c5i) : en.intl.string(en.t.OpuAlK)) : en.intl.string(en.t.qzxqUf),
                mode: r ? R.q.SUCCESS : R.q.DEFAULT,
                onCopy: () => {
                    o ? this.handleCopyInvite(a) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let {
            hasFriends: e,
            channel: t,
            selectedUsers: n,
            canCustomizeGDM: r,
            customizeGDMCancelButton: s,
        } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = J.default.getUser(e),
                i = null != n && eE.A.getRelationshipType(n.id) === et.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? en.intl.string(en.t.xMH6vD) : en.intl.string(en.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: en.intl.string(en.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && r)) {
            let e = null != t || n.size > 1,
                a = new Set(t?.isDM() && r ? [t.getRecipientId(), ...n] : n),
                o = null == t || (t.isDM() && s);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(e0, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: a,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: o
                    ? [
                          { variant: "secondary", text: en.intl.string(en.t["ETE/oC"]), onClick: this.props.onClose },
                          this.getCreateGroupButtonAction(),
                      ]
                    : [this.getCreateGroupButtonAction()],
            };
        }
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let a = this.getInviteLinkFooter();
        return null != a ? { actionBarInput: a } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: r } = this.getFooterProps();
        return (0, i.jsx)(l.Modal, {
            transitionState: e ?? O.ip.ENTERED,
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
            F.A.sendRequest({
                discordTag: ee.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        G.select(e);
    };
    handleSelect = (e) => {
        let { channel: t } = this.props;
        if (null == e) return void G.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id, e);
    };
    handleSelectionChange = (e) => {
        G.select(e);
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
        G.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                eg.default.track(et.HAw.SEARCH_USER_LIST_STARTED, {
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
        G.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            let t = J.default.getUser(e);
            null != t &&
                b.O.announce(en.intl.formatToPlainString(en.t.JL1QSg, { username: ee.Ay.getName(t) }), "polite"),
                G.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                { selectedUsers: i, query: r, channel: s } = e.props;
            if (s?.recipients.includes(t)) return;
            let a = !i.has(t),
                o = e.getResultsSections(),
                l = 0,
                u = n;
            if (null != o) {
                let i = eE.A.isFriend(t);
                l = i ? 1 : 2;
                let { collapsedSections: r } = e.state,
                    s = i ? "friends" : "serverMembers",
                    a = 0;
                for (let e of o) {
                    if (e.type === s) break;
                    r.has(e.type) || (a += e.results.length);
                }
                u = n - a;
            }
            let c = J.default.getUser(t);
            a
                ? e.getRemaining() > 0 &&
                  (eg.default.track(et.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                      ...(0, H.dI)(s),
                      section: l,
                      row: u,
                      interaction_type: "select",
                      affinity_score: el.A.getUserAffinity(t)?.communicationProbability ?? -1,
                  }),
                  G.addUser(t),
                  null != c &&
                      b.O.announce(en.intl.formatToPlainString(en.t.iyKU50, { username: ee.Ay.getName(c) }), "polite"),
                  r.length > 0 && (G.clear(s?.id), e.forceFocus()))
                : (eg.default.track(et.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                      ...(0, H.dI)(s),
                      section: l,
                      row: u,
                      interaction_type: "deselect",
                      affinity_score: el.A.getUserAffinity(t)?.communicationProbability ?? -1,
                  }),
                  G.removeUser(t),
                  null != c &&
                      b.O.announce(en.intl.formatToPlainString(en.t.JL1QSg, { username: ee.Ay.getName(c) }), "polite"));
        };
    })();
    handleAddFriendNavigation = () => {
        k.A.transitionToSection(et.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = el.A.getUserAffinity(e);
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
            (null != n.name || null != n.icon) && x.A.updateChannel(e, n, t),
            eg.default.track(et.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: et.rbe.GROUP_DM,
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
        1 === e.length && (r = null == x.A._openCachedDMChannel(e[0]));
        let s = (0, H.g4)(e);
        eg.default.track(et.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...i,
            is_new_dm: r,
            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
            recipient_ids: e,
            num_searches: t,
            affinity_score: this._getUserAffinities(e).affinities,
            name_is_set: "" !== this.state.newChannelName,
            icon_is_set: null != this.state.previewIcon,
            friend_recipient_count: s.friendCount,
            non_friend_recipient_count: s.nonFriendCount,
        });
        let a = (0, eC.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: o, inviteLinkOnlyUserIds: l } =
                a && e.length > 1 ? e$(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        ez({ recipientIds: o, location: "New Group DM", useGroupDmShell: a && l.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, j.A.NEW_GROUP_DM_INVITE_MODAL), ei(e, l);
            })
            .catch(eq);
    };
    pushToExistingDM = (e, t) => {
        let n = (0, eC.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: i, inviteLinkOnlyUserIds: r } = n
                ? e$(t)
                : { channelRecipientIds: t, inviteLinkOnlyUserIds: [] },
            s = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(s, i, r)
            : e.isDM() && this._promoteDMToGroupDM(s, e.getRecipientId(), i, r, n);
        let a = (0, H.g4)(t);
        eg.default.track(et.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...(0, H.dI)(e),
            is_new_dm: e.isDM(),
            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
            recipient_ids: t,
            num_searches: this._searchCounter,
            affinity_score: this._getUserAffinities(t).affinities,
            friend_recipient_count: a.friendCount,
            non_friend_recipient_count: a.nonFriendCount,
        });
    };
    _addRecipientsToExistingGroupDM = (e, t, n) => {
        let i = ef.A.getChannelId() === e;
        (t.length > 0 ? x.A.addRecipients(e, t, et.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e), ei(e, n), i && t.length > 0 && P.A.ring(e, t, "dm_invite");
            })
            .catch(eq);
    };
    _promoteDMToGroupDM = (e, t, n, i, r) => {
        let { canCustomizeGDM: s } = this.props,
            a = ef.A.getChannelId() === e,
            o = eK(t),
            l = r && o ? [...n, t] : n,
            u = r && !o ? [...i, t] : i;
        (o && n.length > 0
            ? x.A.addRecipients(e, n, et.ThZ.ADD_FRIENDS_TO_DM)
            : l.length > 0 || u.length > 0
              ? ez({ recipientIds: l, location: "New Group DM", useGroupDmShell: r && u.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), s && this.updateGDM(t, et.ThZ.ADD_FRIENDS_TO_DM), ei(t, u), a)) {
                    if (t !== e) return void P.A.call(t, !1, !0);
                    n.length > 0 && P.A.ring(t, n, "dm_invite");
                }
            })
            .catch(eq);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            r = Array.from(t);
        if (null != e) {
            let t = e5(Array.from(new Set([...e.recipients, ...r])));
            t.size > 0
                ? (0, D.openModal)(
                      (n) => (0, i.jsx)(eX, { ...n, onConfirm: () => this.pushToExistingDM(e, r), channelIds: t }),
                      {},
                      (0, D.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, r);
        } else {
            let e = e5(r);
            r.length > 1 && e.size > 0
                ? (0, D.openModal)(
                      (t) => (0, i.jsx)(eX, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
                      {},
                      (0, D.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(r);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, eA.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            eg.default.track(et.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: et.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function e0(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: s, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: l } = (0, Y.Ay)(j.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, K.Jo)(Array.from(t), J.default, eE.A);
    return (0, i.jsxs)("div", {
        className: eH.zj,
        children: [
            (0, i.jsx)(q.X, {
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
                children: en.intl.string(en.t.YynaLK),
            }),
            (0, i.jsx)(I.k, {
                "aria-label": en.intl.string(en.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function e1(e) {
    let { channel: t, onComplete: n, entryPointType: r, ...s } = e,
        a = (0, u.cf)([em.A, eh.A, e_.A, ed.A, eE.A], () => {
            let e;
            return (
                null != t && null != (e = e_.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...eh.A.getState(),
                    hasFriends: eE.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: em.A.hidePersonalInformation,
                    hideInstantInvites: em.A.hideInstantInvites,
                    hasGuilds: ed.A.getGuildCount() > 0,
                }
            );
        }),
        o = (0, u.bG)(
            [J.default],
            () =>
                !!J.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => J.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: l } = ey.n.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        }),
        { canCustomizeGDM: c, addCancelButton: d } = ey.c.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eJ, {
        channel: t,
        isStaffOnlyDM: o,
        onComplete: n,
        entryPointType: r,
        addToDmTitleUpdate: l,
        canCustomizeGDM: c,
        customizeGDMCancelButton: d,
        ...s,
        ...a,
    });
}
function e2(e) {
    let { channel: t, subscribeToGlobalHotkey: n, entryPointType: s } = e,
        a = `channel-invite-modal-${t?.id}`,
        o = (0, D.useHasModalOpen)(a),
        l = r.useCallback(
            () =>
                (0, D.openModalLazy)(
                    () => Promise.resolve((e) => (0, i.jsx)(e1, { ...e, channel: t, entryPointType: s })),
                    { modalKey: a },
                ),
            [t, s, a],
        ),
        u = r.useCallback(() => (o ? (0, D.closeModal)(a) : l()), [o, a, l]);
    return (
        r.useEffect(
            () => (
                n && eI._.subscribe(et.jej.TOGGLE_DM_CREATE, u),
                () => {
                    eI._.unsubscribe(et.jej.TOGGLE_DM_CREATE, u);
                }
            ),
            [n, u],
        ),
        (0, B.Ay)(() => {
            (0, eo.u)();
        }),
        { showModal: l, toggleVisible: u }
    );
}
function e3(e) {
    let { channel: t, onComplete: n } = e,
        r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, D.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(e1, { ...e, channel: t, onComplete: n })), {
        modalKey: r,
    });
}
function e6(e) {
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
        _ = a ?? (null == t ? L.g : w.D),
        { showModal: h } = e2({ channel: t, subscribeToGlobalHotkey: c }),
        f = (0, u.bG)([J.default], () => J.default.getUser(t?.getRecipientId()));
    return f?.bot || f?.isProvisional
        ? null
        : (0, i.jsx)(eN.Ay.Icon, {
              ref: d,
              onClick: h,
              icon: _,
              className: s,
              iconClassName: n,
              tooltip: o,
              tooltipPosition: l,
          });
}
function e4(e) {
    let {
            channel: t,
            fullWidth: n = !1,
            text: s,
            icon: a,
            subscribeToGlobalHotkey: o = !1,
            allowFrictionlessGDMUpsell: l,
            entryPointType: u,
            ...d
        } = e,
        _ = r.useRef(null),
        { showModal: h } = e2({ channel: t, subscribeToGlobalHotkey: o, entryPointType: u }),
        f = r.useMemo(() => (l ? [c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK] : []), [l]),
        [p, E] = (0, z.kn)(f),
        m = r.useCallback(() => {
            p === c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && E(eV.i.TAKE_ACTION), h();
        }, [h, p, E]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.$, {
                variant: "primary",
                ...d,
                onClick: m,
                buttonRef: _,
                text: s,
                "aria-label": s,
                icon: a,
                fullWidth: n,
            }),
            p === c.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && (0, i.jsx)(eB, { targetElementRef: _, markAsDismissed: E }),
        ],
    });
}
function e5(e) {
    let t = e7(e);
    return new Set(
        (0, s.chain)(ec.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, eu.MK)(e.type))
            .filter((e) => e7(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function e7(e) {
    return JSON.stringify(e.sort());
}
