"use strict";
r.d(t, { mg: () => J, vd: () => q });
var n = r(582128),
    i = r(655972),
    o = r.n(i),
    a = r(412700),
    s = r.n(a),
    u = r(284009),
    c = r.n(u),
    l = r(859141),
    d = r.n(l);
function f() {
    return (f =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function p(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), h(e, t);
}
function h(e, t) {
    return (h =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function g(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = {},
        o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (i[r] = e[r]);
    return i;
}
var v = {
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
    y = { rel: ["amphtml", "canonical", "alternate"] },
    m = { type: ["application/ld+json"] },
    b = {
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
    E = Object.keys(v).map(function (e) {
        return v[e];
    }),
    O = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex",
    },
    T = Object.keys(O).reduce(function (e, t) {
        return (e[O[t]] = t), e;
    }, {}),
    S = function (e, t) {
        for (var r = e.length - 1; r >= 0; r -= 1) {
            var n = e[r];
            if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
        }
        return null;
    },
    w = function (e) {
        var t = S(e, v.TITLE),
            r = S(e, "titleTemplate");
        if ((Array.isArray(t) && (t = t.join("")), r && t))
            return r.replace(/%s/g, function () {
                return t;
            });
        var n = S(e, "defaultTitle");
        return t || n || void 0;
    },
    x = function (e, t) {
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
    C = function (e, t, r) {
        var n = {};
        return r
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
            .reduce(function (e, r) {
                var i = {};
                r.filter(function (e) {
                    for (var r, o = Object.keys(e), a = 0; a < o.length; a += 1) {
                        var s = o[a],
                            u = s.toLowerCase();
                        -1 === t.indexOf(u) ||
                            ("rel" === r && "canonical" === e[r].toLowerCase()) ||
                            ("rel" === u && "stylesheet" === e[u].toLowerCase()) ||
                            (r = u),
                            -1 === t.indexOf(s) ||
                                ("innerHTML" !== s && "cssText" !== s && "itemprop" !== s) ||
                                (r = s);
                    }
                    if (!r || !e[r]) return !1;
                    var c = e[r].toLowerCase();
                    return n[r] || (n[r] = {}), i[r] || (i[r] = {}), !n[r][c] && ((i[r][c] = !0), !0);
                })
                    .reverse()
                    .forEach(function (t) {
                        return e.push(t);
                    });
                for (var o = Object.keys(i), a = 0; a < o.length; a += 1) {
                    var s = o[a],
                        u = f({}, n[s], i[s]);
                    n[s] = u;
                }
                return e;
            }, [])
            .reverse();
    },
    D = function (e, t) {
        if (Array.isArray(e) && e.length) {
            for (var r = 0; r < e.length; r += 1) if (e[r][t]) return !0;
        }
        return !1;
    },
    k = function (e) {
        return Array.isArray(e) ? e.join("") : e;
    },
    A = function (e, t) {
        return Array.isArray(e)
            ? e.reduce(
                  function (e, r) {
                      return (
                          !(function (e, t) {
                              for (var r = Object.keys(e), n = 0; n < r.length; n += 1)
                                  if (t[r[n]] && t[r[n]].includes(e[r[n]])) return !0;
                              return !1;
                          })(r, t)
                              ? e.default.push(r)
                              : e.priority.push(r),
                          e
                      );
                  },
                  { priority: [], default: [] },
              )
            : { default: e };
    },
    I = function (e, t) {
        var r;
        return f({}, e, (((r = {})[t] = void 0), r));
    },
    P = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
    j = function (e, t) {
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
    N = function (e) {
        return Object.keys(e).reduce(function (t, r) {
            var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
            return t ? t + " " + n : n;
        }, "");
    },
    R = function (e, t) {
        return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, r) {
                return (t[O[r] || r] = e[r]), t;
            }, t)
        );
    },
    L = function (e, t) {
        return t.map(function (t, r) {
            var i,
                o = (((i = { key: r })["data-rh"] = !0), i);
            return (
                Object.keys(t).forEach(function (e) {
                    var r = O[e] || e;
                    "innerHTML" === r || "cssText" === r
                        ? (o.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
                        : (o[r] = t[e]);
                }),
                n.createElement(e, o)
            );
        });
    },
    _ = function (e, t, r) {
        switch (e) {
            case v.TITLE:
                return {
                    toComponent: function () {
                        var e, r, i, o;
                        return (
                            (r = t.titleAttributes),
                            ((i = { key: (e = t.title) })["data-rh"] = !0),
                            (o = R(r, i)),
                            [n.createElement(v.TITLE, o, e)]
                        );
                    },
                    toString: function () {
                        var n, i, o, a;
                        return (
                            (n = t.title),
                            (i = t.titleAttributes),
                            (o = N(i)),
                            (a = k(n)),
                            o
                                ? "<" + e + ' data-rh="true" ' + o + ">" + j(a, r) + "</" + e + ">"
                                : "<" + e + ' data-rh="true">' + j(a, r) + "</" + e + ">"
                        );
                    },
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function () {
                        return R(t);
                    },
                    toString: function () {
                        return N(t);
                    },
                };
            default:
                return {
                    toComponent: function () {
                        return L(e, t);
                    },
                    toString: function () {
                        return t.reduce(function (t, n) {
                            var i = Object.keys(n)
                                    .filter(function (e) {
                                        return "innerHTML" !== e && "cssText" !== e;
                                    })
                                    .reduce(function (e, t) {
                                        var i = void 0 === n[t] ? t : t + '="' + j(n[t], r) + '"';
                                        return e ? e + " " + i : i;
                                    }, ""),
                                o = n.innerHTML || n.cssText || "",
                                a = -1 === P.indexOf(e);
                            return t + "<" + e + ' data-rh="true" ' + i + (a ? "/>" : ">" + o + "</" + e + ">");
                        }, "");
                    },
                };
        }
    },
    M = function (e) {
        var t = e.baseTag,
            r = e.bodyAttributes,
            n = e.encode,
            i = e.htmlAttributes,
            o = e.noscriptTags,
            a = e.styleTags,
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
            var p,
                h,
                g,
                E,
                O,
                T,
                S =
                    ((p = e.linkTags),
                    (h = e.scriptTags),
                    (g = e.encode),
                    (E = A(e.metaTags, b)),
                    (O = A(p, y)),
                    (T = A(h, m)),
                    {
                        priorityMethods: {
                            toComponent: function () {
                                return [].concat(L(v.META, E.priority), L(v.LINK, O.priority), L(v.SCRIPT, T.priority));
                            },
                            toString: function () {
                                return (
                                    _(v.META, E.priority, g) +
                                    " " +
                                    _(v.LINK, O.priority, g) +
                                    " " +
                                    _(v.SCRIPT, T.priority, g)
                                );
                            },
                        },
                        metaTags: E.default,
                        linkTags: O.default,
                        scriptTags: T.default,
                    });
            (f = S.priorityMethods), (c = S.linkTags), (l = S.metaTags), (d = S.scriptTags);
        }
        return {
            priority: f,
            base: _(v.BASE, t, n),
            bodyAttributes: _("bodyAttributes", r, n),
            htmlAttributes: _("htmlAttributes", i, n),
            link: _(v.LINK, c, n),
            meta: _(v.META, l, n),
            noscript: _(v.NOSCRIPT, o, n),
            script: _(v.SCRIPT, d, n),
            style: _(v.STYLE, a, n),
            title: _(v.TITLE, { title: void 0 === s ? "" : s, titleAttributes: u }, n),
        };
    },
    U = [],
    V = function (e, t) {
        var r = this;
        void 0 === t && (t = "u" > typeof document),
            (this.instances = []),
            (this.value = {
                setHelmet: function (e) {
                    r.context.helmet = e;
                },
                helmetInstances: {
                    get: function () {
                        return r.canUseDOM ? U : r.instances;
                    },
                    add: function (e) {
                        (r.canUseDOM ? U : r.instances).push(e);
                    },
                    remove: function (e) {
                        var t = (r.canUseDOM ? U : r.instances).indexOf(e);
                        (r.canUseDOM ? U : r.instances).splice(t, 1);
                    },
                },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
                (e.helmet = M({
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
    F = n.createContext({}),
    H = o().shape({
        setHelmet: o().func,
        helmetInstances: o().shape({ get: o().func, add: o().func, remove: o().func }),
    }),
    B = "u" > typeof document,
    q = (function (e) {
        function t(r) {
            var n;
            return ((n = e.call(this, r) || this).helmetData = new V(n.props.context, t.canUseDOM)), n;
        }
        return (
            p(t, e),
            (t.prototype.render = function () {
                return n.createElement(F.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
        );
    })(n.Component);
(q.canUseDOM = B),
    (q.propTypes = { context: o().shape({ helmet: o().shape() }), children: o().node.isRequired }),
    (q.defaultProps = { context: {} }),
    (q.displayName = "HelmetProvider");
var W = function (e, t) {
        var r,
            n = document.head || document.querySelector(v.HEAD),
            i = n.querySelectorAll(e + "[data-rh]"),
            o = [].slice.call(i),
            a = [];
        return (
            t &&
                t.length &&
                t.forEach(function (t) {
                    var n = document.createElement(e);
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) &&
                            ("innerHTML" === i
                                ? (n.innerHTML = t.innerHTML)
                                : "cssText" === i
                                  ? n.styleSheet
                                      ? (n.styleSheet.cssText = t.cssText)
                                      : n.appendChild(document.createTextNode(t.cssText))
                                  : n.setAttribute(i, void 0 === t[i] ? "" : t[i]));
                    n.setAttribute("data-rh", "true"),
                        o.some(function (e, t) {
                            return (r = t), n.isEqualNode(e);
                        })
                            ? o.splice(r, 1)
                            : a.push(n);
                }),
            o.forEach(function (e) {
                return e.parentNode.removeChild(e);
            }),
            a.forEach(function (e) {
                return n.appendChild(e);
            }),
            { oldTags: o, newTags: a }
        );
    },
    $ = function (e, t) {
        var r = document.getElementsByTagName(e)[0];
        if (r) {
            for (
                var n = r.getAttribute("data-rh"),
                    i = n ? n.split(",") : [],
                    o = [].concat(i),
                    a = Object.keys(t),
                    s = 0;
                s < a.length;
                s += 1
            ) {
                var u = a[s],
                    c = t[u] || "";
                r.getAttribute(u) !== c && r.setAttribute(u, c), -1 === i.indexOf(u) && i.push(u);
                var l = o.indexOf(u);
                -1 !== l && o.splice(l, 1);
            }
            for (var d = o.length - 1; d >= 0; d -= 1) r.removeAttribute(o[d]);
            i.length === o.length
                ? r.removeAttribute("data-rh")
                : r.getAttribute("data-rh") !== a.join(",") && r.setAttribute("data-rh", a.join(","));
        }
    },
    Y = function (e, t) {
        var r = e.baseTag,
            n = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            a = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            l = e.title,
            d = e.titleAttributes;
        $(v.BODY, e.bodyAttributes),
            $(v.HTML, n),
            void 0 !== l && document.title !== l && (document.title = k(l)),
            $(v.TITLE, d);
        var f = {
                baseTag: W(v.BASE, r),
                linkTags: W(v.LINK, i),
                metaTags: W(v.META, o),
                noscriptTags: W(v.NOSCRIPT, a),
                scriptTags: W(v.SCRIPT, u),
                styleTags: W(v.STYLE, c),
            },
            p = {},
            h = {};
        Object.keys(f).forEach(function (e) {
            var t = f[e],
                r = t.newTags,
                n = t.oldTags;
            r.length && (p[e] = r), n.length && (h[e] = f[e].oldTags);
        }),
            t && t(),
            s(e, p, h);
    },
    z = null,
    G = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(n)) || this).rendered = !1), t;
        }
        p(t, e);
        var r = t.prototype;
        return (
            (r.shouldComponentUpdate = function (e) {
                return !d()(e, this.props);
            }),
            (r.componentDidUpdate = function () {
                this.emitChange();
            }),
            (r.componentWillUnmount = function () {
                this.props.context.helmetInstances.remove(this), this.emitChange();
            }),
            (r.emitChange = function () {
                var e,
                    t,
                    r = this.props.context,
                    n = r.setHelmet,
                    i = null,
                    o = {
                        baseTag:
                            ((e = ["href"]),
                            (t = r.helmetInstances.get().map(function (e) {
                                var t = f({}, e.props);
                                return delete t.context, t;
                            }))
                                .filter(function (e) {
                                    return void 0 !== e[v.BASE];
                                })
                                .map(function (e) {
                                    return e[v.BASE];
                                })
                                .reverse()
                                .reduce(function (t, r) {
                                    if (!t.length)
                                        for (var n = Object.keys(r), i = 0; i < n.length; i += 1) {
                                            var o = n[i].toLowerCase();
                                            if (-1 !== e.indexOf(o) && r[o]) return t.concat(r);
                                        }
                                    return t;
                                }, [])),
                        bodyAttributes: x("bodyAttributes", t),
                        defer: S(t, "defer"),
                        encode: S(t, "encodeSpecialCharacters"),
                        htmlAttributes: x("htmlAttributes", t),
                        linkTags: C(v.LINK, ["rel", "href"], t),
                        metaTags: C(v.META, ["name", "charset", "http-equiv", "property", "itemprop"], t),
                        noscriptTags: C(v.NOSCRIPT, ["innerHTML"], t),
                        onChangeClientState: S(t, "onChangeClientState") || function () {},
                        scriptTags: C(v.SCRIPT, ["src", "innerHTML"], t),
                        styleTags: C(v.STYLE, ["cssText"], t),
                        title: w(t),
                        titleAttributes: x("titleAttributes", t),
                        prioritizeSeoTags: D(t, "prioritizeSeoTags"),
                    };
                q.canUseDOM
                    ? (z && cancelAnimationFrame(z),
                      o.defer
                          ? (z = requestAnimationFrame(function () {
                                Y(o, function () {
                                    z = null;
                                });
                            }))
                          : (Y(o), (z = null)))
                    : M && (i = M(o)),
                    n(i);
            }),
            (r.init = function () {
                this.rendered ||
                    ((this.rendered = !0), this.props.context.helmetInstances.add(this), this.emitChange());
            }),
            (r.render = function () {
                return this.init(), null;
            }),
            t
        );
    })(n.Component);
(G.propTypes = { context: H.isRequired }), (G.displayName = "HelmetDispatcher");
var X = ["children"],
    K = ["children"],
    J = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        p(t, e);
        var r = t.prototype;
        return (
            (r.shouldComponentUpdate = function (e) {
                return !s()(I(this.props, "helmetData"), I(e, "helmetData"));
            }),
            (r.mapNestedChildrenToProps = function (e, t) {
                if (!t) return null;
                switch (e.type) {
                    case v.SCRIPT:
                    case v.NOSCRIPT:
                        return { innerHTML: t };
                    case v.STYLE:
                        return { cssText: t };
                    default:
                        throw Error(
                            "<" +
                                e.type +
                                " /> elements are self-closing and can not contain children. Refer to our API for more information.",
                        );
                }
            }),
            (r.flattenArrayTypeChildren = function (e) {
                var t,
                    r = e.child,
                    n = e.arrayTypeChildren;
                return f(
                    {},
                    n,
                    (((t = {})[r.type] = [].concat(n[r.type] || [], [
                        f({}, e.newChildProps, this.mapNestedChildrenToProps(r, e.nestedChildren)),
                    ])),
                    t),
                );
            }),
            (r.mapObjectTypeChildren = function (e) {
                var t,
                    r,
                    n = e.child,
                    i = e.newProps,
                    o = e.newChildProps,
                    a = e.nestedChildren;
                switch (n.type) {
                    case v.TITLE:
                        return f({}, i, (((t = {})[n.type] = a), (t.titleAttributes = f({}, o)), t));
                    case v.BODY:
                        return f({}, i, { bodyAttributes: f({}, o) });
                    case v.HTML:
                        return f({}, i, { htmlAttributes: f({}, o) });
                    default:
                        return f({}, i, (((r = {})[n.type] = f({}, o)), r));
                }
            }),
            (r.mapArrayTypeChildrenToProps = function (e, t) {
                var r = f({}, t);
                return (
                    Object.keys(e).forEach(function (t) {
                        var n;
                        r = f({}, r, (((n = {})[t] = e[t]), n));
                    }),
                    r
                );
            }),
            (r.warnOnInvalidChildren = function (e, t) {
                return (
                    c()(
                        E.some(function (t) {
                            return e.type === t;
                        }),
                        "function" == typeof e.type
                            ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                            : "Only elements types " +
                                  E.join(", ") +
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
            (r.mapChildrenToProps = function (e, t) {
                var r = this,
                    i = {};
                return (
                    n.Children.forEach(e, function (e) {
                        if (e && e.props) {
                            var n = e.props,
                                o = n.children,
                                a = g(n, X),
                                s = Object.keys(a).reduce(function (e, t) {
                                    return (e[T[t] || t] = a[t]), e;
                                }, {}),
                                u = e.type;
                            switch (("symbol" == typeof u ? (u = u.toString()) : r.warnOnInvalidChildren(e, o), u)) {
                                case v.FRAGMENT:
                                    t = r.mapChildrenToProps(o, t);
                                    break;
                                case v.LINK:
                                case v.META:
                                case v.NOSCRIPT:
                                case v.SCRIPT:
                                case v.STYLE:
                                    i = r.flattenArrayTypeChildren({
                                        child: e,
                                        arrayTypeChildren: i,
                                        newChildProps: s,
                                        nestedChildren: o,
                                    });
                                    break;
                                default:
                                    t = r.mapObjectTypeChildren({
                                        child: e,
                                        newProps: t,
                                        newChildProps: s,
                                        nestedChildren: o,
                                    });
                            }
                        }
                    }),
                    this.mapArrayTypeChildrenToProps(i, t)
                );
            }),
            (r.render = function () {
                var e = this.props,
                    t = e.children,
                    r = g(e, K),
                    i = f({}, r),
                    o = r.helmetData;
                return (
                    t && (i = this.mapChildrenToProps(t, i)),
                    !o || o instanceof V || (o = new V(o.context, o.instances)),
                    o
                        ? n.createElement(G, f({}, i, { context: o.value, helmetData: void 0 }))
                        : n.createElement(F.Consumer, null, function (e) {
                              return n.createElement(G, f({}, i, { context: e }));
                          })
                );
            }),
            t
        );
    })(n.Component);
(J.propTypes = {
    base: o().object,
    bodyAttributes: o().object,
    children: o().oneOfType([o().arrayOf(o().node), o().node]),
    defaultTitle: o().string,
    defer: o().bool,
    encodeSpecialCharacters: o().bool,
    htmlAttributes: o().object,
    link: o().arrayOf(o().object),
    meta: o().arrayOf(o().object),
    noscript: o().arrayOf(o().object),
    onChangeClientState: o().func,
    script: o().arrayOf(o().object),
    style: o().arrayOf(o().object),
    title: o().string,
    titleAttributes: o().object,
    titleTemplate: o().string,
    prioritizeSeoTags: o().bool,
    helmetData: o().object,
}),
    (J.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    (J.displayName = "Helmet");
