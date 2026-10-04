(n.d(t, {
    BV: () => h,
    K1: () => f,
    T4: () => m,
    YD: () => r,
    lG: () => s,
    nY: () => o,
    p9: () => u,
    v9: () => c,
    y0: () => p,
}),
    n(321073));
var l = n(381849),
    a = n(248675),
    i = n(375708);
function r(e) {
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function s(e) {
    let t = r(e);
    return null == t
        ? { relative: null, absolute: null }
        : {
              relative: (0, l.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: l._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function o(e) {
    return new Date(e).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
function u(e) {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
}
function d(e) {
    let t = new Date(e);
    return (t.setHours(0, 0, 0, 0), t.getTime());
}
function c(e, t, n) {
    let l = [];
    for (let r of e) {
        let e = t(r),
            s = null == e ? "unknown" : String(d(e)),
            o = l[l.length - 1];
        null != o && o.key === s
            ? o.items.push(r)
            : l.push({
                  key: s,
                  label:
                      null == e
                          ? null
                          : (function (e, t) {
                                let n = d(e),
                                    l = d(t);
                                if (n === l) return i.intl.string(a.default.DlZ7NF);
                                let r = new Date(l);
                                if ((r.setDate(r.getDate() - 1), n === r.getTime()))
                                    return i.intl.string(a.default["55bvfa"]);
                                let s = new Date(e).getFullYear() === new Date(t).getFullYear();
                                return new Date(e).toLocaleDateString(void 0, {
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
                let e = i.intl.string(a.default.MGFTHh);
                return { short: e, full: e };
            }
            if (/^Restore version [0-9a-f]{7,40}$/.test(t) || "Already at this version" === t) {
                let e = i.intl.string(a.default.zel5dv);
                return { short: e, full: e };
            }
            return { short: t.length > 90 ? `${t.slice(0, 89).trimEnd()}\u{2026}` : t, full: t };
        })(e);
    return t
        ? {
              short: i.intl.formatToPlainString(a.default["Hz+Leq"], { title: n.short }),
              full: i.intl.formatToPlainString(a.default["Hz+Leq"], { title: n.full }),
          }
        : n;
}
function f(e) {
    return i.intl.string("preview" === e ? a.default.CsjtPn : a.default["2tmkJC"]);
}
function h(e) {
    switch (e.origin) {
        case "auto_deploy":
            if ("stable" === e.deployEnvironment) return i.intl.string(a.default.CiAY6f);
            if ("preview" === e.deployEnvironment) return i.intl.string(a.default.XZ3EKs);
            return i.intl.string(a.default.b245uO);
        case "undo":
            return i.intl.string(a.default.TMiLvb);
        default: {
            let t = e.label.trim();
            return "" === t || "Manual restore point" === t
                ? i.intl.string(a.default.p9RSZ2)
                : i.intl.formatToPlainString(a.default.wIHwsk, { label: t });
        }
    }
}
function p(e, t) {
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
