(n.d(t, {
    FA: () => g,
    K1: () => p,
    KA: () => m,
    Nc: () => v,
    T4: () => f,
    YD: () => a,
    fd: () => b,
    lG: () => u,
    nY: () => s,
    p9: () => o,
    u4: () => h,
    v9: () => c,
    y0: () => x,
}),
    n(321073));
var l = n(381849),
    i = n(248675),
    r = n(660183);
function a(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function u(e) {
    let t = a(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, l.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: l._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function s(e) {
    return new Date(e).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
function o(e) {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
}
function d(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function c(e, t, n) {
    let l = [];
    for (let a of e) {
        let e = t(a),
            u = null == e ? "unknown" : String(d(e)),
            s = l[l.length - 1];
        null != s && s.key === u
            ? s.items.push(a)
            : l.push({
                  key: u,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let n = d(e),
                                    l = d(t);
                                if (n === l) return r.intl.string(i.default.CADyoV);
                                let a = new Date(l);
                                if ((a.setDate(a.getDate() - 1), n === a.getTime()))
                                    return r.intl.string(i.default.mghe4b);
                                let u = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(void 0, {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: u ? void 0 : "numeric",
                                });
                            })(e, n),
                  items: [a],
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
              short: r.intl.formatToPlainString(i.default.Z4n6LX, { title: n.short }),
              full: r.intl.formatToPlainString(i.default.Z4n6LX, { title: n.full }),
          }
        : n;
}
function p(e) {
    return r.intl.string("preview" === e ? i.default.Ebk40C : i.default.S65Rv3);
}
function h(e, t) {
    return t ? r.intl.string(i.default.h3WBgO) : r.intl.string("preview" === e ? i.default.cjJdqL : i.default.yLsAhA);
}
function g(e) {
    return e.previewSha ?? e.entries[0]?.sha ?? null;
}
function m(e, t) {
    return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
}
function b(e, t) {
    let n = a(e.createdAt),
        l = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
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
        restoreToMs: e.expired ? null : n,
        detail: [null != n ? o(n) : null, null != l ? r.intl.formatToPlainString(i.default.V7YNvf, { title: l }) : null]
            .filter((e) => null != e)
            .join(" \xb7 "),
    };
}
function v(e, t) {
    let n = o(t);
    return "stable" === e
        ? {
              title: r.intl.string(i.default.G9wD92),
              body: r.intl.formatToPlainString(i.default.vyxJO8, { time: n }),
              confirmText: r.intl.string(i.default.kap49k),
              critical: !0,
          }
        : {
              title: r.intl.string(i.default.rR8rgj),
              body: r.intl.formatToPlainString(i.default.KfgzUO, { environment: p(e), time: n }),
              confirmText: r.intl.string(i.default.XfeFw5),
              critical: !1,
          };
}
function x(e, t) {
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
