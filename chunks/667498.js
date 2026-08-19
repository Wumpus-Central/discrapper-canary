"use strict";
n.d(t, { mg: () => Q, vd: () => H });
var r = n(582128),
    i = n(655972),
    a = n.n(i),
    o = n(412700),
    s = n.n(o),
    u = n(284009),
    c = n.n(u),
    l = n(859141),
    d = n.n(l);
function f() {
    return (f =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function h(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), p(e, t);
}
function p(e, t) {
    return (p =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function m(e, t) {
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
    _ = { rel: ["amphtml", "canonical", "alternate"] },
    y = { type: ["application/ld+json"] },
    v = {
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
    b = Object.keys(g).map(function (e) {
        return g[e];
    }),
    w = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex",
    },
    T = Object.keys(w).reduce(function (e, t) {
        return (e[w[t]] = t), e;
    }, {}),
    E = function (e, t) {
        for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
        }
        return null;
    },
    x = function (e) {
        var t = E(e, g.TITLE),
            n = E(e, "titleTemplate");
        if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
                return t;
            });
        var r = E(e, "defaultTitle");
        return t || r || void 0;
    },
    V = function (e, t) {
        return t
            .filter(function (t) {
                return void 0 !== t[e];
            })
            .map(function (t) {
                return t[e];
            })
            .reduce(function (e, t) {
                return f({}, e, t);
            }, {});
    },
    k = function (e, t, n) {
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
                    for (var n, a = Object.keys(e), o = 0; o < a.length; o += 1) {
                        var s = a[o],
                            u = s.toLowerCase();
                        -1 === t.indexOf(u) ||
                            ("rel" === n && "canonical" === e[n].toLowerCase()) ||
                            ("rel" === u && "stylesheet" === e[u].toLowerCase()) ||
                            (n = u),
                            -1 === t.indexOf(s) ||
                                ("innerHTML" !== s && "cssText" !== s && "itemprop" !== s) ||
                                (n = s);
                    }
                    if (!n || !e[n]) return !1;
                    var c = e[n].toLowerCase();
                    return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][c] && ((i[n][c] = !0), !0);
                })
                    .reverse()
                    .forEach(function (t) {
                        return e.push(t);
                    });
                for (var a = Object.keys(i), o = 0; o < a.length; o += 1) {
                    var s = a[o],
                        u = f({}, r[s], i[s]);
                    r[s] = u;
                }
                return e;
            }, [])
            .reverse();
    },
    A = function (e, t) {
        if (Array.isArray(e) && e.length) {
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
        }
        return !1;
    },
    S = function (e) {
        return Array.isArray(e) ? e.join("") : e;
    },
    O = function (e, t) {
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
    R = function (e, t) {
        var n;
        return f({}, e, (((n = {})[t] = void 0), n));
    },
    P = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
    C = function (e, t) {
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
    L = function (e) {
        return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
        }, "");
    },
    I = function (e, t) {
        return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
                return (t[w[n] || n] = e[n]), t;
            }, t)
        );
    },
    D = function (e, t) {
        return t.map(function (t, n) {
            var i,
                a = (((i = { key: n })["data-rh"] = !0), i);
            return (
                Object.keys(t).forEach(function (e) {
                    var n = w[e] || e;
                    "innerHTML" === n || "cssText" === n
                        ? (a.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
                        : (a[n] = t[e]);
                }),
                r.createElement(e, a)
            );
        });
    },
    M = function (e, t, n) {
        switch (e) {
            case g.TITLE:
                return {
                    toComponent: function () {
                        var e, n, i, a;
                        return (
                            (n = t.titleAttributes),
                            ((i = { key: (e = t.title) })["data-rh"] = !0),
                            (a = I(n, i)),
                            [r.createElement(g.TITLE, a, e)]
                        );
                    },
                    toString: function () {
                        var r, i, a, o;
                        return (
                            (r = t.title),
                            (i = t.titleAttributes),
                            (a = L(i)),
                            (o = S(r)),
                            a
                                ? "<" + e + ' data-rh="true" ' + a + ">" + C(o, n) + "</" + e + ">"
                                : "<" + e + ' data-rh="true">' + C(o, n) + "</" + e + ">"
                        );
                    },
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function () {
                        return I(t);
                    },
                    toString: function () {
                        return L(t);
                    },
                };
            default:
                return {
                    toComponent: function () {
                        return D(e, t);
                    },
                    toString: function () {
                        return t.reduce(function (t, r) {
                            var i = Object.keys(r)
                                    .filter(function (e) {
                                        return "innerHTML" !== e && "cssText" !== e;
                                    })
                                    .reduce(function (e, t) {
                                        var i = void 0 === r[t] ? t : t + '="' + C(r[t], n) + '"';
                                        return e ? e + " " + i : i;
                                    }, ""),
                                a = r.innerHTML || r.cssText || "",
                                o = -1 === P.indexOf(e);
                            return t + "<" + e + ' data-rh="true" ' + i + (o ? "/>" : ">" + a + "</" + e + ">");
                        }, "");
                    },
                };
        }
    },
    U = function (e) {
        var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            a = e.noscriptTags,
            o = e.styleTags,
            s = e.title,
            u = e.titleAttributes,
            c = e.linkTags,
            l = e.metaTags,
            d = e.scriptTags,
            f = {
                toComponent: function () {},
                toString: function () {
                    return "";
                },
            };
        if (e.prioritizeSeoTags) {
            var h,
                p,
                m,
                b,
                w,
                T,
                E =
                    ((h = e.linkTags),
                    (p = e.scriptTags),
                    (m = e.encode),
                    (b = O(e.metaTags, v)),
                    (w = O(h, _)),
                    (T = O(p, y)),
                    {
                        priorityMethods: {
                            toComponent: function () {
                                return [].concat(D(g.META, b.priority), D(g.LINK, w.priority), D(g.SCRIPT, T.priority));
                            },
                            toString: function () {
                                return (
                                    M(g.META, b.priority, m) +
                                    " " +
                                    M(g.LINK, w.priority, m) +
                                    " " +
                                    M(g.SCRIPT, T.priority, m)
                                );
                            },
                        },
                        metaTags: b.default,
                        linkTags: w.default,
                        scriptTags: T.default,
                    });
            (f = E.priorityMethods), (c = E.linkTags), (l = E.metaTags), (d = E.scriptTags);
        }
        return {
            priority: f,
            base: M(g.BASE, t, r),
            bodyAttributes: M("bodyAttributes", n, r),
            htmlAttributes: M("htmlAttributes", i, r),
            link: M(g.LINK, c, r),
            meta: M(g.META, l, r),
            noscript: M(g.NOSCRIPT, a, r),
            script: M(g.SCRIPT, d, r),
            style: M(g.STYLE, o, r),
            title: M(g.TITLE, { title: void 0 === s ? "" : s, titleAttributes: u }, r),
        };
    },
    j = [],
    F = function (e, t) {
        var n = this;
        void 0 === t && (t = "u" > typeof document),
            (this.instances = []),
            (this.value = {
                setHelmet: function (e) {
                    n.context.helmet = e;
                },
                helmetInstances: {
                    get: function () {
                        return n.canUseDOM ? j : n.instances;
                    },
                    add: function (e) {
                        (n.canUseDOM ? j : n.instances).push(e);
                    },
                    remove: function (e) {
                        var t = (n.canUseDOM ? j : n.instances).indexOf(e);
                        (n.canUseDOM ? j : n.instances).splice(t, 1);
                    },
                },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
                (e.helmet = U({
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
    N = r.createContext({}),
    B = a().shape({
        setHelmet: a().func,
        helmetInstances: a().shape({ get: a().func, add: a().func, remove: a().func }),
    }),
    G = "u" > typeof document,
    H = (function (e) {
        function t(n) {
            var r;
            return ((r = e.call(this, n) || this).helmetData = new F(r.props.context, t.canUseDOM)), r;
        }
        return (
            h(t, e),
            (t.prototype.render = function () {
                return r.createElement(N.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
        );
    })(r.Component);
(H.canUseDOM = G),
    (H.propTypes = { context: a().shape({ helmet: a().shape() }), children: a().node.isRequired }),
    (H.defaultProps = { context: {} }),
    (H.displayName = "HelmetProvider");
var W = function (e, t) {
        var n,
            r = document.head || document.querySelector(g.HEAD),
            i = r.querySelectorAll(e + "[data-rh]"),
            a = [].slice.call(i),
            o = [];
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
                            : o.push(r);
                }),
            a.forEach(function (e) {
                return e.parentNode.removeChild(e);
            }),
            o.forEach(function (e) {
                return r.appendChild(e);
            }),
            { oldTags: a, newTags: o }
        );
    },
    z = function (e, t) {
        var n = document.getElementsByTagName(e)[0];
        if (n) {
            for (
                var r = n.getAttribute("data-rh"),
                    i = r ? r.split(",") : [],
                    a = [].concat(i),
                    o = Object.keys(t),
                    s = 0;
                s < o.length;
                s += 1
            ) {
                var u = o[s],
                    c = t[u] || "";
                n.getAttribute(u) !== c && n.setAttribute(u, c), -1 === i.indexOf(u) && i.push(u);
                var l = a.indexOf(u);
                -1 !== l && a.splice(l, 1);
            }
            for (var d = a.length - 1; d >= 0; d -= 1) n.removeAttribute(a[d]);
            i.length === a.length
                ? n.removeAttribute("data-rh")
                : n.getAttribute("data-rh") !== o.join(",") && n.setAttribute("data-rh", o.join(","));
        }
    },
    q = function (e, t) {
        var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            o = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            l = e.title,
            d = e.titleAttributes;
        z(g.BODY, e.bodyAttributes),
            z(g.HTML, r),
            void 0 !== l && document.title !== l && (document.title = S(l)),
            z(g.TITLE, d);
        var f = {
                baseTag: W(g.BASE, n),
                linkTags: W(g.LINK, i),
                metaTags: W(g.META, a),
                noscriptTags: W(g.NOSCRIPT, o),
                scriptTags: W(g.SCRIPT, u),
                styleTags: W(g.STYLE, c),
            },
            h = {},
            p = {};
        Object.keys(f).forEach(function (e) {
            var t = f[e],
                n = t.newTags,
                r = t.oldTags;
            n.length && (h[e] = n), r.length && (p[e] = f[e].oldTags);
        }),
            t && t(),
            s(e, h, p);
    },
    K = null,
    X = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t;
        }
        h(t, e);
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
                        baseTag:
                            ((e = ["href"]),
                            (t = n.helmetInstances.get().map(function (e) {
                                var t = f({}, e.props);
                                return delete t.context, t;
                            }))
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
                                }, [])),
                        bodyAttributes: V("bodyAttributes", t),
                        defer: E(t, "defer"),
                        encode: E(t, "encodeSpecialCharacters"),
                        htmlAttributes: V("htmlAttributes", t),
                        linkTags: k(g.LINK, ["rel", "href"], t),
                        metaTags: k(g.META, ["name", "charset", "http-equiv", "property", "itemprop"], t),
                        noscriptTags: k(g.NOSCRIPT, ["innerHTML"], t),
                        onChangeClientState: E(t, "onChangeClientState") || function () {},
                        scriptTags: k(g.SCRIPT, ["src", "innerHTML"], t),
                        styleTags: k(g.STYLE, ["cssText"], t),
                        title: x(t),
                        titleAttributes: V("titleAttributes", t),
                        prioritizeSeoTags: A(t, "prioritizeSeoTags"),
                    };
                H.canUseDOM
                    ? (K && cancelAnimationFrame(K),
                      a.defer
                          ? (K = requestAnimationFrame(function () {
                                q(a, function () {
                                    K = null;
                                });
                            }))
                          : (q(a), (K = null)))
                    : U && (i = U(a)),
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
(X.propTypes = { context: B.isRequired }), (X.displayName = "HelmetDispatcher");
var Y = ["children"],
    Z = ["children"],
    Q = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        h(t, e);
        var n = t.prototype;
        return (
            (n.shouldComponentUpdate = function (e) {
                return !s()(R(this.props, "helmetData"), R(e, "helmetData"));
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
                return f(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                        f({}, e.newChildProps, this.mapNestedChildrenToProps(n, e.nestedChildren)),
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
                    o = e.nestedChildren;
                switch (r.type) {
                    case g.TITLE:
                        return f({}, i, (((t = {})[r.type] = o), (t.titleAttributes = f({}, a)), t));
                    case g.BODY:
                        return f({}, i, { bodyAttributes: f({}, a) });
                    case g.HTML:
                        return f({}, i, { htmlAttributes: f({}, a) });
                    default:
                        return f({}, i, (((n = {})[r.type] = f({}, a)), n));
                }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
                var n = f({}, t);
                return (
                    Object.keys(e).forEach(function (t) {
                        var r;
                        n = f({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
                return (
                    c()(
                        b.some(function (t) {
                            return e.type === t;
                        }),
                        "function" == typeof e.type
                            ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                            : "Only elements types " +
                                  b.join(", ") +
                                  " are allowed. Helmet does not support rendering <" +
                                  e.type +
                                  "> elements. Refer to our API for more information.",
                    ),
                    c()(
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
                                o = m(r, Y),
                                s = Object.keys(o).reduce(function (e, t) {
                                    return (e[T[t] || t] = o[t]), e;
                                }, {}),
                                u = e.type;
                            switch (("symbol" == typeof u ? (u = u.toString()) : n.warnOnInvalidChildren(e, a), u)) {
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
                                        newChildProps: s,
                                        nestedChildren: a,
                                    });
                                    break;
                                default:
                                    t = n.mapObjectTypeChildren({
                                        child: e,
                                        newProps: t,
                                        newChildProps: s,
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
                    n = m(e, Z),
                    i = f({}, n),
                    a = n.helmetData;
                return (
                    t && (i = this.mapChildrenToProps(t, i)),
                    !a || a instanceof F || (a = new F(a.context, a.instances)),
                    a
                        ? r.createElement(X, f({}, i, { context: a.value, helmetData: void 0 }))
                        : r.createElement(N.Consumer, null, function (e) {
                              return r.createElement(X, f({}, i, { context: e }));
                          })
                );
            }),
            t
        );
    })(r.Component);
(Q.propTypes = {
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
    (Q.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    (Q.displayName = "Helmet");
