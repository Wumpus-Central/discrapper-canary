n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(92674),
    d = n(837381),
    c = n(607399),
    u = n(417597),
    h = n(451988),
    A = n(397927),
    g = n(308528),
    m = n(442433),
    p = n(817281),
    _ = n(658128),
    x = n(976860),
    f = n(345942),
    E = n(260509),
    C = n(696451),
    I = n(711014),
    S = n(676279),
    b = n(263715),
    N = n(941971),
    T = n(264409),
    j = n(531053),
    v = n(647668),
    y = n(107385),
    R = n(900848),
    O = n(65611),
    L = n(652215),
    D = n(985018),
    M = n(837021);
let G = { analyticsSource: { page: L.liQ.GUILD_CHANNEL, section: L.JJy.CHANNEL_LIST, object: L.ZSU.CHANNEL } };
function U(e, t) {
    (0, m.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("68587"),
            n.e("43600"),
            n.e("63379"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("21968"),
            n.e("35894"),
            n.e("50796"),
            n.e("8458"),
            n.e("11810"),
            n.e("39048"),
            n.e("36290"),
            n.e("54469"),
            n.e("70084"),
        ]).then(n.bind(n, 544676));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let P = l.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: s,
            onDragEnd: m,
            route: P,
            guild: k,
            animatable: w,
            selected: V = !1,
            unread: B = !1,
            mediaState: H,
            unavailable: F = !1,
            badge: Y = 0,
            isMentionLowImportance: W,
            contextMenu: K = U,
            draggable: z = !1,
            sorting: X = !1,
            preloadOnClick: q = !0,
            guildJoinRequestStatus: J,
            height: Q,
            "aria-setsize": Z,
            "aria-posinset": $,
        } = e,
        { id: ee, parentId: et } = t,
        en = e.upperBadge ?? (F ? (0, O.em)() : null != H ? (0, O.oi)(H) : void 0),
        ei = e.lowerBadge ?? void 0;
    null == ei && Y > 0
        ? (ei =
              (0, O.wN)(
                  Y,
                  W ? A.LU0.colors.BACKGROUND_MOD_STRONG.css : A.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == ei && null != J && (ei = (0, O.eW)({ guildJoinRequestStatus: J }) ?? void 0);
    let el = e.lowerBadgeSize ?? { width: (0, A.o6S)(Y) },
        [{ dragging: es }, ea] = (0, r.i)({
            type: b.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    s?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                m?.(), (0, p.um)(I.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        er = (0, d.Vd)(ee ?? L.dJq, null != et ? 2 : 1),
        [eo, ed] = l.useState(!1),
        ec = !X && eo,
        [eu, eh] = l.useState(!1),
        [eA, eg] = l.useState(!1),
        [em] = l.useState(() => new h.J_(70, () => eg(!0))),
        ep = (0, S.nr)() && !c.Fr;
    l.useEffect(() => () => em.cancel(), [em]);
    let e_ = l.useCallback(() => {
            null != P ? (0, x.pX)(P, { state: G }) : (0, f.u)(ee, { state: G });
        }, [ee, P]),
        ex = l.useCallback(() => {
            if (null != P || null == k || F || !q) return;
            let e = (0, _.W)(k.id);
            null != e && g.A.preload(k.id, e);
        }, [P, k, F, q]),
        ef = (0, u.bG)([C.Ay], () => C.Ay.isCurrentUserGuest(ee)),
        eE = l.useCallback(
            (e) => {
                null == k || ef || K(e, k);
            },
            [k, K, ef],
        ),
        eC = l.useCallback(
            (e) => {
                "ArrowLeft" === e.key &&
                    null != et &&
                    document.querySelector(`[aria-owns=folder-items-${et}]`)?.focus();
            },
            [et],
        ),
        eI = l.useCallback(
            (e) => {
                e ? em.delay() : (em.cancel(), eg(!1));
            },
            [em],
        );
    function eS() {
        X || ed(!0);
    }
    function eb() {
        X || ed(!1);
    }
    let eN = l.useCallback(
            (e) => {
                n?.(ee, e);
            },
            [ee, n],
        ),
        eT = (0, A.rdh)(A.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == k) return null;
    let ej = (0, i.jsx)(T.A, {
            guild: k,
            show: eA,
            active: V,
            onAnimationStart: function () {
                eh(eA);
            },
            onAnimationRest: function () {
                eA || eh(!1);
            },
        }),
        ev = ep
            ? (0, i.jsx)(A.jlP, {
                  ariaLabel: D.intl.formatToPlainString(D.t["/uzRss"], { guildName: k.name, mentions: Y }),
                  name: k.name,
                  onClick: e_,
                  onMouseEnter: eS,
                  onMouseLeave: eb,
                  onMouseDown: ex,
                  onContextMenu: eE,
                  onKeyDown: eC,
                  icon: (0, E.Iv)(k, 2 * eT, ec && w, !0),
                  selected: V || ec,
                  ...er,
                  "aria-setsize": Z,
                  "aria-posinset": $,
                  "aria-selected": V,
              })
            : (0, i.jsx)(A.Qk9, {
                  selected: V,
                  children: (0, i.jsx)("div", {
                      ref: z
                          ? (e) => {
                                ea(e);
                            }
                          : void 0,
                      "data-dnd-name": k.name,
                      "data-drop-hovering": eA,
                      children: (0, i.jsx)(A.jlP, {
                          ariaLabel: D.intl.formatToPlainString(D.t["/uzRss"], { guildName: k.name, mentions: Y }),
                          name: k.name,
                          onClick: e_,
                          onMouseEnter: eS,
                          onMouseLeave: eb,
                          onMouseDown: ex,
                          onContextMenu: eE,
                          onKeyDown: eC,
                          icon: (0, E.Iv)(k, 2 * eT, ec && w, !0),
                          selected: V || ec,
                          ...er,
                          "aria-setsize": Z,
                          "aria-posinset": $,
                          "aria-selected": V,
                      }),
                  }),
              }),
        ey = eA || eu ? ej : ev,
        eR = (0, i.jsx)(j.g4, { children: (0, i.jsx)(y.A, {}) }),
        eO = ep
            ? (0, i.jsx)(o.animated.div, {
                  ref: z
                      ? (e) => {
                            ea(e);
                        }
                      : void 0,
                  "data-dnd-name": k.name,
                  style: { scale: null == Q ? 1 : Q },
                  "data-drop-hovering": eA,
                  className: a()(M.rN, { [M.p9]: X, [M.oR]: eA, [M.wH]: eA || V }),
                  children: (0, i.jsx)(A.Qk9, {
                      selected: !0,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: el,
                      children: ey,
                  }),
              })
            : (0, i.jsx)(o.animated.div, {
                  style: { scale: null == Q ? 1 : Q },
                  className: a()(M.rN, { [M.p9]: X, [M.oR]: eA, [M.wH]: eA || V }),
                  "data-drop-hovering": eA,
                  children: (0, i.jsx)(A.Qk9, {
                      selected: V,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: el,
                      children: ey,
                  }),
              });
    return (0, i.jsxs)(R.c, {
        ref: eN,
        children: [
            (0, i.jsx)(N.A, { hovered: !es && ec, selected: !es && V, unread: !es && B, className: M.Io }),
            (0, i.jsx)(v.A, { guild: k, disabled: X, isDragging: es, children: es ? eR : eO }),
            z ? (0, i.jsx)(j.Ay, { name: k.name, targetNode: t, onDragOverChanged: eI }) : null,
        ],
    });
});
