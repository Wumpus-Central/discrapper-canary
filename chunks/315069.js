n.d(
    t,
    {},
    {
        A: class e {
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
                    let i = this[n],
                        r = e[n];
                    (r instanceof Date && i instanceof Date && r.getTime() === i.getTime()) ||
                        (i !== r && (null == t && (t = { ...this }), (t[n] = e[n])));
                }
                return null != t ? new this.constructor(t) : this;
            }
            update(t, n, i) {
                null == i && ((i = n), (n = void 0));
                let r = this[t];
                return (
                    r instanceof e || (r instanceof Array ? (r = [...r]) : r instanceof Object && (r = { ...r })),
                    void 0 === r && (r = n),
                    this.set(t, i(r))
                );
            }
        },
    },
);
