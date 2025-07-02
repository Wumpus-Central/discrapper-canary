(n.d(t, { Z: () => ec }), n(388685));
var r = n(255367),
    i = n(73800),
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
    y = n(607070),
    C = n(100527),
    x = n(367907),
    v = n(906732),
    j = n(493324),
    O = n(611064),
    E = n(677432),
    S = n(178762),
    I = n(868671),
    P = n(82295),
    Z = n(91218),
    N = n(313201),
    T = n(623624),
    A = n(518738),
    w = n(570096),
    R = n(850020),
    k = n(155409),
    M = n(670188),
    L = n(706454),
    D = n(439170),
    U = n(485386),
    B = n(944486),
    F = n(111583),
    H = n(594174),
    G = n(979651),
    V = n(585483),
    z = n(823379),
    W = n(51144),
    Y = n(998502),
    q = n(981631),
    K = n(388032),
    X = n(11847);
function Q(e, t, n) {
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
                Q(e, t, n[t]);
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
        let { colorString: t, colorStrings: l, colorRoleName: o, colorRoleId: a, isOwner: s, nick: c, user: u, currentUser: p, activities: h, applicationStream: f, status: g, channel: y, guildId: C, isTyping: x, isMobileOnline: v, premiumSince: j, nameplate: O } = e,
            E = ee(e, ['colorString', 'colorStrings', 'colorRoleName', 'colorRoleId', 'isOwner', 'nick', 'user', 'currentUser', 'activities', 'applicationStream', 'status', 'channel', 'guildId', 'isTyping', 'isMobileOnline', 'premiumSince', 'nameplate']),
            S = i.useRef(null),
            [I, P] = i.useState(!1),
            Z = null != j ? new Date(j) : null,
            N = i.useCallback(
                (e) => {
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387)),
                            t = G.Z.isInChannel(B.Z.getVoiceChannelId(), u.id);
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                $(J({}, n), {
                                    user: u,
                                    guildId: C,
                                    channel: y,
                                    showMediaItems: t
                                })
                            );
                    });
                },
                [u, C, y]
            ),
            A = i.useCallback(() => {
                let e = '@'.concat(W.ZP.getUserTag(u, { decoration: 'never' })),
                    t = '<@'.concat(u.id, '>');
                (V.S.dispatch(q.CkL.TEXTAREA_FOCUS, { channelId: y.id }),
                    V.S.dispatchToLastSubscribed(q.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: t
                    }),
                    b.Z.startTyping(y.id));
            }, [u, y.id]),
            w = i.useCallback(
                (e) => {
                    null != C &&
                        (e.stopPropagation(),
                        (0, T.f)({
                            guildId: C,
                            location: {
                                section: q.jXE.MEMBER_LIST,
                                object: q.qAy.BOOST_GEM_ICON
                            }
                        }));
                },
                [C]
            );
        return (0, r.jsx)(M.Z, {
            targetElementRef: S,
            user: u,
            guildId: C,
            channelId: y.id,
            roleId: a,
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: A,
            shouldShow: I,
            onRequestClose: () => {
                P(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i } = e,
                    a = ee(e, ['onClick', 'onMouseDown']);
                return (0, r.jsx)(
                    _.Z,
                    J(
                        {
                            ref: S,
                            className: X.member,
                            onContextMenu: N,
                            shouldAnimateStatus: et,
                            user: u,
                            currentUser: p,
                            nick: c,
                            status: g,
                            activities: h,
                            applicationStream: f,
                            isOwner: s,
                            premiumSince: Z,
                            colorString: t,
                            colorStrings: l,
                            colorRoleName: o,
                            isTyping: x,
                            channel: y,
                            guildId: C,
                            isMobile: v,
                            onClickPremiumGuildIcon: w,
                            selected: I,
                            itemProps: E,
                            nameplate: O,
                            onClick: (e) => {
                                e.shiftKey ? null == A || A() : P((e) => !e);
                            },
                            onMouseDown: (e) => {
                                I ? e.stopPropagation() : null == i || i(e);
                            }
                        },
                        a
                    )
                );
            }
        });
    }),
    ei = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = ee(e, ['colorRoleId']),
            { channel: i, user: l, index: o } = e,
            a = (0, c.JA)(''.concat(o)),
            s = (0, h.e7)([F.Z], () => F.Z.isTyping(i.id, l.id)),
            u = (0, h.e7)([H.default], () => H.default.getCurrentUser()),
            d = (0, h.e7)(
                [U.Z],
                () => {
                    var e;
                    return null != t ? (null == (e = U.Z.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
                },
                [i, t]
            ),
            p = (0, R.K)({ user: l });
        return (0, r.jsx)(
            er,
            $(J({}, n, a), {
                isTyping: s,
                currentUser: u,
                colorRoleName: d,
                nameplate: p
            })
        );
    }),
    el = i.memo(function (e) {
        let { id: t, title: n, count: i, guildId: l } = e,
            o = (0, A.p9)({
                roleId: t,
                guildId: l,
                size: 16
            }),
            a = (0, h.e7)([L.default], () => new Intl.NumberFormat(L.default.locale).format(i), [i]);
        return t === q.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: X.membersGroup,
                  children: (0, r.jsx)('div', { className: X.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(P.Z, {
                  className: X.membersGroup,
                  children: [
                      (0, r.jsx)(f.nn4, {
                          children: K.intl.format(K.t.UaqbkZ, {
                              title: n,
                              count: i
                          })
                      }),
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [null != o ? (0, r.jsx)(Z.Z, J({ className: X.roleIcon }, o)) : null, n, ' \u2014 ', a]
                      })
                  ]
              });
    });
function eo(e) {
    let { index: t } = e,
        n = (0, c.JA)(''.concat(t));
    return (0, r.jsx)(_.Z, { itemProps: n });
}
class ea extends i.Component {
    shouldComponentUpdate(e) {
        return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
    }
    componentDidMount() {
        (this.updateSubscription(), this.trackMemberListViewed(), (this._areActivitiesExperimentallyHidden = (0, j.$)('ChannelMembers')));
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen());
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
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(f.Wdt, {
            children: (l) =>
                (0, r.jsx)(N.FG, {
                    children: (a) =>
                        (0, r.jsx)('aside', {
                            className: o()(X.membersWrap, X.hiddenMembers),
                            'aria-labelledby': a,
                            children: (0, r.jsx)(f.y5t, {
                                component: (0, r.jsx)(f.nn4, {
                                    children: (0, r.jsx)(f.H, {
                                        id: a,
                                        children: K.intl.format(K.t.JBQxV1, { channel: n.name })
                                    })
                                }),
                                children: (0, r.jsx)(c.SJ, {
                                    children: (n) => {
                                        var { ref: a, role: s } = n,
                                            c = ee(n, ['ref', 'role']);
                                        return (0, r.jsx)(
                                            f.aVo,
                                            J(
                                                {
                                                    innerRole: s,
                                                    innerAriaLabel: K.intl.string(K.t['9Oq93t']),
                                                    ref: (e) => {
                                                        var t;
                                                        ((this._list = e), (this.props.listRef.current = e), (a.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                                    },
                                                    className: o()(X.members, { [X.fullWidth]: d.tq }),
                                                    paddingTop: 0,
                                                    sectionHeight: i,
                                                    rowHeight: this.getRowHeightComputer(),
                                                    renderSection: this.renderSection,
                                                    renderRow: this.renderRow,
                                                    sections: e.map((e) => e.count),
                                                    onScroll: this.handleScroll,
                                                    fade: !0,
                                                    customTheme: !0
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
            Q(this, '_list', null),
            Q(this, '_areActivitiesExperimentallyHidden', !1),
            Q(this, 'lastReportedAnalyticsChannel', void 0),
            Q(this, 'setList', (e) => {
                ((this._list = e), (this.props.listRef.current = e));
            }),
            Q(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { groups: n, channel: l } = this.props,
                    o = n[t];
                if ((0, O.R)(o)) return (0, i.createElement)(O.Z, $(J({}, o), { key: 'section-'.concat(t) }));
                if (0 === t) {
                    let { key: e } = o;
                    return (0, r.jsx)(
                        k.Z,
                        {
                            tutorialId: 'whos-online',
                            position: 'left',
                            inlineSpecs: en,
                            children: (0, i.createElement)(
                                el,
                                $(J({}, o), {
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
                    $(J({}, o), {
                        key: 'section-'.concat(t),
                        guildId: l.guild_id
                    })
                );
            }),
            Q(this, 'getRowProps', (e) => {
                let { groups: t, rows: n } = this.props,
                    r = t[e.section];
                if (null == r) return null;
                let { index: i } = r;
                return null == i || 'row' !== e.type ? null : n[i + 1 + e.row];
            }),
            Q(this, 'renderRow', (e) => {
                let { section: t, row: n, rowIndex: i } = e,
                    { channel: l } = this.props,
                    o = this.getRowProps(e);
                if (null != o) {
                    if (o.type === D.so.MEMBER && 'user' in o) {
                        let { colorString: e, colorStrings: t, colorRoleId: n, user: a, status: s, isOwner: c, isMobileOnline: u, nick: d, activities: p, applicationStream: h, premiumSince: f } = o;
                        return (0, r.jsx)(
                            ei,
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
                    if (o.type === D.so.CONTENT_INVENTORY) {
                        let e = 'content-inventory-'.concat(o.entry.id);
                        null != o.entry.original_id && (e += '-'.concat(o.entry.original_id));
                        let t = (0, r.jsx)(
                            S.ZP,
                            $(J({}, o), {
                                channel: this.props.channel,
                                index: i
                            }),
                            e
                        );
                        return o.entry.content_type === p.s.LEADERBOARD ? (0, r.jsx)(w.N, { children: t }, e) : t;
                    }
                    if (o.type === D.so.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(E.Z, {}, 'content-inventory-hidden-entry');
                }
                return (0, r.jsx)(eo, { index: i }, 'placeholder-'.concat(t, ':').concat(n));
            }),
            Q(this, 'handleScroll', () => {
                (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
            }),
            Q(
                this,
                'updateMaxContentFeedRowSeen',
                s().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
                        r = n + t - this.props.sectionHeight;
                    this.props.updateMaxContentFeedRowSeen(r);
                }, 50)
            ),
            Q(this, 'getContentFeedGroup', () => {
                let e = this.props.groups[I.T];
                if ((0, O.R)(e)) return e;
            }),
            Q(this, 'hasContentFeed', () => null != this.getContentFeedGroup()),
            Q(this, 'getRowHeightComputer', () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        r = e.index;
                    return function (e, i) {
                        if (e === I.T) {
                            let e = n[r + 1 + i];
                            return (0, S.iZ)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            Q(this, 'getContentFeedHeight', () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + this.props.sectionHeight : 0;
            }),
            Q(
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
            Q(this, 'trackMemberListViewed', () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null == (e = this._list) ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== I.T));
                let r = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(z.lm);
                if (0 === r.length) return;
                let i = r.reduce(
                    (e, t) => {
                        var n;
                        return (t.type !== D.so.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some((e) => e.type === q.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, (null == (n = t.user.collectibles) ? void 0 : n.nameplate) != null && e.num_users_visible_with_nameplate++), e);
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
                ((this.lastReportedAnalyticsChannel = this.props.channel.id), x.ZP.trackWithMetadata(q.rMx.MEMBER_LIST_VIEWED, J({}, i)));
            }));
    }
}
function es(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: l } = (0, v.ZP)(C.Z.MEMBER_LIST),
        a = (0, h.e7)([y.Z], () => y.Z.keyboardModeEnabled),
        s = (0, h.cj)([D.ZP], () => D.ZP.getProps(t.guild_id, t.id)),
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
        _ = (0, f.UBm)('lg') + (0, f.UBm)('xxs'),
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
                    }
                });
            },
            [42]
        ),
        j = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        O = i.useCallback(
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
        E = (0, u.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: x,
            isEnabled: a,
            scrollToStart: j,
            scrollToEnd: O
        });
    return (0, r.jsx)(v.Gt, {
        value: l,
        children: (0, r.jsx)('div', {
            className: o()(X.container, n),
            children: (0, r.jsx)(c.bG, {
                navigator: E,
                children: (0, r.jsx)(
                    ea,
                    $(J({}, e, s), {
                        version: m,
                        groups: p,
                        rows: d,
                        listRef: b,
                        updateMaxContentFeedRowSeen: g,
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
            (0, r.jsx)(es, {
                channel: l,
                className: n
            }),
        [l, n]
    );
}
