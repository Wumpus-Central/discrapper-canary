var n =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
              return typeof e;
          }
        : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
          };
!(function (e, n) {
    'function' == typeof define && define.amd ? define('snowballFactory', ['exports'], n) : n(t);
})(0, function (e) {
    function t(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ((void 0 === t ? 'undefined' : n(t)) === 'object' || 'function' == typeof t) ? t : e;
    }
    function r(e, t) {
        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + (void 0 === t ? 'undefined' : n(t)));
        ((e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
    }
    function i(e, t) {
        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }), (e.newStemmer = k), (e.algorithms = j));
    var a = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r));
                }
            }
            return function (t, n, r) {
                return (n && e(t.prototype, n), r && e(t, r), t);
            };
        })(),
        o = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var a = Object.getPrototypeOf(t);
                if (null === a) return;
                return e(a, n, r);
            }
            if ('value' in i) return i.value;
            var o = i.get;
            if (void 0 !== o) return o.call(r);
        },
        s = (function () {
            function e() {
                i(this, e);
            }
            return (
                a(e, [
                    {
                        key: 'length$esjava$0',
                        value: function () {
                            return this.b.length;
                        }
                    },
                    {
                        key: 'replace$esjava$3',
                        value: function (e, t, n) {
                            if (0 === e && t === this.b.length) this.b = n;
                            else {
                                var r = this.b.substring(0, e),
                                    i = this.b.substring(t);
                                this.b = r + n + i;
                            }
                        }
                    },
                    {
                        key: 'substring$esjava$2',
                        value: function (e, t) {
                            return this.b.substring(e, t);
                        }
                    },
                    {
                        key: 'charAt$esjava$1',
                        value: function (e) {
                            return this.b.charCodeAt(e);
                        }
                    },
                    {
                        key: 'subSequence$esjava$2',
                        value: function (e, t) {
                            throw Error('NotImpl: CharSequence::subSequence');
                        }
                    },
                    {
                        key: 'toString$esjava$0',
                        value: function () {
                            return this.b;
                        }
                    },
                    {
                        key: 'length',
                        value: function () {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return 0 === r.length ? this.length$esjava$0.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'length', this)).call.apply(t, [this].concat(r));
                        }
                    },
                    {
                        key: 'replace',
                        value: function () {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return 3 === r.length ? this.replace$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'replace', this)).call.apply(t, [this].concat(r));
                        }
                    },
                    {
                        key: 'substring',
                        value: function () {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return 2 === r.length ? this.substring$esjava$2.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'substring', this)).call.apply(t, [this].concat(r));
                        }
                    },
                    {
                        key: 'charAt',
                        value: function () {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return 1 === r.length ? this.charAt$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'charAt', this)).call.apply(t, [this].concat(r));
                        }
                    },
                    {
                        key: 'subSequence',
                        value: function () {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return 2 === r.length ? this.subSequence$esjava$2.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'subSequence', this)).call.apply(t, [this].concat(r));
                        }
                    },
                    {
                        key: 'toString',
                        value: function () {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return 0 === r.length ? this.toString$esjava$0.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'toString', this)).call.apply(t, [this].concat(r));
                        }
                    },
                    {
                        key: 'b',
                        get: function () {
                            return Object.prototype.hasOwnProperty.call(this, '_$esjava$b') ? this._$esjava$b : (this._$esjava$b = '');
                        },
                        set: function (e) {
                            this._$esjava$b = e;
                        }
                    }
                ]),
                e
            );
        })(),
        l = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (r(n, e), n);
        })(s),
        c = (function () {
            function e(t, n, r, a, o) {
                (i(this, e), (this.s = e.toCharArray$esjava$1(t)), (this.substring_i = n), (this.result = r), (this.method = a ? o[a] : null), (this.methodobject = o));
            }
            return (
                a(e, null, [
                    {
                        key: 'toCharArray$esjava$1',
                        value: function (e) {
                            for (var t = e.length, n = Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
                            return n;
                        }
                    }
                ]),
                a(e, [
                    {
                        key: 's',
                        get: function () {
                            return Object.prototype.hasOwnProperty.call(this, '_$esjava$s') ? this._$esjava$s : (this._$esjava$s = null);
                        },
                        set: function (e) {
                            this._$esjava$s = e;
                        }
                    },
                    {
                        key: 'substring_i',
                        get: function () {
                            return Object.prototype.hasOwnProperty.call(this, '_$esjava$substring_i') ? this._$esjava$substring_i : (this._$esjava$substring_i = 0);
                        },
                        set: function (e) {
                            this._$esjava$substring_i = e;
                        }
                    },
                    {
                        key: 'result',
                        get: function () {
                            return Object.prototype.hasOwnProperty.call(this, '_$esjava$result') ? this._$esjava$result : (this._$esjava$result = 0);
                        },
                        set: function (e) {
                            this._$esjava$result = e;
                        }
                    },
                    {
                        key: 'method',
                        get: function () {
                            return Object.prototype.hasOwnProperty.call(this, '_$esjava$method') ? this._$esjava$method : (this._$esjava$method = null);
                        },
                        set: function (e) {
                            this._$esjava$method = e;
                        }
                    },
                    {
                        key: 'methodobject',
                        get: function () {
                            return Object.prototype.hasOwnProperty.call(this, '_$esjava$methodobject') ? this._$esjava$methodobject : (this._$esjava$methodobject = null);
                        },
                        set: function (e) {
                            this._$esjava$methodobject = e;
                        }
                    }
                ]),
                e
            );
        })(),
        u = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(n, [
                    {
                        key: 'stem$esjava$0',
                        value: function () {
                            throw 'NotImpl < stem$esjava$0 >';
                        }
                    },
                    {
                        key: 'stem',
                        value: function () {
                            for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                        }
                    }
                ]),
                n
            );
        })(
            (function () {
                function e() {
                    (i(this, e), (this.current = new s()), this.setCurrent$esjava$1(''));
                }
                return (
                    a(e, [
                        {
                            key: 'setCurrent$esjava$1',
                            value: function (e) {
                                (this.current.replace(0, this.current.length(), e), (this.cursor = 0), (this.limit = this.current.length()), (this.limit_backward = 0), (this.bra = this.cursor), (this.ket = this.limit));
                            }
                        },
                        {
                            key: 'getCurrent$esjava$0',
                            value: function () {
                                var e = this.current.toString();
                                return ((this.current = new s()), e);
                            }
                        },
                        {
                            key: 'in_grouping$esjava$3',
                            value: function (e, t, n) {
                                if (this.cursor >= this.limit) return !1;
                                var r = this.current.charAt(this.cursor);
                                return !(r > n) && !(r < t) && (e[(r -= t) >> 3] & (1 << (7 & r))) != 0 && (this.cursor++, !0);
                            }
                        },
                        {
                            key: 'in_grouping_b$esjava$3',
                            value: function (e, t, n) {
                                if (this.cursor <= this.limit_backward) return !1;
                                var r = this.current.charAt(this.cursor - 1);
                                return !(r > n) && !(r < t) && (e[(r -= t) >> 3] & (1 << (7 & r))) != 0 && (this.cursor--, !0);
                            }
                        },
                        {
                            key: 'out_grouping$esjava$3',
                            value: function (e, t, n) {
                                if (this.cursor >= this.limit) return !1;
                                var r = this.current.charAt(this.cursor);
                                return (r > n || r < t || (e[(r -= t) >> 3] & (1 << (7 & r))) == 0) && (this.cursor++, !0);
                            }
                        },
                        {
                            key: 'out_grouping_b$esjava$3',
                            value: function (e, t, n) {
                                if (this.cursor <= this.limit_backward) return !1;
                                var r = this.current.charAt(this.cursor - 1);
                                return (r > n || r < t || (e[(r -= t) >> 3] & (1 << (7 & r))) == 0) && (this.cursor--, !0);
                            }
                        },
                        {
                            key: 'eq_s$esjava$1',
                            value: function (e) {
                                if (this.limit - this.cursor < e.length) return !1;
                                var t = void 0;
                                for (t = 0; t !== e.length; t++) if (this.current.charAt(this.cursor + t) !== e.charCodeAt(t)) return !1;
                                return ((this.cursor += e.length), !0);
                            }
                        },
                        {
                            key: 'eq_s_b$esjava$1',
                            value: function (e) {
                                if (this.cursor - this.limit_backward < e.length) return !1;
                                var t = void 0;
                                for (t = 0; t !== e.length; t++) if (this.current.charAt(this.cursor - e.length + t) !== e.charCodeAt(t)) return !1;
                                return ((this.cursor -= e.length), !0);
                            }
                        },
                        {
                            key: 'find_among$esjava$1',
                            value: function (e) {
                                for (var t = 0, n = e.length, r = this.cursor, i = this.limit, a = 0, o = 0, s = !1; ; ) {
                                    var l = t + ((n - t) >> 1),
                                        c = 0,
                                        u = a < o ? a : o,
                                        d = e[l],
                                        f = void 0;
                                    for (f = u; f < d.s.length; f++) {
                                        if (r + u === i) {
                                            c = -1;
                                            break;
                                        }
                                        if (0 != (c = this.current.charAt(r + u) - d.s[f])) break;
                                        u++;
                                    }
                                    if ((c < 0 ? ((n = l), (o = u)) : ((t = l), (a = u)), n - t <= 1)) {
                                        if (t > 0 || n === t || s) break;
                                        s = !0;
                                    }
                                }
                                for (;;) {
                                    var d = e[t];
                                    if (a >= d.s.length) {
                                        if (((this.cursor = r + d.s.length), null === d.method)) return d.result;
                                        var _ = void 0;
                                        if (((_ = d.method.call(d.methodobject)), (this.cursor = r + d.s.length), _)) return d.result;
                                    }
                                    if ((t = d.substring_i) < 0) return 0;
                                }
                            }
                        },
                        {
                            key: 'find_among_b$esjava$1',
                            value: function (e) {
                                for (var t = 0, n = e.length, r = this.cursor, i = this.limit_backward, a = 0, o = 0, s = !1; ; ) {
                                    var l = t + ((n - t) >> 1),
                                        c = 0,
                                        u = a < o ? a : o,
                                        d = e[l],
                                        f = void 0;
                                    for (f = d.s.length - 1 - u; f >= 0; f--) {
                                        if (r - u === i) {
                                            c = -1;
                                            break;
                                        }
                                        if (0 != (c = this.current.charAt(r - 1 - u) - d.s[f])) break;
                                        u++;
                                    }
                                    if ((c < 0 ? ((n = l), (o = u)) : ((t = l), (a = u)), n - t <= 1)) {
                                        if (t > 0 || n === t || s) break;
                                        s = !0;
                                    }
                                }
                                for (;;) {
                                    var d = e[t];
                                    if (a >= d.s.length) {
                                        if (((this.cursor = r - d.s.length), null === d.method)) return d.result;
                                        var _ = void 0;
                                        if (((_ = d.method.call(d.methodobject)), (this.cursor = r - d.s.length), _)) return d.result;
                                    }
                                    if ((t = d.substring_i) < 0) return 0;
                                }
                            }
                        },
                        {
                            key: 'replace_s$esjava$3',
                            value: function (e, t, n) {
                                var r = n.length - (t - e);
                                return (this.current.replace(e, t, n), (this.limit += r), this.cursor >= t ? (this.cursor += r) : this.cursor > e && (this.cursor = e), r);
                            }
                        },
                        {
                            key: 'slice_check$esjava$0',
                            value: function () {
                                if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit || this.limit > this.current.length()) throw Error('Snowball: faulty slice operation');
                            }
                        },
                        {
                            key: 'slice_from$esjava$1',
                            value: function (e) {
                                (this.slice_check$esjava$0(), this.replace_s$esjava$3(this.bra, this.ket, e));
                            }
                        },
                        {
                            key: 'slice_del$esjava$0',
                            value: function () {
                                this.slice_from$esjava$1('');
                            }
                        },
                        {
                            key: 'insert$esjava$3',
                            value: function (e, t, n) {
                                var r = this.replace_s$esjava$3(e, t, n);
                                (e <= this.bra && (this.bra += r), e <= this.ket && (this.ket += r));
                            }
                        },
                        {
                            key: 'slice_to$esjava$1',
                            value: function (e) {
                                return (this.slice_check$esjava$0(), e.replace(0, e.length(), this.current.substring(this.bra, this.ket)), e);
                            }
                        },
                        {
                            key: 'setCurrent',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.setCurrent$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'setCurrent', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'getCurrent',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.getCurrent$esjava$0.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'getCurrent', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'in_grouping',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 3 === r.length ? this.in_grouping$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'in_grouping', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'in_grouping_b',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 3 === r.length ? this.in_grouping_b$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'in_grouping_b', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'out_grouping',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 3 === r.length ? this.out_grouping$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'out_grouping', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'out_grouping_b',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 3 === r.length ? this.out_grouping_b$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'out_grouping_b', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'eq_s',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.eq_s$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'eq_s', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'eq_s_b',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.eq_s_b$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'eq_s_b', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'find_among',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.find_among$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'find_among', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'find_among_b',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.find_among_b$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'find_among_b', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'replace_s',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 3 === r.length ? this.replace_s$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'replace_s', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'slice_check',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.slice_check$esjava$0.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'slice_check', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'slice_from',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.slice_from$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'slice_from', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'slice_del',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.slice_del$esjava$0.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'slice_del', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'insert',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 3 === r.length ? this.insert$esjava$3.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'insert', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'slice_to',
                            value: function () {
                                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return 1 === r.length ? this.slice_to$esjava$1.apply(this, r) : (t = o(Object.getPrototypeOf(e.prototype), 'slice_to', this)).call.apply(t, [this].concat(r));
                            }
                        },
                        {
                            key: 'current',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$current') ? this._$esjava$current : (this._$esjava$current = null);
                            },
                            set: function (e) {
                                this._$esjava$current = e;
                            }
                        },
                        {
                            key: 'cursor',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$cursor') ? this._$esjava$cursor : (this._$esjava$cursor = 0);
                            },
                            set: function (e) {
                                this._$esjava$cursor = e;
                            }
                        },
                        {
                            key: 'limit',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$limit') ? this._$esjava$limit : (this._$esjava$limit = 0);
                            },
                            set: function (e) {
                                this._$esjava$limit = e;
                            }
                        },
                        {
                            key: 'limit_backward',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$limit_backward') ? this._$esjava$limit_backward : (this._$esjava$limit_backward = 0);
                            },
                            set: function (e) {
                                this._$esjava$limit_backward = e;
                            }
                        },
                        {
                            key: 'bra',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$bra') ? this._$esjava$bra : (this._$esjava$bra = 0);
                            },
                            set: function (e) {
                                this._$esjava$bra = e;
                            }
                        },
                        {
                            key: 'ket',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$ket') ? this._$esjava$ket : (this._$esjava$ket = 0);
                            },
                            set: function (e) {
                                this._$esjava$ket = e;
                            }
                        }
                    ]),
                    e
                );
            })()
        ),
        d = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_Normalize_pre$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                for (t = this.current.length(); t > 0; t--)
                                    l: do {
                                        r = this.cursor;
                                        c: do {
                                            if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                            switch (((this.ket = this.cursor), e)) {
                                                case 0:
                                                    break c;
                                                case 1:
                                                case 2:
                                                case 3:
                                                case 4:
                                                case 15:
                                                    this.slice_del$esjava$0();
                                                    break;
                                                case 5:
                                                    this.slice_from$esjava$1('0');
                                                    break;
                                                case 6:
                                                    this.slice_from$esjava$1('1');
                                                    break;
                                                case 7:
                                                    this.slice_from$esjava$1('2');
                                                    break;
                                                case 8:
                                                    this.slice_from$esjava$1('3');
                                                    break;
                                                case 9:
                                                    this.slice_from$esjava$1('4');
                                                    break;
                                                case 10:
                                                    this.slice_from$esjava$1('5');
                                                    break;
                                                case 11:
                                                    this.slice_from$esjava$1('6');
                                                    break;
                                                case 12:
                                                    this.slice_from$esjava$1('7');
                                                    break;
                                                case 13:
                                                    this.slice_from$esjava$1('8');
                                                    break;
                                                case 14:
                                                    this.slice_from$esjava$1('9');
                                                    break;
                                                case 16:
                                                    this.slice_from$esjava$1('ء');
                                                    break;
                                                case 17:
                                                    this.slice_from$esjava$1('أ');
                                                    break;
                                                case 18:
                                                    this.slice_from$esjava$1('إ');
                                                    break;
                                                case 19:
                                                    this.slice_from$esjava$1('ئ');
                                                    break;
                                                case 20:
                                                    this.slice_from$esjava$1('آ');
                                                    break;
                                                case 21:
                                                    this.slice_from$esjava$1('ؤ');
                                                    break;
                                                case 22:
                                                    this.slice_from$esjava$1('ا');
                                                    break;
                                                case 23:
                                                    this.slice_from$esjava$1('ب');
                                                    break;
                                                case 24:
                                                    this.slice_from$esjava$1('ة');
                                                    break;
                                                case 25:
                                                    this.slice_from$esjava$1('ت');
                                                    break;
                                                case 26:
                                                    this.slice_from$esjava$1('ث');
                                                    break;
                                                case 27:
                                                    this.slice_from$esjava$1('ج');
                                                    break;
                                                case 28:
                                                    this.slice_from$esjava$1('ح');
                                                    break;
                                                case 29:
                                                    this.slice_from$esjava$1('خ');
                                                    break;
                                                case 30:
                                                    this.slice_from$esjava$1('د');
                                                    break;
                                                case 31:
                                                    this.slice_from$esjava$1('ذ');
                                                    break;
                                                case 32:
                                                    this.slice_from$esjava$1('ر');
                                                    break;
                                                case 33:
                                                    this.slice_from$esjava$1('ز');
                                                    break;
                                                case 34:
                                                    this.slice_from$esjava$1('س');
                                                    break;
                                                case 35:
                                                    this.slice_from$esjava$1('ش');
                                                    break;
                                                case 36:
                                                    this.slice_from$esjava$1('ص');
                                                    break;
                                                case 37:
                                                    this.slice_from$esjava$1('ض');
                                                    break;
                                                case 38:
                                                    this.slice_from$esjava$1('ط');
                                                    break;
                                                case 39:
                                                    this.slice_from$esjava$1('ظ');
                                                    break;
                                                case 40:
                                                    this.slice_from$esjava$1('ع');
                                                    break;
                                                case 41:
                                                    this.slice_from$esjava$1('غ');
                                                    break;
                                                case 42:
                                                    this.slice_from$esjava$1('ف');
                                                    break;
                                                case 43:
                                                    this.slice_from$esjava$1('ق');
                                                    break;
                                                case 44:
                                                    this.slice_from$esjava$1('ك');
                                                    break;
                                                case 45:
                                                    this.slice_from$esjava$1('ل');
                                                    break;
                                                case 46:
                                                    this.slice_from$esjava$1('م');
                                                    break;
                                                case 47:
                                                    this.slice_from$esjava$1('ن');
                                                    break;
                                                case 48:
                                                    this.slice_from$esjava$1('ه');
                                                    break;
                                                case 49:
                                                    this.slice_from$esjava$1('و');
                                                    break;
                                                case 50:
                                                    this.slice_from$esjava$1('ى');
                                                    break;
                                                case 51:
                                                    this.slice_from$esjava$1('ي');
                                                    break;
                                                case 52:
                                                    this.slice_from$esjava$1('لا');
                                                    break;
                                                case 53:
                                                    this.slice_from$esjava$1('لأ');
                                                    break;
                                                case 54:
                                                    this.slice_from$esjava$1('لإ');
                                                    break;
                                                case 55:
                                                    this.slice_from$esjava$1('لآ');
                                            }
                                            break l;
                                        } while (!1);
                                        if (((this.cursor = r), this.cursor >= this.limit)) return !1;
                                        this.cursor++;
                                    } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_Normalize_post$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                t = this.cursor;
                                l: do {
                                    if (((this.limit_backward = this.cursor), (this.cursor = this.limit), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) break;
                                    switch (((this.bra = this.cursor), e)) {
                                        case 0:
                                            break l;
                                        case 1:
                                        case 2:
                                        case 3:
                                            this.slice_from$esjava$1('ء');
                                    }
                                    this.cursor = this.limit_backward;
                                } while (!1);
                                ((this.cursor = t), (r = this.cursor));
                                c: do
                                    for (i = this.I_word_len; i > 0; i--)
                                        u: do {
                                            a = this.cursor;
                                            d: do {
                                                if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_2)))) break;
                                                switch (((this.ket = this.cursor), e)) {
                                                    case 0:
                                                        break d;
                                                    case 1:
                                                        this.slice_from$esjava$1('ا');
                                                        break;
                                                    case 2:
                                                        this.slice_from$esjava$1('و');
                                                        break;
                                                    case 3:
                                                        this.slice_from$esjava$1('ي');
                                                }
                                                break u;
                                            } while (!1);
                                            if (((this.cursor = a), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        } while (!1);
                                while (!1);
                                return ((this.cursor = r), !0);
                            }
                        },
                        {
                            key: 'r_Checks1$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_3)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 4)) return !1;
                                        ((this.B_is_noun = !0), (this.B_is_verb = !1), (this.B_is_defined = !0));
                                        break;
                                    case 2:
                                        if (!(this.I_word_len > 3)) return !1;
                                        ((this.B_is_noun = !0), (this.B_is_verb = !1), (this.B_is_defined = !0));
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Prefix_Step1$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_4)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 3:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_from$esjava$1('أ');
                                        break;
                                    case 2:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_from$esjava$1('آ');
                                        break;
                                    case 4:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_from$esjava$1('ا');
                                        break;
                                    case 5:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_from$esjava$1('إ');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Prefix_Step2$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                ((this.I_word_len = this.current.length()), (t = this.cursor));
                                do {
                                    if (!this.eq_s$esjava$1('فا')) break;
                                    return !1;
                                } while (!1);
                                ((this.cursor = t), (r = this.cursor));
                                do {
                                    if (!this.eq_s$esjava$1('وا')) break;
                                    return !1;
                                } while (!1);
                                if (((this.cursor = r), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_5)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 2:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Prefix_Step3a_Noun$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_6)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 5)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!(this.I_word_len > 4)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Prefix_Step3b_Noun$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_word_len = this.current.length()), (t = this.cursor));
                                do {
                                    if (!this.eq_s$esjava$1('با')) break;
                                    return !1;
                                } while (!1);
                                if (((this.cursor = t), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_7)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_from$esjava$1('ب');
                                        break;
                                    case 3:
                                        if (!(this.I_word_len > 3)) return !1;
                                        this.slice_from$esjava$1('ك');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Prefix_Step3_Verb$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_8)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 4)) return !1;
                                        this.slice_from$esjava$1('ي');
                                        break;
                                    case 2:
                                        if (!(this.I_word_len > 4)) return !1;
                                        this.slice_from$esjava$1('ت');
                                        break;
                                    case 3:
                                        if (!(this.I_word_len > 4)) return !1;
                                        this.slice_from$esjava$1('ن');
                                        break;
                                    case 4:
                                        if (!(this.I_word_len > 4)) return !1;
                                        this.slice_from$esjava$1('أ');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Prefix_Step4_Verb$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_9)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 4)) return !1;
                                        ((this.B_is_verb = !0), (this.B_is_noun = !1), this.slice_from$esjava$1('است'));
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step1a$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_10)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 4)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!(this.I_word_len >= 5)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        if (!(this.I_word_len >= 6)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step1b$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_11)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 5)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step2a$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_12)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len > 4)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step2b$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_13)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 5)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step2c1$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_14)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 4)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step2c2$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_15)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 4)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Noun_Step3$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_16)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 3)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Verb_Step1$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_17)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 4)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!(this.I_word_len >= 5)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        if (!(this.I_word_len >= 6)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Verb_Step2a$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_18)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 2:
                                        if (!(this.I_word_len >= 4)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        if (!(this.I_word_len >= 5)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 4:
                                        if (!(this.I_word_len > 5)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 5:
                                        if (!(this.I_word_len >= 6)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Verb_Step2b$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_19)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 5)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_Verb_Step2c$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_20)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!(this.I_word_len >= 4)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!(this.I_word_len >= 6)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Suffix_All_alef_maqsura$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.I_word_len = this.current.length()), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_21)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('ي');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0,
                                    p = void 0,
                                    h = void 0,
                                    m = void 0;
                                ((this.B_is_noun = !0), (this.B_is_verb = !0), (this.B_is_defined = !1), (e = this.cursor));
                                do if (!this.r_Checks1$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_Normalize_pre$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                u: do
                                    d: do {
                                        r = this.limit - this.cursor;
                                        f: do {
                                            if (!this.B_is_verb) break;
                                            _: do {
                                                i = this.limit - this.cursor;
                                                p: do {
                                                    var g = 1;
                                                    h: for (;;) {
                                                        a = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_Suffix_Verb_Step1$esjava$0()) break;
                                                            g--;
                                                            continue h;
                                                        } while (!1);
                                                        this.cursor = this.limit - a;
                                                        break;
                                                    }
                                                    if (g > 0) break;
                                                    m: do {
                                                        o = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_Suffix_Verb_Step2a$esjava$0()) break;
                                                            break m;
                                                        } while (!1);
                                                        this.cursor = this.limit - o;
                                                        do {
                                                            if (!this.r_Suffix_Verb_Step2c$esjava$0()) break;
                                                            break m;
                                                        } while (!1);
                                                        if (((this.cursor = this.limit - o), this.cursor <= this.limit_backward)) break p;
                                                        this.cursor--;
                                                    } while (!1);
                                                    break _;
                                                } while (!1);
                                                this.cursor = this.limit - i;
                                                do {
                                                    if (!this.r_Suffix_Verb_Step2b$esjava$0()) break;
                                                    break _;
                                                } while (!1);
                                                if (((this.cursor = this.limit - i), !this.r_Suffix_Verb_Step2a$esjava$0())) break f;
                                            } while (!1);
                                            break d;
                                        } while (!1);
                                        this.cursor = this.limit - r;
                                        do {
                                            if (!this.B_is_noun) break;
                                            s = this.limit - this.cursor;
                                            g: do
                                                E: do {
                                                    l = this.limit - this.cursor;
                                                    do {
                                                        if (!this.r_Suffix_Noun_Step2c2$esjava$0()) break;
                                                        break E;
                                                    } while (!1);
                                                    this.cursor = this.limit - l;
                                                    b: do {
                                                        do {
                                                            if (!this.B_is_defined) break;
                                                            break b;
                                                        } while (!1);
                                                        if (!this.r_Suffix_Noun_Step1a$esjava$0()) break;
                                                        y: do {
                                                            c = this.limit - this.cursor;
                                                            do {
                                                                if (!this.r_Suffix_Noun_Step2a$esjava$0()) break;
                                                                break y;
                                                            } while (!1);
                                                            this.cursor = this.limit - c;
                                                            do {
                                                                if (!this.r_Suffix_Noun_Step2b$esjava$0()) break;
                                                                break y;
                                                            } while (!1);
                                                            this.cursor = this.limit - c;
                                                            do {
                                                                if (!this.r_Suffix_Noun_Step2c1$esjava$0()) break;
                                                                break y;
                                                            } while (!1);
                                                            if (((this.cursor = this.limit - c), this.cursor <= this.limit_backward)) break b;
                                                            this.cursor--;
                                                        } while (!1);
                                                        break E;
                                                    } while (!1);
                                                    this.cursor = this.limit - l;
                                                    O: do {
                                                        if (!this.r_Suffix_Noun_Step1b$esjava$0()) break;
                                                        v: do {
                                                            u = this.limit - this.cursor;
                                                            do {
                                                                if (!this.r_Suffix_Noun_Step2a$esjava$0()) break;
                                                                break v;
                                                            } while (!1);
                                                            this.cursor = this.limit - u;
                                                            do {
                                                                if (!this.r_Suffix_Noun_Step2b$esjava$0()) break;
                                                                break v;
                                                            } while (!1);
                                                            if (((this.cursor = this.limit - u), !this.r_Suffix_Noun_Step2c1$esjava$0())) break O;
                                                        } while (!1);
                                                        break E;
                                                    } while (!1);
                                                    this.cursor = this.limit - l;
                                                    I: do {
                                                        do {
                                                            if (!this.B_is_defined) break;
                                                            break I;
                                                        } while (!1);
                                                        if (!this.r_Suffix_Noun_Step2a$esjava$0()) break;
                                                        break E;
                                                    } while (!1);
                                                    if (((this.cursor = this.limit - l), !this.r_Suffix_Noun_Step2b$esjava$0())) {
                                                        this.cursor = this.limit - s;
                                                        break g;
                                                    }
                                                } while (!1);
                                            while (!1);
                                            if (!this.r_Suffix_Noun_Step3$esjava$0()) break;
                                            break d;
                                        } while (!1);
                                        if (((this.cursor = this.limit - r), !this.r_Suffix_All_alef_maqsura$esjava$0())) break u;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - n), (this.cursor = this.limit_backward), (d = this.cursor));
                                T: do {
                                    f = this.cursor;
                                    do
                                        if (!this.r_Prefix_Step1$esjava$0()) {
                                            this.cursor = f;
                                            break;
                                        }
                                    while (!1);
                                    _ = this.cursor;
                                    do
                                        if (!this.r_Prefix_Step2$esjava$0()) {
                                            this.cursor = _;
                                            break;
                                        }
                                    while (!1);
                                    S: do {
                                        p = this.cursor;
                                        do {
                                            if (!this.r_Prefix_Step3a_Noun$esjava$0()) break;
                                            break S;
                                        } while (!1);
                                        this.cursor = p;
                                        do {
                                            if (!this.B_is_noun || !this.r_Prefix_Step3b_Noun$esjava$0()) break;
                                            break S;
                                        } while (!1);
                                        if (((this.cursor = p), !this.B_is_verb)) break T;
                                        h = this.cursor;
                                        do
                                            if (!this.r_Prefix_Step3_Verb$esjava$0()) {
                                                this.cursor = h;
                                                break;
                                            }
                                        while (!1);
                                        if (!this.r_Prefix_Step4_Verb$esjava$0()) break T;
                                    } while (!1);
                                } while (!1);
                                ((this.cursor = d), (m = this.cursor));
                                do if (!this.r_Normalize_post$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = m), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'B_is_defined',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_is_defined') ? this._$esjava$B_is_defined : (this._$esjava$B_is_defined = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_is_defined = e;
                            }
                        },
                        {
                            key: 'B_is_verb',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_is_verb') ? this._$esjava$B_is_verb : (this._$esjava$B_is_verb = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_is_verb = e;
                            }
                        },
                        {
                            key: 'B_is_noun',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_is_noun') ? this._$esjava$B_is_noun : (this._$esjava$B_is_noun = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_is_noun = e;
                            }
                        },
                        {
                            key: 'I_word_len',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_word_len') ? this._$esjava$I_word_len : (this._$esjava$I_word_len = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_word_len = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('!', -1, 3), new c('"', -1, 3), new c('%', -1, 3), new c('*', -1, 3), new c(',', -1, 3), new c('.', -1, 3), new c('/', -1, 3), new c(':', -1, 3), new c(';', -1, 3), new c('?', -1, 3), new c('\\', -1, 3), new c('\u060C', -1, 4), new c('\u061B', -1, 4), new c('\u061F', -1, 4), new c('ـ', -1, 2), new c('ً', -1, 1), new c('ٌ', -1, 1), new c('ٍ', -1, 1), new c('َ', -1, 1), new c('ُ', -1, 1), new c('ِ', -1, 1), new c('ّ', -1, 1), new c('ْ', -1, 1), new c('٠', -1, 5), new c('١', -1, 6), new c('٢', -1, 7), new c('٣', -1, 8), new c('٤', -1, 9), new c('٥', -1, 10), new c('٦', -1, 11), new c('٧', -1, 12), new c('٨', -1, 13), new c('٩', -1, 14), new c('\u066A', -1, 15), new c('\u066B', -1, 15), new c('\u066C', -1, 15), new c('ﺀ', -1, 16), new c('ﺁ', -1, 20), new c('ﺂ', -1, 20), new c('ﺃ', -1, 17), new c('ﺄ', -1, 17), new c('ﺅ', -1, 21), new c('ﺆ', -1, 21), new c('ﺇ', -1, 18), new c('ﺈ', -1, 18), new c('ﺉ', -1, 19), new c('ﺊ', -1, 19), new c('ﺋ', -1, 19), new c('ﺌ', -1, 19), new c('ﺍ', -1, 22), new c('ﺎ', -1, 22), new c('ﺏ', -1, 23), new c('ﺐ', -1, 23), new c('ﺑ', -1, 23), new c('ﺒ', -1, 23), new c('ﺓ', -1, 24), new c('ﺔ', -1, 24), new c('ﺕ', -1, 25), new c('ﺖ', -1, 25), new c('ﺗ', -1, 25), new c('ﺘ', -1, 25), new c('ﺙ', -1, 26), new c('ﺚ', -1, 26), new c('ﺛ', -1, 26), new c('ﺜ', -1, 26), new c('ﺝ', -1, 27), new c('ﺞ', -1, 27), new c('ﺟ', -1, 27), new c('ﺠ', -1, 27), new c('ﺡ', -1, 28), new c('ﺢ', -1, 28), new c('ﺣ', -1, 28), new c('ﺤ', -1, 28), new c('ﺥ', -1, 29), new c('ﺦ', -1, 29), new c('ﺧ', -1, 29), new c('ﺨ', -1, 29), new c('ﺩ', -1, 30), new c('ﺪ', -1, 30), new c('ﺫ', -1, 31), new c('ﺬ', -1, 31), new c('ﺭ', -1, 32), new c('ﺮ', -1, 32), new c('ﺯ', -1, 33), new c('ﺰ', -1, 33), new c('ﺱ', -1, 34), new c('ﺲ', -1, 34), new c('ﺳ', -1, 34), new c('ﺴ', -1, 34), new c('ﺵ', -1, 35), new c('ﺶ', -1, 35), new c('ﺷ', -1, 35), new c('ﺸ', -1, 35), new c('ﺹ', -1, 36), new c('ﺺ', -1, 36), new c('ﺻ', -1, 36), new c('ﺼ', -1, 36), new c('ﺽ', -1, 37), new c('ﺾ', -1, 37), new c('ﺿ', -1, 37), new c('ﻀ', -1, 37), new c('ﻁ', -1, 38), new c('ﻂ', -1, 38), new c('ﻃ', -1, 38), new c('ﻄ', -1, 38), new c('ﻅ', -1, 39), new c('ﻆ', -1, 39), new c('ﻇ', -1, 39), new c('ﻈ', -1, 39), new c('ﻉ', -1, 40), new c('ﻊ', -1, 40), new c('ﻋ', -1, 40), new c('ﻌ', -1, 40), new c('ﻍ', -1, 41), new c('ﻎ', -1, 41), new c('ﻏ', -1, 41), new c('ﻐ', -1, 41), new c('ﻑ', -1, 42), new c('ﻒ', -1, 42), new c('ﻓ', -1, 42), new c('ﻔ', -1, 42), new c('ﻕ', -1, 43), new c('ﻖ', -1, 43), new c('ﻗ', -1, 43), new c('ﻘ', -1, 43), new c('ﻙ', -1, 44), new c('ﻚ', -1, 44), new c('ﻛ', -1, 44), new c('ﻜ', -1, 44), new c('ﻝ', -1, 45), new c('ﻞ', -1, 45), new c('ﻟ', -1, 45), new c('ﻠ', -1, 45), new c('ﻡ', -1, 46), new c('ﻢ', -1, 46), new c('ﻣ', -1, 46), new c('ﻤ', -1, 46), new c('ﻥ', -1, 47), new c('ﻦ', -1, 47), new c('ﻧ', -1, 47), new c('ﻨ', -1, 47), new c('ﻩ', -1, 48), new c('ﻪ', -1, 48), new c('ﻫ', -1, 48), new c('ﻬ', -1, 48), new c('ﻭ', -1, 49), new c('ﻮ', -1, 49), new c('ﻯ', -1, 50), new c('ﻰ', -1, 50), new c('ﻱ', -1, 51), new c('ﻲ', -1, 51), new c('ﻳ', -1, 51), new c('ﻴ', -1, 51), new c('ﻵ', -1, 55), new c('ﻶ', -1, 55), new c('ﻷ', -1, 53), new c('ﻸ', -1, 53), new c('ﻹ', -1, 54), new c('ﻺ', -1, 54), new c('ﻻ', -1, 52), new c('ﻼ', -1, 52)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('آ', -1, 1), new c('أ', -1, 1), new c('ؤ', -1, 2), new c('إ', -1, 1), new c('ئ', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('آ', -1, 1), new c('أ', -1, 1), new c('ؤ', -1, 2), new c('إ', -1, 1), new c('ئ', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ال', -1, 2), new c('بال', -1, 1), new c('كال', -1, 1), new c('لل', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('أآ', -1, 2), new c('أأ', -1, 1), new c('أؤ', -1, 3), new c('أإ', -1, 5), new c('أا', -1, 4)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('ف', -1, 1), new c('و', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('ال', -1, 2), new c('بال', -1, 1), new c('كال', -1, 1), new c('لل', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('ب', -1, 1), new c('بب', 0, 2), new c('كك', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('سأ', -1, 4), new c('ست', -1, 2), new c('سن', -1, 3), new c('سي', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('تست', -1, 1), new c('نست', -1, 1), new c('يست', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_10',
                            get: function () {
                                return (delete n.a_10, (n.a_10 = [new c('كما', -1, 3), new c('هما', -1, 3), new c('نا', -1, 2), new c('ها', -1, 2), new c('ك', -1, 1), new c('كم', -1, 2), new c('هم', -1, 2), new c('هن', -1, 2), new c('ه', -1, 1), new c('ي', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_11',
                            get: function () {
                                return (delete n.a_11, (n.a_11 = [new c('ن', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_12',
                            get: function () {
                                return (delete n.a_12, (n.a_12 = [new c('ا', -1, 1), new c('و', -1, 1), new c('ي', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_13',
                            get: function () {
                                return (delete n.a_13, (n.a_13 = [new c('ات', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_14',
                            get: function () {
                                return (delete n.a_14, (n.a_14 = [new c('ت', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_15',
                            get: function () {
                                return (delete n.a_15, (n.a_15 = [new c('ة', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_16',
                            get: function () {
                                return (delete n.a_16, (n.a_16 = [new c('ي', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_17',
                            get: function () {
                                return (delete n.a_17, (n.a_17 = [new c('كما', -1, 3), new c('هما', -1, 3), new c('نا', -1, 2), new c('ها', -1, 2), new c('ك', -1, 1), new c('كم', -1, 2), new c('هم', -1, 2), new c('كن', -1, 2), new c('هن', -1, 2), new c('ه', -1, 1), new c('كمو', -1, 3), new c('ني', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_18',
                            get: function () {
                                return (delete n.a_18, (n.a_18 = [new c('ا', -1, 2), new c('تا', 0, 3), new c('تما', 0, 5), new c('نا', 0, 3), new c('ت', -1, 1), new c('ن', -1, 2), new c('ان', 5, 4), new c('تن', 5, 3), new c('ون', 5, 4), new c('ين', 5, 4), new c('ي', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_19',
                            get: function () {
                                return (delete n.a_19, (n.a_19 = [new c('وا', -1, 1), new c('تم', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_20',
                            get: function () {
                                return (delete n.a_20, (n.a_20 = [new c('و', -1, 1), new c('تمو', 0, 2)]));
                            }
                        },
                        {
                            key: 'a_21',
                            get: function () {
                                return (delete n.a_21, (n.a_21 = [new c('ى', -1, 1)]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        f = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0;
                                ((this.I_pV = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    A: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 1377, 1413)) break;
                                            break A;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_pV = this.cursor;
                                    N: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 1377, 1413)) break;
                                            break N;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    C: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 1377, 1413)) break;
                                            break C;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    w: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 1377, 1413)) break;
                                            break w;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_adjective$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_noun$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_ending$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                if (((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                ((this.cursor = this.I_pV), (n = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (r = this.limit - this.cursor));
                                do if (!this.r_ending$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                do if (!this.r_verb$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - i), (a = this.limit - this.cursor));
                                do if (!this.r_adjective$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - a), (o = this.limit - this.cursor));
                                do if (!this.r_noun$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - o), (this.limit_backward = n), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('րորդ', -1, 1), new c('երորդ', 0, 1), new c('ալի', -1, 1), new c('ակի', -1, 1), new c('որակ', -1, 1), new c('եղ', -1, 1), new c('ական', -1, 1), new c('արան', -1, 1), new c('են', -1, 1), new c('եկեն', 8, 1), new c('երեն', 8, 1), new c('որէն', -1, 1), new c('ին', -1, 1), new c('գին', 12, 1), new c('ովին', 12, 1), new c('լայն', -1, 1), new c('վուն', -1, 1), new c('պես', -1, 1), new c('իվ', -1, 1), new c('ատ', -1, 1), new c('ավետ', -1, 1), new c('կոտ', -1, 1), new c('բար', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('ա', -1, 1), new c('ացա', 0, 1), new c('եցա', 0, 1), new c('վե', -1, 1), new c('ացրի', -1, 1), new c('ացի', -1, 1), new c('եցի', -1, 1), new c('վեցի', 6, 1), new c('ալ', -1, 1), new c('ըալ', 8, 1), new c('անալ', 8, 1), new c('ենալ', 8, 1), new c('ացնալ', 8, 1), new c('ել', -1, 1), new c('ըել', 13, 1), new c('նել', 13, 1), new c('ցնել', 15, 1), new c('եցնել', 16, 1), new c('չել', 13, 1), new c('վել', 13, 1), new c('ացվել', 19, 1), new c('եցվել', 19, 1), new c('տել', 13, 1), new c('ատել', 22, 1), new c('ոտել', 22, 1), new c('կոտել', 24, 1), new c('ված', -1, 1), new c('ում', -1, 1), new c('վում', 27, 1), new c('ան', -1, 1), new c('ցան', 29, 1), new c('ացան', 30, 1), new c('ացրին', -1, 1), new c('ացին', -1, 1), new c('եցին', -1, 1), new c('վեցին', 34, 1), new c('ալիս', -1, 1), new c('ելիս', -1, 1), new c('ավ', -1, 1), new c('ացավ', 38, 1), new c('եցավ', 38, 1), new c('ալով', -1, 1), new c('ելով', -1, 1), new c('ար', -1, 1), new c('ացար', 43, 1), new c('եցար', 43, 1), new c('ացրիր', -1, 1), new c('ացիր', -1, 1), new c('եցիր', -1, 1), new c('վեցիր', 48, 1), new c('աց', -1, 1), new c('եց', -1, 1), new c('ացրեց', 51, 1), new c('ալուց', -1, 1), new c('ելուց', -1, 1), new c('ալու', -1, 1), new c('ելու', -1, 1), new c('աք', -1, 1), new c('ցաք', 57, 1), new c('ացաք', 58, 1), new c('ացրիք', -1, 1), new c('ացիք', -1, 1), new c('եցիք', -1, 1), new c('վեցիք', 62, 1), new c('անք', -1, 1), new c('ցանք', 64, 1), new c('ացանք', 65, 1), new c('ացրինք', -1, 1), new c('ացինք', -1, 1), new c('եցինք', -1, 1), new c('վեցինք', 69, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('որդ', -1, 1), new c('ույթ', -1, 1), new c('ուհի', -1, 1), new c('ցի', -1, 1), new c('իլ', -1, 1), new c('ակ', -1, 1), new c('յակ', 5, 1), new c('անակ', 5, 1), new c('իկ', -1, 1), new c('ուկ', -1, 1), new c('ան', -1, 1), new c('պան', 10, 1), new c('ստան', 10, 1), new c('արան', 10, 1), new c('եղէն', -1, 1), new c('յուն', -1, 1), new c('ություն', 15, 1), new c('ածո', -1, 1), new c('իչ', -1, 1), new c('ուս', -1, 1), new c('ուստ', -1, 1), new c('գար', -1, 1), new c('վոր', -1, 1), new c('ավոր', 22, 1), new c('ոց', -1, 1), new c('անօց', -1, 1), new c('ու', -1, 1), new c('ք', -1, 1), new c('չեք', 27, 1), new c('իք', 27, 1), new c('ալիք', 29, 1), new c('անիք', 29, 1), new c('վածք', 27, 1), new c('ույք', 27, 1), new c('ենք', 27, 1), new c('ոնք', 27, 1), new c('ունք', 27, 1), new c('մունք', 36, 1), new c('իչք', 27, 1), new c('արք', 27, 1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('սա', -1, 1), new c('վա', -1, 1), new c('ամբ', -1, 1), new c('դ', -1, 1), new c('անդ', 3, 1), new c('ությանդ', 4, 1), new c('վանդ', 4, 1), new c('ոջդ', 3, 1), new c('երդ', 3, 1), new c('ներդ', 8, 1), new c('ուդ', 3, 1), new c('ը', -1, 1), new c('անը', 11, 1), new c('ությանը', 12, 1), new c('վանը', 12, 1), new c('ոջը', 11, 1), new c('երը', 11, 1), new c('ները', 16, 1), new c('ի', -1, 1), new c('վի', 18, 1), new c('երի', 18, 1), new c('ների', 20, 1), new c('անում', -1, 1), new c('երում', -1, 1), new c('ներում', 23, 1), new c('ն', -1, 1), new c('ան', 25, 1), new c('ության', 26, 1), new c('վան', 26, 1), new c('ին', 25, 1), new c('երին', 29, 1), new c('ներին', 30, 1), new c('ությանն', 25, 1), new c('երն', 25, 1), new c('ներն', 33, 1), new c('ուն', 25, 1), new c('ոջ', -1, 1), new c('ությանս', -1, 1), new c('վանս', -1, 1), new c('ոջս', -1, 1), new c('ով', -1, 1), new c('անով', 40, 1), new c('վով', 40, 1), new c('երով', 40, 1), new c('ներով', 43, 1), new c('եր', -1, 1), new c('ներ', 45, 1), new c('ց', -1, 1), new c('ից', 47, 1), new c('վանից', 48, 1), new c('ոջից', 48, 1), new c('վից', 48, 1), new c('երից', 48, 1), new c('ներից', 52, 1), new c('ցից', 48, 1), new c('ոց', 47, 1), new c('ուց', 47, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [209, 4, 128, 0, 18]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        _ = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        u: do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 117)) break;
                                            d: do {
                                                r = this.cursor;
                                                f: do {
                                                    if (!this.out_grouping$esjava$3(n.g_v, 97, 117)) break;
                                                    C: for (;;) {
                                                        do {
                                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 117)) break;
                                                            break C;
                                                        } while (!1);
                                                        if (this.cursor >= this.limit) break f;
                                                        this.cursor++;
                                                    }
                                                    break d;
                                                } while (!1);
                                                if (((this.cursor = r), !this.in_grouping$esjava$3(n.g_v, 97, 117))) break u;
                                                w: for (;;) {
                                                    do {
                                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 117)) break;
                                                        break w;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break u;
                                                    this.cursor++;
                                                }
                                            } while (!1);
                                            break c;
                                        } while (!1);
                                        if (((this.cursor = t), !this.out_grouping$esjava$3(n.g_v, 97, 117))) break l;
                                        m: do {
                                            i = this.cursor;
                                            R: do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 117)) break;
                                                P: for (;;) {
                                                    do {
                                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 117)) break;
                                                        break P;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break R;
                                                    this.cursor++;
                                                }
                                                break m;
                                            } while (!1);
                                            if (((this.cursor = i), !this.in_grouping$esjava$3(n.g_v, 97, 117) || this.cursor >= this.limit)) break l;
                                            this.cursor++;
                                        } while (!1);
                                    } while (!1);
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (a = this.cursor));
                                D: do {
                                    L: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 117)) break;
                                            break L;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    x: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 117)) break;
                                            break x;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    k: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 117)) break;
                                            break k;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    j: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 117)) break;
                                            break j;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_aditzak$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('atseden');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('arabera');
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('baditu');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_izenak$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('jok');
                                        break;
                                    case 4:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('tra');
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('minutu');
                                        break;
                                    case 7:
                                        this.slice_from$esjava$1('zehar');
                                        break;
                                    case 8:
                                        this.slice_from$esjava$1('geldi');
                                        break;
                                    case 9:
                                        this.slice_from$esjava$1('igaro');
                                        break;
                                    case 10:
                                        this.slice_from$esjava$1('aurka');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_adjetiboak$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('z');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit));
                                M: for (;;) {
                                    t = this.limit - this.cursor;
                                    do {
                                        if (!this.r_aditzak$esjava$0()) break;
                                        continue M;
                                    } while (!1);
                                    this.cursor = this.limit - t;
                                    break;
                                }
                                U: for (;;) {
                                    n = this.limit - this.cursor;
                                    do {
                                        if (!this.r_izenak$esjava$0()) break;
                                        continue U;
                                    } while (!1);
                                    this.cursor = this.limit - n;
                                    break;
                                }
                                r = this.limit - this.cursor;
                                do if (!this.r_adjetiboak$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - r), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('idea', -1, 1), new c('bidea', 0, 1), new c('kidea', 0, 1), new c('pidea', 0, 1), new c('kundea', -1, 1), new c('galea', -1, 1), new c('tailea', -1, 1), new c('tzailea', -1, 1), new c('gunea', -1, 1), new c('kunea', -1, 1), new c('tzaga', -1, 1), new c('gaia', -1, 1), new c('aldia', -1, 1), new c('taldia', 12, 1), new c('karia', -1, 1), new c('garria', -1, 2), new c('karria', -1, 1), new c('ka', -1, 1), new c('tzaka', 17, 1), new c('la', -1, 1), new c('mena', -1, 1), new c('pena', -1, 1), new c('kina', -1, 1), new c('ezina', -1, 1), new c('tezina', 23, 1), new c('kuna', -1, 1), new c('tuna', -1, 1), new c('kizuna', -1, 1), new c('era', -1, 1), new c('bera', 28, 1), new c('arabera', 29, 4), new c('kera', 28, 1), new c('pera', 28, 1), new c('orra', -1, 1), new c('korra', 33, 1), new c('dura', -1, 1), new c('gura', -1, 1), new c('kura', -1, 1), new c('tura', -1, 1), new c('eta', -1, 1), new c('keta', 39, 1), new c('gailua', -1, 1), new c('eza', -1, 1), new c('erreza', 42, 1), new c('tza', -1, 2), new c('gaitza', 44, 1), new c('kaitza', 44, 1), new c('kuntza', 44, 1), new c('ide', -1, 1), new c('bide', 48, 1), new c('kide', 48, 1), new c('pide', 48, 1), new c('kunde', -1, 1), new c('tzake', -1, 1), new c('tzeke', -1, 1), new c('le', -1, 1), new c('gale', 55, 1), new c('taile', 55, 1), new c('tzaile', 55, 1), new c('gune', -1, 1), new c('kune', -1, 1), new c('tze', -1, 1), new c('atze', 61, 1), new c('gai', -1, 1), new c('aldi', -1, 1), new c('taldi', 64, 1), new c('ki', -1, 1), new c('ari', -1, 1), new c('kari', 67, 1), new c('lari', 67, 1), new c('tari', 67, 1), new c('etari', 70, 1), new c('garri', -1, 2), new c('karri', -1, 1), new c('arazi', -1, 1), new c('tarazi', 74, 1), new c('an', -1, 1), new c('ean', 76, 1), new c('rean', 77, 1), new c('kan', 76, 1), new c('etan', 76, 1), new c('atseden', -1, 3), new c('men', -1, 1), new c('pen', -1, 1), new c('kin', -1, 1), new c('rekin', 84, 1), new c('ezin', -1, 1), new c('tezin', 86, 1), new c('tun', -1, 1), new c('kizun', -1, 1), new c('go', -1, 1), new c('ago', 90, 1), new c('tio', -1, 1), new c('dako', -1, 1), new c('or', -1, 1), new c('kor', 94, 1), new c('tzat', -1, 1), new c('du', -1, 1), new c('gailu', -1, 1), new c('tu', -1, 1), new c('atu', 99, 1), new c('aldatu', 100, 1), new c('tatu', 100, 1), new c('baditu', 99, 5), new c('ez', -1, 1), new c('errez', 104, 1), new c('tzez', 104, 1), new c('gaitz', -1, 1), new c('kaitz', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (
                                    delete n.a_1,
                                    (n.a_1 = [
                                        new c('ada', -1, 1),
                                        new c('kada', 0, 1),
                                        new c('anda', -1, 1),
                                        new c('denda', -1, 1),
                                        new c('gabea', -1, 1),
                                        new c('kabea', -1, 1),
                                        new c('aldea', -1, 1),
                                        new c('kaldea', 6, 1),
                                        new c('taldea', 6, 1),
                                        new c('ordea', -1, 1),
                                        new c('zalea', -1, 1),
                                        new c('tzalea', 10, 1),
                                        new c('gilea', -1, 1),
                                        new c('emea', -1, 1),
                                        new c('kumea', -1, 1),
                                        new c('nea', -1, 1),
                                        new c('enea', 15, 1),
                                        new c('zionea', 15, 1),
                                        new c('unea', 15, 1),
                                        new c('gunea', 18, 1),
                                        new c('pea', -1, 1),
                                        new c('aurrea', -1, 1),
                                        new c('tea', -1, 1),
                                        new c('kotea', 22, 1),
                                        new c('artea', 22, 1),
                                        new c('ostea', 22, 1),
                                        new c('etxea', -1, 1),
                                        new c('ga', -1, 1),
                                        new c('anga', 27, 1),
                                        new c('gaia', -1, 1),
                                        new c('aldia', -1, 1),
                                        new c('taldia', 30, 1),
                                        new c('handia', -1, 1),
                                        new c('mendia', -1, 1),
                                        new c('geia', -1, 1),
                                        new c('egia', -1, 1),
                                        new c('degia', 35, 1),
                                        new c('tegia', 35, 1),
                                        new c('nahia', -1, 1),
                                        new c('ohia', -1, 1),
                                        new c('kia', -1, 1),
                                        new c('tokia', 40, 1),
                                        new c('oia', -1, 1),
                                        new c('koia', 42, 1),
                                        new c('aria', -1, 1),
                                        new c('karia', 44, 1),
                                        new c('laria', 44, 1),
                                        new c('taria', 44, 1),
                                        new c('eria', -1, 1),
                                        new c('keria', 48, 1),
                                        new c('teria', 48, 1),
                                        new c('garria', -1, 2),
                                        new c('larria', -1, 1),
                                        new c('kirria', -1, 1),
                                        new c('duria', -1, 1),
                                        new c('asia', -1, 1),
                                        new c('tia', -1, 1),
                                        new c('ezia', -1, 1),
                                        new c('bizia', -1, 1),
                                        new c('ontzia', -1, 1),
                                        new c('ka', -1, 1),
                                        new c('joka', 60, 3),
                                        new c('aurka', 60, 10),
                                        new c('ska', 60, 1),
                                        new c('xka', 60, 1),
                                        new c('zka', 60, 1),
                                        new c('gibela', -1, 1),
                                        new c('gela', -1, 1),
                                        new c('kaila', -1, 1),
                                        new c('skila', -1, 1),
                                        new c('tila', -1, 1),
                                        new c('ola', -1, 1),
                                        new c('na', -1, 1),
                                        new c('kana', 72, 1),
                                        new c('ena', 72, 1),
                                        new c('garrena', 74, 1),
                                        new c('gerrena', 74, 1),
                                        new c('urrena', 74, 1),
                                        new c('zaina', 72, 1),
                                        new c('tzaina', 78, 1),
                                        new c('kina', 72, 1),
                                        new c('mina', 72, 1),
                                        new c('garna', 72, 1),
                                        new c('una', 72, 1),
                                        new c('duna', 83, 1),
                                        new c('asuna', 83, 1),
                                        new c('tasuna', 85, 1),
                                        new c('ondoa', -1, 1),
                                        new c('kondoa', 87, 1),
                                        new c('ngoa', -1, 1),
                                        new c('zioa', -1, 1),
                                        new c('koa', -1, 1),
                                        new c('takoa', 91, 1),
                                        new c('zkoa', 91, 1),
                                        new c('noa', -1, 1),
                                        new c('zinoa', 94, 1),
                                        new c('aroa', -1, 1),
                                        new c('taroa', 96, 1),
                                        new c('zaroa', 96, 1),
                                        new c('eroa', -1, 1),
                                        new c('oroa', -1, 1),
                                        new c('osoa', -1, 1),
                                        new c('toa', -1, 1),
                                        new c('ttoa', 102, 1),
                                        new c('ztoa', 102, 1),
                                        new c('txoa', -1, 1),
                                        new c('tzoa', -1, 1),
                                        new c('ñoa', -1, 1),
                                        new c('ra', -1, 1),
                                        new c('ara', 108, 1),
                                        new c('dara', 109, 1),
                                        new c('liara', 109, 1),
                                        new c('tiara', 109, 1),
                                        new c('tara', 109, 1),
                                        new c('etara', 113, 1),
                                        new c('tzara', 109, 1),
                                        new c('bera', 108, 1),
                                        new c('kera', 108, 1),
                                        new c('pera', 108, 1),
                                        new c('ora', 108, 2),
                                        new c('tzarra', 108, 1),
                                        new c('korra', 108, 1),
                                        new c('tra', 108, 1),
                                        new c('sa', -1, 1),
                                        new c('osa', 123, 1),
                                        new c('ta', -1, 1),
                                        new c('eta', 125, 1),
                                        new c('keta', 126, 1),
                                        new c('sta', 125, 1),
                                        new c('dua', -1, 1),
                                        new c('mendua', 129, 1),
                                        new c('ordua', 129, 1),
                                        new c('lekua', -1, 1),
                                        new c('burua', -1, 1),
                                        new c('durua', -1, 1),
                                        new c('tsua', -1, 1),
                                        new c('tua', -1, 1),
                                        new c('mentua', 136, 1),
                                        new c('estua', 136, 1),
                                        new c('txua', -1, 1),
                                        new c('zua', -1, 1),
                                        new c('tzua', 140, 1),
                                        new c('za', -1, 1),
                                        new c('eza', 142, 1),
                                        new c('eroza', 142, 1),
                                        new c('tza', 142, 2),
                                        new c('koitza', 145, 1),
                                        new c('antza', 145, 1),
                                        new c('gintza', 145, 1),
                                        new c('kintza', 145, 1),
                                        new c('kuntza', 145, 1),
                                        new c('gabe', -1, 1),
                                        new c('kabe', -1, 1),
                                        new c('kide', -1, 1),
                                        new c('alde', -1, 1),
                                        new c('kalde', 154, 1),
                                        new c('talde', 154, 1),
                                        new c('orde', -1, 1),
                                        new c('ge', -1, 1),
                                        new c('zale', -1, 1),
                                        new c('tzale', 159, 1),
                                        new c('gile', -1, 1),
                                        new c('eme', -1, 1),
                                        new c('kume', -1, 1),
                                        new c('ne', -1, 1),
                                        new c('zione', 164, 1),
                                        new c('une', 164, 1),
                                        new c('gune', 166, 1),
                                        new c('pe', -1, 1),
                                        new c('aurre', -1, 1),
                                        new c('te', -1, 1),
                                        new c('kote', 170, 1),
                                        new c('arte', 170, 1),
                                        new c('oste', 170, 1),
                                        new c('etxe', -1, 1),
                                        new c('gai', -1, 1),
                                        new c('di', -1, 1),
                                        new c('aldi', 176, 1),
                                        new c('taldi', 177, 1),
                                        new c('geldi', 176, 8),
                                        new c('handi', 176, 1),
                                        new c('mendi', 176, 1),
                                        new c('gei', -1, 1),
                                        new c('egi', -1, 1),
                                        new c('degi', 183, 1),
                                        new c('tegi', 183, 1),
                                        new c('nahi', -1, 1),
                                        new c('ohi', -1, 1),
                                        new c('ki', -1, 1),
                                        new c('toki', 188, 1),
                                        new c('oi', -1, 1),
                                        new c('goi', 190, 1),
                                        new c('koi', 190, 1),
                                        new c('ari', -1, 1),
                                        new c('kari', 193, 1),
                                        new c('lari', 193, 1),
                                        new c('tari', 193, 1),
                                        new c('garri', -1, 2),
                                        new c('larri', -1, 1),
                                        new c('kirri', -1, 1),
                                        new c('duri', -1, 1),
                                        new c('asi', -1, 1),
                                        new c('ti', -1, 1),
                                        new c('ontzi', -1, 1),
                                        new c('ñi', -1, 1),
                                        new c('ak', -1, 1),
                                        new c('ek', -1, 1),
                                        new c('tarik', -1, 1),
                                        new c('gibel', -1, 1),
                                        new c('ail', -1, 1),
                                        new c('kail', 209, 1),
                                        new c('kan', -1, 1),
                                        new c('tan', -1, 1),
                                        new c('etan', 212, 1),
                                        new c('en', -1, 4),
                                        new c('ren', 214, 2),
                                        new c('garren', 215, 1),
                                        new c('gerren', 215, 1),
                                        new c('urren', 215, 1),
                                        new c('ten', 214, 4),
                                        new c('tzen', 214, 4),
                                        new c('zain', -1, 1),
                                        new c('tzain', 221, 1),
                                        new c('kin', -1, 1),
                                        new c('min', -1, 1),
                                        new c('dun', -1, 1),
                                        new c('asun', -1, 1),
                                        new c('tasun', 226, 1),
                                        new c('aizun', -1, 1),
                                        new c('ondo', -1, 1),
                                        new c('kondo', 229, 1),
                                        new c('go', -1, 1),
                                        new c('ngo', 231, 1),
                                        new c('zio', -1, 1),
                                        new c('ko', -1, 1),
                                        new c('trako', 234, 5),
                                        new c('tako', 234, 1),
                                        new c('etako', 236, 1),
                                        new c('eko', 234, 1),
                                        new c('tariko', 234, 1),
                                        new c('sko', 234, 1),
                                        new c('tuko', 234, 1),
                                        new c('minutuko', 241, 6),
                                        new c('zko', 234, 1),
                                        new c('no', -1, 1),
                                        new c('zino', 244, 1),
                                        new c('ro', -1, 1),
                                        new c('aro', 246, 1),
                                        new c('igaro', 247, 9),
                                        new c('taro', 247, 1),
                                        new c('zaro', 247, 1),
                                        new c('ero', 246, 1),
                                        new c('giro', 246, 1),
                                        new c('oro', 246, 1),
                                        new c('oso', -1, 1),
                                        new c('to', -1, 1),
                                        new c('tto', 255, 1),
                                        new c('zto', 255, 1),
                                        new c('txo', -1, 1),
                                        new c('tzo', -1, 1),
                                        new c('gintzo', 259, 1),
                                        new c('ño', -1, 1),
                                        new c('zp', -1, 1),
                                        new c('ar', -1, 1),
                                        new c('dar', 263, 1),
                                        new c('behar', 263, 1),
                                        new c('zehar', 263, 7),
                                        new c('liar', 263, 1),
                                        new c('tiar', 263, 1),
                                        new c('tar', 263, 1),
                                        new c('tzar', 263, 1),
                                        new c('or', -1, 2),
                                        new c('kor', 271, 1),
                                        new c('os', -1, 1),
                                        new c('ket', -1, 1),
                                        new c('du', -1, 1),
                                        new c('mendu', 275, 1),
                                        new c('ordu', 275, 1),
                                        new c('leku', -1, 1),
                                        new c('buru', -1, 2),
                                        new c('duru', -1, 1),
                                        new c('tsu', -1, 1),
                                        new c('tu', -1, 1),
                                        new c('tatu', 282, 4),
                                        new c('mentu', 282, 1),
                                        new c('estu', 282, 1),
                                        new c('txu', -1, 1),
                                        new c('zu', -1, 1),
                                        new c('tzu', 287, 1),
                                        new c('gintzu', 288, 1),
                                        new c('z', -1, 1),
                                        new c('ez', 290, 1),
                                        new c('eroz', 290, 1),
                                        new c('tz', 290, 1),
                                        new c('koitz', 293, 1)
                                    ])
                                );
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('zlea', -1, 2), new c('keria', -1, 1), new c('la', -1, 1), new c('era', -1, 1), new c('dade', -1, 1), new c('tade', -1, 1), new c('date', -1, 1), new c('tate', -1, 1), new c('gi', -1, 1), new c('ki', -1, 1), new c('ik', -1, 1), new c('lanik', 10, 1), new c('rik', 10, 1), new c('larik', 12, 1), new c('ztik', 10, 1), new c('go', -1, 1), new c('ro', -1, 1), new c('ero', 16, 1), new c('to', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        p = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0;
                                ((this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    A: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break A;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    N: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break N;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    C: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break C;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    w: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break w;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_cleaning$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                            case 2:
                                                this.slice_from$esjava$1('a');
                                                break;
                                            case 3:
                                            case 4:
                                                this.slice_from$esjava$1('e');
                                                break;
                                            case 5:
                                            case 6:
                                            case 11:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 7:
                                            case 8:
                                                this.slice_from$esjava$1('o');
                                                break;
                                            case 9:
                                            case 10:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 12:
                                                this.slice_from$esjava$1('.');
                                                break;
                                            case 13:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_attached_pronoun$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('log');
                                        break;
                                    case 4:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ic');
                                        break;
                                    case 5:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_from$esjava$1('c');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_residual_suffix$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ic');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_attached_pronoun$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                u: do
                                    d: do {
                                        r = this.limit - this.cursor;
                                        do {
                                            if (!this.r_standard_suffix$esjava$0()) break;
                                            break d;
                                        } while (!1);
                                        if (((this.cursor = this.limit - r), !this.r_verb_suffix$esjava$0())) break u;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - n), (i = this.limit - this.cursor));
                                do if (!this.r_residual_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - i), (this.cursor = this.limit_backward), (a = this.cursor));
                                do if (!this.r_cleaning$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 13), new c('\xB7', 0, 12), new c('à', 0, 2), new c('á', 0, 1), new c('è', 0, 4), new c('é', 0, 3), new c('ì', 0, 6), new c('í', 0, 5), new c('ï', 0, 11), new c('ò', 0, 8), new c('ó', 0, 7), new c('ú', 0, 9), new c('ü', 0, 10)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('la', -1, 1), new c('-la', 0, 1), new c('sela', 0, 1), new c('le', -1, 1), new c('me', -1, 1), new c('-me', 4, 1), new c('se', -1, 1), new c('-te', -1, 1), new c('hi', -1, 1), new c("'hi", 8, 1), new c('li', -1, 1), new c('-li', 10, 1), new c("'l", -1, 1), new c("'m", -1, 1), new c('-m', -1, 1), new c("'n", -1, 1), new c('-n', -1, 1), new c('ho', -1, 1), new c("'ho", 17, 1), new c('lo', -1, 1), new c('selo', 19, 1), new c("'s", -1, 1), new c('las', -1, 1), new c('selas', 22, 1), new c('les', -1, 1), new c('-les', 24, 1), new c("'ls", -1, 1), new c('-ls', -1, 1), new c("'ns", -1, 1), new c('-ns', -1, 1), new c('ens', -1, 1), new c('los', -1, 1), new c('selos', 31, 1), new c('nos', -1, 1), new c('-nos', 33, 1), new c('vos', -1, 1), new c('us', -1, 1), new c('-us', 36, 1), new c("'t", -1, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (
                                    delete n.a_2,
                                    (n.a_2 = [
                                        new c('ica', -1, 4),
                                        new c('lógica', 0, 3),
                                        new c('enca', -1, 1),
                                        new c('ada', -1, 2),
                                        new c('ancia', -1, 1),
                                        new c('encia', -1, 1),
                                        new c('ència', -1, 1),
                                        new c('ícia', -1, 1),
                                        new c('logia', -1, 3),
                                        new c('inia', -1, 1),
                                        new c('íinia', 9, 1),
                                        new c('eria', -1, 1),
                                        new c('ària', -1, 1),
                                        new c('atòria', -1, 1),
                                        new c('alla', -1, 1),
                                        new c('ella', -1, 1),
                                        new c('ívola', -1, 1),
                                        new c('ima', -1, 1),
                                        new c('íssima', 17, 1),
                                        new c('quíssima', 18, 5),
                                        new c('ana', -1, 1),
                                        new c('ina', -1, 1),
                                        new c('era', -1, 1),
                                        new c('sfera', 22, 1),
                                        new c('ora', -1, 1),
                                        new c('dora', 24, 1),
                                        new c('adora', 25, 1),
                                        new c('adura', -1, 1),
                                        new c('esa', -1, 1),
                                        new c('osa', -1, 1),
                                        new c('assa', -1, 1),
                                        new c('essa', -1, 1),
                                        new c('issa', -1, 1),
                                        new c('eta', -1, 1),
                                        new c('ita', -1, 1),
                                        new c('ota', -1, 1),
                                        new c('ista', -1, 1),
                                        new c('ialista', 36, 1),
                                        new c('ionista', 36, 1),
                                        new c('iva', -1, 1),
                                        new c('ativa', 39, 1),
                                        new c('nça', -1, 1),
                                        new c('logía', -1, 3),
                                        new c('ic', -1, 4),
                                        new c('ístic', 43, 1),
                                        new c('enc', -1, 1),
                                        new c('esc', -1, 1),
                                        new c('ud', -1, 1),
                                        new c('atge', -1, 1),
                                        new c('ble', -1, 1),
                                        new c('able', 49, 1),
                                        new c('ible', 49, 1),
                                        new c('isme', -1, 1),
                                        new c('ialisme', 52, 1),
                                        new c('ionisme', 52, 1),
                                        new c('ivisme', 52, 1),
                                        new c('aire', -1, 1),
                                        new c('icte', -1, 1),
                                        new c('iste', -1, 1),
                                        new c('ici', -1, 1),
                                        new c('íci', -1, 1),
                                        new c('logi', -1, 3),
                                        new c('ari', -1, 1),
                                        new c('tori', -1, 1),
                                        new c('al', -1, 1),
                                        new c('il', -1, 1),
                                        new c('all', -1, 1),
                                        new c('ell', -1, 1),
                                        new c('ívol', -1, 1),
                                        new c('isam', -1, 1),
                                        new c('issem', -1, 1),
                                        new c('ìssem', -1, 1),
                                        new c('íssem', -1, 1),
                                        new c('íssim', -1, 1),
                                        new c('quíssim', 73, 5),
                                        new c('amen', -1, 1),
                                        new c('ìssin', -1, 1),
                                        new c('ar', -1, 1),
                                        new c('ificar', 77, 1),
                                        new c('egar', 77, 1),
                                        new c('ejar', 77, 1),
                                        new c('itar', 77, 1),
                                        new c('itzar', 77, 1),
                                        new c('fer', -1, 1),
                                        new c('or', -1, 1),
                                        new c('dor', 84, 1),
                                        new c('dur', -1, 1),
                                        new c('doras', -1, 1),
                                        new c('ics', -1, 4),
                                        new c('lógics', 88, 3),
                                        new c('uds', -1, 1),
                                        new c('nces', -1, 1),
                                        new c('ades', -1, 2),
                                        new c('ancies', -1, 1),
                                        new c('encies', -1, 1),
                                        new c('ències', -1, 1),
                                        new c('ícies', -1, 1),
                                        new c('logies', -1, 3),
                                        new c('inies', -1, 1),
                                        new c('ínies', -1, 1),
                                        new c('eries', -1, 1),
                                        new c('àries', -1, 1),
                                        new c('atòries', -1, 1),
                                        new c('bles', -1, 1),
                                        new c('ables', 103, 1),
                                        new c('ibles', 103, 1),
                                        new c('imes', -1, 1),
                                        new c('íssimes', 106, 1),
                                        new c('quíssimes', 107, 5),
                                        new c('formes', -1, 1),
                                        new c('ismes', -1, 1),
                                        new c('ialismes', 110, 1),
                                        new c('ines', -1, 1),
                                        new c('eres', -1, 1),
                                        new c('ores', -1, 1),
                                        new c('dores', 114, 1),
                                        new c('idores', 115, 1),
                                        new c('dures', -1, 1),
                                        new c('eses', -1, 1),
                                        new c('oses', -1, 1),
                                        new c('asses', -1, 1),
                                        new c('ictes', -1, 1),
                                        new c('ites', -1, 1),
                                        new c('otes', -1, 1),
                                        new c('istes', -1, 1),
                                        new c('ialistes', 124, 1),
                                        new c('ionistes', 124, 1),
                                        new c('iques', -1, 4),
                                        new c('lógiques', 127, 3),
                                        new c('ives', -1, 1),
                                        new c('atives', 129, 1),
                                        new c('logíes', -1, 3),
                                        new c('allengües', -1, 1),
                                        new c('icis', -1, 1),
                                        new c('ícis', -1, 1),
                                        new c('logis', -1, 3),
                                        new c('aris', -1, 1),
                                        new c('toris', -1, 1),
                                        new c('ls', -1, 1),
                                        new c('als', 138, 1),
                                        new c('ells', 138, 1),
                                        new c('ims', -1, 1),
                                        new c('íssims', 141, 1),
                                        new c('quíssims', 142, 5),
                                        new c('ions', -1, 1),
                                        new c('cions', 144, 1),
                                        new c('acions', 145, 2),
                                        new c('esos', -1, 1),
                                        new c('osos', -1, 1),
                                        new c('assos', -1, 1),
                                        new c('issos', -1, 1),
                                        new c('ers', -1, 1),
                                        new c('ors', -1, 1),
                                        new c('dors', 152, 1),
                                        new c('adors', 153, 1),
                                        new c('idors', 153, 1),
                                        new c('ats', -1, 1),
                                        new c('itats', 156, 1),
                                        new c('bilitats', 157, 1),
                                        new c('ivitats', 157, 1),
                                        new c('ativitats', 159, 1),
                                        new c('ïtats', 156, 1),
                                        new c('ets', -1, 1),
                                        new c('ants', -1, 1),
                                        new c('ents', -1, 1),
                                        new c('ments', 164, 1),
                                        new c('aments', 165, 1),
                                        new c('ots', -1, 1),
                                        new c('uts', -1, 1),
                                        new c('ius', -1, 1),
                                        new c('trius', 169, 1),
                                        new c('atius', 169, 1),
                                        new c('ès', -1, 1),
                                        new c('és', -1, 1),
                                        new c('ís', -1, 1),
                                        new c('dís', 174, 1),
                                        new c('ós', -1, 1),
                                        new c('itat', -1, 1),
                                        new c('bilitat', 177, 1),
                                        new c('ivitat', 177, 1),
                                        new c('ativitat', 179, 1),
                                        new c('ïtat', -1, 1),
                                        new c('et', -1, 1),
                                        new c('ant', -1, 1),
                                        new c('ent', -1, 1),
                                        new c('ient', 184, 1),
                                        new c('ment', 184, 1),
                                        new c('ament', 186, 1),
                                        new c('isament', 187, 1),
                                        new c('ot', -1, 1),
                                        new c('isseu', -1, 1),
                                        new c('ìsseu', -1, 1),
                                        new c('ísseu', -1, 1),
                                        new c('triu', -1, 1),
                                        new c('íssiu', -1, 1),
                                        new c('atiu', -1, 1),
                                        new c('ó', -1, 1),
                                        new c('ió', 196, 1),
                                        new c('ció', 197, 1),
                                        new c('ació', 198, 1)
                                    ])
                                );
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (
                                    delete n.a_3,
                                    (n.a_3 = [
                                        new c('aba', -1, 1),
                                        new c('esca', -1, 1),
                                        new c('isca', -1, 1),
                                        new c('ïsca', -1, 1),
                                        new c('ada', -1, 1),
                                        new c('ida', -1, 1),
                                        new c('uda', -1, 1),
                                        new c('ïda', -1, 1),
                                        new c('ia', -1, 1),
                                        new c('aria', 8, 1),
                                        new c('iria', 8, 1),
                                        new c('ara', -1, 1),
                                        new c('iera', -1, 1),
                                        new c('ira', -1, 1),
                                        new c('adora', -1, 1),
                                        new c('ïra', -1, 1),
                                        new c('ava', -1, 1),
                                        new c('ixa', -1, 1),
                                        new c('itza', -1, 1),
                                        new c('ía', -1, 1),
                                        new c('aría', 19, 1),
                                        new c('ería', 19, 1),
                                        new c('iría', 19, 1),
                                        new c('ïa', -1, 1),
                                        new c('isc', -1, 1),
                                        new c('ïsc', -1, 1),
                                        new c('ad', -1, 1),
                                        new c('ed', -1, 1),
                                        new c('id', -1, 1),
                                        new c('ie', -1, 1),
                                        new c('re', -1, 1),
                                        new c('dre', 30, 1),
                                        new c('ase', -1, 1),
                                        new c('iese', -1, 1),
                                        new c('aste', -1, 1),
                                        new c('iste', -1, 1),
                                        new c('ii', -1, 1),
                                        new c('ini', -1, 1),
                                        new c('esqui', -1, 1),
                                        new c('eixi', -1, 1),
                                        new c('itzi', -1, 1),
                                        new c('am', -1, 1),
                                        new c('em', -1, 1),
                                        new c('arem', 42, 1),
                                        new c('irem', 42, 1),
                                        new c('àrem', 42, 1),
                                        new c('írem', 42, 1),
                                        new c('àssem', 42, 1),
                                        new c('éssem', 42, 1),
                                        new c('iguem', 42, 1),
                                        new c('ïguem', 42, 1),
                                        new c('avem', 42, 1),
                                        new c('àvem', 42, 1),
                                        new c('ávem', 42, 1),
                                        new c('irìem', 42, 1),
                                        new c('íem', 42, 1),
                                        new c('aríem', 55, 1),
                                        new c('iríem', 55, 1),
                                        new c('assim', -1, 1),
                                        new c('essim', -1, 1),
                                        new c('issim', -1, 1),
                                        new c('àssim', -1, 1),
                                        new c('èssim', -1, 1),
                                        new c('éssim', -1, 1),
                                        new c('íssim', -1, 1),
                                        new c('ïm', -1, 1),
                                        new c('an', -1, 1),
                                        new c('aban', 66, 1),
                                        new c('arian', 66, 1),
                                        new c('aran', 66, 1),
                                        new c('ieran', 66, 1),
                                        new c('iran', 66, 1),
                                        new c('ían', 66, 1),
                                        new c('arían', 72, 1),
                                        new c('erían', 72, 1),
                                        new c('irían', 72, 1),
                                        new c('en', -1, 1),
                                        new c('ien', 76, 1),
                                        new c('arien', 77, 1),
                                        new c('irien', 77, 1),
                                        new c('aren', 76, 1),
                                        new c('eren', 76, 1),
                                        new c('iren', 76, 1),
                                        new c('àren', 76, 1),
                                        new c('ïren', 76, 1),
                                        new c('asen', 76, 1),
                                        new c('iesen', 76, 1),
                                        new c('assen', 76, 1),
                                        new c('essen', 76, 1),
                                        new c('issen', 76, 1),
                                        new c('éssen', 76, 1),
                                        new c('ïssen', 76, 1),
                                        new c('esquen', 76, 1),
                                        new c('isquen', 76, 1),
                                        new c('ïsquen', 76, 1),
                                        new c('aven', 76, 1),
                                        new c('ixen', 76, 1),
                                        new c('eixen', 96, 1),
                                        new c('ïxen', 76, 1),
                                        new c('ïen', 76, 1),
                                        new c('in', -1, 1),
                                        new c('inin', 100, 1),
                                        new c('sin', 100, 1),
                                        new c('isin', 102, 1),
                                        new c('assin', 102, 1),
                                        new c('essin', 102, 1),
                                        new c('issin', 102, 1),
                                        new c('ïssin', 102, 1),
                                        new c('esquin', 100, 1),
                                        new c('eixin', 100, 1),
                                        new c('aron', -1, 1),
                                        new c('ieron', -1, 1),
                                        new c('arán', -1, 1),
                                        new c('erán', -1, 1),
                                        new c('irán', -1, 1),
                                        new c('iïn', -1, 1),
                                        new c('ado', -1, 1),
                                        new c('ido', -1, 1),
                                        new c('ando', -1, 2),
                                        new c('iendo', -1, 1),
                                        new c('io', -1, 1),
                                        new c('ixo', -1, 1),
                                        new c('eixo', 121, 1),
                                        new c('ïxo', -1, 1),
                                        new c('itzo', -1, 1),
                                        new c('ar', -1, 1),
                                        new c('tzar', 125, 1),
                                        new c('er', -1, 1),
                                        new c('eixer', 127, 1),
                                        new c('ir', -1, 1),
                                        new c('ador', -1, 1),
                                        new c('as', -1, 1),
                                        new c('abas', 131, 1),
                                        new c('adas', 131, 1),
                                        new c('idas', 131, 1),
                                        new c('aras', 131, 1),
                                        new c('ieras', 131, 1),
                                        new c('ías', 131, 1),
                                        new c('arías', 137, 1),
                                        new c('erías', 137, 1),
                                        new c('irías', 137, 1),
                                        new c('ids', -1, 1),
                                        new c('es', -1, 1),
                                        new c('ades', 142, 1),
                                        new c('ides', 142, 1),
                                        new c('udes', 142, 1),
                                        new c('ïdes', 142, 1),
                                        new c('atges', 142, 1),
                                        new c('ies', 142, 1),
                                        new c('aries', 148, 1),
                                        new c('iries', 148, 1),
                                        new c('ares', 142, 1),
                                        new c('ires', 142, 1),
                                        new c('adores', 142, 1),
                                        new c('ïres', 142, 1),
                                        new c('ases', 142, 1),
                                        new c('ieses', 142, 1),
                                        new c('asses', 142, 1),
                                        new c('esses', 142, 1),
                                        new c('isses', 142, 1),
                                        new c('ïsses', 142, 1),
                                        new c('ques', 142, 1),
                                        new c('esques', 161, 1),
                                        new c('ïsques', 161, 1),
                                        new c('aves', 142, 1),
                                        new c('ixes', 142, 1),
                                        new c('eixes', 165, 1),
                                        new c('ïxes', 142, 1),
                                        new c('ïes', 142, 1),
                                        new c('abais', -1, 1),
                                        new c('arais', -1, 1),
                                        new c('ierais', -1, 1),
                                        new c('íais', -1, 1),
                                        new c('aríais', 172, 1),
                                        new c('eríais', 172, 1),
                                        new c('iríais', 172, 1),
                                        new c('aseis', -1, 1),
                                        new c('ieseis', -1, 1),
                                        new c('asteis', -1, 1),
                                        new c('isteis', -1, 1),
                                        new c('inis', -1, 1),
                                        new c('sis', -1, 1),
                                        new c('isis', 181, 1),
                                        new c('assis', 181, 1),
                                        new c('essis', 181, 1),
                                        new c('issis', 181, 1),
                                        new c('ïssis', 181, 1),
                                        new c('esquis', -1, 1),
                                        new c('eixis', -1, 1),
                                        new c('itzis', -1, 1),
                                        new c('áis', -1, 1),
                                        new c('aréis', -1, 1),
                                        new c('eréis', -1, 1),
                                        new c('iréis', -1, 1),
                                        new c('ams', -1, 1),
                                        new c('ados', -1, 1),
                                        new c('idos', -1, 1),
                                        new c('amos', -1, 1),
                                        new c('ábamos', 197, 1),
                                        new c('áramos', 197, 1),
                                        new c('iéramos', 197, 1),
                                        new c('íamos', 197, 1),
                                        new c('aríamos', 201, 1),
                                        new c('eríamos', 201, 1),
                                        new c('iríamos', 201, 1),
                                        new c('aremos', -1, 1),
                                        new c('eremos', -1, 1),
                                        new c('iremos', -1, 1),
                                        new c('ásemos', -1, 1),
                                        new c('iésemos', -1, 1),
                                        new c('imos', -1, 1),
                                        new c('adors', -1, 1),
                                        new c('ass', -1, 1),
                                        new c('erass', 212, 1),
                                        new c('ess', -1, 1),
                                        new c('ats', -1, 1),
                                        new c('its', -1, 1),
                                        new c('ents', -1, 1),
                                        new c('às', -1, 1),
                                        new c('aràs', 218, 1),
                                        new c('iràs', 218, 1),
                                        new c('arás', -1, 1),
                                        new c('erás', -1, 1),
                                        new c('irás', -1, 1),
                                        new c('és', -1, 1),
                                        new c('arés', 224, 1),
                                        new c('ís', -1, 1),
                                        new c('iïs', -1, 1),
                                        new c('at', -1, 1),
                                        new c('it', -1, 1),
                                        new c('ant', -1, 1),
                                        new c('ent', -1, 1),
                                        new c('int', -1, 1),
                                        new c('ut', -1, 1),
                                        new c('ït', -1, 1),
                                        new c('au', -1, 1),
                                        new c('erau', 235, 1),
                                        new c('ieu', -1, 1),
                                        new c('ineu', -1, 1),
                                        new c('areu', -1, 1),
                                        new c('ireu', -1, 1),
                                        new c('àreu', -1, 1),
                                        new c('íreu', -1, 1),
                                        new c('asseu', -1, 1),
                                        new c('esseu', -1, 1),
                                        new c('eresseu', 244, 1),
                                        new c('àsseu', -1, 1),
                                        new c('ésseu', -1, 1),
                                        new c('igueu', -1, 1),
                                        new c('ïgueu', -1, 1),
                                        new c('àveu', -1, 1),
                                        new c('áveu', -1, 1),
                                        new c('itzeu', -1, 1),
                                        new c('ìeu', -1, 1),
                                        new c('irìeu', 253, 1),
                                        new c('íeu', -1, 1),
                                        new c('aríeu', 255, 1),
                                        new c('iríeu', 255, 1),
                                        new c('assiu', -1, 1),
                                        new c('issiu', -1, 1),
                                        new c('àssiu', -1, 1),
                                        new c('èssiu', -1, 1),
                                        new c('éssiu', -1, 1),
                                        new c('íssiu', -1, 1),
                                        new c('ïu', -1, 1),
                                        new c('ix', -1, 1),
                                        new c('eix', 265, 1),
                                        new c('ïx', -1, 1),
                                        new c('itz', -1, 1),
                                        new c('ià', -1, 1),
                                        new c('arà', -1, 1),
                                        new c('irà', -1, 1),
                                        new c('itzà', -1, 1),
                                        new c('ará', -1, 1),
                                        new c('erá', -1, 1),
                                        new c('irá', -1, 1),
                                        new c('irè', -1, 1),
                                        new c('aré', -1, 1),
                                        new c('eré', -1, 1),
                                        new c('iré', -1, 1),
                                        new c('í', -1, 1),
                                        new c('iï', -1, 1),
                                        new c('ió', -1, 1)
                                    ])
                                );
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('a', -1, 1), new c('e', -1, 1), new c('i', -1, 1), new c('ïn', -1, 1), new c('o', -1, 1), new c('ir', -1, 1), new c('s', -1, 1), new c('is', 6, 1), new c('os', 6, 1), new c('ïs', 6, 1), new c('it', -1, 1), new c('eu', -1, 1), new c('iu', -1, 1), new c('iqu', -1, 2), new c('itz', -1, 1), new c('à', -1, 1), new c('á', -1, 1), new c('é', -1, 1), new c('ì', -1, 1), new c('í', -1, 1), new c('ï', -1, 1), new c('ó', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 129, 81, 6, 10]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        h = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (e = this.cursor));
                                l: do {
                                    A: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 367)) break;
                                            break A;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_pV = this.cursor;
                                    N: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 367)) break;
                                            break N;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    C: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 367)) break;
                                            break C;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                } while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_palatalise$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)) || ((this.bra = this.cursor), !this.r_RV$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('k');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('h');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('ck');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('sk');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_possessive$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)) || ((this.bra = this.cursor), !this.r_RV$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do
                                            if (!this.r_palatalise$esjava$0()) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                        while (!1);
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_case$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do
                                            if (!this.r_palatalise$esjava$0()) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                        while (!1);
                                        break;
                                    case 3:
                                        (this.slice_from$esjava$1('e'), (r = this.limit - this.cursor));
                                        do
                                            if (!this.r_palatalise$esjava$0()) {
                                                this.cursor = this.limit - r;
                                                break;
                                            }
                                        while (!1);
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_derivational$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if ((this.slice_from$esjava$1('i'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 3:
                                        if ((this.slice_from$esjava$1('e'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 4:
                                        if ((this.slice_from$esjava$1('é'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 5:
                                        if ((this.slice_from$esjava$1('ě'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 6:
                                        if ((this.slice_from$esjava$1('í'), !this.r_palatalise$esjava$0())) return !1;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_deriv_single$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_augmentative$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if ((this.slice_from$esjava$1('i'), !this.r_palatalise$esjava$0())) return !1;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_diminutive$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if ((this.slice_from$esjava$1('e'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 3:
                                        if ((this.slice_from$esjava$1('é'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 4:
                                        if ((this.slice_from$esjava$1('i'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 5:
                                        if ((this.slice_from$esjava$1('í'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('á');
                                        break;
                                    case 7:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 8:
                                        this.slice_from$esjava$1('o');
                                        break;
                                    case 9:
                                        this.slice_from$esjava$1('u');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_comparative$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if ((this.slice_from$esjava$1('ě'), !this.r_palatalise$esjava$0())) return !1;
                                        break;
                                    case 2:
                                        if ((this.slice_from$esjava$1('e'), !this.r_palatalise$esjava$0())) return !1;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_do_aggressive$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0;
                                e = this.limit - this.cursor;
                                do if (!this.r_do_comparative$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - e), (t = this.limit - this.cursor));
                                do if (!this.r_do_diminutive$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_do_augmentative$esjava$0()) break;
                                while (!1);
                                this.cursor = this.limit - n;
                                d: do {
                                    r = this.limit - this.cursor;
                                    do {
                                        if (!this.r_do_derivational$esjava$0()) break;
                                        break d;
                                    } while (!1);
                                    if (((this.cursor = this.limit - r), !this.r_do_deriv_single$esjava$0())) return !1;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), !!this.r_do_case$esjava$0() && !!this.r_do_possessive$esjava$0() && !!this.r_do_aggressive$esjava$0() && ((this.cursor = this.limit_backward), !0));
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('ce', -1, 1), new c('ze', -1, 2), new c('že', -1, 2), new c('ci', -1, 1), new c('čti', -1, 3), new c('šti', -1, 4), new c('zi', -1, 2), new c('či', -1, 1), new c('ži', -1, 2), new c('čté', -1, 3), new c('šté', -1, 4), new c('č', -1, 1), new c('čtě', -1, 3), new c('ště', -1, 4)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('in', -1, 2), new c('ov', -1, 1), new c('ův', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('a', -1, 1), new c('ama', 0, 1), new c('ata', 0, 1), new c('e', -1, 2), new c('ěte', 3, 2), new c('ech', -1, 2), new c('atech', 5, 1), new c('ich', -1, 2), new c('ách', -1, 1), new c('ích', -1, 2), new c('ých', -1, 1), new c('i', -1, 2), new c('mi', 11, 1), new c('ami', 12, 1), new c('emi', 12, 2), new c('ími', 12, 2), new c('ými', 12, 1), new c('ěmi', 12, 2), new c('ěti', 11, 2), new c('ovi', 11, 1), new c('em', -1, 3), new c('ětem', 20, 1), new c('ám', -1, 1), new c('ém', -1, 2), new c('ím', -1, 2), new c('ým', -1, 1), new c('atům', -1, 1), new c('o', -1, 1), new c('iho', 27, 2), new c('ého', 27, 2), new c('ího', 27, 2), new c('es', -1, 2), new c('os', -1, 1), new c('us', -1, 1), new c('at', -1, 1), new c('u', -1, 1), new c('imu', 35, 2), new c('ému', 35, 2), new c('ou', 35, 1), new c('y', -1, 1), new c('aty', 39, 1), new c('á', -1, 1), new c('é', -1, 1), new c('ové', 42, 1), new c('í', -1, 2), new c('ý', -1, 1), new c('ě', -1, 2), new c('ů', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ob', -1, 1), new c('itb', -1, 2), new c('ec', -1, 3), new c('inec', 2, 2), new c('obinec', 3, 1), new c('ovec', 2, 1), new c('ic', -1, 2), new c('enic', 6, 3), new c('och', -1, 1), new c('ásek', -1, 1), new c('nk', -1, 1), new c('isk', -1, 2), new c('ovisk', 11, 1), new c('tk', -1, 1), new c('vk', -1, 1), new c('ník', -1, 1), new c('ovník', 15, 1), new c('ovík', -1, 1), new c('čk', -1, 1), new c('išk', -1, 2), new c('ušk', -1, 1), new c('dl', -1, 1), new c('itel', -1, 2), new c('ul', -1, 1), new c('an', -1, 1), new c('čan', 24, 1), new c('en', -1, 3), new c('in', -1, 2), new c('štin', 27, 1), new c('ovin', 27, 1), new c('teln', -1, 1), new c('árn', -1, 1), new c('írn', -1, 6), new c('oun', -1, 1), new c('loun', 33, 1), new c('ovn', -1, 1), new c('yn', -1, 1), new c('kyn', 36, 1), new c('án', -1, 1), new c('ián', 38, 2), new c('ín', -1, 6), new c('čn', -1, 1), new c('ěn', -1, 5), new c('as', -1, 1), new c('it', -1, 2), new c('ot', -1, 1), new c('ist', -1, 2), new c('ost', -1, 1), new c('nost', 47, 1), new c('out', -1, 1), new c('ovišt', -1, 1), new c('iv', -1, 2), new c('ov', -1, 1), new c('tv', -1, 1), new c('ctv', 53, 1), new c('stv', 53, 1), new c('ovstv', 55, 1), new c('ovtv', 53, 1), new c('ač', -1, 1), new c('áč', -1, 1), new c('oň', -1, 1), new c('ář', -1, 1), new c('kář', 61, 1), new c('ionář', 61, 2), new c('éř', -1, 4), new c('néř', 64, 1), new c('íř', -1, 6), new c('ouš', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('c', -1, 1), new c('k', -1, 1), new c('l', -1, 1), new c('n', -1, 1), new c('t', -1, 1), new c('č', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('isk', -1, 2), new c('ák', -1, 1), new c('izn', -1, 2), new c('ajzn', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('k', -1, 1), new c('ak', 0, 7), new c('ek', 0, 2), new c('anek', 2, 1), new c('enek', 2, 2), new c('inek', 2, 4), new c('onek', 2, 1), new c('unek', 2, 1), new c('ánek', 2, 1), new c('aček', 2, 1), new c('eček', 2, 2), new c('iček', 2, 4), new c('oček', 2, 1), new c('uček', 2, 1), new c('áček', 2, 1), new c('éček', 2, 3), new c('íček', 2, 5), new c('oušek', 2, 1), new c('ik', 0, 4), new c('ank', 0, 1), new c('enk', 0, 1), new c('ink', 0, 1), new c('onk', 0, 1), new c('unk', 0, 1), new c('ánk', 0, 1), new c('énk', 0, 1), new c('ínk', 0, 1), new c('ok', 0, 8), new c('átk', 0, 1), new c('uk', 0, 9), new c('ák', 0, 6), new c('ék', 0, 3), new c('ík', 0, 5), new c('ačk', 0, 1), new c('ečk', 0, 1), new c('ičk', 0, 1), new c('očk', 0, 1), new c('učk', 0, 1), new c('áčk', 0, 1), new c('éčk', 0, 1), new c('íčk', 0, 1), new c('ušk', 0, 1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('ejš', -1, 2), new c('ějš', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 18, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        m = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_p1 = this.limit), (e = this.cursor));
                                var r = this.cursor + 3;
                                if (0 > r || r > this.limit) return !1;
                                ((this.cursor = r), (this.I_x = this.cursor), (this.cursor = e));
                                B: for (;;) {
                                    t = this.cursor;
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 248)) break;
                                        this.cursor = t;
                                        break B;
                                    } while (!1);
                                    if (((this.cursor = t), this.cursor >= this.limit)) return !1;
                                    this.cursor++;
                                }
                                Z: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 248)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                this.I_p1 = this.cursor;
                                do {
                                    if (!(this.I_p1 < this.I_x)) break;
                                    this.I_p1 = this.I_x;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_main_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.in_grouping_b$esjava$3(n.g_s_ending, 97, 229)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_consonant_pair$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                return ((e = this.limit - this.cursor), (t = this.limit - this.cursor), !(this.cursor < this.I_p1) && (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_1)) ? ((this.limit_backward = r), !1) : ((this.bra = this.cursor), (this.limit_backward = r), (this.cursor = this.limit - e), !(this.cursor <= this.limit_backward) && (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0(), !0))));
                            }
                        },
                        {
                            key: 'r_other_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                t = this.limit - this.cursor;
                                do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('st') || ((this.bra = this.cursor), !this.eq_s_b$esjava$1('ig')))) break;
                                    this.slice_del$esjava$0();
                                } while (!1);
                                if (((this.cursor = this.limit - t), (r = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (i = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - r), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return ((this.limit_backward = i), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = i), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        (this.slice_del$esjava$0(), (a = this.limit - this.cursor));
                                        do if (!this.r_consonant_pair$esjava$0()) break;
                                        while (!1);
                                        this.cursor = this.limit - a;
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('løs');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_undouble$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                return ((e = this.limit - this.cursor), !(this.cursor < this.I_p1) && (((this.cursor = this.I_p1), (t = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - e), (this.ket = this.cursor), this.out_grouping_b$esjava$3(n.g_v, 97, 248)) ? ((this.bra = this.cursor), (this.S_ch = this.slice_to$esjava$1(this.S_ch)), (this.limit_backward = t), !!this.eq_s_b$esjava$1(this.S_ch.toString()) && (this.slice_del$esjava$0(), !0)) : ((this.limit_backward = t), !1)));
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_main_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_consonant_pair$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_other_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                do if (!this.r_undouble$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - i), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_x',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_x') ? this._$esjava$I_x : (this._$esjava$I_x = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_x = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'S_ch',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$S_ch') ? this._$esjava$S_ch : (this._$esjava$S_ch = new l());
                            },
                            set: function (e) {
                                this._$esjava$S_ch = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('hed', -1, 1), new c('ethed', 0, 1), new c('ered', -1, 1), new c('e', -1, 1), new c('erede', 3, 1), new c('ende', 3, 1), new c('erende', 5, 1), new c('ene', 3, 1), new c('erne', 3, 1), new c('ere', 3, 1), new c('en', -1, 1), new c('heden', 10, 1), new c('eren', 10, 1), new c('er', -1, 1), new c('heder', 13, 1), new c('erer', 13, 1), new c('s', -1, 2), new c('heds', 16, 1), new c('es', 16, 1), new c('endes', 18, 1), new c('erendes', 19, 1), new c('enes', 18, 1), new c('ernes', 18, 1), new c('eres', 18, 1), new c('ens', 16, 1), new c('hedens', 24, 1), new c('erens', 24, 1), new c('ers', 16, 1), new c('ets', 16, 1), new c('erets', 28, 1), new c('et', -1, 1), new c('eret', 30, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('gd', -1, -1), new c('dt', -1, -1), new c('gt', -1, -1), new c('kt', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ig', -1, 1), new c('lig', 0, 1), new c('elig', 1, 1), new c('els', -1, 1), new c('løst', -1, 2)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128]));
                            }
                        },
                        {
                            key: 'g_s_ending',
                            get: function () {
                                return (delete n.g_s_ending, (n.g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        g = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0;
                                t = this.cursor;
                                G: for (;;) {
                                    r = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('a');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('e');
                                                break;
                                            case 3:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 4:
                                                this.slice_from$esjava$1('o');
                                                break;
                                            case 5:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 6:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = r;
                                    break;
                                }
                                ((this.cursor = t), (i = this.cursor));
                                do {
                                    if (((this.bra = this.cursor), !this.eq_s$esjava$1('y'))) {
                                        this.cursor = i;
                                        break;
                                    }
                                    ((this.ket = this.cursor), this.slice_from$esjava$1('Y'));
                                } while (!1);
                                U: for (;;) {
                                    a = this.cursor;
                                    f: do {
                                        C: for (;;) {
                                            o = this.cursor;
                                            p: do {
                                                if (!this.in_grouping$esjava$3(n.g_v, 97, 232)) break;
                                                this.bra = this.cursor;
                                                F: do {
                                                    s = this.cursor;
                                                    do {
                                                        if (!this.eq_s$esjava$1('i') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 232))) break;
                                                        this.slice_from$esjava$1('I');
                                                        break F;
                                                    } while (!1);
                                                    if (((this.cursor = s), !this.eq_s$esjava$1('y'))) break p;
                                                    ((this.ket = this.cursor), this.slice_from$esjava$1('Y'));
                                                } while (!1);
                                                this.cursor = o;
                                                break C;
                                            } while (!1);
                                            if (((this.cursor = o), this.cursor >= this.limit)) break f;
                                            this.cursor++;
                                        }
                                        continue U;
                                    } while (!1);
                                    this.cursor = a;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                ((this.I_p1 = this.limit), (this.I_p2 = this.limit));
                                B: for (;;) {
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 232)) break;
                                        break B;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                Z: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 232)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                this.I_p1 = this.cursor;
                                do {
                                    if (!(this.I_p1 < 3)) break;
                                    this.I_p1 = 3;
                                } while (!1);
                                C: for (;;) {
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 232)) break;
                                        break C;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                w: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 232)) break;
                                        break w;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                return ((this.I_p2 = this.cursor), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_1)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('y');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 3:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_undouble$esjava$0',
                            value: function () {
                                var e = void 0;
                                return ((e = this.limit - this.cursor), 0 !== this.find_among_b$esjava$1(n.a_2) && ((this.cursor = this.limit - e), (this.ket = this.cursor), !(this.cursor <= this.limit_backward) && (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0(), !0)));
                            }
                        },
                        {
                            key: 'r_e_ending$esjava$0',
                            value: function () {
                                var e = void 0;
                                return ((this.B_e_found = !1), (this.ket = this.cursor), !!this.eq_s_b$esjava$1('e') && ((this.bra = this.cursor), !!this.r_R1$esjava$0() && ((e = this.limit - this.cursor), !!this.out_grouping_b$esjava$3(n.g_v, 97, 232) && ((this.cursor = this.limit - e), this.slice_del$esjava$0(), (this.B_e_found = !0), !!this.r_undouble$esjava$0()))));
                            }
                        },
                        {
                            key: 'r_en_ending$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (!this.r_R1$esjava$0() || ((e = this.limit - this.cursor), !this.out_grouping_b$esjava$3(n.g_v, 97, 232))) return !1;
                                ((this.cursor = this.limit - e), (t = this.limit - this.cursor));
                                do {
                                    if (!this.eq_s_b$esjava$1('gem')) break;
                                    return !1;
                                } while (!1);
                                return ((this.cursor = this.limit - t), this.slice_del$esjava$0(), !!this.r_undouble$esjava$0());
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0;
                                t = this.limit - this.cursor;
                                l: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) break;
                                    switch (((this.bra = this.cursor), e)) {
                                        case 0:
                                            break l;
                                        case 1:
                                            if (!this.r_R1$esjava$0()) break l;
                                            this.slice_from$esjava$1('heid');
                                            break;
                                        case 2:
                                            if (!this.r_en_ending$esjava$0()) break l;
                                            break;
                                        case 3:
                                            if (!this.r_R1$esjava$0() || !this.out_grouping_b$esjava$3(n.g_v_j, 97, 232)) break l;
                                            this.slice_del$esjava$0();
                                    }
                                } while (!1);
                                ((this.cursor = this.limit - t), (r = this.limit - this.cursor));
                                do if (!this.r_e_ending$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                u: do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('heid') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) break;
                                    a = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('c')) break;
                                        break u;
                                    } while (!1);
                                    if (((this.cursor = this.limit - a), this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('en') || ((this.bra = this.cursor), !this.r_en_ending$esjava$0()))) break;
                                } while (!1);
                                ((this.cursor = this.limit - i), (o = this.limit - this.cursor));
                                f: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) break;
                                    switch (((this.bra = this.cursor), e)) {
                                        case 0:
                                            break f;
                                        case 1:
                                            if (!this.r_R2$esjava$0()) break f;
                                            this.slice_del$esjava$0();
                                            _: do {
                                                s = this.limit - this.cursor;
                                                p: do {
                                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ig') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) break;
                                                    l = this.limit - this.cursor;
                                                    do {
                                                        if (!this.eq_s_b$esjava$1('e')) break;
                                                        break p;
                                                    } while (!1);
                                                    ((this.cursor = this.limit - l), this.slice_del$esjava$0());
                                                    break _;
                                                } while (!1);
                                                if (((this.cursor = this.limit - s), !this.r_undouble$esjava$0())) break f;
                                            } while (!1);
                                            break;
                                        case 2:
                                            if (!this.r_R2$esjava$0()) break f;
                                            c = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('e')) break;
                                                break f;
                                            } while (!1);
                                            ((this.cursor = this.limit - c), this.slice_del$esjava$0());
                                            break;
                                        case 3:
                                            if (!this.r_R2$esjava$0() || (this.slice_del$esjava$0(), !this.r_e_ending$esjava$0())) break f;
                                            break;
                                        case 4:
                                            if (!this.r_R2$esjava$0()) break f;
                                            this.slice_del$esjava$0();
                                            break;
                                        case 5:
                                            if (!this.r_R2$esjava$0() || !this.B_e_found) break f;
                                            this.slice_del$esjava$0();
                                    }
                                } while (!1);
                                ((this.cursor = this.limit - o), (u = this.limit - this.cursor));
                                do {
                                    if (!this.out_grouping_b$esjava$3(n.g_v_I, 73, 232) || ((d = this.limit - this.cursor), 0 === this.find_among_b$esjava$1(n.a_5) || !this.out_grouping_b$esjava$3(n.g_v, 97, 232)) || ((this.cursor = this.limit - d), (this.ket = this.cursor), this.cursor <= this.limit_backward)) break;
                                    (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0());
                                } while (!1);
                                return ((this.cursor = this.limit - u), !0);
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0;
                                e = this.cursor;
                                do if (!this.r_prelude$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                do if (!this.r_standard_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (this.cursor = this.limit_backward), (r = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = r), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'B_e_found',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_e_found') ? this._$esjava$B_e_found : (this._$esjava$B_e_found = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_e_found = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 6), new c('á', 0, 1), new c('ä', 0, 1), new c('é', 0, 2), new c('ë', 0, 2), new c('í', 0, 3), new c('ï', 0, 3), new c('ó', 0, 4), new c('ö', 0, 4), new c('ú', 0, 5), new c('ü', 0, 5)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('', -1, 3), new c('I', 0, 2), new c('Y', 0, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('dd', -1, -1), new c('kk', -1, -1), new c('tt', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ene', -1, 2), new c('se', -1, 3), new c('en', -1, 2), new c('heden', 2, 1), new c('s', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('end', -1, 1), new c('ig', -1, 2), new c('ing', -1, 1), new c('lijk', -1, 3), new c('baar', -1, 4), new c('bar', -1, 5)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('aa', -1, -1), new c('ee', -1, -1), new c('oo', -1, -1), new c('uu', -1, -1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]));
                            }
                        },
                        {
                            key: 'g_v_I',
                            get: function () {
                                return (delete n.g_v_I, (n.g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]));
                            }
                        },
                        {
                            key: 'g_v_j',
                            get: function () {
                                return (delete n.g_v_j, (n.g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        E = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                ((this.B_Y_found = !1), (e = this.cursor));
                                do {
                                    if (((this.bra = this.cursor), !this.eq_s$esjava$1("'"))) break;
                                    ((this.ket = this.cursor), this.slice_del$esjava$0());
                                } while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do {
                                    if (((this.bra = this.cursor), !this.eq_s$esjava$1('y'))) break;
                                    ((this.ket = this.cursor), this.slice_from$esjava$1('Y'), (this.B_Y_found = !0));
                                } while (!1);
                                ((this.cursor = t), (r = this.cursor));
                                do
                                    U: for (;;) {
                                        i = this.cursor;
                                        f: do {
                                            C: for (;;) {
                                                a = this.cursor;
                                                do {
                                                    if (!this.in_grouping$esjava$3(n.g_v, 97, 121) || ((this.bra = this.cursor), !this.eq_s$esjava$1('y'))) break;
                                                    ((this.ket = this.cursor), (this.cursor = a));
                                                    break C;
                                                } while (!1);
                                                if (((this.cursor = a), this.cursor >= this.limit)) break f;
                                                this.cursor++;
                                            }
                                            (this.slice_from$esjava$1('Y'), (this.B_Y_found = !0));
                                            continue U;
                                        } while (!1);
                                        this.cursor = i;
                                        break;
                                    }
                                while (!1);
                                return ((this.cursor = r), !0);
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        do {
                                            if (0 === this.find_among$esjava$1(n.a_0)) break;
                                            break c;
                                        } while (!1);
                                        this.cursor = t;
                                        N: for (;;) {
                                            do {
                                                if (!this.in_grouping$esjava$3(n.g_v, 97, 121)) break;
                                                break N;
                                            } while (!1);
                                            if (this.cursor >= this.limit) break l;
                                            this.cursor++;
                                        }
                                        C: for (;;) {
                                            do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 121)) break;
                                                break C;
                                            } while (!1);
                                            if (this.cursor >= this.limit) break l;
                                            this.cursor++;
                                        }
                                    } while (!1);
                                    this.I_p1 = this.cursor;
                                    w: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 121)) break;
                                            break w;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    V: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 121)) break;
                                            break V;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_shortv$esjava$0',
                            value: function () {
                                var e = void 0;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.out_grouping_b$esjava$3(n.g_v_WXY, 89, 121) || !this.in_grouping_b$esjava$3(n.g_v, 97, 121) || !this.out_grouping_b$esjava$3(n.g_v, 97, 121)) break;
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.out_grouping_b$esjava$3(n.g_v, 97, 121) || !this.in_grouping_b$esjava$3(n.g_v, 97, 121) || this.cursor > this.limit_backward)) return !1;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_Step_1a$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                t = this.limit - this.cursor;
                                l: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) {
                                        this.cursor = this.limit - t;
                                        break;
                                    }
                                    switch (((this.bra = this.cursor), e)) {
                                        case 0:
                                            this.cursor = this.limit - t;
                                            break l;
                                        case 1:
                                            this.slice_del$esjava$0();
                                    }
                                } while (!1);
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('ss');
                                        break;
                                    case 2:
                                        c: do {
                                            r = this.limit - this.cursor;
                                            do {
                                                var i = this.cursor - 2;
                                                if (this.limit_backward > i || i > this.limit) break;
                                                ((this.cursor = i), this.slice_from$esjava$1('i'));
                                                break c;
                                            } while (!1);
                                            ((this.cursor = this.limit - r), this.slice_from$esjava$1('ie'));
                                        } while (!1);
                                        break;
                                    case 3:
                                        if (this.cursor <= this.limit_backward) return !1;
                                        this.cursor--;
                                        N: for (;;) {
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_v, 97, 121)) break;
                                                break N;
                                            } while (!1);
                                            if (this.cursor <= this.limit_backward) return !1;
                                            this.cursor--;
                                        }
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_1b$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ee');
                                        break;
                                    case 2:
                                        t = this.limit - this.cursor;
                                        B: for (;;) {
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_v, 97, 121)) break;
                                                break B;
                                            } while (!1);
                                            if (this.cursor <= this.limit_backward) return !1;
                                            this.cursor--;
                                        }
                                        if (((this.cursor = this.limit - t), this.slice_del$esjava$0(), (r = this.limit - this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) return !1;
                                        switch (((this.cursor = this.limit - r), e)) {
                                            case 0:
                                                return !1;
                                            case 1:
                                                var a = this.cursor;
                                                (this.insert$esjava$3(this.cursor, this.cursor, 'e'), (this.cursor = a));
                                                break;
                                            case 2:
                                                if (((this.ket = this.cursor), this.cursor <= this.limit_backward)) return !1;
                                                (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0());
                                                break;
                                            case 3:
                                                if (this.cursor !== this.I_p1 || ((i = this.limit - this.cursor), !this.r_shortv$esjava$0())) return !1;
                                                this.cursor = this.limit - i;
                                                var a = this.cursor;
                                                (this.insert$esjava$3(this.cursor, this.cursor, 'e'), (this.cursor = a));
                                        }
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_1c$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                this.ket = this.cursor;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('y')) break;
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.eq_s_b$esjava$1('Y'))) return !1;
                                } while (!1);
                                if (((this.bra = this.cursor), !this.out_grouping_b$esjava$3(n.g_v, 97, 121))) return !1;
                                t = this.limit - this.cursor;
                                do {
                                    if (this.cursor > this.limit_backward) break;
                                    return !1;
                                } while (!1);
                                return ((this.cursor = this.limit - t), this.slice_from$esjava$1('i'), !0);
                            }
                        },
                        {
                            key: 'r_Step_2$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('tion');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('ence');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('ance');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('able');
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('ent');
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('ize');
                                        break;
                                    case 7:
                                        this.slice_from$esjava$1('ate');
                                        break;
                                    case 8:
                                        this.slice_from$esjava$1('al');
                                        break;
                                    case 9:
                                    case 14:
                                        this.slice_from$esjava$1('ful');
                                        break;
                                    case 10:
                                        this.slice_from$esjava$1('ous');
                                        break;
                                    case 11:
                                        this.slice_from$esjava$1('ive');
                                        break;
                                    case 12:
                                        this.slice_from$esjava$1('ble');
                                        break;
                                    case 13:
                                        if (!this.eq_s_b$esjava$1('l')) return !1;
                                        this.slice_from$esjava$1('og');
                                        break;
                                    case 15:
                                        this.slice_from$esjava$1('less');
                                        break;
                                    case 16:
                                        if (!this.in_grouping_b$esjava$3(n.g_valid_LI, 99, 116)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_3$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('tion');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('ate');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('al');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('ic');
                                        break;
                                    case 5:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 6:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_4$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        l: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('s')) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.eq_s_b$esjava$1('t'))) return !1;
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_5$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_8)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        l: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.r_R2$esjava$0()) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.r_R1$esjava$0())) return !1;
                                            r = this.limit - this.cursor;
                                            do {
                                                if (!this.r_shortv$esjava$0()) break;
                                                return !1;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0() || !this.eq_s_b$esjava$1('l')) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_exception2$esjava$0',
                            value: function () {
                                return ((this.ket = this.cursor), 0 !== this.find_among_b$esjava$1(n.a_9) && ((this.bra = this.cursor), !(this.cursor > this.limit_backward)));
                            }
                        },
                        {
                            key: 'r_exception1$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_10)) || ((this.ket = this.cursor), this.cursor < this.limit))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('ski');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('sky');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('die');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('lie');
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('tie');
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('idl');
                                        break;
                                    case 7:
                                        this.slice_from$esjava$1('gentl');
                                        break;
                                    case 8:
                                        this.slice_from$esjava$1('ugli');
                                        break;
                                    case 9:
                                        this.slice_from$esjava$1('earli');
                                        break;
                                    case 10:
                                        this.slice_from$esjava$1('onli');
                                        break;
                                    case 11:
                                        this.slice_from$esjava$1('singl');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (!this.B_Y_found) return !1;
                                G: for (;;) {
                                    e = this.cursor;
                                    c: do {
                                        Z: for (;;) {
                                            t = this.cursor;
                                            do {
                                                if (((this.bra = this.cursor), !this.eq_s$esjava$1('Y'))) break;
                                                ((this.ket = this.cursor), (this.cursor = t));
                                                break Z;
                                            } while (!1);
                                            if (((this.cursor = t), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        }
                                        this.slice_from$esjava$1('y');
                                        continue G;
                                    } while (!1);
                                    this.cursor = e;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0;
                                l: do {
                                    e = this.cursor;
                                    do {
                                        if (!this.r_exception1$esjava$0()) break;
                                        break l;
                                    } while (!1);
                                    this.cursor = e;
                                    u: do {
                                        t = this.cursor;
                                        do {
                                            var _ = this.cursor + 3;
                                            if (0 > _ || _ > this.limit) break;
                                            this.cursor = _;
                                            break u;
                                        } while (!1);
                                        this.cursor = t;
                                        break l;
                                    } while (!1);
                                    ((this.cursor = e), (n = this.cursor));
                                    do if (!this.r_prelude$esjava$0()) break;
                                    while (!1);
                                    ((this.cursor = n), (r = this.cursor));
                                    do if (!this.r_mark_regions$esjava$0()) break;
                                    while (!1);
                                    ((this.cursor = r), (this.limit_backward = this.cursor), (this.cursor = this.limit), (i = this.limit - this.cursor));
                                    do if (!this.r_Step_1a$esjava$0()) break;
                                    while (!1);
                                    this.cursor = this.limit - i;
                                    F: do {
                                        a = this.limit - this.cursor;
                                        do {
                                            if (!this.r_exception2$esjava$0()) break;
                                            break F;
                                        } while (!1);
                                        ((this.cursor = this.limit - a), (o = this.limit - this.cursor));
                                        do if (!this.r_Step_1b$esjava$0()) break;
                                        while (!1);
                                        ((this.cursor = this.limit - o), (s = this.limit - this.cursor));
                                        do if (!this.r_Step_1c$esjava$0()) break;
                                        while (!1);
                                        ((this.cursor = this.limit - s), (l = this.limit - this.cursor));
                                        do if (!this.r_Step_2$esjava$0()) break;
                                        while (!1);
                                        ((this.cursor = this.limit - l), (c = this.limit - this.cursor));
                                        do if (!this.r_Step_3$esjava$0()) break;
                                        while (!1);
                                        ((this.cursor = this.limit - c), (u = this.limit - this.cursor));
                                        do if (!this.r_Step_4$esjava$0()) break;
                                        while (!1);
                                        ((this.cursor = this.limit - u), (d = this.limit - this.cursor));
                                        do if (!this.r_Step_5$esjava$0()) break;
                                        while (!1);
                                        this.cursor = this.limit - d;
                                    } while (!1);
                                    ((this.cursor = this.limit_backward), (f = this.cursor));
                                    do if (!this.r_postlude$esjava$0()) break;
                                    while (!1);
                                    this.cursor = f;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'B_Y_found',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_Y_found') ? this._$esjava$B_Y_found : (this._$esjava$B_Y_found = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_Y_found = e;
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('arsen', -1, -1), new c('commun', -1, -1), new c('gener', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c("'", -1, 1), new c("'s'", 0, 1), new c("'s", -1, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ied', -1, 2), new c('s', -1, 3), new c('ies', 1, 2), new c('sses', 1, 1), new c('ss', 1, -1), new c('us', 1, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('', -1, 3), new c('bb', 0, 2), new c('dd', 0, 2), new c('ff', 0, 2), new c('gg', 0, 2), new c('bl', 0, 1), new c('mm', 0, 2), new c('nn', 0, 2), new c('pp', 0, 2), new c('rr', 0, 2), new c('at', 0, 1), new c('tt', 0, 2), new c('iz', 0, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('ed', -1, 2), new c('eed', 0, 1), new c('ing', -1, 2), new c('edly', -1, 2), new c('eedly', 3, 1), new c('ingly', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('anci', -1, 3), new c('enci', -1, 2), new c('ogi', -1, 13), new c('li', -1, 16), new c('bli', 3, 12), new c('abli', 4, 4), new c('alli', 3, 8), new c('fulli', 3, 14), new c('lessli', 3, 15), new c('ousli', 3, 10), new c('entli', 3, 5), new c('aliti', -1, 8), new c('biliti', -1, 12), new c('iviti', -1, 11), new c('tional', -1, 1), new c('ational', 14, 7), new c('alism', -1, 8), new c('ation', -1, 7), new c('ization', 17, 6), new c('izer', -1, 6), new c('ator', -1, 7), new c('iveness', -1, 11), new c('fulness', -1, 9), new c('ousness', -1, 10)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('icate', -1, 4), new c('ative', -1, 6), new c('alize', -1, 3), new c('iciti', -1, 4), new c('ical', -1, 4), new c('tional', -1, 1), new c('ational', 5, 2), new c('ful', -1, 5), new c('ness', -1, 5)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('ic', -1, 1), new c('ance', -1, 1), new c('ence', -1, 1), new c('able', -1, 1), new c('ible', -1, 1), new c('ate', -1, 1), new c('ive', -1, 1), new c('ize', -1, 1), new c('iti', -1, 1), new c('al', -1, 1), new c('ism', -1, 1), new c('ion', -1, 2), new c('er', -1, 1), new c('ous', -1, 1), new c('ant', -1, 1), new c('ent', -1, 1), new c('ment', 15, 1), new c('ement', 16, 1)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('e', -1, 1), new c('l', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('succeed', -1, -1), new c('proceed', -1, -1), new c('exceed', -1, -1), new c('canning', -1, -1), new c('inning', -1, -1), new c('earring', -1, -1), new c('herring', -1, -1), new c('outing', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_10',
                            get: function () {
                                return (delete n.a_10, (n.a_10 = [new c('andes', -1, -1), new c('atlas', -1, -1), new c('bias', -1, -1), new c('cosmos', -1, -1), new c('dying', -1, 3), new c('early', -1, 9), new c('gently', -1, 7), new c('howe', -1, -1), new c('idly', -1, 6), new c('lying', -1, 4), new c('news', -1, -1), new c('only', -1, 10), new c('singly', -1, 11), new c('skies', -1, 2), new c('skis', -1, 1), new c('sky', -1, -1), new c('tying', -1, 5), new c('ugly', -1, 8)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1]));
                            }
                        },
                        {
                            key: 'g_v_WXY',
                            get: function () {
                                return (delete n.g_v_WXY, (n.g_v_WXY = [1, 17, 65, 208, 1]));
                            }
                        },
                        {
                            key: 'g_valid_LI',
                            get: function () {
                                return (delete n.g_valid_LI, (n.g_valid_LI = [55, 141, 2]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        b = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_p1 = this.limit), (this.I_p2 = this.limit));
                                B: for (;;) {
                                    e = this.cursor;
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_V1, 97, 246)) break;
                                        this.cursor = e;
                                        break B;
                                    } while (!1);
                                    if (((this.cursor = e), this.cursor >= this.limit)) return !1;
                                    this.cursor++;
                                }
                                Z: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_V1, 97, 246)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                this.I_p1 = this.cursor;
                                H: for (;;) {
                                    t = this.cursor;
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_V1, 97, 246)) break;
                                        this.cursor = t;
                                        break H;
                                    } while (!1);
                                    if (((this.cursor = t), this.cursor >= this.limit)) return !1;
                                    this.cursor++;
                                }
                                Y: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_V1, 97, 246)) break;
                                        break Y;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                return ((this.I_p2 = this.cursor), !0);
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_particle_etc$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.in_grouping_b$esjava$3(n.g_particle_end, 97, 246)) return !1;
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                }
                                return (this.slice_del$esjava$0(), !0);
                            }
                        },
                        {
                            key: 'r_possessive$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        i = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('k')) break;
                                            return !1;
                                        } while (!1);
                                        ((this.cursor = this.limit - i), this.slice_del$esjava$0());
                                        break;
                                    case 2:
                                        if ((this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('kse'))) return !1;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ksi'));
                                        break;
                                    case 3:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 4:
                                        if (0 === this.find_among_b$esjava$1(n.a_1)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 5:
                                        if (0 === this.find_among_b$esjava$1(n.a_2)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 6:
                                        if (0 === this.find_among_b$esjava$1(n.a_3)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_LONG$esjava$0',
                            value: function () {
                                return 0 !== this.find_among_b$esjava$1(n.a_5);
                            }
                        },
                        {
                            key: 'r_VI$esjava$0',
                            value: function () {
                                return !!this.eq_s_b$esjava$1('i') && !!this.in_grouping_b$esjava$3(n.g_V2, 97, 246);
                            }
                        },
                        {
                            key: 'r_case_ending$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(this.a_6)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.eq_s_b$esjava$1('a')) return !1;
                                        break;
                                    case 2:
                                    case 9:
                                        if (!this.eq_s_b$esjava$1('e')) return !1;
                                        break;
                                    case 3:
                                        if (!this.eq_s_b$esjava$1('i')) return !1;
                                        break;
                                    case 4:
                                        if (!this.eq_s_b$esjava$1('o')) return !1;
                                        break;
                                    case 5:
                                        if (!this.eq_s_b$esjava$1('ä')) return !1;
                                        break;
                                    case 6:
                                        if (!this.eq_s_b$esjava$1('ö')) return !1;
                                        break;
                                    case 7:
                                        i = this.limit - this.cursor;
                                        l: do {
                                            a = this.limit - this.cursor;
                                            c: do {
                                                o = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_LONG$esjava$0()) break;
                                                    break c;
                                                } while (!1);
                                                if (((this.cursor = this.limit - o), !this.eq_s_b$esjava$1('ie'))) {
                                                    this.cursor = this.limit - i;
                                                    break l;
                                                }
                                            } while (!1);
                                            if (((this.cursor = this.limit - a), this.cursor <= this.limit_backward)) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            (this.cursor--, (this.bra = this.cursor));
                                        } while (!1);
                                        break;
                                    case 8:
                                        if (!this.in_grouping_b$esjava$3(n.g_V1, 97, 246) || !this.out_grouping_b$esjava$3(n.g_V1, 97, 246)) return !1;
                                }
                                return (this.slice_del$esjava$0(), (this.B_ending_removed = !0), !0);
                            }
                        },
                        {
                            key: 'r_other_endings$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p2)) return !1;
                                if (((this.cursor = this.I_p2), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        i = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('po')) break;
                                            return !1;
                                        } while (!1);
                                        this.cursor = this.limit - i;
                                }
                                return (this.slice_del$esjava$0(), !0);
                            }
                        },
                        {
                            key: 'r_i_plural$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                return ((e = this.limit - this.cursor), !(this.cursor < this.I_p1) && (((this.cursor = this.I_p1), (t = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - e), (this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_8)) ? ((this.limit_backward = t), !1) : ((this.bra = this.cursor), (this.limit_backward = t), this.slice_del$esjava$0(), !0)));
                            }
                        },
                        {
                            key: 'r_t_plural$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), !this.eq_s_b$esjava$1('t') || ((this.bra = this.cursor), (i = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_V1, 97, 246)))) return ((this.limit_backward = r), !1);
                                if (((this.cursor = this.limit - i), this.slice_del$esjava$0(), (this.limit_backward = r), (a = this.limit - this.cursor), this.cursor < this.I_p2)) return !1;
                                if (((this.cursor = this.I_p2), (o = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - a), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_9)))) return ((this.limit_backward = o), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = o), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        s = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('po')) break;
                                            return !1;
                                        } while (!1);
                                        this.cursor = this.limit - s;
                                }
                                return (this.slice_del$esjava$0(), !0);
                            }
                        },
                        {
                            key: 'r_tidy$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0;
                                if (((e = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                ((this.cursor = this.I_p1), (t = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - e), (r = this.limit - this.cursor));
                                do {
                                    if (((i = this.limit - this.cursor), !this.r_LONG$esjava$0() || ((this.cursor = this.limit - i), (this.ket = this.cursor), this.cursor <= this.limit_backward))) break;
                                    (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0());
                                } while (!1);
                                ((this.cursor = this.limit - r), (a = this.limit - this.cursor));
                                do {
                                    if (((this.ket = this.cursor), !this.in_grouping_b$esjava$3(n.g_AEI, 97, 228) || ((this.bra = this.cursor), !this.out_grouping_b$esjava$3(n.g_V1, 97, 246)))) break;
                                    this.slice_del$esjava$0();
                                } while (!1);
                                ((this.cursor = this.limit - a), (o = this.limit - this.cursor));
                                u: do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('j'))) break;
                                    this.bra = this.cursor;
                                    d: do {
                                        s = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('o')) break;
                                            break d;
                                        } while (!1);
                                        if (((this.cursor = this.limit - s), !this.eq_s_b$esjava$1('u'))) break u;
                                    } while (!1);
                                    this.slice_del$esjava$0();
                                } while (!1);
                                ((this.cursor = this.limit - o), (l = this.limit - this.cursor));
                                do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('o') || ((this.bra = this.cursor), !this.eq_s_b$esjava$1('j')))) break;
                                    this.slice_del$esjava$0();
                                } while (!1);
                                ((this.cursor = this.limit - l), (this.limit_backward = t));
                                Y: for (;;) {
                                    c = this.limit - this.cursor;
                                    do {
                                        if (!this.out_grouping_b$esjava$3(n.g_V1, 97, 246)) break;
                                        this.cursor = this.limit - c;
                                        break Y;
                                    } while (!1);
                                    if (((this.cursor = this.limit - c), this.cursor <= this.limit_backward)) return !1;
                                    this.cursor--;
                                }
                                return ((this.ket = this.cursor), !(this.cursor <= this.limit_backward) && (this.cursor--, (this.bra = this.cursor), (this.S_x = this.slice_to$esjava$1(this.S_x)), !!this.eq_s_b$esjava$1(this.S_x.toString()) && (this.slice_del$esjava$0(), !0)));
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.B_ending_removed = !1), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_particle_etc$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_possessive$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_case_ending$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                do if (!this.r_other_endings$esjava$0()) break;
                                while (!1);
                                this.cursor = this.limit - i;
                                _: do {
                                    a = this.limit - this.cursor;
                                    do {
                                        if (!this.B_ending_removed) break;
                                        o = this.limit - this.cursor;
                                        do if (!this.r_i_plural$esjava$0()) break;
                                        while (!1);
                                        this.cursor = this.limit - o;
                                        break _;
                                    } while (!1);
                                    ((this.cursor = this.limit - a), (s = this.limit - this.cursor));
                                    do if (!this.r_t_plural$esjava$0()) break;
                                    while (!1);
                                    this.cursor = this.limit - s;
                                } while (!1);
                                l = this.limit - this.cursor;
                                do if (!this.r_tidy$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - l), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'r_LONG',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.r_LONG$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'r_LONG', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'r_VI',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.r_VI$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'r_VI', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'es6bridge',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$es6bridge') ? this._$esjava$es6bridge : (this._$esjava$es6bridge = this);
                            },
                            set: function (e) {
                                this._$esjava$es6bridge = e;
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$a_6') ? this._$esjava$a_6 : (this._$esjava$a_6 = [new c('a', -1, 8), new c('lla', 0, -1), new c('na', 0, -1), new c('ssa', 0, -1), new c('ta', 0, -1), new c('lta', 4, -1), new c('sta', 4, -1), new c('tta', 4, 9), new c('lle', -1, -1), new c('ine', -1, -1), new c('ksi', -1, -1), new c('n', -1, 7), new c('han', 11, 1), new c('den', 11, -1, 'r_VI', this.es6bridge), new c('seen', 11, -1, 'r_LONG', this.es6bridge), new c('hen', 11, 2), new c('tten', 11, -1, 'r_VI', this.es6bridge), new c('hin', 11, 3), new c('siin', 11, -1, 'r_VI', this.es6bridge), new c('hon', 11, 4), new c('hän', 11, 5), new c('hön', 11, 6), new c('ä', -1, 8), new c('llä', 22, -1), new c('nä', 22, -1), new c('ssä', 22, -1), new c('tä', 22, -1), new c('ltä', 26, -1), new c('stä', 26, -1), new c('ttä', 26, 9)]);
                            },
                            set: function (e) {
                                this._$esjava$a_6 = e;
                            }
                        },
                        {
                            key: 'B_ending_removed',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_ending_removed') ? this._$esjava$B_ending_removed : (this._$esjava$B_ending_removed = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_ending_removed = e;
                            }
                        },
                        {
                            key: 'S_x',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$S_x') ? this._$esjava$S_x : (this._$esjava$S_x = new l());
                            },
                            set: function (e) {
                                this._$esjava$S_x = e;
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('pa', -1, 1), new c('sti', -1, 2), new c('kaan', -1, 1), new c('han', -1, 1), new c('kin', -1, 1), new c('hän', -1, 1), new c('kään', -1, 1), new c('ko', -1, 1), new c('pä', -1, 1), new c('kö', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('lla', -1, -1), new c('na', -1, -1), new c('ssa', -1, -1), new c('ta', -1, -1), new c('lta', 3, -1), new c('sta', 3, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('llä', -1, -1), new c('nä', -1, -1), new c('ssä', -1, -1), new c('tä', -1, -1), new c('ltä', 3, -1), new c('stä', 3, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('lle', -1, -1), new c('ine', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('nsa', -1, 3), new c('mme', -1, 3), new c('nne', -1, 3), new c('ni', -1, 2), new c('si', -1, 1), new c('an', -1, 4), new c('en', -1, 6), new c('än', -1, 5), new c('nsä', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('aa', -1, -1), new c('ee', -1, -1), new c('ii', -1, -1), new c('oo', -1, -1), new c('uu', -1, -1), new c('ää', -1, -1), new c('öö', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('eja', -1, -1), new c('mma', -1, 1), new c('imma', 1, -1), new c('mpa', -1, 1), new c('impa', 3, -1), new c('mmi', -1, 1), new c('immi', 5, -1), new c('mpi', -1, 1), new c('impi', 7, -1), new c('ejä', -1, -1), new c('mmä', -1, 1), new c('immä', 10, -1), new c('mpä', -1, 1), new c('impä', 12, -1)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('i', -1, -1), new c('j', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('mma', -1, 1), new c('imma', 0, -1)]));
                            }
                        },
                        {
                            key: 'g_AEI',
                            get: function () {
                                return (delete n.g_AEI, (n.g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]));
                            }
                        },
                        {
                            key: 'g_V1',
                            get: function () {
                                return (delete n.g_V1, (n.g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32]));
                            }
                        },
                        {
                            key: 'g_V2',
                            get: function () {
                                return (delete n.g_V2, (n.g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32]));
                            }
                        },
                        {
                            key: 'g_particle_end',
                            get: function () {
                                return (delete n.g_particle_end, (n.g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        y = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                G: for (;;) {
                                    e = this.cursor;
                                    c: do {
                                        Z: for (;;) {
                                            t = this.cursor;
                                            d: do {
                                                f: do {
                                                    r = this.cursor;
                                                    _: do {
                                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 251)) break;
                                                        this.bra = this.cursor;
                                                        p: do {
                                                            i = this.cursor;
                                                            do {
                                                                if (!this.eq_s$esjava$1('u') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 251))) break;
                                                                this.slice_from$esjava$1('U');
                                                                break p;
                                                            } while (!1);
                                                            this.cursor = i;
                                                            do {
                                                                if (!this.eq_s$esjava$1('i') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 251))) break;
                                                                this.slice_from$esjava$1('I');
                                                                break p;
                                                            } while (!1);
                                                            if (((this.cursor = i), !this.eq_s$esjava$1('y'))) break _;
                                                            ((this.ket = this.cursor), this.slice_from$esjava$1('Y'));
                                                        } while (!1);
                                                        break f;
                                                    } while (!1);
                                                    this.cursor = r;
                                                    do {
                                                        if (((this.bra = this.cursor), !this.eq_s$esjava$1('y') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 251)))) break;
                                                        this.slice_from$esjava$1('Y');
                                                        break f;
                                                    } while (!1);
                                                    if (((this.cursor = r), !this.eq_s$esjava$1('q') || ((this.bra = this.cursor), !this.eq_s$esjava$1('u')))) break d;
                                                    ((this.ket = this.cursor), this.slice_from$esjava$1('U'));
                                                } while (!1);
                                                this.cursor = t;
                                                break Z;
                                            } while (!1);
                                            if (((this.cursor = t), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = e;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 251) || !this.in_grouping$esjava$3(n.g_v, 97, 251) || this.cursor >= this.limit) break;
                                            this.cursor++;
                                            break c;
                                        } while (!1);
                                        this.cursor = t;
                                        do {
                                            if (0 === this.find_among$esjava$1(n.a_0)) break;
                                            break c;
                                        } while (!1);
                                        if (((this.cursor = t), this.cursor >= this.limit)) break l;
                                        this.cursor++;
                                        H: for (;;) {
                                            do {
                                                if (!this.in_grouping$esjava$3(n.g_v, 97, 251)) break;
                                                break H;
                                            } while (!1);
                                            if (this.cursor >= this.limit) break l;
                                            this.cursor++;
                                        }
                                    } while (!1);
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (r = this.cursor));
                                p: do {
                                    w: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 251)) break;
                                            break w;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    V: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 251)) break;
                                            break V;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    P: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 251)) break;
                                            break P;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    W: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 251)) break;
                                            break W;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = r), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_1)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 3:
                                                this.slice_from$esjava$1('y');
                                                break;
                                            case 4:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ic'))) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                            this.bra = this.cursor;
                                            c: do {
                                                r = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_R2$esjava$0()) break;
                                                    this.slice_del$esjava$0();
                                                    break c;
                                                } while (!1);
                                                ((this.cursor = this.limit - r), this.slice_from$esjava$1('iqU'));
                                            } while (!1);
                                        } while (!1);
                                        break;
                                    case 3:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('log');
                                        break;
                                    case 4:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('u');
                                        break;
                                    case 5:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ent');
                                        break;
                                    case 6:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (i = this.limit - this.cursor));
                                        d: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - i;
                                                    break d;
                                                case 1:
                                                    if (!this.r_R2$esjava$0() || (this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('at')) || ((this.bra = this.cursor), !this.r_R2$esjava$0())) {
                                                        this.cursor = this.limit - i;
                                                        break d;
                                                    }
                                                    this.slice_del$esjava$0();
                                                    break;
                                                case 2:
                                                    f: do {
                                                        a = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_R2$esjava$0()) break;
                                                            this.slice_del$esjava$0();
                                                            break f;
                                                        } while (!1);
                                                        if (((this.cursor = this.limit - a), !this.r_R1$esjava$0())) {
                                                            this.cursor = this.limit - i;
                                                            break d;
                                                        }
                                                        this.slice_from$esjava$1('eux');
                                                    } while (!1);
                                                    break;
                                                case 3:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - i;
                                                        break d;
                                                    }
                                                    this.slice_del$esjava$0();
                                                    break;
                                                case 4:
                                                    if (!this.r_RV$esjava$0()) {
                                                        this.cursor = this.limit - i;
                                                        break d;
                                                    }
                                                    this.slice_from$esjava$1('i');
                                            }
                                        } while (!1);
                                        break;
                                    case 7:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (o = this.limit - this.cursor));
                                        p: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) {
                                                this.cursor = this.limit - o;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - o;
                                                    break p;
                                                case 1:
                                                    F: do {
                                                        s = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_R2$esjava$0()) break;
                                                            this.slice_del$esjava$0();
                                                            break F;
                                                        } while (!1);
                                                        ((this.cursor = this.limit - s), this.slice_from$esjava$1('abl'));
                                                    } while (!1);
                                                    break;
                                                case 2:
                                                    m: do {
                                                        l = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_R2$esjava$0()) break;
                                                            this.slice_del$esjava$0();
                                                            break m;
                                                        } while (!1);
                                                        ((this.cursor = this.limit - l), this.slice_from$esjava$1('iqU'));
                                                    } while (!1);
                                                    break;
                                                case 3:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - o;
                                                        break p;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 8:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (c = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()) || (this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('ic')))) {
                                                this.cursor = this.limit - c;
                                                break;
                                            }
                                            this.bra = this.cursor;
                                            K: do {
                                                u = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_R2$esjava$0()) break;
                                                    this.slice_del$esjava$0();
                                                    break K;
                                                } while (!1);
                                                ((this.cursor = this.limit - u), this.slice_from$esjava$1('iqU'));
                                            } while (!1);
                                        } while (!1);
                                        break;
                                    case 9:
                                        this.slice_from$esjava$1('eau');
                                        break;
                                    case 10:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_from$esjava$1('al');
                                        break;
                                    case 11:
                                        g: do {
                                            d = this.limit - this.cursor;
                                            do {
                                                if (!this.r_R2$esjava$0()) break;
                                                this.slice_del$esjava$0();
                                                break g;
                                            } while (!1);
                                            if (((this.cursor = this.limit - d), !this.r_R1$esjava$0())) return !1;
                                            this.slice_from$esjava$1('eux');
                                        } while (!1);
                                        break;
                                    case 12:
                                        if (!this.r_R1$esjava$0() || !this.out_grouping_b$esjava$3(n.g_v, 97, 251)) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 13:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        return (this.slice_from$esjava$1('ant'), !1);
                                    case 14:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        return (this.slice_from$esjava$1('ent'), !1);
                                    case 15:
                                        if (((f = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_v, 97, 251) || !this.r_RV$esjava$0())) return !1;
                                        return ((this.cursor = this.limit - f), this.slice_del$esjava$0(), !1);
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_i_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = r), !1);
                                    case 1:
                                        if (!this.out_grouping_b$esjava$3(n.g_v, 97, 251)) return ((this.limit_backward = r), !1);
                                        this.slice_del$esjava$0();
                                }
                                return ((this.limit_backward = r), !0);
                            }
                        },
                        {
                            key: 'r_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = r), !1);
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return ((this.limit_backward = r), !1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        (this.slice_del$esjava$0(), (i = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('e'))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        } while (!1);
                                }
                                return ((this.limit_backward = r), !0);
                            }
                        },
                        {
                            key: 'r_residual_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                t = this.limit - this.cursor;
                                do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('s') || ((this.bra = this.cursor), (r = this.limit - this.cursor), !this.out_grouping_b$esjava$3(n.g_keep_with_s, 97, 232)))) {
                                        this.cursor = this.limit - t;
                                        break;
                                    }
                                    ((this.cursor = this.limit - r), this.slice_del$esjava$0());
                                } while (!1);
                                if (((i = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (a = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - i), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return ((this.limit_backward = a), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = a), !1);
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return ((this.limit_backward = a), !1);
                                        c: do {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('s')) break;
                                                break c;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), !this.eq_s_b$esjava$1('t'))) return ((this.limit_backward = a), !1);
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('i');
                                        break;
                                    case 3:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 4:
                                        if (!this.eq_s_b$esjava$1('gu')) return ((this.limit_backward = a), !1);
                                        this.slice_del$esjava$0();
                                }
                                return ((this.limit_backward = a), !0);
                            }
                        },
                        {
                            key: 'r_un_double$esjava$0',
                            value: function () {
                                var e = void 0;
                                return ((e = this.limit - this.cursor), 0 !== this.find_among_b$esjava$1(n.a_8) && ((this.cursor = this.limit - e), (this.ket = this.cursor), !(this.cursor <= this.limit_backward) && (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0(), !0)));
                            }
                        },
                        {
                            key: 'r_un_accent$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = 1;
                                G: for (;;) {
                                    do {
                                        if (!this.out_grouping_b$esjava$3(n.g_v, 97, 251)) break;
                                        t--;
                                        continue G;
                                    } while (!1);
                                    break;
                                }
                                if (t > 0) return !1;
                                this.ket = this.cursor;
                                u: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('é')) break;
                                        break u;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.eq_s_b$esjava$1('è'))) return !1;
                                } while (!1);
                                return ((this.bra = this.cursor), this.slice_from$esjava$1('e'), !0);
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0;
                                e = this.cursor;
                                do if (!this.r_prelude$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                u: do
                                    d: do {
                                        r = this.limit - this.cursor;
                                        f: do {
                                            i = this.limit - this.cursor;
                                            _: do {
                                                a = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_standard_suffix$esjava$0()) break;
                                                    break _;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.r_i_verb_suffix$esjava$0()) break;
                                                    break _;
                                                } while (!1);
                                                if (((this.cursor = this.limit - a), !this.r_verb_suffix$esjava$0())) break f;
                                            } while (!1);
                                            ((this.cursor = this.limit - i), (o = this.limit - this.cursor));
                                            z: do {
                                                this.ket = this.cursor;
                                                m: do {
                                                    s = this.limit - this.cursor;
                                                    do {
                                                        if (!this.eq_s_b$esjava$1('Y')) break;
                                                        ((this.bra = this.cursor), this.slice_from$esjava$1('i'));
                                                        break m;
                                                    } while (!1);
                                                    if (((this.cursor = this.limit - s), !this.eq_s_b$esjava$1('ç'))) {
                                                        this.cursor = this.limit - o;
                                                        break z;
                                                    }
                                                    ((this.bra = this.cursor), this.slice_from$esjava$1('c'));
                                                } while (!1);
                                            } while (!1);
                                            break d;
                                        } while (!1);
                                        if (((this.cursor = this.limit - r), !this.r_residual_suffix$esjava$0())) break u;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - n), (l = this.limit - this.cursor));
                                do if (!this.r_un_double$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - l), (c = this.limit - this.cursor));
                                do if (!this.r_un_accent$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - c), (this.cursor = this.limit_backward), (u = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = u), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('col', -1, -1), new c('par', -1, -1), new c('tap', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('', -1, 4), new c('I', 0, 1), new c('U', 0, 2), new c('Y', 0, 3)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('iqU', -1, 3), new c('abl', -1, 3), new c('Ièr', -1, 4), new c('ièr', -1, 4), new c('eus', -1, 2), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ic', -1, 2), new c('abil', -1, 1), new c('iv', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('iqUe', -1, 1), new c('atrice', -1, 2), new c('ance', -1, 1), new c('ence', -1, 5), new c('logie', -1, 3), new c('able', -1, 1), new c('isme', -1, 1), new c('euse', -1, 11), new c('iste', -1, 1), new c('ive', -1, 8), new c('if', -1, 8), new c('usion', -1, 4), new c('ation', -1, 2), new c('ution', -1, 4), new c('ateur', -1, 2), new c('iqUes', -1, 1), new c('atrices', -1, 2), new c('ances', -1, 1), new c('ences', -1, 5), new c('logies', -1, 3), new c('ables', -1, 1), new c('ismes', -1, 1), new c('euses', -1, 11), new c('istes', -1, 1), new c('ives', -1, 8), new c('ifs', -1, 8), new c('usions', -1, 4), new c('ations', -1, 2), new c('utions', -1, 4), new c('ateurs', -1, 2), new c('ments', -1, 15), new c('ements', 30, 6), new c('issements', 31, 12), new c('ités', -1, 7), new c('ment', -1, 15), new c('ement', 34, 6), new c('issement', 35, 12), new c('amment', 34, 13), new c('emment', 34, 14), new c('aux', -1, 10), new c('eaux', 39, 9), new c('eux', -1, 1), new c('ité', -1, 7)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('ira', -1, 1), new c('ie', -1, 1), new c('isse', -1, 1), new c('issante', -1, 1), new c('i', -1, 1), new c('irai', 4, 1), new c('ir', -1, 1), new c('iras', -1, 1), new c('ies', -1, 1), new c('îmes', -1, 1), new c('isses', -1, 1), new c('issantes', -1, 1), new c('îtes', -1, 1), new c('is', -1, 1), new c('irais', 13, 1), new c('issais', 13, 1), new c('irions', -1, 1), new c('issions', -1, 1), new c('irons', -1, 1), new c('issons', -1, 1), new c('issants', -1, 1), new c('it', -1, 1), new c('irait', 21, 1), new c('issait', 21, 1), new c('issant', -1, 1), new c('iraIent', -1, 1), new c('issaIent', -1, 1), new c('irent', -1, 1), new c('issent', -1, 1), new c('iront', -1, 1), new c('ît', -1, 1), new c('iriez', -1, 1), new c('issiez', -1, 1), new c('irez', -1, 1), new c('issez', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('a', -1, 3), new c('era', 0, 2), new c('asse', -1, 3), new c('ante', -1, 3), new c('ée', -1, 2), new c('ai', -1, 3), new c('erai', 5, 2), new c('er', -1, 2), new c('as', -1, 3), new c('eras', 8, 2), new c('âmes', -1, 3), new c('asses', -1, 3), new c('antes', -1, 3), new c('âtes', -1, 3), new c('ées', -1, 2), new c('ais', -1, 3), new c('erais', 15, 2), new c('ions', -1, 1), new c('erions', 17, 2), new c('assions', 17, 3), new c('erons', -1, 2), new c('ants', -1, 3), new c('és', -1, 2), new c('ait', -1, 3), new c('erait', 23, 2), new c('ant', -1, 3), new c('aIent', -1, 3), new c('eraIent', 26, 2), new c('èrent', -1, 2), new c('assent', -1, 3), new c('eront', -1, 2), new c('ât', -1, 3), new c('ez', -1, 2), new c('iez', 32, 2), new c('eriez', 33, 2), new c('assiez', 33, 3), new c('erez', 32, 2), new c('é', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('e', -1, 3), new c('Ière', 0, 2), new c('ière', 0, 2), new c('ion', -1, 1), new c('Ier', -1, 2), new c('ier', -1, 2), new c('ë', -1, 4)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('ell', -1, -1), new c('eill', -1, -1), new c('enn', -1, -1), new c('onn', -1, -1), new c('ett', -1, -1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103, 8, 5]));
                            }
                        },
                        {
                            key: 'g_keep_with_s',
                            get: function () {
                                return (delete n.g_keep_with_s, (n.g_keep_with_s = [1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        O = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                e = this.cursor;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        u: do {
                                            r = this.cursor;
                                            do {
                                                if (((this.bra = this.cursor), !this.eq_s$esjava$1('ß'))) break;
                                                ((this.ket = this.cursor), this.slice_from$esjava$1('ss'));
                                                break u;
                                            } while (!1);
                                            if (((this.cursor = r), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        } while (!1);
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                this.cursor = e;
                                q: for (;;) {
                                    i = this.cursor;
                                    _: do {
                                        Y: for (;;) {
                                            a = this.cursor;
                                            F: do {
                                                if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                                this.bra = this.cursor;
                                                z: do {
                                                    o = this.cursor;
                                                    do {
                                                        if (!this.eq_s$esjava$1('u') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 252))) break;
                                                        this.slice_from$esjava$1('U');
                                                        break z;
                                                    } while (!1);
                                                    if (((this.cursor = o), !this.eq_s$esjava$1('y') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 252)))) break F;
                                                    this.slice_from$esjava$1('Y');
                                                } while (!1);
                                                this.cursor = a;
                                                break Y;
                                            } while (!1);
                                            if (((this.cursor = a), this.cursor >= this.limit)) break _;
                                            this.cursor++;
                                        }
                                        continue q;
                                    } while (!1);
                                    this.cursor = i;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0;
                                ((this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                var t = this.cursor + 3;
                                if (0 > t || t > this.limit) return !1;
                                ((this.cursor = t), (this.I_x = this.cursor), (this.cursor = e));
                                B: for (;;) {
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                        break B;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                Z: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                this.I_p1 = this.cursor;
                                do {
                                    if (!(this.I_p1 < this.I_x)) break;
                                    this.I_p1 = this.I_x;
                                } while (!1);
                                C: for (;;) {
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                        break C;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                w: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                        break w;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                return ((this.I_p2 = this.cursor), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('y');
                                                break;
                                            case 2:
                                            case 5:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 3:
                                                this.slice_from$esjava$1('a');
                                                break;
                                            case 4:
                                                this.slice_from$esjava$1('o');
                                                break;
                                            case 6:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0;
                                t = this.limit - this.cursor;
                                l: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) break;
                                    switch (e) {
                                        case 0:
                                            break l;
                                        case 1:
                                            this.slice_del$esjava$0();
                                            break;
                                        case 2:
                                            (this.slice_del$esjava$0(), (r = this.limit - this.cursor));
                                            do {
                                                if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('s') || ((this.bra = this.cursor), !this.eq_s_b$esjava$1('nis')))) {
                                                    this.cursor = this.limit - r;
                                                    break;
                                                }
                                                this.slice_del$esjava$0();
                                            } while (!1);
                                            break;
                                        case 3:
                                            if (!this.in_grouping_b$esjava$3(n.g_s_ending, 98, 116)) break l;
                                            this.slice_del$esjava$0();
                                    }
                                } while (!1);
                                ((this.cursor = this.limit - t), (i = this.limit - this.cursor));
                                u: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) break;
                                    switch (e) {
                                        case 0:
                                            break u;
                                        case 1:
                                            this.slice_del$esjava$0();
                                            break;
                                        case 2:
                                            if (!this.in_grouping_b$esjava$3(n.g_st_ending, 98, 116)) break u;
                                            var f = this.cursor - 3;
                                            if (this.limit_backward > f || f > this.limit) break u;
                                            ((this.cursor = f), this.slice_del$esjava$0());
                                    }
                                } while (!1);
                                ((this.cursor = this.limit - i), (a = this.limit - this.cursor));
                                d: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) break;
                                    switch (e) {
                                        case 0:
                                            break d;
                                        case 1:
                                            (this.slice_del$esjava$0(), (o = this.limit - this.cursor));
                                            f: do {
                                                if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ig'))) {
                                                    this.cursor = this.limit - o;
                                                    break;
                                                }
                                                ((this.bra = this.cursor), (s = this.limit - this.cursor));
                                                do {
                                                    if (!this.eq_s_b$esjava$1('e')) break;
                                                    this.cursor = this.limit - o;
                                                    break f;
                                                } while (!1);
                                                if (((this.cursor = this.limit - s), !this.r_R2$esjava$0())) {
                                                    this.cursor = this.limit - o;
                                                    break;
                                                }
                                                this.slice_del$esjava$0();
                                            } while (!1);
                                            break;
                                        case 2:
                                            l = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('e')) break;
                                                break d;
                                            } while (!1);
                                            ((this.cursor = this.limit - l), this.slice_del$esjava$0());
                                            break;
                                        case 3:
                                            (this.slice_del$esjava$0(), (c = this.limit - this.cursor));
                                            F: do {
                                                this.ket = this.cursor;
                                                z: do {
                                                    u = this.limit - this.cursor;
                                                    do {
                                                        if (!this.eq_s_b$esjava$1('er')) break;
                                                        break z;
                                                    } while (!1);
                                                    if (((this.cursor = this.limit - u), !this.eq_s_b$esjava$1('en'))) {
                                                        this.cursor = this.limit - c;
                                                        break F;
                                                    }
                                                } while (!1);
                                                if (((this.bra = this.cursor), !this.r_R1$esjava$0())) {
                                                    this.cursor = this.limit - c;
                                                    break;
                                                }
                                                this.slice_del$esjava$0();
                                            } while (!1);
                                            break;
                                        case 4:
                                            (this.slice_del$esjava$0(), (d = this.limit - this.cursor));
                                            R: do {
                                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                    this.cursor = this.limit - d;
                                                    break;
                                                }
                                                switch (e) {
                                                    case 0:
                                                        this.cursor = this.limit - d;
                                                        break R;
                                                    case 1:
                                                        this.slice_del$esjava$0();
                                                }
                                            } while (!1);
                                    }
                                } while (!1);
                                return ((this.cursor = this.limit - a), !0);
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0;
                                e = this.cursor;
                                do if (!this.r_prelude$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                do if (!this.r_standard_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (this.cursor = this.limit_backward), (r = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = r), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_x',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_x') ? this._$esjava$I_x : (this._$esjava$I_x = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_x = e;
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 6), new c('U', 0, 2), new c('Y', 0, 1), new c('ä', 0, 3), new c('ö', 0, 4), new c('ü', 0, 5)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('e', -1, 2), new c('em', -1, 1), new c('en', -1, 2), new c('ern', -1, 1), new c('er', -1, 1), new c('s', -1, 3), new c('es', 5, 2)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('en', -1, 1), new c('er', -1, 1), new c('st', -1, 2), new c('est', 2, 1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ig', -1, 1), new c('lich', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('end', -1, 1), new c('ig', -1, 2), new c('ung', -1, 1), new c('lich', -1, 3), new c('isch', -1, 2), new c('ik', -1, 2), new c('heit', -1, 3), new c('keit', -1, 4)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8]));
                            }
                        },
                        {
                            key: 'g_s_ending',
                            get: function () {
                                return (delete n.g_s_ending, (n.g_s_ending = [117, 30, 5]));
                            }
                        },
                        {
                            key: 'g_st_ending',
                            get: function () {
                                return (delete n.g_st_ending, (n.g_st_ending = [117, 30, 4]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        v = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                this.I_p1 = this.limit;
                                l: do {
                                    e = this.cursor;
                                    c: do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 369)) break;
                                        Z: for (;;) {
                                            t = this.cursor;
                                            do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 369)) break;
                                                this.cursor = t;
                                                break Z;
                                            } while (!1);
                                            if (((this.cursor = t), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        }
                                        f: do {
                                            r = this.cursor;
                                            do {
                                                if (0 === this.find_among$esjava$1(n.a_0)) break;
                                                break f;
                                            } while (!1);
                                            if (((this.cursor = r), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        } while (!1);
                                        this.I_p1 = this.cursor;
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = e), !this.out_grouping$esjava$3(n.g_v, 97, 369))) return !1;
                                    Y: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 369)) break;
                                            break Y;
                                        } while (!1);
                                        if (this.cursor >= this.limit) return !1;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_v_ending$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('e');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_double$esjava$0',
                            value: function () {
                                var e = void 0;
                                return ((e = this.limit - this.cursor), 0 !== this.find_among_b$esjava$1(n.a_2) && ((this.cursor = this.limit - e), !0));
                            }
                        },
                        {
                            key: 'r_undouble$esjava$0',
                            value: function () {
                                if (this.cursor <= this.limit_backward) return !1;
                                (this.cursor--, (this.ket = this.cursor));
                                var e = this.cursor - 1;
                                return !(this.limit_backward > e) && !(e > this.limit) && ((this.cursor = e), (this.bra = this.cursor), this.slice_del$esjava$0(), !0);
                            }
                        },
                        {
                            key: 'r_instrum$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 2:
                                        if (!this.r_double$esjava$0()) return !1;
                                }
                                return (this.slice_del$esjava$0(), !!this.r_undouble$esjava$0());
                            }
                        },
                        {
                            key: 'r_case$esjava$0',
                            value: function () {
                                return ((this.ket = this.cursor), 0 !== this.find_among_b$esjava$1(n.a_4) && ((this.bra = this.cursor), !!this.r_R1$esjava$0() && (this.slice_del$esjava$0(), !!this.r_v_ending$esjava$0())));
                            }
                        },
                        {
                            key: 'r_case_special$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('e');
                                        break;
                                    case 2:
                                    case 3:
                                        this.slice_from$esjava$1('a');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_case_other$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 2:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('e');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_factive$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 2:
                                        if (!this.r_double$esjava$0()) return !1;
                                }
                                return (this.slice_del$esjava$0(), !!this.r_undouble$esjava$0());
                            }
                        },
                        {
                            key: 'r_plural$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_8)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('e');
                                        break;
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_owned$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_9)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 4:
                                    case 7:
                                    case 9:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                    case 5:
                                    case 8:
                                        this.slice_from$esjava$1('e');
                                        break;
                                    case 3:
                                    case 6:
                                        this.slice_from$esjava$1('a');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_sing_owner$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_10)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 4:
                                    case 7:
                                    case 8:
                                    case 9:
                                    case 12:
                                    case 13:
                                    case 16:
                                    case 17:
                                    case 18:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                    case 5:
                                    case 10:
                                    case 14:
                                    case 19:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 3:
                                    case 6:
                                    case 11:
                                    case 15:
                                    case 20:
                                        this.slice_from$esjava$1('e');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_plur_owner$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_11)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 9:
                                    case 10:
                                    case 11:
                                    case 14:
                                    case 15:
                                    case 16:
                                    case 17:
                                    case 20:
                                    case 21:
                                    case 24:
                                    case 25:
                                    case 26:
                                    case 29:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                    case 7:
                                    case 12:
                                    case 18:
                                    case 22:
                                    case 27:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 3:
                                    case 8:
                                    case 13:
                                    case 19:
                                    case 23:
                                    case 28:
                                        this.slice_from$esjava$1('e');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_instrum$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_case$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_case_special$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                do if (!this.r_case_other$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - i), (a = this.limit - this.cursor));
                                do if (!this.r_factive$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - a), (o = this.limit - this.cursor));
                                do if (!this.r_owned$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - o), (s = this.limit - this.cursor));
                                do if (!this.r_sing_owner$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - s), (l = this.limit - this.cursor));
                                do if (!this.r_plur_owner$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - l), (c = this.limit - this.cursor));
                                do if (!this.r_plural$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - c), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('cs', -1, -1), new c('dzs', -1, -1), new c('gy', -1, -1), new c('ly', -1, -1), new c('ny', -1, -1), new c('sz', -1, -1), new c('ty', -1, -1), new c('zs', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('á', -1, 1), new c('é', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('bb', -1, -1), new c('cc', -1, -1), new c('dd', -1, -1), new c('ff', -1, -1), new c('gg', -1, -1), new c('jj', -1, -1), new c('kk', -1, -1), new c('ll', -1, -1), new c('mm', -1, -1), new c('nn', -1, -1), new c('pp', -1, -1), new c('rr', -1, -1), new c('ccs', -1, -1), new c('ss', -1, -1), new c('zzs', -1, -1), new c('tt', -1, -1), new c('vv', -1, -1), new c('ggy', -1, -1), new c('lly', -1, -1), new c('nny', -1, -1), new c('tty', -1, -1), new c('ssz', -1, -1), new c('zz', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('al', -1, 1), new c('el', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('ba', -1, -1), new c('ra', -1, -1), new c('be', -1, -1), new c('re', -1, -1), new c('ig', -1, -1), new c('nak', -1, -1), new c('nek', -1, -1), new c('val', -1, -1), new c('vel', -1, -1), new c('ul', -1, -1), new c('nál', -1, -1), new c('nél', -1, -1), new c('ból', -1, -1), new c('ról', -1, -1), new c('tól', -1, -1), new c('ül', -1, -1), new c('ből', -1, -1), new c('ről', -1, -1), new c('től', -1, -1), new c('n', -1, -1), new c('an', 19, -1), new c('ban', 20, -1), new c('en', 19, -1), new c('ben', 22, -1), new c('képpen', 22, -1), new c('on', 19, -1), new c('ön', 19, -1), new c('képp', -1, -1), new c('kor', -1, -1), new c('t', -1, -1), new c('at', 29, -1), new c('et', 29, -1), new c('ként', 29, -1), new c('anként', 32, -1), new c('enként', 32, -1), new c('onként', 32, -1), new c('ot', 29, -1), new c('ért', 29, -1), new c('öt', 29, -1), new c('hez', -1, -1), new c('hoz', -1, -1), new c('höz', -1, -1), new c('vá', -1, -1), new c('vé', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('án', -1, 2), new c('én', -1, 1), new c('ánként', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('stul', -1, 2), new c('astul', 0, 1), new c('ástul', 0, 3), new c('stül', -1, 2), new c('estül', 3, 1), new c('éstül', 3, 4)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('á', -1, 1), new c('é', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('k', -1, 7), new c('ak', 0, 4), new c('ek', 0, 6), new c('ok', 0, 5), new c('ák', 0, 1), new c('ék', 0, 2), new c('ök', 0, 3)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('éi', -1, 7), new c('áéi', 0, 6), new c('ééi', 0, 5), new c('é', -1, 9), new c('ké', 3, 4), new c('aké', 4, 1), new c('eké', 4, 1), new c('oké', 4, 1), new c('áké', 4, 3), new c('éké', 4, 2), new c('öké', 4, 1), new c('éé', 3, 8)]));
                            }
                        },
                        {
                            key: 'a_10',
                            get: function () {
                                return (delete n.a_10, (n.a_10 = [new c('a', -1, 18), new c('ja', 0, 17), new c('d', -1, 16), new c('ad', 2, 13), new c('ed', 2, 13), new c('od', 2, 13), new c('ád', 2, 14), new c('éd', 2, 15), new c('öd', 2, 13), new c('e', -1, 18), new c('je', 9, 17), new c('nk', -1, 4), new c('unk', 11, 1), new c('ánk', 11, 2), new c('énk', 11, 3), new c('ünk', 11, 1), new c('uk', -1, 8), new c('juk', 16, 7), new c('ájuk', 17, 5), new c('ük', -1, 8), new c('jük', 19, 7), new c('éjük', 20, 6), new c('m', -1, 12), new c('am', 22, 9), new c('em', 22, 9), new c('om', 22, 9), new c('ám', 22, 10), new c('ém', 22, 11), new c('o', -1, 18), new c('á', -1, 19), new c('é', -1, 20)]));
                            }
                        },
                        {
                            key: 'a_11',
                            get: function () {
                                return (delete n.a_11, (n.a_11 = [new c('id', -1, 10), new c('aid', 0, 9), new c('jaid', 1, 6), new c('eid', 0, 9), new c('jeid', 3, 6), new c('áid', 0, 7), new c('éid', 0, 8), new c('i', -1, 15), new c('ai', 7, 14), new c('jai', 8, 11), new c('ei', 7, 14), new c('jei', 10, 11), new c('ái', 7, 12), new c('éi', 7, 13), new c('itek', -1, 24), new c('eitek', 14, 21), new c('jeitek', 15, 20), new c('éitek', 14, 23), new c('ik', -1, 29), new c('aik', 18, 26), new c('jaik', 19, 25), new c('eik', 18, 26), new c('jeik', 21, 25), new c('áik', 18, 27), new c('éik', 18, 28), new c('ink', -1, 20), new c('aink', 25, 17), new c('jaink', 26, 16), new c('eink', 25, 17), new c('jeink', 28, 16), new c('áink', 25, 18), new c('éink', 25, 19), new c('aitok', -1, 21), new c('jaitok', 32, 20), new c('áitok', -1, 22), new c('im', -1, 5), new c('aim', 35, 4), new c('jaim', 36, 1), new c('eim', 35, 4), new c('jeim', 38, 1), new c('áim', 35, 2), new c('éim', 35, 3)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 36, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        I = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    A: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break A;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                d: do {
                                    H: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break H;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break d;
                                        this.cursor++;
                                    }
                                    Y: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break Y;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break d;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    $: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break $;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break d;
                                        this.cursor++;
                                    }
                                    X: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break X;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break d;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = t), !0);
                            }
                        },
                        {
                            key: 'r_initial_morph$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) return !1;
                                switch (((this.ket = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                    case 2:
                                    case 4:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                    case 9:
                                    case 17:
                                        this.slice_from$esjava$1('f');
                                        break;
                                    case 5:
                                    case 12:
                                        this.slice_from$esjava$1('s');
                                        break;
                                    case 6:
                                    case 14:
                                        this.slice_from$esjava$1('b');
                                        break;
                                    case 7:
                                    case 15:
                                        this.slice_from$esjava$1('c');
                                        break;
                                    case 8:
                                    case 16:
                                        this.slice_from$esjava$1('d');
                                        break;
                                    case 10:
                                    case 18:
                                        this.slice_from$esjava$1('g');
                                        break;
                                    case 11:
                                    case 20:
                                        this.slice_from$esjava$1('p');
                                        break;
                                    case 13:
                                    case 21:
                                        this.slice_from$esjava$1('t');
                                        break;
                                    case 19:
                                        this.slice_from$esjava$1('m');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_noun_sfx$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_deriv$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('arc');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('gin');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('graf');
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('paite');
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('óid');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb_sfx$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0;
                                e = this.cursor;
                                do if (!this.r_initial_morph$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                do if (!this.r_noun_sfx$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_deriv$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                do if (!this.r_verb_sfx$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - i), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c("b'", -1, 4), new c('bh', -1, 14), new c('bhf', 1, 9), new c('bp', -1, 11), new c('ch', -1, 15), new c("d'", -1, 2), new c("d'fh", 5, 3), new c('dh', -1, 16), new c('dt', -1, 13), new c('fh', -1, 17), new c('gc', -1, 7), new c('gh', -1, 18), new c('h-', -1, 1), new c("m'", -1, 4), new c('mb', -1, 6), new c('mh', -1, 19), new c('n-', -1, 1), new c('nd', -1, 8), new c('ng', -1, 10), new c('ph', -1, 20), new c('sh', -1, 5), new c('t-', -1, 1), new c('th', -1, 21), new c('ts', -1, 12)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('íochta', -1, 1), new c('aíochta', 0, 1), new c('ire', -1, 2), new c('aire', 2, 2), new c('abh', -1, 1), new c('eabh', 4, 1), new c('ibh', -1, 1), new c('aibh', 6, 1), new c('amh', -1, 1), new c('eamh', 8, 1), new c('imh', -1, 1), new c('aimh', 10, 1), new c('íocht', -1, 1), new c('aíocht', 12, 1), new c('irí', -1, 2), new c('airí', 14, 2)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('óideacha', -1, 6), new c('patacha', -1, 5), new c('achta', -1, 1), new c('arcachta', 2, 2), new c('eachta', 2, 1), new c('grafaíochta', -1, 4), new c('paite', -1, 5), new c('ach', -1, 1), new c('each', 7, 1), new c('óideach', 8, 6), new c('gineach', 8, 3), new c('patach', 7, 5), new c('grafaíoch', -1, 4), new c('pataigh', -1, 5), new c('óidigh', -1, 6), new c('achtúil', -1, 1), new c('eachtúil', 15, 1), new c('gineas', -1, 3), new c('ginis', -1, 3), new c('acht', -1, 1), new c('arcacht', 19, 2), new c('eacht', 19, 1), new c('grafaíocht', -1, 4), new c('arcachtaí', -1, 2), new c('grafaíochtaí', -1, 4)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('imid', -1, 1), new c('aimid', 0, 1), new c('ímid', -1, 1), new c('aímid', 2, 1), new c('adh', -1, 2), new c('eadh', 4, 2), new c('faidh', -1, 1), new c('fidh', -1, 1), new c('áil', -1, 2), new c('ain', -1, 2), new c('tear', -1, 2), new c('tar', -1, 2)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 2]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        T = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                t = this.cursor;
                                G: for (;;) {
                                    r = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('à');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('è');
                                                break;
                                            case 3:
                                                this.slice_from$esjava$1('ì');
                                                break;
                                            case 4:
                                                this.slice_from$esjava$1('ò');
                                                break;
                                            case 5:
                                                this.slice_from$esjava$1('ù');
                                                break;
                                            case 6:
                                                this.slice_from$esjava$1('qU');
                                                break;
                                            case 7:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = r;
                                    break;
                                }
                                this.cursor = t;
                                Q: for (;;) {
                                    i = this.cursor;
                                    d: do {
                                        H: for (;;) {
                                            a = this.cursor;
                                            _: do {
                                                if (!this.in_grouping$esjava$3(n.g_v, 97, 249)) break;
                                                this.bra = this.cursor;
                                                p: do {
                                                    o = this.cursor;
                                                    do {
                                                        if (!this.eq_s$esjava$1('u') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 249))) break;
                                                        this.slice_from$esjava$1('U');
                                                        break p;
                                                    } while (!1);
                                                    if (((this.cursor = o), !this.eq_s$esjava$1('i') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 249)))) break _;
                                                    this.slice_from$esjava$1('I');
                                                } while (!1);
                                                this.cursor = a;
                                                break H;
                                            } while (!1);
                                            if (((this.cursor = a), this.cursor >= this.limit)) break d;
                                            this.cursor++;
                                        }
                                        continue Q;
                                    } while (!1);
                                    this.cursor = i;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        u: do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 249)) break;
                                            d: do {
                                                r = this.cursor;
                                                f: do {
                                                    if (!this.out_grouping$esjava$3(n.g_v, 97, 249)) break;
                                                    C: for (;;) {
                                                        do {
                                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 249)) break;
                                                            break C;
                                                        } while (!1);
                                                        if (this.cursor >= this.limit) break f;
                                                        this.cursor++;
                                                    }
                                                    break d;
                                                } while (!1);
                                                if (((this.cursor = r), !this.in_grouping$esjava$3(n.g_v, 97, 249))) break u;
                                                w: for (;;) {
                                                    do {
                                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 249)) break;
                                                        break w;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break u;
                                                    this.cursor++;
                                                }
                                            } while (!1);
                                            break c;
                                        } while (!1);
                                        if (((this.cursor = t), !this.out_grouping$esjava$3(n.g_v, 97, 249))) break l;
                                        m: do {
                                            i = this.cursor;
                                            R: do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 249)) break;
                                                P: for (;;) {
                                                    do {
                                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 249)) break;
                                                        break P;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break R;
                                                    this.cursor++;
                                                }
                                                break m;
                                            } while (!1);
                                            if (((this.cursor = i), !this.in_grouping$esjava$3(n.g_v, 97, 249) || this.cursor >= this.limit)) break l;
                                            this.cursor++;
                                        } while (!1);
                                    } while (!1);
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (a = this.cursor));
                                D: do {
                                    L: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 249)) break;
                                            break L;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    x: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 249)) break;
                                            break x;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    k: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 249)) break;
                                            break k;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    j: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 249)) break;
                                            break j;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_1)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 3:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_attached_pronoun$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_2) || ((this.bra = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || !this.r_RV$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('e');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ic') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                            this.slice_del$esjava$0();
                                        } while (!1);
                                        break;
                                    case 3:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('log');
                                        break;
                                    case 4:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('u');
                                        break;
                                    case 5:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ente');
                                        break;
                                    case 6:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 7:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (r = this.limit - this.cursor));
                                        c: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - r;
                                                break;
                                            }
                                            switch ((this.slice_del$esjava$0(), e)) {
                                                case 0:
                                                    this.cursor = this.limit - r;
                                                    break c;
                                                case 1:
                                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                        this.cursor = this.limit - r;
                                                        break c;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 8:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (i = this.limit - this.cursor));
                                        u: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - i;
                                                    break u;
                                                case 1:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - i;
                                                        break u;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 9:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (a = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()) || (this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('ic')) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - a;
                                                break;
                                            }
                                            this.slice_del$esjava$0();
                                        } while (!1);
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = r), !1);
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return ((this.limit_backward = r), !0);
                            }
                        },
                        {
                            key: 'r_vowel_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                e = this.limit - this.cursor;
                                do {
                                    if (((this.ket = this.cursor), !this.in_grouping_b$esjava$3(n.g_AEIO, 97, 242) || ((this.bra = this.cursor), !this.r_RV$esjava$0()) || (this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('i')) || ((this.bra = this.cursor), !this.r_RV$esjava$0()))) {
                                        this.cursor = this.limit - e;
                                        break;
                                    }
                                    this.slice_del$esjava$0();
                                } while (!1);
                                t = this.limit - this.cursor;
                                do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('h') || ((this.bra = this.cursor), !this.in_grouping_b$esjava$3(n.g_CG, 99, 103) || !this.r_RV$esjava$0()))) {
                                        this.cursor = this.limit - t;
                                        break;
                                    }
                                    this.slice_del$esjava$0();
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                e = this.cursor;
                                do if (!this.r_prelude$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                do if (!this.r_attached_pronoun$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                d: do
                                    f: do {
                                        i = this.limit - this.cursor;
                                        do {
                                            if (!this.r_standard_suffix$esjava$0()) break;
                                            break f;
                                        } while (!1);
                                        if (((this.cursor = this.limit - i), !this.r_verb_suffix$esjava$0())) break d;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - r), (a = this.limit - this.cursor));
                                do if (!this.r_vowel_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - a), (this.cursor = this.limit_backward), (o = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = o), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 7), new c('qu', 0, 6), new c('á', 0, 1), new c('é', 0, 2), new c('í', 0, 3), new c('ó', 0, 4), new c('ú', 0, 5)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('', -1, 3), new c('I', 0, 1), new c('U', 0, 2)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('la', -1, -1), new c('cela', 0, -1), new c('gliela', 0, -1), new c('mela', 0, -1), new c('tela', 0, -1), new c('vela', 0, -1), new c('le', -1, -1), new c('cele', 6, -1), new c('gliele', 6, -1), new c('mele', 6, -1), new c('tele', 6, -1), new c('vele', 6, -1), new c('ne', -1, -1), new c('cene', 12, -1), new c('gliene', 12, -1), new c('mene', 12, -1), new c('sene', 12, -1), new c('tene', 12, -1), new c('vene', 12, -1), new c('ci', -1, -1), new c('li', -1, -1), new c('celi', 20, -1), new c('glieli', 20, -1), new c('meli', 20, -1), new c('teli', 20, -1), new c('veli', 20, -1), new c('gli', 20, -1), new c('mi', -1, -1), new c('si', -1, -1), new c('ti', -1, -1), new c('vi', -1, -1), new c('lo', -1, -1), new c('celo', 31, -1), new c('glielo', 31, -1), new c('melo', 31, -1), new c('telo', 31, -1), new c('velo', 31, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ando', -1, 1), new c('endo', -1, 1), new c('ar', -1, 2), new c('er', -1, 2), new c('ir', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('ic', -1, -1), new c('abil', -1, -1), new c('os', -1, -1), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('ic', -1, 1), new c('abil', -1, 1), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('ica', -1, 1), new c('logia', -1, 3), new c('osa', -1, 1), new c('ista', -1, 1), new c('iva', -1, 9), new c('anza', -1, 1), new c('enza', -1, 5), new c('ice', -1, 1), new c('atrice', 7, 1), new c('iche', -1, 1), new c('logie', -1, 3), new c('abile', -1, 1), new c('ibile', -1, 1), new c('usione', -1, 4), new c('azione', -1, 2), new c('uzione', -1, 4), new c('atore', -1, 2), new c('ose', -1, 1), new c('ante', -1, 1), new c('mente', -1, 1), new c('amente', 19, 7), new c('iste', -1, 1), new c('ive', -1, 9), new c('anze', -1, 1), new c('enze', -1, 5), new c('ici', -1, 1), new c('atrici', 25, 1), new c('ichi', -1, 1), new c('abili', -1, 1), new c('ibili', -1, 1), new c('ismi', -1, 1), new c('usioni', -1, 4), new c('azioni', -1, 2), new c('uzioni', -1, 4), new c('atori', -1, 2), new c('osi', -1, 1), new c('anti', -1, 1), new c('amenti', -1, 6), new c('imenti', -1, 6), new c('isti', -1, 1), new c('ivi', -1, 9), new c('ico', -1, 1), new c('ismo', -1, 1), new c('oso', -1, 1), new c('amento', -1, 6), new c('imento', -1, 6), new c('ivo', -1, 9), new c('ità', -1, 8), new c('istà', -1, 1), new c('istè', -1, 1), new c('istì', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('isca', -1, 1), new c('enda', -1, 1), new c('ata', -1, 1), new c('ita', -1, 1), new c('uta', -1, 1), new c('ava', -1, 1), new c('eva', -1, 1), new c('iva', -1, 1), new c('erebbe', -1, 1), new c('irebbe', -1, 1), new c('isce', -1, 1), new c('ende', -1, 1), new c('are', -1, 1), new c('ere', -1, 1), new c('ire', -1, 1), new c('asse', -1, 1), new c('ate', -1, 1), new c('avate', 16, 1), new c('evate', 16, 1), new c('ivate', 16, 1), new c('ete', -1, 1), new c('erete', 20, 1), new c('irete', 20, 1), new c('ite', -1, 1), new c('ereste', -1, 1), new c('ireste', -1, 1), new c('ute', -1, 1), new c('erai', -1, 1), new c('irai', -1, 1), new c('isci', -1, 1), new c('endi', -1, 1), new c('erei', -1, 1), new c('irei', -1, 1), new c('assi', -1, 1), new c('ati', -1, 1), new c('iti', -1, 1), new c('eresti', -1, 1), new c('iresti', -1, 1), new c('uti', -1, 1), new c('avi', -1, 1), new c('evi', -1, 1), new c('ivi', -1, 1), new c('isco', -1, 1), new c('ando', -1, 1), new c('endo', -1, 1), new c('Yamo', -1, 1), new c('iamo', -1, 1), new c('avamo', -1, 1), new c('evamo', -1, 1), new c('ivamo', -1, 1), new c('eremo', -1, 1), new c('iremo', -1, 1), new c('assimo', -1, 1), new c('ammo', -1, 1), new c('emmo', -1, 1), new c('eremmo', 54, 1), new c('iremmo', 54, 1), new c('immo', -1, 1), new c('ano', -1, 1), new c('iscano', 58, 1), new c('avano', 58, 1), new c('evano', 58, 1), new c('ivano', 58, 1), new c('eranno', -1, 1), new c('iranno', -1, 1), new c('ono', -1, 1), new c('iscono', 65, 1), new c('arono', 65, 1), new c('erono', 65, 1), new c('irono', 65, 1), new c('erebbero', -1, 1), new c('irebbero', -1, 1), new c('assero', -1, 1), new c('essero', -1, 1), new c('issero', -1, 1), new c('ato', -1, 1), new c('ito', -1, 1), new c('uto', -1, 1), new c('avo', -1, 1), new c('evo', -1, 1), new c('ivo', -1, 1), new c('ar', -1, 1), new c('ir', -1, 1), new c('erà', -1, 1), new c('irà', -1, 1), new c('erò', -1, 1), new c('irò', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1]));
                            }
                        },
                        {
                            key: 'g_AEIO',
                            get: function () {
                                return (delete n.g_AEIO, (n.g_AEIO = [17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2]));
                            }
                        },
                        {
                            key: 'g_CG',
                            get: function () {
                                return (delete n.g_CG, (n.g_CG = [17]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        S = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_p1 = this.limit), (e = this.cursor));
                                var r = this.cursor + 3;
                                if (0 > r || r > this.limit) return !1;
                                ((this.cursor = r), (this.I_x = this.cursor), (this.cursor = e));
                                B: for (;;) {
                                    t = this.cursor;
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 248)) break;
                                        this.cursor = t;
                                        break B;
                                    } while (!1);
                                    if (((this.cursor = t), this.cursor >= this.limit)) return !1;
                                    this.cursor++;
                                }
                                Z: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 248)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                this.I_p1 = this.cursor;
                                do {
                                    if (!(this.I_p1 < this.I_x)) break;
                                    this.I_p1 = this.I_x;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_main_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        l: do {
                                            i = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_s_ending, 98, 122)) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - i), !this.eq_s_b$esjava$1('k') || !this.out_grouping_b$esjava$3(n.g_v, 97, 248))) return !1;
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('er');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_consonant_pair$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                return ((e = this.limit - this.cursor), (t = this.limit - this.cursor), !(this.cursor < this.I_p1) && (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_1)) ? ((this.limit_backward = r), !1) : ((this.bra = this.cursor), (this.limit_backward = r), (this.cursor = this.limit - e), !(this.cursor <= this.limit_backward) && (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0(), !0))));
                            }
                        },
                        {
                            key: 'r_other_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_main_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_consonant_pair$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_other_suffix$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - r), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_x',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_x') ? this._$esjava$I_x : (this._$esjava$I_x = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_x = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('a', -1, 1), new c('e', -1, 1), new c('ede', 1, 1), new c('ande', 1, 1), new c('ende', 1, 1), new c('ane', 1, 1), new c('ene', 1, 1), new c('hetene', 6, 1), new c('erte', 1, 3), new c('en', -1, 1), new c('heten', 9, 1), new c('ar', -1, 1), new c('er', -1, 1), new c('heter', 12, 1), new c('s', -1, 2), new c('as', 14, 1), new c('es', 14, 1), new c('edes', 16, 1), new c('endes', 16, 1), new c('enes', 16, 1), new c('hetenes', 19, 1), new c('ens', 14, 1), new c('hetens', 21, 1), new c('ers', 14, 1), new c('ets', 14, 1), new c('et', -1, 1), new c('het', 25, 1), new c('ert', -1, 3), new c('ast', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('dt', -1, -1), new c('vt', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('leg', -1, 1), new c('eleg', 0, 1), new c('ig', -1, 1), new c('eig', 2, 1), new c('lig', 2, 1), new c('elig', 4, 1), new c('els', -1, 1), new c('lov', -1, 1), new c('elov', 7, 1), new c('slov', 7, 1), new c('hetslov', 9, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128]));
                            }
                        },
                        {
                            key: 'g_s_ending',
                            get: function () {
                                return (delete n.g_s_ending, (n.g_s_ending = [119, 125, 149, 1]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        A = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_shortv$esjava$0',
                            value: function () {
                                return !!this.out_grouping_b$esjava$3(n.g_v_WXY, 89, 121) && !!this.in_grouping_b$esjava$3(n.g_v, 97, 121) && !!this.out_grouping_b$esjava$3(n.g_v, 97, 121);
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_Step_1a$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('ss');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('i');
                                        break;
                                    case 3:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_1b$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ee');
                                        break;
                                    case 2:
                                        t = this.limit - this.cursor;
                                        B: for (;;) {
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_v, 97, 121)) break;
                                                break B;
                                            } while (!1);
                                            if (this.cursor <= this.limit_backward) return !1;
                                            this.cursor--;
                                        }
                                        if (((this.cursor = this.limit - t), this.slice_del$esjava$0(), (r = this.limit - this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) return !1;
                                        switch (((this.cursor = this.limit - r), e)) {
                                            case 0:
                                                return !1;
                                            case 1:
                                                var a = this.cursor;
                                                (this.insert$esjava$3(this.cursor, this.cursor, 'e'), (this.cursor = a));
                                                break;
                                            case 2:
                                                if (((this.ket = this.cursor), this.cursor <= this.limit_backward)) return !1;
                                                (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0());
                                                break;
                                            case 3:
                                                if (this.cursor !== this.I_p1 || ((i = this.limit - this.cursor), !this.r_shortv$esjava$0())) return !1;
                                                this.cursor = this.limit - i;
                                                var a = this.cursor;
                                                (this.insert$esjava$3(this.cursor, this.cursor, 'e'), (this.cursor = a));
                                        }
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_1c$esjava$0',
                            value: function () {
                                var e = void 0;
                                this.ket = this.cursor;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('y')) break;
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.eq_s_b$esjava$1('Y'))) return !1;
                                } while (!1);
                                this.bra = this.cursor;
                                Z: for (;;) {
                                    do {
                                        if (!this.in_grouping_b$esjava$3(n.g_v, 97, 121)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor <= this.limit_backward) return !1;
                                    this.cursor--;
                                }
                                return (this.slice_from$esjava$1('i'), !0);
                            }
                        },
                        {
                            key: 'r_Step_2$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('tion');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('ence');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('ance');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('able');
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('ent');
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('e');
                                        break;
                                    case 7:
                                        this.slice_from$esjava$1('ize');
                                        break;
                                    case 8:
                                        this.slice_from$esjava$1('ate');
                                        break;
                                    case 9:
                                    case 10:
                                        this.slice_from$esjava$1('al');
                                        break;
                                    case 11:
                                        this.slice_from$esjava$1('ful');
                                        break;
                                    case 12:
                                        this.slice_from$esjava$1('ous');
                                        break;
                                    case 13:
                                        this.slice_from$esjava$1('ive');
                                        break;
                                    case 14:
                                        this.slice_from$esjava$1('ble');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_3$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('al');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('ic');
                                        break;
                                    case 3:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_4$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        l: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('s')) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.eq_s_b$esjava$1('t'))) return !1;
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_Step_5a$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('e'))) return !1;
                                this.bra = this.cursor;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.r_R2$esjava$0()) break;
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.r_R1$esjava$0())) return !1;
                                    t = this.limit - this.cursor;
                                    do {
                                        if (!this.r_shortv$esjava$0()) break;
                                        return !1;
                                    } while (!1);
                                    this.cursor = this.limit - t;
                                } while (!1);
                                return (this.slice_del$esjava$0(), !0);
                            }
                        },
                        {
                            key: 'r_Step_5b$esjava$0',
                            value: function () {
                                return ((this.ket = this.cursor), !!this.eq_s_b$esjava$1('l') && ((this.bra = this.cursor), !!this.r_R2$esjava$0() && !!this.eq_s_b$esjava$1('l') && (this.slice_del$esjava$0(), !0)));
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0,
                                    p = void 0,
                                    h = void 0,
                                    m = void 0;
                                ((this.B_Y_found = !1), (e = this.cursor));
                                do {
                                    if (((this.bra = this.cursor), !this.eq_s$esjava$1('y'))) break;
                                    ((this.ket = this.cursor), this.slice_from$esjava$1('Y'), (this.B_Y_found = !0));
                                } while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do
                                    Q: for (;;) {
                                        r = this.cursor;
                                        d: do {
                                            H: for (;;) {
                                                i = this.cursor;
                                                do {
                                                    if (!this.in_grouping$esjava$3(n.g_v, 97, 121) || ((this.bra = this.cursor), !this.eq_s$esjava$1('y'))) break;
                                                    ((this.ket = this.cursor), (this.cursor = i));
                                                    break H;
                                                } while (!1);
                                                if (((this.cursor = i), this.cursor >= this.limit)) break d;
                                                this.cursor++;
                                            }
                                            (this.slice_from$esjava$1('Y'), (this.B_Y_found = !0));
                                            continue Q;
                                        } while (!1);
                                        this.cursor = r;
                                        break;
                                    }
                                while (!1);
                                ((this.cursor = t), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (a = this.cursor));
                                p: do {
                                    w: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 121)) break;
                                            break w;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    V: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 121)) break;
                                            break V;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    P: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 121)) break;
                                            break P;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    W: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 121)) break;
                                            break W;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break p;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                ((this.cursor = a), (this.limit_backward = this.cursor), (this.cursor = this.limit), (o = this.limit - this.cursor));
                                do if (!this.r_Step_1a$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - o), (s = this.limit - this.cursor));
                                do if (!this.r_Step_1b$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - s), (l = this.limit - this.cursor));
                                do if (!this.r_Step_1c$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - l), (c = this.limit - this.cursor));
                                do if (!this.r_Step_2$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - c), (u = this.limit - this.cursor));
                                do if (!this.r_Step_3$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - u), (d = this.limit - this.cursor));
                                do if (!this.r_Step_4$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - d), (f = this.limit - this.cursor));
                                do if (!this.r_Step_5a$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - f), (_ = this.limit - this.cursor));
                                do if (!this.r_Step_5b$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - _), (this.cursor = this.limit_backward), (p = this.cursor));
                                do {
                                    if (!this.B_Y_found) break;
                                    J: for (;;) {
                                        h = this.cursor;
                                        ee: do {
                                            et: for (;;) {
                                                m = this.cursor;
                                                do {
                                                    if (((this.bra = this.cursor), !this.eq_s$esjava$1('Y'))) break;
                                                    ((this.ket = this.cursor), (this.cursor = m));
                                                    break et;
                                                } while (!1);
                                                if (((this.cursor = m), this.cursor >= this.limit)) break ee;
                                                this.cursor++;
                                            }
                                            this.slice_from$esjava$1('y');
                                            continue J;
                                        } while (!1);
                                        this.cursor = h;
                                        break;
                                    }
                                } while (!1);
                                return ((this.cursor = p), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'B_Y_found',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_Y_found') ? this._$esjava$B_Y_found : (this._$esjava$B_Y_found = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_Y_found = e;
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('s', -1, 3), new c('ies', 0, 2), new c('sses', 0, 1), new c('ss', 0, -1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('', -1, 3), new c('bb', 0, 2), new c('dd', 0, 2), new c('ff', 0, 2), new c('gg', 0, 2), new c('bl', 0, 1), new c('mm', 0, 2), new c('nn', 0, 2), new c('pp', 0, 2), new c('rr', 0, 2), new c('at', 0, 1), new c('tt', 0, 2), new c('iz', 0, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ed', -1, 2), new c('eed', 0, 1), new c('ing', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('anci', -1, 3), new c('enci', -1, 2), new c('abli', -1, 4), new c('eli', -1, 6), new c('alli', -1, 9), new c('ousli', -1, 12), new c('entli', -1, 5), new c('aliti', -1, 10), new c('biliti', -1, 14), new c('iviti', -1, 13), new c('tional', -1, 1), new c('ational', 10, 8), new c('alism', -1, 10), new c('ation', -1, 8), new c('ization', 13, 7), new c('izer', -1, 7), new c('ator', -1, 8), new c('iveness', -1, 13), new c('fulness', -1, 11), new c('ousness', -1, 12)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('icate', -1, 2), new c('ative', -1, 3), new c('alize', -1, 1), new c('iciti', -1, 2), new c('ical', -1, 2), new c('ful', -1, 3), new c('ness', -1, 3)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('ic', -1, 1), new c('ance', -1, 1), new c('ence', -1, 1), new c('able', -1, 1), new c('ible', -1, 1), new c('ate', -1, 1), new c('ive', -1, 1), new c('ize', -1, 1), new c('iti', -1, 1), new c('al', -1, 1), new c('ism', -1, 1), new c('ion', -1, 2), new c('er', -1, 1), new c('ous', -1, 1), new c('ant', -1, 1), new c('ent', -1, 1), new c('ment', 15, 1), new c('ement', 16, 1), new c('ou', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1]));
                            }
                        },
                        {
                            key: 'g_v_WXY',
                            get: function () {
                                return (delete n.g_v_WXY, (n.g_v_WXY = [1, 17, 65, 208, 1]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        N = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('a~');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('o~');
                                                break;
                                            case 3:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        u: do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            d: do {
                                                r = this.cursor;
                                                f: do {
                                                    if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                                    C: for (;;) {
                                                        do {
                                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                                            break C;
                                                        } while (!1);
                                                        if (this.cursor >= this.limit) break f;
                                                        this.cursor++;
                                                    }
                                                    break d;
                                                } while (!1);
                                                if (((this.cursor = r), !this.in_grouping$esjava$3(n.g_v, 97, 250))) break u;
                                                w: for (;;) {
                                                    do {
                                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                                        break w;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break u;
                                                    this.cursor++;
                                                }
                                            } while (!1);
                                            break c;
                                        } while (!1);
                                        if (((this.cursor = t), !this.out_grouping$esjava$3(n.g_v, 97, 250))) break l;
                                        m: do {
                                            i = this.cursor;
                                            R: do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                                P: for (;;) {
                                                    do {
                                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                                        break P;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break R;
                                                    this.cursor++;
                                                }
                                                break m;
                                            } while (!1);
                                            if (((this.cursor = i), !this.in_grouping$esjava$3(n.g_v, 97, 250) || this.cursor >= this.limit)) break l;
                                            this.cursor++;
                                        } while (!1);
                                    } while (!1);
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (a = this.cursor));
                                D: do {
                                    L: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break L;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    x: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break x;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    k: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break k;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    j: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 250)) break;
                                            break j;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_1)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('ã');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('õ');
                                                break;
                                            case 3:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('log');
                                        break;
                                    case 3:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('u');
                                        break;
                                    case 4:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ente');
                                        break;
                                    case 5:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        l: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                            switch ((this.slice_del$esjava$0(), e)) {
                                                case 0:
                                                    this.cursor = this.limit - t;
                                                    break l;
                                                case 1:
                                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                        this.cursor = this.limit - t;
                                                        break l;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 6:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (r = this.limit - this.cursor));
                                        c: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) {
                                                this.cursor = this.limit - r;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - r;
                                                    break c;
                                                case 1:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - r;
                                                        break c;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 7:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (i = this.limit - this.cursor));
                                        u: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - i;
                                                    break u;
                                                case 1:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - i;
                                                        break u;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 8:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (a = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - a;
                                                break;
                                            }
                                            this.slice_del$esjava$0();
                                        } while (!1);
                                        break;
                                    case 9:
                                        if (!this.r_RV$esjava$0() || !this.eq_s_b$esjava$1('e')) return !1;
                                        this.slice_from$esjava$1('ir');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = r), !1);
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return ((this.limit_backward = r), !0);
                            }
                        },
                        {
                            key: 'r_residual_suffix$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_residual_form$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_8)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (this.ket = this.cursor));
                                        l: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('u') || ((this.bra = this.cursor), (r = this.limit - this.cursor), !this.eq_s_b$esjava$1('g'))) break;
                                                this.cursor = this.limit - r;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.eq_s_b$esjava$1('i') || ((this.bra = this.cursor), (i = this.limit - this.cursor), !this.eq_s_b$esjava$1('c')))) return !1;
                                            this.cursor = this.limit - i;
                                        } while (!1);
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('c');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0;
                                e = this.cursor;
                                do if (!this.r_prelude$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                u: do
                                    d: do {
                                        r = this.limit - this.cursor;
                                        f: do {
                                            i = this.limit - this.cursor;
                                            _: do {
                                                a = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_standard_suffix$esjava$0()) break;
                                                    break _;
                                                } while (!1);
                                                if (((this.cursor = this.limit - a), !this.r_verb_suffix$esjava$0())) break f;
                                            } while (!1);
                                            ((this.cursor = this.limit - i), (o = this.limit - this.cursor));
                                            do {
                                                if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('i') || ((this.bra = this.cursor), (s = this.limit - this.cursor), !this.eq_s_b$esjava$1('c')) || ((this.cursor = this.limit - s), !this.r_RV$esjava$0()))) break;
                                                this.slice_del$esjava$0();
                                            } while (!1);
                                            this.cursor = this.limit - o;
                                            break d;
                                        } while (!1);
                                        if (((this.cursor = this.limit - r), !this.r_residual_suffix$esjava$0())) break u;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - n), (l = this.limit - this.cursor));
                                do if (!this.r_residual_form$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - l), (this.cursor = this.limit_backward), (c = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = c), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 3), new c('ã', 0, 1), new c('õ', 0, 2)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('', -1, 3), new c('a~', 0, 1), new c('o~', 0, 2)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ic', -1, -1), new c('ad', -1, -1), new c('os', -1, -1), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ante', -1, 1), new c('avel', -1, 1), new c('ível', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('ic', -1, 1), new c('abil', -1, 1), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('ica', -1, 1), new c('ância', -1, 1), new c('ência', -1, 4), new c('logia', -1, 2), new c('ira', -1, 9), new c('adora', -1, 1), new c('osa', -1, 1), new c('ista', -1, 1), new c('iva', -1, 8), new c('eza', -1, 1), new c('idade', -1, 7), new c('ante', -1, 1), new c('mente', -1, 6), new c('amente', 12, 5), new c('ável', -1, 1), new c('ível', -1, 1), new c('ico', -1, 1), new c('ismo', -1, 1), new c('oso', -1, 1), new c('amento', -1, 1), new c('imento', -1, 1), new c('ivo', -1, 8), new c('aça~o', -1, 1), new c('uça~o', -1, 3), new c('ador', -1, 1), new c('icas', -1, 1), new c('ências', -1, 4), new c('logias', -1, 2), new c('iras', -1, 9), new c('adoras', -1, 1), new c('osas', -1, 1), new c('istas', -1, 1), new c('ivas', -1, 8), new c('ezas', -1, 1), new c('idades', -1, 7), new c('adores', -1, 1), new c('antes', -1, 1), new c('aço~es', -1, 1), new c('uço~es', -1, 3), new c('icos', -1, 1), new c('ismos', -1, 1), new c('osos', -1, 1), new c('amentos', -1, 1), new c('imentos', -1, 1), new c('ivos', -1, 8)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('ada', -1, 1), new c('ida', -1, 1), new c('ia', -1, 1), new c('aria', 2, 1), new c('eria', 2, 1), new c('iria', 2, 1), new c('ara', -1, 1), new c('era', -1, 1), new c('ira', -1, 1), new c('ava', -1, 1), new c('asse', -1, 1), new c('esse', -1, 1), new c('isse', -1, 1), new c('aste', -1, 1), new c('este', -1, 1), new c('iste', -1, 1), new c('ei', -1, 1), new c('arei', 16, 1), new c('erei', 16, 1), new c('irei', 16, 1), new c('am', -1, 1), new c('iam', 20, 1), new c('ariam', 21, 1), new c('eriam', 21, 1), new c('iriam', 21, 1), new c('aram', 20, 1), new c('eram', 20, 1), new c('iram', 20, 1), new c('avam', 20, 1), new c('em', -1, 1), new c('arem', 29, 1), new c('erem', 29, 1), new c('irem', 29, 1), new c('assem', 29, 1), new c('essem', 29, 1), new c('issem', 29, 1), new c('ado', -1, 1), new c('ido', -1, 1), new c('ando', -1, 1), new c('endo', -1, 1), new c('indo', -1, 1), new c('ara~o', -1, 1), new c('era~o', -1, 1), new c('ira~o', -1, 1), new c('ar', -1, 1), new c('er', -1, 1), new c('ir', -1, 1), new c('as', -1, 1), new c('adas', 47, 1), new c('idas', 47, 1), new c('ias', 47, 1), new c('arias', 50, 1), new c('erias', 50, 1), new c('irias', 50, 1), new c('aras', 47, 1), new c('eras', 47, 1), new c('iras', 47, 1), new c('avas', 47, 1), new c('es', -1, 1), new c('ardes', 58, 1), new c('erdes', 58, 1), new c('irdes', 58, 1), new c('ares', 58, 1), new c('eres', 58, 1), new c('ires', 58, 1), new c('asses', 58, 1), new c('esses', 58, 1), new c('isses', 58, 1), new c('astes', 58, 1), new c('estes', 58, 1), new c('istes', 58, 1), new c('is', -1, 1), new c('ais', 71, 1), new c('eis', 71, 1), new c('areis', 73, 1), new c('ereis', 73, 1), new c('ireis', 73, 1), new c('áreis', 73, 1), new c('éreis', 73, 1), new c('íreis', 73, 1), new c('ásseis', 73, 1), new c('ésseis', 73, 1), new c('ísseis', 73, 1), new c('áveis', 73, 1), new c('íeis', 73, 1), new c('aríeis', 84, 1), new c('eríeis', 84, 1), new c('iríeis', 84, 1), new c('ados', -1, 1), new c('idos', -1, 1), new c('amos', -1, 1), new c('áramos', 90, 1), new c('éramos', 90, 1), new c('íramos', 90, 1), new c('ávamos', 90, 1), new c('íamos', 90, 1), new c('aríamos', 95, 1), new c('eríamos', 95, 1), new c('iríamos', 95, 1), new c('emos', -1, 1), new c('aremos', 99, 1), new c('eremos', 99, 1), new c('iremos', 99, 1), new c('ássemos', 99, 1), new c('êssemos', 99, 1), new c('íssemos', 99, 1), new c('imos', -1, 1), new c('armos', -1, 1), new c('ermos', -1, 1), new c('irmos', -1, 1), new c('ámos', -1, 1), new c('arás', -1, 1), new c('erás', -1, 1), new c('irás', -1, 1), new c('eu', -1, 1), new c('iu', -1, 1), new c('ou', -1, 1), new c('ará', -1, 1), new c('erá', -1, 1), new c('irá', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('a', -1, 1), new c('i', -1, 1), new c('o', -1, 1), new c('os', -1, 1), new c('á', -1, 1), new c('í', -1, 1), new c('ó', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('e', -1, 1), new c('ç', -1, 2), new c('é', -1, 1), new c('ê', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        C = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_prelude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                G: for (;;) {
                                    e = this.cursor;
                                    c: do {
                                        Z: for (;;) {
                                            t = this.cursor;
                                            d: do {
                                                if (!this.in_grouping$esjava$3(n.g_v, 97, 259)) break;
                                                this.bra = this.cursor;
                                                f: do {
                                                    r = this.cursor;
                                                    do {
                                                        if (!this.eq_s$esjava$1('u') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 259))) break;
                                                        this.slice_from$esjava$1('U');
                                                        break f;
                                                    } while (!1);
                                                    if (((this.cursor = r), !this.eq_s$esjava$1('i') || ((this.ket = this.cursor), !this.in_grouping$esjava$3(n.g_v, 97, 259)))) break d;
                                                    this.slice_from$esjava$1('I');
                                                } while (!1);
                                                this.cursor = t;
                                                break Z;
                                            } while (!1);
                                            if (((this.cursor = t), this.cursor >= this.limit)) break c;
                                            this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = e;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        u: do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 259)) break;
                                            d: do {
                                                r = this.cursor;
                                                f: do {
                                                    if (!this.out_grouping$esjava$3(n.g_v, 97, 259)) break;
                                                    C: for (;;) {
                                                        do {
                                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 259)) break;
                                                            break C;
                                                        } while (!1);
                                                        if (this.cursor >= this.limit) break f;
                                                        this.cursor++;
                                                    }
                                                    break d;
                                                } while (!1);
                                                if (((this.cursor = r), !this.in_grouping$esjava$3(n.g_v, 97, 259))) break u;
                                                w: for (;;) {
                                                    do {
                                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 259)) break;
                                                        break w;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break u;
                                                    this.cursor++;
                                                }
                                            } while (!1);
                                            break c;
                                        } while (!1);
                                        if (((this.cursor = t), !this.out_grouping$esjava$3(n.g_v, 97, 259))) break l;
                                        m: do {
                                            i = this.cursor;
                                            R: do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 259)) break;
                                                P: for (;;) {
                                                    do {
                                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 259)) break;
                                                        break P;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break R;
                                                    this.cursor++;
                                                }
                                                break m;
                                            } while (!1);
                                            if (((this.cursor = i), !this.in_grouping$esjava$3(n.g_v, 97, 259) || this.cursor >= this.limit)) break l;
                                            this.cursor++;
                                        } while (!1);
                                    } while (!1);
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (a = this.cursor));
                                D: do {
                                    L: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 259)) break;
                                            break L;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    x: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 259)) break;
                                            break x;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    k: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 259)) break;
                                            break k;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    j: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 259)) break;
                                            break j;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 3:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_step_0$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('a');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('e');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('i');
                                        break;
                                    case 5:
                                        t = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('ab')) break;
                                            return !1;
                                        } while (!1);
                                        ((this.cursor = this.limit - t), this.slice_from$esjava$1('i'));
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('at');
                                        break;
                                    case 7:
                                        this.slice_from$esjava$1('aţi');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_combo_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((t = this.limit - this.cursor), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)) || ((this.bra = this.cursor), !this.r_R1$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('abil');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('ibil');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('iv');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('ic');
                                        break;
                                    case 5:
                                        this.slice_from$esjava$1('at');
                                        break;
                                    case 6:
                                        this.slice_from$esjava$1('it');
                                }
                                return ((this.B_standard_suffix_removed = !0), (this.cursor = this.limit - t), !0);
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                this.B_standard_suffix_removed = !1;
                                G: for (;;) {
                                    t = this.limit - this.cursor;
                                    do {
                                        if (!this.r_combo_suffix$esjava$0()) break;
                                        continue G;
                                    } while (!1);
                                    this.cursor = this.limit - t;
                                    break;
                                }
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.eq_s_b$esjava$1('ţ')) return !1;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('t'));
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('ist');
                                }
                                return ((this.B_standard_suffix_removed = !0), !0);
                            }
                        },
                        {
                            key: 'r_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = r), !1);
                                    case 1:
                                        l: do {
                                            i = this.limit - this.cursor;
                                            do {
                                                if (!this.out_grouping_b$esjava$3(n.g_v, 97, 259)) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - i), !this.eq_s_b$esjava$1('u'))) return ((this.limit_backward = r), !1);
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_del$esjava$0();
                                }
                                return ((this.limit_backward = r), !0);
                            }
                        },
                        {
                            key: 'r_vowel_suffix$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)) || ((this.bra = this.cursor), !this.r_RV$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0;
                                e = this.cursor;
                                do if (!this.r_prelude$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (t = this.cursor));
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (this.limit_backward = this.cursor), (this.cursor = this.limit), (n = this.limit - this.cursor));
                                do if (!this.r_step_0$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_standard_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - r), (i = this.limit - this.cursor));
                                f: do
                                    _: do {
                                        a = this.limit - this.cursor;
                                        do {
                                            if (!this.B_standard_suffix_removed) break;
                                            break _;
                                        } while (!1);
                                        if (((this.cursor = this.limit - a), !this.r_verb_suffix$esjava$0())) break f;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - i), (o = this.limit - this.cursor));
                                do if (!this.r_vowel_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - o), (this.cursor = this.limit_backward), (s = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = s), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'B_standard_suffix_removed',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_standard_suffix_removed') ? this._$esjava$B_standard_suffix_removed : (this._$esjava$B_standard_suffix_removed = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_standard_suffix_removed = e;
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 3), new c('I', 0, 1), new c('U', 0, 2)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('ea', -1, 3), new c('aţia', -1, 7), new c('aua', -1, 2), new c('iua', -1, 4), new c('aţie', -1, 7), new c('ele', -1, 3), new c('ile', -1, 5), new c('iile', 6, 4), new c('iei', -1, 4), new c('atei', -1, 6), new c('ii', -1, 4), new c('ului', -1, 1), new c('ul', -1, 1), new c('elor', -1, 3), new c('ilor', -1, 4), new c('iilor', 14, 4)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('icala', -1, 4), new c('iciva', -1, 4), new c('ativa', -1, 5), new c('itiva', -1, 6), new c('icale', -1, 4), new c('aţiune', -1, 5), new c('iţiune', -1, 6), new c('atoare', -1, 5), new c('itoare', -1, 6), new c('ătoare', -1, 5), new c('icitate', -1, 4), new c('abilitate', -1, 1), new c('ibilitate', -1, 2), new c('ivitate', -1, 3), new c('icive', -1, 4), new c('ative', -1, 5), new c('itive', -1, 6), new c('icali', -1, 4), new c('atori', -1, 5), new c('icatori', 18, 4), new c('itori', -1, 6), new c('ători', -1, 5), new c('icitati', -1, 4), new c('abilitati', -1, 1), new c('ivitati', -1, 3), new c('icivi', -1, 4), new c('ativi', -1, 5), new c('itivi', -1, 6), new c('icităi', -1, 4), new c('abilităi', -1, 1), new c('ivităi', -1, 3), new c('icităţi', -1, 4), new c('abilităţi', -1, 1), new c('ivităţi', -1, 3), new c('ical', -1, 4), new c('ator', -1, 5), new c('icator', 35, 4), new c('itor', -1, 6), new c('ător', -1, 5), new c('iciv', -1, 4), new c('ativ', -1, 5), new c('itiv', -1, 6), new c('icală', -1, 4), new c('icivă', -1, 4), new c('ativă', -1, 5), new c('itivă', -1, 6)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ica', -1, 1), new c('abila', -1, 1), new c('ibila', -1, 1), new c('oasa', -1, 1), new c('ata', -1, 1), new c('ita', -1, 1), new c('anta', -1, 1), new c('ista', -1, 3), new c('uta', -1, 1), new c('iva', -1, 1), new c('ic', -1, 1), new c('ice', -1, 1), new c('abile', -1, 1), new c('ibile', -1, 1), new c('isme', -1, 3), new c('iune', -1, 2), new c('oase', -1, 1), new c('ate', -1, 1), new c('itate', 17, 1), new c('ite', -1, 1), new c('ante', -1, 1), new c('iste', -1, 3), new c('ute', -1, 1), new c('ive', -1, 1), new c('ici', -1, 1), new c('abili', -1, 1), new c('ibili', -1, 1), new c('iuni', -1, 2), new c('atori', -1, 1), new c('osi', -1, 1), new c('ati', -1, 1), new c('itati', 30, 1), new c('iti', -1, 1), new c('anti', -1, 1), new c('isti', -1, 3), new c('uti', -1, 1), new c('işti', -1, 3), new c('ivi', -1, 1), new c('ităi', -1, 1), new c('oşi', -1, 1), new c('ităţi', -1, 1), new c('abil', -1, 1), new c('ibil', -1, 1), new c('ism', -1, 3), new c('ator', -1, 1), new c('os', -1, 1), new c('at', -1, 1), new c('it', -1, 1), new c('ant', -1, 1), new c('ist', -1, 3), new c('ut', -1, 1), new c('iv', -1, 1), new c('ică', -1, 1), new c('abilă', -1, 1), new c('ibilă', -1, 1), new c('oasă', -1, 1), new c('ată', -1, 1), new c('ită', -1, 1), new c('antă', -1, 1), new c('istă', -1, 3), new c('ută', -1, 1), new c('ivă', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('ea', -1, 1), new c('ia', -1, 1), new c('esc', -1, 1), new c('ăsc', -1, 1), new c('ind', -1, 1), new c('ând', -1, 1), new c('are', -1, 1), new c('ere', -1, 1), new c('ire', -1, 1), new c('âre', -1, 1), new c('se', -1, 2), new c('ase', 10, 1), new c('sese', 10, 2), new c('ise', 10, 1), new c('use', 10, 1), new c('âse', 10, 1), new c('eşte', -1, 1), new c('ăşte', -1, 1), new c('eze', -1, 1), new c('ai', -1, 1), new c('eai', 19, 1), new c('iai', 19, 1), new c('sei', -1, 2), new c('eşti', -1, 1), new c('ăşti', -1, 1), new c('ui', -1, 1), new c('ezi', -1, 1), new c('âi', -1, 1), new c('aşi', -1, 1), new c('seşi', -1, 2), new c('aseşi', 29, 1), new c('seseşi', 29, 2), new c('iseşi', 29, 1), new c('useşi', 29, 1), new c('âseşi', 29, 1), new c('işi', -1, 1), new c('uşi', -1, 1), new c('âşi', -1, 1), new c('aţi', -1, 2), new c('eaţi', 38, 1), new c('iaţi', 38, 1), new c('eţi', -1, 2), new c('iţi', -1, 2), new c('âţi', -1, 2), new c('arăţi', -1, 1), new c('serăţi', -1, 2), new c('aserăţi', 45, 1), new c('seserăţi', 45, 2), new c('iserăţi', 45, 1), new c('userăţi', 45, 1), new c('âserăţi', 45, 1), new c('irăţi', -1, 1), new c('urăţi', -1, 1), new c('ârăţi', -1, 1), new c('am', -1, 1), new c('eam', 54, 1), new c('iam', 54, 1), new c('em', -1, 2), new c('asem', 57, 1), new c('sesem', 57, 2), new c('isem', 57, 1), new c('usem', 57, 1), new c('âsem', 57, 1), new c('im', -1, 2), new c('âm', -1, 2), new c('ăm', -1, 2), new c('arăm', 65, 1), new c('serăm', 65, 2), new c('aserăm', 67, 1), new c('seserăm', 67, 2), new c('iserăm', 67, 1), new c('userăm', 67, 1), new c('âserăm', 67, 1), new c('irăm', 65, 1), new c('urăm', 65, 1), new c('ârăm', 65, 1), new c('au', -1, 1), new c('eau', 76, 1), new c('iau', 76, 1), new c('indu', -1, 1), new c('ându', -1, 1), new c('ez', -1, 1), new c('ească', -1, 1), new c('ară', -1, 1), new c('seră', -1, 2), new c('aseră', 84, 1), new c('seseră', 84, 2), new c('iseră', 84, 1), new c('useră', 84, 1), new c('âseră', 84, 1), new c('iră', -1, 1), new c('ură', -1, 1), new c('âră', -1, 1), new c('ează', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('a', -1, 1), new c('e', -1, 1), new c('ie', 1, 1), new c('i', -1, 1), new c('ă', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        w = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0;
                                ((this.I_pV = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    A: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 1072, 1103)) break;
                                            break A;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_pV = this.cursor;
                                    N: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 1072, 1103)) break;
                                            break N;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    C: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 1072, 1103)) break;
                                            break C;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    w: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 1072, 1103)) break;
                                            break w;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break l;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_perfective_gerund$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        l: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('а')) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.eq_s_b$esjava$1('я'))) return !1;
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_adjective$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_adjectival$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (!this.r_adjective$esjava$0()) return !1;
                                t = this.limit - this.cursor;
                                l: do {
                                    if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) {
                                        this.cursor = this.limit - t;
                                        break;
                                    }
                                    switch (((this.bra = this.cursor), e)) {
                                        case 0:
                                            this.cursor = this.limit - t;
                                            break l;
                                        case 1:
                                            c: do {
                                                r = this.limit - this.cursor;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('а')) break;
                                                    break c;
                                                } while (!1);
                                                if (((this.cursor = this.limit - r), !this.eq_s_b$esjava$1('я'))) {
                                                    this.cursor = this.limit - t;
                                                    break l;
                                                }
                                            } while (!1);
                                            this.slice_del$esjava$0();
                                            break;
                                        case 2:
                                            this.slice_del$esjava$0();
                                    }
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_reflexive$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        l: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('а')) break;
                                                break l;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.eq_s_b$esjava$1('я'))) return !1;
                                        } while (!1);
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_noun$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_derivational$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_tidy_up$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if ((this.slice_del$esjava$0(), (this.ket = this.cursor), !this.eq_s_b$esjava$1('н') || ((this.bra = this.cursor), !this.eq_s_b$esjava$1('н')))) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.eq_s_b$esjava$1('н')) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 3:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                if (((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                ((this.cursor = this.I_pV), (n = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (r = this.limit - this.cursor));
                                c: do
                                    u: do {
                                        i = this.limit - this.cursor;
                                        do {
                                            if (!this.r_perfective_gerund$esjava$0()) break;
                                            break u;
                                        } while (!1);
                                        ((this.cursor = this.limit - i), (a = this.limit - this.cursor));
                                        do
                                            if (!this.r_reflexive$esjava$0()) {
                                                this.cursor = this.limit - a;
                                                break;
                                            }
                                        while (!1);
                                        _: do {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.r_adjectival$esjava$0()) break;
                                                break _;
                                            } while (!1);
                                            this.cursor = this.limit - o;
                                            do {
                                                if (!this.r_verb$esjava$0()) break;
                                                break _;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), !this.r_noun$esjava$0())) break c;
                                        } while (!1);
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - r), (s = this.limit - this.cursor));
                                do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('и'))) {
                                        this.cursor = this.limit - s;
                                        break;
                                    }
                                    ((this.bra = this.cursor), this.slice_del$esjava$0());
                                } while (!1);
                                l = this.limit - this.cursor;
                                do if (!this.r_derivational$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - l), (c = this.limit - this.cursor));
                                do if (!this.r_tidy_up$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - c), (this.limit_backward = n), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('в', -1, 1), new c('ив', 0, 2), new c('ыв', 0, 2), new c('вши', -1, 1), new c('ивши', 3, 2), new c('ывши', 3, 2), new c('вшись', -1, 1), new c('ившись', 6, 2), new c('ывшись', 6, 2)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('ее', -1, 1), new c('ие', -1, 1), new c('ое', -1, 1), new c('ые', -1, 1), new c('ими', -1, 1), new c('ыми', -1, 1), new c('ей', -1, 1), new c('ий', -1, 1), new c('ой', -1, 1), new c('ый', -1, 1), new c('ем', -1, 1), new c('им', -1, 1), new c('ом', -1, 1), new c('ым', -1, 1), new c('его', -1, 1), new c('ого', -1, 1), new c('ему', -1, 1), new c('ому', -1, 1), new c('их', -1, 1), new c('ых', -1, 1), new c('ею', -1, 1), new c('ою', -1, 1), new c('ую', -1, 1), new c('юю', -1, 1), new c('ая', -1, 1), new c('яя', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ем', -1, 1), new c('нн', -1, 1), new c('вш', -1, 1), new c('ивш', 2, 2), new c('ывш', 2, 2), new c('щ', -1, 1), new c('ющ', 5, 1), new c('ующ', 6, 2)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('сь', -1, 1), new c('ся', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('ла', -1, 1), new c('ила', 0, 2), new c('ыла', 0, 2), new c('на', -1, 1), new c('ена', 3, 2), new c('ете', -1, 1), new c('ите', -1, 2), new c('йте', -1, 1), new c('ейте', 7, 2), new c('уйте', 7, 2), new c('ли', -1, 1), new c('или', 10, 2), new c('ыли', 10, 2), new c('й', -1, 1), new c('ей', 13, 2), new c('уй', 13, 2), new c('л', -1, 1), new c('ил', 16, 2), new c('ыл', 16, 2), new c('ем', -1, 1), new c('им', -1, 2), new c('ым', -1, 2), new c('н', -1, 1), new c('ен', 22, 2), new c('ло', -1, 1), new c('ило', 24, 2), new c('ыло', 24, 2), new c('но', -1, 1), new c('ено', 27, 2), new c('нно', 27, 1), new c('ет', -1, 1), new c('ует', 30, 2), new c('ит', -1, 2), new c('ыт', -1, 2), new c('ют', -1, 1), new c('уют', 34, 2), new c('ят', -1, 2), new c('ны', -1, 1), new c('ены', 37, 2), new c('ть', -1, 1), new c('ить', 39, 2), new c('ыть', 39, 2), new c('ешь', -1, 1), new c('ишь', -1, 2), new c('ю', -1, 2), new c('ую', 44, 2)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('а', -1, 1), new c('ев', -1, 1), new c('ов', -1, 1), new c('е', -1, 1), new c('ие', 3, 1), new c('ье', 3, 1), new c('и', -1, 1), new c('еи', 6, 1), new c('ии', 6, 1), new c('ами', 6, 1), new c('ями', 6, 1), new c('иями', 10, 1), new c('й', -1, 1), new c('ей', 12, 1), new c('ией', 13, 1), new c('ий', 12, 1), new c('ой', 12, 1), new c('ам', -1, 1), new c('ем', -1, 1), new c('ием', 18, 1), new c('ом', -1, 1), new c('ям', -1, 1), new c('иям', 21, 1), new c('о', -1, 1), new c('у', -1, 1), new c('ах', -1, 1), new c('ях', -1, 1), new c('иях', 26, 1), new c('ы', -1, 1), new c('ь', -1, 1), new c('ю', -1, 1), new c('ию', 30, 1), new c('ью', 30, 1), new c('я', -1, 1), new c('ия', 33, 1), new c('ья', 33, 1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('ост', -1, 1), new c('ость', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('ейше', -1, 1), new c('н', -1, 2), new c('ейш', -1, 1), new c('ь', -1, 3)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [33, 65, 8, 232]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        R = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0;
                                ((this.I_p1 = this.current.length()), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do
                                    for (r = 4; r > 0; r--) {
                                        i = this.limit - this.cursor;
                                        c: do {
                                            if (!(this.I_p1 > 8) || ((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - i;
                                                    break c;
                                                case 1:
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        a = this.limit - this.cursor;
                                        u: do {
                                            if (!(this.I_p1 > 7) || ((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_1)))) {
                                                this.cursor = this.limit - a;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - a;
                                                    break u;
                                                case 1:
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        ((this.I_p1 = this.current.length()), (o = this.limit - this.cursor));
                                        d: do {
                                            if (!(this.I_p1 > 6) || ((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) {
                                                this.cursor = this.limit - o;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - o;
                                                    break d;
                                                case 1:
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        ((this.I_p1 = this.current.length()), (s = this.limit - this.cursor));
                                        f: do {
                                            if (!(this.I_p1 > 6) || ((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)))) {
                                                this.cursor = this.limit - s;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - s;
                                                    break f;
                                                case 1:
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        ((this.I_p1 = this.current.length()), (l = this.limit - this.cursor));
                                        _: do {
                                            if (!(this.I_p1 > 5) || ((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) {
                                                this.cursor = this.limit - l;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - l;
                                                    break _;
                                                case 1:
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        ((this.I_p1 = this.current.length()), (c = this.limit - this.cursor));
                                        do {
                                            if (!(this.I_p1 > 6) || ((this.ket = this.cursor), !this.in_grouping_b$esjava$3(n.g_soglasniki, 98, 382)) || ((this.bra = this.cursor), (u = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_soglasniki, 98, 382))) {
                                                this.cursor = this.limit - c;
                                                break;
                                            }
                                            ((this.cursor = this.limit - u), this.slice_del$esjava$0());
                                        } while (!1);
                                        ((this.I_p1 = this.current.length()), (d = this.limit - this.cursor));
                                        F: do {
                                            if (!(this.I_p1 > 5) || ((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) {
                                                this.cursor = this.limit - d;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - d;
                                                    break F;
                                                case 1:
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                    }
                                while (!1);
                                return ((this.cursor = this.limit - t), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('anski', -1, 1), new c('evski', -1, 1), new c('ovski', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('stvo', -1, 1), new c('štvo', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ega', -1, 1), new c('ija', -1, 1), new c('ila', -1, 1), new c('ema', -1, 1), new c('vna', -1, 1), new c('ite', -1, 1), new c('ste', -1, 1), new c('šče', -1, 1), new c('ski', -1, 1), new c('ški', -1, 1), new c('iti', -1, 1), new c('ovi', -1, 1), new c('ček', -1, 1), new c('ovm', -1, 1), new c('čan', -1, 1), new c('len', -1, 1), new c('ven', -1, 1), new c('šen', -1, 1), new c('ejo', -1, 1), new c('ijo', -1, 1), new c('ast', -1, 1), new c('ost', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ja', -1, 1), new c('ka', -1, 1), new c('ma', -1, 1), new c('ec', -1, 1), new c('je', -1, 1), new c('eg', -1, 1), new c('eh', -1, 1), new c('ih', -1, 1), new c('mi', -1, 1), new c('ti', -1, 1), new c('ij', -1, 1), new c('al', -1, 1), new c('il', -1, 1), new c('em', -1, 1), new c('om', -1, 1), new c('an', -1, 1), new c('en', -1, 1), new c('in', -1, 1), new c('do', -1, 1), new c('jo', -1, 1), new c('ir', -1, 1), new c('at', -1, 1), new c('ev', -1, 1), new c('iv', -1, 1), new c('ov', -1, 1), new c('oč', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('a', -1, 1), new c('c', -1, 1), new c('e', -1, 1), new c('i', -1, 1), new c('m', -1, 1), new c('o', -1, 1), new c('u', -1, 1), new c('š', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('a', -1, 1), new c('e', -1, 1), new c('i', -1, 1), new c('o', -1, 1), new c('u', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_soglasniki',
                            get: function () {
                                return (delete n.g_soglasniki, (n.g_soglasniki = [119, 95, 23, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 16]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        P = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                ((this.I_pV = this.limit), (this.I_p1 = this.limit), (this.I_p2 = this.limit), (e = this.cursor));
                                l: do {
                                    c: do {
                                        t = this.cursor;
                                        u: do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            d: do {
                                                r = this.cursor;
                                                f: do {
                                                    if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                                    C: for (;;) {
                                                        do {
                                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                                            break C;
                                                        } while (!1);
                                                        if (this.cursor >= this.limit) break f;
                                                        this.cursor++;
                                                    }
                                                    break d;
                                                } while (!1);
                                                if (((this.cursor = r), !this.in_grouping$esjava$3(n.g_v, 97, 252))) break u;
                                                w: for (;;) {
                                                    do {
                                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                                        break w;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break u;
                                                    this.cursor++;
                                                }
                                            } while (!1);
                                            break c;
                                        } while (!1);
                                        if (((this.cursor = t), !this.out_grouping$esjava$3(n.g_v, 97, 252))) break l;
                                        m: do {
                                            i = this.cursor;
                                            R: do {
                                                if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                                P: for (;;) {
                                                    do {
                                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                                        break P;
                                                    } while (!1);
                                                    if (this.cursor >= this.limit) break R;
                                                    this.cursor++;
                                                }
                                                break m;
                                            } while (!1);
                                            if (((this.cursor = i), !this.in_grouping$esjava$3(n.g_v, 97, 252) || this.cursor >= this.limit)) break l;
                                            this.cursor++;
                                        } while (!1);
                                    } while (!1);
                                    this.I_pV = this.cursor;
                                } while (!1);
                                ((this.cursor = e), (a = this.cursor));
                                D: do {
                                    L: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break L;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    x: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break x;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p1 = this.cursor;
                                    k: for (;;) {
                                        do {
                                            if (!this.in_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break k;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    j: for (;;) {
                                        do {
                                            if (!this.out_grouping$esjava$3(n.g_v, 97, 252)) break;
                                            break j;
                                        } while (!1);
                                        if (this.cursor >= this.limit) break D;
                                        this.cursor++;
                                    }
                                    this.I_p2 = this.cursor;
                                } while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        if (((this.bra = this.cursor), 0 === (e = this.find_among$esjava$1(n.a_0)))) break;
                                        switch (((this.ket = this.cursor), e)) {
                                            case 0:
                                                break c;
                                            case 1:
                                                this.slice_from$esjava$1('a');
                                                break;
                                            case 2:
                                                this.slice_from$esjava$1('e');
                                                break;
                                            case 3:
                                                this.slice_from$esjava$1('i');
                                                break;
                                            case 4:
                                                this.slice_from$esjava$1('o');
                                                break;
                                            case 5:
                                                this.slice_from$esjava$1('u');
                                                break;
                                            case 6:
                                                if (this.cursor >= this.limit) break c;
                                                this.cursor++;
                                        }
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_RV$esjava$0',
                            value: function () {
                                return this.I_pV <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R1$esjava$0',
                            value: function () {
                                return this.I_p1 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_R2$esjava$0',
                            value: function () {
                                return this.I_p2 <= this.cursor;
                            }
                        },
                        {
                            key: 'r_attached_pronoun$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_1) || ((this.bra = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)) || !this.r_RV$esjava$0()))) return !1;
                                switch (e) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('iendo'));
                                        break;
                                    case 2:
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ando'));
                                        break;
                                    case 3:
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ar'));
                                        break;
                                    case 4:
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('er'));
                                        break;
                                    case 5:
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ir'));
                                        break;
                                    case 6:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 7:
                                        if (!this.eq_s_b$esjava$1('u')) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_standard_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_6)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ic') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                            this.slice_del$esjava$0();
                                        } while (!1);
                                        break;
                                    case 3:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('log');
                                        break;
                                    case 4:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('u');
                                        break;
                                    case 5:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        this.slice_from$esjava$1('ente');
                                        break;
                                    case 6:
                                        if (!this.r_R1$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (r = this.limit - this.cursor));
                                        c: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_3)) || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - r;
                                                break;
                                            }
                                            switch ((this.slice_del$esjava$0(), e)) {
                                                case 0:
                                                    this.cursor = this.limit - r;
                                                    break c;
                                                case 1:
                                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                        this.cursor = this.limit - r;
                                                        break c;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 7:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (i = this.limit - this.cursor));
                                        u: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_4)))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - i;
                                                    break u;
                                                case 1:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - i;
                                                        break u;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 8:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (a = this.limit - this.cursor));
                                        d: do {
                                            if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_5)))) {
                                                this.cursor = this.limit - a;
                                                break;
                                            }
                                            switch (((this.bra = this.cursor), e)) {
                                                case 0:
                                                    this.cursor = this.limit - a;
                                                    break d;
                                                case 1:
                                                    if (!this.r_R2$esjava$0()) {
                                                        this.cursor = this.limit - a;
                                                        break d;
                                                    }
                                                    this.slice_del$esjava$0();
                                            }
                                        } while (!1);
                                        break;
                                    case 9:
                                        if (!this.r_R2$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (o = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('at') || ((this.bra = this.cursor), !this.r_R2$esjava$0()))) {
                                                this.cursor = this.limit - o;
                                                break;
                                            }
                                            this.slice_del$esjava$0();
                                        } while (!1);
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_y_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_7)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.eq_s_b$esjava$1('u')) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_verb_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_pV)) return !1;
                                if (((this.cursor = this.I_pV), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_8)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        i = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('u') || ((a = this.limit - this.cursor), !this.eq_s_b$esjava$1('g'))) {
                                                this.cursor = this.limit - i;
                                                break;
                                            }
                                            this.cursor = this.limit - a;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break;
                                    case 2:
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_residual_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_9)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.r_RV$esjava$0()) return !1;
                                        (this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do {
                                            if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('u') || ((this.bra = this.cursor), (r = this.limit - this.cursor), !this.eq_s_b$esjava$1('g')) || ((this.cursor = this.limit - r), !this.r_RV$esjava$0()))) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                            this.slice_del$esjava$0();
                                        } while (!1);
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_attached_pronoun$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                u: do
                                    d: do {
                                        r = this.limit - this.cursor;
                                        do {
                                            if (!this.r_standard_suffix$esjava$0()) break;
                                            break d;
                                        } while (!1);
                                        this.cursor = this.limit - r;
                                        do {
                                            if (!this.r_y_verb_suffix$esjava$0()) break;
                                            break d;
                                        } while (!1);
                                        if (((this.cursor = this.limit - r), !this.r_verb_suffix$esjava$0())) break u;
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - n), (i = this.limit - this.cursor));
                                do if (!this.r_residual_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - i), (this.cursor = this.limit_backward), (a = this.cursor));
                                do if (!this.r_postlude$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = a), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_p2',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p2') ? this._$esjava$I_p2 : (this._$esjava$I_p2 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p2 = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        },
                        {
                            key: 'I_pV',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_pV') ? this._$esjava$I_pV : (this._$esjava$I_pV = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_pV = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('', -1, 6), new c('á', 0, 1), new c('é', 0, 2), new c('í', 0, 3), new c('ó', 0, 4), new c('ú', 0, 5)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('la', -1, -1), new c('sela', 0, -1), new c('le', -1, -1), new c('me', -1, -1), new c('se', -1, -1), new c('lo', -1, -1), new c('selo', 5, -1), new c('las', -1, -1), new c('selas', 7, -1), new c('les', -1, -1), new c('los', -1, -1), new c('selos', 10, -1), new c('nos', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ando', -1, 6), new c('iendo', -1, 6), new c('yendo', -1, 7), new c('ándo', -1, 2), new c('iéndo', -1, 1), new c('ar', -1, 6), new c('er', -1, 6), new c('ir', -1, 6), new c('ár', -1, 3), new c('ér', -1, 4), new c('ír', -1, 5)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('ic', -1, -1), new c('ad', -1, -1), new c('os', -1, -1), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('able', -1, 1), new c('ible', -1, 1), new c('ante', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('ic', -1, 1), new c('abil', -1, 1), new c('iv', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('ica', -1, 1), new c('ancia', -1, 2), new c('encia', -1, 5), new c('adora', -1, 2), new c('osa', -1, 1), new c('ista', -1, 1), new c('iva', -1, 9), new c('anza', -1, 1), new c('logía', -1, 3), new c('idad', -1, 8), new c('able', -1, 1), new c('ible', -1, 1), new c('ante', -1, 2), new c('mente', -1, 7), new c('amente', 13, 6), new c('ación', -1, 2), new c('ución', -1, 4), new c('ico', -1, 1), new c('ismo', -1, 1), new c('oso', -1, 1), new c('amiento', -1, 1), new c('imiento', -1, 1), new c('ivo', -1, 9), new c('ador', -1, 2), new c('icas', -1, 1), new c('ancias', -1, 2), new c('encias', -1, 5), new c('adoras', -1, 2), new c('osas', -1, 1), new c('istas', -1, 1), new c('ivas', -1, 9), new c('anzas', -1, 1), new c('logías', -1, 3), new c('idades', -1, 8), new c('ables', -1, 1), new c('ibles', -1, 1), new c('aciones', -1, 2), new c('uciones', -1, 4), new c('adores', -1, 2), new c('antes', -1, 2), new c('icos', -1, 1), new c('ismos', -1, 1), new c('osos', -1, 1), new c('amientos', -1, 1), new c('imientos', -1, 1), new c('ivos', -1, 9)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('ya', -1, 1), new c('ye', -1, 1), new c('yan', -1, 1), new c('yen', -1, 1), new c('yeron', -1, 1), new c('yendo', -1, 1), new c('yo', -1, 1), new c('yas', -1, 1), new c('yes', -1, 1), new c('yais', -1, 1), new c('yamos', -1, 1), new c('yó', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('aba', -1, 2), new c('ada', -1, 2), new c('ida', -1, 2), new c('ara', -1, 2), new c('iera', -1, 2), new c('ía', -1, 2), new c('aría', 5, 2), new c('ería', 5, 2), new c('iría', 5, 2), new c('ad', -1, 2), new c('ed', -1, 2), new c('id', -1, 2), new c('ase', -1, 2), new c('iese', -1, 2), new c('aste', -1, 2), new c('iste', -1, 2), new c('an', -1, 2), new c('aban', 16, 2), new c('aran', 16, 2), new c('ieran', 16, 2), new c('ían', 16, 2), new c('arían', 20, 2), new c('erían', 20, 2), new c('irían', 20, 2), new c('en', -1, 1), new c('asen', 24, 2), new c('iesen', 24, 2), new c('aron', -1, 2), new c('ieron', -1, 2), new c('arán', -1, 2), new c('erán', -1, 2), new c('irán', -1, 2), new c('ado', -1, 2), new c('ido', -1, 2), new c('ando', -1, 2), new c('iendo', -1, 2), new c('ar', -1, 2), new c('er', -1, 2), new c('ir', -1, 2), new c('as', -1, 2), new c('abas', 39, 2), new c('adas', 39, 2), new c('idas', 39, 2), new c('aras', 39, 2), new c('ieras', 39, 2), new c('ías', 39, 2), new c('arías', 45, 2), new c('erías', 45, 2), new c('irías', 45, 2), new c('es', -1, 1), new c('ases', 49, 2), new c('ieses', 49, 2), new c('abais', -1, 2), new c('arais', -1, 2), new c('ierais', -1, 2), new c('íais', -1, 2), new c('aríais', 55, 2), new c('eríais', 55, 2), new c('iríais', 55, 2), new c('aseis', -1, 2), new c('ieseis', -1, 2), new c('asteis', -1, 2), new c('isteis', -1, 2), new c('áis', -1, 2), new c('éis', -1, 1), new c('aréis', 64, 2), new c('eréis', 64, 2), new c('iréis', 64, 2), new c('ados', -1, 2), new c('idos', -1, 2), new c('amos', -1, 2), new c('ábamos', 70, 2), new c('áramos', 70, 2), new c('iéramos', 70, 2), new c('íamos', 70, 2), new c('aríamos', 74, 2), new c('eríamos', 74, 2), new c('iríamos', 74, 2), new c('emos', -1, 1), new c('aremos', 78, 2), new c('eremos', 78, 2), new c('iremos', 78, 2), new c('ásemos', 78, 2), new c('iésemos', 78, 2), new c('imos', -1, 2), new c('arás', -1, 2), new c('erás', -1, 2), new c('irás', -1, 2), new c('ís', -1, 2), new c('ará', -1, 2), new c('erá', -1, 2), new c('irá', -1, 2), new c('aré', -1, 2), new c('eré', -1, 2), new c('iré', -1, 2), new c('ió', -1, 2)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('a', -1, 1), new c('e', -1, 2), new c('o', -1, 1), new c('os', -1, 1), new c('á', -1, 1), new c('é', -1, 2), new c('í', -1, 1), new c('ó', -1, 1)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        D = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_mark_regions$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                ((this.I_p1 = this.limit), (e = this.cursor));
                                var r = this.cursor + 3;
                                if (0 > r || r > this.limit) return !1;
                                ((this.cursor = r), (this.I_x = this.cursor), (this.cursor = e));
                                B: for (;;) {
                                    t = this.cursor;
                                    do {
                                        if (!this.in_grouping$esjava$3(n.g_v, 97, 246)) break;
                                        this.cursor = t;
                                        break B;
                                    } while (!1);
                                    if (((this.cursor = t), this.cursor >= this.limit)) return !1;
                                    this.cursor++;
                                }
                                Z: for (;;) {
                                    do {
                                        if (!this.out_grouping$esjava$3(n.g_v, 97, 246)) break;
                                        break Z;
                                    } while (!1);
                                    if (this.cursor >= this.limit) return !1;
                                    this.cursor++;
                                }
                                this.I_p1 = this.cursor;
                                do {
                                    if (!(this.I_p1 < this.I_x)) break;
                                    this.I_p1 = this.I_x;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_main_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_0)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), (this.limit_backward = r), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        if (!this.in_grouping_b$esjava$3(n.g_s_ending, 98, 121)) return !1;
                                        this.slice_del$esjava$0();
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_consonant_pair$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                return ((e = this.limit - this.cursor), !(this.cursor < this.I_p1) && (((this.cursor = this.I_p1), (t = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - e), (r = this.limit - this.cursor), 0 === this.find_among_b$esjava$1(n.a_1) || ((this.cursor = this.limit - r), (this.ket = this.cursor), this.cursor <= this.limit_backward)) ? ((this.limit_backward = t), !1) : (this.cursor--, (this.bra = this.cursor), this.slice_del$esjava$0(), (this.limit_backward = t), !0)));
                            }
                        },
                        {
                            key: 'r_other_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                if (((t = this.limit - this.cursor), this.cursor < this.I_p1)) return !1;
                                if (((this.cursor = this.I_p1), (r = this.limit_backward), (this.limit_backward = this.cursor), (this.cursor = this.limit - t), (this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_2)))) return ((this.limit_backward = r), !1);
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return ((this.limit_backward = r), !1);
                                    case 1:
                                        this.slice_del$esjava$0();
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('lös');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('full');
                                }
                                return ((this.limit_backward = r), !0);
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0;
                                e = this.cursor;
                                do if (!this.r_mark_regions$esjava$0()) break;
                                while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_main_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_consonant_pair$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - n), (r = this.limit - this.cursor));
                                do if (!this.r_other_suffix$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - r), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_x',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_x') ? this._$esjava$I_x : (this._$esjava$I_x = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_x = e;
                            }
                        },
                        {
                            key: 'I_p1',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_p1') ? this._$esjava$I_p1 : (this._$esjava$I_p1 = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_p1 = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('a', -1, 1), new c('arna', 0, 1), new c('erna', 0, 1), new c('heterna', 2, 1), new c('orna', 0, 1), new c('ad', -1, 1), new c('e', -1, 1), new c('ade', 6, 1), new c('ande', 6, 1), new c('arne', 6, 1), new c('are', 6, 1), new c('aste', 6, 1), new c('en', -1, 1), new c('anden', 12, 1), new c('aren', 12, 1), new c('heten', 12, 1), new c('ern', -1, 1), new c('ar', -1, 1), new c('er', -1, 1), new c('heter', 18, 1), new c('or', -1, 1), new c('s', -1, 2), new c('as', 21, 1), new c('arnas', 22, 1), new c('ernas', 22, 1), new c('ornas', 22, 1), new c('es', 21, 1), new c('ades', 26, 1), new c('andes', 26, 1), new c('ens', 21, 1), new c('arens', 29, 1), new c('hetens', 29, 1), new c('erns', 21, 1), new c('at', -1, 1), new c('andet', -1, 1), new c('het', -1, 1), new c('ast', -1, 1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('dd', -1, -1), new c('gd', -1, -1), new c('nn', -1, -1), new c('dt', -1, -1), new c('gt', -1, -1), new c('kt', -1, -1), new c('tt', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ig', -1, 1), new c('lig', 0, 1), new c('els', -1, 1), new c('fullt', -1, 3), new c('löst', -1, 2)]));
                            }
                        },
                        {
                            key: 'g_v',
                            get: function () {
                                return (delete n.g_v, (n.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32]));
                            }
                        },
                        {
                            key: 'g_s_ending',
                            get: function () {
                                return (delete n.g_s_ending, (n.g_s_ending = [119, 127, 149]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        L = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_has_min_length$esjava$0',
                            value: function () {
                                return ((this.I_length = this.current.length()), this.I_length > 4);
                            }
                        },
                        {
                            key: 'r_fix_va_start$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0;
                                l: do {
                                    e = this.cursor;
                                    do {
                                        ((t = this.cursor), (n = this.cursor));
                                        do
                                            if (!this.eq_s$esjava$1('வோ')) {
                                                this.cursor = n;
                                                break;
                                            }
                                        while (!1);
                                        if (((this.cursor = t), (this.bra = this.cursor), !this.eq_s$esjava$1('வோ'))) break;
                                        ((this.ket = this.cursor), this.slice_from$esjava$1('ஓ'));
                                        break l;
                                    } while (!1);
                                    this.cursor = e;
                                    do {
                                        ((r = this.cursor), (i = this.cursor));
                                        do
                                            if (!this.eq_s$esjava$1('வொ')) {
                                                this.cursor = i;
                                                break;
                                            }
                                        while (!1);
                                        if (((this.cursor = r), (this.bra = this.cursor), !this.eq_s$esjava$1('வொ'))) break;
                                        ((this.ket = this.cursor), this.slice_from$esjava$1('ஒ'));
                                        break l;
                                    } while (!1);
                                    this.cursor = e;
                                    do {
                                        ((a = this.cursor), (o = this.cursor));
                                        do
                                            if (!this.eq_s$esjava$1('வு')) {
                                                this.cursor = o;
                                                break;
                                            }
                                        while (!1);
                                        if (((this.cursor = a), (this.bra = this.cursor), !this.eq_s$esjava$1('வு'))) break;
                                        ((this.ket = this.cursor), this.slice_from$esjava$1('உ'));
                                        break l;
                                    } while (!1);
                                    ((this.cursor = e), (s = this.cursor), (l = this.cursor));
                                    do
                                        if (!this.eq_s$esjava$1('வூ')) {
                                            this.cursor = l;
                                            break;
                                        }
                                    while (!1);
                                    if (((this.cursor = s), (this.bra = this.cursor), !this.eq_s$esjava$1('வூ'))) return !1;
                                    ((this.ket = this.cursor), this.slice_from$esjava$1('ஊ'));
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_fix_endings$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                this.B_found_wrong_ending = !0;
                                G: for (;;) {
                                    e = this.cursor;
                                    do {
                                        if (!this.B_found_wrong_ending) break;
                                        t = this.cursor;
                                        do if (!this.r_fix_ending$esjava$0()) break;
                                        while (!1);
                                        this.cursor = t;
                                        continue G;
                                    } while (!1);
                                    this.cursor = e;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_remove_question_prefixes$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.bra = this.cursor), !this.eq_s$esjava$1('எ') || 0 === this.find_among$esjava$1(n.a_0) || !this.eq_s$esjava$1('்'))) return !1;
                                ((this.ket = this.cursor), this.slice_del$esjava$0(), (e = this.cursor));
                                do if (!this.r_fix_va_start$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_fix_ending$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0;
                                if (((this.B_found_wrong_ending = !1), (this.I_length = this.current.length()), !(this.I_length > 3))) return !1;
                                ((this.limit_backward = this.cursor), (this.cursor = this.limit));
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (((this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_1))) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ய்') || ((t = this.limit - this.cursor), 0 === this.find_among_b$esjava$1(n.a_2)))) break;
                                        ((this.cursor = this.limit - t), (this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    d: do {
                                        this.ket = this.cursor;
                                        f: do {
                                            r = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ட்ப்')) break;
                                                break f;
                                            } while (!1);
                                            if (((this.cursor = this.limit - r), !this.eq_s_b$esjava$1('ட்க்'))) break d;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ள்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ன்ற்'))) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ல்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ற்க்'))) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ல்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ட்ட்'))) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('டு'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    m: do {
                                        if (!this.B_found_vetrumai_urupu || ((this.ket = this.cursor), !this.eq_s_b$esjava$1('த்த்'))) break;
                                        ((i = this.limit - this.cursor), (a = this.limit - this.cursor));
                                        do {
                                            if (!this.eq_s_b$esjava$1('ை')) break;
                                            break m;
                                        } while (!1);
                                        ((this.cursor = this.limit - a), (this.cursor = this.limit - i), (this.bra = this.cursor), this.slice_from$esjava$1('ம்'), (this.bra = this.cursor));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    en: do {
                                        this.ket = this.cursor;
                                        K: do {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ுக்')) break;
                                                break K;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), !this.eq_s_b$esjava$1('ுக்க்'))) break en;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('்') || 0 === this.find_among_b$esjava$1(n.a_3) || !this.eq_s_b$esjava$1('்') || 0 === this.find_among_b$esjava$1(n.a_4))) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ுக்'))) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('்') || 0 === this.find_among_b$esjava$1(n.a_5))) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    b: do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('்'))) break;
                                        er: do {
                                            s = this.limit - this.cursor;
                                            do {
                                                if (0 === this.find_among_b$esjava$1(n.a_6)) break;
                                                break er;
                                            } while (!1);
                                            if (((this.cursor = this.limit - s), 0 === this.find_among_b$esjava$1(n.a_7))) break b;
                                        } while (!1);
                                        if (!this.eq_s_b$esjava$1('்')) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_8))) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    ei: do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('னு'))) break;
                                        ((l = this.limit - this.cursor), (c = this.limit - this.cursor));
                                        do {
                                            if (0 === this.find_among_b$esjava$1(n.a_9)) break;
                                            break ei;
                                        } while (!1);
                                        ((this.cursor = this.limit - c), (this.cursor = this.limit - l), (this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    O: do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ங்'))) break;
                                        ((u = this.limit - this.cursor), (d = this.limit - this.cursor));
                                        do {
                                            if (!this.eq_s_b$esjava$1('ை')) break;
                                            break O;
                                        } while (!1);
                                        ((this.cursor = this.limit - d), (this.cursor = this.limit - u), (this.bra = this.cursor), this.slice_from$esjava$1('ம்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ங்'))) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), (this.ket = this.cursor), !this.eq_s_b$esjava$1('்'))) return !1;
                                    f = this.limit - this.cursor;
                                    ea: do {
                                        _ = this.limit - this.cursor;
                                        do {
                                            if (0 === this.find_among_b$esjava$1(n.a_10)) break;
                                            break ea;
                                        } while (!1);
                                        if (((this.cursor = this.limit - _), !this.eq_s_b$esjava$1('்'))) return !1;
                                    } while (!1);
                                    ((this.cursor = this.limit - f), (this.bra = this.cursor), this.slice_del$esjava$0());
                                } while (!1);
                                return ((this.cursor = this.limit_backward), (this.B_found_wrong_ending = !0), !0);
                            }
                        },
                        {
                            key: 'r_remove_pronoun_prefixes$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.B_found_a_match = !1), (this.bra = this.cursor), 0 === this.find_among$esjava$1(n.a_11) || 0 === this.find_among$esjava$1(n.a_12) || !this.eq_s$esjava$1('்'))) return !1;
                                ((this.ket = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0), (e = this.cursor));
                                do if (!this.r_fix_va_start$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_remove_plural_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0;
                                ((this.B_found_a_match = !1), (this.limit_backward = this.cursor), (this.cursor = this.limit));
                                l: do {
                                    e = this.limit - this.cursor;
                                    c: do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ுங்கள்'))) break;
                                        ((t = this.limit - this.cursor), (r = this.limit - this.cursor));
                                        do {
                                            if (0 === this.find_among_b$esjava$1(n.a_13)) break;
                                            break c;
                                        } while (!1);
                                        ((this.cursor = this.limit - r), (this.cursor = this.limit - t), (this.bra = this.cursor), this.slice_from$esjava$1('்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ற்கள்'))) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ல்'));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ட்கள்'))) break;
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('ள்'));
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), (this.ket = this.cursor), !this.eq_s_b$esjava$1('கள்'))) return !1;
                                    ((this.bra = this.cursor), this.slice_del$esjava$0());
                                } while (!1);
                                return ((this.B_found_a_match = !0), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'r_remove_question_suffixes$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (!this.r_has_min_length$esjava$0()) return !1;
                                ((this.B_found_a_match = !1), (this.limit_backward = this.cursor), (this.cursor = this.limit), (e = this.limit - this.cursor));
                                do {
                                    if (((this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_14))) break;
                                    ((this.bra = this.cursor), this.slice_from$esjava$1('்'), (this.B_found_a_match = !0));
                                } while (!1);
                                ((this.cursor = this.limit - e), (this.cursor = this.limit_backward), (t = this.cursor));
                                do if (!this.r_fix_endings$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = t), !0);
                            }
                        },
                        {
                            key: 'r_remove_command_suffixes$esjava$0',
                            value: function () {
                                return !!this.r_has_min_length$esjava$0() && ((this.B_found_a_match = !1), (this.limit_backward = this.cursor), (this.cursor = this.limit), (this.ket = this.cursor), 0 !== this.find_among_b$esjava$1(n.a_15) && ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0), (this.cursor = this.limit_backward), !0));
                            }
                        },
                        {
                            key: 'r_remove_um$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.B_found_a_match = !1), !this.r_has_min_length$esjava$0() || ((this.limit_backward = this.cursor), (this.cursor = this.limit), (this.ket = this.cursor), !this.eq_s_b$esjava$1('ும்')))) return !1;
                                ((this.bra = this.cursor), this.slice_from$esjava$1('்'), (this.B_found_a_match = !0), (this.cursor = this.limit_backward), (e = this.cursor));
                                do if (!this.r_fix_ending$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_remove_common_word_endings$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0;
                                if (((this.B_found_a_match = !1), !this.r_has_min_length$esjava$0())) return !1;
                                ((this.limit_backward = this.cursor), (this.cursor = this.limit));
                                l: do {
                                    e = this.limit - this.cursor;
                                    c: do {
                                        ((t = this.limit - this.cursor), (this.ket = this.cursor));
                                        u: do {
                                            r = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ுடன்')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ில்லை')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ிடம்')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ின்றி')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ாகி')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ாகிய')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ென்று')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ுள்ள')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ுடைய')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ுடை')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ெனும்')) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            g: do {
                                                if (!this.eq_s_b$esjava$1('ல்ல')) break;
                                                ((i = this.limit - this.cursor), (a = this.limit - this.cursor));
                                                do {
                                                    if (0 === this.find_among_b$esjava$1(n.a_16)) break;
                                                    break g;
                                                } while (!1);
                                                ((this.cursor = this.limit - a), (this.cursor = this.limit - i));
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - r;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ென')) break;
                                                break u;
                                            } while (!1);
                                            if (((this.cursor = this.limit - r), !this.eq_s_b$esjava$1('ாகி'))) break c;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('்'), (this.B_found_a_match = !0), (this.cursor = this.limit - t));
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), (o = this.limit - this.cursor), (this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_17))) return !1;
                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0), (this.cursor = this.limit - o));
                                } while (!1);
                                ((this.cursor = this.limit_backward), (s = this.cursor));
                                do if (!this.r_fix_endings$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = s), !0);
                            }
                        },
                        {
                            key: 'r_remove_vetrumai_urupukal$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0,
                                    p = void 0,
                                    h = void 0,
                                    m = void 0,
                                    g = void 0,
                                    E = void 0,
                                    b = void 0,
                                    y = void 0,
                                    O = void 0;
                                if (((this.B_found_a_match = !1), (this.B_found_vetrumai_urupu = !1), !this.r_has_min_length$esjava$0())) return !1;
                                ((this.limit_backward = this.cursor), (this.cursor = this.limit));
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (((t = this.limit - this.cursor), (this.ket = this.cursor), !this.eq_s_b$esjava$1('னை'))) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.cursor = this.limit - t));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    u: do {
                                        ((r = this.limit - this.cursor), (this.ket = this.cursor));
                                        d: do {
                                            i = this.limit - this.cursor;
                                            f: do {
                                                _: do {
                                                    a = this.limit - this.cursor;
                                                    do {
                                                        if (!this.eq_s_b$esjava$1('ினை')) break;
                                                        break _;
                                                    } while (!1);
                                                    if (((this.cursor = this.limit - a), !this.eq_s_b$esjava$1('ை'))) break f;
                                                } while (!1);
                                                ((o = this.limit - this.cursor), (s = this.limit - this.cursor));
                                                do {
                                                    if (0 === this.find_among_b$esjava$1(n.a_18)) break;
                                                    break f;
                                                } while (!1);
                                                ((this.cursor = this.limit - s), (this.cursor = this.limit - o));
                                                break d;
                                            } while (!1);
                                            if (((this.cursor = this.limit - i), !this.eq_s_b$esjava$1('ை') || ((l = this.limit - this.cursor), 0 === this.find_among_b$esjava$1(n.a_19) || !this.eq_s_b$esjava$1('்')))) break u;
                                            this.cursor = this.limit - l;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('்'), (this.cursor = this.limit - r));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    z: do {
                                        ((c = this.limit - this.cursor), (this.ket = this.cursor));
                                        m: do {
                                            u = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ொடு')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ோடு')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ில்')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ிற்')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            g: do {
                                                if (!this.eq_s_b$esjava$1('ின்')) break;
                                                ((d = this.limit - this.cursor), (f = this.limit - this.cursor));
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ம')) break;
                                                    break g;
                                                } while (!1);
                                                ((this.cursor = this.limit - f), (this.cursor = this.limit - d));
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ின்று')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ிருந்து')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('விட')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!(this.I_length >= 7) || !this.eq_s_b$esjava$1('ிடம்')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ால்')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ுடை')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            do {
                                                if (!this.eq_s_b$esjava$1('ாமல்')) break;
                                                break m;
                                            } while (!1);
                                            this.cursor = this.limit - u;
                                            O: do {
                                                if (!this.eq_s_b$esjava$1('ல்')) break;
                                                ((_ = this.limit - this.cursor), (p = this.limit - this.cursor));
                                                do {
                                                    if (0 === this.find_among_b$esjava$1(n.a_20)) break;
                                                    break O;
                                                } while (!1);
                                                ((this.cursor = this.limit - p), (this.cursor = this.limit - _));
                                                break m;
                                            } while (!1);
                                            if (((this.cursor = this.limit - u), !this.eq_s_b$esjava$1('ுள்'))) break z;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_from$esjava$1('்'), (this.cursor = this.limit - c));
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    ee: do {
                                        ((h = this.limit - this.cursor), (this.ket = this.cursor));
                                        ea: do {
                                            m = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('கண்')) break;
                                                break ea;
                                            } while (!1);
                                            this.cursor = this.limit - m;
                                            do {
                                                if (!this.eq_s_b$esjava$1('முன்')) break;
                                                break ea;
                                            } while (!1);
                                            this.cursor = this.limit - m;
                                            do {
                                                if (!this.eq_s_b$esjava$1('மேல்')) break;
                                                break ea;
                                            } while (!1);
                                            this.cursor = this.limit - m;
                                            do {
                                                if (!this.eq_s_b$esjava$1('மேற்')) break;
                                                break ea;
                                            } while (!1);
                                            this.cursor = this.limit - m;
                                            do {
                                                if (!this.eq_s_b$esjava$1('கீழ்')) break;
                                                break ea;
                                            } while (!1);
                                            this.cursor = this.limit - m;
                                            do {
                                                if (!this.eq_s_b$esjava$1('பின்')) break;
                                                break ea;
                                            } while (!1);
                                            if (((this.cursor = this.limit - m), !this.eq_s_b$esjava$1('து'))) break ee;
                                            ((g = this.limit - this.cursor), (E = this.limit - this.cursor));
                                            do {
                                                if (0 === this.find_among_b$esjava$1(n.a_21)) break;
                                                break ee;
                                            } while (!1);
                                            ((this.cursor = this.limit - E), (this.cursor = this.limit - g));
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.cursor = this.limit - h));
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), (b = this.limit - this.cursor), (this.ket = this.cursor), !this.eq_s_b$esjava$1('ீ'))) return !1;
                                    ((this.bra = this.cursor), this.slice_from$esjava$1('ி'), (this.cursor = this.limit - b));
                                } while (!1);
                                ((this.B_found_a_match = !0), (this.B_found_vetrumai_urupu = !0), (y = this.limit - this.cursor));
                                do {
                                    if (((this.ket = this.cursor), !this.eq_s_b$esjava$1('ின்'))) break;
                                    ((this.bra = this.cursor), this.slice_from$esjava$1('்'));
                                } while (!1);
                                ((this.cursor = this.limit - y), (this.cursor = this.limit_backward), (O = this.cursor));
                                do if (!this.r_fix_endings$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = O), !0);
                            }
                        },
                        {
                            key: 'r_remove_tense_suffixes$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                this.B_found_a_match = !0;
                                G: for (;;) {
                                    e = this.cursor;
                                    do {
                                        if (!this.B_found_a_match) break;
                                        t = this.cursor;
                                        do if (!this.r_remove_tense_suffix$esjava$0()) break;
                                        while (!1);
                                        this.cursor = t;
                                        continue G;
                                    } while (!1);
                                    this.cursor = e;
                                    break;
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_remove_tense_suffix$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0,
                                    p = void 0,
                                    h = void 0,
                                    m = void 0,
                                    g = void 0,
                                    E = void 0;
                                if (((this.B_found_a_match = !1), !this.r_has_min_length$esjava$0())) return !1;
                                ((this.limit_backward = this.cursor), (this.cursor = this.limit), (e = this.limit - this.cursor));
                                l: do
                                    c: do {
                                        t = this.limit - this.cursor;
                                        do {
                                            if (((r = this.limit - this.cursor), (this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_22))) break;
                                            ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0), (this.cursor = this.limit - r));
                                            break c;
                                        } while (!1);
                                        this.cursor = this.limit - t;
                                        d: do {
                                            ((i = this.limit - this.cursor), (this.ket = this.cursor));
                                            f: do {
                                                a = this.limit - this.cursor;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('மார்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('மின்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னன்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னான்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னாள்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னார்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                en: do {
                                                    if (!this.eq_s_b$esjava$1('வன்')) break;
                                                    ((o = this.limit - this.cursor), (s = this.limit - this.cursor));
                                                    do {
                                                        if (0 === this.find_among_b$esjava$1(n.a_23)) break;
                                                        break en;
                                                    } while (!1);
                                                    ((this.cursor = this.limit - s), (this.cursor = this.limit - o));
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னள்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('வள்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னர்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('வர்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ன')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ப')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('க')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('த')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ய')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('பன்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('பள்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('பர்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                ee: do {
                                                    if (!this.eq_s_b$esjava$1('து')) break;
                                                    ((l = this.limit - this.cursor), (c = this.limit - this.cursor));
                                                    do {
                                                        if (0 === this.find_among_b$esjava$1(n.a_24)) break;
                                                        break ee;
                                                    } while (!1);
                                                    ((this.cursor = this.limit - c), (this.cursor = this.limit - l));
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ிற்று')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('பம்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னம்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('தும்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('றும்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('கும்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னென்')) break;
                                                    break f;
                                                } while (!1);
                                                this.cursor = this.limit - a;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னை')) break;
                                                    break f;
                                                } while (!1);
                                                if (((this.cursor = this.limit - a), !this.eq_s_b$esjava$1('வை'))) break d;
                                            } while (!1);
                                            ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0), (this.cursor = this.limit - i));
                                            break c;
                                        } while (!1);
                                        this.cursor = this.limit - t;
                                        eo: do {
                                            ((u = this.limit - this.cursor), (this.ket = this.cursor));
                                            es: do {
                                                d = this.limit - this.cursor;
                                                el: do {
                                                    if (!this.eq_s_b$esjava$1('ான்')) break;
                                                    ((f = this.limit - this.cursor), (_ = this.limit - this.cursor));
                                                    do {
                                                        if (!this.eq_s_b$esjava$1('ச')) break;
                                                        break el;
                                                    } while (!1);
                                                    ((this.cursor = this.limit - _), (this.cursor = this.limit - f));
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ாள்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ார்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ேன்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ா')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ாம்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ெம்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ேம்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ோம்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('கும்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('தும்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('டும்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('றும்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ாய்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னென்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('னிர்')) break;
                                                    break es;
                                                } while (!1);
                                                this.cursor = this.limit - d;
                                                do {
                                                    if (!this.eq_s_b$esjava$1('ீர்')) break;
                                                    break es;
                                                } while (!1);
                                                if (((this.cursor = this.limit - d), !this.eq_s_b$esjava$1('ீயர்'))) break eo;
                                            } while (!1);
                                            ((this.bra = this.cursor), this.slice_from$esjava$1('்'), (this.B_found_a_match = !0), (this.cursor = this.limit - u));
                                            break c;
                                        } while (!1);
                                        ((this.cursor = this.limit - t), (p = this.limit - this.cursor), (this.ket = this.cursor));
                                        ec: do {
                                            h = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('கு')) break;
                                                break ec;
                                            } while (!1);
                                            if (((this.cursor = this.limit - h), !this.eq_s_b$esjava$1('து'))) break l;
                                        } while (!1);
                                        if (((m = this.limit - this.cursor), !this.eq_s_b$esjava$1('்'))) break l;
                                        ((this.cursor = this.limit - m), (this.bra = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0), (this.cursor = this.limit - p));
                                    } while (!1);
                                while (!1);
                                ((this.cursor = this.limit - e), (g = this.limit - this.cursor));
                                do {
                                    if (((this.ket = this.cursor), 0 === this.find_among_b$esjava$1(n.a_25))) break;
                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (this.B_found_a_match = !0));
                                } while (!1);
                                ((this.cursor = this.limit - g), (this.cursor = this.limit_backward), (E = this.cursor));
                                do if (!this.r_fix_endings$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = E), !0);
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0;
                                ((this.B_found_vetrumai_urupu = !1), (e = this.cursor));
                                do if (!this.r_fix_ending$esjava$0()) break;
                                while (!1);
                                if (((this.cursor = e), !this.r_has_min_length$esjava$0())) return !1;
                                t = this.cursor;
                                do if (!this.r_remove_question_prefixes$esjava$0()) break;
                                while (!1);
                                ((this.cursor = t), (n = this.cursor));
                                do if (!this.r_remove_pronoun_prefixes$esjava$0()) break;
                                while (!1);
                                ((this.cursor = n), (r = this.cursor));
                                do if (!this.r_remove_question_suffixes$esjava$0()) break;
                                while (!1);
                                ((this.cursor = r), (i = this.cursor));
                                do if (!this.r_remove_um$esjava$0()) break;
                                while (!1);
                                ((this.cursor = i), (a = this.cursor));
                                do if (!this.r_remove_common_word_endings$esjava$0()) break;
                                while (!1);
                                ((this.cursor = a), (o = this.cursor));
                                do if (!this.r_remove_vetrumai_urupukal$esjava$0()) break;
                                while (!1);
                                ((this.cursor = o), (s = this.cursor));
                                do if (!this.r_remove_plural_suffix$esjava$0()) break;
                                while (!1);
                                ((this.cursor = s), (l = this.cursor));
                                do if (!this.r_remove_command_suffixes$esjava$0()) break;
                                while (!1);
                                ((this.cursor = l), (c = this.cursor));
                                do if (!this.r_remove_tense_suffixes$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = c), !0);
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'I_length',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_length') ? this._$esjava$I_length : (this._$esjava$I_length = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_length = e;
                            }
                        },
                        {
                            key: 'B_found_wrong_ending',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_found_wrong_ending') ? this._$esjava$B_found_wrong_ending : (this._$esjava$B_found_wrong_ending = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_found_wrong_ending = e;
                            }
                        },
                        {
                            key: 'B_found_vetrumai_urupu',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_found_vetrumai_urupu') ? this._$esjava$B_found_vetrumai_urupu : (this._$esjava$B_found_vetrumai_urupu = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_found_vetrumai_urupu = e;
                            }
                        },
                        {
                            key: 'B_found_a_match',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_found_a_match') ? this._$esjava$B_found_a_match : (this._$esjava$B_found_a_match = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_found_a_match = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('க', -1, -1), new c('ங', -1, -1), new c('ச', -1, -1), new c('ஞ', -1, -1), new c('த', -1, -1), new c('ந', -1, -1), new c('ப', -1, -1), new c('ம', -1, -1), new c('ய', -1, -1), new c('வ', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('ந்த', -1, -1), new c('ந்த்', -1, -1), new c('ந்', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ி', -1, -1), new c('ீ', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('க', -1, -1), new c('ச', -1, -1), new c('ட', -1, -1), new c('த', -1, -1), new c('ப', -1, -1), new c('ற', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('க', -1, -1), new c('ச', -1, -1), new c('ட', -1, -1), new c('த', -1, -1), new c('ப', -1, -1), new c('ற', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('க', -1, -1), new c('ச', -1, -1), new c('ட', -1, -1), new c('த', -1, -1), new c('ப', -1, -1), new c('ற', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('ய', -1, -1), new c('ர', -1, -1), new c('ல', -1, -1), new c('ள', -1, -1), new c('ழ', -1, -1), new c('வ', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('ங', -1, -1), new c('ஞ', -1, -1), new c('ண', -1, -1), new c('ந', -1, -1), new c('ன', -1, -1), new c('ம', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('ய', -1, -1), new c('வ', -1, -1), new c('வ்', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('ா', -1, -1), new c('ி', -1, -1), new c('ீ', -1, -1), new c('ு', -1, -1), new c('ூ', -1, -1), new c('ெ', -1, -1), new c('ே', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_10',
                            get: function () {
                                return (delete n.a_10, (n.a_10 = [new c('ா', -1, -1), new c('ி', -1, -1), new c('ீ', -1, -1), new c('ு', -1, -1), new c('ூ', -1, -1), new c('ெ', -1, -1), new c('ே', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_11',
                            get: function () {
                                return (delete n.a_11, (n.a_11 = [new c('அ', -1, -1), new c('இ', -1, -1), new c('உ', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_12',
                            get: function () {
                                return (delete n.a_12, (n.a_12 = [new c('க', -1, -1), new c('ங', -1, -1), new c('ச', -1, -1), new c('ஞ', -1, -1), new c('த', -1, -1), new c('ந', -1, -1), new c('ப', -1, -1), new c('ம', -1, -1), new c('ய', -1, -1), new c('வ', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_13',
                            get: function () {
                                return (delete n.a_13, (n.a_13 = [new c('க', -1, -1), new c('ச', -1, -1), new c('ட', -1, -1), new c('த', -1, -1), new c('ப', -1, -1), new c('ற', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_14',
                            get: function () {
                                return (delete n.a_14, (n.a_14 = [new c('ா', -1, -1), new c('ே', -1, -1), new c('ோ', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_15',
                            get: function () {
                                return (delete n.a_15, (n.a_15 = [new c('பி', -1, -1), new c('வி', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_16',
                            get: function () {
                                return (delete n.a_16, (n.a_16 = [new c('ா', -1, -1), new c('ி', -1, -1), new c('ீ', -1, -1), new c('ு', -1, -1), new c('ூ', -1, -1), new c('ெ', -1, -1), new c('ே', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_17',
                            get: function () {
                                return (delete n.a_17, (n.a_17 = [new c('பட்ட', -1, -1), new c('பட்டண', -1, -1), new c('தான', -1, -1), new c('படிதான', 2, -1), new c('குரிய', -1, -1), new c('படி', -1, -1), new c('பற்றி', -1, -1), new c('படு', -1, -1), new c('விடு', -1, -1), new c('பட்டு', -1, -1), new c('விட்டு', -1, -1), new c('பட்டது', -1, -1), new c('ெல்லாம்', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_18',
                            get: function () {
                                return (delete n.a_18, (n.a_18 = [new c('க', -1, -1), new c('ச', -1, -1), new c('ட', -1, -1), new c('த', -1, -1), new c('ப', -1, -1), new c('ற', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_19',
                            get: function () {
                                return (delete n.a_19, (n.a_19 = [new c('க', -1, -1), new c('ச', -1, -1), new c('ட', -1, -1), new c('த', -1, -1), new c('ப', -1, -1), new c('ற', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_20',
                            get: function () {
                                return (delete n.a_20, (n.a_20 = [new c('ா', -1, -1), new c('ி', -1, -1), new c('ீ', -1, -1), new c('ு', -1, -1), new c('ூ', -1, -1), new c('ெ', -1, -1), new c('ே', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_21',
                            get: function () {
                                return (delete n.a_21, (n.a_21 = [new c('ா', -1, -1), new c('ி', -1, -1), new c('ீ', -1, -1), new c('ு', -1, -1), new c('ூ', -1, -1), new c('ெ', -1, -1), new c('ே', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_22',
                            get: function () {
                                return (delete n.a_22, (n.a_22 = [new c('படு', -1, -1), new c('கொண்டிர்', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_23',
                            get: function () {
                                return (delete n.a_23, (n.a_23 = [new c('அ', -1, -1), new c('ஆ', -1, -1), new c('இ', -1, -1), new c('ஈ', -1, -1), new c('உ', -1, -1), new c('ஊ', -1, -1), new c('எ', -1, -1), new c('ஏ', -1, -1), new c('ஐ', -1, -1), new c('ஒ', -1, -1), new c('ஓ', -1, -1), new c('ஔ', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_24',
                            get: function () {
                                return (delete n.a_24, (n.a_24 = [new c('ா', -1, -1), new c('ி', -1, -1), new c('ீ', -1, -1), new c('ு', -1, -1), new c('ூ', -1, -1), new c('ெ', -1, -1), new c('ே', -1, -1), new c('ை', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_25',
                            get: function () {
                                return (delete n.a_25, (n.a_25 = [new c('கிற', -1, -1), new c('கின்ற', -1, -1), new c('ாநின்ற', -1, -1), new c('கிற்', -1, -1), new c('கின்ற்', -1, -1), new c('ாநின்ற்', -1, -1)]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u),
        x = (function (e) {
            function n() {
                return (i(this, n), t(this, Object.getPrototypeOf(n).apply(this, arguments)));
            }
            return (
                r(n, e),
                a(
                    n,
                    [
                        {
                            key: 'r_check_vowel_harmony$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0;
                                e = this.limit - this.cursor;
                                B: for (;;) {
                                    t = this.limit - this.cursor;
                                    do {
                                        if (!this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)) break;
                                        this.cursor = this.limit - t;
                                        break B;
                                    } while (!1);
                                    if (((this.cursor = this.limit - t), this.cursor <= this.limit_backward)) return !1;
                                    this.cursor--;
                                }
                                u: do {
                                    r = this.limit - this.cursor;
                                    d: do {
                                        if (!this.eq_s_b$esjava$1('a')) break;
                                        H: for (;;) {
                                            i = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel1, 97, 305)) break;
                                                this.cursor = this.limit - i;
                                                break H;
                                            } while (!1);
                                            if (((this.cursor = this.limit - i), this.cursor <= this.limit_backward)) break d;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    p: do {
                                        if (!this.eq_s_b$esjava$1('e')) break;
                                        w: for (;;) {
                                            a = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel2, 101, 252)) break;
                                                this.cursor = this.limit - a;
                                                break w;
                                            } while (!1);
                                            if (((this.cursor = this.limit - a), this.cursor <= this.limit_backward)) break p;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    m: do {
                                        if (!this.eq_s_b$esjava$1('ı')) break;
                                        X: for (;;) {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel3, 97, 305)) break;
                                                this.cursor = this.limit - o;
                                                break X;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), this.cursor <= this.limit_backward)) break m;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    K: do {
                                        if (!this.eq_s_b$esjava$1('i')) break;
                                        W: for (;;) {
                                            s = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel4, 101, 105)) break;
                                                this.cursor = this.limit - s;
                                                break W;
                                            } while (!1);
                                            if (((this.cursor = this.limit - s), this.cursor <= this.limit_backward)) break K;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    E: do {
                                        if (!this.eq_s_b$esjava$1('o')) break;
                                        x: for (;;) {
                                            l = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel5, 111, 117)) break;
                                                this.cursor = this.limit - l;
                                                break x;
                                            } while (!1);
                                            if (((this.cursor = this.limit - l), this.cursor <= this.limit_backward)) break E;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    er: do {
                                        if (!this.eq_s_b$esjava$1('ö')) break;
                                        eu: for (;;) {
                                            c = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel6, 246, 252)) break;
                                                this.cursor = this.limit - c;
                                                break eu;
                                            } while (!1);
                                            if (((this.cursor = this.limit - c), this.cursor <= this.limit_backward)) break er;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    ei: do {
                                        if (!this.eq_s_b$esjava$1('u')) break;
                                        ed: for (;;) {
                                            u = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel5, 111, 117)) break;
                                                this.cursor = this.limit - u;
                                                break ed;
                                            } while (!1);
                                            if (((this.cursor = this.limit - u), this.cursor <= this.limit_backward)) break ei;
                                            this.cursor--;
                                        }
                                        break u;
                                    } while (!1);
                                    if (((this.cursor = this.limit - r), !this.eq_s_b$esjava$1('ü'))) return !1;
                                    ef: for (;;) {
                                        d = this.limit - this.cursor;
                                        do {
                                            if (!this.in_grouping_b$esjava$3(n.g_vowel6, 246, 252)) break;
                                            this.cursor = this.limit - d;
                                            break ef;
                                        } while (!1);
                                        if (((this.cursor = this.limit - d), this.cursor <= this.limit_backward)) return !1;
                                        this.cursor--;
                                    }
                                } while (!1);
                                return ((this.cursor = this.limit - e), !0);
                            }
                        },
                        {
                            key: 'r_mark_suffix_with_optional_n_consonant$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('n') || ((t = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_vowel, 97, 305))) break;
                                        this.cursor = this.limit - t;
                                        break l;
                                    } while (!1);
                                    ((this.cursor = this.limit - e), (r = this.limit - this.cursor));
                                    do {
                                        if (((i = this.limit - this.cursor), !this.eq_s_b$esjava$1('n'))) break;
                                        return ((this.cursor = this.limit - i), !1);
                                    } while (!1);
                                    if (((this.cursor = this.limit - r), (a = this.limit - this.cursor), this.cursor <= this.limit_backward || (this.cursor--, !this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)))) return !1;
                                    this.cursor = this.limit - a;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_suffix_with_optional_s_consonant$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('s') || ((t = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_vowel, 97, 305))) break;
                                        this.cursor = this.limit - t;
                                        break l;
                                    } while (!1);
                                    ((this.cursor = this.limit - e), (r = this.limit - this.cursor));
                                    do {
                                        if (((i = this.limit - this.cursor), !this.eq_s_b$esjava$1('s'))) break;
                                        return ((this.cursor = this.limit - i), !1);
                                    } while (!1);
                                    if (((this.cursor = this.limit - r), (a = this.limit - this.cursor), this.cursor <= this.limit_backward || (this.cursor--, !this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)))) return !1;
                                    this.cursor = this.limit - a;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_suffix_with_optional_y_consonant$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('y') || ((t = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_vowel, 97, 305))) break;
                                        this.cursor = this.limit - t;
                                        break l;
                                    } while (!1);
                                    ((this.cursor = this.limit - e), (r = this.limit - this.cursor));
                                    do {
                                        if (((i = this.limit - this.cursor), !this.eq_s_b$esjava$1('y'))) break;
                                        return ((this.cursor = this.limit - i), !1);
                                    } while (!1);
                                    if (((this.cursor = this.limit - r), (a = this.limit - this.cursor), this.cursor <= this.limit_backward || (this.cursor--, !this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)))) return !1;
                                    this.cursor = this.limit - a;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_suffix_with_optional_U_vowel$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.in_grouping_b$esjava$3(n.g_U, 105, 305) || ((t = this.limit - this.cursor), !this.out_grouping_b$esjava$3(n.g_vowel, 97, 305))) break;
                                        this.cursor = this.limit - t;
                                        break l;
                                    } while (!1);
                                    ((this.cursor = this.limit - e), (r = this.limit - this.cursor));
                                    do {
                                        if (((i = this.limit - this.cursor), !this.in_grouping_b$esjava$3(n.g_U, 105, 305))) break;
                                        return ((this.cursor = this.limit - i), !1);
                                    } while (!1);
                                    if (((this.cursor = this.limit - r), (a = this.limit - this.cursor), this.cursor <= this.limit_backward || (this.cursor--, !this.out_grouping_b$esjava$3(n.g_vowel, 97, 305)))) return !1;
                                    this.cursor = this.limit - a;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_mark_possessives$esjava$0',
                            value: function () {
                                return 0 !== this.find_among_b$esjava$1(n.a_0) && !!this.r_mark_suffix_with_optional_U_vowel$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_sU$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && !!this.in_grouping_b$esjava$3(n.g_U, 105, 305) && !!this.r_mark_suffix_with_optional_s_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_lArI$esjava$0',
                            value: function () {
                                return 0 !== this.find_among_b$esjava$1(n.a_1);
                            }
                        },
                        {
                            key: 'r_mark_yU$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && !!this.in_grouping_b$esjava$3(n.g_U, 105, 305) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_nU$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_2);
                            }
                        },
                        {
                            key: 'r_mark_nUn$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_3) && !!this.r_mark_suffix_with_optional_n_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_yA$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_4) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_nA$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_5);
                            }
                        },
                        {
                            key: 'r_mark_DA$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_6);
                            }
                        },
                        {
                            key: 'r_mark_ndA$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_7);
                            }
                        },
                        {
                            key: 'r_mark_DAn$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_8);
                            }
                        },
                        {
                            key: 'r_mark_ndAn$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_9);
                            }
                        },
                        {
                            key: 'r_mark_ylA$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_10) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_ki$esjava$0',
                            value: function () {
                                return !!this.eq_s_b$esjava$1('ki');
                            }
                        },
                        {
                            key: 'r_mark_ncA$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_11) && !!this.r_mark_suffix_with_optional_n_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_yUm$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_12) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_sUn$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_13);
                            }
                        },
                        {
                            key: 'r_mark_yUz$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_14) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_sUnUz$esjava$0',
                            value: function () {
                                return 0 !== this.find_among_b$esjava$1(n.a_15);
                            }
                        },
                        {
                            key: 'r_mark_lAr$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_16);
                            }
                        },
                        {
                            key: 'r_mark_nUz$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_17);
                            }
                        },
                        {
                            key: 'r_mark_DUr$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_18);
                            }
                        },
                        {
                            key: 'r_mark_cAsInA$esjava$0',
                            value: function () {
                                return 0 !== this.find_among_b$esjava$1(n.a_19);
                            }
                        },
                        {
                            key: 'r_mark_yDU$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_20) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_ysA$esjava$0',
                            value: function () {
                                return 0 !== this.find_among_b$esjava$1(n.a_21) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_ymUs_$esjava$0',
                            value: function () {
                                return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(n.a_22) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_mark_yken$esjava$0',
                            value: function () {
                                return !!this.eq_s_b$esjava$1('ken') && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
                            }
                        },
                        {
                            key: 'r_stem_nominal_verb_suffixes$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0;
                                ((this.ket = this.cursor), (this.B_continue_stemming_noun_suffixes = !0));
                                l: do {
                                    e = this.limit - this.cursor;
                                    c: do {
                                        u: do {
                                            t = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_ymUs_$esjava$0()) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - t;
                                            do {
                                                if (!this.r_mark_yDU$esjava$0()) break;
                                                break u;
                                            } while (!1);
                                            this.cursor = this.limit - t;
                                            do {
                                                if (!this.r_mark_ysA$esjava$0()) break;
                                                break u;
                                            } while (!1);
                                            if (((this.cursor = this.limit - t), !this.r_mark_yken$esjava$0())) break c;
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (!this.r_mark_cAsInA$esjava$0()) break;
                                        F: do {
                                            n = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_sUnUz$esjava$0()) break;
                                                break F;
                                            } while (!1);
                                            this.cursor = this.limit - n;
                                            do {
                                                if (!this.r_mark_lAr$esjava$0()) break;
                                                break F;
                                            } while (!1);
                                            this.cursor = this.limit - n;
                                            do {
                                                if (!this.r_mark_yUm$esjava$0()) break;
                                                break F;
                                            } while (!1);
                                            this.cursor = this.limit - n;
                                            do {
                                                if (!this.r_mark_sUn$esjava$0()) break;
                                                break F;
                                            } while (!1);
                                            this.cursor = this.limit - n;
                                            do {
                                                if (!this.r_mark_yUz$esjava$0()) break;
                                                break F;
                                            } while (!1);
                                            this.cursor = this.limit - n;
                                        } while (!1);
                                        if (!this.r_mark_ymUs_$esjava$0()) break;
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (!this.r_mark_lAr$esjava$0()) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (r = this.limit - this.cursor));
                                        g: do {
                                            this.ket = this.cursor;
                                            E: do {
                                                i = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_mark_DUr$esjava$0()) break;
                                                    break E;
                                                } while (!1);
                                                this.cursor = this.limit - i;
                                                do {
                                                    if (!this.r_mark_yDU$esjava$0()) break;
                                                    break E;
                                                } while (!1);
                                                this.cursor = this.limit - i;
                                                do {
                                                    if (!this.r_mark_ysA$esjava$0()) break;
                                                    break E;
                                                } while (!1);
                                                if (((this.cursor = this.limit - i), !this.r_mark_ymUs_$esjava$0())) {
                                                    this.cursor = this.limit - r;
                                                    break g;
                                                }
                                            } while (!1);
                                        } while (!1);
                                        this.B_continue_stemming_noun_suffixes = !1;
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    y: do {
                                        if (!this.r_mark_nUz$esjava$0()) break;
                                        e_: do {
                                            a = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_yDU$esjava$0()) break;
                                                break e_;
                                            } while (!1);
                                            if (((this.cursor = this.limit - a), !this.r_mark_ysA$esjava$0())) break y;
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    ep: do {
                                        O: do {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_sUnUz$esjava$0()) break;
                                                break O;
                                            } while (!1);
                                            this.cursor = this.limit - o;
                                            do {
                                                if (!this.r_mark_yUz$esjava$0()) break;
                                                break O;
                                            } while (!1);
                                            this.cursor = this.limit - o;
                                            do {
                                                if (!this.r_mark_sUn$esjava$0()) break;
                                                break O;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), !this.r_mark_yUm$esjava$0())) break ep;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (s = this.limit - this.cursor));
                                        do
                                            if (((this.ket = this.cursor), !this.r_mark_ymUs_$esjava$0())) {
                                                this.cursor = this.limit - s;
                                                break;
                                            }
                                        while (!1);
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.r_mark_DUr$esjava$0())) return !1;
                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (l = this.limit - this.cursor));
                                    do {
                                        this.ket = this.cursor;
                                        T: do {
                                            c = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_sUnUz$esjava$0()) break;
                                                break T;
                                            } while (!1);
                                            this.cursor = this.limit - c;
                                            do {
                                                if (!this.r_mark_lAr$esjava$0()) break;
                                                break T;
                                            } while (!1);
                                            this.cursor = this.limit - c;
                                            do {
                                                if (!this.r_mark_yUm$esjava$0()) break;
                                                break T;
                                            } while (!1);
                                            this.cursor = this.limit - c;
                                            do {
                                                if (!this.r_mark_sUn$esjava$0()) break;
                                                break T;
                                            } while (!1);
                                            this.cursor = this.limit - c;
                                            do {
                                                if (!this.r_mark_yUz$esjava$0()) break;
                                                break T;
                                            } while (!1);
                                            this.cursor = this.limit - c;
                                        } while (!1);
                                        if (!this.r_mark_ymUs_$esjava$0()) {
                                            this.cursor = this.limit - l;
                                            break;
                                        }
                                    } while (!1);
                                } while (!1);
                                return ((this.bra = this.cursor), this.slice_del$esjava$0(), !0);
                            }
                        },
                        {
                            key: 'r_stem_suffix_chain_before_ki$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0;
                                if (((this.ket = this.cursor), !this.r_mark_ki$esjava$0())) return !1;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (!this.r_mark_DA$esjava$0()) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        u: do {
                                            this.ket = this.cursor;
                                            d: do {
                                                n = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_mark_lAr$esjava$0()) break;
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (r = this.limit - this.cursor));
                                                    do
                                                        if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                                                            this.cursor = this.limit - r;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break d;
                                                } while (!1);
                                                if (((this.cursor = this.limit - n), !this.r_mark_possessives$esjava$0())) {
                                                    this.cursor = this.limit - t;
                                                    break u;
                                                }
                                                ((this.bra = this.cursor), this.slice_del$esjava$0(), (i = this.limit - this.cursor));
                                                do
                                                    if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                        this.cursor = this.limit - i;
                                                        break;
                                                    }
                                                while (!1);
                                            } while (!1);
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (!this.r_mark_nUn$esjava$0()) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (a = this.limit - this.cursor));
                                        z: do {
                                            this.ket = this.cursor;
                                            m: do {
                                                o = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_mark_lArI$esjava$0()) break;
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0());
                                                    break m;
                                                } while (!1);
                                                this.cursor = this.limit - o;
                                                en: do {
                                                    this.ket = this.cursor;
                                                    K: do {
                                                        s = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_mark_possessives$esjava$0()) break;
                                                            break K;
                                                        } while (!1);
                                                        if (((this.cursor = this.limit - s), !this.r_mark_sU$esjava$0())) break en;
                                                    } while (!1);
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (l = this.limit - this.cursor));
                                                    do
                                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                            this.cursor = this.limit - l;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break m;
                                                } while (!1);
                                                if (((this.cursor = this.limit - o), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                                                    this.cursor = this.limit - a;
                                                    break z;
                                                }
                                            } while (!1);
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - e), !this.r_mark_ndA$esjava$0())) return !1;
                                    E: do {
                                        c = this.limit - this.cursor;
                                        do {
                                            if (!this.r_mark_lArI$esjava$0()) break;
                                            ((this.bra = this.cursor), this.slice_del$esjava$0());
                                            break E;
                                        } while (!1);
                                        this.cursor = this.limit - c;
                                        do {
                                            if (!this.r_mark_sU$esjava$0()) break;
                                            ((this.bra = this.cursor), this.slice_del$esjava$0(), (u = this.limit - this.cursor));
                                            do
                                                if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                    this.cursor = this.limit - u;
                                                    break;
                                                }
                                            while (!1);
                                            break E;
                                        } while (!1);
                                        if (((this.cursor = this.limit - c), !this.r_stem_suffix_chain_before_ki$esjava$0())) return !1;
                                    } while (!1);
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_stem_noun_suffixes$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0,
                                    p = void 0,
                                    h = void 0,
                                    m = void 0,
                                    g = void 0,
                                    E = void 0,
                                    b = void 0,
                                    y = void 0,
                                    O = void 0,
                                    v = void 0,
                                    I = void 0,
                                    T = void 0,
                                    S = void 0,
                                    A = void 0;
                                l: do {
                                    e = this.limit - this.cursor;
                                    do {
                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0())) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (t = this.limit - this.cursor));
                                        do
                                            if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                                                this.cursor = this.limit - t;
                                                break;
                                            }
                                        while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.r_mark_ncA$esjava$0())) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (n = this.limit - this.cursor));
                                        f: do
                                            _: do {
                                                r = this.limit - this.cursor;
                                                do {
                                                    if (((this.ket = this.cursor), !this.r_mark_lArI$esjava$0())) break;
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0());
                                                    break _;
                                                } while (!1);
                                                this.cursor = this.limit - r;
                                                F: do {
                                                    this.ket = this.cursor;
                                                    z: do {
                                                        i = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_mark_possessives$esjava$0()) break;
                                                            break z;
                                                        } while (!1);
                                                        if (((this.cursor = this.limit - i), !this.r_mark_sU$esjava$0())) break F;
                                                    } while (!1);
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (a = this.limit - this.cursor));
                                                    do
                                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                            this.cursor = this.limit - a;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break _;
                                                } while (!1);
                                                if (((this.cursor = this.limit - r), (this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                    this.cursor = this.limit - n;
                                                    break f;
                                                }
                                            } while (!1);
                                        while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    en: do {
                                        this.ket = this.cursor;
                                        K: do {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_ndA$esjava$0()) break;
                                                break K;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), !this.r_mark_nA$esjava$0())) break en;
                                        } while (!1);
                                        g: do {
                                            s = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_lArI$esjava$0()) break;
                                                ((this.bra = this.cursor), this.slice_del$esjava$0());
                                                break g;
                                            } while (!1);
                                            this.cursor = this.limit - s;
                                            do {
                                                if (!this.r_mark_sU$esjava$0()) break;
                                                ((this.bra = this.cursor), this.slice_del$esjava$0(), (l = this.limit - this.cursor));
                                                do
                                                    if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                        this.cursor = this.limit - l;
                                                        break;
                                                    }
                                                while (!1);
                                                break g;
                                            } while (!1);
                                            if (((this.cursor = this.limit - s), !this.r_stem_suffix_chain_before_ki$esjava$0())) break en;
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    er: do {
                                        this.ket = this.cursor;
                                        y: do {
                                            c = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_ndAn$esjava$0()) break;
                                                break y;
                                            } while (!1);
                                            if (((this.cursor = this.limit - c), !this.r_mark_nU$esjava$0())) break er;
                                        } while (!1);
                                        ei: do {
                                            u = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_sU$esjava$0()) break;
                                                ((this.bra = this.cursor), this.slice_del$esjava$0(), (d = this.limit - this.cursor));
                                                do
                                                    if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                        this.cursor = this.limit - d;
                                                        break;
                                                    }
                                                while (!1);
                                                break ei;
                                            } while (!1);
                                            if (((this.cursor = this.limit - u), !this.r_mark_lArI$esjava$0())) break er;
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.r_mark_DAn$esjava$0())) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (f = this.limit - this.cursor));
                                        ee: do {
                                            this.ket = this.cursor;
                                            ea: do {
                                                _ = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_mark_possessives$esjava$0()) break;
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (p = this.limit - this.cursor));
                                                    do
                                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                            this.cursor = this.limit - p;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break ea;
                                                } while (!1);
                                                this.cursor = this.limit - _;
                                                do {
                                                    if (!this.r_mark_lAr$esjava$0()) break;
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (h = this.limit - this.cursor));
                                                    do
                                                        if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                                                            this.cursor = this.limit - h;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break ea;
                                                } while (!1);
                                                if (((this.cursor = this.limit - _), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                                                    this.cursor = this.limit - f;
                                                    break ee;
                                                }
                                            } while (!1);
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    eh: do {
                                        this.ket = this.cursor;
                                        S: do {
                                            m = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_nUn$esjava$0()) break;
                                                break S;
                                            } while (!1);
                                            if (((this.cursor = this.limit - m), !this.r_mark_ylA$esjava$0())) break eh;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (g = this.limit - this.cursor));
                                        em: do
                                            eo: do {
                                                E = this.limit - this.cursor;
                                                do {
                                                    if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) break;
                                                    break eo;
                                                } while (!1);
                                                this.cursor = this.limit - E;
                                                el: do {
                                                    this.ket = this.cursor;
                                                    eg: do {
                                                        b = this.limit - this.cursor;
                                                        do {
                                                            if (!this.r_mark_possessives$esjava$0()) break;
                                                            break eg;
                                                        } while (!1);
                                                        if (((this.cursor = this.limit - b), !this.r_mark_sU$esjava$0())) break el;
                                                    } while (!1);
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (y = this.limit - this.cursor));
                                                    do
                                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                                            this.cursor = this.limit - y;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break eo;
                                                } while (!1);
                                                if (((this.cursor = this.limit - E), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                                                    this.cursor = this.limit - g;
                                                    break em;
                                                }
                                            } while (!1);
                                        while (!1);
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (((this.ket = this.cursor), !this.r_mark_lArI$esjava$0())) break;
                                        ((this.bra = this.cursor), this.slice_del$esjava$0());
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    do {
                                        if (!this.r_stem_suffix_chain_before_ki$esjava$0()) break;
                                        break l;
                                    } while (!1);
                                    this.cursor = this.limit - e;
                                    eE: do {
                                        this.ket = this.cursor;
                                        eb: do {
                                            O = this.limit - this.cursor;
                                            do {
                                                if (!this.r_mark_DA$esjava$0()) break;
                                                break eb;
                                            } while (!1);
                                            this.cursor = this.limit - O;
                                            do {
                                                if (!this.r_mark_yU$esjava$0()) break;
                                                break eb;
                                            } while (!1);
                                            if (((this.cursor = this.limit - O), !this.r_mark_yA$esjava$0())) break eE;
                                        } while (!1);
                                        ((this.bra = this.cursor), this.slice_del$esjava$0(), (v = this.limit - this.cursor));
                                        ey: do {
                                            this.ket = this.cursor;
                                            eO: do {
                                                I = this.limit - this.cursor;
                                                do {
                                                    if (!this.r_mark_possessives$esjava$0()) break;
                                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (T = this.limit - this.cursor));
                                                    do
                                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0())) {
                                                            this.cursor = this.limit - T;
                                                            break;
                                                        }
                                                    while (!1);
                                                    break eO;
                                                } while (!1);
                                                if (((this.cursor = this.limit - I), !this.r_mark_lAr$esjava$0())) {
                                                    this.cursor = this.limit - v;
                                                    break ey;
                                                }
                                            } while (!1);
                                            if (((this.bra = this.cursor), this.slice_del$esjava$0(), (this.ket = this.cursor), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                                                this.cursor = this.limit - v;
                                                break;
                                            }
                                        } while (!1);
                                        break l;
                                    } while (!1);
                                    ((this.cursor = this.limit - e), (this.ket = this.cursor));
                                    ev: do {
                                        S = this.limit - this.cursor;
                                        do {
                                            if (!this.r_mark_possessives$esjava$0()) break;
                                            break ev;
                                        } while (!1);
                                        if (((this.cursor = this.limit - S), !this.r_mark_sU$esjava$0())) return !1;
                                    } while (!1);
                                    ((this.bra = this.cursor), this.slice_del$esjava$0(), (A = this.limit - this.cursor));
                                    do
                                        if (((this.ket = this.cursor), !this.r_mark_lAr$esjava$0() || ((this.bra = this.cursor), this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()))) {
                                            this.cursor = this.limit - A;
                                            break;
                                        }
                                    while (!1);
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_post_process_last_consonants$esjava$0',
                            value: function () {
                                var e = void 0;
                                if (((this.ket = this.cursor), 0 === (e = this.find_among_b$esjava$1(n.a_23)))) return !1;
                                switch (((this.bra = this.cursor), e)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        this.slice_from$esjava$1('p');
                                        break;
                                    case 2:
                                        this.slice_from$esjava$1('ç');
                                        break;
                                    case 3:
                                        this.slice_from$esjava$1('t');
                                        break;
                                    case 4:
                                        this.slice_from$esjava$1('k');
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'r_append_U_to_stems_ending_with_d_or_g$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    r = void 0,
                                    i = void 0,
                                    a = void 0,
                                    o = void 0,
                                    s = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0,
                                    d = void 0,
                                    f = void 0,
                                    _ = void 0,
                                    p = void 0,
                                    h = void 0;
                                e = this.limit - this.cursor;
                                l: do {
                                    t = this.limit - this.cursor;
                                    do {
                                        if (!this.eq_s_b$esjava$1('d')) break;
                                        break l;
                                    } while (!1);
                                    if (((this.cursor = this.limit - t), !this.eq_s_b$esjava$1('g'))) return !1;
                                } while (!1);
                                this.cursor = this.limit - e;
                                u: do {
                                    r = this.limit - this.cursor;
                                    d: do {
                                        i = this.limit - this.cursor;
                                        H: for (;;) {
                                            a = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)) break;
                                                this.cursor = this.limit - a;
                                                break H;
                                            } while (!1);
                                            if (((this.cursor = this.limit - a), this.cursor <= this.limit_backward)) break d;
                                            this.cursor--;
                                        }
                                        p: do {
                                            o = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('a')) break;
                                                break p;
                                            } while (!1);
                                            if (((this.cursor = this.limit - o), !this.eq_s_b$esjava$1('ı'))) break d;
                                        } while (!1);
                                        this.cursor = this.limit - i;
                                        var m = this.cursor;
                                        (this.insert$esjava$3(this.cursor, this.cursor, 'ı'), (this.cursor = m));
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    z: do {
                                        s = this.limit - this.cursor;
                                        V: for (;;) {
                                            l = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)) break;
                                                this.cursor = this.limit - l;
                                                break V;
                                            } while (!1);
                                            if (((this.cursor = this.limit - l), this.cursor <= this.limit_backward)) break z;
                                            this.cursor--;
                                        }
                                        en: do {
                                            c = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('e')) break;
                                                break en;
                                            } while (!1);
                                            if (((this.cursor = this.limit - c), !this.eq_s_b$esjava$1('i'))) break z;
                                        } while (!1);
                                        this.cursor = this.limit - s;
                                        var m = this.cursor;
                                        (this.insert$esjava$3(this.cursor, this.cursor, 'i'), (this.cursor = m));
                                        break u;
                                    } while (!1);
                                    this.cursor = this.limit - r;
                                    D: do {
                                        u = this.limit - this.cursor;
                                        L: for (;;) {
                                            d = this.limit - this.cursor;
                                            do {
                                                if (!this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)) break;
                                                this.cursor = this.limit - d;
                                                break L;
                                            } while (!1);
                                            if (((this.cursor = this.limit - d), this.cursor <= this.limit_backward)) break D;
                                            this.cursor--;
                                        }
                                        eI: do {
                                            f = this.limit - this.cursor;
                                            do {
                                                if (!this.eq_s_b$esjava$1('o')) break;
                                                break eI;
                                            } while (!1);
                                            if (((this.cursor = this.limit - f), !this.eq_s_b$esjava$1('u'))) break D;
                                        } while (!1);
                                        this.cursor = this.limit - u;
                                        var m = this.cursor;
                                        (this.insert$esjava$3(this.cursor, this.cursor, 'u'), (this.cursor = m));
                                        break u;
                                    } while (!1);
                                    ((this.cursor = this.limit - r), (_ = this.limit - this.cursor));
                                    k: for (;;) {
                                        p = this.limit - this.cursor;
                                        do {
                                            if (!this.in_grouping_b$esjava$3(n.g_vowel, 97, 305)) break;
                                            this.cursor = this.limit - p;
                                            break k;
                                        } while (!1);
                                        if (((this.cursor = this.limit - p), this.cursor <= this.limit_backward)) return !1;
                                        this.cursor--;
                                    }
                                    e_: do {
                                        h = this.limit - this.cursor;
                                        do {
                                            if (!this.eq_s_b$esjava$1('ö')) break;
                                            break e_;
                                        } while (!1);
                                        if (((this.cursor = this.limit - h), !this.eq_s_b$esjava$1('ü'))) return !1;
                                    } while (!1);
                                    this.cursor = this.limit - _;
                                    var m = this.cursor;
                                    (this.insert$esjava$3(this.cursor, this.cursor, 'ü'), (this.cursor = m));
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_more_than_one_syllable_word$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                e = this.cursor;
                                var r = 2;
                                G: for (;;) {
                                    t = this.cursor;
                                    c: do {
                                        Z: for (;;) {
                                            do {
                                                if (!this.in_grouping$esjava$3(n.g_vowel, 97, 305)) break;
                                                break Z;
                                            } while (!1);
                                            if (this.cursor >= this.limit) break c;
                                            this.cursor++;
                                        }
                                        r--;
                                        continue G;
                                    } while (!1);
                                    this.cursor = t;
                                    break;
                                }
                                return !(r > 0) && ((this.cursor = e), !0);
                            }
                        },
                        {
                            key: 'r_is_reserved_word$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0;
                                l: do {
                                    e = this.cursor;
                                    c: do {
                                        t = this.cursor;
                                        Z: for (;;) {
                                            do {
                                                if (!this.eq_s$esjava$1('ad')) break;
                                                break Z;
                                            } while (!1);
                                            if (this.cursor >= this.limit) break c;
                                            this.cursor++;
                                        }
                                        if (((this.I_strlen = 2), this.I_strlen !== this.limit)) break;
                                        this.cursor = t;
                                        break l;
                                    } while (!1);
                                    ((this.cursor = e), (n = this.cursor));
                                    H: for (;;) {
                                        do {
                                            if (!this.eq_s$esjava$1('soyad')) break;
                                            break H;
                                        } while (!1);
                                        if (this.cursor >= this.limit) return !1;
                                        this.cursor++;
                                    }
                                    if (((this.I_strlen = 5), this.I_strlen !== this.limit)) return !1;
                                    this.cursor = n;
                                } while (!1);
                                return !0;
                            }
                        },
                        {
                            key: 'r_postlude$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0;
                                e = this.cursor;
                                do {
                                    if (!this.r_is_reserved_word$esjava$0()) break;
                                    return !1;
                                } while (!1);
                                ((this.cursor = e), (this.limit_backward = this.cursor), (this.cursor = this.limit), (t = this.limit - this.cursor));
                                do if (!this.r_append_U_to_stems_ending_with_d_or_g$esjava$0()) break;
                                while (!1);
                                ((this.cursor = this.limit - t), (n = this.limit - this.cursor));
                                do if (!this.r_post_process_last_consonants$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - n), (this.cursor = this.limit_backward), !0);
                            }
                        },
                        {
                            key: 'stem$esjava$0',
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                if (!this.r_more_than_one_syllable_word$esjava$0()) return !1;
                                ((this.limit_backward = this.cursor), (this.cursor = this.limit), (e = this.limit - this.cursor));
                                do if (!this.r_stem_nominal_verb_suffixes$esjava$0()) break;
                                while (!1);
                                if (((this.cursor = this.limit - e), !this.B_continue_stemming_noun_suffixes)) return !1;
                                t = this.limit - this.cursor;
                                do if (!this.r_stem_noun_suffixes$esjava$0()) break;
                                while (!1);
                                return ((this.cursor = this.limit - t), (this.cursor = this.limit_backward), !!this.r_postlude$esjava$0());
                            }
                        },
                        {
                            key: 'stem',
                            value: function () {
                                for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                return 0 === r.length ? this.stem$esjava$0.apply(this, r) : (e = o(Object.getPrototypeOf(n.prototype), 'stem', this)).call.apply(e, [this].concat(r));
                            }
                        },
                        {
                            key: 'B_continue_stemming_noun_suffixes',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$B_continue_stemming_noun_suffixes') ? this._$esjava$B_continue_stemming_noun_suffixes : (this._$esjava$B_continue_stemming_noun_suffixes = !1);
                            },
                            set: function (e) {
                                this._$esjava$B_continue_stemming_noun_suffixes = e;
                            }
                        },
                        {
                            key: 'I_strlen',
                            get: function () {
                                return Object.prototype.hasOwnProperty.call(this, '_$esjava$I_strlen') ? this._$esjava$I_strlen : (this._$esjava$I_strlen = 0);
                            },
                            set: function (e) {
                                this._$esjava$I_strlen = e;
                            }
                        }
                    ],
                    [
                        {
                            key: 'a_0',
                            get: function () {
                                return (delete n.a_0, (n.a_0 = [new c('m', -1, -1), new c('n', -1, -1), new c('miz', -1, -1), new c('niz', -1, -1), new c('muz', -1, -1), new c('nuz', -1, -1), new c('müz', -1, -1), new c('nüz', -1, -1), new c('mız', -1, -1), new c('nız', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_1',
                            get: function () {
                                return (delete n.a_1, (n.a_1 = [new c('leri', -1, -1), new c('ları', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_2',
                            get: function () {
                                return (delete n.a_2, (n.a_2 = [new c('ni', -1, -1), new c('nu', -1, -1), new c('nü', -1, -1), new c('nı', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_3',
                            get: function () {
                                return (delete n.a_3, (n.a_3 = [new c('in', -1, -1), new c('un', -1, -1), new c('ün', -1, -1), new c('ın', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_4',
                            get: function () {
                                return (delete n.a_4, (n.a_4 = [new c('a', -1, -1), new c('e', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_5',
                            get: function () {
                                return (delete n.a_5, (n.a_5 = [new c('na', -1, -1), new c('ne', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_6',
                            get: function () {
                                return (delete n.a_6, (n.a_6 = [new c('da', -1, -1), new c('ta', -1, -1), new c('de', -1, -1), new c('te', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_7',
                            get: function () {
                                return (delete n.a_7, (n.a_7 = [new c('nda', -1, -1), new c('nde', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_8',
                            get: function () {
                                return (delete n.a_8, (n.a_8 = [new c('dan', -1, -1), new c('tan', -1, -1), new c('den', -1, -1), new c('ten', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_9',
                            get: function () {
                                return (delete n.a_9, (n.a_9 = [new c('ndan', -1, -1), new c('nden', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_10',
                            get: function () {
                                return (delete n.a_10, (n.a_10 = [new c('la', -1, -1), new c('le', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_11',
                            get: function () {
                                return (delete n.a_11, (n.a_11 = [new c('ca', -1, -1), new c('ce', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_12',
                            get: function () {
                                return (delete n.a_12, (n.a_12 = [new c('im', -1, -1), new c('um', -1, -1), new c('üm', -1, -1), new c('ım', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_13',
                            get: function () {
                                return (delete n.a_13, (n.a_13 = [new c('sin', -1, -1), new c('sun', -1, -1), new c('sün', -1, -1), new c('sın', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_14',
                            get: function () {
                                return (delete n.a_14, (n.a_14 = [new c('iz', -1, -1), new c('uz', -1, -1), new c('üz', -1, -1), new c('ız', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_15',
                            get: function () {
                                return (delete n.a_15, (n.a_15 = [new c('siniz', -1, -1), new c('sunuz', -1, -1), new c('sünüz', -1, -1), new c('sınız', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_16',
                            get: function () {
                                return (delete n.a_16, (n.a_16 = [new c('lar', -1, -1), new c('ler', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_17',
                            get: function () {
                                return (delete n.a_17, (n.a_17 = [new c('niz', -1, -1), new c('nuz', -1, -1), new c('nüz', -1, -1), new c('nız', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_18',
                            get: function () {
                                return (delete n.a_18, (n.a_18 = [new c('dir', -1, -1), new c('tir', -1, -1), new c('dur', -1, -1), new c('tur', -1, -1), new c('dür', -1, -1), new c('tür', -1, -1), new c('dır', -1, -1), new c('tır', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_19',
                            get: function () {
                                return (delete n.a_19, (n.a_19 = [new c('casına', -1, -1), new c('cesine', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_20',
                            get: function () {
                                return (delete n.a_20, (n.a_20 = [new c('di', -1, -1), new c('ti', -1, -1), new c('dik', -1, -1), new c('tik', -1, -1), new c('duk', -1, -1), new c('tuk', -1, -1), new c('dük', -1, -1), new c('tük', -1, -1), new c('dık', -1, -1), new c('tık', -1, -1), new c('dim', -1, -1), new c('tim', -1, -1), new c('dum', -1, -1), new c('tum', -1, -1), new c('düm', -1, -1), new c('tüm', -1, -1), new c('dım', -1, -1), new c('tım', -1, -1), new c('din', -1, -1), new c('tin', -1, -1), new c('dun', -1, -1), new c('tun', -1, -1), new c('dün', -1, -1), new c('tün', -1, -1), new c('dın', -1, -1), new c('tın', -1, -1), new c('du', -1, -1), new c('tu', -1, -1), new c('dü', -1, -1), new c('tü', -1, -1), new c('dı', -1, -1), new c('tı', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_21',
                            get: function () {
                                return (delete n.a_21, (n.a_21 = [new c('sa', -1, -1), new c('se', -1, -1), new c('sak', -1, -1), new c('sek', -1, -1), new c('sam', -1, -1), new c('sem', -1, -1), new c('san', -1, -1), new c('sen', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_22',
                            get: function () {
                                return (delete n.a_22, (n.a_22 = [new c('miş', -1, -1), new c('muş', -1, -1), new c('müş', -1, -1), new c('mış', -1, -1)]));
                            }
                        },
                        {
                            key: 'a_23',
                            get: function () {
                                return (delete n.a_23, (n.a_23 = [new c('b', -1, 1), new c('c', -1, 2), new c('d', -1, 3), new c('ğ', -1, 4)]));
                            }
                        },
                        {
                            key: 'g_vowel',
                            get: function () {
                                return (delete n.g_vowel, (n.g_vowel = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1]));
                            }
                        },
                        {
                            key: 'g_U',
                            get: function () {
                                return (delete n.g_U, (n.g_U = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1]));
                            }
                        },
                        {
                            key: 'g_vowel1',
                            get: function () {
                                return (delete n.g_vowel1, (n.g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]));
                            }
                        },
                        {
                            key: 'g_vowel2',
                            get: function () {
                                return (delete n.g_vowel2, (n.g_vowel2 = [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130]));
                            }
                        },
                        {
                            key: 'g_vowel3',
                            get: function () {
                                return (delete n.g_vowel3, (n.g_vowel3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]));
                            }
                        },
                        {
                            key: 'g_vowel4',
                            get: function () {
                                return (delete n.g_vowel4, (n.g_vowel4 = [17]));
                            }
                        },
                        {
                            key: 'g_vowel5',
                            get: function () {
                                return (delete n.g_vowel5, (n.g_vowel5 = [65]));
                            }
                        },
                        {
                            key: 'g_vowel6',
                            get: function () {
                                return (delete n.g_vowel6, (n.g_vowel6 = [65]));
                            }
                        }
                    ]
                ),
                n
            );
        })(u);
    function k(e) {
        var t = new {
            arabic: d,
            armenian: f,
            basque: _,
            catalan: p,
            czech: h,
            danish: m,
            dutch: g,
            english: E,
            finnish: b,
            french: y,
            german: O,
            hungarian: v,
            italian: T,
            irish: I,
            norwegian: S,
            porter: A,
            portuguese: N,
            romanian: C,
            russian: w,
            spanish: P,
            slovene: R,
            swedish: D,
            tamil: L,
            turkish: x
        }[e.toLowerCase()]();
        return {
            stem: function (e) {
                return (t.setCurrent(e), t.stem(), t.getCurrent());
            }
        };
    }
    function j() {
        return ['arabic', 'armenian', 'basque', 'catalan', 'czech', 'danish', 'dutch', 'english', 'finnish', 'french', 'german', 'hungarian', 'italian', 'irish', 'norwegian', 'porter', 'portuguese', 'romanian', 'russian', 'spanish', 'slovene', 'swedish', 'tamil', 'turkish'];
    }
});
