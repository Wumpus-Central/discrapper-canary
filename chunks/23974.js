n.d(t, {
    f: () => d,
}),
    n(228524);
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    o = n(73153),
    s = n(867051);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = Object.prototype.hasOwnProperty,
    u = Symbol("version");
class d extends a.il {
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.state.derived,
                r = n[t];
            return c.call(n, t) || ((r = e(this.state.root)), (n[t] = r)), r;
        };
    }
    version() {
        let { memoized: e } = this.state.derived,
            t = e[u];
        return null == t && (e[u] = t = ++this.nextVersion), t;
    }
    get(e) {
        return this.state.root[e];
    }
    setKvState(e) {
        (this.state = e),
            i()("object" == typeof this.state.root, "must have root"),
            i()("object" == typeof this.state.derived, "must have derived");
    }
    length() {
        return this.state.derived.length;
    }
    constructor(e) {
        const t = {};
        let n = !1;
        const r = {
            reset: (e) => {
                let t = {};
                "function" == typeof e ? e((t = {}), this.state.root) : null != e && (t = e),
                    this.setKvState({
                        root: t,
                        derived: {
                            length: Object.keys(t).length,
                            memoized: {},
                        },
                    }),
                    (n = !0);
            },
            get: (e) => this.state.root[e],
            set: (e, t) => {
                let r = this.state.root[e];
                if (("function" == typeof t && (t = t(r)), void 0 !== r && (0, s.Kl)(r, t))) return !1;
                this.state.root[e] = t;
                let { derived: i } = this.state;
                return void 0 === r && i.length++, (i.memoized = {}), (n = !0), !0;
            },
            remove: (e) => {
                let t = c.call(this.state.root, e);
                if (t) {
                    delete this.state.root[e];
                    let { derived: t } = this.state;
                    t.length--, (t.memoized = {}), (n = !0);
                }
                return t;
            },
        };
        for (const i in e) {
            const a = e[i],
                o = (e) => {
                    if (((n = !1), a(e, r), !n)) return !1;
                };
            t[i] = o;
        }
        super(o.h, t),
            l(this, "state", {
                derived: {
                    length: 0,
                    memoized: {},
                },
                root: {},
            }),
            l(this, "nextVersion", 0);
    }
}
