!(function (t, n) {
    e.exports = n();
})(0, function () {
    var e,
        t,
        n,
        r,
        i,
        a,
        s,
        o,
        l,
        c,
        u = Array.prototype.slice;

    function d(e, t) {
        t && (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
    }

    function f(e) {
        return m(e) ? e : er(e);
    }

    function p(e) {
        return g(e) ? e : ei(e);
    }

    function _(e) {
        return E(e) ? e : ea(e);
    }

    function h(e) {
        return m(e) && !b(e) ? e : es(e);
    }

    function m(e) {
        return !!(e && e[O]);
    }

    function g(e) {
        return !!(e && e[A]);
    }

    function E(e) {
        return !!(e && e[v]);
    }

    function b(e) {
        return g(e) || E(e);
    }

    function y(e) {
        return !!(e && e[S]);
    }
    d(p, f),
        d(_, f),
        d(h, f),
        (f.isIterable = m),
        (f.isKeyed = g),
        (f.isIndexed = E),
        (f.isAssociative = b),
        (f.isOrdered = y),
        (f.Keyed = p),
        (f.Indexed = _),
        (f.Set = h);
    var O = "@@__IMMUTABLE_ITERABLE__@@",
        A = "@@__IMMUTABLE_KEYED__@@",
        v = "@@__IMMUTABLE_INDEXED__@@",
        S = "@@__IMMUTABLE_ORDERED__@@",
        I = "delete",
        T = 5,
        C = 32,
        N = 31,
        R = {},
        w = {
            value: !1,
        },
        P = {
            value: !1,
        };

    function D(e) {
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
            if ("" + n !== t || 0xffffffff === n) return NaN;
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

    function V(e, t) {
        return B(e, t, 0);
    }

    function F(e, t) {
        return B(e, t, t);
    }

    function B(e, t, n) {
        return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e);
    }
    var H = 0,
        Y = 1,
        W = 2,
        K = "function" == typeof Symbol && Symbol.iterator,
        z = "@@iterator",
        q = K || z;

    function X(e) {
        this.next = e;
    }

    function Z(e, t, n, r) {
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

    function Q() {
        return {
            value: void 0,
            done: !0,
        };
    }

    function $(e) {
        return !!et(e);
    }

    function J(e) {
        return e && "function" == typeof e.next;
    }

    function ee(e) {
        var t = et(e);
        return t && t.call(e);
    }

    function et(e) {
        var t = e && ((K && e[K]) || e[z]);
        if ("function" == typeof t) return t;
    }

    function en(e) {
        return e && "number" == typeof e.length;
    }

    function er(e) {
        return null == e ? ep() : m(e) ? e.toSeq() : em(e);
    }

    function ei(e) {
        return null == e ? ep().toKeyedSeq() : m(e) ? (g(e) ? e.toSeq() : e.fromEntrySeq()) : e_(e);
    }

    function ea(e) {
        return null == e ? ep() : m(e) ? (g(e) ? e.entrySeq() : e.toIndexedSeq()) : eh(e);
    }

    function es(e) {
        return (null == e ? ep() : !m(e) ? eh(e) : g(e) ? e.entrySeq() : e).toSetSeq();
    }
    (X.prototype.toString = function () {
        return "[Iterator]";
    }),
        (X.KEYS = H),
        (X.VALUES = Y),
        (X.ENTRIES = W),
        (X.prototype.inspect = X.prototype.toSource =
            function () {
                return this.toString();
            }),
        (X.prototype[q] = function () {
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
        d(es, er),
        (es.of = function () {
            return es(arguments);
        }),
        (es.prototype.toSetSeq = function () {
            return this;
        }),
        (er.isSeq = ef),
        (er.Keyed = ei),
        (er.Set = es),
        (er.Indexed = ea);
    var eo = "@@__IMMUTABLE_SEQ__@@";

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
        return !!(e && e[eo]);
    }

    function ep() {
        return e || (e = new el([]));
    }

    function e_(e) {
        var t = Array.isArray(e)
            ? new el(e).fromEntrySeq()
            : J(e)
              ? new ed(e).fromEntrySeq()
              : $(e)
                ? new eu(e).fromEntrySeq()
                : "object" == typeof e
                  ? new ec(e)
                  : void 0;
        if (!t) throw TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
        return t;
    }

    function eh(e) {
        var t = eg(e);
        if (!t) throw TypeError("Expected Array or iterable object of values: " + e);
        return t;
    }

    function em(e) {
        var t = eg(e) || ("object" == typeof e && new ec(e));
        if (!t) throw TypeError("Expected Array or iterable object of values, or keyed object: " + e);
        return t;
    }

    function eg(e) {
        return en(e) ? new el(e) : J(e) ? new ed(e) : $(e) ? new eu(e) : void 0;
    }

    function eE(e, t, n, r) {
        var i = e._cache;
        if (i) {
            for (var a = i.length - 1, s = 0; s <= a; s++) {
                var o = i[n ? a - s : s];
                if (!1 === t(o[1], r ? o[0] : s, e)) return s + 1;
            }
            return s;
        }
        return e.__iterateUncached(t, n);
    }

    function eb(e, t, n, r) {
        var i = e._cache;
        if (i) {
            var a = i.length - 1,
                s = 0;
            return new X(function () {
                var e = i[n ? a - s : s];
                return s++ > a ? Q() : Z(t, r ? e[0] : s - 1, e[1]);
            });
        }
        return e.__iteratorUncached(t, n);
    }

    function ey(e, t) {
        return t
            ? eO(t, e, "", {
                  "": e,
              })
            : eA(e);
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
            : ev(t)
              ? e.call(
                    r,
                    n,
                    ei(t).map(function (n, r) {
                        return eO(e, n, r, t);
                    }),
                )
              : t;
    }

    function eA(e) {
        return Array.isArray(e) ? ea(e).map(eA).toList() : ev(e) ? ei(e).map(eA).toMap() : e;
    }

    function ev(e) {
        return e && (e.constructor === Object || void 0 === e.constructor);
    }

    function eS(e, t) {
        if (e === t || (e != e && t != t)) return !0;
        if (!e || !t) return !1;
        if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
            if ((e = e.valueOf()) === (t = t.valueOf()) || (e != e && t != t)) return !0;
            if (!e || !t) return !1;
        }
        return !!("function" == typeof e.equals && "function" == typeof t.equals && e.equals(t));
    }

    function eI(e, t) {
        if (e === t) return !0;
        if (
            !m(t) ||
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
                    return i && eS(i[1], e) && (n || eS(i[0], t));
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
        var s = !0,
            o = t.__iterate(function (t, r) {
                if (n ? !e.has(t) : i ? !eS(t, e.get(r, R)) : !eS(e.get(r, R), t)) return (s = !1), !1;
            });
        return s && e.size === o;
    }

    function eT(e, n) {
        if (!(this instanceof eT)) return new eT(e, n);
        if (((this._value = e), (this.size = void 0 === n ? 1 / 0 : Math.max(0, n)), 0 === this.size)) {
            if (t) return t;
            t = this;
        }
    }

    function eC(e, t) {
        if (!e) throw Error(t);
    }

    function eN(e, t, r) {
        if (!(this instanceof eN)) return new eN(e, t, r);
        if (
            (eC(0 !== r, "Cannot step a Range by 0"),
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

    function eR() {
        throw TypeError("Abstract");
    }

    function ew() {}

    function eP() {}

    function eD() {}
    (er.prototype[eo] = !0),
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
            return new X(function () {
                return i > r ? Q() : Z(e, i, n[t ? r - i++ : i++]);
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
                var s = r[t ? i - a : a];
                if (!1 === e(n[s], s, this)) return a + 1;
            }
            return a;
        }),
        (ec.prototype.__iterator = function (e, t) {
            var n = this._object,
                r = this._keys,
                i = r.length - 1,
                a = 0;
            return new X(function () {
                var s = r[t ? i - a : a];
                return a++ > i ? Q() : Z(e, s, n[s]);
            });
        }),
        (ec.prototype[S] = !0),
        d(eu, ea),
        (eu.prototype.__iterateUncached = function (e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var n,
                r = ee(this._iterable),
                i = 0;
            if (J(r)) for (; !(n = r.next()).done && !1 !== e(n.value, i++, this); );
            return i;
        }),
        (eu.prototype.__iteratorUncached = function (e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = ee(this._iterable);
            if (!J(n)) return new X(Q);
            var r = 0;
            return new X(function () {
                var t = n.next();
                return t.done ? t : Z(e, r++, t.value);
            });
        }),
        d(ed, ea),
        (ed.prototype.__iterateUncached = function (e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            for (var n, r = this._iterator, i = this._iteratorCache, a = 0; a < i.length; )
                if (!1 === e(i[a], a++, this)) return a;
            for (; !(n = r.next()).done; ) {
                var s = n.value;
                if (((i[a] = s), !1 === e(s, a++, this))) break;
            }
            return a;
        }),
        (ed.prototype.__iteratorUncached = function (e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = this._iterator,
                r = this._iteratorCache,
                i = 0;
            return new X(function () {
                if (i >= r.length) {
                    var t = n.next();
                    if (t.done) return t;
                    r[i] = t.value;
                }
                return Z(e, i, r[i++]);
            });
        }),
        d(eT, ea),
        (eT.prototype.toString = function () {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
        }),
        (eT.prototype.get = function (e, t) {
            return this.has(e) ? this._value : t;
        }),
        (eT.prototype.includes = function (e) {
            return eS(this._value, e);
        }),
        (eT.prototype.slice = function (e, t) {
            var n = this.size;
            return G(e, t, n) ? this : new eT(this._value, F(t, n) - V(e, n));
        }),
        (eT.prototype.reverse = function () {
            return this;
        }),
        (eT.prototype.indexOf = function (e) {
            return eS(this._value, e) ? 0 : -1;
        }),
        (eT.prototype.lastIndexOf = function (e) {
            return eS(this._value, e) ? this.size : -1;
        }),
        (eT.prototype.__iterate = function (e, t) {
            for (var n = 0; n < this.size; n++) if (!1 === e(this._value, n, this)) return n + 1;
            return n;
        }),
        (eT.prototype.__iterator = function (e, t) {
            var n = this,
                r = 0;
            return new X(function () {
                return r < n.size ? Z(e, r++, n._value) : Q();
            });
        }),
        (eT.prototype.equals = function (e) {
            return e instanceof eT ? eS(this._value, e._value) : eI(e);
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
                : ((e = V(e, this.size)), (t = F(t, this.size)) <= e)
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
            return new X(function () {
                var s = i;
                return (i += t ? -r : r), a > n ? Q() : Z(e, a++, s);
            });
        }),
        (eN.prototype.equals = function (e) {
            return e instanceof eN
                ? this._start === e._start && this._end === e._end && this._step === e._step
                : eI(this, e);
        }),
        d(eR, f),
        d(ew, eR),
        d(eP, eR),
        d(eD, eR),
        (eR.Keyed = ew),
        (eR.Indexed = eP),
        (eR.Set = eD);
    var ex =
        "function" == typeof Math.imul && -2 === Math.imul(0xffffffff, 2)
            ? Math.imul
            : function (e, t) {
                  var n = 65535 & (e |= 0),
                      r = 65535 & (t |= 0);
                  return (n * r + ((((e >>> 16) * r + n * (t >>> 16)) << 16) >>> 0)) | 0;
              };

    function eL(e) {
        return ((e >>> 1) & 0x40000000) | (0xbfffffff & e);
    }

    function ej(e) {
        if (!1 === e || null == e || ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)))
            return 0;
        if (!0 === e) return 1;
        var t = typeof e;
        if ("number" === t) {
            var n = 0 | e;
            for (n !== e && (n ^= 0xffffffff * e); e > 0xffffffff; ) (e /= 0xffffffff), (n ^= e);
            return eL(n);
        }
        if ("string" === t) return e.length > eW ? eM(e) : ek(e);
        if ("function" == typeof e.hashCode) return e.hashCode();
        if ("object" === t) return eU(e);
        if ("function" == typeof e.toString) return ek(e.toString());
        throw Error("Value type " + t + " cannot be hashed.");
    }

    function eM(e) {
        var t = eq[e];
        return void 0 === t && ((t = ek(e)), ez === eK && ((ez = 0), (eq = {})), ez++, (eq[e] = t)), t;
    }

    function ek(e) {
        for (var t = 0, n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) | 0;
        return eL(t);
    }

    function eU(e) {
        var t;
        if (
            (eB && void 0 !== (t = r.get(e))) ||
            void 0 !== (t = e[eY]) ||
            (!eV && (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[eY]) || void 0 !== (t = eF(e))))
        )
            return t;
        if (((t = ++eH), 0x40000000 & eH && (eH = 0), eB)) r.set(e, t);
        else if (void 0 !== eG && !1 === eG(e)) throw Error("Non-extensible objects are not allowed as keys.");
        else if (eV)
            Object.defineProperty(e, eY, {
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
                (e.propertyIsEnumerable[eY] = t);
        else if (void 0 !== e.nodeType) e[eY] = t;
        else throw Error("Unable to set a non-enumerable property on object.");
        return t;
    }
    var eG = Object.isExtensible,
        eV = (function () {
            try {
                return Object.defineProperty({}, "@", {}), !0;
            } catch (e) {
                return !1;
            }
        })();

    function eF(e) {
        if (e && e.nodeType > 0)
            switch (e.nodeType) {
                case 1:
                    return e.uniqueID;
                case 9:
                    return e.documentElement && e.documentElement.uniqueID;
            }
    }
    var eB = "function" == typeof WeakMap;
    eB && (r = new WeakMap());
    var eH = 0,
        eY = "__immutablehash__";
    "function" == typeof Symbol && (eY = Symbol(eY));
    var eW = 16,
        eK = 255,
        ez = 0,
        eq = {};

    function eX(e) {
        eC(e !== 1 / 0, "Cannot perform this action with an infinite size.");
    }

    function eZ(e) {
        return null == e
            ? e9()
            : eQ(e) && !y(e)
              ? e
              : e9().withMutations(function (t) {
                    var n = p(e);
                    eX(n.size),
                        n.forEach(function (e, n) {
                            return t.set(n, e);
                        });
                });
    }

    function eQ(e) {
        return !!(e && e[e$]);
    }
    d(eZ, ew),
        (eZ.prototype.toString = function () {
            return this.__toString("Map {", "}");
        }),
        (eZ.prototype.get = function (e, t) {
            return this._root ? this._root.get(0, void 0, e, t) : t;
        }),
        (eZ.prototype.set = function (e, t) {
            return te(this, e, t);
        }),
        (eZ.prototype.setIn = function (e, t) {
            return this.updateIn(e, R, function () {
                return t;
            });
        }),
        (eZ.prototype.remove = function (e) {
            return te(this, e, R);
        }),
        (eZ.prototype.deleteIn = function (e) {
            return this.updateIn(e, function () {
                return R;
            });
        }),
        (eZ.prototype.update = function (e, t, n) {
            return 1 == arguments.length ? e(this) : this.updateIn([e], t, n);
        }),
        (eZ.prototype.updateIn = function (e, t, n) {
            n || ((n = t), (t = void 0));
            var r = td(this, ni(e), t, n);
            return r === R ? void 0 : r;
        }),
        (eZ.prototype.clear = function () {
            return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0), (this._root = null), (this.__hash = void 0), (this.__altered = !0), this)
                  : e9();
        }),
        (eZ.prototype.merge = function () {
            return to(this, void 0, arguments);
        }),
        (eZ.prototype.mergeWith = function (e) {
            var t = u.call(arguments, 1);
            return to(this, e, t);
        }),
        (eZ.prototype.mergeIn = function (e) {
            var t = u.call(arguments, 1);
            return this.updateIn(e, e9(), function (e) {
                return "function" == typeof e.merge ? e.merge.apply(e, t) : t[t.length - 1];
            });
        }),
        (eZ.prototype.mergeDeep = function () {
            return to(this, tl, arguments);
        }),
        (eZ.prototype.mergeDeepWith = function (e) {
            var t = u.call(arguments, 1);
            return to(this, tc(e), t);
        }),
        (eZ.prototype.mergeDeepIn = function (e) {
            var t = u.call(arguments, 1);
            return this.updateIn(e, e9(), function (e) {
                return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, t) : t[t.length - 1];
            });
        }),
        (eZ.prototype.sort = function (e) {
            return tj(t3(this, e));
        }),
        (eZ.prototype.sortBy = function (e, t) {
            return tj(t3(this, t, e));
        }),
        (eZ.prototype.withMutations = function (e) {
            var t = this.asMutable();
            return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this;
        }),
        (eZ.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new L());
        }),
        (eZ.prototype.asImmutable = function () {
            return this.__ensureOwner();
        }),
        (eZ.prototype.wasAltered = function () {
            return this.__altered;
        }),
        (eZ.prototype.__iterator = function (e, t) {
            return new e4(this, e, t);
        }),
        (eZ.prototype.__iterate = function (e, t) {
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
        (eZ.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID
                ? this
                : e
                  ? e8(this.size, this._root, e, this.__hash)
                  : ((this.__ownerID = e), (this.__altered = !1), this);
        }),
        (eZ.isMap = eQ);
    var e$ = "@@__IMMUTABLE_MAP__@@",
        eJ = eZ.prototype;

    function e0(e, t) {
        (this.ownerID = e), (this.entries = t);
    }

    function e1(e, t, n) {
        (this.ownerID = e), (this.bitmap = t), (this.nodes = n);
    }

    function e2(e, t, n) {
        (this.ownerID = e), (this.count = t), (this.nodes = n);
    }

    function e3(e, t, n) {
        (this.ownerID = e), (this.keyHash = t), (this.entries = n);
    }

    function e6(e, t, n) {
        (this.ownerID = e), (this.keyHash = t), (this.entry = n);
    }

    function e4(e, t, n) {
        (this._type = t), (this._reverse = n), (this._stack = e._root && e7(e._root));
    }

    function e5(e, t) {
        return Z(e, t[0], t[1]);
    }

    function e7(e, t) {
        return {
            node: e,
            index: 0,
            __prev: t,
        };
    }

    function e8(e, t, n, r) {
        var i = Object.create(eJ);
        return (i.size = e), (i._root = t), (i.__ownerID = n), (i.__hash = r), (i.__altered = !1), i;
    }

    function e9() {
        return i || (i = e8(0));
    }

    function te(e, t, n) {
        if (e._root) {
            var r,
                i,
                a = D(w),
                s = D(P);
            if (((r = tt(e._root, e.__ownerID, 0, void 0, t, n, a, s)), !s.value)) return e;
            i = e.size + (a.value ? (n === R ? -1 : 1) : 0);
        } else {
            if (n === R) return e;
            (i = 1), (r = new e0(e.__ownerID, [[t, n]]));
        }
        return e.__ownerID
            ? ((e.size = i), (e._root = r), (e.__hash = void 0), (e.__altered = !0), e)
            : r
              ? e8(i, r)
              : e9();
    }

    function tt(e, t, n, r, i, a, s, o) {
        return e ? e.update(t, n, r, i, a, s, o) : a === R ? e : (x(o), x(s), new e6(t, r, [i, a]));
    }

    function tn(e) {
        return e.constructor === e6 || e.constructor === e3;
    }

    function tr(e, t, n, r, i) {
        if (e.keyHash === r) return new e3(t, r, [e.entry, i]);
        var a,
            s = (0 === n ? e.keyHash : e.keyHash >>> n) & N,
            o = (0 === n ? r : r >>> n) & N,
            l = s === o ? [tr(e, t, n + T, r, i)] : ((a = new e6(t, r, i)), s < o ? [e, a] : [a, e]);
        return new e1(t, (1 << s) | (1 << o), l);
    }

    function ti(e, t, n, r) {
        e || (e = new L());
        for (var i = new e6(e, ej(n), [n, r]), a = 0; a < t.length; a++) {
            var s = t[a];
            i = i.update(e, 0, void 0, s[0], s[1]);
        }
        return i;
    }

    function ta(e, t, n, r) {
        for (var i = 0, a = 0, s = Array(n), o = 0, l = 1, c = t.length; o < c; o++, l <<= 1) {
            var u = t[o];
            void 0 !== u && o !== r && ((i |= l), (s[a++] = u));
        }
        return new e1(e, i, s);
    }

    function ts(e, t, n, r, i) {
        for (var a = 0, s = Array(C), o = 0; 0 !== n; o++, n >>>= 1) s[o] = 1 & n ? t[a++] : void 0;
        return (s[r] = i), new e2(e, a + 1, s);
    }

    function to(e, t, n) {
        for (var r = [], i = 0; i < n.length; i++) {
            var a = n[i],
                s = p(a);
            m(a) ||
                (s = s.map(function (e) {
                    return ey(e);
                })),
                r.push(s);
        }
        return tu(e, t, r);
    }

    function tl(e, t, n) {
        return e && e.mergeDeep && m(t) ? e.mergeDeep(t) : eS(e, t) ? e : t;
    }

    function tc(e) {
        return function (t, n, r) {
            if (t && t.mergeDeepWith && m(n)) return t.mergeDeepWith(e, n);
            var i = e(t, n, r);
            return eS(t, i) ? t : i;
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
                                      e.update(r, R, function (e) {
                                          return e === R ? n : t(e, n, r);
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
        var i = e === R,
            a = t.next();
        if (a.done) {
            var s = i ? n : e,
                o = r(s);
            return o === s ? e : o;
        }
        eC(i || (e && e.set), "invalid keyPath");
        var l = a.value,
            c = i ? R : e.get(l, R),
            u = td(c, t, n, r);
        return u === c ? e : u === R ? e.remove(l) : (i ? e9() : e).set(l, u);
    }

    function tf(e) {
        return (
            (e -= (e >> 1) & 0x55555555),
            (e = ((e = (0x33333333 & e) + ((e >> 2) & 0x33333333)) + (e >> 4)) & 0xf0f0f0f),
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
        for (var a = Array(i), s = 0, o = 0; o < i; o++) o === t ? ((a[o] = n), (s = -1)) : (a[o] = e[o + s]);
        return a;
    }

    function th(e, t, n) {
        var r = e.length - 1;
        if (n && t === r) return e.pop(), e;
        for (var i = Array(r), a = 0, s = 0; s < r; s++) s === t && (a = 1), (i[s] = e[s + a]);
        return i;
    }
    (eJ[e$] = !0),
        (eJ[I] = eJ.remove),
        (eJ.removeIn = eJ.deleteIn),
        (e0.prototype.get = function (e, t, n, r) {
            for (var i = this.entries, a = 0, s = i.length; a < s; a++) if (eS(n, i[a][0])) return i[a][1];
            return r;
        }),
        (e0.prototype.update = function (e, t, n, r, i, a, s) {
            for (var o = i === R, l = this.entries, c = 0, u = l.length; c < u && !eS(r, l[c][0]); c++);
            var d = c < u;
            if (d ? l[c][1] === i : o) return this;
            if ((x(s), (o || !d) && x(a), !o || 1 !== l.length)) {
                if (!d && !o && l.length >= tm) return ti(e, l, r, i);
                var f = e && e === this.ownerID,
                    p = f ? l : j(l);
                return (d ? (o ? (c === u - 1 ? p.pop() : (p[c] = p.pop())) : (p[c] = [r, i])) : p.push([r, i]), f)
                    ? ((this.entries = p), this)
                    : new e0(e, p);
            }
        }),
        (e1.prototype.get = function (e, t, n, r) {
            void 0 === t && (t = ej(n));
            var i = 1 << ((0 === e ? t : t >>> e) & N),
                a = this.bitmap;
            return (a & i) == 0 ? r : this.nodes[tf(a & (i - 1))].get(e + T, t, n, r);
        }),
        (e1.prototype.update = function (e, t, n, r, i, a, s) {
            void 0 === n && (n = ej(r));
            var o = (0 === t ? n : n >>> t) & N,
                l = 1 << o,
                c = this.bitmap,
                u = (c & l) != 0;
            if (!u && i === R) return this;
            var d = tf(c & (l - 1)),
                f = this.nodes,
                p = u ? f[d] : void 0,
                _ = tt(p, e, t + T, n, r, i, a, s);
            if (_ === p) return this;
            if (!u && _ && f.length >= tg) return ts(e, f, c, o, _);
            if (u && !_ && 2 === f.length && tn(f[1 ^ d])) return f[1 ^ d];
            if (u && _ && 1 === f.length && tn(_)) return _;
            var h = e && e === this.ownerID,
                m = u ? (_ ? c : c ^ l) : c | l,
                g = u ? (_ ? tp(f, d, _, h) : th(f, d, h)) : t_(f, d, _, h);
            return h ? ((this.bitmap = m), (this.nodes = g), this) : new e1(e, m, g);
        }),
        (e2.prototype.get = function (e, t, n, r) {
            void 0 === t && (t = ej(n));
            var i = (0 === e ? t : t >>> e) & N,
                a = this.nodes[i];
            return a ? a.get(e + T, t, n, r) : r;
        }),
        (e2.prototype.update = function (e, t, n, r, i, a, s) {
            void 0 === n && (n = ej(r));
            var o = (0 === t ? n : n >>> t) & N,
                l = i === R,
                c = this.nodes,
                u = c[o];
            if (l && !u) return this;
            var d = tt(u, e, t + T, n, r, i, a, s);
            if (d === u) return this;
            var f = this.count;
            if (u) {
                if (!d && --f < tE) return ta(e, c, f, o);
            } else f++;
            var p = e && e === this.ownerID,
                _ = tp(c, o, d, p);
            return p ? ((this.count = f), (this.nodes = _), this) : new e2(e, f, _);
        }),
        (e3.prototype.get = function (e, t, n, r) {
            for (var i = this.entries, a = 0, s = i.length; a < s; a++) if (eS(n, i[a][0])) return i[a][1];
            return r;
        }),
        (e3.prototype.update = function (e, t, n, r, i, a, s) {
            void 0 === n && (n = ej(r));
            var o = i === R;
            if (n !== this.keyHash) return o ? this : (x(s), x(a), tr(this, e, t, n, [r, i]));
            for (var l = this.entries, c = 0, u = l.length; c < u && !eS(r, l[c][0]); c++);
            var d = c < u;
            if (d ? l[c][1] === i : o) return this;
            if ((x(s), (o || !d) && x(a), o && 2 === u)) return new e6(e, this.keyHash, l[1 ^ c]);
            var f = e && e === this.ownerID,
                p = f ? l : j(l);
            return (d ? (o ? (c === u - 1 ? p.pop() : (p[c] = p.pop())) : (p[c] = [r, i])) : p.push([r, i]), f)
                ? ((this.entries = p), this)
                : new e3(e, this.keyHash, p);
        }),
        (e6.prototype.get = function (e, t, n, r) {
            return eS(n, this.entry[0]) ? this.entry[1] : r;
        }),
        (e6.prototype.update = function (e, t, n, r, i, a, s) {
            var o = i === R,
                l = eS(r, this.entry[0]);
            return (l ? i === this.entry[1] : o)
                ? this
                : (x(s), o)
                  ? void x(a)
                  : l
                    ? e && e === this.ownerID
                        ? ((this.entry[1] = i), this)
                        : new e6(e, this.keyHash, [r, i])
                    : (x(a), tr(this, e, t, ej(r), [r, i]));
        }),
        (e0.prototype.iterate = e3.prototype.iterate =
            function (e, t) {
                for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
                    if (!1 === e(n[t ? i - r : r])) return !1;
            }),
        (e1.prototype.iterate = e2.prototype.iterate =
            function (e, t) {
                for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
                    var a = n[t ? i - r : r];
                    if (a && !1 === a.iterate(e, t)) return !1;
                }
            }),
        (e6.prototype.iterate = function (e, t) {
            return e(this.entry);
        }),
        d(e4, X),
        (e4.prototype.next = function () {
            for (var e = this._type, t = this._stack; t; ) {
                var n,
                    r = t.node,
                    i = t.index++;
                if (r.entry) {
                    if (0 === i) return e5(e, r.entry);
                } else if (r.entries) {
                    if (i <= (n = r.entries.length - 1)) return e5(e, r.entries[this._reverse ? n - i : i]);
                } else if (i <= (n = r.nodes.length - 1)) {
                    var a = r.nodes[this._reverse ? n - i : i];
                    if (a) {
                        if (a.entry) return e5(e, a.entry);
                        t = this._stack = e7(a, t);
                    }
                    continue;
                }
                t = this._stack = this._stack.__prev;
            }
            return Q();
        });
    var tm = C / 4,
        tg = C / 2,
        tE = C / 4;

    function tb(e) {
        var t = tC();
        if (null == e) return t;
        if (ty(e)) return e;
        var n = _(e),
            r = n.size;
        return 0 === r
            ? t
            : (eX(r), r > 0 && r < C)
              ? tT(0, r, T, null, new tv(n.toArray()))
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
    d(tb, eP),
        (tb.of = function () {
            return this(arguments);
        }),
        (tb.prototype.toString = function () {
            return this.__toString("List [", "]");
        }),
        (tb.prototype.get = function (e, t) {
            if ((e = k(this, e)) >= 0 && e < this.size) {
                var n = tP(this, (e += this._origin));
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
                    (this._level = T),
                    (this._root = this._tail = null),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : tC();
        }),
        (tb.prototype.push = function () {
            var e = arguments,
                t = this.size;
            return this.withMutations(function (n) {
                tD(n, 0, t + e.length);
                for (var r = 0; r < e.length; r++) n.set(t + r, e[r]);
            });
        }),
        (tb.prototype.pop = function () {
            return tD(this, 0, -1);
        }),
        (tb.prototype.unshift = function () {
            var e = arguments;
            return this.withMutations(function (t) {
                tD(t, -e.length);
                for (var n = 0; n < e.length; n++) t.set(n, e[n]);
            });
        }),
        (tb.prototype.shift = function () {
            return tD(this, 1);
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
            return tD(this, 0, e);
        }),
        (tb.prototype.slice = function (e, t) {
            var n = this.size;
            return G(e, t, n) ? this : tD(this, V(e, n), F(t, n));
        }),
        (tb.prototype.__iterator = function (e, t) {
            var n = 0,
                r = tI(this, t);
            return new X(function () {
                var t = r();
                return t === tS ? Q() : Z(e, n++, t);
            });
        }),
        (tb.prototype.__iterate = function (e, t) {
            for (var n, r = 0, i = tI(this, t); (n = i()) !== tS && !1 !== e(n, r++, this); );
            return r;
        }),
        (tb.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID
                ? this
                : e
                  ? tT(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash)
                  : ((this.__ownerID = e), this);
        }),
        (tb.isList = ty);
    var tO = "@@__IMMUTABLE_LIST__@@",
        tA = tb.prototype;

    function tv(e, t) {
        (this.array = e), (this.ownerID = t);
    }
    (tA[tO] = !0),
        (tA[I] = tA.remove),
        (tA.setIn = eJ.setIn),
        (tA.deleteIn = tA.removeIn = eJ.removeIn),
        (tA.update = eJ.update),
        (tA.updateIn = eJ.updateIn),
        (tA.mergeIn = eJ.mergeIn),
        (tA.mergeDeepIn = eJ.mergeDeepIn),
        (tA.withMutations = eJ.withMutations),
        (tA.asMutable = eJ.asMutable),
        (tA.asImmutable = eJ.asImmutable),
        (tA.wasAltered = eJ.wasAltered),
        (tv.prototype.removeBefore = function (e, t, n) {
            if (n === t ? 1 << t : 0 === this.array.length) return this;
            var r,
                i = (n >>> t) & N;
            if (i >= this.array.length) return new tv([], e);
            var a = 0 === i;
            if (t > 0) {
                var s = this.array[i];
                if ((r = s && s.removeBefore(e, t - T, n)) === s && a) return this;
            }
            if (a && !r) return this;
            var o = tw(this, e);
            if (!a) for (var l = 0; l < i; l++) o.array[l] = void 0;
            return r && (o.array[i] = r), o;
        }),
        (tv.prototype.removeAfter = function (e, t, n) {
            if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
            var r,
                i = ((n - 1) >>> t) & N;
            if (i >= this.array.length) return this;
            if (t > 0) {
                var a = this.array[i];
                if ((r = a && a.removeAfter(e, t - T, n)) === a && i === this.array.length - 1) return this;
            }
            var s = tw(this, e);
            return s.array.splice(i + 1), r && (s.array[i] = r), s;
        });
    var tS = {};

    function tI(e, t) {
        var n = e._origin,
            r = e._capacity,
            i = tL(r),
            a = e._tail;
        return s(e._root, e._level, 0);

        function s(e, t, n) {
            return 0 === t ? o(e, n) : l(e, t, n);
        }

        function o(e, s) {
            var o = s === i ? a && a.array : e && e.array,
                l = s > n ? 0 : n - s,
                c = r - s;
            return (
                c > C && (c = C),
                function () {
                    if (l === c) return tS;
                    var e = t ? --c : l++;
                    return o && o[e];
                }
            );
        }

        function l(e, i, a) {
            var o,
                l = e && e.array,
                c = a > n ? 0 : (n - a) >> i,
                u = ((r - a) >> i) + 1;
            return (
                u > C && (u = C),
                function () {
                    for (;;) {
                        if (o) {
                            var e = o();
                            if (e !== tS) return e;
                            o = null;
                        }
                        if (c === u) return tS;
                        var n = t ? --u : c++;
                        o = s(l && l[n], i - T, a + (n << i));
                    }
                }
            );
        }
    }

    function tT(e, t, n, r, i, a, s) {
        var o = Object.create(tA);
        return (
            (o.size = t - e),
            (o._origin = e),
            (o._capacity = t),
            (o._level = n),
            (o._root = r),
            (o._tail = i),
            (o.__ownerID = a),
            (o.__hash = s),
            (o.__altered = !1),
            o
        );
    }

    function tC() {
        return a || (a = tT(0, 0, T));
    }

    function tN(e, t, n) {
        if ((t = k(e, t)) != t) return e;
        if (t >= e.size || t < 0)
            return e.withMutations(function (e) {
                t < 0 ? tD(e, t).set(0, n) : tD(e, 0, t + 1).set(t, n);
            });
        t += e._origin;
        var r = e._tail,
            i = e._root,
            a = D(P);
        return (t >= tL(e._capacity)
            ? (r = tR(r, e.__ownerID, 0, t, n, a))
            : (i = tR(i, e.__ownerID, e._level, t, n, a)),
        a.value)
            ? e.__ownerID
                ? ((e._root = i), (e._tail = r), (e.__hash = void 0), (e.__altered = !0), e)
                : tT(e._origin, e._capacity, e._level, i, r)
            : e;
    }

    function tR(e, t, n, r, i, a) {
        var s,
            o = (r >>> n) & N,
            l = e && o < e.array.length;
        if (!l && void 0 === i) return e;
        if (n > 0) {
            var c = e && e.array[o],
                u = tR(c, t, n - T, r, i, a);
            return u === c ? e : (((s = tw(e, t)).array[o] = u), s);
        }
        return l && e.array[o] === i
            ? e
            : (x(a), (s = tw(e, t)), void 0 === i && o === s.array.length - 1 ? s.array.pop() : (s.array[o] = i), s);
    }

    function tw(e, t) {
        return t && e && t === e.ownerID ? e : new tv(e ? e.array.slice() : [], t);
    }

    function tP(e, t) {
        if (t >= tL(e._capacity)) return e._tail;
        if (t < 1 << (e._level + T)) {
            for (var n = e._root, r = e._level; n && r > 0; ) (n = n.array[(t >>> r) & N]), (r -= T);
            return n;
        }
    }

    function tD(e, t, n) {
        void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
        var r = e.__ownerID || new L(),
            i = e._origin,
            a = e._capacity,
            s = i + t,
            o = void 0 === n ? a : n < 0 ? a + n : i + n;
        if (s === i && o === a) return e;
        if (s >= o) return e.clear();
        for (var l = e._level, c = e._root, u = 0; s + u < 0; )
            (c = new tv(c && c.array.length ? [void 0, c] : [], r)), (l += T), (u += 1 << l);
        u && ((s += u), (i += u), (o += u), (a += u));
        for (var d = tL(a), f = tL(o); f >= 1 << (l + T); ) (c = new tv(c && c.array.length ? [c] : [], r)), (l += T);
        var p = e._tail,
            _ = f < d ? tP(e, o - 1) : f > d ? new tv([], r) : p;
        if (p && f > d && s < a && p.array.length) {
            for (var h = (c = tw(c, r)), m = l; m > T; m -= T) {
                var g = (d >>> m) & N;
                h = h.array[g] = tw(h.array[g], r);
            }
            h.array[(d >>> T) & N] = p;
        }
        if ((o < a && (_ = _ && _.removeAfter(r, 0, o)), s >= f))
            (s -= f), (o -= f), (l = T), (c = null), (_ = _ && _.removeBefore(r, 0, s));
        else if (s > i || f < d) {
            for (u = 0; c; ) {
                var E = (s >>> l) & N;
                if ((E !== f >>> l) & N) break;
                E && (u += (1 << l) * E), (l -= T), (c = c.array[E]);
            }
            c && s > i && (c = c.removeBefore(r, l, s - u)),
                c && f < d && (c = c.removeAfter(r, l, f - u)),
                u && ((s -= u), (o -= u));
        }
        return e.__ownerID
            ? ((e.size = o - s),
              (e._origin = s),
              (e._capacity = o),
              (e._level = l),
              (e._root = c),
              (e._tail = _),
              (e.__hash = void 0),
              (e.__altered = !0),
              e)
            : tT(s, o, l, c, _);
    }

    function tx(e, t, n) {
        for (var r = [], i = 0, a = 0; a < n.length; a++) {
            var s = n[a],
                o = _(s);
            o.size > i && (i = o.size),
                m(s) ||
                    (o = o.map(function (e) {
                        return ey(e);
                    })),
                r.push(o);
        }
        return i > e.size && (e = e.setSize(i)), tu(e, t, r);
    }

    function tL(e) {
        return e < C ? 0 : ((e - 1) >>> T) << T;
    }

    function tj(e) {
        return null == e
            ? tU()
            : tM(e)
              ? e
              : tU().withMutations(function (t) {
                    var n = p(e);
                    eX(n.size),
                        n.forEach(function (e, n) {
                            return t.set(n, e);
                        });
                });
    }

    function tM(e) {
        return eQ(e) && y(e);
    }

    function tk(e, t, n, r) {
        var i = Object.create(tj.prototype);
        return (i.size = e ? e.size : 0), (i._map = e), (i._list = t), (i.__ownerID = n), (i.__hash = r), i;
    }

    function tU() {
        return s || (s = tk(e9(), tC()));
    }

    function tG(e, t, n) {
        var r,
            i,
            a = e._map,
            s = e._list,
            o = a.get(t),
            l = void 0 !== o;
        if (n === R) {
            if (!l) return e;
            s.size >= C && s.size >= 2 * a.size
                ? ((r = (i = s.filter(function (e, t) {
                      return void 0 !== e && o !== t;
                  }))
                      .toKeyedSeq()
                      .map(function (e) {
                          return e[0];
                      })
                      .flip()
                      .toMap()),
                  e.__ownerID && (r.__ownerID = i.__ownerID = e.__ownerID))
                : ((r = a.remove(t)), (i = o === s.size - 1 ? s.pop() : s.set(o, void 0)));
        } else if (l) {
            if (n === s.get(o)[1]) return e;
            (r = a), (i = s.set(o, [t, n]));
        } else (r = a.set(t, s.size)), (i = s.set(s.size, [t, n]));
        return e.__ownerID ? ((e.size = r.size), (e._map = r), (e._list = i), (e.__hash = void 0), e) : tk(r, i);
    }

    function tV(e, t) {
        (this._iter = e), (this._useKeys = t), (this.size = e.size);
    }

    function tF(e) {
        (this._iter = e), (this.size = e.size);
    }

    function tB(e) {
        (this._iter = e), (this.size = e.size);
    }

    function tH(e) {
        (this._iter = e), (this.size = e.size);
    }

    function tY(e) {
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
                if (t === W) {
                    var r = e.__iterator(t, n);
                    return new X(function () {
                        var e = r.next();
                        if (!e.done) {
                            var t = e.value[0];
                            (e.value[0] = e.value[1]), (e.value[1] = t);
                        }
                        return e;
                    });
                }
                return e.__iterator(t === Y ? H : Y, n);
            }),
            t
        );
    }

    function tW(e, t, n) {
        var r = nt(e);
        return (
            (r.size = e.size),
            (r.has = function (t) {
                return e.has(t);
            }),
            (r.get = function (r, i) {
                var a = e.get(r, R);
                return a === R ? i : t.call(n, a, r, e);
            }),
            (r.__iterateUncached = function (r, i) {
                var a = this;
                return e.__iterate(function (e, i, s) {
                    return !1 !== r(t.call(n, e, i, s), i, a);
                }, i);
            }),
            (r.__iteratorUncached = function (r, i) {
                var a = e.__iterator(W, i);
                return new X(function () {
                    var i = a.next();
                    if (i.done) return i;
                    var s = i.value,
                        o = s[0];
                    return Z(r, o, t.call(n, s[1], o, e), i);
                });
            }),
            r
        );
    }

    function tK(e, t) {
        var n = nt(e);
        return (
            (n._iter = e),
            (n.size = e.size),
            (n.reverse = function () {
                return e;
            }),
            e.flip &&
                (n.flip = function () {
                    var t = tY(e);
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

    function tz(e, t, n, r) {
        var i = nt(e);
        return (
            r &&
                ((i.has = function (r) {
                    var i = e.get(r, R);
                    return i !== R && !!t.call(n, i, r, e);
                }),
                (i.get = function (r, i) {
                    var a = e.get(r, R);
                    return a !== R && t.call(n, a, r, e) ? a : i;
                })),
            (i.__iterateUncached = function (i, a) {
                var s = this,
                    o = 0;
                return (
                    e.__iterate(function (e, a, l) {
                        if (t.call(n, e, a, l)) return o++, i(e, r ? a : o - 1, s);
                    }, a),
                    o
                );
            }),
            (i.__iteratorUncached = function (i, a) {
                var s = e.__iterator(W, a),
                    o = 0;
                return new X(function () {
                    for (;;) {
                        var a = s.next();
                        if (a.done) return a;
                        var l = a.value,
                            c = l[0],
                            u = l[1];
                        if (t.call(n, u, c, e)) return Z(i, r ? c : o++, u, a);
                    }
                });
            }),
            i
        );
    }

    function tq(e, t, n) {
        var r = eZ().asMutable();
        return (
            e.__iterate(function (i, a) {
                r.update(t.call(n, i, a, e), 0, function (e) {
                    return e + 1;
                });
            }),
            r.asImmutable()
        );
    }

    function tX(e, t, n) {
        var r = g(e),
            i = (y(e) ? tj() : eZ()).asMutable();
        e.__iterate(function (a, s) {
            i.update(t.call(n, a, s, e), function (e) {
                return (e = e || []).push(r ? [s, a] : a), e;
            });
        });
        var a = ne(e);
        return i.map(function (t) {
            return t7(e, a(t));
        });
    }

    function tZ(e, t, n, r) {
        var i,
            a = e.size;
        if ((void 0 !== t && (t |= 0), void 0 !== n && (n |= 0), G(t, n, a))) return e;
        var s = V(t, a),
            o = F(n, a);
        if (s != s || o != o) return tZ(e.toSeq().cacheResult(), t, n, r);
        var l = o - s;
        l == l && (i = l < 0 ? 0 : l);
        var c = nt(e);
        return (
            (c.size = 0 === i ? i : (e.size && i) || void 0),
            !r &&
                ef(e) &&
                i >= 0 &&
                (c.get = function (t, n) {
                    return (t = k(this, t)) >= 0 && t < i ? e.get(t + s, n) : n;
                }),
            (c.__iterateUncached = function (t, n) {
                var a = this;
                if (0 === i) return 0;
                if (n) return this.cacheResult().__iterate(t, n);
                var o = 0,
                    l = !0,
                    c = 0;
                return (
                    e.__iterate(function (e, n) {
                        if (!(l && (l = o++ < s))) return c++, !1 !== t(e, r ? n : c - 1, a) && c !== i;
                    }),
                    c
                );
            }),
            (c.__iteratorUncached = function (t, n) {
                if (0 !== i && n) return this.cacheResult().__iterator(t, n);
                var a = 0 !== i && e.__iterator(t, n),
                    o = 0,
                    l = 0;
                return new X(function () {
                    for (; o++ < s; ) a.next();
                    if (++l > i) return Q();
                    var e = a.next();
                    return r || t === Y ? e : t === H ? Z(t, l - 1, void 0, e) : Z(t, l - 1, e.value[1], e);
                });
            }),
            c
        );
    }

    function tQ(e, t, n) {
        var r = nt(e);
        return (
            (r.__iterateUncached = function (r, i) {
                var a = this;
                if (i) return this.cacheResult().__iterate(r, i);
                var s = 0;
                return (
                    e.__iterate(function (e, i, o) {
                        return t.call(n, e, i, o) && ++s && r(e, i, a);
                    }),
                    s
                );
            }),
            (r.__iteratorUncached = function (r, i) {
                var a = this;
                if (i) return this.cacheResult().__iterator(r, i);
                var s = e.__iterator(W, i),
                    o = !0;
                return new X(function () {
                    if (!o) return Q();
                    var e = s.next();
                    if (e.done) return e;
                    var i = e.value,
                        l = i[0],
                        c = i[1];
                    return t.call(n, c, l, a) ? (r === W ? e : Z(r, l, c, e)) : ((o = !1), Q());
                });
            }),
            r
        );
    }

    function t$(e, t, n, r) {
        var i = nt(e);
        return (
            (i.__iterateUncached = function (i, a) {
                var s = this;
                if (a) return this.cacheResult().__iterate(i, a);
                var o = !0,
                    l = 0;
                return (
                    e.__iterate(function (e, a, c) {
                        if (!(o && (o = t.call(n, e, a, c)))) return l++, i(e, r ? a : l - 1, s);
                    }),
                    l
                );
            }),
            (i.__iteratorUncached = function (i, a) {
                var s = this;
                if (a) return this.cacheResult().__iterator(i, a);
                var o = e.__iterator(W, a),
                    l = !0,
                    c = 0;
                return new X(function () {
                    var e, a, u;
                    do {
                        if ((e = o.next()).done)
                            if (r || i === Y) return e;
                            else if (i === H) return Z(i, c++, void 0, e);
                            else return Z(i, c++, e.value[1], e);
                        var d = e.value;
                        (a = d[0]), (u = d[1]), l && (l = t.call(n, u, a, s));
                    } while (l);
                    return i === W ? e : Z(i, a, u, e);
                });
            }),
            i
        );
    }

    function tJ(e, t) {
        var n = g(e),
            r = [e]
                .concat(t)
                .map(function (e) {
                    return m(e) ? n && (e = p(e)) : (e = n ? e_(e) : eh(Array.isArray(e) ? e : [e])), e;
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
                    s = !1;

                function o(e, l) {
                    var c = this;
                    e.__iterate(function (e, i) {
                        return (!t || l < t) && m(e) ? o(e, l + 1) : !1 === r(e, n ? i : a++, c) && (s = !0), !s;
                    }, i);
                }
                return o(e, 0), a;
            }),
            (r.__iteratorUncached = function (r, i) {
                var a = e.__iterator(r, i),
                    s = [],
                    o = 0;
                return new X(function () {
                    for (; a; ) {
                        var e = a.next();
                        if (!1 !== e.done) {
                            a = s.pop();
                            continue;
                        }
                        var l = e.value;
                        if ((r === W && (l = l[1]), !((!t || s.length < t) && m(l)))) return n ? e : Z(r, o++, l, e);
                        s.push(a), (a = l.__iterator(r, i));
                    }
                    return Q();
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

    function t2(e, t) {
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
                    a = e.__iterator(Y, r),
                    s = 0;
                return new X(function () {
                    return (!i || s % 2) && (i = a.next()).done ? i : s % 2 ? Z(n, s++, t) : Z(n, s++, i.value, i);
                });
            }),
            n
        );
    }

    function t3(e, t, n) {
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
            r ? ei(a) : E(e) ? ea(a) : es(a)
        );
    }

    function t6(e, t, n) {
        if ((t || (t = nr), !n))
            return e.reduce(function (e, n) {
                return t4(t, e, n) ? n : e;
            });
        var r = e
            .toSeq()
            .map(function (t, r) {
                return [t, n(t, r, e)];
            })
            .reduce(function (e, n) {
                return t4(t, e[1], n[1]) ? n : e;
            });
        return r && r[0];
    }

    function t4(e, t, n) {
        var r = e(n, t);
        return (0 === r && n !== t && (null == n || n != n)) || r > 0;
    }

    function t5(e, t, n) {
        var r = nt(e);
        return (
            (r.size = new el(n)
                .map(function (e) {
                    return e.size;
                })
                .min()),
            (r.__iterate = function (e, t) {
                for (var n, r = this.__iterator(Y, t), i = 0; !(n = r.next()).done && !1 !== e(n.value, i++, this); );
                return i;
            }),
            (r.__iteratorUncached = function (e, r) {
                var i = n.map(function (e) {
                        return (e = f(e)), ee(r ? e.reverse() : e);
                    }),
                    a = 0,
                    s = !1;
                return new X(function () {
                    var n;
                    return (s ||
                        (s = (n = i.map(function (e) {
                            return e.next();
                        })).some(function (e) {
                            return e.done;
                        })),
                    s)
                        ? Q()
                        : Z(
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

    function t7(e, t) {
        return ef(e) ? t : e.constructor(t);
    }

    function t8(e) {
        if (e !== Object(e)) throw TypeError("Expected [K, V] tuple: " + e);
    }

    function t9(e) {
        return eX(e.size), M(e);
    }

    function ne(e) {
        return g(e) ? p : E(e) ? _ : h;
    }

    function nt(e) {
        return Object.create((g(e) ? ei : E(e) ? ea : es).prototype);
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
                    var s = Object.keys(e);
                    nc(i, s), (i.size = s.length), (i._name = t), (i._keys = s), (i._defaultValues = e);
                }
                this._map = eZ(a);
            },
            i = (r.prototype = Object.create(ns));
        return (i.constructor = r), r;
    }
    d(tj, eZ),
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
            return tG(this, e, R);
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
        (tj.prototype[S] = !0),
        (tj.prototype[I] = tj.prototype.remove),
        d(tV, ei),
        (tV.prototype.get = function (e, t) {
            return this._iter.get(e, t);
        }),
        (tV.prototype.has = function (e) {
            return this._iter.has(e);
        }),
        (tV.prototype.valueSeq = function () {
            return this._iter.valueSeq();
        }),
        (tV.prototype.reverse = function () {
            var e = this,
                t = tK(this, !0);
            return (
                this._useKeys ||
                    (t.valueSeq = function () {
                        return e._iter.toSeq().reverse();
                    }),
                t
            );
        }),
        (tV.prototype.map = function (e, t) {
            var n = this,
                r = tW(this, e, t);
            return (
                this._useKeys ||
                    (r.valueSeq = function () {
                        return n._iter.toSeq().map(e, t);
                    }),
                r
            );
        }),
        (tV.prototype.__iterate = function (e, t) {
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
        (tV.prototype.__iterator = function (e, t) {
            if (this._useKeys) return this._iter.__iterator(e, t);
            var n = this._iter.__iterator(Y, t),
                r = t ? t9(this) : 0;
            return new X(function () {
                var i = n.next();
                return i.done ? i : Z(e, t ? --r : r++, i.value, i);
            });
        }),
        (tV.prototype[S] = !0),
        d(tF, ea),
        (tF.prototype.includes = function (e) {
            return this._iter.includes(e);
        }),
        (tF.prototype.__iterate = function (e, t) {
            var n = this,
                r = 0;
            return this._iter.__iterate(function (t) {
                return e(t, r++, n);
            }, t);
        }),
        (tF.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(Y, t),
                r = 0;
            return new X(function () {
                var t = n.next();
                return t.done ? t : Z(e, r++, t.value, t);
            });
        }),
        d(tB, es),
        (tB.prototype.has = function (e) {
            return this._iter.includes(e);
        }),
        (tB.prototype.__iterate = function (e, t) {
            var n = this;
            return this._iter.__iterate(function (t) {
                return e(t, t, n);
            }, t);
        }),
        (tB.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(Y, t);
            return new X(function () {
                var t = n.next();
                return t.done ? t : Z(e, t.value, t.value, t);
            });
        }),
        d(tH, ei),
        (tH.prototype.entrySeq = function () {
            return this._iter.toSeq();
        }),
        (tH.prototype.__iterate = function (e, t) {
            var n = this;
            return this._iter.__iterate(function (t) {
                if (t) {
                    t8(t);
                    var r = m(t);
                    return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n);
                }
            }, t);
        }),
        (tH.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(Y, t);
            return new X(function () {
                for (;;) {
                    var t = n.next();
                    if (t.done) return t;
                    var r = t.value;
                    if (r) {
                        t8(r);
                        var i = m(r);
                        return Z(e, i ? r.get(0) : r[0], i ? r.get(1) : r[1], t);
                    }
                }
            });
        }),
        (tF.prototype.cacheResult =
            tV.prototype.cacheResult =
            tB.prototype.cacheResult =
            tH.prototype.cacheResult =
                nn),
        d(na, ew),
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
            return e._empty || (e._empty = no(this, e9()));
        }),
        (na.prototype.set = function (e, t) {
            if (!this.has(e)) throw Error('Cannot set unknown key "' + e + '" on ' + nl(this));
            var n = this._map && this._map.set(e, t);
            return this.__ownerID || n === this._map ? this : no(this, n);
        }),
        (na.prototype.remove = function (e) {
            if (!this.has(e)) return this;
            var t = this._map && this._map.remove(e);
            return this.__ownerID || t === this._map ? this : no(this, t);
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
            return e ? no(this, t, e) : ((this.__ownerID = e), (this._map = t), this);
        });
    var ns = na.prototype;

    function no(e, t, n) {
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
                eC(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e);
            },
        });
    }

    function nd(e) {
        return null == e
            ? ng()
            : nf(e) && !y(e)
              ? e
              : ng().withMutations(function (t) {
                    var n = h(e);
                    eX(n.size),
                        n.forEach(function (e) {
                            return t.add(e);
                        });
                });
    }

    function nf(e) {
        return !!(e && e[np]);
    }
    (ns[I] = ns.remove),
        (ns.deleteIn = ns.removeIn = eJ.removeIn),
        (ns.merge = eJ.merge),
        (ns.mergeWith = eJ.mergeWith),
        (ns.mergeIn = eJ.mergeIn),
        (ns.mergeDeep = eJ.mergeDeep),
        (ns.mergeDeepWith = eJ.mergeDeepWith),
        (ns.mergeDeepIn = eJ.mergeDeepIn),
        (ns.setIn = eJ.setIn),
        (ns.update = eJ.update),
        (ns.updateIn = eJ.updateIn),
        (ns.withMutations = eJ.withMutations),
        (ns.asMutable = eJ.asMutable),
        (ns.asImmutable = eJ.asImmutable),
        d(nd, eD),
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
            return nh(this, this._map.set(e, !0));
        }),
        (nd.prototype.remove = function (e) {
            return nh(this, this._map.remove(e));
        }),
        (nd.prototype.clear = function () {
            return nh(this, this._map.clear());
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
                            h(e[n]).forEach(function (e) {
                                return t.add(e);
                            });
                    })
                  : this.constructor(e[0]);
        }),
        (nd.prototype.intersect = function () {
            var e = u.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (e) {
                return h(e);
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
                return h(e);
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
            return nE(t3(this, e));
        }),
        (nd.prototype.sortBy = function (e, t) {
            return nE(t3(this, t, e));
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

    function nh(e, t) {
        return e.__ownerID
            ? ((e.size = t.size), (e._map = t), e)
            : t === e._map
              ? e
              : 0 === t.size
                ? e.__empty()
                : e.__make(t);
    }

    function nm(e, t) {
        var n = Object.create(n_);
        return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
    }

    function ng() {
        return o || (o = nm(e9()));
    }

    function nE(e) {
        return null == e
            ? nA()
            : nb(e)
              ? e
              : nA().withMutations(function (t) {
                    var n = h(e);
                    eX(n.size),
                        n.forEach(function (e) {
                            return t.add(e);
                        });
                });
    }

    function nb(e) {
        return nf(e) && y(e);
    }
    (n_[np] = !0),
        (n_[I] = n_.remove),
        (n_.mergeDeep = n_.merge),
        (n_.mergeDeepWith = n_.mergeWith),
        (n_.withMutations = eJ.withMutations),
        (n_.asMutable = eJ.asMutable),
        (n_.asImmutable = eJ.asImmutable),
        (n_.__empty = ng),
        (n_.__make = nm),
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

    function nA() {
        return l || (l = nO(tU()));
    }

    function nv(e) {
        return null == e ? nN() : nS(e) ? e : nN().unshiftAll(e);
    }

    function nS(e) {
        return !!(e && e[nI]);
    }
    (ny[S] = !0),
        (ny.__empty = nA),
        (ny.__make = nO),
        d(nv, eP),
        (nv.of = function () {
            return this(arguments);
        }),
        (nv.prototype.toString = function () {
            return this.__toString("Stack [", "]");
        }),
        (nv.prototype.get = function (e, t) {
            var n = this._head;
            for (e = k(this, e); n && e--; ) n = n.next;
            return n ? n.value : t;
        }),
        (nv.prototype.peek = function () {
            return this._head && this._head.value;
        }),
        (nv.prototype.push = function () {
            if (0 == arguments.length) return this;
            for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--)
                t = {
                    value: arguments[n],
                    next: t,
                };
            return this.__ownerID
                ? ((this.size = e), (this._head = t), (this.__hash = void 0), (this.__altered = !0), this)
                : nC(e, t);
        }),
        (nv.prototype.pushAll = function (e) {
            if (0 === (e = _(e)).size) return this;
            eX(e.size);
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
                : nC(t, n);
        }),
        (nv.prototype.pop = function () {
            return this.slice(1);
        }),
        (nv.prototype.unshift = function () {
            return this.push.apply(this, arguments);
        }),
        (nv.prototype.unshiftAll = function (e) {
            return this.pushAll(e);
        }),
        (nv.prototype.shift = function () {
            return this.pop.apply(this, arguments);
        }),
        (nv.prototype.clear = function () {
            return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0), (this._head = void 0), (this.__hash = void 0), (this.__altered = !0), this)
                  : nN();
        }),
        (nv.prototype.slice = function (e, t) {
            if (G(e, t, this.size)) return this;
            var n = V(e, this.size);
            if (F(t, this.size) !== this.size) return eP.prototype.slice.call(this, e, t);
            for (var r = this.size - n, i = this._head; n--; ) i = i.next;
            return this.__ownerID
                ? ((this.size = r), (this._head = i), (this.__hash = void 0), (this.__altered = !0), this)
                : nC(r, i);
        }),
        (nv.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID
                ? this
                : e
                  ? nC(this.size, this._head, e, this.__hash)
                  : ((this.__ownerID = e), (this.__altered = !1), this);
        }),
        (nv.prototype.__iterate = function (e, t) {
            if (t) return this.reverse().__iterate(e);
            for (var n = 0, r = this._head; r && !1 !== e(r.value, n++, this); ) r = r.next;
            return n;
        }),
        (nv.prototype.__iterator = function (e, t) {
            if (t) return this.reverse().__iterator(e);
            var n = 0,
                r = this._head;
            return new X(function () {
                if (r) {
                    var t = r.value;
                    return (r = r.next), Z(e, n++, t);
                }
                return Q();
            });
        }),
        (nv.isStack = nS);
    var nI = "@@__IMMUTABLE_STACK__@@",
        nT = nv.prototype;

    function nC(e, t, n, r) {
        var i = Object.create(nT);
        return (i.size = e), (i._head = t), (i.__ownerID = n), (i.__hash = r), (i.__altered = !1), i;
    }

    function nN() {
        return c || (c = nC(0));
    }

    function nR(e, t) {
        var n = function (n) {
            e.prototype[n] = t[n];
        };
        return Object.keys(t).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n), e;
    }
    (nT[nI] = !0),
        (nT.withMutations = eJ.withMutations),
        (nT.asMutable = eJ.asMutable),
        (nT.asImmutable = eJ.asImmutable),
        (nT.wasAltered = eJ.wasAltered),
        (f.Iterator = X),
        nR(f, {
            toArray: function () {
                eX(this.size);
                var e = Array(this.size || 0);
                return (
                    this.valueSeq().__iterate(function (t, n) {
                        e[n] = t;
                    }),
                    e
                );
            },
            toIndexedSeq: function () {
                return new tF(this);
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
                return new tV(this, !0);
            },
            toMap: function () {
                return eZ(this.toKeyedSeq());
            },
            toObject: function () {
                eX(this.size);
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
                return new tB(this);
            },
            toSeq: function () {
                return E(this) ? this.toIndexedSeq() : g(this) ? this.toKeyedSeq() : this.toSetSeq();
            },
            toStack: function () {
                return nv(g(this) ? this.valueSeq() : this);
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
                return t7(this, tJ(this, e));
            },
            includes: function (e) {
                return this.some(function (t) {
                    return eS(t, e);
                });
            },
            entries: function () {
                return this.__iterator(W);
            },
            every: function (e, t) {
                eX(this.size);
                var n = !0;
                return (
                    this.__iterate(function (r, i, a) {
                        if (!e.call(t, r, i, a)) return (n = !1), !1;
                    }),
                    n
                );
            },
            filter: function (e, t) {
                return t7(this, tz(this, e, t, !0));
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
                return eX(this.size), this.__iterate(t ? e.bind(t) : e);
            },
            join: function (e) {
                eX(this.size), (e = void 0 !== e ? "" + e : ",");
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
                return this.__iterator(H);
            },
            map: function (e, t) {
                return t7(this, tW(this, e, t));
            },
            reduce: function (e, t, n) {
                var r, i;
                return (
                    eX(this.size),
                    arguments.length < 2 ? (i = !0) : (r = t),
                    this.__iterate(function (t, a, s) {
                        i ? ((i = !1), (r = t)) : (r = e.call(n, r, t, a, s));
                    }),
                    r
                );
            },
            reduceRight: function (e, t, n) {
                var r = this.toKeyedSeq().reverse();
                return r.reduce.apply(r, arguments);
            },
            reverse: function () {
                return t7(this, tK(this, !0));
            },
            slice: function (e, t) {
                return t7(this, tZ(this, e, t, !0));
            },
            some: function (e, t) {
                return !this.every(nL(e), t);
            },
            sort: function (e) {
                return t7(this, t3(this, e));
            },
            values: function () {
                return this.__iterator(Y);
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
                return tq(this, e, t);
            },
            equals: function (e) {
                return eI(this, e);
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
                return t7(this, t1(this, e, t));
            },
            flatten: function (e) {
                return t7(this, t0(this, e, !0));
            },
            fromEntrySeq: function () {
                return new tH(this);
            },
            get: function (e, t) {
                return this.find(
                    function (t, n) {
                        return eS(n, e);
                    },
                    void 0,
                    t,
                );
            },
            getIn: function (e, t) {
                for (var n, r = this, i = ni(e); !(n = i.next()).done; ) {
                    var a = n.value;
                    if ((r = r && r.get ? r.get(a, R) : R) === R) return t;
                }
                return r;
            },
            groupBy: function (e, t) {
                return tX(this, e, t);
            },
            has: function (e) {
                return this.get(e, R) !== R;
            },
            hasIn: function (e) {
                return this.getIn(e, R) !== R;
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
                return this.toSeq().map(nD).toIndexedSeq();
            },
            last: function () {
                return this.toSeq().reverse().first();
            },
            max: function (e) {
                return t6(this, e);
            },
            maxBy: function (e, t) {
                return t6(this, t, e);
            },
            min: function (e) {
                return t6(this, e ? nj(e) : nU);
            },
            minBy: function (e, t) {
                return t6(this, t ? nj(t) : nU, e);
            },
            rest: function () {
                return this.slice(1);
            },
            skip: function (e) {
                return this.slice(Math.max(0, e));
            },
            skipLast: function (e) {
                return t7(this, this.toSeq().reverse().skip(e).reverse());
            },
            skipWhile: function (e, t) {
                return t7(this, t$(this, e, t, !0));
            },
            skipUntil: function (e, t) {
                return this.skipWhile(nL(e), t);
            },
            sortBy: function (e, t) {
                return t7(this, t3(this, t, e));
            },
            take: function (e) {
                return this.slice(0, Math.max(0, e));
            },
            takeLast: function (e) {
                return t7(this, this.toSeq().reverse().take(e).reverse());
            },
            takeWhile: function (e, t) {
                return t7(this, tQ(this, e, t));
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
    var nw = f.prototype;
    (nw[O] = !0),
        (nw[q] = nw.values),
        (nw.__toJS = nw.toArray),
        (nw.__toStringMapper = nM),
        (nw.inspect = nw.toSource =
            function () {
                return this.toString();
            }),
        (nw.chain = nw.flatMap),
        (nw.contains = nw.includes),
        (function () {
            try {
                Object.defineProperty(nw, "length", {
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
        nR(p, {
            flip: function () {
                return t7(this, tY(this));
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
                    return eS(t, e);
                });
            },
            lastKeyOf: function (e) {
                return this.findLastKey(function (t) {
                    return eS(t, e);
                });
            },
            mapEntries: function (e, t) {
                var n = this,
                    r = 0;
                return t7(
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
                return t7(
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
    var nP = p.prototype;

    function nD(e, t) {
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
        return nV(
            e.__iterate(
                n
                    ? t
                        ? function (e, t) {
                              r = (31 * r + nF(ej(e), ej(t))) | 0;
                          }
                        : function (e, t) {
                              r = (r + nF(ej(e), ej(t))) | 0;
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

    function nV(e, t) {
        return (
            (t = ex(t, 0xcc9e2d51)),
            (t = ex((t << 15) | (t >>> -15), 0x1b873593)),
            (t = ((t = ex((t << 13) | (t >>> -13), 5)) + 0xe6546b64) ^ e),
            (t = ex(t ^ (t >>> 16), 0x85ebca6b)),
            (t = eL((t = ex(t ^ (t >>> 13), 0xc2b2ae35)) ^ (t >>> 16)))
        );
    }

    function nF(e, t) {
        return e ^ (t + 0x9e3779b9 + (e << 6) + (e >> 2));
    }
    return (
        (nP[A] = !0),
        (nP[q] = nw.entries),
        (nP.__toJS = nw.toObject),
        (nP.__toStringMapper = function (e, t) {
            return JSON.stringify(t) + ": " + nM(e);
        }),
        nR(_, {
            toKeyedSeq: function () {
                return new tV(this, !1);
            },
            filter: function (e, t) {
                return t7(this, tz(this, e, t, !1));
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
                return t7(this, tK(this, !1));
            },
            slice: function (e, t) {
                return t7(this, tZ(this, e, t, !1));
            },
            splice: function (e, t) {
                var n = arguments.length;
                if (((t = Math.max(0 | t, 0)), 0 === n || (2 === n && !t))) return this;
                e = V(e, e < 0 ? this.count() : this.size);
                var r = this.slice(0, e);
                return t7(this, 1 === n ? r : r.concat(j(arguments, 2), this.slice(e + t)));
            },
            findLastIndex: function (e, t) {
                var n = this.toKeyedSeq().findLastKey(e, t);
                return void 0 === n ? -1 : n;
            },
            first: function () {
                return this.get(0);
            },
            flatten: function (e) {
                return t7(this, t0(this, e, !1));
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
                return t7(this, t2(this, e));
            },
            interleave: function () {
                var e = [this].concat(j(arguments)),
                    t = t5(this.toSeq(), ea.of, e),
                    n = t.flatten(!0);
                return t.size && (n.size = t.size * e.length), t7(this, n);
            },
            last: function () {
                return this.get(-1);
            },
            skipWhile: function (e, t) {
                return t7(this, t$(this, e, t, !1));
            },
            zip: function () {
                var e = [this].concat(j(arguments));
                return t7(this, t5(this, nk, e));
            },
            zipWith: function (e) {
                var t = j(arguments);
                return (t[0] = this), t7(this, t5(this, e, t));
            },
        }),
        (_.prototype[v] = !0),
        (_.prototype[S] = !0),
        nR(h, {
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
        (h.prototype.has = nw.includes),
        nR(ei, p.prototype),
        nR(ea, _.prototype),
        nR(es, h.prototype),
        nR(ew, p.prototype),
        nR(eP, _.prototype),
        nR(eD, h.prototype),
        {
            Iterable: f,
            Seq: er,
            Collection: eR,
            Map: eZ,
            OrderedMap: tj,
            List: tb,
            Stack: nv,
            Set: nd,
            OrderedSet: nE,
            Record: na,
            Range: eN,
            Repeat: eT,
            is: eS,
            fromJS: ey,
        }
    );
});
