let r;
function i(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!n) {
        if (Array.isArray(e) || (n = o(e)) || (t && e && 'number' == typeof e.length)) {
            n && (e = n);
            var r = 0,
                i = function () {};
            return {
                s: i,
                n: function () {
                    return r >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[r++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: i
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var a,
        s = !0,
        l = !1;
    return {
        s: function () {
            n = n.call(e);
        },
        n: function () {
            var e = n.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (l = !0), (a = e);
        },
        f: function () {
            try {
                s || null == n.return || n.return();
            } finally {
                if (l) throw a;
            }
        }
    };
}
function o(e, t) {
    if (e) {
        if ('string' == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
    }
}
function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
'undefined' != typeof window ? (r = window) : 'undefined' == typeof self ? (console.warn('Using browser-only version of superagent in non-browser environment'), (r = void 0)) : (r = self);
let s = n(606419),
    l = n(164390),
    c = n(339768),
    u = n(615252),
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
        if (r.XMLHttpRequest) return new r.XMLHttpRequest();
        throw Error('Browser-only version of superagent could not find XHR');
    });
let b = ''.trim ? (e) => e.trim() : (e) => e.replace(/(^\s*|\s*$)/g, '');
function y(e) {
    if (!f(e)) return e;
    let t = [];
    for (let n in e) p(e, n) && v(t, n, e[n]);
    return t.join('&');
}
function v(e, t, n) {
    if (void 0 !== n) {
        if (null === n) return void e.push(encodeURI(t));
        if (Array.isArray(n)) {
            var r,
                o = i(n);
            try {
                for (o.s(); !(r = o.n()).done; ) {
                    let n = r.value;
                    v(e, t, n);
                }
            } catch (e) {
                o.e(e);
            } finally {
                o.f();
            }
        } else if (f(n)) for (let r in n) p(n, r) && v(e, `${t}[${r}]`, n[r]);
        else e.push(encodeURI(t) + '=' + encodeURIComponent(n));
    }
}
function O(e) {
    let t,
        n,
        r = {},
        i = e.split('&');
    for (let e = 0, o = i.length; e < o; ++e) -1 === (n = (t = i[e]).indexOf('=')) ? (r[decodeURIComponent(t)] = '') : (r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1)));
    return r;
}
function I(e) {
    let t,
        n,
        r,
        i,
        o = e.split(/\r?\n/),
        a = {};
    for (let e = 0, s = o.length; e < s; ++e) -1 !== (t = (n = o[e]).indexOf(':')) && ((r = n.slice(0, t).toLowerCase()), (i = b(n.slice(t + 1))), (a[r] = i));
    return a;
}
function S(e) {
    return /[/+]json($|[^-\w])/i.test(e);
}
function T(e) {
    (this.req = e), (this.xhr = this.req.xhr), (this.text = ('HEAD' !== this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType)) || void 0 === this.xhr.responseType ? this.xhr.responseText : null), (this.statusText = this.req.xhr.statusText);
    let t = this.xhr.status;
    1223 === t && (t = 204), this._setStatusProperties(t), (this.headers = I(this.xhr.getAllResponseHeaders())), (this.header = this.headers), (this.header['content-type'] = this.xhr.getResponseHeader('content-type')), this._setHeaderProperties(this.header), null === this.text && e._responseType ? (this.body = this.xhr.response) : (this.body = 'HEAD' === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response));
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
                r = null;
            try {
                r = new T(n);
            } catch (e) {
                return ((t = Error('Parser is unable to parse the response')).parse = !0), (t.original = e), n.xhr ? ((t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response), (t.status = n.xhr.status ? n.xhr.status : null), (t.statusCode = t.status)) : ((t.rawResponse = null), (t.status = null)), n.callback(t);
            }
            n.emit('response', r);
            try {
                n._isResponseOK(r) || (e = Error(r.statusText || r.text || 'Unsuccessful HTTP response'));
            } catch (t) {
                e = t;
            }
            e ? ((e.original = t), (e.response = r), (e.status = e.status || r.status), n.callback(e, r)) : n.callback(null, r);
        });
}
(E.serializeObject = y),
    (E.parseString = O),
    (E.types = {
        html: 'text/html',
        json: 'application/json',
        xml: 'text/xml',
        urlencoded: 'application/x-www-form-urlencoded',
        form: 'application/x-www-form-urlencoded',
        'form-data': 'application/x-www-form-urlencoded'
    }),
    (E.serialize = {
        'application/x-www-form-urlencoded': c.stringify,
        'application/json': l
    }),
    (E.parse = {
        'application/x-www-form-urlencoded': O,
        'application/json': JSON.parse
    }),
    _(T.prototype, h.prototype),
    (T.prototype._parseBody = function (e) {
        let t = E.parse[this.type];
        return this.req._parser ? this.req._parser(this, e) : (!t && S(this.type) && (t = E.parse['application/json']), t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
    }),
    (T.prototype.toError = function () {
        let e = this.req,
            t = e.method,
            n = e.url,
            r = Error(`cannot ${t} ${n} (${this.status})`);
        return (r.status = this.status), (r.method = t), (r.url = n), r;
    }),
    (E.Response = T),
    s(N.prototype),
    _(N.prototype, u.prototype),
    (N.prototype.type = function (e) {
        return this.set('Content-Type', E.types[e] || e), this;
    }),
    (N.prototype.accept = function (e) {
        return this.set('Accept', E.types[e] || e), this;
    }),
    (N.prototype.auth = function (e, t, n) {
        1 == arguments.length && (t = ''), 'object' == typeof t && null !== t && ((n = t), (t = '')), n || (n = { type: 'function' == typeof btoa ? 'basic' : 'auto' });
        let r = n.encoder
            ? n.encoder
            : (e) => {
                  if ('function' == typeof btoa) return btoa(e);
                  throw Error('Cannot use basic auth, btoa is not a function');
              };
        return this._auth(e, t, n, r);
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
        return this._formData || (this._formData = new r.FormData()), this._formData;
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
                let n,
                    r = t.readyState;
                if ((r >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === r)) {
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
        let r = (t, n) => {
            n.total > 0 && ((n.percent = (n.loaded / n.total) * 100), 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), (n.direction = t), e.emit('progress', n);
        };
        if (this.hasListeners('progress'))
            try {
                t.addEventListener('progress', r.bind(null, 'download')), t.upload && t.upload.addEventListener('progress', r.bind(null, 'upload'));
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
for (var A = 0, C = ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE']; A < C.length; A++) {
    let e = C[A];
    m.prototype[e.toLowerCase()] = function (t, n) {
        let r = new E.Request(e, t);
        return this._setDefaults(r), n && r.end(n), r;
    };
}
function R(e, t, n) {
    let r = E('DELETE', e);
    return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
}
(m.prototype.del = m.prototype.delete),
    (E.get = (e, t, n) => {
        let r = E('GET', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && r.query(t), n && r.end(n), r;
    }),
    (E.head = (e, t, n) => {
        let r = E('HEAD', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && r.query(t), n && r.end(n), r;
    }),
    (E.options = (e, t, n) => {
        let r = E('OPTIONS', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
    }),
    (E.del = R),
    (E.delete = R),
    (E.patch = (e, t, n) => {
        let r = E('PATCH', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
    }),
    (E.post = (e, t, n) => {
        let r = E('POST', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
    }),
    (E.put = (e, t, n) => {
        let r = E('PUT', e);
        return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
    });
