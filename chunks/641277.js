"use strict";
n.d(t, { B: () => o });
var r = n(26232);
function i(e) {
    return Intl.getCanonicalLocales(e)[0];
}
var a = n(183580);
function o(e, t, n, o, u, s) {
    let l, d;
    if ("lookup" === n.localeMatcher)
        l = (function (e, t, n) {
            let i = { locale: "" };
            for (let n of t) {
                let t = n.replace(r.KB, ""),
                    o = (0, a.q)(e, t);
                if (o) return (i.locale = o), n !== t && (i.extension = n.slice(t.length, n.length)), i;
            }
            return (i.locale = n()), i;
        })(Array.from(e), t, s);
    else {
        var c;
        let n, i, a, o, u;
        (c = Array.from(e)),
            (a = []),
            (o = t.reduce((e, t) => {
                let n = t.replace(r.KB, "");
                return a.push(n), (e[n] = t), e;
            }, {})),
            (u = (0, r.B4)(a, c)).matchedSupportedLocale &&
                u.matchedDesiredLocale &&
                ((n = u.matchedSupportedLocale),
                (i = o[u.matchedDesiredLocale].slice(u.matchedDesiredLocale.length) || void 0)),
            (l = n ? { locale: n, extension: i } : { locale: s() });
    }
    null == l && (l = { locale: s(), extension: "" });
    let f = l.locale,
        h = u[f],
        p = { locale: "en", dataLocale: f };
    d = l.extension
        ? (function (e) {
              let t;
              (0, r.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
                  (0, r.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
              let n = [],
                  i = [],
                  a = e.length,
                  o = 3;
              for (; o < a; ) {
                  let u,
                      s = e.indexOf("-", o);
                  u = -1 === s ? a - o : s - o;
                  let l = e.slice(o, o + u);
                  (0, r.V1)(u >= 2, "Expected a subtag to have at least 2 characters"),
                      void 0 === t && 2 != u
                          ? -1 === n.indexOf(l) && n.push(l)
                          : 2 === u
                            ? ((t = { key: l, value: "" }), void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                            : t?.value === ""
                              ? (t.value = l)
                              : ((0, r.V1)(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + l)),
                      (o += u + 1);
              }
              return { attributes: n, keywords: i };
          })(l.extension).keywords
        : [];
    let m = [];
    for (let e of o) {
        let t,
            i = h?.[e] ?? [];
        (0, r.V1)(Array.isArray(i), `keyLocaleData for ${e} must be an array`);
        let a = i[0];
        (0, r.V1)(void 0 === a || "string" == typeof a, "value must be a string or undefined");
        let o = d.find((t) => t.key === e);
        if (o) {
            let n = o.value;
            "" !== n
                ? i.indexOf(n) > -1 && (t = { key: e, value: (a = n) })
                : i.indexOf("true") > -1 && (t = { key: e, value: (a = "true") });
        }
        let u = n[e];
        (0, r.V1)(null == u || "string" == typeof u, "optionsValue must be a string or undefined"),
            "string" == typeof u &&
                "" ===
                    (u = (function (e, t) {
                        let n = t.toLowerCase();
                        return (0, r.V1)(void 0 !== e, "ukey must be defined"), n;
                    })(e.toLowerCase(), u)) &&
                (u = "true"),
            u !== a && i.indexOf(u) > -1 && ((a = u), (t = void 0)),
            t && m.push(t),
            (p[e] = a);
    }
    return (
        m.length > 0 &&
            (f = (function (e, t, n) {
                (0, r.V1)(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                let a = "-u";
                for (let e of t) a += `-${e}`;
                for (let e of n) {
                    let { key: t, value: n } = e;
                    (a += `-${t}`), "" !== n && (a += `-${n}`);
                }
                if ("-u" === a) return i(e);
                let o = e.indexOf("-x-");
                return i(-1 === o ? e + a : e.slice(0, o) + a + e.slice(o));
            })(f, [], m)),
        (p.locale = f),
        p
    );
}
