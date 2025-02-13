n.d(t, { Z: () => ec }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(392711),
    s = n.n(a),
    c = n(512969),
    d = n(91192),
    u = n(374470),
    h = n(442837),
    p = n(902704),
    m = n(846519),
    g = n(692547),
    f = n(481060),
    _ = n(925549),
    v = n(493773),
    C = n(209613),
    x = n(100527),
    I = n(906732),
    Z = n(358221),
    b = n(540059),
    S = n(706590),
    N = n(940777),
    E = n(41776),
    j = n(905423),
    y = n(802718),
    T = n(751648),
    A = n(822857),
    P = n(34222),
    R = n(431286),
    w = n(796974),
    L = n(271383),
    M = n(430824),
    D = n(771845),
    G = n(358085),
    k = n(709054),
    B = n(727258),
    O = n(605951),
    U = n(474109),
    V = n(741616),
    F = n(187835),
    H = n(118122),
    z = n(193154),
    W = n(602147),
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
    ei = n(388032),
    el = n(243374);
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
let eo = (0, G.isWindows)() ? 4 : (0, G.isMac)() ? 0 : 12;
class ea {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
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
            er(this, 'isItemVisible', void 0),
            er(this, 'handleScroll', void 0),
            er(this, '_handleScrollDebounced', void 0),
            er(this, '_handleScrollThrottled', void 0),
            er(this, 'setNodeRef', void 0),
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
                if (null == n || (null == e && window.location.pathname.startsWith(en.Z5c.GUILD_DISCOVERY)) || e === en.x8Z.SERVER_DISCOVERY_BADGE || e === en.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
                null != i && (0, u.k)(i)
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
                    o = this.scrollerRef.current;
                if (null == o) return !1;
                let a = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (a < 0) return !1;
                let s = i * a + r;
                t || (s += l);
                let c = o.getScrollerState();
                return (!t && !!(s >= c.scrollTop)) || (!!t && !!(s + i <= c.scrollTop + c.offsetHeight));
            }),
            (this.handleScroll = () => {
                this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                _.Z.updateGuildListScrollTo(t), this.onScroll();
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
function es(e) {
    let { disableAppDownload: t = G.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: a } = e,
        s = (0, b.Q3)('GuildsBar'),
        { density: u } = (0, f.TCT)(),
        [p] = (0, h.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
        C = l.useMemo(() => (n ? [] : _), [_, n]),
        er = (0, h.Wu)([M.Z, L.ZP], () => k.default.keys(M.Z.getGuilds()).filter((e) => L.ZP.isCurrentUserGuest(e))),
        es = C.concat(er),
        ec = (0, h.e7)([Z.Z], () => Z.Z.isFullscreenInContext()),
        ed = (0, h.e7)([M.Z], () => M.Z.getGeoRestrictedGuilds()),
        [eu, eh] = l.useState(!1),
        ep = l.useCallback(() => eh(!0), []),
        em = l.useCallback(() => eh(!1), []),
        eg = l.useRef(!1),
        [ef] = l.useState(() => new m.V7()),
        e_ = l.useRef(null),
        ev = l.useRef(null),
        { ref: eC, ...ex } = (0, d.OP)(),
        eI = (0, f.mFp)(),
        [eZ, eb] = l.useState(!1),
        [eS, eN] = l.useState(!1),
        eE = (0, f.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        ej = l.useMemo(
            () =>
                new ea(
                    p,
                    eb,
                    eN,
                    () => {
                        var e, t;
                        null === (e = e_.current) || void 0 === e || e.calculateState(), null === (t = ev.current) || void 0 === t || t.calculateState();
                    },
                    (function (e, t, n) {
                        let i = 2 + (t ? 4 : 8);
                        return {
                            iconSize: e,
                            iconTotalSize: e,
                            badgeVisibleBuffer: e - 16,
                            separatorSize: i,
                            heightBeforeIcons: eo + i
                        };
                    })(eE, s, 0)
                ),
            [eE, u, p, s]
        );
    l.useEffect(
        () => (
            ej.setResizeObserver(),
            () => {
                ej.clearResizeObserver();
            }
        ),
        [ej]
    );
    let { analyticsLocations: ey } = (0, I.ZP)(x.Z.GUILDS_LIST),
        { pathname: eT } = (0, c.TH)(),
        eA = eT.startsWith(en.Z5c.GUILD_DISCOVERY) || eT.startsWith(en.Z5c.GLOBAL_DISCOVERY),
        eP = eT.startsWith(en.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, v.Ng)(() => {
        if (!eg.current && 0 !== p.size) {
            if (eA) ej.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = w.Z.getGuildListDimensions();
                ej.scrollTo({
                    to: e,
                    animate: !1
                });
            }
            return (eg.current = !0), () => ef.stop();
        }
    }),
        l.useEffect(() => {
            if ((ej.setGuildsTree(p), eg.current || 0 === p.size)) return;
            let e = j.Z.getState().guildId;
            ej.scrollToGuild(e, !1);
            let t = null;
            return j.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ej.scrollToGuild(t, !1));
            });
        }, [p, ej]);
    let eR = l.useCallback(() => {
        ej.scrollTo({
            to: 0,
            animate: !1
        });
    }, [ej]);
    function ew(e) {
        switch (e.type) {
            case B.eD.FOLDER:
                return (0, i.jsx)(
                    X.Z,
                    {
                        folderNode: e,
                        setNodeRef: ej.setNodeRef,
                        draggable: !0,
                        sorting: eu,
                        onDragStart: ep,
                        onDragEnd: em,
                        renderChildNode: ew
                    },
                    e.id
                );
            case B.eD.GUILD:
                return (0, i.jsx)(
                    $.Z,
                    {
                        guildNode: e,
                        setRef: ej.setNodeRef,
                        draggable: !0,
                        sorting: eu,
                        onDragStart: ep,
                        onDragEnd: em
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, O.Z)(ej.scrollToGuild);
    let eL = p.getRoots(),
        eM = (0, S.Z)(),
        eD = (0, y.U)(),
        { enabled: eG } = (0, A.W)({ location: 'GuildsBar' });
    (0, R.i)();
    let ek = l.useRef(null),
        {
            shouldShowOnboardingCoachmark: eB,
            closeOnboardingCoachmarkIfOpen: eO,
            questId: eU
        } = (0, P.QM)({
            isVirtualCurrencyEnabled: eG,
            discoveryButtonRef: ek
        }),
        eV = ed.map((e) =>
            (0, i.jsx)(
                z.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        ),
        eF = eG && eB,
        eH = eF ? eU : void 0;
    return (0, i.jsxs)(I.Gt, {
        value: ey,
        children: [
            eF &&
                (0, i.jsx)(P.ds, {
                    backgroundElementRef: ek,
                    onClose: T.l,
                    renderTail: !0
                }),
            (0, i.jsx)(f.f6W, {
                theme: a,
                children: (e) =>
                    (0, i.jsx)('nav', {
                        className: o()(el.wrapper, r, e, { [el.hidden]: ec }),
                        'aria-label': ei.intl.string(ei.t.PjnF2t),
                        children: (0, i.jsxs)('ul', {
                            ref: eC,
                            ...ex,
                            ...eI,
                            role: 'tree',
                            className: el.tree,
                            children: [
                                (0, i.jsx)(U.Z, {
                                    ref: e_,
                                    isVisible: ej.isItemVisible,
                                    onJumpTo: ej.handleJumpToGuild,
                                    className: el.unreadMentionsIndicatorTop,
                                    barClassName: el.unreadMentionsBar
                                }),
                                (0, i.jsxs)('div', {
                                    className: el.itemsContainer,
                                    children: [
                                        (0, i.jsxs)(f.xVE, {
                                            className: o()({
                                                [el.scroller]: !0,
                                                [el.scrolling]: eZ
                                            }),
                                            experimental_useStack: s,
                                            gap: 'xs',
                                            ref: ej.scrollerRef,
                                            onScroll: ej.handleScroll,
                                            children: [
                                                (0, i.jsx)(Y.u, {}),
                                                eM ? (0, i.jsx)(N.Z, {}) : null,
                                                (0, i.jsx)(Q.Z, { isOnHubVerificationRoute: eP }),
                                                (0, i.jsx)(V.Z, {}),
                                                eD,
                                                es.map((e) => (0, i.jsx)(et.Z, { guildId: e }, e)),
                                                (0, i.jsx)(ee.Z, { onActivate: eR }),
                                                (0, i.jsx)(J.Z, {}),
                                                s
                                                    ? (0, i.jsx)(f.Kqy, {
                                                          gap: 'xs',
                                                          'aria-label': ei.intl.string(ei.t['7hB4kp']),
                                                          children: eL.map(ew)
                                                      })
                                                    : (0, i.jsx)('div', {
                                                          'aria-label': ei.intl.string(ei.t['7hB4kp']),
                                                          children: eL.map(ew)
                                                      }),
                                                eV,
                                                n
                                                    ? null
                                                    : (0, i.jsx)(H.Z, {
                                                          disableTooltip: C.length > 0,
                                                          lastTargetNode: eL[eL.length - 1]
                                                      }),
                                                (0, i.jsx)(K.Z, {}),
                                                !n && s
                                                    ? (0, i.jsx)(W.Z, {
                                                          ref: ek,
                                                          questId: eH,
                                                          onClick: eO,
                                                          selected: eA,
                                                          className: el.discoveryIcon
                                                      })
                                                    : null,
                                                t ? null : (0, i.jsx)(F.Z, {})
                                            ]
                                        }),
                                        n || s
                                            ? null
                                            : (0, i.jsx)(q.g, {
                                                  hideGradient: eS,
                                                  children: (0, i.jsx)(W.Z, {
                                                      ref: ek,
                                                      questId: eH,
                                                      onClick: eO,
                                                      selected: eA,
                                                      className: el.discoveryIcon
                                                  })
                                              })
                                    ]
                                }),
                                (0, i.jsx)(U.Z, {
                                    reverse: !0,
                                    ref: ev,
                                    isVisible: ej.isItemVisible,
                                    onJumpTo: ej.handleJumpToGuild,
                                    className: o()(el.unreadMentionsIndicatorBottom, { [el.unreadMentionsFixedFooter]: !n }),
                                    barClassName: el.unreadMentionsBar
                                })
                            ]
                        })
                    })
            })
        ]
    });
}
let ec = l.memo(
    function (e) {
        let t = (0, C.Z)('guildsnav');
        return (0, i.jsx)(d.bG, {
            navigator: t,
            children: (0, i.jsx)(es, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
