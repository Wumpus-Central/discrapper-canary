"use strict";
n.d(t, { A: () => a }), n(508300), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(615380),
    r = n.n(i);
class s {
    static async fromBlob(e) {
        return s.fromArrayBuffer(await e.arrayBuffer());
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
                s = new Uint8Array(i);
            for (let e = 0; e < n.length; e++) s[e] = n.charCodeAt(e);
            return r().ArrayBuffer.hash(i);
        });
    }
}
class a {
    surface;
    originalMd5Promise;
    constructor(e, t) {
        (this.surface = e), (this.originalMd5Promise = t);
    }
    static fromBlob(e, t) {
        return new a(
            e,
            s.fromBlob(t).catch(() => null),
        );
    }
    getOriginalMd5() {
        return this.originalMd5Promise;
    }
    static buildHeadersForMd5(e, t) {
        return null == e ? t : { ...t, "X-Discord-Original-MD5": e };
    }
    async buildHeaders(e) {
        return a.buildHeadersForMd5(await this.originalMd5Promise, e);
    }
}
