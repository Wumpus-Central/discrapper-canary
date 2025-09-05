n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(574981),
    s = n(261616),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    p = n(481060),
    f = n(493683),
    h = n(239091),
    g = n(153867),
    m = n(377171),
    b = n(35225),
    O = n(703656),
    y = n(769654),
    _ = n(601964),
    v = n(271383),
    j = n(771845),
    x = n(727258),
    C = n(276952),
    E = n(249792),
    S = n(40153),
    P = n(593618),
    I = n(252686),
    N = n(682662),
    Z = n(674552),
    w = n(981631),
    T = n(388032),
    A = n(857668);
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
        page: w.ZY5.GUILD_CHANNEL,
        section: w.jXE.CHANNEL_LIST,
        object: w.qAy.CHANNEL,
    },
};
function L(e, t) {
    (0, h.jW)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("1806"),
            n.e("36599"),
            n.e("60962"),
            n.e("58175"),
            n.e("55616"),
            n.e("7654"),
            n.e("44156"),
            n.e("8360"),
            n.e("6850"),
            n.e("58227"),
            n.e("54408"),
            n.e("90746"),
            n.e("54052"),
            n.e("56534"),
            n.e("87154"),
            n.e("33213"),
            n.e("26819"),
        ]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, D(R({}, n), { guild: t }));
    });
}
let k = i.memo(function (e) {
    var t, n, l, h, k;
    let {
            guildNode: U,
            setRef: G,
            onDragStart: B,
            onDragEnd: V,
            route: F,
            guild: H,
            animatable: z,
            selected: W = !1,
            unread: K = !1,
            mediaState: Y,
            unavailable: q = !1,
            badge: X = 0,
            isMentionLowImportance: Q,
            contextMenu: J = L,
            draggable: $ = !1,
            sorting: ee = !1,
            preloadOnClick: et = !0,
            guildJoinRequestStatus: en,
            height: er,
            "aria-setsize": ei,
            "aria-posinset": el,
        } = e,
        { id: eo, parentId: ea } = U,
        es = null != (t = e.upperBadge) ? t : q ? (0, Z.Ny)() : null != Y ? (0, Z.Or)(Y) : void 0,
        ec = null != (n = e.lowerBadge) ? n : void 0;
    null == ec && X > 0
        ? (ec = null != (l = (0, Z.Ne)(X, Q ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0)
        : null == ec && null != en && (ec = null != (h = (0, Z.jt)({ guildJoinRequestStatus: en })) ? h : void 0);
    let eu = null != (k = e.lowerBadgeSize) ? k : { width: (0, p.OVM)(X) },
        [{ dragging: ed }, ep] = (0, a.c)({
            type: x.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == B || B();
                }),
                {
                    type: U.type,
                    nodeId: U.id,
                }
            ),
            end() {
                null == V || V(), (0, g.V1)(j.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ef = (0, c.Ie)(null != eo ? eo : w.lds, null != ea ? 2 : 1),
        [eh, eg] = i.useState(!1),
        em = !ee && eh,
        [eb, eO] = i.useState(!1),
        [ey, e_] = i.useState(!1),
        [ev] = i.useState(() => new d.sW(70, () => e_(!0)));
    i.useEffect(() => () => ev.cancel(), [ev]);
    let ej = i.useCallback(() => {
            if (null != F) return void (0, O.uL)(F, { state: M });
            (0, y.X)(eo, { state: M });
        }, [eo, F]),
        ex = i.useCallback(() => {
            if (null != F || null == H || q || !et) return;
            let e = (0, b.V)(H.id);
            null != e && f.Z.preload(H.id, e);
        }, [F, H, q, et]),
        eC = (0, u.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(eo)),
        eE = i.useCallback(
            (e) => {
                null == H || eC || J(e, H);
            },
            [H, J, eC],
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
        eP = i.useCallback(
            (e) => {
                if (e) return void ev.delay();
                ev.cancel(), e_(!1);
            },
            [ev],
        ),
        eI = i.useCallback(
            (e) => {
                null == G || G(eo, e);
            },
            [eo, G],
        ),
        eN = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eZ =
            ey || eb
                ? (0, r.jsx)(E.Z, {
                      guild: H,
                      show: ey,
                      active: W,
                      onAnimationStart: function () {
                          eO(ey);
                      },
                      onAnimationRest: function () {
                          ey || eO(!1);
                      },
                  })
                : (0, r.jsx)(
                      p.LYs,
                      D(
                          R(
                              {
                                  ariaLabel: T.intl.formatToPlainString(T.t["/uzRsr"], {
                                      guildName: H.name,
                                      mentions: X,
                                  }),
                                  name: H.name,
                                  onClick: ej,
                                  onMouseEnter: function () {
                                      ee || eg(!0);
                                  },
                                  onMouseLeave: function () {
                                      ee || eg(!1);
                                  },
                                  onMouseDown: ex,
                                  onContextMenu: eE,
                                  onKeyDown: eS,
                                  icon: (0, _.EB)(H, 2 * eN, em && z, !0),
                                  selected: W || em,
                              },
                              ef,
                          ),
                          {
                              "aria-setsize": ei,
                              "aria-posinset": el,
                              "aria-selected": W,
                          },
                      ),
                  ),
        ew = ed
            ? (0, r.jsx)(S.OG, { children: (0, r.jsx)(I.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
                  ref: $
                      ? (e) => {
                            ep(e);
                        }
                      : void 0,
                  "data-dnd-name": H.name,
                  style: { scale: null == er ? 1 : er },
                  "data-drop-hovering": ey,
                  className: o()(A.blobContainer, {
                      [A.sorting]: ee,
                      [A.wobble]: ey,
                      [A.selected]: ey || W,
                  }),
                  children: (0, r.jsx)(p.aRk, {
                      selected: !0,
                      upperBadge: es,
                      lowerBadge: ec,
                      lowerBadgeSize: eu,
                      children: eZ,
                  }),
              });
    return (0, r.jsxs)(N.H, {
        ref: eI,
        children: [
            (0, r.jsx)(C.Z, {
                hovered: !ed && em,
                selected: !ed && W,
                unread: !ed && K,
                className: A.pill,
            }),
            (0, r.jsx)(P.Z, {
                guild: H,
                disabled: ee,
                isDragging: ed,
                children: ew,
            }),
            $
                ? (0, r.jsx)(S.ZP, {
                      name: H.name,
                      targetNode: U,
                      onDragOverChanged: eP,
                  })
                : null,
        ],
    });
});
