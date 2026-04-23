n.d(e, { A: () => c });
var r = n(64700),
    o = n(238710),
    i = n(655972),
    a = n.n(i),
    u = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== n.g ? n.g : {};
let c =
    r.createContext ||
    function (t, e) {
        var n,
            i,
            c = "__create-react-context-" + (u.__global_unique_id__ = (u.__global_unique_id__ || 0) + 1) + "__",
            s = (function (t) {
                function n() {
                    var e, n, r;
                    return (
                        (e = t.apply(this, arguments) || this),
                        (n = e.props.value),
                        (r = []),
                        (e.emitter = {
                            on: function (t) {
                                r.push(t);
                            },
                            off: function (t) {
                                r = r.filter(function (e) {
                                    return e !== t;
                                });
                            },
                            get: function () {
                                return n;
                            },
                            set: function (t, e) {
                                (n = t),
                                    r.forEach(function (t) {
                                        return t(n, e);
                                    });
                            },
                        }),
                        e
                    );
                }
                (0, o.A)(n, t);
                var r = n.prototype;
                return (
                    (r.getChildContext = function () {
                        var t;
                        return ((t = {})[c] = this.emitter), t;
                    }),
                    (r.componentWillReceiveProps = function (t) {
                        if (this.props.value !== t.value) {
                            var n,
                                r = this.props.value,
                                o = t.value;
                            (r === o ? 0 !== r || 1 / r == 1 / o : r != r && o != o)
                                ? (n = 0)
                                : 0 != (n = ("function" == typeof e ? e(r, o) : 0x3fffffff) | 0) &&
                                  this.emitter.set(t.value, n);
                        }
                    }),
                    (r.render = function () {
                        return this.props.children;
                    }),
                    n
                );
            })(r.Component);
        ((n = {})[c] = a().object.isRequired), (s.childContextTypes = n);
        var l = (function (e) {
            function n() {
                var t;
                return (
                    (t = e.apply(this, arguments) || this),
                    (t.state = { value: t.getValue() }),
                    (t.onUpdate = function (e, n) {
                        (t.observedBits & n) != 0 && t.setState({ value: t.getValue() });
                    }),
                    t
                );
            }
            (0, o.A)(n, e);
            var r = n.prototype;
            return (
                (r.componentWillReceiveProps = function (t) {
                    var e = t.observedBits;
                    this.observedBits = null == e ? 0x3fffffff : e;
                }),
                (r.componentDidMount = function () {
                    this.context[c] && this.context[c].on(this.onUpdate);
                    var t = this.props.observedBits;
                    this.observedBits = null == t ? 0x3fffffff : t;
                }),
                (r.componentWillUnmount = function () {
                    this.context[c] && this.context[c].off(this.onUpdate);
                }),
                (r.getValue = function () {
                    return this.context[c] ? this.context[c].get() : t;
                }),
                (r.render = function () {
                    var t;
                    return (Array.isArray((t = this.props.children)) ? t[0] : t)(this.state.value);
                }),
                n
            );
        })(r.Component);
        return ((i = {})[c] = a().object), (l.contextTypes = i), { Provider: s, Consumer: l };
    };
