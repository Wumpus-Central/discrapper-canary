r.d(t, { QP: () => eV, eV: () => n });
let n = (e, t) => ({ event: e, check: t });
var i,
    o,
    a = r(582128),
    s = r(477900),
    u = r(321733),
    c = "dnd-core/INIT_COORDS",
    l = "dnd-core/BEGIN_DRAG",
    d = "dnd-core/PUBLISH_DRAG_SOURCE",
    f = "dnd-core/HOVER",
    h = "dnd-core/DROP",
    g = "dnd-core/END_DRAG";
function p(e, t) {
    return { type: c, payload: { sourceClientOffset: t || null, clientOffset: e || null } };
}
function v(e) {
    return (v =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function y(e) {
    return "object" === v(e);
}
var b = { type: c, payload: { clientOffset: null, sourceClientOffset: null } };
function m(e, t) {
    return null === t
        ? null === e
        : Array.isArray(e)
          ? e.some(function (e) {
                return e === t;
            })
          : e === t;
}
function O(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? O(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var E = (function () {
    var e;
    function t(e, r) {
        var n = this;
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
                var e = n.store.getState().refCount > 0;
                n.backend &&
                    (e && !n.isSetUp
                        ? (n.backend.setup(), (n.isSetUp = !0))
                        : !e && n.isSetUp && (n.backend.teardown(), (n.isSetUp = !1)));
            }),
            (this.store = e),
            (this.monitor = r),
            e.subscribe(this.handleRefCountChange);
    }
    return (
        (e = [
            {
                key: "receiveBackend",
                value: function (e) {
                    this.backend = e;
                },
            },
            {
                key: "getMonitor",
                value: function () {
                    return this.monitor;
                },
            },
            {
                key: "getBackend",
                value: function () {
                    return this.backend;
                },
            },
            {
                key: "getRegistry",
                value: function () {
                    return this.monitor.registry;
                },
            },
            {
                key: "getActions",
                value: function () {
                    var e,
                        t,
                        r,
                        n,
                        i,
                        o = this,
                        a = this.store.dispatch,
                        s = {
                            beginDrag:
                                ((e = this),
                                function () {
                                    var t,
                                        r,
                                        n,
                                        i,
                                        o,
                                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        s =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : { publishSource: !0 },
                                        c = s.publishSource,
                                        d = s.clientOffset,
                                        f = s.getSourceClientOffset,
                                        h = e.getMonitor(),
                                        g = e.getRegistry();
                                    e.dispatch(p(d)),
                                        (t = a),
                                        (r = h),
                                        (n = g),
                                        (0, u.V)(!r.isDragging(), "Cannot call beginDrag while dragging."),
                                        t.forEach(function (e) {
                                            (0, u.V)(n.getSource(e), "Expected sourceIds to be registered.");
                                        });
                                    var v = (function (e, t) {
                                        for (var r = null, n = e.length - 1; n >= 0; n--)
                                            if (t.canDragSource(e[n])) {
                                                r = e[n];
                                                break;
                                            }
                                        return r;
                                    })(a, h);
                                    if (null === v) return void e.dispatch(b);
                                    var m = null;
                                    if (d) {
                                        if (!f) throw Error("getSourceClientOffset must be defined");
                                        (i = f),
                                            (0, u.V)(
                                                "function" == typeof i,
                                                "When clientOffset is provided, getSourceClientOffset must be a function.",
                                            ),
                                            (m = f(v));
                                    }
                                    e.dispatch(p(d, m));
                                    var O = g.getSource(v).beginDrag(h, v);
                                    if (null != O) {
                                        return (
                                            (o = O),
                                            (0, u.V)(y(o), "Item must be an object."),
                                            g.pinSource(v),
                                            {
                                                type: l,
                                                payload: {
                                                    itemType: g.getSourceType(v),
                                                    item: O,
                                                    sourceId: v,
                                                    clientOffset: d || null,
                                                    sourceClientOffset: m || null,
                                                    isSourcePublic: !!(void 0 === c || c),
                                                },
                                            }
                                        );
                                    }
                                }),
                            publishDragSource:
                                ((t = this),
                                function () {
                                    if (t.getMonitor().isDragging()) return { type: d };
                                }),
                            hover:
                                ((r = this),
                                function (e) {
                                    var t,
                                        n,
                                        i,
                                        o,
                                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        s = a.clientOffset;
                                    (t = e), (0, u.V)(Array.isArray(t), "Expected targetIds to be an array.");
                                    var c = e.slice(0),
                                        l = r.getMonitor(),
                                        d = r.getRegistry();
                                    return (
                                        (function (e, t, r) {
                                            (0, u.V)(t.isDragging(), "Cannot call hover while not dragging."),
                                                (0, u.V)(!t.didDrop(), "Cannot call hover after drop.");
                                            for (var n = 0; n < e.length; n++) {
                                                var i = e[n];
                                                (0, u.V)(
                                                    e.lastIndexOf(i) === n,
                                                    "Expected targetIds to be unique in the passed array.",
                                                );
                                                var o = r.getTarget(i);
                                                (0, u.V)(o, "Expected targetIds to be registered.");
                                            }
                                        })(c, l, d),
                                        (function (e, t, r) {
                                            for (var n = e.length - 1; n >= 0; n--) {
                                                var i = e[n];
                                                m(t.getTargetType(i), r) || e.splice(n, 1);
                                            }
                                        })(c, d, l.getItemType()),
                                        (n = c),
                                        (i = l),
                                        (o = d),
                                        n.forEach(function (e) {
                                            o.getTarget(e).hover(i, e);
                                        }),
                                        { type: f, payload: { targetIds: c, clientOffset: s || null } }
                                    );
                                }),
                            drop:
                                ((n = this),
                                function () {
                                    var e,
                                        t,
                                        r,
                                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        o = n.getMonitor(),
                                        a = n.getRegistry();
                                    (e = o),
                                        (0, u.V)(e.isDragging(), "Cannot call drop while not dragging."),
                                        (0, u.V)(!e.didDrop(), "Cannot call drop twice during one drag operation."),
                                        ((r = (t = o).getTargetIds().filter(t.canDropOnTarget, t)).reverse(),
                                        r).forEach(function (e, t) {
                                            var r,
                                                s,
                                                c,
                                                l,
                                                d,
                                                f,
                                                g,
                                                p =
                                                    ((r = e),
                                                    (s = t),
                                                    (c = a),
                                                    (l = o),
                                                    (g = f = (d = c.getTarget(r)) ? d.drop(l, r) : void 0),
                                                    (0, u.V)(
                                                        void 0 === g || y(g),
                                                        "Drop result must either be an object or undefined.",
                                                    ),
                                                    void 0 === f && (f = 0 === s ? {} : l.getDropResult()),
                                                    f),
                                                v = { type: h, payload: { dropResult: w(w({}, i), p) } };
                                            n.dispatch(v);
                                        });
                                }),
                            endDrag:
                                ((i = this),
                                function () {
                                    var e,
                                        t = i.getMonitor(),
                                        r = i.getRegistry();
                                    (e = t), (0, u.V)(e.isDragging(), "Cannot call endDrag while not dragging.");
                                    var n = t.getSourceId();
                                    return (
                                        null != n && (r.getSource(n, !0).endDrag(t, n), r.unpinSource()), { type: g }
                                    );
                                }),
                        };
                    return Object.keys(s).reduce(function (e, t) {
                        var r = s[t];
                        return (
                            (e[t] = function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                var i = r.apply(o, t);
                                void 0 !== i && a(i);
                            }),
                            e
                        );
                    }, {});
                },
            },
            {
                key: "dispatch",
                value: function (e) {
                    this.store.dispatch(e);
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(t.prototype, e),
        t
    );
})();
function S(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
r(416886);
var D = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    T = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    I = {
        INIT: "@@redux/INIT" + T(),
        REPLACE: "@@redux/REPLACE" + T(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + T();
        },
    },
    k = function (e, t) {
        return e === t;
    };
function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? C(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : C(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var x = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null },
    N = "dnd-core/ADD_SOURCE",
    j = "dnd-core/ADD_TARGET",
    A = "dnd-core/REMOVE_SOURCE",
    L = "dnd-core/REMOVE_TARGET";
function R(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? R(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : R(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var M = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
    },
    V = [],
    U = [];
function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? H(Object(r), !0).forEach(function (t) {
                  var n, i, o;
                  (n = e),
                      (i = t),
                      (o = r[t]),
                      i in n
                          ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function B() {
    var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (function () {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var e,
                t,
                r,
                n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
                case f:
                    break;
                case N:
                case j:
                case L:
                case A:
                    return V;
                default:
                    return U;
            }
            var i = n.payload,
                o = i.targetIds,
                a = void 0 === o ? [] : o,
                s = i.prevTargetIds,
                u = void 0 === s ? [] : s,
                c =
                    ((e = new Map()),
                    (t = function (t) {
                        e.set(t, e.has(t) ? e.get(t) + 1 : 1);
                    }),
                    a.forEach(t),
                    u.forEach(t),
                    (r = []),
                    e.forEach(function (e, t) {
                        1 === e && r.push(t);
                    }),
                    r);
            if (
                !(
                    c.length > 0 ||
                    !(function (e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k;
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
                        return !0;
                    })(a, u)
                )
            )
                return V;
            var l = u[u.length - 1],
                d = a[a.length - 1];
            return l !== d && (l && c.push(l), d && c.push(d)), c;
        })(t.dirtyHandlerIds, {
            type: r.type,
            payload: W(
                W({}, r.payload),
                {},
                {
                    prevTargetIds:
                        ((e = []),
                        "dragOperation.targetIds".split(".").reduce(function (t, r) {
                            return t && t[r] ? t[r] : e || null;
                        }, t)),
                },
            ),
        }),
        dragOffset: (function () {
            var e,
                t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = n.payload;
            switch (n.type) {
                case c:
                case l:
                    return {
                        initialSourceClientOffset: i.sourceClientOffset,
                        initialClientOffset: i.clientOffset,
                        clientOffset: i.clientOffset,
                    };
                case f:
                    if (
                        ((e = r.clientOffset),
                        (t = i.clientOffset),
                        (!e && !t) || (e && t && e.x === t.x && e.y === t.y))
                    )
                        return r;
                    return P(P({}, r), {}, { clientOffset: i.clientOffset });
                case g:
                case h:
                    return x;
                default:
                    return r;
            }
        })(t.dragOffset, r),
        refCount: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case N:
                case j:
                    return e + 1;
                case A:
                case L:
                    return e - 1;
                default:
                    return e;
            }
        })(t.refCount, r),
        dragOperation: (function () {
            var e,
                t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = n.payload;
            switch (n.type) {
                case l:
                    return _(
                        _({}, r),
                        {},
                        {
                            itemType: i.itemType,
                            item: i.item,
                            sourceId: i.sourceId,
                            isSourcePublic: i.isSourcePublic,
                            dropResult: null,
                            didDrop: !1,
                        },
                    );
                case d:
                    return _(_({}, r), {}, { isSourcePublic: !0 });
                case f:
                    return _(_({}, r), {}, { targetIds: i.targetIds });
                case L:
                    if (-1 === r.targetIds.indexOf(i.targetId)) return r;
                    return _(
                        _({}, r),
                        {},
                        {
                            targetIds:
                                ((e = r.targetIds),
                                (t = i.targetId),
                                e.filter(function (e) {
                                    return e !== t;
                                })),
                        },
                    );
                case h:
                    return _(_({}, r), {}, { dropResult: i.dropResult, didDrop: !0, targetIds: [] });
                case g:
                    return _(
                        _({}, r),
                        {},
                        {
                            itemType: null,
                            item: null,
                            sourceId: null,
                            dropResult: null,
                            didDrop: !1,
                            isSourcePublic: null,
                            targetIds: [],
                        },
                    );
                default:
                    return r;
            }
        })(t.dragOperation, r),
        stateId: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e + 1;
        })(t.stateId),
    };
}
function G(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
(V.__IS_NONE__ = !0), (U.__IS_ALL__ = !0);
var X = (function () {
        var e;
        function t(e, r) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.store = e), (this.registry = r);
        }
        return (
            (e = [
                {
                    key: "subscribeToStateChange",
                    value: function (e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                            n = r.handlerIds;
                        (0, u.V)("function" == typeof e, "listener must be a function."),
                            (0, u.V)(
                                void 0 === n || Array.isArray(n),
                                "handlerIds, when specified, must be an array of strings.",
                            );
                        var i = this.store.getState().stateId;
                        return this.store.subscribe(function () {
                            var r = t.store.getState(),
                                o = r.stateId;
                            try {
                                o === i ||
                                    (o === i + 1 &&
                                        !(function (e, t) {
                                            return (
                                                e !== V &&
                                                (e === U ||
                                                    void 0 === t ||
                                                    t.filter(function (t) {
                                                        return e.indexOf(t) > -1;
                                                    }).length > 0)
                                            );
                                        })(r.dirtyHandlerIds, n)) ||
                                    e();
                            } finally {
                                i = o;
                            }
                        });
                    },
                },
                {
                    key: "subscribeToOffsetChange",
                    value: function (e) {
                        var t = this;
                        (0, u.V)("function" == typeof e, "listener must be a function.");
                        var r = this.store.getState().dragOffset;
                        return this.store.subscribe(function () {
                            var n = t.store.getState().dragOffset;
                            n !== r && ((r = n), e());
                        });
                    },
                },
                {
                    key: "canDragSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e);
                        return (
                            (0, u.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !this.isDragging() && t.canDrag(this, e)
                        );
                    },
                },
                {
                    key: "canDropOnTarget",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getTarget(e);
                        return (
                            (0, u.V)(t, "Expected to find a valid target. targetId=".concat(e)),
                            !(!this.isDragging() || this.didDrop()) &&
                                m(this.registry.getTargetType(e), this.getItemType()) &&
                                t.canDrop(this, e)
                        );
                    },
                },
                {
                    key: "isDragging",
                    value: function () {
                        return !!this.getItemType();
                    },
                },
                {
                    key: "isDraggingSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e, !0);
                        return (
                            (0, u.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !!this.isDragging() &&
                                !!this.isSourcePublic() &&
                                this.registry.getSourceType(e) === this.getItemType() &&
                                t.isDragging(this, e)
                        );
                    },
                },
                {
                    key: "isOverTarget",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
                        if (!e) return !1;
                        var r = t.shallow;
                        if (!this.isDragging()) return !1;
                        var n = this.registry.getTargetType(e),
                            i = this.getItemType();
                        if (i && !m(n, i)) return !1;
                        var o = this.getTargetIds();
                        if (!o.length) return !1;
                        var a = o.indexOf(e);
                        return r ? a === o.length - 1 : a > -1;
                    },
                },
                {
                    key: "getItemType",
                    value: function () {
                        return this.store.getState().dragOperation.itemType;
                    },
                },
                {
                    key: "getItem",
                    value: function () {
                        return this.store.getState().dragOperation.item;
                    },
                },
                {
                    key: "getSourceId",
                    value: function () {
                        return this.store.getState().dragOperation.sourceId;
                    },
                },
                {
                    key: "getTargetIds",
                    value: function () {
                        return this.store.getState().dragOperation.targetIds;
                    },
                },
                {
                    key: "getDropResult",
                    value: function () {
                        return this.store.getState().dragOperation.dropResult;
                    },
                },
                {
                    key: "didDrop",
                    value: function () {
                        return this.store.getState().dragOperation.didDrop;
                    },
                },
                {
                    key: "isSourcePublic",
                    value: function () {
                        return !!this.store.getState().dragOperation.isSourcePublic;
                    },
                },
                {
                    key: "getInitialClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialClientOffset;
                    },
                },
                {
                    key: "getInitialSourceClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialSourceClientOffset;
                    },
                },
                {
                    key: "getClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.clientOffset;
                    },
                },
                {
                    key: "getSourceClientOffset",
                    value: function () {
                        return (function (e) {
                            var t = e.clientOffset,
                                r = e.initialClientOffset,
                                n = e.initialSourceClientOffset;
                            return t && r && n ? G({ x: t.x + n.x, y: t.y + n.y }, r) : null;
                        })(this.store.getState().dragOffset);
                    },
                },
                {
                    key: "getDifferenceFromInitialOffset",
                    value: function () {
                        var e, t, r;
                        return (
                            (t = (e = this.store.getState().dragOffset).clientOffset),
                            (r = e.initialClientOffset),
                            t && r ? G(t, r) : null
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })(),
    Y = 0;
function F(e) {
    return (F =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function q(e, t) {
    t && Array.isArray(e)
        ? e.forEach(function (e) {
              return q(e, !1);
          })
        : (0, u.V)(
              "string" == typeof e || "symbol" === F(e),
              t
                  ? "Type can only be a string, a symbol, or an array of either."
                  : "Type can only be a string or a symbol.",
          );
}
((i = o || (o = {})).SOURCE = "SOURCE"), (i.TARGET = "TARGET");
let K = "u" > typeof global ? global : self,
    z = K.MutationObserver || K.WebKitMutationObserver;
function J(e) {
    return function () {
        let t = setTimeout(n, 0),
            r = setInterval(n, 50);
        function n() {
            clearTimeout(t), clearInterval(r), e();
        }
    };
}
let $ =
    "function" == typeof z
        ? function (e) {
              let t = 1,
                  r = new z(e),
                  n = document.createTextNode("");
              return (
                  r.observe(n, { characterData: !0 }),
                  function () {
                      n.data = t = -t;
                  }
              );
          }
        : J;
class Q {
    call() {
        try {
            this.task && this.task();
        } catch (e) {
            this.onError(e);
        } finally {
            (this.task = null), this.release(this);
        }
    }
    constructor(e, t) {
        (this.onError = e), (this.release = t), (this.task = null);
    }
}
let Z = new (class {
        enqueueTask(e) {
            let { queue: t, requestFlush: r } = this;
            t.length || (r(), (this.flushing = !0)), (t[t.length] = e);
        }
        constructor() {
            (this.queue = []),
                (this.pendingErrors = []),
                (this.flushing = !1),
                (this.index = 0),
                (this.capacity = 1024),
                (this.flush = () => {
                    let { queue: e } = this;
                    for (; this.index < e.length; ) {
                        let t = this.index;
                        if ((this.index++, e[t].call(), this.index > this.capacity)) {
                            for (let t = 0, r = e.length - this.index; t < r; t++) e[t] = e[t + this.index];
                            (e.length -= this.index), (this.index = 0);
                        }
                    }
                    (e.length = 0), (this.index = 0), (this.flushing = !1);
                }),
                (this.registerPendingError = (e) => {
                    this.pendingErrors.push(e), this.requestErrorThrow();
                }),
                (this.requestFlush = $(this.flush)),
                (this.requestErrorThrow = J(() => {
                    if (this.pendingErrors.length) throw this.pendingErrors.shift();
                }));
        }
    })(),
    ee = new (class {
        create(e) {
            let t = this.freeTasks,
                r = t.length ? t.pop() : new Q(this.onError, (e) => (t[t.length] = e));
            return (r.task = e), r;
        }
        constructor(e) {
            (this.onError = e), (this.freeTasks = []);
        }
    })(Z.registerPendingError);
function et(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function er(e) {
    switch (e[0]) {
        case "S":
            return o.SOURCE;
        case "T":
            return o.TARGET;
        default:
            (0, u.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function en(e, t) {
    var r = e.entries(),
        n = !1;
    do {
        var i,
            o = r.next(),
            a = o.done;
        if (
            ((function (e) {
                if (Array.isArray(e)) return e;
            })((i = o.value)) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (
                                var o, a = e[Symbol.iterator]();
                                !(r = (o = a.next()).done) && (t.push(o.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (i = e);
                        } finally {
                            try {
                                r || null == a.return || a.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return t;
                    }
                })(i) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return et(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return et(e, 2);
                    }
                })(i) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[1] === t
        )
            return !0;
        n = !!a;
    } while (!n);
    return !1;
}
var ei = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.types = new Map()),
                (this.dragSources = new Map()),
                (this.dropTargets = new Map()),
                (this.pinnedSourceId = null),
                (this.pinnedSource = null),
                (this.store = e);
        }
        return (
            (e = [
                {
                    key: "addSource",
                    value: function (e, t) {
                        q(e),
                            (0, u.V)("function" == typeof t.canDrag, "Expected canDrag to be a function."),
                            (0, u.V)("function" == typeof t.beginDrag, "Expected beginDrag to be a function."),
                            (0, u.V)("function" == typeof t.endDrag, "Expected endDrag to be a function.");
                        var r = this.addHandler(o.SOURCE, e, t);
                        return this.store.dispatch({ type: N, payload: { sourceId: r } }), r;
                    },
                },
                {
                    key: "addTarget",
                    value: function (e, t) {
                        q(e, !0),
                            (0, u.V)("function" == typeof t.canDrop, "Expected canDrop to be a function."),
                            (0, u.V)("function" == typeof t.hover, "Expected hover to be a function."),
                            (0, u.V)("function" == typeof t.drop, "Expected beginDrag to be a function.");
                        var r = this.addHandler(o.TARGET, e, t);
                        return this.store.dispatch({ type: j, payload: { targetId: r } }), r;
                    },
                },
                {
                    key: "containsHandler",
                    value: function (e) {
                        return en(this.dragSources, e) || en(this.dropTargets, e);
                    },
                },
                {
                    key: "getSource",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (
                            (0, u.V)(this.isSourceId(e), "Expected a valid source ID."),
                            t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
                        );
                    },
                },
                {
                    key: "getTarget",
                    value: function (e) {
                        return (0, u.V)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
                    },
                },
                {
                    key: "getSourceType",
                    value: function (e) {
                        return (0, u.V)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
                    },
                },
                {
                    key: "getTargetType",
                    value: function (e) {
                        return (0, u.V)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
                    },
                },
                {
                    key: "isSourceId",
                    value: function (e) {
                        return er(e) === o.SOURCE;
                    },
                },
                {
                    key: "isTargetId",
                    value: function (e) {
                        return er(e) === o.TARGET;
                    },
                },
                {
                    key: "removeSource",
                    value: function (e) {
                        var t = this;
                        (0, u.V)(this.getSource(e), "Expected an existing source."),
                            this.store.dispatch({ type: A, payload: { sourceId: e } }),
                            Z.enqueueTask(
                                ee.create(function () {
                                    t.dragSources.delete(e), t.types.delete(e);
                                }),
                            );
                    },
                },
                {
                    key: "removeTarget",
                    value: function (e) {
                        (0, u.V)(this.getTarget(e), "Expected an existing target."),
                            this.store.dispatch({ type: L, payload: { targetId: e } }),
                            this.dropTargets.delete(e),
                            this.types.delete(e);
                    },
                },
                {
                    key: "pinSource",
                    value: function (e) {
                        var t = this.getSource(e);
                        (0, u.V)(t, "Expected an existing source."), (this.pinnedSourceId = e), (this.pinnedSource = t);
                    },
                },
                {
                    key: "unpinSource",
                    value: function () {
                        (0, u.V)(this.pinnedSource, "No source is pinned at the time."),
                            (this.pinnedSourceId = null),
                            (this.pinnedSource = null);
                    },
                },
                {
                    key: "addHandler",
                    value: function (e, t, r) {
                        var n = (function (e) {
                            var t = (Y++).toString();
                            switch (e) {
                                case o.SOURCE:
                                    return "S".concat(t);
                                case o.TARGET:
                                    return "T".concat(t);
                                default:
                                    throw Error("Unknown Handler Role: ".concat(e));
                            }
                        })(e);
                        return (
                            this.types.set(n, t),
                            e === o.SOURCE ? this.dragSources.set(n, r) : e === o.TARGET && this.dropTargets.set(n, r),
                            n
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })(),
    eo = r(818884),
    ea = ["children"];
function es(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var eu = 0,
    ec = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
    el = (0, a.memo)(function (e) {
        var t,
            r,
            n = e.children,
            i =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(
                    (r =
                        "manager" in
                        (t = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++)
                                    (r = o[n]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (i[r] = e[r]);
                            }
                            return i;
                        })(e, ea))
                            ? [{ dragDropManager: t.manager }, !1]
                            : [
                                  (function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed(),
                                          r = arguments.length > 2 ? arguments[2] : void 0,
                                          n = arguments.length > 3 ? arguments[3] : void 0;
                                      return (
                                          t[ec] ||
                                              (t[ec] = {
                                                  dragDropManager: (function (e) {
                                                      var t,
                                                          r,
                                                          n =
                                                              arguments.length > 1 && void 0 !== arguments[1]
                                                                  ? arguments[1]
                                                                  : void 0,
                                                          i =
                                                              arguments.length > 2 && void 0 !== arguments[2]
                                                                  ? arguments[2]
                                                                  : {},
                                                          o =
                                                              arguments.length > 3 &&
                                                              void 0 !== arguments[3] &&
                                                              arguments[3],
                                                          a =
                                                              ((t = o),
                                                              (r =
                                                                  "u" > typeof window &&
                                                                  window.__REDUX_DEVTOOLS_EXTENSION__),
                                                              (function e(t, r, n) {
                                                                  if (
                                                                      ("function" == typeof r &&
                                                                          "function" == typeof n) ||
                                                                      ("function" == typeof n &&
                                                                          "function" == typeof arguments[3])
                                                                  )
                                                                      throw Error(S(0));
                                                                  if (
                                                                      ("function" == typeof r &&
                                                                          void 0 === n &&
                                                                          ((n = r), (r = void 0)),
                                                                      void 0 !== n)
                                                                  ) {
                                                                      if ("function" != typeof n) throw Error(S(1));
                                                                      return n(e)(t, r);
                                                                  }
                                                                  if ("function" != typeof t) throw Error(S(2));
                                                                  var i,
                                                                      o = t,
                                                                      a = r,
                                                                      s = [],
                                                                      u = s,
                                                                      c = !1;
                                                                  function l() {
                                                                      u === s && (u = s.slice());
                                                                  }
                                                                  function d() {
                                                                      if (c) throw Error(S(3));
                                                                      return a;
                                                                  }
                                                                  function f(e) {
                                                                      if ("function" != typeof e) throw Error(S(4));
                                                                      if (c) throw Error(S(5));
                                                                      var t = !0;
                                                                      return (
                                                                          l(),
                                                                          u.push(e),
                                                                          function () {
                                                                              if (t) {
                                                                                  if (c) throw Error(S(6));
                                                                                  (t = !1), l();
                                                                                  var r = u.indexOf(e);
                                                                                  u.splice(r, 1), (s = null);
                                                                              }
                                                                          }
                                                                      );
                                                                  }
                                                                  function h(e) {
                                                                      if (
                                                                          !(function (e) {
                                                                              if ("object" != typeof e || null === e)
                                                                                  return !1;
                                                                              for (
                                                                                  var t = e;
                                                                                  null !== Object.getPrototypeOf(t);
                                                                              )
                                                                                  t = Object.getPrototypeOf(t);
                                                                              return Object.getPrototypeOf(e) === t;
                                                                          })(e)
                                                                      )
                                                                          throw Error(S(7));
                                                                      if (void 0 === e.type) throw Error(S(8));
                                                                      if (c) throw Error(S(9));
                                                                      try {
                                                                          (c = !0), (a = o(a, e));
                                                                      } finally {
                                                                          c = !1;
                                                                      }
                                                                      for (var t = (s = u), r = 0; r < t.length; r++)
                                                                          (0, t[r])();
                                                                      return e;
                                                                  }
                                                                  return (
                                                                      h({ type: I.INIT }),
                                                                      ((i = {
                                                                          dispatch: h,
                                                                          subscribe: f,
                                                                          getState: d,
                                                                          replaceReducer: function (e) {
                                                                              if ("function" != typeof e)
                                                                                  throw Error(S(10));
                                                                              (o = e), h({ type: I.REPLACE });
                                                                          },
                                                                      })[D] = function () {
                                                                          var e;
                                                                          return (
                                                                              ((e = {
                                                                                  subscribe: function (e) {
                                                                                      if (
                                                                                          "object" != typeof e ||
                                                                                          null === e
                                                                                      )
                                                                                          throw Error(S(11));
                                                                                      function t() {
                                                                                          e.next && e.next(d());
                                                                                      }
                                                                                      return t(), { unsubscribe: f(t) };
                                                                                  },
                                                                              })[D] = function () {
                                                                                  return this;
                                                                              }),
                                                                              e
                                                                          );
                                                                      }),
                                                                      i
                                                                  );
                                                              })(
                                                                  B,
                                                                  t &&
                                                                      r &&
                                                                      r({ name: "dnd-core", instanceId: "dnd-core" }),
                                                              )),
                                                          s = new X(a, new ei(a)),
                                                          u = new E(a, s),
                                                          c = e(u, n, i);
                                                      return u.receiveBackend(c), u;
                                                  })(e, t, r, n),
                                              }),
                                          t[ec]
                                      );
                                  })(t.backend, t.context, t.options, t.debugMode),
                                  !t.context,
                              ]),
                ) ||
                (function (e) {
                    var t,
                        r,
                        n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var i = [],
                            o = !0,
                            a = !1;
                        try {
                            for (
                                n = n.call(e);
                                !(o = (t = n.next()).done) && (i.push(t.value), 2 !== i.length);
                                o = !0
                            );
                        } catch (e) {
                            (a = !0), (r = e);
                        } finally {
                            try {
                                o || null == n.return || n.return();
                            } finally {
                                if (a) throw r;
                            }
                        }
                        return i;
                    }
                })(r) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return es(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return es(e, 2);
                    }
                })(r) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            o = i[0],
            u = i[1];
        return (
            (0, a.useEffect)(function () {
                if (u) {
                    var e = ed();
                    return (
                        ++eu,
                        function () {
                            0 == --eu && (e[ec] = null);
                        }
                    );
                }
            }, []),
            (0, s.jsx)(eo.M.Provider, Object.assign({ value: o }, { children: n }), void 0)
        );
    });
function ed() {
    return void 0 !== r.g ? r.g : window;
}
function ef(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function eh(e, t) {
    var r,
        n,
        i = eg(e, t, "get");
    return (r = e), (n = i).get ? n.get.call(r) : n.value;
}
function eg(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var ep = new WeakMap();
class ev {
    constructor() {
        !(function (e, t, r) {
            (function (e, t) {
                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
            })(e, t),
                t.set(e, r);
        })(this, ep, { writable: !0, value: void 0 }),
            ef(this, "register", (e) => {
                eh(this, ep).push(e);
            }),
            ef(this, "unregister", (e) => {
                let t;
                for (; -1 !== (t = eh(this, ep).indexOf(e)); ) eh(this, ep).splice(t, 1);
            }),
            ef(this, "backendChanged", (e) => {
                for (let t of eh(this, ep)) t.backendChanged(e);
            }),
            (function (e, t, r) {
                var n = eg(e, t, "set"),
                    i = e,
                    o = n,
                    a = r;
                if (o.set) o.set.call(i, a);
                else {
                    if (!o.writable) throw TypeError("attempted to set read only private field");
                    o.value = a;
                }
            })(this, ep, []);
    }
}
function ey(e, t, r) {
    (function (e, t) {
        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
    })(e, t),
        t.set(e, r);
}
function eb(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function em(e, t) {
    var r,
        n,
        i = ew(e, t, "get");
    return (r = e), (n = i).get ? n.get.call(r) : n.value;
}
function eO(e, t, r) {
    var n = ew(e, t, "set");
    return (
        (function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
                if (!t.writable) throw TypeError("attempted to set read only private field");
                t.value = r;
            }
        })(e, n, r),
        r
    );
}
function ew(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
var eE = new WeakMap(),
    eS = new WeakMap(),
    eD = new WeakMap(),
    eT = new WeakMap(),
    eI = new WeakMap(),
    ek = new WeakMap(),
    eC = new WeakMap(),
    eP = new WeakMap(),
    ex = new WeakMap(),
    eN = new WeakMap(),
    ej = new WeakMap();
class eA {
    constructor(e, t, r) {
        if (
            (ey(this, eE, { writable: !0, value: void 0 }),
            ey(this, eS, { writable: !0, value: void 0 }),
            ey(this, eD, { writable: !0, value: void 0 }),
            ey(this, eT, { writable: !0, value: void 0 }),
            ey(this, eI, { writable: !0, value: void 0 }),
            ey(this, ek, {
                writable: !0,
                value: (e, t, r) => {
                    var n, i;
                    if (!r.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(r)),
                        );
                    let o = r.backend(e, t, r.options),
                        a = r.id,
                        s = !r.id && o && o.constructor;
                    if ((s && (a = o.constructor.name), a))
                        s &&
                            console.warn(
                                "Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.",
                            );
                    else
                        throw Error(
                            "You must specify an 'id' property in your Backend entry: ".concat(
                                JSON.stringify(r),
                                "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx",
                            ),
                        );
                    if (em(this, eD)[a])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(r), " (conflicts with: ")
                                .concat(JSON.stringify(em(this, eD)[a]), ")"),
                        );
                    return {
                        id: a,
                        instance: o,
                        preview: null != (n = r.preview) && n,
                        transition: r.transition,
                        skipDispatchOnTransition: null != (i = r.skipDispatchOnTransition) && i,
                    };
                },
            }),
            eb(this, "setup", () => {
                if ("u" > typeof window) {
                    if (eA.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (eA.isSetUp = !0), em(this, eC).call(this, window), em(this, eD)[em(this, eE)].instance.setup();
                }
            }),
            eb(this, "teardown", () => {
                "u" > typeof window &&
                    ((eA.isSetUp = !1),
                    em(this, eP).call(this, window),
                    em(this, eD)[em(this, eE)].instance.teardown());
            }),
            eb(this, "connectDragSource", (e, t, r) => em(this, ej).call(this, "connectDragSource", e, t, r)),
            eb(this, "connectDragPreview", (e, t, r) => em(this, ej).call(this, "connectDragPreview", e, t, r)),
            eb(this, "connectDropTarget", (e, t, r) => em(this, ej).call(this, "connectDropTarget", e, t, r)),
            eb(this, "profile", () => em(this, eD)[em(this, eE)].instance.profile()),
            eb(this, "previewEnabled", () => em(this, eD)[em(this, eE)].preview),
            eb(this, "previewsList", () => em(this, eS)),
            eb(this, "backendsList", () => em(this, eT)),
            ey(this, eC, {
                writable: !0,
                value: (e) => {
                    em(this, eT).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, em(this, ex));
                    });
                },
            }),
            ey(this, eP, {
                writable: !0,
                value: (e) => {
                    em(this, eT).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, em(this, ex));
                    });
                },
            }),
            ey(this, ex, {
                writable: !0,
                value: (e) => {
                    let t = em(this, eE);
                    if (
                        (em(this, eT).some(
                            (t) =>
                                !!(t.id !== em(this, eE) && t.transition && t.transition.check(e)) &&
                                (eO(this, eE, t.id), !0),
                        ),
                        em(this, eE) !== t)
                    ) {
                        var r;
                        em(this, eD)[t].instance.teardown(),
                            Object.keys(em(this, eI)).forEach((e) => {
                                let t = em(this, eI)[e];
                                t.unsubscribe(), (t.unsubscribe = em(this, eN).call(this, t.func, ...t.args));
                            }),
                            em(this, eS).backendChanged(this);
                        let n = em(this, eD)[em(this, eE)];
                        if ((n.instance.setup(), n.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null == (r = e.target) || r.dispatchEvent(i);
                    }
                },
            }),
            ey(this, eN, { writable: !0, value: (e, t, r, n) => em(this, eD)[em(this, eE)].instance[e](t, r, n) }),
            ey(this, ej, {
                writable: !0,
                value: (e, t, r, n) => {
                    let i = "".concat(e, "_").concat(t),
                        o = em(this, eN).call(this, e, t, r, n);
                    return (
                        (em(this, eI)[i] = { func: e, args: [t, r, n], unsubscribe: o }),
                        () => {
                            em(this, eI)[i].unsubscribe(), delete em(this, eI)[i];
                        }
                    );
                },
            }),
            !r || !r.backends || r.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        eO(this, eS, new ev()),
            eO(this, eD, {}),
            eO(this, eT, []),
            r.backends.forEach((r) => {
                let n = em(this, ek).call(this, e, t, r);
                (em(this, eD)[n.id] = n), em(this, eT).push(n);
            }),
            eO(this, eE, em(this, eT)[0].id),
            eO(this, eI, {});
    }
}
eb(eA, "isSetUp", !1);
let eL = (e, t, r) => new eA(e, t, r);
function eR() {
    return (eR =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function e_(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var eM = (0, a.createContext)(null),
    eV = function (e) {
        var t,
            r = e.portal,
            n = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                }
                return i;
            })(e, ["portal"]),
            i =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })((t = (0, a.useState)(null))) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (
                                var o, a = e[Symbol.iterator]();
                                !(r = (o = a.next()).done) && (t.push(o.value), 2 !== t.length);
                                r = !0
                            );
                        } catch (e) {
                            (n = !0), (i = e);
                        } finally {
                            try {
                                r || null == a.return || a.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return t;
                    }
                })(t) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return e_(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return e_(e, 2);
                    }
                })(t) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            o = i[0],
            s = i[1];
        return a.createElement(
            eM.Provider,
            { value: null != r ? r : o },
            a.createElement(el, eR({ backend: eL }, n)),
            r ? null : a.createElement("div", { ref: s }),
        );
    },
    eU = (r(333007), r(686246));
