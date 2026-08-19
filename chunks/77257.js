"use strict";
n.d(t, { A: () => l }), n(321073), n(508300), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(615380),
    r = n.n(i);
class a {
    static async fromBlob(e) {
        return a.fromArrayBuffer(await e.arrayBuffer());
    }
    static fromArrayBuffer(e) {
        return r().ArrayBuffer.hash(e);
    }
    static fromDataURI(e) {
        return Promise.resolve().then(() => {
            let t = /^data:[^;]*;base64,(.*)$/.exec(e);
            if (null == t) throw Error("Not a base64 data URI");
            let n = atob(t[1]),
                i = new ArrayBuffer(n.length),
                a = new Uint8Array(i);
            for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
            return r().ArrayBuffer.hash(i);
        });
    }
}
let s = /^[a-f0-9]{32}$/;
class l {
    surface;
    originalMd5Promise;
    constructor(e, t) {
        (this.surface = e), (this.originalMd5Promise = t);
    }
    static fromBlob(e, t) {
        return new l(
            e,
            a.fromBlob(t).catch(() => null),
        );
    }
    getOriginalMd5() {
        return this.originalMd5Promise;
    }
    static buildHeadersForMd5(e, t) {
        let n = (function (e) {
            if (null == e) return null;
            if ("string" == typeof e) return s.test(e) ? e : null;
            let t = [];
            for (let n of Object.keys(e)) {
                let i = e[n];
                null != i && s.test(i) && t.push([n, i]);
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
        return l.buildHeadersForMd5(await this.originalMd5Promise, e);
    }
}
