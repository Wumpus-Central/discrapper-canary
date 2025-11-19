o.d(e, { SV: () => a });
var r = o(473749);
let n = (0, r.createContext)(null),
    i = {
        didCatch: !1,
        error: null,
    };
class a extends r.Component {
    constructor(t) {
        super(t), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = i);
    }
    static getDerivedStateFromError(t) {
        return {
            didCatch: !0,
            error: t,
        };
    }
    resetErrorBoundary() {
        let { error: t } = this.state;
        if (null !== t) {
            for (var e, o, r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
            null == (e = (o = this.props).onReset) ||
                e.call(o, {
                    args: n,
                    reason: "imperative-api",
                }),
                this.setState(i);
        }
    }
    componentDidCatch(t, e) {
        var o, r;
        null == (o = (r = this.props).onError) || o.call(r, t, e);
    }
    componentDidUpdate(t, e) {
        let { didCatch: o } = this.state,
            { resetKeys: r } = this.props;
        if (
            o &&
            null !== e.error &&
            (function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t.length !== e.length || t.some((t, o) => !Object.is(t, e[o]));
            })(t.resetKeys, r)
        ) {
            var n, a;
            null == (n = (a = this.props).onReset) ||
                n.call(a, {
                    next: r,
                    prev: t.resetKeys,
                    reason: "keys",
                }),
                this.setState(i);
        }
    }
    render() {
        let { children: t, fallbackRender: e, FallbackComponent: o, fallback: i } = this.props,
            { didCatch: a, error: s } = this.state,
            l = t;
        if (a) {
            let t = {
                error: s,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if ("function" == typeof e) l = e(t);
            else if (o) l = (0, r.createElement)(o, t);
            else if (void 0 !== i) l = i;
            else throw s;
        }
        return (0, r.createElement)(
            n.Provider,
            {
                value: {
                    didCatch: a,
                    error: s,
                    resetErrorBoundary: this.resetErrorBoundary,
                },
            },
            l,
        );
    }
}
