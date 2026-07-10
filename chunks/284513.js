"use strict";
n.d(t, { VG: () => ep, kH: () => ec });
var i,
    r,
    a,
    s,
    l,
    o = n(627968),
    d = n(64700),
    c = n(430111),
    u = n(598748),
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
    E = n(503698),
    A = n.n(E),
    h = n(834730),
    I = (((r = {}).TEXT = "text"), (r.NUMBER = "number"), (r.IMAGE = "image"), (r.DURATION = "duration"), r),
    f =
        (((a = {}).DATA = "data"),
        (a.CUSTOM_STRING = "custom_string"),
        (a.APPLICATION_ASSET = "application_asset"),
        (a.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        a),
    p = (((s = {}).STRING = "string"), (s.NUMBER = "number"), (s.MEDIA = "media"), s);
let T = { [I.TEXT]: ["string"], [I.NUMBER]: ["number"], [I.IMAGE]: ["media"], [I.DURATION]: ["number"] };
var m = n(66979);
function g(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
        ? (0, o.jsx)(h.E, {
              variant: t,
              children: (0, o.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: m.K,
                  alt: i ?? "",
              }),
          })
        : null;
}
var S = n(235686);
function N(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, o.jsx)(h.E, {
        variant: n ?? "text-md/normal",
        children: (0, o.jsx)("div", {
            className: A()(S.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, o.jsx)("div", { className: S.v }),
        }),
    });
}
var C = n(701054);
function R(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: a,
            lineClamp: s,
            imagePosition: l = "right",
        } = e,
        { resolveFieldValue: d, numberFormat: c } = eo();
    if (null == t) return r ? (0, o.jsx)(N, { variant: n, className: a }) : null;
    let u = d(t.fields.text, [p.STRING, p.NUMBER]),
        _ = d(t.fields.label, [p.STRING, p.NUMBER]),
        E = d(t.fields.icon, [p.MEDIA]);
    if (null == u && null == _) return (0, o.jsx)(N, { variant: n, className: a });
    let I = null != E ? (0, o.jsx)(g, { media: E.media, variant: n }) : null;
    return (0, o.jsxs)("div", {
        className: A()(C.k, a),
        children: [
            null != I && "left" === l ? I : null,
            (0, o.jsxs)(h.E, {
                variant: n,
                color: i,
                lineClamp: s,
                children: [
                    null == _ || "" === _.value
                        ? null
                        : "number" == typeof _.value
                          ? `${c.format(_.value)}: `
                          : `${_.value}: `,
                    null == u || "" === u.value ? "\u2013" : "number" == typeof u.value ? c.format(u.value) : u.value,
                ],
            }),
            null != I && "right" === l ? I : null,
        ],
    });
}
var O = n(157841);
function L() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsx)("div", {
        className: O.z,
        children: (0, o.jsx)(R, {
            component: e.components.stat,
            className: O.Q,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var D = n(205914);
function y(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", { className: A()(D.z, t) });
}
var v = n(603427);
function b(e) {
    let { small: t = !1, image: n } = e;
    return (0, o.jsxs)("div", {
        className: A()(v.kL, { [v.PG]: t }),
        children: [
            (0, o.jsxs)("div", {
                className: v.Qs,
                children: [
                    (0, o.jsx)("div", { className: v.wx }),
                    (0, o.jsx)("div", { className: v.yF }),
                    (0, o.jsxs)("div", {
                        className: v.M1,
                        children: [
                            (0, o.jsx)("div", { className: v.dJ }),
                            (0, o.jsx)("div", { className: v.dJ }),
                            (0, o.jsx)("div", { className: v.dJ }),
                            (0, o.jsx)("div", { className: v.dJ }),
                            (0, o.jsx)("div", { className: v.dJ }),
                            (0, o.jsx)("div", { className: v.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var M = n(112143);
function P(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = eo(),
        r = i(n.components.contained_image?.fields.image, [p.MEDIA]);
    return (0, o.jsx)(b, {
        small: t,
        image: (0, o.jsx)("div", {
            className: M.ZS,
            children:
                null != r
                    ? (0, o.jsx)("img", { alt: "", src: r.media.url, className: M.Sl })
                    : (0, o.jsx)(y, { className: M.h2 }),
        }),
    });
}
function U(e) {
    let { media: t, ...n } = e;
    return (0, o.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var w = n(352478),
    G = n(983512);
function x(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = eo(),
        i = n(t.components.hero_image?.fields.image, [p.MEDIA]);
    return (0, o.jsx)(b, {
        ...e,
        image: (0, o.jsx)("div", {
            className: G.ZS,
            children:
                null != i
                    ? (0, o.jsx)(U, { alt: "", media: i.media, className: A()(G.c8, w.g) })
                    : (0, o.jsx)(y, { className: G.pm }),
        }),
    });
}
var k = n(123292),
    F = n(425376);
function V(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: i, onClick: r } = eo();
    return (0, o.jsxs)("div", {
        className: F.zr,
        children: [
            (0, o.jsxs)("div", {
                className: F.rf,
                children: [
                    n,
                    (0, o.jsxs)("div", {
                        className: F.Qs,
                        children: [
                            (0, o.jsx)(R, {
                                component: i.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, o.jsx)(k.Q, {
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
function H() {
    let { surfaceConfig: e, resolveFieldValue: t } = eo(),
        n = t(e.components.contained_image?.fields.image, [p.MEDIA]);
    return (0, o.jsx)(V, {
        image: (0, o.jsx)("div", {
            className: B.ZS,
            children:
                null != n
                    ? (0, o.jsx)("img", { alt: "", src: n.media.url, className: B.Sl })
                    : (0, o.jsx)(y, { className: B.h2 }),
        }),
    });
}
var j = n(874921);
function W() {
    let { surfaceConfig: e, resolveFieldValue: t } = eo(),
        n = t(e.components.hero_image?.fields.image, [p.MEDIA]);
    return (0, o.jsx)(V, {
        image:
            null != n
                ? (0, o.jsx)("div", {
                      className: j.Xr,
                      children: (0, o.jsx)(U, { media: n.media, className: A()(j.c8, w.g) }),
                  })
                : (0, o.jsx)(y, { className: j.pm }),
    });
}
var Y = n(174529);
function K(e) {
    let { resolveFieldValue: t } = eo(),
        n = t(e.componentConfig?.fields.image, [p.MEDIA]),
        i = t(e.componentConfig?.fields.name, [p.STRING]),
        r = t(e.componentConfig?.fields.description, [p.STRING]);
    return (0, o.jsxs)("div", {
        className: Y.E4,
        children: [
            null != n
                ? (0, o.jsx)("img", { src: n.media.url, className: Y.bA, alt: "" })
                : (0, o.jsx)(y, { className: Y.ET }),
            (0, o.jsxs)("div", {
                className: Y.Vx,
                children: [
                    null != i
                        ? (0, o.jsx)(h.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, o.jsx)(N, { variant: "text-sm/medium", width: "6ch" }),
                    null != r
                        ? (0, o.jsx)(h.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: r.value,
                          })
                        : (0, o.jsx)(N, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function $() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsxs)("div", {
        className: Y.zr,
        children: [
            (0, o.jsx)(K, { componentConfig: e.components.item_1 }),
            (0, o.jsx)(K, { componentConfig: e.components.item_2 }),
            (0, o.jsx)(K, { componentConfig: e.components.item_3 }),
            (0, o.jsx)(K, { componentConfig: e.components.item_4 }),
        ],
    });
}
var z = n(321498);
function q(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function Z() {
    let { surfaceConfig: e, resolveFieldValue: t } = eo(),
        n = d.useId(),
        i = t(e.components.objective?.fields.image, [p.MEDIA]),
        r = t(e.components.objective?.fields.name, [p.STRING]),
        a = t(e.components.objective?.fields.description, [p.STRING]),
        s = t(e.components.progress?.fields.current, [p.NUMBER]),
        l = t(e.components.progress?.fields.max, [p.NUMBER]),
        c = null == s ? 0 : null == l ? q(s.value) : 0 === l.value ? 0 : q(s.value / l.value);
    return (0, o.jsxs)("div", {
        className: z.zr,
        children: [
            null != i
                ? (0, o.jsx)("img", { src: i.media.url, className: z.Sl, alt: "" })
                : (0, o.jsx)(y, { className: z.Sl }),
            (0, o.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, o.jsx)("div", {
                        className: z.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": s?.value ?? 0,
                        "aria-valuemax": l?.value ?? 1,
                        "aria-valuetext": null != l && null != s ? `${s.value} of ${l.value}` : void 0,
                        children: (0, o.jsx)("div", { className: z.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, o.jsxs)("div", {
                        className: z.P_,
                        children: [
                            (0, o.jsxs)("div", {
                                className: z.n_,
                                children: [
                                    null != r
                                        ? (0, o.jsx)(h.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, o.jsx)(N, { variant: "heading-sm/medium" }),
                                    null != a
                                        ? (0, o.jsx)(h.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: a.value,
                                          })
                                        : (0, o.jsx)(N, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != s
                                ? (0, o.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: z.l_,
                                      children: null != l ? `${s.value}/${l.value}` : `${q(s.value)}%`,
                                  })
                                : (0, o.jsx)(N, { variant: "text-sm/medium", width: "4ch" }),
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
        { resolveFieldValue: r, numberFormat: a, durationFormat: s } = eo();
    if (null == n)
        return i
            ? (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(N, { variant: "text-sm/medium", width: "8ch" }),
                      (0, o.jsx)(N, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let l = r(n.fields.value, [p.STRING, p.NUMBER]),
        d = r(n.fields.label, [p.STRING]),
        c = r(n.fields.icon, [p.MEDIA]);
    return (0, o.jsxs)("div", {
        className: X.k,
        children: [
            null ==
            (t = (() => {
                if (null == l) return null;
                if (l.type === p.STRING) return l.value;
                if (l.type === p.NUMBER) {
                    if (l.presentationType === I.NUMBER) return a.format(l.value);
                    if (l.presentationType === I.DURATION) {
                        var e;
                        let t, n;
                        return s.format(
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
                ? (0, o.jsx)(N, { variant: "text-sm/medium", width: "8ch" })
                : (0, o.jsxs)("div", {
                      className: X.U,
                      children: [
                          (0, o.jsx)(h.E, { variant: "text-sm/medium", lineClamp: 2, children: t }),
                          null != c && (0, o.jsx)(g, { variant: "text-sm/medium", media: c.media }),
                      ],
                  }),
            null != d
                ? (0, o.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", lineClamp: 2, children: d.value })
                : (0, o.jsx)(N, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var J = n(578158);
function ee() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsxs)("div", {
        className: J.w,
        children: [
            (0, o.jsx)(Q, { component: e.components.stat_1, required: !0 }),
            (0, o.jsx)(Q, { component: e.components.stat_2, required: !0 }),
            (0, o.jsx)(Q, { component: e.components.stat_3, required: !0 }),
            (0, o.jsx)(Q, { component: e.components.stat_4, required: !0 }),
            (0, o.jsx)(Q, { component: e.components.stat_5, required: !0 }),
            (0, o.jsx)(Q, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var et = n(790352);
function en() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsxs)("div", {
        className: et.Q,
        children: [
            (0, o.jsx)(R, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: et.D,
            }),
            (0, o.jsx)(R, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(R, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(R, {
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
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = eo(),
        i = t(e.components.contained_image?.fields.image, [p.MEDIA]);
    return (0, o.jsxs)("div", {
        className: ei.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: ei.wx, children: n }),
            (0, o.jsx)(en, {}),
            null != i
                ? (0, o.jsx)("img", { alt: "", src: i.media.url, className: ei.Sl })
                : (0, o.jsx)(y, { className: ei.h2 }),
        ],
    });
}
var ea = n(321113);
function es() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = eo(),
        i = t(e.components.hero_image?.fields.image, [p.MEDIA]);
    return (0, o.jsxs)("div", {
        className: ea.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: ea.wx, children: n }),
            (0, o.jsx)("div", { className: ea.hQ, children: (0, o.jsx)(en, {}) }),
            null != i
                ? (0, o.jsx)("div", {
                      className: ea._j,
                      children: (0, o.jsx)("div", {
                          className: ea.PX,
                          children: (0, o.jsx)("img", { alt: "", src: i.media.url, className: A()(ea.Sl, w.g) }),
                      }),
                  })
                : (0, o.jsx)(y, { className: ea.h2 }),
        ],
    });
}
let el = d.createContext(null);
function eo() {
    let e = d.useContext(el);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let ed = {
    [u.m.WIDGET_TOP]: {
        [_.WIDGET_TOP_HERO]: () => (0, o.jsx)(es, {}),
        [_.WIDGET_TOP_CONTAINED]: () => (0, o.jsx)(er, {}),
    },
    [u.m.WIDGET_BOTTOM]: {
        [_.WIDGET_BOTTOM_STATS]: () => (0, o.jsx)(ee, {}),
        [_.WIDGET_BOTTOM_PROGRESS]: () => (0, o.jsx)(Z, {}),
        [_.WIDGET_BOTTOM_COLLECTION]: () => (0, o.jsx)($, {}),
    },
    [u.m.MINI_PROFILE]: {
        [_.MINI_PROFILE_HERO_STAT]: () => (0, o.jsx)(W, {}),
        [_.MINI_PROFILE_CONTAINED_STAT]: () => (0, o.jsx)(H, {}),
    },
    [u.m.ACTIVITY_ACCESSORY]: { [_.ACTIVITY_ACCESSORY_STAT]: () => (0, o.jsx)(L, {}) },
    [u.m.ADD_WIDGET_PREVIEW]: {
        [_.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, o.jsx)(x, { ...e }),
        [_.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, o.jsx)(P, { ...e }),
    },
};
function ec(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: a, onClick: s, layoutProps: l } = e,
        u = d.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        _ = d.useMemo(() => new c.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let E = ed[t]?.[n.layout];
    return null == E
        ? null
        : (0, o.jsx)(el.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: r,
                  numberFormat: u,
                  durationFormat: _,
                  header: a,
                  onClick: s,
                  resolutionContext: i,
                  resolveFieldValue: function (e, t) {
                      return (function e(t, n, i) {
                          let { data: r, applicationAssets: a, getApplicationAssetUrl: s } = i;
                          if (null == t) return null;
                          if (t.value_type === f.DATA) {
                              let a = r[t.value],
                                  s = t.presentation_type;
                              return null != a && T[s]?.includes(a.type) && n.includes(a.type)
                                  ? "playtime_hours" === t.value && "number" === a.type && s === I.DURATION
                                      ? { type: a.type, value: Math.floor(60 * a.value * 6e4), presentationType: s }
                                      : { ...a, presentationType: s }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === f.CUSTOM_STRING)
                              return t.presentation_type === I.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: I.TEXT }
                                  : null;
                          if (t.value_type === f.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = a.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: s(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: I.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: E(l),
          });
}
var eu = n(832696);
let e_ = eu.Ikc({ value_type: eu.k5n(f), presentation_type: eu.k5n(I), value: eu.YjP() }),
    eE = eu.Ikc({ value_type: eu.k5n(f), presentation_type: eu.k5n(I), value: eu.YjP(), fallback: e_.nullish() }),
    eA = eu.Ikc({ fields: eu.jgl(eu.YjP(), eE) }),
    eh = eu.Ikc({ layout: eu.YjP(), components: eu.jgl(eu.YjP(), eA) });
eu.jgl(eu.k5n(u.m), eh);
var eI = (((l = {})[(l.STRING = 1)] = "STRING"), (l[(l.NUMBER = 2)] = "NUMBER"), (l[(l.MEDIA = 3)] = "MEDIA"), l);
function ef(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function ep(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: p.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: p.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: p.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!ef(i)) continue;
                          n[e] = { type: p.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === eI.STRING) n[e.name] = { type: p.STRING, value: e.value };
                      else if (e.type === eI.NUMBER) n[e.name] = { type: p.NUMBER, value: e.value };
                      else if (e.type === eI.MEDIA) {
                          if (!ef(e.value)) continue;
                          n[e.name] = {
                              type: p.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
