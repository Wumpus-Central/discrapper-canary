var n = Symbol.for('react.element'),
    r = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    s = Symbol.for('react.provider'),
    l = Symbol.for('react.context'),
    c = Symbol.for('react.forward_ref'),
    u = Symbol.for('react.suspense'),
    d = Symbol.for('react.memo'),
    f = Symbol.for('react.lazy'),
    _ = Symbol.iterator;
function p(e) {
    return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (_ && e[_]) || e['@@iterator']) ? e : null;
}
var h = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    m = Object.assign,
    g = {};
function E(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
}
function b() {}
function y(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
}
(E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (E.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (b.prototype = E.prototype);
var O = (y.prototype = new b());
(O.constructor = y), m(O, E.prototype), (O.isPureReactComponent = !0);
var v = Array.isArray,
    I = Object.prototype.hasOwnProperty,
    S = { current: null },
    T = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function A(e, t, r) {
    var i,
        o = {},
        a = null,
        s = null;
    if (null != t) for (i in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = '' + t.key), t)) I.call(t, i) && !T.hasOwnProperty(i) && (o[i] = t[i]);
    var l = arguments.length - 2;
    if (1 === l) o.children = r;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
        o.children = c;
    }
    if (e && e.defaultProps) for (i in (l = e.defaultProps)) void 0 === o[i] && (o[i] = l[i]);
    return {
        $$typeof: n,
        type: e,
        key: a,
        ref: s,
        props: o,
        _owner: S.current
    };
}
function N(e, t) {
    return {
        $$typeof: n,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    };
}
function C(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === n;
}
function R(e) {
    var t = {
        '=': '=0',
        ':': '=2'
    };
    return (
        '$' +
        e.replace(/[=:]/g, function (e) {
            return t[e];
        })
    );
}
var P = /\/+/g;
function w(e, t) {
    return 'object' == typeof e && null !== e && null != e.key ? R('' + e.key) : t.toString(36);
}
function D(e, t, i, o, a) {
    var s = typeof e;
    ('undefined' === s || 'boolean' === s) && (e = null);
    var l = !1;
    if (null === e) l = !0;
    else
        switch (s) {
            case 'string':
            case 'number':
                l = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case n:
                    case r:
                        l = !0;
                }
        }
    if (l)
        return (
            (a = a((l = e))),
            (e = '' === o ? '.' + w(l, 0) : o),
            v(a)
                ? ((i = ''),
                  null != e && (i = e.replace(P, '$&/') + '/'),
                  D(a, t, i, '', function (e) {
                      return e;
                  }))
                : null != a && (C(a) && (a = N(a, i + (!a.key || (l && l.key === a.key) ? '' : ('' + a.key).replace(P, '$&/') + '/') + e)), t.push(a)),
            1
        );
    if (((l = 0), (o = '' === o ? '.' : o + ':'), v(e)))
        for (var c = 0; c < e.length; c++) {
            var u = o + w((s = e[c]), c);
            l += D(s, t, i, u, a);
        }
    else if ('function' == typeof (u = p(e))) for (e = u.call(e), c = 0; !(s = e.next()).done; ) (u = o + w((s = s.value), c++)), (l += D(s, t, i, u, a));
    else if ('object' === s) throw Error('Objects are not valid as a React child (found: ' + ('[object Object]' === (t = String(e)) ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) + '). If you meant to render a collection of children, use an array instead.');
    return l;
}
function L(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        D(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function x(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
            }
        ),
            -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var M = { current: null },
    k = { transition: null },
    j = {
        ReactCurrentDispatcher: M,
        ReactCurrentBatchConfig: k,
        ReactCurrentOwner: S
    };
function U() {
    throw Error('act(...) is not supported in production builds of React.');
}
(t.Children = {
    map: L,
    forEach: function (e, t, n) {
        L(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            L(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            L(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    }
}),
    (t.Component = E),
    (t.Fragment = i),
    (t.Profiler = a),
    (t.PureComponent = y),
    (t.StrictMode = o),
    (t.Suspense = u),
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
    (t.act = U),
    (t.cloneElement = function (e, t, r) {
        if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var i = m({}, e.props),
            o = e.key,
            a = e.ref,
            s = e._owner;
        if (null != t) {
            if ((void 0 !== t.ref && ((a = t.ref), (s = S.current)), void 0 !== t.key && (o = '' + t.key), e.type && e.type.defaultProps)) var l = e.type.defaultProps;
            for (c in t) I.call(t, c) && !T.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) i.children = r;
        else if (1 < c) {
            l = Array(c);
            for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
            i.children = l;
        }
        return {
            $$typeof: n,
            type: e.type,
            key: o,
            ref: a,
            props: i,
            _owner: s
        };
    }),
    (t.createContext = function (e) {
        return (
            ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }).Provider = {
                $$typeof: s,
                _context: e
            }),
            (e.Consumer = e)
        );
    }),
    (t.createElement = A),
    (t.createFactory = function (e) {
        var t = A.bind(null, e);
        return (t.type = e), t;
    }),
    (t.createRef = function () {
        return { current: null };
    }),
    (t.forwardRef = function (e) {
        return {
            $$typeof: c,
            render: e
        };
    }),
    (t.isValidElement = C),
    (t.lazy = function (e) {
        return {
            $$typeof: f,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: x
        };
    }),
    (t.memo = function (e, t) {
        return {
            $$typeof: d,
            type: e,
            compare: void 0 === t ? null : t
        };
    }),
    (t.startTransition = function (e) {
        var t = k.transition;
        k.transition = {};
        try {
            e();
        } finally {
            k.transition = t;
        }
    }),
    (t.unstable_act = U),
    (t.useCallback = function (e, t) {
        return M.current.useCallback(e, t);
    }),
    (t.useContext = function (e) {
        return M.current.useContext(e);
    }),
    (t.useDebugValue = function () {}),
    (t.useDeferredValue = function (e) {
        return M.current.useDeferredValue(e);
    }),
    (t.useEffect = function (e, t) {
        return M.current.useEffect(e, t);
    }),
    (t.useId = function () {
        return M.current.useId();
    }),
    (t.useImperativeHandle = function (e, t, n) {
        return M.current.useImperativeHandle(e, t, n);
    }),
    (t.useInsertionEffect = function (e, t) {
        return M.current.useInsertionEffect(e, t);
    }),
    (t.useLayoutEffect = function (e, t) {
        return M.current.useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
        return M.current.useMemo(e, t);
    }),
    (t.useReducer = function (e, t, n) {
        return M.current.useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
        return M.current.useRef(e);
    }),
    (t.useState = function (e) {
        return M.current.useState(e);
    }),
    (t.useSyncExternalStore = function (e, t, n) {
        return M.current.useSyncExternalStore(e, t, n);
    }),
    (t.useTransition = function () {
        return M.current.useTransition();
    }),
    (t.version = '18.3.1');
