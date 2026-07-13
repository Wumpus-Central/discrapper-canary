i.d(t, { A: () => ec });
var n,
    s,
    l = i(627968),
    r = i(64700),
    a = i(503698),
    o = i.n(a);
i(926675);
var d = i(534514),
    c = i(939249),
    u = i(140735),
    g = i(834730),
    m = i(216964),
    f = i(661531),
    x = i(260598),
    h = i(22231),
    I = i(915089),
    p = i(409626),
    A = i(692969),
    j = i(201438),
    E = i(562153),
    S = i(183555),
    T = i(735321),
    v = i(451395),
    N = i(823016),
    b = i(788593),
    C = i(492280),
    w = i(990078),
    R = i(789645),
    O = i(147925);
i(321073);
var k = i(477782),
    y = i(980707),
    _ = i(922016),
    G = i(761915),
    L = i(877784),
    D = i(53788),
    P = i(148795),
    M = i(214947),
    U = i(375708),
    F =
        (((n = {}).RIBBON = "ribbon"),
        (n.THUMBS_UP = "thumbsUp"),
        (n.THUMBS_DOWN = "thumbsDown"),
        (n.FRIENDS = "friends"),
        n);
let W = {
        [G.X.BETTER_THAN_YOU]: { getText: () => U.intl.string(U.t.jbIRBE), iconRole: "ribbon" },
        [G.X.CASUAL]: { getText: () => U.intl.string(U.t.xcFFv6), iconRole: "ribbon" },
        [G.X.INTERMEDIATE]: { getText: () => U.intl.string(U.t["A/mIs/"]), iconRole: "ribbon" },
        [G.X.EXPERT]: { getText: () => U.intl.string(U.t.RIOFc2), iconRole: "ribbon" },
        [G.X.OBSESSED]: { getText: () => U.intl.string(U.t.isPJDu), iconRole: "thumbsUp" },
        [G.X.LOVE_IT]: { getText: () => U.intl.string(U.t["1rN7BF"]), iconRole: "thumbsUp" },
        [G.X.KIND_OF_LOVE_IT]: { getText: () => U.intl.string(U.t.bCBpVg), iconRole: "thumbsUp" },
        [G.X.KIND_OF_HATE_IT]: { getText: () => U.intl.string(U.t["/WcmcP"]), iconRole: "thumbsDown" },
        [G.X.RAGE_QUITTING]: { getText: () => U.intl.string(U.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [G.X.OPEN_TO_PLAY]: { getText: () => U.intl.string(U.t.q30PoH), iconRole: "friends" },
        [G.X.LOOKING_FOR_GROUP]: { getText: () => U.intl.string(U.t.DWWAAQ), iconRole: "friends" },
        [G.X.LOOKING_FOR_TIPS]: { getText: () => U.intl.string(U.t.KQDVvH), iconRole: "friends" },
        [G.X.OPEN_TO_TEACH]: { getText: () => U.intl.string(U.t["5HhQo+"]), iconRole: "friends" },
        [G.X.LOOKING_TO_DISCUSS]: { getText: () => U.intl.string(U.t.GipOCq), iconRole: "friends" },
    },
    H = (function (e) {
        let t = {};
        for (let i of Object.keys(W)) {
            let n = W[i];
            null != n && (t[i] = { getText: n.getText, icon: e[n.iconRole] });
        }
        return t;
    })({ [F.RIBBON]: L.q, [F.THUMBS_UP]: D.G, [F.THUMBS_DOWN]: P.d, [F.FRIENDS]: M.$ });
function B(e) {
    let t = H[e];
    return null != t ? t : null;
}
var V = (((s = {}).RADIO = "radio"), (s.CHECKBOX = "checkbox"), s);
let X = {
    skill_level: {
        getLabel: () => U.intl.string(U.t.MKqADM),
        type: "radio",
        tags: [G.X.CASUAL, G.X.INTERMEDIATE, G.X.EXPERT, G.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => U.intl.string(U.t["7/umul"]),
        type: "checkbox",
        tags: [G.X.OBSESSED, G.X.LOVE_IT, G.X.KIND_OF_LOVE_IT, G.X.KIND_OF_HATE_IT, G.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => U.intl.string(U.t["5Dez17"]),
        type: "checkbox",
        tags: [
            G.X.LOOKING_FOR_GROUP,
            G.X.OPEN_TO_PLAY,
            G.X.LOOKING_FOR_TIPS,
            G.X.OPEN_TO_TEACH,
            G.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var z = i(767070);
let Y = r.memo(function (e) {
    let { currentTags: t, onTagSelect: i, onNoneSelect: n, onClose: s } = e;
    return (0, l.jsx)(y.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": U.intl.string(U.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: z.VS,
        children: Object.entries(X).map((e) => {
            let s,
                [r, a] = e,
                o =
                    ((s = []),
                    a.type === V.RADIO &&
                        s.push(
                            (0, l.jsx)(
                                k.iD,
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
                            (a.type === V.RADIO
                                ? s.push(
                                      (0, l.jsx)(
                                          k.iD,
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
                                : s.push(
                                      (0, l.jsx)(
                                          k.sL,
                                          { id: e, label: n.getText(), checked: t.includes(e), action: () => i(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, l.jsx)(k.rX, { label: a.getLabel(), children: o }, r);
        }),
    });
});
function K(e) {
    let { tags: t, widgetType: i, applicationId: n, ref: s } = e,
        a = (0, r.useRef)(null),
        { trackUserProfileEditAction: o } = (0, S.NJ)(),
        d = (0, r.useMemo)(() => (null != t ? t : []), [t]),
        u = (0, r.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = new Set(d);
                if (t) {
                    let t = Object.values(X).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            s.delete(e);
                        }),
                        s.add(e),
                        o({ action: "TAG_ADDED", widgetEdited: i, gameId: n }));
                } else
                    s.has(e)
                        ? (s.delete(e), o({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }))
                        : (s.add(e), o({ action: "TAG_ADDED", widgetEdited: i, gameId: n }));
                (0, T.s1)(i, n, Array.from(s));
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
                    (0, T.s1)(i, n, Array.from(t));
            },
            [d, o, i, n],
        );
    return (0, l.jsx)(_.Y, {
        targetElementRef: a,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            o({ action: "PRESS_ADD_TAG", widgetEdited: i });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(Y, { currentTags: d, onTagSelect: u, onNoneSelect: m, onClose: t });
        },
        children: (e) =>
            (0, l.jsx)("div", {
                ref: (e) => (
                    null != e && ((a.current = e), (s.current = e)),
                    () => {
                        (a.current = null), (s.current = null);
                    }
                ),
                children: (0, l.jsx)(c.D, {
                    ...e,
                    className: z.c9,
                    "aria-label": U.intl.string(U.t.r6EJOu),
                    children: (0, l.jsx)(g.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: U.intl.string(U.t.fZSejy),
                    }),
                }),
            }),
    });
}
function q(e) {
    let { tags: t, allowEditing: i, widgetType: n, applicationId: s, className: a, disableInteraction: d = !1 } = e,
        c = i && !d,
        u = t?.filter((e) => null != B(e)) ?? [],
        g = u.length > 0,
        m = c && (0, T.mS)(n) && u.length < 20,
        { trackUserProfileAction: f } = (0, S.NJ)(),
        x = (0, r.useRef)(new Map()),
        h = (0, r.useRef)(null),
        I = (0, r.useRef)(null),
        [p, A] = (0, r.useState)(0),
        [j, E] = (0, r.useState)(!1),
        v = ee(h, I, u, x, A);
    if (
        ((0, r.useEffect)(
            () => (
                v(),
                window.addEventListener("resize", v),
                () => {
                    window.removeEventListener("resize", v);
                }
            ),
            [v, u?.join("")],
        ),
        !g && !m)
    )
        return null;
    let N = j ? u : u.slice(0, u.length - p);
    return (0, l.jsxs)("div", {
        className: o()(z.I4, a),
        children: [
            g &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("ul", {
                            className: z.Tw,
                            "aria-label": U.intl.string(U.t.EfjTi4),
                            children: N.map((e) =>
                                (0, l.jsx)(
                                    Q,
                                    {
                                        tag: e,
                                        showEditingControls: c,
                                        applicationId: s,
                                        widgetType: n,
                                        ref: (t) => {
                                            null != t && x.current.set(e, t);
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                        p > 0 &&
                            (0, l.jsx)($, {
                                buttonRef: h,
                                isExpanded: j,
                                numberOfOverflowingTags: p,
                                onExpandTags: () => {
                                    E(!0), f({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    E(!1), f({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            m && (0, l.jsx)(K, { tags: t, widgetType: n, applicationId: s, ref: I }),
        ],
    });
}
function Q(e) {
    let { tag: t, applicationId: i, widgetType: n, showEditingControls: s = !1, ref: r } = e,
        { trackUserProfileEditAction: a } = (0, S.NJ)(),
        o = B(t);
    if (null == o) return null;
    let { getText: d, icon: u } = o;
    return (0, l.jsxs)("li", {
        className: z.Tc,
        ref: r,
        children: [
            (0, l.jsx)(u, { size: "xxs" }),
            (0, l.jsx)(g.E, { variant: "text-xxs/medium", color: "text-subtle", children: d() }),
            s &&
                (0, l.jsx)(w.m, {
                    text: U.intl.string(U.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, l.jsx)(c.D, {
                        onClick: function () {
                            (0, T.tg)(n, i, t), a({ action: "TAG_REMOVED", widgetEdited: n, gameId: i });
                        },
                        className: z.DT,
                        "aria-label": U.intl.formatToPlainString(U.t.GCn1ne, { tag: d() }),
                        children: (0, l.jsx)(R.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
function J(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, l.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function Z() {
    return (0, l.jsx)(O.A, { direction: O.A.Directions.LEFT, width: 12, height: 12, className: z.OW });
}
function $(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: i,
            onExpandTags: n,
            onCollapseTags: s,
            disableInteraction: r,
            buttonRef: a,
        } = e,
        d = t ? U.intl.string(U.t.z9VPrQ) : U.intl.string(U.t.mriLXL),
        u = t ? U.intl.string(U.t.z9VPrQ) : U.intl.formatToPlainString(U.t.F6iMs4, { count: i });
    return r
        ? (0, l.jsx)("div", {
              className: o()(z.X1, z.r9),
              ref: a,
              children: (0, l.jsx)(J, { numberOfOverflowingTags: i }),
          })
        : (0, l.jsx)(w.m, {
              text: d,
              ariaHidden: t,
              children: (0, l.jsx)(c.D, {
                  innerRef: a,
                  onClick: t ? s : n,
                  "aria-label": u,
                  className: t ? z.cS : z.X1,
                  children: t ? (0, l.jsx)(Z, {}) : (0, l.jsx)(J, { numberOfOverflowingTags: i }),
              }),
          });
}
let ee = (e, t, i, n, s) =>
    (0, r.useCallback)(() => {
        if (null == i) return void s(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
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
                if ((d += t.offsetWidth + 4) > 296 - l - r - a) break;
                o++;
            }
        }
        s(i.length - o);
    }, [e, t, i?.join(""), n, s]);
var et = i(858808),
    ei = i(442356),
    en = i(529459);
function es(e) {
    let { index: t, widgetType: i, game: n, children: s, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, N.r)();
    return (0, l.jsx)(v.mG, {
        index: t,
        itemId: n.applicationId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: n, widgetType: i, getWidth: r },
        "aria-label": U.intl.formatToPlainString(U.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, T.Un)(i, e, t),
        onEnd: () => a(n.applicationId),
        className: en.vF,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: s,
    });
}
function el(e) {
    let { applicationId: t, userId: i, gameName: n, ...s } = e,
        r = (0, A.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: p.GameProfileSources.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, l.jsx)(d.D, { ...s, children: n })
        : (0, l.jsx)(d.D, { ...s, children: (0, l.jsx)(c.D, { onClick: r, className: en.sd, children: n }) });
}
function er(e) {
    let { user: t, guildId: i, channelId: n, id: s } = e;
    return (0, l.jsx)(u.A, { id: s, children: U.intl.format(U.t.TM0XDY, { name: E.Ay.getName(i, n, t) }) });
}
function ea(e) {
    let { text: t, className: i } = e;
    return (0, l.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function eo(e) {
    let { text: t, user: i, guildId: n, channelId: s } = e,
        r = (0, I.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, l.jsx)(m.c, { size: "xxs", color: f.A.colors.ICON_MUTED, className: en.Ls }),
                  (0, l.jsx)(er, { user: i, guildId: n, channelId: s, id: r }),
                  (0, l.jsx)(ea, { text: t }),
              ],
          });
}
function ed(e) {
    let { text: t, user: i, guildId: n, channelId: s, widgetType: a, applicationId: d } = e,
        g = (0, I.GV)(),
        m = (0, I.GV)(),
        { trackUserProfileEditAction: p } = (0, S.NJ)(),
        [A, j] = r.useState("idle"),
        [E, v] = r.useState(t ?? ""),
        N = r.useRef(null),
        b = r.useRef(null),
        C = U.intl.string(U.t.xKSfBT),
        w = null != t && "" !== t.trim(),
        R = r.useCallback(() => {
            p({ action: "PRESS_ADD_COMMENTARY", widgetEdited: a }), j("editing");
        }, [a, p]),
        O = r.useCallback(() => {
            let e = E.trim(),
                i = e !== (t ?? "").trim();
            (0, T.oc)(a, d, "" !== e ? e : void 0),
                j("completed"),
                i && p({ action: "COMMENTARY_EDITED", widgetEdited: a, gameId: d });
        }, [a, d, E, t, p]),
        k = r.useCallback((e) => {
            v(e);
        }, []);
    return (
        r.useEffect(() => {
            "editing" === A && v(t ?? "");
        }, [t, A]),
        r.useEffect(() => {
            "completed" === A && N.current?.focus();
        }, [A]),
        "editing" === A
            ? (0, l.jsxs)("div", {
                  className: en.kS,
                  children: [
                      (0, l.jsx)(u.A, { tag: "label", htmlFor: g, children: U.intl.string(U.t.JxKXeT) }),
                      (0, l.jsx)(x.f, {
                          id: g,
                          value: E,
                          placeholder: C,
                          onChange: k,
                          onBlur: O,
                          rows: 3,
                          autoFocus: "editing" === A,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), O());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  ref: b,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: R,
                  className: en.Vg,
                  children: [
                      (0, l.jsx)(h.R, { size: "xxs", color: f.A.colors.ICON_MUTED, className: en.Ls }),
                      (0, l.jsx)(er, { user: i, guildId: n, channelId: s, id: m }),
                      (0, l.jsx)(ea, { text: t ?? C, className: o()(en.qC, !w && en.qf) }),
                      (0, l.jsx)(c.D, {
                          innerRef: N,
                          "aria-label": U.intl.string(U.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), R();
                          },
                          focusProps: { ringTarget: b },
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
            game: s,
            widgetType: a,
            allowEditing: c,
            disableInteraction: u = !1,
            index: g,
            onRemoveGame: m,
            coverRef: f,
            className: x,
        } = e,
        h = r.useRef(null),
        { applicationId: I, comment: p, tags: A } = s,
        { coverImageUrl: E, gameName: S, isLoading: w } = (0, j.A)(I),
        R = { variant: "heading-sm/medium", color: "text-default" },
        O = c && !u,
        k = 1 === (0, T.cv)(a),
        y = O && (0, T.y9)(a),
        _ = O && !k,
        { registerDragHandleRef: G } = (0, N.r)();
    if (w) return (0, l.jsx)(C.E, {});
    function L() {
        return (0, l.jsx)(b.A, {
            coverRef: f,
            className: null == E || u ? void 0 : ei.iL,
            imageSrc: E,
            gameName: S,
            applicationId: I,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function D() {
        return (0, l.jsxs)("div", {
            ref: h,
            className: o()(en.Nr, x),
            children: [
                _
                    ? (0, l.jsxs)("div", {
                          className: en.An,
                          children: [L(), (0, l.jsx)(v.jV, { buttonRef: G(s.applicationId), className: en.BU })],
                      })
                    : L(),
                (0, l.jsxs)("div", {
                    className: en.zH,
                    children: [
                        u
                            ? (0, l.jsx)(d.D, { ...R, children: S })
                            : (0, l.jsx)(el, { applicationId: I, userId: t.id, gameName: S, ...R }),
                        y
                            ? (0, l.jsx)(ed, {
                                  text: p,
                                  user: t,
                                  guildId: i,
                                  channelId: n,
                                  widgetType: a,
                                  applicationId: I,
                              })
                            : (0, l.jsx)(eo, { text: p, user: t, guildId: i, channelId: n }),
                        (0, l.jsx)(q, {
                            tags: A,
                            allowEditing: c,
                            widgetType: a,
                            applicationId: I,
                            disableInteraction: u,
                            className: en._A,
                        }),
                    ],
                }),
                O &&
                    (0, l.jsx)(et.A, {
                        game: s,
                        widgetType: a,
                        className: en.vS,
                        onRemove: () => m?.(s.applicationId),
                    }),
            ],
        });
    }
    return _
        ? (0, l.jsx)(es, {
              index: g ?? 0,
              widgetType: a,
              game: s,
              getWidth: () => h.current?.offsetWidth,
              children: D(),
          })
        : D();
}
