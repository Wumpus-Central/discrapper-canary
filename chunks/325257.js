n.d(t, { Z: () => k }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(17163),
    s = n(81239),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    p = n(481060),
    f = n(493683),
    h = n(239091),
    g = n(153867),
    m = n(35225),
    b = n(703656),
    y = n(769654),
    v = n(601964),
    O = n(271383),
    j = n(771845),
    x = n(727258),
    C = n(276952),
    E = n(249792),
    S = n(40153),
    _ = n(593618),
    I = n(252686),
    P = n(682662),
    Z = n(674552),
    N = n(981631),
    T = n(388032),
    A = n(455802);
function w(e) {
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
        page: N.ZY5.GUILD_CHANNEL,
        section: N.jXE.CHANNEL_LIST,
        object: N.qAy.CHANNEL,
    },
};
function M(e, t) {
    (0, h.jW)(e, async () => {
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
        return (n) => (0, r.jsx)(e, R(w({}, n), { guild: t }));
    });
}
let k = i.memo(function (e) {
    var t, n, l, h, k;
    let {
            guildNode: L,
            setRef: U,
            onDragStart: G,
            onDragEnd: B,
            route: F,
            guild: H,
            animatable: V,
            selected: z = !1,
            unread: W = !1,
            mediaState: K,
            unavailable: Y = !1,
            badge: q = 0,
            isMentionLowImportance: X,
            contextMenu: Q = M,
            draggable: J = !1,
            sorting: $ = !1,
            preloadOnClick: ee = !0,
            guildJoinRequestStatus: et,
            height: en,
            "aria-setsize": er,
            "aria-posinset": ei,
        } = e,
        { id: el, parentId: ea } = L,
        eo = null != (t = e.upperBadge) ? t : Y ? (0, Z.Ny)() : null != K ? (0, Z.Or)(K) : void 0,
        es = null != (n = e.lowerBadge) ? n : void 0;
    null == es && q > 0
        ? (es =
              null !=
              (l = (0, Z.Ne)(
                  q,
                  X ? p.TVs.colors.BACKGROUND_ACCENT.css : p.TVs.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ))
                  ? l
                  : void 0)
        : null == es && null != et && (es = null != (h = (0, Z.jt)({ guildJoinRequestStatus: et })) ? h : void 0);
    let ec = null != (k = e.lowerBadgeSize) ? k : { width: (0, p.OVM)(q) },
        [{ dragging: eu }, ed] = (0, o.c)({
            type: x.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == G || G();
                }),
                {
                    type: L.type,
                    nodeId: L.id,
                }
            ),
            end() {
                null == B || B(), (0, g.V1)(j.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ep = (0, c.Ie)(null != el ? el : N.lds, null != ea ? 2 : 1),
        [ef, eh] = i.useState(!1),
        eg = !$ && ef,
        [em, eb] = i.useState(!1),
        [ey, ev] = i.useState(!1),
        [eO] = i.useState(() => new d.sW(70, () => ev(!0)));
    i.useEffect(() => () => eO.cancel(), [eO]);
    let ej = i.useCallback(() => {
            if (null != F) return void (0, b.uL)(F, { state: D });
            (0, y.X)(el, { state: D });
        }, [el, F]),
        ex = i.useCallback(() => {
            if (null != F || null == H || Y || !ee) return;
            let e = (0, m.V)(H.id);
            null != e && f.Z.preload(H.id, e);
        }, [F, H, Y, ee]),
        eC = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(el)),
        eE = i.useCallback(
            (e) => {
                null == H || eC || Q(e, H);
            },
            [H, Q, eC],
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
        e_ = i.useCallback(
            (e) => {
                if (e) return void eO.delay();
                eO.cancel(), ev(!1);
            },
            [eO],
        ),
        eI = i.useCallback(
            (e) => {
                null == U || U(el, e);
            },
            [el, U],
        ),
        eP = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eZ =
            ey || em
                ? (0, r.jsx)(E.Z, {
                      guild: H,
                      show: ey,
                      active: z,
                      onAnimationStart: function () {
                          eb(ey);
                      },
                      onAnimationRest: function () {
                          ey || eb(!1);
                      },
                  })
                : (0, r.jsx)(p.aRk, {
                      selected: z,
                      children: (0, r.jsx)("div", {
                          ref: J
                              ? (e) => {
                                    ed(e);
                                }
                              : void 0,
                          "data-dnd-name": H.name,
                          "data-drop-hovering": ey,
                          children: (0, r.jsx)(
                              p.LYs,
                              R(
                                  w(
                                      {
                                          ariaLabel: T.intl.formatToPlainString(T.t["/uzRss"], {
                                              guildName: H.name,
                                              mentions: q,
                                          }),
                                          name: H.name,
                                          onClick: ej,
                                          onMouseEnter: function () {
                                              $ || eh(!0);
                                          },
                                          onMouseLeave: function () {
                                              $ || eh(!1);
                                          },
                                          onMouseDown: ex,
                                          onContextMenu: eE,
                                          onKeyDown: eS,
                                          icon: (0, v.EB)(H, 2 * eP, eg && V, !0),
                                          selected: z || eg,
                                      },
                                      ep,
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
        eN = eu
            ? (0, r.jsx)(S.OG, { children: (0, r.jsx)(I.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
                  style: { scale: null == en ? 1 : en },
                  className: a()(A.blobContainer, {
                      [A.sorting]: $,
                      [A.wobble]: ey,
                      [A.selected]: ey || z,
                  }),
                  "data-drop-hovering": ey,
                  children: (0, r.jsx)(p.aRk, {
                      selected: z,
                      upperBadge: eo,
                      lowerBadge: es,
                      lowerBadgeSize: ec,
                      children: eZ,
                  }),
              });
    return (0, r.jsxs)(P.H, {
        ref: eI,
        children: [
            (0, r.jsx)(C.Z, {
                hovered: !eu && eg,
                selected: !eu && z,
                unread: !eu && W,
                className: A.pill,
            }),
            (0, r.jsx)(_.Z, {
                guild: H,
                disabled: $,
                isDragging: eu,
                children: eN,
            }),
            J
                ? (0, r.jsx)(S.ZP, {
                      name: H.name,
                      targetNode: L,
                      onDragOverChanged: e_,
                  })
                : null,
        ],
    });
});
