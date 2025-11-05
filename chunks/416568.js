n.d(t, { Z: () => ed }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(843611),
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
    O = n(100527),
    v = n(906732),
    j = n(358221),
    C = n(706590),
    x = n(940777),
    E = n(113544),
    S = n(41776),
    I = n(821020),
    P = n(770858),
    N = n(365113),
    Z = n(905423),
    w = n(796974),
    T = n(478738),
    A = n(271383),
    R = n(430824),
    D = n(771845),
    L = n(358085),
    M = n(316243),
    k = n(727258),
    G = n(605951),
    U = n(474109),
    B = n(741616),
    F = n(187835),
    V = n(118122),
    H = n(780367),
    z = n(193154),
    W = n(602147),
    K = n(222059),
    Y = n(65721),
    q = n(843343),
    X = n(654142),
    Q = n(695301),
    J = n(836697),
    $ = n(921230),
    ee = n(981631),
    et = n(388032),
    en = n(933774);
function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}
let el = (0, L.isWindows)() ? 4 : 12 * !(0, L.isMac)();
function eo(e) {
    return e.startsWith(ee.Z5c.GUILD_DISCOVERY) || e.startsWith(ee.Z5c.GLOBAL_DISCOVERY);
}
class ea {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, l) {
        er(this, "guildsTree", void 0),
            er(this, "setScrolling", void 0),
            er(this, "setIsScrolledToBottom", void 0),
            er(this, "onScroll", void 0),
            er(this, "sizes", void 0),
            er(this, "scrollerRef", void 0),
            er(this, "nodeRefs", void 0),
            er(this, "timeout", void 0),
            er(this, "observer", void 0),
            er(this, "setResizeObserver", void 0),
            er(this, "clearResizeObserver", void 0),
            er(this, "scrollToGuild", void 0),
            er(this, "handleJumpToGuild", void 0),
            er(this, "scrollTo", void 0),
            er(this, "scrollToBottom", void 0),
            er(this, "isItemVisible", void 0),
            er(this, "getVisibleGuildIds", void 0),
            er(this, "handleScroll", void 0),
            er(this, "_handleScrollDebounced", void 0),
            er(this, "_handleScrollThrottled", void 0),
            er(this, "setNodeRef", void 0),
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
                if (
                    null == n ||
                    (null == e && eo(window.location.pathname)) ||
                    e === ee.x8Z.SERVER_DISCOVERY_BADGE ||
                    e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE
                )
                    return;
                if (null == e)
                    return void n.scrollTo({
                        to: 0,
                        animate: t,
                    });
                let r = this.nodeRefs[e];
                for (; null == r; ) {
                    let t = this.guildsTree.getNode(e);
                    if ((null == t ? void 0 : t.parentId) == null) break;
                    r = this.nodeRefs[t.parentId];
                }
                null != r && (0, d.kK)(r)
                    ? n.scrollIntoViewNode({
                          node: r,
                          animate: t,
                          padding: 24,
                      })
                    : n.scrollTo({
                          to: 0,
                          animate: t,
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
                let { iconTotalSize: r, badgeVisibleBuffer: i, heightBeforeGuilds: l, bottomInset: o } = this.sizes,
                    a = this.scrollerRef.current;
                if (null == a) return !1;
                let s = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
                if (s < 0) return !1;
                let c = r * s + l,
                    u = a.getScrollerState();
                return (!t && !!(c >= u.scrollTop)) || (!!t && !!(c + r + i <= u.scrollTop + u.offsetHeight - o));
            }),
            (this.getVisibleGuildIds = () => {
                var e;
                let t = this.scrollerRef.current;
                if (null == t) return [];
                let n = t.getScrollerState().offsetHeight,
                    r = null == (e = t.getScrollerNode()) ? void 0 : e.getBoundingClientRect().top;
                return void 0 === r
                    ? []
                    : this.guildsTree
                          .sortedGuildNodes()
                          .filter((e) => {
                              var t;
                              let i = null != (t = e.parentId) ? t : e.id,
                                  l = this.nodeRefs[i];
                              if (null == l) return !1;
                              let o = l.getBoundingClientRect(),
                                  a = o.top - r;
                              return a + o.height > 0 && a < n;
                          })
                          .map((e) => {
                              let { id: t } = e;
                              return t;
                          });
            }),
            (this.handleScroll = () => {
                this.setScrolling(!0),
                    this.timeout.start(200, () => this.setScrolling(!1)),
                    this._handleScrollDebounced(),
                    this._handleScrollThrottled();
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
            }),
            (0, E.zb)(this.getVisibleGuildIds);
    }
}
function es(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, C.Z)(),
        o = (0, p.Wu)([R.Z, A.ZP], () => R.Z.getGuildIds().filter((e) => A.ZP.isCurrentUserGuest(e))),
        a = i.concat(o),
        { entrypoint: s } = (0, I.pN)({ location: "GuildsBar" }),
        c = N.o.useConfig({ location: "guildsbar" }).dmsTab;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K.u, {}),
            c && (0, r.jsx)(H.Z, {}),
            s === I.u3.SERVER_RAIL_TOP && (0, r.jsx)(P.Z, {}),
            l ? (0, r.jsx)(x.Z, {}) : null,
            !t && (0, r.jsx)(B.Z, {}),
            a.map((e) => (0, r.jsx)($.Z, { guildId: e }, e)),
            (0, r.jsx)(J.Z, { onActivate: n }),
        ],
    });
}
function ec(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: o } = e,
        [a] = (0, p.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        s = a.getRoots(),
        c = (0, p.Wu)([T.Z], () => T.Z.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                z.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon,
                },
                e.id,
            ),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Kqy, {
                role: "group",
                "aria-label": et.intl.string(et.t["7hB4kg"]),
                gap: "xs",
                children: s.map((e, t) => l(e, t, s.length)),
            }),
            c,
            (0, r.jsx)(q.Z, {}),
            i
                ? null
                : (0, r.jsx)(V.Z, {
                      disableTooltip: o.length > 0,
                      lastTargetNode: s[s.length - 1],
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(F.Z, {}),
        ],
    });
}
function eu(e) {
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [s] = (0, p.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, p.e7)([S.Z], () => S.Z.lurkingGuildIds()),
        h = i.useMemo(() => (n ? [] : d), [d, n]),
        b = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        { isSorting: y, startSorting: x, stopSorting: E } = (0, M.Z)(),
        N = i.useRef(!1),
        [T] = i.useState(() => new f.V7()),
        A = i.useRef(null),
        R = i.useRef(null),
        B = (0, u.OP)(),
        { ref: F } = B,
        V = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(B, ["ref"]),
        H = (0, m.mFp)(),
        [z, K] = i.useState(!1),
        q = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        J = (0, m.dQu)(g.Z.space.SPACE_XS),
        $ = (0, C.Z)(),
        { pathname: er } = (0, c.TH)(),
        { entrypoint: eu } = (0, I.pN)({ location: "GuildsBar" }),
        ed = +!!$ + +(eu === I.u3.SERVER_RAIL_TOP),
        ep = i.useMemo(() => {
            let e = (function (e, t, n) {
                let r = e + t,
                    i = 2 + t;
                return {
                    iconSize: e,
                    iconTotalSize: r,
                    badgeVisibleBuffer: r - 16,
                    separatorSize: i,
                    heightBeforeGuilds: el + i + n * r,
                    bottomInset: 16,
                };
            })(q, J, ed);
            return new ea(
                s,
                K,
                ee.dG4,
                () => {
                    var e, t;
                    null == (e = A.current) || e.calculateState(), null == (t = R.current) || t.calculateState();
                },
                e,
            );
        }, [q, J, s, ed]);
    i.useEffect(
        () => (
            ep.setResizeObserver(),
            () => {
                ep.clearResizeObserver();
            }
        ),
        [ep],
    );
    let { analyticsLocations: eh } = (0, v.ZP)(O.Z.GUILDS_LIST),
        ef = eo(er);
    (0, _.Ng)(() => {
        if (!N.current && 0 !== s.size) {
            if (!ef) {
                let { scrollTop: e } = w.Z.getGuildListDimensions();
                ep.scrollTo({
                    to: e,
                    animate: !1,
                });
            }
            return (N.current = !0), () => T.stop();
        }
    }),
        i.useEffect(() => {
            if ((ep.setGuildsTree(s), N.current || 0 === s.size)) return;
            let e = Z.Z.getState().guildId;
            ep.scrollToGuild(e, !1);
            let t = null;
            return Z.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ep.scrollToGuild(t, !1));
            });
        }, [s, ep]);
    let eg = i.useCallback(() => {
        ep.scrollTo({
            to: 0,
            animate: !1,
        });
    }, [ep]);
    (0, G.Z)(ep.scrollToGuild);
    let em = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case k.eD.FOLDER:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                folderNode: t,
                                setNodeRef: ep.setNodeRef,
                                draggable: !0,
                                sorting: y,
                                onDragStart: x,
                                onDragEnd: E,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case k.eD.GUILD:
                        return (0, r.jsx)(
                            Q.Z,
                            {
                                guildNode: t,
                                setRef: ep.setNodeRef,
                                draggable: !0,
                                sorting: y,
                                onDragStart: x,
                                onDragEnd: E,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [x, E, y, ep.setNodeRef],
        ),
        eb = (0, r.jsx)(W.Z, {
            selected: ef,
            className: en.discoveryIcon,
        }),
        e_ = eu === I.u3.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(v.Gt, {
        value: eh,
        children: (0, r.jsx)(m.f6W, {
            theme: a,
            children: (e) => {
                var i, a;
                return (0, r.jsxs)("nav", {
                    className: o()(en.wrapper, l, e, { [en.hidden]: b }),
                    "aria-label": et.intl.string(et.t.PjnF2t),
                    children: [
                        (0, r.jsx)(U.Z, {
                            ref: A,
                            isVisible: ep.isItemVisible,
                            onJumpTo: ep.handleJumpToGuild,
                            className: en.unreadMentionsIndicatorTop,
                            barClassName: en.unreadMentionsBar,
                        }),
                        (0, r.jsx)(
                            "ul",
                            ((i = ei({ ref: F }, V, H)),
                            (a = a =
                                {
                                    role: "tree",
                                    className: en.tree,
                                    children: (0, r.jsxs)("div", {
                                        className: en.itemsContainer,
                                        children: [
                                            (0, r.jsxs)(m.xVE, {
                                                className: o()({
                                                    [en.scroller]: !0,
                                                    [en.scrolling]: z,
                                                }),
                                                experimental_useStack: !0,
                                                gap: "xs",
                                                ref: ep.scrollerRef,
                                                onScroll: ep.handleScroll,
                                                children: [
                                                    (0, r.jsx)(es, {
                                                        scrollToTop: eg,
                                                        lurkingGuildIds: h,
                                                    }),
                                                    (0, r.jsx)(Y.Z, {}),
                                                    (0, r.jsx)(ec, {
                                                        guildDiscoveryButton: eb,
                                                        disableAppDownload: t,
                                                        isOverlay: n,
                                                        renderTreeNode: em,
                                                        lurkingGuildIds: h,
                                                    }),
                                                ],
                                            }),
                                            e_ &&
                                                (0, r.jsxs)("div", {
                                                    children: [
                                                        (0, r.jsx)(Y.Z, { fullWidth: !0 }),
                                                        (0, r.jsx)("div", {
                                                            className: en.bottomRailNotifCenterButton,
                                                            children: (0, r.jsx)(P.Z, {}),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
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
                            i),
                        ),
                        (0, r.jsx)(U.Z, {
                            reverse: !0,
                            ref: R,
                            isVisible: ep.isItemVisible,
                            onJumpTo: ep.handleJumpToGuild,
                            className: o()(en.unreadMentionsIndicatorBottom, {
                                [en.unreadMentionsFixedFooter]: !n && !e_,
                                [en.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && e_,
                            }),
                            barClassName: en.unreadMentionsBar,
                        }),
                    ],
                });
            },
        }),
    });
}
let ed = i.memo(
    function (e) {
        let t = (0, y.Z)("guildsnav");
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(eu, ei({}, e)),
        });
    },
    (e, t) => !1 === t.isVisible || (0, h.Z)(e, t),
);
