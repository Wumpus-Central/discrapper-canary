"use strict";
r.d(t, { B: () => i });
var n = r(26232);
function a(e) {
    return Intl.getCanonicalLocales(e)[0];
}
var s = r(183580);
function i(e, t, r, i, o, l) {
    let u, c;
    if ("lookup" === r.localeMatcher)
        u = (function (e, t, r) {
            let a = { locale: "" };
            for (let r of t) {
                let t = r.replace(n.KB, ""),
                    i = (0, s.q)(e, t);
                if (i) return (a.locale = i), r !== t && (a.extension = r.slice(t.length, r.length)), a;
            }
            return (a.locale = r()), a;
        })(Array.from(e), t, l);
    else {
        var d;
        let r, a, s, i, o;
        (d = Array.from(e)),
            (s = []),
            (i = t.reduce((e, t) => {
                let r = t.replace(n.KB, "");
                return s.push(r), (e[r] = t), e;
            }, {})),
            (o = (0, n.B4)(s, d)).matchedSupportedLocale &&
                o.matchedDesiredLocale &&
                ((r = o.matchedSupportedLocale),
                (a = i[o.matchedDesiredLocale].slice(o.matchedDesiredLocale.length) || void 0)),
            (u = r ? { locale: r, extension: a } : { locale: l() });
    }
    null == u && (u = { locale: l(), extension: "" });
    let f = u.locale,
        p = o[f],
        h = { locale: "en", dataLocale: f };
    c = u.extension
        ? (function (e) {
              let t;
              (0, n.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
                  (0, n.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
              let r = [],
                  a = [],
                  s = e.length,
                  i = 3;
              for (; i < s; ) {
                  let o,
                      l = e.indexOf("-", i);
                  o = -1 === l ? s - i : l - i;
                  let u = e.slice(i, i + o);
                  (0, n.V1)(o >= 2, "Expected a subtag to have at least 2 characters"),
                      void 0 === t && 2 != o
                          ? -1 === r.indexOf(u) && r.push(u)
                          : 2 === o
                            ? ((t = { key: u, value: "" }), void 0 === a.find((e) => e.key === t?.key) && a.push(t))
                            : t?.value === ""
                              ? (t.value = u)
                              : ((0, n.V1)(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + u)),
                      (i += o + 1);
              }
              return { attributes: r, keywords: a };
          })(u.extension).keywords
        : [];
    let m = [];
    for (let e of i) {
        let t,
            a = p?.[e] ?? [];
        (0, n.V1)(Array.isArray(a), `keyLocaleData for ${e} must be an array`);
        let s = a[0];
        (0, n.V1)(void 0 === s || "string" == typeof s, "value must be a string or undefined");
        let i = c.find((t) => t.key === e);
        if (i) {
            let r = i.value;
            "" !== r
                ? a.indexOf(r) > -1 && (t = { key: e, value: (s = r) })
                : a.indexOf("true") > -1 && (t = { key: e, value: (s = "true") });
        }
        let o = r[e];
        (0, n.V1)(null == o || "string" == typeof o, "optionsValue must be a string or undefined"),
            "string" == typeof o &&
                "" ===
                    (o = (function (e, t) {
                        let r = t.toLowerCase();
                        return (0, n.V1)(void 0 !== e, "ukey must be defined"), r;
                    })(e.toLowerCase(), o)) &&
                (o = "true"),
            o !== s && a.indexOf(o) > -1 && ((s = o), (t = void 0)),
            t && m.push(t),
            (h[e] = s);
    }
    return (
        m.length > 0 &&
            (f = (function (e, t, r) {
                (0, n.V1)(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                let s = "-u";
                for (let e of t) s += `-${e}`;
                for (let e of r) {
                    let { key: t, value: r } = e;
                    (s += `-${t}`), "" !== r && (s += `-${r}`);
                }
                if ("-u" === s) return a(e);
                let i = e.indexOf("-x-");
                return a(-1 === i ? e + s : e.slice(0, i) + s + e.slice(i));
            })(f, [], m)),
        (h.locale = f),
        h
    );
}
