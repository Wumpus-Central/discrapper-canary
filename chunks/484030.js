r.d(t, { tH: () => a });
var n = r(64700);
let o = (0, n.createContext)(null),
    i = { didCatch: !1, error: null };
class a extends n.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = i);
    }
    static getDerivedStateFromError(e) {
        return { didCatch: !0, error: e };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var t, r, n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            null == (t = (r = this.props).onReset) || t.call(r, { args: o, reason: "imperative-api" }),
                this.setState(i);
        }
    }
    componentDidCatch(e, t) {
        var r, n;
        null == (r = (n = this.props).onError) || r.call(n, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
        if (
            r &&
            null !== t.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]));
            })(e.resetKeys, n)
        ) {
            var o, a;
            null == (o = (a = this.props).onReset) || o.call(a, { next: n, prev: e.resetKeys, reason: "keys" }),
                this.setState(i);
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: r, fallback: i } = this.props,
            { didCatch: a, error: s } = this.state,
            c = e;
        if (a) {
            let e = { error: s, resetErrorBoundary: this.resetErrorBoundary };
            if ("function" == typeof t) c = t(e);
            else if (r) c = (0, n.createElement)(r, e);
            else if (void 0 !== i) c = i;
            else throw s;
        }
        return (0, n.createElement)(
            o.Provider,
            { value: { didCatch: a, error: s, resetErrorBoundary: this.resetErrorBoundary } },
            c,
        );
    }
}
