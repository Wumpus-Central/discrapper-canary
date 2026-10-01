l.d(t, { kH: () => ea });
var n,
    a = l(477900),
    s = l(582128),
    i = l(430111),
    r = l(598748),
    o =
        (((n = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (n.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (n.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (n.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (n.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (n.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (n.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (n.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (n.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (n.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        n),
    u = l(108089);
let c = s.createContext(null);
function m() {
    let e = s.useContext(c);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
var d = l(503698),
    v = l.n(d),
    x = l(834730),
    f = l(779300),
    p = l(835792);
function h(e) {
    let { variant: t, media: l, alt: n } = e;
    return null != l
        ? (0, a.jsx)(x.E, {
              variant: t,
              children: (0, a.jsx)("img", {
                  src: l.url,
                  width: l.width,
                  height: l.height,
                  className: p.K,
                  alt: n ?? "",
              }),
          })
        : null;
}
var _ = l(436385);
function N(e) {
    let { width: t, variant: l, className: n } = e;
    return (0, a.jsx)(x.E, {
        variant: l ?? "text-md/normal",
        children: (0, a.jsx)("div", {
            className: v()(_.z, n),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, a.jsx)("div", { className: _.v }),
        }),
    });
}
var E = l(33683);
function j(e) {
    let {
            component: t,
            variant: l,
            color: n,
            required: s = !1,
            className: i,
            lineClamp: r,
            imagePosition: o = "right",
            hideLabel: u = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: d, renderText: p } = m(),
        _ = (0, f.Hx)(t, c, d, s, u);
    if ("hidden" === _.status) return null;
    if ("skeleton" === _.status) return (0, a.jsx)(N, { variant: l, className: i });
    let j = null != _.icon ? (0, a.jsx)(h, { media: _.icon, variant: l }) : null;
    return (0, a.jsxs)("div", {
        className: v()(E.k, i),
        children: [
            null != j && "left" === o ? j : null,
            (0, a.jsx)(x.E, { variant: l, color: n, lineClamp: r, children: p?.(_.text) ?? _.text }),
            null != j && "right" === o ? j : null,
        ],
    });
}
var T = l(640056);
function g(e) {
    let { variant: t = "default", textColor: l } = e,
        { surfaceConfig: n } = m(),
        s = "badge" === t;
    return (0, a.jsx)("div", {
        className: T.z,
        children: (0, a.jsx)(j, {
            component: n.components.stat,
            className: T.Q,
            variant: s ? "text-xs/normal" : "text-xs/semibold",
            color: l,
            hideLabel: s,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var I = l(835887);
function A(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", { className: v()(I.z, t) });
}
var C = l(620632),
    S = l(836032);
function O(e) {
    let { small: t = !1, image: l } = e;
    return (0, a.jsxs)("div", {
        className: v()(S.kL, { [S.PG]: t }),
        children: [
            (0, a.jsxs)("div", {
                className: S.Qs,
                children: [
                    (0, a.jsx)("div", { className: S.wx }),
                    (0, a.jsx)("div", { className: S.yF }),
                    (0, a.jsxs)("div", {
                        className: S.M1,
                        children: [
                            (0, a.jsx)("div", { className: S.dJ }),
                            (0, a.jsx)("div", { className: S.dJ }),
                            (0, a.jsx)("div", { className: S.dJ }),
                            (0, a.jsx)("div", { className: S.dJ }),
                            (0, a.jsx)("div", { className: S.dJ }),
                            (0, a.jsx)("div", { className: S.dJ }),
                        ],
                    }),
                ],
            }),
            l,
        ],
    });
}
var M = l(170118);
function y(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: l, resolveFieldValue: n } = m(),
        s = n(l.components.contained_image?.fields.image, [C.o.MEDIA]);
    return (0, a.jsx)(O, {
        small: t,
        image: (0, a.jsx)("div", {
            className: M.ZS,
            children:
                null != s
                    ? (0, a.jsx)("img", { alt: "", src: s.media.url, className: M.Sl })
                    : (0, a.jsx)(A, { className: M.h2 }),
        }),
    });
}
function D(e) {
    let { media: t, ...l } = e;
    return (0, a.jsx)("img", {
        ...l,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var b = l(506619),
    G = l(15555);
function R(e) {
    let { surfaceConfig: t, resolveFieldValue: l } = m(),
        n = l(t.components.hero_image?.fields.image, [C.o.MEDIA]);
    return (0, a.jsx)(O, {
        ...e,
        image: (0, a.jsx)("div", {
            className: G.ZS,
            children:
                null != n
                    ? (0, a.jsx)(D, { alt: "", media: n.media, className: v()(G.c8, b.g) })
                    : (0, a.jsx)(A, { className: G.pm }),
        }),
    });
}
var w = l(123292),
    P = l(402233);
function F(e) {
    let { image: t } = e,
        { header: l, surfaceConfig: n, onClick: s } = m();
    return (0, a.jsxs)("div", {
        className: P.zr,
        children: [
            (0, a.jsxs)("div", {
                className: P.rf,
                children: [
                    l,
                    (0, a.jsxs)("div", {
                        className: P.Qs,
                        children: [
                            (0, a.jsx)(j, {
                                component: n.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, a.jsx)(w.Q, {
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
var k = l(425367);
function U() {
    let { surfaceConfig: e, resolveFieldValue: t } = m(),
        l = t(e.components.contained_image?.fields.image, [C.o.MEDIA]);
    return (0, a.jsx)(F, {
        image: (0, a.jsx)("div", {
            className: k.ZS,
            children:
                null != l
                    ? (0, a.jsx)("img", { alt: "", src: l.media.url, className: k.Sl })
                    : (0, a.jsx)(A, { className: k.h2 }),
        }),
    });
}
var L = l(853512);
function W() {
    let { surfaceConfig: e, resolveFieldValue: t } = m(),
        l = t(e.components.hero_image?.fields.image, [C.o.MEDIA]);
    return (0, a.jsx)(F, {
        image:
            null != l
                ? (0, a.jsx)("div", {
                      className: L.Xr,
                      children: (0, a.jsx)(D, { media: l.media, className: v()(L.c8, b.g) }),
                  })
                : (0, a.jsx)(A, { className: L.pm }),
    });
}
var B = l(193396);
function V(e) {
    let { resolveFieldValue: t } = m(),
        l = t(e.componentConfig?.fields.image, [C.o.MEDIA]),
        n = t(e.componentConfig?.fields.name, [C.o.STRING]),
        s = t(e.componentConfig?.fields.description, [C.o.STRING]);
    return (0, a.jsxs)("div", {
        className: B.E4,
        children: [
            null != l
                ? (0, a.jsx)("img", { src: l.media.url, className: B.bA, alt: "" })
                : (0, a.jsx)(A, { className: B.ET }),
            (0, a.jsxs)("div", {
                className: B.Vx,
                children: [
                    null != n
                        ? (0, a.jsx)(x.E, { variant: "text-sm/medium", lineClamp: 2, children: n.value })
                        : (0, a.jsx)(N, { variant: "text-sm/medium", width: "6ch" }),
                    null != s
                        ? (0, a.jsx)(x.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: s.value,
                          })
                        : (0, a.jsx)(N, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function H() {
    let { surfaceConfig: e } = m();
    return (0, a.jsxs)("div", {
        className: B.zr,
        children: [
            (0, a.jsx)(V, { componentConfig: e.components.item_1 }),
            (0, a.jsx)(V, { componentConfig: e.components.item_2 }),
            (0, a.jsx)(V, { componentConfig: e.components.item_3 }),
            (0, a.jsx)(V, { componentConfig: e.components.item_4 }),
        ],
    });
}
var $ = l(141255);
function q() {
    let { surfaceConfig: e, resolveFieldValue: t } = m(),
        l = s.useId(),
        n = t(e.components.objective?.fields.image, [C.o.MEDIA]),
        i = t(e.components.objective?.fields.name, [C.o.STRING]),
        r = t(e.components.objective?.fields.description, [C.o.STRING]),
        o = t(e.components.progress?.fields.current, [C.o.NUMBER]),
        u = t(e.components.progress?.fields.max, [C.o.NUMBER]),
        c = (0, f.eq)(o, u);
    return (0, a.jsxs)("div", {
        className: $.zr,
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n.media.url, className: $.Sl, alt: "" })
                : (0, a.jsx)(A, { className: $.Sl }),
            (0, a.jsxs)("div", {
                className: $.Qs,
                children: [
                    (0, a.jsx)("div", {
                        className: $.L$,
                        role: "progressbar",
                        "aria-labelledby": l,
                        "aria-valuenow": o?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != o ? `${o.value} of ${u.value}` : void 0,
                        children: (0, a.jsx)("div", { className: $.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, a.jsxs)("div", {
                        className: $.P_,
                        children: [
                            (0, a.jsxs)("div", {
                                className: $.n_,
                                children: [
                                    null != i
                                        ? (0, a.jsx)(x.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: l,
                                              lineClamp: 2,
                                              children: i.value,
                                          })
                                        : (0, a.jsx)(N, { variant: "heading-sm/medium" }),
                                    null != r
                                        ? (0, a.jsx)(x.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, a.jsx)(N, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != o
                                ? (0, a.jsx)(x.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: $.l_,
                                      children: null != u ? `${o.value}/${u.value}` : `${(0, f.rr)(o.value)}%`,
                                  })
                                : (0, a.jsx)(N, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var z = l(620376);
function Y(e) {
    let { component: t, required: l = !1 } = e,
        { resolveFieldValue: n, numberFormat: s, durationFormat: i, renderText: r } = m(),
        o = (0, f.CZ)(
            t,
            n,
            s,
            (e) => {
                let t, l;
                return i.format(
                    ((l = Math.floor((t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0) / 36e5)),
                    {
                        hours: l,
                        minutes: Math.floor(t / 6e4) % 60,
                        seconds: Math.floor(t / 1e3) % 60,
                        milliseconds: t % 1e3,
                    }),
                );
            },
            l,
        );
    return null == o
        ? null
        : (0, a.jsxs)("div", {
              className: z.k,
              children: [
                  "value" === o.value.status
                      ? (0, a.jsxs)("div", {
                            className: z.U,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    lineClamp: 2,
                                    children: r?.(o.value.text) ?? o.value.text,
                                }),
                                null != o.value.icon &&
                                    (0, a.jsx)(h, { variant: "text-sm/medium", media: o.value.icon }),
                            ],
                        })
                      : (0, a.jsx)(N, { variant: "text-sm/medium", width: "8ch" }),
                  "value" === o.label.status
                      ? (0, a.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 2,
                            children: o.label.text,
                        })
                      : "skeleton" === o.label.status
                        ? (0, a.jsx)(N, { variant: "text-xs/normal", width: "6ch" })
                        : null,
              ],
          });
}
var J = l(374205);
function Q() {
    let { surfaceConfig: e } = m();
    return (0, a.jsxs)("div", {
        className: J.w,
        children: [
            (0, a.jsx)(Y, { component: e.components.stat_1, required: !0 }),
            (0, a.jsx)(Y, { component: e.components.stat_2, required: !0 }),
            (0, a.jsx)(Y, { component: e.components.stat_3, required: !0 }),
            (0, a.jsx)(Y, { component: e.components.stat_4, required: !0 }),
            (0, a.jsx)(Y, { component: e.components.stat_5, required: !0 }),
            (0, a.jsx)(Y, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var X = l(892203);
function Z() {
    let { surfaceConfig: e } = m();
    return (0, a.jsxs)("div", {
        className: X.Q,
        children: [
            (0, a.jsx)(j, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: X.D,
            }),
            (0, a.jsx)(j, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, a.jsx)(j, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, a.jsx)(j, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var K = l(828575);
function ee() {
    let { surfaceConfig: e, resolveFieldValue: t, header: l } = m(),
        n = t(e.components.contained_image?.fields.image, [C.o.MEDIA]);
    return (0, a.jsxs)("div", {
        className: K.zr,
        children: [
            null != l && (0, a.jsx)("div", { className: K.wx, children: l }),
            (0, a.jsx)(Z, {}),
            null != n
                ? (0, a.jsx)("img", { alt: "", src: n.media.url, className: K.Sl })
                : (0, a.jsx)(A, { className: K.h2 }),
        ],
    });
}
var et = l(775176);
function el() {
    let { surfaceConfig: e, resolveFieldValue: t, header: l } = m(),
        n = t(e.components.hero_image?.fields.image, [C.o.MEDIA]);
    return (0, a.jsxs)("div", {
        className: et.zr,
        children: [
            null != l && (0, a.jsx)("div", { className: et.wx, children: l }),
            (0, a.jsx)("div", { className: et.hQ, children: (0, a.jsx)(Z, {}) }),
            null != n
                ? (0, a.jsx)("div", {
                      className: et._j,
                      children: (0, a.jsx)("div", {
                          className: et.PX,
                          children: (0, a.jsx)("img", { alt: "", src: n.media.url, className: v()(et.Sl, b.g) }),
                      }),
                  })
                : (0, a.jsx)(A, { className: et.h2 }),
        ],
    });
}
let en = {
    [r.m.WIDGET_TOP]: {
        [o.WIDGET_TOP_HERO]: () => (0, a.jsx)(el, {}),
        [o.WIDGET_TOP_CONTAINED]: () => (0, a.jsx)(ee, {}),
    },
    [r.m.WIDGET_BOTTOM]: {
        [o.WIDGET_BOTTOM_STATS]: () => (0, a.jsx)(Q, {}),
        [o.WIDGET_BOTTOM_PROGRESS]: () => (0, a.jsx)(q, {}),
        [o.WIDGET_BOTTOM_COLLECTION]: () => (0, a.jsx)(H, {}),
    },
    [r.m.MINI_PROFILE]: {
        [o.MINI_PROFILE_HERO_STAT]: () => (0, a.jsx)(W, {}),
        [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, a.jsx)(U, {}),
    },
    [r.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, a.jsx)(g, { ...e }) },
    [r.m.ADD_WIDGET_PREVIEW]: {
        [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, a.jsx)(R, { ...e }),
        [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, a.jsx)(y, { ...e }),
    },
};
function ea(e) {
    let {
            surface: t,
            surfaceConfig: l,
            resolutionContext: n,
            locale: r,
            header: o,
            onClick: m,
            renderText: d,
            layoutProps: v,
        } = e,
        x = s.useMemo(() => (0, u.e)(r), [r]),
        f = s.useMemo(() => new i.Y(r, { style: "narrow" }), [r]);
    if (null == l) return null;
    let p = en[t]?.[l.layout];
    return null == p
        ? null
        : (0, a.jsx)(c.Provider, {
              value: {
                  surfaceConfig: l,
                  locale: r,
                  numberFormat: x,
                  durationFormat: f,
                  header: o,
                  onClick: m,
                  renderText: d,
                  resolutionContext: n,
                  resolveFieldValue: (0, C.J)(n),
              },
              children: p(v),
          });
}
