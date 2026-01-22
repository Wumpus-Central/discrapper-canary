n.d(t, { A: () => ec }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(960488),
    u = n(837381),
    d = n(621466),
    f = n(311907),
    p = n(52133),
    h = n(451988),
    b = n(827734),
    g = n(397927),
    m = n(951001),
    A = n(964486),
    y = n(260762),
    O = n(793574),
    j = n(688810),
    v = n(313961),
    x = n(832275),
    E = n(730253),
    _ = n(633965),
    C = n(857071),
    S = n(851109),
    I = n(397938),
    N = n(366811),
    T = n(72314),
    P = n(543897),
    w = n(696451),
    R = n(71393),
    D = n(711014),
    M = n(723702),
    L = n(757780),
    G = n(263715),
    k = n(987344),
    U = n(750448),
    V = n(845211),
    F = n(941604),
    H = n(246884),
    B = n(497140),
    K = n(34247),
    W = n(850729),
    z = n(521872),
    Y = n(827975),
    q = n(369915),
    X = n(232879),
    J = n(181800),
    Q = n(343170),
    Z = n(652215),
    $ = n(985018),
    ee = n(216788);
function et(e, t, n) {
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
function en(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
let er = (0, M.isWindows)() ? 4 : 12 * !(0, M.isMac)();
function el(e) {
    return e.startsWith(Z.BVt.GUILD_DISCOVERY) || e.startsWith(Z.BVt.GLOBAL_DISCOVERY);
}
class ei {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, r, i) {
        et(this, "guildsTree", void 0),
            et(this, "setScrolling", void 0),
            et(this, "setIsScrolledToBottom", void 0),
            et(this, "onScroll", void 0),
            et(this, "sizes", void 0),
            et(this, "scrollerRef", void 0),
            et(this, "nodeRefs", void 0),
            et(this, "timeout", void 0),
            et(this, "observer", void 0),
            et(this, "setResizeObserver", void 0),
            et(this, "clearResizeObserver", void 0),
            et(this, "scrollToGuild", void 0),
            et(this, "handleJumpToGuild", void 0),
            et(this, "scrollTo", void 0),
            et(this, "scrollToBottom", void 0),
            et(this, "isItemVisible", void 0),
            et(this, "getVisibleGuildIds", void 0),
            et(this, "handleScroll", void 0),
            et(this, "_handleScrollDebounced", void 0),
            et(this, "_handleScrollThrottled", void 0),
            et(this, "setNodeRef", void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = r),
            (this.sizes = i),
            (this.scrollerRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new h.Ep()),
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
                    e === Z.sFm.SERVER_DISCOVERY_BADGE ||
                    e === Z.sFm.E3_SERVER_DISCOVERY_BADGE
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
                null != r && (0, d.vq)(r)
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
                let { iconTotalSize: r, badgeVisibleBuffer: l, heightBeforeGuilds: i, bottomInset: a } = this.sizes,
                    s = this.scrollerRef.current;
                if (null == s) return !1;
                let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
                if (o < 0) return !1;
                let c = r * o + i,
                    u = s.getScrollerState();
                return (!t && !!(c >= u.scrollTop)) || (!!t && !!(c + r + l <= u.scrollTop + u.offsetHeight - a));
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
                              let l = null != (t = e.parentId) ? t : e.id,
                                  i = this.nodeRefs[l];
                              if (null == i) return !1;
                              let a = i.getBoundingClientRect(),
                                  s = a.top - r;
                              return s + a.height > 0 && s < n;
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
            (this._handleScrollDebounced = o().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                m.A.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = o().throttle(() => {
                let e = this.scrollerRef.current;
                null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            }),
            (0, _.u9)(this.getVisibleGuildIds);
    }
}
function ea(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        i = (0, x.A)(),
        a = (0, f.yK)([R.A, w.Ay], () => R.A.getGuildIds().filter((e) => w.Ay.isCurrentUserGuest(e))),
        s = l.concat(a),
        { entrypoint: o } = (0, S.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W.C, {}),
            o === S.RK.SERVER_RAIL_TOP && (0, r.jsx)(I.A, {}),
            i ? (0, r.jsx)(E.A, {}) : null,
            !t && (0, r.jsx)(V.A, {}),
            s.map((e) => (0, r.jsx)(Q.A, { guildId: e }, e)),
            (0, r.jsx)(J.A, { onActivate: n }),
        ],
    });
}
function es(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: l, renderTreeNode: i, lurkingGuildIds: a } = e,
        [s] = (0, f.yK)([D.Ay], () => {
            let e = D.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = s.getRoots(),
        c = (0, f.yK)([P.A], () => P.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(
                B.A,
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
            (0, r.jsx)(g.BJc, {
                role: "group",
                "aria-label": $.intl.string($.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => i(e, t, o.length)),
            }),
            c,
            (0, r.jsx)(Y.A, {}),
            l
                ? null
                : (0, r.jsx)(H.A, {
                      disableTooltip: a.length > 0,
                      lastTargetNode: o[o.length - 1],
                  }),
            l ? null : t,
            n ? null : (0, r.jsx)(F.A, {}),
        ],
    });
}
function eo(e) {
    let { disableAppDownload: t = M.isPlatformEmbedded, isOverlay: n = !1, className: i, themeOverride: s } = e,
        [o] = (0, f.yK)([D.Ay], () => {
            let e = D.Ay.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, f.bG)([C.A], () => C.A.lurkingGuildIds()),
        p = l.useMemo(() => (n ? [] : d), [d, n]),
        m = (0, f.bG)([v.A], () => v.A.isFullscreenInContext()),
        { isSorting: y, startSorting: E, stopSorting: _ } = (0, L.A)(),
        P = l.useRef(!1),
        [w] = l.useState(() => new h.Ep()),
        R = l.useRef(null),
        V = l.useRef(null),
        F = (0, u.$y)(),
        { ref: H } = F,
        B = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(F, ["ref"]),
        W = (0, g.R7z)(),
        [Y, J] = l.useState(!1),
        Q = (0, g.rdh)(b.A.modules.guildbar.AVATAR_SIZE),
        et = (0, g.rdh)(b.A.space.SPACE_XS),
        eo = (0, x.A)(),
        { pathname: ec } = (0, c.zy)(),
        { entrypoint: eu } = (0, S.X8)({ location: "GuildsBar" }),
        ed = +!!eo + +(eu === S.RK.SERVER_RAIL_TOP),
        ef = l.useMemo(() => {
            let e,
                t,
                n =
                    ((e = Q + et),
                    {
                        iconSize: Q,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + et),
                        heightBeforeGuilds: er + t + ed * e,
                        bottomInset: 16,
                    });
            return new ei(
                o,
                J,
                Z.tEg,
                () => {
                    var e, t;
                    null == (e = R.current) || e.calculateState(), null == (t = V.current) || t.calculateState();
                },
                n,
            );
        }, [Q, et, o, ed]);
    l.useEffect(
        () => (
            ef.setResizeObserver(),
            () => {
                ef.clearResizeObserver();
            }
        ),
        [ef],
    );
    let { analyticsLocations: ep } = (0, j.Ay)(O.A.GUILDS_LIST),
        eh = el(ec);
    (0, A.u5)(() => {
        if (!P.current && 0 !== o.size) {
            if (!eh) {
                let { scrollTop: e } = T.A.getGuildListDimensions();
                ef.scrollTo({
                    to: e,
                    animate: !1,
                });
            }
            return (P.current = !0), () => w.stop();
        }
    }),
        l.useEffect(() => {
            if ((ef.setGuildsTree(o), P.current || 0 === o.size)) return;
            let e = N.A.getState().guildId;
            ef.scrollToGuild(e, !1);
            let t = null;
            return N.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ef.scrollToGuild(t, !1));
            });
        }, [o, ef]);
    let eb = l.useCallback(() => {
        ef.scrollTo({
            to: 0,
            animate: !1,
        });
    }, [ef]);
    (0, k.A)(ef.scrollToGuild);
    let eg = l.useCallback(
            function e(t, n, l) {
                switch (t.type) {
                    case G.PJ.FOLDER:
                        return (0, r.jsx)(
                            q.A,
                            {
                                folderNode: t,
                                setNodeRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: y,
                                onDragStart: E,
                                onDragEnd: _,
                                renderChildNode: e,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case G.PJ.GUILD:
                        return (0, r.jsx)(
                            X.A,
                            {
                                guildNode: t,
                                setRef: ef.setNodeRef,
                                draggable: !0,
                                sorting: y,
                                onDragStart: E,
                                onDragEnd: _,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [E, _, y, ef.setNodeRef],
        ),
        em = (0, r.jsx)(K.A, {
            selected: eh,
            className: ee.ai,
        }),
        eA = eu === S.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(j.f5, {
        value: ep,
        children: (0, r.jsx)(g.NPJ, {
            theme: s,
            children: (e) => {
                var l, s;
                return (0, r.jsxs)("nav", {
                    className: a()(ee.iE, i, e, { [ee.R]: m }),
                    "aria-label": $.intl.string($.t.PjnF2t),
                    children: [
                        (0, r.jsx)(U.A, {
                            ref: R,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: ee.Xl,
                            barClassName: ee.Sh,
                        }),
                        (0, r.jsx)(
                            "ul",
                            ((l = en({ ref: H }, B, W)),
                            (s = s =
                                {
                                    role: "tree",
                                    className: ee.B2,
                                    children: (0, r.jsxs)("div", {
                                        className: ee.qD,
                                        children: [
                                            (0, r.jsxs)(g.zCo, {
                                                className: a()({
                                                    [ee.XG]: !0,
                                                    [ee.qw]: Y,
                                                }),
                                                experimental_useStack: !0,
                                                gap: "xs",
                                                ref: ef.scrollerRef,
                                                onScroll: ef.handleScroll,
                                                children: [
                                                    (0, r.jsx)(ea, {
                                                        scrollToTop: eb,
                                                        lurkingGuildIds: p,
                                                    }),
                                                    (0, r.jsx)(z.A, {}),
                                                    (0, r.jsx)(es, {
                                                        guildDiscoveryButton: em,
                                                        disableAppDownload: t,
                                                        isOverlay: n,
                                                        renderTreeNode: eg,
                                                        lurkingGuildIds: p,
                                                    }),
                                                ],
                                            }),
                                            eA &&
                                                (0, r.jsxs)("div", {
                                                    children: [
                                                        (0, r.jsx)(z.A, { fullWidth: !0 }),
                                                        (0, r.jsx)("div", {
                                                            className: ee.JU,
                                                            children: (0, r.jsx)(I.A, {}),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            l),
                        ),
                        (0, r.jsx)(U.A, {
                            reverse: !0,
                            ref: V,
                            isVisible: ef.isItemVisible,
                            onJumpTo: ef.handleJumpToGuild,
                            className: a()(ee.LZ, {
                                [ee.CH]: !n && !eA,
                                [ee.c0]: !n && eA,
                            }),
                            barClassName: ee.Sh,
                        }),
                    ],
                });
            },
        }),
    });
}
let ec = l.memo(
    function (e) {
        let t = (0, y.A)("guildsnav");
        return (0, r.jsx)(u.hD, {
            navigator: t,
            children: (0, r.jsx)(eo, en({}, e)),
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.A)(e, t),
);
