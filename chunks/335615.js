n.d(t, { Z: () => ep }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    p = n(876215),
    h = n(442837),
    f = n(481060),
    m = n(239091),
    g = n(941028),
    b = n(144144),
    _ = n(276264),
    C = n(607070),
    y = n(100527),
    x = n(367907),
    v = n(906732),
    j = n(493324),
    O = n(611064),
    E = n(677432),
    N = n(178762),
    I = n(868671),
    P = n(82295),
    S = n(91218),
    Z = n(313201),
    T = n(540059),
    A = n(623624),
    w = n(518738),
    R = n(570096),
    k = n(850020),
    M = n(155409),
    L = n(823415),
    D = n(670188),
    W = n(706454),
    U = n(662594),
    B = n(430824),
    H = n(944486),
    F = n(111583),
    G = n(594174),
    V = n(979651),
    z = n(585483),
    Y = n(823379),
    q = n(51144),
    K = n(998502),
    X = n(981631),
    Q = n(388032),
    J = n(11847);
function $(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
function en(e, t) {
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
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let er = K.ZP.getEnableHardwareAcceleration(),
    ei = 44 + _.x,
    el = {
        origin: {
            x: 38,
            y: 11
        },
        targetWidth: 232,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0
        }
    },
    eo = i.memo(function (e) {
        let { colorString: t, colorStrings: l, colorRoleName: o, colorRoleId: a, isOwner: s, nick: c, user: u, currentUser: p, activities: h, applicationStream: f, status: g, channel: C, guildId: y, isTyping: x, isMobileOnline: v, premiumSince: j, nameplate: O, shouldShowPopoutOnHover: E } = e,
            N = en(e, ['colorString', 'colorStrings', 'colorRoleName', 'colorRoleId', 'isOwner', 'nick', 'user', 'currentUser', 'activities', 'applicationStream', 'status', 'channel', 'guildId', 'isTyping', 'isMobileOnline', 'premiumSince', 'nameplate', 'shouldShowPopoutOnHover']),
            [I, P] = i.useState(!1),
            S = null != j ? new Date(j) : null,
            Z = (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387)),
                        t = V.Z.isInChannel(H.Z.getVoiceChannelId(), u.id);
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            et(ee({}, n), {
                                user: u,
                                guildId: y,
                                channel: C,
                                showMediaItems: t
                            })
                        );
                });
            },
            T = (e) => {
                null != y &&
                    (e.stopPropagation(),
                    (0, A.f)({
                        guildId: y,
                        location: {
                            section: X.jXE.MEMBER_LIST,
                            object: X.qAy.BOOST_GEM_ICON
                        }
                    }));
            };
        return (0, r.jsx)(D.Z, {
            user: u,
            guildId: y,
            channelId: C.id,
            roleId: a,
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: () => {
                let e = '@'.concat(q.ZP.getUserTag(u, { decoration: 'never' })),
                    t = '<@'.concat(u.id, '>');
                z.S.dispatchToLastSubscribed(X.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: t
                }),
                    b.Z.startTyping(C.id);
            },
            shouldShowOnHover: E,
            clickTrap: I,
            shouldShow: I,
            onRequestClose: () => {
                P(!1);
            },
            children: (e) => {
                let { onClick: n } = e,
                    i = en(e, ['onClick']);
                return (0, r.jsx)(
                    _.Z,
                    ee(
                        {
                            className: J.member,
                            onContextMenu: Z,
                            shouldAnimateStatus: er,
                            user: u,
                            currentUser: p,
                            nick: c,
                            status: g,
                            activities: h,
                            applicationStream: f,
                            isOwner: s,
                            premiumSince: S,
                            colorString: t,
                            colorStrings: l,
                            colorRoleName: o,
                            isTyping: x,
                            channel: C,
                            guildId: y,
                            isMobile: v,
                            onClickPremiumGuildIcon: T,
                            selected: I,
                            itemProps: N,
                            nameplate: O,
                            onClick: () => P(!I)
                        },
                        i
                    )
                );
            }
        });
    }),
    ea = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = en(e, ['colorRoleId']),
            { channel: i, user: l, index: o } = e,
            a = (0, c.JA)(''.concat(o)),
            s = (0, h.e7)([F.Z], () => F.Z.isTyping(i.id, l.id)),
            u = (0, h.e7)([G.default], () => G.default.getCurrentUser()),
            d = (0, h.e7)(
                [B.Z],
                () => {
                    var e;
                    return null != t ? (null == (e = B.Z.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
                },
                [i, t]
            ),
            p = (0, k.K)({
                location: 'ChannelMembers',
                user: l
            }),
            f = (0, L.ic)({ location: 'ChannelMembers' });
        return (0, r.jsx)(
            eo,
            et(ee({}, n, a), {
                isTyping: s,
                currentUser: u,
                colorRoleName: d,
                nameplate: p,
                shouldShowPopoutOnHover: f
            })
        );
    }),
    es = i.memo(function (e) {
        let { id: t, title: n, count: i, guildId: l } = e,
            o = (0, w.p9)({
                roleId: t,
                guildId: l,
                size: 16
            }),
            a = (0, h.e7)([W.default], () => new Intl.NumberFormat(W.default.locale).format(i), [i]);
        return t === X.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: J.membersGroup,
                  children: (0, r.jsx)('div', { className: J.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(P.Z, {
                  className: J.membersGroup,
                  children: [
                      (0, r.jsx)(f.nn4, {
                          children: Q.NW.format(Q.t.UaqbkZ, {
                              title: n,
                              count: i
                          })
                      }),
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [null != o ? (0, r.jsx)(S.Z, ee({ className: J.roleIcon }, o)) : null, n, ' \u2014 ', a]
                      })
                  ]
              });
    });
function ec(e) {
    let { index: t } = e,
        n = (0, c.JA)(''.concat(t));
    return (0, r.jsx)(_.Z, { itemProps: n });
}
class eu extends i.Component {
    shouldComponentUpdate(e) {
        return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
    }
    componentDidMount() {
        this.updateSubscription(), this.trackMemberListViewed(), (this._areActivitiesExperimentallyHidden = (0, j.$)('ChannelMembers'));
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: r } = e,
            i = this.getContentFeedHeight(),
            l = Math.max(0, t - Math.max(0, i - r)),
            o = Math.floor(l / n);
        return {
            height: l,
            rowHeight: n,
            rowsVisible: o,
            y: Math.max(0, r - i)
        };
    }
    getDimensions() {
        let e = this._list;
        if (null == e)
            return {
                y: 0,
                height: 0,
                rowHeight: 0
            };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: r } = this.props,
            i = Math.floor(t / r);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: r,
            rowsVisible: i,
            y: n
        });
    }
    render() {
        let { groups: e, listId: t, channel: n } = this.props;
        return (0, r.jsx)(f.Wdt, {
            children: (i) =>
                (0, r.jsx)(Z.FG, {
                    children: (l) =>
                        (0, r.jsx)('aside', {
                            className: o()(J.membersWrap, J.hiddenMembers),
                            'aria-labelledby': l,
                            children: (0, r.jsx)(f.y5t, {
                                component: (0, r.jsx)(f.nn4, {
                                    children: (0, r.jsx)(f.H, {
                                        id: l,
                                        children: Q.NW.format(Q.t.JBQxV1, { channel: n.name })
                                    })
                                }),
                                children: (0, r.jsx)(c.SJ, {
                                    children: (n) => {
                                        var { ref: l, role: a } = n,
                                            s = en(n, ['ref', 'role']);
                                        return (0, r.jsx)(
                                            f.aVo,
                                            ee(
                                                {
                                                    innerRole: a,
                                                    innerAriaLabel: Q.NW.string(Q.t['9Oq93t']),
                                                    ref: (e) => {
                                                        var t;
                                                        (this._list = e), (this.props.listRef.current = e), (l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                                    },
                                                    className: o()(J.members, { [J.fullWidth]: d.tq }),
                                                    paddingTop: 0,
                                                    sectionHeight: 40,
                                                    rowHeight: this.getRowHeightComputer(),
                                                    renderSection: this.renderSection,
                                                    renderRow: this.renderRow,
                                                    sections: e.map((e) => e.count),
                                                    onScroll: this.handleScroll,
                                                    fade: !0,
                                                    customTheme: !0
                                                },
                                                s,
                                                i
                                            ),
                                            t
                                        );
                                    }
                                })
                            })
                        })
                })
        });
    }
    constructor(...e) {
        super(...e),
            $(this, '_list', null),
            $(this, '_areActivitiesExperimentallyHidden', !1),
            $(this, 'lastReportedAnalyticsChannel', void 0),
            $(this, 'setList', (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            $(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { groups: n, channel: l } = this.props,
                    o = n[t];
                return (0, O.R)(o)
                    ? (0, i.createElement)(O.Z, et(ee({}, o), { key: 'section-'.concat(t) }))
                    : 0 === t
                      ? (0, r.jsx)(
                            M.Z,
                            {
                                tutorialId: 'whos-online',
                                position: 'left',
                                inlineSpecs: el,
                                children: (0, r.jsx)(es, et(ee({}, o), { guildId: l.guild_id }))
                            },
                            'section-'.concat(t)
                        )
                      : (0, i.createElement)(
                            es,
                            et(ee({}, o), {
                                key: 'section-'.concat(t),
                                guildId: l.guild_id
                            })
                        );
            }),
            $(this, 'getRowProps', (e) => {
                let { groups: t, rows: n } = this.props,
                    r = t[e.section];
                if (null == r) return null;
                let { index: i } = r;
                return null == i || 'row' !== e.type ? null : n[i + 1 + e.row];
            }),
            $(this, 'renderRow', (e) => {
                let { section: t, row: n, rowIndex: i } = e,
                    { channel: l } = this.props,
                    o = this.getRowProps(e);
                if (null != o) {
                    if (o.type === U.so.MEMBER && 'user' in o) {
                        let { colorString: e, colorStrings: t, colorRoleId: n, user: a, status: s, isOwner: c, isMobileOnline: u, nick: d, activities: p, applicationStream: h, premiumSince: f } = o;
                        return (0, r.jsx)(
                            ea,
                            {
                                colorString: e,
                                colorStrings: t,
                                colorRoleId: n,
                                user: a,
                                status: s,
                                isOwner: c,
                                nick: d,
                                activities: this._areActivitiesExperimentallyHidden ? [] : p,
                                applicationStream: h,
                                channel: l,
                                guildId: l.guild_id,
                                premiumSince: f,
                                isMobileOnline: u,
                                index: i
                            },
                            'member-'.concat(o.user.id)
                        );
                    }
                    if (o.type === U.so.CONTENT_INVENTORY) {
                        let e = 'content-inventory-'.concat(o.entry.id);
                        null != o.entry.original_id && (e += '-'.concat(o.entry.original_id));
                        let t = (0, r.jsx)(
                            N.ZP,
                            et(ee({}, o), {
                                channel: this.props.channel,
                                index: i
                            }),
                            e
                        );
                        return o.entry.content_type === p.s.LEADERBOARD ? (0, r.jsx)(R.N, { children: t }, e) : t;
                    }
                    if (o.type === U.so.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(E.Z, {}, 'content-inventory-hidden-entry');
                }
                return (0, r.jsx)(ec, { index: i }, 'placeholder-'.concat(t, ':').concat(n));
            }),
            $(this, 'handleScroll', () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            $(
                this,
                'updateMaxContentFeedRowSeen',
                s().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState();
                    this.props.updateMaxContentFeedRowSeen(n + t - 40);
                }, 50)
            ),
            $(this, 'getContentFeedGroup', () => {
                let e = this.props.groups[I.T];
                if ((0, O.R)(e)) return e;
            }),
            $(this, 'hasContentFeed', () => null != this.getContentFeedGroup()),
            $(this, 'getRowHeightComputer', () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        r = e.index;
                    return function (e, i) {
                        if (e === I.T) {
                            let e = n[r + 1 + i];
                            return (0, N.iZ)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            $(this, 'getContentFeedHeight', () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + 40 : 0;
            }),
            $(
                this,
                'updateSubscription',
                s().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: r } = this.getDimensions();
                    (0, g.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: r,
                        rowHeight: t
                    });
                }, 50)
            ),
            $(this, 'trackMemberListViewed', () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null == (e = this._list) ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== I.T));
                let r = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(Y.lm);
                if (0 === r.length) return;
                let i = r.reduce((e, t) => (t.type !== U.so.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some((e) => e.type === X.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++), e), {
                    num_users_visible: 0,
                    num_users_visible_with_mobile_indicator: 0,
                    num_users_visible_with_game_activity: 0,
                    num_users_visible_with_activity: 0,
                    num_users_visible_with_avatar_decoration: 0
                });
                (this.lastReportedAnalyticsChannel = this.props.channel.id), x.ZP.trackWithMetadata(X.rMx.MEMBER_LIST_VIEWED, ee({}, i));
            });
    }
}
function ed(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: l } = (0, v.ZP)(y.Z.MEMBER_LIST),
        a = (0, h.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        s = (0, h.cj)([U.ZP], () => U.ZP.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: p,
            version: m,
            updateMaxRowSeen: g
        } = (0, I.H)({
            memberStoreProps: s,
            channelId: t.id,
            guildId: t.guild_id
        }),
        b = i.useRef(null),
        _ = (0, T.Q3)('ChannelMembers'),
        { density: x } = (0, f.TCT)(),
        j = _ ? ('compact' === x ? 42 : 50) : ei,
        O = i.useCallback(
            (e, t) => {
                let n = b.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, l] = n.getSectionRowFromIndex(r),
                    o = 0 === i && 0 === l ? j : 0;
                n.scrollToIndex({
                    section: i,
                    row: l,
                    padding: o,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    }
                });
            },
            [j]
        ),
        E = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        N = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        P = (0, u.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: O,
            isEnabled: a,
            scrollToStart: E,
            scrollToEnd: N
        });
    return (0, r.jsx)(v.Gt, {
        value: l,
        children: (0, r.jsx)('div', {
            className: o()(J.container, n),
            children: (0, r.jsx)(c.bG, {
                navigator: P,
                children: (0, r.jsx)(
                    eu,
                    et(ee({}, e, s), {
                        version: m,
                        groups: p,
                        rows: d,
                        listRef: b,
                        updateMaxContentFeedRowSeen: g,
                        rowHeight: j
                    })
                )
            })
        })
    });
}
function ep(e) {
    let { channel: t, className: n } = e,
        l = i.useDeferredValue(t);
    return i.useMemo(
        () =>
            (0, r.jsx)(ed, {
                channel: l,
                className: n
            }),
        [l, n]
    );
}
