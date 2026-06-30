"use strict";
n.d(t, { VG: () => eh, kH: () => ec });
var i,
    r,
    s,
    a,
    o,
    l = n(627968),
    u = n(64700),
    c = n(334432),
    d = n(598748),
    _ =
        (((i = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (i.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (i.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (i.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (i.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (i.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (i.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (i.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (i.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (i.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        i),
    h = n(503698),
    f = n.n(h),
    p = n(834730),
    E = (((r = {}).TEXT = "text"), (r.NUMBER = "number"), (r.IMAGE = "image"), (r.DURATION = "duration"), r),
    m =
        (((s = {}).DATA = "data"),
        (s.CUSTOM_STRING = "custom_string"),
        (s.APPLICATION_ASSET = "application_asset"),
        (s.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        s),
    g = (((a = {}).STRING = "string"), (a.NUMBER = "number"), (a.MEDIA = "media"), a);
let A = { [E.TEXT]: ["string"], [E.NUMBER]: ["number"], [E.IMAGE]: ["media"], [E.DURATION]: ["number"] };
var I = n(66979);
function T(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
        ? (0, l.jsx)(p.E, {
              variant: t,
              children: (0, l.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: I.K,
                  alt: i ?? "",
              }),
          })
        : null;
}
var S = n(235686);
function y(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, l.jsx)(p.E, {
        variant: n ?? "text-md/normal",
        children: (0, l.jsx)("div", {
            className: f()(S.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, l.jsx)("div", { className: S.v }),
        }),
    });
}
var C = n(701054);
function N(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: s,
            lineClamp: a,
            imagePosition: o = "right",
        } = e,
        { resolveFieldValue: u, numberFormat: c } = el();
    if (null == t) return r ? (0, l.jsx)(y, { variant: n, className: s }) : null;
    let d = u(t.fields.text, [g.STRING, g.NUMBER]),
        _ = u(t.fields.label, [g.STRING, g.NUMBER]),
        h = u(t.fields.icon, [g.MEDIA]);
    if (null == d && null == _) return (0, l.jsx)(y, { variant: n, className: s });
    let E = null != h ? (0, l.jsx)(T, { media: h.media, variant: n }) : null;
    return (0, l.jsxs)("div", {
        className: f()(C.k, s),
        children: [
            null != E && "left" === o ? E : null,
            (0, l.jsxs)(p.E, {
                variant: n,
                color: i,
                lineClamp: a,
                children: [
                    null == _ || "" === _.value
                        ? null
                        : "number" == typeof _.value
                          ? `${c.format(_.value)}: `
                          : `${_.value}: `,
                    null == d || "" === d.value ? "\u2013" : "number" == typeof d.value ? c.format(d.value) : d.value,
                ],
            }),
            null != E && "right" === o ? E : null,
        ],
    });
}
var v = n(157841);
function R() {
    let { surfaceConfig: e } = el();
    return (0, l.jsx)("div", {
        className: v.z,
        children: (0, l.jsx)(N, {
            component: e.components.stat,
            className: v.Q,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var O = n(205914);
function b(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: f()(O.z, t) });
}
var D = n(603427);
function L(e) {
    let { small: t = !1, image: n } = e;
    return (0, l.jsxs)("div", {
        className: f()(D.kL, { [D.PG]: t }),
        children: [
            (0, l.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, l.jsx)("div", { className: D.wx }),
                    (0, l.jsx)("div", { className: D.yF }),
                    (0, l.jsxs)("div", {
                        className: D.M1,
                        children: [
                            (0, l.jsx)("div", { className: D.dJ }),
                            (0, l.jsx)("div", { className: D.dJ }),
                            (0, l.jsx)("div", { className: D.dJ }),
                            (0, l.jsx)("div", { className: D.dJ }),
                            (0, l.jsx)("div", { className: D.dJ }),
                            (0, l.jsx)("div", { className: D.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var w = n(112143);
function M(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = el(),
        r = i(n.components.contained_image?.fields.image, [g.MEDIA]);
    return (0, l.jsx)(L, {
        small: t,
        image: (0, l.jsx)("div", {
            className: w.ZS,
            children:
                null != r
                    ? (0, l.jsx)("img", { alt: "", src: r.media.url, className: w.Sl })
                    : (0, l.jsx)(b, { className: w.h2 }),
        }),
    });
}
function P(e) {
    let { media: t, ...n } = e;
    return (0, l.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var x = n(352478),
    k = n(983512);
function U(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = el(),
        i = n(t.components.hero_image?.fields.image, [g.MEDIA]);
    return (0, l.jsx)(L, {
        ...e,
        image: (0, l.jsx)("div", {
            className: k.ZS,
            children:
                null != i
                    ? (0, l.jsx)(P, { alt: "", media: i.media, className: f()(k.c8, x.g) })
                    : (0, l.jsx)(b, { className: k.pm }),
        }),
    });
}
var G = n(123292),
    F = n(425376);
function V(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: i, onClick: r } = el();
    return (0, l.jsxs)("div", {
        className: F.zr,
        children: [
            (0, l.jsxs)("div", {
                className: F.rf,
                children: [
                    n,
                    (0, l.jsxs)("div", {
                        className: F.Qs,
                        children: [
                            (0, l.jsx)(N, {
                                component: i.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, l.jsx)(G.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: r,
                            }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var B = n(338388);
function j() {
    let { surfaceConfig: e, resolveFieldValue: t } = el(),
        n = t(e.components.contained_image?.fields.image, [g.MEDIA]);
    return (0, l.jsx)(V, {
        image: (0, l.jsx)("div", {
            className: B.ZS,
            children:
                null != n
                    ? (0, l.jsx)("img", { alt: "", src: n.media.url, className: B.Sl })
                    : (0, l.jsx)(b, { className: B.h2 }),
        }),
    });
}
var H = n(874921);
function Y() {
    let { surfaceConfig: e, resolveFieldValue: t } = el(),
        n = t(e.components.hero_image?.fields.image, [g.MEDIA]);
    return (0, l.jsx)(V, {
        image:
            null != n
                ? (0, l.jsx)("div", {
                      className: H.Xr,
                      children: (0, l.jsx)(P, { media: n.media, className: f()(H.c8, x.g) }),
                  })
                : (0, l.jsx)(b, { className: H.pm }),
    });
}
var W = n(174529);
function K(e) {
    let { resolveFieldValue: t } = el(),
        n = t(e.componentConfig?.fields.image, [g.MEDIA]),
        i = t(e.componentConfig?.fields.name, [g.STRING]),
        r = t(e.componentConfig?.fields.description, [g.STRING]);
    return (0, l.jsxs)("div", {
        className: W.E4,
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n.media.url, className: W.bA, alt: "" })
                : (0, l.jsx)(b, { className: W.ET }),
            (0, l.jsxs)("div", {
                className: W.Vx,
                children: [
                    null != i
                        ? (0, l.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, l.jsx)(y, { variant: "text-sm/medium", width: "6ch" }),
                    null != r
                        ? (0, l.jsx)(p.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: r.value,
                          })
                        : (0, l.jsx)(y, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function $() {
    let { surfaceConfig: e } = el();
    return (0, l.jsxs)("div", {
        className: W.zr,
        children: [
            (0, l.jsx)(K, { componentConfig: e.components.item_1 }),
            (0, l.jsx)(K, { componentConfig: e.components.item_2 }),
            (0, l.jsx)(K, { componentConfig: e.components.item_3 }),
            (0, l.jsx)(K, { componentConfig: e.components.item_4 }),
        ],
    });
}
var z = n(321498);
function q(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function Z() {
    let { surfaceConfig: e, resolveFieldValue: t } = el(),
        n = u.useId(),
        i = t(e.components.objective?.fields.image, [g.MEDIA]),
        r = t(e.components.objective?.fields.name, [g.STRING]),
        s = t(e.components.objective?.fields.description, [g.STRING]),
        a = t(e.components.progress?.fields.current, [g.NUMBER]),
        o = t(e.components.progress?.fields.max, [g.NUMBER]),
        c = null == a ? 0 : null == o ? q(a.value) : 0 === o.value ? 0 : q(a.value / o.value);
    return (0, l.jsxs)("div", {
        className: z.zr,
        children: [
            null != i
                ? (0, l.jsx)("img", { src: i.media.url, className: z.Sl, alt: "" })
                : (0, l.jsx)(b, { className: z.Sl }),
            (0, l.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, l.jsx)("div", {
                        className: z.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": a?.value ?? 0,
                        "aria-valuemax": o?.value ?? 1,
                        "aria-valuetext": null != o && null != a ? `${a.value} of ${o.value}` : void 0,
                        children: (0, l.jsx)("div", { className: z.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, l.jsxs)("div", {
                        className: z.P_,
                        children: [
                            (0, l.jsxs)("div", {
                                className: z.n_,
                                children: [
                                    null != r
                                        ? (0, l.jsx)(p.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, l.jsx)(y, { variant: "heading-sm/medium" }),
                                    null != s
                                        ? (0, l.jsx)(p.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: s.value,
                                          })
                                        : (0, l.jsx)(y, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != a
                                ? (0, l.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: z.l_,
                                      children: null != o ? `${a.value}/${o.value}` : `${q(a.value)}%`,
                                  })
                                : (0, l.jsx)(y, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var X = n(702769);
function Q(e) {
    let t,
        { component: n, required: i = !1 } = e,
        { resolveFieldValue: r, numberFormat: s, durationFormat: a } = el();
    if (null == n)
        return i
            ? (0, l.jsxs)("div", {
                  children: [
                      (0, l.jsx)(y, { variant: "text-sm/medium", width: "8ch" }),
                      (0, l.jsx)(y, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let o = r(n.fields.value, [g.STRING, g.NUMBER]),
        u = r(n.fields.label, [g.STRING]),
        c = r(n.fields.icon, [g.MEDIA]);
    return (0, l.jsxs)("div", {
        className: X.k,
        children: [
            null ==
            (t = (() => {
                if (null == o) return null;
                if (o.type === g.STRING) return o.value;
                if (o.type === g.NUMBER) {
                    if (o.presentationType === E.NUMBER) return s.format(o.value);
                    if (o.presentationType === E.DURATION) {
                        var e;
                        let t, n;
                        return a.format(
                            ((n = Math.floor(
                                (t = Number.isFinite((e = o.value)) ? Math.max(0, Math.floor(e)) : 0) / 36e5,
                            )),
                            {
                                hours: n,
                                minutes: Math.floor(t / 6e4) % 60,
                                seconds: Math.floor(t / 1e3) % 60,
                                milliseconds: t % 1e3,
                            }),
                        );
                    }
                }
                return null;
            })())
                ? (0, l.jsx)(y, { variant: "text-sm/medium", width: "8ch" })
                : (0, l.jsxs)("div", {
                      className: X.U,
                      children: [
                          (0, l.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 2, children: t }),
                          null != c && (0, l.jsx)(T, { variant: "text-sm/medium", media: c.media }),
                      ],
                  }),
            null != u
                ? (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "text-subtle", lineClamp: 2, children: u.value })
                : (0, l.jsx)(y, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var J = n(578158);
function ee() {
    let { surfaceConfig: e } = el();
    return (0, l.jsxs)("div", {
        className: J.w,
        children: [
            (0, l.jsx)(Q, { component: e.components.stat_1, required: !0 }),
            (0, l.jsx)(Q, { component: e.components.stat_2, required: !0 }),
            (0, l.jsx)(Q, { component: e.components.stat_3, required: !0 }),
            (0, l.jsx)(Q, { component: e.components.stat_4, required: !0 }),
            (0, l.jsx)(Q, { component: e.components.stat_5, required: !0 }),
            (0, l.jsx)(Q, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var et = n(790352);
function en() {
    let { surfaceConfig: e } = el();
    return (0, l.jsxs)("div", {
        className: et.Q,
        children: [
            (0, l.jsx)(N, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: et.D,
            }),
            (0, l.jsx)(N, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, l.jsx)(N, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, l.jsx)(N, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var ei = n(834312);
function er() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = el(),
        i = t(e.components.contained_image?.fields.image, [g.MEDIA]);
    return (0, l.jsxs)("div", {
        className: ei.zr,
        children: [
            null != n && (0, l.jsx)("div", { className: ei.wx, children: n }),
            (0, l.jsx)(en, {}),
            null != i
                ? (0, l.jsx)("img", { alt: "", src: i.media.url, className: ei.Sl })
                : (0, l.jsx)(b, { className: ei.h2 }),
        ],
    });
}
var es = n(321113);
function ea() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = el(),
        i = t(e.components.hero_image?.fields.image, [g.MEDIA]);
    return (0, l.jsxs)("div", {
        className: es.zr,
        children: [
            null != n && (0, l.jsx)("div", { className: es.wx, children: n }),
            (0, l.jsx)("div", { className: es.hQ, children: (0, l.jsx)(en, {}) }),
            null != i
                ? (0, l.jsx)("div", {
                      className: es._j,
                      children: (0, l.jsx)("div", {
                          className: es.PX,
                          children: (0, l.jsx)("img", { alt: "", src: i.media.url, className: f()(es.Sl, x.g) }),
                      }),
                  })
                : (0, l.jsx)(b, { className: es.h2 }),
        ],
    });
}
let eo = u.createContext(null);
function el() {
    let e = u.useContext(eo);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let eu = {
    [d.m.WIDGET_TOP]: {
        [_.WIDGET_TOP_HERO]: () => (0, l.jsx)(ea, {}),
        [_.WIDGET_TOP_CONTAINED]: () => (0, l.jsx)(er, {}),
    },
    [d.m.WIDGET_BOTTOM]: {
        [_.WIDGET_BOTTOM_STATS]: () => (0, l.jsx)(ee, {}),
        [_.WIDGET_BOTTOM_PROGRESS]: () => (0, l.jsx)(Z, {}),
        [_.WIDGET_BOTTOM_COLLECTION]: () => (0, l.jsx)($, {}),
    },
    [d.m.MINI_PROFILE]: {
        [_.MINI_PROFILE_HERO_STAT]: () => (0, l.jsx)(Y, {}),
        [_.MINI_PROFILE_CONTAINED_STAT]: () => (0, l.jsx)(j, {}),
    },
    [d.m.ACTIVITY_ACCESSORY]: { [_.ACTIVITY_ACCESSORY_STAT]: () => (0, l.jsx)(R, {}) },
    [d.m.ADD_WIDGET_PREVIEW]: {
        [_.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, l.jsx)(U, { ...e }),
        [_.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, l.jsx)(M, { ...e }),
    },
};
function ec(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: s, onClick: a, layoutProps: o } = e,
        d = u.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        _ = u.useMemo(() => new c.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let h = eu[t]?.[n.layout];
    return null == h
        ? null
        : (0, l.jsx)(eo.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: r,
                  numberFormat: d,
                  durationFormat: _,
                  header: s,
                  onClick: a,
                  resolutionContext: i,
                  resolveFieldValue: function (e, t) {
                      return (function e(t, n, i) {
                          let { data: r, applicationAssets: s, getApplicationAssetUrl: a } = i;
                          if (null == t) return null;
                          if (t.value_type === m.DATA) {
                              let s = r[t.value],
                                  a = t.presentation_type;
                              return null != s && A[a]?.includes(s.type) && n.includes(s.type)
                                  ? "playtime_hours" === t.value && "number" === s.type && a === E.DURATION
                                      ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: a }
                                      : { ...s, presentationType: a }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === m.CUSTOM_STRING)
                              return t.presentation_type === E.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: E.TEXT }
                                  : null;
                          if (t.value_type === m.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = s.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: a(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: E.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: h(o),
          });
}
var ed = (((o = {})[(o.STRING = 1)] = "STRING"), (o[(o.NUMBER = 2)] = "NUMBER"), (o[(o.MEDIA = 3)] = "MEDIA"), o);
function e_(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function eh(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: g.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: g.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: g.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!e_(i)) continue;
                          n[e] = { type: g.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === ed.STRING) n[e.name] = { type: g.STRING, value: e.value };
                      else if (e.type === ed.NUMBER) n[e.name] = { type: g.NUMBER, value: e.value };
                      else if (e.type === ed.MEDIA) {
                          if (!e_(e.value)) continue;
                          n[e.name] = {
                              type: g.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
