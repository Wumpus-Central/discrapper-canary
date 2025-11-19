n.d(t, { Z: () => es }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    d = n(924826),
    u = n(873546),
    p = n(442837),
    h = n(481060),
    f = n(239091),
    g = n(941028),
    m = n(144144),
    b = n(276264),
    _ = n(607070),
    y = n(100527),
    O = n(367907),
    j = n(906732),
    x = n(493324),
    v = n(611064),
    C = n(677432),
    I = n(178762),
    S = n(868671),
    E = n(82295),
    Z = n(313201),
    P = n(623624),
    T = n(518738),
    N = n(850020),
    R = n(48950),
    w = n(155409),
    A = n(456077),
    D = n(706454),
    L = n(439170),
    M = n(485386),
    k = n(944486),
    U = n(111583),
    G = n(594174),
    H = n(979651),
    F = n(585483),
    B = n(823379),
    V = n(51144),
    z = n(998502),
    W = n(981631),
    Y = n(388032),
    q = n(32482);
function K(e, t, n) {
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
function Q(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function J(e, t) {
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
let $ = z.ZP.getEnableHardwareAcceleration(),
    ee = {
        origin: {
            x: 38,
            y: 11,
        },
        targetWidth: 232,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0,
        },
    },
    et = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: l,
                colorRoleName: a,
                colorRoleId: s,
                isOwner: o,
                nick: c,
                user: d,
                currentUser: p,
                activities: h,
                applicationStream: g,
                status: _,
                channel: y,
                guildId: O,
                isTyping: j,
                isMobileOnline: x,
                premiumSince: v,
                nameplate: C,
            } = e,
            I = J(e, [
                "colorString",
                "colorStrings",
                "colorRoleName",
                "colorRoleId",
                "isOwner",
                "nick",
                "user",
                "currentUser",
                "activities",
                "applicationStream",
                "status",
                "channel",
                "guildId",
                "isTyping",
                "isMobileOnline",
                "premiumSince",
                "nameplate",
            ]),
            S = i.useRef(null),
            [E, Z] = i.useState(!1),
            T = null != v ? new Date(v) : null,
            N = i.useCallback(
                (e) => {
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("66165"),
                                n.e("8982"),
                                n.e("7717"),
                                n.e("52021"),
                            ]).then(n.bind(n, 757387)),
                            t = H.Z.isInChannel(k.Z.getVoiceChannelId(), d.id);
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                X(Q({}, n), {
                                    user: d,
                                    guildId: O,
                                    channel: y,
                                    showMediaItems: t,
                                }),
                            );
                    });
                },
                [d, O, y],
            ),
            R = i.useCallback(() => {
                let e = "@".concat(V.ZP.getUserTag(d, { decoration: "never" })),
                    t = "<@".concat(d.id, ">");
                F.S.dispatch(W.CkL.TEXTAREA_FOCUS, { channelId: y.id }),
                    F.S.dispatchToLastSubscribed(W.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: t,
                    }),
                    m.Z.startTyping(y.id);
            }, [d, y.id]),
            w = i.useCallback(
                (e) => {
                    null != O &&
                        (e.stopPropagation(),
                        (0, P.f)({
                            guildId: O,
                            location: {
                                section: W.jXE.MEMBER_LIST,
                                object: W.qAy.BOOST_GEM_ICON,
                            },
                        }));
                },
                [O],
            );
        return (0, r.jsx)(A.Z, {
            targetElementRef: S,
            user: d,
            guildId: O,
            channelId: y.id,
            roleId: s,
            position: u.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: R,
            shouldShow: E,
            onRequestClose: () => {
                Z(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i } = e,
                    s = J(e, ["onClick", "onMouseDown"]);
                return (0, r.jsx)(
                    b.Z,
                    Q(
                        {
                            ref: S,
                            className: q.member,
                            onContextMenu: N,
                            shouldAnimateStatus: $,
                            user: d,
                            currentUser: p,
                            nick: c,
                            status: _,
                            activities: h,
                            applicationStream: g,
                            isOwner: o,
                            premiumSince: T,
                            colorString: t,
                            colorStrings: l,
                            colorRoleName: a,
                            isTyping: j,
                            channel: y,
                            guildId: O,
                            isMobile: x,
                            onClickPremiumGuildIcon: w,
                            selected: E,
                            itemProps: I,
                            nameplate: C,
                            onClick: (e) => {
                                e.shiftKey ? null == R || R() : Z((e) => !e);
                            },
                            onMouseDown: (e) => {
                                E ? e.stopPropagation() : null == i || i(e);
                            },
                        },
                        s,
                    ),
                );
            },
        });
    }),
    en = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = J(e, ["colorRoleId"]),
            { channel: i, user: l, index: a } = e,
            s = (0, c.JA)("".concat(a)),
            o = (0, p.e7)([U.Z], () => U.Z.isTyping(i.id, l.id)),
            d = (0, p.e7)([G.default], () => G.default.getCurrentUser()),
            u = (0, p.e7)([M.Z], () => {
                var e;
                return null != t ? (null == (e = M.Z.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
            }, [i, t]),
            h = (0, N.K)({
                user: l,
                guildId: i.guild_id,
            });
        return (0, r.jsx)(
            et,
            X(Q({}, n, s), {
                isTyping: o,
                currentUser: d,
                colorRoleName: u,
                nameplate: h,
            }),
        );
    }),
    er = i.memo(function (e) {
        let { id: t, title: n, count: i, guildId: l } = e,
            a = (0, T.p9)({
                roleId: t,
                guildId: l,
                size: 16,
            }),
            s = (0, p.e7)([D.default], () => new Intl.NumberFormat(D.default.locale).format(i), [i]);
        return t === W.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: q.membersGroup,
                  children: (0, r.jsx)("div", { className: q.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(E.Z, {
                  className: q.membersGroup,
                  children: [
                      (0, r.jsx)(h.nn4, {
                          children: Y.intl.format(Y.t.Uaqbke, {
                              title: n,
                              count: i,
                          }),
                      }),
                      (0, r.jsxs)("span", {
                          "aria-hidden": !0,
                          children: [
                              null != a ? (0, r.jsx)(R.Z, Q({ className: q.roleIcon }, a)) : null,
                              n,
                              " \u2014 ",
                              s,
                          ],
                      }),
                  ],
              });
    });
function ei(e) {
    let { index: t } = e,
        n = (0, c.JA)("".concat(t));
    return (0, r.jsx)(b.Z, { itemProps: n });
}
class el extends i.Component {
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        this.updateSubscription(),
            this.trackMemberListViewed(),
            (this._areActivitiesExperimentallyHidden = (0, x.$)("ChannelMembers"));
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: r } = e,
            i = this.getContentFeedHeight(),
            l = Math.max(0, t - Math.max(0, i - r)),
            a = Math.floor(l / n);
        return {
            height: l,
            rowHeight: n,
            rowsVisible: a,
            y: Math.max(0, r - i),
        };
    }
    getDimensions() {
        let e = this._list;
        if (null == e)
            return {
                y: 0,
                height: 0,
                rowHeight: 0,
            };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: r } = this.props,
            i = Math.floor(t / r);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: r,
            rowsVisible: i,
            y: n,
        });
    }
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(h.Wdt, {
            children: (l) =>
                (0, r.jsx)(Z.FG, {
                    children: (s) =>
                        (0, r.jsx)("aside", {
                            className: a()(q.membersWrap, q.hiddenMembers),
                            "aria-labelledby": s,
                            children: (0, r.jsx)(h.y5t, {
                                component: (0, r.jsx)(h.nn4, {
                                    children: (0, r.jsx)(h.H, {
                                        id: s,
                                        children: Y.intl.format(Y.t.JBQxV6, { channel: n.name }),
                                    }),
                                }),
                                children: (0, r.jsx)(c.SJ, {
                                    children: (n) => {
                                        var { ref: s, role: o } = n,
                                            c = J(n, ["ref", "role"]);
                                        return (0, r.jsx)(
                                            h.aVo,
                                            Q(
                                                {
                                                    innerRole: o,
                                                    innerAriaLabel: Y.intl.string(Y.t["9Oq93m"]),
                                                    ref: (e) => {
                                                        var t;
                                                        (this._list = e),
                                                            (this.props.listRef.current = e),
                                                            (s.current =
                                                                null != (t = null == e ? void 0 : e.getScrollerNode())
                                                                    ? t
                                                                    : null);
                                                    },
                                                    className: a()(q.members, { [q.fullWidth]: u.tq }),
                                                    paddingTop: 0,
                                                    sectionHeight: i,
                                                    rowHeight: this.getRowHeightComputer(),
                                                    renderSection: this.renderSection,
                                                    renderRow: this.renderRow,
                                                    sections: e.map((e) => e.count),
                                                    onScroll: this.handleScroll,
                                                    fade: !0,
                                                },
                                                c,
                                                l,
                                            ),
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
    constructor(...e) {
        super(...e),
            K(this, "_list", null),
            K(this, "_areActivitiesExperimentallyHidden", !1),
            K(this, "_firstApplicationIdOccurrences", null),
            K(this, "_lastRowsVersion", void 0),
            K(this, "lastReportedAnalyticsChannel", void 0),
            K(this, "setList", (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            K(this, "renderSection", (e) => {
                let { section: t } = e,
                    { groups: n, channel: l } = this.props,
                    a = n[t];
                if ((0, v.R)(a)) return (0, i.createElement)(v.Z, X(Q({}, a), { key: "section-".concat(t) }));
                if (0 === t) {
                    let { key: e } = a;
                    return (0, r.jsx)(
                        w.Z,
                        {
                            tutorialId: "whos-online",
                            position: "left",
                            inlineSpecs: ee,
                            children: (0, i.createElement)(
                                er,
                                X(Q({}, a), {
                                    key: "section-".concat(e),
                                    guildId: l.guild_id,
                                }),
                            ),
                        },
                        "section-".concat(t),
                    );
                }
                return (0, i.createElement)(
                    er,
                    X(Q({}, a), {
                        key: "section-".concat(t),
                        guildId: l.guild_id,
                    }),
                );
            }),
            K(this, "getRowProps", (e) => {
                let { groups: t, rows: n } = this.props,
                    r = t[e.section];
                if (null == r) return null;
                let { index: i } = r;
                return null == i || "row" !== e.type ? null : n[i + 1 + e.row];
            }),
            K(this, "getFirstApplicationIdOccurrences", () => {
                let { rows: e, version: t } = this.props;
                if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
                    return this._firstApplicationIdOccurrences;
                let n = new Set(),
                    r = new Set();
                for (let t of e)
                    if (null != t && t.type === L.so.CONTENT_INVENTORY) {
                        let { entry: e } = t;
                        if ("application_id" in e.extra && null != e.extra.application_id) {
                            let t = e.extra.application_id;
                            n.has(t) || (n.add(t), r.add(e.id));
                        }
                    }
                return (this._firstApplicationIdOccurrences = r), (this._lastRowsVersion = t), r;
            }),
            K(this, "renderRow", (e) => {
                let { section: t, row: n, rowIndex: i } = e,
                    { channel: l } = this.props,
                    a = this.getRowProps(e);
                if (null != a) {
                    if (a.type === L.so.MEMBER && "user" in a) {
                        let {
                            colorString: e,
                            colorStrings: t,
                            colorRoleId: n,
                            user: s,
                            status: o,
                            isOwner: c,
                            isMobileOnline: d,
                            nick: u,
                            activities: p,
                            applicationStream: h,
                            premiumSince: f,
                        } = a;
                        return (0, r.jsx)(
                            en,
                            {
                                colorString: e,
                                colorStrings: t,
                                colorRoleId: n,
                                user: s,
                                status: o,
                                isOwner: c,
                                nick: u,
                                activities: this._areActivitiesExperimentallyHidden ? [] : p,
                                applicationStream: h,
                                channel: l,
                                guildId: l.guild_id,
                                premiumSince: f,
                                isMobileOnline: d,
                                index: i,
                            },
                            "member-".concat(a.user.id),
                        );
                    }
                    if (a.type === L.so.CONTENT_INVENTORY) {
                        let e = "content-inventory-".concat(a.entry.id);
                        null != a.entry.original_id && (e += "-".concat(a.entry.original_id));
                        let t = this.getFirstApplicationIdOccurrences().has(a.entry.id);
                        return (0, r.jsx)(
                            I.ZP,
                            X(Q({}, a), {
                                channel: this.props.channel,
                                index: i,
                                isFirstApplicationOccurrence: t,
                            }),
                            e,
                        );
                    }
                    if (a.type === L.so.HIDDEN_CONTENT_INVENTORY)
                        return (0, r.jsx)(C.Z, {}, "content-inventory-hidden-entry");
                }
                return (0, r.jsx)(ei, { index: i }, "placeholder-".concat(t, ":").concat(n));
            }),
            K(this, "handleScroll", () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            K(
                this,
                "updateMaxContentFeedRowSeen",
                o().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
                        r = n + t - this.props.sectionHeight;
                    this.props.updateMaxContentFeedRowSeen(r);
                }, 50),
            ),
            K(this, "getContentFeedGroup", () => {
                let e = this.props.groups[S.T];
                if ((0, v.R)(e)) return e;
            }),
            K(this, "hasContentFeed", () => null != this.getContentFeedGroup()),
            K(this, "getRowHeightComputer", () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        r = e.index;
                    return function (e, i) {
                        if (e === S.T) {
                            let e = n[r + 1 + i];
                            return (0, I.iZ)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            K(this, "getContentFeedHeight", () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + this.props.sectionHeight : 0;
            }),
            K(
                this,
                "updateSubscription",
                o().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: r } = this.getDimensions();
                    (0, g.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: r,
                        rowHeight: t,
                    });
                }, 50),
            ),
            K(this, "trackMemberListViewed", () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null == (e = this._list) ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== S.T));
                let r = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(B.lm);
                if (0 === r.length) return;
                let i = r.reduce(
                    (e, t) => {
                        var n;
                        return (
                            t.type !== L.so.MEMBER ||
                                (e.num_users_visible++,
                                t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                                null != t.activities &&
                                    t.activities.length > 0 &&
                                    (e.num_users_visible_with_activity++,
                                    t.activities.some((e) => e.type === W.IIU.PLAYING) &&
                                        e.num_users_visible_with_game_activity++),
                                null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                                (null == (n = t.user.collectibles) ? void 0 : n.nameplate) != null &&
                                    e.num_users_visible_with_nameplate++),
                            e
                        );
                    },
                    {
                        num_users_visible: 0,
                        num_users_visible_with_mobile_indicator: 0,
                        num_users_visible_with_game_activity: 0,
                        num_users_visible_with_activity: 0,
                        num_users_visible_with_avatar_decoration: 0,
                        num_users_visible_with_nameplate: 0,
                    },
                );
                (this.lastReportedAnalyticsChannel = this.props.channel.id),
                    O.ZP.trackWithMetadata(W.rMx.MEMBER_LIST_VIEWED, Q({}, i));
            });
    }
}
function ea(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: l } = (0, j.ZP)(y.Z.MEMBER_LIST),
        s = (0, p.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        o = (0, p.cj)([L.ZP], () => L.ZP.getProps(t.guild_id, t.id)),
        {
            rows: u,
            groups: f,
            version: g,
            updateMaxRowSeen: m,
        } = (0, S.H)({
            memberStoreProps: o,
            channelId: t.id,
            guildId: t.guild_id,
        }),
        b = i.useRef(null),
        O = (0, h.UBm)("lg") + (0, h.UBm)("xxs"),
        x = i.useCallback(
            (e, t) => {
                let n = b.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, l] = n.getSectionRowFromIndex(r);
                n.scrollToIndex({
                    section: i,
                    row: l,
                    padding: 42 * (0 === i && 0 === l),
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    },
                });
            },
            [42],
        ),
        v = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        C = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        I = (0, d.ZP)({
            id: "members-".concat(t.id),
            setFocus: x,
            isEnabled: s,
            scrollToStart: v,
            scrollToEnd: C,
        });
    return (0, r.jsx)(j.Gt, {
        value: l,
        children: (0, r.jsx)("div", {
            className: a()(q.container, n),
            children: (0, r.jsx)(c.bG, {
                navigator: I,
                children: (0, r.jsx)(
                    el,
                    X(Q({}, e, o), {
                        version: g,
                        groups: f,
                        rows: u,
                        listRef: b,
                        updateMaxContentFeedRowSeen: m,
                        sectionHeight: 18 + O,
                        rowHeight: 42,
                    }),
                ),
            }),
        }),
    });
}
function es(e) {
    let { channel: t, className: n } = e,
        l = i.useDeferredValue(t);
    return i.useMemo(
        () =>
            (0, r.jsx)(ea, {
                channel: l,
                className: n,
            }),
        [l, n],
    );
}
