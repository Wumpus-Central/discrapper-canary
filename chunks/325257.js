n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(562075),
    a = n(695469),
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
    y = n(271383),
    v = n(771845),
    C = n(727258),
    j = n(276952),
    E = n(249792),
    S = n(40153),
    x = n(593618),
    I = n(252686),
    P = n(682662),
    N = n(674552),
    w = n(981631),
    Z = n(388032),
    T = n(335426);
function A(e) {
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
let D = {
    analyticsSource: {
        page: w.ZY5.GUILD_CHANNEL,
        section: w.jXE.CHANNEL_LIST,
        object: w.qAy.CHANNEL
    }
};
function L(e, t) {
    (0, f.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('7654'), n.e('55616'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('58227'), n.e('32652'), n.e('54408'), n.e('20087'), n.e('92754'), n.e('28305'), n.e('87154'), n.e('33213'), n.e('40407')]).then(n.bind(n, 545135));
        return (n) => (0, r.jsx)(e, R(A({}, n), { guild: t }));
    });
}
let M = i.memo(function (e) {
    var t, n, l, f, M;
    let { guildNode: k, setRef: U, onDragStart: G, onDragEnd: B, route: F, guild: V, animatable: H, selected: z = !1, unread: W = !1, mediaState: K, unavailable: Y = !1, badge: q = 0, isMentionLowImportance: X, contextMenu: Q = L, draggable: J = !1, sorting: $ = !1, preloadOnClick: ee = !0, guildJoinRequestStatus: et, height: en, 'aria-setsize': er, 'aria-posinset': ei } = e,
        { id: el, parentId: eo } = k,
        es = null != (t = e.upperBadge) ? t : Y ? (0, N.Ny)() : null != K ? (0, N.Or)(K) : void 0,
        ea = null != (n = e.lowerBadge) ? n : void 0;
    null == ea && q > 0 ? (ea = null != (l = (0, N.Ne)(q, X ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : void 0) : null == ea && null != et && (ea = null != (f = (0, N.jt)({ guildJoinRequestStatus: et })) ? f : void 0);
    let ec = null != (M = e.lowerBadgeSize) ? M : { width: (0, h.OVM)(q) },
        [{ dragging: eu }, ed] = (0, s.c)({
            type: C.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == G || G();
                }),
                {
                    type: k.type,
                    nodeId: k.id
                }
            ),
            end() {
                null == B || B(), (0, g.V1)(v.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        eh = (0, c.Ie)(null != el ? el : w.lds, null != eo ? 2 : 1),
        [ep, ef] = i.useState(!1),
        eg = !$ && ep,
        [em, eb] = i.useState(!1),
        [e_, eO] = i.useState(!1),
        [ey] = i.useState(() => new d.sW(70, () => eO(!0)));
    i.useEffect(() => () => ey.cancel(), [ey]);
    let ev = i.useCallback(() => {
            if (null != F) return void (0, _.uL)(F, { state: D });
            (0, O.X)(el, { state: D });
        }, [el, F]),
        eC = i.useCallback(() => {
            if (null != F || null == V || Y || !ee) return;
            let e = (0, b.V)(V.id);
            null != e && p.Z.preload(V.id, e);
        }, [F, V, Y, ee]),
        ej = (0, u.e7)([y.ZP], () => y.ZP.isCurrentUserGuest(el)),
        eE = i.useCallback(
            (e) => {
                null == V || ej || Q(e, V);
            },
            [V, Q, ej]
        ),
        eS = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != eo) {
                    var t;
                    null == (t = document.querySelector('[aria-owns=folder-items-'.concat(eo, ']'))) || t.focus();
                }
            },
            [eo]
        ),
        ex = i.useCallback(
            (e) => {
                if (e) return void ey.delay();
                ey.cancel(), eO(!1);
            },
            [ey]
        ),
        eI = i.useCallback(
            (e) => {
                null == U || U(el, e);
            },
            [el, U]
        ),
        eP = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == V) return null;
    let eN =
            e_ || em
                ? (0, r.jsx)(E.Z, {
                      guild: V,
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
                      R(
                          A(
                              {
                                  ariaLabel: Z.intl.formatToPlainString(Z.t['/uzRsr'], {
                                      guildName: V.toString(),
                                      mentions: q
                                  }),
                                  name: V.toString(),
                                  onClick: ev,
                                  onMouseEnter: function () {
                                      $ || ef(!0);
                                  },
                                  onMouseLeave: function () {
                                      $ || ef(!1);
                                  },
                                  onMouseDown: eC,
                                  onContextMenu: eE,
                                  onKeyDown: eS,
                                  icon: V.getIconURL(2 * eP, eg && H, !0),
                                  selected: z || eg
                              },
                              eh
                          ),
                          {
                              'aria-setsize': er,
                              'aria-posinset': ei,
                              'aria-selected': z
                          }
                      )
                  ),
        ew = eu
            ? (0, r.jsx)(S.OG, { children: (0, r.jsx)(I.Z, {}) })
            : (0, r.jsx)(a.animated.div, {
                  ref: J
                      ? (e) => {
                            ed(e);
                        }
                      : void 0,
                  'data-dnd-name': V.toString(),
                  style: { scale: null == en ? 1 : en },
                  'data-drop-hovering': e_,
                  className: o()(T.blobContainer, {
                      [T.sorting]: $,
                      [T.wobble]: e_,
                      [T.selected]: e_ || z
                  }),
                  children: (0, r.jsx)(h.aRk, {
                      selected: !0,
                      upperBadge: es,
                      lowerBadge: ea,
                      lowerBadgeSize: ec,
                      children: eN
                  })
              });
    return (0, r.jsxs)(P.H, {
        ref: eI,
        children: [
            (0, r.jsx)(j.Z, {
                hovered: !eu && eg,
                selected: !eu && z,
                unread: !eu && W,
                className: T.pill
            }),
            (0, r.jsx)(x.Z, {
                guild: V,
                disabled: $,
                isDragging: eu,
                children: ew
            }),
            J
                ? (0, r.jsx)(S.ZP, {
                      name: V.name,
                      targetNode: k,
                      onDragOverChanged: ex
                  })
                : null
        ]
    });
});
