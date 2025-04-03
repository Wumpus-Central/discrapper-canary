n.d(t, { Z: () => p });
var r = n(192379),
    i = n(190031),
    o = n(476400),
    a = n.n(o),
    s = 1073741823,
    l = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== n.g ? n.g : {};
function c() {
    var e = '__global_unique_id__';
    return (l[e] = (l[e] || 0) + 1);
}
function u(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function d(e) {
    var t = [];
    return {
        on: function (e) {
            t.push(e);
        },
        off: function (e) {
            t = t.filter(function (t) {
                return t !== e;
            });
        },
        get: function () {
            return e;
        },
        set: function (n, r) {
            (e = n),
                t.forEach(function (t) {
                    return t(e, r);
                });
        }
    };
}
function f(e) {
    return Array.isArray(e) ? e[0] : e;
}
function _(e, t) {
    var n,
        o,
        l = '__create-react-context-' + c() + '__',
        _ = (function (e) {
            function n() {
                var t;
                return (t = e.apply(this, arguments) || this), (t.emitter = d(t.props.value)), t;
            }
            (0, i.Z)(n, e);
            var r = n.prototype;
            return (
                (r.getChildContext = function () {
                    var e;
                    return ((e = {})[l] = this.emitter), e;
                }),
                (r.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                        var n,
                            r = this.props.value,
                            i = e.value;
                        u(r, i) ? (n = 0) : 0 != (n = ('function' == typeof t ? t(r, i) : s) | 0) && this.emitter.set(e.value, n);
                    }
                }),
                (r.render = function () {
                    return this.props.children;
                }),
                n
            );
        })(r.Component);
    ((n = {})[l] = a().object.isRequired), (_.childContextTypes = n);
    var p = (function (t) {
        function n() {
            var e;
            return (
                (e = t.apply(this, arguments) || this),
                (e.state = { value: e.getValue() }),
                (e.onUpdate = function (t, n) {
                    ((0 | e.observedBits) & n) != 0 && e.setState({ value: e.getValue() });
                }),
                e
            );
        }
        (0, i.Z)(n, t);
        var r = n.prototype;
        return (
            (r.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? s : t;
            }),
            (r.componentDidMount = function () {
                this.context[l] && this.context[l].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? s : e;
            }),
            (r.componentWillUnmount = function () {
                this.context[l] && this.context[l].off(this.onUpdate);
            }),
            (r.getValue = function () {
                return this.context[l] ? this.context[l].get() : e;
            }),
            (r.render = function () {
                return f(this.props.children)(this.state.value);
            }),
            n
        );
    })(r.Component);
    return (
        ((o = {})[l] = a().object),
        (p.contextTypes = o),
        {
            Provider: _,
            Consumer: p
        }
    );
}
let p = r.createContext || _;
