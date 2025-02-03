var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    a = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    o = Symbol.for('react.provider'),
    l = Symbol.for('react.context'),
    u = Symbol.for('react.forward_ref'),
    c = Symbol.for('react.suspense'),
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
function v() {}
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
    (v.prototype = E.prototype);
var I = (y.prototype = new v());
(I.constructor = y), m(I, E.prototype), (I.isPureReactComponent = !0);
var b = Array.isArray,
    T = Object.prototype.hasOwnProperty,
    S = { current: null },
    A = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function N(e, t, i) {
    var r,
        a = {},
        s = null,
        o = null;
    if (null != t) for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = '' + t.key), t)) T.call(t, r) && !A.hasOwnProperty(r) && (a[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) a.children = i;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        a.children = u;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
    return {
        $$typeof: n,
        type: e,
        key: s,
        ref: o,
        props: a,
        _owner: S.current
    };
}
function C(e, t) {
    return {
        $$typeof: n,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    };
}
function R(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === n;
}
function O(e) {
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
var D = /\/+/g;
function x(e, t) {
    return 'object' == typeof e && null !== e && null != e.key ? O('' + e.key) : t.toString(36);
}
function L(e, t, r, a, s) {
    var o = typeof e;
    ('undefined' === o || 'boolean' === o) && (e = null);
    var l = !1;
    if (null === e) l = !0;
    else
        switch (o) {
            case 'string':
            case 'number':
                l = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case n:
                    case i:
                        l = !0;
                }
        }
    if (l)
        return (
            (s = s((l = e))),
            (e = '' === a ? '.' + x(l, 0) : a),
            b(s)
                ? ((r = ''),
                  null != e && (r = e.replace(D, '$&/') + '/'),
                  L(s, t, r, '', function (e) {
                      return e;
                  }))
                : null != s && (R(s) && (s = C(s, r + (!s.key || (l && l.key === s.key) ? '' : ('' + s.key).replace(D, '$&/') + '/') + e)), t.push(s)),
            1
        );
    if (((l = 0), (a = '' === a ? '.' : a + ':'), b(e)))
        for (var u = 0; u < e.length; u++) {
            var c = a + x((o = e[u]), u);
            l += L(o, t, r, c, s);
        }
    else if ('function' == typeof (c = p(e))) for (e = c.call(e), u = 0; !(o = e.next()).done; ) (c = a + x((o = o.value), u++)), (l += L(o, t, r, c, s));
    else if ('object' === o) throw Error('Objects are not valid as a React child (found: ' + ('[object Object]' === (t = String(e)) ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) + '). If you meant to render a collection of children, use an array instead.');
    return l;
}
function P(e, t, n) {
    if (null == e) return e;
    var i = [],
        r = 0;
    return (
        L(e, i, '', '', function (e) {
            return t.call(n, e, r++);
        }),
        i
    );
}
function w(e) {
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
    U = {
        ReactCurrentDispatcher: M,
        ReactCurrentBatchConfig: k,
        ReactCurrentOwner: S
    };
function G() {
    throw Error('act(...) is not supported in production builds of React.');
}
(t.Children = {
    map: P,
    forEach: function (e, t, n) {
        P(
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
            P(e, function () {
                t++;
            }),
            t
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
        if (!R(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    }
}),
    (t.Component = E),
    (t.Fragment = r),
    (t.Profiler = s),
    (t.PureComponent = y),
    (t.StrictMode = a),
    (t.Suspense = c),
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (t.act = G),
    (t.cloneElement = function (e, t, i) {
        if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = m({}, e.props),
            a = e.key,
            s = e.ref,
            o = e._owner;
        if (null != t) {
            if ((void 0 !== t.ref && ((s = t.ref), (o = S.current)), void 0 !== t.key && (a = '' + t.key), e.type && e.type.defaultProps)) var l = e.type.defaultProps;
            for (u in t) T.call(t, u) && !A.hasOwnProperty(u) && (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = i;
        else if (1 < u) {
            l = Array(u);
            for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
            r.children = l;
        }
        return {
            $$typeof: n,
            type: e.type,
            key: a,
            ref: s,
            props: r,
            _owner: o
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
                $$typeof: o,
                _context: e
            }),
            (e.Consumer = e)
        );
    }),
    (t.createElement = N),
    (t.createFactory = function (e) {
        var t = N.bind(null, e);
        return (t.type = e), t;
    }),
    (t.createRef = function () {
        return { current: null };
    }),
    (t.forwardRef = function (e) {
        return {
            $$typeof: u,
            render: e
        };
    }),
    (t.isValidElement = R),
    (t.lazy = function (e) {
        return {
            $$typeof: f,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: w
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
    (t.unstable_act = G),
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
