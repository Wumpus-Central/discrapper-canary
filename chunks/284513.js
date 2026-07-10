l.d(t, { VG: () => eh, kH: () => ec });
var n,
    a,
    s,
    i,
    r,
    u = l(627968),
    o = l(64700),
    c = l(430111),
    m = l(598748),
    d =
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
    p = l(503698),
    v = l.n(p),
    x = l(834730),
    f = (((a = {}).TEXT = "text"), (a.NUMBER = "number"), (a.IMAGE = "image"), (a.DURATION = "duration"), a),
    _ =
        (((s = {}).DATA = "data"),
        (s.CUSTOM_STRING = "custom_string"),
        (s.APPLICATION_ASSET = "application_asset"),
        (s.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        s),
    h = (((i = {}).STRING = "string"), (i.NUMBER = "number"), (i.MEDIA = "media"), i);
let N = { [f.TEXT]: ["string"], [f.NUMBER]: ["number"], [f.IMAGE]: ["media"], [f.DURATION]: ["number"] };
var T = l(66979);
function E(e) {
    let { variant: t, media: l, alt: n } = e;
    return null != l
        ? (0, u.jsx)(x.E, {
              variant: t,
              children: (0, u.jsx)("img", {
                  src: l.url,
                  width: l.width,
                  height: l.height,
                  className: T.K,
                  alt: n ?? "",
              }),
          })
        : null;
}
var j = l(235686);
function I(e) {
    let { width: t, variant: l, className: n } = e;
    return (0, u.jsx)(x.E, {
        variant: l ?? "text-md/normal",
        children: (0, u.jsx)("div", {
            className: v()(j.z, n),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, u.jsx)("div", { className: j.v }),
        }),
    });
}
var A = l(701054);
function g(e) {
    let {
            component: t,
            variant: l,
            color: n,
            required: a = !1,
            className: s,
            lineClamp: i,
            imagePosition: r = "right",
        } = e,
        { resolveFieldValue: o, numberFormat: c } = eu();
    if (null == t) return a ? (0, u.jsx)(I, { variant: l, className: s }) : null;
    let m = o(t.fields.text, [h.STRING, h.NUMBER]),
        d = o(t.fields.label, [h.STRING, h.NUMBER]),
        p = o(t.fields.icon, [h.MEDIA]);
    if (null == m && null == d) return (0, u.jsx)(I, { variant: l, className: s });
    let f = null != p ? (0, u.jsx)(E, { media: p.media, variant: l }) : null;
    return (0, u.jsxs)("div", {
        className: v()(A.k, s),
        children: [
            null != f && "left" === r ? f : null,
            (0, u.jsxs)(x.E, {
                variant: l,
                color: n,
                lineClamp: i,
                children: [
                    null == d || "" === d.value
                        ? null
                        : "number" == typeof d.value
                          ? `${c.format(d.value)}: `
                          : `${d.value}: `,
                    null == m || "" === m.value ? "\u2013" : "number" == typeof m.value ? c.format(m.value) : m.value,
                ],
            }),
            null != f && "right" === r ? f : null,
        ],
    });
}
var C = l(157841);
function O() {
    let { surfaceConfig: e } = eu();
    return (0, u.jsx)("div", {
        className: C.z,
        children: (0, u.jsx)(g, {
            component: e.components.stat,
            className: C.Q,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var y = l(205914);
function S(e) {
    let { className: t } = e;
    return (0, u.jsx)("div", { className: v()(y.z, t) });
}
var D = l(603427);
function R(e) {
    let { small: t = !1, image: l } = e;
    return (0, u.jsxs)("div", {
        className: v()(D.kL, { [D.PG]: t }),
        children: [
            (0, u.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, u.jsx)("div", { className: D.wx }),
                    (0, u.jsx)("div", { className: D.yF }),
                    (0, u.jsxs)("div", {
                        className: D.M1,
                        children: [
                            (0, u.jsx)("div", { className: D.dJ }),
                            (0, u.jsx)("div", { className: D.dJ }),
                            (0, u.jsx)("div", { className: D.dJ }),
                            (0, u.jsx)("div", { className: D.dJ }),
                            (0, u.jsx)("div", { className: D.dJ }),
                            (0, u.jsx)("div", { className: D.dJ }),
                        ],
                    }),
                ],
            }),
            l,
        ],
    });
}
var M = l(112143);
function G(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: l, resolveFieldValue: n } = eu(),
        a = n(l.components.contained_image?.fields.image, [h.MEDIA]);
    return (0, u.jsx)(R, {
        small: t,
        image: (0, u.jsx)("div", {
            className: M.ZS,
            children:
                null != a
                    ? (0, u.jsx)("img", { alt: "", src: a.media.url, className: M.Sl })
                    : (0, u.jsx)(S, { className: M.h2 }),
        }),
    });
}
function w(e) {
    let { media: t, ...l } = e;
    return (0, u.jsx)("img", {
        ...l,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var b = l(352478),
    P = l(983512);
function L(e) {
    let { surfaceConfig: t, resolveFieldValue: l } = eu(),
        n = l(t.components.hero_image?.fields.image, [h.MEDIA]);
    return (0, u.jsx)(R, {
        ...e,
        image: (0, u.jsx)("div", {
            className: P.ZS,
            children:
                null != n
                    ? (0, u.jsx)(w, { alt: "", media: n.media, className: v()(P.c8, b.g) })
                    : (0, u.jsx)(S, { className: P.pm }),
        }),
    });
}
var U = l(123292),
    k = l(425376);
function B(e) {
    let { image: t } = e,
        { header: l, surfaceConfig: n, onClick: a } = eu();
    return (0, u.jsxs)("div", {
        className: k.zr,
        children: [
            (0, u.jsxs)("div", {
                className: k.rf,
                children: [
                    l,
                    (0, u.jsxs)("div", {
                        className: k.Qs,
                        children: [
                            (0, u.jsx)(g, {
                                component: n.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, u.jsx)(U.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: a,
                            }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var F = l(338388);
function W() {
    let { surfaceConfig: e, resolveFieldValue: t } = eu(),
        l = t(e.components.contained_image?.fields.image, [h.MEDIA]);
    return (0, u.jsx)(B, {
        image: (0, u.jsx)("div", {
            className: F.ZS,
            children:
                null != l
                    ? (0, u.jsx)("img", { alt: "", src: l.media.url, className: F.Sl })
                    : (0, u.jsx)(S, { className: F.h2 }),
        }),
    });
}
var V = l(874921);
function H() {
    let { surfaceConfig: e, resolveFieldValue: t } = eu(),
        l = t(e.components.hero_image?.fields.image, [h.MEDIA]);
    return (0, u.jsx)(B, {
        image:
            null != l
                ? (0, u.jsx)("div", {
                      className: V.Xr,
                      children: (0, u.jsx)(w, { media: l.media, className: v()(V.c8, b.g) }),
                  })
                : (0, u.jsx)(S, { className: V.pm }),
    });
}
var $ = l(174529);
function q(e) {
    let { resolveFieldValue: t } = eu(),
        l = t(e.componentConfig?.fields.image, [h.MEDIA]),
        n = t(e.componentConfig?.fields.name, [h.STRING]),
        a = t(e.componentConfig?.fields.description, [h.STRING]);
    return (0, u.jsxs)("div", {
        className: $.E4,
        children: [
            null != l
                ? (0, u.jsx)("img", { src: l.media.url, className: $.bA, alt: "" })
                : (0, u.jsx)(S, { className: $.ET }),
            (0, u.jsxs)("div", {
                className: $.Vx,
                children: [
                    null != n
                        ? (0, u.jsx)(x.E, { variant: "text-sm/medium", lineClamp: 2, children: n.value })
                        : (0, u.jsx)(I, { variant: "text-sm/medium", width: "6ch" }),
                    null != a
                        ? (0, u.jsx)(x.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: a.value,
                          })
                        : (0, u.jsx)(I, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function Q() {
    let { surfaceConfig: e } = eu();
    return (0, u.jsxs)("div", {
        className: $.zr,
        children: [
            (0, u.jsx)(q, { componentConfig: e.components.item_1 }),
            (0, u.jsx)(q, { componentConfig: e.components.item_2 }),
            (0, u.jsx)(q, { componentConfig: e.components.item_3 }),
            (0, u.jsx)(q, { componentConfig: e.components.item_4 }),
        ],
    });
}
var z = l(321498);
function Y(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function X() {
    let { surfaceConfig: e, resolveFieldValue: t } = eu(),
        l = o.useId(),
        n = t(e.components.objective?.fields.image, [h.MEDIA]),
        a = t(e.components.objective?.fields.name, [h.STRING]),
        s = t(e.components.objective?.fields.description, [h.STRING]),
        i = t(e.components.progress?.fields.current, [h.NUMBER]),
        r = t(e.components.progress?.fields.max, [h.NUMBER]),
        c = null == i ? 0 : null == r ? Y(i.value) : 0 === r.value ? 0 : Y(i.value / r.value);
    return (0, u.jsxs)("div", {
        className: z.zr,
        children: [
            null != n
                ? (0, u.jsx)("img", { src: n.media.url, className: z.Sl, alt: "" })
                : (0, u.jsx)(S, { className: z.Sl }),
            (0, u.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, u.jsx)("div", {
                        className: z.L$,
                        role: "progressbar",
                        "aria-labelledby": l,
                        "aria-valuenow": i?.value ?? 0,
                        "aria-valuemax": r?.value ?? 1,
                        "aria-valuetext": null != r && null != i ? `${i.value} of ${r.value}` : void 0,
                        children: (0, u.jsx)("div", { className: z.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, u.jsxs)("div", {
                        className: z.P_,
                        children: [
                            (0, u.jsxs)("div", {
                                className: z.n_,
                                children: [
                                    null != a
                                        ? (0, u.jsx)(x.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: l,
                                              lineClamp: 2,
                                              children: a.value,
                                          })
                                        : (0, u.jsx)(I, { variant: "heading-sm/medium" }),
                                    null != s
                                        ? (0, u.jsx)(x.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: s.value,
                                          })
                                        : (0, u.jsx)(I, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != i
                                ? (0, u.jsx)(x.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: z.l_,
                                      children: null != r ? `${i.value}/${r.value}` : `${Y(i.value)}%`,
                                  })
                                : (0, u.jsx)(I, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Z = l(702769);
function J(e) {
    let t,
        { component: l, required: n = !1 } = e,
        { resolveFieldValue: a, numberFormat: s, durationFormat: i } = eu();
    if (null == l)
        return n
            ? (0, u.jsxs)("div", {
                  children: [
                      (0, u.jsx)(I, { variant: "text-sm/medium", width: "8ch" }),
                      (0, u.jsx)(I, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let r = a(l.fields.value, [h.STRING, h.NUMBER]),
        o = a(l.fields.label, [h.STRING]),
        c = a(l.fields.icon, [h.MEDIA]);
    return (0, u.jsxs)("div", {
        className: Z.k,
        children: [
            null ==
            (t = (() => {
                if (null == r) return null;
                if (r.type === h.STRING) return r.value;
                if (r.type === h.NUMBER) {
                    if (r.presentationType === f.NUMBER) return s.format(r.value);
                    if (r.presentationType === f.DURATION) {
                        var e;
                        let t, l;
                        return i.format(
                            ((l = Math.floor(
                                (t = Number.isFinite((e = r.value)) ? Math.max(0, Math.floor(e)) : 0) / 36e5,
                            )),
                            {
                                hours: l,
                                minutes: Math.floor(t / 6e4) % 60,
                                seconds: Math.floor(t / 1e3) % 60,
                                milliseconds: t % 1e3,
                            }),
                        );
                    }
                }
                return null;
            })())
                ? (0, u.jsx)(I, { variant: "text-sm/medium", width: "8ch" })
                : (0, u.jsxs)("div", {
                      className: Z.U,
                      children: [
                          (0, u.jsx)(x.E, { variant: "text-sm/medium", lineClamp: 2, children: t }),
                          null != c && (0, u.jsx)(E, { variant: "text-sm/medium", media: c.media }),
                      ],
                  }),
            null != o
                ? (0, u.jsx)(x.E, { variant: "text-xs/normal", color: "text-subtle", lineClamp: 2, children: o.value })
                : (0, u.jsx)(I, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var K = l(578158);
function ee() {
    let { surfaceConfig: e } = eu();
    return (0, u.jsxs)("div", {
        className: K.w,
        children: [
            (0, u.jsx)(J, { component: e.components.stat_1, required: !0 }),
            (0, u.jsx)(J, { component: e.components.stat_2, required: !0 }),
            (0, u.jsx)(J, { component: e.components.stat_3, required: !0 }),
            (0, u.jsx)(J, { component: e.components.stat_4, required: !0 }),
            (0, u.jsx)(J, { component: e.components.stat_5, required: !0 }),
            (0, u.jsx)(J, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var et = l(790352);
function el() {
    let { surfaceConfig: e } = eu();
    return (0, u.jsxs)("div", {
        className: et.Q,
        children: [
            (0, u.jsx)(g, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: et.D,
            }),
            (0, u.jsx)(g, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, u.jsx)(g, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, u.jsx)(g, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var en = l(834312);
function ea() {
    let { surfaceConfig: e, resolveFieldValue: t, header: l } = eu(),
        n = t(e.components.contained_image?.fields.image, [h.MEDIA]);
    return (0, u.jsxs)("div", {
        className: en.zr,
        children: [
            null != l && (0, u.jsx)("div", { className: en.wx, children: l }),
            (0, u.jsx)(el, {}),
            null != n
                ? (0, u.jsx)("img", { alt: "", src: n.media.url, className: en.Sl })
                : (0, u.jsx)(S, { className: en.h2 }),
        ],
    });
}
var es = l(321113);
function ei() {
    let { surfaceConfig: e, resolveFieldValue: t, header: l } = eu(),
        n = t(e.components.hero_image?.fields.image, [h.MEDIA]);
    return (0, u.jsxs)("div", {
        className: es.zr,
        children: [
            null != l && (0, u.jsx)("div", { className: es.wx, children: l }),
            (0, u.jsx)("div", { className: es.hQ, children: (0, u.jsx)(el, {}) }),
            null != n
                ? (0, u.jsx)("div", {
                      className: es._j,
                      children: (0, u.jsx)("div", {
                          className: es.PX,
                          children: (0, u.jsx)("img", { alt: "", src: n.media.url, className: v()(es.Sl, b.g) }),
                      }),
                  })
                : (0, u.jsx)(S, { className: es.h2 }),
        ],
    });
}
let er = o.createContext(null);
function eu() {
    let e = o.useContext(er);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let eo = {
    [m.m.WIDGET_TOP]: {
        [d.WIDGET_TOP_HERO]: () => (0, u.jsx)(ei, {}),
        [d.WIDGET_TOP_CONTAINED]: () => (0, u.jsx)(ea, {}),
    },
    [m.m.WIDGET_BOTTOM]: {
        [d.WIDGET_BOTTOM_STATS]: () => (0, u.jsx)(ee, {}),
        [d.WIDGET_BOTTOM_PROGRESS]: () => (0, u.jsx)(X, {}),
        [d.WIDGET_BOTTOM_COLLECTION]: () => (0, u.jsx)(Q, {}),
    },
    [m.m.MINI_PROFILE]: {
        [d.MINI_PROFILE_HERO_STAT]: () => (0, u.jsx)(H, {}),
        [d.MINI_PROFILE_CONTAINED_STAT]: () => (0, u.jsx)(W, {}),
    },
    [m.m.ACTIVITY_ACCESSORY]: { [d.ACTIVITY_ACCESSORY_STAT]: () => (0, u.jsx)(O, {}) },
    [m.m.ADD_WIDGET_PREVIEW]: {
        [d.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, u.jsx)(L, { ...e }),
        [d.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, u.jsx)(G, { ...e }),
    },
};
function ec(e) {
    let { surface: t, surfaceConfig: l, resolutionContext: n, locale: a, header: s, onClick: i, layoutProps: r } = e,
        m = o.useMemo(
            () => new Intl.NumberFormat(a, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [a],
        ),
        d = o.useMemo(() => new c.Y(a, { style: "narrow" }), [a]);
    if (null == l) return null;
    let p = eo[t]?.[l.layout];
    return null == p
        ? null
        : (0, u.jsx)(er.Provider, {
              value: {
                  surfaceConfig: l,
                  locale: a,
                  numberFormat: m,
                  durationFormat: d,
                  header: s,
                  onClick: i,
                  resolutionContext: n,
                  resolveFieldValue: function (e, t) {
                      return (function e(t, l, n) {
                          let { data: a, applicationAssets: s, getApplicationAssetUrl: i } = n;
                          if (null == t) return null;
                          if (t.value_type === _.DATA) {
                              let s = a[t.value],
                                  i = t.presentation_type;
                              return null != s && N[i]?.includes(s.type) && l.includes(s.type)
                                  ? "playtime_hours" === t.value && "number" === s.type && i === f.DURATION
                                      ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: i }
                                      : { ...s, presentationType: i }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, l, n)
                                    : null;
                          }
                          if (t.value_type === _.CUSTOM_STRING)
                              return t.presentation_type === f.TEXT && l.includes("string")
                                  ? { type: "string", value: t.value, presentationType: f.TEXT }
                                  : null;
                          if (t.value_type === _.APPLICATION_ASSET) {
                              if (!l.includes("media")) return null;
                              let e = s.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: i(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: f.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, n);
                  },
              },
              children: p(r),
          });
}
var em = l(832696);
let ed = em.Ikc({ value_type: em.k5n(_), presentation_type: em.k5n(f), value: em.YjP() }),
    ep = em.Ikc({ value_type: em.k5n(_), presentation_type: em.k5n(f), value: em.YjP(), fallback: ed.nullish() }),
    ev = em.Ikc({ fields: em.jgl(em.YjP(), ep) }),
    ex = em.Ikc({ layout: em.YjP(), components: em.jgl(em.YjP(), ev) });
em.jgl(em.k5n(m.m), ex);
var ef = (((r = {})[(r.STRING = 1)] = "STRING"), (r[(r.NUMBER = 2)] = "NUMBER"), (r[(r.MEDIA = 3)] = "MEDIA"), r);
function e_(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function eh(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: h.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      l = {};
                  if (null == t) return l;
                  for (let [e, n] of Object.entries(t))
                      if ("string" == typeof n) l[e] = { type: h.STRING, value: n };
                      else if ("number" == typeof n) l[e] = { type: h.NUMBER, value: n };
                      else if ("object" == typeof n && "url" in n && "proxy_url" in n && "loading_state" in n) {
                          if (!e_(n)) continue;
                          l[e] = { type: h.MEDIA, media: { url: n.proxy_url, width: n.width, height: n.height } };
                      }
                  return l;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      l = {};
                  if (null == t) return l;
                  for (let e of t)
                      if (e.type === ef.STRING) l[e.name] = { type: h.STRING, value: e.value };
                      else if (e.type === ef.NUMBER) l[e.name] = { type: h.NUMBER, value: e.value };
                      else if (e.type === ef.MEDIA) {
                          if (!e_(e.value)) continue;
                          l[e.name] = {
                              type: h.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return l;
              })(e),
          };
}
