var i = r(957578).Buffer,
    a =
        i.isEncoding ||
        function (e) {
            switch ((e = '' + e) && e.toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                case 'raw':
                    return !0;
                default:
                    return !1;
            }
        };
function o(e) {
    var n;
    if (!e) return 'utf8';
    for (;;)
        switch (e) {
            case 'utf8':
            case 'utf-8':
                return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 'utf16le';
            case 'latin1':
            case 'binary':
                return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
                return e;
            default:
                if (n) return;
                (e = ('' + e).toLowerCase()), (n = !0);
        }
}
function s(e) {
    var n = o(e);
    if ('string' != typeof n && (i.isEncoding === a || !a(e))) throw Error('Unknown encoding: ' + e);
    return n || e;
}
function l(e) {
    var n;
    switch (((this.encoding = s(e)), this.encoding)) {
        case 'utf16le':
            (this.text = _), (this.end = m), (n = 4);
            break;
        case 'utf8':
            (this.fillLast = f), (n = 4);
            break;
        case 'base64':
            (this.text = g), (this.end = E), (n = 3);
            break;
        default:
            (this.write = v), (this.end = y);
            return;
    }
    (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = i.allocUnsafe(n));
}
function u(e) {
    if (e <= 127) return 0;
    if (e >> 5 == 6) return 2;
    if (e >> 4 == 14) return 3;
    else if (e >> 3 == 30) return 4;
    return e >> 6 == 2 ? -1 : -2;
}
function c(e, n, r) {
    var i = n.length - 1;
    if (i < r) return 0;
    var a = u(n[i]);
    return a >= 0 ? (a > 0 && (e.lastNeed = a - 1), a) : --i < r || -2 === a ? 0 : (a = u(n[i])) >= 0 ? (a > 0 && (e.lastNeed = a - 2), a) : --i < r || -2 === a ? 0 : (a = u(n[i])) >= 0 ? (a > 0 && (2 === a ? (a = 0) : (e.lastNeed = a - 3)), a) : 0;
}
function d(e, n, r) {
    if ((192 & n[0]) != 128) return (e.lastNeed = 0), '\uFFFD';
    if (e.lastNeed > 1 && n.length > 1) {
        if ((192 & n[1]) != 128) return (e.lastNeed = 1), '\uFFFD';
        if (e.lastNeed > 2 && n.length > 2 && (192 & n[2]) != 128) return (e.lastNeed = 2), '\uFFFD';
    }
}
function f(e) {
    var n = this.lastTotal - this.lastNeed,
        r = d(this, e, n);
    return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, n, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e.copy(this.lastChar, n, 0, e.length), (this.lastNeed -= e.length));
}
function p(e, n) {
    var r = c(this, e, n);
    if (!this.lastNeed) return e.toString('utf8', n);
    this.lastTotal = r;
    var i = e.length - (r - this.lastNeed);
    return e.copy(this.lastChar, 0, i), e.toString('utf8', n, i);
}
function h(e) {
    var n = e && e.length ? this.write(e) : '';
    return this.lastNeed ? n + '\uFFFD' : n;
}
function _(e, n) {
    if ((e.length - n) % 2 == 0) {
        var r = e.toString('utf16le', n);
        if (r) {
            var i = r.charCodeAt(r.length - 1);
            if (i >= 55296 && i <= 56319) return (this.lastNeed = 2), (this.lastTotal = 4), (this.lastChar[0] = e[e.length - 2]), (this.lastChar[1] = e[e.length - 1]), r.slice(0, -1);
        }
        return r;
    }
    return (this.lastNeed = 1), (this.lastTotal = 2), (this.lastChar[0] = e[e.length - 1]), e.toString('utf16le', n, e.length - 1);
}
function m(e) {
    var n = e && e.length ? this.write(e) : '';
    if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return n + this.lastChar.toString('utf16le', 0, r);
    }
    return n;
}
function g(e, n) {
    var r = (e.length - n) % 3;
    return 0 === r ? e.toString('base64', n) : ((this.lastNeed = 3 - r), (this.lastTotal = 3), 1 === r ? (this.lastChar[0] = e[e.length - 1]) : ((this.lastChar[0] = e[e.length - 2]), (this.lastChar[1] = e[e.length - 1])), e.toString('base64', n, e.length - r));
}
function E(e) {
    var n = e && e.length ? this.write(e) : '';
    return this.lastNeed ? n + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : n;
}
function v(e) {
    return e.toString(this.encoding);
}
function y(e) {
    return e && e.length ? this.write(e) : '';
}
(n.StringDecoder = l),
    (l.prototype.write = function (e) {
        var n, r;
        if (0 === e.length) return '';
        if (this.lastNeed) {
            if (void 0 === (n = this.fillLast(e))) return '';
            (r = this.lastNeed), (this.lastNeed = 0);
        } else r = 0;
        return r < e.length ? (n ? n + this.text(e, r) : this.text(e, r)) : n || '';
    }),
    (l.prototype.end = h),
    (l.prototype.text = p),
    (l.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), (this.lastNeed -= e.length);
    });
