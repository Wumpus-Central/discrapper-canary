n.d(t, { Z: () => eu }), n(47120);
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
    v = n(493773),
    y = n(209613),
    _ = n(100527),
    O = n(906732),
    j = n(358221),
    C = n(540059),
    x = n(706590),
    P = n(940777),
    S = n(41776),
    I = n(905423),
    N = n(802718),
    Z = n(751648),
    w = n(822857),
    E = n(34222),
    T = n(431286),
    A = n(796974),
    D = n(271383),
    R = n(430824),
    L = n(771845),
    M = n(358085),
    k = n(709054),
    G = n(727258),
    B = n(605951),
    U = n(474109),
    W = n(741616),
    V = n(187835),
    F = n(118122),
    H = n(193154),
    z = n(602147),
    q = n(416637),
    Y = n(222059),
    Q = n(751277),
    J = n(65721),
    K = n(843343),
    X = n(654142),
    $ = n(695301),
    ee = n(836697),
    et = n(921230),
    en = n(981631),
    er = n(388032),
    ei = n(273801);
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
let ea = (0, M.isWindows)() ? 4 : 12 * !(0, M.isMac)();
class es {
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
                let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerNode();
                null != t && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(t));
            }),
            (this.clearResizeObserver = () => {
                var e;
                null === (e = this.observer) || void 0 === e || e.disconnect(), (this.observer = void 0);
            }),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n || (null == e && window.location.pathname.startsWith(en.Z5c.GUILD_DISCOVERY)) || e === en.x8Z.SERVER_DISCOVERY_BADGE || e === en.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
                if (null == e) {
                    n.scrollTo({
                        to: 0,
                        animate: t
                    });
                    return;
                }
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
                null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e);
            }),
            (this.scrollToBottom = () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollToBottom();
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
function ec(e) {
    let { disableAppDownload: t = M.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        s = (0, C.Q3)('GuildsBar'),
        { density: d } = (0, m.TCT)(),
        [h] = (0, p.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
        }),
        b = (0, p.e7)([S.Z], () => S.Z.lurkingGuildIds()),
        y = i.useMemo(() => (n ? [] : b), [b, n]),
        el = (0, p.Wu)([R.Z, D.ZP], () => k.default.keys(R.Z.getGuilds()).filter((e) => D.ZP.isCurrentUserGuest(e))),
        ec = y.concat(el),
        eu = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        ed = (0, p.e7)([R.Z], () => R.Z.getGeoRestrictedGuilds()),
        [ep, eh] = i.useState(!1),
        ef = i.useCallback(() => eh(!0), []),
        eg = i.useCallback(() => eh(!1), []),
        em = i.useRef(!1),
        [eb] = i.useState(() => new f.V7()),
        ev = i.useRef(null),
        ey = i.useRef(null),
        e_ = (0, u.OP)(),
        { ref: eO } = e_,
        ej = (function (e, t) {
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
        })(e_, ['ref']),
        eC = (0, m.mFp)(),
        [ex, eP] = i.useState(!1),
        [eS, eI] = i.useState(!1),
        eN = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        eZ = i.useMemo(
            () =>
                new es(
                    h,
                    eP,
                    eI,
                    () => {
                        var e, t;
                        null === (e = ev.current) || void 0 === e || e.calculateState(), null === (t = ey.current) || void 0 === t || t.calculateState();
                    },
                    (function (e, t, n) {
                        let r = 2 + (t ? 4 : 8);
                        return {
                            iconSize: e,
                            iconTotalSize: e,
                            badgeVisibleBuffer: e - 16,
                            separatorSize: r,
                            heightBeforeIcons: ea + r
                        };
                    })(eN, s, 0)
                ),
            [eN, d, h, s]
        );
    i.useEffect(
        () => (
            eZ.setResizeObserver(),
            () => {
                eZ.clearResizeObserver();
            }
        ),
        [eZ]
    );
    let { analyticsLocations: ew } = (0, O.ZP)(_.Z.GUILDS_LIST),
        { pathname: eE } = (0, c.TH)(),
        eT = eE.startsWith(en.Z5c.GUILD_DISCOVERY) || eE.startsWith(en.Z5c.GLOBAL_DISCOVERY),
        eA = eE.startsWith(en.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, v.Ng)(() => {
        if (!em.current && 0 !== h.size) {
            if (eT) eZ.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = A.Z.getGuildListDimensions();
                eZ.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (em.current = !0), () => eb.stop();
        }
    }),
        i.useEffect(() => {
            if ((eZ.setGuildsTree(h), em.current || 0 === h.size)) return;
            let e = I.Z.getState().guildId;
            eZ.scrollToGuild(e, !1);
            let t = null;
            return I.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eZ.scrollToGuild(t, !1));
            });
        }, [h, eZ]);
    let eD = i.useCallback(() => {
        eZ.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eZ]);
    function eR(e) {
        switch (e.type) {
            case G.eD.FOLDER:
                return (0, r.jsx)(
                    X.Z,
                    {
                        folderNode: e,
                        setNodeRef: eZ.setNodeRef,
                        draggable: !0,
                        sorting: ep,
                        onDragStart: ef,
                        onDragEnd: eg,
                        renderChildNode: eR
                    },
                    e.id
                );
            case G.eD.GUILD:
                return (0, r.jsx)(
                    $.Z,
                    {
                        guildNode: e,
                        setRef: eZ.setNodeRef,
                        draggable: !0,
                        sorting: ep,
                        onDragStart: ef,
                        onDragEnd: eg
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, B.Z)(eZ.scrollToGuild);
    let eL = h.getRoots(),
        eM = (0, x.Z)(),
        ek = (0, N.U)(),
        { enabled: eG } = (0, w.W)({ location: 'GuildsBar' });
    (0, T.i)();
    let eB = i.useRef(null),
        {
            shouldShowOnboardingCoachmark: eU,
            closeOnboardingCoachmarkIfOpen: eW,
            questId: eV
        } = (0, E.QM)({
            isVirtualCurrencyEnabled: eG,
            discoveryButtonRef: eB,
            scrollToBottom: eZ.scrollToBottom
        }),
        eF = ed.map((e) =>
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
        eH = eG && eU,
        ez = eH ? eV : void 0;
    return (0, r.jsxs)(O.Gt, {
        value: ew,
        children: [
            eH &&
                (0, r.jsx)(E.ds, {
                    backgroundElementRef: eB,
                    onClose: Z.l,
                    renderTail: !0
                }),
            (0, r.jsx)(m.f6W, {
                theme: a,
                children: (e) => {
                    var i, a;
                    return (0, r.jsx)('nav', {
                        className: o()(ei.wrapper, l, e, { [ei.hidden]: eu }),
                        'aria-label': er.NW.string(er.t.PjnF2t),
                        children: (0, r.jsxs)(
                            'ul',
                            ((i = eo({ ref: eO }, ej, eC)),
                            (a = a =
                                {
                                    role: 'tree',
                                    className: ei.tree,
                                    children: [
                                        (0, r.jsx)(U.Z, {
                                            ref: ev,
                                            isVisible: eZ.isItemVisible,
                                            onJumpTo: eZ.handleJumpToGuild,
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
                                                    ref: eZ.scrollerRef,
                                                    onScroll: eZ.handleScroll,
                                                    children: [
                                                        (0, r.jsx)(Y.u, {}),
                                                        eM ? (0, r.jsx)(P.Z, {}) : null,
                                                        (0, r.jsx)(Q.Z, { isOnHubVerificationRoute: eA }),
                                                        (0, r.jsx)(W.Z, {}),
                                                        ek,
                                                        ec.map((e) => (0, r.jsx)(et.Z, { guildId: e }, e)),
                                                        (0, r.jsx)(ee.Z, { onActivate: eD }),
                                                        (0, r.jsx)(J.Z, {}),
                                                        s
                                                            ? (0, r.jsx)(m.Kqy, {
                                                                  gap: 'xs',
                                                                  'aria-label': er.NW.string(er.t['7hB4kp']),
                                                                  children: eL.map(eR)
                                                              })
                                                            : (0, r.jsx)('div', {
                                                                  'aria-label': er.NW.string(er.t['7hB4kp']),
                                                                  children: eL.map(eR)
                                                              }),
                                                        eF,
                                                        n
                                                            ? null
                                                            : (0, r.jsx)(F.Z, {
                                                                  disableTooltip: y.length > 0,
                                                                  lastTargetNode: eL[eL.length - 1]
                                                              }),
                                                        (0, r.jsx)(K.Z, {}),
                                                        !n && s
                                                            ? (0, r.jsx)(z.Z, {
                                                                  ref: eB,
                                                                  questId: ez,
                                                                  onClick: eW,
                                                                  selected: eT,
                                                                  className: ei.discoveryIcon
                                                              })
                                                            : null,
                                                        t ? null : (0, r.jsx)(V.Z, {})
                                                    ]
                                                }),
                                                n || s
                                                    ? null
                                                    : (0, r.jsx)(q.g, {
                                                          hideGradient: eS,
                                                          children: (0, r.jsx)(z.Z, {
                                                              ref: eB,
                                                              questId: ez,
                                                              onClick: eW,
                                                              selected: eT,
                                                              className: ei.discoveryIcon
                                                          })
                                                      })
                                            ]
                                        }),
                                        (0, r.jsx)(U.Z, {
                                            reverse: !0,
                                            ref: ey,
                                            isVisible: eZ.isItemVisible,
                                            onJumpTo: eZ.handleJumpToGuild,
                                            className: o()(ei.unreadMentionsIndicatorBottom, { [ei.unreadMentionsFixedFooter]: !n }),
                                            barClassName: ei.unreadMentionsBar
                                        })
                                    ]
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
                        )
                    });
                }
            })
        ]
    });
}
let eu = i.memo(
    function (e) {
        let t = (0, y.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(ec, eo({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, h.Z)(e, t)
);
