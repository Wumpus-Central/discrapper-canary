let i;
function r(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!n) {
        if (Array.isArray(e) || (n = a(e)) || (t && e && 'number' == typeof e.length)) {
            n && (e = n);
            var i = 0,
                r = function () {};
            return {
                s: r,
                n: function () {
                    return i >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[i++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: r
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s,
        o = !0,
        l = !1;
    return {
        s: function () {
            n = n.call(e);
        },
        n: function () {
            var e = n.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (l = !0), (s = e);
        },
        f: function () {
            try {
                o || null == n.return || n.return();
            } finally {
                if (l) throw s;
            }
        }
    };
}
function a(e, t) {
    if (e) {
        if ('string' == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
    }
}
function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
'undefined' != typeof window ? (i = window) : 'undefined' == typeof self ? (console.warn('Using browser-only version of superagent in non-browser environment'), (i = void 0)) : (i = self);
let o = n(606419),
    l = n(164390),
    u = n(339768),
    c = n(615252),
    d = n(517024),
    f = d.isObject,
    _ = d.mixin,
    p = d.hasOwn,
    h = n(509337),
    m = n(675246);
function g() {}
e.exports = function (e, n) {
    return 'function' == typeof n ? new t.Request('GET', e).end(n) : 1 == arguments.length ? new t.Request('GET', e) : new t.Request(e, n);
};
let E = (t = e.exports);
(t.Request = N),
    (E.getXHR = () => {
        if (i.XMLHttpRequest) return new i.XMLHttpRequest();
        throw Error('Browser-only version of superagent could not find XHR');
    });
let v = ''.trim ? (e) => e.trim() : (e) => e.replace(/(^\s*|\s*$)/g, '');
function y(e) {
    if (!f(e)) return e;
    let t = [];
    for (let n in e) p(e, n) && I(t, n, e[n]);
    return t.join('&');
}
function I(e, t, n) {
    if (void 0 !== n) {
        if (null === n) {
            e.push(encodeURI(t));
            return;
        }
        if (Array.isArray(n)) {
            var i,
                a = r(n);
            try {
                for (a.s(); !(i = a.n()).done; ) {
                    let n = i.value;
                    I(e, t, n);
                }
            } catch (e) {
                a.e(e);
            } finally {
                a.f();
            }
        } else if (f(n)) for (let i in n) p(n, i) && I(e, `${t}[${i}]`, n[i]);
        else e.push(encodeURI(t) + '=' + encodeURIComponent(n));
    }
}
function T(e) {
    let t, n;
    let i = {},
        r = e.split('&');
    for (let e = 0, a = r.length; e < a; ++e) -1 === (n = (t = r[e]).indexOf('=')) ? (i[decodeURIComponent(t)] = '') : (i[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1)));
    return i;
}
function b(e) {
    let t, n, i, r;
    let a = e.split(/\r?\n/),
        s = {};
    for (let e = 0, o = a.length; e < o; ++e) -1 !== (t = (n = a[e]).indexOf(':')) && ((i = n.slice(0, t).toLowerCase()), (r = v(n.slice(t + 1))), (s[i] = r));
    return s;
}
function S(e) {
    return /[/+]json($|[^-\w])/i.test(e);
}
function A(e) {
    (this.req = e), (this.xhr = this.req.xhr), (this.text = ('HEAD' !== this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType)) || void 0 === this.xhr.responseType ? this.xhr.responseText : null), (this.statusText = this.req.xhr.statusText);
    let t = this.xhr.status;
    1223 === t && (t = 204), this._setStatusProperties(t), (this.headers = b(this.xhr.getAllResponseHeaders())), (this.header = this.headers), (this.header['content-type'] = this.xhr.getResponseHeader('content-type')), this._setHeaderProperties(this.header), null === this.text && e._responseType ? (this.body = this.xhr.response) : (this.body = 'HEAD' === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response));
}
function N(e, t) {
    let n = this;
    (this._query = this._query || []),
        (this.method = e),
        (this.url = t),
        (this.header = {}),
        (this._header = {}),
        this.on('end', () => {
            let e,
                t = null,
                i = null;
            try {
                i = new A(n);
            } catch (e) {
                return ((t = Error('Parser is unable to parse the response')).parse = !0), (t.original = e), n.xhr ? ((t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response), (t.status = n.xhr.status ? n.xhr.status : null), (t.statusCode = t.status)) : ((t.rawResponse = null), (t.status = null)), n.callback(t);
            }
            n.emit('response', i);
            try {
                n._isResponseOK(i) || (e = Error(i.statusText || i.text || 'Unsuccessful HTTP response'));
            } catch (t) {
                e = t;
            }
            e ? ((e.original = t), (e.response = i), (e.status = e.status || i.status), n.callback(e, i)) : n.callback(null, i);
        });
}
(E.serializeObject = y),
    (E.parseString = T),
    (E.types = {
        html: 'text/html',
        json: 'application/json',
        xml: 'text/xml',
        urlencoded: 'application/x-www-form-urlencoded',
        form: 'application/x-www-form-urlencoded',
        'form-data': 'application/x-www-form-urlencoded'
    }),
    (E.serialize = {
        'application/x-www-form-urlencoded': u.stringify,
        'application/json': l
    }),
    (E.parse = {
        'application/x-www-form-urlencoded': T,
        'application/json': JSON.parse
    }),
    _(A.prototype, h.prototype),
    (A.prototype._parseBody = function (e) {
        let t = E.parse[this.type];
        return this.req._parser ? this.req._parser(this, e) : (!t && S(this.type) && (t = E.parse['application/json']), t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
    }),
    (A.prototype.toError = function () {
        let e = this.req,
            t = e.method,
            n = e.url,
            i = Error(`cannot ${t} ${n} (${this.status})`);
        return (i.status = this.status), (i.method = t), (i.url = n), i;
    }),
    (E.Response = A),
    o(N.prototype),
    _(N.prototype, c.prototype),
    (N.prototype.type = function (e) {
        return this.set('Content-Type', E.types[e] || e), this;
    }),
    (N.prototype.accept = function (e) {
        return this.set('Accept', E.types[e] || e), this;
    }),
    (N.prototype.auth = function (e, t, n) {
        1 == arguments.length && (t = ''), 'object' == typeof t && null !== t && ((n = t), (t = '')), n || (n = { type: 'function' == typeof btoa ? 'basic' : 'auto' });
        let i = n.encoder
            ? n.encoder
            : (e) => {
                  if ('function' == typeof btoa) return btoa(e);
                  throw Error('Cannot use basic auth, btoa is not a function');
              };
        return this._auth(e, t, n, i);
    }),
    (N.prototype.query = function (e) {
        return 'string' != typeof e && (e = y(e)), e && this._query.push(e), this;
    }),
    (N.prototype.attach = function (e, t, n) {
        if (t) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, n || t.name);
        }
        return this;
    }),
    (N.prototype._getFormData = function () {
        return this._formData || (this._formData = new i.FormData()), this._formData;
    }),
    (N.prototype.callback = function (e, t) {
        if (this._shouldRetry(e, t)) return this._retry();
        let n = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit('error', e)), n(e, t);
    }),
    (N.prototype.crossDomainError = function () {
        let e = Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
        (e.crossDomain = !0), (e.status = this.status), (e.method = this.method), (e.url = this.url), this.callback(e);
    }),
    (N.prototype.agent = function () {
        return console.warn('This is not supported in browser version of superagent'), this;
    }),
    (N.prototype.ca = N.prototype.agent),
    (N.prototype.buffer = N.prototype.ca),
    (N.prototype.write = () => {
        throw Error('Streaming is not supported in browser version of superagent');
    }),
    (N.prototype.pipe = N.prototype.write),
    (N.prototype._isHost = function (e) {
        return e && 'object' == typeof e && !Array.isArray(e) && '[object Object]' !== Object.prototype.toString.call(e);
    }),
    (N.prototype.end = function (e) {
        this._endCalled && console.warn('Warning: .end() was called twice. This is not supported in superagent'), (this._endCalled = !0), (this._callback = e || g), this._finalizeQueryString(), this._end();
    }),
    (N.prototype._setUploadTimeout = function () {
        let e = this;
        this._uploadTimeout &&
            !this._uploadTimeoutTimer &&
            (this._uploadTimeoutTimer = setTimeout(() => {
                e._timeoutError('Upload timeout of ', e._uploadTimeout, 'ETIMEDOUT');
            }, this._uploadTimeout));
    }),
    (N.prototype._end = function () {
        if (this._aborted) return this.callback(Error('The request has been aborted even before .end() was called'));
        let e = this;
        this.xhr = E.getXHR();
        let t = this.xhr,
            n = this._formData || this._data;
        this._setTimeouts(),
            t.addEventListener('readystatechange', () => {
                let n;
                let i = t.readyState;
                if ((i >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === i)) {
                    try {
                        n = t.status;
                    } catch (e) {
                        n = 0;
                    }
                    if (!n) {
                        if (e.timedout || e._aborted) return;
                        return e.crossDomainError();
                    }
                    e.emit('end');
                }
            });
        let i = (t, n) => {
            n.total > 0 && ((n.percent = (n.loaded / n.total) * 100), 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), (n.direction = t), e.emit('progress', n);
        };
        if (this.hasListeners('progress'))
            try {
                t.addEventListener('progress', i.bind(null, 'download')), t.upload && t.upload.addEventListener('progress', i.bind(null, 'upload'));
            } catch (e) {}
        t.upload && this._setUploadTimeout();
        try {
            this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0);
        } catch (e) {
            return this.callback(e);
        }
        if ((this._withCredentials && (t.withCredentials = !0), !this._formData && 'GET' !== this.method && 'HEAD' !== this.method && 'string' != typeof n && !this._isHost(n))) {
            let e = this._header['content-type'],
                t = this._serializer || E.serialize[e ? e.split(';')[0] : ''];
            !t && S(e) && (t = E.serialize['application/json']), t && (n = t(n));
        }
        for (let e in this.header) null !== this.header[e] && p(this.header, e) && t.setRequestHeader(e, this.header[e]);
        this._responseType && (t.responseType = this._responseType), this.emit('request', this), t.send(void 0 === n ? null : n);
    }),
    (E.agent = () => new m());
for (var C = 0, R = ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE']; C < R.length; C++) {
    let e = R[C];
    m.prototype[e.toLowerCase()] = function (t, n) {
        let i = new E.Request(e, t);
        return this._setDefaults(i), n && i.end(n), i;
    };
}
function O(e, t, n) {
    let i = E('DELETE', e);
    return 'function' == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
}
(m.prototype.del = m.prototype.delete),
    (E.get = (e, t, n) => {
        let i = E('GET', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && i.query(t), n && i.end(n), i;
    }),
    (E.head = (e, t, n) => {
        let i = E('HEAD', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && i.query(t), n && i.end(n), i;
    }),
    (E.options = (e, t, n) => {
        let i = E('OPTIONS', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    }),
    (E.del = O),
    (E.delete = O),
    (E.patch = (e, t, n) => {
        let i = E('PATCH', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    }),
    (E.post = (e, t, n) => {
        let i = E('POST', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    }),
    (E.put = (e, t, n) => {
        let i = E('PUT', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    });
