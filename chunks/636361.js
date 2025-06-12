a.d(e, { S: () => E });
var r = a(622916),
    _ = a(394798),
    n = a(886115),
    o = a(255768),
    i = a(151122);
let c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"],
    E = (0, i._I)((t = {}) => ({
        name: 'InboundFilters',
        processEvent: (e, a, i) => {
            var E, l, I, u, R;
            return ((E = e),
            (l = (function (t = {}, e = {}) {
                return {
                    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                    ignoreErrors: [...(t.ignoreErrors || []), ...(e.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : c)],
                    ignoreTransactions: [...(t.ignoreTransactions || []), ...(e.ignoreTransactions || [])],
                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                };
            })(t, i.getOptions())).ignoreInternal &&
            (function (t) {
                try {
                    return 'SentryError' === t.exception.values[0].type;
                } catch (t) {}
                return !1;
            })(E)
                ? (o.X &&
                      r.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, _.jH)(E)}`),
                  0)
                : ((I = E),
                    (u = l.ignoreErrors),
                    !I.type &&
                        u &&
                        u.length &&
                        (function (t) {
                            let e,
                                a = [];
                            t.message && a.push(t.message);
                            try {
                                e = t.exception.values[t.exception.values.length - 1];
                            } catch (t) {}
                            return e && e.value && (a.push(e.value), e.type && a.push(`${e.type}: ${e.value}`)), a;
                        })(I).some((t) => (0, n.U0)(t, u)))
                  ? (o.X &&
                        r.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, _.jH)(E)}`),
                    0)
                  : (R = E).type || !R.exception || !R.exception.values || 0 === R.exception.values.length || R.message || R.exception.values.some((t) => t.stacktrace || (t.type && 'Error' !== t.type) || t.value)
                    ? !(function (t, e) {
                          if ('transaction' !== t.type || !e || !e.length) return !1;
                          let a = t.transaction;
                          return !!a && (0, n.U0)(a, e);
                      })(E, l.ignoreTransactions)
                        ? !(function (t, e) {
                              if (!e || !e.length) return !1;
                              let a = s(t);
                              return !!a && (0, n.U0)(a, e);
                          })(E, l.denyUrls)
                            ? (function (t, e) {
                                  if (!e || !e.length) return !0;
                                  let a = s(t);
                                  return !a || (0, n.U0)(a, e);
                              })(E, l.allowUrls) ||
                              (o.X &&
                                  r.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, _.jH)(E)}.
Url: ${s(E)}`),
                              0)
                            : (o.X &&
                                  r.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, _.jH)(E)}.
Url: ${s(E)}`),
                              0)
                        : (o.X &&
                              r.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, _.jH)(E)}`),
                          0)
                    : (o.X &&
                          r.kg.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, _.jH)(E)}`),
                      0))
                ? e
                : null;
        }
    }));
function s(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames;
        } catch (t) {}
        return e
            ? (function (t = []) {
                  for (let e = t.length - 1; e >= 0; e--) {
                      let a = t[e];
                      if (a && '<anonymous>' !== a.filename && '[native code]' !== a.filename) return a.filename || null;
                  }
                  return null;
              })(e)
            : null;
    } catch (e) {
        return o.X && r.kg.error(`Cannot extract url for event ${(0, _.jH)(t)}`), null;
    }
}
