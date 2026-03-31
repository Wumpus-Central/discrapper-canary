"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(131346),
    o = n(382222),
    c = n(837381),
    d = n(607399),
    u = n(417597),
    h = n(451988),
    A = n(397927),
    m = n(308528),
    _ = n(442433),
    g = n(817281),
    p = n(658128),
    f = n(976860),
    x = n(345942),
    E = n(260509),
    C = n(696451),
    I = n(711014),
    N = n(676279),
    S = n(263715),
    b = n(941971),
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
    (0, _.L3)(e, async () => {
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
            onDragEnd: _,
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
            sorting: q = !1,
            preloadOnClick: X = !0,
            guildJoinRequestStatus: Q,
            height: J,
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
        : null == ei && null != Q && (ei = (0, O.eW)({ guildJoinRequestStatus: Q }) ?? void 0);
    let es = e.lowerBadgeSize ?? { width: (0, A.o6S)(K) },
        [{ dragging: el }, ea] = (0, r.i)({
            type: S.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    l?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                _?.(), (0, g.um)(I.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        er = (0, c.Vd)(ee ?? L.dJq, null != et ? 2 : 1),
        [eo, ec] = s.useState(!1),
        ed = !q && eo,
        [eu, eh] = s.useState(!1),
        [eA, em] = s.useState(!1),
        [e_] = s.useState(() => new h.J_(70, () => em(!0))),
        eg = (0, N.nr)() && !d.Fr;
    s.useEffect(() => () => e_.cancel(), [e_]);
    let ep = s.useCallback(() => {
            null != P ? (0, f.pX)(P, { state: G }) : (0, x.u)(ee, { state: G });
        }, [ee, P]),
        ef = s.useCallback(() => {
            if (null != P || null == w || F || !X) return;
            let e = (0, p.W)(w.id);
            null != e && m.A.preload(w.id, e);
        }, [P, w, F, X]),
        ex = (0, u.bG)([C.Ay], () => C.Ay.isCurrentUserGuest(ee)),
        eE = s.useCallback(
            (e) => {
                null == w || ex || Y(e, w);
            },
            [w, Y, ex],
        ),
        eC = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key &&
                    null != et &&
                    document.querySelector(`[aria-owns=folder-items-${et}]`)?.focus();
            },
            [et],
        ),
        eI = s.useCallback(
            (e) => {
                e ? e_.delay() : (e_.cancel(), em(!1));
            },
            [e_],
        );
    function eN() {
        q || ec(!0);
    }
    function eS() {
        q || ec(!1);
    }
    let eb = s.useCallback(
            (e) => {
                n?.(ee, e);
            },
            [ee, n],
        ),
        eT = (0, A.rdh)(A.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == w) return null;
    let ev = w.name;
    K > 0
        ? (ev = M.intl.formatToPlainString(M.t["/uzRss"], { guildName: w.name, mentions: K }))
        : B && (ev = M.intl.formatToPlainString(M.t.lzqe42, { guildName: w.name }));
    let ey = (0, i.jsx)(T.A, {
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
        ej = eg
            ? (0, i.jsx)(A.jlP, {
                  ariaLabel: ev,
                  name: w.name,
                  onClick: ep,
                  onMouseEnter: eN,
                  onMouseLeave: eS,
                  onMouseDown: ef,
                  onContextMenu: eE,
                  onKeyDown: eC,
                  icon: (0, E.Iv)(w, 2 * eT, ed && k, !0),
                  selected: V || ed,
                  ...er,
                  "aria-setsize": $,
                  "aria-posinset": Z,
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
                      "data-dnd-name": w.name,
                      "data-drop-hovering": eA,
                      children: (0, i.jsx)(A.jlP, {
                          ariaLabel: ev,
                          name: w.name,
                          onClick: ep,
                          onMouseEnter: eN,
                          onMouseLeave: eS,
                          onMouseDown: ef,
                          onContextMenu: eE,
                          onKeyDown: eC,
                          icon: (0, E.Iv)(w, 2 * eT, ed && k, !0),
                          selected: V || ed,
                          ...er,
                          "aria-setsize": $,
                          "aria-posinset": Z,
                          "aria-selected": V,
                      }),
                  }),
              }),
        eR = eA || eu ? ey : ej,
        eO = (0, i.jsx)(v.g4, { children: (0, i.jsx)(j.A, {}) }),
        eL = eg
            ? (0, i.jsx)(o.animated.div, {
                  ref: z
                      ? (e) => {
                            ea(e);
                        }
                      : void 0,
                  "data-dnd-name": w.name,
                  style: { scale: null == J ? 1 : J },
                  "data-drop-hovering": eA,
                  className: a()(D.rN, { [D.p9]: q, [D.oR]: eA, [D.wH]: eA || V }),
                  children: (0, i.jsx)(A.Qk9, {
                      selected: !0,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: es,
                      children: eR,
                  }),
              })
            : (0, i.jsx)(o.animated.div, {
                  style: { scale: null == J ? 1 : J },
                  className: a()(D.rN, { [D.p9]: q, [D.oR]: eA, [D.wH]: eA || V }),
                  "data-drop-hovering": eA,
                  children: (0, i.jsx)(A.Qk9, {
                      selected: V,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: es,
                      children: eR,
                  }),
              });
    return (0, i.jsxs)(R.c, {
        ref: eb,
        children: [
            (0, i.jsx)(b.A, { hovered: !el && ed, selected: !el && V, unread: !el && B, className: D.Io }),
            (0, i.jsx)(y.A, { guild: w, disabled: q, isDragging: el, children: el ? eO : eL }),
            z ? (0, i.jsx)(v.Ay, { name: w.name, targetNode: t, onDragOverChanged: eI }) : null,
        ],
    });
});
