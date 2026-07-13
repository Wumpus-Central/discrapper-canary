"use strict";
r.d(t, { B: () => a });
var n = r(26232);
function i(e) {
    return Intl.getCanonicalLocales(e)[0];
}
var o = r(183580);
function a(e, t, r, a, s, l) {
    let u, c;
    if ("lookup" === r.localeMatcher)
        u = (function (e, t, r) {
            let i = { locale: "" };
            for (let r of t) {
                let t = r.replace(n.KB, ""),
                    a = (0, o.q)(e, t);
                if (a) return (i.locale = a), r !== t && (i.extension = r.slice(t.length, r.length)), i;
            }
            return (i.locale = r()), i;
        })(Array.from(e), t, l);
    else {
        var d;
        let r, i, o, a, s;
        (d = Array.from(e)),
            (o = []),
            (a = t.reduce((e, t) => {
                let r = t.replace(n.KB, "");
                return o.push(r), (e[r] = t), e;
            }, {})),
            (s = (0, n.B4)(o, d)).matchedSupportedLocale &&
                s.matchedDesiredLocale &&
                ((r = s.matchedSupportedLocale),
                (i = a[s.matchedDesiredLocale].slice(s.matchedDesiredLocale.length) || void 0)),
            (u = r ? { locale: r, extension: i } : { locale: l() });
    }
    null == u && (u = { locale: l(), extension: "" });
    let f = u.locale,
        p = s[f],
        h = { locale: "en", dataLocale: f };
    c = u.extension
        ? (function (e) {
              let t;
              (0, n.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
                  (0, n.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
              let r = [],
                  i = [],
                  o = e.length,
                  a = 3;
              for (; a < o; ) {
                  let s,
                      l = e.indexOf("-", a);
                  s = -1 === l ? o - a : l - a;
                  let u = e.slice(a, a + s);
                  (0, n.V1)(s >= 2, "Expected a subtag to have at least 2 characters"),
                      void 0 === t && 2 != s
                          ? -1 === r.indexOf(u) && r.push(u)
                          : 2 === s
                            ? ((t = { key: u, value: "" }), void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                            : t?.value === ""
                              ? (t.value = u)
                              : ((0, n.V1)(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + u)),
                      (a += s + 1);
              }
              return { attributes: r, keywords: i };
          })(u.extension).keywords
        : [];
    let m = [];
    for (let e of a) {
        let t,
            i = p?.[e] ?? [];
        (0, n.V1)(Array.isArray(i), `keyLocaleData for ${e} must be an array`);
        let o = i[0];
        (0, n.V1)(void 0 === o || "string" == typeof o, "value must be a string or undefined");
        let a = c.find((t) => t.key === e);
        if (a) {
            let r = a.value;
            "" !== r
                ? i.indexOf(r) > -1 && (t = { key: e, value: (o = r) })
                : i.indexOf("true") > -1 && (t = { key: e, value: (o = "true") });
        }
        let s = r[e];
        (0, n.V1)(null == s || "string" == typeof s, "optionsValue must be a string or undefined"),
            "string" == typeof s &&
                "" ===
                    (s = (function (e, t) {
                        let r = t.toLowerCase();
                        return (0, n.V1)(void 0 !== e, "ukey must be defined"), r;
                    })(e.toLowerCase(), s)) &&
                (s = "true"),
            s !== o && i.indexOf(s) > -1 && ((o = s), (t = void 0)),
            t && m.push(t),
            (h[e] = o);
    }
    return (
        m.length > 0 &&
            (f = (function (e, t, r) {
                (0, n.V1)(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                let o = "-u";
                for (let e of t) o += `-${e}`;
                for (let e of r) {
                    let { key: t, value: r } = e;
                    (o += `-${t}`), "" !== r && (o += `-${r}`);
                }
                if ("-u" === o) return i(e);
                let a = e.indexOf("-x-");
                return i(-1 === a ? e + o : e.slice(0, a) + o + e.slice(a));
            })(f, [], m)),
        (h.locale = f),
        h
    );
}
