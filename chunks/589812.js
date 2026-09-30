n.d(t, { kH: () => ei });
var l,
    i = n(477900),
    s = n(582128),
    r = n(430111),
    a = n(598748),
    o =
        (((l = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (l.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (l.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (l.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (l.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (l.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (l.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (l.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (l.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (l.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        l),
    u = n(108089);
let c = s.createContext(null);
function d() {
    let e = s.useContext(c);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
var m = n(503698),
    h = n.n(m),
    p = n(834730),
    f = n(779300),
    g = n(835792);
function x(e) {
    let { variant: t, media: n, alt: l } = e;
    return null != n
        ? (0, i.jsx)(p.E, {
              variant: t,
              children: (0, i.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: g.K,
                  alt: l ?? "",
              }),
          })
        : null;
}
var A = n(436385);
function C(e) {
    let { width: t, variant: n, className: l } = e;
    return (0, i.jsx)(p.E, {
        variant: n ?? "text-md/normal",
        children: (0, i.jsx)("div", {
            className: h()(A.z, l),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, i.jsx)("div", { className: A.v }),
        }),
    });
}
var E = n(33683);
function I(e) {
    let {
            component: t,
            variant: n,
            color: l,
            required: s = !1,
            className: r,
            lineClamp: a,
            imagePosition: o = "right",
            hideLabel: u = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: m, renderText: g } = d(),
        A = (0, f.Hx)(t, c, m, s, u);
    if ("hidden" === A.status) return null;
    if ("skeleton" === A.status) return (0, i.jsx)(C, { variant: n, className: r });
    let I = null != A.icon ? (0, i.jsx)(x, { media: A.icon, variant: n }) : null;
    return (0, i.jsxs)("div", {
        className: h()(E.k, r),
        children: [
            null != I && "left" === o ? I : null,
            (0, i.jsx)(p.E, { variant: n, color: l, lineClamp: a, children: g?.(A.text) ?? A.text }),
            null != I && "right" === o ? I : null,
        ],
    });
}
var y = n(640056);
function S(e) {
    let { variant: t = "default", textColor: n } = e,
        { surfaceConfig: l } = d(),
        s = "badge" === t;
    return (0, i.jsx)("div", {
        className: y.z,
        children: (0, i.jsx)(I, {
            component: l.components.stat,
            className: y.Q,
            variant: s ? "text-xs/normal" : "text-xs/semibold",
            color: n,
            hideLabel: s,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var v = n(835887);
function N(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: h()(v.z, t) });
}
var _ = n(620632),
    j = n(836032);
function b(e) {
    let { small: t = !1, image: n } = e;
    return (0, i.jsxs)("div", {
        className: h()(j.kL, { [j.PG]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: j.Qs,
                children: [
                    (0, i.jsx)("div", { className: j.wx }),
                    (0, i.jsx)("div", { className: j.yF }),
                    (0, i.jsxs)("div", {
                        className: j.M1,
                        children: [
                            (0, i.jsx)("div", { className: j.dJ }),
                            (0, i.jsx)("div", { className: j.dJ }),
                            (0, i.jsx)("div", { className: j.dJ }),
                            (0, i.jsx)("div", { className: j.dJ }),
                            (0, i.jsx)("div", { className: j.dJ }),
                            (0, i.jsx)("div", { className: j.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var T = n(170118);
function R(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: l } = d(),
        s = l(n.components.contained_image?.fields.image, [_.o.MEDIA]);
    return (0, i.jsx)(b, {
        small: t,
        image: (0, i.jsx)("div", {
            className: T.ZS,
            children:
                null != s
                    ? (0, i.jsx)("img", { alt: "", src: s.media.url, className: T.Sl })
                    : (0, i.jsx)(N, { className: T.h2 }),
        }),
    });
}
function O(e) {
    let { media: t, ...n } = e;
    return (0, i.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var L = n(506619),
    M = n(15555);
function k(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = d(),
        l = n(t.components.hero_image?.fields.image, [_.o.MEDIA]);
    return (0, i.jsx)(b, {
        ...e,
        image: (0, i.jsx)("div", {
            className: M.ZS,
            children:
                null != l
                    ? (0, i.jsx)(O, { alt: "", media: l.media, className: h()(M.c8, L.g) })
                    : (0, i.jsx)(N, { className: M.pm }),
        }),
    });
}
var w = n(123292),
    P = n(402233);
function D(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: l, onClick: s } = d();
    return (0, i.jsxs)("div", {
        className: P.zr,
        children: [
            (0, i.jsxs)("div", {
                className: P.rf,
                children: [
                    n,
                    (0, i.jsxs)("div", {
                        className: P.Qs,
                        children: [
                            (0, i.jsx)(I, {
                                component: l.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, i.jsx)(w.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var U = n(425367);
function V() {
    let { surfaceConfig: e, resolveFieldValue: t } = d(),
        n = t(e.components.contained_image?.fields.image, [_.o.MEDIA]);
    return (0, i.jsx)(D, {
        image: (0, i.jsx)("div", {
            className: U.ZS,
            children:
                null != n
                    ? (0, i.jsx)("img", { alt: "", src: n.media.url, className: U.Sl })
                    : (0, i.jsx)(N, { className: U.h2 }),
        }),
    });
}
var G = n(853512);
function F() {
    let { surfaceConfig: e, resolveFieldValue: t } = d(),
        n = t(e.components.hero_image?.fields.image, [_.o.MEDIA]);
    return (0, i.jsx)(D, {
        image:
            null != n
                ? (0, i.jsx)("div", {
                      className: G.Xr,
                      children: (0, i.jsx)(O, { media: n.media, className: h()(G.c8, L.g) }),
                  })
                : (0, i.jsx)(N, { className: G.pm }),
    });
}
var B = n(193396);
function H(e) {
    let { resolveFieldValue: t } = d(),
        n = t(e.componentConfig?.fields.image, [_.o.MEDIA]),
        l = t(e.componentConfig?.fields.name, [_.o.STRING]),
        s = t(e.componentConfig?.fields.description, [_.o.STRING]);
    return (0, i.jsxs)("div", {
        className: B.E4,
        children: [
            null != n
                ? (0, i.jsx)("img", { src: n.media.url, className: B.bA, alt: "" })
                : (0, i.jsx)(N, { className: B.ET }),
            (0, i.jsxs)("div", {
                className: B.Vx,
                children: [
                    null != l
                        ? (0, i.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 2, children: l.value })
                        : (0, i.jsx)(C, { variant: "text-sm/medium", width: "6ch" }),
                    null != s
                        ? (0, i.jsx)(p.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: s.value,
                          })
                        : (0, i.jsx)(C, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function W() {
    let { surfaceConfig: e } = d();
    return (0, i.jsxs)("div", {
        className: B.zr,
        children: [
            (0, i.jsx)(H, { componentConfig: e.components.item_1 }),
            (0, i.jsx)(H, { componentConfig: e.components.item_2 }),
            (0, i.jsx)(H, { componentConfig: e.components.item_3 }),
            (0, i.jsx)(H, { componentConfig: e.components.item_4 }),
        ],
    });
}
var K = n(141255);
function z() {
    let { surfaceConfig: e, resolveFieldValue: t } = d(),
        n = s.useId(),
        l = t(e.components.objective?.fields.image, [_.o.MEDIA]),
        r = t(e.components.objective?.fields.name, [_.o.STRING]),
        a = t(e.components.objective?.fields.description, [_.o.STRING]),
        o = t(e.components.progress?.fields.current, [_.o.NUMBER]),
        u = t(e.components.progress?.fields.max, [_.o.NUMBER]),
        c = (0, f.eq)(o, u);
    return (0, i.jsxs)("div", {
        className: K.zr,
        children: [
            null != l
                ? (0, i.jsx)("img", { src: l.media.url, className: K.Sl, alt: "" })
                : (0, i.jsx)(N, { className: K.Sl }),
            (0, i.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, i.jsx)("div", {
                        className: K.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": o?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != o ? `${o.value} of ${u.value}` : void 0,
                        children: (0, i.jsx)("div", { className: K.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, i.jsxs)("div", {
                        className: K.P_,
                        children: [
                            (0, i.jsxs)("div", {
                                className: K.n_,
                                children: [
                                    null != r
                                        ? (0, i.jsx)(p.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, i.jsx)(C, { variant: "heading-sm/medium" }),
                                    null != a
                                        ? (0, i.jsx)(p.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: a.value,
                                          })
                                        : (0, i.jsx)(C, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != o
                                ? (0, i.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: K.l_,
                                      children: null != u ? `${o.value}/${u.value}` : `${(0, f.rr)(o.value)}%`,
                                  })
                                : (0, i.jsx)(C, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Z = n(620376);
function Y(e) {
    let { component: t, required: n = !1 } = e,
        { resolveFieldValue: l, numberFormat: s, durationFormat: r, renderText: a } = d(),
        o = (0, f.CZ)(
            t,
            l,
            s,
            (e) => {
                let t, n;
                return r.format(
                    ((n = Math.floor((t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0) / 36e5)),
                    {
                        hours: n,
                        minutes: Math.floor(t / 6e4) % 60,
                        seconds: Math.floor(t / 1e3) % 60,
                        milliseconds: t % 1e3,
                    }),
                );
            },
            n,
        );
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: Z.k,
              children: [
                  "value" === o.value.status
                      ? (0, i.jsxs)("div", {
                            className: Z.U,
                            children: [
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/medium",
                                    lineClamp: 2,
                                    children: a?.(o.value.text) ?? o.value.text,
                                }),
                                null != o.value.icon &&
                                    (0, i.jsx)(x, { variant: "text-sm/medium", media: o.value.icon }),
                            ],
                        })
                      : (0, i.jsx)(C, { variant: "text-sm/medium", width: "8ch" }),
                  "value" === o.label.status
                      ? (0, i.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 2,
                            children: o.label.text,
                        })
                      : "skeleton" === o.label.status
                        ? (0, i.jsx)(C, { variant: "text-xs/normal", width: "6ch" })
                        : null,
              ],
          });
}
var q = n(374205);
function J() {
    let { surfaceConfig: e } = d();
    return (0, i.jsxs)("div", {
        className: q.w,
        children: [
            (0, i.jsx)(Y, { component: e.components.stat_1, required: !0 }),
            (0, i.jsx)(Y, { component: e.components.stat_2, required: !0 }),
            (0, i.jsx)(Y, { component: e.components.stat_3, required: !0 }),
            (0, i.jsx)(Y, { component: e.components.stat_4, required: !0 }),
            (0, i.jsx)(Y, { component: e.components.stat_5, required: !0 }),
            (0, i.jsx)(Y, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var $ = n(892203);
function X() {
    let { surfaceConfig: e } = d();
    return (0, i.jsxs)("div", {
        className: $.Q,
        children: [
            (0, i.jsx)(I, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: $.D,
            }),
            (0, i.jsx)(I, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, i.jsx)(I, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, i.jsx)(I, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var Q = n(828575);
function ee() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = d(),
        l = t(e.components.contained_image?.fields.image, [_.o.MEDIA]);
    return (0, i.jsxs)("div", {
        className: Q.zr,
        children: [
            null != n && (0, i.jsx)("div", { className: Q.wx, children: n }),
            (0, i.jsx)(X, {}),
            null != l
                ? (0, i.jsx)("img", { alt: "", src: l.media.url, className: Q.Sl })
                : (0, i.jsx)(N, { className: Q.h2 }),
        ],
    });
}
var et = n(775176);
function en() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = d(),
        l = t(e.components.hero_image?.fields.image, [_.o.MEDIA]);
    return (0, i.jsxs)("div", {
        className: et.zr,
        children: [
            null != n && (0, i.jsx)("div", { className: et.wx, children: n }),
            (0, i.jsx)("div", { className: et.hQ, children: (0, i.jsx)(X, {}) }),
            null != l
                ? (0, i.jsx)("div", {
                      className: et._j,
                      children: (0, i.jsx)("div", {
                          className: et.PX,
                          children: (0, i.jsx)("img", { alt: "", src: l.media.url, className: h()(et.Sl, L.g) }),
                      }),
                  })
                : (0, i.jsx)(N, { className: et.h2 }),
        ],
    });
}
let el = {
    [a.m.WIDGET_TOP]: {
        [o.WIDGET_TOP_HERO]: () => (0, i.jsx)(en, {}),
        [o.WIDGET_TOP_CONTAINED]: () => (0, i.jsx)(ee, {}),
    },
    [a.m.WIDGET_BOTTOM]: {
        [o.WIDGET_BOTTOM_STATS]: () => (0, i.jsx)(J, {}),
        [o.WIDGET_BOTTOM_PROGRESS]: () => (0, i.jsx)(z, {}),
        [o.WIDGET_BOTTOM_COLLECTION]: () => (0, i.jsx)(W, {}),
    },
    [a.m.MINI_PROFILE]: {
        [o.MINI_PROFILE_HERO_STAT]: () => (0, i.jsx)(F, {}),
        [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, i.jsx)(V, {}),
    },
    [a.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, i.jsx)(S, { ...e }) },
    [a.m.ADD_WIDGET_PREVIEW]: {
        [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, i.jsx)(k, { ...e }),
        [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, i.jsx)(R, { ...e }),
    },
};
function ei(e) {
    let {
            surface: t,
            surfaceConfig: n,
            resolutionContext: l,
            locale: a,
            header: o,
            onClick: d,
            renderText: m,
            layoutProps: h,
        } = e,
        p = s.useMemo(() => (0, u.e)(a), [a]),
        f = s.useMemo(() => new r.Y(a, { style: "narrow" }), [a]);
    if (null == n) return null;
    let g = el[t]?.[n.layout];
    return null == g
        ? null
        : (0, i.jsx)(c.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: a,
                  numberFormat: p,
                  durationFormat: f,
                  header: o,
                  onClick: d,
                  renderText: m,
                  resolutionContext: l,
                  resolveFieldValue: (0, _.J)(l),
              },
              children: g(h),
          });
}
