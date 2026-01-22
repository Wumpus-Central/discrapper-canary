i.d(t, {
    A: () => tx,
});
var r = Object.create,
    s = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    n = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    o = Object.prototype.hasOwnProperty,
    h = function (e, t) {
        return function () {
            return e && (t = e((e = 0))), t;
        };
    },
    d = function (e, t) {
        return function () {
            return (
                t ||
                    e(
                        (t = {
                            exports: {},
                        }).exports,
                        t,
                    ),
                t.exports
            );
        };
    },
    u = function (e, t, i, r) {
        if ((t && "object" == typeof t) || "function" == typeof t)
            for (var l, h = n(t), d = 0, u = h.length; d < u; d++)
                (l = h[d]),
                    o.call(e, l) ||
                        l === i ||
                        s(e, l, {
                            get: function (e) {
                                return t[e];
                            }.bind(null, l),
                            enumerable: !(r = a(t, l)) || r.enumerable,
                        });
        return e;
    },
    c = function (e, t, i) {
        return (
            (i = null != e ? r(l(e)) : {}),
            u(
                !t && e && e.__esModule
                    ? i
                    : s(i, "default", {
                          value: e,
                          enumerable: !0,
                      }),
                e,
            )
        );
    },
    f = d(function (e, t) {
        t.exports = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self ? self : {};
    });

function g(e, t) {
    return null != t && "u" > typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : g(e, t);
}
var p = h(function () {
    p();
});

function v(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
var y = h(function () {}),
    E = d(function (e, t) {
        var i = Array.prototype.slice;
        t.exports = function (e, t) {
            for (("length" in e) || (e = [e]), e = i.call(e); e.length; ) {
                var r = e.shift(),
                    s = t(r);
                if (s) return s;
                r.childNodes && r.childNodes.length && (e = i.call(r.childNodes).concat(e));
            }
        };
    }),
    T = d(function (e, t) {
        function i(e, t) {
            if (!g(this, i)) return new i(e, t);
            (this.data = e), (this.nodeValue = e), (this.length = e.length), (this.ownerDocument = t || null);
        }
        p(),
            (t.exports = i),
            (i.prototype.nodeType = 8),
            (i.prototype.nodeName = "#comment"),
            (i.prototype.toString = function () {
                return "[object Comment]";
            });
    }),
    _ = d(function (e, t) {
        function i(e, t) {
            if (!g(this, i)) return new i(e);
            (this.data = e || ""), (this.length = this.data.length), (this.ownerDocument = t || null);
        }
        p(),
            (t.exports = i),
            (i.prototype.type = "DOMTextNode"),
            (i.prototype.nodeType = 3),
            (i.prototype.nodeName = "#text"),
            (i.prototype.toString = function () {
                return this.data;
            }),
            (i.prototype.replaceData = function (e, t, i) {
                var r = this.data,
                    s = r.substring(0, e),
                    a = r.substring(e + t, r.length);
                (this.data = s + i + a), (this.length = this.data.length);
            });
    }),
    S = d(function (e, t) {
        t.exports = function (e) {
            var t = this,
                i = e.type;
            e.target || (e.target = t), t.listeners || (t.listeners = {});
            var r = t.listeners[i];
            if (r)
                return r.forEach(function (i) {
                    (e.currentTarget = t), "function" == typeof i ? i(e) : i.handleEvent(e);
                });
            t.parentNode && t.parentNode.dispatchEvent(e);
        };
    }),
    b = d(function (e, t) {
        t.exports = function (e, t) {
            this.listeners || (this.listeners = {}),
                this.listeners[e] || (this.listeners[e] = []),
                -1 === this.listeners[e].indexOf(t) && this.listeners[e].push(t);
        };
    }),
    A = d(function (e, t) {
        t.exports = function (e, t) {
            if (this.listeners && this.listeners[e]) {
                var i = this.listeners[e],
                    r = i.indexOf(t);
                -1 !== r && i.splice(r, 1);
            }
        };
    }),
    L = d(function (e, t) {
        y(),
            (t.exports = function e(t) {
                switch (t.nodeType) {
                    case 3:
                        return s(t.data);
                    case 8:
                        return "\x3c!--" + t.data + "--\x3e";
                    default:
                        var a, n, l;
                        return (
                            (n = []),
                            (l = (a = t).tagName),
                            "http://www.w3.org/1999/xhtml" === a.namespaceURI && (l = l.toLowerCase()),
                            n.push(
                                "<" +
                                    l +
                                    (function (e) {
                                        var t = [];
                                        for (var i in e)
                                            (function (e, t) {
                                                var i = v(e[t]);
                                                return (
                                                    ("style" === t && Object.keys(e.style).length > 0) ||
                                                    (e.hasOwnProperty(t) &&
                                                        ("string" === i || "boolean" === i || "number" === i) &&
                                                        "nodeName" !== t &&
                                                        "className" !== t &&
                                                        "tagName" !== t &&
                                                        "textContent" !== t &&
                                                        "innerText" !== t &&
                                                        "namespaceURI" !== t &&
                                                        "innerHTML" !== t)
                                                );
                                            })(e, i) &&
                                                t.push({
                                                    name: i,
                                                    value: e[i],
                                                });
                                        for (var s in e._attributes)
                                            for (var a in e._attributes[s]) {
                                                var n = e._attributes[s][a],
                                                    l = (n.prefix ? n.prefix + ":" : "") + a;
                                                t.push({
                                                    name: l,
                                                    value: n.value,
                                                });
                                            }
                                        return (
                                            e.className &&
                                                t.push({
                                                    name: "class",
                                                    value: e.className,
                                                }),
                                            t.length ? r(t) : ""
                                        );
                                    })(a) +
                                    (function (e) {
                                        var t = e.dataset,
                                            i = [];
                                        for (var s in t)
                                            i.push({
                                                name: "data-" + s,
                                                value: t[s],
                                            });
                                        return i.length ? r(i) : "";
                                    })(a),
                            ),
                            i.indexOf(l) > -1
                                ? n.push(" />")
                                : (n.push(">"),
                                  a.childNodes.length
                                      ? n.push.apply(n, a.childNodes.map(e))
                                      : a.textContent || a.innerText
                                        ? n.push(s(a.textContent || a.innerText))
                                        : a.innerHTML && n.push(a.innerHTML),
                                  n.push("</" + l + ">")),
                            n.join("")
                        );
                }
            });
        var i = [
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
                    var i = e.name,
                        r = e.value;
                    "style" === i &&
                        (r = (function (e) {
                            if ("string" == typeof e) return e;
                            var t = "";
                            return (
                                Object.keys(e).forEach(function (i) {
                                    var r = e[i];
                                    (i = i.replace(/[A-Z]/g, function (e) {
                                        return "-" + e.toLowerCase();
                                    })),
                                        (t += i + ":" + r + ";");
                                }),
                                t
                            );
                        })(r)),
                        t.push(i + '="' + s(r).replace(/"/g, "&quot;") + '"');
                }),
                t.length ? " " + t.join(" ") : ""
            );
        }

        function s(e) {
            var t = "";
            return (
                "string" == typeof e ? (t = e) : e && (t = e.toString()),
                t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            );
        }
    }),
    R = d(function (e, t) {
        p();
        var i = E(),
            r = S(),
            s = b(),
            a = A(),
            n = L(),
            l = "http://www.w3.org/1999/xhtml";

        function o(e, t, i) {
            if (!g(this, o)) return new o(e);
            var r = void 0 === i ? l : i || null;
            (this.tagName = r === l ? String(e).toUpperCase() : e),
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
        (t.exports = o),
            (o.prototype.type = "DOMElement"),
            (o.prototype.nodeType = 1),
            (o.prototype.appendChild = function (e) {
                return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), (e.parentNode = this), e;
            }),
            (o.prototype.replaceChild = function (e, t) {
                e.parentNode && e.parentNode.removeChild(e);
                var i = this.childNodes.indexOf(t);
                return (t.parentNode = null), (this.childNodes[i] = e), (e.parentNode = this), t;
            }),
            (o.prototype.removeChild = function (e) {
                var t = this.childNodes.indexOf(e);
                return this.childNodes.splice(t, 1), (e.parentNode = null), e;
            }),
            (o.prototype.insertBefore = function (e, t) {
                e.parentNode && e.parentNode.removeChild(e);
                var i = null == t ? -1 : this.childNodes.indexOf(t);
                return i > -1 ? this.childNodes.splice(i, 0, e) : this.childNodes.push(e), (e.parentNode = this), e;
            }),
            (o.prototype.setAttributeNS = function (e, t, i) {
                var r = null,
                    s = t,
                    a = t.indexOf(":");
                (a > -1 && ((r = t.substr(0, a)), (s = t.substr(a + 1))), "INPUT" === this.tagName && "type" === t)
                    ? (this.type = i)
                    : ((this._attributes[e] || (this._attributes[e] = {}))[s] = {
                          value: i,
                          prefix: r,
                      });
            }),
            (o.prototype.getAttributeNS = function (e, t) {
                var i = this._attributes[e],
                    r = i && i[t] && i[t].value;
                return "INPUT" === this.tagName && "type" === t ? this.type : "string" != typeof r ? null : r;
            }),
            (o.prototype.removeAttributeNS = function (e, t) {
                var i = this._attributes[e];
                i && delete i[t];
            }),
            (o.prototype.hasAttributeNS = function (e, t) {
                var i = this._attributes[e];
                return !!i && t in i;
            }),
            (o.prototype.setAttribute = function (e, t) {
                return this.setAttributeNS(null, e, t);
            }),
            (o.prototype.getAttribute = function (e) {
                return this.getAttributeNS(null, e);
            }),
            (o.prototype.removeAttribute = function (e) {
                return this.removeAttributeNS(null, e);
            }),
            (o.prototype.hasAttribute = function (e) {
                return this.hasAttributeNS(null, e);
            }),
            (o.prototype.removeEventListener = a),
            (o.prototype.addEventListener = s),
            (o.prototype.dispatchEvent = r),
            (o.prototype.focus = function () {}),
            (o.prototype.toString = function () {
                return n(this);
            }),
            (o.prototype.getElementsByClassName = function (e) {
                var t = e.split(" "),
                    r = [];
                return (
                    i(this, function (e) {
                        if (1 === e.nodeType) {
                            var i = (e.className || "").split(" ");
                            t.every(function (e) {
                                return -1 !== i.indexOf(e);
                            }) && r.push(e);
                        }
                    }),
                    r
                );
            }),
            (o.prototype.getElementsByTagName = function (e) {
                e = e.toLowerCase();
                var t = [];
                return (
                    i(this.childNodes, function (i) {
                        1 === i.nodeType && ("*" === e || i.tagName.toLowerCase() === e) && t.push(i);
                    }),
                    t
                );
            }),
            (o.prototype.contains = function (e) {
                return (
                    i(this, function (t) {
                        return e === t;
                    }) || !1
                );
            });
    }),
    k = d(function (e, t) {
        p();
        var i = R();

        function r(e) {
            if (!g(this, r)) return new r();
            (this.childNodes = []), (this.parentNode = null), (this.ownerDocument = e || null);
        }
        (t.exports = r),
            (r.prototype.type = "DocumentFragment"),
            (r.prototype.nodeType = 11),
            (r.prototype.nodeName = "#document-fragment"),
            (r.prototype.appendChild = i.prototype.appendChild),
            (r.prototype.replaceChild = i.prototype.replaceChild),
            (r.prototype.removeChild = i.prototype.removeChild),
            (r.prototype.toString = function () {
                return this.childNodes
                    .map(function (e) {
                        return String(e);
                    })
                    .join("");
            });
    }),
    I = d(function (e, t) {
        function i(e) {}
        (t.exports = i),
            (i.prototype.initEvent = function (e, t, i) {
                (this.type = e), (this.bubbles = t), (this.cancelable = i);
            }),
            (i.prototype.preventDefault = function () {});
    }),
    D = d(function (e, t) {
        p();
        var i = E(),
            r = T(),
            s = _(),
            a = R(),
            n = k(),
            l = I(),
            o = S(),
            h = b(),
            d = A();

        function u() {
            if (!g(this, u)) return new u();
            (this.head = this.createElement("head")),
                (this.body = this.createElement("body")),
                (this.documentElement = this.createElement("html")),
                this.documentElement.appendChild(this.head),
                this.documentElement.appendChild(this.body),
                (this.childNodes = [this.documentElement]),
                (this.nodeType = 9);
        }
        t.exports = u;
        var c = u.prototype;
        (c.createTextNode = function (e) {
            return new s(e, this);
        }),
            (c.createElementNS = function (e, t) {
                return new a(t, this, null === e ? null : String(e));
            }),
            (c.createElement = function (e) {
                return new a(e, this);
            }),
            (c.createDocumentFragment = function () {
                return new n(this);
            }),
            (c.createEvent = function (e) {
                return new l(e);
            }),
            (c.createComment = function (e) {
                return new r(e, this);
            }),
            (c.getElementById = function (e) {
                return (
                    (e = String(e)),
                    i(this.childNodes, function (t) {
                        if (String(t.id) === e) return t;
                    }) || null
                );
            }),
            (c.getElementsByClassName = a.prototype.getElementsByClassName),
            (c.getElementsByTagName = a.prototype.getElementsByTagName),
            (c.contains = a.prototype.contains),
            (c.removeEventListener = d),
            (c.addEventListener = h),
            (c.dispatchEvent = o);
    }),
    P = d(function (e, t) {
        t.exports = new (D())();
    }),
    w = d(function (e, t) {
        var i,
            r = "u" > typeof global ? global : "u" > typeof window ? window : {},
            s = P();
        "u" > typeof document
            ? (i = document)
            : (i = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (i = r["__GLOBAL_DOCUMENT_CACHE@4"] = s),
            (t.exports = i);
    });

function x(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
    return r;
}

function C(e, t) {
    if (e) {
        if ("string" == typeof e) return x(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i))
            return Array.from(i);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return x(e, t);
    }
}

function O(e, t) {
    return (
        (function (e) {
            if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
            var i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != i) {
                var r,
                    s,
                    a = [],
                    n = !0,
                    l = !1;
                try {
                    for (
                        i = i.call(e);
                        !(n = (r = i.next()).done) && (a.push(r.value), !(t && a.length === t));
                        n = !0
                    );
                } catch (e) {
                    (l = !0), (s = e);
                } finally {
                    try {
                        n || null == i.return || i.return();
                    } finally {
                        if (l) throw s;
                    }
                }
                return a;
            }
        })(e, t) ||
        C(e, t) ||
        (function () {
            throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        })()
    );
}
var M = c(f()),
    F = c(f()),
    N = c(f()),
    B = function () {
        var e = N.default.performance,
            t = e && e.timing,
            i = t && t.navigationStart;
        return Math.round("number" == typeof i && "function" == typeof e.now ? i + e.now() : Date.now());
    },
    U = function () {
        if ("function" == typeof (null == (e = F.default.crypto) ? void 0 : e.getRandomValues)) {
            (i = new Uint8Array(32)), F.default.crypto.getRandomValues(i);
            for (var e, t, i, r = 0; r < 32; r++) i[r] = i[r] % 16;
        } else {
            i = [];
            for (var s = 0; s < 32; s++) i[s] = (16 * Math.random()) | 0;
        }
        var a = 0;
        t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = "x" === e ? i[a] : (3 & i[a]) | 8;
            return a++, t.toString(16);
        });
        var n = B(),
            l = null == n ? void 0 : n.toString(16).substring(3);
        return l ? t.substring(0, 28) + l : t;
    },
    $ = function () {
        return ("000000" + ((0x81bf1000 * Math.random()) | 0).toString(36)).slice(-6);
    },
    G = function (e) {
        var t;
        if (e && void 0 !== e.nodeName) return e.muxId || (e.muxId = $()), e.muxId;
        try {
            t = document.querySelector(e);
        } catch (e) {}
        return t && !t.muxId && (t.muxId = e), (null == t ? void 0 : t.muxId) || e;
    },
    H = function (e) {
        e && void 0 !== e.nodeName ? (e = G((t = e))) : (t = document.querySelector(e));
        var t,
            i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
        return [t, e, i];
    };

function K(e) {
    return (
        (function (e) {
            if (Array.isArray(e)) return x(e);
        })(e) ||
        (function (e) {
            if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
        })(e) ||
        C(e) ||
        (function () {
            throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        })()
    );
}
var q = (function (e) {
        var t,
            i,
            r,
            s,
            a,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            l = e ? [console, e] : [console],
            o = (t = console.trace).bind.apply(t, K(l)),
            h = (i = console.info).bind.apply(i, K(l)),
            d = (r = console.debug).bind.apply(r, K(l)),
            u = (s = console.warn).bind.apply(s, K(l)),
            c = (a = console.error).bind.apply(a, K(l)),
            f = n;
        return {
            trace: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                if (!(f > 0)) return o.apply(void 0, K(t));
            },
            debug: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                if (!(f > 1)) return d.apply(void 0, K(t));
            },
            info: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                if (!(f > 2)) return h.apply(void 0, K(t));
            },
            warn: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                if (!(f > 3)) return u.apply(void 0, K(t));
            },
            error: function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                if (!(f > 4)) return c.apply(void 0, K(t));
            },
            get level() {
                return f;
            },
            set level(m) {
                m !== this.level && (f = null != m ? m : n);
            },
        };
    })("[mux]"),
    V = c(f());

function j() {
    return "1" === (V.default.doNotTrack || (V.default.navigator && V.default.navigator.doNotTrack));
}

function W(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function Y(e, t) {
    if (!g(e, t)) throw TypeError("Cannot call a class as a function");
}

function Q(e, t) {
    for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}

function X(e, t, i) {
    return t && Q(e.prototype, t), i && Q(e, i), e;
}

function z(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}

function J(e) {
    return (J = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}

function Z(e, t, i) {
    return (Z =
        "u" > typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, i) {
                  var r = (function (e, t) {
                      for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = J(e)); );
                      return e;
                  })(e, t);
                  if (r) {
                      var s = Object.getOwnPropertyDescriptor(r, t);
                      return s.get ? s.get.call(i || e) : s.value;
                  }
              })(e, t, i || e);
}

function ee(e, t) {
    return (ee =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
p(), y();
var et = function (e) {
        return ei(e)[0];
    },
    ei = function (e) {
        if ("string" != typeof e || "" === e) return ["localhost"];
        var t,
            i = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
        return i && (t = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [i, t];
    },
    er = c(f()),
    es = function () {
        var e = er.default.performance;
        return void 0 !== (e && e.timing);
    },
    ea = function () {
        var e = er.default.performance,
            t = e && e.timing;
        return t && t.domContentLoadedEventEnd;
    },
    en = function () {
        var e = er.default.performance,
            t = e && e.timing;
        return t && t.navigationStart;
    };

function el(e, t, i) {
    (i = void 0 === i ? 1 : i), (e[t] = e[t] || 0), (e[t] += i);
}

function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                z(e, t, i[t]);
            });
    }
    return e;
}

function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, r);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
var ed = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
    eu = ["x-cdn", "content-type"].concat(ed);

function ec(e) {
    var t = {};
    return (
        (e = e || "")
            .trim()
            .split(/[\r\n]+/)
            .forEach(function (e) {
                if (e) {
                    var i = e.split(": "),
                        r = i.shift();
                    r &&
                        (eu.indexOf(r.toLowerCase()) >= 0 || 0 === r.toLowerCase().indexOf("x-litix-")) &&
                        (t[r] = i.join(": "));
                }
            }),
        t
    );
}

function ef(e) {
    if (e) {
        var t = ed.find(function (t) {
            return void 0 !== e[t];
        });
        return t ? e[t] : void 0;
    }
}
var eg = function (e) {
        var t = {};
        for (var i in e) {
            var r = e[i];
            -1 !== r["DATA-ID"].search("io.litix.data.") && (t[r["DATA-ID"].replace("io.litix.data.", "")] = r.VALUE);
        }
        return t;
    },
    em = function (e) {
        if (!e) return {};
        var t = en(),
            i = e.loading,
            r = i ? i.start : e.trequest,
            s = i ? i.first : e.tfirst,
            a = i ? i.end : e.tload;
        return {
            bytesLoaded: e.total,
            requestStart: Math.round(t + r),
            responseStart: Math.round(t + s),
            responseEnd: Math.round(t + a),
        };
    },
    ep = function (e) {
        if (!(!e || "function" != typeof e.getAllResponseHeaders)) return ec(e.getAllResponseHeaders());
    },
    ev = function (e, t, i) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var r = arguments.length > 4 ? arguments[4] : void 0,
            s = e.log,
            a = e.utils.secondsToMs,
            n = function (e) {
                var t,
                    i = parseInt(r.version);
                return (
                    1 === i && null !== e.programDateTime && (t = e.programDateTime),
                    0 === i && null !== e.pdt && (t = e.pdt),
                    t
                );
            };
        if (!es()) return void s.warn("performance timing not supported. Not tracking HLS.js.");
        var l = function (i, r) {
                return e.emit(t, i, r);
            },
            o = function (e, t) {
                var i = t.levels,
                    r = t.audioTracks,
                    s = t.url,
                    a = t.stats,
                    n = t.networkDetails,
                    o = t.sessionData,
                    h = {},
                    d = {};
                i.forEach(function (e, t) {
                    h[t] = {
                        width: e.width,
                        height: e.height,
                        bitrate: e.bitrate,
                        attrs: e.attrs,
                    };
                }),
                    r.forEach(function (e, t) {
                        d[t] = {
                            name: e.name,
                            language: e.lang,
                            bitrate: e.bitrate,
                        };
                    });
                var u = em(a),
                    c = u.bytesLoaded,
                    f = u.requestStart,
                    g = u.responseStart,
                    p = u.responseEnd;
                l(
                    "requestcompleted",
                    eh(eo({}, eg(o)), {
                        request_event_type: e,
                        request_bytes_loaded: c,
                        request_start: f,
                        request_response_start: g,
                        request_response_end: p,
                        request_type: "manifest",
                        request_hostname: et(s),
                        request_response_headers: ep(n),
                        request_rendition_lists: {
                            media: h,
                            audio: d,
                            video: {},
                        },
                    }),
                );
            };
        i.on(r.Events.MANIFEST_LOADED, o);
        var h = function (e, t) {
            var i = t.details,
                r = t.level,
                s = t.networkDetails,
                o = em(t.stats),
                h = o.bytesLoaded,
                d = o.requestStart,
                u = o.responseStart,
                c = o.responseEnd,
                f = i.fragments[i.fragments.length - 1],
                g = n(f) + a(f.duration);
            l("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: h,
                request_start: d,
                request_response_start: u,
                request_response_end: c,
                request_current_level: r,
                request_type: "manifest",
                request_hostname: et(i.url),
                request_response_headers: ep(s),
                video_holdback: i.holdBack && a(i.holdBack),
                video_part_holdback: i.partHoldBack && a(i.partHoldBack),
                video_part_target_duration: i.partTarget && a(i.partTarget),
                video_target_duration: i.targetduration && a(i.targetduration),
                video_source_is_live: i.live,
                player_manifest_newest_program_time: isNaN(g) ? void 0 : g,
            });
        };
        i.on(r.Events.LEVEL_LOADED, h);
        var d = function (e, t) {
            var i = t.details,
                r = t.networkDetails,
                s = em(t.stats);
            l("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: s.bytesLoaded,
                request_start: s.requestStart,
                request_response_start: s.responseStart,
                request_response_end: s.responseEnd,
                request_type: "manifest",
                request_hostname: et(i.url),
                request_response_headers: ep(r),
            });
        };
        i.on(r.Events.AUDIO_TRACK_LOADED, d);
        var u = function (e, t) {
            var r = t.stats,
                s = t.networkDetails,
                a = t.frag,
                n = em((r = r || a.stats)),
                o = n.bytesLoaded,
                h = n.requestStart,
                d = n.responseStart,
                u = n.responseEnd,
                c = s ? ep(s) : void 0,
                f = {
                    request_event_type: e,
                    request_bytes_loaded: o,
                    request_start: h,
                    request_response_start: d,
                    request_response_end: u,
                    request_hostname: s ? et(s.responseURL) : void 0,
                    request_id: c ? ef(c) : void 0,
                    request_response_headers: c,
                    request_media_duration: a.duration,
                    request_url: null == s ? void 0 : s.responseURL,
                };
            "main" === a.type
                ? ((f.request_type = "media"),
                  (f.request_current_level = a.level),
                  (f.request_video_width = (i.levels[a.level] || {}).width),
                  (f.request_video_height = (i.levels[a.level] || {}).height),
                  (f.request_labeled_bitrate = (i.levels[a.level] || {}).bitrate))
                : (f.request_type = a.type),
                l("requestcompleted", f);
        };
        i.on(r.Events.FRAG_LOADED, u);
        var c = function (e, t) {
            var i = t.frag,
                r = i.start;
            l("fragmentchange", {
                currentFragmentPDT: n(i),
                currentFragmentStart: a(r),
            });
        };
        i.on(r.Events.FRAG_CHANGED, c);
        var f = function (e, t) {
            var i,
                s = t.type,
                a = t.details,
                n = t.response,
                o = t.fatal,
                h = t.frag,
                d = t.networkDetails,
                u = (null == h ? void 0 : h.url) || t.url || "",
                c = d ? ep(d) : void 0;
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
                l("requestfailed", {
                    request_error: a,
                    request_url: u,
                    request_hostname: et(u),
                    request_id: c ? ef(c) : void 0,
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
                    request_error_code: null == n ? void 0 : n.code,
                    request_error_text: null == n ? void 0 : n.text,
                }),
                o &&
                    l("error", {
                        player_error_code: s,
                        player_error_message: a,
                        player_error_context:
                            "".concat(u ? "url: ".concat(u, "\n") : "") +
                            "".concat(
                                n && (n.code || n.text) ? "response: ".concat(n.code, ", ").concat(n.text, "\n") : "",
                            ) +
                            "".concat(t.reason ? "failure reason: ".concat(t.reason, "\n") : "") +
                            "".concat(t.level ? "level: ".concat(t.level, "\n") : "") +
                            "".concat(t.parent ? "parent stream controller: ".concat(t.parent, "\n") : "") +
                            "".concat(t.buffer ? "buffer length: ".concat(t.buffer, "\n") : "") +
                            "".concat(t.error ? "error: ".concat(t.error, "\n") : "") +
                            "".concat(t.event ? "event: ".concat(t.event, "\n") : "") +
                            "".concat(
                                t.err ? "error message: ".concat(null == (i = t.err) ? void 0 : i.message, "\n") : "",
                            ),
                    });
        };
        i.on(r.Events.ERROR, f);
        var g = function (e, t) {
            var i = t.frag,
                r = (i && i._url) || "";
            l("requestcanceled", {
                request_event_type: e,
                request_url: r,
                request_type: "media",
                request_hostname: et(r),
            });
        };
        i.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, g);
        var p = function (e, t) {
            var r = t.level,
                a = i.levels[r];
            if (a && a.attrs && a.attrs.BANDWIDTH) {
                var n,
                    o = a.attrs.BANDWIDTH,
                    h = parseFloat(a.attrs["FRAME-RATE"]);
                isNaN(h) || (n = h),
                    o
                        ? l("renditionchange", {
                              video_source_fps: n,
                              video_source_bitrate: o,
                              video_source_width: a.width,
                              video_source_height: a.height,
                              video_source_rendition_name: a.name,
                              video_source_codec: null == a ? void 0 : a.videoCodec,
                          })
                        : s.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
            }
        };
        i.on(r.Events.LEVEL_SWITCHED, p),
            (i._stopMuxMonitor = function () {
                i.off(r.Events.MANIFEST_LOADED, o),
                    i.off(r.Events.LEVEL_LOADED, h),
                    i.off(r.Events.AUDIO_TRACK_LOADED, d),
                    i.off(r.Events.FRAG_LOADED, u),
                    i.off(r.Events.FRAG_CHANGED, c),
                    i.off(r.Events.ERROR, f),
                    i.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, g),
                    i.off(r.Events.LEVEL_SWITCHED, p),
                    i.off(r.Events.DESTROYING, i._stopMuxMonitor),
                    delete i._stopMuxMonitor;
            }),
            i.on(r.Events.DESTROYING, i._stopMuxMonitor);
    },
    ey = function (e) {
        e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
    },
    eE = function (e, t) {
        if (!e || !e.requestEndDate) return {};
        var i,
            r = et(e.url),
            s = e.url,
            a = e.bytesLoaded,
            n = new Date(e.requestStartDate).getTime(),
            l = new Date(e.firstByteDate).getTime(),
            o = new Date(e.requestEndDate).getTime(),
            h = isNaN(e.duration) ? 0 : e.duration,
            d =
                "function" == typeof t.getMetricsFor
                    ? t.getMetricsFor(e.mediaType).HttpList
                    : t.getDashMetrics().getHttpRequests(e.mediaType);
        d.length > 0 && (i = ec(d[d.length - 1]._responseHeaders || ""));
        var u = i ? ef(i) : void 0;
        return {
            requestStart: n,
            requestResponseStart: l,
            requestResponseEnd: o,
            requestBytesLoaded: a,
            requestResponseHeaders: i,
            requestMediaDuration: h,
            requestHostname: r,
            requestUrl: s,
            requestId: u,
        };
    },
    eT = function (e, t) {
        var i = t.getQualityFor(e),
            r = t.getCurrentTrackFor(e).bitrateList;
        return r
            ? {
                  currentLevel: i,
                  renditionWidth: r[i].width || null,
                  renditionHeight: r[i].height || null,
                  renditionBitrate: r[i].bandwidth,
              }
            : {};
    },
    e_ = function (e) {
        var t;
        return null == (t = e.match(/.*codecs\*?="(.*)"/)) ? void 0 : t[1];
    },
    eS = function (e) {
        try {
            var t, i;
            return null == (i = e.getVersion) || null == (t = i.call(e))
                ? void 0
                : t.split(".").map(function (e) {
                      return parseInt(e);
                  })[0];
        } catch (e) {
            return !1;
        }
    },
    eb = function (e, t, i) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var r = e.log;
        if (!i || !i.on) return void r.warn("Invalid dash.js player reference. Monitoring blocked.");
        var s = eS(i),
            a = function (i, r) {
                return e.emit(t, i, r);
            },
            n = function (e) {
                var t = e.type,
                    i = (e.data || {}).url;
                a("requestcompleted", {
                    request_event_type: t,
                    request_start: 0,
                    request_response_start: 0,
                    request_response_end: 0,
                    request_bytes_loaded: -1,
                    request_type: "manifest",
                    request_hostname: et(i),
                    request_url: i,
                });
            };
        i.on("manifestLoaded", n);
        var l = {},
            o = function (e) {
                if ("function" != typeof e.getRequests) return null;
                var t = e.getRequests({
                    state: "executed",
                });
                return 0 === t.length ? null : t[t.length - 1];
            },
            h = function (e) {
                var t = e.type,
                    r = e.chunk,
                    s = e.request,
                    n = (r || {}).mediaInfo || {},
                    o = n.type,
                    h = n.bitrateList,
                    d = {};
                (h = h || []).forEach(function (e, t) {
                    (d[t] = {}),
                        (d[t].width = e.width),
                        (d[t].height = e.height),
                        (d[t].bitrate = e.bandwidth),
                        (d[t].attrs = {});
                }),
                    "video" === o ? (l.video = d) : "audio" === o ? (l.audio = d) : (l.media = d);
                var u = eE(s, i),
                    c = u.requestStart,
                    f = u.requestResponseStart,
                    g = u.requestResponseEnd,
                    p = u.requestResponseHeaders,
                    v = u.requestMediaDuration,
                    y = u.requestHostname,
                    E = u.requestUrl;
                a("requestcompleted", {
                    request_event_type: t,
                    request_start: c,
                    request_response_start: f,
                    request_response_end: g,
                    request_bytes_loaded: -1,
                    request_type: o + "_init",
                    request_response_headers: p,
                    request_hostname: y,
                    request_id: u.requestId,
                    request_url: E,
                    request_media_duration: v,
                    request_rendition_lists: l,
                });
            };
        s >= 4
            ? i.on("initFragmentLoaded", h)
            : i.on("initFragmentLoaded", function (e) {
                  var t = e.type,
                      i = e.fragmentModel,
                      r = e.chunk;
                  h({
                      type: t,
                      request: o(i),
                      chunk: r,
                  });
              });
        var d = function (e) {
            var t = e.type,
                r = e.chunk,
                s = e.request,
                n = r || {},
                l = n.mediaInfo,
                o = n.start,
                h = (l || {}).type,
                d = eE(s, i),
                u = d.requestStart,
                c = d.requestResponseStart,
                f = d.requestResponseEnd,
                g = d.requestBytesLoaded,
                p = d.requestResponseHeaders,
                v = d.requestMediaDuration,
                y = d.requestHostname,
                E = d.requestUrl,
                T = d.requestId,
                _ = eT(h, i),
                S = _.currentLevel,
                b = _.renditionWidth,
                A = _.renditionHeight;
            a("requestcompleted", {
                request_event_type: t,
                request_start: u,
                request_response_start: c,
                request_response_end: f,
                request_bytes_loaded: g,
                request_type: h,
                request_response_headers: p,
                request_hostname: y,
                request_id: T,
                request_url: E,
                request_media_start_time: o,
                request_media_duration: v,
                request_current_level: S,
                request_labeled_bitrate: _.renditionBitrate,
                request_video_width: b,
                request_video_height: A,
            });
        };
        s >= 4
            ? i.on("mediaFragmentLoaded", d)
            : i.on("mediaFragmentLoaded", function (e) {
                  var t = e.type,
                      i = e.fragmentModel,
                      r = e.chunk;
                  d({
                      type: t,
                      request: o(i),
                      chunk: r,
                  });
              });
        var u = {
                video: void 0,
                audio: void 0,
                totalBitrate: void 0,
            },
            c = function () {
                if (u.video && "number" == typeof u.video.bitrate) {
                    if (!(u.video.width && u.video.height))
                        return void r.warn("have bitrate info for video but missing width/height");
                    var e = u.video.bitrate;
                    if ((u.audio && "number" == typeof u.audio.bitrate && (e += u.audio.bitrate), e !== u.totalBitrate))
                        return (
                            (u.totalBitrate = e),
                            {
                                video_source_bitrate: e,
                                video_source_height: u.video.height,
                                video_source_width: u.video.width,
                                video_source_codec: e_(u.video.codec),
                            }
                        );
                }
            },
            f = function (e, t, s) {
                if ("number" != typeof e.newQuality)
                    return void r.warn("missing evt.newQuality in qualityChangeRendered event", e);
                var n = e.mediaType;
                if ("audio" === n || "video" === n) {
                    var l = i.getBitrateInfoListFor(n).find(function (t) {
                        return t.qualityIndex === e.newQuality;
                    });
                    if (!(l && "number" == typeof l.bitrate)) return void r.warn("missing bitrate info for ".concat(n));
                    u[n] = eh(eo({}, l), {
                        codec: i.getCurrentTrackFor(n).codec,
                    });
                    var o = c();
                    o && a("renditionchange", o);
                }
            };
        i.on("qualityChangeRendered", f);
        var g = function (e) {
            var t = e.request,
                i = e.mediaType;
            a("requestcanceled", {
                request_event_type: (t = t || {}).type + "_" + t.action,
                request_url: t.url,
                request_type: i,
                request_hostname: et(t.url),
            });
        };
        i.on("fragmentLoadingAbandoned", g);
        var p = function (e) {
            var t,
                i,
                r = e.error,
                s = (null == r || null == (t = r.data) ? void 0 : t.request) || {},
                n = (null == r || null == (i = r.data) ? void 0 : i.response) || {};
            (null == r ? void 0 : r.code) === 27 &&
                a("requestfailed", {
                    request_error: s.type + "_" + s.action,
                    request_url: s.url,
                    request_hostname: et(s.url),
                    request_type: s.mediaType,
                    request_error_code: n.status,
                    request_error_text: n.statusText,
                });
            var l =
                "".concat(null != s && s.url ? "url: ".concat(s.url, "\n") : "") +
                "".concat(
                    (null != n && n.status) || (null != n && n.statusText)
                        ? "response: "
                              .concat(null == n ? void 0 : n.status, ", ")
                              .concat(null == n ? void 0 : n.statusText, "\n")
                        : "",
                );
            a("error", {
                player_error_code: null == r ? void 0 : r.code,
                player_error_message: null == r ? void 0 : r.message,
                player_error_context: l,
            });
        };
        i.on("error", p),
            (i._stopMuxMonitor = function () {
                i.off("manifestLoaded", n),
                    i.off("initFragmentLoaded", h),
                    i.off("mediaFragmentLoaded", d),
                    i.off("qualityChangeRendered", f),
                    i.off("error", p),
                    i.off("fragmentLoadingAbandoned", g),
                    delete i._stopMuxMonitor;
            });
    },
    eA = function (e) {
        e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
    },
    eL = 0,
    eR = (function () {
        function e() {
            Y(this, e), z(this, "_listeners", void 0);
        }
        return (
            X(e, [
                {
                    key: "on",
                    value: function (e, t, i) {
                        return (
                            (t._eventEmitterGuid = t._eventEmitterGuid || ++eL),
                            (this._listeners = this._listeners || {}),
                            (this._listeners[e] = this._listeners[e] || []),
                            i && (t = t.bind(i)),
                            this._listeners[e].push(t),
                            t
                        );
                    },
                },
                {
                    key: "off",
                    value: function (e, t) {
                        var i = this._listeners && this._listeners[e];
                        i &&
                            i.forEach(function (e, r) {
                                e._eventEmitterGuid === t._eventEmitterGuid && i.splice(r, 1);
                            });
                    },
                },
                {
                    key: "one",
                    value: function (e, t, i) {
                        var r = this;
                        t._eventEmitterGuid = t._eventEmitterGuid || ++eL;
                        var s = function () {
                            r.off(e, s), t.apply(i || this, arguments);
                        };
                        (s._eventEmitterGuid = t._eventEmitterGuid), this.on(e, s);
                    },
                },
                {
                    key: "emit",
                    value: function (e, t) {
                        var i = this;
                        if (this._listeners) {
                            t = t || {};
                            var r = this._listeners["before" + e] || [],
                                s = this._listeners["before*"] || [],
                                a = this._listeners[e] || [],
                                n = this._listeners["after" + e] || [],
                                l = function (t, r) {
                                    (t = t.slice()).forEach(function (t) {
                                        t.call(
                                            i,
                                            {
                                                type: e,
                                            },
                                            r,
                                        );
                                    });
                                };
                            l(r, t), l(s, t), l(a, t), l(n, t);
                        }
                    },
                },
            ]),
            e
        );
    })(),
    ek = c(f()),
    eI = (function () {
        function e(t) {
            var i = this;
            Y(this, e),
                z(this, "_playbackHeartbeatInterval", void 0),
                z(this, "_playheadShouldBeProgressing", void 0),
                z(this, "pm", void 0),
                (this.pm = t),
                (this._playbackHeartbeatInterval = null),
                (this._playheadShouldBeProgressing = !1),
                t.on("playing", function () {
                    i._playheadShouldBeProgressing = !0;
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
                    t.data.player_is_paused ? i._stopPlaybackHeartbeatInterval() : i._startPlaybackHeartbeatInterval();
                }),
                t.on("timeupdate", function () {
                    null !== i._playbackHeartbeatInterval && t.emit("playbackheartbeat");
                }),
                t.on("devicesleep", function (e, r) {
                    null !== i._playbackHeartbeatInterval &&
                        (ek.default.clearInterval(i._playbackHeartbeatInterval),
                        t.emit("playbackheartbeatend", {
                            viewer_time: r.viewer_time,
                        }),
                        (i._playbackHeartbeatInterval = null));
                });
        }
        return (
            X(e, [
                {
                    key: "_startPlaybackHeartbeatInterval",
                    value: function () {
                        var e = this;
                        null === this._playbackHeartbeatInterval &&
                            (this.pm.emit("playbackheartbeat"),
                            (this._playbackHeartbeatInterval = ek.default.setInterval(function () {
                                e.pm.emit("playbackheartbeat");
                            }, this.pm.playbackHeartbeatTime)));
                    },
                },
                {
                    key: "_stopPlaybackHeartbeatInterval",
                    value: function () {
                        (this._playheadShouldBeProgressing = !1),
                            null !== this._playbackHeartbeatInterval &&
                                (ek.default.clearInterval(this._playbackHeartbeatInterval),
                                this.pm.emit("playbackheartbeatend"),
                                (this._playbackHeartbeatInterval = null));
                    },
                },
            ]),
            e
        );
    })(),
    eD = function e(t) {
        var i = this;
        Y(this, e),
            z(this, "viewErrored", void 0),
            t.on("viewinit", function () {
                i.viewErrored = !1;
            }),
            t.on("error", function (e, r) {
                try {
                    var s = t.errorTranslator({
                        player_error_code: r.player_error_code,
                        player_error_message: r.player_error_message,
                        player_error_context: r.player_error_context,
                        player_error_severity: r.player_error_severity,
                        player_error_business_exception: r.player_error_business_exception,
                    });
                    s &&
                        ((t.data.player_error_code = s.player_error_code || r.player_error_code),
                        (t.data.player_error_message = s.player_error_message || r.player_error_message),
                        (t.data.player_error_context = s.player_error_context || r.player_error_context),
                        (t.data.player_error_severity = s.player_error_severity || r.player_error_severity),
                        (t.data.player_error_business_exception =
                            s.player_error_business_exception || r.player_error_business_exception),
                        (i.viewErrored = !0));
                } catch (e) {
                    t.mux.log.warn("Exception in error translator callback.", e), (i.viewErrored = !0);
                }
            }),
            t.on("aftererror", function () {
                var e, i, r, s, a;
                null == (e = t.data) || delete e.player_error_code,
                    null == (i = t.data) || delete i.player_error_message,
                    null == (r = t.data) || delete r.player_error_context,
                    null == (s = t.data) || delete s.player_error_severity,
                    null == (a = t.data) || delete a.player_error_business_exception;
            });
    },
    eP = (function () {
        function e(t) {
            Y(this, e),
                z(this, "_watchTimeTrackerLastCheckedTime", void 0),
                z(this, "pm", void 0),
                (this.pm = t),
                (this._watchTimeTrackerLastCheckedTime = null),
                t.on("playbackheartbeat", this._updateWatchTime.bind(this)),
                t.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
        }
        return (
            X(e, [
                {
                    key: "_updateWatchTime",
                    value: function (e, t) {
                        var i = t.viewer_time;
                        null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = i),
                            el(this.pm.data, "view_watch_time", i - this._watchTimeTrackerLastCheckedTime),
                            (this._watchTimeTrackerLastCheckedTime = i);
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
    ew = (function () {
        function e(t) {
            var i = this;
            Y(this, e),
                z(this, "_playbackTimeTrackerLastPlayheadPosition", void 0),
                z(this, "_lastTime", void 0),
                z(this, "_isAdPlaying", void 0),
                z(this, "_callbackUpdatePlaybackTime", void 0),
                z(this, "pm", void 0),
                (this.pm = t),
                (this._playbackTimeTrackerLastPlayheadPosition = -1),
                (this._lastTime = B()),
                (this._isAdPlaying = !1),
                (this._callbackUpdatePlaybackTime = null),
                t.on("viewinit", function () {
                    i.pm.data.view_playing_time_ms_cumulative = 0;
                });
            var r = this._startPlaybackTimeTracking.bind(this);
            t.on("playing", r), t.on("adplaying", r), t.on("seeked", r), t.on("rebufferend", r);
            var s = this._stopPlaybackTimeTracking.bind(this);
            t.on("playbackheartbeatend", s),
                t.on("seeking", s),
                t.on("rebufferstart", s),
                t.on("adplaying", function () {
                    i._isAdPlaying = !0;
                }),
                t.on("adended", function () {
                    i._isAdPlaying = !1;
                }),
                t.on("adpause", function () {
                    i._isAdPlaying = !1;
                }),
                t.on("adbreakstart", function () {
                    i._isAdPlaying = !1;
                }),
                t.on("adbreakend", function () {
                    i._isAdPlaying = !1;
                }),
                t.on("adplay", function () {
                    i._isAdPlaying = !1;
                }),
                t.on("viewinit", function () {
                    (i._playbackTimeTrackerLastPlayheadPosition = -1),
                        (i._lastTime = B()),
                        (i._isAdPlaying = !1),
                        (i._callbackUpdatePlaybackTime = null);
                });
        }
        return (
            X(e, [
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
                            i = t - this._lastTime,
                            r = -1;
                        this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
                        e > this._playbackTimeTrackerLastPlayheadPosition
                            ? (r = e - this._playbackTimeTrackerLastPlayheadPosition)
                            : this._isAdPlaying && (r = i),
                            r > 0 && r <= 1e3 && el(this.pm.data, "view_content_playback_time", r),
                            null !== this._callbackUpdatePlaybackTime &&
                                i > 0 &&
                                i <= 1e3 &&
                                (this._isAdPlaying && el(this.pm.data, "ad_playing_time_ms_cumulative", i),
                                el(this.pm.data, "view_playing_time_ms_cumulative", i)),
                            (this._playbackTimeTrackerLastPlayheadPosition = e),
                            (this._lastTime = t);
                    },
                },
            ]),
            e
        );
    })(),
    ex = (function () {
        function e(t) {
            Y(this, e), z(this, "pm", void 0), (this.pm = t);
            var i = this._updatePlayheadTime.bind(this);
            t.on("playbackheartbeat", i),
                t.on("playbackheartbeatend", i),
                t.on("timeupdate", i),
                t.on("destroy", function () {
                    t.off("timeupdate", i);
                });
        }
        return (
            X(e, [
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
                        var i = this,
                            r = function () {
                                i.pm.currentFragmentPDT &&
                                    i.pm.currentFragmentStart &&
                                    (i.pm.data.player_program_time =
                                        i.pm.currentFragmentPDT +
                                        i.pm.data.player_playhead_time -
                                        i.pm.currentFragmentStart);
                            };
                        if (t && t.player_playhead_time)
                            (this.pm.data.player_playhead_time = t.player_playhead_time),
                                r(),
                                this._updateMaxPlayheadPosition();
                        else if (this.pm.getPlayheadTime) {
                            var s = this.pm.getPlayheadTime();
                            void 0 !== s &&
                                ((this.pm.data.player_playhead_time = s), r(), this._updateMaxPlayheadPosition());
                        }
                    },
                },
            ]),
            e
        );
    })(),
    eC = function e(t) {
        if ((Y(this, e), !t.disableRebufferTracking)) {
            var i,
                r = function (e, t) {
                    s(t), (i = void 0);
                },
                s = function (e) {
                    if (i) {
                        var r = e.viewer_time - i;
                        el(t.data, "view_rebuffer_duration", r),
                            (i = e.viewer_time),
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
                return s(t);
            }),
                t.on("rebufferstart", function (e, s) {
                    i || (el(t.data, "view_rebuffer_count", 1), (i = s.viewer_time), t.one("rebufferend", r));
                }),
                t.on("viewinit", function () {
                    (i = void 0), t.off("rebufferend", r);
                });
        }
    },
    eO = (function () {
        function e(t) {
            var i = this;
            Y(this, e),
                z(this, "_lastCheckedTime", void 0),
                z(this, "_lastPlayheadTime", void 0),
                z(this, "_lastPlayheadTimeUpdatedTime", void 0),
                z(this, "_rebuffering", void 0),
                z(this, "pm", void 0),
                (this.pm = t),
                t.disableRebufferTracking ||
                    t.disablePlayheadRebufferTracking ||
                    ((this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null),
                    t.on("playbackheartbeat", this._checkIfRebuffering.bind(this)),
                    t.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)),
                    t.on("seeking", function () {
                        i._cleanupRebufferTracker(null, {
                            viewer_time: B(),
                        });
                    }));
        }
        return (
            X(e, [
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
                        var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                        "number" == typeof this.pm.sustainedRebufferThreshold &&
                            i >= this.pm.sustainedRebufferThreshold &&
                            (this._rebuffering ||
                                ((this._rebuffering = !0),
                                this.pm.emit("rebufferstart", {
                                    viewer_time: this._lastPlayheadTimeUpdatedTime,
                                }))),
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
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (this._rebuffering)
                            (this._rebuffering = !1),
                                this.pm.emit("rebufferend", {
                                    viewer_time: t.viewer_time,
                                });
                        else {
                            if (null === this._lastCheckedTime) return;
                            var r = this.pm.data.player_playhead_time - this._lastPlayheadTime,
                                s = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                            "number" == typeof this.pm.minimumRebufferDuration &&
                                r > 0 &&
                                s - r > this.pm.minimumRebufferDuration &&
                                ((this._lastCheckedTime = null),
                                this.pm.emit("rebufferstart", {
                                    viewer_time: this._lastPlayheadTimeUpdatedTime,
                                }),
                                this.pm.emit("rebufferend", {
                                    viewer_time: this._lastPlayheadTimeUpdatedTime + s - r,
                                }));
                        }
                        i ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState();
                    },
                },
            ]),
            e
        );
    })(),
    eM = (function () {
        function e(t) {
            var i = this;
            Y(this, e),
                z(this, "pm", void 0),
                (this.pm = t),
                t.on("viewinit", function () {
                    var e = t.data,
                        r = e.view_id;
                    if (!e.view_program_changed) {
                        var s = function (e, s) {
                            var a = s.viewer_time;
                            "playing" === e.type && void 0 === t.data.view_time_to_first_frame
                                ? i.calculateTimeToFirstFrame(a || B(), r)
                                : "adplaying" === e.type &&
                                  (void 0 === t.data.view_time_to_first_frame || i._inPrerollPosition()) &&
                                  i.calculateTimeToFirstFrame(a || B(), r);
                        };
                        t.one("playing", s),
                            t.one("adplaying", s),
                            t.one("viewend", function () {
                                t.off("playing", s), t.off("adplaying", s);
                            });
                    }
                });
        }
        return (
            X(e, [
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
                            (this.pm.watchTimeTracker._updateWatchTime(null, {
                                viewer_time: e,
                            }),
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
    eF = function e(t) {
        var i = this;
        Y(this, e),
            z(this, "_lastPlayerHeight", void 0),
            z(this, "_lastPlayerWidth", void 0),
            z(this, "_lastPlayheadPosition", void 0),
            z(this, "_lastSourceHeight", void 0),
            z(this, "_lastSourceWidth", void 0),
            t.on("viewinit", function () {
                i._lastPlayheadPosition = -1;
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
                        i._lastPlayheadPosition >= 0 &&
                        t.data.player_playhead_time >= 0 &&
                        i._lastPlayerWidth >= 0 &&
                        i._lastSourceWidth > 0 &&
                        i._lastPlayerHeight >= 0 &&
                        i._lastSourceHeight > 0
                    ) {
                        var e = t.data.player_playhead_time - i._lastPlayheadPosition;
                        if (e < 0) {
                            i._lastPlayheadPosition = -1;
                            return;
                        }
                        var r = Math.min(
                                i._lastPlayerWidth / i._lastSourceWidth,
                                i._lastPlayerHeight / i._lastSourceHeight,
                            ),
                            s = Math.max(0, r - 1),
                            a = Math.max(0, 1 - r);
                        (t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, s)),
                            (t.data.view_max_downscale_percentage = Math.max(
                                t.data.view_max_downscale_percentage || 0,
                                a,
                            )),
                            el(t.data, "view_total_content_playback_time", e),
                            el(t.data, "view_total_upscaling", s * e),
                            el(t.data, "view_total_downscaling", a * e);
                    }
                    i._lastPlayheadPosition = -1;
                });
            }),
            ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"].forEach(function (e) {
                t.on(e, function () {
                    (i._lastPlayheadPosition = t.data.player_playhead_time),
                        (i._lastPlayerWidth = t.data.player_width),
                        (i._lastPlayerHeight = t.data.player_height),
                        (i._lastSourceWidth = t.data.video_source_width),
                        (i._lastSourceHeight = t.data.video_source_height);
                });
            });
    },
    eN = function e(t) {
        var i = this;
        Y(this, e), z(this, "isSeeking", void 0), (this.isSeeking = !1);
        var r = -1,
            s = function () {
                var e = B(),
                    s = (t.data.viewer_time || e) - (r || e);
                el(t.data, "view_seek_duration", s),
                    (t.data.view_max_seek_time = Math.max(t.data.view_max_seek_time || 0, s)),
                    (i.isSeeking = !1),
                    (r = -1);
            };
        t.on("seeking", function (e, a) {
            if ((Object.assign(t.data, a), i.isSeeking && a.viewer_time - r <= 2e3)) {
                r = a.viewer_time;
                return;
            }
            i.isSeeking && s(),
                (i.isSeeking = !0),
                (r = a.viewer_time),
                el(t.data, "view_seek_count", 1),
                t.send("seeking");
        }),
            t.on("seeked", function () {
                s();
            }),
            t.on("viewend", function () {
                i.isSeeking && (s(), t.send("seeked")), (i.isSeeking = !1), (r = -1);
            });
    },
    eB = function (e, t) {
        e.push(t),
            e.sort(function (e, t) {
                return e.viewer_time - t.viewer_time;
            });
    },
    eU = [
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
    e$ = (function () {
        function e(t) {
            var i = this;
            Y(this, e),
                z(this, "_adHasPlayed", void 0),
                z(this, "_adRequests", void 0),
                z(this, "_adResponses", void 0),
                z(this, "_currentAdRequestNumber", void 0),
                z(this, "_currentAdResponseNumber", void 0),
                z(this, "_prerollPlayTime", void 0),
                z(this, "_wouldBeNewAdPlay", void 0),
                z(this, "isAdBreak", void 0),
                z(this, "pm", void 0),
                (this.pm = t),
                t.on("viewinit", function () {
                    (i.isAdBreak = !1),
                        (i._currentAdRequestNumber = 0),
                        (i._currentAdResponseNumber = 0),
                        (i._adRequests = []),
                        (i._adResponses = []),
                        (i._adHasPlayed = !1),
                        (i._wouldBeNewAdPlay = !0),
                        (i._prerollPlayTime = void 0);
                }),
                eU.forEach(function (e) {
                    return t.on(e, i._updateAdData.bind(i));
                });
            var r = function () {
                i.isAdBreak = !1;
            };
            t.on("adbreakstart", function () {
                i.isAdBreak = !0;
            }),
                t.on("play", r),
                t.on("playing", r),
                t.on("viewend", r),
                t.on("adrequest", function (e, r) {
                    (r = Object.assign(
                        {
                            ad_request_id: "generatedAdRequestId" + i._currentAdRequestNumber++,
                        },
                        r,
                    )),
                        eB(i._adRequests, r),
                        el(t.data, "view_ad_request_count"),
                        i.inPrerollPosition() &&
                            ((t.data.view_preroll_requested = !0),
                            i._adHasPlayed || el(t.data, "view_preroll_request_count"));
                }),
                t.on("adresponse", function (e, r) {
                    (r = Object.assign(
                        {
                            ad_request_id: "generatedAdRequestId" + i._currentAdResponseNumber++,
                        },
                        r,
                    )),
                        eB(i._adResponses, r);
                    var s = i.findAdRequest(r.ad_request_id);
                    s && el(t.data, "view_ad_request_time", Math.max(0, r.viewer_time - s.viewer_time));
                }),
                t.on("adplay", function (e, r) {
                    (i._adHasPlayed = !0),
                        i._wouldBeNewAdPlay && ((i._wouldBeNewAdPlay = !1), el(t.data, "view_ad_played_count")),
                        i.inPrerollPosition() &&
                            !t.data.view_preroll_played &&
                            ((t.data.view_preroll_played = !0),
                            i._adRequests.length > 0 &&
                                (t.data.view_preroll_request_time = Math.max(
                                    0,
                                    r.viewer_time - i._adRequests[0].viewer_time,
                                )),
                            t.data.view_start &&
                                (t.data.view_startup_preroll_request_time = Math.max(
                                    0,
                                    r.viewer_time - t.data.view_start,
                                )),
                            (i._prerollPlayTime = r.viewer_time));
                }),
                t.on("adplaying", function (e, r) {
                    i.inPrerollPosition() &&
                        void 0 === t.data.view_preroll_load_time &&
                        void 0 !== i._prerollPlayTime &&
                        ((t.data.view_preroll_load_time = r.viewer_time - i._prerollPlayTime),
                        (t.data.view_startup_preroll_load_time = r.viewer_time - i._prerollPlayTime));
                }),
                t.on("adclicked", function (e, r) {
                    i._wouldBeNewAdPlay || el(t.data, "view_ad_clicked_count");
                }),
                t.on("adskipped", function (e, r) {
                    i._wouldBeNewAdPlay || el(t.data, "view_ad_skipped_count");
                }),
                t.on("adended", function () {
                    i._wouldBeNewAdPlay = !0;
                }),
                t.on("aderror", function () {
                    i._wouldBeNewAdPlay = !0;
                });
        }
        return (
            X(e, [
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
                                var i = O(ei(t.ad_tag_url), 2),
                                    r = i[0],
                                    s = i[1];
                                (this.pm.data.view_preroll_ad_tag_domain = s),
                                    (this.pm.data.view_preroll_ad_tag_hostname = r);
                            }
                            if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                var a = O(ei(t.ad_asset_url), 2),
                                    n = a[0],
                                    l = a[1];
                                (this.pm.data.view_preroll_ad_asset_domain = l),
                                    (this.pm.data.view_preroll_ad_asset_hostname = n);
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
    eG = function e(t) {
        var i = this;
        Y(this, e), z(this, "lastWallClockTime", void 0);
        var r = function () {
                (i.lastWallClockTime = B()), t.on("before*", s);
            },
            s = function (e) {
                var r = B(),
                    s = i.lastWallClockTime;
                (i.lastWallClockTime = r),
                    r - s > 3e4 &&
                        (t.emit("devicesleep", {
                            viewer_time: s,
                        }),
                        Object.assign(t.data, {
                            viewer_time: s,
                        }),
                        t.send("devicesleep"),
                        t.emit("devicewake", {
                            viewer_time: r,
                        }),
                        Object.assign(t.data, {
                            viewer_time: r,
                        }),
                        t.send("devicewake"));
            };
        t.one("playbackheartbeat", r),
            t.on("playbackheartbeatend", function () {
                t.off("before*", s), t.one("playbackheartbeat", r);
            });
    },
    eH = c(f()),
    eK =
        ((tl = function () {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var i = arguments[e];
                for (var r in i) t[r] = i[r];
            }
            return t;
        }),
        (function e(t) {
            function i(e, r, s) {
                var a;
                if ("u" > typeof document) {
                    if (arguments.length > 1) {
                        if (
                            "number" ==
                            typeof (s = tl(
                                {
                                    path: "/",
                                },
                                i.defaults,
                                s,
                            )).expires
                        ) {
                            var n = new Date();
                            n.setMilliseconds(n.getMilliseconds() + 864e5 * s.expires), (s.expires = n);
                        }
                        try {
                            (a = JSON.stringify(r)), /^[\{\[]/.test(a) && (r = a);
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
                            (document.cookie =
                                e +
                                "=" +
                                r +
                                (s.expires ? "; expires=" + s.expires.toUTCString() : "") +
                                (s.path ? "; path=" + s.path : "") +
                                (s.domain ? "; domain=" + s.domain : "") +
                                (s.secure ? "; secure" : ""))
                        );
                    }
                    e || (a = {});
                    for (
                        var l = document.cookie ? document.cookie.split("; ") : [], o = /(%[0-9A-Z]{2})+/g, h = 0;
                        h < l.length;
                        h++
                    ) {
                        var d = l[h].split("="),
                            u = d.slice(1).join("=");
                        '"' === u.charAt(0) && (u = u.slice(1, -1));
                        try {
                            var c = d[0].replace(o, decodeURIComponent);
                            if (((u = t.read ? t.read(u, c) : t(u, c) || u.replace(o, decodeURIComponent)), this.json))
                                try {
                                    u = JSON.parse(u);
                                } catch (e) {}
                            if (e === c) {
                                a = u;
                                break;
                            }
                            e || (a[c] = u);
                        } catch (e) {}
                    }
                    return a;
                }
            }
            return (
                (i.set = i),
                (i.get = function (e) {
                    return i.call(i, e);
                }),
                (i.getJSON = function () {
                    return i.apply(
                        {
                            json: !0,
                        },
                        [].slice.call(arguments),
                    );
                }),
                (i.defaults = {}),
                (i.remove = function (e, t) {
                    i(
                        e,
                        "",
                        tl(t, {
                            expires: -1,
                        }),
                    );
                }),
                (i.withConverter = e),
                i
            );
        })(function () {})),
    eq = "muxData",
    eV = function () {
        var e;
        try {
            e = (eK.get(eq) || "").split("&").reduce(function (e, t) {
                var i = O(t.split("="), 2),
                    r = i[0],
                    s = i[1],
                    a = +s;
                return (e[r] = s && a == s ? a : s), e;
            }, {});
        } catch (t) {
            e = {};
        }
        return e;
    },
    ej = function (e) {
        try {
            eK.set(
                eq,
                Object.entries(e)
                    .map(function (e) {
                        var t = O(e, 2),
                            i = t[0],
                            r = t[1];
                        return "".concat(i, "=").concat(r);
                    })
                    .join("&"),
                {
                    expires: 365,
                },
            );
        } catch (e) {}
    },
    eW = function () {
        var e = eV();
        return (
            (e.mux_viewer_id = e.mux_viewer_id || U()),
            (e.msn = e.msn || Math.random()),
            ej(e),
            {
                mux_viewer_id: e.mux_viewer_id,
                mux_sample_number: e.msn,
            }
        );
    },
    eY = function () {
        var e = eV(),
            t = B();
        return (
            e.session_start && ((e.sst = e.session_start), delete e.session_start),
            e.session_id && ((e.sid = e.session_id), delete e.session_id),
            e.session_expires && ((e.sex = e.session_expires), delete e.session_expires),
            (!e.sex || e.sex < t) && ((e.sid = U()), (e.sst = t)),
            (e.sex = t + 15e5),
            ej(e),
            {
                session_id: e.sid,
                session_start: e.sst,
                session_expires: e.sex,
            }
        );
    },
    eQ = c(f()),
    eX = function () {
        var e;
        switch (ez()) {
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
    ez = function () {
        var e = eQ.default.navigator,
            t = e && (e.connection || e.mozConnection || e.webkitConnection);
        return t && t.type;
    };
eX.getConnectionFromAPI = ez;
var eJ = e0({
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
    for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
    return t;
}

function e1(e) {
    var t = {},
        i = {};
    return (
        Object.keys(e).forEach(function (r) {
            var s = !1;
            if (e.hasOwnProperty(r) && void 0 !== e[r]) {
                var a = r.split("_"),
                    n = a[0],
                    l = eJ[n];
                l || (q.info("Data key word `" + a[0] + "` not expected in " + r), (l = n + "_")),
                    a.splice(1).forEach(function (e) {
                        "url" === e && (s = !0),
                            eZ[e]
                                ? (l += eZ[e])
                                : Number.isInteger(Number(e))
                                  ? (l += e)
                                  : (q.info("Data key word `" + e + "` not expected in " + r), (l += "_" + e + "_"));
                    }),
                    s ? (i[l] = e[r]) : (t[l] = e[r]);
            }
        }),
        Object.assign(t, i)
    );
}
var e2 = c(f()),
    e3 = c(w()),
    e4 = {
        maxBeaconSize: 300,
        maxQueueLength: 3600,
        baseTimeBetweenBeacons: 1e4,
        maxPayloadKBSize: 500,
    },
    e5 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
    e8 = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this._beaconUrl = e || "https://img.litix.io"),
            (this._eventQueue = []),
            (this._postInFlight = !1),
            (this._resendAfterPost = !1),
            (this._failureCount = 0),
            (this._sendTimeout = !1),
            (this._options = Object.assign({}, e4, t));
    };
(e8.prototype.queueEvent = function (e, t) {
    var i = Object.assign({}, t);
    return (
        (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) &&
        (this._eventQueue.push(i),
        this._sendTimeout || this._startBeaconSending(),
        this._eventQueue.length <= this._options.maxQueueLength)
    );
}),
    (e8.prototype.flushEvents = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e && 1 === this._eventQueue.length
            ? this._eventQueue.pop()
            : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
    }),
    (e8.prototype.destroy = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.destroyed = !0),
            e ? this._clearBeaconQueue() : this.flushEvents(),
            e2.default.clearTimeout(this._sendTimeout);
    }),
    (e8.prototype._clearBeaconQueue = function () {
        var e =
                this._eventQueue.length > this._options.maxBeaconSize
                    ? this._eventQueue.length - this._options.maxBeaconSize
                    : 0,
            t = this._eventQueue.slice(e);
        e > 0 &&
            Object.assign(
                t[t.length - 1],
                e1({
                    mux_view_message: "event queue truncated",
                }),
            );
        var i = this._createPayload(t);
        e9(this._beaconUrl, i, !0, function () {});
    }),
    (e8.prototype._sendBeaconQueue = function () {
        var e = this;
        if (this._postInFlight) {
            this._resendAfterPost = !0;
            return;
        }
        var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
        (this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize)), (this._postInFlight = !0);
        var i = this._createPayload(t),
            r = B();
        e9(this._beaconUrl, i, !1, function (i, s) {
            s
                ? ((e._eventQueue = t.concat(e._eventQueue)),
                  (e._failureCount += 1),
                  q.info("Error sending beacon: " + s))
                : (e._failureCount = 0),
                (e._roundTripTime = B() - r),
                (e._postInFlight = !1),
                e._resendAfterPost && ((e._resendAfterPost = !1), e._eventQueue.length > 0 && e._sendBeaconQueue());
        });
    }),
    (e8.prototype._getNextBeaconTime = function () {
        if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
        var e = Math.pow(2, this._failureCount - 1);
        return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons;
    }),
    (e8.prototype._startBeaconSending = function () {
        var e = this;
        e2.default.clearTimeout(this._sendTimeout),
            this.destroyed ||
                (this._sendTimeout = e2.default.setTimeout(function () {
                    e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending();
                }, this._getNextBeaconTime()));
    }),
    (e8.prototype._createPayload = function (e) {
        var t = this,
            i = {
                transmission_timestamp: Math.round(B()),
            };
        this._roundTripTime && (i.rtt_ms = Math.round(this._roundTripTime));
        var r,
            s,
            a,
            n = function () {
                a =
                    (r = JSON.stringify({
                        metadata: i,
                        events: s || e,
                    })).length / 1024;
            },
            l = function () {
                return a <= t._options.maxPayloadKBSize;
            };
        return (
            n(),
            l() ||
                (q.info("Payload size is too big (" + a + " kb). Removing unnecessary events."),
                (s = e.filter(function (e) {
                    return -1 === e5.indexOf(e.e);
                })),
                n()),
            l() ||
                (q.info("Payload size still too big (" + a + " kb). Cropping fields.."),
                s.forEach(function (e) {
                    for (var t in e) {
                        var i = e[t];
                        "string" == typeof i && i.length > 51200 && (e[t] = i.substring(0, 51200));
                    }
                }),
                n()),
            r
        );
    });
var e6 =
        "function" == typeof e3.default.exitPictureInPicture
            ? function (e) {
                  return e.length <= 57344;
              }
            : function (e) {
                  return !1;
              },
    e9 = function (e, t, i, r) {
        if (i && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) return void r();
        if (e2.default.fetch)
            return void e2.default
                .fetch(e, {
                    method: "POST",
                    body: t,
                    headers: {
                        "Content-Type": "text/plain",
                    },
                    keepalive: e6(t),
                })
                .then(function (e) {
                    return r(null, e.ok ? null : "Error");
                })
                .catch(function (e) {
                    return r(null, e);
                });
        if (e2.default.XMLHttpRequest) {
            var s = new e2.default.XMLHttpRequest();
            (s.onreadystatechange = function () {
                if (4 === s.readyState) return r(null, 200 !== s.status ? "error" : void 0);
            }),
                s.open("POST", e),
                s.setRequestHeader("Content-Type", "text/plain"),
                s.send(t);
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
    ti = ["viewstart", "error", "ended", "viewend"],
    tr = (function () {
        function e(t, i) {
            var r,
                s,
                a,
                n,
                l,
                o,
                h,
                d,
                u,
                c,
                f,
                g,
                p,
                v,
                y,
                E,
                T,
                _,
                S,
                b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Y(this, e),
                z(this, "mux", void 0),
                z(this, "envKey", void 0),
                z(this, "options", void 0),
                z(this, "eventQueue", void 0),
                z(this, "sampleRate", void 0),
                z(this, "disableCookies", void 0),
                z(this, "respectDoNotTrack", void 0),
                z(this, "previousBeaconData", void 0),
                z(this, "lastEventTime", void 0),
                z(this, "rateLimited", void 0),
                z(this, "pageLevelData", void 0),
                z(this, "viewerData", void 0),
                (this.mux = t),
                (this.envKey = i),
                (this.options = b),
                (this.previousBeaconData = null),
                (this.lastEventTime = 0),
                (this.rateLimited = !1),
                (this.eventQueue = new e8(
                    ((r = this.envKey),
                    (a = (s = this.options).beaconCollectionDomain),
                    (n = s.beaconDomain),
                    a
                        ? "https://" + a
                        : (r = r || "inferred").match(/^[a-z0-9]+$/)
                          ? "https://" + r + "." + (n || "litix.io")
                          : "https://img.litix.io/a.gif"),
                )),
                (this.sampleRate = null != (T = this.options.sampleRate) ? T : 1),
                (this.disableCookies = null != (_ = this.options.disableCookies) && _),
                (this.respectDoNotTrack = null != (S = this.options.respectDoNotTrack) && S),
                (this.previousBeaconData = null),
                (this.lastEventTime = 0),
                (this.rateLimited = !1),
                (this.pageLevelData = {
                    mux_api_version: this.mux.API_VERSION,
                    mux_embed: this.mux.NAME,
                    mux_embed_version: this.mux.VERSION,
                    viewer_application_name: null == (l = this.options.platform) ? void 0 : l.name,
                    viewer_application_version: null == (o = this.options.platform) ? void 0 : o.version,
                    viewer_application_engine: null == (h = this.options.platform) ? void 0 : h.layout,
                    viewer_device_name: null == (d = this.options.platform) ? void 0 : d.product,
                    viewer_device_category: "",
                    viewer_device_manufacturer: null == (u = this.options.platform) ? void 0 : u.manufacturer,
                    viewer_os_family: null == (f = this.options.platform) || null == (c = f.os) ? void 0 : c.family,
                    viewer_os_architecture:
                        null == (p = this.options.platform) || null == (g = p.os) ? void 0 : g.architecture,
                    viewer_os_version: null == (y = this.options.platform) || null == (v = y.os) ? void 0 : v.version,
                    viewer_connection_type: eX(),
                    page_url:
                        null === eH.default || void 0 === eH.default || null == (E = eH.default.location)
                            ? void 0
                            : E.href,
                }),
                (this.viewerData = this.disableCookies ? {} : eW());
        }
        return (
            X(e, [
                {
                    key: "send",
                    value: function (e, t) {
                        if (!(!e || !(null != t && t.view_id))) {
                            if (this.respectDoNotTrack && j())
                                return q.info("Not sending `" + e + "` because Do Not Track is enabled");
                            if (!t || "object" != typeof t)
                                return q.error("A data object was expected in send() but was not provided");
                            var i = this.disableCookies ? {} : eY(),
                                r = eh(eo({}, this.pageLevelData, t, i, this.viewerData), {
                                    event: e,
                                    env_key: this.envKey,
                                });
                            r.user_id && ((r.viewer_user_id = r.user_id), delete r.user_id);
                            var s,
                                a = (null != (s = r.mux_sample_number) ? s : 0) >= this.sampleRate,
                                n = e1(this._deduplicateBeaconData(e, r));
                            if (((this.lastEventTime = this.mux.utils.now()), a))
                                return q.info("Not sending event due to sample rate restriction", e, r, n);
                            if (
                                (this.envKey ||
                                    q.info(
                                        "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
                                        e,
                                        r,
                                        n,
                                    ),
                                !this.rateLimited)
                            )
                                if (
                                    (q.info("Sending event", e, r, n),
                                    (this.rateLimited = !this.eventQueue.queueEvent(e, n)),
                                    this.mux.WINDOW_UNLOADING && "viewend" === e)
                                )
                                    this.eventQueue.destroy(!0);
                                else {
                                    if (this.mux.WINDOW_HIDDEN && "hb" === e) this.eventQueue.flushEvents(!0);
                                    else if (ti.indexOf(e) >= 0) {
                                        if ("error" === e && "warning" === t.player_error_severity) return;
                                        this.eventQueue.flushEvents();
                                    }
                                    if (this.rateLimited)
                                        return (
                                            (r.event = "eventrateexceeded"),
                                            (n = e1(r)),
                                            this.eventQueue.queueEvent(r.event, n),
                                            q.error("Beaconing disabled due to rate limit.")
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
                        var i = this,
                            r = {},
                            s = t.view_id;
                        if (
                            "-1" === s ||
                            "viewstart" === e ||
                            "viewend" === e ||
                            !this.previousBeaconData ||
                            this.mux.utils.now() - this.lastEventTime >= 6e5
                        )
                            (r = eo({}, t)),
                                s && (this.previousBeaconData = r),
                                s && "viewend" === e && (this.previousBeaconData = null);
                        else {
                            var a = 0 === e.indexOf("request");
                            Object.entries(t).forEach(function (t) {
                                var s = O(t, 2),
                                    n = s[0],
                                    l = s[1];
                                i.previousBeaconData &&
                                    (l !== i.previousBeaconData[n] ||
                                        e7.indexOf(n) > -1 ||
                                        i.objectHasChanged(a, n, l, i.previousBeaconData[n]) ||
                                        i.eventRequiresKey(e, n)) &&
                                    ((r[n] = l), (i.previousBeaconData[n] = l));
                            });
                        }
                        return r;
                    },
                },
                {
                    key: "objectHasChanged",
                    value: function (e, t, i, r) {
                        return (
                            !!e &&
                            0 === t.indexOf("request_") &&
                            ("request_response_headers" === t ||
                                "object" != typeof i ||
                                "object" != typeof r ||
                                Object.keys(i || {}).length !== Object.keys(r || {}).length)
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
    ts = function e(t) {
        Y(this, e);
        var i = 0,
            r = 0,
            s = 0,
            a = 0,
            n = 0,
            l = 0,
            o = 0;
        t.on("requestcompleted", function (e, l) {
            var o,
                h,
                d = l.request_start,
                u = l.request_response_start,
                c = l.request_response_end,
                f = l.request_bytes_loaded;
            if (
                (a++,
                u
                    ? ((o = u - (null != d ? d : 0)), (h = (null != c ? c : 0) - u))
                    : (h = (null != c ? c : 0) - (null != d ? d : 0)),
                h > 0 && f && f > 0)
            ) {
                var g = (f / h) * 8e3;
                n++,
                    (r += f),
                    (s += h),
                    (t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, g)),
                    (t.data.view_average_request_throughput = (r / s) * 8e3),
                    (t.data.view_request_count = a),
                    o > 0 &&
                        ((i += o),
                        (t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, o)),
                        (t.data.view_average_request_latency = i / n));
            }
        }),
            t.on("requestfailed", function (e, i) {
                a++, l++, (t.data.view_request_count = a), (t.data.view_request_failed_count = l);
            }),
            t.on("requestcanceled", function (e, i) {
                a++, o++, (t.data.view_request_count = a), (t.data.view_request_canceled_count = o);
            });
    },
    ta = function e(t) {
        var i = this;
        Y(this, e),
            z(this, "_lastEventTime", void 0),
            t.on("before*", function (e, r) {
                var s = r.viewer_time,
                    a = B(),
                    n = i._lastEventTime;
                if (((i._lastEventTime = a), n && a - n > 36e5)) {
                    var l = Object.keys(t.data).reduce(function (e, i) {
                        return 0 === i.indexOf("video_") ? Object.assign(e, z({}, i, t.data[i])) : e;
                    }, {});
                    t.mux.log.info("Received event after at least an hour inactivity, creating a new view");
                    var o = t.playbackHeartbeat._playheadShouldBeProgressing;
                    t._resetView(
                        Object.assign(
                            {
                                viewer_time: s,
                            },
                            l,
                        ),
                    ),
                        (t.playbackHeartbeat._playheadShouldBeProgressing = o),
                        t.playbackHeartbeat._playheadShouldBeProgressing &&
                            "play" !== e.type &&
                            "adbreakstart" !== e.type &&
                            (t.emit("play", {
                                viewer_time: s,
                            }),
                            "playing" !== e.type &&
                                t.emit("playing", {
                                    viewer_time: s,
                                }));
                }
            });
    };

function tn(e, t) {
    return (null == e ? void 0 : e.toLowerCase()) === (null == t ? void 0 : t.toLowerCase());
}
var tl,
    to,
    th = function e(t) {
        Y(this, e);
        var i = function (e) {
                var i,
                    r,
                    s,
                    l =
                        null != (i = e) &&
                        i.request_type &&
                        ("media" === i.request_type || "video" === i.request_type) &&
                        null != (r = i.request_response_headers) &&
                        r["x-cdn"]
                            ? i.request_response_headers["x-cdn"]
                            : null != i && i.video_cdn
                              ? i.video_cdn
                              : null,
                    o =
                        null != (s = e) && s.request_start
                            ? s.request_start
                            : null != s && s.viewer_time
                              ? s.viewer_time
                              : Date.now();
                null != l &&
                    !tn(l, a) &&
                    n <= o &&
                    ((a = l),
                    (n = o),
                    t.emit("cdnchange", {
                        video_cdn: l,
                    }));
            },
            r = null,
            s = null,
            a = null,
            n = 0;
        t.on("viewinit", function () {
            (r = null), (s = null), (a = null), (n = 0);
        }),
            t.on("beforecdnchange", function (e, t) {
                var i = null == t ? void 0 : t.video_cdn;
                i &&
                    (void 0 === t.video_previous_cdn || null === t.video_previous_cdn) &&
                    (tn(i, s)
                        ? (t.video_previous_cdn = null != r ? r : void 0)
                        : ((t.video_previous_cdn = null != s ? s : void 0), (r = s), (s = i)));
            }),
            t.on("requestcompleted", function (e, t) {
                i(t);
            });
    },
    td = function (e) {
        try {
            return JSON.parse(e), !0;
        } catch (e) {
            return !1;
        }
    },
    tu = function e(t) {
        var i = this;
        Y(this, e),
            z(this, "_emittingAutomaticEvent", !1),
            z(this, "_hasInitialized", !1),
            t.on("viewstart", function () {
                i._hasInitialized ||
                    ((i._hasInitialized = !0),
                    (i._emittingAutomaticEvent = !0),
                    t.emit("playbackmodechange", {
                        player_playback_mode: "standard",
                        player_playback_mode_data: "{}",
                    }),
                    (i._emittingAutomaticEvent = !1));
            }),
            t.on("viewend", function () {
                i._hasInitialized = !1;
            }),
            t.on("playbackmodechange", function (e, r) {
                i._emittingAutomaticEvent ||
                    (r.player_playback_mode_data
                        ? td(r.player_playback_mode_data) ||
                          (t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),
                          (r.player_playback_mode_data = "{}"))
                        : (r.player_playback_mode_data = "{}"),
                    (t.data.player_playback_mode_data = r.player_playback_mode_data),
                    (t.data.player_playback_mode = r.player_playback_mode));
            });
    },
    tc = [
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
    tf = new Set(["requestcompleted", "requestfailed", "requestcanceled"]),
    tg = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (r.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: r,
                writable: !0,
                configurable: !0,
            },
        })),
            e && ee(r, e);
        var t,
            i =
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
                        i = J(r);
                    return (
                        (e = t ? Reflect.construct(i, arguments, J(this).constructor) : i.apply(this, arguments)),
                        e && ("object" === v(e) || "function" == typeof e) ? e : W(this)
                    );
                });

        function r(e, t, s) {
            Y(this, r),
                z(W((a = i.call(this))), "pageLoadEndTime", void 0),
                z(W(a), "pageLoadInitTime", void 0),
                z(W(a), "_destroyed", void 0),
                z(W(a), "_heartBeatTimeout", void 0),
                z(W(a), "adTracker", void 0),
                z(W(a), "dashjs", void 0),
                z(W(a), "data", void 0),
                z(W(a), "disablePlayheadRebufferTracking", void 0),
                z(W(a), "disableRebufferTracking", void 0),
                z(W(a), "errorTracker", void 0),
                z(W(a), "errorTranslator", void 0),
                z(W(a), "emitTranslator", void 0),
                z(W(a), "getAdData", void 0),
                z(W(a), "getPlayheadTime", void 0),
                z(W(a), "getStateData", void 0),
                z(W(a), "stateDataTranslator", void 0),
                z(W(a), "hlsjs", void 0),
                z(W(a), "id", void 0),
                z(W(a), "longResumeTracker", void 0),
                z(W(a), "minimumRebufferDuration", void 0),
                z(W(a), "mux", void 0),
                z(W(a), "playbackEventDispatcher", void 0),
                z(W(a), "playbackHeartbeat", void 0),
                z(W(a), "playbackHeartbeatTime", void 0),
                z(W(a), "playheadTime", void 0),
                z(W(a), "seekingTracker", void 0),
                z(W(a), "sustainedRebufferThreshold", void 0),
                z(W(a), "watchTimeTracker", void 0),
                z(W(a), "currentFragmentPDT", void 0),
                z(W(a), "currentFragmentStart", void 0),
                (a.pageLoadInitTime = en()),
                (a.pageLoadEndTime = ea()),
                (a.mux = e),
                (a.id = t),
                null != s &&
                    s.beaconDomain &&
                    a.mux.log.warn(
                        "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.",
                    ),
                ((s = Object.assign(
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
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return t;
                        },
                        stateDataTranslator: function (e) {
                            return e;
                        },
                    },
                    s,
                )).data = s.data || {}),
                s.data.property_key && ((s.data.env_key = s.data.property_key), delete s.data.property_key),
                (q.level = s.debug ? 1 : 3),
                (a.getPlayheadTime = s.getPlayheadTime),
                (a.getStateData =
                    s.getStateData ||
                    function () {
                        return {};
                    }),
                (a.getAdData = s.getAdData || function () {}),
                (a.minimumRebufferDuration = s.minimumRebufferDuration),
                (a.sustainedRebufferThreshold = s.sustainedRebufferThreshold),
                (a.playbackHeartbeatTime = s.playbackHeartbeatTime),
                (a.disableRebufferTracking = s.disableRebufferTracking),
                a.disableRebufferTracking &&
                    a.mux.log.warn(
                        "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.",
                    ),
                (a.disablePlayheadRebufferTracking = s.disablePlayheadRebufferTracking),
                (a.errorTranslator = s.errorTranslator),
                (a.emitTranslator = s.emitTranslator),
                (a.stateDataTranslator = s.stateDataTranslator),
                (a.playbackEventDispatcher = new tr(e, s.data.env_key, s)),
                (a.data = {
                    player_instance_id: U(),
                    mux_sample_rate: s.sampleRate,
                    beacon_domain: s.beaconCollectionDomain || s.beaconDomain,
                }),
                (a.data.view_sequence_number = 1),
                (a.data.player_sequence_number = 1);
            var a,
                n = function () {
                    void 0 === this.data.view_start &&
                        ((this.data.view_start = this.mux.utils.now()), this.emit("viewstart"));
                }.bind(W(a));
            if (
                (a.on("viewinit", function (e, t) {
                    this._resetVideoData(),
                        this._resetViewData(),
                        this._resetErrorData(),
                        this._updateStateData(),
                        Object.assign(this.data, t),
                        this._initializeViewData(),
                        this.one("play", n),
                        this.one("adbreakstart", n);
                }),
                a.on("videochange", function (e, t) {
                    this._resetView(t);
                }),
                a.on("programchange", function (e, t) {
                    this.data.player_is_paused &&
                        this.mux.log.warn(
                            "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.",
                        ),
                        this._resetView(
                            Object.assign(t, {
                                view_program_changed: !0,
                            }),
                        ),
                        n(),
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
                var o = function (e) {
                    e.persisted || a.destroy();
                };
                window.addEventListener("pagehide", o, !1),
                    a.on("destroy", function () {
                        window.removeEventListener("visibilitychange", l), window.removeEventListener("pagehide", o);
                    });
            }
            return (
                a.on("playerready", function (e, t) {
                    Object.assign(this.data, t);
                }),
                tc.forEach(function (e) {
                    a.on(e, function (t, i) {
                        0 !== e.indexOf("ad") && this._updateStateData(),
                            Object.assign(this.data, i),
                            this._sanitizeData();
                    }),
                        a.on("after" + e, function () {
                            ("error" !== e || this.errorTracker.viewErrored) && this.send(e);
                        });
                }),
                a.on("viewend", function (e, t) {
                    Object.assign(a.data, t);
                }),
                a.one("playerready", function (e) {
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
                (a.longResumeTracker = new ta(W(a))),
                (a.errorTracker = new eD(W(a))),
                new eG(W(a)),
                (a.seekingTracker = new eN(W(a))),
                (a.playheadTime = new ex(W(a))),
                (a.playbackHeartbeat = new eI(W(a))),
                new eF(W(a)),
                (a.watchTimeTracker = new eP(W(a))),
                new ew(W(a)),
                (a.adTracker = new e$(W(a))),
                new eO(W(a)),
                new eC(W(a)),
                new eM(W(a)),
                new ts(W(a)),
                new th(W(a)),
                new tu(W(a)),
                s.hlsjs && a.addHLSJS(s),
                s.dashjs && a.addDashJS(s),
                a.emit("viewinit", s.data),
                a
            );
        }
        return (
            X(r, [
                {
                    key: "emit",
                    value: function (e, t) {
                        var i,
                            s = Object.assign(
                                {
                                    viewer_time: this.mux.utils.now(),
                                },
                                t,
                            ),
                            a = [e, s];
                        if (this.emitTranslator)
                            try {
                                a = this.emitTranslator(e, s);
                            } catch (e) {
                                this.mux.log.warn("Exception in emit translator callback.", e);
                            }
                        null != a &&
                            a.length &&
                            (i = Z(J(r.prototype), "emit", this)).call.apply(i, [this].concat(K(a)));
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
                                var i = O(ei(t.video_source_url), 2),
                                    r = i[0];
                                (t.video_source_domain = i[1]), (t.video_source_hostname = r);
                            }
                            delete t.ad_request_id,
                                this.playbackEventDispatcher.send(e, t),
                                this.data.view_sequence_number++,
                                this.data.player_sequence_number++,
                                tf.has(e) || this._restartHeartBeat(),
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
                                var i,
                                    r,
                                    s = (function (e, t) {
                                        if (null == e) return {};
                                        var i,
                                            r,
                                            s = {},
                                            a = Object.keys(e);
                                        for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (s[i] = e[i]);
                                        return s;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < a.length; r++)
                                        (i = a[r]),
                                            !(t.indexOf(i) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                (s[i] = e[i]);
                                }
                                return s;
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
                            var i = parseInt(e.data[t], 10);
                            e.data[t] = isNaN(i) ? void 0 : i;
                        }),
                            ["player_source_url", "video_source_url"].forEach(function (t) {
                                if (e.data[t]) {
                                    var i = e.data[t].toLowerCase();
                                    (0 === i.indexOf("data:") || 0 === i.indexOf("blob:")) &&
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
                            t = (this.data.view_id = U()),
                            i = function () {
                                t === e.data.view_id && el(e.data, "player_view_count", 1);
                            };
                        this.data.player_is_paused ? this.one("play", i) : i();
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
                                : ((this.dashjs = e.dashjs), eb(this.mux, this.id, e.dashjs))
                            : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                    },
                },
                {
                    key: "removeDashJS",
                    value: function () {
                        this.dashjs && (eA(this.dashjs), (this.dashjs = void 0));
                    },
                },
            ]),
            r
        );
    })(eR),
    tm = c(w()),
    tp = [
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
    tv = {
        1: "MEDIA_ERR_ABORTED",
        2: "MEDIA_ERR_NETWORK",
        3: "MEDIA_ERR_DECODE",
        4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
    },
    ty = c(f());
ty.default && ty.default.WeakMap && (to = new WeakMap());
var tE = function (e) {
    return (
        (this.buffer = ""),
        (this.manifest = {
            segments: [],
            serverControl: {},
            sessionData: {},
        }),
        (this.currentUri = {}),
        this.process(e),
        this.manifest
    );
};
(tE.prototype.process = function (e) {
    var t;
    for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n"))
        this.processLine(this.buffer.substring(0, t)), (this.buffer = this.buffer.substring(t + 1));
}),
    (tE.prototype.processLine = function (e) {
        var t = e.indexOf(":"),
            i = tR(e, t),
            r = i[0],
            s = 2 === i.length ? tS(i[1]) : void 0;
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
                    if (!isFinite(s) || s < 0) return;
                    (this.manifest.targetDuration = s), this.setHoldBack();
                    break;
                case "#EXT-X-PART-INF":
                    tT(this.manifest, i),
                        this.manifest.partInf.partTarget &&
                            (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                        this.setHoldBack();
                    break;
                case "#EXT-X-SERVER-CONTROL":
                    tT(this.manifest, i), this.setHoldBack();
                    break;
                case "#EXTINF":
                    0 === s ? (this.currentUri.duration = 0.01) : s > 0 && (this.currentUri.duration = s);
                    break;
                case "#EXT-X-PROGRAM-DATE-TIME":
                    var a = new Date(s);
                    this.manifest.dateTimeString ||
                        ((this.manifest.dateTimeString = s), (this.manifest.dateTimeObject = a)),
                        (this.currentUri.dateTimeString = s),
                        (this.currentUri.dateTimeObject = a);
                    break;
                case "#EXT-X-VERSION":
                    tT(this.manifest, i);
                    break;
                case "#EXT-X-SESSION-DATA":
                    var n = eg(tk(i[1]));
                    Object.assign(this.manifest.sessionData, n);
            }
    }),
    (tE.prototype.setHoldBack = function () {
        var e = this.manifest,
            t = e.serverControl,
            i = e.targetDuration,
            r = e.partTargetDuration;
        if (t) {
            var s = "holdBack",
                a = "partHoldBack",
                n = i && 3 * i,
                l = r && 2 * r;
            i && !t.hasOwnProperty(s) && (t[s] = n),
                n && t[s] < n && (t[s] = n),
                r && !t.hasOwnProperty(a) && (t[a] = 3 * r),
                r && t[a] < l && (t[a] = l);
        }
    });
var tT = function (e, t) {
        var i,
            r = t_(t[0].replace("#EXT-X-", ""));
        tL(t[1]) ? ((i = {}), (i = Object.assign(tA(t[1]), i))) : (i = tS(t[1])), (e[r] = i);
    },
    t_ = function (e) {
        return e.toLowerCase().replace(/-(\w)/g, function (e) {
            return e[1].toUpperCase();
        });
    },
    tS = function (e) {
        if ("yes" === e.toLowerCase() || "no" === e.toLowerCase()) return "yes" === e.toLowerCase();
        var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
        return isNaN(t) ? e : t;
    },
    tb = function (e) {
        var t = {},
            i = e.split("=");
        return i.length > 1 && (t[t_(i[0])] = tS(i[1])), t;
    },
    tA = function (e) {
        for (var t = e.split(","), i = {}, r = 0; t.length > r; r++) i = Object.assign(tb(t[r]), i);
        return i;
    },
    tL = function (e) {
        return e.indexOf("=") > -1;
    },
    tR = function (e, t) {
        return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)];
    },
    tk = function (e) {
        var t = {};
        if (e) {
            var i = e.search(",");
            return (
                [e.slice(0, i), e.slice(i + 1)].forEach(function (e, i) {
                    for (var r = e.replace(/['"]+/g, "").split("="), s = 0; s < r.length; s++)
                        "DATA-ID" === r[s] && (t["DATA-ID"] = r[1 - s]), "VALUE" === r[s] && (t.VALUE = r[1 - s]);
                }),
                {
                    data: t,
                }
            );
        }
    },
    tI = {
        safeCall: function (e, t, i, r) {
            var s = r;
            if (e && "function" == typeof e[t])
                try {
                    s = e[t].apply(e, i);
                } catch (e) {
                    q.info("safeCall error", e);
                }
            return s;
        },
        safeIncrement: el,
        getComputedStyle: function (e, t) {
            var i;
            return e && t && ty.default && "function" == typeof ty.default.getComputedStyle
                ? (to && to.has(e) && (i = to.get(e)),
                  i || ((i = ty.default.getComputedStyle(e, null)), to && to.set(e, i)),
                  i.getPropertyValue(t))
                : "";
        },
        secondsToMs: function (e) {
            return Math.floor(1e3 * e);
        },
        assign: Object.assign,
        headersStringToObject: ec,
        cdnHeadersToRequestId: ef,
        extractHostnameAndDomain: ei,
        extractHostname: et,
        manifestParser: tE,
        generateShortID: $,
        generateUUID: U,
        now: B,
        findMediaElement: H,
    },
    tD = {},
    tP = function (e) {
        var t = arguments;
        "string" == typeof e
            ? tP.hasOwnProperty(e)
                ? M.default.setTimeout(function () {
                      (t = Array.prototype.splice.call(t, 1)), tP[e].apply(null, t);
                  }, 0)
                : q.warn("`" + e + "` is an unknown task")
            : "function" == typeof e
              ? M.default.setTimeout(function () {
                    e(tP);
                }, 0)
              : q.warn("`" + e + "` is invalid.");
    },
    tw = {
        loaded: B(),
        NAME: "mux-embed",
        VERSION: "5.13.0",
        API_VERSION: "2.1",
        PLAYER_TRACKED: !1,
        monitor: function (e, t) {
            return (function (e, t, i) {
                var r = O(H(t), 3),
                    s = r[0],
                    a = r[1],
                    n = r[2],
                    l = e.log,
                    o = e.utils.getComputedStyle,
                    h = e.utils.secondsToMs;
                if (!s) return l.error("No element was found with the `" + a + "` query selector.");
                if ("video" !== n && "audio" !== n)
                    return l.error("The element of `" + a + "` was not a media element.");
                s.mux &&
                    (s.mux.destroy(),
                    delete s.mux,
                    l.warn("Already monitoring this video element, replacing existing event listeners")),
                    ((i = Object.assign(
                        {
                            automaticErrorTracking: !0,
                        },
                        i,
                        {
                            getPlayheadTime: function () {
                                return h(s.currentTime);
                            },
                            getStateData: function () {
                                var e,
                                    t,
                                    i =
                                        (null == (e = this.getPlayheadTime) ? void 0 : e.call(this)) ||
                                        h(s.currentTime),
                                    r = this.hlsjs && this.hlsjs.url,
                                    a =
                                        this.dashjs &&
                                        "function" == typeof this.dashjs.getSource &&
                                        this.dashjs.getSource(),
                                    n = {
                                        player_is_paused: s.paused,
                                        player_width: parseInt(o(s, "width")),
                                        player_height: parseInt(o(s, "height")),
                                        player_autoplay_on: s.autoplay,
                                        player_preload_on: s.preload,
                                        player_language_code: s.lang,
                                        player_is_fullscreen:
                                            tm.default &&
                                            !!(
                                                tm.default.fullscreenElement ||
                                                tm.default.webkitFullscreenElement ||
                                                tm.default.mozFullScreenElement ||
                                                tm.default.msFullscreenElement
                                            ),
                                        video_poster_url: s.poster,
                                        video_source_url: r || a || s.currentSrc,
                                        video_source_duration: h(s.duration),
                                        video_source_height: s.videoHeight,
                                        video_source_width: s.videoWidth,
                                        view_dropped_frame_count:
                                            null == s || null == (t = s.getVideoPlaybackQuality)
                                                ? void 0
                                                : t.call(s).droppedVideoFrames,
                                    };
                                if (s.getStartDate && i > 0) {
                                    var l = s.getStartDate();
                                    if (l && "function" == typeof l.getTime && l.getTime()) {
                                        var d = l.getTime();
                                        (n.player_program_time = d + i),
                                            s.seekable.length > 0 &&
                                                (n.player_live_edge_program_time =
                                                    d + s.seekable.end(s.seekable.length - 1));
                                    }
                                }
                                return n;
                            },
                        },
                    )).data = Object.assign(
                        {
                            player_software: "HTML5 Video Element",
                            player_mux_plugin_name: "VideoElementMonitor",
                            player_mux_plugin_version: e.VERSION,
                        },
                        i.data,
                    )),
                    (s.mux = s.mux || {}),
                    (s.mux.deleted = !1),
                    (s.mux.emit = function (t, i) {
                        e.emit(a, t, i);
                    }),
                    (s.mux.updateData = function (e) {
                        s.mux.emit("hb", e);
                    });
                var d = function () {
                    l.error("The monitor for this video element has already been destroyed.");
                };
                (s.mux.destroy = function () {
                    Object.keys(s.mux.listeners).forEach(function (e) {
                        s.removeEventListener(e, s.mux.listeners[e], !1);
                    }),
                        delete s.mux.listeners,
                        (s.mux.destroy = d),
                        (s.mux.swapElement = d),
                        (s.mux.emit = d),
                        (s.mux.addHLSJS = d),
                        (s.mux.addDashJS = d),
                        (s.mux.removeHLSJS = d),
                        (s.mux.removeDashJS = d),
                        (s.mux.updateData = d),
                        (s.mux.setEmitTranslator = d),
                        (s.mux.setStateDataTranslator = d),
                        (s.mux.setGetPlayheadTime = d),
                        (s.mux.deleted = !0),
                        e.emit(a, "destroy");
                }),
                    (s.mux.swapElement = function (t) {
                        var i = O(H(t), 3),
                            r = i[0],
                            a = i[1],
                            n = i[2];
                        return r
                            ? "video" !== n && "audio" !== n
                                ? e.log.error("The element of `" + a + "` was not a media element.")
                                : void ((r.muxId = s.muxId),
                                  delete s.muxId,
                                  (r.mux = r.mux || {}),
                                  (r.mux.listeners = Object.assign({}, s.mux.listeners)),
                                  delete s.mux.listeners,
                                  Object.keys(r.mux.listeners).forEach(function (e) {
                                      s.removeEventListener(e, r.mux.listeners[e], !1),
                                          r.addEventListener(e, r.mux.listeners[e], !1);
                                  }),
                                  (r.mux.swapElement = s.mux.swapElement),
                                  (r.mux.destroy = s.mux.destroy),
                                  delete s.mux,
                                  (s = r))
                            : e.log.error("No element was found with the `" + a + "` query selector.");
                    }),
                    (s.mux.addHLSJS = function (t) {
                        e.addHLSJS(a, t);
                    }),
                    (s.mux.addDashJS = function (t) {
                        e.addDashJS(a, t);
                    }),
                    (s.mux.removeHLSJS = function () {
                        e.removeHLSJS(a);
                    }),
                    (s.mux.removeDashJS = function () {
                        e.removeDashJS(a);
                    }),
                    (s.mux.setEmitTranslator = function (t) {
                        e.setEmitTranslator(a, t);
                    }),
                    (s.mux.setStateDataTranslator = function (t) {
                        e.setStateDataTranslator(a, t);
                    }),
                    (s.mux.setGetPlayheadTime = function (t) {
                        t || (t = i.getPlayheadTime), e.setGetPlayheadTime(a, t);
                    }),
                    e.init(a, i),
                    e.emit(a, "playerready"),
                    s.paused || (e.emit(a, "play"), s.readyState > 2 && e.emit(a, "playing")),
                    (s.mux.listeners = {}),
                    tp.forEach(function (t) {
                        ("error" !== t || i.automaticErrorTracking) &&
                            ((s.mux.listeners[t] = function () {
                                var i = {};
                                if ("error" === t) {
                                    if (!s.error || 1 === s.error.code) return;
                                    (i.player_error_code = s.error.code),
                                        (i.player_error_message = tv[s.error.code] || s.error.message);
                                }
                                e.emit(a, t, i);
                            }),
                            s.addEventListener(t, s.mux.listeners[t], !1));
                    });
            })(tP, e, t);
        },
        destroyMonitor: function (e) {
            var t = O(H(e), 1)[0];
            t && t.mux && "function" == typeof t.mux.destroy
                ? t.mux.destroy()
                : q.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
        },
        addHLSJS: function (e, t) {
            var i = G(e);
            tD[i] ? tD[i].addHLSJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
        },
        addDashJS: function (e, t) {
            var i = G(e);
            tD[i] ? tD[i].addDashJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
        },
        removeHLSJS: function (e) {
            var t = G(e);
            tD[t] ? tD[t].removeHLSJS() : q.error("A monitor for `" + t + "` has not been initialized.");
        },
        removeDashJS: function (e) {
            var t = G(e);
            tD[t] ? tD[t].removeDashJS() : q.error("A monitor for `" + t + "` has not been initialized.");
        },
        init: function (e, t) {
            j() &&
                t &&
                t.respectDoNotTrack &&
                q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
            var i = G(e);
            tD[i] = new tg(tP, i, t);
        },
        emit: function (e, t, i) {
            var r = G(e);
            tD[r]
                ? (tD[r].emit(t, i), "destroy" === t && delete tD[r])
                : q.error("A monitor for `" + r + "` has not been initialized.");
        },
        updateData: function (e, t) {
            var i = G(e);
            tD[i] ? tD[i].emit("hb", t) : q.error("A monitor for `" + i + "` has not been initialized.");
        },
        setEmitTranslator: function (e, t) {
            var i = G(e);
            tD[i] ? (tD[i].emitTranslator = t) : q.error("A monitor for `" + i + "` has not been initialized.");
        },
        setStateDataTranslator: function (e, t) {
            var i = G(e);
            tD[i] ? (tD[i].stateDataTranslator = t) : q.error("A monitor for `" + i + "` has not been initialized.");
        },
        setGetPlayheadTime: function (e, t) {
            var i = G(e);
            tD[i] ? (tD[i].getPlayheadTime = t) : q.error("A monitor for `" + i + "` has not been initialized.");
        },
        checkDoNotTrack: j,
        log: q,
        utils: tI,
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
Object.assign(tP, tw),
    void 0 !== M.default &&
        "function" == typeof M.default.addEventListener &&
        M.default.addEventListener(
            "pagehide",
            function (e) {
                e.persisted || (tP.WINDOW_UNLOADING = !0);
            },
            !1,
        );
var tx = tP;
