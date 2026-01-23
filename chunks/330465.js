n.d(t, {
    A: () => k,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(131346),
    o = n(108531),
    c = n(837381),
    u = n(417597),
    d = n(451988),
    p = n(397927),
    h = n(308528),
    f = n(442433),
    g = n(817281),
    m = n(658128),
    b = n(976860),
    A = n(345942),
    y = n(260509),
    _ = n(696451),
    O = n(711014),
    j = n(263715),
    v = n(941971),
    x = n(264409),
    E = n(531053),
    C = n(647668),
    S = n(107385),
    I = n(900848),
    N = n(65611),
    T = n(652215),
    P = n(985018),
    w = n(837021);

function R(e) {
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

function D(e, t) {
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
let M = {
    analyticsSource: {
        page: T.liQ.GUILD_CHANNEL,
        section: T.JJy.CHANNEL_LIST,
        object: T.ZSU.CHANNEL,
    },
};

function L(e, t) {
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
            n.e("8458"),
            n.e("47841"),
            n.e("36290"),
            n.e("59735"),
            n.e("54469"),
            n.e("7737"),
        ]).then(n.bind(n, 544676));
        return (n) =>
            (0, r.jsx)(
                e,
                D(R({}, n), {
                    guild: t,
                }),
            );
    });
}
let k = l.memo(function (e) {
    var t, n, i, f, k;
    let {
            guildNode: G,
            setRef: U,
            onDragStart: B,
            onDragEnd: V,
            route: F,
            guild: H,
            animatable: K,
            selected: W = !1,
            unread: z = !1,
            mediaState: Y,
            unavailable: q = !1,
            badge: X = 0,
            isMentionLowImportance: J,
            contextMenu: Q = L,
            draggable: Z = !1,
            sorting: $ = !1,
            preloadOnClick: ee = !0,
            guildJoinRequestStatus: et,
            height: en,
            "aria-setsize": er,
            "aria-posinset": el,
        } = e,
        { id: ei, parentId: es } = G,
        ea = null != (t = e.upperBadge) ? t : q ? (0, N.em)() : null != Y ? (0, N.oi)(Y) : void 0,
        eo = null != (n = e.lowerBadge) ? n : void 0;
    null == eo && X > 0
        ? (eo =
              null !=
              (f = (0, N.wN)(
                  X,
                  J ? p.LU0.colors.BACKGROUND_MOD_STRONG.css : p.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ))
                  ? f
                  : void 0)
        : null == eo &&
          null != et &&
          (eo =
              null !=
              (k = (0, N.eW)({
                  guildJoinRequestStatus: et,
              }))
                  ? k
                  : void 0);
    let ec =
            null != (i = e.lowerBadgeSize)
                ? i
                : {
                      width: (0, p.o6S)(X),
                  },
        [{ dragging: eu }, ed] = (0, a.i)({
            type: j.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == B || B();
                }),
                {
                    type: G.type,
                    nodeId: G.id,
                }
            ),
            end() {
                null == V || V(), (0, g.um)(O.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({
                dragging: e.isDragging(),
            }),
        }),
        ep = (0, c.Vd)(null != ei ? ei : T.dJq, null != es ? 2 : 1),
        [eh, ef] = l.useState(!1),
        eg = !$ && eh,
        [em, eb] = l.useState(!1),
        [eA, ey] = l.useState(!1),
        [e_] = l.useState(() => new d.J_(70, () => ey(!0)));
    l.useEffect(() => () => e_.cancel(), [e_]);
    let eO = l.useCallback(() => {
            null != F
                ? (0, b.pX)(F, {
                      state: M,
                  })
                : (0, A.u)(ei, {
                      state: M,
                  });
        }, [ei, F]),
        ej = l.useCallback(() => {
            if (null != F || null == H || q || !ee) return;
            let e = (0, m.W)(H.id);
            null != e && h.A.preload(H.id, e);
        }, [F, H, q, ee]),
        ev = (0, u.bG)([_.Ay], () => _.Ay.isCurrentUserGuest(ei)),
        ex = l.useCallback(
            (e) => {
                null == H || ev || Q(e, H);
            },
            [H, Q, ev],
        ),
        eE = l.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key && null != es) {
                    var t;
                    null == (t = document.querySelector("[aria-owns=folder-items-".concat(es, "]"))) || t.focus();
                }
            },
            [es],
        ),
        eC = l.useCallback(
            (e) => {
                e ? e_.delay() : (e_.cancel(), ey(!1));
            },
            [e_],
        ),
        eS = l.useCallback(
            (e) => {
                null == U || U(ei, e);
            },
            [ei, U],
        ),
        eI = (0, p.rdh)(p.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eN =
            eA || em
                ? (0, r.jsx)(x.A, {
                      guild: H,
                      show: eA,
                      active: W,
                      onAnimationStart: function () {
                          eb(eA);
                      },
                      onAnimationRest: function () {
                          eA || eb(!1);
                      },
                  })
                : (0, r.jsx)(p.Qk9, {
                      selected: W,
                      children: (0, r.jsx)("div", {
                          ref: Z
                              ? (e) => {
                                    ed(e);
                                }
                              : void 0,
                          "data-dnd-name": H.name,
                          "data-drop-hovering": eA,
                          children: (0, r.jsx)(
                              p.jlP,
                              D(
                                  R(
                                      {
                                          ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
                                              guildName: H.name,
                                              mentions: X,
                                          }),
                                          name: H.name,
                                          onClick: eO,
                                          onMouseEnter: function () {
                                              $ || ef(!0);
                                          },
                                          onMouseLeave: function () {
                                              $ || ef(!1);
                                          },
                                          onMouseDown: ej,
                                          onContextMenu: ex,
                                          onKeyDown: eE,
                                          icon: (0, y.Iv)(H, 2 * eI, eg && K, !0),
                                          selected: W || eg,
                                      },
                                      ep,
                                  ),
                                  {
                                      "aria-setsize": er,
                                      "aria-posinset": el,
                                      "aria-selected": W,
                                  },
                              ),
                          ),
                      }),
                  }),
        eT = eu
            ? (0, r.jsx)(E.g4, {
                  children: (0, r.jsx)(S.A, {}),
              })
            : (0, r.jsx)(o.animated.div, {
                  style: {
                      scale: null == en ? 1 : en,
                  },
                  className: s()(w.rN, {
                      [w.p9]: $,
                      [w.oR]: eA,
                      [w.wH]: eA || W,
                  }),
                  "data-drop-hovering": eA,
                  children: (0, r.jsx)(p.Qk9, {
                      selected: W,
                      upperBadge: ea,
                      lowerBadge: eo,
                      lowerBadgeSize: ec,
                      children: eN,
                  }),
              });
    return (0, r.jsxs)(I.c, {
        ref: eS,
        children: [
            (0, r.jsx)(v.A, {
                hovered: !eu && eg,
                selected: !eu && W,
                unread: !eu && z,
                className: w.Io,
            }),
            (0, r.jsx)(C.A, {
                guild: H,
                disabled: $,
                isDragging: eu,
                children: eT,
            }),
            Z
                ? (0, r.jsx)(E.Ay, {
                      name: H.name,
                      targetNode: G,
                      onDragOverChanged: eC,
                  })
                : null,
        ],
    });
});
