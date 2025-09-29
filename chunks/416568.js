n.d(t, { Z: () => eu }), n(388685);
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
    f = n(902704),
    h = n(846519),
    g = n(692547),
    m = n(481060),
    b = n(925549),
    _ = n(493773),
    O = n(209613),
    y = n(100527),
    v = n(906732),
    j = n(358221),
    x = n(706590),
    C = n(940777),
    E = n(113544),
    S = n(41776),
    P = n(821020),
    I = n(770858),
    N = n(905423),
    w = n(796974),
    Z = n(478738),
    T = n(271383),
    A = n(430824),
    R = n(771845),
    D = n(358085),
    M = n(316243),
    L = n(727258),
    k = n(605951),
    U = n(474109),
    G = n(741616),
    B = n(187835),
    F = n(118122),
    V = n(193154),
    H = n(602147),
    z = n(222059),
    W = n(751277),
    K = n(65721),
    Y = n(843343),
    q = n(654142),
    X = n(695301),
    Q = n(836697),
    J = n(921230),
    $ = n(981631),
    ee = n(388032),
    et = n(878109);
function en(e, t, n) {
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
function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
let ei = (0, D.isWindows)() ? 4 : 12 * !(0, D.isMac)();
function el(e) {
    return e.startsWith($.Z5c.GUILD_DISCOVERY) || e.startsWith($.Z5c.GLOBAL_DISCOVERY);
}
class eo {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, l) {
        en(this, "guildsTree", void 0),
            en(this, "setScrolling", void 0),
            en(this, "setIsScrolledToBottom", void 0),
            en(this, "onScroll", void 0),
            en(this, "sizes", void 0),
            en(this, "scrollerRef", void 0),
            en(this, "nodeRefs", void 0),
            en(this, "timeout", void 0),
            en(this, "observer", void 0),
            en(this, "setResizeObserver", void 0),
            en(this, "clearResizeObserver", void 0),
            en(this, "scrollToGuild", void 0),
            en(this, "handleJumpToGuild", void 0),
            en(this, "scrollTo", void 0),
            en(this, "scrollToBottom", void 0),
            en(this, "isItemVisible", void 0),
            en(this, "getVisibleGuildIds", void 0),
            en(this, "handleScroll", void 0),
            en(this, "_handleScrollDebounced", void 0),
            en(this, "_handleScrollThrottled", void 0),
            en(this, "setNodeRef", void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = r),
            (this.sizes = l),
            (this.scrollerRef = i.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new h.V7()),
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
                    (null == e && el(window.location.pathname)) ||
                    e === $.x8Z.SERVER_DISCOVERY_BADGE ||
                    e === $.x8Z.E3_SERVER_DISCOVERY_BADGE
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
function ea(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        l = (0, x.Z)(),
        { pathname: o } = (0, c.TH)(),
        a = o.startsWith($.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
        s = (0, p.Wu)([A.Z, T.ZP], () => A.Z.getGuildIds().filter((e) => T.ZP.isCurrentUserGuest(e))),
        u = i.concat(s),
        { entrypoint: d } = (0, P.pN)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(z.u, {}),
            d === P.u3.SERVER_RAIL_TOP && (0, r.jsx)(I.Z, {}),
            l ? (0, r.jsx)(C.Z, {}) : null,
            (0, r.jsx)(W.Z, { isOnHubVerificationRoute: a }),
            !t && (0, r.jsx)(G.Z, {}),
            u.map((e) => (0, r.jsx)(J.Z, { guildId: e }, e)),
            (0, r.jsx)(Q.Z, { onActivate: n }),
        ],
    });
}
function es(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: l, lurkingGuildIds: o } = e,
        [a] = (0, p.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        s = a.getRoots(),
        c = (0, p.Wu)([Z.Z], () => Z.Z.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                V.Z,
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
                "aria-label": ee.intl.string(ee.t["7hB4kp"]),
                gap: "xs",
                children: s.map((e, t) => l(e, t, s.length)),
            }),
            c,
            (0, r.jsx)(Y.Z, {}),
            i
                ? null
                : (0, r.jsx)(F.Z, {
                      disableTooltip: o.length > 0,
                      lastTargetNode: s[s.length - 1],
                  }),
            i ? null : t,
            n ? null : (0, r.jsx)(B.Z, {}),
        ],
    });
}
function ec(e) {
    let { disableAppDownload: t = D.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [s] = (0, p.Wu)([R.ZP], () => {
            let e = R.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, p.e7)([S.Z], () => S.Z.lurkingGuildIds()),
        f = i.useMemo(() => (n ? [] : d), [d, n]),
        b = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        { isSorting: O, startSorting: C, stopSorting: E } = (0, M.Z)(),
        Z = i.useRef(!1),
        [T] = i.useState(() => new h.V7()),
        A = i.useRef(null),
        G = i.useRef(null),
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
        z = (0, m.mFp)(),
        [W, Y] = i.useState(!1),
        Q = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE),
        J = (0, m.dQu)(g.Z.space.SPACE_XS),
        en = (0, x.Z)(),
        { pathname: ec } = (0, c.TH)(),
        eu = ec.startsWith($.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
        { entrypoint: ed } = (0, P.pN)({ location: "GuildsBar" }),
        ep = +!!en + +!!eu + +(ed === P.u3.SERVER_RAIL_TOP),
        ef = i.useMemo(() => {
            let e = (function (e, t, n) {
                let r = e + t,
                    i = 2 + t;
                return {
                    iconSize: e,
                    iconTotalSize: r,
                    badgeVisibleBuffer: r - 16,
                    separatorSize: i,
                    heightBeforeGuilds: ei + i + n * r,
                    bottomInset: 16,
                };
            })(Q, J, ep);
            return new eo(
                s,
                Y,
                $.dG4,
                () => {
                    var e, t;
                    null == (e = A.current) || e.calculateState(), null == (t = G.current) || t.calculateState();
                },
                e,
            );
        }, [Q, J, s, ep]);
    i.useEffect(
        () => (
            ef.setResizeObserver(),
            () => {
                ef.clearResizeObserver();
            }
        ),
        [ef],
    );
    let { analyticsLocations: eh } = (0, v.ZP)(y.Z.GUILDS_LIST),
        eg = el(ec);
    (0, _.Ng)(() => {
        if (!Z.current && 0 !== s.size) {
            if (!eg) {
                let { scrollTop: e } = w.Z.getGuildListDimensions();
                ef.scrollTo({
                    to: e,
                    animate: !1,
                });
            }
            return (Z.current = !0), () => T.stop();
        }
    }),
        i.useEffect(() => {
            if ((ef.setGuildsTree(s), Z.current || 0 === s.size)) return;
            let e = N.Z.getState().guildId;
            ef.scrollToGuild(e, !1);
            let t = null;
            return N.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ef.scrollToGuild(t, !1));
            });
        }, [s, ef]);
    let em = i.useCallback(() => {
        ef.scrollTo({
            to: 0,
            animate: !1,
        });
    }, [ef]);
    (0, k.Z)(ef.scrollToGuild);
    let eb = i.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case L.eD.FOLDER:
                        return (0, r.jsx)(
                            q.Z,
                            {
                                folderNode: t,
                                setNodeRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: O,
                                onDragStart: C,
                                onDragEnd: E,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case L.eD.GUILD:
                        return (0, r.jsx)(
                            X.Z,
                            {
                                guildNode: t,
                                setRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: O,
                                onDragStart: C,
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
            [C, E, O, ef.setNodeRef],
        ),
        e_ = (0, r.jsx)(H.Z, {
            selected: eg,
            className: et.discoveryIcon,
        }),
        eO = ed === P.u3.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(v.Gt, {
        value: eh,
        children: (0, r.jsx)(m.f6W, {
            theme: a,
            children: (e) => {
                var i, a;
                return (0, r.jsxs)("nav", {
                    className: o()(et.wrapper, l, e, { [et.hidden]: b }),
                    "aria-label": ee.intl.string(ee.t.PjnF2t),
                    children: [
                        (0, r.jsx)(U.Z, {
                            ref: A,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: et.unreadMentionsIndicatorTop,
                            barClassName: et.unreadMentionsBar,
                        }),
                        (0, r.jsx)(
                            "ul",
                            ((i = er({ ref: F }, V, z)),
                            (a = a =
                                {
                                    role: "tree",
                                    className: et.tree,
                                    children: (0, r.jsxs)("div", {
                                        className: et.itemsContainer,
                                        children: [
                                            (0, r.jsxs)(m.xVE, {
                                                className: o()({
                                                    [et.scroller]: !0,
                                                    [et.scrolling]: W,
                                                }),
                                                experimental_useStack: !0,
                                                gap: "xs",
                                                ref: ef.scrollerRef,
                                                onScroll: ef.handleScroll,
                                                children: [
                                                    (0, r.jsx)(ea, {
                                                        scrollToTop: em,
                                                        lurkingGuildIds: f,
                                                    }),
                                                    (0, r.jsx)(K.Z, {}),
                                                    (0, r.jsx)(es, {
                                                        guildDiscoveryButton: e_,
                                                        disableAppDownload: t,
                                                        isOverlay: n,
                                                        renderTreeNode: eb,
                                                        lurkingGuildIds: f,
                                                    }),
                                                ],
                                            }),
                                            eO &&
                                                (0, r.jsxs)("div", {
                                                    children: [
                                                        (0, r.jsx)(K.Z, { fullWidth: !0 }),
                                                        (0, r.jsx)("div", {
                                                            className: et.bottomRailNotifCenterButton,
                                                            children: (0, r.jsx)(I.Z, {}),
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
                            ref: G,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: o()(et.unreadMentionsIndicatorBottom, {
                                [et.unreadMentionsFixedFooter]: !n && !eO,
                                [et.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && eO,
                            }),
                            barClassName: et.unreadMentionsBar,
                        }),
                    ],
                });
            },
        }),
    });
}
let eu = i.memo(
    function (e) {
        let t = (0, O.Z)("guildsnav");
        return (0, r.jsx)(u.bG, {
            navigator: t,
            children: (0, r.jsx)(ec, er({}, e)),
        });
    },
    (e, t) => !1 === t.isVisible || (0, f.Z)(e, t),
);
