_.d(e, { S: () => c });
var a = _(622916),
    r = _(394798),
    n = _(886115),
    o = _(255768),
    E = _(151122);
let i = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        "undefined is not an object (evaluating 'a.L')",
        'can\'t redefine non-configurable property "solana"',
        "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
        "Can't find variable: _AutofillCallbackHandler",
    ],
    c = (0, E._I)((t = {}) => ({
        name: "InboundFilters",
        processEvent: (e, _, E) => {
            var c, l, I, R, N;
            return ((c = e),
            (l = (function (t = {}, e = {}) {
                return {
                    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                    ignoreErrors: [
                        ...(t.ignoreErrors || []),
                        ...(e.ignoreErrors || []),
                        ...(t.disableErrorDefaults ? [] : i),
                    ],
                    ignoreTransactions: [...(t.ignoreTransactions || []), ...(e.ignoreTransactions || [])],
                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal,
                };
            })(t, E.getOptions())).ignoreInternal &&
            (function (t) {
                try {
                    return "SentryError" === t.exception.values[0].type;
                } catch (t) {}
                return !1;
            })(c)
                ? (o.X &&
                      a.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, r.jH)(c)}`),
                  0)
                : ((I = c),
                    (R = l.ignoreErrors),
                    !I.type &&
                        R &&
                        R.length &&
                        (function (t) {
                            let e,
                                _ = [];
                            t.message && _.push(t.message);
                            try {
                                e = t.exception.values[t.exception.values.length - 1];
                            } catch (t) {}
                            return e && e.value && (_.push(e.value), e.type && _.push(`${e.type}: ${e.value}`)), _;
                        })(I).some((t) => (0, n.U0)(t, R)))
                  ? (o.X &&
                        a.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, r.jH)(c)}`),
                    0)
                  : (N = c).type ||
                      !N.exception ||
                      !N.exception.values ||
                      0 === N.exception.values.length ||
                      N.message ||
                      N.exception.values.some((t) => t.stacktrace || (t.type && "Error" !== t.type) || t.value)
                    ? !(function (t, e) {
                          if ("transaction" !== t.type || !e || !e.length) return !1;
                          let _ = t.transaction;
                          return !!_ && (0, n.U0)(_, e);
                      })(c, l.ignoreTransactions)
                        ? !(function (t, e) {
                              if (!e || !e.length) return !1;
                              let _ = s(t);
                              return !!_ && (0, n.U0)(_, e);
                          })(c, l.denyUrls)
                            ? (function (t, e) {
                                  if (!e || !e.length) return !0;
                                  let _ = s(t);
                                  return !_ || (0, n.U0)(_, e);
                              })(c, l.allowUrls) ||
                              (o.X &&
                                  a.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, r.jH)(c)}.
Url: ${s(c)}`),
                              0)
                            : (o.X &&
                                  a.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, r.jH)(c)}.
Url: ${s(c)}`),
                              0)
                        : (o.X &&
                              a.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, r.jH)(c)}`),
                          0)
                    : (o.X &&
                          a.kg.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, r.jH)(c)}`),
                      0))
                ? e
                : null;
        },
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
                      let _ = t[e];
                      if (_ && "<anonymous>" !== _.filename && "[native code]" !== _.filename)
                          return _.filename || null;
                  }
                  return null;
              })(e)
            : null;
    } catch (e) {
        return o.X && a.kg.error(`Cannot extract url for event ${(0, r.jH)(t)}`), null;
    }
}
