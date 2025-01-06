n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(91192),
    c = n(399606),
    u = n(846519),
    d = n(481060),
    h = n(493683),
    p = n(239091),
    f = n(153867),
    m = n(377171),
    g = n(540059),
    v = n(35225),
    C = n(703656),
    x = n(769654),
    Z = n(271383),
    I = n(771845),
    _ = n(727258),
    b = n(276952),
    S = n(249792),
    N = n(40153),
    E = n(593618),
    y = n(252686),
    j = n(682662),
    T = n(674552),
    P = n(981631),
    A = n(388032),
    w = n(284923);
let M = {
    analyticsSource: {
        page: P.ZY5.GUILD_CHANNEL,
        section: P.jXE.CHANNEL_LIST,
        object: P.qAy.CHANNEL
    }
};
function L(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('15669'), n.e('7654'), n.e('89029'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('53967'), n.e('4604'), n.e('21881'), n.e('33213'), n.e('28444')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, R;
    let { guildNode: D, setRef: G, onDragStart: k, onDragEnd: B, route: U, guild: O, animatable: V, selected: H = !1, unread: F = !1, mediaState: W, unavailable: z = !1, badge: q = 0, isMentionLowImportance: Y, contextMenu: Q = L, draggable: J = !1, sorting: K = !1, preloadOnClick: X = !0, guildJoinRequestStatus: $ } = e,
        { id: ee, parentId: et } = D,
        en = (0, g.Q3)('GuildItem'),
        ei = null !== (t = e.upperBadge) && void 0 !== t ? t : z ? (0, T.Ny)() : null != W ? (0, T.Or)(W) : void 0,
        el = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == el && q > 0 ? (el = null !== (r = (0, T.Ne)(q, Y ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) && void 0 !== r ? r : void 0) : null == el && null != $ && (el = null !== (p = (0, T.jt)({ guildJoinRequestStatus: $ })) && void 0 !== p ? p : void 0);
    let er = null !== (R = e.lowerBadgeSize) && void 0 !== R ? R : { width: (0, d.getBadgeWidthForValue)(q) },
        [{ dragging: ea }, eo] = (0, o.c)({
            type: _.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == k || k();
                }),
                {
                    type: D.type,
                    nodeId: D.id
                }
            ),
            end() {
                null == B || B(), (0, f.V1)(I.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        es = (0, s.Ie)(null != ee ? ee : P.lds),
        [ec, eu] = l.useState(!1),
        ed = !K && ec,
        [eh, ep] = l.useState(!1),
        [ef, em] = l.useState(!1),
        [eg] = l.useState(() => new u.sW(70, () => em(!0)));
    l.useEffect(() => () => eg.cancel(), [eg]);
    let ev = l.useCallback(() => {
            if (null != U) {
                (0, C.uL)(U, { state: M });
                return;
            }
            (0, x.X)(ee, { state: M });
        }, [ee, U]),
        eC = l.useCallback(() => {
            if (null != U || null == O || z || !X) return;
            let e = (0, v.V)(O.id);
            if (null != e) h.Z.preload(O.id, e);
        }, [U, O, z, X]),
        ex = (0, c.e7)([Z.ZP], () => Z.ZP.isCurrentUserGuest(ee)),
        eZ = l.useCallback(
            (e) => {
                null != O && !ex && Q(e, O);
            },
            [O, Q, ex]
        ),
        eI = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != et) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat(et, ']'))) || void 0 === t || t.focus();
                }
            },
            [et]
        ),
        e_ = l.useCallback(
            (e) => {
                if (e) {
                    eg.delay();
                    return;
                }
                eg.cancel(), em(!1);
            },
            [eg]
        ),
        eb = l.useCallback(
            (e) => {
                null == G || G(ee, e);
            },
            [ee, G]
        );
    if (null == O) return null;
    let eS =
            ef || eh
                ? (0, i.jsx)(S.Z, {
                      guild: O,
                      show: ef,
                      active: H,
                      onAnimationStart: function () {
                          ep(ef);
                      },
                      onAnimationRest: function () {
                          ef || ep(!1);
                      }
                  })
                : (0, i.jsx)(d.NavItem, {
                      ariaLabel: A.intl.formatToPlainString(A.t['/uzRsr'], {
                          guildName: O.toString(),
                          mentions: q
                      }),
                      name: O.toString(),
                      onClick: ev,
                      onMouseEnter: function () {
                          K || eu(!0);
                      },
                      onMouseLeave: function () {
                          K || eu(!1);
                      },
                      onMouseDown: eC,
                      onContextMenu: eZ,
                      onKeyDown: eI,
                      icon: O.getIconURL((en ? 44 : 48) * 2, ed && V),
                      selected: H || ed,
                      ...es,
                      role: 'treeitem'
                  }),
        eN = ea
            ? (0, i.jsx)(N.OG, { children: (0, i.jsx)(y.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: J ? eo : void 0,
                  'data-dnd-name': O.toString(),
                  className: a()(w.blobContainer, {
                      [w.sorting]: K,
                      [w.wobble]: ef,
                      [w.selected]: ef || H
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: !!en || ef || H || ed,
                      upperBadge: ei,
                      lowerBadge: el,
                      lowerBadgeSize: er,
                      children: eS
                  })
              });
    return (0, i.jsxs)(j.H, {
        ref: eb,
        children: [
            (0, i.jsx)(b.Z, {
                hovered: !ea && ed,
                selected: !ea && H,
                unread: !ea && F,
                className: w.pill
            }),
            (0, i.jsx)(E.Z, {
                guild: O,
                disabled: K,
                isDragging: ea,
                children: eN
            }),
            J
                ? (0, i.jsx)(N.ZP, {
                      name: O.name,
                      targetNode: D,
                      onDragOverChanged: e_
                  })
                : null
        ]
    });
});
