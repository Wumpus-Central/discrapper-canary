(n.d(t, { Z: () => ec }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    d = n(924826),
    u = n(873546),
    h = n(876215),
    p = n(442837),
    f = n(481060),
    g = n(239091),
    m = n(941028),
    b = n(144144),
    _ = n(276264),
    y = n(607070),
    j = n(100527),
    O = n(367907),
    x = n(906732),
    v = n(493324),
    C = n(611064),
    E = n(677432),
    Z = n(178762),
    I = n(868671),
    S = n(82295),
    P = n(91218),
    T = n(313201),
    N = n(623624),
    w = n(518738),
    R = n(570096),
    A = n(850020),
    D = n(155409),
    L = n(670188),
    M = n(706454),
    k = n(439170),
    U = n(485386),
    G = n(944486),
    F = n(111583),
    B = n(594174),
    H = n(979651),
    z = n(585483),
    V = n(823379),
    W = n(51144),
    Y = n(998502),
    K = n(981631),
    q = n(388032),
    Q = n(11847);
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
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            }));
    }
    return e;
}
function $(e, t) {
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
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let et = Y.ZP.getEnableHardwareAcceleration(),
    en = {
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
    er = i.memo(function (e) {
        let { colorString: t, colorStrings: l, colorRoleName: a, colorRoleId: s, isOwner: o, nick: c, user: d, currentUser: h, activities: p, applicationStream: f, status: m, channel: y, guildId: j, isTyping: O, isMobileOnline: x, premiumSince: v, nameplate: C } = e,
            E = ee(e, ['colorString', 'colorStrings', 'colorRoleName', 'colorRoleId', 'isOwner', 'nick', 'user', 'currentUser', 'activities', 'applicationStream', 'status', 'channel', 'guildId', 'isTyping', 'isMobileOnline', 'premiumSince', 'nameplate']),
            Z = i.useRef(null),
            [I, S] = i.useState(!1),
            P = null != v ? new Date(v) : null,
            T = i.useCallback(
                (e) => {
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8982'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387)),
                            t = H.Z.isInChannel(G.Z.getVoiceChannelId(), d.id);
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                $(J({}, n), {
                                    user: d,
                                    guildId: j,
                                    channel: y,
                                    showMediaItems: t
                                })
                            );
                    });
                },
                [d, j, y]
            ),
            w = i.useCallback(() => {
                let e = '@'.concat(W.ZP.getUserTag(d, { decoration: 'never' })),
                    t = '<@'.concat(d.id, '>');
                (z.S.dispatch(K.CkL.TEXTAREA_FOCUS, { channelId: y.id }),
                    z.S.dispatchToLastSubscribed(K.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: t
                    }),
                    b.Z.startTyping(y.id));
            }, [d, y.id]),
            R = i.useCallback(
                (e) => {
                    null != j &&
                        (e.stopPropagation(),
                        (0, N.f)({
                            guildId: j,
                            location: {
                                section: K.jXE.MEMBER_LIST,
                                object: K.qAy.BOOST_GEM_ICON
                            }
                        }));
                },
                [j]
            );
        return (0, r.jsx)(L.Z, {
            targetElementRef: Z,
            user: d,
            guildId: j,
            channelId: y.id,
            roleId: s,
            position: u.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: w,
            shouldShow: I,
            onRequestClose: () => {
                S(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i } = e,
                    s = ee(e, ['onClick', 'onMouseDown']);
                return (0, r.jsx)(
                    _.Z,
                    J(
                        {
                            ref: Z,
                            className: Q.member,
                            onContextMenu: T,
                            shouldAnimateStatus: et,
                            user: d,
                            currentUser: h,
                            nick: c,
                            status: m,
                            activities: p,
                            applicationStream: f,
                            isOwner: o,
                            premiumSince: P,
                            colorString: t,
                            colorStrings: l,
                            colorRoleName: a,
                            isTyping: O,
                            channel: y,
                            guildId: j,
                            isMobile: x,
                            onClickPremiumGuildIcon: R,
                            selected: I,
                            itemProps: E,
                            nameplate: C,
                            onClick: (e) => {
                                e.shiftKey ? null == w || w() : S((e) => !e);
                            },
                            onMouseDown: (e) => {
                                I ? e.stopPropagation() : null == i || i(e);
                            }
                        },
                        s
                    )
                );
            }
        });
    }),
    ei = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = ee(e, ['colorRoleId']),
            { channel: i, user: l, index: a } = e,
            s = (0, c.JA)(''.concat(a)),
            o = (0, p.e7)([F.Z], () => F.Z.isTyping(i.id, l.id)),
            d = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            u = (0, p.e7)(
                [U.Z],
                () => {
                    var e;
                    return null != t ? (null == (e = U.Z.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
                },
                [i, t]
            ),
            h = (0, A.K)({
                user: l,
                guildId: i.guild_id,
                location: 'ChannelMembers'
            });
        return (0, r.jsx)(
            er,
            $(J({}, n, s), {
                isTyping: o,
                currentUser: d,
                colorRoleName: u,
                nameplate: h
            })
        );
    }),
    el = i.memo(function (e) {
        let { id: t, title: n, count: i, guildId: l } = e,
            a = (0, w.p9)({
                roleId: t,
                guildId: l,
                size: 16
            }),
            s = (0, p.e7)([M.default], () => new Intl.NumberFormat(M.default.locale).format(i), [i]);
        return t === K.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: Q.membersGroup,
                  children: (0, r.jsx)('div', { className: Q.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(S.Z, {
                  className: Q.membersGroup,
                  children: [
                      (0, r.jsx)(f.nn4, {
                          children: q.intl.format(q.t.UaqbkZ, {
                              title: n,
                              count: i
                          })
                      }),
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [null != a ? (0, r.jsx)(P.Z, J({ className: Q.roleIcon }, a)) : null, n, ' \u2014 ', s]
                      })
                  ]
              });
    });
function ea(e) {
    let { index: t } = e,
        n = (0, c.JA)(''.concat(t));
    return (0, r.jsx)(_.Z, { itemProps: n });
}
class es extends i.Component {
    shouldComponentUpdate(e) {
        return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
    }
    componentDidMount() {
        (this.updateSubscription(), this.trackMemberListViewed(), (this._areActivitiesExperimentallyHidden = (0, v.$)('ChannelMembers')));
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen());
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
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(f.Wdt, {
            children: (l) =>
                (0, r.jsx)(T.FG, {
                    children: (s) =>
                        (0, r.jsx)('aside', {
                            className: a()(Q.membersWrap, Q.hiddenMembers),
                            'aria-labelledby': s,
                            children: (0, r.jsx)(f.y5t, {
                                component: (0, r.jsx)(f.nn4, {
                                    children: (0, r.jsx)(f.H, {
                                        id: s,
                                        children: q.intl.format(q.t.JBQxV1, { channel: n.name })
                                    })
                                }),
                                children: (0, r.jsx)(c.SJ, {
                                    children: (n) => {
                                        var { ref: s, role: o } = n,
                                            c = ee(n, ['ref', 'role']);
                                        return (0, r.jsx)(
                                            f.aVo,
                                            J(
                                                {
                                                    innerRole: o,
                                                    innerAriaLabel: q.intl.string(q.t['9Oq93t']),
                                                    ref: (e) => {
                                                        var t;
                                                        ((this._list = e), (this.props.listRef.current = e), (s.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                                    },
                                                    className: a()(Q.members, { [Q.fullWidth]: u.tq }),
                                                    paddingTop: 0,
                                                    sectionHeight: i,
                                                    rowHeight: this.getRowHeightComputer(),
                                                    renderSection: this.renderSection,
                                                    renderRow: this.renderRow,
                                                    sections: e.map((e) => e.count),
                                                    onScroll: this.handleScroll,
                                                    fade: !0
                                                },
                                                c,
                                                l
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
        (super(...e),
            X(this, '_list', null),
            X(this, '_areActivitiesExperimentallyHidden', !1),
            X(this, 'lastReportedAnalyticsChannel', void 0),
            X(this, 'setList', (e) => {
                ((this._list = e), (this.props.listRef.current = e));
            }),
            X(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { groups: n, channel: l } = this.props,
                    a = n[t];
                if ((0, C.R)(a)) return (0, i.createElement)(C.Z, $(J({}, a), { key: 'section-'.concat(t) }));
                if (0 === t) {
                    let { key: e } = a;
                    return (0, r.jsx)(
                        D.Z,
                        {
                            tutorialId: 'whos-online',
                            position: 'left',
                            inlineSpecs: en,
                            children: (0, i.createElement)(
                                el,
                                $(J({}, a), {
                                    key: 'section-'.concat(e),
                                    guildId: l.guild_id
                                })
                            )
                        },
                        'section-'.concat(t)
                    );
                }
                return (0, i.createElement)(
                    el,
                    $(J({}, a), {
                        key: 'section-'.concat(t),
                        guildId: l.guild_id
                    })
                );
            }),
            X(this, 'getRowProps', (e) => {
                let { groups: t, rows: n } = this.props,
                    r = t[e.section];
                if (null == r) return null;
                let { index: i } = r;
                return null == i || 'row' !== e.type ? null : n[i + 1 + e.row];
            }),
            X(this, 'renderRow', (e) => {
                let { section: t, row: n, rowIndex: i } = e,
                    { channel: l } = this.props,
                    a = this.getRowProps(e);
                if (null != a) {
                    if (a.type === k.so.MEMBER && 'user' in a) {
                        let { colorString: e, colorStrings: t, colorRoleId: n, user: s, status: o, isOwner: c, isMobileOnline: d, nick: u, activities: h, applicationStream: p, premiumSince: f } = a;
                        return (0, r.jsx)(
                            ei,
                            {
                                colorString: e,
                                colorStrings: t,
                                colorRoleId: n,
                                user: s,
                                status: o,
                                isOwner: c,
                                nick: u,
                                activities: this._areActivitiesExperimentallyHidden ? [] : h,
                                applicationStream: p,
                                channel: l,
                                guildId: l.guild_id,
                                premiumSince: f,
                                isMobileOnline: d,
                                index: i
                            },
                            'member-'.concat(a.user.id)
                        );
                    }
                    if (a.type === k.so.CONTENT_INVENTORY) {
                        let e = 'content-inventory-'.concat(a.entry.id);
                        null != a.entry.original_id && (e += '-'.concat(a.entry.original_id));
                        let t = (0, r.jsx)(
                            Z.ZP,
                            $(J({}, a), {
                                channel: this.props.channel,
                                index: i
                            }),
                            e
                        );
                        return a.entry.content_type === h.s.LEADERBOARD ? (0, r.jsx)(R.N, { children: t }, e) : t;
                    }
                    if (a.type === k.so.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(E.Z, {}, 'content-inventory-hidden-entry');
                }
                return (0, r.jsx)(ea, { index: i }, 'placeholder-'.concat(t, ':').concat(n));
            }),
            X(this, 'handleScroll', () => {
                (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
            }),
            X(
                this,
                'updateMaxContentFeedRowSeen',
                o().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
                        r = n + t - this.props.sectionHeight;
                    this.props.updateMaxContentFeedRowSeen(r);
                }, 50)
            ),
            X(this, 'getContentFeedGroup', () => {
                let e = this.props.groups[I.T];
                if ((0, C.R)(e)) return e;
            }),
            X(this, 'hasContentFeed', () => null != this.getContentFeedGroup()),
            X(this, 'getRowHeightComputer', () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        r = e.index;
                    return function (e, i) {
                        if (e === I.T) {
                            let e = n[r + 1 + i];
                            return (0, Z.iZ)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            X(this, 'getContentFeedHeight', () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + this.props.sectionHeight : 0;
            }),
            X(
                this,
                'updateSubscription',
                o().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: r } = this.getDimensions();
                    (0, m.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: r,
                        rowHeight: t
                    });
                }, 50)
            ),
            X(this, 'trackMemberListViewed', () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null == (e = this._list) ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== I.T));
                let r = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(V.lm);
                if (0 === r.length) return;
                let i = r.reduce(
                    (e, t) => {
                        var n;
                        return (t.type !== k.so.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some((e) => e.type === K.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, (null == (n = t.user.collectibles) ? void 0 : n.nameplate) != null && e.num_users_visible_with_nameplate++), e);
                    },
                    {
                        num_users_visible: 0,
                        num_users_visible_with_mobile_indicator: 0,
                        num_users_visible_with_game_activity: 0,
                        num_users_visible_with_activity: 0,
                        num_users_visible_with_avatar_decoration: 0,
                        num_users_visible_with_nameplate: 0
                    }
                );
                ((this.lastReportedAnalyticsChannel = this.props.channel.id), O.ZP.trackWithMetadata(K.rMx.MEMBER_LIST_VIEWED, J({}, i)));
            }));
    }
}
function eo(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: l } = (0, x.ZP)(j.Z.MEMBER_LIST),
        s = (0, p.e7)([y.Z], () => y.Z.keyboardModeEnabled),
        o = (0, p.cj)([k.ZP], () => k.ZP.getProps(t.guild_id, t.id)),
        {
            rows: u,
            groups: h,
            version: g,
            updateMaxRowSeen: m
        } = (0, I.H)({
            memberStoreProps: o,
            channelId: t.id,
            guildId: t.guild_id
        }),
        b = i.useRef(null),
        _ = (0, f.UBm)('lg') + (0, f.UBm)('xxs'),
        O = i.useCallback(
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
                    }
                });
            },
            [42]
        ),
        v = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        C = i.useCallback(
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
        E = (0, d.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: O,
            isEnabled: s,
            scrollToStart: v,
            scrollToEnd: C
        });
    return (0, r.jsx)(x.Gt, {
        value: l,
        children: (0, r.jsx)('div', {
            className: a()(Q.container, n),
            children: (0, r.jsx)(c.bG, {
                navigator: E,
                children: (0, r.jsx)(
                    es,
                    $(J({}, e, o), {
                        version: g,
                        groups: h,
                        rows: u,
                        listRef: b,
                        updateMaxContentFeedRowSeen: m,
                        sectionHeight: 18 + _,
                        rowHeight: 42
                    })
                )
            })
        })
    });
}
function ec(e) {
    let { channel: t, className: n } = e,
        l = i.useDeferredValue(t);
    return i.useMemo(
        () =>
            (0, r.jsx)(eo, {
                channel: l,
                className: n
            }),
        [l, n]
    );
}
