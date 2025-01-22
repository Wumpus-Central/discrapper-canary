var i = r(192379),
    a = r(190031),
    o = r(476400),
    s = r.n(o),
    l = 1073741823,
    u = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== r.g ? r.g : {};
function c() {
    var e = '__global_unique_id__';
    return (u[e] = (u[e] || 0) + 1);
}
function d(e, n) {
    return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n;
}
function f(e) {
    var n = [];
    return {
        on: function (e) {
            n.push(e);
        },
        off: function (e) {
            n = n.filter(function (n) {
                return n !== e;
            });
        },
        get: function () {
            return e;
        },
        set: function (r, i) {
            (e = r),
                n.forEach(function (n) {
                    return n(e, i);
                });
        }
    };
}
function p(e) {
    return Array.isArray(e) ? e[0] : e;
}
function h(e, n) {
    var r,
        o,
        u = '__create-react-context-' + c() + '__',
        h = (function (e) {
            function r() {
                var n;
                return (n = e.apply(this, arguments) || this), (n.emitter = f(n.props.value)), n;
            }
            (0, a.Z)(r, e);
            var i = r.prototype;
            return (
                (i.getChildContext = function () {
                    var e;
                    return ((e = {})[u] = this.emitter), e;
                }),
                (i.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                        var r,
                            i = this.props.value,
                            a = e.value;
                        if (d(i, a)) r = 0;
                        else {
                            r = 'function' == typeof n ? n(i, a) : l;
                            0 != (r |= 0) && this.emitter.set(e.value, r);
                        }
                    }
                }),
                (i.render = function () {
                    return this.props.children;
                }),
                r
            );
        })(i.Component);
    h.childContextTypes = (((r = {})[u] = s().object.isRequired), r);
    var _ = (function (n) {
        function r() {
            var e;
            return (
                (e = n.apply(this, arguments) || this),
                (e.state = { value: e.getValue() }),
                (e.onUpdate = function (n, r) {
                    ((0 | e.observedBits) & r) != 0 && e.setState({ value: e.getValue() });
                }),
                e
            );
        }
        (0, a.Z)(r, n);
        var i = r.prototype;
        return (
            (i.componentWillReceiveProps = function (e) {
                var n = e.observedBits;
                this.observedBits = null == n ? l : n;
            }),
            (i.componentDidMount = function () {
                this.context[u] && this.context[u].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? l : e;
            }),
            (i.componentWillUnmount = function () {
                this.context[u] && this.context[u].off(this.onUpdate);
            }),
            (i.getValue = function () {
                return this.context[u] ? this.context[u].get() : e;
            }),
            (i.render = function () {
                return p(this.props.children)(this.state.value);
            }),
            r
        );
    })(i.Component);
    return (
        (_.contextTypes = (((o = {})[u] = s().object), o)),
        {
            Provider: h,
            Consumer: _
        }
    );
}
var _ = i.createContext || h;
n.Z = _;
