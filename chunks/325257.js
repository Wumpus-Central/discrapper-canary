n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(562075),
    a = n(481752),
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
    j = n(727258),
    S = n(276952),
    E = n(249792),
    x = n(40153),
    P = n(593618),
    I = n(252686),
    w = n(682662),
    N = n(674552),
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
        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('49286'), n.e('32652'), n.e('6850'), n.e('58227'), n.e('54408'), n.e('80728'), n.e('50629'), n.e('56534'), n.e('87154'), n.e('33213'), n.e('40407')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, D(R({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, f, M;
    let { guildNode: U, setRef: G, onDragStart: B, onDragEnd: V, route: H, guild: F, animatable: z, selected: W = !1, unread: Y = !1, mediaState: K, unavailable: q = !1, badge: Q = 0, isMentionLowImportance: X, contextMenu: J = k, draggable: $ = !1, sorting: ee = !1, preloadOnClick: et = !0, guildJoinRequestStatus: en, height: er, 'aria-setsize': ei, 'aria-posinset': el } = e,
        { id: eo, parentId: es } = U,
        ea = (0, b.Q3)('GuildItem'),
        ec = null != (t = e.upperBadge) ? t : q ? (0, N.Ny)() : null != K ? (0, N.Or)(K) : void 0,
        eu = null != (n = e.lowerBadge) ? n : void 0;
    null == eu && Q > 0 ? (eu = null != (l = (0, N.Ne)(Q, X ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == eu && null != en && (eu = null != (f = (0, N.jt)({ guildJoinRequestStatus: en })) ? f : void 0);
    let ed = null != (M = e.lowerBadgeSize) ? M : { width: (0, h.OVM)(Q) },
        [{ dragging: eh }, ep] = (0, s.c)({
            type: j.eD.GUILD,
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
                null == V || V(), (0, g.V1)(C.ZP.getCompatibleGuildFolders());
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
    let ej = i.useCallback(() => {
            if (null != H) return void (0, _.uL)(H, { state: L });
            (0, v.X)(eo, { state: L });
        }, [eo, H]),
        eS = i.useCallback(() => {
            if (null != H || null == F || q || !et) return;
            let e = (0, y.V)(F.id);
            null != e && p.Z.preload(F.id, e);
        }, [H, F, q, et]),
        eE = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(eo)),
        ex = i.useCallback(
            (e) => {
                null == F || eE || J(e, F);
            },
            [F, J, eE]
        ),
        eP = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != es) {
                    var t;
                    null == (t = document.querySelector('[aria-owns=folder-items-'.concat(es, ']'))) || t.focus();
                }
            },
            [es]
        ),
        eI = i.useCallback(
            (e) => {
                if (e) return void eC.delay();
                eC.cancel(), eO(!1);
            },
            [eC]
        ),
        ew = i.useCallback(
            (e) => {
                null == G || G(eo, e);
            },
            [eo, G]
        ),
        eN = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == F) return null;
    let eZ =
            ev || ey
                ? (0, r.jsx)(E.Z, {
                      guild: F,
                      show: ev,
                      active: W,
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
                                  ariaLabel: T.intl.formatToPlainString(T.t['/uzRsr'], {
                                      guildName: F.toString(),
                                      mentions: Q
                                  }),
                                  name: F.toString(),
                                  onClick: ej,
                                  onMouseEnter: function () {
                                      ee || em(!0);
                                  },
                                  onMouseLeave: function () {
                                      ee || em(!1);
                                  },
                                  onMouseDown: eS,
                                  onContextMenu: ex,
                                  onKeyDown: eP,
                                  icon: F.getIconURL(2 * eN, eb && z, ea),
                                  selected: W || eb
                              },
                              ef
                          ),
                          {
                              'aria-setsize': ei,
                              'aria-posinset': el,
                              'aria-selected': W
                          }
                      )
                  ),
        eT = eh
            ? (0, r.jsx)(x.OG, { children: (0, r.jsx)(I.Z, {}) })
            : (0, r.jsx)(a.animated.div, {
                  ref: $
                      ? (e) => {
                            ep(e);
                        }
                      : void 0,
                  'data-dnd-name': F.toString(),
                  style: { scale: null == er ? 1 : er },
                  'data-drop-hovering': ev,
                  className: o()(A.blobContainer, {
                      [A.sorting]: ee,
                      [A.wobble]: ev,
                      [A.selected]: ev || W
                  }),
                  children: (0, r.jsx)(h.aRk, {
                      selected: !!ea || ev || W || eb,
                      upperBadge: ec,
                      lowerBadge: eu,
                      lowerBadgeSize: ed,
                      children: eZ
                  })
              });
    return (0, r.jsxs)(w.H, {
        ref: ew,
        children: [
            (0, r.jsx)(S.Z, {
                hovered: !eh && eb,
                selected: !eh && W,
                unread: !eh && Y,
                className: A.pill
            }),
            (0, r.jsx)(P.Z, {
                guild: F,
                disabled: ee,
                isDragging: eh,
                children: eT
            }),
            $
                ? (0, r.jsx)(x.ZP, {
                      name: F.name,
                      targetNode: U,
                      onDragOverChanged: eI
                  })
                : null
        ]
    });
});
