t.d(r, { tH: () => l });
var n = t(582128);
let s = (0, n.createContext)(null),
    o = { didCatch: !1, error: null };
class l extends n.Component {
    constructor(e) {
        (super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o));
    }
    static getDerivedStateFromError(e) {
        return { didCatch: !0, error: e };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var r, t, n = arguments.length, s = Array(n), l = 0; l < n; l++) s[l] = arguments[l];
            (null == (r = (t = this.props).onReset) || r.call(t, { args: s, reason: "imperative-api" }),
                this.setState(o));
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
            var s, l;
            (null == (s = (l = this.props).onReset) || s.call(l, { next: n, prev: e.resetKeys, reason: "keys" }),
                this.setState(o));
        }
    }
    render() {
        let { children: e, fallbackRender: r, FallbackComponent: t, fallback: o } = this.props,
            { didCatch: l, error: i } = this.state,
            d = e;
        if (l) {
            let e = { error: i, resetErrorBoundary: this.resetErrorBoundary };
            if ("function" == typeof r) d = r(e);
            else if (t) d = (0, n.createElement)(t, e);
            else if (void 0 !== o) d = o;
            else throw i;
        }
        return (0, n.createElement)(
            s.Provider,
            { value: { didCatch: l, error: i, resetErrorBoundary: this.resetErrorBoundary } },
            d,
        );
    }
}
