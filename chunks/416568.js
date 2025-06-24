n.d(t, { Z: () => ep }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
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
    v = n(906732),
    C = n(358221),
    j = n(706590),
    E = n(940777),
    S = n(41776),
    x = n(821020),
    I = n(770858),
    P = n(905423),
    N = n(822857),
    w = n(931928),
    Z = n(431286),
    T = n(796974),
    A = n(271383),
    R = n(430824),
    D = n(771845),
    L = n(358085),
    M = n(709054),
    k = n(727258),
    U = n(605951),
    G = n(474109),
    B = n(741616),
    F = n(187835),
    V = n(118122),
    H = n(193154),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
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
function eo(e, t) {
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
let es = (0, L.isWindows)() ? 4 : 12 * !(0, L.isMac)();
function ea(e) {
    return e.startsWith(ee.Z5c.GUILD_DISCOVERY) || e.startsWith(ee.Z5c.GLOBAL_DISCOVERY);
}
class ec {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, l) {
        er(this, 'guildsTree', void 0),
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
                null == (e = this.observer) || e.disconnect(), (this.observer = void 0);
            }),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n || (null == e && ea(window.location.pathname)) || e === ee.x8Z.SERVER_DISCOVERY_BADGE || e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
                let s = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (s < 0) return !1;
                let a = r * s + l;
                t || (a += i);
                let c = o.getScrollerState();
                return (!t && !!(a >= c.scrollTop)) || (!!t && !!(a + r <= c.scrollTop + c.offsetHeight));
            }),
            (this.handleScroll = () => {
                this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = a().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                b.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = a().throttle(() => {
                let e = this.scrollerRef.current;
                null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            });
    }
}
function eu(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, j.Z)(),
        { pathname: o } = (0, c.TH)(),
        s = o.startsWith(ee.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        a = (0, h.Wu)([R.Z, A.ZP], () => M.default.keys(R.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        u = i.concat(a),
        { entrypoint: d } = x.Lk.useExperiment({ location: 'GuildsBar' });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(W.u, {}), d === x.u3.SERVER_RAIL_TOP && (0, r.jsx)(I.Z, {}), l ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(K.Z, { isOnHubVerificationRoute: s }), !t && (0, r.jsx)(B.Z, {}), u.map((e) => (0, r.jsx)($.Z, { guildId: e }, e)), (0, r.jsx)(J.Z, { onActivate: n })]
    });
}
function ed(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: o } = e,
        [s] = (0, h.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        a = s.getRoots(),
        c = (0, h.e7)([R.Z], () => R.Z.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                H.Z,
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
                children: a.map((e, t) => l(e, t, a.length))
            }),
            c,
            (0, r.jsx)(q.Z, {}),
            i
                ? null
                : (0, r.jsx)(V.Z, {
                      disableTooltip: o.length > 0,
                      lastTargetNode: a[a.length - 1]
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(F.Z, {})
        ]
    });
}
function eh(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: s } = e,
        [a] = (0, h.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, h.e7)([S.Z], () => S.Z.lurkingGuildIds()),
        p = i.useMemo(() => (n ? [] : d), [d, n]),
        b = (0, h.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        [O, j] = i.useState(!1),
        E = i.useCallback(() => j(!0), []),
        A = i.useCallback(() => j(!1), []),
        R = i.useRef(!1),
        [M] = i.useState(() => new f.V7()),
        B = i.useRef(null),
        F = i.useRef(null),
        V = (0, u.OP)(),
        { ref: H } = V,
        W = eo(V, ['ref']),
        K = (0, m.mFp)(),
        [q, J] = i.useState(!1),
        $ = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        er = (0, m.dQu)(g.Z.space.SPACE_XS),
        eh = i.useMemo(() => {
            let e = (function (e, t) {
                let n = e + t,
                    r = 2 + t;
                return {
                    iconSize: e,
                    iconTotalSize: n,
                    badgeVisibleBuffer: n - 16,
                    separatorSize: r,
                    heightBeforeIcons: es + r
                };
            })($, er);
            return new ec(
                a,
                J,
                ee.dG4,
                () => {
                    var e, t;
                    null == (e = B.current) || e.calculateState(), null == (t = F.current) || t.calculateState();
                },
                e
            );
        }, [$, er, a]);
    i.useEffect(
        () => (
            eh.setResizeObserver(),
            () => {
                eh.clearResizeObserver();
            }
        ),
        [eh]
    );
    let { analyticsLocations: ep } = (0, v.ZP)(y.Z.GUILDS_LIST),
        { pathname: ef } = (0, c.TH)(),
        eg = ea(ef);
    (0, _.Ng)(() => {
        if (!R.current && 0 !== a.size) {
            if (!eg) {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
                eh.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (R.current = !0), () => M.stop();
        }
    }),
        i.useEffect(() => {
            if ((eh.setGuildsTree(a), R.current || 0 === a.size)) return;
            let e = P.Z.getState().guildId;
            eh.scrollToGuild(e, !1);
            let t = null;
            return P.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eh.scrollToGuild(t, !1));
            });
        }, [a, eh]);
    let em = i.useCallback(() => {
        eh.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eh]);
    (0, U.Z)(eh.scrollToGuild);
    let eb = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case k.eD.FOLDER:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                folderNode: t,
                                setNodeRef: eh.setNodeRef,
                                draggable: !0,
                                sorting: O,
                                onDragStart: E,
                                onDragEnd: A,
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
                                setRef: eh.setNodeRef,
                                draggable: !0,
                                sorting: O,
                                onDragStart: E,
                                onDragEnd: A,
                                'aria-setsize': i,
                                'aria-posinset': void 0 !== n ? n + 1 : void 0
                            },
                            t.id
                        );
                    default:
                        return null;
                }
            },
            [E, A, O, eh.setNodeRef]
        ),
        { enabled: e_ } = (0, N.WX)({ location: 'GuildsBar' });
    (0, Z.t)();
    let eO = i.useRef(null),
        ey = (0, w.qp)({
            isVirtualCurrencyEnabled: e_,
            discoveryButtonRef: eO,
            scrollToBottom: eh.scrollToBottom
        }),
        { shouldShow: ev, questId: eC, onDiscoveryButtonClick: ej } = ey,
        eE = eo(ey, ['shouldShow', 'questId', 'onDiscoveryButtonClick']),
        eS = e_ && ev,
        ex = (0, r.jsx)(z.Z, {
            ref: eO,
            questId: eS ? eC : void 0,
            selected: eg,
            className: en.discoveryIcon,
            onClick: eS ? ej : void 0
        }),
        eI = eS
            ? (0, r.jsx)(
                  w.fO,
                  el(
                      ei(
                          {
                              targetElementRef: eO,
                              isGuildBarScrolling: q
                          },
                          eE
                      ),
                      { children: ex }
                  )
              )
            : ex,
        { entrypoint: eP } = x.Lk.useExperiment({ location: 'GuildsBar' }),
        eN = eP === x.u3.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(v.Gt, {
        value: ep,
        children: (0, r.jsx)(m.f6W, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)('nav', {
                    className: o()(en.wrapper, l, e, { [en.hidden]: b }),
                    'aria-label': et.intl.string(et.t.PjnF2t),
                    children: [
                        (0, r.jsx)(G.Z, {
                            ref: B,
                            isVisible: eh.isItemVisible,
                            onJumpTo: eh.handleJumpToGuild,
                            className: en.unreadMentionsIndicatorTop,
                            barClassName: en.unreadMentionsBar
                        }),
                        (0, r.jsx)(
                            'ul',
                            el(ei({ ref: H }, W, K), {
                                role: 'tree',
                                className: en.tree,
                                children: (0, r.jsxs)('div', {
                                    className: en.itemsContainer,
                                    children: [
                                        (0, r.jsxs)(m.xVE, {
                                            className: o()({
                                                [en.scroller]: !0,
                                                [en.scrolling]: q
                                            }),
                                            experimental_useStack: !0,
                                            gap: 'xs',
                                            ref: eh.scrollerRef,
                                            onScroll: eh.handleScroll,
                                            children: [
                                                (0, r.jsx)(eu, {
                                                    scrollToTop: em,
                                                    lurkingGuildIds: p
                                                }),
                                                (0, r.jsx)(Y.Z, {}),
                                                (0, r.jsx)(ed, {
                                                    guildDiscoveryButton: eI,
                                                    disableAppDownload: t,
                                                    isOverlay: n,
                                                    renderTreeNode: eb,
                                                    lurkingGuildIds: p
                                                })
                                            ]
                                        }),
                                        eN &&
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    (0, r.jsx)(Y.Z, { fullWidth: !0 }),
                                                    (0, r.jsx)('div', {
                                                        className: en.bottomRailNotifCenterButton,
                                                        children: (0, r.jsx)(I.Z, {})
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            })
                        ),
                        (0, r.jsx)(G.Z, {
                            reverse: !0,
                            ref: F,
                            isVisible: eh.isItemVisible,
                            onJumpTo: eh.handleJumpToGuild,
                            className: o()(en.unreadMentionsIndicatorBottom, {
                                [en.unreadMentionsFixedFooter]: !n && !eN,
                                [en.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && eN
                            }),
                            barClassName: en.unreadMentionsBar
                        })
                    ]
                })
        })
    });
}
let ep = i.memo(
    function (e) {
        let t = (0, O.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(eh, ei({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
