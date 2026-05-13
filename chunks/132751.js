"use strict";
n.d(t, { VG: () => ei, kH: () => ee });
var i,
    r,
    s,
    a,
    o = n(627968),
    l = n(64700),
    u = n(334432),
    c = n(598748),
    d =
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
    _ = n(331322),
    f = n(834730),
    h = (((r = {}).TEXT = "text"), (r.NUMBER = "number"), (r.IMAGE = "image"), (r.DURATION = "duration"), r),
    p =
        (((s = {}).DATA = "data"),
        (s.CUSTOM_STRING = "custom_string"),
        (s.APPLICATION_ASSET = "application_asset"),
        (s.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        s),
    E = (((a = {}).STRING = "string"), (a.NUMBER = "number"), (a.MEDIA = "media"), a);
let m = { [h.TEXT]: ["string"], [h.NUMBER]: ["number"], [h.IMAGE]: ["media"], [h.DURATION]: ["number"] };
var g = n(503698),
    A = n.n(g),
    I = n(235686);
function T(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, o.jsx)(f.E, {
        variant: n ?? "text-md/normal",
        children: (0, o.jsx)("div", {
            className: A()(I.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, o.jsx)("div", { className: I.v }),
        }),
    });
}
var S = n(701054);
function N(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: s,
            lineClamp: a,
            imagePosition: l = "right",
        } = e,
        { resolveFieldValue: u } = Q();
    if (null == t) return r ? (0, o.jsx)(T, { variant: n, className: s }) : null;
    let c = u(t.fields.text, [E.STRING]),
        d = u(t.fields.label, [E.STRING]),
        h = u(t.fields.icon, [E.MEDIA]),
        p =
            null != h
                ? (0, o.jsx)("img", {
                      alt: "",
                      src: h.media.url,
                      width: h.media.width,
                      height: h.media.height,
                      className: S.K,
                  })
                : null;
    return (0, o.jsx)(_.B, {
        direction: "horizontal",
        gap: 0,
        className: s,
        children:
            null == c && null == d
                ? (0, o.jsx)(T, { variant: n })
                : (0, o.jsxs)(f.E, {
                      variant: n,
                      color: i,
                      lineClamp: a,
                      children: [
                          null != p && "left" === l ? (0, o.jsxs)(o.Fragment, { children: [p, " "] }) : null,
                          null != d && "" !== d.value && `${d.value}: `,
                          null != c && "" !== c.value ? c.value : "\u2013",
                          null != p && "right" === l ? (0, o.jsxs)(o.Fragment, { children: [" ", p] }) : null,
                      ],
                  }),
    });
}
var y = n(157841);
function C() {
    let { surfaceConfig: e } = Q();
    return (0, o.jsx)("div", {
        className: y.z,
        children: (0, o.jsx)(N, {
            component: e.components.stat,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
        }),
    });
}
var v = n(205914);
function O(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", { className: A()(v.z, t) });
}
function R(e) {
    let { media: t, ...n } = e;
    return (0, o.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var b = n(352478),
    D = n(983512);
function L(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = Q(),
        r = i(n.components.hero_image?.fields.image, [E.MEDIA]);
    return (0, o.jsxs)("div", {
        className: A()(D.kL, { [D.PG]: t }),
        children: [
            (0, o.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, o.jsx)("div", { className: D.wx }),
                    (0, o.jsx)("div", { className: D.yF }),
                    (0, o.jsxs)("div", {
                        className: D.M1,
                        children: [
                            (0, o.jsx)("div", { className: D.dJ }),
                            (0, o.jsx)("div", { className: D.dJ }),
                            (0, o.jsx)("div", { className: D.dJ }),
                            (0, o.jsx)("div", { className: D.dJ }),
                            (0, o.jsx)("div", { className: D.dJ }),
                            (0, o.jsx)("div", { className: D.dJ }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: D.ZS,
                children:
                    null != r
                        ? (0, o.jsx)(R, { alt: "", media: r.media, className: A()(D.c8, b.g) })
                        : (0, o.jsx)(O, { className: D.pm }),
            }),
        ],
    });
}
var w = n(123292),
    M = n(874921);
function P() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n, onClick: i } = Q(),
        r = t(e.components.hero_image?.fields.image, [E.MEDIA]);
    return (0, o.jsxs)("div", {
        className: M.zr,
        children: [
            (0, o.jsxs)("div", {
                className: M.rf,
                children: [
                    n,
                    (0, o.jsxs)("div", {
                        className: M.Qs,
                        children: [
                            (0, o.jsx)(N, {
                                component: e.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, o.jsx)(w.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: i,
                            }),
                        ],
                    }),
                ],
            }),
            null != r
                ? (0, o.jsx)("div", {
                      className: M.Xr,
                      children: (0, o.jsx)(R, { media: r.media, className: A()(M.c8, b.g) }),
                  })
                : (0, o.jsx)(O, { className: M.pm }),
        ],
    });
}
var x = n(174529);
function U(e) {
    let { resolveFieldValue: t } = Q(),
        n = t(e.componentConfig?.fields.image, [E.MEDIA]),
        i = t(e.componentConfig?.fields.name, [E.STRING]),
        r = t(e.componentConfig?.fields.description, [E.STRING]);
    return (0, o.jsxs)("div", {
        className: x.E4,
        children: [
            null != n
                ? (0, o.jsx)("img", { src: n.media.url, className: x.bA, alt: "" })
                : (0, o.jsx)(O, { className: x.ET }),
            (0, o.jsxs)("div", {
                className: x.Vx,
                children: [
                    null != i
                        ? (0, o.jsx)(f.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, o.jsx)(T, { variant: "text-sm/medium", width: "6ch" }),
                    null != r
                        ? (0, o.jsx)(f.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: r.value,
                          })
                        : (0, o.jsx)(T, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function k() {
    let { surfaceConfig: e } = Q();
    return (0, o.jsxs)("div", {
        className: x.zr,
        children: [
            (0, o.jsx)(U, { componentConfig: e.components.item_1 }),
            (0, o.jsx)(U, { componentConfig: e.components.item_2 }),
            (0, o.jsx)(U, { componentConfig: e.components.item_3 }),
            (0, o.jsx)(U, { componentConfig: e.components.item_4 }),
        ],
    });
}
var G = n(321498);
function F(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function V() {
    let { surfaceConfig: e, resolveFieldValue: t } = Q(),
        n = l.useId(),
        i = t(e.components.objective?.fields.image, [E.MEDIA]),
        r = t(e.components.objective?.fields.name, [E.STRING]),
        s = t(e.components.objective?.fields.description, [E.STRING]),
        a = t(e.components.progress?.fields.current, [E.NUMBER]),
        u = t(e.components.progress?.fields.max, [E.NUMBER]),
        c = null == a ? 0 : null == u ? F(a.value) : 0 === u.value ? 0 : F(a.value / u.value);
    return (0, o.jsxs)("div", {
        className: G.zr,
        children: [
            null != i
                ? (0, o.jsx)("img", { src: i.media.url, className: G.Sl, alt: "" })
                : (0, o.jsx)(O, { className: G.Sl }),
            (0, o.jsxs)("div", {
                className: G.Qs,
                children: [
                    (0, o.jsx)("div", {
                        className: G.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": a?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != a ? `${a.value} of ${u.value}` : void 0,
                        children: (0, o.jsx)("div", { className: G.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, o.jsxs)("div", {
                        className: G.P_,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    null != r
                                        ? (0, o.jsx)(f.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              children: r.value,
                                          })
                                        : (0, o.jsx)(T, { variant: "heading-sm/medium" }),
                                    null != s
                                        ? (0, o.jsx)(f.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              children: s.value,
                                          })
                                        : (0, o.jsx)(T, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != a
                                ? (0, o.jsx)(f.E, {
                                      variant: "text-sm/medium",
                                      children: null != u ? `${a.value}/${u.value}` : `${F(a.value)}%`,
                                  })
                                : (0, o.jsx)(T, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var B = n(702769);
function H(e) {
    let t,
        { component: n, required: i = !1 } = e,
        { resolveFieldValue: r, numberFormat: s, durationFormat: a } = Q();
    if (null == n)
        return i
            ? (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(T, { variant: "text-sm/medium", width: "8ch" }),
                      (0, o.jsx)(T, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let l = r(n.fields.value, [E.STRING, E.NUMBER]),
        u = r(n.fields.label, [E.STRING]),
        c = r(n.fields.icon, [E.MEDIA]);
    return (0, o.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == l) return null;
                if (l.type === E.STRING) return l.value;
                if (l.type === E.NUMBER) {
                    if (l.presentationType === h.NUMBER) return s.format(l.value);
                    if (l.presentationType === h.DURATION) {
                        var e;
                        let t, n;
                        return a.format(
                            ((n = Math.floor(
                                (t = Number.isFinite((e = l.value)) ? Math.max(0, Math.floor(e)) : 0) / 36e5,
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
                ? (0, o.jsx)(T, { variant: "text-sm/medium", width: "8ch" })
                : (0, o.jsxs)(f.E, {
                      variant: "text-sm/medium",
                      className: B.U,
                      children: [
                          t,
                          null != c &&
                              (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      " ",
                                      (0, o.jsx)("img", {
                                          alt: "",
                                          src: c.media.url,
                                          width: 18,
                                          height: 18,
                                          className: B.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != u
                ? (0, o.jsx)(f.E, { variant: "text-xs/normal", color: "text-subtle", children: u.value })
                : (0, o.jsx)(T, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var j = n(578158);
function Y() {
    let { surfaceConfig: e } = Q();
    return (0, o.jsxs)("div", {
        className: j.w,
        children: [
            (0, o.jsx)(H, { component: e.components.stat_1, required: !0 }),
            (0, o.jsx)(H, { component: e.components.stat_2, required: !0 }),
            (0, o.jsx)(H, { component: e.components.stat_3, required: !0 }),
            (0, o.jsx)(H, { component: e.components.stat_4, required: !0 }),
            (0, o.jsx)(H, { component: e.components.stat_5, required: !0 }),
            (0, o.jsx)(H, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var W = n(790352);
function K() {
    let { surfaceConfig: e } = Q();
    return (0, o.jsxs)("div", {
        className: W.Q,
        children: [
            (0, o.jsx)(N, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: W.D,
            }),
            (0, o.jsx)(N, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(N, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(N, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var z = n(834312);
function $() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = Q(),
        i = t(e.components.contained_image?.fields.image, [E.MEDIA]);
    return (0, o.jsxs)("div", {
        className: z.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: z.wx, children: n }),
            (0, o.jsx)(K, {}),
            null != i
                ? (0, o.jsx)("img", { alt: "", src: i.media.url, className: z.Sl })
                : (0, o.jsx)(O, { className: z.h2 }),
        ],
    });
}
var q = n(321113);
function Z() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = Q(),
        i = t(e.components.hero_image?.fields.image, [E.MEDIA]);
    return (0, o.jsxs)("div", {
        className: q.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: q.wx, children: n }),
            (0, o.jsx)("div", { className: q.hQ, children: (0, o.jsx)(K, {}) }),
            null != i
                ? (0, o.jsx)("div", {
                      className: q._j,
                      children: (0, o.jsx)("div", {
                          className: q.PX,
                          children: (0, o.jsx)("img", { alt: "", src: i.media.url, className: A()(q.Sl, b.g) }),
                      }),
                  })
                : (0, o.jsx)(O, { className: q.h2 }),
        ],
    });
}
let X = l.createContext(null);
function Q() {
    let e = l.useContext(X);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let J = {
    [c.m.WIDGET_TOP]: {
        [d.WIDGET_TOP_HERO]: () => (0, o.jsx)(Z, {}),
        [d.WIDGET_TOP_CONTAINED]: () => (0, o.jsx)($, {}),
    },
    [c.m.WIDGET_BOTTOM]: {
        [d.WIDGET_BOTTOM_STATS]: () => (0, o.jsx)(Y, {}),
        [d.WIDGET_BOTTOM_PROGRESS]: () => (0, o.jsx)(V, {}),
        [d.WIDGET_BOTTOM_COLLECTION]: () => (0, o.jsx)(k, {}),
    },
    [c.m.MINI_PROFILE]: { [d.MINI_PROFILE_HERO_STAT]: () => (0, o.jsx)(P, {}) },
    [c.m.ACTIVITY_ACCESSORY]: { [d.ACTIVITY_ACCESSORY_STAT]: () => (0, o.jsx)(C, {}) },
    [c.m.ADD_WIDGET_PREVIEW]: { [d.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, o.jsx)(L, { ...e }) },
};
function ee(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: s, onClick: a, layoutProps: c } = e,
        d = l.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        _ = l.useMemo(() => new u.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let f = J[t]?.[n.layout];
    return null == f
        ? null
        : (0, o.jsx)(X.Provider, {
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
                          if (t.value_type === p.DATA) {
                              let s = r[t.value],
                                  a = t.presentation_type;
                              return null != s && m[a]?.includes(s.type) && n.includes(s.type)
                                  ? "playtime_hours" === t.value && "number" === s.type && a === h.DURATION
                                      ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: a }
                                      : { ...s, presentationType: a }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === p.CUSTOM_STRING)
                              return t.presentation_type === h.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: h.TEXT }
                                  : null;
                          if (t.value_type === p.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = s.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: a(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: h.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: f(c),
          });
}
var et = n(87075);
function en(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function ei(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: E.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: E.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: E.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!en(i)) continue;
                          n[e] = { type: E.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === et.f.STRING) n[e.name] = { type: E.STRING, value: e.value };
                      else if (e.type === et.f.NUMBER) n[e.name] = { type: E.NUMBER, value: e.value };
                      else if (e.type === et.f.MEDIA) {
                          if (!en(e.value)) continue;
                          n[e.name] = {
                              type: E.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
