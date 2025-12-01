n.d(t, { Z: () => M }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(891371),
    s = n(666917),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    f = n(481060),
    p = n(493683),
    h = n(239091),
    g = n(153867),
    m = n(35225),
    b = n(703656),
    _ = n(769654),
    y = n(601964),
    O = n(271383),
    v = n(771845),
    j = n(727258),
    x = n(276952),
    C = n(249792),
    E = n(40153),
    S = n(593618),
    I = n(252686),
    P = n(682662),
    N = n(674552),
    Z = n(981631),
    w = n(388032),
    T = n(534175);
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
function L(e, t) {
    (0, h.jW)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("70363"),
            n.e("36599"),
            n.e("7654"),
            n.e("76692"),
            n.e("8271"),
            n.e("15851"),
            n.e("51453"),
            n.e("845"),
            n.e("86736"),
            n.e("6850"),
            n.e("58227"),
            n.e("44686"),
            n.e("384"),
            n.e("22516"),
            n.e("87154"),
            n.e("33213"),
            n.e("73709"),
        ]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, R(A({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, h, M;
    let {
            guildNode: k,
            setRef: G,
            onDragStart: U,
            onDragEnd: B,
            route: F,
            guild: V,
            animatable: H,
            selected: W = !1,
            unread: z = !1,
            mediaState: K,
            unavailable: Y = !1,
            badge: q = 0,
            isMentionLowImportance: Q,
            contextMenu: X = L,
            draggable: J = !1,
            sorting: $ = !1,
            preloadOnClick: ee = !0,
            guildJoinRequestStatus: et,
            height: en,
            "aria-setsize": er,
            "aria-posinset": ei,
        } = e,
        { id: el, parentId: eo } = k,
        ea = null != (t = e.upperBadge) ? t : Y ? (0, N.Ny)() : null != K ? (0, N.Or)(K) : void 0,
        es = null != (n = e.lowerBadge) ? n : void 0;
    null == es && q > 0
        ? (es =
              null != (l = (0, N.Ne)(q, Q ? f.TVs.colors.BACKGROUND_ACCENT.css : f.TVs.colors.STATUS_DANGER.css))
                  ? l
                  : void 0)
        : null == es && null != et && (es = null != (h = (0, N.jt)({ guildJoinRequestStatus: et })) ? h : void 0);
    let ec = null != (M = e.lowerBadgeSize) ? M : { width: (0, f.OVM)(q) },
        [{ dragging: eu }, ed] = (0, a.c)({
            type: j.eD.GUILD,
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
                null == B || B(), (0, g.V1)(v.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ef = (0, c.Ie)(null != el ? el : Z.lds, null != eo ? 2 : 1),
        [ep, eh] = i.useState(!1),
        eg = !$ && ep,
        [em, eb] = i.useState(!1),
        [e_, ey] = i.useState(!1),
        [eO] = i.useState(() => new d.sW(70, () => ey(!0)));
    i.useEffect(() => () => eO.cancel(), [eO]);
    let ev = i.useCallback(() => {
            if (null != F) return void (0, b.uL)(F, { state: D });
            (0, _.X)(el, { state: D });
        }, [el, F]),
        ej = i.useCallback(() => {
            if (null != F || null == V || Y || !ee) return;
            let e = (0, m.V)(V.id);
            null != e && p.Z.preload(V.id, e);
        }, [F, V, Y, ee]),
        ex = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(el)),
        eC = i.useCallback(
            (e) => {
                null == V || ex || X(e, V);
            },
            [V, X, ex],
        ),
        eE = i.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key && null != eo) {
                    var t;
                    null == (t = document.querySelector("[aria-owns=folder-items-".concat(eo, "]"))) || t.focus();
                }
            },
            [eo],
        ),
        eS = i.useCallback(
            (e) => {
                if (e) return void eO.delay();
                eO.cancel(), ey(!1);
            },
            [eO],
        ),
        eI = i.useCallback(
            (e) => {
                null == G || G(el, e);
            },
            [el, G],
        ),
        eP = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == V) return null;
    let eN =
            e_ || em
                ? (0, r.jsx)(C.Z, {
                      guild: V,
                      show: e_,
                      active: W,
                      onAnimationStart: function () {
                          eb(e_);
                      },
                      onAnimationRest: function () {
                          e_ || eb(!1);
                      },
                  })
                : (0, r.jsx)(
                      f.LYs,
                      R(
                          A(
                              {
                                  ariaLabel: w.intl.formatToPlainString(w.t["/uzRss"], {
                                      guildName: V.name,
                                      mentions: q,
                                  }),
                                  name: V.name,
                                  onClick: ev,
                                  onMouseEnter: function () {
                                      $ || eh(!0);
                                  },
                                  onMouseLeave: function () {
                                      $ || eh(!1);
                                  },
                                  onMouseDown: ej,
                                  onContextMenu: eC,
                                  onKeyDown: eE,
                                  icon: (0, y.EB)(V, 2 * eP, eg && H, !0),
                                  selected: W || eg,
                              },
                              ef,
                          ),
                          {
                              "aria-setsize": er,
                              "aria-posinset": ei,
                              "aria-selected": W,
                          },
                      ),
                  ),
        eZ = eu
            ? (0, r.jsx)(E.OG, { children: (0, r.jsx)(I.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
                  ref: J
                      ? (e) => {
                            ed(e);
                        }
                      : void 0,
                  "data-dnd-name": V.name,
                  style: { scale: null == en ? 1 : en },
                  "data-drop-hovering": e_,
                  className: o()(T.blobContainer, {
                      [T.sorting]: $,
                      [T.wobble]: e_,
                      [T.selected]: e_ || W,
                  }),
                  children: (0, r.jsx)(f.aRk, {
                      selected: !0,
                      upperBadge: ea,
                      lowerBadge: es,
                      lowerBadgeSize: ec,
                      children: eN,
                  }),
              });
    return (0, r.jsxs)(P.H, {
        ref: eI,
        children: [
            (0, r.jsx)(x.Z, {
                hovered: !eu && eg,
                selected: !eu && W,
                unread: !eu && z,
                className: T.pill,
            }),
            (0, r.jsx)(S.Z, {
                guild: V,
                disabled: $,
                isDragging: eu,
                children: eZ,
            }),
            J
                ? (0, r.jsx)(E.ZP, {
                      name: V.name,
                      targetNode: k,
                      onDragOverChanged: eS,
                  })
                : null,
        ],
    });
});
