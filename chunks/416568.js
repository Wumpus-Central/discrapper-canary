n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(392711),
    s = n.n(o),
    c = n(512969),
    u = n(91192),
    d = n(374470),
    h = n(442837),
    p = n(902704),
    f = n(846519),
    m = n(481060),
    g = n(925549),
    v = n(209613),
    C = n(100527),
    x = n(906732),
    I = n(358221),
    _ = n(540059),
    Z = n(706590),
    b = n(940777),
    S = n(41776),
    N = n(905423),
    E = n(802718),
    y = n(796974),
    j = n(271383),
    T = n(430824),
    P = n(771845),
    A = n(358085),
    w = n(709054),
    M = n(727258),
    L = n(605951),
    R = n(474109),
    D = n(741616),
    G = n(187835),
    B = n(118122),
    k = n(193154),
    U = n(602147),
    O = n(416637),
    V = n(222059),
    H = n(751277),
    F = n(65721),
    W = n(843343),
    z = n(654142),
    q = n(695301),
    Y = n(836697),
    Q = n(921230),
    J = n(981631),
    K = n(388032),
    X = n(192069);
function $(e, t, n) {
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
let ee = (0, A.isWindows)() ? 4 : (0, A.isMac)() ? 0 : 12;
class et {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
        $(this, 'guildsTree', void 0),
            $(this, 'setScrolling', void 0),
            $(this, 'setIsScrolledToBottom', void 0),
            $(this, 'onScroll', void 0),
            $(this, 'sizes', void 0),
            $(this, 'scrollerRef', void 0),
            $(this, 'nodeRefs', void 0),
            $(this, 'timeout', void 0),
            $(this, 'observer', void 0),
            $(this, 'setResizeObserver', void 0),
            $(this, 'clearResizeObserver', void 0),
            $(this, 'scrollToGuild', void 0),
            $(this, 'handleJumpToGuild', void 0),
            $(this, 'scrollTo', void 0),
            $(this, 'isItemVisible', void 0),
            $(this, 'handleScroll', void 0),
            $(this, '_handleScrollDebounced', void 0),
            $(this, '_handleScrollThrottled', void 0),
            $(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (this.scrollerRef = l.createRef()),
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
                if (null == n || (null == e && window.location.pathname.startsWith(J.Z5c.GUILD_DISCOVERY)) || e === J.x8Z.SERVER_DISCOVERY_BADGE || e === J.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
                g.Z.updateGuildListScrollTo(t), this.onScroll();
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
function en(e) {
    let { disableAppDownload: t = A.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: o } = e,
        s = (0, _.Q3)('GuildsBar'),
        { density: d } = (0, m.useThemeContext)(),
        [p] = (0, h.Wu)([P.ZP], () => {
            let e = P.ZP.getGuildsTree();
            return [e, e.version];
        }),
        g = (0, h.e7)([S.Z], () => S.Z.lurkingGuildIds()),
        v = l.useMemo(() => (n ? [] : g), [g, n]),
        $ = (0, h.Wu)([T.Z, j.ZP], () => w.default.keys(T.Z.getGuilds()).filter((e) => j.ZP.isCurrentUserGuest(e))),
        en = v.concat($),
        ei = (0, h.e7)([I.Z], () => I.Z.isFullscreenInContext()),
        el = (0, h.e7)([T.Z], () => T.Z.getGeoRestrictedGuilds()),
        [er, ea] = l.useState(!1),
        eo = l.useCallback(() => ea(!0), []),
        es = l.useCallback(() => ea(!1), []),
        ec = l.useRef(!1),
        [eu] = l.useState(() => new f.V7()),
        ed = l.useRef(null),
        eh = l.useRef(null),
        { ref: ep, ...ef } = (0, u.OP)(),
        em = (0, m.useFocusJumpSection)(),
        [eg, ev] = l.useState(!1),
        [eC, ex] = l.useState(!1),
        eI = l.useMemo(
            () =>
                new et(
                    p,
                    ev,
                    ex,
                    () => {
                        var e, t;
                        null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = eh.current) || void 0 === t || t.calculateState();
                    },
                    (function (e, t) {
                        let n = e ? 40 : 44,
                            i = e && 'cozy' === t ? 12 : 8,
                            l = n + i,
                            r = 2 + i;
                        return {
                            iconSize: n,
                            iconMargin: i,
                            iconTotalSize: l,
                            badgeVisibleBuffer: l - 16,
                            separatorSize: r,
                            heightBeforeIcons: ee + r
                        };
                    })(s, d)
                ),
            [d, p, s]
        );
    l.useEffect(
        () => (
            eI.setResizeObserver(),
            () => {
                eI.clearResizeObserver();
            }
        ),
        [eI]
    );
    let { analyticsLocations: e_ } = (0, x.ZP)(C.Z.GUILDS_LIST),
        { pathname: eZ } = (0, c.TH)(),
        eb = eZ.startsWith(J.Z5c.GUILD_DISCOVERY) || eZ.startsWith(J.Z5c.GLOBAL_DISCOVERY),
        eS = eZ.startsWith(J.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!ec.current) {
            if (0 !== p.size) {
                if (eb) eI.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = y.Z.getGuildListDimensions();
                    eI.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (ec.current = !0), () => eu.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((eI.setGuildsTree(p), ec.current || 0 === p.size)) return;
            let e = N.Z.getState().guildId;
            eI.scrollToGuild(e, !1);
            let t = null;
            return N.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eI.scrollToGuild(t, !1));
            });
        }, [p, eI]);
    let eN = l.useCallback(() => {
        eI.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eI]);
    function eE(e) {
        switch (e.type) {
            case M.eD.FOLDER:
                return (0, i.jsx)(
                    z.Z,
                    {
                        folderNode: e,
                        setNodeRef: eI.setNodeRef,
                        draggable: !0,
                        sorting: er,
                        onDragStart: eo,
                        onDragEnd: es,
                        renderChildNode: eE
                    },
                    e.id
                );
            case M.eD.GUILD:
                return (0, i.jsx)(
                    q.Z,
                    {
                        guildNode: e,
                        setRef: eI.setNodeRef,
                        draggable: !0,
                        sorting: er,
                        onDragStart: eo,
                        onDragEnd: es
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, L.Z)(eI.scrollToGuild);
    let ey = p.getRoots(),
        ej = (0, Z.Z)(),
        eT = (0, E.U)(),
        eP = el.map((e) =>
            (0, i.jsx)(
                k.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(x.Gt, {
        value: e_,
        children: (0, i.jsx)(m.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(X.wrapper, r, e, { [X.hidden]: ei }),
                    'aria-label': K.intl.string(K.t.PjnF2t),
                    children: (0, i.jsxs)('ul', {
                        ref: ep,
                        ...ef,
                        ...em,
                        role: 'tree',
                        className: X.tree,
                        children: [
                            (0, i.jsx)(R.Z, {
                                ref: ed,
                                isVisible: eI.isItemVisible,
                                onJumpTo: eI.handleJumpToGuild,
                                className: X.unreadMentionsIndicatorTop,
                                barClassName: X.unreadMentionsBar
                            }),
                            (0, i.jsxs)('div', {
                                className: X.itemsContainer,
                                children: [
                                    (0, i.jsxs)(m.AdvancedScrollerNone, {
                                        className: a()({
                                            [X.scroller]: !0,
                                            [X.scrolling]: eg
                                        }),
                                        experimental_useStack: s,
                                        gap: 'xs',
                                        ref: eI.scrollerRef,
                                        onScroll: eI.handleScroll,
                                        children: [
                                            (0, i.jsx)(V.u, {}),
                                            ej ? (0, i.jsx)(b.Z, {}) : null,
                                            (0, i.jsx)(H.Z, { isOnHubVerificationRoute: eS }),
                                            (0, i.jsx)(D.Z, {}),
                                            eT,
                                            en.map((e) => (0, i.jsx)(Q.Z, { guildId: e }, e)),
                                            (0, i.jsx)(Y.Z, { onActivate: eN }),
                                            (0, i.jsx)(F.Z, {}),
                                            s
                                                ? (0, i.jsx)(m.Stack, {
                                                      gap: 'xs',
                                                      'aria-label': K.intl.string(K.t['7hB4kp']),
                                                      children: ey.map(eE)
                                                  })
                                                : (0, i.jsx)('div', {
                                                      'aria-label': K.intl.string(K.t['7hB4kp']),
                                                      children: ey.map(eE)
                                                  }),
                                            eP,
                                            n
                                                ? null
                                                : (0, i.jsx)(B.Z, {
                                                      disableTooltip: v.length > 0,
                                                      lastTargetNode: ey[ey.length - 1]
                                                  }),
                                            (0, i.jsx)(W.Z, {}),
                                            t ? null : (0, i.jsx)(G.Z, {})
                                        ]
                                    }),
                                    n
                                        ? null
                                        : (0, i.jsx)(O.g, {
                                              hideGradient: eC,
                                              children: (0, i.jsx)(U.Z, {
                                                  selected: eb,
                                                  className: X.fixedDiscoveryIcon
                                              })
                                          })
                                ]
                            }),
                            (0, i.jsx)(R.Z, {
                                reverse: !0,
                                ref: eh,
                                isVisible: eI.isItemVisible,
                                onJumpTo: eI.handleJumpToGuild,
                                className: a()(X.unreadMentionsIndicatorBottom, { [X.unreadMentionsFixedFooter]: !n }),
                                barClassName: X.unreadMentionsBar
                            })
                        ]
                    })
                })
        })
    });
}
t.Z = l.memo(
    function (e) {
        let t = (0, v.Z)('guildsnav');
        return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(en, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
