function n(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(r(901012)),
    o = r(666764),
    a = r(333007),
    s = r(54482),
    l = n(r(271104)),
    u = r(472090),
    c = r(675106),
    f = n(r(269274)),
    d = /^--/,
    p = {},
    h = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    m = ["Webkit", "Ms", "Moz", "O"];
h = Object.keys(h).reduce(function (e, t) {
    return (
        m.forEach(function (r) {
            return (e[r + t.charAt(0).toUpperCase() + t.substring(1)] = e[t]);
        }),
        e
    );
}, h);
var v = /^(matrix|translate|scale|rotate|skew)/,
    y = /^(translate)/,
    g = /^(rotate|skew)/,
    b = function (e, t) {
        return c.is.num(e) && 0 !== e ? e + t : e;
    },
    w = function e(t, r) {
        return c.is.arr(t)
            ? t.every(function (t) {
                  return e(t, r);
              })
            : c.is.num(t)
              ? t === r
              : parseFloat(t) === r;
    },
    _ = (function (e) {
        function t(t) {
            var r = t.x,
                n = t.y,
                o = t.z,
                a = i(t, ["x", "y", "z"]),
                s = [],
                l = [];
            return (
                (r || n || o) &&
                    (s.push([r || 0, n || 0, o || 0]),
                    l.push(function (e) {
                        return [
                            "translate3d(" +
                                e
                                    .map(function (e) {
                                        return b(e, "px");
                                    })
                                    .join(",") +
                                ")",
                            w(e, 0),
                        ];
                    })),
                c.each(a, function (e, t) {
                    if ("transform" === t)
                        s.push([e || ""]),
                            l.push(function (e) {
                                return [e, "" === e];
                            });
                    else if (v.test(t)) {
                        if ((delete a[t], c.is.und(e))) return;
                        var r = y.test(t) ? "px" : g.test(t) ? "deg" : "";
                        s.push(c.toArray(e)),
                            l.push(
                                "rotate3d" === t
                                    ? function (e) {
                                          var t = e[0],
                                              n = e[1],
                                              i = e[2],
                                              o = e[3];
                                          return ["rotate3d(" + t + "," + n + "," + i + "," + b(o, r) + ")", w(o, 0)];
                                      }
                                    : function (e) {
                                          return [
                                              t +
                                                  "(" +
                                                  e
                                                      .map(function (e) {
                                                          return b(e, r);
                                                      })
                                                      .join(",") +
                                                  ")",
                                              w(e, +!!t.startsWith("scale")),
                                          ];
                                      },
                            );
                    }
                }),
                s.length && (a.transform = new S(s, l)),
                e.call(this, a) || this
            );
        }
        return f(t, e), t;
    })(u.AnimatedObject),
    S = (function (e) {
        function t(t, r) {
            var n;
            return (
                ((n = e.call(this) || this).inputs = t),
                (n.transforms = r),
                (n._value = null),
                (n._children = new Set()),
                n
            );
        }
        f(t, e);
        var r = t.prototype;
        return (
            (r.get = function () {
                return this._value || (this._value = this._get());
            }),
            (r._get = function () {
                var e = this,
                    t = "",
                    r = !0;
                return (
                    c.each(this.inputs, function (n, i) {
                        var o = c.getFluidValue(n[0]),
                            a = e.transforms[i](c.is.arr(o) ? o : n.map(c.getFluidValue)),
                            s = a[0],
                            l = a[1];
                        (t += " " + s), (r = r && l);
                    }),
                    r ? "none" : t
                );
            }),
            (r.addChild = function (e) {
                var t = this;
                this._children.size ||
                    c.each(this.inputs, function (e) {
                        return c.each(e, function (e) {
                            var r = c.getFluidConfig(e);
                            r && r.addChild(t);
                        });
                    }),
                    this._children.add(e);
            }),
            (r.removeChild = function (e) {
                var t = this;
                this._children.delete(e),
                    this._children.size ||
                        c.each(this.inputs, function (e) {
                            return c.each(e, function (e) {
                                var r = c.getFluidConfig(e);
                                r && r.removeChild(t);
                            });
                        });
            }),
            (r.onParentChange = function (e) {
                "change" == e.type && (this._value = null),
                    c.each(this._children, function (t) {
                        t.onParentChange(e);
                    });
            }),
            t
        );
    })(c.FluidValue);
o.Globals.assign({
    colorNames: l,
    createStringInterpolator: s.createStringInterpolator,
    batchedUpdates: a.unstable_batchedUpdates,
});
var x = u.createHost(
    [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
    ],
    {
        applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            var r = "filter" === e.nodeName || (e.parentNode && "filter" === e.parentNode.nodeName),
                n = t.style,
                o = t.children,
                a = t.scrollTop,
                s = t.scrollLeft,
                l = i(t, ["style", "children", "scrollTop", "scrollLeft"]),
                u = Object.values(l),
                f = Object.keys(l).map(function (t) {
                    return r || e.hasAttribute(t)
                        ? t
                        : p[t] ||
                              (p[t] = t.replace(/([A-Z])/g, function (e) {
                                  return "-" + e.toLowerCase();
                              }));
                });
            c.Globals.frameLoop.onWrite(function () {
                for (var t in (void 0 !== o && (e.textContent = o), n))
                    if (n.hasOwnProperty(t)) {
                        var r,
                            i,
                            l =
                                ((r = t),
                                null == (i = n[t]) || "boolean" == typeof i || "" === i
                                    ? ""
                                    : "number" != typeof i || 0 === i || d.test(r) || (h.hasOwnProperty(r) && h[r])
                                      ? ("" + i).trim()
                                      : i + "px");
                        "float" === t ? (t = "cssFloat") : d.test(t) ? e.style.setProperty(t, l) : (e.style[t] = l);
                    }
                f.forEach(function (t, r) {
                    e.setAttribute(t, u[r]);
                }),
                    void 0 !== a && (e.scrollTop = a),
                    void 0 !== s && (e.scrollLeft = s);
            });
        },
        createAnimatedStyle: function (e) {
            return new _(e);
        },
        getComponentProps: function (e) {
            return e.scrollTop, e.scrollLeft, i(e, ["scrollTop", "scrollLeft"]);
        },
    },
).animated;
Object.keys(o).forEach(function (e) {
    "default" !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return o[e];
            },
        });
}),
    (t.a = x),
    (t.animated = x);
