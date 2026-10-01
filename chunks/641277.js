t.d(n, { B: () => s });
var i = t(26232);
function r(e) {
    return Intl.getCanonicalLocales(e)[0];
}
var a = t(183580);
function s(e, n, t, s, o, u) {
    let l, d;
    if ("lookup" === t.localeMatcher)
        l = (function (e, n, t) {
            let r = { locale: "" };
            for (let t of n) {
                let n = t.replace(i.KB, ""),
                    s = (0, a.q)(e, n);
                if (s) return ((r.locale = s), t !== n && (r.extension = t.slice(n.length, t.length)), r);
            }
            return ((r.locale = t()), r);
        })(Array.from(e), n, u);
    else {
        var c;
        let t, r, a, s, o;
        ((c = Array.from(e)),
            (a = []),
            (s = n.reduce((e, n) => {
                let t = n.replace(i.KB, "");
                return (a.push(t), (e[t] = n), e);
            }, {})),
            (o = (0, i.B4)(a, c)).matchedSupportedLocale &&
                o.matchedDesiredLocale &&
                ((t = o.matchedSupportedLocale),
                (r = s[o.matchedDesiredLocale].slice(o.matchedDesiredLocale.length) || void 0)),
            (l = t ? { locale: t, extension: r } : { locale: u() }));
    }
    null == l && (l = { locale: u(), extension: "" });
    let f = l.locale,
        p = o[f],
        h = { locale: "en", dataLocale: f };
    d = l.extension
        ? (function (e) {
              let n;
              ((0, i.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
                  (0, i.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension"));
              let t = [],
                  r = [],
                  a = e.length,
                  s = 3;
              for (; s < a;) {
                  let o,
                      u = e.indexOf("-", s);
                  o = -1 === u ? a - s : u - s;
                  let l = e.slice(s, s + o);
                  ((0, i.V1)(o >= 2, "Expected a subtag to have at least 2 characters"),
                      void 0 === n && 2 != o
                          ? -1 === t.indexOf(l) && t.push(l)
                          : 2 === o
                            ? ((n = { key: l, value: "" }), void 0 === r.find((e) => e.key === n?.key) && r.push(n))
                            : n?.value === ""
                              ? (n.value = l)
                              : ((0, i.V1)(void 0 !== n, "Expected keyword to be defined"), (n.value += "-" + l)),
                      (s += o + 1));
              }
              return { attributes: t, keywords: r };
          })(l.extension).keywords
        : [];
    let _ = [];
    for (let e of s) {
        let n,
            r = p?.[e] ?? [];
        (0, i.V1)(Array.isArray(r), `keyLocaleData for ${e} must be an array`);
        let a = r[0];
        (0, i.V1)(void 0 === a || "string" == typeof a, "value must be a string or undefined");
        let s = d.find((n) => n.key === e);
        if (s) {
            let t = s.value;
            "" !== t
                ? r.indexOf(t) > -1 && (n = { key: e, value: (a = t) })
                : r.indexOf("true") > -1 && (n = { key: e, value: (a = "true") });
        }
        let o = t[e];
        ((0, i.V1)(null == o || "string" == typeof o, "optionsValue must be a string or undefined"),
            "string" == typeof o &&
                "" ===
                    (o = (function (e, n) {
                        let t = n.toLowerCase();
                        return ((0, i.V1)(void 0 !== e, "ukey must be defined"), t);
                    })(e.toLowerCase(), o)) &&
                (o = "true"),
            o !== a && r.indexOf(o) > -1 && ((a = o), (n = void 0)),
            n && _.push(n),
            (h[e] = a));
    }
    return (
        _.length > 0 &&
            (f = (function (e, n, t) {
                (0, i.V1)(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                let a = "-u";
                for (let e of n) a += `-${e}`;
                for (let e of t) {
                    let { key: n, value: t } = e;
                    ((a += `-${n}`), "" !== t && (a += `-${t}`));
                }
                if ("-u" === a) return r(e);
                let s = e.indexOf("-x-");
                return r(-1 === s ? e + a : e.slice(0, s) + a + e.slice(s));
            })(f, [], _)),
        (h.locale = f),
        h
    );
}
