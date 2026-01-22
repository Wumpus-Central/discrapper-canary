n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(131346),
    o = n(432022),
    c = n(837381),
    u = n(417597),
    d = n(451988),
    f = n(397927),
    p = n(308528),
    h = n(442433),
    b = n(817281),
    g = n(658128),
    m = n(976860),
    A = n(345942),
    y = n(260509),
    O = n(696451),
    j = n(711014),
    v = n(263715),
    x = n(941971),
    E = n(264409),
    _ = n(531053),
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
    (0, h.L3)(e, async () => {
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
            n.e("14360"),
            n.e("59735"),
            n.e("54469"),
            n.e("91838"),
        ]).then(n.bind(n, 544676));
        return (n) => (0, r.jsx)(e, D(R({}, n), { guild: t }));
    });
}
let G = l.memo(function (e) {
    var t, n, i, h, G;
    let {
            guildNode: k,
            setRef: U,
            onDragStart: V,
            onDragEnd: F,
            route: H,
            guild: B,
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
        { id: ei, parentId: ea } = k,
        es = null != (t = e.upperBadge) ? t : q ? (0, N.em)() : null != Y ? (0, N.oi)(Y) : void 0,
        eo = null != (n = e.lowerBadge) ? n : void 0;
    null == eo && X > 0
        ? (eo =
              null !=
              (h = (0, N.wN)(
                  X,
                  J ? f.LU0.colors.BACKGROUND_MOD_STRONG.css : f.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ))
                  ? h
                  : void 0)
        : null == eo && null != et && (eo = null != (G = (0, N.eW)({ guildJoinRequestStatus: et })) ? G : void 0);
    let ec = null != (i = e.lowerBadgeSize) ? i : { width: (0, f.o6S)(X) },
        [{ dragging: eu }, ed] = (0, s.i)({
            type: v.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == V || V();
                }),
                {
                    type: k.type,
                    nodeId: k.id,
                }
            ),
            end() {
                null == F || F(), (0, b.um)(j.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ef = (0, c.Vd)(null != ei ? ei : T.dJq, null != ea ? 2 : 1),
        [ep, eh] = l.useState(!1),
        eb = !$ && ep,
        [eg, em] = l.useState(!1),
        [eA, ey] = l.useState(!1),
        [eO] = l.useState(() => new d.J_(70, () => ey(!0)));
    l.useEffect(() => () => eO.cancel(), [eO]);
    let ej = l.useCallback(() => {
            null != H ? (0, m.pX)(H, { state: M }) : (0, A.u)(ei, { state: M });
        }, [ei, H]),
        ev = l.useCallback(() => {
            if (null != H || null == B || q || !ee) return;
            let e = (0, g.W)(B.id);
            null != e && p.A.preload(B.id, e);
        }, [H, B, q, ee]),
        ex = (0, u.bG)([O.Ay], () => O.Ay.isCurrentUserGuest(ei)),
        eE = l.useCallback(
            (e) => {
                null == B || ex || Q(e, B);
            },
            [B, Q, ex],
        ),
        e_ = l.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key && null != ea) {
                    var t;
                    null == (t = document.querySelector("[aria-owns=folder-items-".concat(ea, "]"))) || t.focus();
                }
            },
            [ea],
        ),
        eC = l.useCallback(
            (e) => {
                e ? eO.delay() : (eO.cancel(), ey(!1));
            },
            [eO],
        ),
        eS = l.useCallback(
            (e) => {
                null == U || U(ei, e);
            },
            [ei, U],
        ),
        eI = (0, f.rdh)(f.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == B) return null;
    let eN =
            eA || eg
                ? (0, r.jsx)(E.A, {
                      guild: B,
                      show: eA,
                      active: W,
                      onAnimationStart: function () {
                          em(eA);
                      },
                      onAnimationRest: function () {
                          eA || em(!1);
                      },
                  })
                : (0, r.jsx)(f.Qk9, {
                      selected: W,
                      children: (0, r.jsx)("div", {
                          ref: Z
                              ? (e) => {
                                    ed(e);
                                }
                              : void 0,
                          "data-dnd-name": B.name,
                          "data-drop-hovering": eA,
                          children: (0, r.jsx)(
                              f.jlP,
                              D(
                                  R(
                                      {
                                          ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
                                              guildName: B.name,
                                              mentions: X,
                                          }),
                                          name: B.name,
                                          onClick: ej,
                                          onMouseEnter: function () {
                                              $ || eh(!0);
                                          },
                                          onMouseLeave: function () {
                                              $ || eh(!1);
                                          },
                                          onMouseDown: ev,
                                          onContextMenu: eE,
                                          onKeyDown: e_,
                                          icon: (0, y.Iv)(B, 2 * eI, eb && K, !0),
                                          selected: W || eb,
                                      },
                                      ef,
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
            ? (0, r.jsx)(_.g4, { children: (0, r.jsx)(S.A, {}) })
            : (0, r.jsx)(o.animated.div, {
                  style: { scale: null == en ? 1 : en },
                  className: a()(w.rN, {
                      [w.p9]: $,
                      [w.oR]: eA,
                      [w.wH]: eA || W,
                  }),
                  "data-drop-hovering": eA,
                  children: (0, r.jsx)(f.Qk9, {
                      selected: W,
                      upperBadge: es,
                      lowerBadge: eo,
                      lowerBadgeSize: ec,
                      children: eN,
                  }),
              });
    return (0, r.jsxs)(I.c, {
        ref: eS,
        children: [
            (0, r.jsx)(x.A, {
                hovered: !eu && eb,
                selected: !eu && W,
                unread: !eu && z,
                className: w.Io,
            }),
            (0, r.jsx)(C.A, {
                guild: B,
                disabled: $,
                isDragging: eu,
                children: eT,
            }),
            Z
                ? (0, r.jsx)(_.Ay, {
                      name: B.name,
                      targetNode: k,
                      onDragOverChanged: eC,
                  })
                : null,
        ],
    });
});
