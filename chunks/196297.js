n.d(t, { i: () => o });
var r = n(661822),
    i = n(1693);
function a(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0,
    };
}
let o = (0, n(688560)._I)((e = {}) => {
    let t = e.limit || 10;
    return {
        name: "ZodErrors",
        processEvent(e, n) {
            var o;
            return e.exception &&
                e.exception.values &&
                n &&
                n.originalException &&
                ((o = n.originalException), (0, r.VZ)(o) && "ZodError" === o.name && Array.isArray(o.errors)) &&
                0 !== n.originalException.issues.length
                ? {
                      ...e,
                      exception: {
                          ...e.exception,
                          values: [
                              {
                                  ...e.exception.values[0],
                                  value: (function (e) {
                                      let t = new Set();
                                      for (let n of e.issues) n.path && n.path[0] && t.add(n.path[0]);
                                      let n = Array.from(t);
                                      return `Failed to validate keys: ${(0, i.$G)(n.join(", "), 100)}`;
                                  })(n.originalException),
                              },
                              ...e.exception.values.slice(1),
                          ],
                      },
                      extra: {
                          ...e.extra,
                          "zoderror.issues": n.originalException.errors.slice(0, t).map(a),
                      },
                  }
                : e;
        },
    };
});
