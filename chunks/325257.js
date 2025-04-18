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
    y = n(35225),
    _ = n(703656),
    v = n(769654),
    O = n(271383),
    C = n(771845),
    S = n(727258),
    j = n(276952),
    E = n(249792),
    x = n(40153),
    I = n(593618),
    N = n(252686),
    P = n(682662),
    w = n(674552),
    Z = n(981631),
    T = n(388032),
    A = n(815537);
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
        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('50329'), n.e('6850'), n.e('32652'), n.e('58227'), n.e('54408'), n.e('97502'), n.e('56534'), n.e('87154'), n.e('33213'), n.e('71110')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, D(R({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, f, M;
    let { guildNode: U, setRef: G, onDragStart: B, onDragEnd: W, route: V, guild: H, animatable: F, selected: z = !1, unread: Y = !1, mediaState: K, unavailable: q = !1, badge: Q = 0, isMentionLowImportance: X, contextMenu: J = k, draggable: $ = !1, sorting: ee = !1, preloadOnClick: et = !0, guildJoinRequestStatus: en, height: er, 'aria-setsize': ei, 'aria-posinset': el } = e,
        { id: eo, parentId: es } = U,
        ea = (0, b.Q3)('GuildItem'),
        ec = null != (t = e.upperBadge) ? t : q ? (0, w.Ny)() : null != K ? (0, w.Or)(K) : void 0,
        eu = null != (n = e.lowerBadge) ? n : void 0;
    null == eu && Q > 0 ? (eu = null != (l = (0, w.Ne)(Q, X ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == eu && null != en && (eu = null != (f = (0, w.jt)({ guildJoinRequestStatus: en })) ? f : void 0);
    let ed = null != (M = e.lowerBadgeSize) ? M : { width: (0, h.OVM)(Q) },
        [{ dragging: eh }, ep] = (0, s.c)({
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
        ef = (0, c.Ie)(null != eo ? eo : Z.lds, null != es ? 2 : 1),
        [eg, em] = i.useState(!1),
        eb = !ee && eg,
        [ey, e_] = i.useState(!1),
        [ev, eO] = i.useState(!1),
        [eC] = i.useState(() => new d.sW(70, () => eO(!0)));
    i.useEffect(() => () => eC.cancel(), [eC]);
    let eS = i.useCallback(() => {
            if (null != V) return void (0, _.uL)(V, { state: L });
            (0, v.X)(eo, { state: L });
        }, [eo, V]),
        ej = i.useCallback(() => {
            if (null != V || null == H || q || !et) return;
            let e = (0, y.V)(H.id);
            null != e && p.Z.preload(H.id, e);
        }, [V, H, q, et]),
        eE = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(eo)),
        ex = i.useCallback(
            (e) => {
                null == H || eE || J(e, H);
            },
            [H, J, eE]
        ),
        eI = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != es) {
                    var t;
                    null == (t = document.querySelector('[aria-owns=folder-items-'.concat(es, ']'))) || t.focus();
                }
            },
            [es]
        ),
        eN = i.useCallback(
            (e) => {
                if (e) return void eC.delay();
                eC.cancel(), eO(!1);
            },
            [eC]
        ),
        eP = i.useCallback(
            (e) => {
                null == G || G(eo, e);
            },
            [eo, G]
        ),
        ew = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eZ =
            ev || ey
                ? (0, r.jsx)(E.Z, {
                      guild: H,
                      show: ev,
                      active: z,
                      onAnimationStart: function () {
                          e_(ev);
                      },
                      onAnimationRest: function () {
                          ev || e_(!1);
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
                                  onClick: eS,
                                  onMouseEnter: function () {
                                      ee || em(!0);
                                  },
                                  onMouseLeave: function () {
                                      ee || em(!1);
                                  },
                                  onMouseDown: ej,
                                  onContextMenu: ex,
                                  onKeyDown: eI,
                                  icon: H.getIconURL(2 * ew, eb && F, ea),
                                  selected: z || eb
                              },
                              ef
                          ),
                          {
                              'aria-setsize': ei,
                              'aria-posinset': el,
                              'aria-selected': z
                          }
                      )
                  ),
        eT = eh
            ? (0, r.jsx)(x.OG, { children: (0, r.jsx)(N.Z, {}) })
            : (0, r.jsx)(a.animated.div, {
                  ref: $
                      ? (e) => {
                            ep(e);
                        }
                      : void 0,
                  'data-dnd-name': H.toString(),
                  style: { scale: null == er ? 1 : er },
                  'data-drop-hovering': ev,
                  className: o()(A.blobContainer, {
                      [A.sorting]: ee,
                      [A.wobble]: ev,
                      [A.selected]: ev || z
                  }),
                  children: (0, r.jsx)(h.aRk, {
                      selected: !!ea || ev || z || eb,
                      upperBadge: ec,
                      lowerBadge: eu,
                      lowerBadgeSize: ed,
                      children: eZ
                  })
              });
    return (0, r.jsxs)(P.H, {
        ref: eP,
        children: [
            (0, r.jsx)(j.Z, {
                hovered: !eh && eb,
                selected: !eh && z,
                unread: !eh && Y,
                className: A.pill
            }),
            (0, r.jsx)(I.Z, {
                guild: H,
                disabled: ee,
                isDragging: eh,
                children: eT
            }),
            $
                ? (0, r.jsx)(x.ZP, {
                      name: H.name,
                      targetNode: U,
                      onDragOverChanged: eN
                  })
                : null
        ]
    });
});
