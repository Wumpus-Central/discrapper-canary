(n.d(t, {
    FA: () => g,
    K1: () => m,
    KA: () => p,
    Nc: () => v,
    T4: () => f,
    YD: () => i,
    fd: () => x,
    lG: () => s,
    nY: () => u,
    u4: () => h,
    v9: () => d,
    y0: () => j,
}),
    n(321073));
var l = n(381849),
    r = n(248675),
    a = n(660183);
function i(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function s(e) {
    let t = i(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, l.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: l._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function u(e) {
    return new Date(e).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
function o(e) {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
}
function c(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function d(e, t, n) {
    let l = [];
    for (let i of e) {
        let e = t(i),
            s = null == e ? "unknown" : String(c(e)),
            u = l[l.length - 1];
        null != u && u.key === s
            ? u.items.push(i)
            : l.push({
                  key: s,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let n = c(e),
                                    l = c(t);
                                if (n === l) return a.intl.string(r.default.CADyoV);
                                let i = new Date(l);
                                if ((i.setDate(i.getDate() - 1), n === i.getTime()))
                                    return a.intl.string(r.default.mghe4b);
                                let s = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(void 0, {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: s ? void 0 : "numeric",
                                });
                            })(e, n),
                  items: [i],
              });
    }
    return l;
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (function (e) {
            let t = e
                .replace(/^(Build|Turn):\s*/, "")
                .replace(/\s+/g, " ")
                .trim();
            if ("" === t || "Deploy" === t) {
                let e = a.intl.string(r.default.sFC5fT);
                return { short: e, full: e };
            }
            if (/^Restore version [0-9a-f]{7,40}$/.test(t) || "Already at this version" === t) {
                let e = a.intl.string(r.default.Vk8vB1);
                return { short: e, full: e };
            }
            return { short: t.length > 90 ? `${t.slice(0, 89).trimEnd()}\u{2026}` : t, full: t };
        })(e);
    return t
        ? {
              short: a.intl.formatToPlainString(r.default.Z4n6LX, { title: n.short }),
              full: a.intl.formatToPlainString(r.default.Z4n6LX, { title: n.full }),
          }
        : n;
}
function m(e) {
    return a.intl.string("preview" === e ? r.default.Ebk40C : r.default.S65Rv3);
}
function h(e, t) {
    return t ? a.intl.string(r.default.h3WBgO) : a.intl.string("preview" === e ? r.default.cjJdqL : r.default.yLsAhA);
}
function g(e) {
    return e.previewSha ?? e.entries[0]?.sha ?? null;
}
function p(e, t) {
    return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
}
function x(e, t) {
    let n = i(e.createdAt),
        l = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
    return {
        title: (function (e) {
            switch (e.origin) {
                case "auto_deploy":
                    if ("stable" === e.deployEnvironment) return a.intl.string(r.default["4TpI2y"]);
                    if ("preview" === e.deployEnvironment) return a.intl.string(r.default.NdyxPu);
                    return a.intl.string(r.default["4JCH6A"]);
                case "undo":
                    return a.intl.string(r.default.VjJT5R);
                default: {
                    let t = e.label.trim();
                    return "" === t || "Manual restore point" === t
                        ? a.intl.string(r.default.ObcM6b)
                        : a.intl.formatToPlainString(r.default["UKyQ+E"], { label: t });
                }
            }
        })(e),
        restoreToMs: e.expired ? null : n,
        detail: [null != n ? o(n) : null, null != l ? a.intl.formatToPlainString(r.default.V7YNvf, { title: l }) : null]
            .filter((e) => null != e)
            .join(" \xb7 "),
    };
}
function v(e, t) {
    let n = o(t);
    return "stable" === e
        ? {
              title: a.intl.string(r.default.G9wD92),
              body: a.intl.formatToPlainString(r.default.vyxJO8, { time: n }),
              confirmText: a.intl.string(r.default.kap49k),
              critical: !0,
          }
        : {
              title: a.intl.string(r.default.rR8rgj),
              body: a.intl.formatToPlainString(r.default.KfgzUO, { environment: m(e), time: n }),
              confirmText: a.intl.string(r.default.XfeFw5),
              critical: !1,
          };
}
function j(e, t) {
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
