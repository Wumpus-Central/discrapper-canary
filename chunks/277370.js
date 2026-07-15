n.d(t, { Ay: () => e9, NE: () => e7, Jz: () => e2, YW: () => eY }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(435558),
    r = n(989349),
    a = n.n(r),
    o = n(189213),
    u = n(17928),
    d = n(554146),
    c = n(862482),
    h = n(691540),
    g = n(857250),
    f = n(97483),
    A = n(939249),
    E = n(97808),
    I = n(778712),
    p = n(834730),
    S = n(821609),
    m = n(292666),
    _ = n(187322),
    C = n(289873),
    N = n(320448),
    T = n(847374),
    v = n(297264),
    M = n(452027),
    y = n(109802),
    D = n(231723),
    R = n(765178),
    x = n(192308);
if (21552 == n.j) var O = n(888366);
if (21552 == n.j) var U = n(241541);
var w = n(228366),
    L = n(387755),
    P = n(308528),
    G = n(711950),
    F = n(376728);
let b = {
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
    open: (e) => w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e }),
    close() {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var j = n(717398),
    V = n(684136),
    k = n(964486),
    H = n(793574),
    B = n(95561),
    Y = n(688810),
    W = n(571694),
    z = n(47167),
    J = n(915089),
    Z = n(131607),
    $ = n(66442),
    K = n(774300);
let X = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function q(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = X.getConfig({ location: t });
    return n;
}
var Q = n(287809),
    ee = n(427262),
    et = n(652215),
    en = n(375708);
async function ei(e, t) {
    if (0 === t.length) return;
    let n = [];
    for (let e of t) {
        let t = Q.default.getUser(e);
        null == t || t.bot || n.push(t);
    }
    if (0 !== n.length)
        try {
            let t = await F.Ay.createInvite(e, { max_age: q({ location: "5326c5_1" }) }, et.PE1.GROUP_DM),
                i = await Promise.all(
                    n.map(async (e) => {
                        var n;
                        return {
                            user: e,
                            success: await ((n = t.code),
                            new Promise((t) => {
                                K.A.enqueue(
                                    {
                                        inviteKey: n,
                                        type: K.F.USER,
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
                l = [],
                s = [];
            for (let { user: e, success: t } of i) t ? l.push(e) : s.push(e);
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
                    (0, h.P0)((0, g.o)(t, f.Ck.FAILURE));
            } else
                l.length > 0 &&
                    (function (e) {
                        let t = e.map((e) => ee.Ay.getName(e));
                        if (0 === t.length) return;
                        let n = en.intl.formatToPlainString(en.t.gztrTs, {
                            inviteCount: t.length,
                            username1: t[0],
                            username2: t[1] ?? "",
                            remaining: Math.max(0, t.length - 2),
                        });
                        (0, h.P0)((0, g.o)(n, f.Ck.SUCCESS));
                    })(l);
        } catch {
            (0, h.P0)((0, g.o)(en.intl.string(en.t.iRntUl), f.Ck.FAILURE));
        }
}
var el = n(279208),
    es = n(267102),
    er = n(976860),
    ea = n(219271),
    eo = n(427358),
    eu = n(95701),
    ed = n(734057),
    ec = n(71393),
    eh = n(958590),
    eg = n(584777),
    ef = n(763827),
    eA = n(568548),
    eE = n(994500),
    eI = n(351906),
    ep = n(174459),
    eS = n(957565),
    em = n(625494),
    e_ = n(403362),
    eC = n(935208),
    eN = n(18707),
    eT = n(58736),
    ev = n(503698),
    eM = n.n(ev),
    ey = n(837381),
    eD = n(692617),
    eR = n(658675),
    ex = n(297413),
    eO = n(966327),
    eU = n(235986),
    ew = n(548118),
    eL = n(640708),
    eP = n(290863),
    eG = n(973081);
function eF(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: s,
            mutualGuilds: r,
            selected: a,
            checked: o,
            disabled: d = !1,
            onClick: c,
            onMouseEnter: h,
            "aria-setsize": g,
            "aria-posinset": f,
        } = e,
        E = (0, u.bG)([eP.A], () => eP.A.getStatus(t.id)),
        I = (0, ey.rm)(String(t.id));
    return (0, i.jsx)(A.D, {
        id: `user-row-${n}`,
        className: eM()(eG.Se, { [eG.r9]: d }),
        onClick: function () {
            c?.(t.id, n);
        },
        onMouseEnter: function () {
            h?.(n);
        },
        ...I,
        role: "checkbox",
        "aria-checked": o,
        "aria-disabled": d,
        "aria-setsize": g,
        "aria-posinset": f,
        children: (0, i.jsxs)(eU.A, {
            align: eU.A.Align.CENTER,
            className: eM()(eG.Bc, { [eG.oz]: a }),
            children: [
                (0, i.jsx)(eO.A, { user: t, status: E, className: eG.my }),
                (0, i.jsxs)("div", {
                    className: eG.YW,
                    children: [
                        (0, i.jsx)(p.E, {
                            tag: "strong",
                            className: eG.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? ee.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : ee.Ay.getName(t),
                        }),
                        (0, i.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != r && r.length > 0 ? eG.dj : void 0,
                            children: [
                                (0, i.jsx)(ex.A, {
                                    user: t,
                                    hideDiscriminator: l,
                                    className: eG.xK,
                                    forceUsername: !0,
                                }),
                                null != r && r.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eL.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eG.a6,
                                              }),
                                              (0, i.jsx)(eD.A, {
                                                  className: eG.gP,
                                                  guilds: r,
                                                  maxGuilds: 3,
                                                  size: ew.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eG.tz,
                                                  children:
                                                      1 === r.length
                                                          ? r[0].name
                                                          : en.intl.format(en.t.E215W7, { count: r.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eR.P, { checked: o, disabled: d }),
            ],
        }),
    });
}
var eb = n(43105),
    ej = n(49999);
function eV(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        s = l.useCallback(() => {
            n(ej.i.USER_DISMISS);
        }, [n]);
    return (0, i.jsx)(eb.A, {
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
var ek = n(650583),
    eH = n(426057);
let eB = (0, J.Ld)(),
    eY = { ADD_FRIENDS_TO_DM: "Add Friends to DM", NEW_GROUP_DM: "New Group DM", MEMBER_LIST: "Member List" };
function eW(e) {
    if (eE.A.isFriend(e)) return !0;
    let t = Q.default.getCurrentUser(),
        n = Q.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function ez(e) {
    let t = [],
        n = [];
    for (let i of e) eW(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function eJ(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? P.A.createGroupDmShell({ recipientId: t[0], location: n })
        : P.A.openPrivateChannel({ recipientIds: t, location: n });
}
function eZ() {
    (0, h.P0)((0, g.o)(en.intl.string(en.t.fEptJP), f.Ck.FAILURE));
}
function e$(e) {
    let { channel: t, onClose: n } = e,
        l = (0, z.Ay)(t) ?? "",
        s = (0, u.bG)([eA.Ay], () => eA.Ay.lastMessageId(t.id) ?? t.id);
    return (0, i.jsx)(A.D, {
        onClick: () => {
            (0, er.uh)(et.ME, t.id), n();
        },
        children: (0, i.jsxs)("div", {
            className: eH.us,
            children: [
                (0, i.jsx)(E.eu, { src: (0, W.Y)(t), size: I._3.SIZE_24, "aria-label": l }),
                (0, i.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    tag: "span",
                    className: eH.J2,
                    children: l,
                }),
                (0, i.jsx)("span", { className: eH.Pd, children: a()(eC.default.extractTimestamp(s)).fromNow() }),
            ],
        }),
    });
}
function eK(e) {
    let { onConfirm: t, channelIds: n, ...l } = e,
        s = (0, u.yK)([ed.A], () => Array.from(n).map(ed.A.getChannel), [n]);
    return (0, i.jsx)(o.Modal, {
        title: en.intl.string(en.t.uFHxNd),
        subtitle: en.intl.string(en.t.rIsSqE),
        actions: [
            { variant: "secondary", text: en.intl.string(en.t["ETE/oC"]), onClick: l.onClose },
            {
                variant: "primary",
                text: en.intl.string(en.t.KCNNJu),
                onClick: () => {
                    t(), l.onClose();
                },
            },
        ],
        input: (0, i.jsx)(p.E, { variant: "text-md/normal", className: eH.Jv, children: en.intl.string(en.t.cjE7wH) }),
        ...l,
        children: s
            .filter(e_.Vq)
            .sort((e, t) => {
                let n = e.lastMessageId ?? e.id,
                    i = t.lastMessageId ?? t.id;
                return eC.default.compare(i, n);
            })
            .map((e) => (0, i.jsx)(e$, { onClose: l.onClose, channel: e }, e.id)),
    });
}
function eX(e) {
    let { targetElementRef: t } = e,
        [n, l] = (0, Z.kn)([d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK]);
    return n !== d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK
        ? null
        : (0, i.jsx)(eV, { targetElementRef: t, markAsDismissed: l });
}
class eq extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = es.Ay;
    copyTimeout;
    scrollerRef = l.createRef();
    searchBarRef = l.createRef();
    _mobileCloseRef = l.createRef();
    _searchCounter = 0;
    _existingTimeout = null;
    _getAnalyticsEntryPoint() {
        let { channel: e, entryPointType: t } = this.props,
            n = "",
            i = "";
        return (
            null != e
                ? ((n = t ?? eY.ADD_FRIENDS_TO_DM), (i = e.isDM() ? "DM" : "Group DM"))
                : ((n = eY.NEW_GROUP_DM), (i = "Friends List")),
            { entryPointType: n, entryPointSource: i }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        w.h.wait(() => {
            b.open(e?.id).then(() => {
                this.trackModalOpened();
            });
        });
        let t = (0, B.dI)(e);
        ep.default.track(et.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            em._.subscribe(et.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            em._.subscribe(et.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            (0, eN.G)("PrivateChannelRecipientsInvite") && this.createInvite(),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    trackModalOpened = () => {
        let { channel: e } = this.props,
            t = eg.A.getResults(),
            { friendCount: n, nonFriendCount: i } = (0, B.g4)(t.map((e) => e.user.id)),
            l = this._getAnalyticsEntryPoint();
        ep.default.track(et.HAw.PRIVATE_CHANNEL_INVITE_MODAL_OPENED, {
            ...(0, B.dI)(e),
            default_results_count: t.length,
            default_results_friend_count: n,
            default_results_non_friend_count: i,
            entry_point_type: l.entryPointType,
            entry_point_source: l.entryPointSource,
        });
    };
    componentWillUnmount() {
        em._.unsubscribe(et.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            em._.unsubscribe(et.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            w.h.wait(() => b.close());
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
        return this.props.hasGuilds && (0, eN.G)("PrivateChannelRecipientsInvite");
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            l = [];
        for (let t of e) eE.A.isFriend(t.user.id) ? i.push(t) : l.push(t);
        let s = [];
        return (
            i.length > 0 && s.push({ type: "friends", results: i, showSpinner: !1 }),
            (l.length > 0 || n) && s.push({ type: "serverMembers", results: l, showSpinner: n }),
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
        let t = q({ location: "5326c5_1" });
        F.Ay.createInvite(e.id, { max_age: t }, et.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = Q.default.getCurrentUser();
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
            l = t.size > 1 || null != e ? en.intl.string(en.t["h1/FMu"]) : en.intl.string(en.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(S.$, {
            variant: "primary",
            text: en.intl.string(en.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return en.intl.string(en.t.Xjlbvs);
        if (this.isPartyFull()) return en.intl.string(en.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e
            ? en.intl.string(en.t.jD1qzM)
            : e.isMultiUserDM()
              ? en.intl.string(en.t.NB5DFD)
              : en.intl.string(en.t["PWkO7+"]);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = Q.default.getUser(t),
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
            let n = Q.default.getUser(t),
                i = null != n ? n.username : "";
            return en.intl.format(en.t["eg+R9x"], { username: i });
        }
        let n = (0, eN.G)("PrivateChannelRecipientsInvite");
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
            { current: l } = this.searchBarRef;
        if (null == l) return;
        let s = this.getDisplayedResults(),
            r = t;
        switch (e.key) {
            case ek.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case ek.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++r >= s.length && (r = 0), this.handleSelectionChange(r);
                break;
            case ek.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (r = s.length - 1), this.handleSelectionChange(r);
                break;
            case ek.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), s.length > r && this.handleSelect(r);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let l = (0, eN.G)("PrivateChannelRecipientsInvite"),
            s = [];
        n.forEach((e) => {
            let t = Q.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: ee.Ay.getName(t),
                    icon: l ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: r, selectedRow: a, isLoading: o } = this.props,
            u = r.length > 0 || o,
            d = !1;
        if (l)
            for (let e of n) {
                if (eE.A.isFriend(e)) continue;
                let t = Q.default.getUser(e);
                if (null != t && !t.bot) {
                    d = !0;
                    break;
                }
            }
        return (0, i.jsxs)("div", {
            className: eH.ON,
            children: [
                (0, i.jsx)(m.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: l ? en.intl.string(d ? en.t.xHuK72 : en.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (l ? en.intl.string(en.t["5h0QOP"]) : en.intl.string(en.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eB,
                    "aria-expanded": u,
                    "aria-activedescendant": u ? `user-row-${a}` : void 0,
                }),
                this.renderAddUsersButton(),
                l && (0, i.jsx)(eX, { targetElementRef: this.searchBarRef }),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eH.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(_.xp, {
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
                    innerId: eB,
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
                            (0, i.jsx)(p.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: en.intl.string(en.t.z3yXsY),
                            }),
                            (0, i.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: en.intl.string(t ? en.t["l6Rj+t"] : en.t["7w2iq7"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsx)("div", {
                    className: eH.wV,
                    children: (0, i.jsx)(p.E, {
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
            l = 0;
        for (let i = 0; i < e.length; i++) t.has(e[i].type) || ((n[i] = l), (l += e[i].results.length));
        let s = l;
        return {
            ref: this.scrollerRef,
            sections: e.map((e) => e.results.length + +!!e.showSpinner),
            className: eH.XG,
            innerClassName: eH.bv,
            renderRow: (l) => {
                let { section: r, row: a } = l,
                    o = e[r];
                if (null == o || t.has(o.type)) return null;
                if (a >= o.results.length)
                    return (0, i.jsx)("div", {
                        className: eH.Q_,
                        children: (0, i.jsx)(C.y, { type: C.t.SPINNING_CIRCLE, className: eH.u1 }),
                    });
                let u = o.results[a];
                if (null == u) return null;
                let d = n[r] + a;
                return this.renderUserRow(u, d, s);
            },
            rowHeight: (n, i) => {
                let l = e[n];
                return null == l || t.has(l.type) ? 0 : i >= l.results.length ? 40 : 48 * (null != l.results[i]);
            },
            renderSection: (n) => {
                let { section: l } = n,
                    s = e[l];
                if (null == s) return null;
                let r = t.has(s.type),
                    a = "friends" === s.type ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
                    o = r ? N._ : T.a;
                return (0, i.jsxs)(A.D, {
                    className: eH.bV,
                    onClick: () => this.handleSectionToggle(s.type),
                    "aria-expanded": !r,
                    "aria-label": a,
                    children: [
                        (0, i.jsx)(v.D, { variant: "heading-sm/semibold", color: "text-muted", children: a }),
                        (0, i.jsx)(o, { size: "xxs" }),
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
            innerId: eB,
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
                this.props.selectedRow >= e.length && b.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: l, selectedRow: s, hideDiscriminator: r, channel: a } = this.props,
            { user: o, comparator: u, mutualGuilds: d } = e,
            c = l.has(o.id) || a?.recipients.includes(o.id),
            h = (!c && 0 >= this.getRemaining()) || a?.recipients.includes(o.id);
        return (0, i.jsx)(
            eF,
            {
                row: t,
                user: o,
                hideDiscriminator: r,
                comparator: u,
                mutualGuilds: d,
                checked: c,
                disabled: h,
                selected: t === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": t + 1,
                "aria-setsize": n,
            },
            o.id,
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
            l = i[n];
        return null == l ? null : this.renderUserRow(l, n, i.length);
    };
    renderEmptySection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = (0, eN.G)("PrivateChannelRecipientsInvite"),
            r = null != t ? (0, el.A)(t.code) : "",
            a = r.length > 0;
        return (0, i.jsx)(M.D, {
            label: s ? en.intl.string(en.t.dTqtcN) : en.intl.string(en.t.t3O2BR),
            helperText: r.length > 0 ? en.intl.format(en.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(y.e, {
                supportsCopy: eS.p5,
                placeholder: (0, el.A)(en.intl.string(en.t.lPVBqP)),
                value: a ? (n ? en.intl.string(en.t["6HzNgZ"]) : r) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: a ? (l ? en.intl.string(en.t.q30c5i) : en.intl.string(en.t.OpuAlK)) : en.intl.string(en.t.qzxqUf),
                mode: l ? y.q.SUCCESS : y.q.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(r) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = Q.default.getUser(e),
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
        if (null == t) {
            let e = n.size > 1,
                t = new Set(n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(eQ, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: t,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: en.intl.string(en.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        }
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let l = this.getInviteLinkFooter();
        return null != l ? { actionBarInput: l } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? D.ip.ENTERED,
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
            j.A.sendRequest({
                discordTag: ee.Ay.getUserTag(e, { identifiable: "always" }),
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
        let { channel: t } = this.props;
        if (null == e) return void b.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id, e);
    };
    handleSelectionChange = (e) => {
        b.select(e);
        let t = this.scrollerRef.current;
        if (null == t) return;
        let n = this.getResultsSections();
        if (null == n) return void t.scrollToIndex({ section: 0, row: e, padding: 8 });
        let { collapsedSections: i } = this.state,
            l = e;
        for (let e = 0; e < n.length; e++)
            if (!i.has(n[e].type)) {
                if (l < n[e].results.length) return void t.scrollToIndex({ section: e, row: l, padding: 8 });
                l -= n[e].results.length;
            }
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, B.dI)(t);
        b.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ep.default.track(et.HAw.SEARCH_USER_LIST_STARTED, {
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
            let t = Q.default.getUser(e);
            null != t &&
                R.O.announce(en.intl.formatToPlainString(en.t.JL1QSg, { username: ee.Ay.getName(t) }), "polite"),
                b.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                { selectedUsers: i, query: l, channel: s } = e.props;
            if (s?.recipients.includes(t)) return;
            let r = !i.has(t),
                a = e.getResultsSections(),
                o = 0,
                u = n;
            if (null != a) {
                let i = eE.A.isFriend(t);
                o = i ? 1 : 2;
                let { collapsedSections: l } = e.state,
                    s = i ? "friends" : "serverMembers",
                    r = 0;
                for (let e of a) {
                    if (e.type === s) break;
                    l.has(e.type) || (r += e.results.length);
                }
                u = n - r;
            }
            let d = Q.default.getUser(t);
            r
                ? e.getRemaining() > 0 &&
                  (ep.default.track(et.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                      ...(0, B.dI)(s),
                      section: o,
                      row: u,
                      interaction_type: "select",
                      affinity_score: eo.A.getUserAffinity(t)?.communicationProbability ?? -1,
                  }),
                  b.addUser(t),
                  null != d &&
                      R.O.announce(en.intl.formatToPlainString(en.t.iyKU50, { username: ee.Ay.getName(d) }), "polite"),
                  l.length > 0 && (b.clear(s?.id), e.forceFocus()))
                : (ep.default.track(et.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                      ...(0, B.dI)(s),
                      section: o,
                      row: u,
                      interaction_type: "deselect",
                      affinity_score: eo.A.getUserAffinity(t)?.communicationProbability ?? -1,
                  }),
                  b.removeUser(t),
                  null != d &&
                      R.O.announce(en.intl.formatToPlainString(en.t.JL1QSg, { username: ee.Ay.getName(d) }), "polite"));
        };
    })();
    handleAddFriendNavigation = () => {
        G.A.transitionToSection(et.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            ep.default.track(et.HAw.GDM_EDIT_INTERACTED, {
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
            i = (0, B.dI)(n),
            l = !0;
        1 === e.length && (l = null == P.A._openCachedDMChannel(e[0]));
        let s = (0, B.g4)(e);
        ep.default.track(et.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...i,
            is_new_dm: l,
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
        let r = (0, eN.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: a, inviteLinkOnlyUserIds: o } =
                r && e.length > 1 ? ez(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        eJ({ recipientIds: a, location: "New Group DM", useGroupDmShell: r && o.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, H.A.NEW_GROUP_DM_INVITE_MODAL), ei(e, o);
            })
            .catch(eZ);
    };
    pushToExistingDM = (e, t) => {
        let n = (0, eN.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: i, inviteLinkOnlyUserIds: l } = n
                ? ez(t)
                : { channelRecipientIds: t, inviteLinkOnlyUserIds: [] },
            s = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(s, i, l)
            : e.isDM() && this._promoteDMToGroupDM(s, e.getRecipientId(), i, l, n);
        let r = (0, B.g4)(t);
        ep.default.track(et.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...(0, B.dI)(e),
            is_new_dm: e.isDM(),
            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
            recipient_ids: t,
            num_searches: this._searchCounter,
            affinity_score: this._getUserAffinities(t).affinities,
            friend_recipient_count: r.friendCount,
            non_friend_recipient_count: r.nonFriendCount,
        });
    };
    _addRecipientsToExistingGroupDM = (e, t, n) => {
        let i = ef.A.getChannelId() === e;
        (t.length > 0 ? P.A.addRecipients(e, t, et.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e), ei(e, n), i && t.length > 0 && L.A.ring(e, t, "dm_invite");
            })
            .catch(eZ);
    };
    _promoteDMToGroupDM = (e, t, n, i, l) => {
        let s = ef.A.getChannelId() === e,
            r = eW(t),
            a = l && r ? [...n, t] : n,
            o = l && !r ? [...i, t] : i;
        (r && n.length > 0
            ? P.A.addRecipients(e, n, et.ThZ.ADD_FRIENDS_TO_DM)
            : a.length > 0 || o.length > 0
              ? eJ({ recipientIds: a, location: "New Group DM", useGroupDmShell: l && o.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), ei(t, o), s)) {
                    if (t !== e) return void L.A.call(t, !1, !0);
                    n.length > 0 && L.A.ring(t, n, "dm_invite");
                }
            })
            .catch(eZ);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            l = Array.from(t);
        if (null != e) {
            let t = e3(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, x.openModal)(
                      (n) => (0, i.jsx)(eK, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, x.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = e3(l);
            l.length > 1 && e.size > 0
                ? (0, x.openModal)(
                      (t) => (0, i.jsx)(eK, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, x.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, eS.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            ep.default.track(et.HAw.COPY_INSTANT_INVITE, {
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
function eQ(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: s, onIconRemove: r, onChange: a } = e,
        { analyticsLocations: o } = (0, Y.Ay)(H.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, z.Jo)(Array.from(t), Q.default, eE.A);
    return (0, i.jsxs)("div", {
        className: eH.zj,
        children: [
            (0, i.jsx)($.X, {
                className: eH.r9,
                channel: null,
                previewIcon: l,
                onIconChange: s,
                onIconRemove: r,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(p.E, {
                className: eH.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: en.intl.string(en.t.YynaLK),
            }),
            (0, i.jsx)(m.k, {
                "aria-label": en.intl.string(en.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function e0(e) {
    let { channel: t, onComplete: n, entryPointType: l, ...s } = e,
        r = (0, u.cf)([eI.A, eg.A, eh.A, ec.A, eE.A], () => {
            let e;
            return (
                null != t && null != (e = eh.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...eg.A.getState(),
                    hasFriends: eE.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: eI.A.hidePersonalInformation,
                    hideInstantInvites: eI.A.hideInstantInvites,
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
        );
    return (0, i.jsx)(eq, { channel: t, isStaffOnlyDM: a, onComplete: n, entryPointType: l, ...s, ...r });
}
function e1(e) {
    let { channel: t, subscribeToGlobalHotkey: n, entryPointType: s } = e,
        r = `channel-invite-modal-${t?.id}`,
        a = (0, x.useHasModalOpen)(r),
        o = l.useCallback(
            () =>
                (0, x.openModalLazy)(
                    () => Promise.resolve((e) => (0, i.jsx)(e0, { ...e, channel: t, entryPointType: s })),
                    { modalKey: r },
                ),
            [t, s, r],
        ),
        u = l.useCallback(() => (a ? (0, x.closeModal)(r) : o()), [a, r, o]);
    return (
        l.useEffect(
            () => (
                n && em._.subscribe(et.jej.TOGGLE_DM_CREATE, u),
                () => {
                    em._.unsubscribe(et.jej.TOGGLE_DM_CREATE, u);
                }
            ),
            [n, u],
        ),
        (0, k.Ay)(() => {
            (0, ea.u)();
        }),
        { showModal: o, toggleVisible: u }
    );
}
function e2(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, x.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(e0, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function e9(e) {
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
        h = r ?? (null == t ? O.g : U.D),
        { showModal: g } = e1({ channel: t, subscribeToGlobalHotkey: d }),
        f = (0, u.bG)([Q.default], () => Q.default.getUser(t?.getRecipientId()));
    return f?.bot || f?.isProvisional
        ? null
        : (0, i.jsx)(eT.Ay.Icon, {
              ref: c,
              onClick: g,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: a,
              tooltipPosition: o,
          });
}
function e7(e) {
    let {
            channel: t,
            fullWidth: n = !1,
            text: s,
            icon: r,
            subscribeToGlobalHotkey: a = !1,
            allowFrictionlessGDMUpsell: o,
            entryPointType: u,
            ...c
        } = e,
        h = l.useRef(null),
        { showModal: g } = e1({ channel: t, subscribeToGlobalHotkey: a, entryPointType: u }),
        f = l.useMemo(() => (o ? [d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK] : []), [o]),
        [A, E] = (0, Z.kn)(f),
        I = l.useCallback(() => {
            A === d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && E(ej.i.TAKE_ACTION), g();
        }, [g, A, E]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.$, {
                variant: "primary",
                ...c,
                onClick: I,
                buttonRef: h,
                text: s,
                "aria-label": s,
                icon: r,
                fullWidth: n,
            }),
            A === d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && (0, i.jsx)(eV, { targetElementRef: h, markAsDismissed: E }),
        ],
    });
}
function e3(e) {
    let t = e5(e);
    return new Set(
        (0, s.chain)(ed.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, eu.MK)(e.type))
            .filter((e) => e5(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function e5(e) {
    return JSON.stringify(e.sort());
}
