var r = n(444675);
let i = n(620633),
    o = n(517024),
    a = o.isObject,
    s = o.hasOwn;
function l() {}
(e.exports = l),
    (l.prototype.clearTimeout = function () {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this;
    }),
    (l.prototype.parse = function (e) {
        return (this._parser = e), this;
    }),
    (l.prototype.responseType = function (e) {
        return (this._responseType = e), this;
    }),
    (l.prototype.serialize = function (e) {
        return (this._serializer = e), this;
    }),
    (l.prototype.timeout = function (e) {
        if (!e || 'object' != typeof e) return (this._timeout = e), (this._responseTimeout = 0), (this._uploadTimeout = 0), this;
        for (let t in e)
            if (s(e, t))
                switch (t) {
                    case 'deadline':
                        this._timeout = e.deadline;
                        break;
                    case 'response':
                        this._responseTimeout = e.response;
                        break;
                    case 'upload':
                        this._uploadTimeout = e.upload;
                        break;
                    default:
                        console.warn('Unknown timeout option', t);
                }
        return this;
    }),
    (l.prototype.retry = function (e, t) {
        return (0 == arguments.length || !0 === e) && (e = 1), e <= 0 && (e = 0), (this._maxRetries = e), (this._retries = 0), (this._retryCallback = t), this;
    });
let c = new Set(['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN']),
    u = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
(l.prototype._shouldRetry = function (e, t) {
    if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
    if (this._retryCallback)
        try {
            let n = this._retryCallback(e, t);
            if (!0 === n) return !0;
            if (!1 === n) return !1;
        } catch (e) {
            console.error(e);
        }
    return !!((t && t.status && u.has(t.status)) || (e && ((e.code && c.has(e.code)) || (e.timeout && 'ECONNABORTED' === e.code) || e.crossDomain))) || !1;
}),
    (l.prototype._retry = function () {
        return this.clearTimeout(), this.req && ((this.req = null), (this.req = this.request())), (this._aborted = !1), (this.timedout = !1), (this.timedoutError = null), this._end();
    }),
    (l.prototype.then = function (e, t) {
        if (!this._fullfilledPromise) {
            let e = this;
            this._endCalled && console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'),
                (this._fullfilledPromise = new Promise((t, n) => {
                    e.on('abort', () => {
                        if (this._maxRetries && this._maxRetries > this._retries) return;
                        if (this.timedout && this.timedoutError) return void n(this.timedoutError);
                        let e = Error('Aborted');
                        (e.code = 'ABORTED'), (e.status = this.status), (e.method = this.method), (e.url = this.url), n(e);
                    }),
                        e.end((e, r) => {
                            e ? n(e) : t(r);
                        });
                }));
        }
        return this._fullfilledPromise.then(e, t);
    }),
    (l.prototype.catch = function (e) {
        return this.then(void 0, e);
    }),
    (l.prototype.use = function (e) {
        return e(this), this;
    }),
    (l.prototype.ok = function (e) {
        if ('function' != typeof e) throw Error('Callback required');
        return (this._okCallback = e), this;
    }),
    (l.prototype._isResponseOK = function (e) {
        return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
    }),
    (l.prototype.get = function (e) {
        return this._header[e.toLowerCase()];
    }),
    (l.prototype.getHeader = l.prototype.get),
    (l.prototype.set = function (e, t) {
        if (a(e)) {
            for (let t in e) s(e, t) && this.set(t, e[t]);
            return this;
        }
        return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this;
    }),
    (l.prototype.unset = function (e) {
        return delete this._header[e.toLowerCase()], delete this.header[e], this;
    }),
    (l.prototype.field = function (e, t, n) {
        if (null == e) throw Error('.field(name, val) name can not be empty');
        if (this._data) throw Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        if (a(e)) {
            for (let t in e) s(e, t) && this.field(t, e[t]);
            return this;
        }
        if (Array.isArray(t)) {
            for (let n in t) s(t, n) && this.field(e, t[n]);
            return this;
        }
        if (null == t) throw Error('.field(name, val) val can not be empty');
        return 'boolean' == typeof t && (t = String(t)), n ? this._getFormData().append(e, t, n) : this._getFormData().append(e, t), this;
    }),
    (l.prototype.abort = function () {
        if (this._aborted) return this;
        if (((this._aborted = !0), this.xhr && this.xhr.abort(), this.req)) {
            if (i.gte(r.version, 'v13.0.0') && i.lt(r.version, 'v14.0.0')) throw Error('Superagent does not work in v13 properly with abort() due to Node.js core changes');
            this.req.abort();
        }
        return this.clearTimeout(), this.emit('abort'), this;
    }),
    (l.prototype._auth = function (e, t, n, r) {
        switch (n.type) {
            case 'basic':
                this.set('Authorization', `Basic ${r(`${e}:${t}`)}`);
                break;
            case 'auto':
                (this.username = e), (this.password = t);
                break;
            case 'bearer':
                this.set('Authorization', `Bearer ${e}`);
        }
        return this;
    }),
    (l.prototype.withCredentials = function (e) {
        return void 0 === e && (e = !0), (this._withCredentials = e), this;
    }),
    (l.prototype.redirects = function (e) {
        return (this._maxRedirects = e), this;
    }),
    (l.prototype.maxResponseSize = function (e) {
        if ('number' != typeof e) throw TypeError('Invalid argument');
        return (this._maxResponseSize = e), this;
    }),
    (l.prototype.toJSON = function () {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        };
    }),
    (l.prototype.send = function (e) {
        let t = a(e),
            n = this._header['content-type'];
        if (this._formData) throw Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        if (t && !this._data) Array.isArray(e) ? (this._data = []) : this._isHost(e) || (this._data = {});
        else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
        if (t && a(this._data))
            for (let t in e) {
                if ('bigint' == typeof e[t] && !e[t].toJSON) throw Error('Cannot serialize BigInt value to json');
                s(e, t) && (this._data[t] = e[t]);
            }
        else if ('bigint' == typeof e) throw Error('Cannot send value of type BigInt');
        else 'string' == typeof e ? (n || this.type('form'), (n = this._header['content-type']) && (n = n.toLowerCase().trim()), 'application/x-www-form-urlencoded' === n ? (this._data = this._data ? `${this._data}&${e}` : e) : (this._data = (this._data || '') + e)) : (this._data = e);
        return !t || this._isHost(e) || n || this.type('json'), this;
    }),
    (l.prototype.sortQuery = function (e) {
        return (this._sort = void 0 === e || e), this;
    }),
    (l.prototype._finalizeQueryString = function () {
        let e = this._query.join('&');
        if ((e && (this.url += (this.url.includes('?') ? '&' : '?') + e), (this._query.length = 0), this._sort)) {
            let e = this.url.indexOf('?');
            if (e >= 0) {
                let t = this.url.slice(e + 1).split('&');
                'function' == typeof this._sort ? t.sort(this._sort) : t.sort(), (this.url = this.url.slice(0, e) + '?' + t.join('&'));
            }
        }
    }),
    (l.prototype._appendQueryString = () => {
        console.warn('Unsupported');
    }),
    (l.prototype._timeoutError = function (e, t, n) {
        if (this._aborted) return;
        let r = Error(`${e + t}ms exceeded`);
        (r.timeout = t), (r.code = 'ECONNABORTED'), (r.errno = n), (this.timedout = !0), (this.timedoutError = r), this.abort(), this.callback(r);
    }),
    (l.prototype._setTimeouts = function () {
        let e = this;
        this._timeout &&
            !this._timer &&
            (this._timer = setTimeout(() => {
                e._timeoutError('Timeout of ', e._timeout, 'ETIME');
            }, this._timeout)),
            this._responseTimeout &&
                !this._responseTimeoutTimer &&
                (this._responseTimeoutTimer = setTimeout(() => {
                    e._timeoutError('Response timeout of ', e._responseTimeout, 'ETIMEDOUT');
                }, this._responseTimeout));
    });
