n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(941028),
    x = n(144144),
    v = n(276264),
    _ = n(607070),
    I = n(100527),
    E = n(367907),
    b = n(906732),
    Z = n(493324),
    N = n(611064),
    S = n(677432),
    T = n(178762),
    j = n(868671),
    A = n(82295),
    y = n(91218),
    P = n(313201),
    M = n(623624),
    R = n(518738),
    L = n(570096),
    k = n(155409),
    O = n(184301),
    D = n(347475),
    w = n(662594),
    B = n(430824),
    U = n(111583),
    H = n(594174),
    G = n(585483),
    F = n(823379),
    V = n(51144),
    z = n(998502),
    W = n(981631),
    K = n(388032),
    Y = n(973249);
function q(e, t, n) {
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
let X = z.ZP.getEnableHardwareAcceleration(),
    J = 44 + v.x,
    Q = {
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
class $ extends l.Component {
    shouldComponentUpdate(e) {
        return !(0, m.Z)(this.props, e, ['channelId']);
    }
    render() {
        let { colorString: e, colorRoleName: t, isOwner: n, nick: l, user: r, currentUser: a, activities: s, applicationStream: o, status: c, channel: d, guildId: h, isTyping: p, isMobileOnline: m, premiumSince: g, ...C } = this.props,
            x = null != g ? new Date(g) : null;
        return (0, i.jsx)(f.Popout, {
            preload: () =>
                (0, O.Z)(r, {
                    channelId: d.id,
                    guildId: h
                }),
            renderPopout: this.renderUserPopout,
            position: u.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: this.handleShiftClick,
            children: (u, f) => {
                let { isShown: g } = f;
                return (0, i.jsx)(v.Z, {
                    className: Y.member,
                    onContextMenu: this.renderUserContextMenu,
                    shouldAnimateStatus: X,
                    user: r,
                    currentUser: a,
                    nick: l,
                    status: c,
                    activities: s,
                    applicationStream: o,
                    isOwner: n,
                    premiumSince: x,
                    colorString: e,
                    colorRoleName: t,
                    isTyping: p,
                    channel: d,
                    guildId: h,
                    isMobile: m,
                    onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
                    selected: g,
                    itemProps: C,
                    ...u
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            q(this, 'renderUserContextMenu', (e) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
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
            q(this, 'handleShiftClick', () => {
                let { user: e, channel: t } = this.props,
                    n = '@'.concat(V.ZP.getUserTag(e, { decoration: 'never' })),
                    i = '<@'.concat(e.id, '>');
                G.S.dispatchToLastSubscribed(W.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: i
                }),
                    x.Z.startTyping(t.id);
            }),
            q(this, 'openGuildSubscriptionModal', (e) => {
                let { guildId: t } = this.props;
                if (null != t)
                    e.stopPropagation(),
                        (0, M.f)({
                            guildId: t,
                            location: {
                                section: W.jXE.MEMBER_LIST,
                                object: W.qAy.BOOST_GEM_ICON
                            }
                        });
            }),
            q(this, 'renderUserPopout', (e) =>
                (0, i.jsx)(D.Z, {
                    ...e,
                    userId: this.props.user.id,
                    guildId: this.props.guildId,
                    channelId: this.props.channel.id,
                    roleId: this.props.colorRoleId
                })
            );
    }
}
let ee = l.memo((e) => {
        let { colorRoleId: t, ...n } = e,
            { channel: l, user: r, index: a } = e,
            s = (0, c.JA)(''.concat(a)),
            o = (0, p.e7)([U.Z], () => U.Z.isTyping(l.id, r.id)),
            d = (0, p.e7)([H.default], () => H.default.getCurrentUser()),
            u = (0, p.e7)(
                [B.Z],
                () => {
                    var e;
                    return null != t ? (null === (e = B.Z.getRole(l.guild_id, t)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [l, t]
            );
        return (0, i.jsx)($, {
            ...n,
            ...s,
            isTyping: o,
            currentUser: d,
            colorRoleName: u
        });
    }),
    et = l.memo(function (e) {
        let { id: t, title: n, count: l, guildId: r } = e,
            a = (0, R.p9)({
                roleId: t,
                guildId: r,
                size: 16
            });
        return t === W.Skl.UNKNOWN
            ? (0, i.jsx)('div', {
                  className: Y.membersGroup,
                  children: (0, i.jsx)('div', { className: Y.memberGroupsPlaceholder })
              })
            : (0, i.jsxs)(A.Z, {
                  className: Y.membersGroup,
                  children: [
                      (0, i.jsx)(f.HiddenVisually, {
                          children: K.intl.format(K.t.UaqbkZ, {
                              title: n,
                              count: l
                          })
                      }),
                      (0, i.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [
                              null != a
                                  ? (0, i.jsx)(y.Z, {
                                        className: Y.roleIcon,
                                        ...a
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
function en(e) {
    let { index: t } = e,
        n = (0, c.JA)(''.concat(t));
    return (0, i.jsx)(v.Z, { itemProps: n });
}
class ei extends l.Component {
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
            r = Math.max(0, t - Math.max(0, l - i)),
            a = Math.floor(r / n);
        return {
            height: r,
            rowHeight: n,
            rowsVisible: a,
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
            i = Math.floor(t / J);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: J,
            rowsVisible: i,
            y: n
        });
    }
    render() {
        let { groups: e, listId: t, channel: n } = this.props;
        return (0, i.jsx)(f.FocusJumpSection, {
            children: (l) =>
                (0, i.jsx)(P.FG, {
                    children: (r) =>
                        (0, i.jsx)('aside', {
                            className: a()(Y.membersWrap, Y.hiddenMembers),
                            'aria-labelledby': r,
                            children: (0, i.jsx)(f.HeadingLevel, {
                                component: (0, i.jsx)(f.HiddenVisually, {
                                    children: (0, i.jsx)(f.H, {
                                        id: r,
                                        children: K.intl.format(K.t.JBQxV1, { channel: n.name })
                                    })
                                }),
                                children: (0, i.jsx)(c.SJ, {
                                    children: (n) => {
                                        let { ref: r, role: s, ...o } = n;
                                        return (0, i.jsx)(
                                            f.List,
                                            {
                                                innerRole: s,
                                                innerAriaLabel: K.intl.string(K.t['9Oq93t']),
                                                ref: (e) => {
                                                    var t;
                                                    (this._list = e), (this.props.listRef.current = e), (r.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                                                },
                                                className: a()(Y.members, { [Y.fullWidth]: u.tq }),
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
            q(this, '_list', null),
            q(this, '_areActivitiesExperimentallyHidden', !1),
            q(this, 'lastReportedAnalyticsChannel', void 0),
            q(this, 'setList', (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            q(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { groups: n, channel: r } = this.props,
                    a = n[t];
                return (0, N.R)(a)
                    ? (0, l.createElement)(N.Z, {
                          ...a,
                          key: 'section-'.concat(t)
                      })
                    : 0 === t
                      ? (0, i.jsx)(
                            k.Z,
                            {
                                tutorialId: 'whos-online',
                                position: 'left',
                                inlineSpecs: Q,
                                children: (0, i.jsx)(et, {
                                    ...a,
                                    guildId: r.guild_id
                                })
                            },
                            'section-'.concat(t)
                        )
                      : (0, l.createElement)(et, {
                            ...a,
                            key: 'section-'.concat(t),
                            guildId: r.guild_id
                        });
            }),
            q(this, 'getRowProps', (e) => {
                let { groups: t, rows: n } = this.props,
                    i = t[e.section];
                if (null == i) return null;
                let { index: l } = i;
                return null == l || 'row' !== e.type ? null : n[l + 1 + e.row];
            }),
            q(this, 'renderRow', (e) => {
                let { section: t, row: n, rowIndex: l } = e,
                    { channel: r } = this.props,
                    a = this.getRowProps(e);
                if (null != a) {
                    if (a.type === w.so.MEMBER && 'user' in a) {
                        let { colorString: e, colorRoleId: t, user: n, status: s, isOwner: o, isMobileOnline: c, nick: d, activities: u, applicationStream: h, premiumSince: p } = a;
                        return (0, i.jsx)(
                            ee,
                            {
                                colorString: e,
                                colorRoleId: t,
                                user: n,
                                status: s,
                                isOwner: o,
                                nick: d,
                                activities: this._areActivitiesExperimentallyHidden ? [] : u,
                                applicationStream: h,
                                channel: r,
                                guildId: r.guild_id,
                                premiumSince: p,
                                isMobileOnline: c,
                                index: l
                            },
                            'member-'.concat(a.user.id)
                        );
                    }
                    if (a.type === w.so.CONTENT_INVENTORY) {
                        let e = 'content-inventory-'.concat(a.entry.id);
                        null != a.entry.original_id && (e += '-'.concat(a.entry.original_id));
                        let t = (0, i.jsx)(
                            T.ZP,
                            {
                                ...a,
                                channel: this.props.channel,
                                index: l
                            },
                            e
                        );
                        return a.entry.content_type === h.s.LEADERBOARD ? (0, i.jsx)(L.N, { children: t }, e) : t;
                    }
                    if (a.type === w.so.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(S.Z, {}, 'content-inventory-hidden-entry');
                }
                return (0, i.jsx)(en, { index: l }, 'placeholder-'.concat(t, ':').concat(n));
            }),
            q(this, 'handleScroll', () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            q(
                this,
                'updateMaxContentFeedRowSeen',
                o().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState();
                    this.props.updateMaxContentFeedRowSeen(n + t - 40);
                }, 50)
            ),
            q(this, 'getContentFeedGroup', () => {
                let e = this.props.groups[j.T];
                if ((0, N.R)(e)) return e;
            }),
            q(this, 'hasContentFeed', () => null != this.getContentFeedGroup()),
            q(this, 'getRowHeightComputer', () => {
                let e = this.getContentFeedGroup();
                if (null != e) {
                    let { rows: t } = this.props,
                        n = e.index;
                    return function (e, i) {
                        if (e === j.T) {
                            let e = t[n + 1 + i];
                            return (0, T.iZ)(e);
                        }
                        return J;
                    };
                }
                return J;
            }),
            q(this, 'getContentFeedHeight', () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + 40 : 0;
            }),
            q(
                this,
                'updateSubscription',
                o().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: i } = this.getDimensions();
                    (0, C.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: i,
                        rowHeight: t
                    });
                }, 50)
            ),
            q(this, 'trackMemberListViewed', () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== j.T));
                let i = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(F.lm);
                if (0 === i.length) return;
                let l = i.reduce((e, t) => (t.type !== w.so.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some((e) => e.type === W.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e)), {
                    num_users_visible: 0,
                    num_users_visible_with_mobile_indicator: 0,
                    num_users_visible_with_game_activity: 0,
                    num_users_visible_with_activity: 0,
                    num_users_visible_with_avatar_decoration: 0
                });
                (this.lastReportedAnalyticsChannel = this.props.channel.id), E.ZP.trackWithMetadata(W.rMx.MEMBER_LIST_VIEWED, { ...l });
            });
    }
}
function el(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: r } = (0, b.ZP)(I.Z.MEMBER_LIST),
        s = (0, p.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        o = (0, p.cj)([w.ZP], () => w.ZP.getProps(t.guild_id, t.id)),
        {
            rows: u,
            groups: h,
            version: m,
            updateMaxRowSeen: f
        } = (0, j.H)({
            memberStoreProps: o,
            channelId: t.id,
            guildId: t.guild_id
        }),
        g = l.useRef(null),
        C = l.useCallback((e, t) => {
            let n = g.current;
            if (null == n) return;
            let i = parseInt(t, 10),
                [l, r] = n.getSectionRowFromIndex(i),
                a = 0 === l && 0 === r ? J : 0;
            n.scrollToIndex({
                section: l,
                row: r,
                padding: a,
                callback: () => {
                    requestAnimationFrame(() => {
                        var t;
                        return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                    });
                }
            });
        }, []),
        x = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        v = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        E = (0, d.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: C,
            isEnabled: s,
            scrollToStart: x,
            scrollToEnd: v
        });
    return (0, i.jsx)(b.Gt, {
        value: r,
        children: (0, i.jsx)('div', {
            className: a()(Y.container, n),
            children: (0, i.jsx)(c.bG, {
                navigator: E,
                children: (0, i.jsx)(ei, {
                    ...e,
                    ...o,
                    version: m,
                    groups: h,
                    rows: u,
                    listRef: g,
                    updateMaxContentFeedRowSeen: f
                })
            })
        })
    });
}
function er(e) {
    let { channel: t, className: n } = e,
        r = l.useDeferredValue(t);
    return l.useMemo(
        () =>
            (0, i.jsx)(el, {
                channel: r,
                className: n
            }),
        [r, n]
    );
}
