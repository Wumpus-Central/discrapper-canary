"use strict";
n.d(t, { mg: () => Q, vd: () => Y });
var r = n(64700),
    i = n(655972),
    s = n.n(i),
    a = n(412700),
    o = n.n(a),
    l = n(284009),
    u = n.n(l),
    d = n(859141),
    c = n.n(d);
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
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), E(e, t);
}
function E(e, t) {
    return (E =
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
var p = {
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
    m = { rel: ["amphtml", "canonical", "alternate"] },
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
    I = Object.keys(p).map(function (e) {
        return p[e];
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
    N = function (e) {
        var t = y(e, p.TITLE),
            n = y(e, "titleTemplate");
        if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
                return t;
            });
        var r = y(e, "defaultTitle");
        return t || r || void 0;
    },
    O = function (e, t) {
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
    v = function (e, t) {
        if (Array.isArray(e) && e.length) {
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
        }
        return !1;
    },
    C = function (e) {
        return Array.isArray(e) ? e.join("") : e;
    },
    b = function (e, t) {
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
    D = function (e, t) {
        var n;
        return _({}, e, (((n = {})[t] = void 0), n));
    },
    L = [p.NOSCRIPT, p.SCRIPT, p.STYLE],
    w = function (e, t) {
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
    M = function (e) {
        return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
        }, "");
    },
    P = function (e, t) {
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
    k = function (e, t, n) {
        switch (e) {
            case p.TITLE:
                return {
                    toComponent: function () {
                        var e, n, i, s;
                        return (
                            (n = t.titleAttributes),
                            ((i = { key: (e = t.title) })["data-rh"] = !0),
                            (s = P(n, i)),
                            [r.createElement(p.TITLE, s, e)]
                        );
                    },
                    toString: function () {
                        var r, i, s, a;
                        return (
                            (r = t.title),
                            (i = t.titleAttributes),
                            (s = M(i)),
                            (a = C(r)),
                            s
                                ? "<" + e + ' data-rh="true" ' + s + ">" + w(a, n) + "</" + e + ">"
                                : "<" + e + ' data-rh="true">' + w(a, n) + "</" + e + ">"
                        );
                    },
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function () {
                        return P(t);
                    },
                    toString: function () {
                        return M(t);
                    },
                };
            default:
                return {
                    toComponent: function () {
                        return U(e, t);
                    },
                    toString: function () {
                        return t.reduce(function (t, r) {
                            var i = Object.keys(r)
                                    .filter(function (e) {
                                        return "innerHTML" !== e && "cssText" !== e;
                                    })
                                    .reduce(function (e, t) {
                                        var i = void 0 === r[t] ? t : t + '="' + w(r[t], n) + '"';
                                        return e ? e + " " + i : i;
                                    }, ""),
                                s = r.innerHTML || r.cssText || "",
                                a = -1 === L.indexOf(e);
                            return t + "<" + e + ' data-rh="true" ' + i + (a ? "/>" : ">" + s + "</" + e + ">");
                        }, "");
                    },
                };
        }
    },
    x = function (e) {
        var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            s = e.noscriptTags,
            a = e.styleTags,
            o = e.title,
            l = e.titleAttributes,
            u = e.linkTags,
            d = e.metaTags,
            c = e.scriptTags,
            _ = {
                toComponent: function () {},
                toString: function () {
                    return "";
                },
            };
        if (e.prioritizeSeoTags) {
            var f,
                E,
                h,
                I,
                T,
                S,
                y =
                    ((f = e.linkTags),
                    (E = e.scriptTags),
                    (h = e.encode),
                    (I = b(e.metaTags, A)),
                    (T = b(f, m)),
                    (S = b(E, g)),
                    {
                        priorityMethods: {
                            toComponent: function () {
                                return [].concat(U(p.META, I.priority), U(p.LINK, T.priority), U(p.SCRIPT, S.priority));
                            },
                            toString: function () {
                                return (
                                    k(p.META, I.priority, h) +
                                    " " +
                                    k(p.LINK, T.priority, h) +
                                    " " +
                                    k(p.SCRIPT, S.priority, h)
                                );
                            },
                        },
                        metaTags: I.default,
                        linkTags: T.default,
                        scriptTags: S.default,
                    });
            (_ = y.priorityMethods), (u = y.linkTags), (d = y.metaTags), (c = y.scriptTags);
        }
        return {
            priority: _,
            base: k(p.BASE, t, r),
            bodyAttributes: k("bodyAttributes", n, r),
            htmlAttributes: k("htmlAttributes", i, r),
            link: k(p.LINK, u, r),
            meta: k(p.META, d, r),
            noscript: k(p.NOSCRIPT, s, r),
            script: k(p.SCRIPT, c, r),
            style: k(p.STYLE, a, r),
            title: k(p.TITLE, { title: void 0 === o ? "" : o, titleAttributes: l }, r),
        };
    },
    G = [],
    V = function (e, t) {
        var n = this;
        void 0 === t && (t = "u" > typeof document),
            (this.instances = []),
            (this.value = {
                setHelmet: function (e) {
                    n.context.helmet = e;
                },
                helmetInstances: {
                    get: function () {
                        return n.canUseDOM ? G : n.instances;
                    },
                    add: function (e) {
                        (n.canUseDOM ? G : n.instances).push(e);
                    },
                    remove: function (e) {
                        var t = (n.canUseDOM ? G : n.instances).indexOf(e);
                        (n.canUseDOM ? G : n.instances).splice(t, 1);
                    },
                },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
                (e.helmet = x({
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
    F = r.createContext({}),
    B = s().shape({
        setHelmet: s().func,
        helmetInstances: s().shape({ get: s().func, add: s().func, remove: s().func }),
    }),
    H = "u" > typeof document,
    Y = (function (e) {
        function t(n) {
            var r;
            return ((r = e.call(this, n) || this).helmetData = new V(r.props.context, t.canUseDOM)), r;
        }
        return (
            f(t, e),
            (t.prototype.render = function () {
                return r.createElement(F.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
        );
    })(r.Component);
(Y.canUseDOM = H),
    (Y.propTypes = { context: s().shape({ helmet: s().shape() }), children: s().node.isRequired }),
    (Y.defaultProps = { context: {} }),
    (Y.displayName = "HelmetProvider");
var W = function (e, t) {
        var n,
            r = document.head || document.querySelector(p.HEAD),
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
    j = function (e, t) {
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
                var d = s.indexOf(l);
                -1 !== d && s.splice(d, 1);
            }
            for (var c = s.length - 1; c >= 0; c -= 1) n.removeAttribute(s[c]);
            i.length === s.length
                ? n.removeAttribute("data-rh")
                : n.getAttribute("data-rh") !== a.join(",") && n.setAttribute("data-rh", a.join(","));
        }
    },
    K = function (e, t) {
        var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            s = e.metaTags,
            a = e.noscriptTags,
            o = e.onChangeClientState,
            l = e.scriptTags,
            u = e.styleTags,
            d = e.title,
            c = e.titleAttributes;
        j(p.BODY, e.bodyAttributes),
            j(p.HTML, r),
            void 0 !== d && document.title !== d && (document.title = C(d)),
            j(p.TITLE, c);
        var _ = {
                baseTag: W(p.BASE, n),
                linkTags: W(p.LINK, i),
                metaTags: W(p.META, s),
                noscriptTags: W(p.NOSCRIPT, a),
                scriptTags: W(p.SCRIPT, l),
                styleTags: W(p.STYLE, u),
            },
            f = {},
            E = {};
        Object.keys(_).forEach(function (e) {
            var t = _[e],
                n = t.newTags,
                r = t.oldTags;
            n.length && (f[e] = n), r.length && (E[e] = _[e].oldTags);
        }),
            t && t(),
            o(e, f, E);
    },
    $ = null,
    z = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t;
        }
        f(t, e);
        var n = t.prototype;
        return (
            (n.shouldComponentUpdate = function (e) {
                return !c()(e, this.props);
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
                        baseTag:
                            ((e = ["href"]),
                            (t = n.helmetInstances.get().map(function (e) {
                                var t = _({}, e.props);
                                return delete t.context, t;
                            }))
                                .filter(function (e) {
                                    return void 0 !== e[p.BASE];
                                })
                                .map(function (e) {
                                    return e[p.BASE];
                                })
                                .reverse()
                                .reduce(function (t, n) {
                                    if (!t.length)
                                        for (var r = Object.keys(n), i = 0; i < r.length; i += 1) {
                                            var s = r[i].toLowerCase();
                                            if (-1 !== e.indexOf(s) && n[s]) return t.concat(n);
                                        }
                                    return t;
                                }, [])),
                        bodyAttributes: O("bodyAttributes", t),
                        defer: y(t, "defer"),
                        encode: y(t, "encodeSpecialCharacters"),
                        htmlAttributes: O("htmlAttributes", t),
                        linkTags: R(p.LINK, ["rel", "href"], t),
                        metaTags: R(p.META, ["name", "charset", "http-equiv", "property", "itemprop"], t),
                        noscriptTags: R(p.NOSCRIPT, ["innerHTML"], t),
                        onChangeClientState: y(t, "onChangeClientState") || function () {},
                        scriptTags: R(p.SCRIPT, ["src", "innerHTML"], t),
                        styleTags: R(p.STYLE, ["cssText"], t),
                        title: N(t),
                        titleAttributes: O("titleAttributes", t),
                        prioritizeSeoTags: v(t, "prioritizeSeoTags"),
                    };
                Y.canUseDOM
                    ? ($ && cancelAnimationFrame($),
                      s.defer
                          ? ($ = requestAnimationFrame(function () {
                                K(s, function () {
                                    $ = null;
                                });
                            }))
                          : (K(s), ($ = null)))
                    : x && (i = x(s)),
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
(z.propTypes = { context: B.isRequired }), (z.displayName = "HelmetDispatcher");
var q = ["children"],
    X = ["children"],
    Q = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        f(t, e);
        var n = t.prototype;
        return (
            (n.shouldComponentUpdate = function (e) {
                return !o()(D(this.props, "helmetData"), D(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
                if (!t) return null;
                switch (e.type) {
                    case p.SCRIPT:
                    case p.NOSCRIPT:
                        return { innerHTML: t };
                    case p.STYLE:
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
                    case p.TITLE:
                        return _({}, i, (((t = {})[r.type] = a), (t.titleAttributes = _({}, s)), t));
                    case p.BODY:
                        return _({}, i, { bodyAttributes: _({}, s) });
                    case p.HTML:
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
                                a = h(r, q),
                                o = Object.keys(a).reduce(function (e, t) {
                                    return (e[S[t] || t] = a[t]), e;
                                }, {}),
                                l = e.type;
                            switch (("symbol" == typeof l ? (l = l.toString()) : n.warnOnInvalidChildren(e, s), l)) {
                                case p.FRAGMENT:
                                    t = n.mapChildrenToProps(s, t);
                                    break;
                                case p.LINK:
                                case p.META:
                                case p.NOSCRIPT:
                                case p.SCRIPT:
                                case p.STYLE:
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
                    n = h(e, X),
                    i = _({}, n),
                    s = n.helmetData;
                return (
                    t && (i = this.mapChildrenToProps(t, i)),
                    !s || s instanceof V || (s = new V(s.context, s.instances)),
                    s
                        ? r.createElement(z, _({}, i, { context: s.value, helmetData: void 0 }))
                        : r.createElement(F.Consumer, null, function (e) {
                              return r.createElement(z, _({}, i, { context: e }));
                          })
                );
            }),
            t
        );
    })(r.Component);
(Q.propTypes = {
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
    (Q.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    (Q.displayName = "Helmet");
