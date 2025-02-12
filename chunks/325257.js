n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(642128),
    c = n(91192),
    d = n(399606),
    u = n(846519),
    h = n(481060),
    p = n(493683),
    m = n(239091),
    g = n(153867),
    f = n(377171),
    _ = n(540059),
    v = n(35225),
    C = n(703656),
    x = n(769654),
    Z = n(271383),
    I = n(771845),
    b = n(727258),
    S = n(276952),
    N = n(249792),
    E = n(40153),
    j = n(593618),
    y = n(252686),
    A = n(682662),
    T = n(674552),
    P = n(981631),
    w = n(388032),
    R = n(914217);
let L = {
    analyticsSource: {
        page: P.ZY5.GUILD_CHANNEL,
        section: P.jXE.CHANNEL_LIST,
        object: P.qAy.CHANNEL
    }
};
function M(e, t) {
    (0, m.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('33053'), n.e('17298'), n.e('78258'), n.e('7654'), n.e('44156'), n.e('20364'), n.e('6850'), n.e('58227'), n.e('16114'), n.e('54408'), n.e('35217'), n.e('21881'), n.e('33213'), n.e('43238')]).then(n.bind(n, 963279));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
let D = l.memo(function (e) {
    var t, n, r, m, D;
    let { guildNode: G, setRef: k, onDragStart: B, onDragEnd: O, route: U, guild: V, animatable: F, selected: H = !1, unread: z = !1, mediaState: W, unavailable: q = !1, badge: Y = 0, isMentionLowImportance: Q, contextMenu: J = M, draggable: K = !1, sorting: X = !1, preloadOnClick: $ = !0, guildJoinRequestStatus: ee, height: et } = e,
        { id: en, parentId: ei } = G,
        el = (0, _.Q3)('GuildItem'),
        er = null !== (t = e.upperBadge) && void 0 !== t ? t : q ? (0, T.Ny)() : null != W ? (0, T.Or)(W) : void 0,
        ea = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == ea && Y > 0 ? (ea = null !== (r = (0, T.Ne)(Y, Q ? f.Z.BACKGROUND_ACCENT : f.Z.STATUS_DANGER)) && void 0 !== r ? r : void 0) : null == ea && null != ee && (ea = null !== (m = (0, T.jt)({ guildJoinRequestStatus: ee })) && void 0 !== m ? m : void 0);
    let eo = null !== (D = e.lowerBadgeSize) && void 0 !== D ? D : { width: (0, h.OVM)(Y) },
        [{ dragging: es }, ec] = (0, o.c)({
            type: b.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == B || B();
                }),
                {
                    type: G.type,
                    nodeId: G.id
                }
            ),
            end() {
                null == O || O(), (0, g.V1)(I.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        ed = (0, c.Ie)(null != en ? en : P.lds),
        [eu, eh] = l.useState(!1),
        ep = !X && eu,
        [em, eg] = l.useState(!1),
        [ef, e_] = l.useState(!1),
        [ev] = l.useState(() => new u.sW(70, () => e_(!0)));
    l.useEffect(() => () => ev.cancel(), [ev]);
    let eC = l.useCallback(() => {
            if (null != U) {
                (0, C.uL)(U, { state: L });
                return;
            }
            (0, x.X)(en, { state: L });
        }, [en, U]),
        ex = l.useCallback(() => {
            if (null != U || null == V || q || !$) return;
            let e = (0, v.V)(V.id);
            null != e && p.Z.preload(V.id, e);
        }, [U, V, q, $]),
        eZ = (0, d.e7)([Z.ZP], () => Z.ZP.isCurrentUserGuest(en)),
        eI = l.useCallback(
            (e) => {
                null == V || eZ || J(e, V);
            },
            [V, J, eZ]
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
                    ev.delay();
                    return;
                }
                ev.cancel(), e_(!1);
            },
            [ev]
        ),
        eN = l.useCallback(
            (e) => {
                null == k || k(en, e);
            },
            [en, k]
        ),
        eE = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
    if (null == V) return null;
    let ej =
            ef || em
                ? (0, i.jsx)(N.Z, {
                      guild: V,
                      show: ef,
                      active: H,
                      onAnimationStart: function () {
                          eg(ef);
                      },
                      onAnimationRest: function () {
                          ef || eg(!1);
                      }
                  })
                : (0, i.jsx)(h.LYs, {
                      ariaLabel: w.intl.formatToPlainString(w.t['/uzRsr'], {
                          guildName: V.toString(),
                          mentions: Y
                      }),
                      name: V.toString(),
                      onClick: eC,
                      onMouseEnter: function () {
                          X || eh(!0);
                      },
                      onMouseLeave: function () {
                          X || eh(!1);
                      },
                      onMouseDown: ex,
                      onContextMenu: eI,
                      onKeyDown: eb,
                      icon: V.getIconURL(2 * eE, ep && F, el),
                      selected: H || ep,
                      ...ed,
                      role: 'treeitem'
                  }),
        ey = es
            ? (0, i.jsx)(E.OG, { children: (0, i.jsx)(y.Z, {}) })
            : (0, i.jsx)(s.animated.div, {
                  ref: K ? ec : void 0,
                  'data-dnd-name': V.toString(),
                  style: { scale: null == et ? 1 : et },
                  'data-drop-hovering': ef,
                  className: a()(R.blobContainer, {
                      [R.sorting]: X,
                      [R.wobble]: ef,
                      [R.selected]: ef || H
                  }),
                  children: (0, i.jsx)(h.aRk, {
                      selected: !!el || ef || H || ep,
                      upperBadge: er,
                      lowerBadge: ea,
                      lowerBadgeSize: eo,
                      children: ej
                  })
              });
    return (0, i.jsxs)(A.H, {
        ref: eN,
        children: [
            (0, i.jsx)(S.Z, {
                hovered: !es && ep,
                selected: !es && H,
                unread: !es && z,
                className: R.pill
            }),
            (0, i.jsx)(j.Z, {
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
