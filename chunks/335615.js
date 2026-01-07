n.d(t, {
    C: () => ed,
    Z: () => es,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    f = n(442837),
    p = n(481060),
    _ = n(239091),
    m = n(941028),
    h = n(144144),
    g = n(276264),
    E = n(607070),
    b = n(100527),
    y = n(367907),
    O = n(906732),
    v = n(493324),
    S = n(611064),
    I = n(677432),
    T = n(178762),
    C = n(868671),
    A = n(82295),
    N = n(313201),
    P = n(623624),
    R = n(518738),
    w = n(850020),
    D = n(48950),
    x = n(155409),
    L = n(670188),
    j = n(706454),
    M = n(439170),
    k = n(485386),
    U = n(944486),
    G = n(111583),
    Z = n(594174),
    F = n(979651),
    B = n(585483),
    V = n(823379),
    H = n(51144),
    Y = n(998502),
    W = n(981631),
    K = n(388032),
    z = n(791486);
function q(e, t, n) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ee(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let et = Y.ZP.getEnableHardwareAcceleration(),
    en = 18,
    er = 42,
    ei = {
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
    ea = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: a,
                colorRoleName: o,
                colorRoleId: s,
                isOwner: l,
                nick: c,
                user: u,
                currentUser: f,
                activities: p,
                applicationStream: m,
                status: E,
                channel: b,
                guildId: y,
                isTyping: O,
                isMobileOnline: v,
                premiumSince: S,
                nameplate: I,
            } = e,
            T = $(e, [
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
            C = i.useRef(null),
            [A, N] = i.useState(!1),
            R = null != S ? new Date(S) : null,
            w = i.useCallback(
                (e) => {
                    (0, _.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("66165"),
                                n.e("6915"),
                                n.e("8982"),
                                n.e("7717"),
                                n.e("75548"),
                            ]).then(n.bind(n, 757387)),
                            t = F.Z.isInChannel(U.Z.getVoiceChannelId(), u.id);
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                J(Q({}, n), {
                                    user: u,
                                    guildId: y,
                                    channel: b,
                                    showMediaItems: t,
                                }),
                            );
                    });
                },
                [u, y, b],
            ),
            D = i.useCallback(() => {
                let e = "@".concat(H.ZP.getUserTag(u, { decoration: "never" })),
                    t = "<@".concat(u.id, ">");
                B.S.dispatch(W.CkL.TEXTAREA_FOCUS, { channelId: b.id }),
                    B.S.dispatchToLastSubscribed(W.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: t,
                    }),
                    h.Z.startTyping(b.id);
            }, [u, b.id]),
            x = i.useCallback(
                (e) => {
                    null != y &&
                        (e.stopPropagation(),
                        (0, P.f)({
                            guildId: y,
                            location: {
                                section: W.jXE.MEMBER_LIST,
                                object: W.qAy.BOOST_GEM_ICON,
                            },
                        }));
                },
                [y],
            );
        return (0, r.jsx)(L.Z, {
            targetElementRef: C,
            user: u,
            guildId: y,
            channelId: b.id,
            roleId: s,
            position: d.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: D,
            shouldShow: A,
            onRequestClose: () => {
                N(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i } = e,
                    s = $(e, ["onClick", "onMouseDown"]);
                return (0, r.jsx)(
                    g.Z,
                    Q(
                        {
                            ref: C,
                            className: z.member,
                            onContextMenu: w,
                            shouldAnimateStatus: et,
                            user: u,
                            currentUser: f,
                            nick: c,
                            status: E,
                            activities: p,
                            applicationStream: m,
                            isOwner: l,
                            premiumSince: R,
                            colorString: t,
                            colorStrings: a,
                            colorRoleName: o,
                            isTyping: O,
                            channel: b,
                            guildId: y,
                            isMobile: v,
                            onClickPremiumGuildIcon: x,
                            selected: A,
                            itemProps: T,
                            nameplate: I,
                            onClick: (e) => {
                                e.shiftKey ? null == D || D() : N((e) => !e);
                            },
                            onMouseDown: (e) => {
                                A ? e.stopPropagation() : null == i || i(e);
                            },
                        },
                        s,
                    ),
                );
            },
        });
    }),
    eo = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = $(e, ["colorRoleId"]),
            { channel: i, user: a, index: o } = e,
            s = (0, c.JA)("".concat(o)),
            l = (0, f.e7)([G.Z], () => G.Z.isTyping(i.id, a.id)),
            u = (0, f.e7)([Z.default], () => Z.default.getCurrentUser()),
            d = (0, f.e7)([k.Z], () => {
                var e;
                return null != t ? (null == (e = k.Z.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
            }, [i, t]),
            p = (0, w.K)({
                user: a,
                guildId: i.guild_id,
            });
        return (0, r.jsx)(
            ea,
            J(Q({}, n, s), {
                isTyping: l,
                currentUser: u,
                colorRoleName: d,
                nameplate: p,
            }),
        );
    }),
    es = i.memo(function (e) {
        let { id: t, title: n, count: i, guildId: a, className: o } = e,
            s = (0, R.p9)({
                roleId: t,
                guildId: a,
                size: 16,
            }),
            l = (0, f.e7)([j.default], () => (null == i ? null : new Intl.NumberFormat(j.default.locale).format(i)), [
                i,
            ]);
        return t === W.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: o,
                  children: (0, r.jsx)("div", { className: z.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(A.Z, {
                  className: o,
                  children: [
                      (0, r.jsx)(p.nn4, {
                          children:
                              null == i
                                  ? n
                                  : K.intl.format(K.t.Uaqbke, {
                                        title: n,
                                        count: i,
                                    }),
                      }),
                      (0, r.jsxs)("div", {
                          className: z.membersGroupHeader,
                          "aria-hidden": !0,
                          children: [
                              null != s ? (0, r.jsx)(D.Z, Q({ className: z.roleIcon }, s)) : null,
                              (0, r.jsx)("span", {
                                  className: z.membersGroupName,
                                  children: n,
                              }),
                              null == l
                                  ? null
                                  : (0, r.jsxs)("span", {
                                        children: ["\xA0\u2014 ", l],
                                    }),
                          ],
                      }),
                  ],
              });
    });
function el(e) {
    let { index: t } = e,
        n = (0, c.JA)("".concat(t));
    return (0, r.jsx)(g.Z, { itemProps: n });
}
class ec extends i.Component {
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
            (this._areActivitiesExperimentallyHidden = (0, v.$)("ChannelMembers"));
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: r } = e,
            i = this.getContentFeedHeight(),
            a = Math.max(0, t - Math.max(0, i - r)),
            o = Math.floor(a / n);
        return {
            height: a,
            rowHeight: n,
            rowsVisible: o,
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
        return (0, r.jsx)(p.Wdt, {
            children: (a) =>
                (0, r.jsx)(N.FG, {
                    children: (s) =>
                        (0, r.jsx)("aside", {
                            className: o()(z.membersWrap, z.hiddenMembers),
                            "aria-labelledby": s,
                            children: (0, r.jsx)(p.y5t, {
                                component: (0, r.jsx)(p.nn4, {
                                    children: (0, r.jsx)(p.H, {
                                        id: s,
                                        children: K.intl.format(K.t.JBQxV6, { channel: n.name }),
                                    }),
                                }),
                                children: (0, r.jsx)(c.SJ, {
                                    children: (n) => {
                                        var { ref: s, role: l } = n,
                                            c = $(n, ["ref", "role"]);
                                        return (0, r.jsx)(
                                            p.aVo,
                                            Q(
                                                {
                                                    innerRole: l,
                                                    innerAriaLabel: K.intl.string(K.t["9Oq93m"]),
                                                    ref: (e) => {
                                                        var t;
                                                        (this._list = e),
                                                            (this.props.listRef.current = e),
                                                            (s.current =
                                                                null != (t = null == e ? void 0 : e.getScrollerNode())
                                                                    ? t
                                                                    : null);
                                                    },
                                                    className: o()(z.members, { [z.fullWidth]: d.tq }),
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
                                                a,
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
            q(this, "_list", null),
            q(this, "_areActivitiesExperimentallyHidden", !1),
            q(this, "_firstApplicationIdOccurrences", null),
            q(this, "_lastRowsVersion", void 0),
            q(this, "lastReportedAnalyticsChannel", void 0),
            q(this, "setList", (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            q(this, "renderSection", (e) => {
                let { section: t } = e,
                    { groups: n, channel: a } = this.props,
                    o = n[t];
                if ((0, S.R)(o)) return (0, i.createElement)(S.Z, J(Q({}, o), { key: "section-".concat(t) }));
                if (0 === t) {
                    let { key: e } = o;
                    return (0, r.jsx)(
                        x.Z,
                        {
                            tutorialId: "whos-online",
                            position: "left",
                            inlineSpecs: ei,
                            children: (0, i.createElement)(
                                es,
                                J(Q({}, o), {
                                    key: "section-".concat(e),
                                    guildId: a.guild_id,
                                    className: z.membersGroup,
                                }),
                            ),
                        },
                        "section-".concat(t),
                    );
                }
                return (0, i.createElement)(
                    es,
                    J(Q({}, o), {
                        key: "section-".concat(t),
                        guildId: a.guild_id,
                        className: z.membersGroup,
                    }),
                );
            }),
            q(this, "getRowProps", (e) => {
                let { groups: t, rows: n } = this.props,
                    r = t[e.section];
                if (null == r) return null;
                let { index: i } = r;
                return null == i || "row" !== e.type ? null : n[i + 1 + e.row];
            }),
            q(this, "getFirstApplicationIdOccurrences", () => {
                let { rows: e, version: t } = this.props;
                if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
                    return this._firstApplicationIdOccurrences;
                let n = new Set(),
                    r = new Set();
                for (let t of e)
                    if (null != t && t.type === M.so.CONTENT_INVENTORY) {
                        let { entry: e } = t;
                        if ("application_id" in e.extra && null != e.extra.application_id) {
                            let t = e.extra.application_id;
                            n.has(t) || (n.add(t), r.add(e.id));
                        }
                    }
                return (this._firstApplicationIdOccurrences = r), (this._lastRowsVersion = t), r;
            }),
            q(this, "renderRow", (e) => {
                let { section: t, row: n, rowIndex: i } = e,
                    { channel: a } = this.props,
                    o = this.getRowProps(e);
                if (null != o) {
                    if (o.type === M.so.MEMBER && "user" in o) {
                        let {
                            colorString: e,
                            colorStrings: t,
                            colorRoleId: n,
                            user: s,
                            status: l,
                            isOwner: c,
                            isMobileOnline: u,
                            nick: d,
                            activities: f,
                            applicationStream: p,
                            premiumSince: _,
                        } = o;
                        return (0, r.jsx)(
                            eo,
                            {
                                colorString: e,
                                colorStrings: t,
                                colorRoleId: n,
                                user: s,
                                status: l,
                                isOwner: c,
                                nick: d,
                                activities: this._areActivitiesExperimentallyHidden ? [] : f,
                                applicationStream: p,
                                channel: a,
                                guildId: a.guild_id,
                                premiumSince: _,
                                isMobileOnline: u,
                                index: i,
                            },
                            "member-".concat(o.user.id),
                        );
                    }
                    if (o.type === M.so.CONTENT_INVENTORY) {
                        let e = "content-inventory-".concat(o.entry.id);
                        null != o.entry.original_id && (e += "-".concat(o.entry.original_id));
                        let t = this.getFirstApplicationIdOccurrences().has(o.entry.id);
                        return (0, r.jsx)(
                            T.ZP,
                            J(Q({}, o), {
                                channel: this.props.channel,
                                index: i,
                                isFirstApplicationOccurrence: t,
                            }),
                            e,
                        );
                    }
                    if (o.type === M.so.HIDDEN_CONTENT_INVENTORY)
                        return (0, r.jsx)(I.Z, {}, "content-inventory-hidden-entry");
                }
                return (0, r.jsx)(el, { index: i }, "placeholder-".concat(t, ":").concat(n));
            }),
            q(this, "handleScroll", () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            q(
                this,
                "updateMaxContentFeedRowSeen",
                l().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
                        r = n + t - this.props.sectionHeight;
                    this.props.updateMaxContentFeedRowSeen(r);
                }, 50),
            ),
            q(this, "getContentFeedGroup", () => {
                let e = this.props.groups[C.T];
                if ((0, S.R)(e)) return e;
            }),
            q(this, "hasContentFeed", () => null != this.getContentFeedGroup()),
            q(this, "getRowHeightComputer", () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        r = e.index;
                    return function (e, i) {
                        if (e === C.T) {
                            let e = n[r + 1 + i];
                            return (0, T.iZ)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            q(this, "getContentFeedHeight", () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + this.props.sectionHeight : 0;
            }),
            q(
                this,
                "updateSubscription",
                l().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: r } = this.getDimensions();
                    (0, m.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: r,
                        rowHeight: t,
                    });
                }, 50),
            ),
            q(this, "trackMemberListViewed", () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null == (e = this._list) ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== C.T));
                let r = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(V.lm);
                if (0 === r.length) return;
                let i = r.reduce(
                    (e, t) => {
                        var n;
                        return (
                            t.type !== M.so.MEMBER ||
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
                    y.ZP.trackWithMetadata(W.rMx.MEMBER_LIST_VIEWED, Q({}, i));
            });
    }
}
function eu(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: a } = (0, O.ZP)(b.Z.MEMBER_LIST),
        s = (0, f.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        l = (0, f.cj)([M.ZP], () => M.ZP.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: _,
            version: m,
            updateMaxRowSeen: h,
        } = (0, C.H)({
            memberStoreProps: l,
            channelId: t.id,
            guildId: t.guild_id,
        }),
        g = i.useRef(null),
        y = en + ((0, p.UBm)("lg") + (0, p.UBm)("xxs")),
        v = er,
        S = i.useCallback(
            (e, t) => {
                let n = g.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, a] = n.getSectionRowFromIndex(r),
                    o = 0 === i && 0 === a ? v : 0;
                n.scrollToIndex({
                    section: i,
                    row: a,
                    padding: o,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    },
                });
            },
            [v],
        ),
        I = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        T = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        A = (0, u.ZP)({
            id: "members-".concat(t.id),
            setFocus: S,
            isEnabled: s,
            scrollToStart: I,
            scrollToEnd: T,
        });
    return (0, r.jsx)(O.Gt, {
        value: a,
        children: (0, r.jsx)("div", {
            className: o()(z.container, n),
            children: (0, r.jsx)(c.bG, {
                navigator: A,
                children: (0, r.jsx)(
                    ec,
                    J(Q({}, e, l), {
                        version: m,
                        groups: _,
                        rows: d,
                        listRef: g,
                        updateMaxContentFeedRowSeen: h,
                        sectionHeight: y,
                        rowHeight: v,
                    }),
                ),
            }),
        }),
    });
}
function ed(e) {
    let { channel: t, className: n } = e,
        a = i.useDeferredValue(t);
    return i.useMemo(
        () =>
            (0, r.jsx)(eu, {
                channel: a,
                className: n,
            }),
        [a, n],
    );
}
