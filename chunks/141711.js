"use strict";
n.d(t, { A: () => np });
var r = Object.create,
    i = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    o = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty,
    u = function (e, t) {
        return function () {
            return e && (t = e((e = 0))), t;
        };
    },
    c = function (e, t) {
        return function () {
            return t || e((t = { exports: {} }).exports, t), t.exports;
        };
    },
    d = function (e, t, n, r) {
        if ((t && "object" == typeof t) || "function" == typeof t)
            for (var o, u = s(t), c = 0, d = u.length; c < d; c++)
                (o = u[c]),
                    l.call(e, o) ||
                        o === n ||
                        i(e, o, {
                            get: function (e) {
                                return t[e];
                            }.bind(null, o),
                            enumerable: !(r = a(t, o)) || r.enumerable,
                        });
        return e;
    },
    _ = function (e, t, n) {
        return (
            (n = null != e ? r(o(e)) : {}),
            d(!t && e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
        );
    },
    f = c(function (e, t) {
        t.exports = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self ? self : {};
    });
function h(e, t) {
    return null != t && "u" > typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : h(e, t);
}
var p = u(function () {
    p();
});
function g(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
var E = u(function () {}),
    A = c(function (e, t) {
        var n = Array.prototype.slice;
        t.exports = function e(e, t) {
            for (("length" in e) || (e = [e]), e = n.call(e); e.length; ) {
                var r = e.shift(),
                    i = t(r);
                if (i) return i;
                r.childNodes && r.childNodes.length && (e = n.call(r.childNodes).concat(e));
            }
        };
    }),
    I = c(function (e, t) {
        function n(e, t) {
            if (!h(this, n)) return new n(e, t);
            (this.data = e), (this.nodeValue = e), (this.length = e.length), (this.ownerDocument = t || null);
        }
        p(),
            (t.exports = n),
            (n.prototype.nodeType = 8),
            (n.prototype.nodeName = "#comment"),
            (n.prototype.toString = function () {
                return "[object Comment]";
            });
    }),
    T = c(function (e, t) {
        function n(e, t) {
            if (!h(this, n)) return new n(e);
            (this.data = e || ""), (this.length = this.data.length), (this.ownerDocument = t || null);
        }
        p(),
            (t.exports = n),
            (n.prototype.type = "DOMTextNode"),
            (n.prototype.nodeType = 3),
            (n.prototype.nodeName = "#text"),
            (n.prototype.toString = function () {
                return this.data;
            }),
            (n.prototype.replaceData = function (e, t, n) {
                var r = this.data,
                    i = r.substring(0, e),
                    a = r.substring(e + t, r.length);
                (this.data = i + n + a), (this.length = this.data.length);
            });
    }),
    y = c(function (e, t) {
        t.exports = n;
        function n(e) {
            var t = this,
                n = e.type;
            e.target || (e.target = t), t.listeners || (t.listeners = {});
            var r = t.listeners[n];
            if (r)
                return r.forEach(function (n) {
                    (e.currentTarget = t), "function" == typeof n ? n(e) : n.handleEvent(e);
                });
            t.parentNode && t.parentNode.dispatchEvent(e);
        }
    }),
    S = c(function (e, t) {
        t.exports = n;
        function n(e, t) {
            var n = this;
            n.listeners || (n.listeners = {}),
                n.listeners[e] || (n.listeners[e] = []),
                -1 === n.listeners[e].indexOf(t) && n.listeners[e].push(t);
        }
    }),
    v = c(function (e, t) {
        t.exports = n;
        function n(e, t) {
            var n = this;
            if (n.listeners && n.listeners[e]) {
                var r = n.listeners[e],
                    i = r.indexOf(t);
                -1 !== i && r.splice(i, 1);
            }
        }
    }),
    C = c(function (e, t) {
        E(), (t.exports = r);
        var n = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "keygen",
            "link",
            "menuitem",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
        ];
        function r(e) {
            switch (e.nodeType) {
                case 3:
                    return c(e.data);
                case 8:
                    return "\x3c!--" + e.data + "--\x3e";
                default:
                    return i(e);
            }
        }
        function i(e) {
            var t = [],
                i = e.tagName;
            return (
                "http://www.w3.org/1999/xhtml" === e.namespaceURI && (i = i.toLowerCase()),
                t.push("<" + i + u(e) + o(e)),
                n.indexOf(i) > -1
                    ? t.push(" />")
                    : (t.push(">"),
                      e.childNodes.length
                          ? t.push.apply(t, e.childNodes.map(r))
                          : e.textContent || e.innerText
                            ? t.push(c(e.textContent || e.innerText))
                            : e.innerHTML && t.push(e.innerHTML),
                      t.push("</" + i + ">")),
                t.join("")
            );
        }
        function a(e, t) {
            var n = g(e[t]);
            return (
                ("style" === t && Object.keys(e.style).length > 0) ||
                (e.hasOwnProperty(t) &&
                    ("string" === n || "boolean" === n || "number" === n) &&
                    "nodeName" !== t &&
                    "className" !== t &&
                    "tagName" !== t &&
                    "textContent" !== t &&
                    "innerText" !== t &&
                    "namespaceURI" !== t &&
                    "innerHTML" !== t)
            );
        }
        function s(e) {
            if ("string" == typeof e) return e;
            var t = "";
            return (
                Object.keys(e).forEach(function (n) {
                    var r = e[n];
                    (n = n.replace(/[A-Z]/g, function (e) {
                        return "-" + e.toLowerCase();
                    })),
                        (t += n + ":" + r + ";");
                }),
                t
            );
        }
        function o(e) {
            var t = e.dataset,
                n = [];
            for (var r in t) n.push({ name: "data-" + r, value: t[r] });
            return n.length ? l(n) : "";
        }
        function l(e) {
            var t = [];
            return (
                e.forEach(function (e) {
                    var n = e.name,
                        r = e.value;
                    "style" === n && (r = s(r)), t.push(n + '="' + d(r) + '"');
                }),
                t.length ? " " + t.join(" ") : ""
            );
        }
        function u(e) {
            var t = [];
            for (var n in e) a(e, n) && t.push({ name: n, value: e[n] });
            for (var r in e._attributes)
                for (var i in e._attributes[r]) {
                    var s = e._attributes[r][i],
                        o = (s.prefix ? s.prefix + ":" : "") + i;
                    t.push({ name: o, value: s.value });
                }
            return e.className && t.push({ name: "class", value: e.className }), t.length ? l(t) : "";
        }
        function c(e) {
            var t = "";
            return (
                "string" == typeof e ? (t = e) : e && (t = e.toString()),
                t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            );
        }
        function d(e) {
            return c(e).replace(/"/g, "&quot;");
        }
    }),
    b = c(function (e, t) {
        p();
        var n = A(),
            r = y(),
            i = S(),
            a = v(),
            s = C(),
            o = "http://www.w3.org/1999/xhtml";
        function l(e, t, n) {
            if (!h(this, l)) return new l(e);
            var r = void 0 === n ? o : n || null;
            (this.tagName = r === o ? String(e).toUpperCase() : e),
                (this.nodeName = this.tagName),
                (this.className = ""),
                (this.dataset = {}),
                (this.childNodes = []),
                (this.parentNode = null),
                (this.style = {}),
                (this.ownerDocument = t || null),
                (this.namespaceURI = r),
                (this._attributes = {}),
                "INPUT" === this.tagName && (this.type = "text");
        }
        (t.exports = l),
            (l.prototype.type = "DOMElement"),
            (l.prototype.nodeType = 1),
            (l.prototype.appendChild = function (e) {
                return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), (e.parentNode = this), e;
            }),
            (l.prototype.replaceChild = function (e, t) {
                e.parentNode && e.parentNode.removeChild(e);
                var n = this.childNodes.indexOf(t);
                return (t.parentNode = null), (this.childNodes[n] = e), (e.parentNode = this), t;
            }),
            (l.prototype.removeChild = function (e) {
                var t = this.childNodes.indexOf(e);
                return this.childNodes.splice(t, 1), (e.parentNode = null), e;
            }),
            (l.prototype.insertBefore = function (e, t) {
                e.parentNode && e.parentNode.removeChild(e);
                var n = null == t ? -1 : this.childNodes.indexOf(t);
                return n > -1 ? this.childNodes.splice(n, 0, e) : this.childNodes.push(e), (e.parentNode = this), e;
            }),
            (l.prototype.setAttributeNS = function (e, t, n) {
                var r = null,
                    i = t,
                    a = t.indexOf(":");
                (a > -1 && ((r = t.substr(0, a)), (i = t.substr(a + 1))), "INPUT" === this.tagName && "type" === t)
                    ? (this.type = n)
                    : ((this._attributes[e] || (this._attributes[e] = {}))[i] = { value: n, prefix: r });
            }),
            (l.prototype.getAttributeNS = function (e, t) {
                var n = this._attributes[e],
                    r = n && n[t] && n[t].value;
                return "INPUT" === this.tagName && "type" === t ? this.type : "string" != typeof r ? null : r;
            }),
            (l.prototype.removeAttributeNS = function (e, t) {
                var n = this._attributes[e];
                n && delete n[t];
            }),
            (l.prototype.hasAttributeNS = function (e, t) {
                var n = this._attributes[e];
                return !!n && t in n;
            }),
            (l.prototype.setAttribute = function (e, t) {
                return this.setAttributeNS(null, e, t);
            }),
            (l.prototype.getAttribute = function (e) {
                return this.getAttributeNS(null, e);
            }),
            (l.prototype.removeAttribute = function (e) {
                return this.removeAttributeNS(null, e);
            }),
            (l.prototype.hasAttribute = function (e) {
                return this.hasAttributeNS(null, e);
            }),
            (l.prototype.removeEventListener = a),
            (l.prototype.addEventListener = i),
            (l.prototype.dispatchEvent = r),
            (l.prototype.focus = function () {}),
            (l.prototype.toString = function () {
                return s(this);
            }),
            (l.prototype.getElementsByClassName = function (e) {
                var t = e.split(" "),
                    r = [];
                return (
                    n(this, function (e) {
                        if (1 === e.nodeType) {
                            var n = (e.className || "").split(" ");
                            t.every(function (e) {
                                return -1 !== n.indexOf(e);
                            }) && r.push(e);
                        }
                    }),
                    r
                );
            }),
            (l.prototype.getElementsByTagName = function (e) {
                e = e.toLowerCase();
                var t = [];
                return (
                    n(this.childNodes, function (n) {
                        1 === n.nodeType && ("*" === e || n.tagName.toLowerCase() === e) && t.push(n);
                    }),
                    t
                );
            }),
            (l.prototype.contains = function (e) {
                return (
                    n(this, function (t) {
                        return e === t;
                    }) || !1
                );
            });
    }),
    N = c(function (e, t) {
        p();
        var n = b();
        function r(e) {
            if (!h(this, r)) return new r();
            (this.childNodes = []), (this.parentNode = null), (this.ownerDocument = e || null);
        }
        (t.exports = r),
            (r.prototype.type = "DocumentFragment"),
            (r.prototype.nodeType = 11),
            (r.prototype.nodeName = "#document-fragment"),
            (r.prototype.appendChild = n.prototype.appendChild),
            (r.prototype.replaceChild = n.prototype.replaceChild),
            (r.prototype.removeChild = n.prototype.removeChild),
            (r.prototype.toString = function () {
                return this.childNodes
                    .map(function (e) {
                        return String(e);
                    })
                    .join("");
            });
    }),
    R = c(function (e, t) {
        function n(e) {}
        (t.exports = n),
            (n.prototype.initEvent = function (e, t, n) {
                (this.type = e), (this.bubbles = t), (this.cancelable = n);
            }),
            (n.prototype.preventDefault = function () {});
    }),
    O = c(function (e, t) {
        p();
        var n = A(),
            r = I(),
            i = T(),
            a = b(),
            s = N(),
            o = R(),
            l = y(),
            u = S(),
            c = v();
        function d() {
            if (!h(this, d)) return new d();
            (this.head = this.createElement("head")),
                (this.body = this.createElement("body")),
                (this.documentElement = this.createElement("html")),
                this.documentElement.appendChild(this.head),
                this.documentElement.appendChild(this.body),
                (this.childNodes = [this.documentElement]),
                (this.nodeType = 9);
        }
        t.exports = d;
        var _ = d.prototype;
        (_.createTextNode = function (e) {
            return new i(e, this);
        }),
            (_.createElementNS = function (e, t) {
                return new a(t, this, null === e ? null : String(e));
            }),
            (_.createElement = function (e) {
                return new a(e, this);
            }),
            (_.createDocumentFragment = function () {
                return new s(this);
            }),
            (_.createEvent = function (e) {
                return new o(e);
            }),
            (_.createComment = function (e) {
                return new r(e, this);
            }),
            (_.getElementById = function (e) {
                return (
                    (e = String(e)),
                    n(this.childNodes, function (t) {
                        if (String(t.id) === e) return t;
                    }) || null
                );
            }),
            (_.getElementsByClassName = a.prototype.getElementsByClassName),
            (_.getElementsByTagName = a.prototype.getElementsByTagName),
            (_.contains = a.prototype.contains),
            (_.removeEventListener = c),
            (_.addEventListener = u),
            (_.dispatchEvent = l);
    }),
    D = c(function (e, t) {
        t.exports = new (O())();
    }),
    L = c(function (e, t) {
        var n,
            r = "u" > typeof global ? global : "u" > typeof window ? window : {},
            i = D();
        "u" > typeof document
            ? (n = document)
            : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = i),
            (t.exports = n);
    });
function w(e) {
    if (Array.isArray(e)) return e;
}
function x(e, t) {
    var n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != n) {
        var r,
            i,
            a = [],
            s = !0,
            o = !1;
        try {
            for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !(t && a.length === t)); s = !0);
        } catch (e) {
            (o = !0), (i = e);
        } finally {
            try {
                s || null == n.return || n.return();
            } finally {
                if (o) throw i;
            }
        }
        return a;
    }
}
function P() {
    throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function k(e, t) {
    if (e) {
        if ("string" == typeof e) return M(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(n);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t);
    }
}
function U(e, t) {
    return w(e) || x(e, t) || k(e, t) || P();
}
var G = _(f()),
    F = _(f()),
    V = _(f()),
    B = function () {
        var e = V.default.performance,
            t = e && e.timing,
            n = t && t.navigationStart;
        return Math.round("number" == typeof n && "function" == typeof e.now ? n + e.now() : Date.now());
    },
    j = function () {
        if ("function" == typeof (null == (e = F.default.crypto) ? void 0 : e.getRandomValues)) {
            (n = new Uint8Array(32)), F.default.crypto.getRandomValues(n);
            for (var e, t, n, r = 0; r < 32; r++) n[r] = n[r] % 16;
        } else {
            n = [];
            for (var i = 0; i < 32; i++) n[i] = (16 * Math.random()) | 0;
        }
        var a = 0;
        t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = "x" === e ? n[a] : (3 & n[a]) | 8;
            return a++, t.toString(16);
        });
        var s = B(),
            o = null == s ? void 0 : s.toString(16).substring(3);
        return o ? t.substring(0, 28) + o : t;
    },
    H = function () {
        return ("000000" + ((0x81bf1000 * Math.random()) | 0).toString(36)).slice(-6);
    },
    Y = function (e) {
        var t;
        if (e && void 0 !== e.nodeName) return e.muxId || (e.muxId = H()), e.muxId;
        try {
            t = document.querySelector(e);
        } catch (e) {}
        return t && !t.muxId && (t.muxId = e), (null == t ? void 0 : t.muxId) || e;
    },
    W = function (e) {
        e && void 0 !== e.nodeName ? (e = Y((t = e))) : (t = document.querySelector(e));
        var t,
            n = t && t.nodeName ? t.nodeName.toLowerCase() : "";
        return [t, e, n];
    };
function K(e) {
    if (Array.isArray(e)) return M(e);
}
function $(e) {
    if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
}
function z() {
    throw TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function q(e) {
    return K(e) || $(e) || k(e) || z();
}
var X = 0,
    Z = 1,
    Q = 2,
    J = 3,
    ee = 4,
    et = (function (e) {
        var t,
            n,
            r,
            i,
            a,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            o = e ? [console, e] : [console],
            l = (t = console.trace).bind.apply(t, q(o)),
            u = (n = console.info).bind.apply(n, q(o)),
            c = (r = console.debug).bind.apply(r, q(o)),
            d = (i = console.warn).bind.apply(i, q(o)),
            _ = (a = console.error).bind.apply(a, q(o)),
            f = s;
        return {
            trace: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!(f > X)) return l.apply(void 0, q(t));
            },
            debug: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!(f > Z)) return c.apply(void 0, q(t));
            },
            info: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!(f > Q)) return u.apply(void 0, q(t));
            },
            warn: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!(f > J)) return d.apply(void 0, q(t));
            },
            error: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!(f > ee)) return _.apply(void 0, q(t));
            },
            get level() {
                return f;
            },
            set level(m) {
                m !== this.level && (f = null != m ? m : s);
            },
        };
    })("[mux]"),
    en = _(f());
function er() {
    return "1" === (en.default.doNotTrack || (en.default.navigator && en.default.navigator.doNotTrack));
}
function ei(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function ea(e, t) {
    if (!h(e, t)) throw TypeError("Cannot call a class as a function");
}
function es(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function eo(e, t, n) {
    return t && es(e.prototype, t), n && es(e, n), e;
}
function el(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function eu(e) {
    return (eu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function ec(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = eu(e)); );
    return e;
}
function ed(e, t, n) {
    return (ed =
        "u" > typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                  var r = ec(e, t);
                  if (r) {
                      var i = Object.getOwnPropertyDescriptor(r, t);
                      return i.get ? i.get.call(n || e) : i.value;
                  }
              })(e, t, n || e);
}
function e_(e, t) {
    return (e_ =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function ef(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        t && e_(e, t);
}
function eh(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eh(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function em() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function eg(e, t) {
    return t && ("object" === g(t) || "function" == typeof t) ? t : ei(e);
}
function eE(e) {
    var t = em();
    return function () {
        var n,
            r = eu(e);
        return (n = t ? Reflect.construct(r, arguments, eu(this).constructor) : r.apply(this, arguments)), eg(this, n);
    };
}
p(), E();
var eA = function (e) {
        return eI(e)[0];
    },
    eI = function (e) {
        if ("string" != typeof e || "" === e) return ["localhost"];
        var t,
            n = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
            r = (e.match(n) || [])[4];
        return r && (t = (r.match(/[^\.]+\.[^\.]+$/) || [])[0]), [r, t];
    },
    eT = _(f()),
    ey = function () {
        var e = eT.default.performance;
        return void 0 !== (e && e.timing);
    },
    eS = function () {
        var e = eT.default.performance,
            t = e && e.timing;
        return t && t.domContentLoadedEventEnd;
    },
    ev = function () {
        var e = eT.default.performance,
            t = e && e.timing;
        return t && t.navigationStart;
    };
function eC(e, t, n) {
    (n = void 0 === n ? 1 : n), (e[t] = e[t] || 0), (e[t] += n);
}
function eb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            });
    }
    return e;
}
function eN(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eR(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eN(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var eO = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
    eD = ["x-cdn", "content-type"].concat(eO);
function eL(e) {
    var t = {};
    return (
        (e = e || "")
            .trim()
            .split(/[\r\n]+/)
            .forEach(function (e) {
                if (e) {
                    var n = e.split(": "),
                        r = n.shift();
                    r &&
                        (eD.indexOf(r.toLowerCase()) >= 0 || 0 === r.toLowerCase().indexOf("x-litix-")) &&
                        (t[r] = n.join(": "));
                }
            }),
        t
    );
}
function ew(e) {
    if (e) {
        var t = eO.find(function (t) {
            return void 0 !== e[t];
        });
        return t ? e[t] : void 0;
    }
}
var ex = function (e) {
        var t = {};
        for (var n in e) {
            var r = e[n];
            -1 !== r["DATA-ID"].search("io.litix.data.") && (t[r["DATA-ID"].replace("io.litix.data.", "")] = r.VALUE);
        }
        return t;
    },
    eP = function (e) {
        if (!e) return {};
        var t = ev(),
            n = e.loading,
            r = n ? n.start : e.trequest,
            i = n ? n.first : e.tfirst,
            a = n ? n.end : e.tload;
        return {
            bytesLoaded: e.total,
            requestStart: Math.round(t + r),
            responseStart: Math.round(t + i),
            responseEnd: Math.round(t + a),
        };
    },
    eM = function (e) {
        if (!(!e || "function" != typeof e.getAllResponseHeaders)) return eL(e.getAllResponseHeaders());
    },
    ek = function (e, t, n) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var r = arguments.length > 4 ? arguments[4] : void 0,
            i = e.log,
            a = e.utils.secondsToMs,
            s = function (e) {
                var t,
                    n = parseInt(r.version);
                return (
                    1 === n && null !== e.programDateTime && (t = e.programDateTime),
                    0 === n && null !== e.pdt && (t = e.pdt),
                    t
                );
            };
        if (!ey()) return void i.warn("performance timing not supported. Not tracking HLS.js.");
        var o = function (n, r) {
                return e.emit(t, n, r);
            },
            l = function (e, t) {
                var n = t.levels,
                    r = t.audioTracks,
                    i = t.url,
                    a = t.stats,
                    s = t.networkDetails,
                    l = t.sessionData,
                    u = {},
                    c = {};
                n.forEach(function (e, t) {
                    u[t] = { width: e.width, height: e.height, bitrate: e.bitrate, attrs: e.attrs };
                }),
                    r.forEach(function (e, t) {
                        c[t] = { name: e.name, language: e.lang, bitrate: e.bitrate };
                    });
                var d = eP(a),
                    _ = d.bytesLoaded,
                    f = d.requestStart,
                    h = d.responseStart,
                    p = d.responseEnd;
                o(
                    "requestcompleted",
                    eR(eb({}, ex(l)), {
                        request_event_type: e,
                        request_bytes_loaded: _,
                        request_start: f,
                        request_response_start: h,
                        request_response_end: p,
                        request_type: "manifest",
                        request_hostname: eA(i),
                        request_response_headers: eM(s),
                        request_rendition_lists: { media: u, audio: c, video: {} },
                    }),
                );
            };
        n.on(r.Events.MANIFEST_LOADED, l);
        var u = function (e, t) {
            var n = t.details,
                r = t.level,
                i = t.networkDetails,
                l = eP(t.stats),
                u = l.bytesLoaded,
                c = l.requestStart,
                d = l.responseStart,
                _ = l.responseEnd,
                f = n.fragments[n.fragments.length - 1],
                h = s(f) + a(f.duration);
            o("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: u,
                request_start: c,
                request_response_start: d,
                request_response_end: _,
                request_current_level: r,
                request_type: "manifest",
                request_hostname: eA(n.url),
                request_response_headers: eM(i),
                video_holdback: n.holdBack && a(n.holdBack),
                video_part_holdback: n.partHoldBack && a(n.partHoldBack),
                video_part_target_duration: n.partTarget && a(n.partTarget),
                video_target_duration: n.targetduration && a(n.targetduration),
                video_source_is_live: n.live,
                player_manifest_newest_program_time: isNaN(h) ? void 0 : h,
            });
        };
        n.on(r.Events.LEVEL_LOADED, u);
        var c = function (e, t) {
            var n = t.details,
                r = t.networkDetails,
                i = eP(t.stats);
            o("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: i.bytesLoaded,
                request_start: i.requestStart,
                request_response_start: i.responseStart,
                request_response_end: i.responseEnd,
                request_type: "manifest",
                request_hostname: eA(n.url),
                request_response_headers: eM(r),
            });
        };
        n.on(r.Events.AUDIO_TRACK_LOADED, c);
        var d = function (e, t) {
            var r = t.stats,
                i = t.networkDetails,
                a = t.frag,
                s = eP((r = r || a.stats)),
                l = s.bytesLoaded,
                u = s.requestStart,
                c = s.responseStart,
                d = s.responseEnd,
                _ = i ? eM(i) : void 0,
                f = {
                    request_event_type: e,
                    request_bytes_loaded: l,
                    request_start: u,
                    request_response_start: c,
                    request_response_end: d,
                    request_hostname: i ? eA(i.responseURL) : void 0,
                    request_id: _ ? ew(_) : void 0,
                    request_response_headers: _,
                    request_media_duration: a.duration,
                    request_url: null == i ? void 0 : i.responseURL,
                };
            "main" === a.type
                ? ((f.request_type = "media"),
                  (f.request_current_level = a.level),
                  (f.request_video_width = (n.levels[a.level] || {}).width),
                  (f.request_video_height = (n.levels[a.level] || {}).height),
                  (f.request_labeled_bitrate = (n.levels[a.level] || {}).bitrate))
                : (f.request_type = a.type),
                o("requestcompleted", f);
        };
        n.on(r.Events.FRAG_LOADED, d);
        var _ = function (e, t) {
            var n = t.frag,
                r = n.start;
            o("fragmentchange", { currentFragmentPDT: s(n), currentFragmentStart: a(r) });
        };
        n.on(r.Events.FRAG_CHANGED, _);
        var f = function (e, t) {
            var n,
                i = t.type,
                a = t.details,
                s = t.response,
                l = t.fatal,
                u = t.frag,
                c = t.networkDetails,
                d = (null == u ? void 0 : u.url) || t.url || "",
                _ = c ? eM(c) : void 0;
            (a === r.ErrorDetails.MANIFEST_LOAD_ERROR ||
                a === r.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                a === r.ErrorDetails.FRAG_LOAD_ERROR ||
                a === r.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                a === r.ErrorDetails.LEVEL_LOAD_ERROR ||
                a === r.ErrorDetails.LEVEL_LOAD_TIMEOUT ||
                a === r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                a === r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ||
                a === r.ErrorDetails.SUBTITLE_LOAD_ERROR ||
                a === r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ||
                a === r.ErrorDetails.KEY_LOAD_ERROR ||
                a === r.ErrorDetails.KEY_LOAD_TIMEOUT) &&
                o("requestfailed", {
                    request_error: a,
                    request_url: d,
                    request_hostname: eA(d),
                    request_id: _ ? ew(_) : void 0,
                    request_type:
                        a === r.ErrorDetails.FRAG_LOAD_ERROR || a === r.ErrorDetails.FRAG_LOAD_TIMEOUT
                            ? "media"
                            : a === r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                                a === r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                              ? "audio"
                              : a === r.ErrorDetails.SUBTITLE_LOAD_ERROR || a === r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT
                                ? "subtitle"
                                : a === r.ErrorDetails.KEY_LOAD_ERROR || a === r.ErrorDetails.KEY_LOAD_TIMEOUT
                                  ? "encryption"
                                  : "manifest",
                    request_error_code: null == s ? void 0 : s.code,
                    request_error_text: null == s ? void 0 : s.text,
                }),
                l &&
                    o("error", {
                        player_error_code: i,
                        player_error_message: a,
                        player_error_context:
                            "".concat(d ? "url: ".concat(d, "\n") : "") +
                            "".concat(
                                s && (s.code || s.text) ? "response: ".concat(s.code, ", ").concat(s.text, "\n") : "",
                            ) +
                            "".concat(t.reason ? "failure reason: ".concat(t.reason, "\n") : "") +
                            "".concat(t.level ? "level: ".concat(t.level, "\n") : "") +
                            "".concat(t.parent ? "parent stream controller: ".concat(t.parent, "\n") : "") +
                            "".concat(t.buffer ? "buffer length: ".concat(t.buffer, "\n") : "") +
                            "".concat(t.error ? "error: ".concat(t.error, "\n") : "") +
                            "".concat(t.event ? "event: ".concat(t.event, "\n") : "") +
                            "".concat(
                                t.err ? "error message: ".concat(null == (n = t.err) ? void 0 : n.message, "\n") : "",
                            ),
                    });
        };
        n.on(r.Events.ERROR, f);
        var h = function (e, t) {
            var n = t.frag,
                r = (n && n._url) || "";
            o("requestcanceled", {
                request_event_type: e,
                request_url: r,
                request_type: "media",
                request_hostname: eA(r),
            });
        };
        n.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, h);
        var p = function (e, t) {
            var r = t.level,
                a = n.levels[r];
            if (a && a.attrs && a.attrs.BANDWIDTH) {
                var s,
                    l = a.attrs.BANDWIDTH,
                    u = parseFloat(a.attrs["FRAME-RATE"]);
                isNaN(u) || (s = u),
                    l
                        ? o("renditionchange", {
                              video_source_fps: s,
                              video_source_bitrate: l,
                              video_source_width: a.width,
                              video_source_height: a.height,
                              video_source_rendition_name: a.name,
                              video_source_codec: null == a ? void 0 : a.videoCodec,
                          })
                        : i.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
            }
        };
        n.on(r.Events.LEVEL_SWITCHED, p),
            (n._stopMuxMonitor = function () {
                n.off(r.Events.MANIFEST_LOADED, l),
                    n.off(r.Events.LEVEL_LOADED, u),
                    n.off(r.Events.AUDIO_TRACK_LOADED, c),
                    n.off(r.Events.FRAG_LOADED, d),
                    n.off(r.Events.FRAG_CHANGED, _),
                    n.off(r.Events.ERROR, f),
                    n.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, h),
                    n.off(r.Events.LEVEL_SWITCHED, p),
                    n.off(r.Events.DESTROYING, n._stopMuxMonitor),
                    delete n._stopMuxMonitor;
            }),
            n.on(r.Events.DESTROYING, n._stopMuxMonitor);
    },
    eU = function (e) {
        e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
    },
    eG = function (e, t) {
        if (!e || !e.requestEndDate) return {};
        var n,
            r = eA(e.url),
            i = e.url,
            a = e.bytesLoaded,
            s = new Date(e.requestStartDate).getTime(),
            o = new Date(e.firstByteDate).getTime(),
            l = new Date(e.requestEndDate).getTime(),
            u = isNaN(e.duration) ? 0 : e.duration,
            c =
                "function" == typeof t.getMetricsFor
                    ? t.getMetricsFor(e.mediaType).HttpList
                    : t.getDashMetrics().getHttpRequests(e.mediaType);
        c.length > 0 && (n = eL(c[c.length - 1]._responseHeaders || ""));
        var d = n ? ew(n) : void 0;
        return {
            requestStart: s,
            requestResponseStart: o,
            requestResponseEnd: l,
            requestBytesLoaded: a,
            requestResponseHeaders: n,
            requestMediaDuration: u,
            requestHostname: r,
            requestUrl: i,
            requestId: d,
        };
    },
    eF = function (e, t) {
        var n = t.getQualityFor(e),
            r = t.getCurrentTrackFor(e).bitrateList;
        return r
            ? {
                  currentLevel: n,
                  renditionWidth: r[n].width || null,
                  renditionHeight: r[n].height || null,
                  renditionBitrate: r[n].bandwidth,
              }
            : {};
    },
    eV = function (e) {
        var t;
        return null == (t = e.match(/.*codecs\*?="(.*)"/)) ? void 0 : t[1];
    },
    eB = function (e) {
        try {
            var t, n;
            return null == (n = e.getVersion) || null == (t = n.call(e))
                ? void 0
                : t.split(".").map(function (e) {
                      return parseInt(e);
                  })[0];
        } catch (e) {
            return !1;
        }
    },
    ej = function (e, t, n) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var r = e.log;
        if (!n || !n.on) return void r.warn("Invalid dash.js player reference. Monitoring blocked.");
        var i = eB(n),
            a = function (n, r) {
                return e.emit(t, n, r);
            },
            s = function (e) {
                var t = e.type,
                    n = (e.data || {}).url;
                a("requestcompleted", {
                    request_event_type: t,
                    request_start: 0,
                    request_response_start: 0,
                    request_response_end: 0,
                    request_bytes_loaded: -1,
                    request_type: "manifest",
                    request_hostname: eA(n),
                    request_url: n,
                });
            };
        n.on("manifestLoaded", s);
        var o = {},
            l = function (e) {
                if ("function" != typeof e.getRequests) return null;
                var t = e.getRequests({ state: "executed" });
                return 0 === t.length ? null : t[t.length - 1];
            },
            u = function (e) {
                var t = e.type,
                    n = e.fragmentModel,
                    r = e.chunk;
                c({ type: t, request: l(n), chunk: r });
            },
            c = function (e) {
                var t = e.type,
                    r = e.chunk,
                    i = e.request,
                    s = (r || {}).mediaInfo || {},
                    l = s.type,
                    u = s.bitrateList,
                    c = {};
                (u = u || []).forEach(function (e, t) {
                    (c[t] = {}),
                        (c[t].width = e.width),
                        (c[t].height = e.height),
                        (c[t].bitrate = e.bandwidth),
                        (c[t].attrs = {});
                }),
                    "video" === l ? (o.video = c) : "audio" === l ? (o.audio = c) : (o.media = c);
                var d = eG(i, n),
                    _ = d.requestStart,
                    f = d.requestResponseStart,
                    h = d.requestResponseEnd,
                    p = d.requestResponseHeaders,
                    g = d.requestMediaDuration,
                    E = d.requestHostname,
                    A = d.requestUrl;
                a("requestcompleted", {
                    request_event_type: t,
                    request_start: _,
                    request_response_start: f,
                    request_response_end: h,
                    request_bytes_loaded: -1,
                    request_type: l + "_init",
                    request_response_headers: p,
                    request_hostname: E,
                    request_id: d.requestId,
                    request_url: A,
                    request_media_duration: g,
                    request_rendition_lists: o,
                });
            };
        i >= 4 ? n.on("initFragmentLoaded", c) : n.on("initFragmentLoaded", u);
        var d = function (e) {
                var t = e.type,
                    n = e.fragmentModel,
                    r = e.chunk;
                _({ type: t, request: l(n), chunk: r });
            },
            _ = function (e) {
                var t = e.type,
                    r = e.chunk,
                    i = e.request,
                    s = r || {},
                    o = s.mediaInfo,
                    l = s.start,
                    u = (o || {}).type,
                    c = eG(i, n),
                    d = c.requestStart,
                    _ = c.requestResponseStart,
                    f = c.requestResponseEnd,
                    h = c.requestBytesLoaded,
                    p = c.requestResponseHeaders,
                    g = c.requestMediaDuration,
                    E = c.requestHostname,
                    A = c.requestUrl,
                    I = c.requestId,
                    T = eF(u, n),
                    y = T.currentLevel,
                    S = T.renditionWidth,
                    v = T.renditionHeight;
                a("requestcompleted", {
                    request_event_type: t,
                    request_start: d,
                    request_response_start: _,
                    request_response_end: f,
                    request_bytes_loaded: h,
                    request_type: u,
                    request_response_headers: p,
                    request_hostname: E,
                    request_id: I,
                    request_url: A,
                    request_media_start_time: l,
                    request_media_duration: g,
                    request_current_level: y,
                    request_labeled_bitrate: T.renditionBitrate,
                    request_video_width: S,
                    request_video_height: v,
                });
            };
        i >= 4 ? n.on("mediaFragmentLoaded", _) : n.on("mediaFragmentLoaded", d);
        var f = { video: void 0, audio: void 0, totalBitrate: void 0 },
            h = function () {
                if (f.video && "number" == typeof f.video.bitrate) {
                    if (!(f.video.width && f.video.height))
                        return void r.warn("have bitrate info for video but missing width/height");
                    var e = f.video.bitrate;
                    if ((f.audio && "number" == typeof f.audio.bitrate && (e += f.audio.bitrate), e !== f.totalBitrate))
                        return (
                            (f.totalBitrate = e),
                            {
                                video_source_bitrate: e,
                                video_source_height: f.video.height,
                                video_source_width: f.video.width,
                                video_source_codec: eV(f.video.codec),
                            }
                        );
                }
            },
            p = function (e, t, i) {
                if ("number" != typeof e.newQuality)
                    return void r.warn("missing evt.newQuality in qualityChangeRendered event", e);
                var s = e.mediaType;
                if ("audio" === s || "video" === s) {
                    var o = n.getBitrateInfoListFor(s).find(function (t) {
                        return t.qualityIndex === e.newQuality;
                    });
                    if (!(o && "number" == typeof o.bitrate)) return void r.warn("missing bitrate info for ".concat(s));
                    f[s] = eR(eb({}, o), { codec: n.getCurrentTrackFor(s).codec });
                    var l = h();
                    l && a("renditionchange", l);
                }
            };
        n.on("qualityChangeRendered", p);
        var g = function (e) {
            var t = e.request,
                n = e.mediaType;
            a("requestcanceled", {
                request_event_type: (t = t || {}).type + "_" + t.action,
                request_url: t.url,
                request_type: n,
                request_hostname: eA(t.url),
            });
        };
        n.on("fragmentLoadingAbandoned", g);
        var E = function (e) {
            var t,
                n,
                r = e.error,
                i = (null == r || null == (t = r.data) ? void 0 : t.request) || {},
                s = (null == r || null == (n = r.data) ? void 0 : n.response) || {};
            (null == r ? void 0 : r.code) === 27 &&
                a("requestfailed", {
                    request_error: i.type + "_" + i.action,
                    request_url: i.url,
                    request_hostname: eA(i.url),
                    request_type: i.mediaType,
                    request_error_code: s.status,
                    request_error_text: s.statusText,
                });
            var o =
                "".concat(null != i && i.url ? "url: ".concat(i.url, "\n") : "") +
                "".concat(
                    (null != s && s.status) || (null != s && s.statusText)
                        ? "response: "
                              .concat(null == s ? void 0 : s.status, ", ")
                              .concat(null == s ? void 0 : s.statusText, "\n")
                        : "",
                );
            a("error", {
                player_error_code: null == r ? void 0 : r.code,
                player_error_message: null == r ? void 0 : r.message,
                player_error_context: o,
            });
        };
        n.on("error", E),
            (n._stopMuxMonitor = function () {
                n.off("manifestLoaded", s),
                    n.off("initFragmentLoaded", c),
                    n.off("mediaFragmentLoaded", _),
                    n.off("qualityChangeRendered", p),
                    n.off("error", E),
                    n.off("fragmentLoadingAbandoned", g),
                    delete n._stopMuxMonitor;
            });
    },
    eH = function (e) {
        e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
    },
    eY = 0,
    eW = (function () {
        function e() {
            ea(this, e), el(this, "_listeners", void 0);
        }
        return (
            eo(e, [
                {
                    key: "on",
                    value: function (e, t, n) {
                        return (
                            (t._eventEmitterGuid = t._eventEmitterGuid || ++eY),
                            (this._listeners = this._listeners || {}),
                            (this._listeners[e] = this._listeners[e] || []),
                            n && (t = t.bind(n)),
                            this._listeners[e].push(t),
                            t
                        );
                    },
                },
                {
                    key: "off",
                    value: function (e, t) {
                        var n = this._listeners && this._listeners[e];
                        n &&
                            n.forEach(function (e, r) {
                                e._eventEmitterGuid === t._eventEmitterGuid && n.splice(r, 1);
                            });
                    },
                },
                {
                    key: "one",
                    value: function (e, t, n) {
                        var r = this;
                        t._eventEmitterGuid = t._eventEmitterGuid || ++eY;
                        var i = function () {
                            r.off(e, i), t.apply(n || this, arguments);
                        };
                        (i._eventEmitterGuid = t._eventEmitterGuid), this.on(e, i);
                    },
                },
                {
                    key: "emit",
                    value: function (e, t) {
                        var n = this;
                        if (this._listeners) {
                            t = t || {};
                            var r = this._listeners["before" + e] || [],
                                i = this._listeners["before*"] || [],
                                a = this._listeners[e] || [],
                                s = this._listeners["after" + e] || [],
                                o = function (t, r) {
                                    (t = t.slice()).forEach(function (t) {
                                        t.call(n, { type: e }, r);
                                    });
                                };
                            o(r, t), o(i, t), o(a, t), o(s, t);
                        }
                    },
                },
            ]),
            e
        );
    })(),
    eK = _(f()),
    e$ = (function () {
        function e(t) {
            var n = this;
            ea(this, e),
                el(this, "_playbackHeartbeatInterval", void 0),
                el(this, "_playheadShouldBeProgressing", void 0),
                el(this, "pm", void 0),
                (this.pm = t),
                (this._playbackHeartbeatInterval = null),
                (this._playheadShouldBeProgressing = !1),
                t.on("playing", function () {
                    n._playheadShouldBeProgressing = !0;
                }),
                t.on("play", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("playing", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)),
                t.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("error", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)),
                t.on("seeked", function () {
                    t.data.player_is_paused ? n._stopPlaybackHeartbeatInterval() : n._startPlaybackHeartbeatInterval();
                }),
                t.on("timeupdate", function () {
                    null !== n._playbackHeartbeatInterval && t.emit("playbackheartbeat");
                }),
                t.on("devicesleep", function (e, r) {
                    null !== n._playbackHeartbeatInterval &&
                        (eK.default.clearInterval(n._playbackHeartbeatInterval),
                        t.emit("playbackheartbeatend", { viewer_time: r.viewer_time }),
                        (n._playbackHeartbeatInterval = null));
                });
        }
        return (
            eo(e, [
                {
                    key: "_startPlaybackHeartbeatInterval",
                    value: function () {
                        var e = this;
                        null === this._playbackHeartbeatInterval &&
                            (this.pm.emit("playbackheartbeat"),
                            (this._playbackHeartbeatInterval = eK.default.setInterval(function () {
                                e.pm.emit("playbackheartbeat");
                            }, this.pm.playbackHeartbeatTime)));
                    },
                },
                {
                    key: "_stopPlaybackHeartbeatInterval",
                    value: function () {
                        (this._playheadShouldBeProgressing = !1),
                            null !== this._playbackHeartbeatInterval &&
                                (eK.default.clearInterval(this._playbackHeartbeatInterval),
                                this.pm.emit("playbackheartbeatend"),
                                (this._playbackHeartbeatInterval = null));
                    },
                },
            ]),
            e
        );
    })(),
    ez = function e(t) {
        var n = this;
        ea(this, e),
            el(this, "viewErrored", void 0),
            t.on("viewinit", function () {
                n.viewErrored = !1;
            }),
            t.on("error", function (e, r) {
                try {
                    var i = t.errorTranslator({
                        player_error_code: r.player_error_code,
                        player_error_message: r.player_error_message,
                        player_error_context: r.player_error_context,
                        player_error_severity: r.player_error_severity,
                        player_error_business_exception: r.player_error_business_exception,
                    });
                    i &&
                        ((t.data.player_error_code = i.player_error_code || r.player_error_code),
                        (t.data.player_error_message = i.player_error_message || r.player_error_message),
                        (t.data.player_error_context = i.player_error_context || r.player_error_context),
                        (t.data.player_error_severity = i.player_error_severity || r.player_error_severity),
                        (t.data.player_error_business_exception =
                            i.player_error_business_exception || r.player_error_business_exception),
                        (n.viewErrored = !0));
                } catch (e) {
                    t.mux.log.warn("Exception in error translator callback.", e), (n.viewErrored = !0);
                }
            }),
            t.on("aftererror", function () {
                var e, n, r, i, a;
                null == (e = t.data) || delete e.player_error_code,
                    null == (n = t.data) || delete n.player_error_message,
                    null == (r = t.data) || delete r.player_error_context,
                    null == (i = t.data) || delete i.player_error_severity,
                    null == (a = t.data) || delete a.player_error_business_exception;
            });
    },
    eq = (function () {
        function e(t) {
            ea(this, e),
                el(this, "_watchTimeTrackerLastCheckedTime", void 0),
                el(this, "pm", void 0),
                (this.pm = t),
                (this._watchTimeTrackerLastCheckedTime = null),
                t.on("playbackheartbeat", this._updateWatchTime.bind(this)),
                t.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
        }
        return (
            eo(e, [
                {
                    key: "_updateWatchTime",
                    value: function (e, t) {
                        var n = t.viewer_time;
                        null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = n),
                            eC(this.pm.data, "view_watch_time", n - this._watchTimeTrackerLastCheckedTime),
                            (this._watchTimeTrackerLastCheckedTime = n);
                    },
                },
                {
                    key: "_clearWatchTimeState",
                    value: function (e, t) {
                        this._updateWatchTime(e, t), (this._watchTimeTrackerLastCheckedTime = null);
                    },
                },
            ]),
            e
        );
    })(),
    eX = (function () {
        function e(t) {
            var n = this;
            ea(this, e),
                el(this, "_playbackTimeTrackerLastPlayheadPosition", void 0),
                el(this, "_lastTime", void 0),
                el(this, "_isAdPlaying", void 0),
                el(this, "_callbackUpdatePlaybackTime", void 0),
                el(this, "pm", void 0),
                (this.pm = t),
                (this._playbackTimeTrackerLastPlayheadPosition = -1),
                (this._lastTime = B()),
                (this._isAdPlaying = !1),
                (this._callbackUpdatePlaybackTime = null),
                t.on("viewinit", function () {
                    n.pm.data.view_playing_time_ms_cumulative = 0;
                });
            var r = this._startPlaybackTimeTracking.bind(this);
            t.on("playing", r), t.on("adplaying", r), t.on("seeked", r), t.on("rebufferend", r);
            var i = this._stopPlaybackTimeTracking.bind(this);
            t.on("playbackheartbeatend", i),
                t.on("seeking", i),
                t.on("rebufferstart", i),
                t.on("adplaying", function () {
                    n._isAdPlaying = !0;
                }),
                t.on("adended", function () {
                    n._isAdPlaying = !1;
                }),
                t.on("adpause", function () {
                    n._isAdPlaying = !1;
                }),
                t.on("adbreakstart", function () {
                    n._isAdPlaying = !1;
                }),
                t.on("adbreakend", function () {
                    n._isAdPlaying = !1;
                }),
                t.on("adplay", function () {
                    n._isAdPlaying = !1;
                }),
                t.on("viewinit", function () {
                    (n._playbackTimeTrackerLastPlayheadPosition = -1),
                        (n._lastTime = B()),
                        (n._isAdPlaying = !1),
                        (n._callbackUpdatePlaybackTime = null);
                });
        }
        return (
            eo(e, [
                {
                    key: "_startPlaybackTimeTracking",
                    value: function () {
                        null === this._callbackUpdatePlaybackTime &&
                            ((this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this)),
                            (this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time),
                            (this._lastTime = B()),
                            this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime));
                    },
                },
                {
                    key: "_stopPlaybackTimeTracking",
                    value: function () {
                        this._callbackUpdatePlaybackTime &&
                            (this._updatePlaybackTime(),
                            this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime),
                            (this._callbackUpdatePlaybackTime = null),
                            (this._playbackTimeTrackerLastPlayheadPosition = -1));
                    },
                },
                {
                    key: "_updatePlaybackTime",
                    value: function () {
                        var e = this.pm.data.player_playhead_time || 0,
                            t = B(),
                            n = t - this._lastTime,
                            r = -1;
                        this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
                        e > this._playbackTimeTrackerLastPlayheadPosition
                            ? (r = e - this._playbackTimeTrackerLastPlayheadPosition)
                            : this._isAdPlaying && (r = n),
                            r > 0 && r <= 1e3 && eC(this.pm.data, "view_content_playback_time", r),
                            null !== this._callbackUpdatePlaybackTime &&
                                n > 0 &&
                                n <= 1e3 &&
                                (this._isAdPlaying && eC(this.pm.data, "ad_playing_time_ms_cumulative", n),
                                eC(this.pm.data, "view_playing_time_ms_cumulative", n)),
                            (this._playbackTimeTrackerLastPlayheadPosition = e),
                            (this._lastTime = t);
                    },
                },
            ]),
            e
        );
    })(),
    eZ = (function () {
        function e(t) {
            ea(this, e), el(this, "pm", void 0), (this.pm = t);
            var n = this._updatePlayheadTime.bind(this);
            t.on("playbackheartbeat", n),
                t.on("playbackheartbeatend", n),
                t.on("timeupdate", n),
                t.on("destroy", function () {
                    t.off("timeupdate", n);
                });
        }
        return (
            eo(e, [
                {
                    key: "_updateMaxPlayheadPosition",
                    value: function () {
                        this.pm.data.view_max_playhead_position =
                            void 0 === this.pm.data.view_max_playhead_position
                                ? this.pm.data.player_playhead_time
                                : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
                    },
                },
                {
                    key: "_updatePlayheadTime",
                    value: function (e, t) {
                        var n = this,
                            r = function () {
                                n.pm.currentFragmentPDT &&
                                    n.pm.currentFragmentStart &&
                                    (n.pm.data.player_program_time =
                                        n.pm.currentFragmentPDT +
                                        n.pm.data.player_playhead_time -
                                        n.pm.currentFragmentStart);
                            };
                        if (t && t.player_playhead_time)
                            (this.pm.data.player_playhead_time = t.player_playhead_time),
                                r(),
                                this._updateMaxPlayheadPosition();
                        else if (this.pm.getPlayheadTime) {
                            var i = this.pm.getPlayheadTime();
                            void 0 !== i &&
                                ((this.pm.data.player_playhead_time = i), r(), this._updateMaxPlayheadPosition());
                        }
                    },
                },
            ]),
            e
        );
    })(),
    eQ = 3e5,
    eJ = function e(t) {
        if ((ea(this, e), !t.disableRebufferTracking)) {
            var n,
                r = function (e, t) {
                    i(t), (n = void 0);
                },
                i = function (e) {
                    if (n) {
                        var r = e.viewer_time - n;
                        eC(t.data, "view_rebuffer_duration", r),
                            (n = e.viewer_time),
                            t.data.view_rebuffer_duration > eQ &&
                                (t.emit("viewend"),
                                t.send("viewend"),
                                t.mux.log.warn(
                                    "Ending view after rebuffering for longer than ".concat(
                                        eQ,
                                        "ms, future events will be ignored unless a programchange or videochange occurs.",
                                    ),
                                ));
                    }
                    t.data.view_watch_time >= 0 &&
                        t.data.view_rebuffer_count > 0 &&
                        ((t.data.view_rebuffer_frequency = t.data.view_rebuffer_count / t.data.view_watch_time),
                        (t.data.view_rebuffer_percentage = t.data.view_rebuffer_duration / t.data.view_watch_time));
                };
            t.on("playbackheartbeat", function (e, t) {
                return i(t);
            }),
                t.on("rebufferstart", function (e, i) {
                    n || (eC(t.data, "view_rebuffer_count", 1), (n = i.viewer_time), t.one("rebufferend", r));
                }),
                t.on("viewinit", function () {
                    (n = void 0), t.off("rebufferend", r);
                });
        }
    },
    e0 = (function () {
        function e(t) {
            var n = this;
            ea(this, e),
                el(this, "_lastCheckedTime", void 0),
                el(this, "_lastPlayheadTime", void 0),
                el(this, "_lastPlayheadTimeUpdatedTime", void 0),
                el(this, "_rebuffering", void 0),
                el(this, "pm", void 0),
                (this.pm = t),
                t.disableRebufferTracking ||
                    t.disablePlayheadRebufferTracking ||
                    ((this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null),
                    t.on("playbackheartbeat", this._checkIfRebuffering.bind(this)),
                    t.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)),
                    t.on("seeking", function () {
                        n._cleanupRebufferTracker(null, { viewer_time: B() });
                    }));
        }
        return (
            eo(e, [
                {
                    key: "_checkIfRebuffering",
                    value: function (e, t) {
                        if (
                            this.pm.seekingTracker.isSeeking ||
                            this.pm.adTracker.isAdBreak ||
                            !this.pm.playbackHeartbeat._playheadShouldBeProgressing
                        )
                            return void this._cleanupRebufferTracker(e, t);
                        if (null === this._lastCheckedTime)
                            return void this._prepareRebufferTrackerState(t.viewer_time);
                        if (this._lastPlayheadTime !== this.pm.data.player_playhead_time)
                            return void this._cleanupRebufferTracker(e, t, !0);
                        var n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                        "number" == typeof this.pm.sustainedRebufferThreshold &&
                            n >= this.pm.sustainedRebufferThreshold &&
                            (this._rebuffering ||
                                ((this._rebuffering = !0),
                                this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }))),
                            (this._lastCheckedTime = t.viewer_time);
                    },
                },
                {
                    key: "_clearRebufferTrackerState",
                    value: function () {
                        (this._lastCheckedTime = null),
                            (this._lastPlayheadTime = null),
                            (this._lastPlayheadTimeUpdatedTime = null);
                    },
                },
                {
                    key: "_prepareRebufferTrackerState",
                    value: function (e) {
                        (this._lastCheckedTime = e),
                            (this._lastPlayheadTime = this.pm.data.player_playhead_time),
                            (this._lastPlayheadTimeUpdatedTime = e);
                    },
                },
                {
                    key: "_cleanupRebufferTracker",
                    value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (this._rebuffering)
                            (this._rebuffering = !1), this.pm.emit("rebufferend", { viewer_time: t.viewer_time });
                        else {
                            if (null === this._lastCheckedTime) return;
                            var r = this.pm.data.player_playhead_time - this._lastPlayheadTime,
                                i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                            "number" == typeof this.pm.minimumRebufferDuration &&
                                r > 0 &&
                                i - r > this.pm.minimumRebufferDuration &&
                                ((this._lastCheckedTime = null),
                                this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }),
                                this.pm.emit("rebufferend", {
                                    viewer_time: this._lastPlayheadTimeUpdatedTime + i - r,
                                }));
                        }
                        n ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState();
                    },
                },
            ]),
            e
        );
    })(),
    e1 = (function () {
        function e(t) {
            var n = this;
            ea(this, e),
                el(this, "pm", void 0),
                (this.pm = t),
                t.on("viewinit", function () {
                    var e = t.data,
                        r = e.view_id;
                    if (!e.view_program_changed) {
                        var i = function (e, i) {
                            var a = i.viewer_time;
                            "playing" === e.type && void 0 === t.data.view_time_to_first_frame
                                ? n.calculateTimeToFirstFrame(a || B(), r)
                                : "adplaying" === e.type &&
                                  (void 0 === t.data.view_time_to_first_frame || n._inPrerollPosition()) &&
                                  n.calculateTimeToFirstFrame(a || B(), r);
                        };
                        t.one("playing", i),
                            t.one("adplaying", i),
                            t.one("viewend", function () {
                                t.off("playing", i), t.off("adplaying", i);
                            });
                    }
                });
        }
        return (
            eo(e, [
                {
                    key: "_inPrerollPosition",
                    value: function () {
                        return (
                            void 0 === this.pm.data.view_content_playback_time ||
                            this.pm.data.view_content_playback_time <= 1e3
                        );
                    },
                },
                {
                    key: "calculateTimeToFirstFrame",
                    value: function (e, t) {
                        t === this.pm.data.view_id &&
                            (this.pm.watchTimeTracker._updateWatchTime(null, { viewer_time: e }),
                            (this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time),
                            (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) &&
                                this.pm.pageLoadInitTime &&
                                (this.pm.data.view_aggregate_startup_time =
                                    this.pm.data.view_start + this.pm.data.view_watch_time - this.pm.pageLoadInitTime));
                    },
                },
            ]),
            e
        );
    })(),
    e2 = function e(t) {
        var n = this;
        ea(this, e),
            el(this, "_lastPlayerHeight", void 0),
            el(this, "_lastPlayerWidth", void 0),
            el(this, "_lastPlayheadPosition", void 0),
            el(this, "_lastSourceHeight", void 0),
            el(this, "_lastSourceWidth", void 0),
            t.on("viewinit", function () {
                n._lastPlayheadPosition = -1;
            });
        var r = ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"];
        [
            "pause",
            "rebufferstart",
            "seeking",
            "error",
            "adbreakstart",
            "hb",
            "renditionchange",
            "orientationchange",
            "viewend",
            "playbackmodechange",
        ].forEach(function (e) {
            t.on(e, function () {
                if (
                    n._lastPlayheadPosition >= 0 &&
                    t.data.player_playhead_time >= 0 &&
                    n._lastPlayerWidth >= 0 &&
                    n._lastSourceWidth > 0 &&
                    n._lastPlayerHeight >= 0 &&
                    n._lastSourceHeight > 0
                ) {
                    var e = t.data.player_playhead_time - n._lastPlayheadPosition;
                    if (e < 0) {
                        n._lastPlayheadPosition = -1;
                        return;
                    }
                    var r = Math.min(
                            n._lastPlayerWidth / n._lastSourceWidth,
                            n._lastPlayerHeight / n._lastSourceHeight,
                        ),
                        i = Math.max(0, r - 1),
                        a = Math.max(0, 1 - r);
                    (t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, i)),
                        (t.data.view_max_downscale_percentage = Math.max(t.data.view_max_downscale_percentage || 0, a)),
                        eC(t.data, "view_total_content_playback_time", e),
                        eC(t.data, "view_total_upscaling", i * e),
                        eC(t.data, "view_total_downscaling", a * e);
                }
                n._lastPlayheadPosition = -1;
            });
        }),
            r.forEach(function (e) {
                t.on(e, function () {
                    (n._lastPlayheadPosition = t.data.player_playhead_time),
                        (n._lastPlayerWidth = t.data.player_width),
                        (n._lastPlayerHeight = t.data.player_height),
                        (n._lastSourceWidth = t.data.video_source_width),
                        (n._lastSourceHeight = t.data.video_source_height);
                });
            });
    },
    e3 = 2e3,
    e6 = function e(t) {
        var n = this;
        ea(this, e), el(this, "isSeeking", void 0), (this.isSeeking = !1);
        var r = -1,
            i = function () {
                var e = B(),
                    i = (t.data.viewer_time || e) - (r || e);
                eC(t.data, "view_seek_duration", i),
                    (t.data.view_max_seek_time = Math.max(t.data.view_max_seek_time || 0, i)),
                    (n.isSeeking = !1),
                    (r = -1);
            };
        t.on("seeking", function (e, a) {
            if ((Object.assign(t.data, a), n.isSeeking && a.viewer_time - r <= e3)) {
                r = a.viewer_time;
                return;
            }
            n.isSeeking && i(),
                (n.isSeeking = !0),
                (r = a.viewer_time),
                eC(t.data, "view_seek_count", 1),
                t.send("seeking");
        }),
            t.on("seeked", function () {
                i();
            }),
            t.on("viewend", function () {
                n.isSeeking && (i(), t.send("seeked")), (n.isSeeking = !1), (r = -1);
            });
    },
    e4 = function (e, t) {
        e.push(t),
            e.sort(function (e, t) {
                return e.viewer_time - t.viewer_time;
            });
    },
    e5 = [
        "adbreakstart",
        "adrequest",
        "adresponse",
        "adplay",
        "adplaying",
        "adpause",
        "adended",
        "adbreakend",
        "aderror",
        "adclicked",
        "adskipped",
    ],
    e7 = (function () {
        function e(t) {
            var n = this;
            ea(this, e),
                el(this, "_adHasPlayed", void 0),
                el(this, "_adRequests", void 0),
                el(this, "_adResponses", void 0),
                el(this, "_currentAdRequestNumber", void 0),
                el(this, "_currentAdResponseNumber", void 0),
                el(this, "_prerollPlayTime", void 0),
                el(this, "_wouldBeNewAdPlay", void 0),
                el(this, "isAdBreak", void 0),
                el(this, "pm", void 0),
                (this.pm = t),
                t.on("viewinit", function () {
                    (n.isAdBreak = !1),
                        (n._currentAdRequestNumber = 0),
                        (n._currentAdResponseNumber = 0),
                        (n._adRequests = []),
                        (n._adResponses = []),
                        (n._adHasPlayed = !1),
                        (n._wouldBeNewAdPlay = !0),
                        (n._prerollPlayTime = void 0);
                }),
                e5.forEach(function (e) {
                    return t.on(e, n._updateAdData.bind(n));
                });
            var r = function () {
                n.isAdBreak = !1;
            };
            t.on("adbreakstart", function () {
                n.isAdBreak = !0;
            }),
                t.on("play", r),
                t.on("playing", r),
                t.on("viewend", r),
                t.on("adrequest", function (e, r) {
                    (r = Object.assign({ ad_request_id: "generatedAdRequestId" + n._currentAdRequestNumber++ }, r)),
                        e4(n._adRequests, r),
                        eC(t.data, "view_ad_request_count"),
                        n.inPrerollPosition() &&
                            ((t.data.view_preroll_requested = !0),
                            n._adHasPlayed || eC(t.data, "view_preroll_request_count"));
                }),
                t.on("adresponse", function (e, r) {
                    (r = Object.assign({ ad_request_id: "generatedAdRequestId" + n._currentAdResponseNumber++ }, r)),
                        e4(n._adResponses, r);
                    var i = n.findAdRequest(r.ad_request_id);
                    i && eC(t.data, "view_ad_request_time", Math.max(0, r.viewer_time - i.viewer_time));
                }),
                t.on("adplay", function (e, r) {
                    (n._adHasPlayed = !0),
                        n._wouldBeNewAdPlay && ((n._wouldBeNewAdPlay = !1), eC(t.data, "view_ad_played_count")),
                        n.inPrerollPosition() &&
                            !t.data.view_preroll_played &&
                            ((t.data.view_preroll_played = !0),
                            n._adRequests.length > 0 &&
                                (t.data.view_preroll_request_time = Math.max(
                                    0,
                                    r.viewer_time - n._adRequests[0].viewer_time,
                                )),
                            t.data.view_start &&
                                (t.data.view_startup_preroll_request_time = Math.max(
                                    0,
                                    r.viewer_time - t.data.view_start,
                                )),
                            (n._prerollPlayTime = r.viewer_time));
                }),
                t.on("adplaying", function (e, r) {
                    n.inPrerollPosition() &&
                        void 0 === t.data.view_preroll_load_time &&
                        void 0 !== n._prerollPlayTime &&
                        ((t.data.view_preroll_load_time = r.viewer_time - n._prerollPlayTime),
                        (t.data.view_startup_preroll_load_time = r.viewer_time - n._prerollPlayTime));
                }),
                t.on("adclicked", function (e, r) {
                    n._wouldBeNewAdPlay || eC(t.data, "view_ad_clicked_count");
                }),
                t.on("adskipped", function (e, r) {
                    n._wouldBeNewAdPlay || eC(t.data, "view_ad_skipped_count");
                }),
                t.on("adended", function () {
                    n._wouldBeNewAdPlay = !0;
                }),
                t.on("aderror", function () {
                    n._wouldBeNewAdPlay = !0;
                });
        }
        return (
            eo(e, [
                {
                    key: "inPrerollPosition",
                    value: function () {
                        return (
                            void 0 === this.pm.data.view_content_playback_time ||
                            this.pm.data.view_content_playback_time <= 1e3
                        );
                    },
                },
                {
                    key: "findAdRequest",
                    value: function (e) {
                        for (var t = 0; t < this._adRequests.length; t++)
                            if (this._adRequests[t].ad_request_id === e) return this._adRequests[t];
                    },
                },
                {
                    key: "_updateAdData",
                    value: function (e, t) {
                        if (this.inPrerollPosition()) {
                            if (!this.pm.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                                var n = U(eI(t.ad_tag_url), 2),
                                    r = n[0],
                                    i = n[1];
                                (this.pm.data.view_preroll_ad_tag_domain = i),
                                    (this.pm.data.view_preroll_ad_tag_hostname = r);
                            }
                            if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                var a = U(eI(t.ad_asset_url), 2),
                                    s = a[0],
                                    o = a[1];
                                (this.pm.data.view_preroll_ad_asset_domain = o),
                                    (this.pm.data.view_preroll_ad_asset_hostname = s);
                            }
                            this.pm.data.ad_type = "preroll";
                        }
                        (this.pm.data.ad_asset_url = null == t ? void 0 : t.ad_asset_url),
                            (this.pm.data.ad_tag_url = null == t ? void 0 : t.ad_tag_url),
                            (this.pm.data.ad_creative_id = null == t ? void 0 : t.ad_creative_id),
                            (this.pm.data.ad_id = null == t ? void 0 : t.ad_id),
                            (this.pm.data.ad_universal_id = null == t ? void 0 : t.ad_universal_id),
                            null != t && t.ad_type && (this.pm.data.ad_type = null == t ? void 0 : t.ad_type);
                    },
                },
            ]),
            e
        );
    })(),
    e8 = function e(t) {
        var n = this;
        ea(this, e), el(this, "lastWallClockTime", void 0);
        var r = function () {
                (n.lastWallClockTime = B()), t.on("before*", i);
            },
            i = function (e) {
                var r = B(),
                    i = n.lastWallClockTime;
                (n.lastWallClockTime = r),
                    r - i > 3e4 &&
                        (t.emit("devicesleep", { viewer_time: i }),
                        Object.assign(t.data, { viewer_time: i }),
                        t.send("devicesleep"),
                        t.emit("devicewake", { viewer_time: r }),
                        Object.assign(t.data, { viewer_time: r }),
                        t.send("devicewake"));
            };
        t.one("playbackheartbeat", r),
            t.on("playbackheartbeatend", function () {
                t.off("before*", i), t.one("playbackheartbeat", r);
            });
    },
    e9 = _(f()),
    te = (function (e) {
        return e();
    })(function () {
        var e = function () {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r];
            }
            return t;
        };
        function t(n) {
            function r(t, i, a) {
                var s;
                if ("u" > typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof (a = e({ path: "/" }, r.defaults, a)).expires) {
                            var o = new Date();
                            o.setMilliseconds(o.getMilliseconds() + 864e5 * a.expires), (a.expires = o);
                        }
                        try {
                            (s = JSON.stringify(i)), /^[\{\[]/.test(s) && (i = s);
                        } catch (e) {}
                        return (
                            (i = n.write
                                ? n.write(i, t)
                                : encodeURIComponent(String(i)).replace(
                                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                      decodeURIComponent,
                                  )),
                            (t = (t = (t = encodeURIComponent(String(t))).replace(
                                /%(23|24|26|2B|5E|60|7C)/g,
                                decodeURIComponent,
                            )).replace(/[\(\)]/g, escape)),
                            (document.cookie =
                                t +
                                "=" +
                                i +
                                (a.expires ? "; expires=" + a.expires.toUTCString() : "") +
                                (a.path ? "; path=" + a.path : "") +
                                (a.domain ? "; domain=" + a.domain : "") +
                                (a.secure ? "; secure" : ""))
                        );
                    }
                    t || (s = {});
                    for (
                        var l = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, c = 0;
                        c < l.length;
                        c++
                    ) {
                        var d = l[c].split("="),
                            _ = d.slice(1).join("=");
                        '"' === _.charAt(0) && (_ = _.slice(1, -1));
                        try {
                            var f = d[0].replace(u, decodeURIComponent);
                            if (((_ = n.read ? n.read(_, f) : n(_, f) || _.replace(u, decodeURIComponent)), this.json))
                                try {
                                    _ = JSON.parse(_);
                                } catch (e) {}
                            if (t === f) {
                                s = _;
                                break;
                            }
                            t || (s[f] = _);
                        } catch (e) {}
                    }
                    return s;
                }
            }
            return (
                (r.set = r),
                (r.get = function (e) {
                    return r.call(r, e);
                }),
                (r.getJSON = function () {
                    return r.apply({ json: !0 }, [].slice.call(arguments));
                }),
                (r.defaults = {}),
                (r.remove = function (t, n) {
                    r(t, "", e(n, { expires: -1 }));
                }),
                (r.withConverter = t),
                r
            );
        }
        return t(function () {});
    }),
    tt = "muxData",
    tn = function (e) {
        return Object.entries(e)
            .map(function (e) {
                var t = U(e, 2),
                    n = t[0],
                    r = t[1];
                return "".concat(n, "=").concat(r);
            })
            .join("&");
    },
    tr = function (e) {
        return e.split("&").reduce(function (e, t) {
            var n = U(t.split("="), 2),
                r = n[0],
                i = n[1],
                a = +i,
                s = i && a == i ? a : i;
            return (e[r] = s), e;
        }, {});
    },
    ti = function () {
        var e;
        try {
            e = tr(te.get(tt) || "");
        } catch (t) {
            e = {};
        }
        return e;
    },
    ta = function (e) {
        try {
            te.set(tt, tn(e), { expires: 365 });
        } catch (e) {}
    },
    ts = function () {
        var e = ti();
        return (
            (e.mux_viewer_id = e.mux_viewer_id || j()),
            (e.msn = e.msn || Math.random()),
            ta(e),
            { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
        );
    },
    to = function () {
        var e = ti(),
            t = B();
        return (
            e.session_start && ((e.sst = e.session_start), delete e.session_start),
            e.session_id && ((e.sid = e.session_id), delete e.session_id),
            e.session_expires && ((e.sex = e.session_expires), delete e.session_expires),
            (!e.sex || e.sex < t) && ((e.sid = j()), (e.sst = t)),
            (e.sex = t + 15e5),
            ta(e),
            { session_id: e.sid, session_start: e.sst, session_expires: e.sex }
        );
    };
function tl(e, t) {
    var n = t.beaconCollectionDomain,
        r = t.beaconDomain;
    if (n) return "https://" + n;
    var i = r || "litix.io";
    return (e = e || "inferred").match(/^[a-z0-9]+$/) ? "https://" + e + "." + i : "https://img.litix.io/a.gif";
}
var tu = _(f()),
    tc = function () {
        var e;
        switch (td()) {
            case "cellular":
                e = "cellular";
                break;
            case "ethernet":
                e = "wired";
                break;
            case "wifi":
                e = "wifi";
                break;
            case void 0:
                break;
            default:
                e = "other";
        }
        return e;
    },
    td = function () {
        var e = tu.default.navigator,
            t = e && (e.connection || e.mozConnection || e.webkitConnection);
        return t && t.type;
    };
tc.getConnectionFromAPI = td;
var t_ = tc,
    tf = tp({
        a: "env",
        b: "beacon",
        c: "custom",
        d: "ad",
        e: "event",
        f: "experiment",
        i: "internal",
        m: "mux",
        n: "response",
        p: "player",
        q: "request",
        r: "retry",
        s: "session",
        t: "timestamp",
        u: "viewer",
        v: "video",
        w: "page",
        x: "view",
        y: "sub",
    }),
    th = tp({
        ad: "ad",
        af: "affiliate",
        ag: "aggregate",
        ap: "api",
        al: "application",
        ao: "audio",
        ar: "architecture",
        as: "asset",
        au: "autoplay",
        av: "average",
        bi: "bitrate",
        bn: "brand",
        br: "break",
        bw: "browser",
        by: "bytes",
        bz: "business",
        ca: "cached",
        cb: "cancel",
        cc: "codec",
        cd: "code",
        cg: "category",
        ch: "changed",
        ci: "client",
        ck: "clicked",
        cl: "canceled",
        cm: "cmcd",
        cn: "config",
        co: "count",
        ce: "counter",
        cp: "complete",
        cq: "creator",
        cr: "creative",
        cs: "captions",
        ct: "content",
        cu: "current",
        cv: "cumulative",
        cx: "connection",
        cz: "context",
        da: "data",
        dg: "downscaling",
        dm: "domain",
        dn: "cdn",
        do: "downscale",
        dr: "drm",
        dp: "dropped",
        du: "duration",
        dv: "device",
        dy: "dynamic",
        eb: "enabled",
        ec: "encoding",
        ed: "edge",
        en: "end",
        eg: "engine",
        em: "embed",
        er: "error",
        ep: "experiments",
        es: "errorcode",
        et: "errortext",
        ee: "event",
        ev: "events",
        ex: "expires",
        ez: "exception",
        fa: "failed",
        fi: "first",
        fm: "family",
        ft: "format",
        fp: "fps",
        fq: "frequency",
        fr: "frame",
        fs: "fullscreen",
        ha: "has",
        hb: "holdback",
        he: "headers",
        ho: "host",
        hn: "hostname",
        ht: "height",
        id: "id",
        ii: "init",
        in: "instance",
        ip: "ip",
        is: "is",
        ke: "key",
        la: "language",
        lb: "labeled",
        le: "level",
        li: "live",
        ld: "loaded",
        lo: "load",
        ls: "lists",
        lt: "latency",
        ma: "max",
        md: "media",
        me: "message",
        mf: "manifest",
        mi: "mime",
        ml: "midroll",
        mm: "min",
        mn: "manufacturer",
        mo: "model",
        mp: "mode",
        ms: "ms",
        mx: "mux",
        ne: "newest",
        nm: "name",
        no: "number",
        on: "on",
        or: "origin",
        os: "os",
        pa: "paused",
        pb: "playback",
        pd: "producer",
        pe: "percentage",
        pf: "played",
        pg: "program",
        ph: "playhead",
        pi: "plugin",
        pl: "preroll",
        pn: "playing",
        po: "poster",
        pp: "pip",
        pr: "preload",
        ps: "position",
        pt: "part",
        pv: "previous",
        py: "property",
        px: "pop",
        pz: "plan",
        ra: "rate",
        rd: "requested",
        re: "rebuffer",
        rf: "rendition",
        rg: "range",
        rm: "remote",
        ro: "ratio",
        rp: "response",
        rq: "request",
        rs: "requests",
        sa: "sample",
        sd: "skipped",
        se: "session",
        sh: "shift",
        sk: "seek",
        sm: "stream",
        so: "source",
        sq: "sequence",
        sr: "series",
        ss: "status",
        st: "start",
        su: "startup",
        sv: "server",
        sw: "software",
        sy: "severity",
        ta: "tag",
        tc: "tech",
        te: "text",
        tg: "target",
        th: "throughput",
        ti: "time",
        tl: "total",
        to: "to",
        tt: "title",
        ty: "type",
        ug: "upscaling",
        un: "universal",
        up: "upscale",
        ur: "url",
        us: "user",
        va: "variant",
        vd: "viewed",
        vi: "video",
        ve: "version",
        vw: "view",
        vr: "viewer",
        wd: "width",
        wa: "watch",
        wt: "waiting",
    });
function tp(e) {
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
    return t;
}
function tm(e) {
    var t = {},
        n = {};
    return (
        Object.keys(e).forEach(function (r) {
            var i = !1;
            if (e.hasOwnProperty(r) && void 0 !== e[r]) {
                var a = r.split("_"),
                    s = a[0],
                    o = tf[s];
                o || (et.info("Data key word `" + a[0] + "` not expected in " + r), (o = s + "_")),
                    a.splice(1).forEach(function (e) {
                        "url" === e && (i = !0),
                            th[e]
                                ? (o += th[e])
                                : Number.isInteger(Number(e))
                                  ? (o += e)
                                  : (et.info("Data key word `" + e + "` not expected in " + r), (o += "_" + e + "_"));
                    }),
                    i ? (n[o] = e[r]) : (t[o] = e[r]);
            }
        }),
        Object.assign(t, n)
    );
}
var tg = _(f()),
    tE = _(L()),
    tA = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 1e4, maxPayloadKBSize: 500 },
    tI = 57344,
    tT = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
    ty = "https://img.litix.io",
    tS = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this._beaconUrl = e || ty),
            (this._eventQueue = []),
            (this._postInFlight = !1),
            (this._resendAfterPost = !1),
            (this._failureCount = 0),
            (this._sendTimeout = !1),
            (this._options = Object.assign({}, tA, t));
    };
(tS.prototype.queueEvent = function (e, t) {
    var n = Object.assign({}, t);
    return (
        (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) &&
        (this._eventQueue.push(n),
        this._sendTimeout || this._startBeaconSending(),
        this._eventQueue.length <= this._options.maxQueueLength)
    );
}),
    (tS.prototype.flushEvents = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e && 1 === this._eventQueue.length
            ? this._eventQueue.pop()
            : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
    }),
    (tS.prototype.destroy = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.destroyed = !0),
            e ? this._clearBeaconQueue() : this.flushEvents(),
            tg.default.clearTimeout(this._sendTimeout);
    }),
    (tS.prototype._clearBeaconQueue = function () {
        var e =
                this._eventQueue.length > this._options.maxBeaconSize
                    ? this._eventQueue.length - this._options.maxBeaconSize
                    : 0,
            t = this._eventQueue.slice(e);
        e > 0 && Object.assign(t[t.length - 1], tm({ mux_view_message: "event queue truncated" }));
        var n = this._createPayload(t);
        tC(this._beaconUrl, n, !0, function () {});
    }),
    (tS.prototype._sendBeaconQueue = function () {
        var e = this;
        if (this._postInFlight) {
            this._resendAfterPost = !0;
            return;
        }
        var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
        (this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize)), (this._postInFlight = !0);
        var n = this._createPayload(t),
            r = B();
        tC(this._beaconUrl, n, !1, function (n, i) {
            i
                ? ((e._eventQueue = t.concat(e._eventQueue)),
                  (e._failureCount += 1),
                  et.info("Error sending beacon: " + i))
                : (e._failureCount = 0),
                (e._roundTripTime = B() - r),
                (e._postInFlight = !1),
                e._resendAfterPost && ((e._resendAfterPost = !1), e._eventQueue.length > 0 && e._sendBeaconQueue());
        });
    }),
    (tS.prototype._getNextBeaconTime = function () {
        if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
        var e = Math.pow(2, this._failureCount - 1);
        return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons;
    }),
    (tS.prototype._startBeaconSending = function () {
        var e = this;
        tg.default.clearTimeout(this._sendTimeout),
            this.destroyed ||
                (this._sendTimeout = tg.default.setTimeout(function () {
                    e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending();
                }, this._getNextBeaconTime()));
    }),
    (tS.prototype._createPayload = function (e) {
        var t = this,
            n = { transmission_timestamp: Math.round(B()) };
        this._roundTripTime && (n.rtt_ms = Math.round(this._roundTripTime));
        var r,
            i,
            a,
            s = function () {
                a = (r = JSON.stringify({ metadata: n, events: i || e })).length / 1024;
            },
            o = function () {
                return a <= t._options.maxPayloadKBSize;
            };
        return (
            s(),
            o() ||
                (et.info("Payload size is too big (" + a + " kb). Removing unnecessary events."),
                (i = e.filter(function (e) {
                    return -1 === tT.indexOf(e.e);
                })),
                s()),
            o() ||
                (et.info("Payload size still too big (" + a + " kb). Cropping fields.."),
                i.forEach(function (e) {
                    for (var t in e) {
                        var n = e[t],
                            r = 51200;
                        "string" == typeof n && n.length > r && (e[t] = n.substring(0, r));
                    }
                }),
                s()),
            r
        );
    });
var tv =
        "function" == typeof tE.default.exitPictureInPicture
            ? function (e) {
                  return e.length <= tI;
              }
            : function (e) {
                  return !1;
              },
    tC = function (e, t, n, r) {
        if (n && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) return void r();
        if (tg.default.fetch)
            return void tg.default
                .fetch(e, { method: "POST", body: t, headers: { "Content-Type": "text/plain" }, keepalive: tv(t) })
                .then(function (e) {
                    return r(null, e.ok ? null : "Error");
                })
                .catch(function (e) {
                    return r(null, e);
                });
        if (tg.default.XMLHttpRequest) {
            var i = new tg.default.XMLHttpRequest();
            (i.onreadystatechange = function () {
                if (4 === i.readyState) return r(null, 200 !== i.status ? "error" : void 0);
            }),
                i.open("POST", e),
                i.setRequestHeader("Content-Type", "text/plain"),
                i.send(t);
            return;
        }
        r();
    },
    tb = tS,
    tN = [
        "env_key",
        "view_id",
        "view_sequence_number",
        "player_sequence_number",
        "beacon_domain",
        "player_playhead_time",
        "viewer_time",
        "mux_api_version",
        "event",
        "video_id",
        "player_instance_id",
        "player_error_code",
        "player_error_message",
        "player_error_context",
        "player_error_severity",
        "player_error_business_exception",
        "view_playing_time_ms_cumulative",
        "ad_playing_time_ms_cumulative",
    ],
    tR = [
        "adplay",
        "adplaying",
        "adpause",
        "adfirstquartile",
        "admidpoint",
        "adthirdquartile",
        "adended",
        "adresponse",
        "adrequest",
    ],
    tO = ["ad_id", "ad_creative_id", "ad_universal_id"],
    tD = ["viewstart", "error", "ended", "viewend"],
    tL = 6e5,
    tw = (function () {
        function e(t, n) {
            var r,
                i,
                a,
                s,
                o,
                l,
                u,
                c,
                d,
                _,
                f,
                h,
                p,
                g,
                E,
                A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ea(this, e),
                el(this, "mux", void 0),
                el(this, "envKey", void 0),
                el(this, "options", void 0),
                el(this, "eventQueue", void 0),
                el(this, "sampleRate", void 0),
                el(this, "disableCookies", void 0),
                el(this, "respectDoNotTrack", void 0),
                el(this, "previousBeaconData", void 0),
                el(this, "lastEventTime", void 0),
                el(this, "rateLimited", void 0),
                el(this, "pageLevelData", void 0),
                el(this, "viewerData", void 0),
                (this.mux = t),
                (this.envKey = n),
                (this.options = A),
                (this.previousBeaconData = null),
                (this.lastEventTime = 0),
                (this.rateLimited = !1),
                (this.eventQueue = new tb(tl(this.envKey, this.options))),
                (this.sampleRate = null != (p = this.options.sampleRate) ? p : 1),
                (this.disableCookies = null != (g = this.options.disableCookies) && g),
                (this.respectDoNotTrack = null != (E = this.options.respectDoNotTrack) && E),
                (this.previousBeaconData = null),
                (this.lastEventTime = 0),
                (this.rateLimited = !1),
                (this.pageLevelData = {
                    mux_api_version: this.mux.API_VERSION,
                    mux_embed: this.mux.NAME,
                    mux_embed_version: this.mux.VERSION,
                    viewer_application_name: null == (r = this.options.platform) ? void 0 : r.name,
                    viewer_application_version: null == (i = this.options.platform) ? void 0 : i.version,
                    viewer_application_engine: null == (a = this.options.platform) ? void 0 : a.layout,
                    viewer_device_name: null == (s = this.options.platform) ? void 0 : s.product,
                    viewer_device_category: "",
                    viewer_device_manufacturer: null == (o = this.options.platform) ? void 0 : o.manufacturer,
                    viewer_os_family: null == (u = this.options.platform) || null == (l = u.os) ? void 0 : l.family,
                    viewer_os_architecture:
                        null == (d = this.options.platform) || null == (c = d.os) ? void 0 : c.architecture,
                    viewer_os_version: null == (f = this.options.platform) || null == (_ = f.os) ? void 0 : _.version,
                    viewer_connection_type: t_(),
                    page_url:
                        null === e9.default || void 0 === e9.default || null == (h = e9.default.location)
                            ? void 0
                            : h.href,
                }),
                (this.viewerData = this.disableCookies ? {} : ts());
        }
        return (
            eo(e, [
                {
                    key: "send",
                    value: function (e, t) {
                        if (!(!e || !(null != t && t.view_id))) {
                            if (this.respectDoNotTrack && er())
                                return et.info("Not sending `" + e + "` because Do Not Track is enabled");
                            if (!t || "object" != typeof t)
                                return et.error("A data object was expected in send() but was not provided");
                            var n = this.disableCookies ? {} : to(),
                                r = eR(eb({}, this.pageLevelData, t, n, this.viewerData), {
                                    event: e,
                                    env_key: this.envKey,
                                });
                            r.user_id && ((r.viewer_user_id = r.user_id), delete r.user_id);
                            var i,
                                a = (null != (i = r.mux_sample_number) ? i : 0) >= this.sampleRate,
                                s = tm(this._deduplicateBeaconData(e, r));
                            if (((this.lastEventTime = this.mux.utils.now()), a))
                                return et.info("Not sending event due to sample rate restriction", e, r, s);
                            if (
                                (this.envKey ||
                                    et.info(
                                        "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
                                        e,
                                        r,
                                        s,
                                    ),
                                !this.rateLimited)
                            )
                                if (
                                    (et.info("Sending event", e, r, s),
                                    (this.rateLimited = !this.eventQueue.queueEvent(e, s)),
                                    this.mux.WINDOW_UNLOADING && "viewend" === e)
                                )
                                    this.eventQueue.destroy(!0);
                                else {
                                    if (this.mux.WINDOW_HIDDEN && "hb" === e) this.eventQueue.flushEvents(!0);
                                    else if (tD.indexOf(e) >= 0) {
                                        if ("error" === e && "warning" === t.player_error_severity) return;
                                        this.eventQueue.flushEvents();
                                    }
                                    if (this.rateLimited)
                                        return (
                                            (r.event = "eventrateexceeded"),
                                            (s = tm(r)),
                                            this.eventQueue.queueEvent(r.event, s),
                                            et.error("Beaconing disabled due to rate limit.")
                                        );
                                }
                        }
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        this.eventQueue.destroy(!1);
                    },
                },
                {
                    key: "_deduplicateBeaconData",
                    value: function (e, t) {
                        var n = this,
                            r = {},
                            i = t.view_id;
                        if (
                            "-1" === i ||
                            "viewstart" === e ||
                            "viewend" === e ||
                            !this.previousBeaconData ||
                            this.mux.utils.now() - this.lastEventTime >= tL
                        )
                            (r = eb({}, t)),
                                i && (this.previousBeaconData = r),
                                i && "viewend" === e && (this.previousBeaconData = null);
                        else {
                            var a = 0 === e.indexOf("request");
                            Object.entries(t).forEach(function (t) {
                                var i = U(t, 2),
                                    s = i[0],
                                    o = i[1];
                                n.previousBeaconData &&
                                    (o !== n.previousBeaconData[s] ||
                                        tN.indexOf(s) > -1 ||
                                        n.objectHasChanged(a, s, o, n.previousBeaconData[s]) ||
                                        n.eventRequiresKey(e, s)) &&
                                    ((r[s] = o), (n.previousBeaconData[s] = o));
                            });
                        }
                        return r;
                    },
                },
                {
                    key: "objectHasChanged",
                    value: function (e, t, n, r) {
                        return (
                            !!e &&
                            0 === t.indexOf("request_") &&
                            ("request_response_headers" === t ||
                                "object" != typeof n ||
                                "object" != typeof r ||
                                Object.keys(n || {}).length !== Object.keys(r || {}).length)
                        );
                    },
                },
                {
                    key: "eventRequiresKey",
                    value: function (e, t) {
                        return !!(
                            ("renditionchange" === e && 0 === t.indexOf("video_source_")) ||
                            (tO.includes(t) && tR.includes(e))
                        );
                    },
                },
            ]),
            e
        );
    })(),
    tx = function e(t) {
        ea(this, e);
        var n = 0,
            r = 0,
            i = 0,
            a = 0,
            s = 0,
            o = 0,
            l = 0,
            u = function (e, o) {
                var l,
                    u,
                    c = o.request_start,
                    d = o.request_response_start,
                    _ = o.request_response_end,
                    f = o.request_bytes_loaded;
                if (
                    (a++,
                    d
                        ? ((l = d - (null != c ? c : 0)), (u = (null != _ ? _ : 0) - d))
                        : (u = (null != _ ? _ : 0) - (null != c ? c : 0)),
                    u > 0 && f && f > 0)
                ) {
                    var h = (f / u) * 8e3;
                    s++,
                        (r += f),
                        (i += u),
                        (t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, h)),
                        (t.data.view_average_request_throughput = (r / i) * 8e3),
                        (t.data.view_request_count = a),
                        l > 0 &&
                            ((n += l),
                            (t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, l)),
                            (t.data.view_average_request_latency = n / s));
                }
            },
            c = function (e, n) {
                a++, o++, (t.data.view_request_count = a), (t.data.view_request_failed_count = o);
            },
            d = function (e, n) {
                a++, l++, (t.data.view_request_count = a), (t.data.view_request_canceled_count = l);
            };
        t.on("requestcompleted", u), t.on("requestfailed", c), t.on("requestcanceled", d);
    },
    tP = 36e5,
    tM = function e(t) {
        var n = this;
        ea(this, e),
            el(this, "_lastEventTime", void 0),
            t.on("before*", function (e, r) {
                var i = r.viewer_time,
                    a = B(),
                    s = n._lastEventTime;
                if (((n._lastEventTime = a), s && a - s > tP)) {
                    var o = Object.keys(t.data).reduce(function (e, n) {
                        return 0 === n.indexOf("video_") ? Object.assign(e, el({}, n, t.data[n])) : e;
                    }, {});
                    t.mux.log.info("Received event after at least an hour inactivity, creating a new view");
                    var l = t.playbackHeartbeat._playheadShouldBeProgressing;
                    t._resetView(Object.assign({ viewer_time: i }, o)),
                        (t.playbackHeartbeat._playheadShouldBeProgressing = l),
                        t.playbackHeartbeat._playheadShouldBeProgressing &&
                            "play" !== e.type &&
                            "adbreakstart" !== e.type &&
                            (t.emit("play", { viewer_time: i }),
                            "playing" !== e.type && t.emit("playing", { viewer_time: i }));
                }
            });
    };
function tk(e, t) {
    return (null == e ? void 0 : e.toLowerCase()) === (null == t ? void 0 : t.toLowerCase());
}
function tU(e) {
    var t;
    return null != e &&
        e.request_type &&
        ("media" === e.request_type || "video" === e.request_type) &&
        null != (t = e.request_response_headers) &&
        t["x-cdn"]
        ? e.request_response_headers["x-cdn"]
        : null != e && e.video_cdn
          ? e.video_cdn
          : null;
}
function tG(e) {
    return null != e && e.request_start ? e.request_start : null != e && e.viewer_time ? e.viewer_time : Date.now();
}
var tF = function e(t) {
        ea(this, e);
        var n = function (e) {
                var n = tU(e),
                    r = tG(e);
                if (null != n && !tk(n, a) && s <= r) {
                    (a = n), (s = r);
                    var i = { video_cdn: n };
                    t.emit("cdnchange", i);
                }
            },
            r = null,
            i = null,
            a = null,
            s = 0;
        t.on("viewinit", function () {
            (r = null), (i = null), (a = null), (s = 0);
        }),
            t.on("beforecdnchange", function (e, t) {
                var n = null == t ? void 0 : t.video_cdn;
                n &&
                    (void 0 === t.video_previous_cdn || null === t.video_previous_cdn) &&
                    (tk(n, i)
                        ? (t.video_previous_cdn = null != r ? r : void 0)
                        : ((t.video_previous_cdn = null != i ? i : void 0), (r = i), (i = n)));
            }),
            t.on("requestcompleted", function (e, t) {
                n(t);
            });
    },
    tV = function (e) {
        try {
            return JSON.parse(e), !0;
        } catch (e) {
            return !1;
        }
    },
    tB = function e(t) {
        var n = this;
        ea(this, e),
            el(this, "_emittingAutomaticEvent", !1),
            el(this, "_hasInitialized", !1),
            t.on("viewstart", function () {
                n._hasInitialized ||
                    ((n._hasInitialized = !0),
                    (n._emittingAutomaticEvent = !0),
                    t.emit("playbackmodechange", { player_playback_mode: "standard", player_playback_mode_data: "{}" }),
                    (n._emittingAutomaticEvent = !1));
            }),
            t.on("viewend", function () {
                n._hasInitialized = !1;
            }),
            t.on("playbackmodechange", function (e, r) {
                n._emittingAutomaticEvent ||
                    (r.player_playback_mode_data
                        ? tV(r.player_playback_mode_data) ||
                          (t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),
                          (r.player_playback_mode_data = "{}"))
                        : (r.player_playback_mode_data = "{}"),
                    (t.data.player_playback_mode_data = r.player_playback_mode_data),
                    (t.data.player_playback_mode = r.player_playback_mode));
            });
    },
    tj = [
        "viewstart",
        "ended",
        "loadstart",
        "pause",
        "play",
        "playing",
        "ratechange",
        "waiting",
        "adplay",
        "adpause",
        "adended",
        "aderror",
        "adplaying",
        "adrequest",
        "adresponse",
        "adbreakstart",
        "adbreakend",
        "adfirstquartile",
        "admidpoint",
        "adthirdquartile",
        "rebufferstart",
        "rebufferend",
        "seeked",
        "error",
        "hb",
        "requestcompleted",
        "requestfailed",
        "requestcanceled",
        "renditionchange",
        "cdnchange",
        "playbackmodechange",
    ],
    tH = new Set(["requestcompleted", "requestfailed", "requestcanceled"]),
    tY = (function (e) {
        ef(n, e);
        var t = eE(n);
        function n(e, r, i) {
            ea(this, n),
                el(ei((a = t.call(this))), "pageLoadEndTime", void 0),
                el(ei(a), "pageLoadInitTime", void 0),
                el(ei(a), "_destroyed", void 0),
                el(ei(a), "_heartBeatTimeout", void 0),
                el(ei(a), "adTracker", void 0),
                el(ei(a), "dashjs", void 0),
                el(ei(a), "data", void 0),
                el(ei(a), "disablePlayheadRebufferTracking", void 0),
                el(ei(a), "disableRebufferTracking", void 0),
                el(ei(a), "errorTracker", void 0),
                el(ei(a), "errorTranslator", void 0),
                el(ei(a), "emitTranslator", void 0),
                el(ei(a), "getAdData", void 0),
                el(ei(a), "getPlayheadTime", void 0),
                el(ei(a), "getStateData", void 0),
                el(ei(a), "stateDataTranslator", void 0),
                el(ei(a), "hlsjs", void 0),
                el(ei(a), "id", void 0),
                el(ei(a), "longResumeTracker", void 0),
                el(ei(a), "minimumRebufferDuration", void 0),
                el(ei(a), "mux", void 0),
                el(ei(a), "playbackEventDispatcher", void 0),
                el(ei(a), "playbackHeartbeat", void 0),
                el(ei(a), "playbackHeartbeatTime", void 0),
                el(ei(a), "playheadTime", void 0),
                el(ei(a), "seekingTracker", void 0),
                el(ei(a), "sustainedRebufferThreshold", void 0),
                el(ei(a), "watchTimeTracker", void 0),
                el(ei(a), "currentFragmentPDT", void 0),
                el(ei(a), "currentFragmentStart", void 0),
                (a.pageLoadInitTime = ev()),
                (a.pageLoadEndTime = eS());
            var a,
                s = {
                    debug: !1,
                    minimumRebufferDuration: 250,
                    sustainedRebufferThreshold: 1e3,
                    playbackHeartbeatTime: 25,
                    beaconDomain: "litix.io",
                    sampleRate: 1,
                    disableCookies: !1,
                    respectDoNotTrack: !1,
                    disableRebufferTracking: !1,
                    disablePlayheadRebufferTracking: !1,
                    errorTranslator: function (e) {
                        return e;
                    },
                    emitTranslator: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return t;
                    },
                    stateDataTranslator: function (e) {
                        return e;
                    },
                };
            (a.mux = e),
                (a.id = r),
                null != i &&
                    i.beaconDomain &&
                    a.mux.log.warn(
                        "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.",
                    ),
                ((i = Object.assign(s, i)).data = i.data || {}),
                i.data.property_key && ((i.data.env_key = i.data.property_key), delete i.data.property_key),
                (et.level = i.debug ? Z : J),
                (a.getPlayheadTime = i.getPlayheadTime),
                (a.getStateData =
                    i.getStateData ||
                    function () {
                        return {};
                    }),
                (a.getAdData = i.getAdData || function () {}),
                (a.minimumRebufferDuration = i.minimumRebufferDuration),
                (a.sustainedRebufferThreshold = i.sustainedRebufferThreshold),
                (a.playbackHeartbeatTime = i.playbackHeartbeatTime),
                (a.disableRebufferTracking = i.disableRebufferTracking),
                a.disableRebufferTracking &&
                    a.mux.log.warn(
                        "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.",
                    ),
                (a.disablePlayheadRebufferTracking = i.disablePlayheadRebufferTracking),
                (a.errorTranslator = i.errorTranslator),
                (a.emitTranslator = i.emitTranslator),
                (a.stateDataTranslator = i.stateDataTranslator),
                (a.playbackEventDispatcher = new tw(e, i.data.env_key, i)),
                (a.data = {
                    player_instance_id: j(),
                    mux_sample_rate: i.sampleRate,
                    beacon_domain: i.beaconCollectionDomain || i.beaconDomain,
                }),
                (a.data.view_sequence_number = 1),
                (a.data.player_sequence_number = 1);
            var o = function () {
                void 0 === this.data.view_start &&
                    ((this.data.view_start = this.mux.utils.now()), this.emit("viewstart"));
            }.bind(ei(a));
            if (
                (a.on("viewinit", function (e, t) {
                    this._resetVideoData(),
                        this._resetViewData(),
                        this._resetErrorData(),
                        this._updateStateData(),
                        Object.assign(this.data, t),
                        this._initializeViewData(),
                        this.one("play", o),
                        this.one("adbreakstart", o);
                }),
                a.on("videochange", function (e, t) {
                    this._resetView(t);
                }),
                a.on("programchange", function (e, t) {
                    this.data.player_is_paused &&
                        this.mux.log.warn(
                            "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.",
                        ),
                        this._resetView(Object.assign(t, { view_program_changed: !0 })),
                        o(),
                        this.emit("play"),
                        this.emit("playing");
                }),
                a.on("fragmentchange", function (e, t) {
                    (this.currentFragmentPDT = t.currentFragmentPDT),
                        (this.currentFragmentStart = t.currentFragmentStart);
                }),
                a.on("destroy", a.destroy),
                "u" > typeof window &&
                    "function" == typeof window.addEventListener &&
                    "function" == typeof window.removeEventListener)
            ) {
                var l = function () {
                    var e = void 0 !== a.data.view_start;
                    (a.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState),
                        e && a.mux.WINDOW_HIDDEN && (a.data.player_is_paused || a.emit("hb"));
                };
                window.addEventListener("visibilitychange", l, !1);
                var u = function (e) {
                    e.persisted || a.destroy();
                };
                window.addEventListener("pagehide", u, !1),
                    a.on("destroy", function () {
                        window.removeEventListener("visibilitychange", l), window.removeEventListener("pagehide", u);
                    });
            }
            a.on("playerready", function (e, t) {
                Object.assign(this.data, t);
            }),
                tj.forEach(function (e) {
                    a.on(e, function (t, n) {
                        0 !== e.indexOf("ad") && this._updateStateData(),
                            Object.assign(this.data, n),
                            this._sanitizeData();
                    }),
                        a.on("after" + e, function () {
                            ("error" !== e || this.errorTracker.viewErrored) && this.send(e);
                        });
                }),
                a.on("viewend", function (e, t) {
                    Object.assign(a.data, t);
                });
            var c = function (e) {
                var t = this.mux.utils.now();
                this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time),
                    (this.pageLoadInitTime = this.data.page_load_init_time || this.pageLoadInitTime),
                    (this.pageLoadEndTime = this.data.page_load_end_time || this.pageLoadEndTime),
                    !this.mux.PLAYER_TRACKED &&
                        this.pageLoadInitTime &&
                        ((this.mux.PLAYER_TRACKED = !0),
                        (this.data.player_init_time || this.pageLoadEndTime) &&
                            (this.data.page_load_time =
                                Math.min(this.data.player_init_time || 1 / 0, this.pageLoadEndTime || 1 / 0) -
                                this.pageLoadInitTime)),
                    this.send("playerready"),
                    delete this.data.player_startup_time,
                    delete this.data.page_load_time;
            };
            return (
                a.one("playerready", c),
                (a.longResumeTracker = new tM(ei(a))),
                (a.errorTracker = new ez(ei(a))),
                new e8(ei(a)),
                (a.seekingTracker = new e6(ei(a))),
                (a.playheadTime = new eZ(ei(a))),
                (a.playbackHeartbeat = new e$(ei(a))),
                new e2(ei(a)),
                (a.watchTimeTracker = new eq(ei(a))),
                new eX(ei(a)),
                (a.adTracker = new e7(ei(a))),
                new e0(ei(a)),
                new eJ(ei(a)),
                new e1(ei(a)),
                new tx(ei(a)),
                new tF(ei(a)),
                new tB(ei(a)),
                i.hlsjs && a.addHLSJS(i),
                i.dashjs && a.addDashJS(i),
                a.emit("viewinit", i.data),
                a
            );
        }
        return (
            eo(n, [
                {
                    key: "emit",
                    value: function (e, t) {
                        var r,
                            i = Object.assign({ viewer_time: this.mux.utils.now() }, t),
                            a = [e, i];
                        if (this.emitTranslator)
                            try {
                                a = this.emitTranslator(e, i);
                            } catch (e) {
                                this.mux.log.warn("Exception in emit translator callback.", e);
                            }
                        null != a &&
                            a.length &&
                            (r = ed(eu(n.prototype), "emit", this)).call.apply(r, [this].concat(q(a)));
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        this._destroyed ||
                            ((this._destroyed = !0),
                            void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")),
                            this.playbackEventDispatcher.destroy(),
                            this.removeHLSJS(),
                            this.removeDashJS(),
                            window.clearTimeout(this._heartBeatTimeout));
                    },
                },
                {
                    key: "send",
                    value: function (e) {
                        if (this.data.view_id) {
                            var t = Object.assign({}, this.data),
                                n = [
                                    "player_program_time",
                                    "player_manifest_newest_program_time",
                                    "player_live_edge_program_time",
                                    "player_program_time",
                                    "video_holdback",
                                    "video_part_holdback",
                                    "video_target_duration",
                                    "video_part_target_duration",
                                ];
                            if (
                                (void 0 === t.video_source_is_live &&
                                    (t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0
                                        ? (t.video_source_is_live = !0)
                                        : (t.player_source_duration > 0 || t.video_source_duration > 0) &&
                                          (t.video_source_is_live = !1)),
                                t.video_source_is_live ||
                                    n.forEach(function (e) {
                                        t[e] = void 0;
                                    }),
                                (t.video_source_url = t.video_source_url || t.player_source_url),
                                t.video_source_url)
                            ) {
                                var r = U(eI(t.video_source_url), 2),
                                    i = r[0];
                                (t.video_source_domain = r[1]), (t.video_source_hostname = i);
                            }
                            delete t.ad_request_id,
                                this.playbackEventDispatcher.send(e, t),
                                this.data.view_sequence_number++,
                                this.data.player_sequence_number++,
                                tH.has(e) || this._restartHeartBeat(),
                                "viewend" === e && delete this.data.view_id;
                        }
                    },
                },
                {
                    key: "_resetView",
                    value: function (e) {
                        this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e);
                    },
                },
                {
                    key: "_updateStateData",
                    value: function () {
                        var e,
                            t = this.getStateData();
                        if ("function" == typeof this.stateDataTranslator)
                            try {
                                t = this.stateDataTranslator(t);
                            } catch (e) {
                                this.mux.log.warn("Exception in stateDataTranslator translator callback.", e);
                            }
                        null != (e = this.data) &&
                            e.video_cdn &&
                            null != t &&
                            t.video_cdn &&
                            (t.video_cdn, (t = ep(t, ["video_cdn"]))),
                            Object.assign(this.data, t),
                            this.playheadTime._updatePlayheadTime(),
                            this._sanitizeData();
                    },
                },
                {
                    key: "_sanitizeData",
                    value: function () {
                        var e = this;
                        [
                            "player_width",
                            "player_height",
                            "video_source_width",
                            "video_source_height",
                            "player_playhead_time",
                            "video_source_bitrate",
                        ].forEach(function (t) {
                            var n = parseInt(e.data[t], 10);
                            e.data[t] = isNaN(n) ? void 0 : n;
                        }),
                            ["player_source_url", "video_source_url"].forEach(function (t) {
                                if (e.data[t]) {
                                    var n = e.data[t].toLowerCase();
                                    (0 === n.indexOf("data:") || 0 === n.indexOf("blob:")) &&
                                        (e.data[t] = "MSE style URL");
                                }
                            });
                    },
                },
                {
                    key: "_resetVideoData",
                    value: function () {
                        var e = this;
                        Object.keys(this.data).forEach(function (t) {
                            0 === t.indexOf("video_") && delete e.data[t];
                        });
                    },
                },
                {
                    key: "_resetViewData",
                    value: function () {
                        var e = this;
                        Object.keys(this.data).forEach(function (t) {
                            0 === t.indexOf("view_") && delete e.data[t];
                        }),
                            (this.data.view_sequence_number = 1);
                    },
                },
                {
                    key: "_resetErrorData",
                    value: function () {
                        delete this.data.player_error_code,
                            delete this.data.player_error_message,
                            delete this.data.player_error_context,
                            delete this.data.player_error_severity,
                            delete this.data.player_error_business_exception;
                    },
                },
                {
                    key: "_initializeViewData",
                    value: function () {
                        var e = this,
                            t = (this.data.view_id = j()),
                            n = function () {
                                t === e.data.view_id && eC(e.data, "player_view_count", 1);
                            };
                        this.data.player_is_paused ? this.one("play", n) : n();
                    },
                },
                {
                    key: "_restartHeartBeat",
                    value: function () {
                        var e = this;
                        window.clearTimeout(this._heartBeatTimeout),
                            (this._heartBeatTimeout = window.setTimeout(function () {
                                e.data.player_is_paused || e.emit("hb");
                            }, 1e4));
                    },
                },
                {
                    key: "addHLSJS",
                    value: function (e) {
                        e.hlsjs
                            ? this.hlsjs
                                ? this.mux.log.warn("An instance of HLS.js is already being monitored for this player.")
                                : ((this.hlsjs = e.hlsjs), ek(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls))
                            : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
                    },
                },
                {
                    key: "removeHLSJS",
                    value: function () {
                        this.hlsjs && (eU(this.hlsjs), (this.hlsjs = void 0));
                    },
                },
                {
                    key: "addDashJS",
                    value: function (e) {
                        e.dashjs
                            ? this.dashjs
                                ? this.mux.log.warn(
                                      "An instance of Dash.js is already being monitored for this player.",
                                  )
                                : ((this.dashjs = e.dashjs), ej(this.mux, this.id, e.dashjs))
                            : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                    },
                },
                {
                    key: "removeDashJS",
                    value: function () {
                        this.dashjs && (eH(this.dashjs), (this.dashjs = void 0));
                    },
                },
            ]),
            n
        );
    })(eW),
    tW = _(L());
function tK() {
    return (
        tW.default &&
        !!(
            tW.default.fullscreenElement ||
            tW.default.webkitFullscreenElement ||
            tW.default.mozFullScreenElement ||
            tW.default.msFullscreenElement
        )
    );
}
var t$ = [
        "loadstart",
        "pause",
        "play",
        "playing",
        "seeking",
        "seeked",
        "timeupdate",
        "ratechange",
        "stalled",
        "waiting",
        "error",
        "ended",
    ],
    tz = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
function tq(e, t, n) {
    var r = U(W(t), 3),
        i = r[0],
        a = r[1],
        s = r[2],
        o = e.log,
        l = e.utils.getComputedStyle,
        u = e.utils.secondsToMs,
        c = { automaticErrorTracking: !0 };
    if (!i) return o.error("No element was found with the `" + a + "` query selector.");
    if ("video" !== s && "audio" !== s) return o.error("The element of `" + a + "` was not a media element.");
    i.mux &&
        (i.mux.destroy(),
        delete i.mux,
        o.warn("Already monitoring this video element, replacing existing event listeners")),
        ((n = Object.assign(c, n, {
            getPlayheadTime: function () {
                return u(i.currentTime);
            },
            getStateData: function () {
                var e,
                    t,
                    n,
                    r = (null == (e = (t = this).getPlayheadTime) ? void 0 : e.call(t)) || u(i.currentTime),
                    a = this.hlsjs && this.hlsjs.url,
                    s = this.dashjs && "function" == typeof this.dashjs.getSource && this.dashjs.getSource(),
                    o = {
                        player_is_paused: i.paused,
                        player_width: parseInt(l(i, "width")),
                        player_height: parseInt(l(i, "height")),
                        player_autoplay_on: i.autoplay,
                        player_preload_on: i.preload,
                        player_language_code: i.lang,
                        player_is_fullscreen: tK(),
                        video_poster_url: i.poster,
                        video_source_url: a || s || i.currentSrc,
                        video_source_duration: u(i.duration),
                        video_source_height: i.videoHeight,
                        video_source_width: i.videoWidth,
                        view_dropped_frame_count:
                            null == i || null == (n = i.getVideoPlaybackQuality)
                                ? void 0
                                : n.call(i).droppedVideoFrames,
                    };
                if (i.getStartDate && r > 0) {
                    var c = i.getStartDate();
                    if (c && "function" == typeof c.getTime && c.getTime()) {
                        var d = c.getTime();
                        (o.player_program_time = d + r),
                            i.seekable.length > 0 &&
                                (o.player_live_edge_program_time = d + i.seekable.end(i.seekable.length - 1));
                    }
                }
                return o;
            },
        })).data = Object.assign(
            {
                player_software: "HTML5 Video Element",
                player_mux_plugin_name: "VideoElementMonitor",
                player_mux_plugin_version: e.VERSION,
            },
            n.data,
        )),
        (i.mux = i.mux || {}),
        (i.mux.deleted = !1),
        (i.mux.emit = function (t, n) {
            e.emit(a, t, n);
        }),
        (i.mux.updateData = function (e) {
            i.mux.emit("hb", e);
        });
    var d = function () {
        o.error("The monitor for this video element has already been destroyed.");
    };
    (i.mux.destroy = function () {
        Object.keys(i.mux.listeners).forEach(function (e) {
            i.removeEventListener(e, i.mux.listeners[e], !1);
        }),
            delete i.mux.listeners,
            (i.mux.destroy = d),
            (i.mux.swapElement = d),
            (i.mux.emit = d),
            (i.mux.addHLSJS = d),
            (i.mux.addDashJS = d),
            (i.mux.removeHLSJS = d),
            (i.mux.removeDashJS = d),
            (i.mux.updateData = d),
            (i.mux.setEmitTranslator = d),
            (i.mux.setStateDataTranslator = d),
            (i.mux.setGetPlayheadTime = d),
            (i.mux.deleted = !0),
            e.emit(a, "destroy");
    }),
        (i.mux.swapElement = function (t) {
            var n = U(W(t), 3),
                r = n[0],
                a = n[1],
                s = n[2];
            return r
                ? "video" !== s && "audio" !== s
                    ? e.log.error("The element of `" + a + "` was not a media element.")
                    : void ((r.muxId = i.muxId),
                      delete i.muxId,
                      (r.mux = r.mux || {}),
                      (r.mux.listeners = Object.assign({}, i.mux.listeners)),
                      delete i.mux.listeners,
                      Object.keys(r.mux.listeners).forEach(function (e) {
                          i.removeEventListener(e, r.mux.listeners[e], !1),
                              r.addEventListener(e, r.mux.listeners[e], !1);
                      }),
                      (r.mux.swapElement = i.mux.swapElement),
                      (r.mux.destroy = i.mux.destroy),
                      delete i.mux,
                      (i = r))
                : e.log.error("No element was found with the `" + a + "` query selector.");
        }),
        (i.mux.addHLSJS = function (t) {
            e.addHLSJS(a, t);
        }),
        (i.mux.addDashJS = function (t) {
            e.addDashJS(a, t);
        }),
        (i.mux.removeHLSJS = function () {
            e.removeHLSJS(a);
        }),
        (i.mux.removeDashJS = function () {
            e.removeDashJS(a);
        }),
        (i.mux.setEmitTranslator = function (t) {
            e.setEmitTranslator(a, t);
        }),
        (i.mux.setStateDataTranslator = function (t) {
            e.setStateDataTranslator(a, t);
        }),
        (i.mux.setGetPlayheadTime = function (t) {
            t || (t = n.getPlayheadTime), e.setGetPlayheadTime(a, t);
        }),
        e.init(a, n),
        e.emit(a, "playerready"),
        i.paused || (e.emit(a, "play"), i.readyState > 2 && e.emit(a, "playing")),
        (i.mux.listeners = {}),
        t$.forEach(function (t) {
            ("error" !== t || n.automaticErrorTracking) &&
                ((i.mux.listeners[t] = function () {
                    var n = {};
                    if ("error" === t) {
                        if (!i.error || 1 === i.error.code) return;
                        (n.player_error_code = i.error.code),
                            (n.player_error_message = tz[i.error.code] || i.error.message);
                    }
                    e.emit(a, t, n);
                }),
                i.addEventListener(t, i.mux.listeners[t], !1));
        });
}
function tX(e, t, n, r) {
    var i = r;
    if (e && "function" == typeof e[t])
        try {
            i = e[t].apply(e, n);
        } catch (e) {
            et.info("safeCall error", e);
        }
    return i;
}
var tZ,
    tQ = _(f());
function tJ(e, t) {
    var n;
    return e && t && tQ.default && "function" == typeof tQ.default.getComputedStyle
        ? (tZ && tZ.has(e) && (n = tZ.get(e)),
          n || ((n = tQ.default.getComputedStyle(e, null)), tZ && tZ.set(e, n)),
          n.getPropertyValue(t))
        : "";
}
function t0(e) {
    return Math.floor(1e3 * e);
}
tQ.default && tQ.default.WeakMap && (tZ = new WeakMap());
var t1 = "#EXT-X-TARGETDURATION",
    t2 = "#EXT-X-PART-INF",
    t3 = "#EXT-X-SERVER-CONTROL",
    t6 = "#EXTINF",
    t4 = "#EXT-X-PROGRAM-DATE-TIME",
    t5 = "#EXT-X-VERSION",
    t7 = "#EXT-X-SESSION-DATA",
    t8 = function (e) {
        return (
            (this.buffer = ""),
            (this.manifest = { segments: [], serverControl: {}, sessionData: {} }),
            (this.currentUri = {}),
            this.process(e),
            this.manifest
        );
    };
(t8.prototype.process = function (e) {
    var t;
    for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n"))
        this.processLine(this.buffer.substring(0, t)), (this.buffer = this.buffer.substring(t + 1));
}),
    (t8.prototype.processLine = function (e) {
        var t = e.indexOf(":"),
            n = na(e, t),
            r = n[0],
            i = 2 === n.length ? nt(n[1]) : void 0;
        if ("#" !== r[0])
            (this.currentUri.uri = r),
                this.manifest.segments.push(this.currentUri),
                !this.manifest.targetDuration ||
                    "duration" in this.currentUri ||
                    (this.currentUri.duration = this.manifest.targetDuration),
                (this.currentUri = {});
        else
            switch (r) {
                case t1:
                    if (!isFinite(i) || i < 0) return;
                    (this.manifest.targetDuration = i), this.setHoldBack();
                    break;
                case t2:
                    t9(this.manifest, n),
                        this.manifest.partInf.partTarget &&
                            (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                        this.setHoldBack();
                    break;
                case t3:
                    t9(this.manifest, n), this.setHoldBack();
                    break;
                case t6:
                    0 === i ? (this.currentUri.duration = 0.01) : i > 0 && (this.currentUri.duration = i);
                    break;
                case t4:
                    var a = i,
                        s = new Date(a);
                    this.manifest.dateTimeString ||
                        ((this.manifest.dateTimeString = a), (this.manifest.dateTimeObject = s)),
                        (this.currentUri.dateTimeString = a),
                        (this.currentUri.dateTimeObject = s);
                    break;
                case t5:
                    t9(this.manifest, n);
                    break;
                case t7:
                    var o = ex(ns(n[1]));
                    Object.assign(this.manifest.sessionData, o);
            }
    }),
    (t8.prototype.setHoldBack = function () {
        var e = this.manifest,
            t = e.serverControl,
            n = e.targetDuration,
            r = e.partTargetDuration;
        if (t) {
            var i = "holdBack",
                a = "partHoldBack",
                s = n && 3 * n,
                o = r && 2 * r;
            n && !t.hasOwnProperty(i) && (t[i] = s),
                s && t[i] < s && (t[i] = s),
                r && !t.hasOwnProperty(a) && (t[a] = 3 * r),
                r && t[a] < o && (t[a] = o);
        }
    });
var t9 = function (e, t) {
        var n,
            r = ne(t[0].replace("#EXT-X-", ""));
        ni(t[1]) ? ((n = {}), (n = Object.assign(nr(t[1]), n))) : (n = nt(t[1])), (e[r] = n);
    },
    ne = function (e) {
        return e.toLowerCase().replace(/-(\w)/g, function (e) {
            return e[1].toUpperCase();
        });
    },
    nt = function (e) {
        if ("yes" === e.toLowerCase() || "no" === e.toLowerCase()) return "yes" === e.toLowerCase();
        var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
        return isNaN(t) ? e : t;
    },
    nn = function (e) {
        var t = {},
            n = e.split("=");
        return n.length > 1 && (t[ne(n[0])] = nt(n[1])), t;
    },
    nr = function (e) {
        for (var t = e.split(","), n = {}, r = 0; t.length > r; r++) n = Object.assign(nn(t[r]), n);
        return n;
    },
    ni = function (e) {
        return e.indexOf("=") > -1;
    },
    na = function (e, t) {
        return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)];
    },
    ns = function (e) {
        var t = {};
        if (e) {
            var n = e.search(",");
            return (
                [e.slice(0, n), e.slice(n + 1)].forEach(function (e, n) {
                    for (var r = e.replace(/['"]+/g, "").split("="), i = 0; i < r.length; i++)
                        "DATA-ID" === r[i] && (t["DATA-ID"] = r[1 - i]), "VALUE" === r[i] && (t.VALUE = r[1 - i]);
                }),
                { data: t }
            );
        }
    },
    no = {
        safeCall: tX,
        safeIncrement: eC,
        getComputedStyle: tJ,
        secondsToMs: t0,
        assign: Object.assign,
        headersStringToObject: eL,
        cdnHeadersToRequestId: ew,
        extractHostnameAndDomain: eI,
        extractHostname: eA,
        manifestParser: t8,
        generateShortID: H,
        generateUUID: j,
        now: B,
        findMediaElement: W,
    },
    nl = {
        PLAYER_READY: "playerready",
        VIEW_INIT: "viewinit",
        VIDEO_CHANGE: "videochange",
        PLAY: "play",
        PAUSE: "pause",
        PLAYING: "playing",
        TIME_UPDATE: "timeupdate",
        SEEKING: "seeking",
        SEEKED: "seeked",
        REBUFFER_START: "rebufferstart",
        REBUFFER_END: "rebufferend",
        ERROR: "error",
        ENDED: "ended",
        RENDITION_CHANGE: "renditionchange",
        ORIENTATION_CHANGE: "orientationchange",
        PLAYBACK_MODE_CHANGE: "playbackmodechange",
        AD_REQUEST: "adrequest",
        AD_RESPONSE: "adresponse",
        AD_BREAK_START: "adbreakstart",
        AD_PLAY: "adplay",
        AD_PLAYING: "adplaying",
        AD_PAUSE: "adpause",
        AD_FIRST_QUARTILE: "adfirstquartile",
        AD_MID_POINT: "admidpoint",
        AD_THIRD_QUARTILE: "adthirdquartile",
        AD_ENDED: "adended",
        AD_BREAK_END: "adbreakend",
        AD_ERROR: "aderror",
        REQUEST_COMPLETED: "requestcompleted",
        REQUEST_FAILED: "requestfailed",
        REQUEST_CANCELLED: "requestcanceled",
        HEARTBEAT: "hb",
        DESTROY: "destroy",
    },
    nu = "mux-embed",
    nc = "5.13.0",
    nd = "2.1",
    n_ = {},
    nf = function (e) {
        var t = arguments;
        "string" == typeof e
            ? nf.hasOwnProperty(e)
                ? G.default.setTimeout(function () {
                      (t = Array.prototype.splice.call(t, 1)), nf[e].apply(null, t);
                  }, 0)
                : et.warn("`" + e + "` is an unknown task")
            : "function" == typeof e
              ? G.default.setTimeout(function () {
                    e(nf);
                }, 0)
              : et.warn("`" + e + "` is invalid.");
    },
    nh = {
        loaded: B(),
        NAME: nu,
        VERSION: nc,
        API_VERSION: nd,
        PLAYER_TRACKED: !1,
        monitor: function (e, t) {
            return tq(nf, e, t);
        },
        destroyMonitor: function (e) {
            var t = U(W(e), 1)[0];
            t && t.mux && "function" == typeof t.mux.destroy
                ? t.mux.destroy()
                : et.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
        },
        addHLSJS: function (e, t) {
            var n = Y(e);
            n_[n] ? n_[n].addHLSJS(t) : et.error("A monitor for `" + n + "` has not been initialized.");
        },
        addDashJS: function (e, t) {
            var n = Y(e);
            n_[n] ? n_[n].addDashJS(t) : et.error("A monitor for `" + n + "` has not been initialized.");
        },
        removeHLSJS: function (e) {
            var t = Y(e);
            n_[t] ? n_[t].removeHLSJS() : et.error("A monitor for `" + t + "` has not been initialized.");
        },
        removeDashJS: function (e) {
            var t = Y(e);
            n_[t] ? n_[t].removeDashJS() : et.error("A monitor for `" + t + "` has not been initialized.");
        },
        init: function (e, t) {
            er() &&
                t &&
                t.respectDoNotTrack &&
                et.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
            var n = Y(e);
            n_[n] = new tY(nf, n, t);
        },
        emit: function (e, t, n) {
            var r = Y(e);
            n_[r]
                ? (n_[r].emit(t, n), "destroy" === t && delete n_[r])
                : et.error("A monitor for `" + r + "` has not been initialized.");
        },
        updateData: function (e, t) {
            var n = Y(e);
            n_[n] ? n_[n].emit("hb", t) : et.error("A monitor for `" + n + "` has not been initialized.");
        },
        setEmitTranslator: function (e, t) {
            var n = Y(e);
            n_[n] ? (n_[n].emitTranslator = t) : et.error("A monitor for `" + n + "` has not been initialized.");
        },
        setStateDataTranslator: function (e, t) {
            var n = Y(e);
            n_[n] ? (n_[n].stateDataTranslator = t) : et.error("A monitor for `" + n + "` has not been initialized.");
        },
        setGetPlayheadTime: function (e, t) {
            var n = Y(e);
            n_[n] ? (n_[n].getPlayheadTime = t) : et.error("A monitor for `" + n + "` has not been initialized.");
        },
        checkDoNotTrack: er,
        log: et,
        utils: no,
        events: nl,
        WINDOW_HIDDEN: !1,
        WINDOW_UNLOADING: !1,
    };
Object.assign(nf, nh),
    void 0 !== G.default &&
        "function" == typeof G.default.addEventListener &&
        G.default.addEventListener(
            "pagehide",
            function (e) {
                e.persisted || (nf.WINDOW_UNLOADING = !0);
            },
            !1,
        );
var np = nf;
