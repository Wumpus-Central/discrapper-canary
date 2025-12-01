n.d(t, { f: () => m }), n(953529), n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(579092),
    s = n(570140),
    l = n(311929),
    c = n(823379),
    u = n(854586);
function d(e, t, n) {
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
let f = new o.Yd("KvStore"),
    p = Object.prototype.hasOwnProperty,
    _ = Symbol("version");
class m extends a.yh {
    getMode() {
        return this.mode;
    }
    registerWithLibdiscore(e) {
        let t;
        switch (this.mode) {
            case "typescript-libdiscore-dual-read":
                (this.shadowState = {
                    root: {},
                    derived: {
                        length: 0,
                        memoized: {},
                    },
                }),
                    (t = (e) => {
                        this.shadowState = e;
                    }),
                    this.addChangeListener(() => {
                        let e = this.shadowState;
                        i()(null != e, "Shadow state must be set in dual-read mode before running validation."),
                            (0, u.tL)(this.getName(), "Kv", (t) => {
                                t(this.state, e);
                            });
                    });
                break;
            case "libdiscore":
                t = this.setKvState.bind(this);
                break;
            case "typescript":
                throw Error("This method should not be called in TypeScript mode.");
            default:
                (0, c.vE)(this.mode);
        }
        let { state: n, storeToken: r } = e.registerKvStore(this.getName());
        return t(n), r;
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.state.derived,
                r = n[t];
            return p.call(n, t) || ((r = e(this.state.root)), (n[t] = r)), r;
        };
    }
    version() {
        let { memoized: e } = this.state.derived,
            t = e[_];
        return null == t && (e[_] = t = ++this.nextVersion), t;
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
    constructor(e, t = "typescript") {
        let n = {};
        if ("typescript" == (t = "typescript") || "typescript-libdiscore-dual-read" === t) {
            let t = !1,
                r = {
                    reset: (e) => {
                        let n = {};
                        "function" == typeof e ? e((n = {}), this.state.root) : null != e && (n = e),
                            this.setKvState({
                                root: n,
                                derived: {
                                    length: Object.keys(n).length,
                                    memoized: {},
                                },
                            }),
                            (t = !0);
                    },
                    get: (e) => this.state.root[e],
                    set: (e, n) => {
                        let r = this.state.root[e];
                        if (("function" == typeof n && (n = n(r)), void 0 !== r && (0, l.$E)(r, n))) return !1;
                        this.state.root[e] = n;
                        let { derived: i } = this.state;
                        return void 0 === r && i.length++, (i.memoized = {}), (t = !0), !0;
                    },
                    remove: (e) => {
                        let n = p.call(this.state.root, e);
                        if (n) {
                            delete this.state.root[e];
                            let { derived: n } = this.state;
                            n.length--, (n.memoized = {}), (t = !0);
                        }
                        return n;
                    },
                };
            for (let i in e) {
                let a = e[i],
                    o = (e) => {
                        if (((t = !1), a(e, r), !t)) return !1;
                    };
                n[i] = o;
            }
        }
        super(s.Z, n),
            d(this, "shadowState", null),
            d(this, "mode", void 0),
            d(this, "state", {
                derived: {
                    length: 0,
                    memoized: {},
                },
                root: {},
            }),
            d(this, "nextVersion", 0),
            (this.mode = t),
            f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode));
    }
}
