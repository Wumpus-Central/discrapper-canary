r.d(n, {
    _: function () {
        return w;
    }
});
var i,
    a,
    s = r(259630),
    o = r(939990),
    l = r(73745),
    u = r(555936),
    c = r(791929),
    d = r(921367),
    f = r(664002),
    _ = new RegExp('^'.concat(u.p.source, '*')),
    h = new RegExp(''.concat(u.p.source, '*$'));
function p(e, n) {
    return {
        start: e,
        end: n
    };
}
var m = !!String.prototype.startsWith && '_a'.startsWith('a', 1),
    g = !!String.fromCodePoint,
    E = !!Object.fromEntries,
    v = !!String.prototype.codePointAt,
    I = !!String.prototype.trimStart,
    T = !!String.prototype.trimEnd,
    b = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
              return 'number' == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e);
          },
    y = !0;
try {
    var S = L('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    y = (null === (i = S.exec('a')) || void 0 === i ? void 0 : i[0]) === 'a';
} catch (e) {
    y = !1;
}
var A = m
        ? function (e, n, r) {
              return e.startsWith(n, r);
          }
        : function (e, n, r) {
              return e.slice(r, r + n.length) === n;
          },
    N = g
        ? String.fromCodePoint
        : function () {
              for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              for (var i = '', a = n.length, s = 0; a > s; ) {
                  if ((e = n[s++]) > 1114111) throw RangeError(e + ' is not a valid code point');
                  i += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (e % 1024) + 56320);
              }
              return i;
          },
    C = E
        ? Object.fromEntries
        : function (e) {
              for (var n = {}, r = 0, i = e; r < i.length; r++) {
                  var a = i[r],
                      s = a[0],
                      o = a[1];
                  n[s] = o;
              }
              return n;
          },
    R = v
        ? function (e, n) {
              return e.codePointAt(n);
          }
        : function (e, n) {
              var r,
                  i = e.length;
              if (!(n < 0) && !(n >= i)) {
                  var a = e.charCodeAt(n);
                  return a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? a : ((a - 55296) << 10) + (r - 56320) + 65536;
              }
          },
    O = I
        ? function (e) {
              return e.trimStart();
          }
        : function (e) {
              return e.replace(_, '');
          },
    D = T
        ? function (e) {
              return e.trimEnd();
          }
        : function (e) {
              return e.replace(h, '');
          };
function L(e, n) {
    return new RegExp(e, n);
}
if (y) {
    var x = L('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    a = function (e, n) {
        var r;
        return (x.lastIndex = n), null !== (r = x.exec(e)[1]) && void 0 !== r ? r : '';
    };
} else
    a = function (e, n) {
        for (var r = []; ; ) {
            var i = R(e, n);
            if (void 0 === i || U(i) || B(i)) break;
            r.push(i), (n += i >= 65536 ? 2 : 1);
        }
        return N.apply(void 0, r);
    };
var w = (function () {
    function e(e, n) {
        void 0 === n && (n = {}),
            (this.message = e),
            (this.position = {
                offset: 0,
                line: 1,
                column: 1
            }),
            (this.ignoreTag = !!n.ignoreTag),
            (this.locale = n.locale),
            (this.requiresOtherClause = !!n.requiresOtherClause),
            (this.shouldParseSkeletons = !!n.shouldParseSkeletons);
    }
    return (
        (e.prototype.parse = function () {
            if (0 !== this.offset()) throw Error('parser can only be used once');
            return this.parseMessage(0, '', !1);
        }),
        (e.prototype.parseMessage = function (e, n, r) {
            for (var i = []; !this.isEOF(); ) {
                var a = this.char();
                if (123 === a) {
                    var s = this.parseArgument(e, r);
                    if (s.err) return s;
                    i.push(s.val);
                } else if (125 === a && e > 0) break;
                else if (35 === a && ('plural' === n || 'selectordinal' === n)) {
                    var u = this.clonePosition();
                    this.bump(),
                        i.push({
                            type: l.wD.pound,
                            location: p(u, this.clonePosition())
                        });
                } else if (60 !== a || this.ignoreTag || 47 !== this.peek()) {
                    if (60 === a && !this.ignoreTag && P(this.peek() || 0)) {
                        var s = this.parseTag(e, n);
                        if (s.err) return s;
                        i.push(s.val);
                    } else {
                        var s = this.parseLiteral(e, n);
                        if (s.err) return s;
                        i.push(s.val);
                    }
                } else {
                    if (!r) return this.error(o.o.UNMATCHED_CLOSING_TAG, p(this.clonePosition(), this.clonePosition()));
                    break;
                }
            }
            return {
                val: i,
                err: null
            };
        }),
        (e.prototype.parseTag = function (e, n) {
            var r = this.clonePosition();
            this.bump();
            var i = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf('/>')))
                return {
                    val: {
                        type: l.wD.literal,
                        value: '<'.concat(i, '/>'),
                        location: p(r, this.clonePosition())
                    },
                    err: null
                };
            if (!this.bumpIf('>')) return this.error(o.o.INVALID_TAG, p(r, this.clonePosition()));
            var a = this.parseMessage(e + 1, n, !0);
            if (a.err) return a;
            var s = a.val,
                u = this.clonePosition();
            if (!this.bumpIf('</')) return this.error(o.o.UNCLOSED_TAG, p(r, this.clonePosition()));
            if (this.isEOF() || !P(this.char())) return this.error(o.o.INVALID_TAG, p(u, this.clonePosition()));
            var c = this.clonePosition();
            return i !== this.parseTagName()
                ? this.error(o.o.UNMATCHED_CLOSING_TAG, p(c, this.clonePosition()))
                : (this.bumpSpace(), this.bumpIf('>'))
                  ? {
                        val: {
                            type: l.wD.tag,
                            value: i,
                            children: s,
                            location: p(r, this.clonePosition())
                        },
                        err: null
                    }
                  : this.error(o.o.INVALID_TAG, p(u, this.clonePosition()));
        }),
        (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && k(this.char()); ) this.bump();
            return this.message.slice(e, this.offset());
        }),
        (e.prototype.parseLiteral = function (e, n) {
            for (var r = this.clonePosition(), i = ''; ; ) {
                var a = this.tryParseQuote(n);
                if (a) {
                    i += a;
                    continue;
                }
                var s = this.tryParseUnquoted(e, n);
                if (s) {
                    i += s;
                    continue;
                }
                var o = this.tryParseLeftAngleBracket();
                if (o) {
                    i += o;
                    continue;
                }
                break;
            }
            var u = p(r, this.clonePosition());
            return {
                val: {
                    type: l.wD.literal,
                    value: i,
                    location: u
                },
                err: null
            };
        }),
        (e.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() || 60 !== this.char() || (!this.ignoreTag && M(this.peek() || 0)) ? null : (this.bump(), '<');
        }),
        (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
                case 39:
                    return this.bump(), this.bump(), "'";
                case 123:
                case 60:
                case 62:
                case 125:
                    break;
                case 35:
                    if ('plural' === e || 'selectordinal' === e) break;
                    return null;
                default:
                    return null;
            }
            this.bump();
            var n = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
                var r = this.char();
                if (39 === r) {
                    if (39 === this.peek()) n.push(39), this.bump();
                    else {
                        this.bump();
                        break;
                    }
                } else n.push(r);
                this.bump();
            }
            return N.apply(void 0, n);
        }),
        (e.prototype.tryParseUnquoted = function (e, n) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r || 123 === r || (35 === r && ('plural' === n || 'selectordinal' === n)) || (125 === r && e > 0) ? null : (this.bump(), N(r));
        }),
        (e.prototype.parseArgument = function (e, n) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(o.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(r, this.clonePosition()));
            if (125 === this.char()) return this.bump(), this.error(o.o.EMPTY_ARGUMENT, p(r, this.clonePosition()));
            var i = this.parseIdentifierIfPossible().value;
            if (!i) return this.error(o.o.MALFORMED_ARGUMENT, p(r, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF())) return this.error(o.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(r, this.clonePosition()));
            switch (this.char()) {
                case 125:
                    return (
                        this.bump(),
                        {
                            val: {
                                type: l.wD.argument,
                                value: i,
                                location: p(r, this.clonePosition())
                            },
                            err: null
                        }
                    );
                case 44:
                    if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(o.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(r, this.clonePosition()));
                    return this.parseArgumentOptions(e, n, i, r);
                default:
                    return this.error(o.o.MALFORMED_ARGUMENT, p(r, this.clonePosition()));
            }
        }),
        (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
                n = this.offset(),
                r = a(this.message, n),
                i = n + r.length;
            return (
                this.bumpTo(i),
                {
                    value: r,
                    location: p(e, this.clonePosition())
                }
            );
        }),
        (e.prototype.parseArgumentOptions = function (e, n, r, i) {
            var a,
                u = this.clonePosition(),
                d = this.parseIdentifierIfPossible().value,
                _ = this.clonePosition();
            switch (d) {
                case '':
                    return this.error(o.o.EXPECT_ARGUMENT_TYPE, p(u, _));
                case 'number':
                case 'date':
                case 'time':
                    this.bumpSpace();
                    var h = null;
                    if (this.bumpIf(',')) {
                        this.bumpSpace();
                        var m = this.clonePosition(),
                            g = this.parseSimpleArgStyleIfPossible();
                        if (g.err) return g;
                        var E = D(g.val);
                        if (0 === E.length) return this.error(o.o.EXPECT_ARGUMENT_STYLE, p(this.clonePosition(), this.clonePosition()));
                        h = {
                            style: E,
                            styleLocation: p(m, this.clonePosition())
                        };
                    }
                    var v = this.tryParseArgumentClose(i);
                    if (v.err) return v;
                    var I = p(i, this.clonePosition());
                    if (h && A(null == h ? void 0 : h.style, '::', 0)) {
                        var T = O(h.style.slice(2));
                        if ('number' === d) {
                            var g = this.parseNumberSkeletonFromString(T, h.styleLocation);
                            if (g.err) return g;
                            return {
                                val: {
                                    type: l.wD.number,
                                    value: r,
                                    location: I,
                                    style: g.val
                                },
                                err: null
                            };
                        }
                        if (0 === T.length) return this.error(o.o.EXPECT_DATE_TIME_SKELETON, I);
                        var b = T;
                        this.locale && (b = (0, f.T)(T, this.locale));
                        var E = {
                            type: l.aV.dateTime,
                            pattern: b,
                            location: h.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? (0, c.T)(b) : {}
                        };
                        return {
                            val: {
                                type: 'date' === d ? l.wD.date : l.wD.time,
                                value: r,
                                location: I,
                                style: E
                            },
                            err: null
                        };
                    }
                    return {
                        val: {
                            type: 'number' === d ? l.wD.number : 'date' === d ? l.wD.date : l.wD.time,
                            value: r,
                            location: I,
                            style: null !== (a = null == h ? void 0 : h.style) && void 0 !== a ? a : null
                        },
                        err: null
                    };
                case 'plural':
                case 'selectordinal':
                case 'select':
                    var y = this.clonePosition();
                    if ((this.bumpSpace(), !this.bumpIf(','))) return this.error(o.o.EXPECT_SELECT_ARGUMENT_OPTIONS, p(y, (0, s.pi)({}, y)));
                    this.bumpSpace();
                    var S = this.parseIdentifierIfPossible(),
                        N = 0;
                    if ('select' !== d && 'offset' === S.value) {
                        if (!this.bumpIf(':')) return this.error(o.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        var g = this.tryParseDecimalInteger(o.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, o.o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                        if (g.err) return g;
                        this.bumpSpace(), (S = this.parseIdentifierIfPossible()), (N = g.val);
                    }
                    var R = this.tryParsePluralOrSelectOptions(e, d, n, S);
                    if (R.err) return R;
                    var v = this.tryParseArgumentClose(i);
                    if (v.err) return v;
                    var L = p(i, this.clonePosition());
                    if ('select' === d)
                        return {
                            val: {
                                type: l.wD.select,
                                value: r,
                                options: C(R.val),
                                location: L
                            },
                            err: null
                        };
                    return {
                        val: {
                            type: l.wD.plural,
                            value: r,
                            options: C(R.val),
                            offset: N,
                            pluralType: 'plural' === d ? 'cardinal' : 'ordinal',
                            location: L
                        },
                        err: null
                    };
                default:
                    return this.error(o.o.INVALID_ARGUMENT_TYPE, p(u, _));
            }
        }),
        (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
                ? this.error(o.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(e, this.clonePosition()))
                : (this.bump(),
                  {
                      val: !0,
                      err: null
                  });
        }),
        (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, n = this.clonePosition(); !this.isEOF(); )
                switch (this.char()) {
                    case 39:
                        this.bump();
                        var r = this.clonePosition();
                        if (!this.bumpUntil("'")) return this.error(o.o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, p(r, this.clonePosition()));
                        this.bump();
                        break;
                    case 123:
                        (e += 1), this.bump();
                        break;
                    case 125:
                        if (!(e > 0))
                            return {
                                val: this.message.slice(n.offset, this.offset()),
                                err: null
                            };
                        e -= 1;
                        break;
                    default:
                        this.bump();
                }
            return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
            };
        }),
        (e.prototype.parseNumberSkeletonFromString = function (e, n) {
            var r = [];
            try {
                r = (0, d.O)(e);
            } catch (e) {
                return this.error(o.o.INVALID_NUMBER_SKELETON, n);
            }
            return {
                val: {
                    type: l.aV.number,
                    tokens: r,
                    location: n,
                    parsedOptions: this.shouldParseSkeletons ? (0, d.I)(r) : {}
                },
                err: null
            };
        }),
        (e.prototype.tryParsePluralOrSelectOptions = function (e, n, r, i) {
            for (var a, s = !1, l = [], u = new Set(), c = i.value, d = i.location; ; ) {
                if (0 === c.length) {
                    var f = this.clonePosition();
                    if ('select' !== n && this.bumpIf('=')) {
                        var _ = this.tryParseDecimalInteger(o.o.EXPECT_PLURAL_ARGUMENT_SELECTOR, o.o.INVALID_PLURAL_ARGUMENT_SELECTOR);
                        if (_.err) return _;
                        (d = p(f, this.clonePosition())), (c = this.message.slice(f.offset, this.offset()));
                    } else break;
                }
                if (u.has(c)) return this.error('select' === n ? o.o.DUPLICATE_SELECT_ARGUMENT_SELECTOR : o.o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
                'other' === c && (s = !0), this.bumpSpace();
                var h = this.clonePosition();
                if (!this.bumpIf('{')) return this.error('select' === n ? o.o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : o.o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, p(this.clonePosition(), this.clonePosition()));
                var m = this.parseMessage(e + 1, n, r);
                if (m.err) return m;
                var g = this.tryParseArgumentClose(h);
                if (g.err) return g;
                l.push([
                    c,
                    {
                        value: m.val,
                        location: p(h, this.clonePosition())
                    }
                ]),
                    u.add(c),
                    this.bumpSpace(),
                    (c = (a = this.parseIdentifierIfPossible()).value),
                    (d = a.location);
            }
            return 0 === l.length
                ? this.error('select' === n ? o.o.EXPECT_SELECT_ARGUMENT_SELECTOR : o.o.EXPECT_PLURAL_ARGUMENT_SELECTOR, p(this.clonePosition(), this.clonePosition()))
                : this.requiresOtherClause && !s
                  ? this.error(o.o.MISSING_OTHER_CLAUSE, p(this.clonePosition(), this.clonePosition()))
                  : {
                        val: l,
                        err: null
                    };
        }),
        (e.prototype.tryParseDecimalInteger = function (e, n) {
            var r = 1,
                i = this.clonePosition();
            this.bumpIf('+') || (this.bumpIf('-') && (r = -1));
            for (var a = !1, s = 0; !this.isEOF(); ) {
                var o = this.char();
                if (o >= 48 && o <= 57) (a = !0), (s = 10 * s + (o - 48)), this.bump();
                else break;
            }
            var l = p(i, this.clonePosition());
            return a
                ? b((s *= r))
                    ? {
                          val: s,
                          err: null
                      }
                    : this.error(n, l)
                : this.error(e, l);
        }),
        (e.prototype.offset = function () {
            return this.position.offset;
        }),
        (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
        }),
        (e.prototype.clonePosition = function () {
            return {
                offset: this.position.offset,
                line: this.position.line,
                column: this.position.column
            };
        }),
        (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error('out of bound');
            var n = R(this.message, e);
            if (void 0 === n) throw Error('Offset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
            return n;
        }),
        (e.prototype.error = function (e, n) {
            return {
                val: null,
                err: {
                    kind: e,
                    message: this.message,
                    location: n
                }
            };
        }),
        (e.prototype.bump = function () {
            if (!this.isEOF()) {
                var e = this.char();
                10 === e ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1)) : ((this.position.column += 1), (this.position.offset += e < 65536 ? 1 : 2));
            }
        }),
        (e.prototype.bumpIf = function (e) {
            if (A(this.message, e, this.offset())) {
                for (var n = 0; n < e.length; n++) this.bump();
                return !0;
            }
            return !1;
        }),
        (e.prototype.bumpUntil = function (e) {
            var n = this.offset(),
                r = this.message.indexOf(e, n);
            return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
        }),
        (e.prototype.bumpTo = function (e) {
            if (this.offset() > e) throw Error('targetOffset '.concat(e, ' must be greater than or equal to the current offset ').concat(this.offset()));
            for (e = Math.min(e, this.message.length); ; ) {
                var n = this.offset();
                if (n === e) break;
                if (n > e) throw Error('targetOffset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
                if ((this.bump(), this.isEOF())) break;
            }
        }),
        (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && U(this.char()); ) this.bump();
        }),
        (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
                n = this.offset(),
                r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
        }),
        e
    );
})();
function P(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function M(e) {
    return P(e) || 47 === e;
}
function k(e) {
    return 45 === e || 46 === e || (e >= 48 && e <= 57) || 95 === e || (e >= 97 && e <= 122) || (e >= 65 && e <= 90) || 183 == e || (e >= 192 && e <= 214) || (e >= 216 && e <= 246) || (e >= 248 && e <= 893) || (e >= 895 && e <= 8191) || (e >= 8204 && e <= 8205) || (e >= 8255 && e <= 8256) || (e >= 8304 && e <= 8591) || (e >= 11264 && e <= 12271) || (e >= 12289 && e <= 55295) || (e >= 63744 && e <= 64975) || (e >= 65008 && e <= 65533) || (e >= 65536 && e <= 983039);
}
function U(e) {
    return (e >= 9 && e <= 13) || 32 === e || 133 === e || (e >= 8206 && e <= 8207) || 8232 === e || 8233 === e;
}
function B(e) {
    return (
        (e >= 33 && e <= 35) ||
        36 === e ||
        (e >= 37 && e <= 39) ||
        40 === e ||
        41 === e ||
        42 === e ||
        43 === e ||
        44 === e ||
        45 === e ||
        (e >= 46 && e <= 47) ||
        (e >= 58 && e <= 59) ||
        (e >= 60 && e <= 62) ||
        (e >= 63 && e <= 64) ||
        91 === e ||
        92 === e ||
        93 === e ||
        94 === e ||
        96 === e ||
        123 === e ||
        124 === e ||
        125 === e ||
        126 === e ||
        161 === e ||
        (e >= 162 && e <= 165) ||
        166 === e ||
        167 === e ||
        169 === e ||
        171 === e ||
        172 === e ||
        174 === e ||
        176 === e ||
        177 === e ||
        182 === e ||
        187 === e ||
        191 === e ||
        215 === e ||
        247 === e ||
        (e >= 8208 && e <= 8213) ||
        (e >= 8214 && e <= 8215) ||
        8216 === e ||
        8217 === e ||
        8218 === e ||
        (e >= 8219 && e <= 8220) ||
        8221 === e ||
        8222 === e ||
        8223 === e ||
        (e >= 8224 && e <= 8231) ||
        (e >= 8240 && e <= 8248) ||
        8249 === e ||
        8250 === e ||
        (e >= 8251 && e <= 8254) ||
        (e >= 8257 && e <= 8259) ||
        8260 === e ||
        8261 === e ||
        8262 === e ||
        (e >= 8263 && e <= 8273) ||
        8274 === e ||
        8275 === e ||
        (e >= 8277 && e <= 8286) ||
        (e >= 8592 && e <= 8596) ||
        (e >= 8597 && e <= 8601) ||
        (e >= 8602 && e <= 8603) ||
        (e >= 8604 && e <= 8607) ||
        8608 === e ||
        (e >= 8609 && e <= 8610) ||
        8611 === e ||
        (e >= 8612 && e <= 8613) ||
        8614 === e ||
        (e >= 8615 && e <= 8621) ||
        8622 === e ||
        (e >= 8623 && e <= 8653) ||
        (e >= 8654 && e <= 8655) ||
        (e >= 8656 && e <= 8657) ||
        8658 === e ||
        8659 === e ||
        8660 === e ||
        (e >= 8661 && e <= 8691) ||
        (e >= 8692 && e <= 8959) ||
        (e >= 8960 && e <= 8967) ||
        8968 === e ||
        8969 === e ||
        8970 === e ||
        8971 === e ||
        (e >= 8972 && e <= 8991) ||
        (e >= 8992 && e <= 8993) ||
        (e >= 8994 && e <= 9000) ||
        9001 === e ||
        9002 === e ||
        (e >= 9003 && e <= 9083) ||
        9084 === e ||
        (e >= 9085 && e <= 9114) ||
        (e >= 9115 && e <= 9139) ||
        (e >= 9140 && e <= 9179) ||
        (e >= 9180 && e <= 9185) ||
        (e >= 9186 && e <= 9254) ||
        (e >= 9255 && e <= 9279) ||
        (e >= 9280 && e <= 9290) ||
        (e >= 9291 && e <= 9311) ||
        (e >= 9472 && e <= 9654) ||
        9655 === e ||
        (e >= 9656 && e <= 9664) ||
        9665 === e ||
        (e >= 9666 && e <= 9719) ||
        (e >= 9720 && e <= 9727) ||
        (e >= 9728 && e <= 9838) ||
        9839 === e ||
        (e >= 9840 && e <= 10087) ||
        10088 === e ||
        10089 === e ||
        10090 === e ||
        10091 === e ||
        10092 === e ||
        10093 === e ||
        10094 === e ||
        10095 === e ||
        10096 === e ||
        10097 === e ||
        10098 === e ||
        10099 === e ||
        10100 === e ||
        10101 === e ||
        (e >= 10132 && e <= 10175) ||
        (e >= 10176 && e <= 10180) ||
        10181 === e ||
        10182 === e ||
        (e >= 10183 && e <= 10213) ||
        10214 === e ||
        10215 === e ||
        10216 === e ||
        10217 === e ||
        10218 === e ||
        10219 === e ||
        10220 === e ||
        10221 === e ||
        10222 === e ||
        10223 === e ||
        (e >= 10224 && e <= 10239) ||
        (e >= 10240 && e <= 10495) ||
        (e >= 10496 && e <= 10626) ||
        10627 === e ||
        10628 === e ||
        10629 === e ||
        10630 === e ||
        10631 === e ||
        10632 === e ||
        10633 === e ||
        10634 === e ||
        10635 === e ||
        10636 === e ||
        10637 === e ||
        10638 === e ||
        10639 === e ||
        10640 === e ||
        10641 === e ||
        10642 === e ||
        10643 === e ||
        10644 === e ||
        10645 === e ||
        10646 === e ||
        10647 === e ||
        10648 === e ||
        (e >= 10649 && e <= 10711) ||
        10712 === e ||
        10713 === e ||
        10714 === e ||
        10715 === e ||
        (e >= 10716 && e <= 10747) ||
        10748 === e ||
        10749 === e ||
        (e >= 10750 && e <= 11007) ||
        (e >= 11008 && e <= 11055) ||
        (e >= 11056 && e <= 11076) ||
        (e >= 11077 && e <= 11078) ||
        (e >= 11079 && e <= 11084) ||
        (e >= 11085 && e <= 11123) ||
        (e >= 11124 && e <= 11125) ||
        (e >= 11126 && e <= 11157) ||
        11158 === e ||
        (e >= 11159 && e <= 11263) ||
        (e >= 11776 && e <= 11777) ||
        11778 === e ||
        11779 === e ||
        11780 === e ||
        11781 === e ||
        (e >= 11782 && e <= 11784) ||
        11785 === e ||
        11786 === e ||
        11787 === e ||
        11788 === e ||
        11789 === e ||
        (e >= 11790 && e <= 11798) ||
        11799 === e ||
        (e >= 11800 && e <= 11801) ||
        11802 === e ||
        11803 === e ||
        11804 === e ||
        11805 === e ||
        (e >= 11806 && e <= 11807) ||
        11808 === e ||
        11809 === e ||
        11810 === e ||
        11811 === e ||
        11812 === e ||
        11813 === e ||
        11814 === e ||
        11815 === e ||
        11816 === e ||
        11817 === e ||
        (e >= 11818 && e <= 11822) ||
        11823 === e ||
        (e >= 11824 && e <= 11833) ||
        (e >= 11834 && e <= 11835) ||
        (e >= 11836 && e <= 11839) ||
        11840 === e ||
        11841 === e ||
        11842 === e ||
        (e >= 11843 && e <= 11855) ||
        (e >= 11856 && e <= 11857) ||
        11858 === e ||
        (e >= 11859 && e <= 11903) ||
        (e >= 12289 && e <= 12291) ||
        12296 === e ||
        12297 === e ||
        12298 === e ||
        12299 === e ||
        12300 === e ||
        12301 === e ||
        12302 === e ||
        12303 === e ||
        12304 === e ||
        12305 === e ||
        (e >= 12306 && e <= 12307) ||
        12308 === e ||
        12309 === e ||
        12310 === e ||
        12311 === e ||
        12312 === e ||
        12313 === e ||
        12314 === e ||
        12315 === e ||
        12316 === e ||
        12317 === e ||
        (e >= 12318 && e <= 12319) ||
        12320 === e ||
        12336 === e ||
        64830 === e ||
        64831 === e ||
        (e >= 65093 && e <= 65094)
    );
}
