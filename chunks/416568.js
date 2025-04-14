n.d(t, { Z: () => ef }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(512969),
    u = n(91192),
    d = n(374470),
    p = n(442837),
    h = n(902704),
    f = n(846519),
    g = n(692547),
    m = n(481060),
    b = n(925549),
    _ = n(493773),
    y = n(209613),
    v = n(100527),
    O = n(906732),
    j = n(358221),
    C = n(540059),
    x = n(706590),
    S = n(940777),
    P = n(41776),
    I = n(905423),
    N = n(802718),
    Z = n(822857),
    E = n(931928),
    w = n(431286),
    T = n(796974),
    A = n(271383),
    D = n(430824),
    R = n(771845),
    L = n(358085),
    k = n(709054),
    M = n(727258),
    G = n(605951),
    B = n(257351),
    U = n(474109),
    W = n(741616),
    V = n(187835),
    F = n(118122),
    H = n(193154),
    z = n(602147),
    Y = n(416637),
    q = n(222059),
    K = n(751277),
    Q = n(65721),
    J = n(843343),
    X = n(654142),
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
function ea(e, t) {
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
                let a = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (a < 0) return !1;
                let s = r * a + l;
                t || (s += i);
                let c = o.getScrollerState();
                return (!t && !!(s >= c.scrollTop)) || (!!t && !!(s + r <= c.scrollTop + c.offsetHeight));
            }),
            (this.handleScroll = () => {
                this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                b.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = s().throttle(() => {
                let e = this.scrollerRef.current;
                null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            });
    }
}
function ep(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        s = (0, C.Q3)('GuildsBar'),
        [d] = (0, p.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        h = (0, p.e7)([P.Z], () => P.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : h), [h, n]),
        y = (0, p.Wu)([D.Z, A.ZP], () => k.default.keys(D.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        B = b.concat(y),
        el = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        ec = (0, p.e7)([D.Z], () => D.Z.getGeoRestrictedGuilds()),
        [ep, eh] = i.useState(!1),
        ef = i.useCallback(() => eh(!0), []),
        eg = i.useCallback(() => eh(!1), []),
        em = i.useRef(!1),
        [eb] = i.useState(() => new f.V7()),
        e_ = i.useRef(null),
        ey = i.useRef(null),
        ev = (0, u.OP)(),
        { ref: eO } = ev,
        ej = es(ev, ['ref']),
        eC = (0, m.mFp)(),
        [ex, eS] = i.useState(!1),
        [eP, eI] = i.useState(!1),
        eN = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        eZ = (0, m.dQu)(g.Z.space.SPACE_XS),
        eE = i.useMemo(
            () =>
                new ed(
                    d,
                    eS,
                    eI,
                    () => {
                        var e, t;
                        null == (e = e_.current) || e.calculateState(), null == (t = ey.current) || t.calculateState();
                    },
                    eu(eN, s, eZ)
                ),
            [eN, eZ, d, s]
        );
    i.useEffect(
        () => (
            eE.setResizeObserver(),
            () => {
                eE.clearResizeObserver();
            }
        ),
        [eE]
    );
    let { analyticsLocations: ew } = (0, O.ZP)(v.Z.GUILDS_LIST),
        { pathname: eT } = (0, c.TH)(),
        eA = eT.startsWith(en.Z5c.GUILD_DISCOVERY) || eT.startsWith(en.Z5c.GLOBAL_DISCOVERY),
        eD = eT.startsWith(en.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, _.Ng)(() => {
        if (!em.current && 0 !== d.size) {
            if (eA) eE.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
                eE.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (em.current = !0), () => eb.stop();
        }
    }),
        i.useEffect(() => {
            if ((eE.setGuildsTree(d), em.current || 0 === d.size)) return;
            let e = I.Z.getState().guildId;
            eE.scrollToGuild(e, !1);
            let t = null;
            return I.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eE.scrollToGuild(t, !1));
            });
        }, [d, eE]);
    let eR = i.useCallback(() => {
        eE.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eE]);
    (0, G.Z)(eE.scrollToGuild);
    let eL = i.useCallback(
            function e(t) {
                switch (t.type) {
                    case M.eD.FOLDER:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                folderNode: t,
                                setNodeRef: eE.setNodeRef,
                                draggable: !0,
                                sorting: ep,
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
                                setRef: eE.setNodeRef,
                                draggable: !0,
                                sorting: ep,
                                onDragStart: ef,
                                onDragEnd: eg
                            },
                            t.id
                        );
                    default:
                        return null;
                }
            },
            [ef, eg, ep, eE.setNodeRef]
        ),
        ek = d.getRoots(),
        eM = (0, x.Z)(),
        eG = (0, N.U)(),
        { enabled: eB } = (0, Z.W)({ location: 'GuildsBar' });
    (0, w.i)();
    let eU = i.useRef(null),
        eW = (0, E.qp)({
            isVirtualCurrencyEnabled: eB,
            discoveryButtonRef: eU,
            scrollToBottom: eE.scrollToBottom
        }),
        { shouldShow: eV, questId: eF } = eW,
        eH = es(eW, ['shouldShow', 'questId']),
        ez = eB && eV,
        eY = ec.map((e) =>
            (0, r.jsx)(
                H.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        ),
        eq = (0, r.jsx)(z.Z, {
            ref: eU,
            questId: ez ? eF : void 0,
            selected: eA,
            className: ei.discoveryIcon,
            onClick: ez ? eH.onClose : void 0
        }),
        eK = ez
            ? (0, r.jsx)(
                  E.fO,
                  ea(
                      eo(
                          {
                              targetElementRef: eU,
                              isGuildBarScrolling: ex
                          },
                          eH
                      ),
                      { children: eq }
                  )
              )
            : eq;
    return (0, r.jsx)(O.Gt, {
        value: ew,
        children: (0, r.jsx)(m.f6W, {
            theme: a,
            children: (e) =>
                (0, r.jsx)('nav', {
                    className: o()(ei.wrapper, l, e, { [ei.hidden]: el }),
                    'aria-label': er.NW.string(er.t.PjnF2t),
                    children: (0, r.jsxs)(
                        'ul',
                        ea(eo({ ref: eO }, ej, eC), {
                            role: 'tree',
                            className: ei.tree,
                            children: [
                                (0, r.jsx)(U.Z, {
                                    ref: e_,
                                    isVisible: eE.isItemVisible,
                                    onJumpTo: eE.handleJumpToGuild,
                                    className: ei.unreadMentionsIndicatorTop,
                                    barClassName: ei.unreadMentionsBar
                                }),
                                (0, r.jsxs)('div', {
                                    className: ei.itemsContainer,
                                    children: [
                                        (0, r.jsxs)(m.xVE, {
                                            className: o()({
                                                [ei.scroller]: !0,
                                                [ei.scrolling]: ex
                                            }),
                                            experimental_useStack: s,
                                            gap: 'xs',
                                            ref: eE.scrollerRef,
                                            onScroll: eE.handleScroll,
                                            children: [
                                                (0, r.jsx)(q.u, {}),
                                                eM ? (0, r.jsx)(S.Z, {}) : null,
                                                (0, r.jsx)(K.Z, { isOnHubVerificationRoute: eD }),
                                                (0, r.jsx)(W.Z, {}),
                                                eG,
                                                B.map((e) => (0, r.jsx)(et.Z, { guildId: e }, e)),
                                                (0, r.jsx)(ee.Z, { onActivate: eR }),
                                                (0, r.jsx)(Q.Z, {}),
                                                s
                                                    ? (0, r.jsx)(m.Kqy, {
                                                          gap: 'xs',
                                                          'aria-label': er.NW.string(er.t['7hB4kp']),
                                                          children: ek.map(eL)
                                                      })
                                                    : (0, r.jsx)('div', {
                                                          'aria-label': er.NW.string(er.t['7hB4kp']),
                                                          children: ek.map(eL)
                                                      }),
                                                eY,
                                                n
                                                    ? null
                                                    : (0, r.jsx)(F.Z, {
                                                          disableTooltip: b.length > 0,
                                                          lastTargetNode: ek[ek.length - 1]
                                                      }),
                                                (0, r.jsx)(J.Z, {}),
                                                !n && s ? eK : null,
                                                t ? null : (0, r.jsx)(V.Z, {})
                                            ]
                                        }),
                                        n || s
                                            ? null
                                            : (0, r.jsx)(Y.g, {
                                                  hideGradient: eP,
                                                  children: eK
                                              })
                                    ]
                                }),
                                (0, r.jsx)(U.Z, {
                                    reverse: !0,
                                    ref: ey,
                                    isVisible: eE.isItemVisible,
                                    onJumpTo: eE.handleJumpToGuild,
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
function eh(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        s = (0, C.Q3)('GuildsBar'),
        [d] = (0, p.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        h = (0, p.e7)([P.Z], () => P.Z.lurkingGuildIds()),
        b = i.useMemo(() => (n ? [] : h), [h, n]),
        y = (0, p.Wu)([D.Z, A.ZP], () => k.default.keys(D.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        B = b.concat(y),
        el = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        ec = (0, p.e7)([D.Z], () => D.Z.getGeoRestrictedGuilds()),
        [ep, eh] = i.useState(!1),
        ef = i.useCallback(() => eh(!0), []),
        eg = i.useCallback(() => eh(!1), []),
        em = i.useRef(!1),
        [eb] = i.useState(() => new f.V7()),
        e_ = i.useRef(null),
        ey = i.useRef(null),
        ev = (0, u.OP)(),
        { ref: eO } = ev,
        ej = es(ev, ['ref']),
        eC = (0, m.mFp)(),
        [ex, eS] = i.useState(!1),
        [eP, eI] = i.useState(!1),
        eN = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        eZ = (0, m.dQu)(g.Z.space.SPACE_XS),
        eE = i.useMemo(
            () =>
                new ed(
                    d,
                    eS,
                    eI,
                    () => {
                        var e, t;
                        null == (e = e_.current) || e.calculateState(), null == (t = ey.current) || t.calculateState();
                    },
                    eu(eN, s, eZ)
                ),
            [eN, eZ, d, s]
        );
    i.useEffect(
        () => (
            eE.setResizeObserver(),
            () => {
                eE.clearResizeObserver();
            }
        ),
        [eE]
    );
    let { analyticsLocations: ew } = (0, O.ZP)(v.Z.GUILDS_LIST),
        { pathname: eT } = (0, c.TH)(),
        eA = eT.startsWith(en.Z5c.GUILD_DISCOVERY) || eT.startsWith(en.Z5c.GLOBAL_DISCOVERY),
        eD = eT.startsWith(en.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, _.Ng)(() => {
        if (!em.current && 0 !== d.size) {
            if (eA) eE.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
                eE.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (em.current = !0), () => eb.stop();
        }
    }),
        i.useEffect(() => {
            if ((eE.setGuildsTree(d), em.current || 0 === d.size)) return;
            let e = I.Z.getState().guildId;
            eE.scrollToGuild(e, !1);
            let t = null;
            return I.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eE.scrollToGuild(t, !1));
            });
        }, [d, eE]);
    let eR = i.useCallback(() => {
        eE.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eE]);
    (0, G.Z)(eE.scrollToGuild);
    let eL = i.useCallback(
            function e(t) {
                switch (t.type) {
                    case M.eD.FOLDER:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                folderNode: t,
                                setNodeRef: eE.setNodeRef,
                                draggable: !0,
                                sorting: ep,
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
                                setRef: eE.setNodeRef,
                                draggable: !0,
                                sorting: ep,
                                onDragStart: ef,
                                onDragEnd: eg
                            },
                            t.id
                        );
                    default:
                        return null;
                }
            },
            [ef, eg, ep, eE.setNodeRef]
        ),
        ek = d.getRoots(),
        eM = (0, x.Z)(),
        eG = (0, N.U)(),
        { enabled: eB } = (0, Z.W)({ location: 'GuildsBar' });
    (0, w.i)();
    let eU = i.useRef(null),
        eW = (0, E.qp)({
            isVirtualCurrencyEnabled: eB,
            discoveryButtonRef: eU,
            scrollToBottom: eE.scrollToBottom
        }),
        { shouldShow: eV, questId: eF } = eW,
        eH = es(eW, ['shouldShow', 'questId']),
        ez = eB && eV,
        eY = ec.map((e) =>
            (0, r.jsx)(
                H.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        ),
        eq = (0, r.jsx)(z.Z, {
            ref: eU,
            questId: ez ? eF : void 0,
            selected: eA,
            className: ei.discoveryIcon,
            onClick: ez ? eH.onClose : void 0
        }),
        eK = ez
            ? (0, r.jsx)(
                  E.fO,
                  ea(
                      eo(
                          {
                              targetElementRef: eU,
                              isGuildBarScrolling: ex
                          },
                          eH
                      ),
                      { children: eq }
                  )
              )
            : eq;
    return (0, r.jsx)(O.Gt, {
        value: ew,
        children: (0, r.jsx)(m.f6W, {
            theme: a,
            children: (e) =>
                (0, r.jsx)('nav', {
                    className: o()(ei.wrapper, l, e, { [ei.hidden]: el }),
                    'aria-label': er.NW.string(er.t.PjnF2t),
                    children: (0, r.jsxs)(
                        'ul',
                        ea(eo({ ref: eO }, ej, eC), {
                            role: 'tree',
                            className: ei.tree,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: ei.itemsContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: ei.topSection,
                                            children: [(0, r.jsx)(q.u, {}), eM ? (0, r.jsx)(S.Z, {}) : null, (0, r.jsx)(K.Z, { isOnHubVerificationRoute: eD }), eG, B.map((e) => (0, r.jsx)(et.Z, { guildId: e }, e)), (0, r.jsx)(ee.Z, { onActivate: eR })]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: ei.bottomSection,
                                            children: [
                                                (0, r.jsx)(U.Z, {
                                                    ref: e_,
                                                    isVisible: eE.isItemVisible,
                                                    onJumpTo: eE.handleJumpToGuild,
                                                    className: ei.unreadMentionsIndicatorTop,
                                                    barClassName: ei.unreadMentionsBar
                                                }),
                                                (0, r.jsx)(Q.Z, { fullWidth: !0 }),
                                                (0, r.jsxs)(m.xVE, {
                                                    className: o()(ei.scroller, ei.scrollerBottomSection, { [ei.scrolling]: ex }),
                                                    experimental_useStack: s,
                                                    gap: 'xs',
                                                    ref: eE.scrollerRef,
                                                    onScroll: eE.handleScroll,
                                                    children: [
                                                        (0, r.jsx)(W.Z, {}),
                                                        s
                                                            ? (0, r.jsx)(m.Kqy, {
                                                                  gap: 'xs',
                                                                  'aria-label': er.NW.string(er.t['7hB4kp']),
                                                                  children: ek.map(eL)
                                                              })
                                                            : (0, r.jsx)('div', {
                                                                  'aria-label': er.NW.string(er.t['7hB4kp']),
                                                                  children: ek.map(eL)
                                                              }),
                                                        eY,
                                                        n
                                                            ? null
                                                            : (0, r.jsx)(F.Z, {
                                                                  disableTooltip: b.length > 0,
                                                                  lastTargetNode: ek[ek.length - 1]
                                                              }),
                                                        (0, r.jsx)(J.Z, {}),
                                                        !n && s ? eK : null,
                                                        t ? null : (0, r.jsx)(V.Z, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        n || s
                                            ? null
                                            : (0, r.jsx)(Y.g, {
                                                  hideGradient: eP,
                                                  children: eK
                                              })
                                    ]
                                }),
                                (0, r.jsx)(U.Z, {
                                    reverse: !0,
                                    ref: ey,
                                    isVisible: eE.isItemVisible,
                                    onJumpTo: eE.handleJumpToGuild,
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
            { pinnedSectionEnabled: n } = (0, B.U)('GuildsBar');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: n ? (0, r.jsx)(eh, eo({}, e)) : (0, r.jsx)(ep, eo({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, h.Z)(e, t)
);
