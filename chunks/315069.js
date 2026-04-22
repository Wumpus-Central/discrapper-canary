"use strict";
n.d(t, { A: () => r });
class r {
    toJS() {
        return { ...this };
    }
    set(e, t) {
        let n = this[e];
        return t instanceof Date && n instanceof Date && t.getTime() === n.getTime()
            ? this
            : n !== t
              ? new this.constructor({ ...this, [e]: t })
              : this;
    }
    merge(e) {
        let t = null;
        for (let n in e) {
            if (!e.hasOwnProperty(n)) continue;
            let r = this[n],
                i = e[n];
            (i instanceof Date && r instanceof Date && i.getTime() === r.getTime()) ||
                (r !== i && (null == t && (t = { ...this }), (t[n] = e[n])));
        }
        return null != t ? new this.constructor(t) : this;
    }
    update(e, t, n) {
        null == n && ((n = t), (t = void 0));
        let i = this[e];
        return (
            i instanceof r || (i instanceof Array ? (i = [...i]) : i instanceof Object && (i = { ...i })),
            void 0 === i && (i = t),
            this.set(e, n(i))
        );
    }
}
