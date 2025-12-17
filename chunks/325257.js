n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(891371),
    s = n(236726),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    f = n(481060),
    h = n(493683),
    p = n(239091),
    g = n(153867),
    b = n(35225),
    m = n(703656),
    y = n(769654),
    O = n(601964),
    v = n(271383),
    j = n(771845),
    C = n(727258),
    x = n(276952),
    E = n(249792),
    S = n(40153),
    I = n(593618),
    _ = n(252686),
    P = n(682662),
    N = n(674552),
    Z = n(981631),
    w = n(388032),
    T = n(455802);
function A(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = {
    analyticsSource: {
        page: Z.ZY5.GUILD_CHANNEL,
        section: Z.jXE.CHANNEL_LIST,
        object: Z.qAy.CHANNEL,
    },
};
function M(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("36599"),
            n.e("7654"),
            n.e("76692"),
            n.e("8271"),
            n.e("15851"),
            n.e("51453"),
            n.e("845"),
            n.e("9414"),
            n.e("6850"),
            n.e("58227"),
            n.e("44686"),
            n.e("9536"),
            n.e("22516"),
            n.e("87154"),
            n.e("33213"),
            n.e("74978"),
        ]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, R(A({}, n), { guild: t }));
    });
}
let L = i.memo(function (e) {
    var t, n, l, p, L;
    let {
            guildNode: k,
            setRef: G,
            onDragStart: U,
            onDragEnd: B,
            route: F,
            guild: V,
            animatable: H,
            selected: z = !1,
            unread: W = !1,
            mediaState: K,
            unavailable: Y = !1,
            badge: q = 0,
            isMentionLowImportance: Q,
            contextMenu: X = M,
            draggable: J = !1,
            sorting: $ = !1,
            preloadOnClick: ee = !0,
            guildJoinRequestStatus: et,
            height: en,
            "aria-setsize": er,
            "aria-posinset": ei,
        } = e,
        { id: el, parentId: ea } = k,
        eo = null != (t = e.upperBadge) ? t : Y ? (0, N.Ny)() : null != K ? (0, N.Or)(K) : void 0,
        es = null != (n = e.lowerBadge) ? n : void 0;
    null == es && q > 0
        ? (es =
              null != (l = (0, N.Ne)(q, Q ? f.TVs.colors.BACKGROUND_ACCENT.css : f.TVs.colors.STATUS_DANGER.css))
                  ? l
                  : void 0)
        : null == es && null != et && (es = null != (p = (0, N.jt)({ guildJoinRequestStatus: et })) ? p : void 0);
    let ec = null != (L = e.lowerBadgeSize) ? L : { width: (0, f.OVM)(q) },
        [{ dragging: eu }, ed] = (0, o.c)({
            type: C.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == U || U();
                }),
                {
                    type: k.type,
                    nodeId: k.id,
                }
            ),
            end() {
                null == B || B(), (0, g.V1)(j.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ef = (0, c.Ie)(null != el ? el : Z.lds, null != ea ? 2 : 1),
        [eh, ep] = i.useState(!1),
        eg = !$ && eh,
        [eb, em] = i.useState(!1),
        [ey, eO] = i.useState(!1),
        [ev] = i.useState(() => new d.sW(70, () => eO(!0)));
    i.useEffect(() => () => ev.cancel(), [ev]);
    let ej = i.useCallback(() => {
            if (null != F) return void (0, m.uL)(F, { state: D });
            (0, y.X)(el, { state: D });
        }, [el, F]),
        eC = i.useCallback(() => {
            if (null != F || null == V || Y || !ee) return;
            let e = (0, b.V)(V.id);
            null != e && h.Z.preload(V.id, e);
        }, [F, V, Y, ee]),
        ex = (0, u.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(el)),
        eE = i.useCallback(
            (e) => {
                null == V || ex || X(e, V);
            },
            [V, X, ex],
        ),
        eS = i.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key && null != ea) {
                    var t;
                    null == (t = document.querySelector("[aria-owns=folder-items-".concat(ea, "]"))) || t.focus();
                }
            },
            [ea],
        ),
        eI = i.useCallback(
            (e) => {
                if (e) return void ev.delay();
                ev.cancel(), eO(!1);
            },
            [ev],
        ),
        e_ = i.useCallback(
            (e) => {
                null == G || G(el, e);
            },
            [el, G],
        ),
        eP = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == V) return null;
    let eN =
            ey || eb
                ? (0, r.jsx)(E.Z, {
                      guild: V,
                      show: ey,
                      active: z,
                      onAnimationStart: function () {
                          em(ey);
                      },
                      onAnimationRest: function () {
                          ey || em(!1);
                      },
                  })
                : (0, r.jsx)(f.aRk, {
                      selected: z,
                      children: (0, r.jsx)("div", {
                          ref: J
                              ? (e) => {
                                    ed(e);
                                }
                              : void 0,
                          "data-dnd-name": V.name,
                          "data-drop-hovering": ey,
                          children: (0, r.jsx)(
                              f.LYs,
                              R(
                                  A(
                                      {
                                          ariaLabel: w.intl.formatToPlainString(w.t["/uzRss"], {
                                              guildName: V.name,
                                              mentions: q,
                                          }),
                                          name: V.name,
                                          onClick: ej,
                                          onMouseEnter: function () {
                                              $ || ep(!0);
                                          },
                                          onMouseLeave: function () {
                                              $ || ep(!1);
                                          },
                                          onMouseDown: eC,
                                          onContextMenu: eE,
                                          onKeyDown: eS,
                                          icon: (0, O.EB)(V, 2 * eP, eg && H, !0),
                                          selected: z || eg,
                                      },
                                      ef,
                                  ),
                                  {
                                      "aria-setsize": er,
                                      "aria-posinset": ei,
                                      "aria-selected": z,
                                  },
                              ),
                          ),
                      }),
                  }),
        eZ = eu
            ? (0, r.jsx)(S.OG, { children: (0, r.jsx)(_.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
                  style: { scale: null == en ? 1 : en },
                  className: a()(T.blobContainer, {
                      [T.sorting]: $,
                      [T.wobble]: ey,
                      [T.selected]: ey || z,
                  }),
                  "data-drop-hovering": ey,
                  children: (0, r.jsx)(f.aRk, {
                      selected: z,
                      upperBadge: eo,
                      lowerBadge: es,
                      lowerBadgeSize: ec,
                      children: eN,
                  }),
              });
    return (0, r.jsxs)(P.H, {
        ref: e_,
        children: [
            (0, r.jsx)(x.Z, {
                hovered: !eu && eg,
                selected: !eu && z,
                unread: !eu && W,
                className: T.pill,
            }),
            (0, r.jsx)(I.Z, {
                guild: V,
                disabled: $,
                isDragging: eu,
                children: eZ,
            }),
            J
                ? (0, r.jsx)(S.ZP, {
                      name: V.name,
                      targetNode: k,
                      onDragOverChanged: eI,
                  })
                : null,
        ],
    });
});
