n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(687498),
    d = n(837381),
    c = n(607399),
    u = n(417597),
    h = n(451988),
    A = n(397927),
    _ = n(308528),
    m = n(442433),
    g = n(817281),
    p = n(658128),
    f = n(976860),
    x = n(345942),
    E = n(260509),
    I = n(696451),
    C = n(711014),
    N = n(676279),
    T = n(263715),
    S = n(941971),
    b = n(264409),
    v = n(531053),
    y = n(647668),
    j = n(107385),
    R = n(900848),
    O = n(65611),
    L = n(652215),
    M = n(985018),
    D = n(135759);
let U = { analyticsSource: { page: L.liQ.GUILD_CHANNEL, section: L.JJy.CHANNEL_LIST, object: L.ZSU.CHANNEL } };
function G(e, t) {
    (0, m.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("43600"),
            n.e("68587"),
            n.e("63379"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("33144"),
            n.e("35894"),
            n.e("50796"),
            n.e("94253"),
            n.e("8458"),
            n.e("11810"),
            n.e("90226"),
            n.e("30453"),
            n.e("56475"),
            n.e("54469"),
            n.e("8442"),
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
            selected: B = !1,
            unread: V = !1,
            mediaState: H,
            unavailable: F = !1,
            badge: W = 0,
            isMentionLowImportance: K,
            contextMenu: Y = G,
            draggable: z = !1,
            sorting: q = !1,
            preloadOnClick: X = !0,
            guildJoinRequestStatus: $,
            height: Q,
            "aria-setsize": J,
            "aria-posinset": Z,
        } = e,
        { id: ee, parentId: et } = t,
        en = e.upperBadge ?? (F ? (0, O.em)() : null != H ? (0, O.oi)(H) : void 0),
        ei = e.lowerBadge ?? void 0;
    null == ei && W > 0
        ? (ei =
              (0, O.wN)(
                  W,
                  K ? A.LU0.colors.BACKGROUND_MOD_STRONG.css : A.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == ei && null != $ && (ei = (0, O.eW)({ guildJoinRequestStatus: $ }) ?? void 0);
    let el = e.lowerBadgeSize ?? { width: (0, A.o6S)(W) },
        [{ dragging: es }, ea] = (0, r.i)({
            type: T.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    s?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                m?.(), (0, g.um)(C.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        er = (0, d.Vd)(ee ?? L.dJq, null != et ? 2 : 1),
        [eo, ed] = l.useState(!1),
        ec = !q && eo,
        [eu, eh] = l.useState(!1),
        [eA, e_] = l.useState(!1),
        [em] = l.useState(() => new h.J_(70, () => e_(!0))),
        eg = (0, N.nr)() && !c.Fr;
    l.useEffect(() => () => em.cancel(), [em]);
    let ep = l.useCallback(() => {
            null != P ? (0, f.pX)(P, { state: U }) : (0, x.u)(ee, { state: U });
        }, [ee, P]),
        ef = l.useCallback(() => {
            if (null != P || null == k || F || !X) return;
            let e = (0, p.W)(k.id);
            null != e && _.A.preload(k.id, e);
        }, [P, k, F, X]),
        ex = (0, u.bG)([I.Ay], () => I.Ay.isCurrentUserGuest(ee)),
        eE = l.useCallback(
            (e) => {
                null == k || ex || Y(e, k);
            },
            [k, Y, ex],
        ),
        eI = l.useCallback(
            (e) => {
                "ArrowLeft" === e.key &&
                    null != et &&
                    document.querySelector(`[aria-owns=folder-items-${et}]`)?.focus();
            },
            [et],
        ),
        eC = l.useCallback(
            (e) => {
                e ? em.delay() : (em.cancel(), e_(!1));
            },
            [em],
        );
    function eN() {
        q || ed(!0);
    }
    function eT() {
        q || ed(!1);
    }
    let eS = l.useCallback(
            (e) => {
                n?.(ee, e);
            },
            [ee, n],
        ),
        eb = (0, A.rdh)(A.LU0.modules.guildbar.AVATAR_SIZE);
    if (null == k) return null;
    let ev = k.name;
    W > 0
        ? (ev = M.intl.formatToPlainString(M.t["/uzRss"], { guildName: k.name, mentions: W }))
        : V && (ev = M.intl.formatToPlainString(M.t.lzqe42, { guildName: k.name }));
    let ey = (0, i.jsx)(b.A, {
            guild: k,
            show: eA,
            active: B,
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
                  name: k.name,
                  onClick: ep,
                  onMouseEnter: eN,
                  onMouseLeave: eT,
                  onMouseDown: ef,
                  onContextMenu: eE,
                  onKeyDown: eI,
                  icon: (0, E.Iv)(k, 2 * eb, ec && w, !0),
                  selected: B || ec,
                  ...er,
                  "aria-setsize": J,
                  "aria-posinset": Z,
                  "aria-selected": B,
              })
            : (0, i.jsx)(A.Qk9, {
                  selected: B,
                  children: (0, i.jsx)("div", {
                      ref: z
                          ? (e) => {
                                ea(e);
                            }
                          : void 0,
                      "data-dnd-name": k.name,
                      "data-drop-hovering": eA,
                      children: (0, i.jsx)(A.jlP, {
                          ariaLabel: ev,
                          name: k.name,
                          onClick: ep,
                          onMouseEnter: eN,
                          onMouseLeave: eT,
                          onMouseDown: ef,
                          onContextMenu: eE,
                          onKeyDown: eI,
                          icon: (0, E.Iv)(k, 2 * eb, ec && w, !0),
                          selected: B || ec,
                          ...er,
                          "aria-setsize": J,
                          "aria-posinset": Z,
                          "aria-selected": B,
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
                  "data-dnd-name": k.name,
                  style: { scale: null == Q ? 1 : Q },
                  "data-drop-hovering": eA,
                  className: a()(D.rN, { [D.p9]: q, [D.oR]: eA, [D.wH]: eA || B }),
                  children: (0, i.jsx)(A.Qk9, {
                      selected: !0,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: el,
                      children: eR,
                  }),
              })
            : (0, i.jsx)(o.animated.div, {
                  style: { scale: null == Q ? 1 : Q },
                  className: a()(D.rN, { [D.p9]: q, [D.oR]: eA, [D.wH]: eA || B }),
                  "data-drop-hovering": eA,
                  children: (0, i.jsx)(A.Qk9, {
                      selected: B,
                      upperBadge: en,
                      lowerBadge: ei,
                      lowerBadgeSize: el,
                      children: eR,
                  }),
              });
    return (0, i.jsxs)(R.c, {
        ref: eS,
        children: [
            (0, i.jsx)(S.A, { hovered: !es && ec, selected: !es && B, unread: !es && V, className: D.Io }),
            (0, i.jsx)(y.A, { guild: k, disabled: q, isDragging: es, children: es ? eO : eL }),
            z ? (0, i.jsx)(v.Ay, { name: k.name, targetNode: t, onDragOverChanged: eC }) : null,
        ],
    });
});
