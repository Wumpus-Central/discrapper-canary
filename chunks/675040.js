n.d(t, { A: () => eu });
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a);
n(926675);
var c = n(297264),
    d = n(939249),
    u = n(140735),
    g = n(834730),
    m = n(216964),
    x = n(661531),
    f = n(103557),
    h = n(22231),
    p = n(915089),
    I = n(409626),
    j = n(692969),
    A = n(201438),
    E = n(562153),
    v = n(183555),
    C = n(735321),
    S = n(451395),
    b = n(823016),
    T = n(788593),
    N = n(492280),
    y = n(866665),
    k = n(147925),
    w = n(922016);
n(321073);
var R = n(477782),
    L = n(980707),
    O = n(761915),
    P = n(877784),
    _ = n(53788),
    D = n(148795),
    G = n(214947),
    M = n(375708),
    U =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let F = {
        [O.X.BETTER_THAN_YOU]: { getText: () => M.intl.string(M.t.jbIRBE), iconRole: "ribbon" },
        [O.X.CASUAL]: { getText: () => M.intl.string(M.t.xcFFv6), iconRole: "ribbon" },
        [O.X.INTERMEDIATE]: { getText: () => M.intl.string(M.t["A/mIs/"]), iconRole: "ribbon" },
        [O.X.EXPERT]: { getText: () => M.intl.string(M.t.RIOFc2), iconRole: "ribbon" },
        [O.X.OBSESSED]: { getText: () => M.intl.string(M.t.isPJDu), iconRole: "thumbsUp" },
        [O.X.LOVE_IT]: { getText: () => M.intl.string(M.t["1rN7BF"]), iconRole: "thumbsUp" },
        [O.X.KIND_OF_LOVE_IT]: { getText: () => M.intl.string(M.t.bCBpVg), iconRole: "thumbsUp" },
        [O.X.KIND_OF_HATE_IT]: { getText: () => M.intl.string(M.t["/WcmcP"]), iconRole: "thumbsDown" },
        [O.X.RAGE_QUITTING]: { getText: () => M.intl.string(M.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [O.X.OPEN_TO_PLAY]: { getText: () => M.intl.string(M.t.q30PoH), iconRole: "friends" },
        [O.X.LOOKING_FOR_GROUP]: { getText: () => M.intl.string(M.t.DWWAAQ), iconRole: "friends" },
        [O.X.LOOKING_FOR_TIPS]: { getText: () => M.intl.string(M.t.KQDVvH), iconRole: "friends" },
        [O.X.OPEN_TO_TEACH]: { getText: () => M.intl.string(M.t["5HhQo+"]), iconRole: "friends" },
        [O.X.LOOKING_TO_DISCUSS]: { getText: () => M.intl.string(M.t.GipOCq), iconRole: "friends" },
    },
    W = (function (e) {
        let t = {};
        for (let n of Object.keys(F)) {
            let i = F[n];
            null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
        }
        return t;
    })({ [U.RIBBON]: P.q, [U.THUMBS_UP]: _.G, [U.THUMBS_DOWN]: D.d, [U.FRIENDS]: G.$ });
function H(e) {
    let t = W[e];
    return null != t ? t : null;
}
var V = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let B = {
    skill_level: {
        getLabel: () => M.intl.string(M.t.MKqADM),
        type: "radio",
        tags: [O.X.CASUAL, O.X.INTERMEDIATE, O.X.EXPERT, O.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => M.intl.string(M.t["7/umul"]),
        type: "checkbox",
        tags: [O.X.OBSESSED, O.X.LOVE_IT, O.X.KIND_OF_LOVE_IT, O.X.KIND_OF_HATE_IT, O.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => M.intl.string(M.t["5Dez17"]),
        type: "checkbox",
        tags: [
            O.X.LOOKING_FOR_GROUP,
            O.X.OPEN_TO_PLAY,
            O.X.LOOKING_FOR_TIPS,
            O.X.OPEN_TO_TEACH,
            O.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var z = n(382701);
let X = r.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: i, onClose: l } = e;
    return (0, s.jsx)(L.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": M.intl.string(M.t.r6EJOu),
        onClose: l,
        onSelect: () => {},
        className: z.X2,
        children: Object.entries(B).map((e) => {
            let l,
                [r, a] = e,
                o =
                    ((l = []),
                    a.type === V.RADIO &&
                        l.push(
                            (0, s.jsx)(
                                R.iD,
                                {
                                    id: `${r}-none`,
                                    group: r,
                                    label: M.intl.string(M.t.PoWNfe),
                                    checked: !a.tags.some((e) => t.includes(e)),
                                    action: () => i(a.tags),
                                },
                                "none",
                            ),
                        ),
                    a.tags.forEach((e) => {
                        let i = W[e];
                        null != i &&
                            (a.type === V.RADIO
                                ? l.push(
                                      (0, s.jsx)(
                                          R.iD,
                                          {
                                              id: e,
                                              group: r,
                                              label: i.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : l.push(
                                      (0, s.jsx)(
                                          R.sL,
                                          { id: e, label: i.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    l);
            return (0, s.jsx)(R.rX, { label: a.getLabel(), children: o }, r);
        }),
    });
});
function K(e) {
    let { tags: t, onTagsChange: n, onOpen: i, ref: l } = e,
        a = (0, r.useRef)(null),
        o = (0, r.useMemo)(() => (null != t ? t : []), [t]),
        c = (0, r.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(o),
                    l = "added";
                if (t) {
                    let t = Object.values(B).find((t) => t.tags.includes(e));
                    if (null == t) return;
                    t.tags.forEach((e) => {
                        i.delete(e);
                    }),
                        i.add(e);
                } else i.has(e) ? (i.delete(e), (l = "removed")) : i.add(e);
                n(Array.from(i), l);
            },
            [o, n],
        ),
        u = (0, r.useCallback)(
            (e) => {
                let t = new Set(o);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    n(Array.from(t), "removed");
            },
            [o, n],
        );
    return (0, s.jsx)(w.Y, {
        targetElementRef: a,
        position: "right",
        align: "top",
        onRequestOpen: i,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(X, { currentTags: o, onTagSelect: c, onNoneSelect: u, onClose: t });
        },
        children: (e) =>
            (0, s.jsx)("div", {
                ref: (e) => (
                    null != e && ((a.current = e), (l.current = e)),
                    () => {
                        (a.current = null), (l.current = null);
                    }
                ),
                children: (0, s.jsx)(d.D, {
                    ...e,
                    className: z.c9,
                    "aria-label": M.intl.string(M.t.r6EJOu),
                    children: (0, s.jsx)(g.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: M.intl.string(M.t.fZSejy),
                    }),
                }),
            }),
    });
}
var Y = n(789645);
function q(e) {
    let { tag: t, onRemove: n, ref: i } = e,
        l = H(t);
    if (null == l) return null;
    let { getText: r, icon: a } = l;
    return (0, s.jsxs)("li", {
        className: z.Tc,
        ref: i,
        children: [
            (0, s.jsx)(a, { size: "xxs" }),
            (0, s.jsx)(g.E, { variant: "text-xxs/medium", color: "text-subtle", children: r() }),
            null != n &&
                (0, s.jsx)(y.m, {
                    text: M.intl.string(M.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, s.jsx)(d.D, {
                        onClick: n,
                        className: z.DT,
                        "aria-label": M.intl.formatToPlainString(M.t.GCn1ne, { tag: r() }),
                        children: (0, s.jsx)(Y.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
var Z = n(149253);
function Q(e) {
    let { tags: t, allowEditing: n, widgetType: i, gameId: l, className: a, disableInteraction: c = !1 } = e,
        d = n && !c,
        u = t?.filter((e) => null != H(e)) ?? [],
        g = u.length > 0,
        m = d && (0, C.mS)(i) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, v.NJ)(),
        h = (0, r.useRef)(new Map()),
        p = (0, r.useRef)(null),
        I = (0, r.useRef)(null),
        [j, A] = (0, r.useState)(0),
        [E, S] = (0, r.useState)(!1),
        b = et(p, I, u, h, A),
        T = (0, r.useCallback)(
            (e, t) => {
                (0, C.s1)(i, l, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: i, gameId: l });
            },
            [i, l, f],
        ),
        N = (0, r.useCallback)(() => {
            f({ action: "PRESS_ADD_TAG", widgetEdited: i });
        }, [f, i]);
    if (
        ((0, r.useEffect)(
            () => (
                b(),
                window.addEventListener("resize", b),
                () => {
                    window.removeEventListener("resize", b);
                }
            ),
            [b, u?.join("")],
        ),
        !g && !m)
    )
        return null;
    let y = E ? u : u.slice(0, u.length - j);
    return (0, s.jsxs)("div", {
        className: o()(Z.I4, a),
        children: [
            g &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("ul", {
                            className: Z.Tw,
                            "aria-label": M.intl.string(M.t.EfjTi4),
                            children: y.map((e) =>
                                (0, s.jsx)(
                                    q,
                                    {
                                        tag: e,
                                        onRemove: d
                                            ? () => {
                                                  (0, C.tg)(i, l, e),
                                                      f({ action: "TAG_REMOVED", widgetEdited: i, gameId: l });
                                              }
                                            : void 0,
                                        ref: (t) => {
                                            null != t && h.current.set(e, t);
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                        j > 0 &&
                            (0, s.jsx)(ee, {
                                buttonRef: p,
                                isExpanded: E,
                                numberOfOverflowingTags: j,
                                onExpandTags: () => {
                                    S(!0), x({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    S(!1), x({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: c,
                            }),
                    ],
                }),
            m && (0, s.jsx)(K, { tags: t, onTagsChange: T, onOpen: N, ref: I }),
        ],
    });
}
function J(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, s.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function $() {
    return (0, s.jsx)(k.A, { direction: k.A.Directions.LEFT, width: 12, height: 12, className: Z.OW });
}
function ee(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: i,
            onCollapseTags: l,
            disableInteraction: r,
            buttonRef: a,
        } = e,
        c = t ? M.intl.string(M.t.z9VPrQ) : M.intl.string(M.t.mriLXL),
        u = t ? M.intl.string(M.t.z9VPrQ) : M.intl.formatToPlainString(M.t.F6iMs4, { count: n });
    return r
        ? (0, s.jsx)("div", {
              className: o()(Z.X1, Z.r9),
              ref: a,
              children: (0, s.jsx)(J, { numberOfOverflowingTags: n }),
          })
        : (0, s.jsx)(y.m, {
              text: c,
              ariaHidden: t,
              children: (0, s.jsx)(d.D, {
                  innerRef: a,
                  onClick: t ? l : i,
                  "aria-label": u,
                  className: t ? Z.cS : Z.X1,
                  children: t ? (0, s.jsx)($, {}) : (0, s.jsx)(J, { numberOfOverflowingTags: n }),
              }),
          });
}
let et = (e, t, n, i, l) =>
    (0, r.useCallback)(() => {
        if (null == n) return void l(0);
        let s = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            a = r > 0 ? 8 : 4,
            o = 0,
            c = 0,
            d = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = d.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        c = 0;
        for (let e = o; e < n.length; e++) {
            let t = d.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296 - s - r - a) break;
                o++;
            }
        }
        l(n.length - o);
    }, [e, t, n?.join(""), i, l]);
var en = n(858808),
    ei = n(365611),
    el = n(207730);
function es(e) {
    let { index: t, widgetType: n, game: i, children: l, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, b.r)();
    return (0, s.jsx)(S.mG, {
        index: t,
        itemId: i.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: i, widgetType: n, getWidth: r },
        "aria-label": M.intl.formatToPlainString(M.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, C.Un)(n, e, t),
        onEnd: () => a(i.gameId),
        className: el.vF,
        dropBeforeClassName: el.A,
        dropAfterClassName: el.Ze,
        draggingClassName: el.Id,
        children: l,
    });
}
function er(e) {
    let { gameId: t, userId: n, gameName: i, ...l } = e,
        r = (0, j.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: I.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, s.jsx)(c.D, { ...l, children: i })
        : (0, s.jsx)(c.D, { ...l, children: (0, s.jsx)(d.D, { onClick: r, className: el.sd, children: i }) });
}
function ea(e) {
    let { user: t, guildId: n, channelId: i, id: l } = e;
    return (0, s.jsx)(u.A, { id: l, children: M.intl.format(M.t.TM0XDY, { name: E.Ay.getName(n, i, t) }) });
}
function eo(e) {
    let { text: t, className: n } = e;
    return (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function ec(e) {
    let { text: t, user: n, guildId: i, channelId: l } = e,
        r = (0, p.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, s.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)(m.c, { size: "xxs", color: x.A.colors.ICON_MUTED, className: el.Ls }),
                  (0, s.jsx)(ea, { user: n, guildId: i, channelId: l, id: r }),
                  (0, s.jsx)(eo, { text: t }),
              ],
          });
}
function ed(e) {
    let { text: t, user: n, guildId: i, channelId: l, widgetType: a, gameId: c } = e,
        g = (0, p.GV)(),
        m = (0, p.GV)(),
        { trackUserProfileEditAction: I } = (0, v.NJ)(),
        [j, A] = r.useState("idle"),
        [E, S] = r.useState(t ?? ""),
        b = r.useRef(null),
        T = r.useRef(null),
        N = M.intl.string(M.t.xKSfBT),
        y = null != t && "" !== t.trim(),
        k = r.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: a }), A("editing");
        }, [a, I]),
        w = r.useCallback(() => {
            let e = E.trim(),
                n = e !== (t ?? "").trim();
            (0, C.oc)(a, c, "" !== e ? e : void 0),
                A("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: a, gameId: c });
        }, [a, c, E, t, I]),
        R = r.useCallback((e) => {
            S(e);
        }, []);
    return (
        r.useEffect(() => {
            "editing" === j && S(t ?? "");
        }, [t, j]),
        r.useEffect(() => {
            "completed" === j && b.current?.focus();
        }, [j]),
        "editing" === j
            ? (0, s.jsxs)("div", {
                  className: el.kS,
                  children: [
                      (0, s.jsx)(u.A, { tag: "label", htmlFor: g, children: M.intl.string(M.t.JxKXeT) }),
                      (0, s.jsx)(f.f, {
                          id: g,
                          value: E,
                          placeholder: N,
                          onChange: R,
                          onBlur: w,
                          rows: 3,
                          autoFocus: !0,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), w());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, s.jsxs)("div", {
                  ref: T,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: k,
                  className: el.Vg,
                  children: [
                      (0, s.jsx)(h.PencilIcon, { size: "xxs", color: x.A.colors.ICON_MUTED, className: el.Ls }),
                      (0, s.jsx)(ea, { user: n, guildId: i, channelId: l, id: m }),
                      (0, s.jsx)(eo, { text: t ?? N, className: o()(el.qC, !y && el.qf) }),
                      (0, s.jsx)(d.D, {
                          innerRef: b,
                          "aria-label": M.intl.string(M.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), k();
                          },
                          focusProps: { ringTarget: T },
                      }),
                  ],
              })
    );
}
function eu(e) {
    let {
            user: t,
            guildId: n,
            channelId: i,
            game: l,
            widgetType: a,
            allowEditing: d,
            disableInteraction: u = !1,
            index: g,
            onRemoveGame: m,
            coverRef: x,
            className: f,
        } = e,
        h = r.useRef(null),
        { gameId: p, comment: I, tags: j } = l,
        { coverImageUrl: E, gameName: v, isLoading: y } = (0, A.A)(p),
        k = { variant: "heading-sm/medium", color: "text-default" },
        w = d && !u,
        R = 1 === (0, C.cv)(a),
        L = w && (0, C.y9)(a),
        O = w && !R,
        { registerDragHandleRef: P } = (0, b.r)();
    if (y) return (0, s.jsx)(N.E, {});
    function _() {
        return (0, s.jsx)(T.A, {
            coverRef: x,
            className: null == E || u ? void 0 : ei.iL,
            imageSrc: E,
            gameName: v,
            gameId: p,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function D() {
        return (0, s.jsxs)("div", {
            ref: h,
            className: o()(el.Nr, f),
            children: [
                O
                    ? (0, s.jsxs)("div", {
                          className: el.An,
                          children: [_(), (0, s.jsx)(S.jV, { buttonRef: P(l.gameId), className: el.BU })],
                      })
                    : _(),
                (0, s.jsxs)("div", {
                    className: el.zH,
                    children: [
                        u
                            ? (0, s.jsx)(c.D, { ...k, children: v })
                            : (0, s.jsx)(er, { gameId: p, userId: t.id, gameName: v, ...k }),
                        L
                            ? (0, s.jsx)(ed, { text: I, user: t, guildId: n, channelId: i, widgetType: a, gameId: p })
                            : (0, s.jsx)(ec, { text: I, user: t, guildId: n, channelId: i }),
                        (0, s.jsx)(Q, {
                            tags: j,
                            allowEditing: d,
                            widgetType: a,
                            gameId: p,
                            disableInteraction: u,
                            className: el._A,
                        }),
                    ],
                }),
                w && (0, s.jsx)(en.A, { game: l, widgetType: a, className: el.vS, onRemove: () => m?.(l.gameId) }),
            ],
        });
    }
    return O
        ? (0, s.jsx)(es, {
              index: g ?? 0,
              widgetType: a,
              game: l,
              getWidth: () => h.current?.offsetWidth,
              children: D(),
          })
        : D();
}
