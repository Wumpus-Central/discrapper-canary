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
    y = n(493773),
    _ = n(209613),
    v = n(100527),
    O = n(906732),
    j = n(358221),
    x = n(540059),
    C = n(706590),
    S = n(940777),
    P = n(41776),
    I = n(905423),
    N = n(802718),
    Z = n(822857),
    w = n(931928),
    E = n(431286),
    T = n(796974),
    A = n(271383),
    D = n(430824),
    R = n(771845),
    L = n(358085),
    k = n(709054),
    M = n(727258),
    G = n(605951),
    B = n(474109),
    U = n(741616),
    W = n(187835),
    V = n(118122),
    F = n(193154),
    H = n(602147),
    z = n(416637),
    Y = n(222059),
    q = n(751277),
    Q = n(65721),
    K = n(843343),
    J = n(654142),
    X = n(695301),
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
class es {
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
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        s = (0, x.Q3)('GuildsBar'),
        { density: d } = (0, m.TCT)(),
        [h] = (0, p.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        b = (0, p.e7)([P.Z], () => P.Z.lurkingGuildIds()),
        _ = i.useMemo(() => (n ? [] : b), [b, n]),
        ei = (0, p.Wu)([D.Z, A.ZP], () => k.default.keys(D.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        ec = _.concat(ei),
        eu = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        ed = (0, p.e7)([D.Z], () => D.Z.getGeoRestrictedGuilds()),
        [ep, eh] = i.useState(!1),
        ef = i.useCallback(() => eh(!0), []),
        eg = i.useCallback(() => eh(!1), []),
        em = i.useRef(!1),
        [eb] = i.useState(() => new f.V7()),
        ey = i.useRef(null),
        e_ = i.useRef(null),
        ev = (0, u.OP)(),
        { ref: eO } = ev,
        ej = eo(ev, ['ref']),
        ex = (0, m.mFp)(),
        [eC, eS] = i.useState(!1),
        [eP, eI] = i.useState(!1),
        eN = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        eZ = i.useMemo(
            () =>
                new es(
                    h,
                    eS,
                    eI,
                    () => {
                        var e, t;
                        null == (e = ey.current) || e.calculateState(), null == (t = e_.current) || t.calculateState();
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
    let { analyticsLocations: ew } = (0, O.ZP)(v.Z.GUILDS_LIST),
        { pathname: eE } = (0, c.TH)(),
        eT = eE.startsWith(et.Z5c.GUILD_DISCOVERY) || eE.startsWith(et.Z5c.GLOBAL_DISCOVERY),
        eA = eE.startsWith(et.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    (0, y.Ng)(() => {
        if (!em.current && 0 !== h.size) {
            if (eT) eZ.scrollToGuild(null, !1);
            else {
                let { scrollTop: e } = T.Z.getGuildListDimensions();
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
    (0, G.Z)(eZ.scrollToGuild);
    let eR = i.useCallback(
            function e(t) {
                switch (t.type) {
                    case M.eD.FOLDER:
                        return (0, r.jsx)(
                            J.Z,
                            {
                                folderNode: t,
                                setNodeRef: eZ.setNodeRef,
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
                            X.Z,
                            {
                                guildNode: t,
                                setRef: eZ.setNodeRef,
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
            [ef, eg, ep, eZ.setNodeRef]
        ),
        eL = h.getRoots(),
        ek = (0, C.Z)(),
        eM = (0, N.U)(),
        { enabled: eG } = (0, Z.W)({ location: 'GuildsBar' });
    (0, E.i)();
    let eB = i.useRef(null),
        eU = (0, w.qp)({
            isVirtualCurrencyEnabled: eG,
            discoveryButtonRef: eB,
            scrollToBottom: eZ.scrollToBottom
        }),
        { shouldShow: eW, questId: eV } = eU,
        eF = eo(eU, ['shouldShow', 'questId']),
        eH = eG && eW,
        ez = eH ? eV : void 0,
        eY = ed.map((e) =>
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
    return (0, r.jsxs)(O.Gt, {
        value: ew,
        children: [
            eH &&
                (0, r.jsx)(
                    w.fO,
                    el(
                        {
                            backgroundElementRef: eB,
                            renderTail: !0
                        },
                        eF
                    )
                ),
            (0, r.jsx)(m.f6W, {
                theme: a,
                children: (e) => {
                    var i, a;
                    return (0, r.jsx)('nav', {
                        className: o()(er.wrapper, l, e, { [er.hidden]: eu }),
                        'aria-label': en.NW.string(en.t.PjnF2t),
                        children: (0, r.jsxs)(
                            'ul',
                            ((i = el({ ref: eO }, ej, ex)),
                            (a = a =
                                {
                                    role: 'tree',
                                    className: er.tree,
                                    children: [
                                        (0, r.jsx)(B.Z, {
                                            ref: ey,
                                            isVisible: eZ.isItemVisible,
                                            onJumpTo: eZ.handleJumpToGuild,
                                            className: er.unreadMentionsIndicatorTop,
                                            barClassName: er.unreadMentionsBar
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: er.itemsContainer,
                                            children: [
                                                (0, r.jsxs)(m.xVE, {
                                                    className: o()({
                                                        [er.scroller]: !0,
                                                        [er.scrolling]: eC
                                                    }),
                                                    experimental_useStack: s,
                                                    gap: 'xs',
                                                    ref: eZ.scrollerRef,
                                                    onScroll: eZ.handleScroll,
                                                    children: [
                                                        (0, r.jsx)(Y.u, {}),
                                                        ek ? (0, r.jsx)(S.Z, {}) : null,
                                                        (0, r.jsx)(q.Z, { isOnHubVerificationRoute: eA }),
                                                        (0, r.jsx)(U.Z, {}),
                                                        eM,
                                                        ec.map((e) => (0, r.jsx)(ee.Z, { guildId: e }, e)),
                                                        (0, r.jsx)($.Z, { onActivate: eD }),
                                                        (0, r.jsx)(Q.Z, {}),
                                                        s
                                                            ? (0, r.jsx)(m.Kqy, {
                                                                  gap: 'xs',
                                                                  'aria-label': en.NW.string(en.t['7hB4kp']),
                                                                  children: eL.map(eR)
                                                              })
                                                            : (0, r.jsx)('div', {
                                                                  'aria-label': en.NW.string(en.t['7hB4kp']),
                                                                  children: eL.map(eR)
                                                              }),
                                                        eY,
                                                        n
                                                            ? null
                                                            : (0, r.jsx)(V.Z, {
                                                                  disableTooltip: _.length > 0,
                                                                  lastTargetNode: eL[eL.length - 1]
                                                              }),
                                                        (0, r.jsx)(K.Z, {}),
                                                        !n && s
                                                            ? (0, r.jsx)(H.Z, {
                                                                  ref: eB,
                                                                  questId: ez,
                                                                  selected: eT,
                                                                  className: er.discoveryIcon
                                                              })
                                                            : null,
                                                        t ? null : (0, r.jsx)(W.Z, {})
                                                    ]
                                                }),
                                                n || s
                                                    ? null
                                                    : (0, r.jsx)(z.g, {
                                                          hideGradient: eP,
                                                          children: (0, r.jsx)(H.Z, {
                                                              ref: eB,
                                                              questId: ez,
                                                              selected: eT,
                                                              className: er.discoveryIcon
                                                          })
                                                      })
                                            ]
                                        }),
                                        (0, r.jsx)(B.Z, {
                                            reverse: !0,
                                            ref: e_,
                                            isVisible: eZ.isItemVisible,
                                            onJumpTo: eZ.handleJumpToGuild,
                                            className: o()(er.unreadMentionsIndicatorBottom, { [er.unreadMentionsFixedFooter]: !n }),
                                            barClassName: er.unreadMentionsBar
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
        let t = (0, _.Z)('guildsnav');
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(ec, el({}, e))
        });
    },
    (e, t) => !1 === t.isVisible || (0, h.Z)(e, t)
);
