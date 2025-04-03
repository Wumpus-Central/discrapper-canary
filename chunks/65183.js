t.exports = (function () {
    var t,
        e,
        r,
        n,
        i,
        o,
        a,
        u,
        s,
        c,
        l = Array.prototype.slice;
    function f(t, e) {
        e && (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t);
    }
    function p(t) {
        return y(t) ? t : J(t);
    }
    function h(t) {
        return v(t) ? t : $(t);
    }
    function d(t) {
        return m(t) ? t : X(t);
    }
    function g(t) {
        return y(t) && !_(t) ? t : Z(t);
    }
    function y(t) {
        return !!(t && t[S]);
    }
    function v(t) {
        return !!(t && t[w]);
    }
    function m(t) {
        return !!(t && t[x]);
    }
    function _(t) {
        return v(t) || m(t);
    }
    function b(t) {
        return !!(t && t[k]);
    }
    f(h, p), f(d, p), f(g, p), (p.isIterable = y), (p.isKeyed = v), (p.isIndexed = m), (p.isAssociative = _), (p.isOrdered = b), (p.Keyed = h), (p.Indexed = d), (p.Set = g);
    var S = '@@__IMMUTABLE_ITERABLE__@@',
        w = '@@__IMMUTABLE_KEYED__@@',
        x = '@@__IMMUTABLE_INDEXED__@@',
        k = '@@__IMMUTABLE_ORDERED__@@',
        E = 'delete',
        C = {},
        D = { value: !1 },
        O = { value: !1 };
    function K(t) {
        return (t.value = !1), t;
    }
    function T(t) {
        t && (t.value = !0);
    }
    function M() {}
    function A(t, e) {
        e = e || 0;
        for (var r = Math.max(0, t.length - e), n = Array(r), i = 0; i < r; i++) n[i] = t[i + e];
        return n;
    }
    function I(t) {
        return void 0 === t.size && (t.size = t.__iterate(L)), t.size;
    }
    function B(t, e) {
        if ('number' != typeof e) {
            var r = e >>> 0;
            if ('' + r !== e || 4294967295 === r) return NaN;
            e = r;
        }
        return e < 0 ? I(t) + e : e;
    }
    function L() {
        return !0;
    }
    function R(t, e, r) {
        return (0 === t || (void 0 !== r && t <= -r)) && (void 0 === e || (void 0 !== r && e >= r));
    }
    function F(t, e, r) {
        return void 0 === t ? r : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
    }
    var N = 'function' == typeof Symbol && Symbol.iterator,
        P = '@@iterator',
        z = N || P;
    function j(t) {
        this.next = t;
    }
    function U(t, e, r, n) {
        var i = 0 === t ? e : 1 === t ? r : [e, r];
        return (
            n
                ? (n.value = i)
                : (n = {
                      value: i,
                      done: !1
                  }),
            n
        );
    }
    function q() {
        return {
            value: void 0,
            done: !0
        };
    }
    function H(t) {
        return t && 'function' == typeof t.next;
    }
    function W(t) {
        var e = V(t);
        return e && e.call(t);
    }
    function V(t) {
        var e = t && ((N && t[N]) || t[P]);
        if ('function' == typeof e) return e;
    }
    function G(t) {
        return t && 'number' == typeof t.length;
    }
    function J(t) {
        return null == t
            ? ti()
            : y(t)
              ? t.toSeq()
              : (function (t) {
                    var e = tu(t) || ('object' == typeof t && new tt(t));
                    if (!e) throw TypeError('Expected Array or iterable object of values, or keyed object: ' + t);
                    return e;
                })(t);
    }
    function $(t) {
        return null == t ? ti().toKeyedSeq() : y(t) ? (v(t) ? t.toSeq() : t.fromEntrySeq()) : to(t);
    }
    function X(t) {
        return null == t ? ti() : y(t) ? (v(t) ? t.entrySeq() : t.toIndexedSeq()) : ta(t);
    }
    function Z(t) {
        return (null == t ? ti() : !y(t) ? ta(t) : v(t) ? t.entrySeq() : t).toSetSeq();
    }
    (j.prototype.toString = function () {
        return '[Iterator]';
    }),
        (j.KEYS = 0),
        (j.VALUES = 1),
        (j.ENTRIES = 2),
        (j.prototype.inspect = j.prototype.toSource =
            function () {
                return this.toString();
            }),
        (j.prototype[z] = function () {
            return this;
        }),
        f(J, p),
        (J.of = function () {
            return J(arguments);
        }),
        (J.prototype.toSeq = function () {
            return this;
        }),
        (J.prototype.toString = function () {
            return this.__toString('Seq {', '}');
        }),
        (J.prototype.cacheResult = function () {
            return !this._cache && this.__iterateUncached && ((this._cache = this.entrySeq().toArray()), (this.size = this._cache.length)), this;
        }),
        (J.prototype.__iterate = function (t, e) {
            return ts(this, t, e, !0);
        }),
        (J.prototype.__iterator = function (t, e) {
            return tc(this, t, e, !0);
        }),
        f($, J),
        ($.prototype.toKeyedSeq = function () {
            return this;
        }),
        f(X, J),
        (X.of = function () {
            return X(arguments);
        }),
        (X.prototype.toIndexedSeq = function () {
            return this;
        }),
        (X.prototype.toString = function () {
            return this.__toString('Seq [', ']');
        }),
        (X.prototype.__iterate = function (t, e) {
            return ts(this, t, e, !1);
        }),
        (X.prototype.__iterator = function (t, e) {
            return tc(this, t, e, !1);
        }),
        f(Z, J),
        (Z.of = function () {
            return Z(arguments);
        }),
        (Z.prototype.toSetSeq = function () {
            return this;
        }),
        (J.isSeq = tn),
        (J.Keyed = $),
        (J.Set = Z),
        (J.Indexed = X);
    var Y = '@@__IMMUTABLE_SEQ__@@';
    function Q(t) {
        (this._array = t), (this.size = t.length);
    }
    function tt(t) {
        var e = Object.keys(t);
        (this._object = t), (this._keys = e), (this.size = e.length);
    }
    function te(t) {
        (this._iterable = t), (this.size = t.length || t.size);
    }
    function tr(t) {
        (this._iterator = t), (this._iteratorCache = []);
    }
    function tn(t) {
        return !!(t && t[Y]);
    }
    function ti() {
        return t || (t = new Q([]));
    }
    function to(t) {
        var e = Array.isArray(t) ? new Q(t).fromEntrySeq() : H(t) ? new tr(t).fromEntrySeq() : V(t) ? new te(t).fromEntrySeq() : 'object' == typeof t ? new tt(t) : void 0;
        if (!e) throw TypeError('Expected Array or iterable object of [k, v] entries, or keyed object: ' + t);
        return e;
    }
    function ta(t) {
        var e = tu(t);
        if (!e) throw TypeError('Expected Array or iterable object of values: ' + t);
        return e;
    }
    function tu(t) {
        return G(t) ? new Q(t) : H(t) ? new tr(t) : V(t) ? new te(t) : void 0;
    }
    function ts(t, e, r, n) {
        var i = t._cache;
        if (i) {
            for (var o = i.length - 1, a = 0; a <= o; a++) {
                var u = i[r ? o - a : a];
                if (!1 === e(u[1], n ? u[0] : a, t)) return a + 1;
            }
            return a;
        }
        return t.__iterateUncached(e, r);
    }
    function tc(t, e, r, n) {
        var i = t._cache;
        if (i) {
            var o = i.length - 1,
                a = 0;
            return new j(function () {
                var t = i[r ? o - a : a];
                return a++ > o ? q() : U(e, n ? t[0] : a - 1, t[1]);
            });
        }
        return t.__iteratorUncached(e, r);
    }
    function tl(t, e) {
        return e
            ? (function t(e, r, n, i) {
                  return Array.isArray(r)
                      ? e.call(
                            i,
                            n,
                            X(r).map(function (n, i) {
                                return t(e, n, i, r);
                            })
                        )
                      : tf(r)
                        ? e.call(
                              i,
                              n,
                              $(r).map(function (n, i) {
                                  return t(e, n, i, r);
                              })
                          )
                        : r;
              })(e, t, '', { '': t })
            : (function t(e) {
                  return Array.isArray(e) ? X(e).map(t).toList() : tf(e) ? $(e).map(t).toMap() : e;
              })(t);
    }
    function tf(t) {
        return t && (t.constructor === Object || void 0 === t.constructor);
    }
    function tp(t, e) {
        if (t === e || (t != t && e != e)) return !0;
        if (!t || !e) return !1;
        if ('function' == typeof t.valueOf && 'function' == typeof e.valueOf) {
            if ((t = t.valueOf()) === (e = e.valueOf()) || (t != t && e != e)) return !0;
            if (!t || !e) return !1;
        }
        return !!('function' == typeof t.equals && 'function' == typeof e.equals && t.equals(e));
    }
    function th(t, e) {
        if (t === e) return !0;
        if (!y(e) || (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) || (void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash) || v(t) !== v(e) || m(t) !== m(e) || b(t) !== b(e)) return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var r = !_(t);
        if (b(t)) {
            var n = t.entries();
            return (
                e.every(function (t, e) {
                    var i = n.next().value;
                    return i && tp(i[1], t) && (r || tp(i[0], e));
                }) && n.next().done
            );
        }
        var i = !1;
        if (void 0 === t.size)
            if (void 0 === e.size) 'function' == typeof t.cacheResult && t.cacheResult();
            else {
                i = !0;
                var o = t;
                (t = e), (e = o);
            }
        var a = !0,
            u = e.__iterate(function (e, n) {
                if (r ? !t.has(e) : i ? !tp(e, t.get(n, C)) : !tp(t.get(n, C), e)) return (a = !1), !1;
            });
        return a && t.size === u;
    }
    function td(t, r) {
        if (!(this instanceof td)) return new td(t, r);
        if (((this._value = t), (this.size = void 0 === r ? 1 / 0 : Math.max(0, r)), 0 === this.size)) {
            if (e) return e;
            e = this;
        }
    }
    function tg(t, e) {
        if (!t) throw Error(e);
    }
    function ty(t, e, n) {
        if (!(this instanceof ty)) return new ty(t, e, n);
        if ((tg(0 !== n, 'Cannot step a Range by 0'), (t = t || 0), void 0 === e && (e = 1 / 0), (n = void 0 === n ? 1 : Math.abs(n)), e < t && (n = -n), (this._start = t), (this._end = e), (this._step = n), (this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1)), 0 === this.size)) {
            if (r) return r;
            r = this;
        }
    }
    function tv() {
        throw TypeError('Abstract');
    }
    function tm() {}
    function t_() {}
    function tb() {}
    (J.prototype[Y] = !0),
        f(Q, X),
        (Q.prototype.get = function (t, e) {
            return this.has(t) ? this._array[B(this, t)] : e;
        }),
        (Q.prototype.__iterate = function (t, e) {
            for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++) if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
            return i;
        }),
        (Q.prototype.__iterator = function (t, e) {
            var r = this._array,
                n = r.length - 1,
                i = 0;
            return new j(function () {
                return i > n ? q() : U(t, i, r[e ? n - i++ : i++]);
            });
        }),
        f(tt, $),
        (tt.prototype.get = function (t, e) {
            return void 0 === e || this.has(t) ? this._object[t] : e;
        }),
        (tt.prototype.has = function (t) {
            return this._object.hasOwnProperty(t);
        }),
        (tt.prototype.__iterate = function (t, e) {
            for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; o <= i; o++) {
                var a = n[e ? i - o : o];
                if (!1 === t(r[a], a, this)) return o + 1;
            }
            return o;
        }),
        (tt.prototype.__iterator = function (t, e) {
            var r = this._object,
                n = this._keys,
                i = n.length - 1,
                o = 0;
            return new j(function () {
                var a = n[e ? i - o : o];
                return o++ > i ? q() : U(t, a, r[a]);
            });
        }),
        (tt.prototype[k] = !0),
        f(te, X),
        (te.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            var r,
                n = W(this._iterable),
                i = 0;
            if (H(n)) for (; !(r = n.next()).done && !1 !== t(r.value, i++, this); );
            return i;
        }),
        (te.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var r = W(this._iterable);
            if (!H(r)) return new j(q);
            var n = 0;
            return new j(function () {
                var e = r.next();
                return e.done ? e : U(t, n++, e.value);
            });
        }),
        f(tr, X),
        (tr.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            for (var r, n = this._iterator, i = this._iteratorCache, o = 0; o < i.length; ) if (!1 === t(i[o], o++, this)) return o;
            for (; !(r = n.next()).done; ) {
                var a = r.value;
                if (((i[o] = a), !1 === t(a, o++, this))) break;
            }
            return o;
        }),
        (tr.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var r = this._iterator,
                n = this._iteratorCache,
                i = 0;
            return new j(function () {
                if (i >= n.length) {
                    var e = r.next();
                    if (e.done) return e;
                    n[i] = e.value;
                }
                return U(t, i, n[i++]);
            });
        }),
        f(td, X),
        (td.prototype.toString = function () {
            return 0 === this.size ? 'Repeat []' : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
        }),
        (td.prototype.get = function (t, e) {
            return this.has(t) ? this._value : e;
        }),
        (td.prototype.includes = function (t) {
            return tp(this._value, t);
        }),
        (td.prototype.slice = function (t, e) {
            var r = this.size;
            return R(t, e, r) ? this : new td(this._value, F(e, r, r) - F(t, r, 0));
        }),
        (td.prototype.reverse = function () {
            return this;
        }),
        (td.prototype.indexOf = function (t) {
            return tp(this._value, t) ? 0 : -1;
        }),
        (td.prototype.lastIndexOf = function (t) {
            return tp(this._value, t) ? this.size : -1;
        }),
        (td.prototype.__iterate = function (t, e) {
            for (var r = 0; r < this.size; r++) if (!1 === t(this._value, r, this)) return r + 1;
            return r;
        }),
        (td.prototype.__iterator = function (t, e) {
            var r = this,
                n = 0;
            return new j(function () {
                return n < r.size ? U(t, n++, r._value) : q();
            });
        }),
        (td.prototype.equals = function (t) {
            return t instanceof td ? tp(this._value, t._value) : th(t);
        }),
        f(ty, X),
        (ty.prototype.toString = function () {
            return 0 === this.size ? 'Range []' : 'Range [ ' + this._start + '...' + this._end + (this._step > 1 ? ' by ' + this._step : '') + ' ]';
        }),
        (ty.prototype.get = function (t, e) {
            return this.has(t) ? this._start + B(this, t) * this._step : e;
        }),
        (ty.prototype.includes = function (t) {
            var e = (t - this._start) / this._step;
            return e >= 0 && e < this.size && e === Math.floor(e);
        }),
        (ty.prototype.slice = function (t, e) {
            var r;
            return R(t, e, this.size) ? this : ((t = F(t, this.size, 0)), (e = F(e, (r = this.size), r)) <= t) ? new ty(0, 0) : new ty(this.get(t, this._end), this.get(e, this._end), this._step);
        }),
        (ty.prototype.indexOf = function (t) {
            var e = t - this._start;
            if (e % this._step == 0) {
                var r = e / this._step;
                if (r >= 0 && r < this.size) return r;
            }
            return -1;
        }),
        (ty.prototype.lastIndexOf = function (t) {
            return this.indexOf(t);
        }),
        (ty.prototype.__iterate = function (t, e) {
            for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; o <= r; o++) {
                if (!1 === t(i, o, this)) return o + 1;
                i += e ? -n : n;
            }
            return o;
        }),
        (ty.prototype.__iterator = function (t, e) {
            var r = this.size - 1,
                n = this._step,
                i = e ? this._start + r * n : this._start,
                o = 0;
            return new j(function () {
                var a = i;
                return (i += e ? -n : n), o > r ? q() : U(t, o++, a);
            });
        }),
        (ty.prototype.equals = function (t) {
            return t instanceof ty ? this._start === t._start && this._end === t._end && this._step === t._step : th(this, t);
        }),
        f(tv, p),
        f(tm, tv),
        f(t_, tv),
        f(tb, tv),
        (tv.Keyed = tm),
        (tv.Indexed = t_),
        (tv.Set = tb);
    var tS =
        'function' == typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (t, e) {
                  var r = 65535 & (t |= 0),
                      n = 65535 & (e |= 0);
                  return (r * n + ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) | 0;
              };
    function tw(t) {
        return ((t >>> 1) & 1073741824) | (3221225471 & t);
    }
    function tx(t) {
        if (!1 === t || null == t || ('function' == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t))) return 0;
        if (!0 === t) return 1;
        var e = typeof t;
        if ('number' === e) {
            var r = 0 | t;
            for (r !== t && (r ^= 4294967295 * t); t > 4294967295; ) (t /= 4294967295), (r ^= t);
            return tw(r);
        }
        if ('string' === e) {
            return t.length > tT ? (void 0 === (o = tI[(i = t)]) && ((o = tk(i)), tA === tM && ((tA = 0), (tI = {})), tA++, (tI[i] = o)), o) : tk(t);
        }
        if ('function' == typeof t.hashCode) return t.hashCode();
        if ('object' === e) {
            var i,
                o,
                a,
                u = t;
            if (
                (tD && void 0 !== (a = n.get(u))) ||
                void 0 !== (a = u[tK]) ||
                (!tC &&
                    (void 0 !== (a = u.propertyIsEnumerable && u.propertyIsEnumerable[tK]) ||
                        void 0 !==
                            (a = (function (t) {
                                if (t && t.nodeType > 0)
                                    switch (t.nodeType) {
                                        case 1:
                                            return t.uniqueID;
                                        case 9:
                                            return t.documentElement && t.documentElement.uniqueID;
                                    }
                            })(u))))
            )
                return a;
            if (((a = ++tO), 1073741824 & tO && (tO = 0), tD)) n.set(u, a);
            else if (void 0 !== tE && !1 === tE(u)) throw Error('Non-extensible objects are not allowed as keys.');
            else if (tC)
                Object.defineProperty(u, tK, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: a
                });
            else if (void 0 !== u.propertyIsEnumerable && u.propertyIsEnumerable === u.constructor.prototype.propertyIsEnumerable)
                (u.propertyIsEnumerable = function () {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                }),
                    (u.propertyIsEnumerable[tK] = a);
            else if (void 0 !== u.nodeType) u[tK] = a;
            else throw Error('Unable to set a non-enumerable property on object.');
            return a;
        }
        if ('function' == typeof t.toString) return tk(t.toString());
        throw Error('Value type ' + e + ' cannot be hashed.');
    }
    function tk(t) {
        for (var e = 0, r = 0; r < t.length; r++) e = (31 * e + t.charCodeAt(r)) | 0;
        return tw(e);
    }
    var tE = Object.isExtensible,
        tC = (function () {
            try {
                return Object.defineProperty({}, '@', {}), !0;
            } catch (t) {
                return !1;
            }
        })(),
        tD = 'function' == typeof WeakMap;
    tD && (n = new WeakMap());
    var tO = 0,
        tK = '__immutablehash__';
    'function' == typeof Symbol && (tK = Symbol(tK));
    var tT = 16,
        tM = 255,
        tA = 0,
        tI = {};
    function tB(t) {
        tg(t !== 1 / 0, 'Cannot perform this action with an infinite size.');
    }
    function tL(t) {
        return null == t
            ? tJ()
            : tR(t) && !b(t)
              ? t
              : tJ().withMutations(function (e) {
                    var r = h(t);
                    tB(r.size),
                        r.forEach(function (t, r) {
                            return e.set(r, t);
                        });
                });
    }
    function tR(t) {
        return !!(t && t[tF]);
    }
    f(tL, tm),
        (tL.prototype.toString = function () {
            return this.__toString('Map {', '}');
        }),
        (tL.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e;
        }),
        (tL.prototype.set = function (t, e) {
            return t$(this, t, e);
        }),
        (tL.prototype.setIn = function (t, e) {
            return this.updateIn(t, C, function () {
                return e;
            });
        }),
        (tL.prototype.remove = function (t) {
            return t$(this, t, C);
        }),
        (tL.prototype.deleteIn = function (t) {
            return this.updateIn(t, function () {
                return C;
            });
        }),
        (tL.prototype.update = function (t, e, r) {
            return 1 == arguments.length ? t(this) : this.updateIn([t], e, r);
        }),
        (tL.prototype.updateIn = function (t, e, r) {
            r || ((r = e), (e = void 0));
            var n = (function t(e, r, n, i) {
                var o = e === C,
                    a = r.next();
                if (a.done) {
                    var u = o ? n : e,
                        s = i(u);
                    return s === u ? e : s;
                }
                tg(o || (e && e.set), 'invalid keyPath');
                var c = a.value,
                    l = o ? C : e.get(c, C),
                    f = t(l, r, n, i);
                return f === l ? e : f === C ? e.remove(c) : (o ? tJ() : e).set(c, f);
            })(this, ez(t), e, r);
            return n === C ? void 0 : n;
        }),
        (tL.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), (this._root = null), (this.__hash = void 0), (this.__altered = !0), this) : tJ();
        }),
        (tL.prototype.merge = function () {
            return tQ(this, void 0, arguments);
        }),
        (tL.prototype.mergeWith = function (t) {
            var e = l.call(arguments, 1);
            return tQ(this, t, e);
        }),
        (tL.prototype.mergeIn = function (t) {
            var e = l.call(arguments, 1);
            return this.updateIn(t, tJ(), function (t) {
                return 'function' == typeof t.merge ? t.merge.apply(t, e) : e[e.length - 1];
            });
        }),
        (tL.prototype.mergeDeep = function () {
            return tQ(this, t0, arguments);
        }),
        (tL.prototype.mergeDeepWith = function (t) {
            var e = l.call(arguments, 1);
            return tQ(this, t1(t), e);
        }),
        (tL.prototype.mergeDeepIn = function (t) {
            var e = l.call(arguments, 1);
            return this.updateIn(t, tJ(), function (t) {
                return 'function' == typeof t.mergeDeep ? t.mergeDeep.apply(t, e) : e[e.length - 1];
            });
        }),
        (tL.prototype.sort = function (t) {
            return eh(eK(this, t));
        }),
        (tL.prototype.sortBy = function (t, e) {
            return eh(eK(this, e, t));
        }),
        (tL.prototype.withMutations = function (t) {
            var e = this.asMutable();
            return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
        }),
        (tL.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new M());
        }),
        (tL.prototype.asImmutable = function () {
            return this.__ensureOwner();
        }),
        (tL.prototype.wasAltered = function () {
            return this.__altered;
        }),
        (tL.prototype.__iterator = function (t, e) {
            return new tH(this, t, e);
        }),
        (tL.prototype.__iterate = function (t, e) {
            var r = this,
                n = 0;
            return (
                this._root &&
                    this._root.iterate(function (e) {
                        return n++, t(e[1], e[0], r);
                    }, e),
                n
            );
        }),
        (tL.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID ? this : t ? tG(this.size, this._root, t, this.__hash) : ((this.__ownerID = t), (this.__altered = !1), this);
        }),
        (tL.isMap = tR);
    var tF = '@@__IMMUTABLE_MAP__@@',
        tN = tL.prototype;
    function tP(t, e) {
        (this.ownerID = t), (this.entries = e);
    }
    function tz(t, e, r) {
        (this.ownerID = t), (this.bitmap = e), (this.nodes = r);
    }
    function tj(t, e, r) {
        (this.ownerID = t), (this.count = e), (this.nodes = r);
    }
    function tU(t, e, r) {
        (this.ownerID = t), (this.keyHash = e), (this.entries = r);
    }
    function tq(t, e, r) {
        (this.ownerID = t), (this.keyHash = e), (this.entry = r);
    }
    function tH(t, e, r) {
        (this._type = e), (this._reverse = r), (this._stack = t._root && tV(t._root));
    }
    function tW(t, e) {
        return U(t, e[0], e[1]);
    }
    function tV(t, e) {
        return {
            node: t,
            index: 0,
            __prev: e
        };
    }
    function tG(t, e, r, n) {
        var i = Object.create(tN);
        return (i.size = t), (i._root = e), (i.__ownerID = r), (i.__hash = n), (i.__altered = !1), i;
    }
    function tJ() {
        return i || (i = tG(0));
    }
    function t$(t, e, r) {
        if (t._root) {
            var n,
                i,
                o = K(D),
                a = K(O);
            if (((n = tX(t._root, t.__ownerID, 0, void 0, e, r, o, a)), !a.value)) return t;
            i = t.size + (o.value ? (r === C ? -1 : 1) : 0);
        } else {
            if (r === C) return t;
            (i = 1), (n = new tP(t.__ownerID, [[e, r]]));
        }
        return t.__ownerID ? ((t.size = i), (t._root = n), (t.__hash = void 0), (t.__altered = !0), t) : n ? tG(i, n) : tJ();
    }
    function tX(t, e, r, n, i, o, a, u) {
        return t ? t.update(e, r, n, i, o, a, u) : o === C ? t : (T(u), T(a), new tq(e, n, [i, o]));
    }
    function tZ(t) {
        return t.constructor === tq || t.constructor === tU;
    }
    function tY(t, e, r, n, i) {
        if (t.keyHash === n) return new tU(e, n, [t.entry, i]);
        var o,
            a = (0 === r ? t.keyHash : t.keyHash >>> r) & 31,
            u = (0 === r ? n : n >>> r) & 31,
            s = a === u ? [tY(t, e, r + 5, n, i)] : ((o = new tq(e, n, i)), a < u ? [t, o] : [o, t]);
        return new tz(e, (1 << a) | (1 << u), s);
    }
    function tQ(t, e, r) {
        for (var n = [], i = 0; i < r.length; i++) {
            var o = r[i],
                a = h(o);
            y(o) ||
                (a = a.map(function (t) {
                    return tl(t);
                })),
                n.push(a);
        }
        return t6(t, e, n);
    }
    function t0(t, e, r) {
        return t && t.mergeDeep && y(e) ? t.mergeDeep(e) : tp(t, e) ? t : e;
    }
    function t1(t) {
        return function (e, r, n) {
            if (e && e.mergeDeepWith && y(r)) return e.mergeDeepWith(t, r);
            var i = t(e, r, n);
            return tp(e, i) ? e : i;
        };
    }
    function t6(t, e, r) {
        return 0 ===
            (r = r.filter(function (t) {
                return 0 !== t.size;
            })).length
            ? t
            : 0 !== t.size || t.__ownerID || 1 !== r.length
              ? t.withMutations(function (t) {
                    for (
                        var n = e
                                ? function (r, n) {
                                      t.update(n, C, function (t) {
                                          return t === C ? r : e(t, r, n);
                                      });
                                  }
                                : function (e, r) {
                                      t.set(r, e);
                                  },
                            i = 0;
                        i < r.length;
                        i++
                    )
                        r[i].forEach(n);
                })
              : t.constructor(r[0]);
    }
    function t3(t) {
        return (t -= (t >> 1) & 1431655765), (t = ((t = (858993459 & t) + ((t >> 2) & 858993459)) + (t >> 4)) & 252645135), (t += t >> 8), 127 & (t += t >> 16);
    }
    function t2(t, e, r, n) {
        var i = n ? t : A(t);
        return (i[e] = r), i;
    }
    (tN[tF] = !0),
        (tN[E] = tN.remove),
        (tN.removeIn = tN.deleteIn),
        (tP.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++) if (tp(r, i[o][0])) return i[o][1];
            return n;
        }),
        (tP.prototype.update = function (t, e, r, n, i, o, a) {
            for (var u = i === C, s = this.entries, c = 0, l = s.length; c < l && !tp(n, s[c][0]); c++);
            var f = c < l;
            if (f ? s[c][1] === i : u) return this;
            if ((T(a), (u || !f) && T(o), !u || 1 !== s.length)) {
                if (!f && !u && s.length >= t5) {
                    var p = t,
                        h = s,
                        d = n,
                        g = i;
                    p || (p = new M());
                    for (var y = new tq(p, tx(d), [d, g]), v = 0; v < h.length; v++) {
                        var m = h[v];
                        y = y.update(p, 0, void 0, m[0], m[1]);
                    }
                    return y;
                }
                var _ = t && t === this.ownerID,
                    b = _ ? s : A(s);
                return (f ? (u ? (c === l - 1 ? b.pop() : (b[c] = b.pop())) : (b[c] = [n, i])) : b.push([n, i]), _) ? ((this.entries = b), this) : new tP(t, b);
            }
        }),
        (tz.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = tx(r));
            var i = 1 << ((0 === t ? e : e >>> t) & 31),
                o = this.bitmap;
            return (o & i) == 0 ? n : this.nodes[t3(o & (i - 1))].get(t + 5, e, r, n);
        }),
        (tz.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = tx(n));
            var u = (0 === e ? r : r >>> e) & 31,
                s = 1 << u,
                c = this.bitmap,
                l = (c & s) != 0;
            if (!l && i === C) return this;
            var f = t3(c & (s - 1)),
                p = this.nodes,
                h = l ? p[f] : void 0,
                d = tX(h, t, e + 5, r, n, i, o, a);
            if (d === h) return this;
            if (!l && d && p.length >= t8) {
                for (var g = t, y = p, v = c, m = u, _ = d, b = 0, S = Array(32), w = 0; 0 !== v; w++, v >>>= 1) S[w] = 1 & v ? y[b++] : void 0;
                return (S[m] = _), new tj(g, b + 1, S);
            }
            if (l && !d && 2 === p.length && tZ(p[1 ^ f])) return p[1 ^ f];
            if (l && d && 1 === p.length && tZ(d)) return d;
            var x = t && t === this.ownerID,
                k = l ? (d ? c : c ^ s) : c | s,
                E = l
                    ? d
                        ? t2(p, f, d, x)
                        : (function (t, e, r) {
                              var n = t.length - 1;
                              if (r && e === n) return t.pop(), t;
                              for (var i = Array(n), o = 0, a = 0; a < n; a++) a === e && (o = 1), (i[a] = t[a + o]);
                              return i;
                          })(p, f, x)
                    : (function (t, e, r, n) {
                          var i = t.length + 1;
                          if (n && e + 1 === i) return (t[e] = r), t;
                          for (var o = Array(i), a = 0, u = 0; u < i; u++) u === e ? ((o[u] = r), (a = -1)) : (o[u] = t[u + a]);
                          return o;
                      })(p, f, d, x);
            return x ? ((this.bitmap = k), (this.nodes = E), this) : new tz(t, k, E);
        }),
        (tj.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = tx(r));
            var i = (0 === t ? e : e >>> t) & 31,
                o = this.nodes[i];
            return o ? o.get(t + 5, e, r, n) : n;
        }),
        (tj.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = tx(n));
            var u = (0 === e ? r : r >>> e) & 31,
                s = i === C,
                c = this.nodes,
                l = c[u];
            if (s && !l) return this;
            var f = tX(l, t, e + 5, r, n, i, o, a);
            if (f === l) return this;
            var p = this.count;
            if (l) {
                if (!f && --p < t9)
                    return (function (t, e, r, n) {
                        for (var i = 0, o = 0, a = Array(r), u = 0, s = 1, c = e.length; u < c; u++, s <<= 1) {
                            var l = e[u];
                            void 0 !== l && u !== n && ((i |= s), (a[o++] = l));
                        }
                        return new tz(t, i, a);
                    })(t, c, p, u);
            } else p++;
            var h = t && t === this.ownerID,
                d = t2(c, u, f, h);
            return h ? ((this.count = p), (this.nodes = d), this) : new tj(t, p, d);
        }),
        (tU.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++) if (tp(r, i[o][0])) return i[o][1];
            return n;
        }),
        (tU.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = tx(n));
            var u = i === C;
            if (r !== this.keyHash) return u ? this : (T(a), T(o), tY(this, t, e, r, [n, i]));
            for (var s = this.entries, c = 0, l = s.length; c < l && !tp(n, s[c][0]); c++);
            var f = c < l;
            if (f ? s[c][1] === i : u) return this;
            if ((T(a), (u || !f) && T(o), u && 2 === l)) return new tq(t, this.keyHash, s[1 ^ c]);
            var p = t && t === this.ownerID,
                h = p ? s : A(s);
            return (f ? (u ? (c === l - 1 ? h.pop() : (h[c] = h.pop())) : (h[c] = [n, i])) : h.push([n, i]), p) ? ((this.entries = h), this) : new tU(t, this.keyHash, h);
        }),
        (tq.prototype.get = function (t, e, r, n) {
            return tp(r, this.entry[0]) ? this.entry[1] : n;
        }),
        (tq.prototype.update = function (t, e, r, n, i, o, a) {
            var u = i === C,
                s = tp(n, this.entry[0]);
            return (s ? i === this.entry[1] : u) ? this : (T(a), u) ? void T(o) : s ? (t && t === this.ownerID ? ((this.entry[1] = i), this) : new tq(t, this.keyHash, [n, i])) : (T(o), tY(this, t, e, tx(n), [n, i]));
        }),
        (tP.prototype.iterate = tU.prototype.iterate =
            function (t, e) {
                for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++) if (!1 === t(r[e ? i - n : n])) return !1;
            }),
        (tz.prototype.iterate = tj.prototype.iterate =
            function (t, e) {
                for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
                    var o = r[e ? i - n : n];
                    if (o && !1 === o.iterate(t, e)) return !1;
                }
            }),
        (tq.prototype.iterate = function (t, e) {
            return t(this.entry);
        }),
        f(tH, j),
        (tH.prototype.next = function () {
            for (var t = this._type, e = this._stack; e; ) {
                var r,
                    n = e.node,
                    i = e.index++;
                if (n.entry) {
                    if (0 === i) return tW(t, n.entry);
                } else if (n.entries) {
                    if (i <= (r = n.entries.length - 1)) return tW(t, n.entries[this._reverse ? r - i : i]);
                } else if (i <= (r = n.nodes.length - 1)) {
                    var o = n.nodes[this._reverse ? r - i : i];
                    if (o) {
                        if (o.entry) return tW(t, o.entry);
                        e = this._stack = tV(o, e);
                    }
                    continue;
                }
                e = this._stack = this._stack.__prev;
            }
            return q();
        });
    var t5 = 8,
        t8 = 16,
        t9 = 8;
    function t7(t) {
        var e = ea();
        if (null == t) return e;
        if (t4(t)) return t;
        var r = d(t),
            n = r.size;
        return 0 === n
            ? e
            : (tB(n), n > 0 && n < 32)
              ? eo(0, n, 5, null, new er(r.toArray()))
              : e.withMutations(function (t) {
                    t.setSize(n),
                        r.forEach(function (e, r) {
                            return t.set(r, e);
                        });
                });
    }
    function t4(t) {
        return !!(t && t[et]);
    }
    f(t7, t_),
        (t7.of = function () {
            return this(arguments);
        }),
        (t7.prototype.toString = function () {
            return this.__toString('List [', ']');
        }),
        (t7.prototype.get = function (t, e) {
            if ((t = B(this, t)) >= 0 && t < this.size) {
                var r = ec(this, (t += this._origin));
                return r && r.array[31 & t];
            }
            return e;
        }),
        (t7.prototype.set = function (t, e) {
            return (function (t, e, r) {
                if ((e = B(t, e)) != e) return t;
                if (e >= t.size || e < 0)
                    return t.withMutations(function (t) {
                        e < 0 ? el(t, e).set(0, r) : el(t, 0, e + 1).set(e, r);
                    });
                e += t._origin;
                var n = t._tail,
                    i = t._root,
                    o = K(O);
                return (e >= ep(t._capacity) ? (n = eu(n, t.__ownerID, 0, e, r, o)) : (i = eu(i, t.__ownerID, t._level, e, r, o)), o.value) ? (t.__ownerID ? ((t._root = i), (t._tail = n), (t.__hash = void 0), (t.__altered = !0), t) : eo(t._origin, t._capacity, t._level, i, n)) : t;
            })(this, t, e);
        }),
        (t7.prototype.remove = function (t) {
            return this.has(t) ? (0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1)) : this;
        }),
        (t7.prototype.insert = function (t, e) {
            return this.splice(t, 0, e);
        }),
        (t7.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? ((this.size = this._origin = this._capacity = 0), (this._level = 5), (this._root = this._tail = null), (this.__hash = void 0), (this.__altered = !0), this) : ea();
        }),
        (t7.prototype.push = function () {
            var t = arguments,
                e = this.size;
            return this.withMutations(function (r) {
                el(r, 0, e + t.length);
                for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
            });
        }),
        (t7.prototype.pop = function () {
            return el(this, 0, -1);
        }),
        (t7.prototype.unshift = function () {
            var t = arguments;
            return this.withMutations(function (e) {
                el(e, -t.length);
                for (var r = 0; r < t.length; r++) e.set(r, t[r]);
            });
        }),
        (t7.prototype.shift = function () {
            return el(this, 1);
        }),
        (t7.prototype.merge = function () {
            return ef(this, void 0, arguments);
        }),
        (t7.prototype.mergeWith = function (t) {
            var e = l.call(arguments, 1);
            return ef(this, t, e);
        }),
        (t7.prototype.mergeDeep = function () {
            return ef(this, t0, arguments);
        }),
        (t7.prototype.mergeDeepWith = function (t) {
            var e = l.call(arguments, 1);
            return ef(this, t1(t), e);
        }),
        (t7.prototype.setSize = function (t) {
            return el(this, 0, t);
        }),
        (t7.prototype.slice = function (t, e) {
            var r = this.size;
            return R(t, e, r) ? this : el(this, F(t, r, 0), F(e, r, r));
        }),
        (t7.prototype.__iterator = function (t, e) {
            var r = 0,
                n = ei(this, e);
            return new j(function () {
                var e = n();
                return e === en ? q() : U(t, r++, e);
            });
        }),
        (t7.prototype.__iterate = function (t, e) {
            for (var r, n = 0, i = ei(this, e); (r = i()) !== en && !1 !== t(r, n++, this); );
            return n;
        }),
        (t7.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID ? this : t ? eo(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : ((this.__ownerID = t), this);
        }),
        (t7.isList = t4);
    var et = '@@__IMMUTABLE_LIST__@@',
        ee = t7.prototype;
    function er(t, e) {
        (this.array = t), (this.ownerID = e);
    }
    (ee[et] = !0),
        (ee[E] = ee.remove),
        (ee.setIn = tN.setIn),
        (ee.deleteIn = ee.removeIn = tN.removeIn),
        (ee.update = tN.update),
        (ee.updateIn = tN.updateIn),
        (ee.mergeIn = tN.mergeIn),
        (ee.mergeDeepIn = tN.mergeDeepIn),
        (ee.withMutations = tN.withMutations),
        (ee.asMutable = tN.asMutable),
        (ee.asImmutable = tN.asImmutable),
        (ee.wasAltered = tN.wasAltered),
        (er.prototype.removeBefore = function (t, e, r) {
            if (r === e ? 1 << e : 0 === this.array.length) return this;
            var n,
                i = (r >>> e) & 31;
            if (i >= this.array.length) return new er([], t);
            var o = 0 === i;
            if (e > 0) {
                var a = this.array[i];
                if ((n = a && a.removeBefore(t, e - 5, r)) === a && o) return this;
            }
            if (o && !n) return this;
            var u = es(this, t);
            if (!o) for (var s = 0; s < i; s++) u.array[s] = void 0;
            return n && (u.array[i] = n), u;
        }),
        (er.prototype.removeAfter = function (t, e, r) {
            if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
            var n,
                i = ((r - 1) >>> e) & 31;
            if (i >= this.array.length) return this;
            if (e > 0) {
                var o = this.array[i];
                if ((n = o && o.removeAfter(t, e - 5, r)) === o && i === this.array.length - 1) return this;
            }
            var a = es(this, t);
            return a.array.splice(i + 1), n && (a.array[i] = n), a;
        });
    var en = {};
    function ei(t, e) {
        var r = t._origin,
            n = t._capacity,
            i = ep(n),
            o = t._tail;
        return (function t(a, u, s) {
            var c, l, f, p, h, d, g, y, v, m, _, b;
            return 0 === u
                ? ((c = a),
                  (f = (l = s) === i ? o && o.array : c && c.array),
                  (p = l > r ? 0 : r - l),
                  (h = n - l) > 32 && (h = 32),
                  function () {
                      if (p === h) return en;
                      var t = e ? --h : p++;
                      return f && f[t];
                  })
                : ((d = a),
                  (g = u),
                  (y = s),
                  (m = d && d.array),
                  (_ = y > r ? 0 : (r - y) >> g),
                  (b = ((n - y) >> g) + 1) > 32 && (b = 32),
                  function () {
                      for (;;) {
                          if (v) {
                              var r = v();
                              if (r !== en) return r;
                              v = null;
                          }
                          if (_ === b) return en;
                          var n = e ? --b : _++;
                          v = t(m && m[n], g - 5, y + (n << g));
                      }
                  });
        })(t._root, t._level, 0);
    }
    function eo(t, e, r, n, i, o, a) {
        var u = Object.create(ee);
        return (u.size = e - t), (u._origin = t), (u._capacity = e), (u._level = r), (u._root = n), (u._tail = i), (u.__ownerID = o), (u.__hash = a), (u.__altered = !1), u;
    }
    function ea() {
        return o || (o = eo(0, 0, 5));
    }
    function eu(t, e, r, n, i, o) {
        var a,
            u = (n >>> r) & 31,
            s = t && u < t.array.length;
        if (!s && void 0 === i) return t;
        if (r > 0) {
            var c = t && t.array[u],
                l = eu(c, e, r - 5, n, i, o);
            return l === c ? t : (((a = es(t, e)).array[u] = l), a);
        }
        return s && t.array[u] === i ? t : (T(o), (a = es(t, e)), void 0 === i && u === a.array.length - 1 ? a.array.pop() : (a.array[u] = i), a);
    }
    function es(t, e) {
        return e && t && e === t.ownerID ? t : new er(t ? t.array.slice() : [], e);
    }
    function ec(t, e) {
        if (e >= ep(t._capacity)) return t._tail;
        if (e < 1 << (t._level + 5)) {
            for (var r = t._root, n = t._level; r && n > 0; ) (r = r.array[(e >>> n) & 31]), (n -= 5);
            return r;
        }
    }
    function el(t, e, r) {
        void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
        var n = t.__ownerID || new M(),
            i = t._origin,
            o = t._capacity,
            a = i + e,
            u = void 0 === r ? o : r < 0 ? o + r : i + r;
        if (a === i && u === o) return t;
        if (a >= u) return t.clear();
        for (var s = t._level, c = t._root, l = 0; a + l < 0; ) (c = new er(c && c.array.length ? [void 0, c] : [], n)), (s += 5), (l += 1 << s);
        l && ((a += l), (i += l), (u += l), (o += l));
        for (var f = ep(o), p = ep(u); p >= 1 << (s + 5); ) (c = new er(c && c.array.length ? [c] : [], n)), (s += 5);
        var h = t._tail,
            d = p < f ? ec(t, u - 1) : p > f ? new er([], n) : h;
        if (h && p > f && a < o && h.array.length) {
            for (var g = (c = es(c, n)), y = s; y > 5; y -= 5) {
                var v = (f >>> y) & 31;
                g = g.array[v] = es(g.array[v], n);
            }
            g.array[(f >>> 5) & 31] = h;
        }
        if ((u < o && (d = d && d.removeAfter(n, 0, u)), a >= p)) (a -= p), (u -= p), (s = 5), (c = null), (d = d && d.removeBefore(n, 0, a));
        else if (a > i || p < f) {
            for (l = 0; c; ) {
                var m = (a >>> s) & 31;
                if ((m !== p >>> s) & 31) break;
                m && (l += (1 << s) * m), (s -= 5), (c = c.array[m]);
            }
            c && a > i && (c = c.removeBefore(n, s, a - l)), c && p < f && (c = c.removeAfter(n, s, p - l)), l && ((a -= l), (u -= l));
        }
        return t.__ownerID ? ((t.size = u - a), (t._origin = a), (t._capacity = u), (t._level = s), (t._root = c), (t._tail = d), (t.__hash = void 0), (t.__altered = !0), t) : eo(a, u, s, c, d);
    }
    function ef(t, e, r) {
        for (var n = [], i = 0, o = 0; o < r.length; o++) {
            var a = r[o],
                u = d(a);
            u.size > i && (i = u.size),
                y(a) ||
                    (u = u.map(function (t) {
                        return tl(t);
                    })),
                n.push(u);
        }
        return i > t.size && (t = t.setSize(i)), t6(t, e, n);
    }
    function ep(t) {
        return t < 32 ? 0 : ((t - 1) >>> 5) << 5;
    }
    function eh(t) {
        return null == t
            ? ey()
            : ed(t)
              ? t
              : ey().withMutations(function (e) {
                    var r = h(t);
                    tB(r.size),
                        r.forEach(function (t, r) {
                            return e.set(r, t);
                        });
                });
    }
    function ed(t) {
        return tR(t) && b(t);
    }
    function eg(t, e, r, n) {
        var i = Object.create(eh.prototype);
        return (i.size = t ? t.size : 0), (i._map = t), (i._list = e), (i.__ownerID = r), (i.__hash = n), i;
    }
    function ey() {
        return a || (a = eg(tJ(), ea()));
    }
    function ev(t, e, r) {
        var n,
            i,
            o = t._map,
            a = t._list,
            u = o.get(e),
            s = void 0 !== u;
        if (r === C) {
            if (!s) return t;
            a.size >= 32 && a.size >= 2 * o.size
                ? ((n = (i = a.filter(function (t, e) {
                      return void 0 !== t && u !== e;
                  }))
                      .toKeyedSeq()
                      .map(function (t) {
                          return t[0];
                      })
                      .flip()
                      .toMap()),
                  t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
                : ((n = o.remove(e)), (i = u === a.size - 1 ? a.pop() : a.set(u, void 0)));
        } else if (s) {
            if (r === a.get(u)[1]) return t;
            (n = o), (i = a.set(u, [e, r]));
        } else (n = o.set(e, a.size)), (i = a.set(a.size, [e, r]));
        return t.__ownerID ? ((t.size = n.size), (t._map = n), (t._list = i), (t.__hash = void 0), t) : eg(n, i);
    }
    function em(t, e) {
        (this._iter = t), (this._useKeys = e), (this.size = t.size);
    }
    function e_(t) {
        (this._iter = t), (this.size = t.size);
    }
    function eb(t) {
        (this._iter = t), (this.size = t.size);
    }
    function eS(t) {
        (this._iter = t), (this.size = t.size);
    }
    function ew(t) {
        var e = eF(t);
        return (
            (e._iter = t),
            (e.size = t.size),
            (e.flip = function () {
                return t;
            }),
            (e.reverse = function () {
                var e = t.reverse.apply(this);
                return (
                    (e.flip = function () {
                        return t.reverse();
                    }),
                    e
                );
            }),
            (e.has = function (e) {
                return t.includes(e);
            }),
            (e.includes = function (e) {
                return t.has(e);
            }),
            (e.cacheResult = eN),
            (e.__iterateUncached = function (e, r) {
                var n = this;
                return t.__iterate(function (t, r) {
                    return !1 !== e(r, t, n);
                }, r);
            }),
            (e.__iteratorUncached = function (e, r) {
                if (2 === e) {
                    var n = t.__iterator(e, r);
                    return new j(function () {
                        var t = n.next();
                        if (!t.done) {
                            var e = t.value[0];
                            (t.value[0] = t.value[1]), (t.value[1] = e);
                        }
                        return t;
                    });
                }
                return t.__iterator(+(1 !== e), r);
            }),
            e
        );
    }
    function ex(t, e, r) {
        var n = eF(t);
        return (
            (n.size = t.size),
            (n.has = function (e) {
                return t.has(e);
            }),
            (n.get = function (n, i) {
                var o = t.get(n, C);
                return o === C ? i : e.call(r, o, n, t);
            }),
            (n.__iterateUncached = function (n, i) {
                var o = this;
                return t.__iterate(function (t, i, a) {
                    return !1 !== n(e.call(r, t, i, a), i, o);
                }, i);
            }),
            (n.__iteratorUncached = function (n, i) {
                var o = t.__iterator(2, i);
                return new j(function () {
                    var i = o.next();
                    if (i.done) return i;
                    var a = i.value,
                        u = a[0];
                    return U(n, u, e.call(r, a[1], u, t), i);
                });
            }),
            n
        );
    }
    function ek(t, e) {
        var r = eF(t);
        return (
            (r._iter = t),
            (r.size = t.size),
            (r.reverse = function () {
                return t;
            }),
            t.flip &&
                (r.flip = function () {
                    var e = ew(t);
                    return (
                        (e.reverse = function () {
                            return t.flip();
                        }),
                        e
                    );
                }),
            (r.get = function (r, n) {
                return t.get(e ? r : -1 - r, n);
            }),
            (r.has = function (r) {
                return t.has(e ? r : -1 - r);
            }),
            (r.includes = function (e) {
                return t.includes(e);
            }),
            (r.cacheResult = eN),
            (r.__iterate = function (e, r) {
                var n = this;
                return t.__iterate(function (t, r) {
                    return e(t, r, n);
                }, !r);
            }),
            (r.__iterator = function (e, r) {
                return t.__iterator(e, !r);
            }),
            r
        );
    }
    function eE(t, e, r, n) {
        var i = eF(t);
        return (
            n &&
                ((i.has = function (n) {
                    var i = t.get(n, C);
                    return i !== C && !!e.call(r, i, n, t);
                }),
                (i.get = function (n, i) {
                    var o = t.get(n, C);
                    return o !== C && e.call(r, o, n, t) ? o : i;
                })),
            (i.__iterateUncached = function (i, o) {
                var a = this,
                    u = 0;
                return (
                    t.__iterate(function (t, o, s) {
                        if (e.call(r, t, o, s)) return u++, i(t, n ? o : u - 1, a);
                    }, o),
                    u
                );
            }),
            (i.__iteratorUncached = function (i, o) {
                var a = t.__iterator(2, o),
                    u = 0;
                return new j(function () {
                    for (;;) {
                        var o = a.next();
                        if (o.done) return o;
                        var s = o.value,
                            c = s[0],
                            l = s[1];
                        if (e.call(r, l, c, t)) return U(i, n ? c : u++, l, o);
                    }
                });
            }),
            i
        );
    }
    function eC(t, e, r, n) {
        var i,
            o = t.size;
        if ((void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), R(e, r, o))) return t;
        var a = F(e, o, 0),
            u = F(r, o, o);
        if (a != a || u != u) return eC(t.toSeq().cacheResult(), e, r, n);
        var s = u - a;
        s == s && (i = s < 0 ? 0 : s);
        var c = eF(t);
        return (
            (c.size = 0 === i ? i : (t.size && i) || void 0),
            !n &&
                tn(t) &&
                i >= 0 &&
                (c.get = function (e, r) {
                    return (e = B(this, e)) >= 0 && e < i ? t.get(e + a, r) : r;
                }),
            (c.__iterateUncached = function (e, r) {
                var o = this;
                if (0 === i) return 0;
                if (r) return this.cacheResult().__iterate(e, r);
                var u = 0,
                    s = !0,
                    c = 0;
                return (
                    t.__iterate(function (t, r) {
                        if (!(s && (s = u++ < a))) return c++, !1 !== e(t, n ? r : c - 1, o) && c !== i;
                    }),
                    c
                );
            }),
            (c.__iteratorUncached = function (e, r) {
                if (0 !== i && r) return this.cacheResult().__iterator(e, r);
                var o = 0 !== i && t.__iterator(e, r),
                    u = 0,
                    s = 0;
                return new j(function () {
                    for (; u++ < a; ) o.next();
                    if (++s > i) return q();
                    var t = o.next();
                    return n || 1 === e ? t : 0 === e ? U(e, s - 1, void 0, t) : U(e, s - 1, t.value[1], t);
                });
            }),
            c
        );
    }
    function eD(t, e, r, n) {
        var i = eF(t);
        return (
            (i.__iterateUncached = function (i, o) {
                var a = this;
                if (o) return this.cacheResult().__iterate(i, o);
                var u = !0,
                    s = 0;
                return (
                    t.__iterate(function (t, o, c) {
                        if (!(u && (u = e.call(r, t, o, c)))) return s++, i(t, n ? o : s - 1, a);
                    }),
                    s
                );
            }),
            (i.__iteratorUncached = function (i, o) {
                var a = this;
                if (o) return this.cacheResult().__iterator(i, o);
                var u = t.__iterator(2, o),
                    s = !0,
                    c = 0;
                return new j(function () {
                    var t, o, l;
                    do {
                        if ((t = u.next()).done)
                            if (n || 1 === i) return t;
                            else if (0 === i) return U(i, c++, void 0, t);
                            else return U(i, c++, t.value[1], t);
                        var f = t.value;
                        (o = f[0]), (l = f[1]), s && (s = e.call(r, l, o, a));
                    } while (s);
                    return 2 === i ? t : U(i, o, l, t);
                });
            }),
            i
        );
    }
    function eO(t, e, r) {
        var n = eF(t);
        return (
            (n.__iterateUncached = function (n, i) {
                var o = 0,
                    a = !1;
                return (
                    !(function t(u, s) {
                        var c = this;
                        u.__iterate(function (i, u) {
                            return (!e || s < e) && y(i) ? t(i, s + 1) : !1 === n(i, r ? u : o++, c) && (a = !0), !a;
                        }, i);
                    })(t, 0),
                    o
                );
            }),
            (n.__iteratorUncached = function (n, i) {
                var o = t.__iterator(n, i),
                    a = [],
                    u = 0;
                return new j(function () {
                    for (; o; ) {
                        var t = o.next();
                        if (!1 !== t.done) {
                            o = a.pop();
                            continue;
                        }
                        var s = t.value;
                        if ((2 === n && (s = s[1]), !((!e || a.length < e) && y(s)))) return r ? t : U(n, u++, s, t);
                        a.push(o), (o = s.__iterator(n, i));
                    }
                    return q();
                });
            }),
            n
        );
    }
    function eK(t, e, r) {
        e || (e = eP);
        var n = v(t),
            i = 0,
            o = t
                .toSeq()
                .map(function (e, n) {
                    return [n, e, i++, r ? r(e, n, t) : e];
                })
                .toArray();
        return (
            o
                .sort(function (t, r) {
                    return e(t[3], r[3]) || t[2] - r[2];
                })
                .forEach(
                    n
                        ? function (t, e) {
                              o[e].length = 2;
                          }
                        : function (t, e) {
                              o[e] = t[1];
                          }
                ),
            n ? $(o) : m(t) ? X(o) : Z(o)
        );
    }
    function eT(t, e, r) {
        if ((e || (e = eP), !r))
            return t.reduce(function (t, r) {
                return eM(e, t, r) ? r : t;
            });
        var n = t
            .toSeq()
            .map(function (e, n) {
                return [e, r(e, n, t)];
            })
            .reduce(function (t, r) {
                return eM(e, t[1], r[1]) ? r : t;
            });
        return n && n[0];
    }
    function eM(t, e, r) {
        var n = t(r, e);
        return (0 === n && r !== e && (null == r || r != r)) || n > 0;
    }
    function eA(t, e, r) {
        var n = eF(t);
        return (
            (n.size = new Q(r)
                .map(function (t) {
                    return t.size;
                })
                .min()),
            (n.__iterate = function (t, e) {
                for (var r, n = this.__iterator(1, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this); );
                return i;
            }),
            (n.__iteratorUncached = function (t, n) {
                var i = r.map(function (t) {
                        return (t = p(t)), W(n ? t.reverse() : t);
                    }),
                    o = 0,
                    a = !1;
                return new j(function () {
                    var r;
                    return (a ||
                        (a = (r = i.map(function (t) {
                            return t.next();
                        })).some(function (t) {
                            return t.done;
                        })),
                    a)
                        ? q()
                        : U(
                              t,
                              o++,
                              e.apply(
                                  null,
                                  r.map(function (t) {
                                      return t.value;
                                  })
                              )
                          );
                });
            }),
            n
        );
    }
    function eI(t, e) {
        return tn(t) ? e : t.constructor(e);
    }
    function eB(t) {
        if (t !== Object(t)) throw TypeError('Expected [K, V] tuple: ' + t);
    }
    function eL(t) {
        return tB(t.size), I(t);
    }
    function eR(t) {
        return v(t) ? h : m(t) ? d : g;
    }
    function eF(t) {
        return Object.create((v(t) ? $ : m(t) ? X : Z).prototype);
    }
    function eN() {
        return this._iter.cacheResult ? (this._iter.cacheResult(), (this.size = this._iter.size), this) : J.prototype.cacheResult.call(this);
    }
    function eP(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
    }
    function ez(t) {
        var e = W(t);
        if (!e) {
            if (!G(t)) throw TypeError('Expected iterable or array-like: ' + t);
            e = W(p(t));
        }
        return e;
    }
    function ej(t, e) {
        var r,
            n = function (o) {
                if (o instanceof n) return o;
                if (!(this instanceof n)) return new n(o);
                if (!r) {
                    r = !0;
                    var a = Object.keys(t);
                    (function (t, e) {
                        try {
                            e.forEach(eW.bind(void 0, t));
                        } catch (t) {}
                    })(i, a),
                        (i.size = a.length),
                        (i._name = e),
                        (i._keys = a),
                        (i._defaultValues = t);
                }
                this._map = tL(o);
            },
            i = (n.prototype = Object.create(eU));
        return (i.constructor = n), n;
    }
    f(eh, tL),
        (eh.of = function () {
            return this(arguments);
        }),
        (eh.prototype.toString = function () {
            return this.__toString('OrderedMap {', '}');
        }),
        (eh.prototype.get = function (t, e) {
            var r = this._map.get(t);
            return void 0 !== r ? this._list.get(r)[1] : e;
        }),
        (eh.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), this._map.clear(), this._list.clear(), this) : ey();
        }),
        (eh.prototype.set = function (t, e) {
            return ev(this, t, e);
        }),
        (eh.prototype.remove = function (t) {
            return ev(this, t, C);
        }),
        (eh.prototype.wasAltered = function () {
            return this._map.wasAltered() || this._list.wasAltered();
        }),
        (eh.prototype.__iterate = function (t, e) {
            var r = this;
            return this._list.__iterate(function (e) {
                return e && t(e[1], e[0], r);
            }, e);
        }),
        (eh.prototype.__iterator = function (t, e) {
            return this._list.fromEntrySeq().__iterator(t, e);
        }),
        (eh.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t),
                r = this._list.__ensureOwner(t);
            return t ? eg(e, r, t, this.__hash) : ((this.__ownerID = t), (this._map = e), (this._list = r), this);
        }),
        (eh.isOrderedMap = ed),
        (eh.prototype[k] = !0),
        (eh.prototype[E] = eh.prototype.remove),
        f(em, $),
        (em.prototype.get = function (t, e) {
            return this._iter.get(t, e);
        }),
        (em.prototype.has = function (t) {
            return this._iter.has(t);
        }),
        (em.prototype.valueSeq = function () {
            return this._iter.valueSeq();
        }),
        (em.prototype.reverse = function () {
            var t = this,
                e = ek(this, !0);
            return (
                this._useKeys ||
                    (e.valueSeq = function () {
                        return t._iter.toSeq().reverse();
                    }),
                e
            );
        }),
        (em.prototype.map = function (t, e) {
            var r = this,
                n = ex(this, t, e);
            return (
                this._useKeys ||
                    (n.valueSeq = function () {
                        return r._iter.toSeq().map(t, e);
                    }),
                n
            );
        }),
        (em.prototype.__iterate = function (t, e) {
            var r,
                n = this;
            return this._iter.__iterate(
                this._useKeys
                    ? function (e, r) {
                          return t(e, r, n);
                      }
                    : ((r = e ? eL(this) : 0),
                      function (i) {
                          return t(i, e ? --r : r++, n);
                      }),
                e
            );
        }),
        (em.prototype.__iterator = function (t, e) {
            if (this._useKeys) return this._iter.__iterator(t, e);
            var r = this._iter.__iterator(1, e),
                n = e ? eL(this) : 0;
            return new j(function () {
                var i = r.next();
                return i.done ? i : U(t, e ? --n : n++, i.value, i);
            });
        }),
        (em.prototype[k] = !0),
        f(e_, X),
        (e_.prototype.includes = function (t) {
            return this._iter.includes(t);
        }),
        (e_.prototype.__iterate = function (t, e) {
            var r = this,
                n = 0;
            return this._iter.__iterate(function (e) {
                return t(e, n++, r);
            }, e);
        }),
        (e_.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(1, e),
                n = 0;
            return new j(function () {
                var e = r.next();
                return e.done ? e : U(t, n++, e.value, e);
            });
        }),
        f(eb, Z),
        (eb.prototype.has = function (t) {
            return this._iter.includes(t);
        }),
        (eb.prototype.__iterate = function (t, e) {
            var r = this;
            return this._iter.__iterate(function (e) {
                return t(e, e, r);
            }, e);
        }),
        (eb.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(1, e);
            return new j(function () {
                var e = r.next();
                return e.done ? e : U(t, e.value, e.value, e);
            });
        }),
        f(eS, $),
        (eS.prototype.entrySeq = function () {
            return this._iter.toSeq();
        }),
        (eS.prototype.__iterate = function (t, e) {
            var r = this;
            return this._iter.__iterate(function (e) {
                if (e) {
                    eB(e);
                    var n = y(e);
                    return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
                }
            }, e);
        }),
        (eS.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(1, e);
            return new j(function () {
                for (;;) {
                    var e = r.next();
                    if (e.done) return e;
                    var n = e.value;
                    if (n) {
                        eB(n);
                        var i = y(n);
                        return U(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
                    }
                }
            });
        }),
        (e_.prototype.cacheResult = em.prototype.cacheResult = eb.prototype.cacheResult = eS.prototype.cacheResult = eN),
        f(ej, tm),
        (ej.prototype.toString = function () {
            return this.__toString(eH(this) + ' {', '}');
        }),
        (ej.prototype.has = function (t) {
            return this._defaultValues.hasOwnProperty(t);
        }),
        (ej.prototype.get = function (t, e) {
            if (!this.has(t)) return e;
            var r = this._defaultValues[t];
            return this._map ? this._map.get(t, r) : r;
        }),
        (ej.prototype.clear = function () {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var t = this.constructor;
            return t._empty || (t._empty = eq(this, tJ()));
        }),
        (ej.prototype.set = function (t, e) {
            if (!this.has(t)) throw Error('Cannot set unknown key "' + t + '" on ' + eH(this));
            var r = this._map && this._map.set(t, e);
            return this.__ownerID || r === this._map ? this : eq(this, r);
        }),
        (ej.prototype.remove = function (t) {
            if (!this.has(t)) return this;
            var e = this._map && this._map.remove(t);
            return this.__ownerID || e === this._map ? this : eq(this, e);
        }),
        (ej.prototype.wasAltered = function () {
            return this._map.wasAltered();
        }),
        (ej.prototype.__iterator = function (t, e) {
            var r = this;
            return h(this._defaultValues)
                .map(function (t, e) {
                    return r.get(e);
                })
                .__iterator(t, e);
        }),
        (ej.prototype.__iterate = function (t, e) {
            var r = this;
            return h(this._defaultValues)
                .map(function (t, e) {
                    return r.get(e);
                })
                .__iterate(t, e);
        }),
        (ej.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map && this._map.__ensureOwner(t);
            return t ? eq(this, e, t) : ((this.__ownerID = t), (this._map = e), this);
        });
    var eU = ej.prototype;
    function eq(t, e, r) {
        var n = Object.create(Object.getPrototypeOf(t));
        return (n._map = e), (n.__ownerID = r), n;
    }
    function eH(t) {
        return t._name || t.constructor.name || 'Record';
    }
    function eW(t, e) {
        Object.defineProperty(t, e, {
            get: function () {
                return this.get(e);
            },
            set: function (t) {
                tg(this.__ownerID, 'Cannot set on an immutable record.'), this.set(e, t);
            }
        });
    }
    function eV(t) {
        return null == t
            ? eY()
            : eG(t) && !b(t)
              ? t
              : eY().withMutations(function (e) {
                    var r = g(t);
                    tB(r.size),
                        r.forEach(function (t) {
                            return e.add(t);
                        });
                });
    }
    function eG(t) {
        return !!(t && t[eJ]);
    }
    (eU[E] = eU.remove),
        (eU.deleteIn = eU.removeIn = tN.removeIn),
        (eU.merge = tN.merge),
        (eU.mergeWith = tN.mergeWith),
        (eU.mergeIn = tN.mergeIn),
        (eU.mergeDeep = tN.mergeDeep),
        (eU.mergeDeepWith = tN.mergeDeepWith),
        (eU.mergeDeepIn = tN.mergeDeepIn),
        (eU.setIn = tN.setIn),
        (eU.update = tN.update),
        (eU.updateIn = tN.updateIn),
        (eU.withMutations = tN.withMutations),
        (eU.asMutable = tN.asMutable),
        (eU.asImmutable = tN.asImmutable),
        f(eV, tb),
        (eV.of = function () {
            return this(arguments);
        }),
        (eV.fromKeys = function (t) {
            return this(h(t).keySeq());
        }),
        (eV.prototype.toString = function () {
            return this.__toString('Set {', '}');
        }),
        (eV.prototype.has = function (t) {
            return this._map.has(t);
        }),
        (eV.prototype.add = function (t) {
            return eX(this, this._map.set(t, !0));
        }),
        (eV.prototype.remove = function (t) {
            return eX(this, this._map.remove(t));
        }),
        (eV.prototype.clear = function () {
            return eX(this, this._map.clear());
        }),
        (eV.prototype.union = function () {
            var t = l.call(arguments, 0);
            return 0 ===
                (t = t.filter(function (t) {
                    return 0 !== t.size;
                })).length
                ? this
                : 0 !== this.size || this.__ownerID || 1 !== t.length
                  ? this.withMutations(function (e) {
                        for (var r = 0; r < t.length; r++)
                            g(t[r]).forEach(function (t) {
                                return e.add(t);
                            });
                    })
                  : this.constructor(t[0]);
        }),
        (eV.prototype.intersect = function () {
            var t = l.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function (t) {
                return g(t);
            });
            var e = this;
            return this.withMutations(function (r) {
                e.forEach(function (e) {
                    t.every(function (t) {
                        return t.includes(e);
                    }) || r.remove(e);
                });
            });
        }),
        (eV.prototype.subtract = function () {
            var t = l.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function (t) {
                return g(t);
            });
            var e = this;
            return this.withMutations(function (r) {
                e.forEach(function (e) {
                    t.some(function (t) {
                        return t.includes(e);
                    }) && r.remove(e);
                });
            });
        }),
        (eV.prototype.merge = function () {
            return this.union.apply(this, arguments);
        }),
        (eV.prototype.mergeWith = function (t) {
            var e = l.call(arguments, 1);
            return this.union.apply(this, e);
        }),
        (eV.prototype.sort = function (t) {
            return eQ(eK(this, t));
        }),
        (eV.prototype.sortBy = function (t, e) {
            return eQ(eK(this, e, t));
        }),
        (eV.prototype.wasAltered = function () {
            return this._map.wasAltered();
        }),
        (eV.prototype.__iterate = function (t, e) {
            var r = this;
            return this._map.__iterate(function (e, n) {
                return t(n, n, r);
            }, e);
        }),
        (eV.prototype.__iterator = function (t, e) {
            return this._map
                .map(function (t, e) {
                    return e;
                })
                .__iterator(t, e);
        }),
        (eV.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t);
            return t ? this.__make(e, t) : ((this.__ownerID = t), (this._map = e), this);
        }),
        (eV.isSet = eG);
    var eJ = '@@__IMMUTABLE_SET__@@',
        e$ = eV.prototype;
    function eX(t, e) {
        return t.__ownerID ? ((t.size = e.size), (t._map = e), t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
    }
    function eZ(t, e) {
        var r = Object.create(e$);
        return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
    }
    function eY() {
        return u || (u = eZ(tJ()));
    }
    function eQ(t) {
        return null == t
            ? e3()
            : e0(t)
              ? t
              : e3().withMutations(function (e) {
                    var r = g(t);
                    tB(r.size),
                        r.forEach(function (t) {
                            return e.add(t);
                        });
                });
    }
    function e0(t) {
        return eG(t) && b(t);
    }
    (e$[eJ] = !0),
        (e$[E] = e$.remove),
        (e$.mergeDeep = e$.merge),
        (e$.mergeDeepWith = e$.mergeWith),
        (e$.withMutations = tN.withMutations),
        (e$.asMutable = tN.asMutable),
        (e$.asImmutable = tN.asImmutable),
        (e$.__empty = eY),
        (e$.__make = eZ),
        f(eQ, eV),
        (eQ.of = function () {
            return this(arguments);
        }),
        (eQ.fromKeys = function (t) {
            return this(h(t).keySeq());
        }),
        (eQ.prototype.toString = function () {
            return this.__toString('OrderedSet {', '}');
        }),
        (eQ.isOrderedSet = e0);
    var e1 = eQ.prototype;
    function e6(t, e) {
        var r = Object.create(e1);
        return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
    }
    function e3() {
        return s || (s = e6(ey()));
    }
    function e2(t) {
        return null == t ? e4() : e5(t) ? t : e4().unshiftAll(t);
    }
    function e5(t) {
        return !!(t && t[e8]);
    }
    (e1[k] = !0),
        (e1.__empty = e3),
        (e1.__make = e6),
        f(e2, t_),
        (e2.of = function () {
            return this(arguments);
        }),
        (e2.prototype.toString = function () {
            return this.__toString('Stack [', ']');
        }),
        (e2.prototype.get = function (t, e) {
            var r = this._head;
            for (t = B(this, t); r && t--; ) r = r.next;
            return r ? r.value : e;
        }),
        (e2.prototype.peek = function () {
            return this._head && this._head.value;
        }),
        (e2.prototype.push = function () {
            if (0 == arguments.length) return this;
            for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--)
                e = {
                    value: arguments[r],
                    next: e
                };
            return this.__ownerID ? ((this.size = t), (this._head = e), (this.__hash = void 0), (this.__altered = !0), this) : e7(t, e);
        }),
        (e2.prototype.pushAll = function (t) {
            if (0 === (t = d(t)).size) return this;
            tB(t.size);
            var e = this.size,
                r = this._head;
            return (t.reverse().forEach(function (t) {
                e++,
                    (r = {
                        value: t,
                        next: r
                    });
            }),
            this.__ownerID)
                ? ((this.size = e), (this._head = r), (this.__hash = void 0), (this.__altered = !0), this)
                : e7(e, r);
        }),
        (e2.prototype.pop = function () {
            return this.slice(1);
        }),
        (e2.prototype.unshift = function () {
            return this.push.apply(this, arguments);
        }),
        (e2.prototype.unshiftAll = function (t) {
            return this.pushAll(t);
        }),
        (e2.prototype.shift = function () {
            return this.pop.apply(this, arguments);
        }),
        (e2.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), (this._head = void 0), (this.__hash = void 0), (this.__altered = !0), this) : e4();
        }),
        (e2.prototype.slice = function (t, e) {
            if (R(t, e, this.size)) return this;
            var r,
                n = F(t, this.size, 0);
            if (F(e, (r = this.size), r) !== this.size) return t_.prototype.slice.call(this, t, e);
            for (var i = this.size - n, o = this._head; n--; ) o = o.next;
            return this.__ownerID ? ((this.size = i), (this._head = o), (this.__hash = void 0), (this.__altered = !0), this) : e7(i, o);
        }),
        (e2.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID ? this : t ? e7(this.size, this._head, t, this.__hash) : ((this.__ownerID = t), (this.__altered = !1), this);
        }),
        (e2.prototype.__iterate = function (t, e) {
            if (e) return this.reverse().__iterate(t);
            for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this); ) n = n.next;
            return r;
        }),
        (e2.prototype.__iterator = function (t, e) {
            if (e) return this.reverse().__iterator(t);
            var r = 0,
                n = this._head;
            return new j(function () {
                if (n) {
                    var e = n.value;
                    return (n = n.next), U(t, r++, e);
                }
                return q();
            });
        }),
        (e2.isStack = e5);
    var e8 = '@@__IMMUTABLE_STACK__@@',
        e9 = e2.prototype;
    function e7(t, e, r, n) {
        var i = Object.create(e9);
        return (i.size = t), (i._head = e), (i.__ownerID = r), (i.__hash = n), (i.__altered = !1), i;
    }
    function e4() {
        return c || (c = e7(0));
    }
    function rt(t, e) {
        var r = function (r) {
            t.prototype[r] = e[r];
        };
        return Object.keys(e).forEach(r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r), t;
    }
    (e9[e8] = !0),
        (e9.withMutations = tN.withMutations),
        (e9.asMutable = tN.asMutable),
        (e9.asImmutable = tN.asImmutable),
        (e9.wasAltered = tN.wasAltered),
        (p.Iterator = j),
        rt(p, {
            toArray: function () {
                tB(this.size);
                var t = Array(this.size || 0);
                return (
                    this.valueSeq().__iterate(function (e, r) {
                        t[r] = e;
                    }),
                    t
                );
            },
            toIndexedSeq: function () {
                return new e_(this);
            },
            toJS: function () {
                return this.toSeq()
                    .map(function (t) {
                        return t && 'function' == typeof t.toJS ? t.toJS() : t;
                    })
                    .__toJS();
            },
            toJSON: function () {
                return this.toSeq()
                    .map(function (t) {
                        return t && 'function' == typeof t.toJSON ? t.toJSON() : t;
                    })
                    .__toJS();
            },
            toKeyedSeq: function () {
                return new em(this, !0);
            },
            toMap: function () {
                return tL(this.toKeyedSeq());
            },
            toObject: function () {
                tB(this.size);
                var t = {};
                return (
                    this.__iterate(function (e, r) {
                        t[r] = e;
                    }),
                    t
                );
            },
            toOrderedMap: function () {
                return eh(this.toKeyedSeq());
            },
            toOrderedSet: function () {
                return eQ(v(this) ? this.valueSeq() : this);
            },
            toSet: function () {
                return eV(v(this) ? this.valueSeq() : this);
            },
            toSetSeq: function () {
                return new eb(this);
            },
            toSeq: function () {
                return m(this) ? this.toIndexedSeq() : v(this) ? this.toKeyedSeq() : this.toSetSeq();
            },
            toStack: function () {
                return e2(v(this) ? this.valueSeq() : this);
            },
            toList: function () {
                return t7(v(this) ? this.valueSeq() : this);
            },
            toString: function () {
                return '[Iterable]';
            },
            __toString: function (t, e) {
                return 0 === this.size ? t + e : t + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + e;
            },
            concat: function () {
                var t = l.call(arguments, 0);
                return eI(
                    this,
                    (function (t, e) {
                        var r = v(t),
                            n = [t]
                                .concat(e)
                                .map(function (t) {
                                    return y(t) ? r && (t = h(t)) : (t = r ? to(t) : ta(Array.isArray(t) ? t : [t])), t;
                                })
                                .filter(function (t) {
                                    return 0 !== t.size;
                                });
                        if (0 === n.length) return t;
                        if (1 === n.length) {
                            var i = n[0];
                            if (i === t || (r && v(i)) || (m(t) && m(i))) return i;
                        }
                        var o = new Q(n);
                        return (
                            r ? (o = o.toKeyedSeq()) : m(t) || (o = o.toSetSeq()),
                            ((o = o.flatten(!0)).size = n.reduce(function (t, e) {
                                if (void 0 !== t) {
                                    var r = e.size;
                                    if (void 0 !== r) return t + r;
                                }
                            }, 0)),
                            o
                        );
                    })(this, t)
                );
            },
            includes: function (t) {
                return this.some(function (e) {
                    return tp(e, t);
                });
            },
            entries: function () {
                return this.__iterator(2);
            },
            every: function (t, e) {
                tB(this.size);
                var r = !0;
                return (
                    this.__iterate(function (n, i, o) {
                        if (!t.call(e, n, i, o)) return (r = !1), !1;
                    }),
                    r
                );
            },
            filter: function (t, e) {
                return eI(this, eE(this, t, e, !0));
            },
            find: function (t, e, r) {
                var n = this.findEntry(t, e);
                return n ? n[1] : r;
            },
            findEntry: function (t, e) {
                var r;
                return (
                    this.__iterate(function (n, i, o) {
                        if (t.call(e, n, i, o)) return (r = [i, n]), !1;
                    }),
                    r
                );
            },
            findLastEntry: function (t, e) {
                return this.toSeq().reverse().findEntry(t, e);
            },
            forEach: function (t, e) {
                return tB(this.size), this.__iterate(e ? t.bind(e) : t);
            },
            join: function (t) {
                tB(this.size), (t = void 0 !== t ? '' + t : ',');
                var e = '',
                    r = !0;
                return (
                    this.__iterate(function (n) {
                        r ? (r = !1) : (e += t), (e += null != n ? n.toString() : '');
                    }),
                    e
                );
            },
            keys: function () {
                return this.__iterator(0);
            },
            map: function (t, e) {
                return eI(this, ex(this, t, e));
            },
            reduce: function (t, e, r) {
                var n, i;
                return (
                    tB(this.size),
                    arguments.length < 2 ? (i = !0) : (n = e),
                    this.__iterate(function (e, o, a) {
                        i ? ((i = !1), (n = e)) : (n = t.call(r, n, e, o, a));
                    }),
                    n
                );
            },
            reduceRight: function (t, e, r) {
                var n = this.toKeyedSeq().reverse();
                return n.reduce.apply(n, arguments);
            },
            reverse: function () {
                return eI(this, ek(this, !0));
            },
            slice: function (t, e) {
                return eI(this, eC(this, t, e, !0));
            },
            some: function (t, e) {
                return !this.every(ro(t), e);
            },
            sort: function (t) {
                return eI(this, eK(this, t));
            },
            values: function () {
                return this.__iterator(1);
            },
            butLast: function () {
                return this.slice(0, -1);
            },
            isEmpty: function () {
                return void 0 !== this.size
                    ? 0 === this.size
                    : !this.some(function () {
                          return !0;
                      });
            },
            count: function (t, e) {
                return I(t ? this.toSeq().filter(t, e) : this);
            },
            countBy: function (t, e) {
                var r, n;
                return (
                    (r = this),
                    (n = tL().asMutable()),
                    r.__iterate(function (i, o) {
                        n.update(t.call(e, i, o, r), 0, function (t) {
                            return t + 1;
                        });
                    }),
                    n.asImmutable()
                );
            },
            equals: function (t) {
                return th(this, t);
            },
            entrySeq: function () {
                var t = this;
                if (t._cache) return new Q(t._cache);
                var e = t.toSeq().map(ri).toIndexedSeq();
                return (
                    (e.fromEntrySeq = function () {
                        return t.toSeq();
                    }),
                    e
                );
            },
            filterNot: function (t, e) {
                return this.filter(ro(t), e);
            },
            findLast: function (t, e, r) {
                return this.toKeyedSeq().reverse().find(t, e, r);
            },
            first: function () {
                return this.find(L);
            },
            flatMap: function (t, e) {
                var r, n;
                return eI(
                    this,
                    ((r = this),
                    (n = eR(r)),
                    r
                        .toSeq()
                        .map(function (i, o) {
                            return n(t.call(e, i, o, r));
                        })
                        .flatten(!0))
                );
            },
            flatten: function (t) {
                return eI(this, eO(this, t, !0));
            },
            fromEntrySeq: function () {
                return new eS(this);
            },
            get: function (t, e) {
                return this.find(
                    function (e, r) {
                        return tp(r, t);
                    },
                    void 0,
                    e
                );
            },
            getIn: function (t, e) {
                for (var r, n = this, i = ez(t); !(r = i.next()).done; ) {
                    var o = r.value;
                    if ((n = n && n.get ? n.get(o, C) : C) === C) return e;
                }
                return n;
            },
            groupBy: function (t, e) {
                var r, n, i, o;
                return (
                    (r = this),
                    (n = v(r)),
                    (i = (b(r) ? eh() : tL()).asMutable()),
                    r.__iterate(function (o, a) {
                        i.update(t.call(e, o, a, r), function (t) {
                            return (t = t || []).push(n ? [a, o] : o), t;
                        });
                    }),
                    (o = eR(r)),
                    i.map(function (t) {
                        return eI(r, o(t));
                    })
                );
            },
            has: function (t) {
                return this.get(t, C) !== C;
            },
            hasIn: function (t) {
                return this.getIn(t, C) !== C;
            },
            isSubset: function (t) {
                return (
                    (t = 'function' == typeof t.includes ? t : p(t)),
                    this.every(function (e) {
                        return t.includes(e);
                    })
                );
            },
            isSuperset: function (t) {
                return (t = 'function' == typeof t.isSubset ? t : p(t)).isSubset(this);
            },
            keySeq: function () {
                return this.toSeq().map(rn).toIndexedSeq();
            },
            last: function () {
                return this.toSeq().reverse().first();
            },
            max: function (t) {
                return eT(this, t);
            },
            maxBy: function (t, e) {
                return eT(this, e, t);
            },
            min: function (t) {
                return eT(this, t ? ra(t) : rc);
            },
            minBy: function (t, e) {
                return eT(this, e ? ra(e) : rc, t);
            },
            rest: function () {
                return this.slice(1);
            },
            skip: function (t) {
                return this.slice(Math.max(0, t));
            },
            skipLast: function (t) {
                return eI(this, this.toSeq().reverse().skip(t).reverse());
            },
            skipWhile: function (t, e) {
                return eI(this, eD(this, t, e, !0));
            },
            skipUntil: function (t, e) {
                return this.skipWhile(ro(t), e);
            },
            sortBy: function (t, e) {
                return eI(this, eK(this, e, t));
            },
            take: function (t) {
                return this.slice(0, Math.max(0, t));
            },
            takeLast: function (t) {
                return eI(this, this.toSeq().reverse().take(t).reverse());
            },
            takeWhile: function (t, e) {
                var r, n;
                return eI(
                    this,
                    ((r = this),
                    ((n = eF(r)).__iterateUncached = function (n, i) {
                        var o = this;
                        if (i) return this.cacheResult().__iterate(n, i);
                        var a = 0;
                        return (
                            r.__iterate(function (r, i, u) {
                                return t.call(e, r, i, u) && ++a && n(r, i, o);
                            }),
                            a
                        );
                    }),
                    (n.__iteratorUncached = function (n, i) {
                        var o = this;
                        if (i) return this.cacheResult().__iterator(n, i);
                        var a = r.__iterator(2, i),
                            u = !0;
                        return new j(function () {
                            if (!u) return q();
                            var r = a.next();
                            if (r.done) return r;
                            var i = r.value,
                                s = i[0],
                                c = i[1];
                            return t.call(e, c, s, o) ? (2 === n ? r : U(n, s, c, r)) : ((u = !1), q());
                        });
                    }),
                    n)
                );
            },
            takeUntil: function (t, e) {
                return this.takeWhile(ro(t), e);
            },
            valueSeq: function () {
                return this.toIndexedSeq();
            },
            hashCode: function () {
                return (
                    this.__hash ||
                    (this.__hash = (function (t) {
                        if (t.size === 1 / 0) return 0;
                        var e,
                            r,
                            n = b(t),
                            i = v(t),
                            o = +!!n;
                        return (
                            (e = t.__iterate(
                                i
                                    ? n
                                        ? function (t, e) {
                                              o = (31 * o + rl(tx(t), tx(e))) | 0;
                                          }
                                        : function (t, e) {
                                              o = (o + rl(tx(t), tx(e))) | 0;
                                          }
                                    : n
                                      ? function (t) {
                                            o = (31 * o + tx(t)) | 0;
                                        }
                                      : function (t) {
                                            o = (o + tx(t)) | 0;
                                        }
                            )),
                            (r = tS((r = o), 3432918353)),
                            (r = tS((r << 15) | (r >>> -15), 461845907)),
                            (r = (((r = tS((r << 13) | (r >>> -13), 5)) + 3864292196) | 0) ^ e),
                            (r = tS(r ^ (r >>> 16), 2246822507)),
                            (r = tw((r = tS(r ^ (r >>> 13), 3266489909)) ^ (r >>> 16)))
                        );
                    })(this))
                );
            }
        });
    var re = p.prototype;
    (re[S] = !0),
        (re[z] = re.values),
        (re.__toJS = re.toArray),
        (re.__toStringMapper = ru),
        (re.inspect = re.toSource =
            function () {
                return this.toString();
            }),
        (re.chain = re.flatMap),
        (re.contains = re.includes);
    try {
        Object.defineProperty(re, 'length', {
            get: function () {
                if (!p.noLengthWarning) {
                    var t;
                    try {
                        throw Error();
                    } catch (e) {
                        t = e.stack;
                    }
                    if (-1 === t.indexOf('_wrapObject')) return console && console.warn && console.warn('iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. ' + t), this.size;
                }
            }
        });
    } catch (t) {}
    rt(h, {
        flip: function () {
            return eI(this, ew(this));
        },
        findKey: function (t, e) {
            var r = this.findEntry(t, e);
            return r && r[0];
        },
        findLastKey: function (t, e) {
            return this.toSeq().reverse().findKey(t, e);
        },
        keyOf: function (t) {
            return this.findKey(function (e) {
                return tp(e, t);
            });
        },
        lastKeyOf: function (t) {
            return this.findLastKey(function (e) {
                return tp(e, t);
            });
        },
        mapEntries: function (t, e) {
            var r = this,
                n = 0;
            return eI(
                this,
                this.toSeq()
                    .map(function (i, o) {
                        return t.call(e, [o, i], n++, r);
                    })
                    .fromEntrySeq()
            );
        },
        mapKeys: function (t, e) {
            var r = this;
            return eI(
                this,
                this.toSeq()
                    .flip()
                    .map(function (n, i) {
                        return t.call(e, n, i, r);
                    })
                    .flip()
            );
        }
    });
    var rr = h.prototype;
    function rn(t, e) {
        return e;
    }
    function ri(t, e) {
        return [e, t];
    }
    function ro(t) {
        return function () {
            return !t.apply(this, arguments);
        };
    }
    function ra(t) {
        return function () {
            return -t.apply(this, arguments);
        };
    }
    function ru(t) {
        return 'string' == typeof t ? JSON.stringify(t) : t;
    }
    function rs() {
        return A(arguments);
    }
    function rc(t, e) {
        return t < e ? 1 : t > e ? -1 : 0;
    }
    function rl(t, e) {
        return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
    }
    return (
        (rr[w] = !0),
        (rr[z] = re.entries),
        (rr.__toJS = re.toObject),
        (rr.__toStringMapper = function (t, e) {
            return JSON.stringify(e) + ': ' + ru(t);
        }),
        rt(d, {
            toKeyedSeq: function () {
                return new em(this, !1);
            },
            filter: function (t, e) {
                return eI(this, eE(this, t, e, !1));
            },
            findIndex: function (t, e) {
                var r = this.findEntry(t, e);
                return r ? r[0] : -1;
            },
            indexOf: function (t) {
                var e = this.toKeyedSeq().keyOf(t);
                return void 0 === e ? -1 : e;
            },
            lastIndexOf: function (t) {
                var e = this.toKeyedSeq().reverse().keyOf(t);
                return void 0 === e ? -1 : e;
            },
            reverse: function () {
                return eI(this, ek(this, !1));
            },
            slice: function (t, e) {
                return eI(this, eC(this, t, e, !1));
            },
            splice: function (t, e) {
                var r = arguments.length;
                if (((e = Math.max(0 | e, 0)), 0 === r || (2 === r && !e))) return this;
                t = F(t, t < 0 ? this.count() : this.size, 0);
                var n = this.slice(0, t);
                return eI(this, 1 === r ? n : n.concat(A(arguments, 2), this.slice(t + e)));
            },
            findLastIndex: function (t, e) {
                var r = this.toKeyedSeq().findLastKey(t, e);
                return void 0 === r ? -1 : r;
            },
            first: function () {
                return this.get(0);
            },
            flatten: function (t) {
                return eI(this, eO(this, t, !1));
            },
            get: function (t, e) {
                return (t = B(this, t)) < 0 || this.size === 1 / 0 || (void 0 !== this.size && t > this.size)
                    ? e
                    : this.find(
                          function (e, r) {
                              return r === t;
                          },
                          void 0,
                          e
                      );
            },
            has: function (t) {
                return (t = B(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
            },
            interpose: function (t) {
                var e, r;
                return eI(
                    this,
                    ((e = this),
                    ((r = eF(e)).size = e.size && 2 * e.size - 1),
                    (r.__iterateUncached = function (r, n) {
                        var i = this,
                            o = 0;
                        return (
                            e.__iterate(function (e, n) {
                                return (!o || !1 !== r(t, o++, i)) && !1 !== r(e, o++, i);
                            }, n),
                            o
                        );
                    }),
                    (r.__iteratorUncached = function (r, n) {
                        var i,
                            o = e.__iterator(1, n),
                            a = 0;
                        return new j(function () {
                            return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? U(r, a++, t) : U(r, a++, i.value, i);
                        });
                    }),
                    r)
                );
            },
            interleave: function () {
                var t = [this].concat(A(arguments)),
                    e = eA(this.toSeq(), X.of, t),
                    r = e.flatten(!0);
                return e.size && (r.size = e.size * t.length), eI(this, r);
            },
            last: function () {
                return this.get(-1);
            },
            skipWhile: function (t, e) {
                return eI(this, eD(this, t, e, !1));
            },
            zip: function () {
                var t = [this].concat(A(arguments));
                return eI(this, eA(this, rs, t));
            },
            zipWith: function (t) {
                var e = A(arguments);
                return (e[0] = this), eI(this, eA(this, t, e));
            }
        }),
        (d.prototype[x] = !0),
        (d.prototype[k] = !0),
        rt(g, {
            get: function (t, e) {
                return this.has(t) ? t : e;
            },
            includes: function (t) {
                return this.has(t);
            },
            keySeq: function () {
                return this.valueSeq();
            }
        }),
        (g.prototype.has = re.includes),
        rt($, h.prototype),
        rt(X, d.prototype),
        rt(Z, g.prototype),
        rt(tm, h.prototype),
        rt(t_, d.prototype),
        rt(tb, g.prototype),
        {
            Iterable: p,
            Seq: J,
            Collection: tv,
            Map: tL,
            OrderedMap: eh,
            List: t7,
            Stack: e2,
            Set: eV,
            OrderedSet: eQ,
            Record: ej,
            Range: ty,
            Repeat: td,
            is: tp,
            fromJS: tl
        }
    );
})();
