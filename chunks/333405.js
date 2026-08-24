"use strict";
let n;
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
"u" > typeof window
    ? (n = window)
    : "u" < typeof self
      ? (console.warn("Using browser-only version of superagent in non-browser environment"), (n = void 0))
      : (n = self);
let i = r(882630),
    a = r(232859),
    s = r(591560),
    l = r(191203),
    u = r(17101),
    c = u.isObject,
    f = u.mixin,
    p = u.hasOwn,
    d = r(531679),
    h = r(427879);
function m() {}
e.exports = function (e, r) {
    return "function" == typeof r
        ? new t.Request("GET", e).end(r)
        : 1 == arguments.length
          ? new t.Request("GET", e)
          : new t.Request(e, r);
};
let v = (t = e.exports);
(t.Request = S),
    (v.getXHR = () => {
        if (n.XMLHttpRequest) return new n.XMLHttpRequest();
        throw Error("Browser-only version of superagent could not find XHR");
    });
let y = "".trim ? (e) => e.trim() : (e) => e.replace(/(^\s*|\s*$)/g, "");
function g(e) {
    if (!c(e)) return e;
    let t = [];
    for (let r in e)
        p(e, r) &&
            (function e(t, r, n) {
                if (void 0 !== n) {
                    if (null === n) return void t.push(encodeURI(r));
                    if (Array.isArray(n)) {
                        var i,
                            a = (function (e) {
                                var t = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (!t) {
                                    if (
                                        Array.isArray(e) ||
                                        (t = (function (e) {
                                            if (e) {
                                                if ("string" == typeof e) return o(e, void 0);
                                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                                if (
                                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                                    "Map" === t || "Set" === t)
                                                )
                                                    return Array.from(e);
                                                if (
                                                    "Arguments" === t ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                )
                                                    return o(e, void 0);
                                            }
                                        })(e))
                                    ) {
                                        t && (e = t);
                                        var r = 0,
                                            n = function () {};
                                        return {
                                            s: n,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: n,
                                        };
                                    }
                                    throw TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                    );
                                }
                                var i,
                                    a = !0,
                                    s = !1;
                                return {
                                    s: function () {
                                        t = t.call(e);
                                    },
                                    n: function () {
                                        var e = t.next();
                                        return (a = e.done), e;
                                    },
                                    e: function (e) {
                                        (s = !0), (i = e);
                                    },
                                    f: function () {
                                        try {
                                            a || null == t.return || t.return();
                                        } finally {
                                            if (s) throw i;
                                        }
                                    },
                                };
                            })(n);
                        try {
                            for (a.s(); !(i = a.n()).done; ) {
                                let n = i.value;
                                e(t, r, n);
                            }
                        } catch (e) {
                            a.e(e);
                        } finally {
                            a.f();
                        }
                    } else if (c(n)) for (let o in n) p(n, o) && e(t, `${r}[${o}]`, n[o]);
                    else t.push(encodeURI(r) + "=" + encodeURIComponent(n));
                }
            })(t, r, e[r]);
    return t.join("&");
}
function b(e) {
    let t,
        r,
        n = {},
        o = e.split("&");
    for (let e = 0, i = o.length; e < i; ++e)
        -1 === (r = (t = o[e]).indexOf("="))
            ? (n[decodeURIComponent(t)] = "")
            : (n[decodeURIComponent(t.slice(0, r))] = decodeURIComponent(t.slice(r + 1)));
    return n;
}
function w(e) {
    return /[/+]json($|[^-\w])/i.test(e);
}
function _(e) {
    (this.req = e),
        (this.xhr = this.req.xhr),
        (this.text =
            ("HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType)) ||
            void 0 === this.xhr.responseType
                ? this.xhr.responseText
                : null),
        (this.statusText = this.req.xhr.statusText);
    let t = this.xhr.status;
    1223 === t && (t = 204),
        this._setStatusProperties(t),
        (this.headers = (function (e) {
            let t,
                r,
                n,
                o,
                i = e.split(/\r?\n/),
                a = {};
            for (let e = 0, s = i.length; e < s; ++e)
                -1 !== (t = (r = i[e]).indexOf(":")) &&
                    ((n = r.slice(0, t).toLowerCase()), (o = y(r.slice(t + 1))), (a[n] = o));
            return a;
        })(this.xhr.getAllResponseHeaders())),
        (this.header = this.headers),
        (this.header["content-type"] = this.xhr.getResponseHeader("content-type")),
        this._setHeaderProperties(this.header),
        null === this.text && e._responseType
            ? (this.body = this.xhr.response)
            : (this.body =
                  "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response));
}
function S(e, t) {
    let r = this;
    (this._query = this._query || []),
        (this.method = e),
        (this.url = t),
        (this.header = {}),
        (this._header = {}),
        this.on("end", () => {
            let e,
                t = null,
                n = null;
            try {
                n = new _(r);
            } catch (e) {
                return (
                    ((t = Error("Parser is unable to parse the response")).parse = !0),
                    (t.original = e),
                    r.xhr
                        ? ((t.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response),
                          (t.status = r.xhr.status ? r.xhr.status : null),
                          (t.statusCode = t.status))
                        : ((t.rawResponse = null), (t.status = null)),
                    r.callback(t)
                );
            }
            r.emit("response", n);
            try {
                r._isResponseOK(n) || (e = Error(n.statusText || n.text || "Unsuccessful HTTP response"));
            } catch (t) {
                e = t;
            }
            e
                ? ((e.original = t), (e.response = n), (e.status = e.status || n.status), r.callback(e, n))
                : r.callback(null, n);
        });
}
(v.serializeObject = g),
    (v.parseString = b),
    (v.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded",
    }),
    (v.serialize = { "application/x-www-form-urlencoded": s.stringify, "application/json": a }),
    (v.parse = { "application/x-www-form-urlencoded": b, "application/json": JSON.parse }),
    f(_.prototype, d.prototype),
    (_.prototype._parseBody = function (e) {
        let t = v.parse[this.type];
        return this.req._parser
            ? this.req._parser(this, e)
            : (!t && w(this.type) && (t = v.parse["application/json"]),
              t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
    }),
    (_.prototype.toError = function () {
        let e = this.req,
            t = e.method,
            r = e.url,
            n = Error(`cannot ${t} ${r} (${this.status})`);
        return (n.status = this.status), (n.method = t), (n.url = r), n;
    }),
    (v.Response = _),
    i(S.prototype),
    f(S.prototype, l.prototype),
    (S.prototype.type = function (e) {
        return this.set("Content-Type", v.types[e] || e), this;
    }),
    (S.prototype.accept = function (e) {
        return this.set("Accept", v.types[e] || e), this;
    }),
    (S.prototype.auth = function (e, t, r) {
        1 == arguments.length && (t = ""),
            "object" == typeof t && null !== t && ((r = t), (t = "")),
            r || (r = { type: "function" == typeof btoa ? "basic" : "auto" });
        let n = r.encoder
            ? r.encoder
            : (e) => {
                  if ("function" == typeof btoa) return btoa(e);
                  throw Error("Cannot use basic auth, btoa is not a function");
              };
        return this._auth(e, t, r, n);
    }),
    (S.prototype.query = function (e) {
        return "string" != typeof e && (e = g(e)), e && this._query.push(e), this;
    }),
    (S.prototype.attach = function (e, t, r) {
        if (t) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, r || t.name);
        }
        return this;
    }),
    (S.prototype._getFormData = function () {
        return this._formData || (this._formData = new n.FormData()), this._formData;
    }),
    (S.prototype.callback = function (e, t) {
        if (this._shouldRetry(e, t)) return this._retry();
        let r = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), r(e, t);
    }),
    (S.prototype.crossDomainError = function () {
        let e = Error(
            "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.",
        );
        (e.crossDomain = !0), (e.status = this.status), (e.method = this.method), (e.url = this.url), this.callback(e);
    }),
    (S.prototype.agent = function () {
        return console.warn("This is not supported in browser version of superagent"), this;
    }),
    (S.prototype.ca = S.prototype.agent),
    (S.prototype.buffer = S.prototype.ca),
    (S.prototype.write = () => {
        throw Error("Streaming is not supported in browser version of superagent");
    }),
    (S.prototype.pipe = S.prototype.write),
    (S.prototype._isHost = function (e) {
        return (
            e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
        );
    }),
    (S.prototype.end = function (e) {
        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"),
            (this._endCalled = !0),
            (this._callback = e || m),
            this._finalizeQueryString(),
            this._end();
    }),
    (S.prototype._setUploadTimeout = function () {
        let e = this;
        this._uploadTimeout &&
            !this._uploadTimeoutTimer &&
            (this._uploadTimeoutTimer = setTimeout(() => {
                e._timeoutError("Upload timeout of ", e._uploadTimeout, "ETIMEDOUT");
            }, this._uploadTimeout));
    }),
    (S.prototype._end = function () {
        if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
        let e = this;
        this.xhr = v.getXHR();
        let t = this.xhr,
            r = this._formData || this._data;
        this._setTimeouts(),
            t.addEventListener("readystatechange", () => {
                let r,
                    n = t.readyState;
                if ((n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === n)) {
                    try {
                        r = t.status;
                    } catch (e) {
                        r = 0;
                    }
                    if (!r) {
                        if (e.timedout || e._aborted) return;
                        return e.crossDomainError();
                    }
                    e.emit("end");
                }
            });
        let n = (t, r) => {
            r.total > 0 &&
                ((r.percent = (r.loaded / r.total) * 100), 100 === r.percent && clearTimeout(e._uploadTimeoutTimer)),
                (r.direction = t),
                e.emit("progress", r);
        };
        if (this.hasListeners("progress"))
            try {
                t.addEventListener("progress", n.bind(null, "download")),
                    t.upload && t.upload.addEventListener("progress", n.bind(null, "upload"));
            } catch (e) {}
        t.upload && this._setUploadTimeout();
        try {
            this.username && this.password
                ? t.open(this.method, this.url, !0, this.username, this.password)
                : t.open(this.method, this.url, !0);
        } catch (e) {
            return this.callback(e);
        }
        if (
            (this._withCredentials && (t.withCredentials = !0),
            !this._formData &&
                "GET" !== this.method &&
                "HEAD" !== this.method &&
                "string" != typeof r &&
                !this._isHost(r))
        ) {
            let e = this._header["content-type"],
                t = this._serializer || v.serialize[e ? e.split(";")[0] : ""];
            !t && w(e) && (t = v.serialize["application/json"]), t && (r = t(r));
        }
        for (let e in this.header)
            null !== this.header[e] && p(this.header, e) && t.setRequestHeader(e, this.header[e]);
        this._responseType && (t.responseType = this._responseType),
            this.emit("request", this),
            t.send(void 0 === r ? null : r);
    }),
    (v.agent = () => new h());
for (var x = 0, E = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]; x < E.length; x++) {
    let e = E[x];
    h.prototype[e.toLowerCase()] = function (t, r) {
        let n = new v.Request(e, t);
        return this._setDefaults(n), r && n.end(r), n;
    };
}
function k(e, t, r) {
    let n = v("DELETE", e);
    return "function" == typeof t && ((r = t), (t = null)), t && n.send(t), r && n.end(r), n;
}
(h.prototype.del = h.prototype.delete),
    (v.get = (e, t, r) => {
        let n = v("GET", e);
        return "function" == typeof t && ((r = t), (t = null)), t && n.query(t), r && n.end(r), n;
    }),
    (v.head = (e, t, r) => {
        let n = v("HEAD", e);
        return "function" == typeof t && ((r = t), (t = null)), t && n.query(t), r && n.end(r), n;
    }),
    (v.options = (e, t, r) => {
        let n = v("OPTIONS", e);
        return "function" == typeof t && ((r = t), (t = null)), t && n.send(t), r && n.end(r), n;
    }),
    (v.del = k),
    (v.delete = k),
    (v.patch = (e, t, r) => {
        let n = v("PATCH", e);
        return "function" == typeof t && ((r = t), (t = null)), t && n.send(t), r && n.end(r), n;
    }),
    (v.post = (e, t, r) => {
        let n = v("POST", e);
        return "function" == typeof t && ((r = t), (t = null)), t && n.send(t), r && n.end(r), n;
    }),
    (v.put = (e, t, r) => {
        let n = v("PUT", e);
        return "function" == typeof t && ((r = t), (t = null)), t && n.send(t), r && n.end(r), n;
    });
