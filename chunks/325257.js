(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(562075),
    s = n(66546),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    h = n(481060),
    p = n(493683),
    f = n(239091),
    g = n(153867),
    m = n(377171),
    b = n(35225),
    _ = n(703656),
    O = n(769654),
    y = n(601964),
    C = n(271383),
    v = n(771845),
    j = n(727258),
    E = n(276952),
    S = n(249792),
    x = n(40153),
    I = n(593618),
    P = n(252686),
    N = n(682662),
    w = n(674552),
    T = n(981631),
    Z = n(388032),
    A = n(335426);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
        page: T.ZY5.GUILD_CHANNEL,
        section: T.jXE.CHANNEL_LIST,
        object: T.qAy.CHANNEL
    }
};
function M(e, t) {
    (0, f.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('1806'), n.e('58175'), n.e('71418'), n.e('7654'), n.e('44156'), n.e('99226'), n.e('6850'), n.e('58227'), n.e('54408'), n.e('20087'), n.e('94312'), n.e('56534'), n.e('87154'), n.e('33213'), n.e('40407')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, D(R({}, n), { guild: t }));
    });
}
let k = i.memo(function (e) {
    var t, n, l, f, k;
    let { guildNode: U, setRef: G, onDragStart: B, onDragEnd: V, route: F, guild: H, animatable: z, selected: W = !1, unread: K = !1, mediaState: Y, unavailable: q = !1, badge: X = 0, isMentionLowImportance: Q, contextMenu: J = M, draggable: $ = !1, sorting: ee = !1, preloadOnClick: et = !0, guildJoinRequestStatus: en, height: er, 'aria-setsize': ei, 'aria-posinset': el } = e,
        { id: eo, parentId: ea } = U,
        es = null != (t = e.upperBadge) ? t : q ? (0, w.Ny)() : null != Y ? (0, w.Or)(Y) : void 0,
        ec = null != (n = e.lowerBadge) ? n : void 0;
    null == ec && X > 0 ? (ec = null != (l = (0, w.Ne)(X, Q ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == ec && null != en && (ec = null != (f = (0, w.jt)({ guildJoinRequestStatus: en })) ? f : void 0);
    let eu = null != (k = e.lowerBadgeSize) ? k : { width: (0, h.OVM)(X) },
        [{ dragging: ed }, eh] = (0, a.c)({
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
                (null == V || V(), (0, g.V1)(v.ZP.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        ep = (0, c.Ie)(null != eo ? eo : T.lds, null != ea ? 2 : 1),
        [ef, eg] = i.useState(!1),
        em = !ee && ef,
        [eb, e_] = i.useState(!1),
        [eO, ey] = i.useState(!1),
        [eC] = i.useState(() => new d.sW(70, () => ey(!0)));
    i.useEffect(() => () => eC.cancel(), [eC]);
    let ev = i.useCallback(() => {
            if (null != F) return void (0, _.uL)(F, { state: L });
            (0, O.X)(eo, { state: L });
        }, [eo, F]),
        ej = i.useCallback(() => {
            if (null != F || null == H || q || !et) return;
            let e = (0, b.V)(H.id);
            null != e && p.Z.preload(H.id, e);
        }, [F, H, q, et]),
        eE = (0, u.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(eo)),
        eS = i.useCallback(
            (e) => {
                null == H || eE || J(e, H);
            },
            [H, J, eE]
        ),
        ex = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != ea) {
                    var t;
                    null == (t = document.querySelector('[aria-owns=folder-items-'.concat(ea, ']'))) || t.focus();
                }
            },
            [ea]
        ),
        eI = i.useCallback(
            (e) => {
                if (e) return void eC.delay();
                (eC.cancel(), ey(!1));
            },
            [eC]
        ),
        eP = i.useCallback(
            (e) => {
                null == G || G(eo, e);
            },
            [eo, G]
        ),
        eN = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let ew =
            eO || eb
                ? (0, r.jsx)(S.Z, {
                      guild: H,
                      show: eO,
                      active: W,
                      onAnimationStart: function () {
                          e_(eO);
                      },
                      onAnimationRest: function () {
                          eO || e_(!1);
                      }
                  })
                : (0, r.jsx)(
                      h.LYs,
                      D(
                          R(
                              {
                                  ariaLabel: Z.intl.formatToPlainString(Z.t['/uzRsr'], {
                                      guildName: H.name,
                                      mentions: X
                                  }),
                                  name: H.name,
                                  onClick: ev,
                                  onMouseEnter: function () {
                                      ee || eg(!0);
                                  },
                                  onMouseLeave: function () {
                                      ee || eg(!1);
                                  },
                                  onMouseDown: ej,
                                  onContextMenu: eS,
                                  onKeyDown: ex,
                                  icon: (0, y.EB)(H, 2 * eN, em && z, !0),
                                  selected: W || em
                              },
                              ep
                          ),
                          {
                              'aria-setsize': ei,
                              'aria-posinset': el,
                              'aria-selected': W
                          }
                      )
                  ),
        eT = ed
            ? (0, r.jsx)(x.OG, { children: (0, r.jsx)(P.Z, {}) })
            : (0, r.jsx)(s.animated.div, {
                  ref: $
                      ? (e) => {
                            eh(e);
                        }
                      : void 0,
                  'data-dnd-name': H.name,
                  style: { scale: null == er ? 1 : er },
                  'data-drop-hovering': eO,
                  className: o()(A.blobContainer, {
                      [A.sorting]: ee,
                      [A.wobble]: eO,
                      [A.selected]: eO || W
                  }),
                  children: (0, r.jsx)(h.aRk, {
                      selected: !0,
                      upperBadge: es,
                      lowerBadge: ec,
                      lowerBadgeSize: eu,
                      children: ew
                  })
              });
    return (0, r.jsxs)(N.H, {
        ref: eP,
        children: [
            (0, r.jsx)(E.Z, {
                hovered: !ed && em,
                selected: !ed && W,
                unread: !ed && K,
                className: A.pill
            }),
            (0, r.jsx)(I.Z, {
                guild: H,
                disabled: ee,
                isDragging: ed,
                children: eT
            }),
            $
                ? (0, r.jsx)(x.ZP, {
                      name: H.name,
                      targetNode: U,
                      onDragOverChanged: eI
                  })
                : null
        ]
    });
});
