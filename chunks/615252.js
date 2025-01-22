var i = r(444675);
let a = r(620633),
    o = r(517024),
    s = o.isObject,
    l = o.hasOwn;
function u() {}
(e.exports = u),
    (u.prototype.clearTimeout = function () {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this;
    }),
    (u.prototype.parse = function (e) {
        return (this._parser = e), this;
    }),
    (u.prototype.responseType = function (e) {
        return (this._responseType = e), this;
    }),
    (u.prototype.serialize = function (e) {
        return (this._serializer = e), this;
    }),
    (u.prototype.timeout = function (e) {
        if (!e || 'object' != typeof e) return (this._timeout = e), (this._responseTimeout = 0), (this._uploadTimeout = 0), this;
        for (let n in e)
            if (l(e, n))
                switch (n) {
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
                        console.warn('Unknown timeout option', n);
                }
        return this;
    }),
    (u.prototype.retry = function (e, n) {
        return (0 == arguments.length || !0 === e) && (e = 1), e <= 0 && (e = 0), (this._maxRetries = e), (this._retries = 0), (this._retryCallback = n), this;
    });
let c = new Set(['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN']),
    d = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
(u.prototype._shouldRetry = function (e, n) {
    if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
    if (this._retryCallback)
        try {
            let r = this._retryCallback(e, n);
            if (!0 === r) return !0;
            if (!1 === r) return !1;
        } catch (e) {
            console.error(e);
        }
    return !!((n && n.status && d.has(n.status)) || (e && ((e.code && c.has(e.code)) || (e.timeout && 'ECONNABORTED' === e.code) || e.crossDomain))) || !1;
}),
    (u.prototype._retry = function () {
        return this.clearTimeout(), this.req && ((this.req = null), (this.req = this.request())), (this._aborted = !1), (this.timedout = !1), (this.timedoutError = null), this._end();
    }),
    (u.prototype.then = function (e, n) {
        if (!this._fullfilledPromise) {
            let e = this;
            this._endCalled && console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'),
                (this._fullfilledPromise = new Promise((n, r) => {
                    e.on('abort', () => {
                        if (this._maxRetries && this._maxRetries > this._retries) return;
                        if (this.timedout && this.timedoutError) {
                            r(this.timedoutError);
                            return;
                        }
                        let e = Error('Aborted');
                        (e.code = 'ABORTED'), (e.status = this.status), (e.method = this.method), (e.url = this.url), r(e);
                    }),
                        e.end((e, i) => {
                            e ? r(e) : n(i);
                        });
                }));
        }
        return this._fullfilledPromise.then(e, n);
    }),
    (u.prototype.catch = function (e) {
        return this.then(void 0, e);
    }),
    (u.prototype.use = function (e) {
        return e(this), this;
    }),
    (u.prototype.ok = function (e) {
        if ('function' != typeof e) throw Error('Callback required');
        return (this._okCallback = e), this;
    }),
    (u.prototype._isResponseOK = function (e) {
        return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
    }),
    (u.prototype.get = function (e) {
        return this._header[e.toLowerCase()];
    }),
    (u.prototype.getHeader = u.prototype.get),
    (u.prototype.set = function (e, n) {
        if (s(e)) {
            for (let n in e) l(e, n) && this.set(n, e[n]);
            return this;
        }
        return (this._header[e.toLowerCase()] = n), (this.header[e] = n), this;
    }),
    (u.prototype.unset = function (e) {
        return delete this._header[e.toLowerCase()], delete this.header[e], this;
    }),
    (u.prototype.field = function (e, n, r) {
        if (null == e) throw Error('.field(name, val) name can not be empty');
        if (this._data) throw Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        if (s(e)) {
            for (let n in e) l(e, n) && this.field(n, e[n]);
            return this;
        }
        if (Array.isArray(n)) {
            for (let r in n) l(n, r) && this.field(e, n[r]);
            return this;
        }
        if (null == n) throw Error('.field(name, val) val can not be empty');
        return 'boolean' == typeof n && (n = String(n)), r ? this._getFormData().append(e, n, r) : this._getFormData().append(e, n), this;
    }),
    (u.prototype.abort = function () {
        if (this._aborted) return this;
        if (((this._aborted = !0), this.xhr && this.xhr.abort(), this.req)) {
            if (a.gte(i.version, 'v13.0.0') && a.lt(i.version, 'v14.0.0')) throw Error('Superagent does not work in v13 properly with abort() due to Node.js core changes');
            this.req.abort();
        }
        return this.clearTimeout(), this.emit('abort'), this;
    }),
    (u.prototype._auth = function (e, n, r, i) {
        switch (r.type) {
            case 'basic':
                this.set('Authorization', `Basic ${i(`${e}:${n}`)}`);
                break;
            case 'auto':
                (this.username = e), (this.password = n);
                break;
            case 'bearer':
                this.set('Authorization', `Bearer ${e}`);
        }
        return this;
    }),
    (u.prototype.withCredentials = function (e) {
        return void 0 === e && (e = !0), (this._withCredentials = e), this;
    }),
    (u.prototype.redirects = function (e) {
        return (this._maxRedirects = e), this;
    }),
    (u.prototype.maxResponseSize = function (e) {
        if ('number' != typeof e) throw TypeError('Invalid argument');
        return (this._maxResponseSize = e), this;
    }),
    (u.prototype.toJSON = function () {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        };
    }),
    (u.prototype.send = function (e) {
        let n = s(e),
            r = this._header['content-type'];
        if (this._formData) throw Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        if (n && !this._data) Array.isArray(e) ? (this._data = []) : !this._isHost(e) && (this._data = {});
        else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
        if (n && s(this._data))
            for (let n in e) {
                if ('bigint' == typeof e[n] && !e[n].toJSON) throw Error('Cannot serialize BigInt value to json');
                l(e, n) && (this._data[n] = e[n]);
            }
        else if ('bigint' == typeof e) throw Error('Cannot send value of type BigInt');
        else 'string' == typeof e ? (!r && this.type('form'), (r = this._header['content-type']) && (r = r.toLowerCase().trim()), 'application/x-www-form-urlencoded' === r ? (this._data = this._data ? `${this._data}&${e}` : e) : (this._data = (this._data || '') + e)) : (this._data = e);
        return !n || this._isHost(e) ? this : (!r && this.type('json'), this);
    }),
    (u.prototype.sortQuery = function (e) {
        return (this._sort = void 0 === e || e), this;
    }),
    (u.prototype._finalizeQueryString = function () {
        let e = this._query.join('&');
        if ((e && (this.url += (this.url.includes('?') ? '&' : '?') + e), (this._query.length = 0), this._sort)) {
            let e = this.url.indexOf('?');
            if (e >= 0) {
                let n = this.url.slice(e + 1).split('&');
                'function' == typeof this._sort ? n.sort(this._sort) : n.sort(), (this.url = this.url.slice(0, e) + '?' + n.join('&'));
            }
        }
    }),
    (u.prototype._appendQueryString = () => {
        console.warn('Unsupported');
    }),
    (u.prototype._timeoutError = function (e, n, r) {
        if (this._aborted) return;
        let i = Error(`${e + n}ms exceeded`);
        (i.timeout = n), (i.code = 'ECONNABORTED'), (i.errno = r), (this.timedout = !0), (this.timedoutError = i), this.abort(), this.callback(i);
    }),
    (u.prototype._setTimeouts = function () {
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
