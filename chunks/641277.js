t.d(n, { B: () => u });
var a = t(26232);
function r(e) {
    return Intl.getCanonicalLocales(e)[0];
}
var i = t(183580);
function u(e, n, t, u, s, o) {
    let l, d;
    if ("lookup" === t.localeMatcher)
        l = (function (e, n, t) {
            let r = { locale: "" };
            for (let t of n) {
                let n = t.replace(a.KB, ""),
                    u = (0, i.q)(e, n);
                if (u) return (r.locale = u), t !== n && (r.extension = t.slice(n.length, t.length)), r;
            }
            return (r.locale = t()), r;
        })(Array.from(e), n, o);
    else {
        var c;
        let t, r, i, u, s;
        (c = Array.from(e)),
            (i = []),
            (u = n.reduce((e, n) => {
                let t = n.replace(a.KB, "");
                return i.push(t), (e[t] = n), e;
            }, {})),
            (s = (0, a.B4)(i, c)).matchedSupportedLocale &&
                s.matchedDesiredLocale &&
                ((t = s.matchedSupportedLocale),
                (r = u[s.matchedDesiredLocale].slice(s.matchedDesiredLocale.length) || void 0)),
            (l = t ? { locale: t, extension: r } : { locale: o() });
    }
    null == l && (l = { locale: o(), extension: "" });
    let _ = l.locale,
        f = s[_],
        y = { locale: "en", dataLocale: _ };
    d = l.extension
        ? (function (e) {
              let n;
              (0, a.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
                  (0, a.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
              let t = [],
                  r = [],
                  i = e.length,
                  u = 3;
              for (; u < i; ) {
                  let s,
                      o = e.indexOf("-", u);
                  s = -1 === o ? i - u : o - u;
                  let l = e.slice(u, u + s);
                  (0, a.V1)(s >= 2, "Expected a subtag to have at least 2 characters"),
                      void 0 === n && 2 != s
                          ? -1 === t.indexOf(l) && t.push(l)
                          : 2 === s
                            ? ((n = { key: l, value: "" }), void 0 === r.find((e) => e.key === n?.key) && r.push(n))
                            : n?.value === ""
                              ? (n.value = l)
                              : ((0, a.V1)(void 0 !== n, "Expected keyword to be defined"), (n.value += "-" + l)),
                      (u += s + 1);
              }
              return { attributes: t, keywords: r };
          })(l.extension).keywords
        : [];
    let h = [];
    for (let e of u) {
        let n,
            r = f?.[e] ?? [];
        (0, a.V1)(Array.isArray(r), `keyLocaleData for ${e} must be an array`);
        let i = r[0];
        (0, a.V1)(void 0 === i || "string" == typeof i, "value must be a string or undefined");
        let u = d.find((n) => n.key === e);
        if (u) {
            let t = u.value;
            "" !== t
                ? r.indexOf(t) > -1 && (n = { key: e, value: (i = t) })
                : r.indexOf("true") > -1 && (n = { key: e, value: (i = "true") });
        }
        let s = t[e];
        (0, a.V1)(null == s || "string" == typeof s, "optionsValue must be a string or undefined"),
            "string" == typeof s &&
                "" ===
                    (s = (function (e, n) {
                        let t = n.toLowerCase();
                        return (0, a.V1)(void 0 !== e, "ukey must be defined"), t;
                    })(e.toLowerCase(), s)) &&
                (s = "true"),
            s !== i && r.indexOf(s) > -1 && ((i = s), (n = void 0)),
            n && h.push(n),
            (y[e] = i);
    }
    return (
        h.length > 0 &&
            (_ = (function (e, n, t) {
                (0, a.V1)(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                let i = "-u";
                for (let e of n) i += `-${e}`;
                for (let e of t) {
                    let { key: n, value: t } = e;
                    (i += `-${n}`), "" !== t && (i += `-${t}`);
                }
                if ("-u" === i) return r(e);
                let u = e.indexOf("-x-");
                return r(-1 === u ? e + i : e.slice(0, u) + i + e.slice(u));
            })(_, [], h)),
        (y.locale = _),
        y
    );
}
