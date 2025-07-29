(n.d(t, { fE: () => y }), n(953529), n(415506));
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(579092),
    s = n(570140),
    l = n(311929),
    c = n(823379),
    u = n(611907),
    d = n(544407);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = new o.Yd('KvStore'),
    p = Symbol('setKv'),
    h = Symbol('setMetadata'),
    m = Object.prototype.hasOwnProperty,
    g = Symbol('version'),
    E = h,
    b = p;
class y extends a.yh {
    getMode() {
        return this.mode;
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived,
                r = n[t];
            return (m.call(n, t) || ((r = e(this.root)), (n[t] = r)), r);
        };
    }
    version() {
        let e = this.derived.memoized[g];
        return (null == e && (this.derived.memoized[g] = e = ++this.nextVersion), e);
    }
    get(e) {
        return this.root[e];
    }
    setKvRoot(e, t) {
        ((this.root = e), (this.derived = t));
    }
    length() {
        return this.derived.length;
    }
    constructor(e, t = 'typescript') {
        'typescript' === t || (0, u.F)() || (f.warn('Attempted to create a KvStore in mode '.concat(t, ', but libdiscore is not available. Falling back to typescript mode.')), (t = 'typescript'));
        let n = {};
        if ('typescript' === t || 'typescript-libdiscore-dual-read' === t) {
            let t = !1,
                r = {
                    reset: (e) => {
                        let n = {};
                        ('function' == typeof e ? e((n = {}), this.root) : null != e && (n = e),
                            this.setKvRoot(n, {
                                length: Object.keys(n).length,
                                memoized: {}
                            }),
                            (t = !0));
                    },
                    get: (e) => this.root[e],
                    set: (e, n) => {
                        let r = this.root[e];
                        if (('function' == typeof n && (n = n(r)), void 0 !== r && (0, l.$E)(r, n))) return !1;
                        this.root[e] = n;
                        let { derived: i } = this;
                        return (void 0 === r && i.length++, (i.memoized = {}), (t = !0), !0);
                    },
                    remove: (e) => {
                        let n = m.call(this.root, e);
                        if (n) {
                            delete this.root[e];
                            let { derived: n } = this;
                            (n.length--, (n.memoized = {}), (t = !0));
                        }
                        return n;
                    }
                };
            for (let i in e) {
                let a = e[i],
                    o = (e) => {
                        if (((t = !1), a(e, r), !t)) return !1;
                    };
                n[i] = o;
            }
        }
        switch (
            (super(s.Z, n),
            _(this, 'mode', void 0),
            _(this, 'shadowState', void 0),
            _(this, E, void 0),
            _(this, b, void 0),
            _(this, 'root', void 0),
            _(this, 'derived', void 0),
            _(this, 'nextVersion', void 0),
            (this.mode = t),
            (this.shadowState = null),
            (this.root = {}),
            (this.derived = {
                length: 0,
                memoized: {}
            }),
            (this.nextVersion = 0),
            f.info(''.concat(this.getName(), ' initialized in mode: ').concat(this.mode)),
            t)
        ) {
            case 'typescript-libdiscore-dual-read':
                ((this.shadowState = {
                    root: {},
                    derived: {
                        length: 0,
                        memoized: {}
                    }
                }),
                    (this[h] = (e) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'), (this.shadowState.derived = e));
                    }),
                    (this[p] = (e, t) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'),
                            (this.shadowState = {
                                root: e,
                                derived: t
                            }));
                    }),
                    this.addChangeListener(() => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before running validation.'),
                            (0, d.t)(
                                this.getName(),
                                {
                                    root: this.root,
                                    derived: this.derived
                                },
                                this.shadowState
                            ));
                    }));
                break;
            case 'libdiscore':
                ((this[h] = (e) => {
                    this.derived = e;
                }),
                    (this[p] = (e, t) => {
                        this.setKvRoot(e, t);
                    }));
                break;
            case 'typescript':
                this[h] = this[p] = () => {
                    throw Error('This method should not be called in TypeScript mode.');
                };
                break;
            default:
                (0, c.vE)(t);
        }
    }
}
