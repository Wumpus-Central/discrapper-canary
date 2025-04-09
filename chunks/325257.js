n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(999153),
    s = n(200100),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    p = n(481060),
    h = n(493683),
    f = n(239091),
    g = n(153867),
    m = n(377171),
    b = n(540059),
    _ = n(35225),
    y = n(703656),
    v = n(769654),
    O = n(271383),
    j = n(771845),
    C = n(727258),
    x = n(276952),
    S = n(249792),
    P = n(40153),
    I = n(593618),
    N = n(252686),
    E = n(682662),
    Z = n(674552),
    w = n(981631),
    T = n(388032),
    A = n(335426);
function D(e) {
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
let L = {
    analyticsSource: {
        page: w.ZY5.GUILD_CHANNEL,
        section: w.jXE.CHANNEL_LIST,
        object: w.qAy.CHANNEL
    }
};
function k(e, t) {
    (0, f.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('9710'), n.e('7654'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('55666'), n.e('16114'), n.e('58227'), n.e('54408'), n.e('35093'), n.e('21881'), n.e('69760'), n.e('33213'), n.e('49986')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, R(D({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, f, M;
    let { guildNode: G, setRef: B, onDragStart: U, onDragEnd: W, route: V, guild: H, animatable: F, selected: z = !1, unread: Y = !1, mediaState: q, unavailable: K = !1, badge: Q = 0, isMentionLowImportance: J, contextMenu: X = k, draggable: $ = !1, sorting: ee = !1, preloadOnClick: et = !0, guildJoinRequestStatus: en, height: er } = e,
        { id: ei, parentId: el } = G,
        eo = (0, b.Q3)('GuildItem'),
        ea = null != (t = e.upperBadge) ? t : K ? (0, Z.Ny)() : null != q ? (0, Z.Or)(q) : void 0,
        es = null != (n = e.lowerBadge) ? n : void 0;
    null == es && Q > 0 ? (es = null != (l = (0, Z.Ne)(Q, J ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == es && null != en && (es = null != (f = (0, Z.jt)({ guildJoinRequestStatus: en })) ? f : void 0);
    let ec = null != (M = e.lowerBadgeSize) ? M : { width: (0, p.OVM)(Q) },
        [{ dragging: eu }, ed] = (0, a.c)({
            type: C.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == U || U();
                }),
                {
                    type: G.type,
                    nodeId: G.id
                }
            ),
            end() {
                null == W || W(), (0, g.V1)(j.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        ep = (0, c.Ie)(null != ei ? ei : w.lds),
        [eh, ef] = i.useState(!1),
        eg = !ee && eh,
        [em, eb] = i.useState(!1),
        [e_, ey] = i.useState(!1),
        [ev] = i.useState(() => new d.sW(70, () => ey(!0)));
    i.useEffect(() => () => ev.cancel(), [ev]);
    let eO = i.useCallback(() => {
            if (null != V) return void (0, y.uL)(V, { state: L });
            (0, v.X)(ei, { state: L });
        }, [ei, V]),
        ej = i.useCallback(() => {
            if (null != V || null == H || K || !et) return;
            let e = (0, _.V)(H.id);
            null != e && h.Z.preload(H.id, e);
        }, [V, H, K, et]),
        eC = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(ei)),
        ex = i.useCallback(
            (e) => {
                null == H || eC || X(e, H);
            },
            [H, X, eC]
        ),
        eS = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != el) {
                    var t;
                    null == (t = document.querySelector('[aria-owns=folder-items-'.concat(el, ']'))) || t.focus();
                }
            },
            [el]
        ),
        eP = i.useCallback(
            (e) => {
                if (e) return void ev.delay();
                ev.cancel(), ey(!1);
            },
            [ev]
        ),
        eI = i.useCallback(
            (e) => {
                null == B || B(ei, e);
            },
            [ei, B]
        ),
        eN = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eE =
            e_ || em
                ? (0, r.jsx)(S.Z, {
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
                      p.LYs,
                      R(
                          D(
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
                                  onMouseDown: ej,
                                  onContextMenu: ex,
                                  onKeyDown: eS,
                                  icon: H.getIconURL(2 * eN, eg && F, eo),
                                  selected: z || eg
                              },
                              ep
                          ),
                          { role: 'treeitem' }
                      )
                  ),
        eZ = eu
            ? (0, r.jsx)(P.OG, { children: (0, r.jsx)(N.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
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
                  children: (0, r.jsx)(p.aRk, {
                      selected: !!eo || e_ || z || eg,
                      upperBadge: ea,
                      lowerBadge: es,
                      lowerBadgeSize: ec,
                      children: eE
                  })
              });
    return (0, r.jsxs)(E.H, {
        ref: eI,
        children: [
            (0, r.jsx)(x.Z, {
                hovered: !eu && eg,
                selected: !eu && z,
                unread: !eu && Y,
                className: A.pill
            }),
            (0, r.jsx)(I.Z, {
                guild: H,
                disabled: ee,
                isDragging: eu,
                children: eZ
            }),
            $
                ? (0, r.jsx)(P.ZP, {
                      name: H.name,
                      targetNode: G,
                      onDragOverChanged: eP
                  })
                : null
        ]
    });
});
