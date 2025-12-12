n.d(t, { S: () => c });
var r = n(98076),
    i = n(431660),
    a = n(1693),
    o = n(4757),
    _ = n(688560);
let s = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        "undefined is not an object (evaluating 'a.L')",
        'can\'t redefine non-configurable property "solana"',
        "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
        "Can't find variable: _AutofillCallbackHandler",
    ],
    c = (0, _._I)((e = {}) => ({
        name: "InboundFilters",
        processEvent: (t, n, _) => {
            var c, l, u, d, p;
            return ((c = t),
            (l = (function (e = {}, t = {}) {
                return {
                    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                    ignoreErrors: [
                        ...(e.ignoreErrors || []),
                        ...(t.ignoreErrors || []),
                        ...(e.disableErrorDefaults ? [] : s),
                    ],
                    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal,
                };
            })(e, _.getOptions())).ignoreInternal &&
            (function (e) {
                try {
                    return "SentryError" === e.exception.values[0].type;
                } catch (e) {}
                return !1;
            })(c)
                ? (o.X &&
                      r.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, i.jH)(c)}`),
                  0)
                : ((u = c),
                    (d = l.ignoreErrors),
                    !u.type &&
                        d &&
                        d.length &&
                        (function (e) {
                            let t,
                                n = [];
                            e.message && n.push(e.message);
                            try {
                                t = e.exception.values[e.exception.values.length - 1];
                            } catch (e) {}
                            return t && t.value && (n.push(t.value), t.type && n.push(`${t.type}: ${t.value}`)), n;
                        })(u).some((e) => (0, a.U0)(e, d)))
                  ? (o.X &&
                        r.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, i.jH)(c)}`),
                    0)
                  : (p = c).type ||
                      !p.exception ||
                      !p.exception.values ||
                      0 === p.exception.values.length ||
                      p.message ||
                      p.exception.values.some((e) => e.stacktrace || (e.type && "Error" !== e.type) || e.value)
                    ? !(function (e, t) {
                          if ("transaction" !== e.type || !t || !t.length) return !1;
                          let n = e.transaction;
                          return !!n && (0, a.U0)(n, t);
                      })(c, l.ignoreTransactions)
                        ? !(function (e, t) {
                              if (!t || !t.length) return !1;
                              let n = E(e);
                              return !!n && (0, a.U0)(n, t);
                          })(c, l.denyUrls)
                            ? (function (e, t) {
                                  if (!t || !t.length) return !0;
                                  let n = E(e);
                                  return !n || (0, a.U0)(n, t);
                              })(c, l.allowUrls) ||
                              (o.X &&
                                  r.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, i.jH)(c)}.
Url: ${E(c)}`),
                              0)
                            : (o.X &&
                                  r.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, i.jH)(c)}.
Url: ${E(c)}`),
                              0)
                        : (o.X &&
                              r.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, i.jH)(c)}`),
                          0)
                    : (o.X &&
                          r.kg.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, i.jH)(c)}`),
                      0))
                ? t
                : null;
        },
    }));
function E(e) {
    try {
        let t;
        try {
            t = e.exception.values[0].stacktrace.frames;
        } catch (e) {}
        return t
            ? (function (e = []) {
                  for (let t = e.length - 1; t >= 0; t--) {
                      let n = e[t];
                      if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                          return n.filename || null;
                  }
                  return null;
              })(t)
            : null;
    } catch (t) {
        return o.X && r.kg.error(`Cannot extract url for event ${(0, i.jH)(e)}`), null;
    }
}
