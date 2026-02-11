"use strict";
n.d(t, { mg: () => ee, vd: () => K });
var r = n(64700),
    i = n(655972),
    a = n.n(i),
    s = n(412700),
    o = n.n(s),
    l = n(284009),
    u = n.n(l),
    c = n(859141),
    d = n.n(c);
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function f(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), h(e, t);
}
function h(e, t) {
    return (h =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) t.indexOf((n = a[r])) >= 0 || (i[n] = e[n]);
    return i;
}
var g = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title",
        FRAGMENT: "Symbol(react.fragment)",
    },
    E = { rel: ["amphtml", "canonical", "alternate"] },
    A = { type: ["application/ld+json"] },
    I = {
        charset: "",
        name: ["robots", "description"],
        property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site",
        ],
    },
    T = Object.keys(g).map(function (e) {
        return g[e];
    }),
    y = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex",
    },
    S = Object.keys(y).reduce(function (e, t) {
        return (e[y[t]] = t), e;
    }, {}),
    v = function (e, t) {
        for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
        }
        return null;
    },
    C = function (e) {
        var t = v(e, g.TITLE),
            n = v(e, "titleTemplate");
        if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
                return t;
            });
        var r = v(e, "defaultTitle");
        return t || r || void 0;
    },
    b = function (e) {
        return v(e, "onChangeClientState") || function () {};
    },
    N = function (e, t) {
        return t
            .filter(function (t) {
                return void 0 !== t[e];
            })
            .map(function (t) {
                return t[e];
            })
            .reduce(function (e, t) {
                return _({}, e, t);
            }, {});
    },
    R = function (e, t) {
        return t
            .filter(function (e) {
                return void 0 !== e[g.BASE];
            })
            .map(function (e) {
                return e[g.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
                if (!t.length)
                    for (var r = Object.keys(n), i = 0; i < r.length; i += 1) {
                        var a = r[i].toLowerCase();
                        if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                    }
                return t;
            }, []);
    },
    O = function (e, t, n) {
        var r = {};
        return n
            .filter(function (t) {
                return (
                    !!Array.isArray(t[e]) ||
                    (void 0 !== t[e] &&
                        console &&
                        "function" == typeof console.warn &&
                        console.warn(
                            "Helmet: " + e + ' should be of type "Array". Instead found type "' + typeof t[e] + '"',
                        ),
                    !1)
                );
            })
            .map(function (t) {
                return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
                var i = {};
                n.filter(function (e) {
                    for (var n, a = Object.keys(e), s = 0; s < a.length; s += 1) {
                        var o = a[s],
                            l = o.toLowerCase();
                        -1 === t.indexOf(l) ||
                            ("rel" === n && "canonical" === e[n].toLowerCase()) ||
                            ("rel" === l && "stylesheet" === e[l].toLowerCase()) ||
                            (n = l),
                            -1 === t.indexOf(o) ||
                                ("innerHTML" !== o && "cssText" !== o && "itemprop" !== o) ||
                                (n = o);
                    }
                    if (!n || !e[n]) return !1;
                    var u = e[n].toLowerCase();
                    return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][u] && ((i[n][u] = !0), !0);
                })
                    .reverse()
                    .forEach(function (t) {
                        return e.push(t);
                    });
                for (var a = Object.keys(i), s = 0; s < a.length; s += 1) {
                    var o = a[s],
                        l = _({}, r[o], i[o]);
                    r[o] = l;
                }
                return e;
            }, [])
            .reverse();
    },
    D = function (e, t) {
        if (Array.isArray(e) && e.length) {
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
        }
        return !1;
    },
    L = function (e) {
        return Array.isArray(e) ? e.join("") : e;
    },
    w = function (e, t) {
        return Array.isArray(e)
            ? e.reduce(
                  function (e, n) {
                      return (
                          !(function (e, t) {
                              for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                                  if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                              return !1;
                          })(n, t)
                              ? e.default.push(n)
                              : e.priority.push(n),
                          e
                      );
                  },
                  { priority: [], default: [] },
              )
            : { default: e };
    },
    x = function (e, t) {
        var n;
        return _({}, e, (((n = {})[t] = void 0), n));
    },
    P = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
    M = function (e, t) {
        return (
            void 0 === t && (t = !0),
            !1 === t
                ? String(e)
                : String(e)
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/"/g, "&quot;")
                      .replace(/'/g, "&#x27;")
        );
    },
    k = function (e) {
        return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
        }, "");
    },
    U = function (e, t) {
        return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
                return (t[y[n] || n] = e[n]), t;
            }, t)
        );
    },
    G = function (e, t) {
        return t.map(function (t, n) {
            var i,
                a = (((i = { key: n })["data-rh"] = !0), i);
            return (
                Object.keys(t).forEach(function (e) {
                    var n = y[e] || e;
                    "innerHTML" === n || "cssText" === n
                        ? (a.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
                        : (a[n] = t[e]);
                }),
                r.createElement(e, a)
            );
        });
    },
    F = function (e, t, n) {
        switch (e) {
            case g.TITLE:
                return {
                    toComponent: function () {
                        var e, n, i, a;
                        return (
                            (n = t.titleAttributes),
                            ((i = { key: (e = t.title) })["data-rh"] = !0),
                            (a = U(n, i)),
                            [r.createElement(g.TITLE, a, e)]
                        );
                    },
                    toString: function () {
                        return (function (e, t, n, r) {
                            var i = k(n),
                                a = L(t);
                            return i
                                ? "<" + e + ' data-rh="true" ' + i + ">" + M(a, r) + "</" + e + ">"
                                : "<" + e + ' data-rh="true">' + M(a, r) + "</" + e + ">";
                        })(e, t.title, t.titleAttributes, n);
                    },
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function () {
                        return U(t);
                    },
                    toString: function () {
                        return k(t);
                    },
                };
            default:
                return {
                    toComponent: function () {
                        return G(e, t);
                    },
                    toString: function () {
                        return (function (e, t, n) {
                            return t.reduce(function (t, r) {
                                var i = Object.keys(r)
                                        .filter(function (e) {
                                            return "innerHTML" !== e && "cssText" !== e;
                                        })
                                        .reduce(function (e, t) {
                                            var i = void 0 === r[t] ? t : t + '="' + M(r[t], n) + '"';
                                            return e ? e + " " + i : i;
                                        }, ""),
                                    a = r.innerHTML || r.cssText || "",
                                    s = -1 === P.indexOf(e);
                                return t + "<" + e + ' data-rh="true" ' + i + (s ? "/>" : ">" + a + "</" + e + ">");
                            }, "");
                        })(e, t, n);
                    },
                };
        }
    },
    V = function (e) {
        var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            a = e.noscriptTags,
            s = e.styleTags,
            o = e.title,
            l = void 0 === o ? "" : o,
            u = e.titleAttributes,
            c = e.linkTags,
            d = e.metaTags,
            _ = e.scriptTags,
            f = {
                toComponent: function () {},
                toString: function () {
                    return "";
                },
            };
        if (e.prioritizeSeoTags) {
            var h = (function (e) {
                var t = e.linkTags,
                    n = e.scriptTags,
                    r = e.encode,
                    i = w(e.metaTags, I),
                    a = w(t, E),
                    s = w(n, A);
                return {
                    priorityMethods: {
                        toComponent: function () {
                            return [].concat(G(g.META, i.priority), G(g.LINK, a.priority), G(g.SCRIPT, s.priority));
                        },
                        toString: function () {
                            return (
                                F(g.META, i.priority, r) +
                                " " +
                                F(g.LINK, a.priority, r) +
                                " " +
                                F(g.SCRIPT, s.priority, r)
                            );
                        },
                    },
                    metaTags: i.default,
                    linkTags: a.default,
                    scriptTags: s.default,
                };
            })(e);
            (f = h.priorityMethods), (c = h.linkTags), (d = h.metaTags), (_ = h.scriptTags);
        }
        return {
            priority: f,
            base: F(g.BASE, t, r),
            bodyAttributes: F("bodyAttributes", n, r),
            htmlAttributes: F("htmlAttributes", i, r),
            link: F(g.LINK, c, r),
            meta: F(g.META, d, r),
            noscript: F(g.NOSCRIPT, a, r),
            script: F(g.SCRIPT, _, r),
            style: F(g.STYLE, s, r),
            title: F(g.TITLE, { title: l, titleAttributes: u }, r),
        };
    },
    B = [],
    j = function (e, t) {
        var n = this;
        void 0 === t && (t = "u" > typeof document),
            (this.instances = []),
            (this.value = {
                setHelmet: function (e) {
                    n.context.helmet = e;
                },
                helmetInstances: {
                    get: function () {
                        return n.canUseDOM ? B : n.instances;
                    },
                    add: function (e) {
                        (n.canUseDOM ? B : n.instances).push(e);
                    },
                    remove: function (e) {
                        var t = (n.canUseDOM ? B : n.instances).indexOf(e);
                        (n.canUseDOM ? B : n.instances).splice(t, 1);
                    },
                },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
                (e.helmet = V({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {},
                }));
    },
    H = r.createContext({}),
    Y = a().shape({
        setHelmet: a().func,
        helmetInstances: a().shape({ get: a().func, add: a().func, remove: a().func }),
    }),
    W = "u" > typeof document,
    K = (function (e) {
        function t(n) {
            var r;
            return ((r = e.call(this, n) || this).helmetData = new j(r.props.context, t.canUseDOM)), r;
        }
        return (
            f(t, e),
            (t.prototype.render = function () {
                return r.createElement(H.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
        );
    })(r.Component);
(K.canUseDOM = W),
    (K.propTypes = { context: a().shape({ helmet: a().shape() }), children: a().node.isRequired }),
    (K.defaultProps = { context: {} }),
    (K.displayName = "HelmetProvider");
var $ = function (e, t) {
        var n,
            r = document.head || document.querySelector(g.HEAD),
            i = r.querySelectorAll(e + "[data-rh]"),
            a = [].slice.call(i),
            s = [];
        return (
            t &&
                t.length &&
                t.forEach(function (t) {
                    var r = document.createElement(e);
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) &&
                            ("innerHTML" === i
                                ? (r.innerHTML = t.innerHTML)
                                : "cssText" === i
                                  ? r.styleSheet
                                      ? (r.styleSheet.cssText = t.cssText)
                                      : r.appendChild(document.createTextNode(t.cssText))
                                  : r.setAttribute(i, void 0 === t[i] ? "" : t[i]));
                    r.setAttribute("data-rh", "true"),
                        a.some(function (e, t) {
                            return (n = t), r.isEqualNode(e);
                        })
                            ? a.splice(n, 1)
                            : s.push(r);
                }),
            a.forEach(function (e) {
                return e.parentNode.removeChild(e);
            }),
            s.forEach(function (e) {
                return r.appendChild(e);
            }),
            { oldTags: a, newTags: s }
        );
    },
    z = function (e, t) {
        var n = document.getElementsByTagName(e)[0];
        if (n) {
            for (
                var r = n.getAttribute("data-rh"),
                    i = r ? r.split(",") : [],
                    a = [].concat(i),
                    s = Object.keys(t),
                    o = 0;
                o < s.length;
                o += 1
            ) {
                var l = s[o],
                    u = t[l] || "";
                n.getAttribute(l) !== u && n.setAttribute(l, u), -1 === i.indexOf(l) && i.push(l);
                var c = a.indexOf(l);
                -1 !== c && a.splice(c, 1);
            }
            for (var d = a.length - 1; d >= 0; d -= 1) n.removeAttribute(a[d]);
            i.length === a.length
                ? n.removeAttribute("data-rh")
                : n.getAttribute("data-rh") !== s.join(",") && n.setAttribute("data-rh", s.join(","));
        }
    },
    q = function (e, t) {
        var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            s = e.noscriptTags,
            o = e.onChangeClientState,
            l = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            d = e.titleAttributes;
        z(g.BODY, e.bodyAttributes),
            z(g.HTML, r),
            (function (e, t) {
                void 0 !== e && document.title !== e && (document.title = L(e)), z(g.TITLE, t);
            })(c, d);
        var _ = {
                baseTag: $(g.BASE, n),
                linkTags: $(g.LINK, i),
                metaTags: $(g.META, a),
                noscriptTags: $(g.NOSCRIPT, s),
                scriptTags: $(g.SCRIPT, l),
                styleTags: $(g.STYLE, u),
            },
            f = {},
            h = {};
        Object.keys(_).forEach(function (e) {
            var t = _[e],
                n = t.newTags,
                r = t.oldTags;
            n.length && (f[e] = n), r.length && (h[e] = _[e].oldTags);
        }),
            t && t(),
            o(e, f, h);
    },
    X = null,
    Z = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t;
        }
        f(t, e);
        var n = t.prototype;
        return (
            (n.shouldComponentUpdate = function (e) {
                return !d()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
                this.emitChange();
            }),
            (n.componentWillUnmount = function () {
                this.props.context.helmetInstances.remove(this), this.emitChange();
            }),
            (n.emitChange = function () {
                var e,
                    t,
                    n = this.props.context,
                    r = n.setHelmet,
                    i = null,
                    a = {
                        baseTag: R(
                            ["href"],
                            (e = n.helmetInstances.get().map(function (e) {
                                var t = _({}, e.props);
                                return delete t.context, t;
                            })),
                        ),
                        bodyAttributes: N("bodyAttributes", e),
                        defer: v(e, "defer"),
                        encode: v(e, "encodeSpecialCharacters"),
                        htmlAttributes: N("htmlAttributes", e),
                        linkTags: O(g.LINK, ["rel", "href"], e),
                        metaTags: O(g.META, ["name", "charset", "http-equiv", "property", "itemprop"], e),
                        noscriptTags: O(g.NOSCRIPT, ["innerHTML"], e),
                        onChangeClientState: b(e),
                        scriptTags: O(g.SCRIPT, ["src", "innerHTML"], e),
                        styleTags: O(g.STYLE, ["cssText"], e),
                        title: C(e),
                        titleAttributes: N("titleAttributes", e),
                        prioritizeSeoTags: D(e, "prioritizeSeoTags"),
                    };
                K.canUseDOM
                    ? ((t = a),
                      X && cancelAnimationFrame(X),
                      t.defer
                          ? (X = requestAnimationFrame(function () {
                                q(t, function () {
                                    X = null;
                                });
                            }))
                          : (q(t), (X = null)))
                    : V && (i = V(a)),
                    r(i);
            }),
            (n.init = function () {
                this.rendered ||
                    ((this.rendered = !0), this.props.context.helmetInstances.add(this), this.emitChange());
            }),
            (n.render = function () {
                return this.init(), null;
            }),
            t
        );
    })(r.Component);
(Z.propTypes = { context: Y.isRequired }), (Z.displayName = "HelmetDispatcher");
var Q = ["children"],
    J = ["children"],
    ee = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        f(t, e);
        var n = t.prototype;
        return (
            (n.shouldComponentUpdate = function (e) {
                return !o()(x(this.props, "helmetData"), x(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
                if (!t) return null;
                switch (e.type) {
                    case g.SCRIPT:
                    case g.NOSCRIPT:
                        return { innerHTML: t };
                    case g.STYLE:
                        return { cssText: t };
                    default:
                        throw Error(
                            "<" +
                                e.type +
                                " /> elements are self-closing and can not contain children. Refer to our API for more information.",
                        );
                }
            }),
            (n.flattenArrayTypeChildren = function (e) {
                var t,
                    n = e.child,
                    r = e.arrayTypeChildren;
                return _(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                        _({}, e.newChildProps, this.mapNestedChildrenToProps(n, e.nestedChildren)),
                    ])),
                    t),
                );
            }),
            (n.mapObjectTypeChildren = function (e) {
                var t,
                    n,
                    r = e.child,
                    i = e.newProps,
                    a = e.newChildProps,
                    s = e.nestedChildren;
                switch (r.type) {
                    case g.TITLE:
                        return _({}, i, (((t = {})[r.type] = s), (t.titleAttributes = _({}, a)), t));
                    case g.BODY:
                        return _({}, i, { bodyAttributes: _({}, a) });
                    case g.HTML:
                        return _({}, i, { htmlAttributes: _({}, a) });
                    default:
                        return _({}, i, (((n = {})[r.type] = _({}, a)), n));
                }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
                var n = _({}, t);
                return (
                    Object.keys(e).forEach(function (t) {
                        var r;
                        n = _({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
                return (
                    u()(
                        T.some(function (t) {
                            return e.type === t;
                        }),
                        "function" == typeof e.type
                            ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                            : "Only elements types " +
                                  T.join(", ") +
                                  " are allowed. Helmet does not support rendering <" +
                                  e.type +
                                  "> elements. Refer to our API for more information.",
                    ),
                    u()(
                        !t ||
                            "string" == typeof t ||
                            (Array.isArray(t) &&
                                !t.some(function (e) {
                                    return "string" != typeof e;
                                })),
                        "Helmet expects a string as a child of <" +
                            e.type +
                            ">. Did you forget to wrap your children in braces? ( <" +
                            e.type +
                            ">{``}</" +
                            e.type +
                            "> ) Refer to our API for more information.",
                    ),
                    !0
                );
            }),
            (n.mapChildrenToProps = function (e, t) {
                var n = this,
                    i = {};
                return (
                    r.Children.forEach(e, function (e) {
                        if (e && e.props) {
                            var r = e.props,
                                a = r.children,
                                s = p(r, Q),
                                o = Object.keys(s).reduce(function (e, t) {
                                    return (e[S[t] || t] = s[t]), e;
                                }, {}),
                                l = e.type;
                            switch (("symbol" == typeof l ? (l = l.toString()) : n.warnOnInvalidChildren(e, a), l)) {
                                case g.FRAGMENT:
                                    t = n.mapChildrenToProps(a, t);
                                    break;
                                case g.LINK:
                                case g.META:
                                case g.NOSCRIPT:
                                case g.SCRIPT:
                                case g.STYLE:
                                    i = n.flattenArrayTypeChildren({
                                        child: e,
                                        arrayTypeChildren: i,
                                        newChildProps: o,
                                        nestedChildren: a,
                                    });
                                    break;
                                default:
                                    t = n.mapObjectTypeChildren({
                                        child: e,
                                        newProps: t,
                                        newChildProps: o,
                                        nestedChildren: a,
                                    });
                            }
                        }
                    }),
                    this.mapArrayTypeChildrenToProps(i, t)
                );
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.children,
                    n = p(e, J),
                    i = _({}, n),
                    a = n.helmetData;
                return (
                    t && (i = this.mapChildrenToProps(t, i)),
                    !a || a instanceof j || (a = new j(a.context, a.instances)),
                    a
                        ? r.createElement(Z, _({}, i, { context: a.value, helmetData: void 0 }))
                        : r.createElement(H.Consumer, null, function (e) {
                              return r.createElement(Z, _({}, i, { context: e }));
                          })
                );
            }),
            t
        );
    })(r.Component);
(ee.propTypes = {
    base: a().object,
    bodyAttributes: a().object,
    children: a().oneOfType([a().arrayOf(a().node), a().node]),
    defaultTitle: a().string,
    defer: a().bool,
    encodeSpecialCharacters: a().bool,
    htmlAttributes: a().object,
    link: a().arrayOf(a().object),
    meta: a().arrayOf(a().object),
    noscript: a().arrayOf(a().object),
    onChangeClientState: a().func,
    script: a().arrayOf(a().object),
    style: a().arrayOf(a().object),
    title: a().string,
    titleAttributes: a().object,
    titleTemplate: a().string,
    prioritizeSeoTags: a().bool,
    helmetData: a().object,
}),
    (ee.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    (ee.displayName = "Helmet");
