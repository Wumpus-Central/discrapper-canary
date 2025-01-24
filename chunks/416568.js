n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(392711),
    s = n.n(o),
    c = n(512969),
    u = n(91192),
    d = n(513431),
    h = n(442837),
    p = n(902704),
    m = n(846519),
    f = n(692547),
    g = n(481060),
    v = n(925549),
    C = n(493773),
    x = n(209613),
    I = n(100527),
    _ = n(906732),
    Z = n(358221),
    b = n(540059),
    S = n(706590),
    N = n(940777),
    E = n(41776),
    y = n(905423),
    j = n(802718),
    T = n(796974),
    P = n(271383),
    A = n(430824),
    w = n(771845),
    M = n(358085),
    L = n(709054),
    R = n(727258),
    D = n(605951),
    G = n(474109),
    k = n(741616),
    B = n(187835),
    U = n(118122),
    O = n(193154),
    V = n(602147),
    H = n(416637),
    F = n(222059),
    z = n(751277),
    W = n(65721),
    q = n(843343),
    Y = n(654142),
    Q = n(695301),
    K = n(836697),
    J = n(921230),
    X = n(981631),
    $ = n(388032),
    ee = n(192069);
function et(e, t, n) {
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
let en = (0, M.isWindows)() ? 4 : (0, M.isMac)() ? 0 : 12;
class ei {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
        et(this, 'guildsTree', void 0),
            et(this, 'setScrolling', void 0),
            et(this, 'setIsScrolledToBottom', void 0),
            et(this, 'onScroll', void 0),
            et(this, 'sizes', void 0),
            et(this, 'scrollerRef', void 0),
            et(this, 'nodeRefs', void 0),
            et(this, 'timeout', void 0),
            et(this, 'observer', void 0),
            et(this, 'setResizeObserver', void 0),
            et(this, 'clearResizeObserver', void 0),
            et(this, 'scrollToGuild', void 0),
            et(this, 'handleJumpToGuild', void 0),
            et(this, 'scrollTo', void 0),
            et(this, 'isItemVisible', void 0),
            et(this, 'handleScroll', void 0),
            et(this, '_handleScrollDebounced', void 0),
            et(this, '_handleScrollThrottled', void 0),
            et(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (this.scrollerRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new m.V7()),
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
                if (null == n || (null == e && window.location.pathname.startsWith(X.Z5c.GUILD_DISCOVERY)) || e === X.x8Z.SERVER_DISCOVERY_BADGE || e === X.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
                if (null == e) {
                    n.scrollTo({
                        to: 0,
                        animate: t
                    });
                    return;
                }
                let i = this.nodeRefs[e];
                for (; null == i; ) {
                    let t = this.guildsTree.getNode(e);
                    if ((null == t ? void 0 : t.parentId) == null) break;
                    i = this.nodeRefs[t.parentId];
                }
                null != i && (0, d.k)(i)
                    ? n.scrollIntoViewNode({
                          node: i,
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
            (this.isItemVisible = (e, t, n) => {
                let { iconTotalSize: i, badgeVisibleBuffer: l, heightBeforeIcons: r } = this.sizes,
                    a = this.scrollerRef.current;
                if (null == a) return !1;
                let o = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (o < 0) return !1;
                let s = i * o + r;
                !t && (s += l);
                let c = a.getScrollerState();
                return (!t && !!(s >= c.scrollTop)) || (!!t && !!(s + i <= c.scrollTop + c.offsetHeight)) || !1;
            }),
            (this.handleScroll = () => {
                this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                v.Z.updateGuildListScrollTo(t), this.onScroll();
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
function el(e) {
    let { disableAppDownload: t = M.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: o } = e,
        s = (0, b.Q3)('GuildsBar'),
        { density: d } = (0, g.useThemeContext)(),
        [p] = (0, h.Wu)([w.ZP], () => {
            let e = w.ZP.getGuildsTree();
            return [e, e.version];
        }),
        v = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
        x = l.useMemo(() => (n ? [] : v), [v, n]),
        et = (0, h.Wu)([A.Z, P.ZP], () => L.default.keys(A.Z.getGuilds()).filter((e) => P.ZP.isCurrentUserGuest(e))),
        el = x.concat(et),
        er = (0, h.e7)([Z.Z], () => Z.Z.isFullscreenInContext()),
        ea = (0, h.e7)([A.Z], () => A.Z.getGeoRestrictedGuilds()),
        [eo, es] = l.useState(!1),
        ec = l.useCallback(() => es(!0), []),
        eu = l.useCallback(() => es(!1), []),
        ed = l.useRef(!1),
        [eh] = l.useState(() => new m.V7()),
        ep = l.useRef(null),
        em = l.useRef(null),
        { ref: ef, ...eg } = (0, u.OP)(),
        ev = (0, g.useFocusJumpSection)(),
        [eC, ex] = l.useState(!1),
        [eI, e_] = l.useState(!1),
        eZ = (0, g.useToken)(f.Z.modules.guildbar.AVATAR_SIZE),
        eb = l.useMemo(
            () =>
                new ei(
                    p,
                    ex,
                    e_,
                    () => {
                        var e, t;
                        null === (e = ep.current) || void 0 === e || e.calculateState(), null === (t = em.current) || void 0 === t || t.calculateState();
                    },
                    (function (e, t, n) {
                        let i = 2 + (t ? 4 : 8);
                        return {
                            iconSize: e,
                            iconTotalSize: e,
                            badgeVisibleBuffer: e - 16,
                            separatorSize: i,
                            heightBeforeIcons: en + i
                        };
                    })(eZ, s, d)
                ),
            [eZ, d, p, s]
        );
    l.useEffect(
        () => (
            eb.setResizeObserver(),
            () => {
                eb.clearResizeObserver();
            }
        ),
        [eb]
    );
    let { analyticsLocations: eS } = (0, _.ZP)(I.Z.GUILDS_LIST),
        { pathname: eN } = (0, c.TH)(),
        eE = eN.startsWith(X.Z5c.GUILD_DISCOVERY) || eN.startsWith(X.Z5c.GLOBAL_DISCOVERY),
        ey = eN.startsWith(X.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, C.N)(() => {
        if (!ed.current) {
            if (0 !== p.size) {
                if (eE) eb.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = T.Z.getGuildListDimensions();
                    eb.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (ed.current = !0), () => eh.stop();
            }
        }
    }),
        l.useEffect(() => {
            if ((eb.setGuildsTree(p), ed.current || 0 === p.size)) return;
            let e = y.Z.getState().guildId;
            eb.scrollToGuild(e, !1);
            let t = null;
            return y.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eb.scrollToGuild(t, !1));
            });
        }, [p, eb]);
    let ej = l.useCallback(() => {
        eb.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eb]);
    function eT(e) {
        switch (e.type) {
            case R.eD.FOLDER:
                return (0, i.jsx)(
                    Y.Z,
                    {
                        folderNode: e,
                        setNodeRef: eb.setNodeRef,
                        draggable: !0,
                        sorting: eo,
                        onDragStart: ec,
                        onDragEnd: eu,
                        renderChildNode: eT
                    },
                    e.id
                );
            case R.eD.GUILD:
                return (0, i.jsx)(
                    Q.Z,
                    {
                        guildNode: e,
                        setRef: eb.setNodeRef,
                        draggable: !0,
                        sorting: eo,
                        onDragStart: ec,
                        onDragEnd: eu
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, D.Z)(eb.scrollToGuild);
    let eP = p.getRoots(),
        eA = (0, S.Z)(),
        ew = (0, j.U)(),
        eM = ea.map((e) =>
            (0, i.jsx)(
                O.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(_.Gt, {
        value: eS,
        children: (0, i.jsx)(g.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(ee.wrapper, r, e, { [ee.hidden]: er }),
                    'aria-label': $.intl.string($.t.PjnF2t),
                    children: (0, i.jsxs)('ul', {
                        ref: ef,
                        ...eg,
                        ...ev,
                        role: 'tree',
                        className: ee.tree,
                        children: [
                            (0, i.jsx)(G.Z, {
                                ref: ep,
                                isVisible: eb.isItemVisible,
                                onJumpTo: eb.handleJumpToGuild,
                                className: ee.unreadMentionsIndicatorTop,
                                barClassName: ee.unreadMentionsBar
                            }),
                            (0, i.jsxs)('div', {
                                className: ee.itemsContainer,
                                children: [
                                    (0, i.jsxs)(g.AdvancedScrollerNone, {
                                        className: a()({
                                            [ee.scroller]: !0,
                                            [ee.scrolling]: eC
                                        }),
                                        experimental_useStack: s,
                                        gap: 'xs',
                                        ref: eb.scrollerRef,
                                        onScroll: eb.handleScroll,
                                        children: [
                                            (0, i.jsx)(F.u, {}),
                                            eA ? (0, i.jsx)(N.Z, {}) : null,
                                            (0, i.jsx)(z.Z, { isOnHubVerificationRoute: ey }),
                                            (0, i.jsx)(k.Z, {}),
                                            ew,
                                            el.map((e) => (0, i.jsx)(J.Z, { guildId: e }, e)),
                                            (0, i.jsx)(K.Z, { onActivate: ej }),
                                            (0, i.jsx)(W.Z, {}),
                                            s
                                                ? (0, i.jsx)(g.Stack, {
                                                      gap: 'xs',
                                                      'aria-label': $.intl.string($.t['7hB4kp']),
                                                      children: eP.map(eT)
                                                  })
                                                : (0, i.jsx)('div', {
                                                      'aria-label': $.intl.string($.t['7hB4kp']),
                                                      children: eP.map(eT)
                                                  }),
                                            eM,
                                            n
                                                ? null
                                                : (0, i.jsx)(U.Z, {
                                                      disableTooltip: x.length > 0,
                                                      lastTargetNode: eP[eP.length - 1]
                                                  }),
                                            (0, i.jsx)(q.Z, {}),
                                            !n && s
                                                ? (0, i.jsx)(V.Z, {
                                                      selected: eE,
                                                      className: ee.discoveryIcon
                                                  })
                                                : null,
                                            t ? null : (0, i.jsx)(B.Z, {})
                                        ]
                                    }),
                                    n || s
                                        ? null
                                        : (0, i.jsx)(H.g, {
                                              hideGradient: eI,
                                              children: (0, i.jsx)(V.Z, {
                                                  selected: eE,
                                                  className: ee.discoveryIcon
                                              })
                                          })
                                ]
                            }),
                            (0, i.jsx)(G.Z, {
                                reverse: !0,
                                ref: em,
                                isVisible: eb.isItemVisible,
                                onJumpTo: eb.handleJumpToGuild,
                                className: a()(ee.unreadMentionsIndicatorBottom, { [ee.unreadMentionsFixedFooter]: !n }),
                                barClassName: ee.unreadMentionsBar
                            })
                        ]
                    })
                })
        })
    });
}
t.Z = l.memo(
    function (e) {
        let t = (0, x.Z)('guildsnav');
        return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(el, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
