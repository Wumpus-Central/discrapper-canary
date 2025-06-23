n.d(t, { Z: () => ef }), n(388685);
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
    O = n(493773),
    y = n(209613),
    _ = n(100527),
    v = n(906732),
    C = n(358221),
    j = n(540059),
    S = n(706590),
    x = n(940777),
    E = n(41776),
    P = n(821020),
    I = n(770858),
    N = n(905423),
    w = n(822857),
    Z = n(931928),
    T = n(431286),
    A = n(796974),
    R = n(271383),
    D = n(430824),
    L = n(771845),
    M = n(358085),
    k = n(709054),
    U = n(727258),
    G = n(605951),
    B = n(474109),
    V = n(741616),
    H = n(187835),
    F = n(118122),
    z = n(193154),
    W = n(602147),
    K = n(222059),
    Y = n(751277),
    q = n(65721),
    Q = n(843343),
    X = n(654142),
    J = n(695301),
    $ = n(836697),
    ee = n(921230),
    et = n(981631),
    en = n(388032),
    er = n(907171);
function ei(e, t, n) {
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
function el(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
function es(e, t) {
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
let ea = (0, M.isWindows)() ? 4 : 12 * !(0, M.isMac)();
function ec(e) {
    return e.startsWith(et.Z5c.GUILD_DISCOVERY) || e.startsWith(et.Z5c.GLOBAL_DISCOVERY);
}
class eu {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, l) {
        ei(this, 'guildsTree', void 0),
            ei(this, 'setScrolling', void 0),
            ei(this, 'setIsScrolledToBottom', void 0),
            ei(this, 'onScroll', void 0),
            ei(this, 'sizes', void 0),
            ei(this, 'scrollerRef', void 0),
            ei(this, 'nodeRefs', void 0),
            ei(this, 'timeout', void 0),
            ei(this, 'observer', void 0),
            ei(this, 'setResizeObserver', void 0),
            ei(this, 'clearResizeObserver', void 0),
            ei(this, 'scrollToGuild', void 0),
            ei(this, 'handleJumpToGuild', void 0),
            ei(this, 'scrollTo', void 0),
            ei(this, 'scrollToBottom', void 0),
            ei(this, 'isItemVisible', void 0),
            ei(this, 'handleScroll', void 0),
            ei(this, '_handleScrollDebounced', void 0),
            ei(this, '_handleScrollThrottled', void 0),
            ei(this, 'setNodeRef', void 0),
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
                if (null == n || (null == e && ec(window.location.pathname)) || e === et.x8Z.SERVER_DISCOVERY_BADGE || e === et.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
function ed(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, S.Z)(),
        { pathname: o } = (0, c.TH)(),
        s = o.startsWith(et.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        a = (0, h.Wu)([D.Z, R.ZP], () => k.default.keys(D.Z.getGuilds()).filter((e) => R.ZP.isCurrentUserGuest(e))),
        u = i.concat(a),
        { entrypoint: d } = P.Lk.useExperiment({ location: 'GuildsBar' });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(K.u, {}), d === P.u3.SERVER_RAIL_TOP && (0, r.jsx)(I.Z, {}), l ? (0, r.jsx)(x.Z, {}) : null, (0, r.jsx)(Y.Z, { isOnHubVerificationRoute: s }), !t && (0, r.jsx)(V.Z, {}), u.map((e) => (0, r.jsx)(ee.Z, { guildId: e }, e)), (0, r.jsx)($.Z, { onActivate: n })]
    });
}
function eh(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: o } = e,
        [s] = (0, h.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
        }),
        a = s.getRoots(),
        c = (0, h.e7)([D.Z], () => D.Z.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                z.Z,
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
                'aria-label': en.intl.string(en.t['7hB4kp']),
                gap: 'xs',
                children: a.map((e, t) => l(e, t, a.length))
            }),
            c,
            (0, r.jsx)(Q.Z, {}),
            i
                ? null
                : (0, r.jsx)(F.Z, {
                      disableTooltip: o.length > 0,
                      lastTargetNode: a[a.length - 1]
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(H.Z, {})
        ]
    });
}
function ep(e) {
    let { disableAppDownload: t = M.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: s } = e,
        a = (0, j.Q3)('GuildsBar'),
        [d] = (0, h.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
        }),
        p = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : p), [p, n]),
        y = (0, h.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        [S, x] = i.useState(!1),
        R = i.useCallback(() => x(!0), []),
        D = i.useCallback(() => x(!1), []),
        k = i.useRef(!1),
        [V] = i.useState(() => new f.V7()),
        H = i.useRef(null),
        F = i.useRef(null),
        z = (0, u.OP)(),
        { ref: K } = z,
        Y = es(z, ['ref']),
        Q = (0, m.mFp)(),
        [$, ee] = i.useState(!1),
        ei = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        ep = (0, m.dQu)(g.Z.space.SPACE_XS),
        ef = i.useMemo(() => {
            let e = (function (e, t, n) {
                let r = t ? n : 8,
                    i = e + r,
                    l = 2 + r;
                return {
                    iconSize: e,
                    iconTotalSize: i,
                    badgeVisibleBuffer: i - 16,
                    separatorSize: l,
                    heightBeforeIcons: ea + l
                };
            })(ei, a, ep);
            return new eu(
                d,
                ee,
                et.dG4,
                () => {
                    var e, t;
                    null == (e = H.current) || e.calculateState(), null == (t = F.current) || t.calculateState();
                },
                e
            );
        }, [ei, ep, d, a]);
    i.useEffect(
        () => (
            ef.setResizeObserver(),
            () => {
                ef.clearResizeObserver();
            }
        ),
        [ef]
    );
    let { analyticsLocations: eg } = (0, v.ZP)(_.Z.GUILDS_LIST),
        { pathname: em } = (0, c.TH)(),
        eb = ec(em);
    (0, O.Ng)(() => {
        if (!k.current && 0 !== d.size) {
            if (!eb) {
                let { scrollTop: e } = A.Z.getGuildListDimensions();
                ef.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (k.current = !0), () => V.stop();
        }
    }),
        i.useEffect(() => {
            if ((ef.setGuildsTree(d), k.current || 0 === d.size)) return;
            let e = N.Z.getState().guildId;
            ef.scrollToGuild(e, !1);
            let t = null;
            return N.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ef.scrollToGuild(t, !1));
            });
        }, [d, ef]);
    let eO = i.useCallback(() => {
        ef.scrollTo({
            to: 0,
            animate: !1
        });
    }, [ef]);
    (0, G.Z)(ef.scrollToGuild);
    let ey = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case U.eD.FOLDER:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                folderNode: t,
                                setNodeRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: R,
                                onDragEnd: D,
                                renderChildNode: e,
                                'aria-setsize': i,
                                'aria-posinset': void 0 !== n ? n + 1 : void 0
                            },
                            t.id
                        );
                    case U.eD.GUILD:
                        return (0, r.jsx)(
                            J.Z,
                            {
                                guildNode: t,
                                setRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: R,
                                onDragEnd: D,
                                'aria-setsize': i,
                                'aria-posinset': void 0 !== n ? n + 1 : void 0
                            },
                            t.id
                        );
                    default:
                        return null;
                }
            },
            [R, D, S, ef.setNodeRef]
        ),
        { enabled: e_ } = (0, w.WX)({ location: 'GuildsBar' });
    (0, T.t)();
    let ev = i.useRef(null),
        eC = (0, Z.qp)({
            isVirtualCurrencyEnabled: e_,
            discoveryButtonRef: ev,
            scrollToBottom: ef.scrollToBottom
        }),
        { shouldShow: ej, questId: eS, onDiscoveryButtonClick: ex } = eC,
        eE = es(eC, ['shouldShow', 'questId', 'onDiscoveryButtonClick']),
        eP = e_ && ej,
        eI = (0, r.jsx)(W.Z, {
            ref: ev,
            questId: eP ? eS : void 0,
            selected: eb,
            className: er.discoveryIcon,
            onClick: eP ? ex : void 0
        }),
        eN = eP
            ? (0, r.jsx)(
                  Z.fO,
                  eo(
                      el(
                          {
                              targetElementRef: ev,
                              isGuildBarScrolling: $
                          },
                          eE
                      ),
                      { children: eI }
                  )
              )
            : eI,
        { entrypoint: ew } = P.Lk.useExperiment({ location: 'GuildsBar' }),
        eZ = ew === P.u3.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(v.Gt, {
        value: eg,
        children: (0, r.jsx)(m.f6W, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)('nav', {
                    className: o()(er.wrapper, l, e, { [er.hidden]: y }),
                    'aria-label': en.intl.string(en.t.PjnF2t),
                    children: [
                        (0, r.jsx)(B.Z, {
                            ref: H,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: er.unreadMentionsIndicatorTop,
                            barClassName: er.unreadMentionsBar
                        }),
                        (0, r.jsx)(
                            'ul',
                            eo(el({ ref: K }, Y, Q), {
                                role: 'tree',
                                className: er.tree,
                                children: (0, r.jsxs)('div', {
                                    className: er.itemsContainer,
                                    children: [
                                        (0, r.jsxs)(m.xVE, {
                                            className: o()({
                                                [er.scroller]: !0,
                                                [er.scrolling]: $
                                            }),
                                            experimental_useStack: !0,
                                            gap: 'xs',
                                            ref: ef.scrollerRef,
                                            onScroll: ef.handleScroll,
                                            children: [
                                                (0, r.jsx)(ed, {
                                                    scrollToTop: eO,
                                                    lurkingGuildIds: b
                                                }),
                                                (0, r.jsx)(q.Z, {}),
                                                (0, r.jsx)(eh, {
                                                    guildDiscoveryButton: eN,
                                                    disableAppDownload: t,
                                                    isOverlay: n,
                                                    renderTreeNode: ey,
                                                    lurkingGuildIds: b
                                                })
                                            ]
                                        }),
                                        eZ &&
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    (0, r.jsx)(q.Z, { fullWidth: !0 }),
                                                    (0, r.jsx)('div', {
                                                        className: er.bottomRailNotifCenterButton,
                                                        children: (0, r.jsx)(I.Z, {})
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            })
                        ),
                        (0, r.jsx)(B.Z, {
                            reverse: !0,
                            ref: F,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: o()(er.unreadMentionsIndicatorBottom, {
                                [er.unreadMentionsFixedFooter]: !n && !eZ,
                                [er.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && eZ
                            }),
                            barClassName: er.unreadMentionsBar
                        })
                    ]
                })
        })
    });
}
let ef = i.memo(
    function (e) {
        let t = (0, y.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(ep, el({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
