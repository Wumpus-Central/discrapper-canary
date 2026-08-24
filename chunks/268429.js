"use strict";
n.d(t, { A: () => a }), n(321073);
var i = n(860840);
let r = /^[a-f0-9]{32}$/;
class a {
    surface;
    originalMd5Promise;
    constructor(e, t) {
        (this.surface = e), (this.originalMd5Promise = t);
    }
    static fromBlob(e, t) {
        return new a(
            e,
            i.default.fromBlob(t).catch(() => null),
        );
    }
    getOriginalMd5() {
        return this.originalMd5Promise;
    }
    static buildHeadersForMd5(e, t) {
        let n = (function (e) {
            if (null == e) return null;
            if ("string" == typeof e) return r.test(e) ? e : null;
            let t = [];
            for (let n of Object.keys(e)) {
                let i = e[n];
                null != i && r.test(i) && t.push([n, i]);
            }
            return 0 === t.length
                ? null
                : (t.sort((e, t) => {
                      let [n] = e,
                          [i] = t;
                      return n < i ? -1 : +(n > i);
                  }),
                  t
                      .map((e) => {
                          let [t, n] = e;
                          return `${t.toLowerCase()}="${n}"`;
                      })
                      .join(", "));
        })(e);
        return null == n ? t : { ...t, "X-Discord-Original-MD5": n };
    }
    async buildHeaders(e) {
        return a.buildHeadersForMd5(await this.originalMd5Promise, e);
    }
}
