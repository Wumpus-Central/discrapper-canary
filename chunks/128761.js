(l.d(t, {
    FA: () => g,
    K1: () => m,
    KA: () => x,
    Nc: () => v,
    T4: () => f,
    YD: () => r,
    fd: () => p,
    lG: () => s,
    nY: () => u,
    u4: () => h,
    v9: () => c,
    y0: () => j,
}),
    l(321073));
var n = l(381849),
    a = l(248675),
    i = l(375708);
function r(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function s(e) {
    let t = r(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, n.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: n._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function u(e) {
    return new Date(e).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
function o(e) {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
}
function d(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function c(e, t, l) {
    let n = [];
    for (let r of e) {
        let e = t(r),
            s = null == e ? "unknown" : String(d(e)),
            u = n[n.length - 1];
        null != u && u.key === s
            ? u.items.push(r)
            : n.push({
                  key: s,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let l = d(e),
                                    n = d(t);
                                if (l === n) return i.intl.string(a.default.CADyoV);
                                let r = new Date(n);
                                if ((r.setDate(r.getDate() - 1), l === r.getTime()))
                                    return i.intl.string(a.default.mghe4b);
                                let s = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(void 0, {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: s ? void 0 : "numeric",
                                });
                            })(e, l),
                  items: [r],
              });
    }
    return n;
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = (function (e) {
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
              short: i.intl.formatToPlainString(a.default.Z4n6LX, { title: l.short }),
              full: i.intl.formatToPlainString(a.default.Z4n6LX, { title: l.full }),
          }
        : l;
}
function m(e) {
    return i.intl.string("preview" === e ? a.default.Ebk40C : a.default.S65Rv3);
}
function h(e, t) {
    return t ? i.intl.string(a.default.h3WBgO) : i.intl.string("preview" === e ? a.default.cjJdqL : a.default.yLsAhA);
}
function g(e) {
    return e.previewSha ?? e.entries[0]?.sha ?? null;
}
function x(e, t) {
    return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
}
function p(e, t) {
    let l = r(e.createdAt),
        n = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
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
        restoreToMs: e.expired ? null : l,
        detail: [null != l ? o(l) : null, null != n ? i.intl.formatToPlainString(a.default.V7YNvf, { title: n }) : null]
            .filter((e) => null != e)
            .join(" \xb7 "),
    };
}
function v(e, t) {
    let l = o(t);
    return "stable" === e
        ? {
              title: i.intl.string(a.default.G9wD92),
              body: i.intl.formatToPlainString(a.default.vyxJO8, { time: l }),
              confirmText: i.intl.string(a.default.kap49k),
              critical: !0,
          }
        : {
              title: i.intl.string(a.default.rR8rgj),
              body: i.intl.formatToPlainString(a.default.KfgzUO, { environment: m(e), time: l }),
              confirmText: i.intl.string(a.default.XfeFw5),
              critical: !1,
          };
}
function j(e, t) {
    let l = null;
    for (let n of t)
        "auto_deploy" === n.origin &&
            "preview" === n.environment &&
            "preview" === n.deployEnvironment &&
            n.sourceSha === e.sha &&
            !n.expired &&
            (null == l || n.createdAt < l.createdAt) &&
            (l = n);
    return l;
}
