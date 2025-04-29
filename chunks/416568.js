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
    y = n(493773),
    _ = n(209613),
    v = n(100527),
    O = n(906732),
    C = n(358221),
    j = n(540059),
    S = n(706590),
    E = n(940777),
    x = n(41776),
    P = n(905423),
    I = n(802718),
    w = n(822857),
    N = n(931928),
    Z = n(431286),
    T = n(796974),
    A = n(271383),
    R = n(430824),
    D = n(771845),
    L = n(358085),
    k = n(709054),
    M = n(727258),
    U = n(605951),
    G = n(257351),
    B = n(474109),
    V = n(741616),
    H = n(187835),
    F = n(118122),
    z = n(193154),
    W = n(602147),
    Y = n(222059),
    K = n(751277),
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
let ea = (0, L.isWindows)() ? 4 : 12 * !(0, L.isMac)();
class ec {
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
                if (null == n || (null == e && window.location.pathname.startsWith(et.Z5c.GUILD_DISCOVERY)) || e === et.x8Z.SERVER_DISCOVERY_BADGE || e === et.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
        l = (0, S.Z)(),
        { pathname: o } = (0, c.TH)(),
        s = o.startsWith(et.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        a = (0, I.U)(),
        u = (0, h.Wu)([R.Z, A.ZP], () => k.default.keys(R.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        d = i.concat(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y.u, {}), l ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(K.Z, { isOnHubVerificationRoute: s }), !t && (0, r.jsx)(V.Z, {}), a, d.map((e) => (0, r.jsx)(ee.Z, { guildId: e }, e)), (0, r.jsx)($.Z, { onActivate: n })]
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
function eh(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: s } = e,
        a = (0, j.Q3)('GuildsBar'),
        [d] = (0, h.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        p = (0, h.e7)([x.Z], () => x.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : p), [p, n]),
        _ = (0, h.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        [S, E] = i.useState(!1),
        I = i.useCallback(() => E(!0), []),
        A = i.useCallback(() => E(!1), []),
        R = i.useRef(!1),
        [k] = i.useState(() => new f.V7()),
        H = i.useRef(null),
        F = i.useRef(null),
        z = (0, u.OP)(),
        { ref: Y } = z,
        K = es(z, ['ref']),
        Q = (0, m.mFp)(),
        [$, ee] = i.useState(!1),
        [ei, eh] = i.useState(!1),
        ep = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        ef = (0, m.dQu)(g.Z.space.SPACE_XS),
        eg = i.useMemo(
            () =>
                new ec(
                    d,
                    ee,
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
                            heightBeforeIcons: ea + l
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
    let { analyticsLocations: em } = (0, O.ZP)(v.Z.GUILDS_LIST),
        { pathname: eb } = (0, c.TH)(),
        ey = eb.startsWith(et.Z5c.GUILD_DISCOVERY) || eb.startsWith(et.Z5c.GLOBAL_DISCOVERY);
    (0, y.Ng)(() => {
        if (!R.current && 0 !== d.size) {
            if (ey) eg.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
                eg.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (R.current = !0), () => k.stop();
        }
    }),
        i.useEffect(() => {
            if ((eg.setGuildsTree(d), R.current || 0 === d.size)) return;
            let e = P.Z.getState().guildId;
            eg.scrollToGuild(e, !1);
            let t = null;
            return P.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eg.scrollToGuild(t, !1));
            });
        }, [d, eg]);
    let e_ = i.useCallback(() => {
        eg.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eg]);
    (0, U.Z)(eg.scrollToGuild);
    let ev = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case M.eD.FOLDER:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                folderNode: t,
                                setNodeRef: eg.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: I,
                                onDragEnd: A,
                                renderChildNode: e,
                                'aria-setsize': i,
                                'aria-posinset': void 0 !== n ? n + 1 : void 0
                            },
                            t.id
                        );
                    case M.eD.GUILD:
                        return (0, r.jsx)(
                            J.Z,
                            {
                                guildNode: t,
                                setRef: eg.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: I,
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
            [I, A, S, eg.setNodeRef]
        ),
        { enabled: eO } = (0, w.W)({ location: 'GuildsBar' });
    (0, Z.i)();
    let eC = i.useRef(null),
        ej = (0, N.qp)({
            isVirtualCurrencyEnabled: eO,
            discoveryButtonRef: eC,
            scrollToBottom: eg.scrollToBottom
        }),
        { shouldShow: eS, questId: eE, onDiscoveryButtonClick: ex } = ej,
        eP = es(ej, ['shouldShow', 'questId', 'onDiscoveryButtonClick']),
        eI = eO && eS,
        ew = (0, r.jsx)(W.Z, {
            ref: eC,
            questId: eI ? eE : void 0,
            selected: ey,
            className: er.discoveryIcon,
            onClick: eI ? ex : void 0
        }),
        eN = eI
            ? (0, r.jsx)(
                  N.fO,
                  eo(
                      el(
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
        eZ = (0, r.jsx)(B.Z, {
            ref: H,
            isVisible: eg.isItemVisible,
            onJumpTo: eg.handleJumpToGuild,
            className: er.unreadMentionsIndicatorTop,
            barClassName: er.unreadMentionsBar
        }),
        { pinnedSectionEnabled: eT } = (0, G.U)('GuildsBar');
    return (0, r.jsx)(O.Gt, {
        value: em,
        children: (0, r.jsx)(m.f6W, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)('nav', {
                    className: o()(er.wrapper, l, e, { [er.hidden]: _ }),
                    'aria-label': en.intl.string(en.t.PjnF2t),
                    children: [
                        eT ? null : eZ,
                        (0, r.jsx)(
                            'ul',
                            eo(el({ ref: Y }, K, Q), {
                                role: 'tree',
                                className: er.tree,
                                children: (0, r.jsx)('div', {
                                    className: er.itemsContainer,
                                    children: eT
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: er.topSection,
                                                      children: (0, r.jsx)(eu, {
                                                          hideDms: !0,
                                                          scrollToTop: e_,
                                                          lurkingGuildIds: b
                                                      })
                                                  }),
                                                  (0, r.jsxs)('div', {
                                                      className: er.bottomSection,
                                                      children: [
                                                          eZ,
                                                          (0, r.jsx)(q.Z, { fullWidth: !0 }),
                                                          (0, r.jsxs)(m.xVE, {
                                                              className: o()(er.scroller, er.scrollerBottomSection, {
                                                                  [er.scrolling]: $,
                                                                  [er.isScrolledToBottom]: ei
                                                              }),
                                                              experimental_useStack: !0,
                                                              gap: 'xs',
                                                              ref: eg.scrollerRef,
                                                              onScroll: eg.handleScroll,
                                                              children: [
                                                                  (0, r.jsx)(V.Z, {}),
                                                                  (0, r.jsx)(ed, {
                                                                      guildDiscoveryButton: eN,
                                                                      disableAppDownload: t,
                                                                      isOverlay: n,
                                                                      renderTreeNode: ev,
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
                                                  [er.scroller]: !0,
                                                  [er.scrolling]: $,
                                                  [er.isScrolledToBottom]: ei
                                              }),
                                              experimental_useStack: !0,
                                              gap: 'xs',
                                              ref: eg.scrollerRef,
                                              onScroll: eg.handleScroll,
                                              children: [
                                                  (0, r.jsx)(eu, {
                                                      scrollToTop: e_,
                                                      lurkingGuildIds: b
                                                  }),
                                                  (0, r.jsx)(q.Z, {}),
                                                  (0, r.jsx)(ed, {
                                                      guildDiscoveryButton: eN,
                                                      disableAppDownload: t,
                                                      isOverlay: n,
                                                      renderTreeNode: ev,
                                                      lurkingGuildIds: b
                                                  })
                                              ]
                                          })
                                })
                            })
                        ),
                        (0, r.jsx)(B.Z, {
                            reverse: !0,
                            ref: F,
                            isVisible: eg.isItemVisible,
                            onJumpTo: eg.handleJumpToGuild,
                            className: o()(er.unreadMentionsIndicatorBottom, { [er.unreadMentionsFixedFooter]: !n }),
                            barClassName: er.unreadMentionsBar
                        })
                    ]
                })
        })
    });
}
let ep = i.memo(
    function (e) {
        let t = (0, _.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(eh, el({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
