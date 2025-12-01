r.d(t, { S: () => c });
var n = r(622916),
    a = r(394798),
    i = r(886115),
    o = r(255768),
    _ = r(151122);
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
        processEvent: (t, r, _) => {
            var c, l, u, d, I;
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
                      n.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, a.jH)(c)}`),
                  0)
                : ((u = c),
                    (d = l.ignoreErrors),
                    !u.type &&
                        d &&
                        d.length &&
                        (function (e) {
                            let t,
                                r = [];
                            e.message && r.push(e.message);
                            try {
                                t = e.exception.values[e.exception.values.length - 1];
                            } catch (e) {}
                            return t && t.value && (r.push(t.value), t.type && r.push(`${t.type}: ${t.value}`)), r;
                        })(u).some((e) => (0, i.U0)(e, d)))
                  ? (o.X &&
                        n.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, a.jH)(c)}`),
                    0)
                  : (I = c).type ||
                      !I.exception ||
                      !I.exception.values ||
                      0 === I.exception.values.length ||
                      I.message ||
                      I.exception.values.some((e) => e.stacktrace || (e.type && "Error" !== e.type) || e.value)
                    ? !(function (e, t) {
                          if ("transaction" !== e.type || !t || !t.length) return !1;
                          let r = e.transaction;
                          return !!r && (0, i.U0)(r, t);
                      })(c, l.ignoreTransactions)
                        ? !(function (e, t) {
                              if (!t || !t.length) return !1;
                              let r = E(e);
                              return !!r && (0, i.U0)(r, t);
                          })(c, l.denyUrls)
                            ? (function (e, t) {
                                  if (!t || !t.length) return !0;
                                  let r = E(e);
                                  return !r || (0, i.U0)(r, t);
                              })(c, l.allowUrls) ||
                              (o.X &&
                                  n.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, a.jH)(c)}.
Url: ${E(c)}`),
                              0)
                            : (o.X &&
                                  n.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, a.jH)(c)}.
Url: ${E(c)}`),
                              0)
                        : (o.X &&
                              n.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, a.jH)(c)}`),
                          0)
                    : (o.X &&
                          n.kg.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, a.jH)(c)}`),
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
                      let r = e[t];
                      if (r && "<anonymous>" !== r.filename && "[native code]" !== r.filename)
                          return r.filename || null;
                  }
                  return null;
              })(t)
            : null;
    } catch (t) {
        return o.X && n.kg.error(`Cannot extract url for event ${(0, a.jH)(e)}`), null;
    }
}
