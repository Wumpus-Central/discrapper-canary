!(function (t, n) {
    e.exports = n();
})(0, function () {
    var e,
        t,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        u = Array.prototype.slice;
    function d(e, t) {
        t && (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
    }
    function f(e) {
        return h(e) ? e : er(e);
    }
    function p(e) {
        return g(e) ? e : ei(e);
    }
    function _(e) {
        return E(e) ? e : ea(e);
    }
    function m(e) {
        return h(e) && !b(e) ? e : eo(e);
    }
    function h(e) {
        return !!(e && e[O]);
    }
    function g(e) {
        return !!(e && e[v]);
    }
    function E(e) {
        return !!(e && e[S]);
    }
    function b(e) {
        return g(e) || E(e);
    }
    function y(e) {
        return !!(e && e[I]);
    }
    d(p, f),
        d(_, f),
        d(m, f),
        (f.isIterable = h),
        (f.isKeyed = g),
        (f.isIndexed = E),
        (f.isAssociative = b),
        (f.isOrdered = y),
        (f.Keyed = p),
        (f.Indexed = _),
        (f.Set = m);
    var O = "@@__IMMUTABLE_ITERABLE__@@",
        v = "@@__IMMUTABLE_KEYED__@@",
        S = "@@__IMMUTABLE_INDEXED__@@",
        I = "@@__IMMUTABLE_ORDERED__@@",
        T = "delete",
        C = 5,
        A = 32,
        N = 31,
        P = {},
        R = { value: !1 },
        D = { value: !1 };
    function w(e) {
        return (e.value = !1), e;
    }
    function x(e) {
        e && (e.value = !0);
    }
    function L() {}
    function j(e, t) {
        t = t || 0;
        for (var n = Math.max(0, e.length - t), r = Array(n), i = 0; i < n; i++) r[i] = e[i + t];
        return r;
    }
    function M(e) {
        return void 0 === e.size && (e.size = e.__iterate(U)), e.size;
    }
    function k(e, t) {
        if ("number" != typeof t) {
            var n = t >>> 0;
            if ("" + n !== t || 4294967295 === n) return NaN;
            t = n;
        }
        return t < 0 ? M(e) + t : t;
    }
    function U() {
        return !0;
    }
    function G(e, t, n) {
        return (0 === e || (void 0 !== n && e <= -n)) && (void 0 === t || (void 0 !== n && t >= n));
    }
    function Z(e, t) {
        return F(e, t, 0);
    }
    function B(e, t) {
        return F(e, t, t);
    }
    function F(e, t, n) {
        return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e);
    }
    var V = 0,
        H = 1,
        Y = 2,
        W = "function" == typeof Symbol && Symbol.iterator,
        K = "@@iterator",
        z = W || K;
    function q(e) {
        this.next = e;
    }
    function Q(e, t, n, r) {
        var i = 0 === e ? t : 1 === e ? n : [t, n];
        return (
            r
                ? (r.value = i)
                : (r = {
                      value: i,
                      done: !1,
                  }),
            r
        );
    }
    function X() {
        return {
            value: void 0,
            done: !0,
        };
    }
    function J(e) {
        return !!et(e);
    }
    function $(e) {
        return e && "function" == typeof e.next;
    }
    function ee(e) {
        var t = et(e);
        return t && t.call(e);
    }
    function et(e) {
        var t = e && ((W && e[W]) || e[K]);
        if ("function" == typeof t) return t;
    }
    function en(e) {
        return e && "number" == typeof e.length;
    }
    function er(e) {
        return null == e ? ep() : h(e) ? e.toSeq() : eh(e);
    }
    function ei(e) {
        return null == e ? ep().toKeyedSeq() : h(e) ? (g(e) ? e.toSeq() : e.fromEntrySeq()) : e_(e);
    }
    function ea(e) {
        return null == e ? ep() : h(e) ? (g(e) ? e.entrySeq() : e.toIndexedSeq()) : em(e);
    }
    function eo(e) {
        return (null == e ? ep() : !h(e) ? em(e) : g(e) ? e.entrySeq() : e).toSetSeq();
    }
    (q.prototype.toString = function () {
        return "[Iterator]";
    }),
        (q.KEYS = V),
        (q.VALUES = H),
        (q.ENTRIES = Y),
        (q.prototype.inspect = q.prototype.toSource =
            function () {
                return this.toString();
            }),
        (q.prototype[z] = function () {
            return this;
        }),
        d(er, f),
        (er.of = function () {
            return er(arguments);
        }),
        (er.prototype.toSeq = function () {
            return this;
        }),
        (er.prototype.toString = function () {
            return this.__toString("Seq {", "}");
        }),
        (er.prototype.cacheResult = function () {
            return (
                !this._cache &&
                    this.__iterateUncached &&
                    ((this._cache = this.entrySeq().toArray()), (this.size = this._cache.length)),
                this
            );
        }),
        (er.prototype.__iterate = function (e, t) {
            return eE(this, e, t, !0);
        }),
        (er.prototype.__iterator = function (e, t) {
            return eb(this, e, t, !0);
        }),
        d(ei, er),
        (ei.prototype.toKeyedSeq = function () {
            return this;
        }),
        d(ea, er),
        (ea.of = function () {
            return ea(arguments);
        }),
        (ea.prototype.toIndexedSeq = function () {
            return this;
        }),
        (ea.prototype.toString = function () {
            return this.__toString("Seq [", "]");
        }),
        (ea.prototype.__iterate = function (e, t) {
            return eE(this, e, t, !1);
        }),
        (ea.prototype.__iterator = function (e, t) {
            return eb(this, e, t, !1);
        }),
        d(eo, er),
        (eo.of = function () {
            return eo(arguments);
        }),
        (eo.prototype.toSetSeq = function () {
            return this;
        }),
        (er.isSeq = ef),
        (er.Keyed = ei),
        (er.Set = eo),
        (er.Indexed = ea);
    var es = "@@__IMMUTABLE_SEQ__@@";
    function el(e) {
        (this._array = e), (this.size = e.length);
    }
    function ec(e) {
        var t = Object.keys(e);
        (this._object = e), (this._keys = t), (this.size = t.length);
    }
    function eu(e) {
        (this._iterable = e), (this.size = e.length || e.size);
    }
    function ed(e) {
        (this._iterator = e), (this._iteratorCache = []);
    }
    function ef(e) {
        return !!(e && e[es]);
    }
    function ep() {
        return e || (e = new el([]));
    }
    function e_(e) {
        var t = Array.isArray(e)
            ? new el(e).fromEntrySeq()
            : $(e)
              ? new ed(e).fromEntrySeq()
              : J(e)
                ? new eu(e).fromEntrySeq()
                : "object" == typeof e
                  ? new ec(e)
                  : void 0;
        if (!t) throw TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
        return t;
    }
    function em(e) {
        var t = eg(e);
        if (!t) throw TypeError("Expected Array or iterable object of values: " + e);
        return t;
    }
    function eh(e) {
        var t = eg(e) || ("object" == typeof e && new ec(e));
        if (!t) throw TypeError("Expected Array or iterable object of values, or keyed object: " + e);
        return t;
    }
    function eg(e) {
        return en(e) ? new el(e) : $(e) ? new ed(e) : J(e) ? new eu(e) : void 0;
    }
    function eE(e, t, n, r) {
        var i = e._cache;
        if (i) {
            for (var a = i.length - 1, o = 0; o <= a; o++) {
                var s = i[n ? a - o : o];
                if (!1 === t(s[1], r ? s[0] : o, e)) return o + 1;
            }
            return o;
        }
        return e.__iterateUncached(t, n);
    }
    function eb(e, t, n, r) {
        var i = e._cache;
        if (i) {
            var a = i.length - 1,
                o = 0;
            return new q(function () {
                var e = i[n ? a - o : o];
                return o++ > a ? X() : Q(t, r ? e[0] : o - 1, e[1]);
            });
        }
        return e.__iteratorUncached(t, n);
    }
    function ey(e, t) {
        return t ? eO(t, e, "", { "": e }) : ev(e);
    }
    function eO(e, t, n, r) {
        return Array.isArray(t)
            ? e.call(
                  r,
                  n,
                  ea(t).map(function (n, r) {
                      return eO(e, n, r, t);
                  }),
              )
            : eS(t)
              ? e.call(
                    r,
                    n,
                    ei(t).map(function (n, r) {
                        return eO(e, n, r, t);
                    }),
                )
              : t;
    }
    function ev(e) {
        return Array.isArray(e) ? ea(e).map(ev).toList() : eS(e) ? ei(e).map(ev).toMap() : e;
    }
    function eS(e) {
        return e && (e.constructor === Object || void 0 === e.constructor);
    }
    function eI(e, t) {
        if (e === t || (e != e && t != t)) return !0;
        if (!e || !t) return !1;
        if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
            if ((e = e.valueOf()) === (t = t.valueOf()) || (e != e && t != t)) return !0;
            if (!e || !t) return !1;
        }
        return !!("function" == typeof e.equals && "function" == typeof t.equals && e.equals(t));
    }
    function eT(e, t) {
        if (e === t) return !0;
        if (
            !h(t) ||
            (void 0 !== e.size && void 0 !== t.size && e.size !== t.size) ||
            (void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash) ||
            g(e) !== g(t) ||
            E(e) !== E(t) ||
            y(e) !== y(t)
        )
            return !1;
        if (0 === e.size && 0 === t.size) return !0;
        var n = !b(e);
        if (y(e)) {
            var r = e.entries();
            return (
                t.every(function (e, t) {
                    var i = r.next().value;
                    return i && eI(i[1], e) && (n || eI(i[0], t));
                }) && r.next().done
            );
        }
        var i = !1;
        if (void 0 === e.size)
            if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult();
            else {
                i = !0;
                var a = e;
                (e = t), (t = a);
            }
        var o = !0,
            s = t.__iterate(function (t, r) {
                if (n ? !e.has(t) : i ? !eI(t, e.get(r, P)) : !eI(e.get(r, P), t)) return (o = !1), !1;
            });
        return o && e.size === s;
    }
    function eC(e, n) {
        if (!(this instanceof eC)) return new eC(e, n);
        if (((this._value = e), (this.size = void 0 === n ? 1 / 0 : Math.max(0, n)), 0 === this.size)) {
            if (t) return t;
            t = this;
        }
    }
    function eA(e, t) {
        if (!e) throw Error(t);
    }
    function eN(e, t, r) {
        if (!(this instanceof eN)) return new eN(e, t, r);
        if (
            (eA(0 !== r, "Cannot step a Range by 0"),
            (e = e || 0),
            void 0 === t && (t = 1 / 0),
            (r = void 0 === r ? 1 : Math.abs(r)),
            t < e && (r = -r),
            (this._start = e),
            (this._end = t),
            (this._step = r),
            (this.size = Math.max(0, Math.ceil((t - e) / r - 1) + 1)),
            0 === this.size)
        ) {
            if (n) return n;
            n = this;
        }
    }
    function eP() {
        throw TypeError("Abstract");
    }
    function eR() {}
    function eD() {}
    function ew() {}
    (er.prototype[es] = !0),
        d(el, ea),
        (el.prototype.get = function (e, t) {
            return this.has(e) ? this._array[k(this, e)] : t;
        }),
        (el.prototype.__iterate = function (e, t) {
            for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++)
                if (!1 === e(n[t ? r - i : i], i, this)) return i + 1;
            return i;
        }),
        (el.prototype.__iterator = function (e, t) {
            var n = this._array,
                r = n.length - 1,
                i = 0;
            return new q(function () {
                return i > r ? X() : Q(e, i, n[t ? r - i++ : i++]);
            });
        }),
        d(ec, ei),
        (ec.prototype.get = function (e, t) {
            return void 0 === t || this.has(e) ? this._object[e] : t;
        }),
        (ec.prototype.has = function (e) {
            return this._object.hasOwnProperty(e);
        }),
        (ec.prototype.__iterate = function (e, t) {
            for (var n = this._object, r = this._keys, i = r.length - 1, a = 0; a <= i; a++) {
                var o = r[t ? i - a : a];
                if (!1 === e(n[o], o, this)) return a + 1;
            }
            return a;
        }),
        (ec.prototype.__iterator = function (e, t) {
            var n = this._object,
                r = this._keys,
                i = r.length - 1,
                a = 0;
            return new q(function () {
                var o = r[t ? i - a : a];
                return a++ > i ? X() : Q(e, o, n[o]);
            });
        }),
        (ec.prototype[I] = !0),
        d(eu, ea),
        (eu.prototype.__iterateUncached = function (e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var n,
                r = ee(this._iterable),
                i = 0;
            if ($(r)) for (; !(n = r.next()).done && !1 !== e(n.value, i++, this); );
            return i;
        }),
        (eu.prototype.__iteratorUncached = function (e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = ee(this._iterable);
            if (!$(n)) return new q(X);
            var r = 0;
            return new q(function () {
                var t = n.next();
                return t.done ? t : Q(e, r++, t.value);
            });
        }),
        d(ed, ea),
        (ed.prototype.__iterateUncached = function (e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            for (var n, r = this._iterator, i = this._iteratorCache, a = 0; a < i.length; )
                if (!1 === e(i[a], a++, this)) return a;
            for (; !(n = r.next()).done; ) {
                var o = n.value;
                if (((i[a] = o), !1 === e(o, a++, this))) break;
            }
            return a;
        }),
        (ed.prototype.__iteratorUncached = function (e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = this._iterator,
                r = this._iteratorCache,
                i = 0;
            return new q(function () {
                if (i >= r.length) {
                    var t = n.next();
                    if (t.done) return t;
                    r[i] = t.value;
                }
                return Q(e, i, r[i++]);
            });
        }),
        d(eC, ea),
        (eC.prototype.toString = function () {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
        }),
        (eC.prototype.get = function (e, t) {
            return this.has(e) ? this._value : t;
        }),
        (eC.prototype.includes = function (e) {
            return eI(this._value, e);
        }),
        (eC.prototype.slice = function (e, t) {
            var n = this.size;
            return G(e, t, n) ? this : new eC(this._value, B(t, n) - Z(e, n));
        }),
        (eC.prototype.reverse = function () {
            return this;
        }),
        (eC.prototype.indexOf = function (e) {
            return eI(this._value, e) ? 0 : -1;
        }),
        (eC.prototype.lastIndexOf = function (e) {
            return eI(this._value, e) ? this.size : -1;
        }),
        (eC.prototype.__iterate = function (e, t) {
            for (var n = 0; n < this.size; n++) if (!1 === e(this._value, n, this)) return n + 1;
            return n;
        }),
        (eC.prototype.__iterator = function (e, t) {
            var n = this,
                r = 0;
            return new q(function () {
                return r < n.size ? Q(e, r++, n._value) : X();
            });
        }),
        (eC.prototype.equals = function (e) {
            return e instanceof eC ? eI(this._value, e._value) : eT(e);
        }),
        d(eN, ea),
        (eN.prototype.toString = function () {
            return 0 === this.size
                ? "Range []"
                : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
        }),
        (eN.prototype.get = function (e, t) {
            return this.has(e) ? this._start + k(this, e) * this._step : t;
        }),
        (eN.prototype.includes = function (e) {
            var t = (e - this._start) / this._step;
            return t >= 0 && t < this.size && t === Math.floor(t);
        }),
        (eN.prototype.slice = function (e, t) {
            return G(e, t, this.size)
                ? this
                : ((e = Z(e, this.size)), (t = B(t, this.size)) <= e)
                  ? new eN(0, 0)
                  : new eN(this.get(e, this._end), this.get(t, this._end), this._step);
        }),
        (eN.prototype.indexOf = function (e) {
            var t = e - this._start;
            if (t % this._step == 0) {
                var n = t / this._step;
                if (n >= 0 && n < this.size) return n;
            }
            return -1;
        }),
        (eN.prototype.lastIndexOf = function (e) {
            return this.indexOf(e);
        }),
        (eN.prototype.__iterate = function (e, t) {
            for (var n = this.size - 1, r = this._step, i = t ? this._start + n * r : this._start, a = 0; a <= n; a++) {
                if (!1 === e(i, a, this)) return a + 1;
                i += t ? -r : r;
            }
            return a;
        }),
        (eN.prototype.__iterator = function (e, t) {
            var n = this.size - 1,
                r = this._step,
                i = t ? this._start + n * r : this._start,
                a = 0;
            return new q(function () {
                var o = i;
                return (i += t ? -r : r), a > n ? X() : Q(e, a++, o);
            });
        }),
        (eN.prototype.equals = function (e) {
            return e instanceof eN
                ? this._start === e._start && this._end === e._end && this._step === e._step
                : eT(this, e);
        }),
        d(eP, f),
        d(eR, eP),
        d(eD, eP),
        d(ew, eP),
        (eP.Keyed = eR),
        (eP.Indexed = eD),
        (eP.Set = ew);
    var ex =
        "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (e, t) {
                  var n = 65535 & (e |= 0),
                      r = 65535 & (t |= 0);
                  return (n * r + ((((e >>> 16) * r + n * (t >>> 16)) << 16) >>> 0)) | 0;
              };
    function eL(e) {
        return ((e >>> 1) & 1073741824) | (3221225471 & e);
    }
    function ej(e) {
        if (!1 === e || null == e || ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)))
            return 0;
        if (!0 === e) return 1;
        var t = typeof e;
        if ("number" === t) {
            var n = 0 | e;
            for (n !== e && (n ^= 4294967295 * e); e > 4294967295; ) (e /= 4294967295), (n ^= e);
            return eL(n);
        }
        if ("string" === t) return e.length > eY ? eM(e) : ek(e);
        if ("function" == typeof e.hashCode) return e.hashCode();
        if ("object" === t) return eU(e);
        if ("function" == typeof e.toString) return ek(e.toString());
        throw Error("Value type " + t + " cannot be hashed.");
    }
    function eM(e) {
        var t = ez[e];
        return void 0 === t && ((t = ek(e)), eK === eW && ((eK = 0), (ez = {})), eK++, (ez[e] = t)), t;
    }
    function ek(e) {
        for (var t = 0, n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) | 0;
        return eL(t);
    }
    function eU(e) {
        var t;
        if (
            (eF && void 0 !== (t = r.get(e))) ||
            void 0 !== (t = e[eH]) ||
            (!eZ && (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[eH]) || void 0 !== (t = eB(e))))
        )
            return t;
        if (((t = ++eV), 1073741824 & eV && (eV = 0), eF)) r.set(e, t);
        else if (void 0 !== eG && !1 === eG(e)) throw Error("Non-extensible objects are not allowed as keys.");
        else if (eZ)
            Object.defineProperty(e, eH, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: t,
            });
        else if (
            void 0 !== e.propertyIsEnumerable &&
            e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable
        )
            (e.propertyIsEnumerable = function () {
                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
            }),
                (e.propertyIsEnumerable[eH] = t);
        else if (void 0 !== e.nodeType) e[eH] = t;
        else throw Error("Unable to set a non-enumerable property on object.");
        return t;
    }
    var eG = Object.isExtensible,
        eZ = (function () {
            try {
                return Object.defineProperty({}, "@", {}), !0;
            } catch (e) {
                return !1;
            }
        })();
    function eB(e) {
        if (e && e.nodeType > 0)
            switch (e.nodeType) {
                case 1:
                    return e.uniqueID;
                case 9:
                    return e.documentElement && e.documentElement.uniqueID;
            }
    }
    var eF = "function" == typeof WeakMap;
    eF && (r = new WeakMap());
    var eV = 0,
        eH = "__immutablehash__";
    "function" == typeof Symbol && (eH = Symbol(eH));
    var eY = 16,
        eW = 255,
        eK = 0,
        ez = {};
    function eq(e) {
        eA(e !== 1 / 0, "Cannot perform this action with an infinite size.");
    }
    function eQ(e) {
        return null == e
            ? e9()
            : eX(e) && !y(e)
              ? e
              : e9().withMutations(function (t) {
                    var n = p(e);
                    eq(n.size),
                        n.forEach(function (e, n) {
                            return t.set(n, e);
                        });
                });
    }
    function eX(e) {
        return !!(e && e[eJ]);
    }
    d(eQ, eR),
        (eQ.prototype.toString = function () {
            return this.__toString("Map {", "}");
        }),
        (eQ.prototype.get = function (e, t) {
            return this._root ? this._root.get(0, void 0, e, t) : t;
        }),
        (eQ.prototype.set = function (e, t) {
            return te(this, e, t);
        }),
        (eQ.prototype.setIn = function (e, t) {
            return this.updateIn(e, P, function () {
                return t;
            });
        }),
        (eQ.prototype.remove = function (e) {
            return te(this, e, P);
        }),
        (eQ.prototype.deleteIn = function (e) {
            return this.updateIn(e, function () {
                return P;
            });
        }),
        (eQ.prototype.update = function (e, t, n) {
            return 1 == arguments.length ? e(this) : this.updateIn([e], t, n);
        }),
        (eQ.prototype.updateIn = function (e, t, n) {
            n || ((n = t), (t = void 0));
            var r = td(this, ni(e), t, n);
            return r === P ? void 0 : r;
        }),
        (eQ.prototype.clear = function () {
            return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0), (this._root = null), (this.__hash = void 0), (this.__altered = !0), this)
                  : e9();
        }),
        (eQ.prototype.merge = function () {
            return ts(this, void 0, arguments);
        }),
        (eQ.prototype.mergeWith = function (e) {
            var t = u.call(arguments, 1);
            return ts(this, e, t);
        }),
        (eQ.prototype.mergeIn = function (e) {
            var t = u.call(arguments, 1);
            return this.updateIn(e, e9(), function (e) {
                return "function" == typeof e.merge ? e.merge.apply(e, t) : t[t.length - 1];
            });
        }),
        (eQ.prototype.mergeDeep = function () {
            return ts(this, tl, arguments);
        }),
        (eQ.prototype.mergeDeepWith = function (e) {
            var t = u.call(arguments, 1);
            return ts(this, tc(e), t);
        }),
        (eQ.prototype.mergeDeepIn = function (e) {
            var t = u.call(arguments, 1);
            return this.updateIn(e, e9(), function (e) {
                return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, t) : t[t.length - 1];
            });
        }),
        (eQ.prototype.sort = function (e) {
            return tj(t2(this, e));
        }),
        (eQ.prototype.sortBy = function (e, t) {
            return tj(t2(this, t, e));
        }),
        (eQ.prototype.withMutations = function (e) {
            var t = this.asMutable();
            return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this;
        }),
        (eQ.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new L());
        }),
        (eQ.prototype.asImmutable = function () {
            return this.__ensureOwner();
        }),
        (eQ.prototype.wasAltered = function () {
            return this.__altered;
        }),
        (eQ.prototype.__iterator = function (e, t) {
            return new e5(this, e, t);
        }),
        (eQ.prototype.__iterate = function (e, t) {
            var n = this,
                r = 0;
            return (
                this._root &&
                    this._root.iterate(function (t) {
                        return r++, e(t[1], t[0], n);
                    }, t),
                r
            );
        }),
        (eQ.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID
                ? this
                : e
                  ? e7(this.size, this._root, e, this.__hash)
                  : ((this.__ownerID = e), (this.__altered = !1), this);
        }),
        (eQ.isMap = eX);
    var eJ = "@@__IMMUTABLE_MAP__@@",
        e$ = eQ.prototype;
    function e0(e, t) {
        (this.ownerID = e), (this.entries = t);
    }
    function e1(e, t, n) {
        (this.ownerID = e), (this.bitmap = t), (this.nodes = n);
    }
    function e3(e, t, n) {
        (this.ownerID = e), (this.count = t), (this.nodes = n);
    }
    function e2(e, t, n) {
        (this.ownerID = e), (this.keyHash = t), (this.entries = n);
    }
    function e4(e, t, n) {
        (this.ownerID = e), (this.keyHash = t), (this.entry = n);
    }
    function e5(e, t, n) {
        (this._type = t), (this._reverse = n), (this._stack = e._root && e6(e._root));
    }
    function e8(e, t) {
        return Q(e, t[0], t[1]);
    }
    function e6(e, t) {
        return {
            node: e,
            index: 0,
            __prev: t,
        };
    }
    function e7(e, t, n, r) {
        var i = Object.create(e$);
        return (i.size = e), (i._root = t), (i.__ownerID = n), (i.__hash = r), (i.__altered = !1), i;
    }
    function e9() {
        return i || (i = e7(0));
    }
    function te(e, t, n) {
        if (e._root) {
            var r,
                i,
                a = w(R),
                o = w(D);
            if (((r = tt(e._root, e.__ownerID, 0, void 0, t, n, a, o)), !o.value)) return e;
            i = e.size + (a.value ? (n === P ? -1 : 1) : 0);
        } else {
            if (n === P) return e;
            (i = 1), (r = new e0(e.__ownerID, [[t, n]]));
        }
        return e.__ownerID
            ? ((e.size = i), (e._root = r), (e.__hash = void 0), (e.__altered = !0), e)
            : r
              ? e7(i, r)
              : e9();
    }
    function tt(e, t, n, r, i, a, o, s) {
        return e ? e.update(t, n, r, i, a, o, s) : a === P ? e : (x(s), x(o), new e4(t, r, [i, a]));
    }
    function tn(e) {
        return e.constructor === e4 || e.constructor === e2;
    }
    function tr(e, t, n, r, i) {
        if (e.keyHash === r) return new e2(t, r, [e.entry, i]);
        var a,
            o = (0 === n ? e.keyHash : e.keyHash >>> n) & N,
            s = (0 === n ? r : r >>> n) & N,
            l = o === s ? [tr(e, t, n + C, r, i)] : ((a = new e4(t, r, i)), o < s ? [e, a] : [a, e]);
        return new e1(t, (1 << o) | (1 << s), l);
    }
    function ti(e, t, n, r) {
        e || (e = new L());
        for (var i = new e4(e, ej(n), [n, r]), a = 0; a < t.length; a++) {
            var o = t[a];
            i = i.update(e, 0, void 0, o[0], o[1]);
        }
        return i;
    }
    function ta(e, t, n, r) {
        for (var i = 0, a = 0, o = Array(n), s = 0, l = 1, c = t.length; s < c; s++, l <<= 1) {
            var u = t[s];
            void 0 !== u && s !== r && ((i |= l), (o[a++] = u));
        }
        return new e1(e, i, o);
    }
    function to(e, t, n, r, i) {
        for (var a = 0, o = Array(A), s = 0; 0 !== n; s++, n >>>= 1) o[s] = 1 & n ? t[a++] : void 0;
        return (o[r] = i), new e3(e, a + 1, o);
    }
    function ts(e, t, n) {
        for (var r = [], i = 0; i < n.length; i++) {
            var a = n[i],
                o = p(a);
            h(a) ||
                (o = o.map(function (e) {
                    return ey(e);
                })),
                r.push(o);
        }
        return tu(e, t, r);
    }
    function tl(e, t, n) {
        return e && e.mergeDeep && h(t) ? e.mergeDeep(t) : eI(e, t) ? e : t;
    }
    function tc(e) {
        return function (t, n, r) {
            if (t && t.mergeDeepWith && h(n)) return t.mergeDeepWith(e, n);
            var i = e(t, n, r);
            return eI(t, i) ? t : i;
        };
    }
    function tu(e, t, n) {
        return 0 ===
            (n = n.filter(function (e) {
                return 0 !== e.size;
            })).length
            ? e
            : 0 !== e.size || e.__ownerID || 1 !== n.length
              ? e.withMutations(function (e) {
                    for (
                        var r = t
                                ? function (n, r) {
                                      e.update(r, P, function (e) {
                                          return e === P ? n : t(e, n, r);
                                      });
                                  }
                                : function (t, n) {
                                      e.set(n, t);
                                  },
                            i = 0;
                        i < n.length;
                        i++
                    )
                        n[i].forEach(r);
                })
              : e.constructor(n[0]);
    }
    function td(e, t, n, r) {
        var i = e === P,
            a = t.next();
        if (a.done) {
            var o = i ? n : e,
                s = r(o);
            return s === o ? e : s;
        }
        eA(i || (e && e.set), "invalid keyPath");
        var l = a.value,
            c = i ? P : e.get(l, P),
            u = td(c, t, n, r);
        return u === c ? e : u === P ? e.remove(l) : (i ? e9() : e).set(l, u);
    }
    function tf(e) {
        return (
            (e -= (e >> 1) & 1431655765),
            (e = ((e = (858993459 & e) + ((e >> 2) & 858993459)) + (e >> 4)) & 252645135),
            (e += e >> 8),
            127 & (e += e >> 16)
        );
    }
    function tp(e, t, n, r) {
        var i = r ? e : j(e);
        return (i[t] = n), i;
    }
    function t_(e, t, n, r) {
        var i = e.length + 1;
        if (r && t + 1 === i) return (e[t] = n), e;
        for (var a = Array(i), o = 0, s = 0; s < i; s++) s === t ? ((a[s] = n), (o = -1)) : (a[s] = e[s + o]);
        return a;
    }
    function tm(e, t, n) {
        var r = e.length - 1;
        if (n && t === r) return e.pop(), e;
        for (var i = Array(r), a = 0, o = 0; o < r; o++) o === t && (a = 1), (i[o] = e[o + a]);
        return i;
    }
    (e$[eJ] = !0),
        (e$[T] = e$.remove),
        (e$.removeIn = e$.deleteIn),
        (e0.prototype.get = function (e, t, n, r) {
            for (var i = this.entries, a = 0, o = i.length; a < o; a++) if (eI(n, i[a][0])) return i[a][1];
            return r;
        }),
        (e0.prototype.update = function (e, t, n, r, i, a, o) {
            for (var s = i === P, l = this.entries, c = 0, u = l.length; c < u && !eI(r, l[c][0]); c++);
            var d = c < u;
            if (d ? l[c][1] === i : s) return this;
            if ((x(o), (s || !d) && x(a), !s || 1 !== l.length)) {
                if (!d && !s && l.length >= th) return ti(e, l, r, i);
                var f = e && e === this.ownerID,
                    p = f ? l : j(l);
                return (d ? (s ? (c === u - 1 ? p.pop() : (p[c] = p.pop())) : (p[c] = [r, i])) : p.push([r, i]), f)
                    ? ((this.entries = p), this)
                    : new e0(e, p);
            }
        }),
        (e1.prototype.get = function (e, t, n, r) {
            void 0 === t && (t = ej(n));
            var i = 1 << ((0 === e ? t : t >>> e) & N),
                a = this.bitmap;
            return (a & i) == 0 ? r : this.nodes[tf(a & (i - 1))].get(e + C, t, n, r);
        }),
        (e1.prototype.update = function (e, t, n, r, i, a, o) {
            void 0 === n && (n = ej(r));
            var s = (0 === t ? n : n >>> t) & N,
                l = 1 << s,
                c = this.bitmap,
                u = (c & l) != 0;
            if (!u && i === P) return this;
            var d = tf(c & (l - 1)),
                f = this.nodes,
                p = u ? f[d] : void 0,
                _ = tt(p, e, t + C, n, r, i, a, o);
            if (_ === p) return this;
            if (!u && _ && f.length >= tg) return to(e, f, c, s, _);
            if (u && !_ && 2 === f.length && tn(f[1 ^ d])) return f[1 ^ d];
            if (u && _ && 1 === f.length && tn(_)) return _;
            var m = e && e === this.ownerID,
                h = u ? (_ ? c : c ^ l) : c | l,
                g = u ? (_ ? tp(f, d, _, m) : tm(f, d, m)) : t_(f, d, _, m);
            return m ? ((this.bitmap = h), (this.nodes = g), this) : new e1(e, h, g);
        }),
        (e3.prototype.get = function (e, t, n, r) {
            void 0 === t && (t = ej(n));
            var i = (0 === e ? t : t >>> e) & N,
                a = this.nodes[i];
            return a ? a.get(e + C, t, n, r) : r;
        }),
        (e3.prototype.update = function (e, t, n, r, i, a, o) {
            void 0 === n && (n = ej(r));
            var s = (0 === t ? n : n >>> t) & N,
                l = i === P,
                c = this.nodes,
                u = c[s];
            if (l && !u) return this;
            var d = tt(u, e, t + C, n, r, i, a, o);
            if (d === u) return this;
            var f = this.count;
            if (u) {
                if (!d && --f < tE) return ta(e, c, f, s);
            } else f++;
            var p = e && e === this.ownerID,
                _ = tp(c, s, d, p);
            return p ? ((this.count = f), (this.nodes = _), this) : new e3(e, f, _);
        }),
        (e2.prototype.get = function (e, t, n, r) {
            for (var i = this.entries, a = 0, o = i.length; a < o; a++) if (eI(n, i[a][0])) return i[a][1];
            return r;
        }),
        (e2.prototype.update = function (e, t, n, r, i, a, o) {
            void 0 === n && (n = ej(r));
            var s = i === P;
            if (n !== this.keyHash) return s ? this : (x(o), x(a), tr(this, e, t, n, [r, i]));
            for (var l = this.entries, c = 0, u = l.length; c < u && !eI(r, l[c][0]); c++);
            var d = c < u;
            if (d ? l[c][1] === i : s) return this;
            if ((x(o), (s || !d) && x(a), s && 2 === u)) return new e4(e, this.keyHash, l[1 ^ c]);
            var f = e && e === this.ownerID,
                p = f ? l : j(l);
            return (d ? (s ? (c === u - 1 ? p.pop() : (p[c] = p.pop())) : (p[c] = [r, i])) : p.push([r, i]), f)
                ? ((this.entries = p), this)
                : new e2(e, this.keyHash, p);
        }),
        (e4.prototype.get = function (e, t, n, r) {
            return eI(n, this.entry[0]) ? this.entry[1] : r;
        }),
        (e4.prototype.update = function (e, t, n, r, i, a, o) {
            var s = i === P,
                l = eI(r, this.entry[0]);
            return (l ? i === this.entry[1] : s)
                ? this
                : (x(o), s)
                  ? void x(a)
                  : l
                    ? e && e === this.ownerID
                        ? ((this.entry[1] = i), this)
                        : new e4(e, this.keyHash, [r, i])
                    : (x(a), tr(this, e, t, ej(r), [r, i]));
        }),
        (e0.prototype.iterate = e2.prototype.iterate =
            function (e, t) {
                for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
                    if (!1 === e(n[t ? i - r : r])) return !1;
            }),
        (e1.prototype.iterate = e3.prototype.iterate =
            function (e, t) {
                for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
                    var a = n[t ? i - r : r];
                    if (a && !1 === a.iterate(e, t)) return !1;
                }
            }),
        (e4.prototype.iterate = function (e, t) {
            return e(this.entry);
        }),
        d(e5, q),
        (e5.prototype.next = function () {
            for (var e = this._type, t = this._stack; t; ) {
                var n,
                    r = t.node,
                    i = t.index++;
                if (r.entry) {
                    if (0 === i) return e8(e, r.entry);
                } else if (r.entries) {
                    if (i <= (n = r.entries.length - 1)) return e8(e, r.entries[this._reverse ? n - i : i]);
                } else if (i <= (n = r.nodes.length - 1)) {
                    var a = r.nodes[this._reverse ? n - i : i];
                    if (a) {
                        if (a.entry) return e8(e, a.entry);
                        t = this._stack = e6(a, t);
                    }
                    continue;
                }
                t = this._stack = this._stack.__prev;
            }
            return X();
        });
    var th = A / 4,
        tg = A / 2,
        tE = A / 4;
    function tb(e) {
        var t = tA();
        if (null == e) return t;
        if (ty(e)) return e;
        var n = _(e),
            r = n.size;
        return 0 === r
            ? t
            : (eq(r), r > 0 && r < A)
              ? tC(0, r, C, null, new tS(n.toArray()))
              : t.withMutations(function (e) {
                    e.setSize(r),
                        n.forEach(function (t, n) {
                            return e.set(n, t);
                        });
                });
    }
    function ty(e) {
        return !!(e && e[tO]);
    }
    d(tb, eD),
        (tb.of = function () {
            return this(arguments);
        }),
        (tb.prototype.toString = function () {
            return this.__toString("List [", "]");
        }),
        (tb.prototype.get = function (e, t) {
            if ((e = k(this, e)) >= 0 && e < this.size) {
                var n = tD(this, (e += this._origin));
                return n && n.array[e & N];
            }
            return t;
        }),
        (tb.prototype.set = function (e, t) {
            return tN(this, e, t);
        }),
        (tb.prototype.remove = function (e) {
            return this.has(e) ? (0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1)) : this;
        }),
        (tb.prototype.insert = function (e, t) {
            return this.splice(e, 0, t);
        }),
        (tb.prototype.clear = function () {
            return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = this._origin = this._capacity = 0),
                    (this._level = C),
                    (this._root = this._tail = null),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : tA();
        }),
        (tb.prototype.push = function () {
            var e = arguments,
                t = this.size;
            return this.withMutations(function (n) {
                tw(n, 0, t + e.length);
                for (var r = 0; r < e.length; r++) n.set(t + r, e[r]);
            });
        }),
        (tb.prototype.pop = function () {
            return tw(this, 0, -1);
        }),
        (tb.prototype.unshift = function () {
            var e = arguments;
            return this.withMutations(function (t) {
                tw(t, -e.length);
                for (var n = 0; n < e.length; n++) t.set(n, e[n]);
            });
        }),
        (tb.prototype.shift = function () {
            return tw(this, 1);
        }),
        (tb.prototype.merge = function () {
            return tx(this, void 0, arguments);
        }),
        (tb.prototype.mergeWith = function (e) {
            var t = u.call(arguments, 1);
            return tx(this, e, t);
        }),
        (tb.prototype.mergeDeep = function () {
            return tx(this, tl, arguments);
        }),
        (tb.prototype.mergeDeepWith = function (e) {
            var t = u.call(arguments, 1);
            return tx(this, tc(e), t);
        }),
        (tb.prototype.setSize = function (e) {
            return tw(this, 0, e);
        }),
        (tb.prototype.slice = function (e, t) {
            var n = this.size;
            return G(e, t, n) ? this : tw(this, Z(e, n), B(t, n));
        }),
        (tb.prototype.__iterator = function (e, t) {
            var n = 0,
                r = tT(this, t);
            return new q(function () {
                var t = r();
                return t === tI ? X() : Q(e, n++, t);
            });
        }),
        (tb.prototype.__iterate = function (e, t) {
            for (var n, r = 0, i = tT(this, t); (n = i()) !== tI && !1 !== e(n, r++, this); );
            return r;
        }),
        (tb.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID
                ? this
                : e
                  ? tC(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash)
                  : ((this.__ownerID = e), this);
        }),
        (tb.isList = ty);
    var tO = "@@__IMMUTABLE_LIST__@@",
        tv = tb.prototype;
    function tS(e, t) {
        (this.array = e), (this.ownerID = t);
    }
    (tv[tO] = !0),
        (tv[T] = tv.remove),
        (tv.setIn = e$.setIn),
        (tv.deleteIn = tv.removeIn = e$.removeIn),
        (tv.update = e$.update),
        (tv.updateIn = e$.updateIn),
        (tv.mergeIn = e$.mergeIn),
        (tv.mergeDeepIn = e$.mergeDeepIn),
        (tv.withMutations = e$.withMutations),
        (tv.asMutable = e$.asMutable),
        (tv.asImmutable = e$.asImmutable),
        (tv.wasAltered = e$.wasAltered),
        (tS.prototype.removeBefore = function (e, t, n) {
            if (n === t ? 1 << t : 0 === this.array.length) return this;
            var r,
                i = (n >>> t) & N;
            if (i >= this.array.length) return new tS([], e);
            var a = 0 === i;
            if (t > 0) {
                var o = this.array[i];
                if ((r = o && o.removeBefore(e, t - C, n)) === o && a) return this;
            }
            if (a && !r) return this;
            var s = tR(this, e);
            if (!a) for (var l = 0; l < i; l++) s.array[l] = void 0;
            return r && (s.array[i] = r), s;
        }),
        (tS.prototype.removeAfter = function (e, t, n) {
            if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
            var r,
                i = ((n - 1) >>> t) & N;
            if (i >= this.array.length) return this;
            if (t > 0) {
                var a = this.array[i];
                if ((r = a && a.removeAfter(e, t - C, n)) === a && i === this.array.length - 1) return this;
            }
            var o = tR(this, e);
            return o.array.splice(i + 1), r && (o.array[i] = r), o;
        });
    var tI = {};
    function tT(e, t) {
        var n = e._origin,
            r = e._capacity,
            i = tL(r),
            a = e._tail;
        return o(e._root, e._level, 0);
        function o(e, t, n) {
            return 0 === t ? s(e, n) : l(e, t, n);
        }
        function s(e, o) {
            var s = o === i ? a && a.array : e && e.array,
                l = o > n ? 0 : n - o,
                c = r - o;
            return (
                c > A && (c = A),
                function () {
                    if (l === c) return tI;
                    var e = t ? --c : l++;
                    return s && s[e];
                }
            );
        }
        function l(e, i, a) {
            var s,
                l = e && e.array,
                c = a > n ? 0 : (n - a) >> i,
                u = ((r - a) >> i) + 1;
            return (
                u > A && (u = A),
                function () {
                    for (;;) {
                        if (s) {
                            var e = s();
                            if (e !== tI) return e;
                            s = null;
                        }
                        if (c === u) return tI;
                        var n = t ? --u : c++;
                        s = o(l && l[n], i - C, a + (n << i));
                    }
                }
            );
        }
    }
    function tC(e, t, n, r, i, a, o) {
        var s = Object.create(tv);
        return (
            (s.size = t - e),
            (s._origin = e),
            (s._capacity = t),
            (s._level = n),
            (s._root = r),
            (s._tail = i),
            (s.__ownerID = a),
            (s.__hash = o),
            (s.__altered = !1),
            s
        );
    }
    function tA() {
        return a || (a = tC(0, 0, C));
    }
    function tN(e, t, n) {
        if ((t = k(e, t)) != t) return e;
        if (t >= e.size || t < 0)
            return e.withMutations(function (e) {
                t < 0 ? tw(e, t).set(0, n) : tw(e, 0, t + 1).set(t, n);
            });
        t += e._origin;
        var r = e._tail,
            i = e._root,
            a = w(D);
        return (t >= tL(e._capacity)
            ? (r = tP(r, e.__ownerID, 0, t, n, a))
            : (i = tP(i, e.__ownerID, e._level, t, n, a)),
        a.value)
            ? e.__ownerID
                ? ((e._root = i), (e._tail = r), (e.__hash = void 0), (e.__altered = !0), e)
                : tC(e._origin, e._capacity, e._level, i, r)
            : e;
    }
    function tP(e, t, n, r, i, a) {
        var o,
            s = (r >>> n) & N,
            l = e && s < e.array.length;
        if (!l && void 0 === i) return e;
        if (n > 0) {
            var c = e && e.array[s],
                u = tP(c, t, n - C, r, i, a);
            return u === c ? e : (((o = tR(e, t)).array[s] = u), o);
        }
        return l && e.array[s] === i
            ? e
            : (x(a), (o = tR(e, t)), void 0 === i && s === o.array.length - 1 ? o.array.pop() : (o.array[s] = i), o);
    }
    function tR(e, t) {
        return t && e && t === e.ownerID ? e : new tS(e ? e.array.slice() : [], t);
    }
    function tD(e, t) {
        if (t >= tL(e._capacity)) return e._tail;
        if (t < 1 << (e._level + C)) {
            for (var n = e._root, r = e._level; n && r > 0; ) (n = n.array[(t >>> r) & N]), (r -= C);
            return n;
        }
    }
    function tw(e, t, n) {
        void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
        var r = e.__ownerID || new L(),
            i = e._origin,
            a = e._capacity,
            o = i + t,
            s = void 0 === n ? a : n < 0 ? a + n : i + n;
        if (o === i && s === a) return e;
        if (o >= s) return e.clear();
        for (var l = e._level, c = e._root, u = 0; o + u < 0; )
            (c = new tS(c && c.array.length ? [void 0, c] : [], r)), (l += C), (u += 1 << l);
        u && ((o += u), (i += u), (s += u), (a += u));
        for (var d = tL(a), f = tL(s); f >= 1 << (l + C); ) (c = new tS(c && c.array.length ? [c] : [], r)), (l += C);
        var p = e._tail,
            _ = f < d ? tD(e, s - 1) : f > d ? new tS([], r) : p;
        if (p && f > d && o < a && p.array.length) {
            for (var m = (c = tR(c, r)), h = l; h > C; h -= C) {
                var g = (d >>> h) & N;
                m = m.array[g] = tR(m.array[g], r);
            }
            m.array[(d >>> C) & N] = p;
        }
        if ((s < a && (_ = _ && _.removeAfter(r, 0, s)), o >= f))
            (o -= f), (s -= f), (l = C), (c = null), (_ = _ && _.removeBefore(r, 0, o));
        else if (o > i || f < d) {
            for (u = 0; c; ) {
                var E = (o >>> l) & N;
                if ((E !== f >>> l) & N) break;
                E && (u += (1 << l) * E), (l -= C), (c = c.array[E]);
            }
            c && o > i && (c = c.removeBefore(r, l, o - u)),
                c && f < d && (c = c.removeAfter(r, l, f - u)),
                u && ((o -= u), (s -= u));
        }
        return e.__ownerID
            ? ((e.size = s - o),
              (e._origin = o),
              (e._capacity = s),
              (e._level = l),
              (e._root = c),
              (e._tail = _),
              (e.__hash = void 0),
              (e.__altered = !0),
              e)
            : tC(o, s, l, c, _);
    }
    function tx(e, t, n) {
        for (var r = [], i = 0, a = 0; a < n.length; a++) {
            var o = n[a],
                s = _(o);
            s.size > i && (i = s.size),
                h(o) ||
                    (s = s.map(function (e) {
                        return ey(e);
                    })),
                r.push(s);
        }
        return i > e.size && (e = e.setSize(i)), tu(e, t, r);
    }
    function tL(e) {
        return e < A ? 0 : ((e - 1) >>> C) << C;
    }
    function tj(e) {
        return null == e
            ? tU()
            : tM(e)
              ? e
              : tU().withMutations(function (t) {
                    var n = p(e);
                    eq(n.size),
                        n.forEach(function (e, n) {
                            return t.set(n, e);
                        });
                });
    }
    function tM(e) {
        return eX(e) && y(e);
    }
    function tk(e, t, n, r) {
        var i = Object.create(tj.prototype);
        return (i.size = e ? e.size : 0), (i._map = e), (i._list = t), (i.__ownerID = n), (i.__hash = r), i;
    }
    function tU() {
        return o || (o = tk(e9(), tA()));
    }
    function tG(e, t, n) {
        var r,
            i,
            a = e._map,
            o = e._list,
            s = a.get(t),
            l = void 0 !== s;
        if (n === P) {
            if (!l) return e;
            o.size >= A && o.size >= 2 * a.size
                ? ((r = (i = o.filter(function (e, t) {
                      return void 0 !== e && s !== t;
                  }))
                      .toKeyedSeq()
                      .map(function (e) {
                          return e[0];
                      })
                      .flip()
                      .toMap()),
                  e.__ownerID && (r.__ownerID = i.__ownerID = e.__ownerID))
                : ((r = a.remove(t)), (i = s === o.size - 1 ? o.pop() : o.set(s, void 0)));
        } else if (l) {
            if (n === o.get(s)[1]) return e;
            (r = a), (i = o.set(s, [t, n]));
        } else (r = a.set(t, o.size)), (i = o.set(o.size, [t, n]));
        return e.__ownerID ? ((e.size = r.size), (e._map = r), (e._list = i), (e.__hash = void 0), e) : tk(r, i);
    }
    function tZ(e, t) {
        (this._iter = e), (this._useKeys = t), (this.size = e.size);
    }
    function tB(e) {
        (this._iter = e), (this.size = e.size);
    }
    function tF(e) {
        (this._iter = e), (this.size = e.size);
    }
    function tV(e) {
        (this._iter = e), (this.size = e.size);
    }
    function tH(e) {
        var t = nt(e);
        return (
            (t._iter = e),
            (t.size = e.size),
            (t.flip = function () {
                return e;
            }),
            (t.reverse = function () {
                var t = e.reverse.apply(this);
                return (
                    (t.flip = function () {
                        return e.reverse();
                    }),
                    t
                );
            }),
            (t.has = function (t) {
                return e.includes(t);
            }),
            (t.includes = function (t) {
                return e.has(t);
            }),
            (t.cacheResult = nn),
            (t.__iterateUncached = function (t, n) {
                var r = this;
                return e.__iterate(function (e, n) {
                    return !1 !== t(n, e, r);
                }, n);
            }),
            (t.__iteratorUncached = function (t, n) {
                if (t === Y) {
                    var r = e.__iterator(t, n);
                    return new q(function () {
                        var e = r.next();
                        if (!e.done) {
                            var t = e.value[0];
                            (e.value[0] = e.value[1]), (e.value[1] = t);
                        }
                        return e;
                    });
                }
                return e.__iterator(t === H ? V : H, n);
            }),
            t
        );
    }
    function tY(e, t, n) {
        var r = nt(e);
        return (
            (r.size = e.size),
            (r.has = function (t) {
                return e.has(t);
            }),
            (r.get = function (r, i) {
                var a = e.get(r, P);
                return a === P ? i : t.call(n, a, r, e);
            }),
            (r.__iterateUncached = function (r, i) {
                var a = this;
                return e.__iterate(function (e, i, o) {
                    return !1 !== r(t.call(n, e, i, o), i, a);
                }, i);
            }),
            (r.__iteratorUncached = function (r, i) {
                var a = e.__iterator(Y, i);
                return new q(function () {
                    var i = a.next();
                    if (i.done) return i;
                    var o = i.value,
                        s = o[0];
                    return Q(r, s, t.call(n, o[1], s, e), i);
                });
            }),
            r
        );
    }
    function tW(e, t) {
        var n = nt(e);
        return (
            (n._iter = e),
            (n.size = e.size),
            (n.reverse = function () {
                return e;
            }),
            e.flip &&
                (n.flip = function () {
                    var t = tH(e);
                    return (
                        (t.reverse = function () {
                            return e.flip();
                        }),
                        t
                    );
                }),
            (n.get = function (n, r) {
                return e.get(t ? n : -1 - n, r);
            }),
            (n.has = function (n) {
                return e.has(t ? n : -1 - n);
            }),
            (n.includes = function (t) {
                return e.includes(t);
            }),
            (n.cacheResult = nn),
            (n.__iterate = function (t, n) {
                var r = this;
                return e.__iterate(function (e, n) {
                    return t(e, n, r);
                }, !n);
            }),
            (n.__iterator = function (t, n) {
                return e.__iterator(t, !n);
            }),
            n
        );
    }
    function tK(e, t, n, r) {
        var i = nt(e);
        return (
            r &&
                ((i.has = function (r) {
                    var i = e.get(r, P);
                    return i !== P && !!t.call(n, i, r, e);
                }),
                (i.get = function (r, i) {
                    var a = e.get(r, P);
                    return a !== P && t.call(n, a, r, e) ? a : i;
                })),
            (i.__iterateUncached = function (i, a) {
                var o = this,
                    s = 0;
                return (
                    e.__iterate(function (e, a, l) {
                        if (t.call(n, e, a, l)) return s++, i(e, r ? a : s - 1, o);
                    }, a),
                    s
                );
            }),
            (i.__iteratorUncached = function (i, a) {
                var o = e.__iterator(Y, a),
                    s = 0;
                return new q(function () {
                    for (;;) {
                        var a = o.next();
                        if (a.done) return a;
                        var l = a.value,
                            c = l[0],
                            u = l[1];
                        if (t.call(n, u, c, e)) return Q(i, r ? c : s++, u, a);
                    }
                });
            }),
            i
        );
    }
    function tz(e, t, n) {
        var r = eQ().asMutable();
        return (
            e.__iterate(function (i, a) {
                r.update(t.call(n, i, a, e), 0, function (e) {
                    return e + 1;
                });
            }),
            r.asImmutable()
        );
    }
    function tq(e, t, n) {
        var r = g(e),
            i = (y(e) ? tj() : eQ()).asMutable();
        e.__iterate(function (a, o) {
            i.update(t.call(n, a, o, e), function (e) {
                return (e = e || []).push(r ? [o, a] : a), e;
            });
        });
        var a = ne(e);
        return i.map(function (t) {
            return t6(e, a(t));
        });
    }
    function tQ(e, t, n, r) {
        var i,
            a = e.size;
        if ((void 0 !== t && (t |= 0), void 0 !== n && (n |= 0), G(t, n, a))) return e;
        var o = Z(t, a),
            s = B(n, a);
        if (o != o || s != s) return tQ(e.toSeq().cacheResult(), t, n, r);
        var l = s - o;
        l == l && (i = l < 0 ? 0 : l);
        var c = nt(e);
        return (
            (c.size = 0 === i ? i : (e.size && i) || void 0),
            !r &&
                ef(e) &&
                i >= 0 &&
                (c.get = function (t, n) {
                    return (t = k(this, t)) >= 0 && t < i ? e.get(t + o, n) : n;
                }),
            (c.__iterateUncached = function (t, n) {
                var a = this;
                if (0 === i) return 0;
                if (n) return this.cacheResult().__iterate(t, n);
                var s = 0,
                    l = !0,
                    c = 0;
                return (
                    e.__iterate(function (e, n) {
                        if (!(l && (l = s++ < o))) return c++, !1 !== t(e, r ? n : c - 1, a) && c !== i;
                    }),
                    c
                );
            }),
            (c.__iteratorUncached = function (t, n) {
                if (0 !== i && n) return this.cacheResult().__iterator(t, n);
                var a = 0 !== i && e.__iterator(t, n),
                    s = 0,
                    l = 0;
                return new q(function () {
                    for (; s++ < o; ) a.next();
                    if (++l > i) return X();
                    var e = a.next();
                    return r || t === H ? e : t === V ? Q(t, l - 1, void 0, e) : Q(t, l - 1, e.value[1], e);
                });
            }),
            c
        );
    }
    function tX(e, t, n) {
        var r = nt(e);
        return (
            (r.__iterateUncached = function (r, i) {
                var a = this;
                if (i) return this.cacheResult().__iterate(r, i);
                var o = 0;
                return (
                    e.__iterate(function (e, i, s) {
                        return t.call(n, e, i, s) && ++o && r(e, i, a);
                    }),
                    o
                );
            }),
            (r.__iteratorUncached = function (r, i) {
                var a = this;
                if (i) return this.cacheResult().__iterator(r, i);
                var o = e.__iterator(Y, i),
                    s = !0;
                return new q(function () {
                    if (!s) return X();
                    var e = o.next();
                    if (e.done) return e;
                    var i = e.value,
                        l = i[0],
                        c = i[1];
                    return t.call(n, c, l, a) ? (r === Y ? e : Q(r, l, c, e)) : ((s = !1), X());
                });
            }),
            r
        );
    }
    function tJ(e, t, n, r) {
        var i = nt(e);
        return (
            (i.__iterateUncached = function (i, a) {
                var o = this;
                if (a) return this.cacheResult().__iterate(i, a);
                var s = !0,
                    l = 0;
                return (
                    e.__iterate(function (e, a, c) {
                        if (!(s && (s = t.call(n, e, a, c)))) return l++, i(e, r ? a : l - 1, o);
                    }),
                    l
                );
            }),
            (i.__iteratorUncached = function (i, a) {
                var o = this;
                if (a) return this.cacheResult().__iterator(i, a);
                var s = e.__iterator(Y, a),
                    l = !0,
                    c = 0;
                return new q(function () {
                    var e, a, u;
                    do {
                        if ((e = s.next()).done)
                            if (r || i === H) return e;
                            else if (i === V) return Q(i, c++, void 0, e);
                            else return Q(i, c++, e.value[1], e);
                        var d = e.value;
                        (a = d[0]), (u = d[1]), l && (l = t.call(n, u, a, o));
                    } while (l);
                    return i === Y ? e : Q(i, a, u, e);
                });
            }),
            i
        );
    }
    function t$(e, t) {
        var n = g(e),
            r = [e]
                .concat(t)
                .map(function (e) {
                    return h(e) ? n && (e = p(e)) : (e = n ? e_(e) : em(Array.isArray(e) ? e : [e])), e;
                })
                .filter(function (e) {
                    return 0 !== e.size;
                });
        if (0 === r.length) return e;
        if (1 === r.length) {
            var i = r[0];
            if (i === e || (n && g(i)) || (E(e) && E(i))) return i;
        }
        var a = new el(r);
        return (
            n ? (a = a.toKeyedSeq()) : E(e) || (a = a.toSetSeq()),
            ((a = a.flatten(!0)).size = r.reduce(function (e, t) {
                if (void 0 !== e) {
                    var n = t.size;
                    if (void 0 !== n) return e + n;
                }
            }, 0)),
            a
        );
    }
    function t0(e, t, n) {
        var r = nt(e);
        return (
            (r.__iterateUncached = function (r, i) {
                var a = 0,
                    o = !1;
                function s(e, l) {
                    var c = this;
                    e.__iterate(function (e, i) {
                        return (!t || l < t) && h(e) ? s(e, l + 1) : !1 === r(e, n ? i : a++, c) && (o = !0), !o;
                    }, i);
                }
                return s(e, 0), a;
            }),
            (r.__iteratorUncached = function (r, i) {
                var a = e.__iterator(r, i),
                    o = [],
                    s = 0;
                return new q(function () {
                    for (; a; ) {
                        var e = a.next();
                        if (!1 !== e.done) {
                            a = o.pop();
                            continue;
                        }
                        var l = e.value;
                        if ((r === Y && (l = l[1]), !((!t || o.length < t) && h(l)))) return n ? e : Q(r, s++, l, e);
                        o.push(a), (a = l.__iterator(r, i));
                    }
                    return X();
                });
            }),
            r
        );
    }
    function t1(e, t, n) {
        var r = ne(e);
        return e
            .toSeq()
            .map(function (i, a) {
                return r(t.call(n, i, a, e));
            })
            .flatten(!0);
    }
    function t3(e, t) {
        var n = nt(e);
        return (
            (n.size = e.size && 2 * e.size - 1),
            (n.__iterateUncached = function (n, r) {
                var i = this,
                    a = 0;
                return (
                    e.__iterate(function (e, r) {
                        return (!a || !1 !== n(t, a++, i)) && !1 !== n(e, a++, i);
                    }, r),
                    a
                );
            }),
            (n.__iteratorUncached = function (n, r) {
                var i,
                    a = e.__iterator(H, r),
                    o = 0;
                return new q(function () {
                    return (!i || o % 2) && (i = a.next()).done ? i : o % 2 ? Q(n, o++, t) : Q(n, o++, i.value, i);
                });
            }),
            n
        );
    }
    function t2(e, t, n) {
        t || (t = nr);
        var r = g(e),
            i = 0,
            a = e
                .toSeq()
                .map(function (t, r) {
                    return [r, t, i++, n ? n(t, r, e) : t];
                })
                .toArray();
        return (
            a
                .sort(function (e, n) {
                    return t(e[3], n[3]) || e[2] - n[2];
                })
                .forEach(
                    r
                        ? function (e, t) {
                              a[t].length = 2;
                          }
                        : function (e, t) {
                              a[t] = e[1];
                          },
                ),
            r ? ei(a) : E(e) ? ea(a) : eo(a)
        );
    }
    function t4(e, t, n) {
        if ((t || (t = nr), !n))
            return e.reduce(function (e, n) {
                return t5(t, e, n) ? n : e;
            });
        var r = e
            .toSeq()
            .map(function (t, r) {
                return [t, n(t, r, e)];
            })
            .reduce(function (e, n) {
                return t5(t, e[1], n[1]) ? n : e;
            });
        return r && r[0];
    }
    function t5(e, t, n) {
        var r = e(n, t);
        return (0 === r && n !== t && (null == n || n != n)) || r > 0;
    }
    function t8(e, t, n) {
        var r = nt(e);
        return (
            (r.size = new el(n)
                .map(function (e) {
                    return e.size;
                })
                .min()),
            (r.__iterate = function (e, t) {
                for (var n, r = this.__iterator(H, t), i = 0; !(n = r.next()).done && !1 !== e(n.value, i++, this); );
                return i;
            }),
            (r.__iteratorUncached = function (e, r) {
                var i = n.map(function (e) {
                        return (e = f(e)), ee(r ? e.reverse() : e);
                    }),
                    a = 0,
                    o = !1;
                return new q(function () {
                    var n;
                    return (o ||
                        (o = (n = i.map(function (e) {
                            return e.next();
                        })).some(function (e) {
                            return e.done;
                        })),
                    o)
                        ? X()
                        : Q(
                              e,
                              a++,
                              t.apply(
                                  null,
                                  n.map(function (e) {
                                      return e.value;
                                  }),
                              ),
                          );
                });
            }),
            r
        );
    }
    function t6(e, t) {
        return ef(e) ? t : e.constructor(t);
    }
    function t7(e) {
        if (e !== Object(e)) throw TypeError("Expected [K, V] tuple: " + e);
    }
    function t9(e) {
        return eq(e.size), M(e);
    }
    function ne(e) {
        return g(e) ? p : E(e) ? _ : m;
    }
    function nt(e) {
        return Object.create((g(e) ? ei : E(e) ? ea : eo).prototype);
    }
    function nn() {
        return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : er.prototype.cacheResult.call(this);
    }
    function nr(e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
    }
    function ni(e) {
        var t = ee(e);
        if (!t) {
            if (!en(e)) throw TypeError("Expected iterable or array-like: " + e);
            t = ee(f(e));
        }
        return t;
    }
    function na(e, t) {
        var n,
            r = function (a) {
                if (a instanceof r) return a;
                if (!(this instanceof r)) return new r(a);
                if (!n) {
                    n = !0;
                    var o = Object.keys(e);
                    nc(i, o), (i.size = o.length), (i._name = t), (i._keys = o), (i._defaultValues = e);
                }
                this._map = eQ(a);
            },
            i = (r.prototype = Object.create(no));
        return (i.constructor = r), r;
    }
    d(tj, eQ),
        (tj.of = function () {
            return this(arguments);
        }),
        (tj.prototype.toString = function () {
            return this.__toString("OrderedMap {", "}");
        }),
        (tj.prototype.get = function (e, t) {
            var n = this._map.get(e);
            return void 0 !== n ? this._list.get(n)[1] : t;
        }),
        (tj.prototype.clear = function () {
            return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
                  : tU();
        }),
        (tj.prototype.set = function (e, t) {
            return tG(this, e, t);
        }),
        (tj.prototype.remove = function (e) {
            return tG(this, e, P);
        }),
        (tj.prototype.wasAltered = function () {
            return this._map.wasAltered() || this._list.wasAltered();
        }),
        (tj.prototype.__iterate = function (e, t) {
            var n = this;
            return this._list.__iterate(function (t) {
                return t && e(t[1], t[0], n);
            }, t);
        }),
        (tj.prototype.__iterator = function (e, t) {
            return this._list.fromEntrySeq().__iterator(e, t);
        }),
        (tj.prototype.__ensureOwner = function (e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e),
                n = this._list.__ensureOwner(e);
            return e ? tk(t, n, e, this.__hash) : ((this.__ownerID = e), (this._map = t), (this._list = n), this);
        }),
        (tj.isOrderedMap = tM),
        (tj.prototype[I] = !0),
        (tj.prototype[T] = tj.prototype.remove),
        d(tZ, ei),
        (tZ.prototype.get = function (e, t) {
            return this._iter.get(e, t);
        }),
        (tZ.prototype.has = function (e) {
            return this._iter.has(e);
        }),
        (tZ.prototype.valueSeq = function () {
            return this._iter.valueSeq();
        }),
        (tZ.prototype.reverse = function () {
            var e = this,
                t = tW(this, !0);
            return (
                this._useKeys ||
                    (t.valueSeq = function () {
                        return e._iter.toSeq().reverse();
                    }),
                t
            );
        }),
        (tZ.prototype.map = function (e, t) {
            var n = this,
                r = tY(this, e, t);
            return (
                this._useKeys ||
                    (r.valueSeq = function () {
                        return n._iter.toSeq().map(e, t);
                    }),
                r
            );
        }),
        (tZ.prototype.__iterate = function (e, t) {
            var n,
                r = this;
            return this._iter.__iterate(
                this._useKeys
                    ? function (t, n) {
                          return e(t, n, r);
                      }
                    : ((n = t ? t9(this) : 0),
                      function (i) {
                          return e(i, t ? --n : n++, r);
                      }),
                t,
            );
        }),
        (tZ.prototype.__iterator = function (e, t) {
            if (this._useKeys) return this._iter.__iterator(e, t);
            var n = this._iter.__iterator(H, t),
                r = t ? t9(this) : 0;
            return new q(function () {
                var i = n.next();
                return i.done ? i : Q(e, t ? --r : r++, i.value, i);
            });
        }),
        (tZ.prototype[I] = !0),
        d(tB, ea),
        (tB.prototype.includes = function (e) {
            return this._iter.includes(e);
        }),
        (tB.prototype.__iterate = function (e, t) {
            var n = this,
                r = 0;
            return this._iter.__iterate(function (t) {
                return e(t, r++, n);
            }, t);
        }),
        (tB.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(H, t),
                r = 0;
            return new q(function () {
                var t = n.next();
                return t.done ? t : Q(e, r++, t.value, t);
            });
        }),
        d(tF, eo),
        (tF.prototype.has = function (e) {
            return this._iter.includes(e);
        }),
        (tF.prototype.__iterate = function (e, t) {
            var n = this;
            return this._iter.__iterate(function (t) {
                return e(t, t, n);
            }, t);
        }),
        (tF.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(H, t);
            return new q(function () {
                var t = n.next();
                return t.done ? t : Q(e, t.value, t.value, t);
            });
        }),
        d(tV, ei),
        (tV.prototype.entrySeq = function () {
            return this._iter.toSeq();
        }),
        (tV.prototype.__iterate = function (e, t) {
            var n = this;
            return this._iter.__iterate(function (t) {
                if (t) {
                    t7(t);
                    var r = h(t);
                    return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n);
                }
            }, t);
        }),
        (tV.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(H, t);
            return new q(function () {
                for (;;) {
                    var t = n.next();
                    if (t.done) return t;
                    var r = t.value;
                    if (r) {
                        t7(r);
                        var i = h(r);
                        return Q(e, i ? r.get(0) : r[0], i ? r.get(1) : r[1], t);
                    }
                }
            });
        }),
        (tB.prototype.cacheResult =
            tZ.prototype.cacheResult =
            tF.prototype.cacheResult =
            tV.prototype.cacheResult =
                nn),
        d(na, eR),
        (na.prototype.toString = function () {
            return this.__toString(nl(this) + " {", "}");
        }),
        (na.prototype.has = function (e) {
            return this._defaultValues.hasOwnProperty(e);
        }),
        (na.prototype.get = function (e, t) {
            if (!this.has(e)) return t;
            var n = this._defaultValues[e];
            return this._map ? this._map.get(e, n) : n;
        }),
        (na.prototype.clear = function () {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var e = this.constructor;
            return e._empty || (e._empty = ns(this, e9()));
        }),
        (na.prototype.set = function (e, t) {
            if (!this.has(e)) throw Error('Cannot set unknown key "' + e + '" on ' + nl(this));
            var n = this._map && this._map.set(e, t);
            return this.__ownerID || n === this._map ? this : ns(this, n);
        }),
        (na.prototype.remove = function (e) {
            if (!this.has(e)) return this;
            var t = this._map && this._map.remove(e);
            return this.__ownerID || t === this._map ? this : ns(this, t);
        }),
        (na.prototype.wasAltered = function () {
            return this._map.wasAltered();
        }),
        (na.prototype.__iterator = function (e, t) {
            var n = this;
            return p(this._defaultValues)
                .map(function (e, t) {
                    return n.get(t);
                })
                .__iterator(e, t);
        }),
        (na.prototype.__iterate = function (e, t) {
            var n = this;
            return p(this._defaultValues)
                .map(function (e, t) {
                    return n.get(t);
                })
                .__iterate(e, t);
        }),
        (na.prototype.__ensureOwner = function (e) {
            if (e === this.__ownerID) return this;
            var t = this._map && this._map.__ensureOwner(e);
            return e ? ns(this, t, e) : ((this.__ownerID = e), (this._map = t), this);
        });
    var no = na.prototype;
    function ns(e, t, n) {
        var r = Object.create(Object.getPrototypeOf(e));
        return (r._map = t), (r.__ownerID = n), r;
    }
    function nl(e) {
        return e._name || e.constructor.name || "Record";
    }
    function nc(e, t) {
        try {
            t.forEach(nu.bind(void 0, e));
        } catch (e) {}
    }
    function nu(e, t) {
        Object.defineProperty(e, t, {
            get: function () {
                return this.get(t);
            },
            set: function (e) {
                eA(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e);
            },
        });
    }
    function nd(e) {
        return null == e
            ? ng()
            : nf(e) && !y(e)
              ? e
              : ng().withMutations(function (t) {
                    var n = m(e);
                    eq(n.size),
                        n.forEach(function (e) {
                            return t.add(e);
                        });
                });
    }
    function nf(e) {
        return !!(e && e[np]);
    }
    (no[T] = no.remove),
        (no.deleteIn = no.removeIn = e$.removeIn),
        (no.merge = e$.merge),
        (no.mergeWith = e$.mergeWith),
        (no.mergeIn = e$.mergeIn),
        (no.mergeDeep = e$.mergeDeep),
        (no.mergeDeepWith = e$.mergeDeepWith),
        (no.mergeDeepIn = e$.mergeDeepIn),
        (no.setIn = e$.setIn),
        (no.update = e$.update),
        (no.updateIn = e$.updateIn),
        (no.withMutations = e$.withMutations),
        (no.asMutable = e$.asMutable),
        (no.asImmutable = e$.asImmutable),
        d(nd, ew),
        (nd.of = function () {
            return this(arguments);
        }),
        (nd.fromKeys = function (e) {
            return this(p(e).keySeq());
        }),
        (nd.prototype.toString = function () {
            return this.__toString("Set {", "}");
        }),
        (nd.prototype.has = function (e) {
            return this._map.has(e);
        }),
        (nd.prototype.add = function (e) {
            return nm(this, this._map.set(e, !0));
        }),
        (nd.prototype.remove = function (e) {
            return nm(this, this._map.remove(e));
        }),
        (nd.prototype.clear = function () {
            return nm(this, this._map.clear());
        }),
        (nd.prototype.union = function () {
            var e = u.call(arguments, 0);
            return 0 ===
                (e = e.filter(function (e) {
                    return 0 !== e.size;
                })).length
                ? this
                : 0 !== this.size || this.__ownerID || 1 !== e.length
                  ? this.withMutations(function (t) {
                        for (var n = 0; n < e.length; n++)
                            m(e[n]).forEach(function (e) {
                                return t.add(e);
                            });
                    })
                  : this.constructor(e[0]);
        }),
        (nd.prototype.intersect = function () {
            var e = u.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (e) {
                return m(e);
            });
            var t = this;
            return this.withMutations(function (n) {
                t.forEach(function (t) {
                    e.every(function (e) {
                        return e.includes(t);
                    }) || n.remove(t);
                });
            });
        }),
        (nd.prototype.subtract = function () {
            var e = u.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (e) {
                return m(e);
            });
            var t = this;
            return this.withMutations(function (n) {
                t.forEach(function (t) {
                    e.some(function (e) {
                        return e.includes(t);
                    }) && n.remove(t);
                });
            });
        }),
        (nd.prototype.merge = function () {
            return this.union.apply(this, arguments);
        }),
        (nd.prototype.mergeWith = function (e) {
            var t = u.call(arguments, 1);
            return this.union.apply(this, t);
        }),
        (nd.prototype.sort = function (e) {
            return nE(t2(this, e));
        }),
        (nd.prototype.sortBy = function (e, t) {
            return nE(t2(this, t, e));
        }),
        (nd.prototype.wasAltered = function () {
            return this._map.wasAltered();
        }),
        (nd.prototype.__iterate = function (e, t) {
            var n = this;
            return this._map.__iterate(function (t, r) {
                return e(r, r, n);
            }, t);
        }),
        (nd.prototype.__iterator = function (e, t) {
            return this._map
                .map(function (e, t) {
                    return t;
                })
                .__iterator(e, t);
        }),
        (nd.prototype.__ensureOwner = function (e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e);
            return e ? this.__make(t, e) : ((this.__ownerID = e), (this._map = t), this);
        }),
        (nd.isSet = nf);
    var np = "@@__IMMUTABLE_SET__@@",
        n_ = nd.prototype;
    function nm(e, t) {
        return e.__ownerID
            ? ((e.size = t.size), (e._map = t), e)
            : t === e._map
              ? e
              : 0 === t.size
                ? e.__empty()
                : e.__make(t);
    }
    function nh(e, t) {
        var n = Object.create(n_);
        return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
    }
    function ng() {
        return s || (s = nh(e9()));
    }
    function nE(e) {
        return null == e
            ? nv()
            : nb(e)
              ? e
              : nv().withMutations(function (t) {
                    var n = m(e);
                    eq(n.size),
                        n.forEach(function (e) {
                            return t.add(e);
                        });
                });
    }
    function nb(e) {
        return nf(e) && y(e);
    }
    (n_[np] = !0),
        (n_[T] = n_.remove),
        (n_.mergeDeep = n_.merge),
        (n_.mergeDeepWith = n_.mergeWith),
        (n_.withMutations = e$.withMutations),
        (n_.asMutable = e$.asMutable),
        (n_.asImmutable = e$.asImmutable),
        (n_.__empty = ng),
        (n_.__make = nh),
        d(nE, nd),
        (nE.of = function () {
            return this(arguments);
        }),
        (nE.fromKeys = function (e) {
            return this(p(e).keySeq());
        }),
        (nE.prototype.toString = function () {
            return this.__toString("OrderedSet {", "}");
        }),
        (nE.isOrderedSet = nb);
    var ny = nE.prototype;
    function nO(e, t) {
        var n = Object.create(ny);
        return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
    }
    function nv() {
        return l || (l = nO(tU()));
    }
    function nS(e) {
        return null == e ? nN() : nI(e) ? e : nN().unshiftAll(e);
    }
    function nI(e) {
        return !!(e && e[nT]);
    }
    (ny[I] = !0),
        (ny.__empty = nv),
        (ny.__make = nO),
        d(nS, eD),
        (nS.of = function () {
            return this(arguments);
        }),
        (nS.prototype.toString = function () {
            return this.__toString("Stack [", "]");
        }),
        (nS.prototype.get = function (e, t) {
            var n = this._head;
            for (e = k(this, e); n && e--; ) n = n.next;
            return n ? n.value : t;
        }),
        (nS.prototype.peek = function () {
            return this._head && this._head.value;
        }),
        (nS.prototype.push = function () {
            if (0 == arguments.length) return this;
            for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--)
                t = {
                    value: arguments[n],
                    next: t,
                };
            return this.__ownerID
                ? ((this.size = e), (this._head = t), (this.__hash = void 0), (this.__altered = !0), this)
                : nA(e, t);
        }),
        (nS.prototype.pushAll = function (e) {
            if (0 === (e = _(e)).size) return this;
            eq(e.size);
            var t = this.size,
                n = this._head;
            return (e.reverse().forEach(function (e) {
                t++,
                    (n = {
                        value: e,
                        next: n,
                    });
            }),
            this.__ownerID)
                ? ((this.size = t), (this._head = n), (this.__hash = void 0), (this.__altered = !0), this)
                : nA(t, n);
        }),
        (nS.prototype.pop = function () {
            return this.slice(1);
        }),
        (nS.prototype.unshift = function () {
            return this.push.apply(this, arguments);
        }),
        (nS.prototype.unshiftAll = function (e) {
            return this.pushAll(e);
        }),
        (nS.prototype.shift = function () {
            return this.pop.apply(this, arguments);
        }),
        (nS.prototype.clear = function () {
            return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0), (this._head = void 0), (this.__hash = void 0), (this.__altered = !0), this)
                  : nN();
        }),
        (nS.prototype.slice = function (e, t) {
            if (G(e, t, this.size)) return this;
            var n = Z(e, this.size);
            if (B(t, this.size) !== this.size) return eD.prototype.slice.call(this, e, t);
            for (var r = this.size - n, i = this._head; n--; ) i = i.next;
            return this.__ownerID
                ? ((this.size = r), (this._head = i), (this.__hash = void 0), (this.__altered = !0), this)
                : nA(r, i);
        }),
        (nS.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID
                ? this
                : e
                  ? nA(this.size, this._head, e, this.__hash)
                  : ((this.__ownerID = e), (this.__altered = !1), this);
        }),
        (nS.prototype.__iterate = function (e, t) {
            if (t) return this.reverse().__iterate(e);
            for (var n = 0, r = this._head; r && !1 !== e(r.value, n++, this); ) r = r.next;
            return n;
        }),
        (nS.prototype.__iterator = function (e, t) {
            if (t) return this.reverse().__iterator(e);
            var n = 0,
                r = this._head;
            return new q(function () {
                if (r) {
                    var t = r.value;
                    return (r = r.next), Q(e, n++, t);
                }
                return X();
            });
        }),
        (nS.isStack = nI);
    var nT = "@@__IMMUTABLE_STACK__@@",
        nC = nS.prototype;
    function nA(e, t, n, r) {
        var i = Object.create(nC);
        return (i.size = e), (i._head = t), (i.__ownerID = n), (i.__hash = r), (i.__altered = !1), i;
    }
    function nN() {
        return c || (c = nA(0));
    }
    function nP(e, t) {
        var n = function (n) {
            e.prototype[n] = t[n];
        };
        return Object.keys(t).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n), e;
    }
    (nC[nT] = !0),
        (nC.withMutations = e$.withMutations),
        (nC.asMutable = e$.asMutable),
        (nC.asImmutable = e$.asImmutable),
        (nC.wasAltered = e$.wasAltered),
        (f.Iterator = q),
        nP(f, {
            toArray: function () {
                eq(this.size);
                var e = Array(this.size || 0);
                return (
                    this.valueSeq().__iterate(function (t, n) {
                        e[n] = t;
                    }),
                    e
                );
            },
            toIndexedSeq: function () {
                return new tB(this);
            },
            toJS: function () {
                return this.toSeq()
                    .map(function (e) {
                        return e && "function" == typeof e.toJS ? e.toJS() : e;
                    })
                    .__toJS();
            },
            toJSON: function () {
                return this.toSeq()
                    .map(function (e) {
                        return e && "function" == typeof e.toJSON ? e.toJSON() : e;
                    })
                    .__toJS();
            },
            toKeyedSeq: function () {
                return new tZ(this, !0);
            },
            toMap: function () {
                return eQ(this.toKeyedSeq());
            },
            toObject: function () {
                eq(this.size);
                var e = {};
                return (
                    this.__iterate(function (t, n) {
                        e[n] = t;
                    }),
                    e
                );
            },
            toOrderedMap: function () {
                return tj(this.toKeyedSeq());
            },
            toOrderedSet: function () {
                return nE(g(this) ? this.valueSeq() : this);
            },
            toSet: function () {
                return nd(g(this) ? this.valueSeq() : this);
            },
            toSetSeq: function () {
                return new tF(this);
            },
            toSeq: function () {
                return E(this) ? this.toIndexedSeq() : g(this) ? this.toKeyedSeq() : this.toSetSeq();
            },
            toStack: function () {
                return nS(g(this) ? this.valueSeq() : this);
            },
            toList: function () {
                return tb(g(this) ? this.valueSeq() : this);
            },
            toString: function () {
                return "[Iterable]";
            },
            __toString: function (e, t) {
                return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t;
            },
            concat: function () {
                var e = u.call(arguments, 0);
                return t6(this, t$(this, e));
            },
            includes: function (e) {
                return this.some(function (t) {
                    return eI(t, e);
                });
            },
            entries: function () {
                return this.__iterator(Y);
            },
            every: function (e, t) {
                eq(this.size);
                var n = !0;
                return (
                    this.__iterate(function (r, i, a) {
                        if (!e.call(t, r, i, a)) return (n = !1), !1;
                    }),
                    n
                );
            },
            filter: function (e, t) {
                return t6(this, tK(this, e, t, !0));
            },
            find: function (e, t, n) {
                var r = this.findEntry(e, t);
                return r ? r[1] : n;
            },
            findEntry: function (e, t) {
                var n;
                return (
                    this.__iterate(function (r, i, a) {
                        if (e.call(t, r, i, a)) return (n = [i, r]), !1;
                    }),
                    n
                );
            },
            findLastEntry: function (e, t) {
                return this.toSeq().reverse().findEntry(e, t);
            },
            forEach: function (e, t) {
                return eq(this.size), this.__iterate(t ? e.bind(t) : e);
            },
            join: function (e) {
                eq(this.size), (e = void 0 !== e ? "" + e : ",");
                var t = "",
                    n = !0;
                return (
                    this.__iterate(function (r) {
                        n ? (n = !1) : (t += e), (t += null != r ? r.toString() : "");
                    }),
                    t
                );
            },
            keys: function () {
                return this.__iterator(V);
            },
            map: function (e, t) {
                return t6(this, tY(this, e, t));
            },
            reduce: function (e, t, n) {
                var r, i;
                return (
                    eq(this.size),
                    arguments.length < 2 ? (i = !0) : (r = t),
                    this.__iterate(function (t, a, o) {
                        i ? ((i = !1), (r = t)) : (r = e.call(n, r, t, a, o));
                    }),
                    r
                );
            },
            reduceRight: function (e, t, n) {
                var r = this.toKeyedSeq().reverse();
                return r.reduce.apply(r, arguments);
            },
            reverse: function () {
                return t6(this, tW(this, !0));
            },
            slice: function (e, t) {
                return t6(this, tQ(this, e, t, !0));
            },
            some: function (e, t) {
                return !this.every(nL(e), t);
            },
            sort: function (e) {
                return t6(this, t2(this, e));
            },
            values: function () {
                return this.__iterator(H);
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
            count: function (e, t) {
                return M(e ? this.toSeq().filter(e, t) : this);
            },
            countBy: function (e, t) {
                return tz(this, e, t);
            },
            equals: function (e) {
                return eT(this, e);
            },
            entrySeq: function () {
                var e = this;
                if (e._cache) return new el(e._cache);
                var t = e.toSeq().map(nx).toIndexedSeq();
                return (
                    (t.fromEntrySeq = function () {
                        return e.toSeq();
                    }),
                    t
                );
            },
            filterNot: function (e, t) {
                return this.filter(nL(e), t);
            },
            findLast: function (e, t, n) {
                return this.toKeyedSeq().reverse().find(e, t, n);
            },
            first: function () {
                return this.find(U);
            },
            flatMap: function (e, t) {
                return t6(this, t1(this, e, t));
            },
            flatten: function (e) {
                return t6(this, t0(this, e, !0));
            },
            fromEntrySeq: function () {
                return new tV(this);
            },
            get: function (e, t) {
                return this.find(
                    function (t, n) {
                        return eI(n, e);
                    },
                    void 0,
                    t,
                );
            },
            getIn: function (e, t) {
                for (var n, r = this, i = ni(e); !(n = i.next()).done; ) {
                    var a = n.value;
                    if ((r = r && r.get ? r.get(a, P) : P) === P) return t;
                }
                return r;
            },
            groupBy: function (e, t) {
                return tq(this, e, t);
            },
            has: function (e) {
                return this.get(e, P) !== P;
            },
            hasIn: function (e) {
                return this.getIn(e, P) !== P;
            },
            isSubset: function (e) {
                return (
                    (e = "function" == typeof e.includes ? e : f(e)),
                    this.every(function (t) {
                        return e.includes(t);
                    })
                );
            },
            isSuperset: function (e) {
                return (e = "function" == typeof e.isSubset ? e : f(e)).isSubset(this);
            },
            keySeq: function () {
                return this.toSeq().map(nw).toIndexedSeq();
            },
            last: function () {
                return this.toSeq().reverse().first();
            },
            max: function (e) {
                return t4(this, e);
            },
            maxBy: function (e, t) {
                return t4(this, t, e);
            },
            min: function (e) {
                return t4(this, e ? nj(e) : nU);
            },
            minBy: function (e, t) {
                return t4(this, t ? nj(t) : nU, e);
            },
            rest: function () {
                return this.slice(1);
            },
            skip: function (e) {
                return this.slice(Math.max(0, e));
            },
            skipLast: function (e) {
                return t6(this, this.toSeq().reverse().skip(e).reverse());
            },
            skipWhile: function (e, t) {
                return t6(this, tJ(this, e, t, !0));
            },
            skipUntil: function (e, t) {
                return this.skipWhile(nL(e), t);
            },
            sortBy: function (e, t) {
                return t6(this, t2(this, t, e));
            },
            take: function (e) {
                return this.slice(0, Math.max(0, e));
            },
            takeLast: function (e) {
                return t6(this, this.toSeq().reverse().take(e).reverse());
            },
            takeWhile: function (e, t) {
                return t6(this, tX(this, e, t));
            },
            takeUntil: function (e, t) {
                return this.takeWhile(nL(e), t);
            },
            valueSeq: function () {
                return this.toIndexedSeq();
            },
            hashCode: function () {
                return this.__hash || (this.__hash = nG(this));
            },
        });
    var nR = f.prototype;
    (nR[O] = !0),
        (nR[z] = nR.values),
        (nR.__toJS = nR.toArray),
        (nR.__toStringMapper = nM),
        (nR.inspect = nR.toSource =
            function () {
                return this.toString();
            }),
        (nR.chain = nR.flatMap),
        (nR.contains = nR.includes),
        (function () {
            try {
                Object.defineProperty(nR, "length", {
                    get: function () {
                        if (!f.noLengthWarning) {
                            var e;
                            try {
                                throw Error();
                            } catch (t) {
                                e = t.stack;
                            }
                            if (-1 === e.indexOf("_wrapObject"))
                                return (
                                    console &&
                                        console.warn &&
                                        console.warn(
                                            "iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " +
                                                e,
                                        ),
                                    this.size
                                );
                        }
                    },
                });
            } catch (e) {}
        })(),
        nP(p, {
            flip: function () {
                return t6(this, tH(this));
            },
            findKey: function (e, t) {
                var n = this.findEntry(e, t);
                return n && n[0];
            },
            findLastKey: function (e, t) {
                return this.toSeq().reverse().findKey(e, t);
            },
            keyOf: function (e) {
                return this.findKey(function (t) {
                    return eI(t, e);
                });
            },
            lastKeyOf: function (e) {
                return this.findLastKey(function (t) {
                    return eI(t, e);
                });
            },
            mapEntries: function (e, t) {
                var n = this,
                    r = 0;
                return t6(
                    this,
                    this.toSeq()
                        .map(function (i, a) {
                            return e.call(t, [a, i], r++, n);
                        })
                        .fromEntrySeq(),
                );
            },
            mapKeys: function (e, t) {
                var n = this;
                return t6(
                    this,
                    this.toSeq()
                        .flip()
                        .map(function (r, i) {
                            return e.call(t, r, i, n);
                        })
                        .flip(),
                );
            },
        });
    var nD = p.prototype;
    function nw(e, t) {
        return t;
    }
    function nx(e, t) {
        return [t, e];
    }
    function nL(e) {
        return function () {
            return !e.apply(this, arguments);
        };
    }
    function nj(e) {
        return function () {
            return -e.apply(this, arguments);
        };
    }
    function nM(e) {
        return "string" == typeof e ? JSON.stringify(e) : e;
    }
    function nk() {
        return j(arguments);
    }
    function nU(e, t) {
        return e < t ? 1 : e > t ? -1 : 0;
    }
    function nG(e) {
        if (e.size === 1 / 0) return 0;
        var t = y(e),
            n = g(e),
            r = +!!t;
        return nZ(
            e.__iterate(
                n
                    ? t
                        ? function (e, t) {
                              r = (31 * r + nB(ej(e), ej(t))) | 0;
                          }
                        : function (e, t) {
                              r = (r + nB(ej(e), ej(t))) | 0;
                          }
                    : t
                      ? function (e) {
                            r = (31 * r + ej(e)) | 0;
                        }
                      : function (e) {
                            r = (r + ej(e)) | 0;
                        },
            ),
            r,
        );
    }
    function nZ(e, t) {
        return (
            (t = ex(t, 3432918353)),
            (t = ex((t << 15) | (t >>> -15), 461845907)),
            (t = (((t = ex((t << 13) | (t >>> -13), 5)) + 3864292196) | 0) ^ e),
            (t = ex(t ^ (t >>> 16), 2246822507)),
            (t = eL((t = ex(t ^ (t >>> 13), 3266489909)) ^ (t >>> 16)))
        );
    }
    function nB(e, t) {
        return e ^ (t + 2654435769 + (e << 6) + (e >> 2));
    }
    return (
        (nD[v] = !0),
        (nD[z] = nR.entries),
        (nD.__toJS = nR.toObject),
        (nD.__toStringMapper = function (e, t) {
            return JSON.stringify(t) + ": " + nM(e);
        }),
        nP(_, {
            toKeyedSeq: function () {
                return new tZ(this, !1);
            },
            filter: function (e, t) {
                return t6(this, tK(this, e, t, !1));
            },
            findIndex: function (e, t) {
                var n = this.findEntry(e, t);
                return n ? n[0] : -1;
            },
            indexOf: function (e) {
                var t = this.toKeyedSeq().keyOf(e);
                return void 0 === t ? -1 : t;
            },
            lastIndexOf: function (e) {
                var t = this.toKeyedSeq().reverse().keyOf(e);
                return void 0 === t ? -1 : t;
            },
            reverse: function () {
                return t6(this, tW(this, !1));
            },
            slice: function (e, t) {
                return t6(this, tQ(this, e, t, !1));
            },
            splice: function (e, t) {
                var n = arguments.length;
                if (((t = Math.max(0 | t, 0)), 0 === n || (2 === n && !t))) return this;
                e = Z(e, e < 0 ? this.count() : this.size);
                var r = this.slice(0, e);
                return t6(this, 1 === n ? r : r.concat(j(arguments, 2), this.slice(e + t)));
            },
            findLastIndex: function (e, t) {
                var n = this.toKeyedSeq().findLastKey(e, t);
                return void 0 === n ? -1 : n;
            },
            first: function () {
                return this.get(0);
            },
            flatten: function (e) {
                return t6(this, t0(this, e, !1));
            },
            get: function (e, t) {
                return (e = k(this, e)) < 0 || this.size === 1 / 0 || (void 0 !== this.size && e > this.size)
                    ? t
                    : this.find(
                          function (t, n) {
                              return n === e;
                          },
                          void 0,
                          t,
                      );
            },
            has: function (e) {
                return (
                    (e = k(this, e)) >= 0 &&
                    (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
                );
            },
            interpose: function (e) {
                return t6(this, t3(this, e));
            },
            interleave: function () {
                var e = [this].concat(j(arguments)),
                    t = t8(this.toSeq(), ea.of, e),
                    n = t.flatten(!0);
                return t.size && (n.size = t.size * e.length), t6(this, n);
            },
            last: function () {
                return this.get(-1);
            },
            skipWhile: function (e, t) {
                return t6(this, tJ(this, e, t, !1));
            },
            zip: function () {
                var e = [this].concat(j(arguments));
                return t6(this, t8(this, nk, e));
            },
            zipWith: function (e) {
                var t = j(arguments);
                return (t[0] = this), t6(this, t8(this, e, t));
            },
        }),
        (_.prototype[S] = !0),
        (_.prototype[I] = !0),
        nP(m, {
            get: function (e, t) {
                return this.has(e) ? e : t;
            },
            includes: function (e) {
                return this.has(e);
            },
            keySeq: function () {
                return this.valueSeq();
            },
        }),
        (m.prototype.has = nR.includes),
        nP(ei, p.prototype),
        nP(ea, _.prototype),
        nP(eo, m.prototype),
        nP(eR, p.prototype),
        nP(eD, _.prototype),
        nP(ew, m.prototype),
        {
            Iterable: f,
            Seq: er,
            Collection: eP,
            Map: eQ,
            OrderedMap: tj,
            List: tb,
            Stack: nS,
            Set: nd,
            OrderedSet: nE,
            Record: na,
            Range: eN,
            Repeat: eC,
            is: eI,
            fromJS: ey,
        }
    );
});
