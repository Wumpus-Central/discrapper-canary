"use strict";
let i;
function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
"u" > typeof window
    ? (i = window)
    : "u" < typeof self
      ? (console.warn("Using browser-only version of superagent in non-browser environment"), (i = void 0))
      : (i = self);
let s = n(882630),
    a = n(232859),
    o = n(591560),
    l = n(191203),
    u = n(17101),
    c = u.isObject,
    d = u.mixin,
    _ = u.hasOwn,
    h = n(531679),
    f = n(427879);
function p() {}
e.exports = function (e, n) {
    return "function" == typeof n
        ? new t.Request("GET", e).end(n)
        : 1 == arguments.length
          ? new t.Request("GET", e)
          : new t.Request(e, n);
};
let E = (t = e.exports);
(t.Request = S),
    (E.getXHR = () => {
        if (i.XMLHttpRequest) return new i.XMLHttpRequest();
        throw Error("Browser-only version of superagent could not find XHR");
    });
let m = "".trim ? (e) => e.trim() : (e) => e.replace(/(^\s*|\s*$)/g, "");
function g(e) {
    if (!c(e)) return e;
    let t = [];
    for (let n in e)
        _(e, n) &&
            (function e(t, n, i) {
                if (void 0 !== i) {
                    if (null === i) return void t.push(encodeURI(n));
                    if (Array.isArray(i)) {
                        var s,
                            a = (function (e) {
                                var t = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (!t) {
                                    if (
                                        Array.isArray(e) ||
                                        (t = (function (e) {
                                            if (e) {
                                                if ("string" == typeof e) return r(e, void 0);
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
                                                    return r(e, void 0);
                                            }
                                        })(e))
                                    ) {
                                        t && (e = t);
                                        var n = 0,
                                            i = function () {};
                                        return {
                                            s: i,
                                            n: function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: i,
                                        };
                                    }
                                    throw TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                    );
                                }
                                var s,
                                    a = !0,
                                    o = !1;
                                return {
                                    s: function () {
                                        t = t.call(e);
                                    },
                                    n: function () {
                                        var e = t.next();
                                        return (a = e.done), e;
                                    },
                                    e: function (e) {
                                        (o = !0), (s = e);
                                    },
                                    f: function () {
                                        try {
                                            a || null == t.return || t.return();
                                        } finally {
                                            if (o) throw s;
                                        }
                                    },
                                };
                            })(i);
                        try {
                            for (a.s(); !(s = a.n()).done; ) {
                                let i = s.value;
                                e(t, n, i);
                            }
                        } catch (e) {
                            a.e(e);
                        } finally {
                            a.f();
                        }
                    } else if (c(i)) for (let r in i) _(i, r) && e(t, `${n}[${r}]`, i[r]);
                    else t.push(encodeURI(n) + "=" + encodeURIComponent(i));
                }
            })(t, n, e[n]);
    return t.join("&");
}
function A(e) {
    let t,
        n,
        i = {},
        r = e.split("&");
    for (let e = 0, s = r.length; e < s; ++e)
        -1 === (n = (t = r[e]).indexOf("="))
            ? (i[decodeURIComponent(t)] = "")
            : (i[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1)));
    return i;
}
function I(e) {
    return /[/+]json($|[^-\w])/i.test(e);
}
function T(e) {
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
                n,
                i,
                r,
                s = e.split(/\r?\n/),
                a = {};
            for (let e = 0, o = s.length; e < o; ++e)
                -1 !== (t = (n = s[e]).indexOf(":")) &&
                    ((i = n.slice(0, t).toLowerCase()), (r = m(n.slice(t + 1))), (a[i] = r));
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
    let n = this;
    (this._query = this._query || []),
        (this.method = e),
        (this.url = t),
        (this.header = {}),
        (this._header = {}),
        this.on("end", () => {
            let e,
                t = null,
                i = null;
            try {
                i = new T(n);
            } catch (e) {
                return (
                    ((t = Error("Parser is unable to parse the response")).parse = !0),
                    (t.original = e),
                    n.xhr
                        ? ((t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response),
                          (t.status = n.xhr.status ? n.xhr.status : null),
                          (t.statusCode = t.status))
                        : ((t.rawResponse = null), (t.status = null)),
                    n.callback(t)
                );
            }
            n.emit("response", i);
            try {
                n._isResponseOK(i) || (e = Error(i.statusText || i.text || "Unsuccessful HTTP response"));
            } catch (t) {
                e = t;
            }
            e
                ? ((e.original = t), (e.response = i), (e.status = e.status || i.status), n.callback(e, i))
                : n.callback(null, i);
        });
}
(E.serializeObject = g),
    (E.parseString = A),
    (E.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded",
    }),
    (E.serialize = { "application/x-www-form-urlencoded": o.stringify, "application/json": a }),
    (E.parse = { "application/x-www-form-urlencoded": A, "application/json": JSON.parse }),
    d(T.prototype, h.prototype),
    (T.prototype._parseBody = function (e) {
        let t = E.parse[this.type];
        return this.req._parser
            ? this.req._parser(this, e)
            : (!t && I(this.type) && (t = E.parse["application/json"]),
              t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
    }),
    (T.prototype.toError = function () {
        let e = this.req,
            t = e.method,
            n = e.url,
            i = Error(`cannot ${t} ${n} (${this.status})`);
        return (i.status = this.status), (i.method = t), (i.url = n), i;
    }),
    (E.Response = T),
    s(S.prototype),
    d(S.prototype, l.prototype),
    (S.prototype.type = function (e) {
        return this.set("Content-Type", E.types[e] || e), this;
    }),
    (S.prototype.accept = function (e) {
        return this.set("Accept", E.types[e] || e), this;
    }),
    (S.prototype.auth = function (e, t, n) {
        1 == arguments.length && (t = ""),
            "object" == typeof t && null !== t && ((n = t), (t = "")),
            n || (n = { type: "function" == typeof btoa ? "basic" : "auto" });
        let i = n.encoder
            ? n.encoder
            : (e) => {
                  if ("function" == typeof btoa) return btoa(e);
                  throw Error("Cannot use basic auth, btoa is not a function");
              };
        return this._auth(e, t, n, i);
    }),
    (S.prototype.query = function (e) {
        return "string" != typeof e && (e = g(e)), e && this._query.push(e), this;
    }),
    (S.prototype.attach = function (e, t, n) {
        if (t) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, n || t.name);
        }
        return this;
    }),
    (S.prototype._getFormData = function () {
        return this._formData || (this._formData = new i.FormData()), this._formData;
    }),
    (S.prototype.callback = function (e, t) {
        if (this._shouldRetry(e, t)) return this._retry();
        let n = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t);
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
            (this._callback = e || p),
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
        this.xhr = E.getXHR();
        let t = this.xhr,
            n = this._formData || this._data;
        this._setTimeouts(),
            t.addEventListener("readystatechange", () => {
                let n,
                    i = t.readyState;
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
                    e.emit("end");
                }
            });
        let i = (t, n) => {
            n.total > 0 &&
                ((n.percent = (n.loaded / n.total) * 100), 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)),
                (n.direction = t),
                e.emit("progress", n);
        };
        if (this.hasListeners("progress"))
            try {
                t.addEventListener("progress", i.bind(null, "download")),
                    t.upload && t.upload.addEventListener("progress", i.bind(null, "upload"));
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
                "string" != typeof n &&
                !this._isHost(n))
        ) {
            let e = this._header["content-type"],
                t = this._serializer || E.serialize[e ? e.split(";")[0] : ""];
            !t && I(e) && (t = E.serialize["application/json"]), t && (n = t(n));
        }
        for (let e in this.header)
            null !== this.header[e] && _(this.header, e) && t.setRequestHeader(e, this.header[e]);
        this._responseType && (t.responseType = this._responseType),
            this.emit("request", this),
            t.send(void 0 === n ? null : n);
    }),
    (E.agent = () => new f());
for (var y = 0, C = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]; y < C.length; y++) {
    let e = C[y];
    f.prototype[e.toLowerCase()] = function (t, n) {
        let i = new E.Request(e, t);
        return this._setDefaults(i), n && i.end(n), i;
    };
}
function N(e, t, n) {
    let i = E("DELETE", e);
    return "function" == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
}
(f.prototype.del = f.prototype.delete),
    (E.get = (e, t, n) => {
        let i = E("GET", e);
        return "function" == typeof t && ((n = t), (t = null)), t && i.query(t), n && i.end(n), i;
    }),
    (E.head = (e, t, n) => {
        let i = E("HEAD", e);
        return "function" == typeof t && ((n = t), (t = null)), t && i.query(t), n && i.end(n), i;
    }),
    (E.options = (e, t, n) => {
        let i = E("OPTIONS", e);
        return "function" == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    }),
    (E.del = N),
    (E.delete = N),
    (E.patch = (e, t, n) => {
        let i = E("PATCH", e);
        return "function" == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    }),
    (E.post = (e, t, n) => {
        let i = E("POST", e);
        return "function" == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    }),
    (E.put = (e, t, n) => {
        let i = E("PUT", e);
        return "function" == typeof t && ((n = t), (t = null)), t && i.send(t), n && i.end(n), i;
    });
