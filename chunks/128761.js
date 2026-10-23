(l.d(t, {
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
    l(321073));
var n = l(381849),
    a = l(58703),
    i = l(248675),
    r = l(105292);
function u(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function s(e) {
    let t = u(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, n.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: n._e }),
              absolute: (0, a.i$)(new Date(t), "LLL"),
          };
}
function o(e) {
    return (0, a.i$)(new Date(e), "LT");
}
function d(e) {
    return (0, a.i$)(new Date(e), "LLL");
}
function c(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function f(e, t, l) {
    let n = [];
    for (let a of e) {
        let e = t(a),
            u = null == e ? "unknown" : String(c(e)),
            s = n[n.length - 1];
        null != s && s.key === u
            ? s.items.push(a)
            : n.push({
                  key: u,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let l = c(e),
                                    n = c(t);
                                if (l === n) return r.intl.string(i.default.CADyoV);
                                let a = new Date(n);
                                if ((a.setDate(a.getDate() - 1), l === a.getTime()))
                                    return r.intl.string(i.default.mghe4b);
                                let u = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(r.intl.currentLocale, {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: u ? void 0 : "numeric",
                                });
                            })(e, l),
                  items: [a],
              });
    }
    return n;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = (function (e) {
            let t = e
                .replace(/^(Build|Turn):\s*/, "")
                .replace(/\s+/g, " ")
                .trim();
            if ("" === t || "Deploy" === t) {
                let e = r.intl.string(i.default.sFC5fT);
                return { short: e, full: e };
            }
            if (/^Restore version [0-9a-f]{7,40}$/.test(t) || "Already at this version" === t) {
                let e = r.intl.string(i.default.Vk8vB1);
                return { short: e, full: e };
            }
            return { short: t.length > 90 ? `${t.slice(0, 89).trimEnd()}\u{2026}` : t, full: t };
        })(e);
    return t
        ? {
              short: r.intl.formatToPlainString(i.default.Z4n6LX, { title: l.short }),
              full: r.intl.formatToPlainString(i.default.Z4n6LX, { title: l.full }),
          }
        : l;
}
function h(e) {
    return r.intl.string("preview" === e ? i.default.Ebk40C : i.default.S65Rv3);
}
function g(e, t) {
    return t ? r.intl.string(i.default.h3WBgO) : r.intl.string("preview" === e ? i.default.cjJdqL : i.default.yLsAhA);
}
function m(e) {
    return e.previewSha ?? e.entries[0]?.sha ?? null;
}
function v(e, t) {
    return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
}
function b(e, t) {
    let l = u(e.createdAt),
        n = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
    return {
        title: (function (e) {
            switch (e.origin) {
                case "auto_deploy":
                    if ("stable" === e.deployEnvironment) return r.intl.string(i.default["4TpI2y"]);
                    if ("preview" === e.deployEnvironment) return r.intl.string(i.default.NdyxPu);
                    return r.intl.string(i.default["4JCH6A"]);
                case "undo":
                    return r.intl.string(i.default.VjJT5R);
                default: {
                    let t = e.label.trim();
                    return "" === t || "Manual restore point" === t
                        ? r.intl.string(i.default.ObcM6b)
                        : r.intl.formatToPlainString(i.default["UKyQ+E"], { label: t });
                }
            }
        })(e),
        restoreToMs: e.expired ? null : l,
        detail: [null != l ? d(l) : null, null != n ? r.intl.formatToPlainString(i.default.V7YNvf, { title: n }) : null]
            .filter((e) => null != e)
            .join(" \xb7 "),
    };
}
function x(e, t) {
    let l = d(t);
    return "stable" === e
        ? {
              title: r.intl.string(i.default.G9wD92),
              body: r.intl.formatToPlainString(i.default.vyxJO8, { time: l }),
              confirmText: r.intl.string(i.default.kap49k),
              critical: !0,
          }
        : {
              title: r.intl.string(i.default.rR8rgj),
              body: r.intl.formatToPlainString(i.default.KfgzUO, { environment: h(e), time: l }),
              confirmText: r.intl.string(i.default.XfeFw5),
              critical: !1,
          };
}
function y(e, t) {
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
