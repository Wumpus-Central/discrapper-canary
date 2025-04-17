n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(999153),
    a = n(200100),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    h = n(481060),
    p = n(493683),
    f = n(239091),
    g = n(153867),
    m = n(377171),
    b = n(540059),
    _ = n(35225),
    y = n(703656),
    v = n(769654),
    O = n(271383),
    C = n(771845),
    S = n(727258),
    j = n(276952),
    E = n(249792),
    x = n(40153),
    N = n(593618),
    I = n(252686),
    P = n(682662),
    w = n(674552),
    Z = n(981631),
    T = n(388032),
    A = n(335426);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let L = {
    analyticsSource: {
        page: Z.ZY5.GUILD_CHANNEL,
        section: Z.jXE.CHANNEL_LIST,
        object: Z.qAy.CHANNEL
    }
};
function k(e, t) {
    (0, f.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('32652'), n.e('58227'), n.e('54408'), n.e('10923'), n.e('56534'), n.e('87154'), n.e('33213'), n.e('40407')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, D(R({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, f, M;
    let { guildNode: U, setRef: G, onDragStart: B, onDragEnd: W, route: V, guild: H, animatable: F, selected: z = !1, unread: Y = !1, mediaState: K, unavailable: q = !1, badge: Q = 0, isMentionLowImportance: X, contextMenu: J = k, draggable: $ = !1, sorting: ee = !1, preloadOnClick: et = !0, guildJoinRequestStatus: en, height: er } = e,
        { id: ei, parentId: el } = U,
        eo = (0, b.Q3)('GuildItem'),
        es = null != (t = e.upperBadge) ? t : q ? (0, w.Ny)() : null != K ? (0, w.Or)(K) : void 0,
        ea = null != (n = e.lowerBadge) ? n : void 0;
    null == ea && Q > 0 ? (ea = null != (l = (0, w.Ne)(Q, X ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == ea && null != en && (ea = null != (f = (0, w.jt)({ guildJoinRequestStatus: en })) ? f : void 0);
    let ec = null != (M = e.lowerBadgeSize) ? M : { width: (0, h.OVM)(Q) },
        [{ dragging: eu }, ed] = (0, s.c)({
            type: S.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == B || B();
                }),
                {
                    type: U.type,
                    nodeId: U.id
                }
            ),
            end() {
                null == W || W(), (0, g.V1)(C.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        eh = (0, c.Ie)(null != ei ? ei : Z.lds),
        [ep, ef] = i.useState(!1),
        eg = !ee && ep,
        [em, eb] = i.useState(!1),
        [e_, ey] = i.useState(!1),
        [ev] = i.useState(() => new d.sW(70, () => ey(!0)));
    i.useEffect(() => () => ev.cancel(), [ev]);
    let eO = i.useCallback(() => {
            if (null != V) return void (0, y.uL)(V, { state: L });
            (0, v.X)(ei, { state: L });
        }, [ei, V]),
        eC = i.useCallback(() => {
            if (null != V || null == H || q || !et) return;
            let e = (0, _.V)(H.id);
            null != e && p.Z.preload(H.id, e);
        }, [V, H, q, et]),
        eS = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(ei)),
        ej = i.useCallback(
            (e) => {
                null == H || eS || J(e, H);
            },
            [H, J, eS]
        ),
        eE = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != el) {
                    var t;
                    null == (t = document.querySelector('[aria-owns=folder-items-'.concat(el, ']'))) || t.focus();
                }
            },
            [el]
        ),
        ex = i.useCallback(
            (e) => {
                if (e) return void ev.delay();
                ev.cancel(), ey(!1);
            },
            [ev]
        ),
        eN = i.useCallback(
            (e) => {
                null == G || G(ei, e);
            },
            [ei, G]
        ),
        eI = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eP =
            e_ || em
                ? (0, r.jsx)(E.Z, {
                      guild: H,
                      show: e_,
                      active: z,
                      onAnimationStart: function () {
                          eb(e_);
                      },
                      onAnimationRest: function () {
                          e_ || eb(!1);
                      }
                  })
                : (0, r.jsx)(
                      h.LYs,
                      D(
                          R(
                              {
                                  ariaLabel: T.NW.formatToPlainString(T.t['/uzRsr'], {
                                      guildName: H.toString(),
                                      mentions: Q
                                  }),
                                  name: H.toString(),
                                  onClick: eO,
                                  onMouseEnter: function () {
                                      ee || ef(!0);
                                  },
                                  onMouseLeave: function () {
                                      ee || ef(!1);
                                  },
                                  onMouseDown: eC,
                                  onContextMenu: ej,
                                  onKeyDown: eE,
                                  icon: H.getIconURL(2 * eI, eg && F, eo),
                                  selected: z || eg
                              },
                              eh
                          ),
                          { role: 'treeitem' }
                      )
                  ),
        ew = eu
            ? (0, r.jsx)(x.OG, { children: (0, r.jsx)(I.Z, {}) })
            : (0, r.jsx)(a.animated.div, {
                  ref: $
                      ? (e) => {
                            ed(e);
                        }
                      : void 0,
                  'data-dnd-name': H.toString(),
                  style: { scale: null == er ? 1 : er },
                  'data-drop-hovering': e_,
                  className: o()(A.blobContainer, {
                      [A.sorting]: ee,
                      [A.wobble]: e_,
                      [A.selected]: e_ || z
                  }),
                  children: (0, r.jsx)(h.aRk, {
                      selected: !!eo || e_ || z || eg,
                      upperBadge: es,
                      lowerBadge: ea,
                      lowerBadgeSize: ec,
                      children: eP
                  })
              });
    return (0, r.jsxs)(P.H, {
        ref: eN,
        children: [
            (0, r.jsx)(j.Z, {
                hovered: !eu && eg,
                selected: !eu && z,
                unread: !eu && Y,
                className: A.pill
            }),
            (0, r.jsx)(N.Z, {
                guild: H,
                disabled: ee,
                isDragging: eu,
                children: ew
            }),
            $
                ? (0, r.jsx)(x.ZP, {
                      name: H.name,
                      targetNode: U,
                      onDragOverChanged: ex
                  })
                : null
        ]
    });
});
