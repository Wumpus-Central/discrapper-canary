(n.d(t, { Z: () => ed }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(114858),
    u = n(91192),
    d = n(374470),
    h = n(442837),
    p = n(902704),
    f = n(846519),
    g = n(692547),
    m = n(481060),
    b = n(925549),
    _ = n(493773),
    O = n(209613),
    y = n(100527),
    C = n(906732),
    v = n(358221),
    j = n(706590),
    E = n(940777),
    S = n(113544),
    x = n(41776),
    I = n(821020),
    P = n(770858),
    N = n(905423),
    w = n(346356),
    T = n(431286),
    Z = n(796974),
    A = n(478738),
    R = n(271383),
    D = n(430824),
    L = n(771845),
    M = n(358085),
    k = n(727258),
    U = n(605951),
    G = n(474109),
    B = n(741616),
    V = n(187835),
    H = n(118122),
    F = n(193154),
    z = n(602147),
    W = n(222059),
    K = n(751277),
    Y = n(65721),
    q = n(843343),
    X = n(654142),
    Q = n(695301),
    J = n(836697),
    $ = n(921230),
    ee = n(981631),
    et = n(388032),
    en = n(907171);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            }));
    }
    return e;
}
let el = (0, M.isWindows)() ? 4 : 12 * !(0, M.isMac)();
function eo(e) {
    return e.startsWith(ee.Z5c.GUILD_DISCOVERY) || e.startsWith(ee.Z5c.GLOBAL_DISCOVERY);
}
class ea {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, l) {
        (er(this, 'guildsTree', void 0),
            er(this, 'setScrolling', void 0),
            er(this, 'setIsScrolledToBottom', void 0),
            er(this, 'onScroll', void 0),
            er(this, 'sizes', void 0),
            er(this, 'scrollerRef', void 0),
            er(this, 'nodeRefs', void 0),
            er(this, 'timeout', void 0),
            er(this, 'observer', void 0),
            er(this, 'setResizeObserver', void 0),
            er(this, 'clearResizeObserver', void 0),
            er(this, 'scrollToGuild', void 0),
            er(this, 'handleJumpToGuild', void 0),
            er(this, 'scrollTo', void 0),
            er(this, 'scrollToBottom', void 0),
            er(this, 'isItemVisible', void 0),
            er(this, 'getVisibleGuildIds', void 0),
            er(this, 'handleScroll', void 0),
            er(this, '_handleScrollDebounced', void 0),
            er(this, '_handleScrollThrottled', void 0),
            er(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = r),
            (this.sizes = l),
            (this.scrollerRef = i.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new f.V7()),
            (this.setResizeObserver = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerNode();
                null != t && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(t));
            }),
            (this.clearResizeObserver = () => {
                var e;
                (null == (e = this.observer) || e.disconnect(), (this.observer = void 0));
            }),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n || (null == e && eo(window.location.pathname)) || e === ee.x8Z.SERVER_DISCOVERY_BADGE || e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
                if (null == e)
                    return void n.scrollTo({
                        to: 0,
                        animate: t
                    });
                let r = this.nodeRefs[e];
                for (; null == r; ) {
                    let t = this.guildsTree.getNode(e);
                    if ((null == t ? void 0 : t.parentId) == null) break;
                    r = this.nodeRefs[t.parentId];
                }
                null != r && (0, d.k)(r)
                    ? n.scrollIntoViewNode({
                          node: r,
                          animate: t,
                          padding: 8
                      })
                    : n.scrollTo({
                          to: 0,
                          animate: t
                      });
            }),
            (this.handleJumpToGuild = (e) => {
                this.scrollToGuild(e, !0);
            }),
            (this.scrollTo = (e) => {
                var t;
                null == (t = this.scrollerRef.current) || t.scrollTo(e);
            }),
            (this.scrollToBottom = () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollToBottom();
            }),
            (this.isItemVisible = (e, t, n) => {
                let { iconTotalSize: r, badgeVisibleBuffer: i, heightBeforeIcons: l } = this.sizes,
                    o = this.scrollerRef.current;
                if (null == o) return !1;
                let a = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (a < 0) return !1;
                let s = r * a + l;
                t || (s += i);
                let c = o.getScrollerState();
                return (!t && !!(s >= c.scrollTop)) || (!!t && !!(s + r <= c.scrollTop + c.offsetHeight));
            }),
            (this.getVisibleGuildIds = () => {
                var e;
                let t = this.scrollerRef.current;
                if (null == t) return [];
                let n = t.getScrollerState().offsetHeight,
                    r = null == (e = t.getScrollerNode()) ? void 0 : e.getBoundingClientRect().top;
                return void 0 === r
                    ? []
                    : this.guildsTree
                          .sortedGuildNodes()
                          .filter((e) => {
                              var t;
                              let i = null != (t = e.parentId) ? t : e.id,
                                  l = this.nodeRefs[i];
                              if (null == l) return !1;
                              let o = l.getBoundingClientRect(),
                                  a = o.top - r;
                              return a + o.height > 0 && a < n;
                          })
                          .map((e) => {
                              let { id: t } = e;
                              return t;
                          });
            }),
            (this.handleScroll = () => {
                (this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled());
            }),
            (this._handleScrollDebounced = s().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                (b.Z.updateGuildListScrollTo(t), this.onScroll());
            }, 200)),
            (this._handleScrollThrottled = s().throttle(() => {
                let e = this.scrollerRef.current;
                null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            }),
            (0, S.zb)(this.getVisibleGuildIds));
    }
}
function es(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, j.Z)(),
        { pathname: o } = (0, c.TH)(),
        a = o.startsWith(ee.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        s = (0, h.Wu)([D.Z, R.ZP], () => D.Z.getGuildIds().filter((e) => R.ZP.isCurrentUserGuest(e))),
        u = i.concat(s),
        { entrypoint: d } = I.Lk.useExperiment({ location: 'GuildsBar' });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(W.u, {}), d === I.u3.SERVER_RAIL_TOP && (0, r.jsx)(P.Z, {}), l ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(K.Z, { isOnHubVerificationRoute: a }), !t && (0, r.jsx)(B.Z, {}), u.map((e) => (0, r.jsx)($.Z, { guildId: e }, e)), (0, r.jsx)(J.Z, { onActivate: n })]
    });
}
function ec(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: o } = e,
        [a] = (0, h.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
        }),
        s = a.getRoots(),
        c = (0, h.Wu)([A.Z], () => A.Z.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                F.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Kqy, {
                role: 'group',
                'aria-label': et.intl.string(et.t['7hB4kp']),
                gap: 'xs',
                children: s.map((e, t) => l(e, t, s.length))
            }),
            c,
            (0, r.jsx)(q.Z, {}),
            i
                ? null
                : (0, r.jsx)(H.Z, {
                      disableTooltip: o.length > 0,
                      lastTargetNode: s[s.length - 1]
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(V.Z, {})
        ]
    });
}
function eu(e) {
    let { disableAppDownload: t = M.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [s] = (0, h.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, h.e7)([x.Z], () => x.Z.lurkingGuildIds()),
        p = i.useMemo(() => (n ? [] : d), [d, n]),
        b = (0, h.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        [O, j] = i.useState(!1),
        E = i.useCallback(() => j(!0), []),
        S = i.useCallback(() => j(!1), []),
        A = i.useRef(!1),
        [R] = i.useState(() => new f.V7()),
        D = i.useRef(null),
        B = i.useRef(null),
        V = (0, u.OP)(),
        { ref: H } = V,
        F = (function (e, t) {
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
        })(V, ['ref']),
        W = (0, m.mFp)(),
        [K, q] = i.useState(!1),
        J = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        $ = (0, m.dQu)(g.Z.space.SPACE_XS),
        er = i.useMemo(() => {
            let e = (function (e, t) {
                let n = e + t,
                    r = 2 + t;
                return {
                    iconSize: e,
                    iconTotalSize: n,
                    badgeVisibleBuffer: n - 16,
                    separatorSize: r,
                    heightBeforeIcons: el + r
                };
            })(J, $);
            return new ea(
                s,
                q,
                ee.dG4,
                () => {
                    var e, t;
                    (null == (e = D.current) || e.calculateState(), null == (t = B.current) || t.calculateState());
                },
                e
            );
        }, [J, $, s]);
    i.useEffect(
        () => (
            er.setResizeObserver(),
            () => {
                er.clearResizeObserver();
            }
        ),
        [er]
    );
    let { analyticsLocations: eu } = (0, C.ZP)(y.Z.GUILDS_LIST),
        { pathname: ed } = (0, c.TH)(),
        eh = eo(ed);
    ((0, _.Ng)(() => {
        if (!A.current && 0 !== s.size) {
            if (!eh) {
                let { scrollTop: e } = Z.Z.getGuildListDimensions();
                er.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return ((A.current = !0), () => R.stop());
        }
    }),
        i.useEffect(() => {
            if ((er.setGuildsTree(s), A.current || 0 === s.size)) return;
            let e = N.Z.getState().guildId;
            er.scrollToGuild(e, !1);
            let t = null;
            return N.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), er.scrollToGuild(t, !1));
            });
        }, [s, er]));
    let ep = i.useCallback(() => {
        er.scrollTo({
            to: 0,
            animate: !1
        });
    }, [er]);
    (0, U.Z)(er.scrollToGuild);
    let ef = i.useCallback(
        function e(t, n, i) {
            switch (t.type) {
                case k.eD.FOLDER:
                    return (0, r.jsx)(
                        X.Z,
                        {
                            folderNode: t,
                            setNodeRef: er.setNodeRef,
                            draggable: !0,
                            sorting: O,
                            onDragStart: E,
                            onDragEnd: S,
                            renderChildNode: e,
                            'aria-setsize': i,
                            'aria-posinset': void 0 !== n ? n + 1 : void 0
                        },
                        t.id
                    );
                case k.eD.GUILD:
                    return (0, r.jsx)(
                        Q.Z,
                        {
                            guildNode: t,
                            setRef: er.setNodeRef,
                            draggable: !0,
                            sorting: O,
                            onDragStart: E,
                            onDragEnd: S,
                            'aria-setsize': i,
                            'aria-posinset': void 0 !== n ? n + 1 : void 0
                        },
                        t.id
                    );
                default:
                    return null;
            }
        },
        [E, S, O, er.setNodeRef]
    );
    (0, T.t)();
    let eg = i.useRef(null),
        em = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    z.Z,
                    ei(
                        {
                            ref: eg,
                            selected: eh,
                            className: en.discoveryIcon
                        },
                        e
                    )
                ),
            [eh]
        ),
        eb = (0, r.jsx)(w.H, {
            targetElementRef: eg,
            scrollToBottom: er.scrollToBottom,
            isGuildBarScrolling: K,
            renderDiscoveryButton: em
        }),
        { entrypoint: e_ } = I.Lk.useExperiment({ location: 'GuildsBar' }),
        eO = e_ === I.u3.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(C.Gt, {
        value: eu,
        children: (0, r.jsx)(m.f6W, {
            theme: a,
            children: (e) => {
                var i, a;
                return (0, r.jsxs)('nav', {
                    className: o()(en.wrapper, l, e, { [en.hidden]: b }),
                    'aria-label': et.intl.string(et.t.PjnF2t),
                    children: [
                        (0, r.jsx)(G.Z, {
                            ref: D,
                            isVisible: er.isItemVisible,
                            onJumpTo: er.handleJumpToGuild,
                            className: en.unreadMentionsIndicatorTop,
                            barClassName: en.unreadMentionsBar
                        }),
                        (0, r.jsx)(
                            'ul',
                            ((i = ei({ ref: H }, F, W)),
                            (a = a =
                                {
                                    role: 'tree',
                                    className: en.tree,
                                    children: (0, r.jsxs)('div', {
                                        className: en.itemsContainer,
                                        children: [
                                            (0, r.jsxs)(m.xVE, {
                                                className: o()({
                                                    [en.scroller]: !0,
                                                    [en.scrolling]: K
                                                }),
                                                experimental_useStack: !0,
                                                gap: 'xs',
                                                ref: er.scrollerRef,
                                                onScroll: er.handleScroll,
                                                children: [
                                                    (0, r.jsx)(es, {
                                                        scrollToTop: ep,
                                                        lurkingGuildIds: p
                                                    }),
                                                    (0, r.jsx)(Y.Z, {}),
                                                    (0, r.jsx)(ec, {
                                                        guildDiscoveryButton: eb,
                                                        disableAppDownload: t,
                                                        isOverlay: n,
                                                        renderTreeNode: ef,
                                                        lurkingGuildIds: p
                                                    })
                                                ]
                                            }),
                                            eO &&
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(Y.Z, { fullWidth: !0 }),
                                                        (0, r.jsx)('div', {
                                                            className: en.bottomRailNotifCenterButton,
                                                            children: (0, r.jsx)(P.Z, {})
                                                        })
                                                    ]
                                                })
                                        ]
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i)
                        ),
                        (0, r.jsx)(G.Z, {
                            reverse: !0,
                            ref: B,
                            isVisible: er.isItemVisible,
                            onJumpTo: er.handleJumpToGuild,
                            className: o()(en.unreadMentionsIndicatorBottom, {
                                [en.unreadMentionsFixedFooter]: !n && !eO,
                                [en.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && eO
                            }),
                            barClassName: en.unreadMentionsBar
                        })
                    ]
                });
            }
        })
    });
}
let ed = i.memo(
    function (e) {
        let t = (0, O.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(eu, ei({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
