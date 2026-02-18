"use strict";
n.d(t, { mg: () => J, vd: () => W });
var r = n(64700),
    i = n(655972),
    s = n.n(i),
    a = n(412700),
    o = n.n(a),
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
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), p(e, t);
}
function p(e, t) {
    return (p =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        s = Object.keys(e);
    for (r = 0; r < s.length; r++) t.indexOf((n = s[r])) >= 0 || (i[n] = e[n]);
    return i;
}
var m = {
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
    g = { type: ["application/ld+json"] },
    A = {
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
    I = Object.keys(m).map(function (e) {
        return m[e];
    }),
    T = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex",
    },
    S = Object.keys(T).reduce(function (e, t) {
        return (e[T[t]] = t), e;
    }, {}),
    y = function (e, t) {
        for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
        }
        return null;
    },
    v = function (e) {
        var t = y(e, m.TITLE),
            n = y(e, "titleTemplate");
        if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
                return t;
            });
        var r = y(e, "defaultTitle");
        return t || r || void 0;
    },
    N = function (e) {
        return y(e, "onChangeClientState") || function () {};
    },
    C = function (e, t) {
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
    b = function (e, t) {
        return t
            .filter(function (e) {
                return void 0 !== e[m.BASE];
            })
            .map(function (e) {
                return e[m.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
                if (!t.length)
                    for (var r = Object.keys(n), i = 0; i < r.length; i += 1) {
                        var s = r[i].toLowerCase();
                        if (-1 !== e.indexOf(s) && n[s]) return t.concat(n);
                    }
                return t;
            }, []);
    },
    R = function (e, t, n) {
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
                    for (var n, s = Object.keys(e), a = 0; a < s.length; a += 1) {
                        var o = s[a],
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
                for (var s = Object.keys(i), a = 0; a < s.length; a += 1) {
                    var o = s[a],
                        l = _({}, r[o], i[o]);
                    r[o] = l;
                }
                return e;
            }, [])
            .reverse();
    },
    O = function (e, t) {
        if (Array.isArray(e) && e.length) {
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
        }
        return !1;
    },
    D = function (e) {
        return Array.isArray(e) ? e.join("") : e;
    },
    L = function (e, t) {
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
    w = function (e, t) {
        var n;
        return _({}, e, (((n = {})[t] = void 0), n));
    },
    x = [m.NOSCRIPT, m.SCRIPT, m.STYLE],
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
    P = function (e) {
        return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
        }, "");
    },
    k = function (e, t) {
        return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
                return (t[T[n] || n] = e[n]), t;
            }, t)
        );
    },
    U = function (e, t) {
        return t.map(function (t, n) {
            var i,
                s = (((i = { key: n })["data-rh"] = !0), i);
            return (
                Object.keys(t).forEach(function (e) {
                    var n = T[e] || e;
                    "innerHTML" === n || "cssText" === n
                        ? (s.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
                        : (s[n] = t[e]);
                }),
                r.createElement(e, s)
            );
        });
    },
    G = function (e, t, n) {
        switch (e) {
            case m.TITLE:
                return {
                    toComponent: function () {
                        var e, n, i, s;
                        return (
                            (n = t.titleAttributes),
                            ((i = { key: (e = t.title) })["data-rh"] = !0),
                            (s = k(n, i)),
                            [r.createElement(m.TITLE, s, e)]
                        );
                    },
                    toString: function () {
                        return (function (e, t, n, r) {
                            var i = P(n),
                                s = D(t);
                            return i
                                ? "<" + e + ' data-rh="true" ' + i + ">" + M(s, r) + "</" + e + ">"
                                : "<" + e + ' data-rh="true">' + M(s, r) + "</" + e + ">";
                        })(e, t.title, t.titleAttributes, n);
                    },
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function () {
                        return k(t);
                    },
                    toString: function () {
                        return P(t);
                    },
                };
            default:
                return {
                    toComponent: function () {
                        return U(e, t);
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
                                    s = r.innerHTML || r.cssText || "",
                                    a = -1 === x.indexOf(e);
                                return t + "<" + e + ' data-rh="true" ' + i + (a ? "/>" : ">" + s + "</" + e + ">");
                            }, "");
                        })(e, t, n);
                    },
                };
        }
    },
    F = function (e) {
        var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            s = e.noscriptTags,
            a = e.styleTags,
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
            var p = (function (e) {
                var t = e.linkTags,
                    n = e.scriptTags,
                    r = e.encode,
                    i = L(e.metaTags, A),
                    s = L(t, E),
                    a = L(n, g);
                return {
                    priorityMethods: {
                        toComponent: function () {
                            return [].concat(U(m.META, i.priority), U(m.LINK, s.priority), U(m.SCRIPT, a.priority));
                        },
                        toString: function () {
                            return (
                                G(m.META, i.priority, r) +
                                " " +
                                G(m.LINK, s.priority, r) +
                                " " +
                                G(m.SCRIPT, a.priority, r)
                            );
                        },
                    },
                    metaTags: i.default,
                    linkTags: s.default,
                    scriptTags: a.default,
                };
            })(e);
            (f = p.priorityMethods), (c = p.linkTags), (d = p.metaTags), (_ = p.scriptTags);
        }
        return {
            priority: f,
            base: G(m.BASE, t, r),
            bodyAttributes: G("bodyAttributes", n, r),
            htmlAttributes: G("htmlAttributes", i, r),
            link: G(m.LINK, c, r),
            meta: G(m.META, d, r),
            noscript: G(m.NOSCRIPT, s, r),
            script: G(m.SCRIPT, _, r),
            style: G(m.STYLE, a, r),
            title: G(m.TITLE, { title: l, titleAttributes: u }, r),
        };
    },
    V = [],
    B = function (e, t) {
        var n = this;
        void 0 === t && (t = "u" > typeof document),
            (this.instances = []),
            (this.value = {
                setHelmet: function (e) {
                    n.context.helmet = e;
                },
                helmetInstances: {
                    get: function () {
                        return n.canUseDOM ? V : n.instances;
                    },
                    add: function (e) {
                        (n.canUseDOM ? V : n.instances).push(e);
                    },
                    remove: function (e) {
                        var t = (n.canUseDOM ? V : n.instances).indexOf(e);
                        (n.canUseDOM ? V : n.instances).splice(t, 1);
                    },
                },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
                (e.helmet = F({
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
    j = s().shape({
        setHelmet: s().func,
        helmetInstances: s().shape({ get: s().func, add: s().func, remove: s().func }),
    }),
    Y = "u" > typeof document,
    W = (function (e) {
        function t(n) {
            var r;
            return ((r = e.call(this, n) || this).helmetData = new B(r.props.context, t.canUseDOM)), r;
        }
        return (
            f(t, e),
            (t.prototype.render = function () {
                return r.createElement(H.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
        );
    })(r.Component);
(W.canUseDOM = Y),
    (W.propTypes = { context: s().shape({ helmet: s().shape() }), children: s().node.isRequired }),
    (W.defaultProps = { context: {} }),
    (W.displayName = "HelmetProvider");
var K = function (e, t) {
        var n,
            r = document.head || document.querySelector(m.HEAD),
            i = r.querySelectorAll(e + "[data-rh]"),
            s = [].slice.call(i),
            a = [];
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
                        s.some(function (e, t) {
                            return (n = t), r.isEqualNode(e);
                        })
                            ? s.splice(n, 1)
                            : a.push(r);
                }),
            s.forEach(function (e) {
                return e.parentNode.removeChild(e);
            }),
            a.forEach(function (e) {
                return r.appendChild(e);
            }),
            { oldTags: s, newTags: a }
        );
    },
    z = function (e, t) {
        var n = document.getElementsByTagName(e)[0];
        if (n) {
            for (
                var r = n.getAttribute("data-rh"),
                    i = r ? r.split(",") : [],
                    s = [].concat(i),
                    a = Object.keys(t),
                    o = 0;
                o < a.length;
                o += 1
            ) {
                var l = a[o],
                    u = t[l] || "";
                n.getAttribute(l) !== u && n.setAttribute(l, u), -1 === i.indexOf(l) && i.push(l);
                var c = s.indexOf(l);
                -1 !== c && s.splice(c, 1);
            }
            for (var d = s.length - 1; d >= 0; d -= 1) n.removeAttribute(s[d]);
            i.length === s.length
                ? n.removeAttribute("data-rh")
                : n.getAttribute("data-rh") !== a.join(",") && n.setAttribute("data-rh", a.join(","));
        }
    },
    $ = function (e, t) {
        var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            s = e.metaTags,
            a = e.noscriptTags,
            o = e.onChangeClientState,
            l = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            d = e.titleAttributes;
        z(m.BODY, e.bodyAttributes),
            z(m.HTML, r),
            (function (e, t) {
                void 0 !== e && document.title !== e && (document.title = D(e)), z(m.TITLE, t);
            })(c, d);
        var _ = {
                baseTag: K(m.BASE, n),
                linkTags: K(m.LINK, i),
                metaTags: K(m.META, s),
                noscriptTags: K(m.NOSCRIPT, a),
                scriptTags: K(m.SCRIPT, l),
                styleTags: K(m.STYLE, u),
            },
            f = {},
            p = {};
        Object.keys(_).forEach(function (e) {
            var t = _[e],
                n = t.newTags,
                r = t.oldTags;
            n.length && (f[e] = n), r.length && (p[e] = _[e].oldTags);
        }),
            t && t(),
            o(e, f, p);
    },
    q = null,
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
                    s = {
                        baseTag: b(
                            ["href"],
                            (e = n.helmetInstances.get().map(function (e) {
                                var t = _({}, e.props);
                                return delete t.context, t;
                            })),
                        ),
                        bodyAttributes: C("bodyAttributes", e),
                        defer: y(e, "defer"),
                        encode: y(e, "encodeSpecialCharacters"),
                        htmlAttributes: C("htmlAttributes", e),
                        linkTags: R(m.LINK, ["rel", "href"], e),
                        metaTags: R(m.META, ["name", "charset", "http-equiv", "property", "itemprop"], e),
                        noscriptTags: R(m.NOSCRIPT, ["innerHTML"], e),
                        onChangeClientState: N(e),
                        scriptTags: R(m.SCRIPT, ["src", "innerHTML"], e),
                        styleTags: R(m.STYLE, ["cssText"], e),
                        title: v(e),
                        titleAttributes: C("titleAttributes", e),
                        prioritizeSeoTags: O(e, "prioritizeSeoTags"),
                    };
                W.canUseDOM
                    ? ((t = s),
                      q && cancelAnimationFrame(q),
                      t.defer
                          ? (q = requestAnimationFrame(function () {
                                $(t, function () {
                                    q = null;
                                });
                            }))
                          : ($(t), (q = null)))
                    : F && (i = F(s)),
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
(Z.propTypes = { context: j.isRequired }), (Z.displayName = "HelmetDispatcher");
var X = ["children"],
    Q = ["children"],
    J = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        f(t, e);
        var n = t.prototype;
        return (
            (n.shouldComponentUpdate = function (e) {
                return !o()(w(this.props, "helmetData"), w(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
                if (!t) return null;
                switch (e.type) {
                    case m.SCRIPT:
                    case m.NOSCRIPT:
                        return { innerHTML: t };
                    case m.STYLE:
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
                    s = e.newChildProps,
                    a = e.nestedChildren;
                switch (r.type) {
                    case m.TITLE:
                        return _({}, i, (((t = {})[r.type] = a), (t.titleAttributes = _({}, s)), t));
                    case m.BODY:
                        return _({}, i, { bodyAttributes: _({}, s) });
                    case m.HTML:
                        return _({}, i, { htmlAttributes: _({}, s) });
                    default:
                        return _({}, i, (((n = {})[r.type] = _({}, s)), n));
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
                        I.some(function (t) {
                            return e.type === t;
                        }),
                        "function" == typeof e.type
                            ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                            : "Only elements types " +
                                  I.join(", ") +
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
                                s = r.children,
                                a = h(r, X),
                                o = Object.keys(a).reduce(function (e, t) {
                                    return (e[S[t] || t] = a[t]), e;
                                }, {}),
                                l = e.type;
                            switch (("symbol" == typeof l ? (l = l.toString()) : n.warnOnInvalidChildren(e, s), l)) {
                                case m.FRAGMENT:
                                    t = n.mapChildrenToProps(s, t);
                                    break;
                                case m.LINK:
                                case m.META:
                                case m.NOSCRIPT:
                                case m.SCRIPT:
                                case m.STYLE:
                                    i = n.flattenArrayTypeChildren({
                                        child: e,
                                        arrayTypeChildren: i,
                                        newChildProps: o,
                                        nestedChildren: s,
                                    });
                                    break;
                                default:
                                    t = n.mapObjectTypeChildren({
                                        child: e,
                                        newProps: t,
                                        newChildProps: o,
                                        nestedChildren: s,
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
                    n = h(e, Q),
                    i = _({}, n),
                    s = n.helmetData;
                return (
                    t && (i = this.mapChildrenToProps(t, i)),
                    !s || s instanceof B || (s = new B(s.context, s.instances)),
                    s
                        ? r.createElement(Z, _({}, i, { context: s.value, helmetData: void 0 }))
                        : r.createElement(H.Consumer, null, function (e) {
                              return r.createElement(Z, _({}, i, { context: e }));
                          })
                );
            }),
            t
        );
    })(r.Component);
(J.propTypes = {
    base: s().object,
    bodyAttributes: s().object,
    children: s().oneOfType([s().arrayOf(s().node), s().node]),
    defaultTitle: s().string,
    defer: s().bool,
    encodeSpecialCharacters: s().bool,
    htmlAttributes: s().object,
    link: s().arrayOf(s().object),
    meta: s().arrayOf(s().object),
    noscript: s().arrayOf(s().object),
    onChangeClientState: s().func,
    script: s().arrayOf(s().object),
    style: s().arrayOf(s().object),
    title: s().string,
    titleAttributes: s().object,
    titleTemplate: s().string,
    prioritizeSeoTags: s().bool,
    helmetData: s().object,
}),
    (J.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    (J.displayName = "Helmet");
