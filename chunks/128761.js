n(321073);
var l = n(381849),
    r = n(5377),
    i = n(191850),
    a = n(792996);
function s(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function u(e) {
    return (0, r.i$)(new Date(e), "LLL");
}
function o(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function c(e) {
    return a.intl.string("preview" === e ? i.default.Ebk40C : i.default.S65Rv3);
}
n.d(
    t,
    {},
    {
        FA: function (e) {
            return e.previewSha ?? e.entries[0]?.sha ?? null;
        },
        K1: c,
        KA: function (e, t) {
            return { shown: t ? e : e.slice(0, 3), collapsible: e.length > 3 };
        },
        Nc: function (e, t) {
            let n = u(t);
            return "stable" === e
                ? {
                      title: a.intl.string(i.default.G9wD92),
                      body: a.intl.formatToPlainString(i.default.vyxJO8, { time: n }),
                      confirmText: a.intl.string(i.default.kap49k),
                      critical: !0,
                  }
                : {
                      title: a.intl.string(i.default.rR8rgj),
                      body: a.intl.formatToPlainString(i.default.KfgzUO, { environment: c(e), time: n }),
                      confirmText: a.intl.string(i.default.XfeFw5),
                      critical: !1,
                  };
        },
        T4: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (function (e) {
                    let t = e
                        .replace(/^(Build|Turn):\s*/, "")
                        .replace(/\s+/g, " ")
                        .trim();
                    if ("" === t || "Deploy" === t) {
                        let e = a.intl.string(i.default.sFC5fT);
                        return { short: e, full: e };
                    }
                    if (/^Restore version [0-9a-f]{7,40}$/.test(t) || "Already at this version" === t) {
                        let e = a.intl.string(i.default.Vk8vB1);
                        return { short: e, full: e };
                    }
                    return { short: t.length > 90 ? `${t.slice(0, 89).trimEnd()}\u{2026}` : t, full: t };
                })(e);
            return t
                ? {
                      short: a.intl.formatToPlainString(i.default.Z4n6LX, { title: n.short }),
                      full: a.intl.formatToPlainString(i.default.Z4n6LX, { title: n.full }),
                  }
                : n;
        },
        YD: s,
        fd: function (e, t) {
            let n = s(e.createdAt),
                l = null != e.sourceSha ? t.get(e.sourceSha) : void 0;
            return {
                title: (function (e) {
                    switch (e.origin) {
                        case "auto_deploy":
                            if ("stable" === e.deployEnvironment) return a.intl.string(i.default["4TpI2y"]);
                            if ("preview" === e.deployEnvironment) return a.intl.string(i.default.NdyxPu);
                            return a.intl.string(i.default["4JCH6A"]);
                        case "undo":
                            return a.intl.string(i.default.VjJT5R);
                        default: {
                            let t = e.label.trim();
                            return "" === t || "Manual restore point" === t
                                ? a.intl.string(i.default.ObcM6b)
                                : a.intl.formatToPlainString(i.default["UKyQ+E"], { label: t });
                        }
                    }
                })(e),
                restoreToMs: e.expired ? null : n,
                detail: [
                    null != n ? u(n) : null,
                    null != l ? a.intl.formatToPlainString(i.default.V7YNvf, { title: l }) : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
            };
        },
        lG: function (e) {
            let t = s(e);
            return null == t
                ? { relative: null, absolute: null }
                : {
                      relative: (0, l.WR)({
                          seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                          getFormatter: l._e,
                      }),
                      absolute: (0, r.i$)(new Date(t), "LLL"),
                  };
        },
        nY: function (e) {
            return (0, r.i$)(new Date(e), "LT");
        },
        u4: function (e, t) {
            return t
                ? a.intl.string(i.default.h3WBgO)
                : a.intl.string("preview" === e ? i.default.cjJdqL : i.default.yLsAhA);
        },
        v9: function (e, t, n) {
            let l = [];
            for (let r of e) {
                let e = t(r),
                    s = null == e ? "unknown" : String(o(e)),
                    u = l[l.length - 1];
                null != u && u.key === s
                    ? u.items.push(r)
                    : l.push({
                          key: s,
                          label:
                              null == e
                                  ? null
                                  : (function (e, t) {
                                        let n = o(e),
                                            l = o(t);
                                        if (n === l) return a.intl.string(i.default.CADyoV);
                                        let r = new Date(l);
                                        if ((r.setDate(r.getDate() - 1), n === r.getTime()))
                                            return a.intl.string(i.default.mghe4b);
                                        let s = new Date(e).getFullYear() === new Date(t).getFullYear();
                                        return new Date(e).toLocaleDateString(a.intl.currentLocale, {
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
        },
        y0: function (e, t) {
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
        },
    },
);
