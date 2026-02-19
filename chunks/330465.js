"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(131346),
    o = n(475539),
    c = n(837381),
    d = n(607399),
    u = n(417597),
    h = n(451988),
    A = n(397927),
    p = n(308528),
    g = n(442433),
    m = n(817281),
    _ = n(658128),
    f = n(976860),
    x = n(345942),
    C = n(260509),
    E = n(696451),
    I = n(711014),
    b = n(676279),
    N = n(263715),
    S = n(941971),
    T = n(264409),
    v = n(531053),
    y = n(647668),
    j = n(107385),
    R = n(900848),
    O = n(65611),
    L = n(652215),
    M = n(985018),
    D = n(837021);
let G = { analyticsSource: { page: L.liQ.GUILD_CHANNEL, section: L.JJy.CHANNEL_LIST, object: L.ZSU.CHANNEL } };
function U(e, t) {
    (0, g.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("43600"),
            n.e("68587"),
            n.e("63379"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("21968"),
            n.e("35894"),
            n.e("67231"),
            n.e("50796"),
            n.e("8458"),
            n.e("11810"),
            n.e("39048"),
            n.e("36290"),
            n.e("54469"),
            n.e("57498"),
        ]).then(n.bind(n, 544676));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let P = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: l,
            onDragEnd: g,
            route: P,
            guild: w,
            animatable: k,
            selected: V = !1,
            unread: B = !1,
            mediaState: H,
            unavailable: F = !1,
            badge: K = 0,
            isMentionLowImportance: W,
            contextMenu: Y = U,
            draggable: z = !1,
            sorting: X = !1,
            preloadOnClick: q = !0,
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
            type: N.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    l?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                g?.(), (0, m.um)(I.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        ea = (0, c.Vd)(ee ?? L.dJq, null != et ? 2 : 1),
        [eo, ec] = s.useState(!1),
        ed = !X && eo,
        [eu, eh] = s.useState(!1),
        [eA, ep] = s.useState(!1),
        [eg] = s.useState(() => new h.J_(70, () => ep(!0))),
        em = (0, b.nr)() && !d.Fr;
    s.useEffect(() => () => eg.cancel(), [eg]);
    let e_ = s.useCallback(() => {
            null != P ? (0, f.pX)(P, { state: G }) : (0, x.u)(ee, { state: G });
        }, [ee, P]),
        ef = s.useCallback(() => {
            if (null != P || null == w || F || !q) return;
            let e = (0, _.W)(w.id);
            null != e && p.A.preload(w.id, e);
        }, [P, w, F, q]),
        ex = (0, u.bG)([E.Ay], () => E.Ay.isCurrentUserGuest(ee)),
        eC = s.useCallback(
            (e) => {
                null == w || ex || Y(e, w);
            },
            [w, Y, ex],
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
                e ? eg.delay() : (eg.cancel(), ep(!1));
            },
            [eg],
        );
    function eb() {
        X || ec(!0);
    }
    function eN() {
        X || ec(!1);
    }
    let eS = s.useCallback(
            (e) => {
                n?.(ee, e);
            },
            [ee, n],
        ),
        eT = (0, A.rdh)(A.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == w) return null;
    let ev = (0, i.jsx)(T.A, {
            guild: w,
            show: eA,
            active: V,
            onAnimationStart: function () {
                eh(eA);
            },
            onAnimationRest: function () {
                eA || eh(!1);
            },
        }),
        ey = em
            ? (0, i.jsx)(A.jlP, {
                  ariaLabel: M.intl.formatToPlainString(M.t["/uzRss"], { guildName: w.name, mentions: K }),
                  name: w.name,
                  onClick: e_,
                  onMouseEnter: eb,
                  onMouseLeave: eN,
                  onMouseDown: ef,
                  onContextMenu: eC,
                  onKeyDown: eE,
                  icon: (0, C.Iv)(w, 2 * eT, ed && k, !0),
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
                      "data-dnd-name": w.name,
                      "data-drop-hovering": eA,
                      children: (0, i.jsx)(A.jlP, {
                          ariaLabel: M.intl.formatToPlainString(M.t["/uzRss"], { guildName: w.name, mentions: K }),
                          name: w.name,
                          onClick: e_,
                          onMouseEnter: eb,
                          onMouseLeave: eN,
                          onMouseDown: ef,
                          onContextMenu: eC,
                          onKeyDown: eE,
                          icon: (0, C.Iv)(w, 2 * eT, ed && k, !0),
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
        eO = em
            ? (0, i.jsx)(o.animated.div, {
                  ref: z
                      ? (e) => {
                            er(e);
                        }
                      : void 0,
                  "data-dnd-name": w.name,
                  style: { scale: null == Q ? 1 : Q },
                  "data-drop-hovering": eA,
                  className: r()(D.rN, { [D.p9]: X, [D.oR]: eA, [D.wH]: eA || V }),
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
                  className: r()(D.rN, { [D.p9]: X, [D.oR]: eA, [D.wH]: eA || V }),
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
            (0, i.jsx)(y.A, { guild: w, disabled: X, isDragging: el, children: el ? eR : eO }),
            z ? (0, i.jsx)(v.Ay, { name: w.name, targetNode: t, onDragOverChanged: eI }) : null,
        ],
    });
});
