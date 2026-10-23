(n.d(t, {
    FA: () => m,
    K1: () => h,
    KA: () => v,
    Nc: () => x,
    T4: () => p,
    YD: () => u,
    fd: () => b,
    lG: () => s,
    nY: () => o,
    u4: () => g,
    v9: () => f,
    y0: () => y,
}),
    n(321073));
var l = n(381849),
    i = n(58703),
    a = n(248675),
    r = n(105292);
function u(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function s(e) {
    let t = u(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, l.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: l._e }),
              absolute: (0, i.i$)(new Date(t), "LLL"),
          };
}
function o(e) {
    return (0, i.i$)(new Date(e), "LT");
}
function d(e) {
    return (0, i.i$)(new Date(e), "LLL");
}
function c(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function f(e, t, n) {
    let l = [];
    for (let i of e) {
        let e = t(i),
            u = null == e ? "unknown" : String(c(e)),
            s = l[l.length - 1];
        null != s && s.key === u
            ? s.items.push(i)
            : l.push({
                  key: u,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let n = c(e),
                                    l = c(t);
                                if (n === l) return r.intl.string(a.default.CADyoV);
                                let i = new Date(l);
                                if ((i.setDate(i.getDate() - 1), n === i.getTime()))
                                    return r.intl.string(a.default.mghe4b);
                                let u = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(r.intl.currentLocale, {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: u ? void 0 : "numeric",
                                });
                            })(e, n),
                  items: [i],
              });
    }
    return l;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (function (e) {
            let t = e
                .replace(/^(Build|Turn):\s*/, "")
                .replace(/\s+/g, " ")
                .trim();
            if ("" === t || "Deploy" === t) {
                let e = r.intl.string(a.default.sFC5fT);
                return { short: e, full: e };
            }
            if (/^Restore version [0-9a-f]{7,40}$/.test(t) || "Already at this version" === t) {
                let e = r.intl.string(a.default.Vk8vB1);
                return { short: e, full: e };
            }
            return { short: t.length > 90 ? `${t.slice(0, 89).trimEnd()}\u{2026}` : t, full: t };
        })(e);
    return t
        ? {
              short: r.intl.formatToPlainString(a.default.Z4n6LX, { title: n.short }),
              full: r.intl.formatToPlainString(a.default.Z4n6LX, { title: n.full }),
          }
        : n;
}
function h(e) {
    return r.intl.string("preview" === e ? a.default.Ebk40C : a.default.S65Rv3);
}
function g(e, t) {
    return t ? r.intl.string(a.default.h3WBgO) : r.intl.string("preview" === e ? a.default.cjJdqL : a.default.yLsAhA);
}
function m(e) {
    return e.previewSha ?? e.entries[0]?.sha ?? null;
}
function v(e, t) {
    return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
}
function b(e, t) {
    let n = u(e.createdAt),
        l = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
    return {
        title: (function (e) {
            switch (e.origin) {
                case "auto_deploy":
                    if ("stable" === e.deployEnvironment) return r.intl.string(a.default["4TpI2y"]);
                    if ("preview" === e.deployEnvironment) return r.intl.string(a.default.NdyxPu);
                    return r.intl.string(a.default["4JCH6A"]);
                case "undo":
                    return r.intl.string(a.default.VjJT5R);
                default: {
                    let t = e.label.trim();
                    return "" === t || "Manual restore point" === t
                        ? r.intl.string(a.default.ObcM6b)
                        : r.intl.formatToPlainString(a.default["UKyQ+E"], { label: t });
                }
            }
        })(e),
        restoreToMs: e.expired ? null : n,
        detail: [null != n ? d(n) : null, null != l ? r.intl.formatToPlainString(a.default.V7YNvf, { title: l }) : null]
            .filter((e) => null != e)
            .join(" \xb7 "),
    };
}
function x(e, t) {
    let n = d(t);
    return "stable" === e
        ? {
              title: r.intl.string(a.default.G9wD92),
              body: r.intl.formatToPlainString(a.default.vyxJO8, { time: n }),
              confirmText: r.intl.string(a.default.kap49k),
              critical: !0,
          }
        : {
              title: r.intl.string(a.default.rR8rgj),
              body: r.intl.formatToPlainString(a.default.KfgzUO, { environment: h(e), time: n }),
              confirmText: r.intl.string(a.default.XfeFw5),
              critical: !1,
          };
}
function y(e, t) {
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
