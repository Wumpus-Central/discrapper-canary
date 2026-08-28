n.d(t, { A: () => eu });
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a);
n(926675);
var c = n(297264),
    u = n(939249),
    d = n(140735),
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
    y = n(492280),
    N = n(866665),
    k = n(789645),
    w = n(147925);
n(321073);
var R = n(477782),
    L = n(980707),
    O = n(922016),
    P = n(761915),
    _ = n(877784),
    D = n(53788),
    G = n(148795),
    M = n(214947),
    U = n(375708),
    F =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let W = {
        [P.X.BETTER_THAN_YOU]: { getText: () => U.intl.string(U.t.jbIRBE), iconRole: "ribbon" },
        [P.X.CASUAL]: { getText: () => U.intl.string(U.t.xcFFv6), iconRole: "ribbon" },
        [P.X.INTERMEDIATE]: { getText: () => U.intl.string(U.t["A/mIs/"]), iconRole: "ribbon" },
        [P.X.EXPERT]: { getText: () => U.intl.string(U.t.RIOFc2), iconRole: "ribbon" },
        [P.X.OBSESSED]: { getText: () => U.intl.string(U.t.isPJDu), iconRole: "thumbsUp" },
        [P.X.LOVE_IT]: { getText: () => U.intl.string(U.t["1rN7BF"]), iconRole: "thumbsUp" },
        [P.X.KIND_OF_LOVE_IT]: { getText: () => U.intl.string(U.t.bCBpVg), iconRole: "thumbsUp" },
        [P.X.KIND_OF_HATE_IT]: { getText: () => U.intl.string(U.t["/WcmcP"]), iconRole: "thumbsDown" },
        [P.X.RAGE_QUITTING]: { getText: () => U.intl.string(U.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [P.X.OPEN_TO_PLAY]: { getText: () => U.intl.string(U.t.q30PoH), iconRole: "friends" },
        [P.X.LOOKING_FOR_GROUP]: { getText: () => U.intl.string(U.t.DWWAAQ), iconRole: "friends" },
        [P.X.LOOKING_FOR_TIPS]: { getText: () => U.intl.string(U.t.KQDVvH), iconRole: "friends" },
        [P.X.OPEN_TO_TEACH]: { getText: () => U.intl.string(U.t["5HhQo+"]), iconRole: "friends" },
        [P.X.LOOKING_TO_DISCUSS]: { getText: () => U.intl.string(U.t.GipOCq), iconRole: "friends" },
    },
    H = (function (e) {
        let t = {};
        for (let n of Object.keys(W)) {
            let i = W[n];
            null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
        }
        return t;
    })({ [F.RIBBON]: _.q, [F.THUMBS_UP]: D.G, [F.THUMBS_DOWN]: G.d, [F.FRIENDS]: M.$ });
function V(e) {
    let t = H[e];
    return null != t ? t : null;
}
var B = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let z = {
    skill_level: {
        getLabel: () => U.intl.string(U.t.MKqADM),
        type: "radio",
        tags: [P.X.CASUAL, P.X.INTERMEDIATE, P.X.EXPERT, P.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => U.intl.string(U.t["7/umul"]),
        type: "checkbox",
        tags: [P.X.OBSESSED, P.X.LOVE_IT, P.X.KIND_OF_LOVE_IT, P.X.KIND_OF_HATE_IT, P.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => U.intl.string(U.t["5Dez17"]),
        type: "checkbox",
        tags: [
            P.X.LOOKING_FOR_GROUP,
            P.X.OPEN_TO_PLAY,
            P.X.LOOKING_FOR_TIPS,
            P.X.OPEN_TO_TEACH,
            P.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var X = n(149253);
let K = r.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: i, onClose: l } = e;
    return (0, s.jsx)(L.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": U.intl.string(U.t.r6EJOu),
        onClose: l,
        onSelect: () => {},
        className: X.VS,
        children: Object.entries(z).map((e) => {
            let l,
                [r, a] = e,
                o =
                    ((l = []),
                    a.type === B.RADIO &&
                        l.push(
                            (0, s.jsx)(
                                R.iD,
                                {
                                    id: `${r}-none`,
                                    group: r,
                                    label: U.intl.string(U.t.PoWNfe),
                                    checked: !a.tags.some((e) => t.includes(e)),
                                    action: () => i(a.tags),
                                },
                                "none",
                            ),
                        ),
                    a.tags.forEach((e) => {
                        let i = H[e];
                        null != i &&
                            (a.type === B.RADIO
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
function Y(e) {
    let { tags: t, widgetType: n, gameId: i, ref: l } = e,
        a = (0, r.useRef)(null),
        { trackUserProfileEditAction: o } = (0, v.NJ)(),
        c = (0, r.useMemo)(() => (null != t ? t : []), [t]),
        d = (0, r.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = new Set(c);
                if (t) {
                    let t = Object.values(z).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            l.delete(e);
                        }),
                        l.add(e),
                        o({ action: "TAG_ADDED", widgetEdited: n, gameId: i }));
                } else
                    l.has(e)
                        ? (l.delete(e), o({ action: "TAG_REMOVED", widgetEdited: n, gameId: i }))
                        : (l.add(e), o({ action: "TAG_ADDED", widgetEdited: n, gameId: i }));
                (0, C.s1)(n, i, Array.from(l));
            },
            [c, o, n, i],
        ),
        m = (0, r.useCallback)(
            (e) => {
                let t = new Set(c);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    o({ action: "TAG_REMOVED", widgetEdited: n, gameId: i }),
                    (0, C.s1)(n, i, Array.from(t));
            },
            [c, o, n, i],
        );
    return (0, s.jsx)(O.Y, {
        targetElementRef: a,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            o({ action: "PRESS_ADD_TAG", widgetEdited: n });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(K, { currentTags: c, onTagSelect: d, onNoneSelect: m, onClose: t });
        },
        children: (e) =>
            (0, s.jsx)("div", {
                ref: (e) => (
                    null != e && ((a.current = e), (l.current = e)),
                    () => {
                        (a.current = null), (l.current = null);
                    }
                ),
                children: (0, s.jsx)(u.D, {
                    ...e,
                    className: X.c9,
                    "aria-label": U.intl.string(U.t.r6EJOu),
                    children: (0, s.jsx)(g.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: U.intl.string(U.t.fZSejy),
                    }),
                }),
            }),
    });
}
function q(e) {
    let { tags: t, allowEditing: n, widgetType: i, gameId: l, className: a, disableInteraction: c = !1 } = e,
        u = n && !c,
        d = t?.filter((e) => null != V(e)) ?? [],
        g = d.length > 0,
        m = u && (0, C.mS)(i) && d.length < 20,
        { trackUserProfileAction: x } = (0, v.NJ)(),
        f = (0, r.useRef)(new Map()),
        h = (0, r.useRef)(null),
        p = (0, r.useRef)(null),
        [I, j] = (0, r.useState)(0),
        [A, E] = (0, r.useState)(!1),
        S = ee(h, p, d, f, j);
    if (
        ((0, r.useEffect)(
            () => (
                S(),
                window.addEventListener("resize", S),
                () => {
                    window.removeEventListener("resize", S);
                }
            ),
            [S, d?.join("")],
        ),
        !g && !m)
    )
        return null;
    let b = A ? d : d.slice(0, d.length - I);
    return (0, s.jsxs)("div", {
        className: o()(X.I4, a),
        children: [
            g &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("ul", {
                            className: X.Tw,
                            "aria-label": U.intl.string(U.t.EfjTi4),
                            children: b.map((e) =>
                                (0, s.jsx)(
                                    Z,
                                    {
                                        tag: e,
                                        showEditingControls: u,
                                        gameId: l,
                                        widgetType: i,
                                        ref: (t) => {
                                            null != t && f.current.set(e, t);
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                        I > 0 &&
                            (0, s.jsx)($, {
                                buttonRef: h,
                                isExpanded: A,
                                numberOfOverflowingTags: I,
                                onExpandTags: () => {
                                    E(!0), x({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    E(!1), x({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: c,
                            }),
                    ],
                }),
            m && (0, s.jsx)(Y, { tags: t, widgetType: i, gameId: l, ref: p }),
        ],
    });
}
function Z(e) {
    let { tag: t, gameId: n, widgetType: i, showEditingControls: l = !1, ref: r } = e,
        { trackUserProfileEditAction: a } = (0, v.NJ)(),
        o = V(t);
    if (null == o) return null;
    let { getText: c, icon: d } = o;
    return (0, s.jsxs)("li", {
        className: X.Tc,
        ref: r,
        children: [
            (0, s.jsx)(d, { size: "xxs" }),
            (0, s.jsx)(g.E, { variant: "text-xxs/medium", color: "text-subtle", children: c() }),
            l &&
                (0, s.jsx)(N.m, {
                    text: U.intl.string(U.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, s.jsx)(u.D, {
                        onClick: function () {
                            (0, C.tg)(i, n, t), a({ action: "TAG_REMOVED", widgetEdited: i, gameId: n });
                        },
                        className: X.DT,
                        "aria-label": U.intl.formatToPlainString(U.t.GCn1ne, { tag: c() }),
                        children: (0, s.jsx)(k.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
function J(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, s.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function Q() {
    return (0, s.jsx)(w.A, { direction: w.A.Directions.LEFT, width: 12, height: 12, className: X.OW });
}
function $(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: i,
            onCollapseTags: l,
            disableInteraction: r,
            buttonRef: a,
        } = e,
        c = t ? U.intl.string(U.t.z9VPrQ) : U.intl.string(U.t.mriLXL),
        d = t ? U.intl.string(U.t.z9VPrQ) : U.intl.formatToPlainString(U.t.F6iMs4, { count: n });
    return r
        ? (0, s.jsx)("div", {
              className: o()(X.X1, X.r9),
              ref: a,
              children: (0, s.jsx)(J, { numberOfOverflowingTags: n }),
          })
        : (0, s.jsx)(N.m, {
              text: c,
              ariaHidden: t,
              children: (0, s.jsx)(u.D, {
                  innerRef: a,
                  onClick: t ? l : i,
                  "aria-label": d,
                  className: t ? X.cS : X.X1,
                  children: t ? (0, s.jsx)(Q, {}) : (0, s.jsx)(J, { numberOfOverflowingTags: n }),
              }),
          });
}
let ee = (e, t, n, i, l) =>
    (0, r.useCallback)(() => {
        if (null == n) return void l(0);
        let s = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            a = r > 0 ? 8 : 4,
            o = 0,
            c = 0,
            u = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = u.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        c = 0;
        for (let e = o; e < n.length; e++) {
            let t = u.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296 - s - r - a) break;
                o++;
            }
        }
        l(n.length - o);
    }, [e, t, n?.join(""), i, l]);
var et = n(858808),
    en = n(365611),
    ei = n(207730);
function el(e) {
    let { index: t, widgetType: n, game: i, children: l, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, b.r)();
    return (0, s.jsx)(S.mG, {
        index: t,
        itemId: i.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: i, widgetType: n, getWidth: r },
        "aria-label": U.intl.formatToPlainString(U.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, C.Un)(n, e, t),
        onEnd: () => a(i.gameId),
        className: ei.vF,
        dropBeforeClassName: ei.A,
        dropAfterClassName: ei.Ze,
        draggingClassName: ei.Id,
        children: l,
    });
}
function es(e) {
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
        : (0, s.jsx)(c.D, { ...l, children: (0, s.jsx)(u.D, { onClick: r, className: ei.sd, children: i }) });
}
function er(e) {
    let { user: t, guildId: n, channelId: i, id: l } = e;
    return (0, s.jsx)(d.A, { id: l, children: U.intl.format(U.t.TM0XDY, { name: E.Ay.getName(n, i, t) }) });
}
function ea(e) {
    let { text: t, className: n } = e;
    return (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function eo(e) {
    let { text: t, user: n, guildId: i, channelId: l } = e,
        r = (0, p.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, s.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)(m.c, { size: "xxs", color: x.A.colors.ICON_MUTED, className: ei.Ls }),
                  (0, s.jsx)(er, { user: n, guildId: i, channelId: l, id: r }),
                  (0, s.jsx)(ea, { text: t }),
              ],
          });
}
function ec(e) {
    let { text: t, user: n, guildId: i, channelId: l, widgetType: a, gameId: c } = e,
        g = (0, p.GV)(),
        m = (0, p.GV)(),
        { trackUserProfileEditAction: I } = (0, v.NJ)(),
        [j, A] = r.useState("idle"),
        [E, S] = r.useState(t ?? ""),
        b = r.useRef(null),
        T = r.useRef(null),
        y = U.intl.string(U.t.xKSfBT),
        N = null != t && "" !== t.trim(),
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
                  className: ei.kS,
                  children: [
                      (0, s.jsx)(d.A, { tag: "label", htmlFor: g, children: U.intl.string(U.t.JxKXeT) }),
                      (0, s.jsx)(f.f, {
                          id: g,
                          value: E,
                          placeholder: y,
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
                  className: ei.Vg,
                  children: [
                      (0, s.jsx)(h.PencilIcon, { size: "xxs", color: x.A.colors.ICON_MUTED, className: ei.Ls }),
                      (0, s.jsx)(er, { user: n, guildId: i, channelId: l, id: m }),
                      (0, s.jsx)(ea, { text: t ?? y, className: o()(ei.qC, !N && ei.qf) }),
                      (0, s.jsx)(u.D, {
                          innerRef: b,
                          "aria-label": U.intl.string(U.t.ppb9MJ),
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
            allowEditing: u,
            disableInteraction: d = !1,
            index: g,
            onRemoveGame: m,
            coverRef: x,
            className: f,
        } = e,
        h = r.useRef(null),
        { gameId: p, comment: I, tags: j } = l,
        { coverImageUrl: E, gameName: v, isLoading: N } = (0, A.A)(p),
        k = { variant: "heading-sm/medium", color: "text-default" },
        w = u && !d,
        R = 1 === (0, C.cv)(a),
        L = w && (0, C.y9)(a),
        O = w && !R,
        { registerDragHandleRef: P } = (0, b.r)();
    if (N) return (0, s.jsx)(y.E, {});
    function _() {
        return (0, s.jsx)(T.A, {
            coverRef: x,
            className: null == E || d ? void 0 : en.iL,
            imageSrc: E,
            gameName: v,
            gameId: p,
            userId: t.id,
            disableInteraction: d,
            hideTooltip: !0,
        });
    }
    function D() {
        return (0, s.jsxs)("div", {
            ref: h,
            className: o()(ei.Nr, f),
            children: [
                O
                    ? (0, s.jsxs)("div", {
                          className: ei.An,
                          children: [_(), (0, s.jsx)(S.jV, { buttonRef: P(l.gameId), className: ei.BU })],
                      })
                    : _(),
                (0, s.jsxs)("div", {
                    className: ei.zH,
                    children: [
                        d
                            ? (0, s.jsx)(c.D, { ...k, children: v })
                            : (0, s.jsx)(es, { gameId: p, userId: t.id, gameName: v, ...k }),
                        L
                            ? (0, s.jsx)(ec, { text: I, user: t, guildId: n, channelId: i, widgetType: a, gameId: p })
                            : (0, s.jsx)(eo, { text: I, user: t, guildId: n, channelId: i }),
                        (0, s.jsx)(q, {
                            tags: j,
                            allowEditing: u,
                            widgetType: a,
                            gameId: p,
                            disableInteraction: d,
                            className: ei._A,
                        }),
                    ],
                }),
                w && (0, s.jsx)(et.A, { game: l, widgetType: a, className: ei.vS, onRemove: () => m?.(l.gameId) }),
            ],
        });
    }
    return O
        ? (0, s.jsx)(el, {
              index: g ?? 0,
              widgetType: a,
              game: l,
              getWidth: () => h.current?.offsetWidth,
              children: D(),
          })
        : D();
}
