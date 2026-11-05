var n = t(582128);
let s = (0, n.createContext)(null),
    a = { didCatch: !1, error: null };
class i extends n.Component {
    constructor(e) {
        (super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = a));
    }
    static getDerivedStateFromError(e) {
        return { didCatch: !0, error: e };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var r, t, n = arguments.length, s = Array(n), i = 0; i < n; i++) s[i] = arguments[i];
            (null == (r = (t = this.props).onReset) || r.call(t, { args: s, reason: "imperative-api" }),
                this.setState(a));
        }
    }
    componentDidCatch(e, r) {
        var t, n;
        null == (t = (n = this.props).onError) || t.call(n, e, r);
    }
    componentDidUpdate(e, r) {
        let { didCatch: t } = this.state,
            { resetKeys: n } = this.props;
        if (
            t &&
            null !== r.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== r.length || e.some((e, t) => !Object.is(e, r[t]));
            })(e.resetKeys, n)
        ) {
            var s, i;
            (null == (s = (i = this.props).onReset) || s.call(i, { next: n, prev: e.resetKeys, reason: "keys" }),
                this.setState(a));
        }
    }
    render() {
        let { children: e, fallbackRender: r, FallbackComponent: t, fallback: a } = this.props,
            { didCatch: i, error: o } = this.state,
            c = e;
        if (i) {
            let e = { error: o, resetErrorBoundary: this.resetErrorBoundary };
            if ("function" == typeof r) c = r(e);
            else if (t) c = (0, n.createElement)(t, e);
            else if (void 0 !== a) c = a;
            else throw o;
        }
        return (0, n.createElement)(
            s.Provider,
            { value: { didCatch: i, error: o, resetErrorBoundary: this.resetErrorBoundary } },
            c,
        );
    }
}
t.d(r, {}, { tH: i });
