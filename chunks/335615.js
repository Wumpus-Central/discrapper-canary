n.d(t, { Z: () => er }), n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    d = n(924826),
    u = n(873546),
    h = n(876215),
    p = n(442837),
    m = n(902704),
    f = n(481060),
    g = n(239091),
    _ = n(941028),
    C = n(144144),
    x = n(276264),
    v = n(607070),
    E = n(100527),
    I = n(367907),
    b = n(906732),
    Z = n(493324),
    N = n(611064),
    T = n(677432),
    S = n(178762),
    j = n(868671),
    A = n(82295),
    y = n(91218),
    P = n(313201),
    R = n(540059),
    M = n(623624),
    L = n(518738),
    k = n(570096),
    O = n(155409),
    D = n(184301),
    w = n(347475),
    U = n(662594),
    B = n(430824),
    F = n(111583),
    H = n(594174),
    G = n(585483),
    V = n(823379),
    z = n(51144),
    W = n(998502),
    Y = n(981631),
    q = n(388032),
    K = n(973249);
function X(e, t, n) {
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
let J = W.ZP.getEnableHardwareAcceleration(),
    Q = 44 + x.x,
    $ = {
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
    };
class ee extends l.Component {
    shouldComponentUpdate(e) {
        return !(0, m.Z)(this.props, e, ['channelId']);
    }
    render() {
        let { colorString: e, colorRoleName: t, isOwner: n, nick: l, user: a, currentUser: r, activities: s, applicationStream: o, status: c, channel: d, guildId: h, isTyping: p, isMobileOnline: m, premiumSince: g, ..._ } = this.props,
            C = null != g ? new Date(g) : null;
        return (0, i.jsx)(f.yRy, {
            preload: () =>
                (0, D.Z)(a, {
                    channelId: d.id,
                    guildId: h
                }),
            renderPopout: this.renderUserPopout,
            position: u.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: this.handleShiftClick,
            children: (u, f) => {
                let { isShown: g } = f;
                return (0, i.jsx)(x.Z, {
                    className: K.member,
                    onContextMenu: this.renderUserContextMenu,
                    shouldAnimateStatus: J,
                    user: a,
                    currentUser: r,
                    nick: l,
                    status: c,
                    activities: s,
                    applicationStream: o,
                    isOwner: n,
                    premiumSince: C,
                    colorString: e,
                    colorRoleName: t,
                    isTyping: p,
                    channel: d,
                    guildId: h,
                    isMobile: m,
                    onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
                    selected: g,
                    itemProps: _,
                    ...u
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            X(this, 'renderUserContextMenu', (e) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            user: this.props.user,
                            guildId: this.props.guildId,
                            channel: this.props.channel,
                            showMediaItems: !0
                        });
                });
            }),
            X(this, 'handleShiftClick', () => {
                let { user: e, channel: t } = this.props,
                    n = '@'.concat(z.ZP.getUserTag(e, { decoration: 'never' })),
                    i = '<@'.concat(e.id, '>');
                G.S.dispatchToLastSubscribed(Y.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: i
                }),
                    C.Z.startTyping(t.id);
            }),
            X(this, 'openGuildSubscriptionModal', (e) => {
                let { guildId: t } = this.props;
                null != t &&
                    (e.stopPropagation(),
                    (0, M.f)({
                        guildId: t,
                        location: {
                            section: Y.jXE.MEMBER_LIST,
                            object: Y.qAy.BOOST_GEM_ICON
                        }
                    }));
            }),
            X(this, 'renderUserPopout', (e) =>
                (0, i.jsx)(w.Z, {
                    ...e,
                    userId: this.props.user.id,
                    guildId: this.props.guildId,
                    channelId: this.props.channel.id,
                    roleId: this.props.colorRoleId
                })
            );
    }
}
let et = l.memo((e) => {
        let { colorRoleId: t, ...n } = e,
            { channel: l, user: a, index: r } = e,
            s = (0, c.JA)(''.concat(r)),
            o = (0, p.e7)([F.Z], () => F.Z.isTyping(l.id, a.id)),
            d = (0, p.e7)([H.default], () => H.default.getCurrentUser()),
            u = (0, p.e7)(
                [B.Z],
                () => {
                    var e;
                    return null != t ? (null === (e = B.Z.getRole(l.guild_id, t)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [l, t]
            );
        return (0, i.jsx)(ee, {
            ...n,
            ...s,
            isTyping: o,
            currentUser: d,
            colorRoleName: u
        });
    }),
    en = l.memo(function (e) {
        let { id: t, title: n, count: l, guildId: a } = e,
            r = (0, L.p9)({
                roleId: t,
                guildId: a,
                size: 16
            });
        return t === Y.Skl.UNKNOWN
            ? (0, i.jsx)('div', {
                  className: K.membersGroup,
                  children: (0, i.jsx)('div', { className: K.memberGroupsPlaceholder })
              })
            : (0, i.jsxs)(A.Z, {
                  className: K.membersGroup,
                  children: [
                      (0, i.jsx)(f.nn4, {
                          children: q.intl.format(q.t.UaqbkZ, {
                              title: n,
                              count: l
                          })
                      }),
                      (0, i.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [
                              null != r
                                  ? (0, i.jsx)(y.Z, {
                                        className: K.roleIcon,
                                        ...r
                                    })
                                  : null,
                              n,
                              ' \u2014 ',
                              l
                          ]
                      })
                  ]
              });
    });
function ei(e) {
    let { index: t } = e,
        n = (0, c.JA)(''.concat(t));
    return (0, i.jsx)(x.Z, { itemProps: n });
}
class el extends l.Component {
    shouldComponentUpdate(e) {
        return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
    }
    componentDidMount() {
        this.updateSubscription(), this.trackMemberListViewed(), (this._areActivitiesExperimentallyHidden = (0, Z.$)('ChannelMembers'));
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            a = Math.max(0, t - Math.max(0, l - i)),
            r = Math.floor(a / n);
        return {
            height: a,
            rowHeight: n,
            rowsVisible: r,
            y: Math.max(0, i - l)
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
            { rowHeight: i } = this.props,
            l = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: i,
            rowsVisible: l,
            y: n
        });
    }
    render() {
        let { groups: e, listId: t, channel: n } = this.props;
        return (0, i.jsx)(f.Wdt, {
            children: (l) =>
                (0, i.jsx)(P.FG, {
                    children: (a) =>
                        (0, i.jsx)('aside', {
                            className: r()(K.membersWrap, K.hiddenMembers),
                            'aria-labelledby': a,
                            children: (0, i.jsx)(f.y5t, {
                                component: (0, i.jsx)(f.nn4, {
                                    children: (0, i.jsx)(f.H, {
                                        id: a,
                                        children: q.intl.format(q.t.JBQxV1, { channel: n.name })
                                    })
                                }),
                                children: (0, i.jsx)(c.SJ, {
                                    children: (n) => {
                                        let { ref: a, role: s, ...o } = n;
                                        return (0, i.jsx)(
                                            f.aVo,
                                            {
                                                innerRole: s,
                                                innerAriaLabel: q.intl.string(q.t['9Oq93t']),
                                                ref: (e) => {
                                                    var t;
                                                    (this._list = e), (this.props.listRef.current = e), (a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                                                },
                                                className: r()(K.members, { [K.fullWidth]: u.tq }),
                                                paddingTop: 0,
                                                sectionHeight: 40,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                customTheme: !0,
                                                ...o,
                                                ...l
                                            },
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
            X(this, '_list', null),
            X(this, '_areActivitiesExperimentallyHidden', !1),
            X(this, 'lastReportedAnalyticsChannel', void 0),
            X(this, 'setList', (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            X(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { groups: n, channel: a } = this.props,
                    r = n[t];
                return (0, N.R)(r)
                    ? (0, l.createElement)(N.Z, {
                          ...r,
                          key: 'section-'.concat(t)
                      })
                    : 0 === t
                      ? (0, i.jsx)(
                            O.Z,
                            {
                                tutorialId: 'whos-online',
                                position: 'left',
                                inlineSpecs: $,
                                children: (0, i.jsx)(en, {
                                    ...r,
                                    guildId: a.guild_id
                                })
                            },
                            'section-'.concat(t)
                        )
                      : (0, l.createElement)(en, {
                            ...r,
                            key: 'section-'.concat(t),
                            guildId: a.guild_id
                        });
            }),
            X(this, 'getRowProps', (e) => {
                let { groups: t, rows: n } = this.props,
                    i = t[e.section];
                if (null == i) return null;
                let { index: l } = i;
                return null == l || 'row' !== e.type ? null : n[l + 1 + e.row];
            }),
            X(this, 'renderRow', (e) => {
                let { section: t, row: n, rowIndex: l } = e,
                    { channel: a } = this.props,
                    r = this.getRowProps(e);
                if (null != r) {
                    if (r.type === U.so.MEMBER && 'user' in r) {
                        let { colorString: e, colorRoleId: t, user: n, status: s, isOwner: o, isMobileOnline: c, nick: d, activities: u, applicationStream: h, premiumSince: p } = r;
                        return (0, i.jsx)(
                            et,
                            {
                                colorString: e,
                                colorRoleId: t,
                                user: n,
                                status: s,
                                isOwner: o,
                                nick: d,
                                activities: this._areActivitiesExperimentallyHidden ? [] : u,
                                applicationStream: h,
                                channel: a,
                                guildId: a.guild_id,
                                premiumSince: p,
                                isMobileOnline: c,
                                index: l
                            },
                            'member-'.concat(r.user.id)
                        );
                    }
                    if (r.type === U.so.CONTENT_INVENTORY) {
                        let e = 'content-inventory-'.concat(r.entry.id);
                        null != r.entry.original_id && (e += '-'.concat(r.entry.original_id));
                        let t = (0, i.jsx)(
                            S.ZP,
                            {
                                ...r,
                                channel: this.props.channel,
                                index: l
                            },
                            e
                        );
                        return r.entry.content_type === h.s.LEADERBOARD ? (0, i.jsx)(k.N, { children: t }, e) : t;
                    }
                    if (r.type === U.so.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(T.Z, {}, 'content-inventory-hidden-entry');
                }
                return (0, i.jsx)(ei, { index: l }, 'placeholder-'.concat(t, ':').concat(n));
            }),
            X(this, 'handleScroll', () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            X(
                this,
                'updateMaxContentFeedRowSeen',
                o().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState();
                    this.props.updateMaxContentFeedRowSeen(n + t - 40);
                }, 50)
            ),
            X(this, 'getContentFeedGroup', () => {
                let e = this.props.groups[j.T];
                if ((0, N.R)(e)) return e;
            }),
            X(this, 'hasContentFeed', () => null != this.getContentFeedGroup()),
            X(this, 'getRowHeightComputer', () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        i = e.index;
                    return function (e, l) {
                        if (e === j.T) {
                            let e = n[i + 1 + l];
                            return (0, S.iZ)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            X(this, 'getContentFeedHeight', () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + 40 : 0;
            }),
            X(
                this,
                'updateSubscription',
                o().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: i } = this.getDimensions();
                    (0, _.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: i,
                        rowHeight: t
                    });
                }, 50)
            ),
            X(this, 'trackMemberListViewed', () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== j.T));
                let i = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(V.lm);
                if (0 === i.length) return;
                let l = i.reduce((e, t) => (t.type !== U.so.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some((e) => e.type === Y.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++), e), {
                    num_users_visible: 0,
                    num_users_visible_with_mobile_indicator: 0,
                    num_users_visible_with_game_activity: 0,
                    num_users_visible_with_activity: 0,
                    num_users_visible_with_avatar_decoration: 0
                });
                (this.lastReportedAnalyticsChannel = this.props.channel.id), I.ZP.trackWithMetadata(Y.rMx.MEMBER_LIST_VIEWED, { ...l });
            });
    }
}
function ea(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: a } = (0, b.ZP)(E.Z.MEMBER_LIST),
        s = (0, p.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        o = (0, p.cj)([U.ZP], () => U.ZP.getProps(t.guild_id, t.id)),
        {
            rows: u,
            groups: h,
            version: m,
            updateMaxRowSeen: g
        } = (0, j.H)({
            memberStoreProps: o,
            channelId: t.id,
            guildId: t.guild_id
        }),
        _ = l.useRef(null),
        C = (0, R.Q3)('ChannelMembers'),
        { density: x } = (0, f.TCT)(),
        I = C ? ('compact' === x ? 42 : 50) : Q,
        Z = l.useCallback(
            (e, t) => {
                let n = _.current;
                if (null == n) return;
                let i = parseInt(t, 10),
                    [l, a] = n.getSectionRowFromIndex(i),
                    r = 0 === l && 0 === a ? I : 0;
                n.scrollToIndex({
                    section: l,
                    row: a,
                    padding: r,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    }
                });
            },
            [I]
        ),
        N = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        T = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        S = (0, d.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: Z,
            isEnabled: s,
            scrollToStart: N,
            scrollToEnd: T
        });
    return (0, i.jsx)(b.Gt, {
        value: a,
        children: (0, i.jsx)('div', {
            className: r()(K.container, n),
            children: (0, i.jsx)(c.bG, {
                navigator: S,
                children: (0, i.jsx)(el, {
                    ...e,
                    ...o,
                    version: m,
                    groups: h,
                    rows: u,
                    listRef: _,
                    updateMaxContentFeedRowSeen: g,
                    rowHeight: I
                })
            })
        })
    });
}
function er(e) {
    let { channel: t, className: n } = e,
        a = l.useDeferredValue(t);
    return l.useMemo(
        () =>
            (0, i.jsx)(ea, {
                channel: a,
                className: n
            }),
        [a, n]
    );
}
