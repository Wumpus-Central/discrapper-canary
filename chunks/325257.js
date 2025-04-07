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
    y = n(35225),
    _ = n(703656),
    v = n(769654),
    O = n(271383),
    j = n(771845),
    x = n(727258),
    C = n(276952),
    S = n(249792),
    P = n(40153),
    I = n(593618),
    N = n(252686),
    Z = n(682662),
    w = n(674552),
    E = n(981631),
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
        page: E.ZY5.GUILD_CHANNEL,
        section: E.jXE.CHANNEL_LIST,
        object: E.qAy.CHANNEL
    }
};
function k(e, t) {
    (0, f.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('9710'), n.e('7654'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('55666'), n.e('16114'), n.e('58227'), n.e('44088'), n.e('39149'), n.e('21881'), n.e('69760'), n.e('33213'), n.e('96408')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, R(D({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, f, M;
    let { guildNode: G, setRef: B, onDragStart: U, onDragEnd: W, route: V, guild: F, animatable: H, selected: z = !1, unread: Y = !1, mediaState: q, unavailable: Q = !1, badge: K = 0, isMentionLowImportance: J, contextMenu: X = k, draggable: $ = !1, sorting: ee = !1, preloadOnClick: et = !0, guildJoinRequestStatus: en, height: er } = e,
        { id: ei, parentId: el } = G,
        eo = (0, b.Q3)('GuildItem'),
        ea = null != (t = e.upperBadge) ? t : Q ? (0, w.Ny)() : null != q ? (0, w.Or)(q) : void 0,
        es = null != (n = e.lowerBadge) ? n : void 0;
    null == es && K > 0 ? (es = null != (l = (0, w.Ne)(K, J ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == es && null != en && (es = null != (f = (0, w.jt)({ guildJoinRequestStatus: en })) ? f : void 0);
    let ec = null != (M = e.lowerBadgeSize) ? M : { width: (0, p.OVM)(K) },
        [{ dragging: eu }, ed] = (0, a.c)({
            type: x.eD.GUILD,
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
        ep = (0, c.Ie)(null != ei ? ei : E.lds),
        [eh, ef] = i.useState(!1),
        eg = !ee && eh,
        [em, eb] = i.useState(!1),
        [ey, e_] = i.useState(!1),
        [ev] = i.useState(() => new d.sW(70, () => e_(!0)));
    i.useEffect(() => () => ev.cancel(), [ev]);
    let eO = i.useCallback(() => {
            if (null != V) return void (0, _.uL)(V, { state: L });
            (0, v.X)(ei, { state: L });
        }, [ei, V]),
        ej = i.useCallback(() => {
            if (null != V || null == F || Q || !et) return;
            let e = (0, y.V)(F.id);
            null != e && h.Z.preload(F.id, e);
        }, [V, F, Q, et]),
        ex = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(ei)),
        eC = i.useCallback(
            (e) => {
                null == F || ex || X(e, F);
            },
            [F, X, ex]
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
                ev.cancel(), e_(!1);
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
    if (null == F) return null;
    let eZ =
            ey || em
                ? (0, r.jsx)(S.Z, {
                      guild: F,
                      show: ey,
                      active: z,
                      onAnimationStart: function () {
                          eb(ey);
                      },
                      onAnimationRest: function () {
                          ey || eb(!1);
                      }
                  })
                : (0, r.jsx)(
                      p.LYs,
                      R(
                          D(
                              {
                                  ariaLabel: T.NW.formatToPlainString(T.t['/uzRsr'], {
                                      guildName: F.toString(),
                                      mentions: K
                                  }),
                                  name: F.toString(),
                                  onClick: eO,
                                  onMouseEnter: function () {
                                      ee || ef(!0);
                                  },
                                  onMouseLeave: function () {
                                      ee || ef(!1);
                                  },
                                  onMouseDown: ej,
                                  onContextMenu: eC,
                                  onKeyDown: eS,
                                  icon: F.getIconURL(2 * eN, eg && H, eo),
                                  selected: z || eg
                              },
                              ep
                          ),
                          { role: 'treeitem' }
                      )
                  ),
        ew = eu
            ? (0, r.jsx)(P.OG, { children: (0, r.jsx)(N.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
                  ref: $
                      ? (e) => {
                            ed(e);
                        }
                      : void 0,
                  'data-dnd-name': F.toString(),
                  style: { scale: null == er ? 1 : er },
                  'data-drop-hovering': ey,
                  className: o()(A.blobContainer, {
                      [A.sorting]: ee,
                      [A.wobble]: ey,
                      [A.selected]: ey || z
                  }),
                  children: (0, r.jsx)(p.aRk, {
                      selected: !!eo || ey || z || eg,
                      upperBadge: ea,
                      lowerBadge: es,
                      lowerBadgeSize: ec,
                      children: eZ
                  })
              });
    return (0, r.jsxs)(Z.H, {
        ref: eI,
        children: [
            (0, r.jsx)(C.Z, {
                hovered: !eu && eg,
                selected: !eu && z,
                unread: !eu && Y,
                className: A.pill
            }),
            (0, r.jsx)(I.Z, {
                guild: F,
                disabled: ee,
                isDragging: eu,
                children: ew
            }),
            $
                ? (0, r.jsx)(P.ZP, {
                      name: F.name,
                      targetNode: G,
                      onDragOverChanged: eP
                  })
                : null
        ]
    });
});
