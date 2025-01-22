var r = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    l = Symbol.for('react.provider'),
    u = Symbol.for('react.context'),
    c = Symbol.for('react.forward_ref'),
    d = Symbol.for('react.suspense'),
    f = Symbol.for('react.memo'),
    p = Symbol.for('react.lazy'),
    h = Symbol.iterator;
function _(e) {
    return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (h && e[h]) || e['@@iterator']) ? e : null;
}
var m = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    g = Object.assign,
    E = {};
function v(e, n, r) {
    (this.props = e), (this.context = n), (this.refs = E), (this.updater = r || m);
}
function y() {}
function b(e, n, r) {
    (this.props = e), (this.context = n), (this.refs = E), (this.updater = r || m);
}
(v.prototype.isReactComponent = {}),
    (v.prototype.setState = function (e, n) {
        if ('object' != typeof e && 'function' != typeof e && null != e) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
        this.updater.enqueueSetState(this, e, n, 'setState');
    }),
    (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (y.prototype = v.prototype);
var I = (b.prototype = new y());
(I.constructor = b), g(I, v.prototype), (I.isPureReactComponent = !0);
var T = Array.isArray,
    S = Object.prototype.hasOwnProperty,
    A = { current: null },
    C = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function N(e, n, i) {
    var a,
        o = {},
        s = null,
        l = null;
    if (null != n) for (a in (void 0 !== n.ref && (l = n.ref), void 0 !== n.key && (s = '' + n.key), n)) S.call(n, a) && !C.hasOwnProperty(a) && (o[a] = n[a]);
    var u = arguments.length - 2;
    if (1 === u) o.children = i;
    else if (1 < u) {
        for (var c = Array(u), d = 0; d < u; d++) c[d] = arguments[d + 2];
        o.children = c;
    }
    if (e && e.defaultProps) for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
    return {
        $$typeof: r,
        type: e,
        key: s,
        ref: l,
        props: o,
        _owner: A.current
    };
}
function R(e, n) {
    return {
        $$typeof: r,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    };
}
function O(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === r;
}
function D(e) {
    var n = {
        '=': '=0',
        ':': '=2'
    };
    return (
        '$' +
        e.replace(/[=:]/g, function (e) {
            return n[e];
        })
    );
}
var x = /\/+/g;
function L(e, n) {
    return 'object' == typeof e && null !== e && null != e.key ? D('' + e.key) : n.toString(36);
}
function w(e, n, a, o, s) {
    var l = typeof e;
    ('undefined' === l || 'boolean' === l) && (e = null);
    var u = !1;
    if (null === e) u = !0;
    else
        switch (l) {
            case 'string':
            case 'number':
                u = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case r:
                    case i:
                        u = !0;
                }
        }
    if (u)
        return (
            (s = s((u = e))),
            (e = '' === o ? '.' + L(u, 0) : o),
            T(s)
                ? ((a = ''),
                  null != e && (a = e.replace(x, '$&/') + '/'),
                  w(s, n, a, '', function (e) {
                      return e;
                  }))
                : null != s && (O(s) && (s = R(s, a + (!s.key || (u && u.key === s.key) ? '' : ('' + s.key).replace(x, '$&/') + '/') + e)), n.push(s)),
            1
        );
    if (((u = 0), (o = '' === o ? '.' : o + ':'), T(e)))
        for (var c = 0; c < e.length; c++) {
            var d = o + L((l = e[c]), c);
            u += w(l, n, a, d, s);
        }
    else if ('function' == typeof (d = _(e))) for (e = d.call(e), c = 0; !(l = e.next()).done; ) (d = o + L((l = l.value), c++)), (u += w(l, n, a, d, s));
    else if ('object' === l) throw Error('Objects are not valid as a React child (found: ' + ('[object Object]' === (n = String(e)) ? 'object with keys {' + Object.keys(e).join(', ') + '}' : n) + '). If you meant to render a collection of children, use an array instead.');
    return u;
}
function P(e, n, r) {
    if (null == e) return e;
    var i = [],
        a = 0;
    return (
        w(e, i, '', '', function (e) {
            return n.call(r, e, a++);
        }),
        i
    );
}
function M(e) {
    if (-1 === e._status) {
        var n = e._result;
        (n = n()).then(
            function (n) {
                (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = n));
            },
            function (n) {
                (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = n));
            }
        ),
            -1 === e._status && ((e._status = 0), (e._result = n));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var k = { current: null },
    U = { transition: null },
    B = {
        ReactCurrentDispatcher: k,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: A
    };
function G() {
    throw Error('act(...) is not supported in production builds of React.');
}
(n.Children = {
    map: P,
    forEach: function (e, n, r) {
        P(
            e,
            function () {
                n.apply(this, arguments);
            },
            r
        );
    },
    count: function (e) {
        var n = 0;
        return (
            P(e, function () {
                n++;
            }),
            n
        );
    },
    toArray: function (e) {
        return (
            P(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!O(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    }
}),
    (n.Component = v),
    (n.Fragment = a),
    (n.Profiler = s),
    (n.PureComponent = b),
    (n.StrictMode = o),
    (n.Suspense = d),
    (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
    (n.act = G),
    (n.cloneElement = function (e, n, i) {
        if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var a = g({}, e.props),
            o = e.key,
            s = e.ref,
            l = e._owner;
        if (null != n) {
            if ((void 0 !== n.ref && ((s = n.ref), (l = A.current)), void 0 !== n.key && (o = '' + n.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
            for (c in n) S.call(n, c) && !C.hasOwnProperty(c) && (a[c] = void 0 === n[c] && void 0 !== u ? u[c] : n[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) a.children = i;
        else if (1 < c) {
            u = Array(c);
            for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
            a.children = u;
        }
        return {
            $$typeof: r,
            type: e.type,
            key: o,
            ref: s,
            props: a,
            _owner: l
        };
    }),
    (n.createContext = function (e) {
        return (
            ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }).Provider = {
                $$typeof: l,
                _context: e
            }),
            (e.Consumer = e)
        );
    }),
    (n.createElement = N),
    (n.createFactory = function (e) {
        var n = N.bind(null, e);
        return (n.type = e), n;
    }),
    (n.createRef = function () {
        return { current: null };
    }),
    (n.forwardRef = function (e) {
        return {
            $$typeof: c,
            render: e
        };
    }),
    (n.isValidElement = O),
    (n.lazy = function (e) {
        return {
            $$typeof: p,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: M
        };
    }),
    (n.memo = function (e, n) {
        return {
            $$typeof: f,
            type: e,
            compare: void 0 === n ? null : n
        };
    }),
    (n.startTransition = function (e) {
        var n = U.transition;
        U.transition = {};
        try {
            e();
        } finally {
            U.transition = n;
        }
    }),
    (n.unstable_act = G),
    (n.useCallback = function (e, n) {
        return k.current.useCallback(e, n);
    }),
    (n.useContext = function (e) {
        return k.current.useContext(e);
    }),
    (n.useDebugValue = function () {}),
    (n.useDeferredValue = function (e) {
        return k.current.useDeferredValue(e);
    }),
    (n.useEffect = function (e, n) {
        return k.current.useEffect(e, n);
    }),
    (n.useId = function () {
        return k.current.useId();
    }),
    (n.useImperativeHandle = function (e, n, r) {
        return k.current.useImperativeHandle(e, n, r);
    }),
    (n.useInsertionEffect = function (e, n) {
        return k.current.useInsertionEffect(e, n);
    }),
    (n.useLayoutEffect = function (e, n) {
        return k.current.useLayoutEffect(e, n);
    }),
    (n.useMemo = function (e, n) {
        return k.current.useMemo(e, n);
    }),
    (n.useReducer = function (e, n, r) {
        return k.current.useReducer(e, n, r);
    }),
    (n.useRef = function (e) {
        return k.current.useRef(e);
    }),
    (n.useState = function (e) {
        return k.current.useState(e);
    }),
    (n.useSyncExternalStore = function (e, n, r) {
        return k.current.useSyncExternalStore(e, n, r);
    }),
    (n.useTransition = function () {
        return k.current.useTransition();
    }),
    (n.version = '18.3.1');
