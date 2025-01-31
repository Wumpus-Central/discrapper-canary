n.d(t, { Z: () => p });
var i = n(192379),
    r = n(190031),
    a = n(476400),
    s = n.n(a),
    o = 1073741823,
    l = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== n.g ? n.g : {};
function u() {
    var e = '__global_unique_id__';
    return (l[e] = (l[e] || 0) + 1);
}
function c(e, t) {
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
        set: function (n, i) {
            (e = n),
                t.forEach(function (t) {
                    return t(e, i);
                });
        }
    };
}
function f(e) {
    return Array.isArray(e) ? e[0] : e;
}
function _(e, t) {
    var n,
        a,
        l = '__create-react-context-' + u() + '__',
        _ = (function (e) {
            function n() {
                var t;
                return (t = e.apply(this, arguments) || this), (t.emitter = d(t.props.value)), t;
            }
            (0, r.Z)(n, e);
            var i = n.prototype;
            return (
                (i.getChildContext = function () {
                    var e;
                    return ((e = {})[l] = this.emitter), e;
                }),
                (i.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                        var n,
                            i = this.props.value,
                            r = e.value;
                        c(i, r) ? (n = 0) : 0 != (n = ('function' == typeof t ? t(i, r) : o) | 0) && this.emitter.set(e.value, n);
                    }
                }),
                (i.render = function () {
                    return this.props.children;
                }),
                n
            );
        })(i.Component);
    _.childContextTypes = (((n = {})[l] = s().object.isRequired), n);
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
        (0, r.Z)(n, t);
        var i = n.prototype;
        return (
            (i.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? o : t;
            }),
            (i.componentDidMount = function () {
                this.context[l] && this.context[l].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? o : e;
            }),
            (i.componentWillUnmount = function () {
                this.context[l] && this.context[l].off(this.onUpdate);
            }),
            (i.getValue = function () {
                return this.context[l] ? this.context[l].get() : e;
            }),
            (i.render = function () {
                return f(this.props.children)(this.state.value);
            }),
            n
        );
    })(i.Component);
    return (
        (p.contextTypes = (((a = {})[l] = s().object), a)),
        {
            Provider: _,
            Consumer: p
        }
    );
}
let p = i.createContext || _;
