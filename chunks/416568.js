n.d(t, { Z: () => ef }), n(388685);
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
    v = n(100527),
    O = n(906732),
    C = n(358221),
    S = n(540059),
    j = n(706590),
    E = n(940777),
    x = n(41776),
    N = n(905423),
    I = n(802718),
    P = n(822857),
    w = n(931928),
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
    W = n(741616),
    V = n(187835),
    H = n(118122),
    F = n(193154),
    z = n(602147),
    Y = n(416637),
    K = n(222059),
    q = n(751277),
    Q = n(65721),
    X = n(843343),
    J = n(654142),
    $ = n(695301),
    ee = n(836697),
    et = n(921230),
    en = n(981631),
    er = n(388032),
    ei = n(907171);
function el(e, t, n) {
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
function eo(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
function ea(e, t) {
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
let ec = (0, L.isWindows)() ? 4 : 12 * !(0, L.isMac)();
function eu(e, t, n) {
    let r = t ? n : 8,
        i = e + r,
        l = 2 + r;
    return {
        iconSize: e,
        iconTotalSize: i,
        badgeVisibleBuffer: i - 16,
        separatorSize: l,
        heightBeforeIcons: ec + l
    };
}
class ed {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, l) {
        el(this, 'guildsTree', void 0),
            el(this, 'setScrolling', void 0),
            el(this, 'setIsScrolledToBottom', void 0),
            el(this, 'onScroll', void 0),
            el(this, 'sizes', void 0),
            el(this, 'scrollerRef', void 0),
            el(this, 'nodeRefs', void 0),
            el(this, 'timeout', void 0),
            el(this, 'observer', void 0),
            el(this, 'setResizeObserver', void 0),
            el(this, 'clearResizeObserver', void 0),
            el(this, 'scrollToGuild', void 0),
            el(this, 'handleJumpToGuild', void 0),
            el(this, 'scrollTo', void 0),
            el(this, 'scrollToBottom', void 0),
            el(this, 'isItemVisible', void 0),
            el(this, 'handleScroll', void 0),
            el(this, '_handleScrollDebounced', void 0),
            el(this, '_handleScrollThrottled', void 0),
            el(this, 'setNodeRef', void 0),
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
                if (null == n || (null == e && window.location.pathname.startsWith(en.Z5c.GUILD_DISCOVERY)) || e === en.x8Z.SERVER_DISCOVERY_BADGE || e === en.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
function eh(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: s } = e,
        a = (0, S.Q3)('GuildsBar'),
        [d] = (0, h.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        p = (0, h.e7)([x.Z], () => x.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : p), [p, n]),
        y = (0, h.Wu)([R.Z, A.ZP], () => k.default.keys(R.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        G = b.concat(y),
        el = (0, h.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        ec = (0, h.e7)([R.Z], () => R.Z.getGeoRestrictedGuilds()),
        [eh, ep] = i.useState(!1),
        ef = i.useCallback(() => ep(!0), []),
        eg = i.useCallback(() => ep(!1), []),
        em = i.useRef(!1),
        [eb] = i.useState(() => new f.V7()),
        e_ = i.useRef(null),
        ey = i.useRef(null),
        ev = (0, u.OP)(),
        { ref: eO } = ev,
        eC = ea(ev, ['ref']),
        eS = (0, m.mFp)(),
        [ej, eE] = i.useState(!1),
        [ex, eN] = i.useState(!1),
        eI = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        eP = (0, m.dQu)(g.Z.space.SPACE_XS),
        ew = i.useMemo(
            () =>
                new ed(
                    d,
                    eE,
                    eN,
                    () => {
                        var e, t;
                        null == (e = e_.current) || e.calculateState(), null == (t = ey.current) || t.calculateState();
                    },
                    eu(eI, a, eP)
                ),
            [eI, eP, d, a]
        );
    i.useEffect(
        () => (
            ew.setResizeObserver(),
            () => {
                ew.clearResizeObserver();
            }
        ),
        [ew]
    );
    let { analyticsLocations: eZ } = (0, O.ZP)(v.Z.GUILDS_LIST),
        { pathname: eT } = (0, c.TH)(),
        eA = eT.startsWith(en.Z5c.GUILD_DISCOVERY) || eT.startsWith(en.Z5c.GLOBAL_DISCOVERY),
        eR = eT.startsWith(en.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, _.Ng)(() => {
        if (!em.current && 0 !== d.size) {
            if (eA) ew.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
                ew.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (em.current = !0), () => eb.stop();
        }
    }),
        i.useEffect(() => {
            if ((ew.setGuildsTree(d), em.current || 0 === d.size)) return;
            let e = N.Z.getState().guildId;
            ew.scrollToGuild(e, !1);
            let t = null;
            return N.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ew.scrollToGuild(t, !1));
            });
        }, [d, ew]);
    let eD = i.useCallback(() => {
        ew.scrollTo({
            to: 0,
            animate: !1
        });
    }, [ew]);
    (0, U.Z)(ew.scrollToGuild);
    let eL = i.useCallback(
            function e(t) {
                switch (t.type) {
                    case M.eD.FOLDER:
                        return (0, r.jsx)(
                            J.Z,
                            {
                                folderNode: t,
                                setNodeRef: ew.setNodeRef,
                                draggable: !0,
                                sorting: eh,
                                onDragStart: ef,
                                onDragEnd: eg,
                                renderChildNode: e
                            },
                            t.id
                        );
                    case M.eD.GUILD:
                        return (0, r.jsx)(
                            $.Z,
                            {
                                guildNode: t,
                                setRef: ew.setNodeRef,
                                draggable: !0,
                                sorting: eh,
                                onDragStart: ef,
                                onDragEnd: eg
                            },
                            t.id
                        );
                    default:
                        return null;
                }
            },
            [ef, eg, eh, ew.setNodeRef]
        ),
        ek = d.getRoots(),
        eM = (0, j.Z)(),
        eU = (0, I.U)(),
        { enabled: eG } = (0, P.W)({ location: 'GuildsBar' });
    (0, Z.i)();
    let eB = i.useRef(null),
        eW = (0, w.qp)({
            isVirtualCurrencyEnabled: eG,
            discoveryButtonRef: eB,
            scrollToBottom: ew.scrollToBottom
        }),
        { shouldShow: eV, questId: eH, onDiscoveryButtonClick: eF } = eW,
        ez = ea(eW, ['shouldShow', 'questId', 'onDiscoveryButtonClick']),
        eY = eG && eV,
        eK = ec.map((e) =>
            (0, r.jsx)(
                F.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        ),
        eq = (0, r.jsx)(z.Z, {
            ref: eB,
            questId: eY ? eH : void 0,
            selected: eA,
            className: ei.discoveryIcon,
            onClick: eY ? eF : void 0
        }),
        eQ = eY
            ? (0, r.jsx)(
                  w.fO,
                  es(
                      eo(
                          {
                              targetElementRef: eB,
                              isGuildBarScrolling: ej
                          },
                          ez
                      ),
                      { children: eq }
                  )
              )
            : eq;
    return (0, r.jsx)(O.Gt, {
        value: eZ,
        children: (0, r.jsx)(m.f6W, {
            theme: s,
            children: (e) =>
                (0, r.jsx)('nav', {
                    className: o()(ei.wrapper, l, e, { [ei.hidden]: el }),
                    'aria-label': er.NW.string(er.t.PjnF2t),
                    children: (0, r.jsxs)(
                        'ul',
                        es(eo({ ref: eO }, eC, eS), {
                            role: 'tree',
                            className: ei.tree,
                            children: [
                                (0, r.jsx)(B.Z, {
                                    ref: e_,
                                    isVisible: ew.isItemVisible,
                                    onJumpTo: ew.handleJumpToGuild,
                                    className: ei.unreadMentionsIndicatorTop,
                                    barClassName: ei.unreadMentionsBar
                                }),
                                (0, r.jsxs)('div', {
                                    className: ei.itemsContainer,
                                    children: [
                                        (0, r.jsxs)(m.xVE, {
                                            className: o()({
                                                [ei.scroller]: !0,
                                                [ei.scrolling]: ej
                                            }),
                                            experimental_useStack: a,
                                            gap: 'xs',
                                            ref: ew.scrollerRef,
                                            onScroll: ew.handleScroll,
                                            children: [
                                                (0, r.jsx)(K.u, {}),
                                                eM ? (0, r.jsx)(E.Z, {}) : null,
                                                (0, r.jsx)(q.Z, { isOnHubVerificationRoute: eR }),
                                                (0, r.jsx)(W.Z, {}),
                                                eU,
                                                G.map((e) => (0, r.jsx)(et.Z, { guildId: e }, e)),
                                                (0, r.jsx)(ee.Z, { onActivate: eD }),
                                                (0, r.jsx)(Q.Z, {}),
                                                a
                                                    ? (0, r.jsx)(m.Kqy, {
                                                          gap: 'xs',
                                                          'aria-label': er.NW.string(er.t['7hB4kp']),
                                                          children: ek.map(eL)
                                                      })
                                                    : (0, r.jsx)('div', {
                                                          'aria-label': er.NW.string(er.t['7hB4kp']),
                                                          children: ek.map(eL)
                                                      }),
                                                eK,
                                                n
                                                    ? null
                                                    : (0, r.jsx)(H.Z, {
                                                          disableTooltip: b.length > 0,
                                                          lastTargetNode: ek[ek.length - 1]
                                                      }),
                                                (0, r.jsx)(X.Z, {}),
                                                !n && a ? eQ : null,
                                                t ? null : (0, r.jsx)(V.Z, {})
                                            ]
                                        }),
                                        n || a
                                            ? null
                                            : (0, r.jsx)(Y.g, {
                                                  hideGradient: ex,
                                                  children: eQ
                                              })
                                    ]
                                }),
                                (0, r.jsx)(B.Z, {
                                    reverse: !0,
                                    ref: ey,
                                    isVisible: ew.isItemVisible,
                                    onJumpTo: ew.handleJumpToGuild,
                                    className: o()(ei.unreadMentionsIndicatorBottom, { [ei.unreadMentionsFixedFooter]: !n }),
                                    barClassName: ei.unreadMentionsBar
                                })
                            ]
                        })
                    )
                })
        })
    });
}
function ep(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: s } = e,
        a = (0, S.Q3)('GuildsBar'),
        [d] = (0, h.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        p = (0, h.e7)([x.Z], () => x.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : p), [p, n]),
        y = (0, h.Wu)([R.Z, A.ZP], () => k.default.keys(R.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        G = b.concat(y),
        el = (0, h.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        ec = (0, h.e7)([R.Z], () => R.Z.getGeoRestrictedGuilds()),
        [eh, ep] = i.useState(!1),
        ef = i.useCallback(() => ep(!0), []),
        eg = i.useCallback(() => ep(!1), []),
        em = i.useRef(!1),
        [eb] = i.useState(() => new f.V7()),
        e_ = i.useRef(null),
        ey = i.useRef(null),
        ev = (0, u.OP)(),
        { ref: eO } = ev,
        eC = ea(ev, ['ref']),
        eS = (0, m.mFp)(),
        [ej, eE] = i.useState(!1),
        [ex, eN] = i.useState(!1),
        eI = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        eP = (0, m.dQu)(g.Z.space.SPACE_XS),
        ew = i.useMemo(
            () =>
                new ed(
                    d,
                    eE,
                    eN,
                    () => {
                        var e, t;
                        null == (e = e_.current) || e.calculateState(), null == (t = ey.current) || t.calculateState();
                    },
                    eu(eI, a, eP)
                ),
            [eI, eP, d, a]
        );
    i.useEffect(
        () => (
            ew.setResizeObserver(),
            () => {
                ew.clearResizeObserver();
            }
        ),
        [ew]
    );
    let { analyticsLocations: eZ } = (0, O.ZP)(v.Z.GUILDS_LIST),
        { pathname: eT } = (0, c.TH)(),
        eA = eT.startsWith(en.Z5c.GUILD_DISCOVERY) || eT.startsWith(en.Z5c.GLOBAL_DISCOVERY),
        eR = eT.startsWith(en.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, _.Ng)(() => {
        if (!em.current && 0 !== d.size) {
            if (eA) ew.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
                ew.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (em.current = !0), () => eb.stop();
        }
    }),
        i.useEffect(() => {
            if ((ew.setGuildsTree(d), em.current || 0 === d.size)) return;
            let e = N.Z.getState().guildId;
            ew.scrollToGuild(e, !1);
            let t = null;
            return N.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ew.scrollToGuild(t, !1));
            });
        }, [d, ew]);
    let eD = i.useCallback(() => {
        ew.scrollTo({
            to: 0,
            animate: !1
        });
    }, [ew]);
    (0, U.Z)(ew.scrollToGuild);
    let eL = i.useCallback(
            function e(t) {
                switch (t.type) {
                    case M.eD.FOLDER:
                        return (0, r.jsx)(
                            J.Z,
                            {
                                folderNode: t,
                                setNodeRef: ew.setNodeRef,
                                draggable: !0,
                                sorting: eh,
                                onDragStart: ef,
                                onDragEnd: eg,
                                renderChildNode: e
                            },
                            t.id
                        );
                    case M.eD.GUILD:
                        return (0, r.jsx)(
                            $.Z,
                            {
                                guildNode: t,
                                setRef: ew.setNodeRef,
                                draggable: !0,
                                sorting: eh,
                                onDragStart: ef,
                                onDragEnd: eg
                            },
                            t.id
                        );
                    default:
                        return null;
                }
            },
            [ef, eg, eh, ew.setNodeRef]
        ),
        ek = d.getRoots(),
        eM = (0, j.Z)(),
        eU = (0, I.U)(),
        { enabled: eG } = (0, P.W)({ location: 'GuildsBar' });
    (0, Z.i)();
    let eB = i.useRef(null),
        eW = (0, w.qp)({
            isVirtualCurrencyEnabled: eG,
            discoveryButtonRef: eB,
            scrollToBottom: ew.scrollToBottom
        }),
        { shouldShow: eV, questId: eH, onDiscoveryButtonClick: eF } = eW,
        ez = ea(eW, ['shouldShow', 'questId', 'onDiscoveryButtonClick']),
        eY = eG && eV,
        eK = ec.map((e) =>
            (0, r.jsx)(
                F.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        ),
        eq = (0, r.jsx)(z.Z, {
            ref: eB,
            questId: eY ? eH : void 0,
            selected: eA,
            className: ei.discoveryIcon,
            onClick: eY ? eF : void 0
        }),
        eQ = eY
            ? (0, r.jsx)(
                  w.fO,
                  es(
                      eo(
                          {
                              targetElementRef: eB,
                              isGuildBarScrolling: ej
                          },
                          ez
                      ),
                      { children: eq }
                  )
              )
            : eq;
    return (0, r.jsx)(O.Gt, {
        value: eZ,
        children: (0, r.jsx)(m.f6W, {
            theme: s,
            children: (e) =>
                (0, r.jsx)('nav', {
                    className: o()(ei.wrapper, l, e, { [ei.hidden]: el }),
                    'aria-label': er.NW.string(er.t.PjnF2t),
                    children: (0, r.jsxs)(
                        'ul',
                        es(eo({ ref: eO }, eC, eS), {
                            role: 'tree',
                            className: ei.tree,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: ei.itemsContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: ei.topSection,
                                            children: [(0, r.jsx)(K.u, {}), eM ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(q.Z, { isOnHubVerificationRoute: eR }), eU, G.map((e) => (0, r.jsx)(et.Z, { guildId: e }, e)), (0, r.jsx)(ee.Z, { onActivate: eD })]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: ei.bottomSection,
                                            children: [
                                                (0, r.jsx)(B.Z, {
                                                    ref: e_,
                                                    isVisible: ew.isItemVisible,
                                                    onJumpTo: ew.handleJumpToGuild,
                                                    className: ei.unreadMentionsIndicatorTop,
                                                    barClassName: ei.unreadMentionsBar
                                                }),
                                                (0, r.jsx)(Q.Z, { fullWidth: !0 }),
                                                (0, r.jsxs)(m.xVE, {
                                                    className: o()(ei.scroller, ei.scrollerBottomSection, { [ei.scrolling]: ej }),
                                                    experimental_useStack: a,
                                                    gap: 'xs',
                                                    ref: ew.scrollerRef,
                                                    onScroll: ew.handleScroll,
                                                    children: [
                                                        (0, r.jsx)(W.Z, {}),
                                                        a
                                                            ? (0, r.jsx)(m.Kqy, {
                                                                  gap: 'xs',
                                                                  'aria-label': er.NW.string(er.t['7hB4kp']),
                                                                  children: ek.map(eL)
                                                              })
                                                            : (0, r.jsx)('div', {
                                                                  'aria-label': er.NW.string(er.t['7hB4kp']),
                                                                  children: ek.map(eL)
                                                              }),
                                                        eK,
                                                        n
                                                            ? null
                                                            : (0, r.jsx)(H.Z, {
                                                                  disableTooltip: b.length > 0,
                                                                  lastTargetNode: ek[ek.length - 1]
                                                              }),
                                                        (0, r.jsx)(X.Z, {}),
                                                        !n && a ? eQ : null,
                                                        t ? null : (0, r.jsx)(V.Z, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        n || a
                                            ? null
                                            : (0, r.jsx)(Y.g, {
                                                  hideGradient: ex,
                                                  children: eQ
                                              })
                                    ]
                                }),
                                (0, r.jsx)(B.Z, {
                                    reverse: !0,
                                    ref: ey,
                                    isVisible: ew.isItemVisible,
                                    onJumpTo: ew.handleJumpToGuild,
                                    className: o()(ei.unreadMentionsIndicatorBottom, { [ei.unreadMentionsFixedFooter]: !n }),
                                    barClassName: ei.unreadMentionsBar
                                })
                            ]
                        })
                    )
                })
        })
    });
}
let ef = i.memo(
    function (e) {
        let t = (0, y.Z)('guildsnav'),
            { pinnedSectionEnabled: n } = (0, G.U)('GuildsBar');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: n ? (0, r.jsx)(ep, eo({}, e)) : (0, r.jsx)(eh, eo({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
