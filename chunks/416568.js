n.d(t, { Z: () => eh }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(512969),
    u = n(91192),
    d = n(374470),
    h = n(442837),
    p = n(902704),
    f = n(846519),
    g = n(692547),
    m = n(481060),
    b = n(925549),
    _ = n(493773),
    y = n(209613),
    O = n(100527),
    v = n(906732),
    C = n(358221),
    S = n(540059),
    j = n(706590),
    E = n(940777),
    x = n(41776),
    P = n(905423),
    I = n(822857),
    w = n(931928),
    N = n(431286),
    Z = n(796974),
    T = n(271383),
    A = n(430824),
    R = n(771845),
    D = n(358085),
    L = n(709054),
    k = n(727258),
    M = n(605951),
    U = n(257351),
    G = n(474109),
    B = n(741616),
    V = n(187835),
    H = n(118122),
    F = n(193154),
    z = n(602147),
    W = n(222059),
    Y = n(751277),
    K = n(65721),
    q = n(843343),
    Q = n(654142),
    X = n(695301),
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
let es = (0, D.isWindows)() ? 4 : 12 * !(0, D.isMac)();
class ea {
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
                if (null == n || (null == e && window.location.pathname.startsWith(ee.Z5c.GUILD_DISCOVERY)) || e === ee.x8Z.SERVER_DISCOVERY_BADGE || e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
function ec(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, j.Z)(),
        { pathname: o } = (0, c.TH)(),
        s = o.startsWith(ee.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        a = (0, h.Wu)([A.Z, T.ZP], () => L.default.keys(A.Z.getGuilds()).filter((e) => T.ZP.isCurrentUserGuest(e))),
        u = i.concat(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(W.u, {}), l ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(Y.Z, { isOnHubVerificationRoute: s }), !t && (0, r.jsx)(B.Z, {}), u.map((e) => (0, r.jsx)($.Z, { guildId: e }, e)), (0, r.jsx)(J.Z, { onActivate: n })]
    });
}
function eu(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: o } = e,
        [s] = (0, h.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        a = s.getRoots(),
        c = (0, h.e7)([A.Z], () => A.Z.getGeoRestrictedGuilds()).map((e) =>
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
                children: a.map((e, t) => l(e, t, a.length))
            }),
            c,
            (0, r.jsx)(q.Z, {}),
            i
                ? null
                : (0, r.jsx)(H.Z, {
                      disableTooltip: o.length > 0,
                      lastTargetNode: a[a.length - 1]
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(V.Z, {})
        ]
    });
}
function ed(e) {
    let { disableAppDownload: t = D.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: s } = e,
        a = (0, S.Q3)('GuildsBar'),
        [d] = (0, h.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        p = (0, h.e7)([x.Z], () => x.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : p), [p, n]),
        y = (0, h.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        [j, E] = i.useState(!1),
        T = i.useCallback(() => E(!0), []),
        A = i.useCallback(() => E(!1), []),
        L = i.useRef(!1),
        [V] = i.useState(() => new f.V7()),
        H = i.useRef(null),
        F = i.useRef(null),
        W = (0, u.OP)(),
        { ref: Y } = W,
        q = eo(W, ['ref']),
        J = (0, m.mFp)(),
        [$, er] = i.useState(!1),
        [ed, eh] = i.useState(!1),
        ep = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        ef = (0, m.dQu)(g.Z.space.SPACE_XS),
        eg = i.useMemo(
            () =>
                new ea(
                    d,
                    er,
                    eh,
                    () => {
                        var e, t;
                        null == (e = H.current) || e.calculateState(), null == (t = F.current) || t.calculateState();
                    },
                    (function (e, t, n) {
                        let r = t ? n : 8,
                            i = e + r,
                            l = 2 + r;
                        return {
                            iconSize: e,
                            iconTotalSize: i,
                            badgeVisibleBuffer: i - 16,
                            separatorSize: l,
                            heightBeforeIcons: es + l
                        };
                    })(ep, a, ef)
                ),
            [ep, ef, d, a]
        );
    i.useEffect(
        () => (
            eg.setResizeObserver(),
            () => {
                eg.clearResizeObserver();
            }
        ),
        [eg]
    );
    let { analyticsLocations: em } = (0, v.ZP)(O.Z.GUILDS_LIST),
        { pathname: eb } = (0, c.TH)(),
        e_ = eb.startsWith(ee.Z5c.GUILD_DISCOVERY) || eb.startsWith(ee.Z5c.GLOBAL_DISCOVERY);
    (0, _.Ng)(() => {
        if (!L.current && 0 !== d.size) {
            if (e_) eg.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = Z.Z.getGuildListDimensions();
                eg.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (L.current = !0), () => V.stop();
        }
    }),
        i.useEffect(() => {
            if ((eg.setGuildsTree(d), L.current || 0 === d.size)) return;
            let e = P.Z.getState().guildId;
            eg.scrollToGuild(e, !1);
            let t = null;
            return P.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eg.scrollToGuild(t, !1));
            });
        }, [d, eg]);
    let ey = i.useCallback(() => {
        eg.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eg]);
    (0, M.Z)(eg.scrollToGuild);
    let eO = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case k.eD.FOLDER:
                        return (0, r.jsx)(
                            Q.Z,
                            {
                                folderNode: t,
                                setNodeRef: eg.setNodeRef,
                                draggable: !0,
                                sorting: j,
                                onDragStart: T,
                                onDragEnd: A,
                                renderChildNode: e,
                                'aria-setsize': i,
                                'aria-posinset': void 0 !== n ? n + 1 : void 0
                            },
                            t.id
                        );
                    case k.eD.GUILD:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                guildNode: t,
                                setRef: eg.setNodeRef,
                                draggable: !0,
                                sorting: j,
                                onDragStart: T,
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
            [T, A, j, eg.setNodeRef]
        ),
        { enabled: ev } = (0, I.W)({ location: 'GuildsBar' });
    (0, N.i)();
    let eC = i.useRef(null),
        eS = (0, w.qp)({
            isVirtualCurrencyEnabled: ev,
            discoveryButtonRef: eC,
            scrollToBottom: eg.scrollToBottom
        }),
        { shouldShow: ej, questId: eE, onDiscoveryButtonClick: ex } = eS,
        eP = eo(eS, ['shouldShow', 'questId', 'onDiscoveryButtonClick']),
        eI = ev && ej,
        ew = (0, r.jsx)(z.Z, {
            ref: eC,
            questId: eI ? eE : void 0,
            selected: e_,
            className: en.discoveryIcon,
            onClick: eI ? ex : void 0
        }),
        eN = eI
            ? (0, r.jsx)(
                  w.fO,
                  el(
                      ei(
                          {
                              targetElementRef: eC,
                              isGuildBarScrolling: $
                          },
                          eP
                      ),
                      { children: ew }
                  )
              )
            : ew,
        eZ = (0, r.jsx)(G.Z, {
            ref: H,
            isVisible: eg.isItemVisible,
            onJumpTo: eg.handleJumpToGuild,
            className: en.unreadMentionsIndicatorTop,
            barClassName: en.unreadMentionsBar
        }),
        { pinnedSectionEnabled: eT } = (0, U.U)('GuildsBar');
    return (0, r.jsx)(v.Gt, {
        value: em,
        children: (0, r.jsx)(m.f6W, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)('nav', {
                    className: o()(en.wrapper, l, e, { [en.hidden]: y }),
                    'aria-label': et.intl.string(et.t.PjnF2t),
                    children: [
                        eT ? null : eZ,
                        (0, r.jsx)(
                            'ul',
                            el(ei({ ref: Y }, q, J), {
                                role: 'tree',
                                className: en.tree,
                                children: (0, r.jsx)('div', {
                                    className: en.itemsContainer,
                                    children: eT
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: en.topSection,
                                                      children: (0, r.jsx)(ec, {
                                                          hideDms: !0,
                                                          scrollToTop: ey,
                                                          lurkingGuildIds: b
                                                      })
                                                  }),
                                                  (0, r.jsxs)('div', {
                                                      className: en.bottomSection,
                                                      children: [
                                                          eZ,
                                                          (0, r.jsx)(K.Z, { fullWidth: !0 }),
                                                          (0, r.jsxs)(m.xVE, {
                                                              className: o()(en.scroller, en.scrollerBottomSection, {
                                                                  [en.scrolling]: $,
                                                                  [en.isScrolledToBottom]: ed
                                                              }),
                                                              experimental_useStack: !0,
                                                              gap: 'xs',
                                                              ref: eg.scrollerRef,
                                                              onScroll: eg.handleScroll,
                                                              children: [
                                                                  (0, r.jsx)(B.Z, {}),
                                                                  (0, r.jsx)(eu, {
                                                                      guildDiscoveryButton: eN,
                                                                      disableAppDownload: t,
                                                                      isOverlay: n,
                                                                      renderTreeNode: eO,
                                                                      lurkingGuildIds: b
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  })
                                              ]
                                          })
                                        : (0, r.jsxs)(m.xVE, {
                                              className: o()({
                                                  [en.scroller]: !0,
                                                  [en.scrolling]: $,
                                                  [en.isScrolledToBottom]: ed
                                              }),
                                              experimental_useStack: !0,
                                              gap: 'xs',
                                              ref: eg.scrollerRef,
                                              onScroll: eg.handleScroll,
                                              children: [
                                                  (0, r.jsx)(ec, {
                                                      scrollToTop: ey,
                                                      lurkingGuildIds: b
                                                  }),
                                                  (0, r.jsx)(K.Z, {}),
                                                  (0, r.jsx)(eu, {
                                                      guildDiscoveryButton: eN,
                                                      disableAppDownload: t,
                                                      isOverlay: n,
                                                      renderTreeNode: eO,
                                                      lurkingGuildIds: b
                                                  })
                                              ]
                                          })
                                })
                            })
                        ),
                        (0, r.jsx)(G.Z, {
                            reverse: !0,
                            ref: F,
                            isVisible: eg.isItemVisible,
                            onJumpTo: eg.handleJumpToGuild,
                            className: o()(en.unreadMentionsIndicatorBottom, { [en.unreadMentionsFixedFooter]: !n }),
                            barClassName: en.unreadMentionsBar
                        })
                    ]
                })
        })
    });
}
let eh = i.memo(
    function (e) {
        let t = (0, y.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(ed, ei({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
