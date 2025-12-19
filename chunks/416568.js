n.d(t, { Z: () => ed }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(828700),
    u = n(91192),
    d = n(374470),
    f = n(442837),
    h = n(902704),
    p = n(846519),
    g = n(692547),
    b = n(481060),
    m = n(925549),
    y = n(493773),
    O = n(209613),
    v = n(100527),
    j = n(906732),
    C = n(358221),
    x = n(706590),
    E = n(940777),
    S = n(113544),
    I = n(41776),
    _ = n(821020),
    P = n(770858),
    N = n(365113),
    Z = n(905423),
    w = n(796974),
    T = n(478738),
    A = n(271383),
    R = n(430824),
    D = n(771845),
    M = n(358085),
    L = n(316243),
    k = n(727258),
    G = n(605951),
    U = n(474109),
    B = n(741616),
    F = n(187835),
    V = n(118122),
    H = n(780367),
    W = n(193154),
    z = n(602147),
    K = n(222059),
    Y = n(65721),
    q = n(843343),
    Q = n(654142),
    X = n(695301),
    J = n(836697),
    $ = n(921230),
    ee = n(981631),
    et = n(388032),
    en = n(958383);
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
let el = (0, M.isWindows)() ? 4 : 12 * !(0, M.isMac)();
function ea(e) {
    return e.startsWith(ee.Z5c.GUILD_DISCOVERY) || e.startsWith(ee.Z5c.GLOBAL_DISCOVERY);
}
class eo {
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
            (this.timeout = new p.V7()),
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
                    (null == e && ea(window.location.pathname)) ||
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
                let { iconTotalSize: r, badgeVisibleBuffer: i, heightBeforeGuilds: l, bottomInset: a } = this.sizes,
                    o = this.scrollerRef.current;
                if (null == o) return !1;
                let s = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
                if (s < 0) return !1;
                let c = r * s + l,
                    u = o.getScrollerState();
                return (!t && !!(c >= u.scrollTop)) || (!!t && !!(c + r + i <= u.scrollTop + u.offsetHeight - a));
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
                              let a = l.getBoundingClientRect(),
                                  o = a.top - r;
                              return o + a.height > 0 && o < n;
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
                m.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = s().throttle(() => {
                let e = this.scrollerRef.current;
                null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            }),
            (0, S.zb)(this.getVisibleGuildIds);
    }
}
function es(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, x.Z)(),
        a = (0, f.Wu)([R.Z, A.ZP], () => R.Z.getGuildIds().filter((e) => A.ZP.isCurrentUserGuest(e))),
        o = i.concat(a),
        { entrypoint: s } = (0, _.pN)({ location: "GuildsBar" }),
        c = N.o.useConfig({ location: "guildsbar" }).dmsTab;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K.u, {}),
            c && (0, r.jsx)(H.Z, {}),
            s === _.u3.SERVER_RAIL_TOP && (0, r.jsx)(P.Z, {}),
            l ? (0, r.jsx)(E.Z, {}) : null,
            !t && (0, r.jsx)(B.Z, {}),
            o.map((e) => (0, r.jsx)($.Z, { guildId: e }, e)),
            (0, r.jsx)(J.Z, { onActivate: n }),
        ],
    });
}
function ec(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: a } = e,
        [o] = (0, f.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        s = o.getRoots(),
        c = (0, f.Wu)([T.Z], () => T.Z.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                W.Z,
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
            (0, r.jsx)(b.Kqy, {
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
                      disableTooltip: a.length > 0,
                      lastTargetNode: s[s.length - 1],
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(F.Z, {}),
        ],
    });
}
function eu(e) {
    let { disableAppDownload: t = M.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: o } = e,
        [s] = (0, f.Wu)([D.ZP], () => {
            let e = D.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, f.e7)([I.Z], () => I.Z.lurkingGuildIds()),
        h = i.useMemo(() => (n ? [] : d), [d, n]),
        m = (0, f.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        { isSorting: O, startSorting: E, stopSorting: S } = (0, L.Z)(),
        N = i.useRef(!1),
        [T] = i.useState(() => new p.V7()),
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
        H = (0, b.mFp)(),
        [W, K] = i.useState(!1),
        q = (0, b.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        J = (0, b.dQu)(g.Z.space.SPACE_XS),
        $ = (0, x.Z)(),
        { pathname: er } = (0, c.TH)(),
        { entrypoint: eu } = (0, _.pN)({ location: "GuildsBar" }),
        ed = +!!$ + +(eu === _.u3.SERVER_RAIL_TOP),
        ef = i.useMemo(() => {
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
            return new eo(
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
            ef.setResizeObserver(),
            () => {
                ef.clearResizeObserver();
            }
        ),
        [ef],
    );
    let { analyticsLocations: eh } = (0, j.ZP)(v.Z.GUILDS_LIST),
        ep = ea(er);
    (0, y.Ng)(() => {
        if (!N.current && 0 !== s.size) {
            if (!ep) {
                let { scrollTop: e } = w.Z.getGuildListDimensions();
                ef.scrollTo({
                    to: e,
                    animate: !1,
                });
            }
            return (N.current = !0), () => T.stop();
        }
    }),
        i.useEffect(() => {
            if ((ef.setGuildsTree(s), N.current || 0 === s.size)) return;
            let e = Z.Z.getState().guildId;
            ef.scrollToGuild(e, !1);
            let t = null;
            return Z.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ef.scrollToGuild(t, !1));
            });
        }, [s, ef]);
    let eg = i.useCallback(() => {
        ef.scrollTo({
            to: 0,
            animate: !1,
        });
    }, [ef]);
    (0, G.Z)(ef.scrollToGuild);
    let eb = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case k.eD.FOLDER:
                        return (0, r.jsx)(
                            Q.Z,
                            {
                                folderNode: t,
                                setNodeRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: O,
                                onDragStart: E,
                                onDragEnd: S,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case k.eD.GUILD:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                guildNode: t,
                                setRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: O,
                                onDragStart: E,
                                onDragEnd: S,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [E, S, O, ef.setNodeRef],
        ),
        em = (0, r.jsx)(z.Z, {
            selected: ep,
            className: en.discoveryIcon,
        }),
        ey = eu === _.u3.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(j.Gt, {
        value: eh,
        children: (0, r.jsx)(b.f6W, {
            theme: o,
            children: (e) => {
                var i, o;
                return (0, r.jsxs)("nav", {
                    className: a()(en.wrapper, l, e, { [en.hidden]: m }),
                    "aria-label": et.intl.string(et.t.PjnF2t),
                    children: [
                        (0, r.jsx)(U.Z, {
                            ref: A,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: en.unreadMentionsIndicatorTop,
                            barClassName: en.unreadMentionsBar,
                        }),
                        (0, r.jsx)(
                            "ul",
                            ((i = ei({ ref: F }, V, H)),
                            (o = o =
                                {
                                    role: "tree",
                                    className: en.tree,
                                    children: (0, r.jsxs)("div", {
                                        className: en.itemsContainer,
                                        children: [
                                            (0, r.jsxs)(b.xVE, {
                                                className: a()({
                                                    [en.scroller]: !0,
                                                    [en.scrolling]: W,
                                                }),
                                                experimental_useStack: !0,
                                                gap: "xs",
                                                ref: ef.scrollerRef,
                                                onScroll: ef.handleScroll,
                                                children: [
                                                    (0, r.jsx)(es, {
                                                        scrollToTop: eg,
                                                        lurkingGuildIds: h,
                                                    }),
                                                    (0, r.jsx)(Y.Z, {}),
                                                    (0, r.jsx)(ec, {
                                                        guildDiscoveryButton: em,
                                                        disableAppDownload: t,
                                                        isOverlay: n,
                                                        renderTreeNode: eb,
                                                        lurkingGuildIds: h,
                                                    }),
                                                ],
                                            }),
                                            ey &&
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
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            i),
                        ),
                        (0, r.jsx)(U.Z, {
                            reverse: !0,
                            ref: R,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: a()(en.unreadMentionsIndicatorBottom, {
                                [en.unreadMentionsFixedFooter]: !n && !ey,
                                [en.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && ey,
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
        let t = (0, O.Z)("guildsnav");
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(eu, ei({}, e)),
        });
    },
    (e, t) => !1 === t.isVisible || (0, h.Z)(e, t),
);
