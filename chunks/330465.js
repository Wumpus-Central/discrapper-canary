"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(131346),
    o = n(4208),
    c = n(837381),
    d = n(607399),
    u = n(417597),
    h = n(451988),
    A = n(397927),
    m = n(308528),
    p = n(442433),
    g = n(817281),
    _ = n(658128),
    f = n(976860),
    x = n(345942),
    C = n(260509),
    E = n(696451),
    I = n(711014),
    N = n(676279),
    b = n(263715),
    S = n(941971),
    T = n(264409),
    v = n(531053),
    y = n(647668),
    j = n(107385),
    R = n(900848),
    O = n(65611),
    L = n(652215),
    M = n(985018),
    D = n(604418);
let G = { analyticsSource: { page: L.liQ.GUILD_CHANNEL, section: L.JJy.CHANNEL_LIST, object: L.ZSU.CHANNEL } };
function U(e, t) {
    (0, p.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("43600"),
            n.e("68587"),
            n.e("63379"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("91872"),
            n.e("35894"),
            n.e("50796"),
            n.e("8458"),
            n.e("11810"),
            n.e("34656"),
            n.e("30453"),
            n.e("56475"),
            n.e("54469"),
            n.e("48892"),
        ]).then(n.bind(n, 544676));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let P = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: l,
            onDragEnd: p,
            route: P,
            guild: k,
            animatable: w,
            selected: V = !1,
            unread: B = !1,
            mediaState: H,
            unavailable: F = !1,
            badge: K = 0,
            isMentionLowImportance: W,
            contextMenu: Y = U,
            draggable: z = !1,
            sorting: q = !1,
            preloadOnClick: X = !0,
            guildJoinRequestStatus: J,
            height: Q,
            "aria-setsize": $,
            "aria-posinset": Z,
        } = e,
        { id: ee, parentId: et } = t,
        en = e.upperBadge ?? (F ? (0, O.em)() : null != H ? (0, O.oi)(H) : void 0),
        ei = e.lowerBadge ?? void 0;
    null == ei && K > 0
        ? (ei =
              (0, O.wN)(
                  K,
                  W ? A.LU0.colors.BACKGROUND_MOD_STRONG.css : A.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == ei && null != J && (ei = (0, O.eW)({ guildJoinRequestStatus: J }) ?? void 0);
    let es = e.lowerBadgeSize ?? { width: (0, A.o6S)(K) },
        [{ dragging: el }, er] = (0, a.i)({
            type: b.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    l?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                p?.(), (0, g.um)(I.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ea = (0, c.Vd)(ee ?? L.dJq, null != et ? 2 : 1),
        [eo, ec] = s.useState(!1),
        ed = !q && eo,
        [eu, eh] = s.useState(!1),
        [eA, em] = s.useState(!1),
        [ep] = s.useState(() => new h.J_(70, () => em(!0))),
        eg = (0, N.nr)() && !d.Fr;
    s.useEffect(() => () => ep.cancel(), [ep]);
    let e_ = s.useCallback(() => {
            null != P ? (0, f.pX)(P, { state: G }) : (0, x.u)(ee, { state: G });
        }, [ee, P]),
        ef = s.useCallback(() => {
            if (null != P || null == k || F || !X) return;
            let e = (0, _.W)(k.id);
            null != e && m.A.preload(k.id, e);
        }, [P, k, F, X]),
        ex = (0, u.bG)([E.Ay], () => E.Ay.isCurrentUserGuest(ee)),
        eC = s.useCallback(
            (e) => {
                null == k || ex || Y(e, k);
            },
            [k, Y, ex],
        ),
        eE = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key &&
                    null != et &&
                    document.querySelector(`[aria-owns=folder-items-${et}]`)?.focus();
            },
            [et],
        ),
        eI = s.useCallback(
            (e) => {
                e ? ep.delay() : (ep.cancel(), em(!1));
            },
            [ep],
        );
    function eN() {
        q || ec(!0);
    }
    function eb() {
        q || ec(!1);
    }
    let eS = s.useCallback(
            (e) => {
                n?.(ee, e);
            },
            [ee, n],
        ),
        eT = (0, A.rdh)(A.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == k) return null;
    let ev = (0, i.jsx)(T.A, {
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
        ey = eg
            ? (0, i.jsx)(A.jlP, {
                  ariaLabel: M.intl.formatToPlainString(M.t["/uzRss"], { guildName: k.name, mentions: K }),
                  name: k.name,
                  onClick: e_,
                  onMouseEnter: eN,
                  onMouseLeave: eb,
                  onMouseDown: ef,
                  onContextMenu: eC,
                  onKeyDown: eE,
                  icon: (0, C.Iv)(k, 2 * eT, ed && w, !0),
                  selected: V || ed,
                  ...ea,
                  "aria-setsize": $,
                  "aria-posinset": Z,
                  "aria-selected": V,
              })
            : (0, i.jsx)(A.Qk9, {
                  selected: V,
                  children: (0, i.jsx)("div", {
                      ref: z
                          ? (e) => {
                                er(e);
                            }
                          : void 0,
                      "data-dnd-name": k.name,
                      "data-drop-hovering": eA,
                      children: (0, i.jsx)(A.jlP, {
                          ariaLabel: M.intl.formatToPlainString(M.t["/uzRss"], { guildName: k.name, mentions: K }),
                          name: k.name,
                          onClick: e_,
                          onMouseEnter: eN,
                          onMouseLeave: eb,
                          onMouseDown: ef,
                          onContextMenu: eC,
                          onKeyDown: eE,
                          icon: (0, C.Iv)(k, 2 * eT, ed && w, !0),
                          selected: V || ed,
                          ...ea,
                          "aria-setsize": $,
                          "aria-posinset": Z,
                          "aria-selected": V,
                      }),
                  }),
              }),
        ej = eA || eu ? ev : ey,
        eR = (0, i.jsx)(v.g4, { children: (0, i.jsx)(j.A, {}) }),
        eO = eg
            ? (0, i.jsx)(o.animated.div, {
                  ref: z
                      ? (e) => {
                            er(e);
                        }
                      : void 0,
                  "data-dnd-name": k.name,
                  style: { scale: null == Q ? 1 : Q },
                  "data-drop-hovering": eA,
                  className: r()(D.rN, { [D.p9]: q, [D.oR]: eA, [D.wH]: eA || V }),
                  children: (0, i.jsx)(A.Qk9, {
                      selected: !0,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: es,
                      children: ej,
                  }),
              })
            : (0, i.jsx)(o.animated.div, {
                  style: { scale: null == Q ? 1 : Q },
                  className: r()(D.rN, { [D.p9]: q, [D.oR]: eA, [D.wH]: eA || V }),
                  "data-drop-hovering": eA,
                  children: (0, i.jsx)(A.Qk9, {
                      selected: V,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: es,
                      children: ej,
                  }),
              });
    return (0, i.jsxs)(R.c, {
        ref: eS,
        children: [
            (0, i.jsx)(S.A, { hovered: !el && ed, selected: !el && V, unread: !el && B, className: D.Io }),
            (0, i.jsx)(y.A, { guild: k, disabled: q, isDragging: el, children: el ? eR : eO }),
            z ? (0, i.jsx)(v.Ay, { name: k.name, targetNode: t, onDragOverChanged: eI }) : null,
        ],
    });
});
