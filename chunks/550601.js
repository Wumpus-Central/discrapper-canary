"use strict";
n.d(t, { D: () => c });
var r = n(326447),
    i = n(688331),
    o = n(272469),
    a = n(231577),
    s = n(826476);
let l = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        "undefined is not an object (evaluating 'a.L')",
        'can\'t redefine non-configurable property "solana"',
        "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
        "Can't find variable: _AutofillCallbackHandler",
        /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    ],
    c = (0, i._C)((e = {}) => ({
        name: "InboundFilters",
        processEvent: (t, n, i) => {
            var c, d, p, h, f;
            return ((c = t),
            (d = (function (e = {}, t = {}) {
                return {
                    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                    ignoreErrors: [
                        ...(e.ignoreErrors || []),
                        ...(t.ignoreErrors || []),
                        ...(e.disableErrorDefaults ? [] : l),
                    ],
                    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal,
                };
            })(e, i.getOptions())).ignoreInternal &&
            (function (e) {
                try {
                    return "SentryError" === e.exception.values[0].type;
                } catch (e) {}
                return !1;
            })(c)
                ? (r.T &&
                      o.vF.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, a.$X)(c)}`),
                  0)
                : ((p = c),
                    (h = d.ignoreErrors),
                    !p.type &&
                        h &&
                        h.length &&
                        (function (e) {
                            let t,
                                n = [];
                            e.message && n.push(e.message);
                            try {
                                t = e.exception.values[e.exception.values.length - 1];
                            } catch (e) {}
                            return t && t.value && (n.push(t.value), t.type && n.push(`${t.type}: ${t.value}`)), n;
                        })(p).some((e) => (0, s.Xr)(e, h)))
                  ? (r.T &&
                        o.vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, a.$X)(c)}`),
                    0)
                  : (f = c).type ||
                      !f.exception ||
                      !f.exception.values ||
                      0 === f.exception.values.length ||
                      f.message ||
                      f.exception.values.some((e) => e.stacktrace || (e.type && "Error" !== e.type) || e.value)
                    ? !(function (e, t) {
                          if ("transaction" !== e.type || !t || !t.length) return !1;
                          let n = e.transaction;
                          return !!n && (0, s.Xr)(n, t);
                      })(c, d.ignoreTransactions)
                        ? !(function (e, t) {
                              if (!t || !t.length) return !1;
                              let n = u(e);
                              return !!n && (0, s.Xr)(n, t);
                          })(c, d.denyUrls)
                            ? (function (e, t) {
                                  if (!t || !t.length) return !0;
                                  let n = u(e);
                                  return !n || (0, s.Xr)(n, t);
                              })(c, d.allowUrls) ||
                              (r.T &&
                                  o.vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, a.$X)(c)}.
Url: ${u(c)}`),
                              0)
                            : (r.T &&
                                  o.vF.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, a.$X)(c)}.
Url: ${u(c)}`),
                              0)
                        : (r.T &&
                              o.vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, a.$X)(c)}`),
                          0)
                    : (r.T &&
                          o.vF.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, a.$X)(c)}`),
                      0))
                ? t
                : null;
        },
    }));
function u(e) {
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
        return r.T && o.vF.error(`Cannot extract url for event ${(0, a.$X)(e)}`), null;
    }
}
