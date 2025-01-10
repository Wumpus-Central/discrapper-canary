n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(666912),
    c = n(91192),
    u = n(399606),
    d = n(846519),
    h = n(481060),
    p = n(493683),
    f = n(239091),
    m = n(153867),
    g = n(377171),
    v = n(540059),
    C = n(35225),
    x = n(703656),
    I = n(769654),
    _ = n(271383),
    Z = n(771845),
    b = n(727258),
    S = n(276952),
    N = n(249792),
    E = n(40153),
    y = n(593618),
    j = n(252686),
    T = n(682662),
    P = n(674552),
    A = n(981631),
    w = n(388032),
    M = n(284923);
let L = {
    analyticsSource: {
        page: A.ZY5.GUILD_CHANNEL,
        section: A.jXE.CHANNEL_LIST,
        object: A.qAy.CHANNEL
    }
};
function R(e, t) {
    (0, f.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('17298'), n.e('7654'), n.e('78258'), n.e('98479'), n.e('53967'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('85060'), n.e('94107'), n.e('33213'), n.e('90699')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, f, D;
    let { guildNode: G, setRef: B, onDragStart: k, onDragEnd: U, route: O, guild: V, animatable: H, selected: F = !1, unread: W = !1, mediaState: z, unavailable: q = !1, badge: Y = 0, isMentionLowImportance: Q, contextMenu: J = R, draggable: K = !1, sorting: X = !1, preloadOnClick: $ = !0, guildJoinRequestStatus: ee, height: et } = e,
        { id: en, parentId: ei } = G,
        el = (0, v.Q3)('GuildItem'),
        er = null !== (t = e.upperBadge) && void 0 !== t ? t : q ? (0, P.Ny)() : null != z ? (0, P.Or)(z) : void 0,
        ea = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == ea && Y > 0 ? (ea = null !== (r = (0, P.Ne)(Y, Q ? g.Z.BACKGROUND_ACCENT : g.Z.STATUS_DANGER)) && void 0 !== r ? r : void 0) : null == ea && null != ee && (ea = null !== (f = (0, P.jt)({ guildJoinRequestStatus: ee })) && void 0 !== f ? f : void 0);
    let eo = null !== (D = e.lowerBadgeSize) && void 0 !== D ? D : { width: (0, h.getBadgeWidthForValue)(Y) },
        [{ dragging: es }, ec] = (0, o.c)({
            type: b.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == k || k();
                }),
                {
                    type: G.type,
                    nodeId: G.id
                }
            ),
            end() {
                null == U || U(), (0, m.V1)(Z.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        eu = (0, c.Ie)(null != en ? en : A.lds),
        [ed, eh] = l.useState(!1),
        ep = !X && ed,
        [ef, em] = l.useState(!1),
        [eg, ev] = l.useState(!1),
        [eC] = l.useState(() => new d.sW(70, () => ev(!0)));
    l.useEffect(() => () => eC.cancel(), [eC]);
    let ex = l.useCallback(() => {
            if (null != O) {
                (0, x.uL)(O, { state: L });
                return;
            }
            (0, I.X)(en, { state: L });
        }, [en, O]),
        eI = l.useCallback(() => {
            if (null != O || null == V || q || !$) return;
            let e = (0, C.V)(V.id);
            if (null != e) p.Z.preload(V.id, e);
        }, [O, V, q, $]),
        e_ = (0, u.e7)([_.ZP], () => _.ZP.isCurrentUserGuest(en)),
        eZ = l.useCallback(
            (e) => {
                null != V && !e_ && J(e, V);
            },
            [V, J, e_]
        ),
        eb = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != ei) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat(ei, ']'))) || void 0 === t || t.focus();
                }
            },
            [ei]
        ),
        eS = l.useCallback(
            (e) => {
                if (e) {
                    eC.delay();
                    return;
                }
                eC.cancel(), ev(!1);
            },
            [eC]
        ),
        eN = l.useCallback(
            (e) => {
                null == B || B(en, e);
            },
            [en, B]
        );
    if (null == V) return null;
    let eE =
            eg || ef
                ? (0, i.jsx)(N.Z, {
                      guild: V,
                      show: eg,
                      active: F,
                      onAnimationStart: function () {
                          em(eg);
                      },
                      onAnimationRest: function () {
                          eg || em(!1);
                      }
                  })
                : (0, i.jsx)(h.NavItem, {
                      ariaLabel: w.intl.formatToPlainString(w.t['/uzRsr'], {
                          guildName: V.toString(),
                          mentions: Y
                      }),
                      name: V.toString(),
                      onClick: ex,
                      onMouseEnter: function () {
                          X || eh(!0);
                      },
                      onMouseLeave: function () {
                          X || eh(!1);
                      },
                      onMouseDown: eI,
                      onContextMenu: eZ,
                      onKeyDown: eb,
                      icon: V.getIconURL((el ? 44 : 48) * 2, ep && H),
                      selected: F || ep,
                      ...eu,
                      role: 'treeitem'
                  }),
        ey = es
            ? (0, i.jsx)(E.OG, { children: (0, i.jsx)(j.Z, {}) })
            : (0, i.jsx)(s.animated.div, {
                  ref: K ? ec : void 0,
                  'data-dnd-name': V.toString(),
                  style: { scale: null == et ? 1 : et },
                  className: a()(M.blobContainer, {
                      [M.sorting]: X,
                      [M.wobble]: eg,
                      [M.selected]: eg || F
                  }),
                  children: (0, i.jsx)(h.BlobMask, {
                      selected: !!el || eg || F || ep,
                      upperBadge: er,
                      lowerBadge: ea,
                      lowerBadgeSize: eo,
                      children: eE
                  })
              });
    return (0, i.jsxs)(T.H, {
        ref: eN,
        children: [
            (0, i.jsx)(S.Z, {
                hovered: !es && ep,
                selected: !es && F,
                unread: !es && W,
                className: M.pill
            }),
            (0, i.jsx)(y.Z, {
                guild: V,
                disabled: X,
                isDragging: es,
                children: ey
            }),
            K
                ? (0, i.jsx)(E.ZP, {
                      name: V.name,
                      targetNode: G,
                      onDragOverChanged: eS
                  })
                : null
        ]
    });
});
