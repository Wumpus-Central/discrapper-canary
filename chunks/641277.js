"use strict";
n.d(t, { B: () => u });
var r = n(26232);
function i(e) {
    return Intl.getCanonicalLocales(e)[0];
}
var a = n(183580);
function u(e, t, n, u, o, s) {
    let l, d;
    if ("lookup" === n.localeMatcher)
        l = (function (e, t, n) {
            let i = { locale: "" };
            for (let n of t) {
                let t = n.replace(r.KB, ""),
                    u = (0, a.q)(e, t);
                if (u) return (i.locale = u), n !== t && (i.extension = n.slice(t.length, n.length)), i;
            }
            return (i.locale = n()), i;
        })(Array.from(e), t, s);
    else {
        var c;
        let n, i, a, u, o;
        (c = Array.from(e)),
            (a = []),
            (u = t.reduce((e, t) => {
                let n = t.replace(r.KB, "");
                return a.push(n), (e[n] = t), e;
            }, {})),
            (o = (0, r.B4)(a, c)).matchedSupportedLocale &&
                o.matchedDesiredLocale &&
                ((n = o.matchedSupportedLocale),
                (i = u[o.matchedDesiredLocale].slice(o.matchedDesiredLocale.length) || void 0)),
            (l = n ? { locale: n, extension: i } : { locale: s() });
    }
    null == l && (l = { locale: s(), extension: "" });
    let f = l.locale,
        h = o[f],
        p = { locale: "en", dataLocale: f };
    d = l.extension
        ? (function (e) {
              let t;
              (0, r.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
                  (0, r.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
              let n = [],
                  i = [],
                  a = e.length,
                  u = 3;
              for (; u < a; ) {
                  let o,
                      s = e.indexOf("-", u);
                  o = -1 === s ? a - u : s - u;
                  let l = e.slice(u, u + o);
                  (0, r.V1)(o >= 2, "Expected a subtag to have at least 2 characters"),
                      void 0 === t && 2 != o
                          ? -1 === n.indexOf(l) && n.push(l)
                          : 2 === o
                            ? ((t = { key: l, value: "" }), void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                            : t?.value === ""
                              ? (t.value = l)
                              : ((0, r.V1)(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + l)),
                      (u += o + 1);
              }
              return { attributes: n, keywords: i };
          })(l.extension).keywords
        : [];
    let m = [];
    for (let e of u) {
        let t,
            i = h?.[e] ?? [];
        (0, r.V1)(Array.isArray(i), `keyLocaleData for ${e} must be an array`);
        let a = i[0];
        (0, r.V1)(void 0 === a || "string" == typeof a, "value must be a string or undefined");
        let u = d.find((t) => t.key === e);
        if (u) {
            let n = u.value;
            "" !== n
                ? i.indexOf(n) > -1 && (t = { key: e, value: (a = n) })
                : i.indexOf("true") > -1 && (t = { key: e, value: (a = "true") });
        }
        let o = n[e];
        (0, r.V1)(null == o || "string" == typeof o, "optionsValue must be a string or undefined"),
            "string" == typeof o &&
                "" ===
                    (o = (function (e, t) {
                        let n = t.toLowerCase();
                        return (0, r.V1)(void 0 !== e, "ukey must be defined"), n;
                    })(e.toLowerCase(), o)) &&
                (o = "true"),
            o !== a && i.indexOf(o) > -1 && ((a = o), (t = void 0)),
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
                let u = e.indexOf("-x-");
                return i(-1 === u ? e + a : e.slice(0, u) + a + e.slice(u));
            })(f, [], m)),
        (p.locale = f),
        p
    );
}
