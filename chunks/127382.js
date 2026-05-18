"use strict";
n.d(t, { VG: () => e_, kH: () => eu });
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
    _ = n(503698),
    f = n.n(_),
    h = n(834730),
    p = (((r = {}).TEXT = "text"), (r.NUMBER = "number"), (r.IMAGE = "image"), (r.DURATION = "duration"), r),
    E =
        (((s = {}).DATA = "data"),
        (s.CUSTOM_STRING = "custom_string"),
        (s.APPLICATION_ASSET = "application_asset"),
        (s.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        s),
    m = (((a = {}).STRING = "string"), (a.NUMBER = "number"), (a.MEDIA = "media"), a);
let g = { [p.TEXT]: ["string"], [p.NUMBER]: ["number"], [p.IMAGE]: ["media"], [p.DURATION]: ["number"] };
var A = n(66979);
function I(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
        ? (0, o.jsx)(h.E, {
              variant: t,
              children: (0, o.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: A.K,
                  alt: i ?? "",
              }),
          })
        : null;
}
var T = n(235686);
function S(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, o.jsx)(h.E, {
        variant: n ?? "text-md/normal",
        children: (0, o.jsx)("div", {
            className: f()(T.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, o.jsx)("div", { className: T.v }),
        }),
    });
}
var N = n(701054);
function y(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: s,
            lineClamp: a,
            imagePosition: l = "right",
        } = e,
        { resolveFieldValue: u, numberFormat: c } = eo();
    if (null == t) return r ? (0, o.jsx)(S, { variant: n, className: s }) : null;
    let d = u(t.fields.text, [m.STRING, m.NUMBER]),
        _ = u(t.fields.label, [m.STRING, m.NUMBER]),
        p = u(t.fields.icon, [m.MEDIA]);
    if (null == d && null == _) return (0, o.jsx)(S, { variant: n, className: s });
    let E = null != p ? (0, o.jsx)(I, { media: p.media, variant: n }) : null;
    return (0, o.jsxs)("div", {
        className: f()(N.k, s),
        children: [
            null != E && "left" === l ? E : null,
            (0, o.jsxs)(h.E, {
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
            null != E && "right" === l ? E : null,
        ],
    });
}
var C = n(157841);
function v() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsx)("div", {
        className: C.z,
        children: (0, o.jsx)(y, {
            component: e.components.stat,
            className: C.Q,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var O = n(205914);
function R(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", { className: f()(O.z, t) });
}
var b = n(603427);
function D(e) {
    let { small: t = !1, image: n } = e;
    return (0, o.jsxs)("div", {
        className: f()(b.kL, { [b.PG]: t }),
        children: [
            (0, o.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, o.jsx)("div", { className: b.wx }),
                    (0, o.jsx)("div", { className: b.yF }),
                    (0, o.jsxs)("div", {
                        className: b.M1,
                        children: [
                            (0, o.jsx)("div", { className: b.dJ }),
                            (0, o.jsx)("div", { className: b.dJ }),
                            (0, o.jsx)("div", { className: b.dJ }),
                            (0, o.jsx)("div", { className: b.dJ }),
                            (0, o.jsx)("div", { className: b.dJ }),
                            (0, o.jsx)("div", { className: b.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var L = n(112143);
function w(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = eo(),
        r = i(n.components.contained_image?.fields.image, [m.MEDIA]);
    return (0, o.jsx)(D, {
        small: t,
        image: (0, o.jsx)("div", {
            className: L.ZS,
            children:
                null != r
                    ? (0, o.jsx)("img", { alt: "", src: r.media.url, className: L.Sl })
                    : (0, o.jsx)(R, { className: L.h2 }),
        }),
    });
}
function M(e) {
    let { media: t, ...n } = e;
    return (0, o.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var P = n(352478),
    x = n(983512);
function U(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = eo(),
        i = n(t.components.hero_image?.fields.image, [m.MEDIA]);
    return (0, o.jsx)(D, {
        ...e,
        image: (0, o.jsx)("div", {
            className: x.ZS,
            children:
                null != i
                    ? (0, o.jsx)(M, { alt: "", media: i.media, className: f()(x.c8, P.g) })
                    : (0, o.jsx)(R, { className: x.pm }),
        }),
    });
}
var k = n(123292),
    G = n(425376);
function F(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: i, onClick: r } = eo();
    return (0, o.jsxs)("div", {
        className: G.zr,
        children: [
            (0, o.jsxs)("div", {
                className: G.rf,
                children: [
                    n,
                    (0, o.jsxs)("div", {
                        className: G.Qs,
                        children: [
                            (0, o.jsx)(y, {
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
var V = n(338388);
function B() {
    let { surfaceConfig: e, resolveFieldValue: t } = eo(),
        n = t(e.components.contained_image?.fields.image, [m.MEDIA]);
    return (0, o.jsx)(F, {
        image: (0, o.jsx)("div", {
            className: V.ZS,
            children:
                null != n
                    ? (0, o.jsx)("img", { alt: "", src: n.media.url, className: V.Sl })
                    : (0, o.jsx)(R, { className: V.h2 }),
        }),
    });
}
var H = n(874921);
function j() {
    let { surfaceConfig: e, resolveFieldValue: t } = eo(),
        n = t(e.components.hero_image?.fields.image, [m.MEDIA]);
    return (0, o.jsx)(F, {
        image:
            null != n
                ? (0, o.jsx)("div", {
                      className: H.Xr,
                      children: (0, o.jsx)(M, { media: n.media, className: f()(H.c8, P.g) }),
                  })
                : (0, o.jsx)(R, { className: H.pm }),
    });
}
var Y = n(174529);
function W(e) {
    let { resolveFieldValue: t } = eo(),
        n = t(e.componentConfig?.fields.image, [m.MEDIA]),
        i = t(e.componentConfig?.fields.name, [m.STRING]),
        r = t(e.componentConfig?.fields.description, [m.STRING]);
    return (0, o.jsxs)("div", {
        className: Y.E4,
        children: [
            null != n
                ? (0, o.jsx)("img", { src: n.media.url, className: Y.bA, alt: "" })
                : (0, o.jsx)(R, { className: Y.ET }),
            (0, o.jsxs)("div", {
                className: Y.Vx,
                children: [
                    null != i
                        ? (0, o.jsx)(h.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, o.jsx)(S, { variant: "text-sm/medium", width: "6ch" }),
                    null != r
                        ? (0, o.jsx)(h.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: r.value,
                          })
                        : (0, o.jsx)(S, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function K() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsxs)("div", {
        className: Y.zr,
        children: [
            (0, o.jsx)(W, { componentConfig: e.components.item_1 }),
            (0, o.jsx)(W, { componentConfig: e.components.item_2 }),
            (0, o.jsx)(W, { componentConfig: e.components.item_3 }),
            (0, o.jsx)(W, { componentConfig: e.components.item_4 }),
        ],
    });
}
var z = n(321498);
function $(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function q() {
    let { surfaceConfig: e, resolveFieldValue: t } = eo(),
        n = l.useId(),
        i = t(e.components.objective?.fields.image, [m.MEDIA]),
        r = t(e.components.objective?.fields.name, [m.STRING]),
        s = t(e.components.objective?.fields.description, [m.STRING]),
        a = t(e.components.progress?.fields.current, [m.NUMBER]),
        u = t(e.components.progress?.fields.max, [m.NUMBER]),
        c = null == a ? 0 : null == u ? $(a.value) : 0 === u.value ? 0 : $(a.value / u.value);
    return (0, o.jsxs)("div", {
        className: z.zr,
        children: [
            null != i
                ? (0, o.jsx)("img", { src: i.media.url, className: z.Sl, alt: "" })
                : (0, o.jsx)(R, { className: z.Sl }),
            (0, o.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, o.jsx)("div", {
                        className: z.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": a?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != a ? `${a.value} of ${u.value}` : void 0,
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
                                        : (0, o.jsx)(S, { variant: "heading-sm/medium" }),
                                    null != s
                                        ? (0, o.jsx)(h.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: s.value,
                                          })
                                        : (0, o.jsx)(S, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != a
                                ? (0, o.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: z.l_,
                                      children: null != u ? `${a.value}/${u.value}` : `${$(a.value)}%`,
                                  })
                                : (0, o.jsx)(S, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Z = n(702769);
function X(e) {
    let t,
        { component: n, required: i = !1 } = e,
        { resolveFieldValue: r, numberFormat: s, durationFormat: a } = eo();
    if (null == n)
        return i
            ? (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(S, { variant: "text-sm/medium", width: "8ch" }),
                      (0, o.jsx)(S, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let l = r(n.fields.value, [m.STRING, m.NUMBER]),
        u = r(n.fields.label, [m.STRING]),
        c = r(n.fields.icon, [m.MEDIA]);
    return (0, o.jsxs)("div", {
        className: Z.k,
        children: [
            null ==
            (t = (() => {
                if (null == l) return null;
                if (l.type === m.STRING) return l.value;
                if (l.type === m.NUMBER) {
                    if (l.presentationType === p.NUMBER) return s.format(l.value);
                    if (l.presentationType === p.DURATION) {
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
                ? (0, o.jsx)(S, { variant: "text-sm/medium", width: "8ch" })
                : (0, o.jsxs)("div", {
                      className: Z.U,
                      children: [
                          (0, o.jsx)(h.E, { variant: "text-sm/medium", lineClamp: 2, children: t }),
                          null != c && (0, o.jsx)(I, { variant: "text-sm/medium", media: c.media }),
                      ],
                  }),
            null != u
                ? (0, o.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", lineClamp: 2, children: u.value })
                : (0, o.jsx)(S, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var Q = n(578158);
function J() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsxs)("div", {
        className: Q.w,
        children: [
            (0, o.jsx)(X, { component: e.components.stat_1, required: !0 }),
            (0, o.jsx)(X, { component: e.components.stat_2, required: !0 }),
            (0, o.jsx)(X, { component: e.components.stat_3, required: !0 }),
            (0, o.jsx)(X, { component: e.components.stat_4, required: !0 }),
            (0, o.jsx)(X, { component: e.components.stat_5, required: !0 }),
            (0, o.jsx)(X, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var ee = n(790352);
function et() {
    let { surfaceConfig: e } = eo();
    return (0, o.jsxs)("div", {
        className: ee.Q,
        children: [
            (0, o.jsx)(y, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: ee.D,
            }),
            (0, o.jsx)(y, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(y, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(y, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var en = n(834312);
function ei() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = eo(),
        i = t(e.components.contained_image?.fields.image, [m.MEDIA]);
    return (0, o.jsxs)("div", {
        className: en.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: en.wx, children: n }),
            (0, o.jsx)(et, {}),
            null != i
                ? (0, o.jsx)("img", { alt: "", src: i.media.url, className: en.Sl })
                : (0, o.jsx)(R, { className: en.h2 }),
        ],
    });
}
var er = n(321113);
function es() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = eo(),
        i = t(e.components.hero_image?.fields.image, [m.MEDIA]);
    return (0, o.jsxs)("div", {
        className: er.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: er.wx, children: n }),
            (0, o.jsx)("div", { className: er.hQ, children: (0, o.jsx)(et, {}) }),
            null != i
                ? (0, o.jsx)("div", {
                      className: er._j,
                      children: (0, o.jsx)("div", {
                          className: er.PX,
                          children: (0, o.jsx)("img", { alt: "", src: i.media.url, className: f()(er.Sl, P.g) }),
                      }),
                  })
                : (0, o.jsx)(R, { className: er.h2 }),
        ],
    });
}
let ea = l.createContext(null);
function eo() {
    let e = l.useContext(ea);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let el = {
    [c.m.WIDGET_TOP]: {
        [d.WIDGET_TOP_HERO]: () => (0, o.jsx)(es, {}),
        [d.WIDGET_TOP_CONTAINED]: () => (0, o.jsx)(ei, {}),
    },
    [c.m.WIDGET_BOTTOM]: {
        [d.WIDGET_BOTTOM_STATS]: () => (0, o.jsx)(J, {}),
        [d.WIDGET_BOTTOM_PROGRESS]: () => (0, o.jsx)(q, {}),
        [d.WIDGET_BOTTOM_COLLECTION]: () => (0, o.jsx)(K, {}),
    },
    [c.m.MINI_PROFILE]: {
        [d.MINI_PROFILE_HERO_STAT]: () => (0, o.jsx)(j, {}),
        [d.MINI_PROFILE_CONTAINED_STAT]: () => (0, o.jsx)(B, {}),
    },
    [c.m.ACTIVITY_ACCESSORY]: { [d.ACTIVITY_ACCESSORY_STAT]: () => (0, o.jsx)(v, {}) },
    [c.m.ADD_WIDGET_PREVIEW]: {
        [d.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, o.jsx)(U, { ...e }),
        [d.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, o.jsx)(w, { ...e }),
    },
};
function eu(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: s, onClick: a, layoutProps: c } = e,
        d = l.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        _ = l.useMemo(() => new u.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let f = el[t]?.[n.layout];
    return null == f
        ? null
        : (0, o.jsx)(ea.Provider, {
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
                          if (t.value_type === E.DATA) {
                              let s = r[t.value],
                                  a = t.presentation_type;
                              return null != s && g[a]?.includes(s.type) && n.includes(s.type)
                                  ? "playtime_hours" === t.value && "number" === s.type && a === p.DURATION
                                      ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: a }
                                      : { ...s, presentationType: a }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === E.CUSTOM_STRING)
                              return t.presentation_type === p.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: p.TEXT }
                                  : null;
                          if (t.value_type === E.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = s.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: a(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: p.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: f(c),
          });
}
var ec = n(87075);
function ed(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function e_(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: m.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: m.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: m.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!ed(i)) continue;
                          n[e] = { type: m.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === ec.f.STRING) n[e.name] = { type: m.STRING, value: e.value };
                      else if (e.type === ec.f.NUMBER) n[e.name] = { type: m.NUMBER, value: e.value };
                      else if (e.type === ec.f.MEDIA) {
                          if (!ed(e.value)) continue;
                          n[e.name] = {
                              type: m.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
