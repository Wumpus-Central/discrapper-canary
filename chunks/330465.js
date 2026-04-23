n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(419354),
    d = n(837381),
    c = n(607399),
    u = n(417597),
    h = n(451988),
    A = n(827734),
    _ = n(777666),
    m = n(602853),
    g = n(67811),
    p = n(862328),
    f = n(308528),
    E = n(442433),
    x = n(817281),
    I = n(658128),
    C = n(976860),
    b = n(345942),
    N = n(260509),
    S = n(696451),
    v = n(711014),
    T = n(676279),
    y = n(263715),
    j = n(941971),
    R = n(264409),
    L = n(531053),
    O = n(647668),
    G = n(107385),
    M = n(900848),
    D = n(65611),
    U = n(652215),
    P = n(985018),
    w = n(620370);
let k = { analyticsSource: { page: U.liQ.GUILD_CHANNEL, section: U.JJy.CHANNEL_LIST, object: U.ZSU.CHANNEL } };
function V(e, t) {
    (0, E.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("49681"),
            n.e("96382"),
            n.e("20044"),
            n.e("28136"),
            n.e("82486"),
            n.e("77602"),
            n.e("68587"),
            n.e("43600"),
            n.e("86546"),
            n.e("15373"),
            n.e("63379"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("13334"),
            n.e("25961"),
            n.e("2736"),
            n.e("13848"),
            n.e("47810"),
            n.e("54828"),
            n.e("94683"),
            n.e("50796"),
            n.e("8458"),
            n.e("94253"),
            n.e("11810"),
            n.e("72756"),
            n.e("13337"),
            n.e("54469"),
            n.e("4788"),
            n.e("21162"),
        ]).then(n.bind(n, 544676));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let B = l.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: s,
            onDragEnd: E,
            route: B,
            guild: H,
            animatable: F,
            selected: W = !1,
            unread: Y = !1,
            mediaState: K,
            unavailable: z = !1,
            badge: q = 0,
            isMentionLowImportance: X,
            contextMenu: Q = V,
            draggable: Z = !1,
            sorting: J = !1,
            preloadOnClick: $ = !0,
            guildJoinRequestStatus: ee,
            height: et,
            "aria-setsize": en,
            "aria-posinset": ei,
        } = e,
        { id: el, parentId: es } = t,
        ea = e.upperBadge ?? (z ? (0, D.em)() : null != K ? (0, D.oi)(K) : void 0),
        er = e.lowerBadge ?? void 0;
    null == er && q > 0
        ? (er =
              (0, D.wN)(
                  q,
                  X ? A.A.colors.BACKGROUND_MOD_STRONG.css : A.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == er && null != ee && (er = (0, D.eW)({ guildJoinRequestStatus: ee }) ?? void 0);
    let eo = e.lowerBadgeSize ?? { width: (0, _.o6)(q) },
        [{ dragging: ed }, ec] = (0, r.i)({
            type: y.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    s?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                E?.(), (0, x.um)(v.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        eu = (0, d.Vd)(el ?? U.dJq, null != es ? 2 : 1),
        [eh, eA] = l.useState(!1),
        e_ = !J && eh,
        [em, eg] = l.useState(!1),
        [ep, ef] = l.useState(!1),
        [eE] = l.useState(() => new h.J_(70, () => ef(!0))),
        ex = (0, T.nr)() && !c.Fr;
    l.useEffect(() => () => eE.cancel(), [eE]);
    let eI = l.useCallback(() => {
            null != B ? (0, C.pX)(B, { state: k }) : (0, b.u)(el, { state: k });
        }, [el, B]),
        eC = l.useCallback(() => {
            if (null != B || null == H || z || !$) return;
            let e = (0, I.W)(H.id);
            null != e && f.A.preload(H.id, e);
        }, [B, H, z, $]),
        eb = (0, u.bG)([S.Ay], () => S.Ay.isCurrentUserGuest(el)),
        eN = l.useCallback(
            (e) => {
                null == H || eb || Q(e, H);
            },
            [H, Q, eb],
        ),
        eS = l.useCallback(
            (e) => {
                "ArrowLeft" === e.key &&
                    null != es &&
                    document.querySelector(`[aria-owns=folder-items-${es}]`)?.focus();
            },
            [es],
        ),
        ev = l.useCallback(
            (e) => {
                e ? eE.delay() : (eE.cancel(), ef(!1));
            },
            [eE],
        );
    function eT() {
        J || eA(!0);
    }
    function ey() {
        J || eA(!1);
    }
    let ej = l.useCallback(
            (e) => {
                n?.(el, e);
            },
            [el, n],
        ),
        eR = (0, m.r)(A.A.modules.guildbar.AVATAR_SIZE);
    if (null == H) return null;
    let eL = H.name;
    q > 0
        ? (eL = P.intl.formatToPlainString(P.t["/uzRss"], { guildName: H.name, mentions: q }))
        : Y && (eL = P.intl.formatToPlainString(P.t.lzqe42, { guildName: H.name }));
    let eO = (0, i.jsx)(R.A, {
            guild: H,
            show: ep,
            active: W,
            onAnimationStart: function () {
                eg(ep);
            },
            onAnimationRest: function () {
                ep || eg(!1);
            },
        }),
        eG = ex
            ? (0, i.jsx)(g.j, {
                  ariaLabel: eL,
                  name: H.name,
                  onClick: eI,
                  onMouseEnter: eT,
                  onMouseLeave: ey,
                  onMouseDown: eC,
                  onContextMenu: eN,
                  onKeyDown: eS,
                  icon: (0, N.Iv)(H, 2 * eR, e_ && F, !0),
                  selected: W || e_,
                  ...eu,
                  "aria-setsize": en,
                  "aria-posinset": ei,
                  "aria-selected": W,
              })
            : (0, i.jsx)(p.Q, {
                  selected: W,
                  children: (0, i.jsx)("div", {
                      ref: Z
                          ? (e) => {
                                ec(e);
                            }
                          : void 0,
                      "data-dnd-name": H.name,
                      "data-drop-hovering": ep,
                      children: (0, i.jsx)(g.j, {
                          ariaLabel: eL,
                          name: H.name,
                          onClick: eI,
                          onMouseEnter: eT,
                          onMouseLeave: ey,
                          onMouseDown: eC,
                          onContextMenu: eN,
                          onKeyDown: eS,
                          icon: (0, N.Iv)(H, 2 * eR, e_ && F, !0),
                          selected: W || e_,
                          ...eu,
                          "aria-setsize": en,
                          "aria-posinset": ei,
                          "aria-selected": W,
                      }),
                  }),
              }),
        eM = ep || em ? eO : eG,
        eD = (0, i.jsx)(L.g4, { children: (0, i.jsx)(G.A, {}) }),
        eU = ex
            ? (0, i.jsx)(o.animated.div, {
                  ref: Z
                      ? (e) => {
                            ec(e);
                        }
                      : void 0,
                  "data-dnd-name": H.name,
                  style: { scale: null == et ? 1 : et },
                  "data-drop-hovering": ep,
                  className: a()(w.rN, { [w.p9]: J, [w.oR]: ep, [w.wH]: ep || W }),
                  children: (0, i.jsx)(p.Q, {
                      selected: !0,
                      upperBadge: ea,
                      lowerBadge: er,
                      lowerBadgeSize: eo,
                      children: eM,
                  }),
              })
            : (0, i.jsx)(o.animated.div, {
                  style: { scale: null == et ? 1 : et },
                  className: a()(w.rN, { [w.p9]: J, [w.oR]: ep, [w.wH]: ep || W }),
                  "data-drop-hovering": ep,
                  children: (0, i.jsx)(p.Q, {
                      selected: W,
                      upperBadge: ea,
                      lowerBadge: er,
                      lowerBadgeSize: eo,
                      children: eM,
                  }),
              });
    return (0, i.jsxs)(M.c, {
        ref: ej,
        children: [
            (0, i.jsx)(j.A, { hovered: !ed && e_, selected: !ed && W, unread: !ed && Y, className: w.Io }),
            (0, i.jsx)(O.A, { guild: H, disabled: J, isDragging: ed, children: ed ? eD : eU }),
            Z ? (0, i.jsx)(L.Ay, { name: H.name, targetNode: t, onDragOverChanged: ev }) : null,
        ],
    });
});
