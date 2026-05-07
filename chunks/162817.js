"use strict";
n.d(t, { VG: () => W, kH: () => H });
var i,
    r,
    s,
    a = n(627968),
    o = n(64700),
    l = n(334432),
    u = n(598748),
    c = n(331322),
    d = n(834730),
    _ = (((i = {}).TEXT = "text"), (i.NUMBER = "number"), (i.IMAGE = "image"), (i.DURATION = "duration"), i),
    f =
        (((r = {}).DATA = "data"),
        (r.CUSTOM_STRING = "custom_string"),
        (r.APPLICATION_ASSET = "application_asset"),
        (r.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        r),
    h = (((s = {}).STRING = "string"), (s.NUMBER = "number"), (s.MEDIA = "media"), s);
let p = { [_.TEXT]: ["string"], [_.NUMBER]: ["number"], [_.IMAGE]: ["media"], [_.DURATION]: ["number"] };
var E = n(503698),
    m = n.n(E),
    g = n(235686);
function A(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, a.jsx)(d.E, {
        variant: n ?? "text-md/normal",
        children: (0, a.jsx)("div", {
            className: m()(g.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, a.jsx)("div", { className: g.v }),
        }),
    });
}
var I = n(701054);
function T(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: s,
            lineClamp: o,
            imagePosition: l = "right",
        } = e,
        { resolveFieldValue: u } = V();
    if (null == t) return r ? (0, a.jsx)(A, { variant: n, className: s }) : null;
    let _ = u(t.fields.text, [h.STRING]),
        f = u(t.fields.label, [h.STRING]),
        p = u(t.fields.icon, [h.MEDIA]),
        E =
            null != p
                ? (0, a.jsx)("img", {
                      alt: "",
                      src: p.media.url,
                      width: p.media.width,
                      height: p.media.height,
                      className: I.K,
                  })
                : null;
    return (0, a.jsx)(c.B, {
        direction: "horizontal",
        gap: 0,
        className: s,
        children:
            null == _ && null == f
                ? (0, a.jsx)(A, { variant: n })
                : (0, a.jsxs)(d.E, {
                      variant: n,
                      color: i,
                      lineClamp: o,
                      children: [
                          null != E && "left" === l ? (0, a.jsxs)(a.Fragment, { children: [E, " "] }) : null,
                          null != f && "" !== f.value && `${f.value}: `,
                          null != _ && "" !== _.value ? _.value : "\u2013",
                          null != E && "right" === l ? (0, a.jsxs)(a.Fragment, { children: [" ", E] }) : null,
                      ],
                  }),
    });
}
var S = n(452354);
function N() {
    let { surfaceConfig: e } = V();
    return (0, a.jsx)("div", {
        className: S.z,
        children: (0, a.jsx)(T, {
            component: e.components.text,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
        }),
    });
}
var y = n(205914);
function C(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", { className: m()(y.z, t) });
}
function v(e) {
    let { media: t, ...n } = e;
    return (0, a.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var O = n(352478),
    R = n(34933);
function b(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = V(),
        r = i(n.components.hero_image?.fields.image, [h.MEDIA]);
    return (0, a.jsxs)("div", {
        className: m()(R.kL, { [R.PG]: t }),
        children: [
            (0, a.jsxs)("div", {
                className: R.Qs,
                children: [
                    (0, a.jsx)("div", { className: R.wx }),
                    (0, a.jsx)("div", { className: R.yF }),
                    (0, a.jsxs)("div", {
                        className: R.M1,
                        children: [
                            (0, a.jsx)("div", { className: R.dJ }),
                            (0, a.jsx)("div", { className: R.dJ }),
                            (0, a.jsx)("div", { className: R.dJ }),
                            (0, a.jsx)("div", { className: R.dJ }),
                            (0, a.jsx)("div", { className: R.dJ }),
                            (0, a.jsx)("div", { className: R.dJ }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: R.ZS,
                children:
                    null != r
                        ? (0, a.jsx)(v, { alt: "", media: r.media, className: m()(R.c8, O.g) })
                        : (0, a.jsx)(C, { className: R.pm }),
            }),
        ],
    });
}
var D = n(123292),
    L = n(267941);
function w() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n, onClick: i } = V(),
        r = t(e.components.hero_image?.fields.image, [h.MEDIA]);
    return (0, a.jsxs)("div", {
        className: L.zr,
        children: [
            (0, a.jsxs)("div", {
                className: L.rf,
                children: [
                    n,
                    (0, a.jsxs)("div", {
                        className: L.Qs,
                        children: [
                            (0, a.jsx)(T, {
                                component: e.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, a.jsx)(D.Q, {
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
                ? (0, a.jsx)("div", {
                      className: L.Xr,
                      children: (0, a.jsx)(v, { media: r.media, className: m()(L.c8, O.g) }),
                  })
                : (0, a.jsx)(C, { className: L.pm }),
        ],
    });
}
var M = n(702769);
function P(e) {
    let t,
        { component: n, required: i = !1 } = e,
        { resolveFieldValue: r, numberFormat: s, durationFormat: o } = V();
    if (null == n)
        return i
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, a.jsx)(A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let l = r(n.fields.value, [h.STRING, h.NUMBER]),
        u = r(n.fields.label, [h.STRING]),
        c = r(n.fields.icon, [h.MEDIA]);
    return (0, a.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == l) return null;
                if (l.type === h.STRING) return l.value;
                if (l.type === h.NUMBER) {
                    if (l.presentationType === _.NUMBER) return s.format(l.value);
                    if (l.presentationType === _.DURATION) {
                        var e;
                        let t, n;
                        return o.format(
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
                ? (0, a.jsx)(A, { variant: "text-sm/medium", width: "8ch" })
                : (0, a.jsxs)(d.E, {
                      variant: "text-sm/medium",
                      className: M.U,
                      children: [
                          t,
                          null != c &&
                              (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      " ",
                                      (0, a.jsx)("img", {
                                          alt: "",
                                          src: c.media.url,
                                          width: 18,
                                          height: 18,
                                          className: M.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != u
                ? (0, a.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: u.value })
                : (0, a.jsx)(A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var x = n(89832);
function U() {
    let { surfaceConfig: e } = V();
    return (0, a.jsxs)("div", {
        className: x.w,
        children: [
            (0, a.jsx)(P, { component: e.components.stat_1, required: !0 }),
            (0, a.jsx)(P, { component: e.components.stat_2, required: !0 }),
            (0, a.jsx)(P, { component: e.components.stat_3, required: !0 }),
            (0, a.jsx)(P, { component: e.components.stat_4, required: !0 }),
            (0, a.jsx)(P, { component: e.components.stat_5, required: !0 }),
            (0, a.jsx)(P, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var k = n(182787);
function G() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = V(),
        i = t(e.components.hero_image?.fields.image, [h.MEDIA]);
    return (0, a.jsxs)("div", {
        className: k.zr,
        children: [
            (0, a.jsxs)("div", {
                className: k.hQ,
                children: [
                    n,
                    (0, a.jsxs)("div", {
                        className: k.Qs,
                        children: [
                            (0, a.jsx)(T, {
                                component: e.components.title,
                                variant: "text-lg/medium",
                                required: !0,
                                className: k.DD,
                            }),
                            (0, a.jsx)(T, {
                                component: e.components.subtitle_1,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, a.jsx)(T, {
                                component: e.components.subtitle_2,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, a.jsx)(T, {
                                component: e.components.subtitle_3,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                        ],
                    }),
                ],
            }),
            null != i
                ? (0, a.jsx)("div", {
                      className: k.ZS,
                      children: (0, a.jsx)("img", { alt: "", src: i.media.url, className: O.g }),
                  })
                : (0, a.jsx)(C, { className: k.h2 }),
        ],
    });
}
let F = o.createContext(null);
function V() {
    let e = o.useContext(F);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let B = {
    [u.m.WIDGET_TOP]: { hero_overview_widget_top: () => (0, a.jsx)(G, {}) },
    [u.m.WIDGET_BOTTOM]: { stats_grid_3x2_widget_bottom: () => (0, a.jsx)(U, {}) },
    [u.m.MINI_PROFILE]: { hero_stat_preview_mini_profile: () => (0, a.jsx)(w, {}) },
    [u.m.ACTIVITY_ACCESSORY]: { text_with_icon_activity_accessory: () => (0, a.jsx)(N, {}) },
    [u.m.ADD_WIDGET_PREVIEW]: { hero_preview_add_widget_preview: (e) => (0, a.jsx)(b, { ...e }) },
};
function H(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: s, onClick: u, layoutProps: c } = e,
        d = o.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        h = o.useMemo(() => new l.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let E = B[t]?.[n.layout];
    return null == E
        ? null
        : (0, a.jsx)(F.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: r,
                  numberFormat: d,
                  durationFormat: h,
                  header: s,
                  onClick: u,
                  resolutionContext: i,
                  resolveFieldValue: function (e, t) {
                      return (function e(t, n, i) {
                          let { data: r, applicationAssets: s, getApplicationAssetUrl: a } = i;
                          if (null == t) return null;
                          if (t.value_type === f.DATA) {
                              let s = r[t.value],
                                  a = t.presentation_type;
                              return null != s && p[a]?.includes(s.type) && n.includes(s.type)
                                  ? "playtime_hours" === t.value && "number" === s.type && a === _.DURATION
                                      ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: a }
                                      : { ...s, presentationType: a }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === f.CUSTOM_STRING)
                              return t.presentation_type === _.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: _.TEXT }
                                  : null;
                          if (t.value_type === f.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = s.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: a(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: _.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: E(c),
          });
}
var j = n(87075);
function Y(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function W(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: h.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: h.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: h.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!Y(i)) continue;
                          n[e] = { type: h.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === j.f.STRING) n[e.name] = { type: h.STRING, value: e.value };
                      else if (e.type === j.f.NUMBER) n[e.name] = { type: h.NUMBER, value: e.value };
                      else if (e.type === j.f.MEDIA) {
                          if (!Y(e.value)) continue;
                          n[e.name] = {
                              type: h.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
