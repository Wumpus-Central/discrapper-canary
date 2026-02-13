n.d(e, { A: () => s });
var r = n(64700),
    i = n(238710),
    o = n(655972),
    a = n.n(o),
    u = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== n.g ? n.g : {};
let s =
    r.createContext ||
    function (t, e) {
        var n,
            o,
            s = "__create-react-context-" + (u.__global_unique_id__ = (u.__global_unique_id__ || 0) + 1) + "__",
            c = (function (t) {
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
                (0, i.A)(n, t);
                var r = n.prototype;
                return (
                    (r.getChildContext = function () {
                        var t;
                        return ((t = {})[s] = this.emitter), t;
                    }),
                    (r.componentWillReceiveProps = function (t) {
                        if (this.props.value !== t.value) {
                            var n,
                                r = this.props.value,
                                i = t.value;
                            (r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i)
                                ? (n = 0)
                                : 0 != (n = ("function" == typeof e ? e(r, i) : 0x3fffffff) | 0) &&
                                  this.emitter.set(t.value, n);
                        }
                    }),
                    (r.render = function () {
                        return this.props.children;
                    }),
                    n
                );
            })(r.Component);
        ((n = {})[s] = a().object.isRequired), (c.childContextTypes = n);
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
            (0, i.A)(n, e);
            var r = n.prototype;
            return (
                (r.componentWillReceiveProps = function (t) {
                    var e = t.observedBits;
                    this.observedBits = null == e ? 0x3fffffff : e;
                }),
                (r.componentDidMount = function () {
                    this.context[s] && this.context[s].on(this.onUpdate);
                    var t = this.props.observedBits;
                    this.observedBits = null == t ? 0x3fffffff : t;
                }),
                (r.componentWillUnmount = function () {
                    this.context[s] && this.context[s].off(this.onUpdate);
                }),
                (r.getValue = function () {
                    return this.context[s] ? this.context[s].get() : t;
                }),
                (r.render = function () {
                    var t;
                    return (Array.isArray((t = this.props.children)) ? t[0] : t)(this.state.value);
                }),
                n
            );
        })(r.Component);
        return ((o = {})[s] = a().object), (l.contextTypes = o), { Provider: c, Consumer: l };
    };
