n.d(t, {
    A: () => U,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(131346),
    o = n(353709),
    c = n(837381),
    u = n(607399),
    d = n(417597),
    p = n(451988),
    h = n(397927),
    g = n(308528),
    f = n(442433),
    m = n(817281),
    b = n(658128),
    A = n(976860),
    y = n(345942),
    O = n(260509),
    j = n(696451),
    x = n(711014),
    _ = n(676279),
    v = n(263715),
    E = n(941971),
    C = n(264409),
    S = n(531053),
    I = n(647668),
    N = n(107385),
    T = n(900848),
    P = n(65611),
    w = n(652215),
    R = n(985018),
    D = n(837021);

function L(e) {
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

function M(e, t) {
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
let G = {
    analyticsSource: {
        page: w.liQ.GUILD_CHANNEL,
        section: w.JJy.CHANNEL_LIST,
        object: w.ZSU.CHANNEL,
    },
};

function k(e, t) {
    (0, f.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("68587"),
            n.e("43600"),
            n.e("63379"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("21968"),
            n.e("35894"),
            n.e("50796"),
            n.e("11810"),
            n.e("8458"),
            n.e("39048"),
            n.e("36290"),
            n.e("59735"),
            n.e("54469"),
            n.e("70084"),
        ]).then(n.bind(n, 544676));
        return (n) =>
            (0, r.jsx)(
                e,
                M(L({}, n), {
                    guild: t,
                }),
            );
    });
}
let U = l.memo(function (e) {
    var t, n, i, f, U;
    let {
            guildNode: V,
            setRef: B,
            onDragStart: H,
            onDragEnd: F,
            route: Y,
            guild: K,
            animatable: W,
            selected: z = !1,
            unread: X = !1,
            mediaState: q,
            unavailable: J = !1,
            badge: Q = 0,
            isMentionLowImportance: Z,
            contextMenu: $ = k,
            draggable: ee = !1,
            sorting: et = !1,
            preloadOnClick: en = !0,
            guildJoinRequestStatus: er,
            height: el,
            "aria-setsize": ei,
            "aria-posinset": es,
        } = e,
        { id: ea, parentId: eo } = V,
        ec = null != (t = e.upperBadge) ? t : J ? (0, P.em)() : null != q ? (0, P.oi)(q) : void 0,
        eu = null != (n = e.lowerBadge) ? n : void 0;
    null == eu && Q > 0
        ? (eu =
              null !=
              (f = (0, P.wN)(
                  Q,
                  Z ? h.LU0.colors.BACKGROUND_MOD_STRONG.css : h.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ))
                  ? f
                  : void 0)
        : null == eu &&
          null != er &&
          (eu =
              null !=
              (U = (0, P.eW)({
                  guildJoinRequestStatus: er,
              }))
                  ? U
                  : void 0);
    let ed =
            null != (i = e.lowerBadgeSize)
                ? i
                : {
                      width: (0, h.o6S)(Q),
                  },
        [{ dragging: ep }, eh] = (0, a.i)({
            type: v.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == H || H();
                }),
                {
                    type: V.type,
                    nodeId: V.id,
                }
            ),
            end() {
                null == F || F(), (0, m.um)(x.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({
                dragging: e.isDragging(),
            }),
        }),
        eg = (0, c.Vd)(null != ea ? ea : w.dJq, null != eo ? 2 : 1),
        [ef, em] = l.useState(!1),
        eb = !et && ef,
        [eA, ey] = l.useState(!1),
        [eO, ej] = l.useState(!1),
        [ex] = l.useState(() => new p.J_(70, () => ej(!0))),
        e_ = (0, _.nr)() && !u.Fr;
    l.useEffect(() => () => ex.cancel(), [ex]);
    let ev = l.useCallback(() => {
            null != Y
                ? (0, A.pX)(Y, {
                      state: G,
                  })
                : (0, y.u)(ea, {
                      state: G,
                  });
        }, [ea, Y]),
        eE = l.useCallback(() => {
            if (null != Y || null == K || J || !en) return;
            let e = (0, b.W)(K.id);
            null != e && g.A.preload(K.id, e);
        }, [Y, K, J, en]),
        eC = (0, d.bG)([j.Ay], () => j.Ay.isCurrentUserGuest(ea)),
        eS = l.useCallback(
            (e) => {
                null == K || eC || $(e, K);
            },
            [K, $, eC],
        ),
        eI = l.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key && null != eo) {
                    var t;
                    null == (t = document.querySelector("[aria-owns=folder-items-".concat(eo, "]"))) || t.focus();
                }
            },
            [eo],
        ),
        eN = l.useCallback(
            (e) => {
                e ? ex.delay() : (ex.cancel(), ej(!1));
            },
            [ex],
        );

    function eT() {
        et || em(!0);
    }

    function eP() {
        et || em(!1);
    }
    let ew = l.useCallback(
            (e) => {
                null == B || B(ea, e);
            },
            [ea, B],
        ),
        eR = (0, h.rdh)(h.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == K) return null;
    let eD = (0, r.jsx)(C.A, {
            guild: K,
            show: eO,
            active: z,
            onAnimationStart: function () {
                ey(eO);
            },
            onAnimationRest: function () {
                eO || ey(!1);
            },
        }),
        eL = e_
            ? (0, r.jsx)(
                  h.jlP,
                  M(
                      L(
                          {
                              ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
                                  guildName: K.name,
                                  mentions: Q,
                              }),
                              name: K.name,
                              onClick: ev,
                              onMouseEnter: eT,
                              onMouseLeave: eP,
                              onMouseDown: eE,
                              onContextMenu: eS,
                              onKeyDown: eI,
                              icon: (0, O.Iv)(K, 2 * eR, eb && W, !0),
                              selected: z || eb,
                          },
                          eg,
                      ),
                      {
                          "aria-setsize": ei,
                          "aria-posinset": es,
                          "aria-selected": z,
                      },
                  ),
              )
            : (0, r.jsx)(h.Qk9, {
                  selected: z,
                  children: (0, r.jsx)("div", {
                      ref: ee
                          ? (e) => {
                                eh(e);
                            }
                          : void 0,
                      "data-dnd-name": K.name,
                      "data-drop-hovering": eO,
                      children: (0, r.jsx)(
                          h.jlP,
                          M(
                              L(
                                  {
                                      ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
                                          guildName: K.name,
                                          mentions: Q,
                                      }),
                                      name: K.name,
                                      onClick: ev,
                                      onMouseEnter: eT,
                                      onMouseLeave: eP,
                                      onMouseDown: eE,
                                      onContextMenu: eS,
                                      onKeyDown: eI,
                                      icon: (0, O.Iv)(K, 2 * eR, eb && W, !0),
                                      selected: z || eb,
                                  },
                                  eg,
                              ),
                              {
                                  "aria-setsize": ei,
                                  "aria-posinset": es,
                                  "aria-selected": z,
                              },
                          ),
                      ),
                  }),
              }),
        eM = eO || eA ? eD : eL,
        eG = (0, r.jsx)(S.g4, {
            children: (0, r.jsx)(N.A, {}),
        }),
        ek = e_
            ? (0, r.jsx)(o.animated.div, {
                  ref: ee
                      ? (e) => {
                            eh(e);
                        }
                      : void 0,
                  "data-dnd-name": K.name,
                  style: {
                      scale: null == el ? 1 : el,
                  },
                  "data-drop-hovering": eO,
                  className: s()(D.rN, {
                      [D.p9]: et,
                      [D.oR]: eO,
                      [D.wH]: eO || z,
                  }),
                  children: (0, r.jsx)(h.Qk9, {
                      selected: !0,
                      upperBadge: ec,
                      lowerBadge: eu,
                      lowerBadgeSize: ed,
                      children: eM,
                  }),
              })
            : (0, r.jsx)(o.animated.div, {
                  style: {
                      scale: null == el ? 1 : el,
                  },
                  className: s()(D.rN, {
                      [D.p9]: et,
                      [D.oR]: eO,
                      [D.wH]: eO || z,
                  }),
                  "data-drop-hovering": eO,
                  children: (0, r.jsx)(h.Qk9, {
                      selected: z,
                      upperBadge: ec,
                      lowerBadge: eu,
                      lowerBadgeSize: ed,
                      children: eM,
                  }),
              });
    return (0, r.jsxs)(T.c, {
        ref: ew,
        children: [
            (0, r.jsx)(E.A, {
                hovered: !ep && eb,
                selected: !ep && z,
                unread: !ep && X,
                className: D.Io,
            }),
            (0, r.jsx)(I.A, {
                guild: K,
                disabled: et,
                isDragging: ep,
                children: ep ? eG : ek,
            }),
            ee
                ? (0, r.jsx)(S.Ay, {
                      name: K.name,
                      targetNode: V,
                      onDragOverChanged: eN,
                  })
                : null,
        ],
    });
});
