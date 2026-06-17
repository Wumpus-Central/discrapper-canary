"use strict";
function i(e) {
    let t = null,
        n = null;
    return function () {
        for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
        return (
            !(function (e, t) {
                if (e === t) return !0;
                if (null == e || null == t || e.length !== t.length) return !1;
                let n = e.length;
                for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
                return !0;
            })(t, r) && (n = e(...r)),
            (t = r),
            n
        );
    };
}
n.d(t, { L_: () => i, Zy: () => r }), n(321073);
class r {
    #t = new Map();
    one(e, t) {
        let { force: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = this.#t.get(e);
        if (!n && null != i) return i;
        let r = t().finally(() => {
            this.#t.get(e) === r && this.#t.delete(e);
        });
        return this.#t.set(e, r), r;
    }
    many(e, t) {
        let { force: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = [...new Set(e)],
            r = [],
            s = new Map();
        for (let e of i) {
            let t = this.#t.get(e);
            if (!n && null != t) {
                s.set(e, t);
                continue;
            }
            r.push(e);
        }
        if (r.length > 0) {
            let e;
            try {
                e = t(r);
            } catch (t) {
                e = Promise.reject(t);
            }
            for (let t of r) {
                let n = e
                    .then((e) => {
                        if (!e.has(t)) throw Error(`Promise deduper result missing key: ${String(t)}`);
                        return e.get(t);
                    })
                    .finally(() => {
                        this.#t.get(t) === n && this.#t.delete(t);
                    });
                this.#t.set(t, n), s.set(t, n);
            }
        }
        return Promise.all(
            i.map(async (e) => {
                let t = await s.get(e);
                return [e, t];
            }),
        ).then((e) => {
            let t = new Map();
            for (let [n, i] of e) t.set(n, i);
            return t;
        });
    }
}
