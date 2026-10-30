s.d(i, { tH: () => n });
var t = s(582128);
let r = (0, t.createContext)(null),
    a = { didCatch: !1, error: null };
class n extends t.Component {
    constructor(e) {
        (super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = a));
    }
    static getDerivedStateFromError(e) {
        return { didCatch: !0, error: e };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var i, s, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            (null == (i = (s = this.props).onReset) || i.call(s, { args: r, reason: "imperative-api" }),
                this.setState(a));
        }
    }
    componentDidCatch(e, i) {
        var s, t;
        null == (s = (t = this.props).onError) || s.call(t, e, i);
    }
    componentDidUpdate(e, i) {
        let { didCatch: s } = this.state,
            { resetKeys: t } = this.props;
        if (
            s &&
            null !== i.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== i.length || e.some((e, s) => !Object.is(e, i[s]));
            })(e.resetKeys, t)
        ) {
            var r, n;
            (null == (r = (n = this.props).onReset) || r.call(n, { next: t, prev: e.resetKeys, reason: "keys" }),
                this.setState(a));
        }
    }
    render() {
        let { children: e, fallbackRender: i, FallbackComponent: s, fallback: a } = this.props,
            { didCatch: n, error: h } = this.state,
            o = e;
        if (n) {
            let e = { error: h, resetErrorBoundary: this.resetErrorBoundary };
            if ("function" == typeof i) o = i(e);
            else if (s) o = (0, t.createElement)(s, e);
            else if (void 0 !== a) o = a;
            else throw h;
        }
        return (0, t.createElement)(
            r.Provider,
            { value: { didCatch: n, error: h, resetErrorBoundary: this.resetErrorBoundary } },
            o,
        );
    }
}
