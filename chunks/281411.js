"use strict";
n.d(t, { VG: () => eT, kH: () => eu });
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
        i);
function E(e) {
    if (0 === e) return 0;
    let t = Math.floor(Math.log10(e));
    for (; 10 ** t > e; ) t--;
    for (; 10 ** (t + 1) <= e; ) t++;
    return t;
}
var A = n(503698),
    h = n.n(A),
    I = n(834730),
    f = (((r = {}).TEXT = "text"), (r.NUMBER = "number"), (r.IMAGE = "image"), (r.DURATION = "duration"), r),
    p =
        (((a = {}).DATA = "data"),
        (a.CUSTOM_STRING = "custom_string"),
        (a.APPLICATION_ASSET = "application_asset"),
        (a.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        a),
    T = (((s = {}).STRING = "string"), (s.NUMBER = "number"), (s.MEDIA = "media"), s);
let m = { [f.TEXT]: ["string"], [f.NUMBER]: ["number"], [f.IMAGE]: ["media"], [f.DURATION]: ["number"] };
var g = n(66979);
function S(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
        ? (0, o.jsx)(I.E, {
              variant: t,
              children: (0, o.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: g.K,
                  alt: i ?? "",
              }),
          })
        : null;
}
var N = n(235686);
function C(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, o.jsx)(I.E, {
        variant: n ?? "text-md/normal",
        children: (0, o.jsx)("div", {
            className: h()(N.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, o.jsx)("div", { className: N.v }),
        }),
    });
}
var R = n(701054);
function O(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: a,
            lineClamp: s,
            imagePosition: l = "right",
            hideLabel: d = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: u } = ed();
    if (null == t) return r ? (0, o.jsx)(C, { variant: n, className: a }) : null;
    let _ = c(t.fields.text, [T.STRING, T.NUMBER]),
        E = d ? null : c(t.fields.label, [T.STRING, T.NUMBER]),
        A = c(t.fields.icon, [T.MEDIA]);
    if (null == _ && null == E) return (0, o.jsx)(C, { variant: n, className: a });
    let f = null != A ? (0, o.jsx)(S, { media: A.media, variant: n }) : null;
    return (0, o.jsxs)("div", {
        className: h()(R.k, a),
        children: [
            null != f && "left" === l ? f : null,
            (0, o.jsxs)(I.E, {
                variant: n,
                color: i,
                lineClamp: s,
                children: [
                    null == E || "" === E.value
                        ? null
                        : "number" == typeof E.value
                          ? `${u.format(E.value)}: `
                          : `${E.value}: `,
                    null == _ || "" === _.value ? "\u2013" : "number" == typeof _.value ? u.format(_.value) : _.value,
                ],
            }),
            null != f && "right" === l ? f : null,
        ],
    });
}
var L = n(157841);
function D(e) {
    let { variant: t = "default", textColor: n } = e,
        { surfaceConfig: i } = ed(),
        r = "badge" === t;
    return (0, o.jsx)("div", {
        className: L.z,
        children: (0, o.jsx)(O, {
            component: i.components.stat,
            className: L.Q,
            variant: r ? "text-xs/normal" : "text-xs/semibold",
            color: n,
            hideLabel: r,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var y = n(205914);
function v(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", { className: h()(y.z, t) });
}
var b = n(603427);
function M(e) {
    let { small: t = !1, image: n } = e;
    return (0, o.jsxs)("div", {
        className: h()(b.kL, { [b.PG]: t }),
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
var P = n(112143);
function U(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = ed(),
        r = i(n.components.contained_image?.fields.image, [T.MEDIA]);
    return (0, o.jsx)(M, {
        small: t,
        image: (0, o.jsx)("div", {
            className: P.ZS,
            children:
                null != r
                    ? (0, o.jsx)("img", { alt: "", src: r.media.url, className: P.Sl })
                    : (0, o.jsx)(v, { className: P.h2 }),
        }),
    });
}
function w(e) {
    let { media: t, ...n } = e;
    return (0, o.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var G = n(352478),
    x = n(983512);
function k(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = ed(),
        i = n(t.components.hero_image?.fields.image, [T.MEDIA]);
    return (0, o.jsx)(M, {
        ...e,
        image: (0, o.jsx)("div", {
            className: x.ZS,
            children:
                null != i
                    ? (0, o.jsx)(w, { alt: "", media: i.media, className: h()(x.c8, G.g) })
                    : (0, o.jsx)(v, { className: x.pm }),
        }),
    });
}
var F = n(123292),
    V = n(425376);
function B(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: i, onClick: r } = ed();
    return (0, o.jsxs)("div", {
        className: V.zr,
        children: [
            (0, o.jsxs)("div", {
                className: V.rf,
                children: [
                    n,
                    (0, o.jsxs)("div", {
                        className: V.Qs,
                        children: [
                            (0, o.jsx)(O, {
                                component: i.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, o.jsx)(F.Q, {
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
var H = n(338388);
function j() {
    let { surfaceConfig: e, resolveFieldValue: t } = ed(),
        n = t(e.components.contained_image?.fields.image, [T.MEDIA]);
    return (0, o.jsx)(B, {
        image: (0, o.jsx)("div", {
            className: H.ZS,
            children:
                null != n
                    ? (0, o.jsx)("img", { alt: "", src: n.media.url, className: H.Sl })
                    : (0, o.jsx)(v, { className: H.h2 }),
        }),
    });
}
var W = n(874921);
function Y() {
    let { surfaceConfig: e, resolveFieldValue: t } = ed(),
        n = t(e.components.hero_image?.fields.image, [T.MEDIA]);
    return (0, o.jsx)(B, {
        image:
            null != n
                ? (0, o.jsx)("div", {
                      className: W.Xr,
                      children: (0, o.jsx)(w, { media: n.media, className: h()(W.c8, G.g) }),
                  })
                : (0, o.jsx)(v, { className: W.pm }),
    });
}
var K = n(174529);
function $(e) {
    let { resolveFieldValue: t } = ed(),
        n = t(e.componentConfig?.fields.image, [T.MEDIA]),
        i = t(e.componentConfig?.fields.name, [T.STRING]),
        r = t(e.componentConfig?.fields.description, [T.STRING]);
    return (0, o.jsxs)("div", {
        className: K.E4,
        children: [
            null != n
                ? (0, o.jsx)("img", { src: n.media.url, className: K.bA, alt: "" })
                : (0, o.jsx)(v, { className: K.ET }),
            (0, o.jsxs)("div", {
                className: K.Vx,
                children: [
                    null != i
                        ? (0, o.jsx)(I.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, o.jsx)(C, { variant: "text-sm/medium", width: "6ch" }),
                    null != r
                        ? (0, o.jsx)(I.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: r.value,
                          })
                        : (0, o.jsx)(C, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function z() {
    let { surfaceConfig: e } = ed();
    return (0, o.jsxs)("div", {
        className: K.zr,
        children: [
            (0, o.jsx)($, { componentConfig: e.components.item_1 }),
            (0, o.jsx)($, { componentConfig: e.components.item_2 }),
            (0, o.jsx)($, { componentConfig: e.components.item_3 }),
            (0, o.jsx)($, { componentConfig: e.components.item_4 }),
        ],
    });
}
var q = n(321498);
function Z(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function X() {
    let { surfaceConfig: e, resolveFieldValue: t } = ed(),
        n = d.useId(),
        i = t(e.components.objective?.fields.image, [T.MEDIA]),
        r = t(e.components.objective?.fields.name, [T.STRING]),
        a = t(e.components.objective?.fields.description, [T.STRING]),
        s = t(e.components.progress?.fields.current, [T.NUMBER]),
        l = t(e.components.progress?.fields.max, [T.NUMBER]),
        c = null == s ? 0 : null == l ? Z(s.value) : 0 === l.value ? 0 : Z(s.value / l.value);
    return (0, o.jsxs)("div", {
        className: q.zr,
        children: [
            null != i
                ? (0, o.jsx)("img", { src: i.media.url, className: q.Sl, alt: "" })
                : (0, o.jsx)(v, { className: q.Sl }),
            (0, o.jsxs)("div", {
                className: q.Qs,
                children: [
                    (0, o.jsx)("div", {
                        className: q.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": s?.value ?? 0,
                        "aria-valuemax": l?.value ?? 1,
                        "aria-valuetext": null != l && null != s ? `${s.value} of ${l.value}` : void 0,
                        children: (0, o.jsx)("div", { className: q.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, o.jsxs)("div", {
                        className: q.P_,
                        children: [
                            (0, o.jsxs)("div", {
                                className: q.n_,
                                children: [
                                    null != r
                                        ? (0, o.jsx)(I.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, o.jsx)(C, { variant: "heading-sm/medium" }),
                                    null != a
                                        ? (0, o.jsx)(I.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: a.value,
                                          })
                                        : (0, o.jsx)(C, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != s
                                ? (0, o.jsx)(I.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: q.l_,
                                      children: null != l ? `${s.value}/${l.value}` : `${Z(s.value)}%`,
                                  })
                                : (0, o.jsx)(C, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Q = n(702769);
function J(e) {
    let t,
        { component: n, required: i = !1 } = e,
        { resolveFieldValue: r, numberFormat: a, durationFormat: s } = ed();
    if (null == n)
        return i
            ? (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(C, { variant: "text-sm/medium", width: "8ch" }),
                      (0, o.jsx)(C, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let l = r(n.fields.value, [T.STRING, T.NUMBER]),
        d = r(n.fields.label, [T.STRING]),
        c = r(n.fields.icon, [T.MEDIA]);
    return (0, o.jsxs)("div", {
        className: Q.k,
        children: [
            null ==
            (t = (() => {
                if (null == l) return null;
                if (l.type === T.STRING) return l.value;
                if (l.type === T.NUMBER) {
                    if (l.presentationType === f.NUMBER) return a.format(l.value);
                    if (l.presentationType === f.DURATION) {
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
                ? (0, o.jsx)(C, { variant: "text-sm/medium", width: "8ch" })
                : (0, o.jsxs)("div", {
                      className: Q.U,
                      children: [
                          (0, o.jsx)(I.E, { variant: "text-sm/medium", lineClamp: 2, children: t }),
                          null != c && (0, o.jsx)(S, { variant: "text-sm/medium", media: c.media }),
                      ],
                  }),
            null != d
                ? (0, o.jsx)(I.E, { variant: "text-xs/normal", color: "text-subtle", lineClamp: 2, children: d.value })
                : (0, o.jsx)(C, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var ee = n(578158);
function et() {
    let { surfaceConfig: e } = ed();
    return (0, o.jsxs)("div", {
        className: ee.w,
        children: [
            (0, o.jsx)(J, { component: e.components.stat_1, required: !0 }),
            (0, o.jsx)(J, { component: e.components.stat_2, required: !0 }),
            (0, o.jsx)(J, { component: e.components.stat_3, required: !0 }),
            (0, o.jsx)(J, { component: e.components.stat_4, required: !0 }),
            (0, o.jsx)(J, { component: e.components.stat_5, required: !0 }),
            (0, o.jsx)(J, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var en = n(790352);
function ei() {
    let { surfaceConfig: e } = ed();
    return (0, o.jsxs)("div", {
        className: en.Q,
        children: [
            (0, o.jsx)(O, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: en.D,
            }),
            (0, o.jsx)(O, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(O, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, o.jsx)(O, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var er = n(834312);
function ea() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = ed(),
        i = t(e.components.contained_image?.fields.image, [T.MEDIA]);
    return (0, o.jsxs)("div", {
        className: er.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: er.wx, children: n }),
            (0, o.jsx)(ei, {}),
            null != i
                ? (0, o.jsx)("img", { alt: "", src: i.media.url, className: er.Sl })
                : (0, o.jsx)(v, { className: er.h2 }),
        ],
    });
}
var es = n(321113);
function el() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = ed(),
        i = t(e.components.hero_image?.fields.image, [T.MEDIA]);
    return (0, o.jsxs)("div", {
        className: es.zr,
        children: [
            null != n && (0, o.jsx)("div", { className: es.wx, children: n }),
            (0, o.jsx)("div", { className: es.hQ, children: (0, o.jsx)(ei, {}) }),
            null != i
                ? (0, o.jsx)("div", {
                      className: es._j,
                      children: (0, o.jsx)("div", {
                          className: es.PX,
                          children: (0, o.jsx)("img", { alt: "", src: i.media.url, className: h()(es.Sl, G.g) }),
                      }),
                  })
                : (0, o.jsx)(v, { className: es.h2 }),
        ],
    });
}
let eo = d.createContext(null);
function ed() {
    let e = d.useContext(eo);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let ec = {
    [u.m.WIDGET_TOP]: {
        [_.WIDGET_TOP_HERO]: () => (0, o.jsx)(el, {}),
        [_.WIDGET_TOP_CONTAINED]: () => (0, o.jsx)(ea, {}),
    },
    [u.m.WIDGET_BOTTOM]: {
        [_.WIDGET_BOTTOM_STATS]: () => (0, o.jsx)(et, {}),
        [_.WIDGET_BOTTOM_PROGRESS]: () => (0, o.jsx)(X, {}),
        [_.WIDGET_BOTTOM_COLLECTION]: () => (0, o.jsx)(z, {}),
    },
    [u.m.MINI_PROFILE]: {
        [_.MINI_PROFILE_HERO_STAT]: () => (0, o.jsx)(Y, {}),
        [_.MINI_PROFILE_CONTAINED_STAT]: () => (0, o.jsx)(j, {}),
    },
    [u.m.ACTIVITY_ACCESSORY]: { [_.ACTIVITY_ACCESSORY_STAT]: (e) => (0, o.jsx)(D, { ...e }) },
    [u.m.ADD_WIDGET_PREVIEW]: {
        [_.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, o.jsx)(k, { ...e }),
        [_.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, o.jsx)(U, { ...e }),
    },
};
function eu(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: a, onClick: s, layoutProps: l } = e,
        u = d.useMemo(() => {
            let e, t, n;
            return (
                (e = (function (e) {
                    let t = new Intl.NumberFormat(e, { useGrouping: !1 }),
                        n = new Map();
                    for (let e = 0; e <= 9; e++) n.set(t.format(e), String(e));
                    return n;
                })(r)),
                (t = new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short" })),
                (n = new Map()),
                {
                    format(i) {
                        var r;
                        let a, s;
                        if (0 === i || !Number.isFinite(i)) return t.format(i);
                        let l = E(Math.abs(i)),
                            o =
                                l >= 0
                                    ? (function (i) {
                                          let r = n.get(i);
                                          if (void 0 === r) {
                                              let a = 10 ** i,
                                                  s = (function (e, t) {
                                                      let n = "";
                                                      for (let i of e)
                                                          "integer" === i.type || "fraction" === i.type
                                                              ? (n += (function (e, t) {
                                                                    let n = "";
                                                                    for (let i of e) n += t.get(i) ?? i;
                                                                    return n;
                                                                })(i.value, t))
                                                              : "decimal" === i.type && (n += ".");
                                                      return Number(n);
                                                  })(t.formatToParts(a), e);
                                              (r = s > 0 ? a / s : 1), n.set(i, r);
                                          }
                                          return r;
                                      })(l)
                                    : 1,
                            d =
                                ((a = Math.max(Math.min(E(Math.abs((r = i / o))) - 1, 0), -15)),
                                (Math.floor(r * (s = 10 ** -a)) / s) * o);
                        return t.format(Number.isFinite(d) ? d : i);
                    },
                }
            );
        }, [r]),
        _ = d.useMemo(() => new c.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let A = ec[t]?.[n.layout];
    return null == A
        ? null
        : (0, o.jsx)(eo.Provider, {
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
                          if (t.value_type === p.DATA) {
                              let a = r[t.value],
                                  s = t.presentation_type;
                              return null != a && m[s]?.includes(a.type) && n.includes(a.type)
                                  ? "playtime_hours" === t.value && "number" === a.type && s === f.DURATION
                                      ? { type: a.type, value: Math.floor(60 * a.value * 6e4), presentationType: s }
                                      : { ...a, presentationType: s }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === p.CUSTOM_STRING)
                              return t.presentation_type === f.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: f.TEXT }
                                  : null;
                          if (t.value_type === p.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = a.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: s(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: f.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: A(l),
          });
}
var e_ = n(832696);
let eE = e_.Ikc({ value_type: e_.k5n(p), presentation_type: e_.k5n(f), value: e_.YjP() }),
    eA = e_.Ikc({ value_type: e_.k5n(p), presentation_type: e_.k5n(f), value: e_.YjP(), fallback: eE.nullish() }),
    eh = e_.Ikc({ fields: e_.jgl(e_.YjP(), eA) }),
    eI = e_.Ikc({ layout: e_.YjP(), components: e_.jgl(e_.YjP(), eh) });
e_.jgl(e_.k5n(u.m), eI);
var ef = (((l = {})[(l.STRING = 1)] = "STRING"), (l[(l.NUMBER = 2)] = "NUMBER"), (l[(l.MEDIA = 3)] = "MEDIA"), l);
function ep(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function eT(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: T.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: T.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: T.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!ep(i)) continue;
                          n[e] = { type: T.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === ef.STRING) n[e.name] = { type: T.STRING, value: e.value };
                      else if (e.type === ef.NUMBER) n[e.name] = { type: T.NUMBER, value: e.value };
                      else if (e.type === ef.MEDIA) {
                          if (!ep(e.value)) continue;
                          n[e.name] = {
                              type: T.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
