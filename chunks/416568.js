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
    v = n(493773),
    C = n(209613),
    x = n(100527),
    I = n(906732),
    _ = n(358221),
    Z = n(540059),
    b = n(706590),
    S = n(940777),
    N = n(41776),
    E = n(905423),
    y = n(802718),
    j = n(796974),
    T = n(271383),
    P = n(430824),
    A = n(771845),
    w = n(358085),
    M = n(709054),
    L = n(727258),
    R = n(605951),
    D = n(474109),
    G = n(741616),
    B = n(187835),
    k = n(118122),
    U = n(193154),
    O = n(602147),
    V = n(416637),
    H = n(222059),
    F = n(751277),
    W = n(65721),
    z = n(843343),
    q = n(654142),
    Y = n(695301),
    Q = n(836697),
    J = n(921230),
    K = n(981631),
    X = n(388032),
    $ = n(192069);
function ee(e, t, n) {
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
let et = (0, w.isWindows)() ? 4 : (0, w.isMac)() ? 0 : 12;
class en {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
        ee(this, 'guildsTree', void 0),
            ee(this, 'setScrolling', void 0),
            ee(this, 'setIsScrolledToBottom', void 0),
            ee(this, 'onScroll', void 0),
            ee(this, 'sizes', void 0),
            ee(this, 'scrollerRef', void 0),
            ee(this, 'nodeRefs', void 0),
            ee(this, 'timeout', void 0),
            ee(this, 'observer', void 0),
            ee(this, 'setResizeObserver', void 0),
            ee(this, 'clearResizeObserver', void 0),
            ee(this, 'scrollToGuild', void 0),
            ee(this, 'handleJumpToGuild', void 0),
            ee(this, 'scrollTo', void 0),
            ee(this, 'isItemVisible', void 0),
            ee(this, 'handleScroll', void 0),
            ee(this, '_handleScrollDebounced', void 0),
            ee(this, '_handleScrollThrottled', void 0),
            ee(this, 'setNodeRef', void 0),
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
                if (null == n || (null == e && window.location.pathname.startsWith(K.Z5c.GUILD_DISCOVERY)) || e === K.x8Z.SERVER_DISCOVERY_BADGE || e === K.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
function ei(e) {
    let { disableAppDownload: t = w.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: o } = e,
        s = (0, Z.Q3)('GuildsBar'),
        { density: d } = (0, m.useThemeContext)(),
        [p] = (0, h.Wu)([A.ZP], () => {
            let e = A.ZP.getGuildsTree();
            return [e, e.version];
        }),
        g = (0, h.e7)([N.Z], () => N.Z.lurkingGuildIds()),
        C = l.useMemo(() => (n ? [] : g), [g, n]),
        ee = (0, h.Wu)([P.Z, T.ZP], () => M.default.keys(P.Z.getGuilds()).filter((e) => T.ZP.isCurrentUserGuest(e))),
        ei = C.concat(ee),
        el = (0, h.e7)([_.Z], () => _.Z.isFullscreenInContext()),
        er = (0, h.e7)([P.Z], () => P.Z.getGeoRestrictedGuilds()),
        [ea, eo] = l.useState(!1),
        es = l.useCallback(() => eo(!0), []),
        ec = l.useCallback(() => eo(!1), []),
        eu = l.useRef(!1),
        [ed] = l.useState(() => new f.V7()),
        eh = l.useRef(null),
        ep = l.useRef(null),
        { ref: ef, ...em } = (0, u.OP)(),
        eg = (0, m.useFocusJumpSection)(),
        [ev, eC] = l.useState(!1),
        [ex, eI] = l.useState(!1),
        e_ = l.useMemo(
            () =>
                new en(
                    p,
                    eC,
                    eI,
                    () => {
                        var e, t;
                        null === (e = eh.current) || void 0 === e || e.calculateState(), null === (t = ep.current) || void 0 === t || t.calculateState();
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
                            heightBeforeIcons: et + r
                        };
                    })(s, d)
                ),
            [d, p, s]
        );
    l.useEffect(
        () => (
            e_.setResizeObserver(),
            () => {
                e_.clearResizeObserver();
            }
        ),
        [e_]
    );
    let { analyticsLocations: eZ } = (0, I.ZP)(x.Z.GUILDS_LIST),
        { pathname: eb } = (0, c.TH)(),
        eS = eb.startsWith(K.Z5c.GUILD_DISCOVERY) || eb.startsWith(K.Z5c.GLOBAL_DISCOVERY),
        eN = eb.startsWith(K.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, v.N)(() => {
        if (!eu.current) {
            if (0 !== p.size) {
                if (eS) e_.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = j.Z.getGuildListDimensions();
                    e_.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (eu.current = !0), () => ed.stop();
            }
        }
    }),
        l.useEffect(() => {
            if ((e_.setGuildsTree(p), eu.current || 0 === p.size)) return;
            let e = E.Z.getState().guildId;
            e_.scrollToGuild(e, !1);
            let t = null;
            return E.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), e_.scrollToGuild(t, !1));
            });
        }, [p, e_]);
    let eE = l.useCallback(() => {
        e_.scrollTo({
            to: 0,
            animate: !1
        });
    }, [e_]);
    function ey(e) {
        switch (e.type) {
            case L.eD.FOLDER:
                return (0, i.jsx)(
                    q.Z,
                    {
                        folderNode: e,
                        setNodeRef: e_.setNodeRef,
                        draggable: !0,
                        sorting: ea,
                        onDragStart: es,
                        onDragEnd: ec,
                        renderChildNode: ey
                    },
                    e.id
                );
            case L.eD.GUILD:
                return (0, i.jsx)(
                    Y.Z,
                    {
                        guildNode: e,
                        setRef: e_.setNodeRef,
                        draggable: !0,
                        sorting: ea,
                        onDragStart: es,
                        onDragEnd: ec
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, R.Z)(e_.scrollToGuild);
    let ej = p.getRoots(),
        eT = (0, b.Z)(),
        eP = (0, y.U)(),
        eA = er.map((e) =>
            (0, i.jsx)(
                U.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(I.Gt, {
        value: eZ,
        children: (0, i.jsx)(m.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()($.wrapper, r, e, { [$.hidden]: el }),
                    'aria-label': X.intl.string(X.t.PjnF2t),
                    children: (0, i.jsxs)('ul', {
                        ref: ef,
                        ...em,
                        ...eg,
                        role: 'tree',
                        className: $.tree,
                        children: [
                            (0, i.jsx)(D.Z, {
                                ref: eh,
                                isVisible: e_.isItemVisible,
                                onJumpTo: e_.handleJumpToGuild,
                                className: $.unreadMentionsIndicatorTop,
                                barClassName: $.unreadMentionsBar
                            }),
                            (0, i.jsxs)('div', {
                                className: $.itemsContainer,
                                children: [
                                    (0, i.jsxs)(m.AdvancedScrollerNone, {
                                        className: a()({
                                            [$.scroller]: !0,
                                            [$.scrolling]: ev
                                        }),
                                        experimental_useStack: s,
                                        gap: 'xs',
                                        ref: e_.scrollerRef,
                                        onScroll: e_.handleScroll,
                                        children: [
                                            (0, i.jsx)(H.u, {}),
                                            eT ? (0, i.jsx)(S.Z, {}) : null,
                                            (0, i.jsx)(F.Z, { isOnHubVerificationRoute: eN }),
                                            (0, i.jsx)(G.Z, {}),
                                            eP,
                                            ei.map((e) => (0, i.jsx)(J.Z, { guildId: e }, e)),
                                            (0, i.jsx)(Q.Z, { onActivate: eE }),
                                            (0, i.jsx)(W.Z, {}),
                                            s
                                                ? (0, i.jsx)(m.Stack, {
                                                      gap: 'xs',
                                                      'aria-label': X.intl.string(X.t['7hB4kp']),
                                                      children: ej.map(ey)
                                                  })
                                                : (0, i.jsx)('div', {
                                                      'aria-label': X.intl.string(X.t['7hB4kp']),
                                                      children: ej.map(ey)
                                                  }),
                                            eA,
                                            n
                                                ? null
                                                : (0, i.jsx)(k.Z, {
                                                      disableTooltip: C.length > 0,
                                                      lastTargetNode: ej[ej.length - 1]
                                                  }),
                                            (0, i.jsx)(z.Z, {}),
                                            t ? null : (0, i.jsx)(B.Z, {})
                                        ]
                                    }),
                                    n
                                        ? null
                                        : (0, i.jsx)(V.g, {
                                              hideGradient: ex,
                                              children: (0, i.jsx)(O.Z, {
                                                  selected: eS,
                                                  className: $.fixedDiscoveryIcon
                                              })
                                          })
                                ]
                            }),
                            (0, i.jsx)(D.Z, {
                                reverse: !0,
                                ref: ep,
                                isVisible: e_.isItemVisible,
                                onJumpTo: e_.handleJumpToGuild,
                                className: a()($.unreadMentionsIndicatorBottom, { [$.unreadMentionsFixedFooter]: !n }),
                                barClassName: $.unreadMentionsBar
                            })
                        ]
                    })
                })
        })
    });
}
t.Z = l.memo(
    function (e) {
        let t = (0, C.Z)('guildsnav');
        return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(ei, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
