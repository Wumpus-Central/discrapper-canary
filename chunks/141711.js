a.d(t, { A: () => tR });
var r = Object.create,
    i = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    u = Object.prototype.hasOwnProperty,
    d = function (e, t) {
        return function () {
            return e && (t = e((e = 0))), t;
        };
    },
    l = function (e, t) {
        return function () {
            return t || e((t = { exports: {} }).exports, t), t.exports;
        };
    },
    c = function (e, t, a, r) {
        if ((t && "object" == typeof t) || "function" == typeof t)
            for (var s, d = o(t), l = 0, c = d.length; l < c; l++)
                (s = d[l]),
                    u.call(e, s) ||
                        s === a ||
                        i(e, s, {
                            get: function (e) {
                                return t[e];
                            }.bind(null, s),
                            enumerable: !(r = n(t, s)) || r.enumerable,
                        });
        return e;
    },
    _ = function (e, t, a) {
        return (
            (a = null != e ? r(s(e)) : {}),
            c(!t && e && e.__esModule ? a : i(a, "default", { value: e, enumerable: !0 }), e)
        );
    },
    p = l(function (e, t) {
        t.exports = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self ? self : {};
    });
function h(e, t) {
    return null != t && "u" > typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : h(e, t);
}
var f = d(function () {
    f();
});
function v(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
var y = d(function () {}),
    g = l(function (e, t) {
        var a = Array.prototype.slice;
        t.exports = function (e, t) {
            for (("length" in e) || (e = [e]), e = a.call(e); e.length; ) {
                var r = e.shift(),
                    i = t(r);
                if (i) return i;
                r.childNodes && r.childNodes.length && (e = a.call(r.childNodes).concat(e));
            }
        };
    }),
    b = l(function (e, t) {
        function a(e, t) {
            if (!h(this, a)) return new a(e, t);
            (this.data = e), (this.nodeValue = e), (this.length = e.length), (this.ownerDocument = t || null);
        }
        f(),
            (t.exports = a),
            (a.prototype.nodeType = 8),
            (a.prototype.nodeName = "#comment"),
            (a.prototype.toString = function () {
                return "[object Comment]";
            });
    }),
    w = l(function (e, t) {
        function a(e, t) {
            if (!h(this, a)) return new a(e);
            (this.data = e || ""), (this.length = this.data.length), (this.ownerDocument = t || null);
        }
        f(),
            (t.exports = a),
            (a.prototype.type = "DOMTextNode"),
            (a.prototype.nodeType = 3),
            (a.prototype.nodeName = "#text"),
            (a.prototype.toString = function () {
                return this.data;
            }),
            (a.prototype.replaceData = function (e, t, a) {
                var r = this.data,
                    i = r.substring(0, e),
                    n = r.substring(e + t, r.length);
                (this.data = i + a + n), (this.length = this.data.length);
            });
    }),
    T = l(function (e, t) {
        t.exports = function (e) {
            var t = this,
                a = e.type;
            e.target || (e.target = t), t.listeners || (t.listeners = {});
            var r = t.listeners[a];
            if (r)
                return r.forEach(function (a) {
                    (e.currentTarget = t), "function" == typeof a ? a(e) : a.handleEvent(e);
                });
            t.parentNode && t.parentNode.dispatchEvent(e);
        };
    }),
    k = l(function (e, t) {
        t.exports = function (e, t) {
            this.listeners || (this.listeners = {}),
                this.listeners[e] || (this.listeners[e] = []),
                -1 === this.listeners[e].indexOf(t) && this.listeners[e].push(t);
        };
    }),
    E = l(function (e, t) {
        t.exports = function (e, t) {
            if (this.listeners && this.listeners[e]) {
                var a = this.listeners[e],
                    r = a.indexOf(t);
                -1 !== r && a.splice(r, 1);
            }
        };
    }),
    x = l(function (e, t) {
        y(),
            (t.exports = function e(t) {
                switch (t.nodeType) {
                    case 3:
                        return i(t.data);
                    case 8:
                        return "\x3c!--" + t.data + "--\x3e";
                    default:
                        var n, o, s;
                        return (
                            (o = []),
                            (s = (n = t).tagName),
                            "http://www.w3.org/1999/xhtml" === n.namespaceURI && (s = s.toLowerCase()),
                            o.push(
                                "<" +
                                    s +
                                    (function (e) {
                                        var t = [];
                                        for (var a in e)
                                            (function (e, t) {
                                                var a = v(e[t]);
                                                return (
                                                    ("style" === t && Object.keys(e.style).length > 0) ||
                                                    (e.hasOwnProperty(t) &&
                                                        ("string" === a || "boolean" === a || "number" === a) &&
                                                        "nodeName" !== t &&
                                                        "className" !== t &&
                                                        "tagName" !== t &&
                                                        "textContent" !== t &&
                                                        "innerText" !== t &&
                                                        "namespaceURI" !== t &&
                                                        "innerHTML" !== t)
                                                );
                                            })(e, a) && t.push({ name: a, value: e[a] });
                                        for (var i in e._attributes)
                                            for (var n in e._attributes[i]) {
                                                var o = e._attributes[i][n],
                                                    s = (o.prefix ? o.prefix + ":" : "") + n;
                                                t.push({ name: s, value: o.value });
                                            }
                                        return (
                                            e.className && t.push({ name: "class", value: e.className }),
                                            t.length ? r(t) : ""
                                        );
                                    })(n) +
                                    (function (e) {
                                        var t = e.dataset,
                                            a = [];
                                        for (var i in t) a.push({ name: "data-" + i, value: t[i] });
                                        return a.length ? r(a) : "";
                                    })(n),
                            ),
                            a.indexOf(s) > -1
                                ? o.push(" />")
                                : (o.push(">"),
                                  n.childNodes.length
                                      ? o.push.apply(o, n.childNodes.map(e))
                                      : n.textContent || n.innerText
                                        ? o.push(i(n.textContent || n.innerText))
                                        : n.innerHTML && o.push(n.innerHTML),
                                  o.push("</" + s + ">")),
                            o.join("")
                        );
                }
            });
        var a = [
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
            var t = [];
            return (
                e.forEach(function (e) {
                    var a = e.name,
                        r = e.value;
                    "style" === a &&
                        (r = (function (e) {
                            if ("string" == typeof e) return e;
                            var t = "";
                            return (
                                Object.keys(e).forEach(function (a) {
                                    var r = e[a];
                                    (a = a.replace(/[A-Z]/g, function (e) {
                                        return "-" + e.toLowerCase();
                                    })),
                                        (t += a + ":" + r + ";");
                                }),
                                t
                            );
                        })(r)),
                        t.push(a + '="' + i(r).replace(/"/g, "&quot;") + '"');
                }),
                t.length ? " " + t.join(" ") : ""
            );
        }
        function i(e) {
            var t = "";
            return (
                "string" == typeof e ? (t = e) : e && (t = e.toString()),
                t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            );
        }
    }),
    D = l(function (e, t) {
        f();
        var a = g(),
            r = T(),
            i = k(),
            n = E(),
            o = x(),
            s = "http://www.w3.org/1999/xhtml";
        function u(e, t, a) {
            if (!h(this, u)) return new u(e);
            var r = void 0 === a ? s : a || null;
            (this.tagName = r === s ? String(e).toUpperCase() : e),
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
        (t.exports = u),
            (u.prototype.type = "DOMElement"),
            (u.prototype.nodeType = 1),
            (u.prototype.appendChild = function (e) {
                return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), (e.parentNode = this), e;
            }),
            (u.prototype.replaceChild = function (e, t) {
                e.parentNode && e.parentNode.removeChild(e);
                var a = this.childNodes.indexOf(t);
                return (t.parentNode = null), (this.childNodes[a] = e), (e.parentNode = this), t;
            }),
            (u.prototype.removeChild = function (e) {
                var t = this.childNodes.indexOf(e);
                return this.childNodes.splice(t, 1), (e.parentNode = null), e;
            }),
            (u.prototype.insertBefore = function (e, t) {
                e.parentNode && e.parentNode.removeChild(e);
                var a = null == t ? -1 : this.childNodes.indexOf(t);
                return a > -1 ? this.childNodes.splice(a, 0, e) : this.childNodes.push(e), (e.parentNode = this), e;
            }),
            (u.prototype.setAttributeNS = function (e, t, a) {
                var r = null,
                    i = t,
                    n = t.indexOf(":");
                (n > -1 && ((r = t.substr(0, n)), (i = t.substr(n + 1))), "INPUT" === this.tagName && "type" === t)
                    ? (this.type = a)
                    : ((this._attributes[e] || (this._attributes[e] = {}))[i] = { value: a, prefix: r });
            }),
            (u.prototype.getAttributeNS = function (e, t) {
                var a = this._attributes[e],
                    r = a && a[t] && a[t].value;
                return "INPUT" === this.tagName && "type" === t ? this.type : "string" != typeof r ? null : r;
            }),
            (u.prototype.removeAttributeNS = function (e, t) {
                var a = this._attributes[e];
                a && delete a[t];
            }),
            (u.prototype.hasAttributeNS = function (e, t) {
                var a = this._attributes[e];
                return !!a && t in a;
            }),
            (u.prototype.setAttribute = function (e, t) {
                return this.setAttributeNS(null, e, t);
            }),
            (u.prototype.getAttribute = function (e) {
                return this.getAttributeNS(null, e);
            }),
            (u.prototype.removeAttribute = function (e) {
                return this.removeAttributeNS(null, e);
            }),
            (u.prototype.hasAttribute = function (e) {
                return this.hasAttributeNS(null, e);
            }),
            (u.prototype.removeEventListener = n),
            (u.prototype.addEventListener = i),
            (u.prototype.dispatchEvent = r),
            (u.prototype.focus = function () {}),
            (u.prototype.toString = function () {
                return o(this);
            }),
            (u.prototype.getElementsByClassName = function (e) {
                var t = e.split(" "),
                    r = [];
                return (
                    a(this, function (e) {
                        if (1 === e.nodeType) {
                            var a = (e.className || "").split(" ");
                            t.every(function (e) {
                                return -1 !== a.indexOf(e);
                            }) && r.push(e);
                        }
                    }),
                    r
                );
            }),
            (u.prototype.getElementsByTagName = function (e) {
                e = e.toLowerCase();
                var t = [];
                return (
                    a(this.childNodes, function (a) {
                        1 === a.nodeType && ("*" === e || a.tagName.toLowerCase() === e) && t.push(a);
                    }),
                    t
                );
            }),
            (u.prototype.contains = function (e) {
                return (
                    a(this, function (t) {
                        return e === t;
                    }) || !1
                );
            });
    }),
    q = l(function (e, t) {
        f();
        var a = D();
        function r(e) {
            if (!h(this, r)) return new r();
            (this.childNodes = []), (this.parentNode = null), (this.ownerDocument = e || null);
        }
        (t.exports = r),
            (r.prototype.type = "DocumentFragment"),
            (r.prototype.nodeType = 11),
            (r.prototype.nodeName = "#document-fragment"),
            (r.prototype.appendChild = a.prototype.appendChild),
            (r.prototype.replaceChild = a.prototype.replaceChild),
            (r.prototype.removeChild = a.prototype.removeChild),
            (r.prototype.toString = function () {
                return this.childNodes
                    .map(function (e) {
                        return String(e);
                    })
                    .join("");
            });
    }),
    P = l(function (e, t) {
        function a(e) {}
        (t.exports = a),
            (a.prototype.initEvent = function (e, t, a) {
                (this.type = e), (this.bubbles = t), (this.cancelable = a);
            }),
            (a.prototype.preventDefault = function () {});
    }),
    O = l(function (e, t) {
        f();
        var a = g(),
            r = b(),
            i = w(),
            n = D(),
            o = q(),
            s = P(),
            u = T(),
            d = k(),
            l = E();
        function c() {
            if (!h(this, c)) return new c();
            (this.head = this.createElement("head")),
                (this.body = this.createElement("body")),
                (this.documentElement = this.createElement("html")),
                this.documentElement.appendChild(this.head),
                this.documentElement.appendChild(this.body),
                (this.childNodes = [this.documentElement]),
                (this.nodeType = 9);
        }
        t.exports = c;
        var _ = c.prototype;
        (_.createTextNode = function (e) {
            return new i(e, this);
        }),
            (_.createElementNS = function (e, t) {
                return new n(t, this, null === e ? null : String(e));
            }),
            (_.createElement = function (e) {
                return new n(e, this);
            }),
            (_.createDocumentFragment = function () {
                return new o(this);
            }),
            (_.createEvent = function (e) {
                return new s(e);
            }),
            (_.createComment = function (e) {
                return new r(e, this);
            }),
            (_.getElementById = function (e) {
                return (
                    (e = String(e)),
                    a(this.childNodes, function (t) {
                        if (String(t.id) === e) return t;
                    }) || null
                );
            }),
            (_.getElementsByClassName = n.prototype.getElementsByClassName),
            (_.getElementsByTagName = n.prototype.getElementsByTagName),
            (_.contains = n.prototype.contains),
            (_.removeEventListener = l),
            (_.addEventListener = d),
            (_.dispatchEvent = u);
    }),
    A = l(function (e, t) {
        t.exports = new (O())();
    }),
    S = l(function (e, t) {
        var a,
            r = "u" > typeof global ? global : "u" > typeof window ? window : {},
            i = A();
        "u" > typeof document
            ? (a = document)
            : (a = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (a = r["__GLOBAL_DOCUMENT_CACHE@4"] = i),
            (t.exports = a);
    });
function R(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
    return r;
}
function L(e, t) {
    if (e) {
        if ("string" == typeof e) return R(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a))
            return Array.from(a);
        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return R(e, t);
    }
}
function I(e, t) {
    return (
        (function (e) {
            if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
            var a = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != a) {
                var r,
                    i,
                    n = [],
                    o = !0,
                    s = !1;
                try {
                    for (
                        a = a.call(e);
                        !(o = (r = a.next()).done) && (n.push(r.value), !(t && n.length === t));
                        o = !0
                    );
                } catch (e) {
                    (s = !0), (i = e);
                } finally {
                    try {
                        o || null == a.return || a.return();
                    } finally {
                        if (s) throw i;
                    }
                }
                return n;
            }
        })(e, t) ||
        L(e, t) ||
        (function () {
            throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        })()
    );
}
var N = _(p()),
    C = _(p()),
    j = _(p()),
    H = function () {
        var e = j.default.performance,
            t = e && e.timing,
            a = t && t.navigationStart;
        return Math.round("number" == typeof a && "function" == typeof e.now ? a + e.now() : Date.now());
    },
    B = function () {
        if ("function" == typeof (null == (e = C.default.crypto) ? void 0 : e.getRandomValues)) {
            (a = new Uint8Array(32)), C.default.crypto.getRandomValues(a);
            for (var e, t, a, r = 0; r < 32; r++) a[r] = a[r] % 16;
        } else {
            a = [];
            for (var i = 0; i < 32; i++) a[i] = (16 * Math.random()) | 0;
        }
        var n = 0;
        t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = "x" === e ? a[n] : (3 & a[n]) | 8;
            return n++, t.toString(16);
        });
        var o = H(),
            s = null == o ? void 0 : o.toString(16).substring(3);
        return s ? t.substring(0, 28) + s : t;
    },
    M = function () {
        return ("000000" + ((0x81bf1000 * Math.random()) | 0).toString(36)).slice(-6);
    },
    U = function (e) {
        var t;
        if (e && void 0 !== e.nodeName) return e.muxId || (e.muxId = M()), e.muxId;
        try {
            t = document.querySelector(e);
        } catch (e) {}
        return t && !t.muxId && (t.muxId = e), (null == t ? void 0 : t.muxId) || e;
    },
    F = function (e) {
        e && void 0 !== e.nodeName ? (e = U((t = e))) : (t = document.querySelector(e));
        var t,
            a = t && t.nodeName ? t.nodeName.toLowerCase() : "";
        return [t, e, a];
    };
function Q(e) {
    return (
        (function (e) {
            if (Array.isArray(e)) return R(e);
        })(e) ||
        (function (e) {
            if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
        })(e) ||
        L(e) ||
        (function () {
            throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        })()
    );
}
var W = (function (e) {
        var t,
            a,
            r,
            i,
            n,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            s = e ? [console, e] : [console],
            u = (t = console.trace).bind.apply(t, Q(s)),
            d = (a = console.info).bind.apply(a, Q(s)),
            l = (r = console.debug).bind.apply(r, Q(s)),
            c = (i = console.warn).bind.apply(i, Q(s)),
            _ = (n = console.error).bind.apply(n, Q(s)),
            p = o;
        return {
            trace: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (!(p > 0)) return u.apply(void 0, Q(t));
            },
            debug: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (!(p > 1)) return l.apply(void 0, Q(t));
            },
            info: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (!(p > 2)) return d.apply(void 0, Q(t));
            },
            warn: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (!(p > 3)) return c.apply(void 0, Q(t));
            },
            error: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (!(p > 4)) return _.apply(void 0, Q(t));
            },
            get level() {
                return p;
            },
            set level(m) {
                m !== this.level && (p = null != m ? m : o);
            },
        };
    })("[mux]"),
    G = _(p());
function V() {
    return "1" === (G.default.doNotTrack || (G.default.navigator && G.default.navigator.doNotTrack));
}
function z(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function J(e, t) {
    if (!h(e, t)) throw TypeError("Cannot call a class as a function");
}
function K(e, t) {
    for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function Y(e, t, a) {
    return t && K(e.prototype, t), a && K(e, a), e;
}
function X(e, t, a) {
    return (
        t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a),
        e
    );
}
function $(e) {
    return ($ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function Z(e, t, a) {
    return (Z =
        "u" > typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, a) {
                  var r = (function (e, t) {
                      for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = $(e)); );
                      return e;
                  })(e, t);
                  if (r) {
                      var i = Object.getOwnPropertyDescriptor(r, t);
                      return i.get ? i.get.call(a || e) : i.value;
                  }
              })(e, t, a || e);
}
function ee(e, t) {
    return (ee =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
f(), y();
var et = function (e) {
        return ea(e)[0];
    },
    ea = function (e) {
        if ("string" != typeof e || "" === e) return ["localhost"];
        var t,
            a = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
        return a && (t = (a.match(/[^\.]+\.[^\.]+$/) || [])[0]), [a, t];
    },
    er = _(p()),
    ei = function () {
        var e = er.default.performance;
        return void 0 !== (e && e.timing);
    },
    en = function () {
        var e = er.default.performance,
            t = e && e.timing;
        return t && t.domContentLoadedEventEnd;
    },
    eo = function () {
        var e = er.default.performance,
            t = e && e.timing;
        return t && t.navigationStart;
    };
function es(e, t, a) {
    (a = void 0 === a ? 1 : a), (e[t] = e[t] || 0), (e[t] += a);
}
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                X(e, t, a[t]);
            });
    }
    return e;
}
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
var el = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
    ec = ["x-cdn", "content-type"].concat(el);
function e_(e) {
    var t = {};
    return (
        (e = e || "")
            .trim()
            .split(/[\r\n]+/)
            .forEach(function (e) {
                if (e) {
                    var a = e.split(": "),
                        r = a.shift();
                    r &&
                        (ec.indexOf(r.toLowerCase()) >= 0 || 0 === r.toLowerCase().indexOf("x-litix-")) &&
                        (t[r] = a.join(": "));
                }
            }),
        t
    );
}
function ep(e) {
    if (e) {
        var t = el.find(function (t) {
            return void 0 !== e[t];
        });
        return t ? e[t] : void 0;
    }
}
var eh = function (e) {
        var t = {};
        for (var a in e) {
            var r = e[a];
            -1 !== r["DATA-ID"].search("io.litix.data.") && (t[r["DATA-ID"].replace("io.litix.data.", "")] = r.VALUE);
        }
        return t;
    },
    ef = function (e) {
        if (!e) return {};
        var t = eo(),
            a = e.loading,
            r = a ? a.start : e.trequest,
            i = a ? a.first : e.tfirst,
            n = a ? a.end : e.tload;
        return {
            bytesLoaded: e.total,
            requestStart: Math.round(t + r),
            responseStart: Math.round(t + i),
            responseEnd: Math.round(t + n),
        };
    },
    em = function (e) {
        if (!(!e || "function" != typeof e.getAllResponseHeaders)) return e_(e.getAllResponseHeaders());
    },
    ev = function (e, t, a) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var r = arguments.length > 4 ? arguments[4] : void 0,
            i = e.log,
            n = e.utils.secondsToMs,
            o = function (e) {
                var t,
                    a = parseInt(r.version);
                return (
                    1 === a && null !== e.programDateTime && (t = e.programDateTime),
                    0 === a && null !== e.pdt && (t = e.pdt),
                    t
                );
            };
        if (!ei()) return void i.warn("performance timing not supported. Not tracking HLS.js.");
        var s = function (a, r) {
                return e.emit(t, a, r);
            },
            u = function (e, t) {
                var a = t.levels,
                    r = t.audioTracks,
                    i = t.url,
                    n = t.stats,
                    o = t.networkDetails,
                    u = t.sessionData,
                    d = {},
                    l = {};
                a.forEach(function (e, t) {
                    d[t] = { width: e.width, height: e.height, bitrate: e.bitrate, attrs: e.attrs };
                }),
                    r.forEach(function (e, t) {
                        l[t] = { name: e.name, language: e.lang, bitrate: e.bitrate };
                    });
                var c = ef(n),
                    _ = c.bytesLoaded,
                    p = c.requestStart,
                    h = c.responseStart,
                    f = c.responseEnd;
                s(
                    "requestcompleted",
                    ed(eu({}, eh(u)), {
                        request_event_type: e,
                        request_bytes_loaded: _,
                        request_start: p,
                        request_response_start: h,
                        request_response_end: f,
                        request_type: "manifest",
                        request_hostname: et(i),
                        request_response_headers: em(o),
                        request_rendition_lists: { media: d, audio: l, video: {} },
                    }),
                );
            };
        a.on(r.Events.MANIFEST_LOADED, u);
        var d = function (e, t) {
            var a = t.details,
                r = t.level,
                i = t.networkDetails,
                u = ef(t.stats),
                d = u.bytesLoaded,
                l = u.requestStart,
                c = u.responseStart,
                _ = u.responseEnd,
                p = a.fragments[a.fragments.length - 1],
                h = o(p) + n(p.duration);
            s("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: d,
                request_start: l,
                request_response_start: c,
                request_response_end: _,
                request_current_level: r,
                request_type: "manifest",
                request_hostname: et(a.url),
                request_response_headers: em(i),
                video_holdback: a.holdBack && n(a.holdBack),
                video_part_holdback: a.partHoldBack && n(a.partHoldBack),
                video_part_target_duration: a.partTarget && n(a.partTarget),
                video_target_duration: a.targetduration && n(a.targetduration),
                video_source_is_live: a.live,
                player_manifest_newest_program_time: isNaN(h) ? void 0 : h,
            });
        };
        a.on(r.Events.LEVEL_LOADED, d);
        var l = function (e, t) {
            var a = t.details,
                r = t.networkDetails,
                i = ef(t.stats);
            s("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: i.bytesLoaded,
                request_start: i.requestStart,
                request_response_start: i.responseStart,
                request_response_end: i.responseEnd,
                request_type: "manifest",
                request_hostname: et(a.url),
                request_response_headers: em(r),
            });
        };
        a.on(r.Events.AUDIO_TRACK_LOADED, l);
        var c = function (e, t) {
            var r = t.stats,
                i = t.networkDetails,
                n = t.frag,
                o = ef((r = r || n.stats)),
                u = o.bytesLoaded,
                d = o.requestStart,
                l = o.responseStart,
                c = o.responseEnd,
                _ = i ? em(i) : void 0,
                p = {
                    request_event_type: e,
                    request_bytes_loaded: u,
                    request_start: d,
                    request_response_start: l,
                    request_response_end: c,
                    request_hostname: i ? et(i.responseURL) : void 0,
                    request_id: _ ? ep(_) : void 0,
                    request_response_headers: _,
                    request_media_duration: n.duration,
                    request_url: null == i ? void 0 : i.responseURL,
                };
            "main" === n.type
                ? ((p.request_type = "media"),
                  (p.request_current_level = n.level),
                  (p.request_video_width = (a.levels[n.level] || {}).width),
                  (p.request_video_height = (a.levels[n.level] || {}).height),
                  (p.request_labeled_bitrate = (a.levels[n.level] || {}).bitrate))
                : (p.request_type = n.type),
                s("requestcompleted", p);
        };
        a.on(r.Events.FRAG_LOADED, c);
        var _ = function (e, t) {
            var a = t.frag,
                r = a.start;
            s("fragmentchange", { currentFragmentPDT: o(a), currentFragmentStart: n(r) });
        };
        a.on(r.Events.FRAG_CHANGED, _);
        var p = function (e, t) {
            var a,
                i = t.type,
                n = t.details,
                o = t.response,
                u = t.fatal,
                d = t.frag,
                l = t.networkDetails,
                c = (null == d ? void 0 : d.url) || t.url || "",
                _ = l ? em(l) : void 0;
            (n === r.ErrorDetails.MANIFEST_LOAD_ERROR ||
                n === r.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                n === r.ErrorDetails.FRAG_LOAD_ERROR ||
                n === r.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                n === r.ErrorDetails.LEVEL_LOAD_ERROR ||
                n === r.ErrorDetails.LEVEL_LOAD_TIMEOUT ||
                n === r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                n === r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ||
                n === r.ErrorDetails.SUBTITLE_LOAD_ERROR ||
                n === r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ||
                n === r.ErrorDetails.KEY_LOAD_ERROR ||
                n === r.ErrorDetails.KEY_LOAD_TIMEOUT) &&
                s("requestfailed", {
                    request_error: n,
                    request_url: c,
                    request_hostname: et(c),
                    request_id: _ ? ep(_) : void 0,
                    request_type:
                        n === r.ErrorDetails.FRAG_LOAD_ERROR || n === r.ErrorDetails.FRAG_LOAD_TIMEOUT
                            ? "media"
                            : n === r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                                n === r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                              ? "audio"
                              : n === r.ErrorDetails.SUBTITLE_LOAD_ERROR || n === r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT
                                ? "subtitle"
                                : n === r.ErrorDetails.KEY_LOAD_ERROR || n === r.ErrorDetails.KEY_LOAD_TIMEOUT
                                  ? "encryption"
                                  : "manifest",
                    request_error_code: null == o ? void 0 : o.code,
                    request_error_text: null == o ? void 0 : o.text,
                }),
                u &&
                    s("error", {
                        player_error_code: i,
                        player_error_message: n,
                        player_error_context:
                            "".concat(c ? "url: ".concat(c, "\n") : "") +
                            "".concat(
                                o && (o.code || o.text) ? "response: ".concat(o.code, ", ").concat(o.text, "\n") : "",
                            ) +
                            "".concat(t.reason ? "failure reason: ".concat(t.reason, "\n") : "") +
                            "".concat(t.level ? "level: ".concat(t.level, "\n") : "") +
                            "".concat(t.parent ? "parent stream controller: ".concat(t.parent, "\n") : "") +
                            "".concat(t.buffer ? "buffer length: ".concat(t.buffer, "\n") : "") +
                            "".concat(t.error ? "error: ".concat(t.error, "\n") : "") +
                            "".concat(t.event ? "event: ".concat(t.event, "\n") : "") +
                            "".concat(
                                t.err ? "error message: ".concat(null == (a = t.err) ? void 0 : a.message, "\n") : "",
                            ),
                    });
        };
        a.on(r.Events.ERROR, p);
        var h = function (e, t) {
            var a = t.frag,
                r = (a && a._url) || "";
            s("requestcanceled", {
                request_event_type: e,
                request_url: r,
                request_type: "media",
                request_hostname: et(r),
            });
        };
        a.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, h);
        var f = function (e, t) {
            var r = t.level,
                n = a.levels[r];
            if (n && n.attrs && n.attrs.BANDWIDTH) {
                var o,
                    u = n.attrs.BANDWIDTH,
                    d = parseFloat(n.attrs["FRAME-RATE"]);
                isNaN(d) || (o = d),
                    u
                        ? s("renditionchange", {
                              video_source_fps: o,
                              video_source_bitrate: u,
                              video_source_width: n.width,
                              video_source_height: n.height,
                              video_source_rendition_name: n.name,
                              video_source_codec: null == n ? void 0 : n.videoCodec,
                          })
                        : i.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
            }
        };
        a.on(r.Events.LEVEL_SWITCHED, f),
            (a._stopMuxMonitor = function () {
                a.off(r.Events.MANIFEST_LOADED, u),
                    a.off(r.Events.LEVEL_LOADED, d),
                    a.off(r.Events.AUDIO_TRACK_LOADED, l),
                    a.off(r.Events.FRAG_LOADED, c),
                    a.off(r.Events.FRAG_CHANGED, _),
                    a.off(r.Events.ERROR, p),
                    a.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, h),
                    a.off(r.Events.LEVEL_SWITCHED, f),
                    a.off(r.Events.DESTROYING, a._stopMuxMonitor),
                    delete a._stopMuxMonitor;
            }),
            a.on(r.Events.DESTROYING, a._stopMuxMonitor);
    },
    ey = function (e) {
        e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
    },
    eg = function (e, t) {
        if (!e || !e.requestEndDate) return {};
        var a,
            r = et(e.url),
            i = e.url,
            n = e.bytesLoaded,
            o = new Date(e.requestStartDate).getTime(),
            s = new Date(e.firstByteDate).getTime(),
            u = new Date(e.requestEndDate).getTime(),
            d = isNaN(e.duration) ? 0 : e.duration,
            l =
                "function" == typeof t.getMetricsFor
                    ? t.getMetricsFor(e.mediaType).HttpList
                    : t.getDashMetrics().getHttpRequests(e.mediaType);
        l.length > 0 && (a = e_(l[l.length - 1]._responseHeaders || ""));
        var c = a ? ep(a) : void 0;
        return {
            requestStart: o,
            requestResponseStart: s,
            requestResponseEnd: u,
            requestBytesLoaded: n,
            requestResponseHeaders: a,
            requestMediaDuration: d,
            requestHostname: r,
            requestUrl: i,
            requestId: c,
        };
    },
    eb = function (e, t) {
        var a = t.getQualityFor(e),
            r = t.getCurrentTrackFor(e).bitrateList;
        return r
            ? {
                  currentLevel: a,
                  renditionWidth: r[a].width || null,
                  renditionHeight: r[a].height || null,
                  renditionBitrate: r[a].bandwidth,
              }
            : {};
    },
    ew = function (e) {
        var t;
        return null == (t = e.match(/.*codecs\*?="(.*)"/)) ? void 0 : t[1];
    },
    eT = function (e) {
        try {
            var t, a;
            return null == (a = e.getVersion) || null == (t = a.call(e))
                ? void 0
                : t.split(".").map(function (e) {
                      return parseInt(e);
                  })[0];
        } catch (e) {
            return !1;
        }
    },
    ek = function (e, t, a) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var r = e.log;
        if (!a || !a.on) return void r.warn("Invalid dash.js player reference. Monitoring blocked.");
        var i = eT(a),
            n = function (a, r) {
                return e.emit(t, a, r);
            },
            o = function (e) {
                var t = e.type,
                    a = (e.data || {}).url;
                n("requestcompleted", {
                    request_event_type: t,
                    request_start: 0,
                    request_response_start: 0,
                    request_response_end: 0,
                    request_bytes_loaded: -1,
                    request_type: "manifest",
                    request_hostname: et(a),
                    request_url: a,
                });
            };
        a.on("manifestLoaded", o);
        var s = {},
            u = function (e) {
                if ("function" != typeof e.getRequests) return null;
                var t = e.getRequests({ state: "executed" });
                return 0 === t.length ? null : t[t.length - 1];
            },
            d = function (e) {
                var t = e.type,
                    r = e.chunk,
                    i = e.request,
                    o = (r || {}).mediaInfo || {},
                    u = o.type,
                    d = o.bitrateList,
                    l = {};
                (d = d || []).forEach(function (e, t) {
                    (l[t] = {}),
                        (l[t].width = e.width),
                        (l[t].height = e.height),
                        (l[t].bitrate = e.bandwidth),
                        (l[t].attrs = {});
                }),
                    "video" === u ? (s.video = l) : "audio" === u ? (s.audio = l) : (s.media = l);
                var c = eg(i, a),
                    _ = c.requestStart,
                    p = c.requestResponseStart,
                    h = c.requestResponseEnd,
                    f = c.requestResponseHeaders,
                    v = c.requestMediaDuration,
                    y = c.requestHostname,
                    g = c.requestUrl;
                n("requestcompleted", {
                    request_event_type: t,
                    request_start: _,
                    request_response_start: p,
                    request_response_end: h,
                    request_bytes_loaded: -1,
                    request_type: u + "_init",
                    request_response_headers: f,
                    request_hostname: y,
                    request_id: c.requestId,
                    request_url: g,
                    request_media_duration: v,
                    request_rendition_lists: s,
                });
            };
        i >= 4
            ? a.on("initFragmentLoaded", d)
            : a.on("initFragmentLoaded", function (e) {
                  var t = e.type,
                      a = e.fragmentModel,
                      r = e.chunk;
                  d({ type: t, request: u(a), chunk: r });
              });
        var l = function (e) {
            var t = e.type,
                r = e.chunk,
                i = e.request,
                o = r || {},
                s = o.mediaInfo,
                u = o.start,
                d = (s || {}).type,
                l = eg(i, a),
                c = l.requestStart,
                _ = l.requestResponseStart,
                p = l.requestResponseEnd,
                h = l.requestBytesLoaded,
                f = l.requestResponseHeaders,
                v = l.requestMediaDuration,
                y = l.requestHostname,
                g = l.requestUrl,
                b = l.requestId,
                w = eb(d, a),
                T = w.currentLevel,
                k = w.renditionWidth,
                E = w.renditionHeight;
            n("requestcompleted", {
                request_event_type: t,
                request_start: c,
                request_response_start: _,
                request_response_end: p,
                request_bytes_loaded: h,
                request_type: d,
                request_response_headers: f,
                request_hostname: y,
                request_id: b,
                request_url: g,
                request_media_start_time: u,
                request_media_duration: v,
                request_current_level: T,
                request_labeled_bitrate: w.renditionBitrate,
                request_video_width: k,
                request_video_height: E,
            });
        };
        i >= 4
            ? a.on("mediaFragmentLoaded", l)
            : a.on("mediaFragmentLoaded", function (e) {
                  var t = e.type,
                      a = e.fragmentModel,
                      r = e.chunk;
                  l({ type: t, request: u(a), chunk: r });
              });
        var c = { video: void 0, audio: void 0, totalBitrate: void 0 },
            _ = function () {
                if (c.video && "number" == typeof c.video.bitrate) {
                    if (!(c.video.width && c.video.height))
                        return void r.warn("have bitrate info for video but missing width/height");
                    var e = c.video.bitrate;
                    if ((c.audio && "number" == typeof c.audio.bitrate && (e += c.audio.bitrate), e !== c.totalBitrate))
                        return (
                            (c.totalBitrate = e),
                            {
                                video_source_bitrate: e,
                                video_source_height: c.video.height,
                                video_source_width: c.video.width,
                                video_source_codec: ew(c.video.codec),
                            }
                        );
                }
            },
            p = function (e, t, i) {
                if ("number" != typeof e.newQuality)
                    return void r.warn("missing evt.newQuality in qualityChangeRendered event", e);
                var o = e.mediaType;
                if ("audio" === o || "video" === o) {
                    var s = a.getBitrateInfoListFor(o).find(function (t) {
                        return t.qualityIndex === e.newQuality;
                    });
                    if (!(s && "number" == typeof s.bitrate)) return void r.warn("missing bitrate info for ".concat(o));
                    c[o] = ed(eu({}, s), { codec: a.getCurrentTrackFor(o).codec });
                    var u = _();
                    u && n("renditionchange", u);
                }
            };
        a.on("qualityChangeRendered", p);
        var h = function (e) {
            var t = e.request,
                a = e.mediaType;
            n("requestcanceled", {
                request_event_type: (t = t || {}).type + "_" + t.action,
                request_url: t.url,
                request_type: a,
                request_hostname: et(t.url),
            });
        };
        a.on("fragmentLoadingAbandoned", h);
        var f = function (e) {
            var t,
                a,
                r = e.error,
                i = (null == r || null == (t = r.data) ? void 0 : t.request) || {},
                o = (null == r || null == (a = r.data) ? void 0 : a.response) || {};
            (null == r ? void 0 : r.code) === 27 &&
                n("requestfailed", {
                    request_error: i.type + "_" + i.action,
                    request_url: i.url,
                    request_hostname: et(i.url),
                    request_type: i.mediaType,
                    request_error_code: o.status,
                    request_error_text: o.statusText,
                });
            var s =
                "".concat(null != i && i.url ? "url: ".concat(i.url, "\n") : "") +
                "".concat(
                    (null != o && o.status) || (null != o && o.statusText)
                        ? "response: "
                              .concat(null == o ? void 0 : o.status, ", ")
                              .concat(null == o ? void 0 : o.statusText, "\n")
                        : "",
                );
            n("error", {
                player_error_code: null == r ? void 0 : r.code,
                player_error_message: null == r ? void 0 : r.message,
                player_error_context: s,
            });
        };
        a.on("error", f),
            (a._stopMuxMonitor = function () {
                a.off("manifestLoaded", o),
                    a.off("initFragmentLoaded", d),
                    a.off("mediaFragmentLoaded", l),
                    a.off("qualityChangeRendered", p),
                    a.off("error", f),
                    a.off("fragmentLoadingAbandoned", h),
                    delete a._stopMuxMonitor;
            });
    },
    eE = function (e) {
        e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
    },
    ex = 0,
    eD = (function () {
        function e() {
            J(this, e), X(this, "_listeners", void 0);
        }
        return (
            Y(e, [
                {
                    key: "on",
                    value: function (e, t, a) {
                        return (
                            (t._eventEmitterGuid = t._eventEmitterGuid || ++ex),
                            (this._listeners = this._listeners || {}),
                            (this._listeners[e] = this._listeners[e] || []),
                            a && (t = t.bind(a)),
                            this._listeners[e].push(t),
                            t
                        );
                    },
                },
                {
                    key: "off",
                    value: function (e, t) {
                        var a = this._listeners && this._listeners[e];
                        a &&
                            a.forEach(function (e, r) {
                                e._eventEmitterGuid === t._eventEmitterGuid && a.splice(r, 1);
                            });
                    },
                },
                {
                    key: "one",
                    value: function (e, t, a) {
                        var r = this;
                        t._eventEmitterGuid = t._eventEmitterGuid || ++ex;
                        var i = function () {
                            r.off(e, i), t.apply(a || this, arguments);
                        };
                        (i._eventEmitterGuid = t._eventEmitterGuid), this.on(e, i);
                    },
                },
                {
                    key: "emit",
                    value: function (e, t) {
                        var a = this;
                        if (this._listeners) {
                            t = t || {};
                            var r = this._listeners["before" + e] || [],
                                i = this._listeners["before*"] || [],
                                n = this._listeners[e] || [],
                                o = this._listeners["after" + e] || [],
                                s = function (t, r) {
                                    (t = t.slice()).forEach(function (t) {
                                        t.call(a, { type: e }, r);
                                    });
                                };
                            s(r, t), s(i, t), s(n, t), s(o, t);
                        }
                    },
                },
            ]),
            e
        );
    })(),
    eq = _(p()),
    eP = (function () {
        function e(t) {
            var a = this;
            J(this, e),
                X(this, "_playbackHeartbeatInterval", void 0),
                X(this, "_playheadShouldBeProgressing", void 0),
                X(this, "pm", void 0),
                (this.pm = t),
                (this._playbackHeartbeatInterval = null),
                (this._playheadShouldBeProgressing = !1),
                t.on("playing", function () {
                    a._playheadShouldBeProgressing = !0;
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
                    t.data.player_is_paused ? a._stopPlaybackHeartbeatInterval() : a._startPlaybackHeartbeatInterval();
                }),
                t.on("timeupdate", function () {
                    null !== a._playbackHeartbeatInterval && t.emit("playbackheartbeat");
                }),
                t.on("devicesleep", function (e, r) {
                    null !== a._playbackHeartbeatInterval &&
                        (eq.default.clearInterval(a._playbackHeartbeatInterval),
                        t.emit("playbackheartbeatend", { viewer_time: r.viewer_time }),
                        (a._playbackHeartbeatInterval = null));
                });
        }
        return (
            Y(e, [
                {
                    key: "_startPlaybackHeartbeatInterval",
                    value: function () {
                        var e = this;
                        null === this._playbackHeartbeatInterval &&
                            (this.pm.emit("playbackheartbeat"),
                            (this._playbackHeartbeatInterval = eq.default.setInterval(function () {
                                e.pm.emit("playbackheartbeat");
                            }, this.pm.playbackHeartbeatTime)));
                    },
                },
                {
                    key: "_stopPlaybackHeartbeatInterval",
                    value: function () {
                        (this._playheadShouldBeProgressing = !1),
                            null !== this._playbackHeartbeatInterval &&
                                (eq.default.clearInterval(this._playbackHeartbeatInterval),
                                this.pm.emit("playbackheartbeatend"),
                                (this._playbackHeartbeatInterval = null));
                    },
                },
            ]),
            e
        );
    })(),
    eO = function e(t) {
        var a = this;
        J(this, e),
            X(this, "viewErrored", void 0),
            t.on("viewinit", function () {
                a.viewErrored = !1;
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
                        (a.viewErrored = !0));
                } catch (e) {
                    t.mux.log.warn("Exception in error translator callback.", e), (a.viewErrored = !0);
                }
            }),
            t.on("aftererror", function () {
                var e, a, r, i, n;
                null == (e = t.data) || delete e.player_error_code,
                    null == (a = t.data) || delete a.player_error_message,
                    null == (r = t.data) || delete r.player_error_context,
                    null == (i = t.data) || delete i.player_error_severity,
                    null == (n = t.data) || delete n.player_error_business_exception;
            });
    },
    eA = (function () {
        function e(t) {
            J(this, e),
                X(this, "_watchTimeTrackerLastCheckedTime", void 0),
                X(this, "pm", void 0),
                (this.pm = t),
                (this._watchTimeTrackerLastCheckedTime = null),
                t.on("playbackheartbeat", this._updateWatchTime.bind(this)),
                t.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
        }
        return (
            Y(e, [
                {
                    key: "_updateWatchTime",
                    value: function (e, t) {
                        var a = t.viewer_time;
                        null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = a),
                            es(this.pm.data, "view_watch_time", a - this._watchTimeTrackerLastCheckedTime),
                            (this._watchTimeTrackerLastCheckedTime = a);
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
    eS = (function () {
        function e(t) {
            var a = this;
            J(this, e),
                X(this, "_playbackTimeTrackerLastPlayheadPosition", void 0),
                X(this, "_lastTime", void 0),
                X(this, "_isAdPlaying", void 0),
                X(this, "_callbackUpdatePlaybackTime", void 0),
                X(this, "pm", void 0),
                (this.pm = t),
                (this._playbackTimeTrackerLastPlayheadPosition = -1),
                (this._lastTime = H()),
                (this._isAdPlaying = !1),
                (this._callbackUpdatePlaybackTime = null),
                t.on("viewinit", function () {
                    a.pm.data.view_playing_time_ms_cumulative = 0;
                });
            var r = this._startPlaybackTimeTracking.bind(this);
            t.on("playing", r), t.on("adplaying", r), t.on("seeked", r), t.on("rebufferend", r);
            var i = this._stopPlaybackTimeTracking.bind(this);
            t.on("playbackheartbeatend", i),
                t.on("seeking", i),
                t.on("rebufferstart", i),
                t.on("adplaying", function () {
                    a._isAdPlaying = !0;
                }),
                t.on("adended", function () {
                    a._isAdPlaying = !1;
                }),
                t.on("adpause", function () {
                    a._isAdPlaying = !1;
                }),
                t.on("adbreakstart", function () {
                    a._isAdPlaying = !1;
                }),
                t.on("adbreakend", function () {
                    a._isAdPlaying = !1;
                }),
                t.on("adplay", function () {
                    a._isAdPlaying = !1;
                }),
                t.on("viewinit", function () {
                    (a._playbackTimeTrackerLastPlayheadPosition = -1),
                        (a._lastTime = H()),
                        (a._isAdPlaying = !1),
                        (a._callbackUpdatePlaybackTime = null);
                });
        }
        return (
            Y(e, [
                {
                    key: "_startPlaybackTimeTracking",
                    value: function () {
                        null === this._callbackUpdatePlaybackTime &&
                            ((this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this)),
                            (this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time),
                            (this._lastTime = H()),
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
                            t = H(),
                            a = t - this._lastTime,
                            r = -1;
                        this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
                        e > this._playbackTimeTrackerLastPlayheadPosition
                            ? (r = e - this._playbackTimeTrackerLastPlayheadPosition)
                            : this._isAdPlaying && (r = a),
                            r > 0 && r <= 1e3 && es(this.pm.data, "view_content_playback_time", r),
                            null !== this._callbackUpdatePlaybackTime &&
                                a > 0 &&
                                a <= 1e3 &&
                                (this._isAdPlaying && es(this.pm.data, "ad_playing_time_ms_cumulative", a),
                                es(this.pm.data, "view_playing_time_ms_cumulative", a)),
                            (this._playbackTimeTrackerLastPlayheadPosition = e),
                            (this._lastTime = t);
                    },
                },
            ]),
            e
        );
    })(),
    eR = (function () {
        function e(t) {
            J(this, e), X(this, "pm", void 0), (this.pm = t);
            var a = this._updatePlayheadTime.bind(this);
            t.on("playbackheartbeat", a),
                t.on("playbackheartbeatend", a),
                t.on("timeupdate", a),
                t.on("destroy", function () {
                    t.off("timeupdate", a);
                });
        }
        return (
            Y(e, [
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
                        var a = this,
                            r = function () {
                                a.pm.currentFragmentPDT &&
                                    a.pm.currentFragmentStart &&
                                    (a.pm.data.player_program_time =
                                        a.pm.currentFragmentPDT +
                                        a.pm.data.player_playhead_time -
                                        a.pm.currentFragmentStart);
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
    eL = function e(t) {
        if ((J(this, e), !t.disableRebufferTracking)) {
            var a,
                r = function (e, t) {
                    i(t), (a = void 0);
                },
                i = function (e) {
                    if (a) {
                        var r = e.viewer_time - a;
                        es(t.data, "view_rebuffer_duration", r),
                            (a = e.viewer_time),
                            t.data.view_rebuffer_duration > 3e5 &&
                                (t.emit("viewend"),
                                t.send("viewend"),
                                t.mux.log.warn(
                                    "Ending view after rebuffering for longer than ".concat(
                                        3e5,
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
                    a || (es(t.data, "view_rebuffer_count", 1), (a = i.viewer_time), t.one("rebufferend", r));
                }),
                t.on("viewinit", function () {
                    (a = void 0), t.off("rebufferend", r);
                });
        }
    },
    eI = (function () {
        function e(t) {
            var a = this;
            J(this, e),
                X(this, "_lastCheckedTime", void 0),
                X(this, "_lastPlayheadTime", void 0),
                X(this, "_lastPlayheadTimeUpdatedTime", void 0),
                X(this, "_rebuffering", void 0),
                X(this, "pm", void 0),
                (this.pm = t),
                t.disableRebufferTracking ||
                    t.disablePlayheadRebufferTracking ||
                    ((this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null),
                    t.on("playbackheartbeat", this._checkIfRebuffering.bind(this)),
                    t.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)),
                    t.on("seeking", function () {
                        a._cleanupRebufferTracker(null, { viewer_time: H() });
                    }));
        }
        return (
            Y(e, [
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
                        var a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                        "number" == typeof this.pm.sustainedRebufferThreshold &&
                            a >= this.pm.sustainedRebufferThreshold &&
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
                        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
                        a ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState();
                    },
                },
            ]),
            e
        );
    })(),
    eN = (function () {
        function e(t) {
            var a = this;
            J(this, e),
                X(this, "pm", void 0),
                (this.pm = t),
                t.on("viewinit", function () {
                    var e = t.data,
                        r = e.view_id;
                    if (!e.view_program_changed) {
                        var i = function (e, i) {
                            var n = i.viewer_time;
                            "playing" === e.type && void 0 === t.data.view_time_to_first_frame
                                ? a.calculateTimeToFirstFrame(n || H(), r)
                                : "adplaying" === e.type &&
                                  (void 0 === t.data.view_time_to_first_frame || a._inPrerollPosition()) &&
                                  a.calculateTimeToFirstFrame(n || H(), r);
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
            Y(e, [
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
    eC = function e(t) {
        var a = this;
        J(this, e),
            X(this, "_lastPlayerHeight", void 0),
            X(this, "_lastPlayerWidth", void 0),
            X(this, "_lastPlayheadPosition", void 0),
            X(this, "_lastSourceHeight", void 0),
            X(this, "_lastSourceWidth", void 0),
            t.on("viewinit", function () {
                a._lastPlayheadPosition = -1;
            }),
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
                        a._lastPlayheadPosition >= 0 &&
                        t.data.player_playhead_time >= 0 &&
                        a._lastPlayerWidth >= 0 &&
                        a._lastSourceWidth > 0 &&
                        a._lastPlayerHeight >= 0 &&
                        a._lastSourceHeight > 0
                    ) {
                        var e = t.data.player_playhead_time - a._lastPlayheadPosition;
                        if (e < 0) {
                            a._lastPlayheadPosition = -1;
                            return;
                        }
                        var r = Math.min(
                                a._lastPlayerWidth / a._lastSourceWidth,
                                a._lastPlayerHeight / a._lastSourceHeight,
                            ),
                            i = Math.max(0, r - 1),
                            n = Math.max(0, 1 - r);
                        (t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, i)),
                            (t.data.view_max_downscale_percentage = Math.max(
                                t.data.view_max_downscale_percentage || 0,
                                n,
                            )),
                            es(t.data, "view_total_content_playback_time", e),
                            es(t.data, "view_total_upscaling", i * e),
                            es(t.data, "view_total_downscaling", n * e);
                    }
                    a._lastPlayheadPosition = -1;
                });
            }),
            ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"].forEach(function (e) {
                t.on(e, function () {
                    (a._lastPlayheadPosition = t.data.player_playhead_time),
                        (a._lastPlayerWidth = t.data.player_width),
                        (a._lastPlayerHeight = t.data.player_height),
                        (a._lastSourceWidth = t.data.video_source_width),
                        (a._lastSourceHeight = t.data.video_source_height);
                });
            });
    },
    ej = function e(t) {
        var a = this;
        J(this, e), X(this, "isSeeking", void 0), (this.isSeeking = !1);
        var r = -1,
            i = function () {
                var e = H(),
                    i = (t.data.viewer_time || e) - (r || e);
                es(t.data, "view_seek_duration", i),
                    (t.data.view_max_seek_time = Math.max(t.data.view_max_seek_time || 0, i)),
                    (a.isSeeking = !1),
                    (r = -1);
            };
        t.on("seeking", function (e, n) {
            if ((Object.assign(t.data, n), a.isSeeking && n.viewer_time - r <= 2e3)) {
                r = n.viewer_time;
                return;
            }
            a.isSeeking && i(),
                (a.isSeeking = !0),
                (r = n.viewer_time),
                es(t.data, "view_seek_count", 1),
                t.send("seeking");
        }),
            t.on("seeked", function () {
                i();
            }),
            t.on("viewend", function () {
                a.isSeeking && (i(), t.send("seeked")), (a.isSeeking = !1), (r = -1);
            });
    },
    eH = function (e, t) {
        e.push(t),
            e.sort(function (e, t) {
                return e.viewer_time - t.viewer_time;
            });
    },
    eB = [
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
    eM = (function () {
        function e(t) {
            var a = this;
            J(this, e),
                X(this, "_adHasPlayed", void 0),
                X(this, "_adRequests", void 0),
                X(this, "_adResponses", void 0),
                X(this, "_currentAdRequestNumber", void 0),
                X(this, "_currentAdResponseNumber", void 0),
                X(this, "_prerollPlayTime", void 0),
                X(this, "_wouldBeNewAdPlay", void 0),
                X(this, "isAdBreak", void 0),
                X(this, "pm", void 0),
                (this.pm = t),
                t.on("viewinit", function () {
                    (a.isAdBreak = !1),
                        (a._currentAdRequestNumber = 0),
                        (a._currentAdResponseNumber = 0),
                        (a._adRequests = []),
                        (a._adResponses = []),
                        (a._adHasPlayed = !1),
                        (a._wouldBeNewAdPlay = !0),
                        (a._prerollPlayTime = void 0);
                }),
                eB.forEach(function (e) {
                    return t.on(e, a._updateAdData.bind(a));
                });
            var r = function () {
                a.isAdBreak = !1;
            };
            t.on("adbreakstart", function () {
                a.isAdBreak = !0;
            }),
                t.on("play", r),
                t.on("playing", r),
                t.on("viewend", r),
                t.on("adrequest", function (e, r) {
                    (r = Object.assign({ ad_request_id: "generatedAdRequestId" + a._currentAdRequestNumber++ }, r)),
                        eH(a._adRequests, r),
                        es(t.data, "view_ad_request_count"),
                        a.inPrerollPosition() &&
                            ((t.data.view_preroll_requested = !0),
                            a._adHasPlayed || es(t.data, "view_preroll_request_count"));
                }),
                t.on("adresponse", function (e, r) {
                    (r = Object.assign({ ad_request_id: "generatedAdRequestId" + a._currentAdResponseNumber++ }, r)),
                        eH(a._adResponses, r);
                    var i = a.findAdRequest(r.ad_request_id);
                    i && es(t.data, "view_ad_request_time", Math.max(0, r.viewer_time - i.viewer_time));
                }),
                t.on("adplay", function (e, r) {
                    (a._adHasPlayed = !0),
                        a._wouldBeNewAdPlay && ((a._wouldBeNewAdPlay = !1), es(t.data, "view_ad_played_count")),
                        a.inPrerollPosition() &&
                            !t.data.view_preroll_played &&
                            ((t.data.view_preroll_played = !0),
                            a._adRequests.length > 0 &&
                                (t.data.view_preroll_request_time = Math.max(
                                    0,
                                    r.viewer_time - a._adRequests[0].viewer_time,
                                )),
                            t.data.view_start &&
                                (t.data.view_startup_preroll_request_time = Math.max(
                                    0,
                                    r.viewer_time - t.data.view_start,
                                )),
                            (a._prerollPlayTime = r.viewer_time));
                }),
                t.on("adplaying", function (e, r) {
                    a.inPrerollPosition() &&
                        void 0 === t.data.view_preroll_load_time &&
                        void 0 !== a._prerollPlayTime &&
                        ((t.data.view_preroll_load_time = r.viewer_time - a._prerollPlayTime),
                        (t.data.view_startup_preroll_load_time = r.viewer_time - a._prerollPlayTime));
                }),
                t.on("adclicked", function (e, r) {
                    a._wouldBeNewAdPlay || es(t.data, "view_ad_clicked_count");
                }),
                t.on("adskipped", function (e, r) {
                    a._wouldBeNewAdPlay || es(t.data, "view_ad_skipped_count");
                }),
                t.on("adended", function () {
                    a._wouldBeNewAdPlay = !0;
                }),
                t.on("aderror", function () {
                    a._wouldBeNewAdPlay = !0;
                });
        }
        return (
            Y(e, [
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
                                var a = I(ea(t.ad_tag_url), 2),
                                    r = a[0],
                                    i = a[1];
                                (this.pm.data.view_preroll_ad_tag_domain = i),
                                    (this.pm.data.view_preroll_ad_tag_hostname = r);
                            }
                            if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                var n = I(ea(t.ad_asset_url), 2),
                                    o = n[0],
                                    s = n[1];
                                (this.pm.data.view_preroll_ad_asset_domain = s),
                                    (this.pm.data.view_preroll_ad_asset_hostname = o);
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
    eU = function e(t) {
        var a = this;
        J(this, e), X(this, "lastWallClockTime", void 0);
        var r = function () {
                (a.lastWallClockTime = H()), t.on("before*", i);
            },
            i = function (e) {
                var r = H(),
                    i = a.lastWallClockTime;
                (a.lastWallClockTime = r),
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
    eF = _(p()),
    eQ =
        ((ts = function () {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var a = arguments[e];
                for (var r in a) t[r] = a[r];
            }
            return t;
        }),
        (function e(t) {
            function a(e, r, i) {
                var n;
                if ("u" > typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof (i = ts({ path: "/" }, a.defaults, i)).expires) {
                            var o = new Date();
                            o.setMilliseconds(o.getMilliseconds() + 864e5 * i.expires), (i.expires = o);
                        }
                        try {
                            (n = JSON.stringify(r)), /^[\{\[]/.test(n) && (r = n);
                        } catch (e) {}
                        return (
                            (r = t.write
                                ? t.write(r, e)
                                : encodeURIComponent(String(r)).replace(
                                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                      decodeURIComponent,
                                  )),
                            (e = (e = (e = encodeURIComponent(String(e))).replace(
                                /%(23|24|26|2B|5E|60|7C)/g,
                                decodeURIComponent,
                            )).replace(/[\(\)]/g, escape)),
                            (document.cookie = [
                                e,
                                "=",
                                r,
                                i.expires ? "; expires=" + i.expires.toUTCString() : "",
                                i.path ? "; path=" + i.path : "",
                                i.domain ? "; domain=" + i.domain : "",
                                i.secure ? "; secure" : "",
                            ].join(""))
                        );
                    }
                    e || (n = {});
                    for (
                        var s = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0;
                        d < s.length;
                        d++
                    ) {
                        var l = s[d].split("="),
                            c = l.slice(1).join("=");
                        '"' === c.charAt(0) && (c = c.slice(1, -1));
                        try {
                            var _ = l[0].replace(u, decodeURIComponent);
                            if (((c = t.read ? t.read(c, _) : t(c, _) || c.replace(u, decodeURIComponent)), this.json))
                                try {
                                    c = JSON.parse(c);
                                } catch (e) {}
                            if (e === _) {
                                n = c;
                                break;
                            }
                            e || (n[_] = c);
                        } catch (e) {}
                    }
                    return n;
                }
            }
            return (
                (a.set = a),
                (a.get = function (e) {
                    return a.call(a, e);
                }),
                (a.getJSON = function () {
                    return a.apply({ json: !0 }, [].slice.call(arguments));
                }),
                (a.defaults = {}),
                (a.remove = function (e, t) {
                    a(e, "", ts(t, { expires: -1 }));
                }),
                (a.withConverter = e),
                a
            );
        })(function () {})),
    eW = "muxData",
    eG = function () {
        var e;
        try {
            e = (eQ.get(eW) || "").split("&").reduce(function (e, t) {
                var a = I(t.split("="), 2),
                    r = a[0],
                    i = a[1],
                    n = +i;
                return (e[r] = i && n == i ? n : i), e;
            }, {});
        } catch (t) {
            e = {};
        }
        return e;
    },
    eV = function (e) {
        try {
            eQ.set(
                eW,
                Object.entries(e)
                    .map(function (e) {
                        var t = I(e, 2),
                            a = t[0],
                            r = t[1];
                        return "".concat(a, "=").concat(r);
                    })
                    .join("&"),
                { expires: 365 },
            );
        } catch (e) {}
    },
    ez = function () {
        var e = eG();
        return (
            (e.mux_viewer_id = e.mux_viewer_id || B()),
            (e.msn = e.msn || Math.random()),
            eV(e),
            { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
        );
    },
    eJ = function () {
        var e = eG(),
            t = H();
        return (
            e.session_start && ((e.sst = e.session_start), delete e.session_start),
            e.session_id && ((e.sid = e.session_id), delete e.session_id),
            e.session_expires && ((e.sex = e.session_expires), delete e.session_expires),
            (!e.sex || e.sex < t) && ((e.sid = B()), (e.sst = t)),
            (e.sex = t + 15e5),
            eV(e),
            { session_id: e.sid, session_start: e.sst, session_expires: e.sex }
        );
    },
    eK = _(p()),
    eY = function () {
        var e;
        switch (eX()) {
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
    eX = function () {
        var e = eK.default.navigator,
            t = e && (e.connection || e.mozConnection || e.webkitConnection);
        return t && t.type;
    };
eY.getConnectionFromAPI = eX;
var e$ = e0({
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
    eZ = e0({
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
function e0(e) {
    var t = {};
    for (var a in e) e.hasOwnProperty(a) && (t[e[a]] = a);
    return t;
}
function e1(e) {
    var t = {},
        a = {};
    return (
        Object.keys(e).forEach(function (r) {
            var i = !1;
            if (e.hasOwnProperty(r) && void 0 !== e[r]) {
                var n = r.split("_"),
                    o = n[0],
                    s = e$[o];
                s || (W.info("Data key word `" + n[0] + "` not expected in " + r), (s = o + "_")),
                    n.splice(1).forEach(function (e) {
                        "url" === e && (i = !0),
                            eZ[e]
                                ? (s += eZ[e])
                                : Number.isInteger(Number(e))
                                  ? (s += e)
                                  : (W.info("Data key word `" + e + "` not expected in " + r), (s += "_" + e + "_"));
                    }),
                    i ? (a[s] = e[r]) : (t[s] = e[r]);
            }
        }),
        Object.assign(t, a)
    );
}
var e3 = _(p()),
    e2 = _(S()),
    e4 = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 1e4, maxPayloadKBSize: 500 },
    e5 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
    e6 = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this._beaconUrl = e || "https://img.litix.io"),
            (this._eventQueue = []),
            (this._postInFlight = !1),
            (this._resendAfterPost = !1),
            (this._failureCount = 0),
            (this._sendTimeout = !1),
            (this._options = Object.assign({}, e4, t));
    };
(e6.prototype.queueEvent = function (e, t) {
    var a = Object.assign({}, t);
    return (
        (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) &&
        (this._eventQueue.push(a),
        this._sendTimeout || this._startBeaconSending(),
        this._eventQueue.length <= this._options.maxQueueLength)
    );
}),
    (e6.prototype.flushEvents = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e && 1 === this._eventQueue.length
            ? this._eventQueue.pop()
            : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
    }),
    (e6.prototype.destroy = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.destroyed = !0),
            e ? this._clearBeaconQueue() : this.flushEvents(),
            e3.default.clearTimeout(this._sendTimeout);
    }),
    (e6.prototype._clearBeaconQueue = function () {
        var e =
                this._eventQueue.length > this._options.maxBeaconSize
                    ? this._eventQueue.length - this._options.maxBeaconSize
                    : 0,
            t = this._eventQueue.slice(e);
        e > 0 && Object.assign(t[t.length - 1], e1({ mux_view_message: "event queue truncated" }));
        var a = this._createPayload(t);
        e9(this._beaconUrl, a, !0, function () {});
    }),
    (e6.prototype._sendBeaconQueue = function () {
        var e = this;
        if (this._postInFlight) {
            this._resendAfterPost = !0;
            return;
        }
        var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
        (this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize)), (this._postInFlight = !0);
        var a = this._createPayload(t),
            r = H();
        e9(this._beaconUrl, a, !1, function (a, i) {
            i
                ? ((e._eventQueue = t.concat(e._eventQueue)),
                  (e._failureCount += 1),
                  W.info("Error sending beacon: " + i))
                : (e._failureCount = 0),
                (e._roundTripTime = H() - r),
                (e._postInFlight = !1),
                e._resendAfterPost && ((e._resendAfterPost = !1), e._eventQueue.length > 0 && e._sendBeaconQueue());
        });
    }),
    (e6.prototype._getNextBeaconTime = function () {
        if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
        var e = Math.pow(2, this._failureCount - 1);
        return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons;
    }),
    (e6.prototype._startBeaconSending = function () {
        var e = this;
        e3.default.clearTimeout(this._sendTimeout),
            this.destroyed ||
                (this._sendTimeout = e3.default.setTimeout(function () {
                    e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending();
                }, this._getNextBeaconTime()));
    }),
    (e6.prototype._createPayload = function (e) {
        var t = this,
            a = { transmission_timestamp: Math.round(H()) };
        this._roundTripTime && (a.rtt_ms = Math.round(this._roundTripTime));
        var r,
            i,
            n,
            o = function () {
                n = (r = JSON.stringify({ metadata: a, events: i || e })).length / 1024;
            },
            s = function () {
                return n <= t._options.maxPayloadKBSize;
            };
        return (
            o(),
            s() ||
                (W.info("Payload size is too big (" + n + " kb). Removing unnecessary events."),
                (i = e.filter(function (e) {
                    return -1 === e5.indexOf(e.e);
                })),
                o()),
            s() ||
                (W.info("Payload size still too big (" + n + " kb). Cropping fields.."),
                i.forEach(function (e) {
                    for (var t in e) {
                        var a = e[t];
                        "string" == typeof a && a.length > 51200 && (e[t] = a.substring(0, 51200));
                    }
                }),
                o()),
            r
        );
    });
var e8 =
        "function" == typeof e2.default.exitPictureInPicture
            ? function (e) {
                  return e.length <= 57344;
              }
            : function (e) {
                  return !1;
              },
    e9 = function (e, t, a, r) {
        if (a && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) return void r();
        if (e3.default.fetch)
            return void e3.default
                .fetch(e, { method: "POST", body: t, headers: { "Content-Type": "text/plain" }, keepalive: e8(t) })
                .then(function (e) {
                    return r(null, e.ok ? null : "Error");
                })
                .catch(function (e) {
                    return r(null, e);
                });
        if (e3.default.XMLHttpRequest) {
            var i = new e3.default.XMLHttpRequest();
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
    e7 = [
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
    te = [
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
    tt = ["ad_id", "ad_creative_id", "ad_universal_id"],
    ta = ["viewstart", "error", "ended", "viewend"],
    tr = (function () {
        function e(t, a) {
            var r,
                i,
                n,
                o,
                s,
                u,
                d,
                l,
                c,
                _,
                p,
                h,
                f,
                v,
                y,
                g,
                b,
                w,
                T,
                k = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J(this, e),
                X(this, "mux", void 0),
                X(this, "envKey", void 0),
                X(this, "options", void 0),
                X(this, "eventQueue", void 0),
                X(this, "sampleRate", void 0),
                X(this, "disableCookies", void 0),
                X(this, "respectDoNotTrack", void 0),
                X(this, "previousBeaconData", void 0),
                X(this, "lastEventTime", void 0),
                X(this, "rateLimited", void 0),
                X(this, "pageLevelData", void 0),
                X(this, "viewerData", void 0),
                (this.mux = t),
                (this.envKey = a),
                (this.options = k),
                (this.previousBeaconData = null),
                (this.lastEventTime = 0),
                (this.rateLimited = !1),
                (this.eventQueue = new e6(
                    ((r = this.envKey),
                    (n = (i = this.options).beaconCollectionDomain),
                    (o = i.beaconDomain),
                    n
                        ? "https://" + n
                        : (r = r || "inferred").match(/^[a-z0-9]+$/)
                          ? "https://" + r + "." + (o || "litix.io")
                          : "https://img.litix.io/a.gif"),
                )),
                (this.sampleRate = null != (b = this.options.sampleRate) ? b : 1),
                (this.disableCookies = null != (w = this.options.disableCookies) && w),
                (this.respectDoNotTrack = null != (T = this.options.respectDoNotTrack) && T),
                (this.previousBeaconData = null),
                (this.lastEventTime = 0),
                (this.rateLimited = !1),
                (this.pageLevelData = {
                    mux_api_version: this.mux.API_VERSION,
                    mux_embed: this.mux.NAME,
                    mux_embed_version: this.mux.VERSION,
                    viewer_application_name: null == (s = this.options.platform) ? void 0 : s.name,
                    viewer_application_version: null == (u = this.options.platform) ? void 0 : u.version,
                    viewer_application_engine: null == (d = this.options.platform) ? void 0 : d.layout,
                    viewer_device_name: null == (l = this.options.platform) ? void 0 : l.product,
                    viewer_device_category: "",
                    viewer_device_manufacturer: null == (c = this.options.platform) ? void 0 : c.manufacturer,
                    viewer_os_family: null == (p = this.options.platform) || null == (_ = p.os) ? void 0 : _.family,
                    viewer_os_architecture:
                        null == (f = this.options.platform) || null == (h = f.os) ? void 0 : h.architecture,
                    viewer_os_version: null == (y = this.options.platform) || null == (v = y.os) ? void 0 : v.version,
                    viewer_connection_type: eY(),
                    page_url:
                        null === eF.default || void 0 === eF.default || null == (g = eF.default.location)
                            ? void 0
                            : g.href,
                }),
                (this.viewerData = this.disableCookies ? {} : ez());
        }
        return (
            Y(e, [
                {
                    key: "send",
                    value: function (e, t) {
                        if (!(!e || !(null != t && t.view_id))) {
                            if (this.respectDoNotTrack && V())
                                return W.info("Not sending `" + e + "` because Do Not Track is enabled");
                            if (!t || "object" != typeof t)
                                return W.error("A data object was expected in send() but was not provided");
                            var a = this.disableCookies ? {} : eJ(),
                                r = ed(eu({}, this.pageLevelData, t, a, this.viewerData), {
                                    event: e,
                                    env_key: this.envKey,
                                });
                            r.user_id && ((r.viewer_user_id = r.user_id), delete r.user_id);
                            var i,
                                n = (null != (i = r.mux_sample_number) ? i : 0) >= this.sampleRate,
                                o = e1(this._deduplicateBeaconData(e, r));
                            if (((this.lastEventTime = this.mux.utils.now()), n))
                                return W.info("Not sending event due to sample rate restriction", e, r, o);
                            if (
                                (this.envKey ||
                                    W.info(
                                        "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
                                        e,
                                        r,
                                        o,
                                    ),
                                !this.rateLimited)
                            )
                                if (
                                    (W.info("Sending event", e, r, o),
                                    (this.rateLimited = !this.eventQueue.queueEvent(e, o)),
                                    this.mux.WINDOW_UNLOADING && "viewend" === e)
                                )
                                    this.eventQueue.destroy(!0);
                                else {
                                    if (this.mux.WINDOW_HIDDEN && "hb" === e) this.eventQueue.flushEvents(!0);
                                    else if (ta.indexOf(e) >= 0) {
                                        if ("error" === e && "warning" === t.player_error_severity) return;
                                        this.eventQueue.flushEvents();
                                    }
                                    if (this.rateLimited)
                                        return (
                                            (r.event = "eventrateexceeded"),
                                            (o = e1(r)),
                                            this.eventQueue.queueEvent(r.event, o),
                                            W.error("Beaconing disabled due to rate limit.")
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
                        var a = this,
                            r = {},
                            i = t.view_id;
                        if (
                            "-1" === i ||
                            "viewstart" === e ||
                            "viewend" === e ||
                            !this.previousBeaconData ||
                            this.mux.utils.now() - this.lastEventTime >= 6e5
                        )
                            (r = eu({}, t)),
                                i && (this.previousBeaconData = r),
                                i && "viewend" === e && (this.previousBeaconData = null);
                        else {
                            var n = 0 === e.indexOf("request");
                            Object.entries(t).forEach(function (t) {
                                var i = I(t, 2),
                                    o = i[0],
                                    s = i[1];
                                a.previousBeaconData &&
                                    (s !== a.previousBeaconData[o] ||
                                        e7.indexOf(o) > -1 ||
                                        a.objectHasChanged(n, o, s, a.previousBeaconData[o]) ||
                                        a.eventRequiresKey(e, o)) &&
                                    ((r[o] = s), (a.previousBeaconData[o] = s));
                            });
                        }
                        return r;
                    },
                },
                {
                    key: "objectHasChanged",
                    value: function (e, t, a, r) {
                        return (
                            !!e &&
                            0 === t.indexOf("request_") &&
                            ("request_response_headers" === t ||
                                "object" != typeof a ||
                                "object" != typeof r ||
                                Object.keys(a || {}).length !== Object.keys(r || {}).length)
                        );
                    },
                },
                {
                    key: "eventRequiresKey",
                    value: function (e, t) {
                        return !!(
                            ("renditionchange" === e && 0 === t.indexOf("video_source_")) ||
                            (tt.includes(t) && te.includes(e))
                        );
                    },
                },
            ]),
            e
        );
    })(),
    ti = function e(t) {
        J(this, e);
        var a = 0,
            r = 0,
            i = 0,
            n = 0,
            o = 0,
            s = 0,
            u = 0;
        t.on("requestcompleted", function (e, s) {
            var u,
                d,
                l = s.request_start,
                c = s.request_response_start,
                _ = s.request_response_end,
                p = s.request_bytes_loaded;
            if (
                (n++,
                c
                    ? ((u = c - (null != l ? l : 0)), (d = (null != _ ? _ : 0) - c))
                    : (d = (null != _ ? _ : 0) - (null != l ? l : 0)),
                d > 0 && p && p > 0)
            ) {
                var h = (p / d) * 8e3;
                o++,
                    (r += p),
                    (i += d),
                    (t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, h)),
                    (t.data.view_average_request_throughput = (r / i) * 8e3),
                    (t.data.view_request_count = n),
                    u > 0 &&
                        ((a += u),
                        (t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, u)),
                        (t.data.view_average_request_latency = a / o));
            }
        }),
            t.on("requestfailed", function (e, a) {
                n++, s++, (t.data.view_request_count = n), (t.data.view_request_failed_count = s);
            }),
            t.on("requestcanceled", function (e, a) {
                n++, u++, (t.data.view_request_count = n), (t.data.view_request_canceled_count = u);
            });
    },
    tn = function e(t) {
        var a = this;
        J(this, e),
            X(this, "_lastEventTime", void 0),
            t.on("before*", function (e, r) {
                var i = r.viewer_time,
                    n = H(),
                    o = a._lastEventTime;
                if (((a._lastEventTime = n), o && n - o > 36e5)) {
                    var s = Object.keys(t.data).reduce(function (e, a) {
                        return 0 === a.indexOf("video_") ? Object.assign(e, X({}, a, t.data[a])) : e;
                    }, {});
                    t.mux.log.info("Received event after at least an hour inactivity, creating a new view");
                    var u = t.playbackHeartbeat._playheadShouldBeProgressing;
                    t._resetView(Object.assign({ viewer_time: i }, s)),
                        (t.playbackHeartbeat._playheadShouldBeProgressing = u),
                        t.playbackHeartbeat._playheadShouldBeProgressing &&
                            "play" !== e.type &&
                            "adbreakstart" !== e.type &&
                            (t.emit("play", { viewer_time: i }),
                            "playing" !== e.type && t.emit("playing", { viewer_time: i }));
                }
            });
    };
function to(e, t) {
    return (null == e ? void 0 : e.toLowerCase()) === (null == t ? void 0 : t.toLowerCase());
}
var ts,
    tu,
    td = function e(t) {
        J(this, e);
        var a = function (e) {
                var a,
                    r,
                    i,
                    s =
                        null != (a = e) &&
                        a.request_type &&
                        ("media" === a.request_type || "video" === a.request_type) &&
                        null != (r = a.request_response_headers) &&
                        r["x-cdn"]
                            ? a.request_response_headers["x-cdn"]
                            : null != a && a.video_cdn
                              ? a.video_cdn
                              : null,
                    u =
                        null != (i = e) && i.request_start
                            ? i.request_start
                            : null != i && i.viewer_time
                              ? i.viewer_time
                              : Date.now();
                null != s && !to(s, n) && o <= u && ((n = s), (o = u), t.emit("cdnchange", { video_cdn: s }));
            },
            r = null,
            i = null,
            n = null,
            o = 0;
        t.on("viewinit", function () {
            (r = null), (i = null), (n = null), (o = 0);
        }),
            t.on("beforecdnchange", function (e, t) {
                var a = null == t ? void 0 : t.video_cdn;
                a &&
                    (void 0 === t.video_previous_cdn || null === t.video_previous_cdn) &&
                    (to(a, i)
                        ? (t.video_previous_cdn = null != r ? r : void 0)
                        : ((t.video_previous_cdn = null != i ? i : void 0), (r = i), (i = a)));
            }),
            t.on("requestcompleted", function (e, t) {
                a(t);
            });
    },
    tl = function (e) {
        try {
            return JSON.parse(e), !0;
        } catch (e) {
            return !1;
        }
    },
    tc = function e(t) {
        var a = this;
        J(this, e),
            X(this, "_emittingAutomaticEvent", !1),
            X(this, "_hasInitialized", !1),
            t.on("viewstart", function () {
                a._hasInitialized ||
                    ((a._hasInitialized = !0),
                    (a._emittingAutomaticEvent = !0),
                    t.emit("playbackmodechange", { player_playback_mode: "standard", player_playback_mode_data: "{}" }),
                    (a._emittingAutomaticEvent = !1));
            }),
            t.on("viewend", function () {
                a._hasInitialized = !1;
            }),
            t.on("playbackmodechange", function (e, r) {
                a._emittingAutomaticEvent ||
                    (r.player_playback_mode_data
                        ? tl(r.player_playback_mode_data) ||
                          (t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),
                          (r.player_playback_mode_data = "{}"))
                        : (r.player_playback_mode_data = "{}"),
                    (t.data.player_playback_mode_data = r.player_playback_mode_data),
                    (t.data.player_playback_mode = r.player_playback_mode));
            });
    },
    t_ = [
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
    tp = new Set(["requestcompleted", "requestfailed", "requestcanceled"]),
    th = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } })),
            e && ee(r, e);
        var t,
            a =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        a = $(r);
                    return (
                        (e = t ? Reflect.construct(a, arguments, $(this).constructor) : a.apply(this, arguments)),
                        e && ("object" === v(e) || "function" == typeof e) ? e : z(this)
                    );
                });
        function r(e, t, i) {
            J(this, r),
                X(z((n = a.call(this))), "pageLoadEndTime", void 0),
                X(z(n), "pageLoadInitTime", void 0),
                X(z(n), "_destroyed", void 0),
                X(z(n), "_heartBeatTimeout", void 0),
                X(z(n), "adTracker", void 0),
                X(z(n), "dashjs", void 0),
                X(z(n), "data", void 0),
                X(z(n), "disablePlayheadRebufferTracking", void 0),
                X(z(n), "disableRebufferTracking", void 0),
                X(z(n), "errorTracker", void 0),
                X(z(n), "errorTranslator", void 0),
                X(z(n), "emitTranslator", void 0),
                X(z(n), "getAdData", void 0),
                X(z(n), "getPlayheadTime", void 0),
                X(z(n), "getStateData", void 0),
                X(z(n), "stateDataTranslator", void 0),
                X(z(n), "hlsjs", void 0),
                X(z(n), "id", void 0),
                X(z(n), "longResumeTracker", void 0),
                X(z(n), "minimumRebufferDuration", void 0),
                X(z(n), "mux", void 0),
                X(z(n), "playbackEventDispatcher", void 0),
                X(z(n), "playbackHeartbeat", void 0),
                X(z(n), "playbackHeartbeatTime", void 0),
                X(z(n), "playheadTime", void 0),
                X(z(n), "seekingTracker", void 0),
                X(z(n), "sustainedRebufferThreshold", void 0),
                X(z(n), "watchTimeTracker", void 0),
                X(z(n), "currentFragmentPDT", void 0),
                X(z(n), "currentFragmentStart", void 0),
                (n.pageLoadInitTime = eo()),
                (n.pageLoadEndTime = en()),
                (n.mux = e),
                (n.id = t),
                null != i &&
                    i.beaconDomain &&
                    n.mux.log.warn(
                        "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.",
                    ),
                ((i = Object.assign(
                    {
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
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            return t;
                        },
                        stateDataTranslator: function (e) {
                            return e;
                        },
                    },
                    i,
                )).data = i.data || {}),
                i.data.property_key && ((i.data.env_key = i.data.property_key), delete i.data.property_key),
                (W.level = i.debug ? 1 : 3),
                (n.getPlayheadTime = i.getPlayheadTime),
                (n.getStateData =
                    i.getStateData ||
                    function () {
                        return {};
                    }),
                (n.getAdData = i.getAdData || function () {}),
                (n.minimumRebufferDuration = i.minimumRebufferDuration),
                (n.sustainedRebufferThreshold = i.sustainedRebufferThreshold),
                (n.playbackHeartbeatTime = i.playbackHeartbeatTime),
                (n.disableRebufferTracking = i.disableRebufferTracking),
                n.disableRebufferTracking &&
                    n.mux.log.warn(
                        "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.",
                    ),
                (n.disablePlayheadRebufferTracking = i.disablePlayheadRebufferTracking),
                (n.errorTranslator = i.errorTranslator),
                (n.emitTranslator = i.emitTranslator),
                (n.stateDataTranslator = i.stateDataTranslator),
                (n.playbackEventDispatcher = new tr(e, i.data.env_key, i)),
                (n.data = {
                    player_instance_id: B(),
                    mux_sample_rate: i.sampleRate,
                    beacon_domain: i.beaconCollectionDomain || i.beaconDomain,
                }),
                (n.data.view_sequence_number = 1),
                (n.data.player_sequence_number = 1);
            var n,
                o = function () {
                    void 0 === this.data.view_start &&
                        ((this.data.view_start = this.mux.utils.now()), this.emit("viewstart"));
                }.bind(z(n));
            if (
                (n.on("viewinit", function (e, t) {
                    this._resetVideoData(),
                        this._resetViewData(),
                        this._resetErrorData(),
                        this._updateStateData(),
                        Object.assign(this.data, t),
                        this._initializeViewData(),
                        this.one("play", o),
                        this.one("adbreakstart", o);
                }),
                n.on("videochange", function (e, t) {
                    this._resetView(t);
                }),
                n.on("programchange", function (e, t) {
                    this.data.player_is_paused &&
                        this.mux.log.warn(
                            "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.",
                        ),
                        this._resetView(Object.assign(t, { view_program_changed: !0 })),
                        o(),
                        this.emit("play"),
                        this.emit("playing");
                }),
                n.on("fragmentchange", function (e, t) {
                    (this.currentFragmentPDT = t.currentFragmentPDT),
                        (this.currentFragmentStart = t.currentFragmentStart);
                }),
                n.on("destroy", n.destroy),
                "u" > typeof window &&
                    "function" == typeof window.addEventListener &&
                    "function" == typeof window.removeEventListener)
            ) {
                var s = function () {
                    var e = void 0 !== n.data.view_start;
                    (n.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState),
                        e && n.mux.WINDOW_HIDDEN && (n.data.player_is_paused || n.emit("hb"));
                };
                window.addEventListener("visibilitychange", s, !1);
                var u = function (e) {
                    e.persisted || n.destroy();
                };
                window.addEventListener("pagehide", u, !1),
                    n.on("destroy", function () {
                        window.removeEventListener("visibilitychange", s), window.removeEventListener("pagehide", u);
                    });
            }
            return (
                n.on("playerready", function (e, t) {
                    Object.assign(this.data, t);
                }),
                t_.forEach(function (e) {
                    n.on(e, function (t, a) {
                        0 !== e.indexOf("ad") && this._updateStateData(),
                            Object.assign(this.data, a),
                            this._sanitizeData();
                    }),
                        n.on("after" + e, function () {
                            ("error" !== e || this.errorTracker.viewErrored) && this.send(e);
                        });
                }),
                n.on("viewend", function (e, t) {
                    Object.assign(n.data, t);
                }),
                n.one("playerready", function (e) {
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
                }),
                (n.longResumeTracker = new tn(z(n))),
                (n.errorTracker = new eO(z(n))),
                new eU(z(n)),
                (n.seekingTracker = new ej(z(n))),
                (n.playheadTime = new eR(z(n))),
                (n.playbackHeartbeat = new eP(z(n))),
                new eC(z(n)),
                (n.watchTimeTracker = new eA(z(n))),
                new eS(z(n)),
                (n.adTracker = new eM(z(n))),
                new eI(z(n)),
                new eL(z(n)),
                new eN(z(n)),
                new ti(z(n)),
                new td(z(n)),
                new tc(z(n)),
                i.hlsjs && n.addHLSJS(i),
                i.dashjs && n.addDashJS(i),
                n.emit("viewinit", i.data),
                n
            );
        }
        return (
            Y(r, [
                {
                    key: "emit",
                    value: function (e, t) {
                        var a,
                            i = Object.assign({ viewer_time: this.mux.utils.now() }, t),
                            n = [e, i];
                        if (this.emitTranslator)
                            try {
                                n = this.emitTranslator(e, i);
                            } catch (e) {
                                this.mux.log.warn("Exception in emit translator callback.", e);
                            }
                        null != n &&
                            n.length &&
                            (a = Z($(r.prototype), "emit", this)).call.apply(a, [this].concat(Q(n)));
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
                            var t = Object.assign({}, this.data);
                            if (
                                (void 0 === t.video_source_is_live &&
                                    (t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0
                                        ? (t.video_source_is_live = !0)
                                        : (t.player_source_duration > 0 || t.video_source_duration > 0) &&
                                          (t.video_source_is_live = !1)),
                                t.video_source_is_live ||
                                    [
                                        "player_program_time",
                                        "player_manifest_newest_program_time",
                                        "player_live_edge_program_time",
                                        "player_program_time",
                                        "video_holdback",
                                        "video_part_holdback",
                                        "video_target_duration",
                                        "video_part_target_duration",
                                    ].forEach(function (e) {
                                        t[e] = void 0;
                                    }),
                                (t.video_source_url = t.video_source_url || t.player_source_url),
                                t.video_source_url)
                            ) {
                                var a = I(ea(t.video_source_url), 2),
                                    r = a[0];
                                (t.video_source_domain = a[1]), (t.video_source_hostname = r);
                            }
                            delete t.ad_request_id,
                                this.playbackEventDispatcher.send(e, t),
                                this.data.view_sequence_number++,
                                this.data.player_sequence_number++,
                                tp.has(e) || this._restartHeartBeat(),
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
                            (t.video_cdn,
                            (t = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var a,
                                            r,
                                            i = {},
                                            n = Object.keys(e);
                                        for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (i[a] = e[a]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < n.length; r++)
                                        (a = n[r]),
                                            !(t.indexOf(a) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, a) &&
                                                (i[a] = e[a]);
                                }
                                return i;
                            })(t, ["video_cdn"]))),
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
                            var a = parseInt(e.data[t], 10);
                            e.data[t] = isNaN(a) ? void 0 : a;
                        }),
                            ["player_source_url", "video_source_url"].forEach(function (t) {
                                if (e.data[t]) {
                                    var a = e.data[t].toLowerCase();
                                    (0 === a.indexOf("data:") || 0 === a.indexOf("blob:")) &&
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
                            t = (this.data.view_id = B()),
                            a = function () {
                                t === e.data.view_id && es(e.data, "player_view_count", 1);
                            };
                        this.data.player_is_paused ? this.one("play", a) : a();
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
                                : ((this.hlsjs = e.hlsjs), ev(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls))
                            : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
                    },
                },
                {
                    key: "removeHLSJS",
                    value: function () {
                        this.hlsjs && (ey(this.hlsjs), (this.hlsjs = void 0));
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
                                : ((this.dashjs = e.dashjs), ek(this.mux, this.id, e.dashjs))
                            : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                    },
                },
                {
                    key: "removeDashJS",
                    value: function () {
                        this.dashjs && (eE(this.dashjs), (this.dashjs = void 0));
                    },
                },
            ]),
            r
        );
    })(eD),
    tf = _(S()),
    tm = [
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
    tv = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" },
    ty = _(p());
ty.default && ty.default.WeakMap && (tu = new WeakMap());
var tg = function (e) {
    return (
        (this.buffer = ""),
        (this.manifest = { segments: [], serverControl: {}, sessionData: {} }),
        (this.currentUri = {}),
        this.process(e),
        this.manifest
    );
};
(tg.prototype.process = function (e) {
    var t;
    for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n"))
        this.processLine(this.buffer.substring(0, t)), (this.buffer = this.buffer.substring(t + 1));
}),
    (tg.prototype.processLine = function (e) {
        var t = e.indexOf(":"),
            a = tD(e, t),
            r = a[0],
            i = 2 === a.length ? tT(a[1]) : void 0;
        if ("#" !== r[0])
            (this.currentUri.uri = r),
                this.manifest.segments.push(this.currentUri),
                !this.manifest.targetDuration ||
                    "duration" in this.currentUri ||
                    (this.currentUri.duration = this.manifest.targetDuration),
                (this.currentUri = {});
        else
            switch (r) {
                case "#EXT-X-TARGETDURATION":
                    if (!isFinite(i) || i < 0) return;
                    (this.manifest.targetDuration = i), this.setHoldBack();
                    break;
                case "#EXT-X-PART-INF":
                    tb(this.manifest, a),
                        this.manifest.partInf.partTarget &&
                            (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                        this.setHoldBack();
                    break;
                case "#EXT-X-SERVER-CONTROL":
                    tb(this.manifest, a), this.setHoldBack();
                    break;
                case "#EXTINF":
                    0 === i ? (this.currentUri.duration = 0.01) : i > 0 && (this.currentUri.duration = i);
                    break;
                case "#EXT-X-PROGRAM-DATE-TIME":
                    var n = new Date(i);
                    this.manifest.dateTimeString ||
                        ((this.manifest.dateTimeString = i), (this.manifest.dateTimeObject = n)),
                        (this.currentUri.dateTimeString = i),
                        (this.currentUri.dateTimeObject = n);
                    break;
                case "#EXT-X-VERSION":
                    tb(this.manifest, a);
                    break;
                case "#EXT-X-SESSION-DATA":
                    var o = eh(tq(a[1]));
                    Object.assign(this.manifest.sessionData, o);
            }
    }),
    (tg.prototype.setHoldBack = function () {
        var e = this.manifest,
            t = e.serverControl,
            a = e.targetDuration,
            r = e.partTargetDuration;
        if (t) {
            var i = "holdBack",
                n = "partHoldBack",
                o = a && 3 * a,
                s = r && 2 * r;
            a && !t.hasOwnProperty(i) && (t[i] = o),
                o && t[i] < o && (t[i] = o),
                r && !t.hasOwnProperty(n) && (t[n] = 3 * r),
                r && t[n] < s && (t[n] = s);
        }
    });
var tb = function (e, t) {
        var a,
            r = tw(t[0].replace("#EXT-X-", ""));
        tx(t[1]) ? ((a = {}), (a = Object.assign(tE(t[1]), a))) : (a = tT(t[1])), (e[r] = a);
    },
    tw = function (e) {
        return e.toLowerCase().replace(/-(\w)/g, function (e) {
            return e[1].toUpperCase();
        });
    },
    tT = function (e) {
        if ("yes" === e.toLowerCase() || "no" === e.toLowerCase()) return "yes" === e.toLowerCase();
        var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
        return isNaN(t) ? e : t;
    },
    tk = function (e) {
        var t = {},
            a = e.split("=");
        return a.length > 1 && (t[tw(a[0])] = tT(a[1])), t;
    },
    tE = function (e) {
        for (var t = e.split(","), a = {}, r = 0; t.length > r; r++) a = Object.assign(tk(t[r]), a);
        return a;
    },
    tx = function (e) {
        return e.indexOf("=") > -1;
    },
    tD = function (e, t) {
        return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)];
    },
    tq = function (e) {
        var t = {};
        if (e) {
            var a = e.search(",");
            return (
                [e.slice(0, a), e.slice(a + 1)].forEach(function (e, a) {
                    for (var r = e.replace(/['"]+/g, "").split("="), i = 0; i < r.length; i++)
                        "DATA-ID" === r[i] && (t["DATA-ID"] = r[1 - i]), "VALUE" === r[i] && (t.VALUE = r[1 - i]);
                }),
                { data: t }
            );
        }
    },
    tP = {
        safeCall: function (e, t, a, r) {
            var i = r;
            if (e && "function" == typeof e[t])
                try {
                    i = e[t].apply(e, a);
                } catch (e) {
                    W.info("safeCall error", e);
                }
            return i;
        },
        safeIncrement: es,
        getComputedStyle: function (e, t) {
            var a;
            return e && t && ty.default && "function" == typeof ty.default.getComputedStyle
                ? (tu && tu.has(e) && (a = tu.get(e)),
                  a || ((a = ty.default.getComputedStyle(e, null)), tu && tu.set(e, a)),
                  a.getPropertyValue(t))
                : "";
        },
        secondsToMs: function (e) {
            return Math.floor(1e3 * e);
        },
        assign: Object.assign,
        headersStringToObject: e_,
        cdnHeadersToRequestId: ep,
        extractHostnameAndDomain: ea,
        extractHostname: et,
        manifestParser: tg,
        generateShortID: M,
        generateUUID: B,
        now: H,
        findMediaElement: F,
    },
    tO = {},
    tA = function (e) {
        var t = arguments;
        "string" == typeof e
            ? tA.hasOwnProperty(e)
                ? N.default.setTimeout(function () {
                      (t = Array.prototype.splice.call(t, 1)), tA[e].apply(null, t);
                  }, 0)
                : W.warn("`" + e + "` is an unknown task")
            : "function" == typeof e
              ? N.default.setTimeout(function () {
                    e(tA);
                }, 0)
              : W.warn("`" + e + "` is invalid.");
    },
    tS = {
        loaded: H(),
        NAME: "mux-embed",
        VERSION: "5.13.0",
        API_VERSION: "2.1",
        PLAYER_TRACKED: !1,
        monitor: function (e, t) {
            return (function (e, t, a) {
                var r = I(F(t), 3),
                    i = r[0],
                    n = r[1],
                    o = r[2],
                    s = e.log,
                    u = e.utils.getComputedStyle,
                    d = e.utils.secondsToMs;
                if (!i) return s.error("No element was found with the `" + n + "` query selector.");
                if ("video" !== o && "audio" !== o)
                    return s.error("The element of `" + n + "` was not a media element.");
                i.mux &&
                    (i.mux.destroy(),
                    delete i.mux,
                    s.warn("Already monitoring this video element, replacing existing event listeners")),
                    ((a = Object.assign({ automaticErrorTracking: !0 }, a, {
                        getPlayheadTime: function () {
                            return d(i.currentTime);
                        },
                        getStateData: function () {
                            var e,
                                t,
                                a = (null == (e = this.getPlayheadTime) ? void 0 : e.call(this)) || d(i.currentTime),
                                r = this.hlsjs && this.hlsjs.url,
                                n =
                                    this.dashjs &&
                                    "function" == typeof this.dashjs.getSource &&
                                    this.dashjs.getSource(),
                                o = {
                                    player_is_paused: i.paused,
                                    player_width: parseInt(u(i, "width")),
                                    player_height: parseInt(u(i, "height")),
                                    player_autoplay_on: i.autoplay,
                                    player_preload_on: i.preload,
                                    player_language_code: i.lang,
                                    player_is_fullscreen:
                                        tf.default &&
                                        !!(
                                            tf.default.fullscreenElement ||
                                            tf.default.webkitFullscreenElement ||
                                            tf.default.mozFullScreenElement ||
                                            tf.default.msFullscreenElement
                                        ),
                                    video_poster_url: i.poster,
                                    video_source_url: r || n || i.currentSrc,
                                    video_source_duration: d(i.duration),
                                    video_source_height: i.videoHeight,
                                    video_source_width: i.videoWidth,
                                    view_dropped_frame_count:
                                        null == i || null == (t = i.getVideoPlaybackQuality)
                                            ? void 0
                                            : t.call(i).droppedVideoFrames,
                                };
                            if (i.getStartDate && a > 0) {
                                var s = i.getStartDate();
                                if (s && "function" == typeof s.getTime && s.getTime()) {
                                    var l = s.getTime();
                                    (o.player_program_time = l + a),
                                        i.seekable.length > 0 &&
                                            (o.player_live_edge_program_time =
                                                l + i.seekable.end(i.seekable.length - 1));
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
                        a.data,
                    )),
                    (i.mux = i.mux || {}),
                    (i.mux.deleted = !1),
                    (i.mux.emit = function (t, a) {
                        e.emit(n, t, a);
                    }),
                    (i.mux.updateData = function (e) {
                        i.mux.emit("hb", e);
                    });
                var l = function () {
                    s.error("The monitor for this video element has already been destroyed.");
                };
                (i.mux.destroy = function () {
                    Object.keys(i.mux.listeners).forEach(function (e) {
                        i.removeEventListener(e, i.mux.listeners[e], !1);
                    }),
                        delete i.mux.listeners,
                        (i.mux.destroy = l),
                        (i.mux.swapElement = l),
                        (i.mux.emit = l),
                        (i.mux.addHLSJS = l),
                        (i.mux.addDashJS = l),
                        (i.mux.removeHLSJS = l),
                        (i.mux.removeDashJS = l),
                        (i.mux.updateData = l),
                        (i.mux.setEmitTranslator = l),
                        (i.mux.setStateDataTranslator = l),
                        (i.mux.setGetPlayheadTime = l),
                        (i.mux.deleted = !0),
                        e.emit(n, "destroy");
                }),
                    (i.mux.swapElement = function (t) {
                        var a = I(F(t), 3),
                            r = a[0],
                            n = a[1],
                            o = a[2];
                        return r
                            ? "video" !== o && "audio" !== o
                                ? e.log.error("The element of `" + n + "` was not a media element.")
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
                            : e.log.error("No element was found with the `" + n + "` query selector.");
                    }),
                    (i.mux.addHLSJS = function (t) {
                        e.addHLSJS(n, t);
                    }),
                    (i.mux.addDashJS = function (t) {
                        e.addDashJS(n, t);
                    }),
                    (i.mux.removeHLSJS = function () {
                        e.removeHLSJS(n);
                    }),
                    (i.mux.removeDashJS = function () {
                        e.removeDashJS(n);
                    }),
                    (i.mux.setEmitTranslator = function (t) {
                        e.setEmitTranslator(n, t);
                    }),
                    (i.mux.setStateDataTranslator = function (t) {
                        e.setStateDataTranslator(n, t);
                    }),
                    (i.mux.setGetPlayheadTime = function (t) {
                        t || (t = a.getPlayheadTime), e.setGetPlayheadTime(n, t);
                    }),
                    e.init(n, a),
                    e.emit(n, "playerready"),
                    i.paused || (e.emit(n, "play"), i.readyState > 2 && e.emit(n, "playing")),
                    (i.mux.listeners = {}),
                    tm.forEach(function (t) {
                        ("error" !== t || a.automaticErrorTracking) &&
                            ((i.mux.listeners[t] = function () {
                                var a = {};
                                if ("error" === t) {
                                    if (!i.error || 1 === i.error.code) return;
                                    (a.player_error_code = i.error.code),
                                        (a.player_error_message = tv[i.error.code] || i.error.message);
                                }
                                e.emit(n, t, a);
                            }),
                            i.addEventListener(t, i.mux.listeners[t], !1));
                    });
            })(tA, e, t);
        },
        destroyMonitor: function (e) {
            var t = I(F(e), 1)[0];
            t && t.mux && "function" == typeof t.mux.destroy
                ? t.mux.destroy()
                : W.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
        },
        addHLSJS: function (e, t) {
            var a = U(e);
            tO[a] ? tO[a].addHLSJS(t) : W.error("A monitor for `" + a + "` has not been initialized.");
        },
        addDashJS: function (e, t) {
            var a = U(e);
            tO[a] ? tO[a].addDashJS(t) : W.error("A monitor for `" + a + "` has not been initialized.");
        },
        removeHLSJS: function (e) {
            var t = U(e);
            tO[t] ? tO[t].removeHLSJS() : W.error("A monitor for `" + t + "` has not been initialized.");
        },
        removeDashJS: function (e) {
            var t = U(e);
            tO[t] ? tO[t].removeDashJS() : W.error("A monitor for `" + t + "` has not been initialized.");
        },
        init: function (e, t) {
            V() &&
                t &&
                t.respectDoNotTrack &&
                W.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
            var a = U(e);
            tO[a] = new th(tA, a, t);
        },
        emit: function (e, t, a) {
            var r = U(e);
            tO[r]
                ? (tO[r].emit(t, a), "destroy" === t && delete tO[r])
                : W.error("A monitor for `" + r + "` has not been initialized.");
        },
        updateData: function (e, t) {
            var a = U(e);
            tO[a] ? tO[a].emit("hb", t) : W.error("A monitor for `" + a + "` has not been initialized.");
        },
        setEmitTranslator: function (e, t) {
            var a = U(e);
            tO[a] ? (tO[a].emitTranslator = t) : W.error("A monitor for `" + a + "` has not been initialized.");
        },
        setStateDataTranslator: function (e, t) {
            var a = U(e);
            tO[a] ? (tO[a].stateDataTranslator = t) : W.error("A monitor for `" + a + "` has not been initialized.");
        },
        setGetPlayheadTime: function (e, t) {
            var a = U(e);
            tO[a] ? (tO[a].getPlayheadTime = t) : W.error("A monitor for `" + a + "` has not been initialized.");
        },
        checkDoNotTrack: V,
        log: W,
        utils: tP,
        events: {
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
        WINDOW_HIDDEN: !1,
        WINDOW_UNLOADING: !1,
    };
Object.assign(tA, tS),
    void 0 !== N.default &&
        "function" == typeof N.default.addEventListener &&
        N.default.addEventListener(
            "pagehide",
            function (e) {
                e.persisted || (tA.WINDOW_UNLOADING = !0);
            },
            !1,
        );
var tR = tA;
