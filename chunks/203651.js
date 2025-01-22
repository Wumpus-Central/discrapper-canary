let i;
function a(e, n) {
    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!r) {
        if (Array.isArray(e) || (r = o(e)) || (n && e && 'number' == typeof e.length)) {
            r && (e = r);
            var i = 0,
                a = function () {};
            return {
                s: a,
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
                f: a
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s,
        l = !0,
        u = !1;
    return {
        s: function () {
            r = r.call(e);
        },
        n: function () {
            var e = r.next();
            return (l = e.done), e;
        },
        e: function (e) {
            (u = !0), (s = e);
        },
        f: function () {
            try {
                !l && null != r.return && r.return();
            } finally {
                if (u) throw s;
            }
        }
    };
}
function o(e, n) {
    if (e) {
        if ('string' == typeof e) return s(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, n);
    }
}
function s(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
'undefined' != typeof window ? (i = window) : 'undefined' == typeof self ? (console.warn('Using browser-only version of superagent in non-browser environment'), (i = void 0)) : (i = self);
let l = r(606419),
    u = r(164390),
    c = r(339768),
    d = r(615252),
    f = r(517024),
    p = f.isObject,
    h = f.mixin,
    _ = f.hasOwn,
    m = r(509337),
    g = r(675246);
function E() {}
e.exports = function (e, r) {
    return 'function' == typeof r ? new n.Request('GET', e).end(r) : 1 == arguments.length ? new n.Request('GET', e) : new n.Request(e, r);
};
let v = (n = e.exports);
(n.Request = N),
    (v.getXHR = () => {
        if (i.XMLHttpRequest) return new i.XMLHttpRequest();
        throw Error('Browser-only version of superagent could not find XHR');
    });
let y = ''.trim ? (e) => e.trim() : (e) => e.replace(/(^\s*|\s*$)/g, '');
function b(e) {
    if (!p(e)) return e;
    let n = [];
    for (let r in e) _(e, r) && I(n, r, e[r]);
    return n.join('&');
}
function I(e, n, r) {
    if (void 0 !== r) {
        if (null === r) {
            e.push(encodeURI(n));
            return;
        }
        if (Array.isArray(r)) {
            var i,
                o = a(r);
            try {
                for (o.s(); !(i = o.n()).done; ) {
                    let r = i.value;
                    I(e, n, r);
                }
            } catch (e) {
                o.e(e);
            } finally {
                o.f();
            }
        } else if (p(r)) for (let i in r) _(r, i) && I(e, `${n}[${i}]`, r[i]);
        else e.push(encodeURI(n) + '=' + encodeURIComponent(r));
    }
}
function T(e) {
    let n, r;
    let i = {},
        a = e.split('&');
    for (let e = 0, o = a.length; e < o; ++e) -1 === (r = (n = a[e]).indexOf('=')) ? (i[decodeURIComponent(n)] = '') : (i[decodeURIComponent(n.slice(0, r))] = decodeURIComponent(n.slice(r + 1)));
    return i;
}
function S(e) {
    let n, r, i, a;
    let o = e.split(/\r?\n/),
        s = {};
    for (let e = 0, l = o.length; e < l; ++e) {
        if (-1 !== (n = (r = o[e]).indexOf(':'))) (i = r.slice(0, n).toLowerCase()), (a = y(r.slice(n + 1))), (s[i] = a);
    }
    return s;
}
function A(e) {
    return /[/+]json($|[^-\w])/i.test(e);
}
function C(e) {
    (this.req = e), (this.xhr = this.req.xhr), (this.text = ('HEAD' !== this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType)) || void 0 === this.xhr.responseType ? this.xhr.responseText : null), (this.statusText = this.req.xhr.statusText);
    let n = this.xhr.status;
    1223 === n && (n = 204), this._setStatusProperties(n), (this.headers = S(this.xhr.getAllResponseHeaders())), (this.header = this.headers), (this.header['content-type'] = this.xhr.getResponseHeader('content-type')), this._setHeaderProperties(this.header), null === this.text && e._responseType ? (this.body = this.xhr.response) : (this.body = 'HEAD' === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response));
}
function N(e, n) {
    let r = this;
    (this._query = this._query || []),
        (this.method = e),
        (this.url = n),
        (this.header = {}),
        (this._header = {}),
        this.on('end', () => {
            let e,
                n = null,
                i = null;
            try {
                i = new C(r);
            } catch (e) {
                return ((n = Error('Parser is unable to parse the response')).parse = !0), (n.original = e), r.xhr ? ((n.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response), (n.status = r.xhr.status ? r.xhr.status : null), (n.statusCode = n.status)) : ((n.rawResponse = null), (n.status = null)), r.callback(n);
            }
            r.emit('response', i);
            try {
                !r._isResponseOK(i) && (e = Error(i.statusText || i.text || 'Unsuccessful HTTP response'));
            } catch (n) {
                e = n;
            }
            e ? ((e.original = n), (e.response = i), (e.status = e.status || i.status), r.callback(e, i)) : r.callback(null, i);
        });
}
(v.serializeObject = b),
    (v.parseString = T),
    (v.types = {
        html: 'text/html',
        json: 'application/json',
        xml: 'text/xml',
        urlencoded: 'application/x-www-form-urlencoded',
        form: 'application/x-www-form-urlencoded',
        'form-data': 'application/x-www-form-urlencoded'
    }),
    (v.serialize = {
        'application/x-www-form-urlencoded': c.stringify,
        'application/json': u
    }),
    (v.parse = {
        'application/x-www-form-urlencoded': T,
        'application/json': JSON.parse
    }),
    h(C.prototype, m.prototype),
    (C.prototype._parseBody = function (e) {
        let n = v.parse[this.type];
        return this.req._parser ? this.req._parser(this, e) : (!n && A(this.type) && (n = v.parse['application/json']), n && e && (e.length > 0 || e instanceof Object) ? n(e) : null);
    }),
    (C.prototype.toError = function () {
        let e = this.req,
            n = e.method,
            r = e.url,
            i = Error(`cannot ${n} ${r} (${this.status})`);
        return (i.status = this.status), (i.method = n), (i.url = r), i;
    }),
    (v.Response = C),
    l(N.prototype),
    h(N.prototype, d.prototype),
    (N.prototype.type = function (e) {
        return this.set('Content-Type', v.types[e] || e), this;
    }),
    (N.prototype.accept = function (e) {
        return this.set('Accept', v.types[e] || e), this;
    }),
    (N.prototype.auth = function (e, n, r) {
        1 == arguments.length && (n = ''), 'object' == typeof n && null !== n && ((r = n), (n = '')), !r && (r = { type: 'function' == typeof btoa ? 'basic' : 'auto' });
        let i = r.encoder
            ? r.encoder
            : (e) => {
                  if ('function' == typeof btoa) return btoa(e);
                  throw Error('Cannot use basic auth, btoa is not a function');
              };
        return this._auth(e, n, r, i);
    }),
    (N.prototype.query = function (e) {
        return 'string' != typeof e && (e = b(e)), e && this._query.push(e), this;
    }),
    (N.prototype.attach = function (e, n, r) {
        if (n) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, n, r || n.name);
        }
        return this;
    }),
    (N.prototype._getFormData = function () {
        return !this._formData && (this._formData = new i.FormData()), this._formData;
    }),
    (N.prototype.callback = function (e, n) {
        if (this._shouldRetry(e, n)) return this._retry();
        let r = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit('error', e)), r(e, n);
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
        this._endCalled && console.warn('Warning: .end() was called twice. This is not supported in superagent'), (this._endCalled = !0), (this._callback = e || E), this._finalizeQueryString(), this._end();
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
        this.xhr = v.getXHR();
        let n = this.xhr,
            r = this._formData || this._data;
        this._setTimeouts(),
            n.addEventListener('readystatechange', () => {
                let r;
                let i = n.readyState;
                if ((i >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === i)) {
                    try {
                        r = n.status;
                    } catch (e) {
                        r = 0;
                    }
                    if (!r) {
                        if (e.timedout || e._aborted) return;
                        return e.crossDomainError();
                    }
                    e.emit('end');
                }
            });
        let i = (n, r) => {
            r.total > 0 && ((r.percent = (r.loaded / r.total) * 100), 100 === r.percent && clearTimeout(e._uploadTimeoutTimer)), (r.direction = n), e.emit('progress', r);
        };
        if (this.hasListeners('progress'))
            try {
                n.addEventListener('progress', i.bind(null, 'download')), n.upload && n.upload.addEventListener('progress', i.bind(null, 'upload'));
            } catch (e) {}
        n.upload && this._setUploadTimeout();
        try {
            this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0);
        } catch (e) {
            return this.callback(e);
        }
        if ((this._withCredentials && (n.withCredentials = !0), !this._formData && 'GET' !== this.method && 'HEAD' !== this.method && 'string' != typeof r && !this._isHost(r))) {
            let e = this._header['content-type'],
                n = this._serializer || v.serialize[e ? e.split(';')[0] : ''];
            !n && A(e) && (n = v.serialize['application/json']), n && (r = n(r));
        }
        for (let e in this.header) null !== this.header[e] && _(this.header, e) && n.setRequestHeader(e, this.header[e]);
        this._responseType && (n.responseType = this._responseType), this.emit('request', this), n.send(void 0 === r ? null : r);
    }),
    (v.agent = () => new g());
for (var R = 0, O = ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE']; R < O.length; R++) {
    let e = O[R];
    g.prototype[e.toLowerCase()] = function (n, r) {
        let i = new v.Request(e, n);
        return this._setDefaults(i), r && i.end(r), i;
    };
}
function D(e, n, r) {
    let i = v('DELETE', e);
    return 'function' == typeof n && ((r = n), (n = null)), n && i.send(n), r && i.end(r), i;
}
(g.prototype.del = g.prototype.delete),
    (v.get = (e, n, r) => {
        let i = v('GET', e);
        return 'function' == typeof n && ((r = n), (n = null)), n && i.query(n), r && i.end(r), i;
    }),
    (v.head = (e, n, r) => {
        let i = v('HEAD', e);
        return 'function' == typeof n && ((r = n), (n = null)), n && i.query(n), r && i.end(r), i;
    }),
    (v.options = (e, n, r) => {
        let i = v('OPTIONS', e);
        return 'function' == typeof n && ((r = n), (n = null)), n && i.send(n), r && i.end(r), i;
    }),
    (v.del = D),
    (v.delete = D),
    (v.patch = (e, n, r) => {
        let i = v('PATCH', e);
        return 'function' == typeof n && ((r = n), (n = null)), n && i.send(n), r && i.end(r), i;
    }),
    (v.post = (e, n, r) => {
        let i = v('POST', e);
        return 'function' == typeof n && ((r = n), (n = null)), n && i.send(n), r && i.end(r), i;
    }),
    (v.put = (e, n, r) => {
        let i = v('PUT', e);
        return 'function' == typeof n && ((r = n), (n = null)), n && i.send(n), r && i.end(r), i;
    });
