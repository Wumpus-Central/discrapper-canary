n.d(t, { tH: () => _ });
var r = n(582128);
let i = (0, r.createContext)(null),
    o = { didCatch: !1, error: null };
class _ extends r.Component {
    constructor(e) {
        (super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o));
    }
    static getDerivedStateFromError(e) {
        return { didCatch: !0, error: e };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var t, n, r = arguments.length, i = Array(r), _ = 0; _ < r; _++) i[_] = arguments[_];
            (null == (t = (n = this.props).onReset) || t.call(n, { args: i, reason: "imperative-api" }),
                this.setState(o));
        }
    }
    componentDidCatch(e, t) {
        var n, r;
        null == (n = (r = this.props).onError) || n.call(r, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: n } = this.state,
            { resetKeys: r } = this.props;
        if (
            n &&
            null !== t.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
            })(e.resetKeys, r)
        ) {
            var i, _;
            (null == (i = (_ = this.props).onReset) || i.call(_, { next: r, prev: e.resetKeys, reason: "keys" }),
                this.setState(o));
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: n, fallback: o } = this.props,
            { didCatch: _, error: a } = this.state,
            s = e;
        if (_) {
            let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
            if ("function" == typeof t) s = t(e);
            else if (n) s = (0, r.createElement)(n, e);
            else if (void 0 !== o) s = o;
            else throw a;
        }
        return (0, r.createElement)(
            i.Provider,
            { value: { didCatch: _, error: a, resetErrorBoundary: this.resetErrorBoundary } },
            s,
        );
    }
}
