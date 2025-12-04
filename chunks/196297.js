r.d(t, { i: () => o });
var n = r(661822),
    a = r(1693);
function i(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0,
    };
}
let o = (0, r(688560)._I)((e = {}) => {
    let t = e.limit || 10;
    return {
        name: "ZodErrors",
        processEvent(e, r) {
            var o;
            return e.exception &&
                e.exception.values &&
                r &&
                r.originalException &&
                ((o = r.originalException), (0, n.VZ)(o) && "ZodError" === o.name && Array.isArray(o.errors)) &&
                0 !== r.originalException.issues.length
                ? {
                      ...e,
                      exception: {
                          ...e.exception,
                          values: [
                              {
                                  ...e.exception.values[0],
                                  value: (function (e) {
                                      let t = new Set();
                                      for (let r of e.issues) r.path && r.path[0] && t.add(r.path[0]);
                                      let r = Array.from(t);
                                      return `Failed to validate keys: ${(0, a.$G)(r.join(", "), 100)}`;
                                  })(r.originalException),
                              },
                              ...e.exception.values.slice(1),
                          ],
                      },
                      extra: {
                          ...e.extra,
                          "zoderror.issues": r.originalException.errors.slice(0, t).map(i),
                      },
                  }
                : e;
        },
    };
});
