n.d(t, { Z: () => eo }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    p = n(442837),
    h = n(481060),
    f = n(239091),
    m = n(941028),
    g = n(144144),
    b = n(276264),
    _ = n(607070),
    y = n(100527),
    C = n(367907),
    x = n(906732),
    v = n(493324),
    O = n(611064),
    j = n(677432),
    E = n(178762),
    S = n(868671),
    I = n(82295),
    P = n(91218),
    Z = n(313201),
    T = n(623624),
    N = n(518738),
    A = n(850020),
    w = n(155409),
    R = n(670188),
    M = n(706454),
    D = n(439170),
    L = n(485386),
    k = n(944486),
    U = n(111583),
    B = n(594174),
    F = n(979651),
    G = n(585483),
    H = n(823379),
    V = n(51144),
    z = n(998502),
    W = n(981631),
    q = n(388032),
    Y = n(32482);
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
function X(e) {
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
function Q(e, t) {
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
                colorRoleId: o,
                isOwner: s,
                nick: c,
                user: u,
                currentUser: p,
                activities: h,
                applicationStream: m,
                status: _,
                channel: y,
                guildId: C,
                isTyping: x,
                isMobileOnline: v,
                premiumSince: O,
                nameplate: j,
            } = e,
            E = J(e, [
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
            [I, P] = i.useState(!1),
            Z = null != O ? new Date(O) : null,
            N = i.useCallback(
                (e) => {
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("98783"),
                                n.e("8982"),
                                n.e("7717"),
                                n.e("52021"),
                            ]).then(n.bind(n, 757387)),
                            t = F.Z.isInChannel(k.Z.getVoiceChannelId(), u.id);
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                Q(X({}, n), {
                                    user: u,
                                    guildId: C,
                                    channel: y,
                                    showMediaItems: t,
                                }),
                            );
                    });
                },
                [u, C, y],
            ),
            A = i.useCallback(() => {
                let e = "@".concat(V.ZP.getUserTag(u, { decoration: "never" })),
                    t = "<@".concat(u.id, ">");
                G.S.dispatch(W.CkL.TEXTAREA_FOCUS, { channelId: y.id }),
                    G.S.dispatchToLastSubscribed(W.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: t,
                    }),
                    g.Z.startTyping(y.id);
            }, [u, y.id]),
            w = i.useCallback(
                (e) => {
                    null != C &&
                        (e.stopPropagation(),
                        (0, T.f)({
                            guildId: C,
                            location: {
                                section: W.jXE.MEMBER_LIST,
                                object: W.qAy.BOOST_GEM_ICON,
                            },
                        }));
                },
                [C],
            );
        return (0, r.jsx)(R.Z, {
            targetElementRef: S,
            user: u,
            guildId: C,
            channelId: y.id,
            roleId: o,
            position: d.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: A,
            shouldShow: I,
            onRequestClose: () => {
                P(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i } = e,
                    o = J(e, ["onClick", "onMouseDown"]);
                return (0, r.jsx)(
                    b.Z,
                    X(
                        {
                            ref: S,
                            className: Y.member,
                            onContextMenu: N,
                            shouldAnimateStatus: $,
                            user: u,
                            currentUser: p,
                            nick: c,
                            status: _,
                            activities: h,
                            applicationStream: m,
                            isOwner: s,
                            premiumSince: Z,
                            colorString: t,
                            colorStrings: l,
                            colorRoleName: a,
                            isTyping: x,
                            channel: y,
                            guildId: C,
                            isMobile: v,
                            onClickPremiumGuildIcon: w,
                            selected: I,
                            itemProps: E,
                            nameplate: j,
                            onClick: (e) => {
                                e.shiftKey ? null == A || A() : P((e) => !e);
                            },
                            onMouseDown: (e) => {
                                I ? e.stopPropagation() : null == i || i(e);
                            },
                        },
                        o,
                    ),
                );
            },
        });
    }),
    en = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = J(e, ["colorRoleId"]),
            { channel: i, user: l, index: a } = e,
            o = (0, c.JA)("".concat(a)),
            s = (0, p.e7)([U.Z], () => U.Z.isTyping(i.id, l.id)),
            u = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            d = (0, p.e7)([L.Z], () => {
                var e;
                return null != t ? (null == (e = L.Z.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
            }, [i, t]),
            h = (0, A.K)({
                user: l,
                guildId: i.guild_id,
                location: "ChannelMembers",
            });
        return (0, r.jsx)(
            et,
            Q(X({}, n, o), {
                isTyping: s,
                currentUser: u,
                colorRoleName: d,
                nameplate: h,
            }),
        );
    }),
    er = i.memo(function (e) {
        let { id: t, title: n, count: i, guildId: l } = e,
            a = (0, N.p9)({
                roleId: t,
                guildId: l,
                size: 16,
            }),
            o = (0, p.e7)([M.default], () => new Intl.NumberFormat(M.default.locale).format(i), [i]);
        return t === W.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: Y.membersGroup,
                  children: (0, r.jsx)("div", { className: Y.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(I.Z, {
                  className: Y.membersGroup,
                  children: [
                      (0, r.jsx)(h.nn4, {
                          children: q.intl.format(q.t.UaqbkZ, {
                              title: n,
                              count: i,
                          }),
                      }),
                      (0, r.jsxs)("span", {
                          "aria-hidden": !0,
                          children: [
                              null != a ? (0, r.jsx)(P.Z, X({ className: Y.roleIcon }, a)) : null,
                              n,
                              " \u2014 ",
                              o,
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
                    children: (o) =>
                        (0, r.jsx)("aside", {
                            className: a()(Y.membersWrap, Y.hiddenMembers),
                            "aria-labelledby": o,
                            children: (0, r.jsx)(h.y5t, {
                                component: (0, r.jsx)(h.nn4, {
                                    children: (0, r.jsx)(h.H, {
                                        id: o,
                                        children: q.intl.format(q.t.JBQxV1, { channel: n.name }),
                                    }),
                                }),
                                children: (0, r.jsx)(c.SJ, {
                                    children: (n) => {
                                        var { ref: o, role: s } = n,
                                            c = J(n, ["ref", "role"]);
                                        return (0, r.jsx)(
                                            h.aVo,
                                            X(
                                                {
                                                    innerRole: s,
                                                    innerAriaLabel: q.intl.string(q.t["9Oq93t"]),
                                                    ref: (e) => {
                                                        var t;
                                                        (this._list = e),
                                                            (this.props.listRef.current = e),
                                                            (o.current =
                                                                null != (t = null == e ? void 0 : e.getScrollerNode())
                                                                    ? t
                                                                    : null);
                                                    },
                                                    className: a()(Y.members, { [Y.fullWidth]: d.tq }),
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
                if ((0, O.R)(a)) return (0, i.createElement)(O.Z, Q(X({}, a), { key: "section-".concat(t) }));
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
                                Q(X({}, a), {
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
                    Q(X({}, a), {
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
                    if (null != t && t.type === D.so.CONTENT_INVENTORY) {
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
                    if (a.type === D.so.MEMBER && "user" in a) {
                        let {
                            colorString: e,
                            colorStrings: t,
                            colorRoleId: n,
                            user: o,
                            status: s,
                            isOwner: c,
                            isMobileOnline: u,
                            nick: d,
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
                                user: o,
                                status: s,
                                isOwner: c,
                                nick: d,
                                activities: this._areActivitiesExperimentallyHidden ? [] : p,
                                applicationStream: h,
                                channel: l,
                                guildId: l.guild_id,
                                premiumSince: f,
                                isMobileOnline: u,
                                index: i,
                            },
                            "member-".concat(a.user.id),
                        );
                    }
                    if (a.type === D.so.CONTENT_INVENTORY) {
                        let e = "content-inventory-".concat(a.entry.id);
                        null != a.entry.original_id && (e += "-".concat(a.entry.original_id));
                        let t = this.getFirstApplicationIdOccurrences().has(a.entry.id);
                        return (0, r.jsx)(
                            E.ZP,
                            Q(X({}, a), {
                                channel: this.props.channel,
                                index: i,
                                isFirstApplicationOccurrence: t,
                            }),
                            e,
                        );
                    }
                    if (a.type === D.so.HIDDEN_CONTENT_INVENTORY)
                        return (0, r.jsx)(j.Z, {}, "content-inventory-hidden-entry");
                }
                return (0, r.jsx)(ei, { index: i }, "placeholder-".concat(t, ":").concat(n));
            }),
            K(this, "handleScroll", () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            K(
                this,
                "updateMaxContentFeedRowSeen",
                s().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
                        r = n + t - this.props.sectionHeight;
                    this.props.updateMaxContentFeedRowSeen(r);
                }, 50),
            ),
            K(this, "getContentFeedGroup", () => {
                let e = this.props.groups[S.T];
                if ((0, O.R)(e)) return e;
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
                            return (0, E.iZ)(e);
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
                s().debounce(() => {
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
                    .filter(H.lm);
                if (0 === r.length) return;
                let i = r.reduce(
                    (e, t) => {
                        var n;
                        return (
                            t.type !== D.so.MEMBER ||
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
                    C.ZP.trackWithMetadata(W.rMx.MEMBER_LIST_VIEWED, X({}, i));
            });
    }
}
function ea(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: l } = (0, x.ZP)(y.Z.MEMBER_LIST),
        o = (0, p.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        s = (0, p.cj)([D.ZP], () => D.ZP.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: f,
            version: m,
            updateMaxRowSeen: g,
        } = (0, S.H)({
            memberStoreProps: s,
            channelId: t.id,
            guildId: t.guild_id,
        }),
        b = i.useRef(null),
        C = (0, h.UBm)("lg") + (0, h.UBm)("xxs"),
        v = i.useCallback(
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
        O = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        j = i.useCallback(
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
        E = (0, u.ZP)({
            id: "members-".concat(t.id),
            setFocus: v,
            isEnabled: o,
            scrollToStart: O,
            scrollToEnd: j,
        });
    return (0, r.jsx)(x.Gt, {
        value: l,
        children: (0, r.jsx)("div", {
            className: a()(Y.container, n),
            children: (0, r.jsx)(c.bG, {
                navigator: E,
                children: (0, r.jsx)(
                    el,
                    Q(X({}, e, s), {
                        version: m,
                        groups: f,
                        rows: d,
                        listRef: b,
                        updateMaxContentFeedRowSeen: g,
                        sectionHeight: 18 + C,
                        rowHeight: 42,
                    }),
                ),
            }),
        }),
    });
}
function eo(e) {
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
