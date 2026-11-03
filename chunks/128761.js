(n.d(t, {
    FA: () => p,
    K1: () => h,
    KA: () => x,
    Nc: () => j,
    T4: () => m,
    YD: () => s,
    fd: () => v,
    lG: () => u,
    nY: () => o,
    u4: () => g,
    v9: () => f,
    y0: () => b,
}),
    n(321073));
var l = n(381849),
    r = n(58703),
    a = n(809526),
    i = n(105292);
function s(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function u(e) {
    let t = s(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, l.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: l._e }),
              absolute: (0, r.i$)(new Date(t), "LLL"),
          };
}
function o(e) {
    return (0, r.i$)(new Date(e), "LT");
}
function c(e) {
    return (0, r.i$)(new Date(e), "LLL");
}
function d(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function f(e, t, n) {
    let l = [];
    for (let r of e) {
        let e = t(r),
            s = null == e ? "unknown" : String(d(e)),
            u = l[l.length - 1];
        null != u && u.key === s
            ? u.items.push(r)
            : l.push({
                  key: s,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let n = d(e),
                                    l = d(t);
                                if (n === l) return i.intl.string(a.default.CADyoV);
                                let r = new Date(l);
                                if ((r.setDate(r.getDate() - 1), n === r.getTime()))
                                    return i.intl.string(a.default.mghe4b);
                                let s = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(i.intl.currentLocale, {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: s ? void 0 : "numeric",
                                });
                            })(e, n),
                  items: [r],
              });
    }
    return l;
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (function (e) {
            let t = e
                .replace(/^(Build|Turn):\s*/, "")
                .replace(/\s+/g, " ")
                .trim();
            if ("" === t || "Deploy" === t) {
                let e = i.intl.string(a.default.sFC5fT);
                return { short: e, full: e };
            }
            if (/^Restore version [0-9a-f]{7,40}$/.test(t) || "Already at this version" === t) {
                let e = i.intl.string(a.default.Vk8vB1);
                return { short: e, full: e };
            }
            return { short: t.length > 90 ? `${t.slice(0, 89).trimEnd()}\u{2026}` : t, full: t };
        })(e);
    return t
        ? {
              short: i.intl.formatToPlainString(a.default.Z4n6LX, { title: n.short }),
              full: i.intl.formatToPlainString(a.default.Z4n6LX, { title: n.full }),
          }
        : n;
}
function h(e) {
    return i.intl.string("preview" === e ? a.default.Ebk40C : a.default.S65Rv3);
}
function g(e, t) {
    return t ? i.intl.string(a.default.h3WBgO) : i.intl.string("preview" === e ? a.default.cjJdqL : a.default.yLsAhA);
}
function p(e) {
    return e.previewSha ?? e.entries[0]?.sha ?? null;
}
function x(e, t) {
    return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
}
function v(e, t) {
    let n = s(e.createdAt),
        l = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
    return {
        title: (function (e) {
            switch (e.origin) {
                case "auto_deploy":
                    if ("stable" === e.deployEnvironment) return i.intl.string(a.default["4TpI2y"]);
                    if ("preview" === e.deployEnvironment) return i.intl.string(a.default.NdyxPu);
                    return i.intl.string(a.default["4JCH6A"]);
                case "undo":
                    return i.intl.string(a.default.VjJT5R);
                default: {
                    let t = e.label.trim();
                    return "" === t || "Manual restore point" === t
                        ? i.intl.string(a.default.ObcM6b)
                        : i.intl.formatToPlainString(a.default["UKyQ+E"], { label: t });
                }
            }
        })(e),
        restoreToMs: e.expired ? null : n,
        detail: [null != n ? c(n) : null, null != l ? i.intl.formatToPlainString(a.default.V7YNvf, { title: l }) : null]
            .filter((e) => null != e)
            .join(" \xb7 "),
    };
}
function j(e, t) {
    let n = c(t);
    return "stable" === e
        ? {
              title: i.intl.string(a.default.G9wD92),
              body: i.intl.formatToPlainString(a.default.vyxJO8, { time: n }),
              confirmText: i.intl.string(a.default.kap49k),
              critical: !0,
          }
        : {
              title: i.intl.string(a.default.rR8rgj),
              body: i.intl.formatToPlainString(a.default.KfgzUO, { environment: h(e), time: n }),
              confirmText: i.intl.string(a.default.XfeFw5),
              critical: !1,
          };
}
function b(e, t) {
    let n = null;
    for (let l of t)
        "auto_deploy" === l.origin &&
            "preview" === l.environment &&
            "preview" === l.deployEnvironment &&
            l.sourceSha === e.sha &&
            !l.expired &&
            (null == n || l.createdAt < n.createdAt) &&
            (n = l);
    return n;
}
