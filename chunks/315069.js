"use strict";
n.d(t, { A: () => r });
class r {
    toJS() {
        return { ...this };
    }
    set(e, t) {
        let n = this,
            r = n[e];
        return t instanceof Date && r instanceof Date && t.getTime() === r.getTime()
            ? this
            : r !== t
              ? new this.constructor({ ...this, [e]: t })
              : this;
    }
    merge(e) {
        let t = this,
            n = null;
        for (let r in e) {
            if (!e.hasOwnProperty(r)) continue;
            let i = t[r],
                a = e[r];
            (a instanceof Date && i instanceof Date && a.getTime() === i.getTime()) ||
                (i !== a && (null == n && (n = { ...this }), (n[r] = e[r])));
        }
        return null != n ? new this.constructor(n) : this;
    }
    update(e, t, n) {
        null == n && ((n = t), (t = void 0));
        let i = this,
            a = i[e];
        return (
            a instanceof r || (a instanceof Array ? (a = [...a]) : a instanceof Object && (a = { ...a })),
            void 0 === a && (a = t),
            this.set(e, n(a))
        );
    }
}
