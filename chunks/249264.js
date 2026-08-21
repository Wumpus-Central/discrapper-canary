i.d(t, { A: () => ec });
var n,
    l,
    s = i(477900),
    r = i(582128),
    a = i(503698),
    o = i.n(a);
i(926675);
var d = i(297264),
    c = i(939249),
    u = i(140735),
    g = i(834730),
    m = i(216964),
    x = i(661531),
    f = i(103557),
    h = i(22231),
    p = i(915089),
    I = i(409626),
    j = i(692969),
    v = i(201438),
    A = i(562153),
    E = i(183555),
    S = i(735321),
    C = i(451395),
    b = i(823016),
    T = i(788593),
    N = i(492280),
    w = i(866665),
    y = i(789645),
    k = i(147925);
i(321073);
var R = i(477782),
    O = i(980707),
    L = i(922016),
    _ = i(761915),
    P = i(877784),
    D = i(53788),
    G = i(148795),
    M = i(214947),
    U = i(375708),
    W =
        (((n = {}).RIBBON = "ribbon"),
        (n.THUMBS_UP = "thumbsUp"),
        (n.THUMBS_DOWN = "thumbsDown"),
        (n.FRIENDS = "friends"),
        n);
let F = {
        [_.X.BETTER_THAN_YOU]: { getText: () => U.intl.string(U.t.jbIRBE), iconRole: "ribbon" },
        [_.X.CASUAL]: { getText: () => U.intl.string(U.t.xcFFv6), iconRole: "ribbon" },
        [_.X.INTERMEDIATE]: { getText: () => U.intl.string(U.t["A/mIs/"]), iconRole: "ribbon" },
        [_.X.EXPERT]: { getText: () => U.intl.string(U.t.RIOFc2), iconRole: "ribbon" },
        [_.X.OBSESSED]: { getText: () => U.intl.string(U.t.isPJDu), iconRole: "thumbsUp" },
        [_.X.LOVE_IT]: { getText: () => U.intl.string(U.t["1rN7BF"]), iconRole: "thumbsUp" },
        [_.X.KIND_OF_LOVE_IT]: { getText: () => U.intl.string(U.t.bCBpVg), iconRole: "thumbsUp" },
        [_.X.KIND_OF_HATE_IT]: { getText: () => U.intl.string(U.t["/WcmcP"]), iconRole: "thumbsDown" },
        [_.X.RAGE_QUITTING]: { getText: () => U.intl.string(U.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [_.X.OPEN_TO_PLAY]: { getText: () => U.intl.string(U.t.q30PoH), iconRole: "friends" },
        [_.X.LOOKING_FOR_GROUP]: { getText: () => U.intl.string(U.t.DWWAAQ), iconRole: "friends" },
        [_.X.LOOKING_FOR_TIPS]: { getText: () => U.intl.string(U.t.KQDVvH), iconRole: "friends" },
        [_.X.OPEN_TO_TEACH]: { getText: () => U.intl.string(U.t["5HhQo+"]), iconRole: "friends" },
        [_.X.LOOKING_TO_DISCUSS]: { getText: () => U.intl.string(U.t.GipOCq), iconRole: "friends" },
    },
    H = (function (e) {
        let t = {};
        for (let i of Object.keys(F)) {
            let n = F[i];
            null != n && (t[i] = { getText: n.getText, icon: e[n.iconRole] });
        }
        return t;
    })({ [W.RIBBON]: P.q, [W.THUMBS_UP]: D.G, [W.THUMBS_DOWN]: G.d, [W.FRIENDS]: M.$ });
function V(e) {
    let t = H[e];
    return null != t ? t : null;
}
var B = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let z = {
    skill_level: {
        getLabel: () => U.intl.string(U.t.MKqADM),
        type: "radio",
        tags: [_.X.CASUAL, _.X.INTERMEDIATE, _.X.EXPERT, _.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => U.intl.string(U.t["7/umul"]),
        type: "checkbox",
        tags: [_.X.OBSESSED, _.X.LOVE_IT, _.X.KIND_OF_LOVE_IT, _.X.KIND_OF_HATE_IT, _.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => U.intl.string(U.t["5Dez17"]),
        type: "checkbox",
        tags: [
            _.X.LOOKING_FOR_GROUP,
            _.X.OPEN_TO_PLAY,
            _.X.LOOKING_FOR_TIPS,
            _.X.OPEN_TO_TEACH,
            _.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var X = i(149253);
let K = r.memo(function (e) {
    let { currentTags: t, onTagSelect: i, onNoneSelect: n, onClose: l } = e;
    return (0, s.jsx)(O.W, {
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
                                    action: () => n(a.tags),
                                },
                                "none",
                            ),
                        ),
                    a.tags.forEach((e) => {
                        let n = H[e];
                        null != n &&
                            (a.type === B.RADIO
                                ? l.push(
                                      (0, s.jsx)(
                                          R.iD,
                                          {
                                              id: e,
                                              group: r,
                                              label: n.getText(),
                                              checked: t.includes(e),
                                              action: () => i(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : l.push(
                                      (0, s.jsx)(
                                          R.sL,
                                          { id: e, label: n.getText(), checked: t.includes(e), action: () => i(e, !1) },
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
    let { tags: t, widgetType: i, gameId: n, ref: l } = e,
        a = (0, r.useRef)(null),
        { trackUserProfileEditAction: o } = (0, E.NJ)(),
        d = (0, r.useMemo)(() => (null != t ? t : []), [t]),
        u = (0, r.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = new Set(d);
                if (t) {
                    let t = Object.values(z).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            l.delete(e);
                        }),
                        l.add(e),
                        o({ action: "TAG_ADDED", widgetEdited: i, gameId: n }));
                } else
                    l.has(e)
                        ? (l.delete(e), o({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }))
                        : (l.add(e), o({ action: "TAG_ADDED", widgetEdited: i, gameId: n }));
                (0, S.s1)(i, n, Array.from(l));
            },
            [d, o, i, n],
        ),
        m = (0, r.useCallback)(
            (e) => {
                let t = new Set(d);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    o({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }),
                    (0, S.s1)(i, n, Array.from(t));
            },
            [d, o, i, n],
        );
    return (0, s.jsx)(L.Y, {
        targetElementRef: a,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            o({ action: "PRESS_ADD_TAG", widgetEdited: i });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(K, { currentTags: d, onTagSelect: u, onNoneSelect: m, onClose: t });
        },
        children: (e) =>
            (0, s.jsx)("div", {
                ref: (e) => (
                    null != e && ((a.current = e), (l.current = e)),
                    () => {
                        (a.current = null), (l.current = null);
                    }
                ),
                children: (0, s.jsx)(c.D, {
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
    let { tags: t, allowEditing: i, widgetType: n, gameId: l, className: a, disableInteraction: d = !1 } = e,
        c = i && !d,
        u = t?.filter((e) => null != V(e)) ?? [],
        g = u.length > 0,
        m = c && (0, S.mS)(n) && u.length < 20,
        { trackUserProfileAction: x } = (0, E.NJ)(),
        f = (0, r.useRef)(new Map()),
        h = (0, r.useRef)(null),
        p = (0, r.useRef)(null),
        [I, j] = (0, r.useState)(0),
        [v, A] = (0, r.useState)(!1),
        C = ee(h, p, u, f, j);
    if (
        ((0, r.useEffect)(
            () => (
                C(),
                window.addEventListener("resize", C),
                () => {
                    window.removeEventListener("resize", C);
                }
            ),
            [C, u?.join("")],
        ),
        !g && !m)
    )
        return null;
    let b = v ? u : u.slice(0, u.length - I);
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
                                    J,
                                    {
                                        tag: e,
                                        showEditingControls: c,
                                        gameId: l,
                                        widgetType: n,
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
                                isExpanded: v,
                                numberOfOverflowingTags: I,
                                onExpandTags: () => {
                                    A(!0), x({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    A(!1), x({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            m && (0, s.jsx)(Y, { tags: t, widgetType: n, gameId: l, ref: p }),
        ],
    });
}
function J(e) {
    let { tag: t, gameId: i, widgetType: n, showEditingControls: l = !1, ref: r } = e,
        { trackUserProfileEditAction: a } = (0, E.NJ)(),
        o = V(t);
    if (null == o) return null;
    let { getText: d, icon: u } = o;
    return (0, s.jsxs)("li", {
        className: X.Tc,
        ref: r,
        children: [
            (0, s.jsx)(u, { size: "xxs" }),
            (0, s.jsx)(g.E, { variant: "text-xxs/medium", color: "text-subtle", children: d() }),
            l &&
                (0, s.jsx)(w.m, {
                    text: U.intl.string(U.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, s.jsx)(c.D, {
                        onClick: function () {
                            (0, S.tg)(n, i, t), a({ action: "TAG_REMOVED", widgetEdited: n, gameId: i });
                        },
                        className: X.DT,
                        "aria-label": U.intl.formatToPlainString(U.t.GCn1ne, { tag: d() }),
                        children: (0, s.jsx)(y.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
function Q(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, s.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function Z() {
    return (0, s.jsx)(k.A, { direction: k.A.Directions.LEFT, width: 12, height: 12, className: X.OW });
}
function $(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: i,
            onExpandTags: n,
            onCollapseTags: l,
            disableInteraction: r,
            buttonRef: a,
        } = e,
        d = t ? U.intl.string(U.t.z9VPrQ) : U.intl.string(U.t.mriLXL),
        u = t ? U.intl.string(U.t.z9VPrQ) : U.intl.formatToPlainString(U.t.F6iMs4, { count: i });
    return r
        ? (0, s.jsx)("div", {
              className: o()(X.X1, X.r9),
              ref: a,
              children: (0, s.jsx)(Q, { numberOfOverflowingTags: i }),
          })
        : (0, s.jsx)(w.m, {
              text: d,
              ariaHidden: t,
              children: (0, s.jsx)(c.D, {
                  innerRef: a,
                  onClick: t ? l : n,
                  "aria-label": u,
                  className: t ? X.cS : X.X1,
                  children: t ? (0, s.jsx)(Z, {}) : (0, s.jsx)(Q, { numberOfOverflowingTags: i }),
              }),
          });
}
let ee = (e, t, i, n, l) =>
    (0, r.useCallback)(() => {
        if (null == i) return void l(0);
        let s = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            a = r > 0 ? 8 : 4,
            o = 0,
            d = 0,
            c = n.current;
        for (let e = 0; e < i.length; e++) {
            let t = c.get(i[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        d = 0;
        for (let e = o; e < i.length; e++) {
            let t = c.get(i[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296 - s - r - a) break;
                o++;
            }
        }
        l(i.length - o);
    }, [e, t, i?.join(""), n, l]);
var et = i(858808),
    ei = i(365611),
    en = i(207730);
function el(e) {
    let { index: t, widgetType: i, game: n, children: l, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, b.r)();
    return (0, s.jsx)(C.mG, {
        index: t,
        itemId: n.gameId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: n, widgetType: i, getWidth: r },
        "aria-label": U.intl.formatToPlainString(U.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, S.Un)(i, e, t),
        onEnd: () => a(n.gameId),
        className: en.vF,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: l,
    });
}
function es(e) {
    let { gameId: t, userId: i, gameName: n, ...l } = e,
        r = (0, j.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: I.GameProfileSources.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, s.jsx)(d.D, { ...l, children: n })
        : (0, s.jsx)(d.D, { ...l, children: (0, s.jsx)(c.D, { onClick: r, className: en.sd, children: n }) });
}
function er(e) {
    let { user: t, guildId: i, channelId: n, id: l } = e;
    return (0, s.jsx)(u.A, { id: l, children: U.intl.format(U.t.TM0XDY, { name: A.Ay.getName(i, n, t) }) });
}
function ea(e) {
    let { text: t, className: i } = e;
    return (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function eo(e) {
    let { text: t, user: i, guildId: n, channelId: l } = e,
        r = (0, p.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, s.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)(m.c, { size: "xxs", color: x.A.colors.ICON_MUTED, className: en.Ls }),
                  (0, s.jsx)(er, { user: i, guildId: n, channelId: l, id: r }),
                  (0, s.jsx)(ea, { text: t }),
              ],
          });
}
function ed(e) {
    let { text: t, user: i, guildId: n, channelId: l, widgetType: a, gameId: d } = e,
        g = (0, p.GV)(),
        m = (0, p.GV)(),
        { trackUserProfileEditAction: I } = (0, E.NJ)(),
        [j, v] = r.useState("idle"),
        [A, C] = r.useState(t ?? ""),
        b = r.useRef(null),
        T = r.useRef(null),
        N = U.intl.string(U.t.xKSfBT),
        w = null != t && "" !== t.trim(),
        y = r.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: a }), v("editing");
        }, [a, I]),
        k = r.useCallback(() => {
            let e = A.trim(),
                i = e !== (t ?? "").trim();
            (0, S.oc)(a, d, "" !== e ? e : void 0),
                v("completed"),
                i && I({ action: "COMMENTARY_EDITED", widgetEdited: a, gameId: d });
        }, [a, d, A, t, I]),
        R = r.useCallback((e) => {
            C(e);
        }, []);
    return (
        r.useEffect(() => {
            "editing" === j && C(t ?? "");
        }, [t, j]),
        r.useEffect(() => {
            "completed" === j && b.current?.focus();
        }, [j]),
        "editing" === j
            ? (0, s.jsxs)("div", {
                  className: en.kS,
                  children: [
                      (0, s.jsx)(u.A, { tag: "label", htmlFor: g, children: U.intl.string(U.t.JxKXeT) }),
                      (0, s.jsx)(f.f, {
                          id: g,
                          value: A,
                          placeholder: N,
                          onChange: R,
                          onBlur: k,
                          rows: 3,
                          autoFocus: !0,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, s.jsxs)("div", {
                  ref: T,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: y,
                  className: en.Vg,
                  children: [
                      (0, s.jsx)(h.PencilIcon, { size: "xxs", color: x.A.colors.ICON_MUTED, className: en.Ls }),
                      (0, s.jsx)(er, { user: i, guildId: n, channelId: l, id: m }),
                      (0, s.jsx)(ea, { text: t ?? N, className: o()(en.qC, !w && en.qf) }),
                      (0, s.jsx)(c.D, {
                          innerRef: b,
                          "aria-label": U.intl.string(U.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), y();
                          },
                          focusProps: { ringTarget: T },
                      }),
                  ],
              })
    );
}
function ec(e) {
    let {
            user: t,
            guildId: i,
            channelId: n,
            game: l,
            widgetType: a,
            allowEditing: c,
            disableInteraction: u = !1,
            index: g,
            onRemoveGame: m,
            coverRef: x,
            className: f,
        } = e,
        h = r.useRef(null),
        { gameId: p, comment: I, tags: j } = l,
        { coverImageUrl: A, gameName: E, isLoading: w } = (0, v.A)(p),
        y = { variant: "heading-sm/medium", color: "text-default" },
        k = c && !u,
        R = 1 === (0, S.cv)(a),
        O = k && (0, S.y9)(a),
        L = k && !R,
        { registerDragHandleRef: _ } = (0, b.r)();
    if (w) return (0, s.jsx)(N.E, {});
    function P() {
        return (0, s.jsx)(T.A, {
            coverRef: x,
            className: null == A || u ? void 0 : ei.iL,
            imageSrc: A,
            gameName: E,
            gameId: p,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function D() {
        return (0, s.jsxs)("div", {
            ref: h,
            className: o()(en.Nr, f),
            children: [
                L
                    ? (0, s.jsxs)("div", {
                          className: en.An,
                          children: [P(), (0, s.jsx)(C.jV, { buttonRef: _(l.gameId), className: en.BU })],
                      })
                    : P(),
                (0, s.jsxs)("div", {
                    className: en.zH,
                    children: [
                        u
                            ? (0, s.jsx)(d.D, { ...y, children: E })
                            : (0, s.jsx)(es, { gameId: p, userId: t.id, gameName: E, ...y }),
                        O
                            ? (0, s.jsx)(ed, { text: I, user: t, guildId: i, channelId: n, widgetType: a, gameId: p })
                            : (0, s.jsx)(eo, { text: I, user: t, guildId: i, channelId: n }),
                        (0, s.jsx)(q, {
                            tags: j,
                            allowEditing: c,
                            widgetType: a,
                            gameId: p,
                            disableInteraction: u,
                            className: en._A,
                        }),
                    ],
                }),
                k && (0, s.jsx)(et.A, { game: l, widgetType: a, className: en.vS, onRemove: () => m?.(l.gameId) }),
            ],
        });
    }
    return L
        ? (0, s.jsx)(el, {
              index: g ?? 0,
              widgetType: a,
              game: l,
              getWidth: () => h.current?.offsetWidth,
              children: D(),
          })
        : D();
}
