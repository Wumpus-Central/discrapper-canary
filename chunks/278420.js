"use strict";
function n(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var s = n(r(901012)),
    a = r(442696),
    o = r(340287),
    i = r(54482),
    u = n(r(271104)),
    c = r(294814),
    l = r(675106),
    d = n(r(269274)),
    f = /^--/,
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
    g = /^(translate)/,
    y = /^(rotate|skew)/,
    b = function (e, t) {
        return l.is.num(e) && 0 !== e ? e + t : e;
    },
    _ = function e(t, r) {
        return l.is.arr(t)
            ? t.every(function (t) {
                  return e(t, r);
              })
            : l.is.num(t)
              ? t === r
              : parseFloat(t) === r;
    },
    x = (function (e) {
        function t(t) {
            var r = t.x,
                n = t.y,
                a = t.z,
                o = s(t, ["x", "y", "z"]),
                i = [],
                u = [];
            return (
                (r || n || a) &&
                    (i.push([r || 0, n || 0, a || 0]),
                    u.push(function (e) {
                        return [
                            "translate3d(" +
                                e
                                    .map(function (e) {
                                        return b(e, "px");
                                    })
                                    .join(",") +
                                ")",
                            _(e, 0),
                        ];
                    })),
                l.each(o, function (e, t) {
                    if ("transform" === t)
                        i.push([e || ""]),
                            u.push(function (e) {
                                return [e, "" === e];
                            });
                    else if (v.test(t)) {
                        if ((delete o[t], l.is.und(e))) return;
                        var r = g.test(t) ? "px" : y.test(t) ? "deg" : "";
                        i.push(l.toArray(e)),
                            u.push(
                                "rotate3d" === t
                                    ? function (e) {
                                          var t = e[0],
                                              n = e[1],
                                              s = e[2],
                                              a = e[3];
                                          return ["rotate3d(" + t + "," + n + "," + s + "," + b(a, r) + ")", _(a, 0)];
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
                                              _(e, +!!t.startsWith("scale")),
                                          ];
                                      },
                            );
                    }
                }),
                i.length && (o.transform = new w(i, u)),
                e.call(this, o) || this
            );
        }
        return d(t, e), t;
    })(c.AnimatedObject),
    w = (function (e) {
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
        d(t, e);
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
                    l.each(this.inputs, function (n, s) {
                        var a = l.getFluidValue(n[0]),
                            o = e.transforms[s](l.is.arr(a) ? a : n.map(l.getFluidValue)),
                            i = o[0],
                            u = o[1];
                        (t += " " + i), (r = r && u);
                    }),
                    r ? "none" : t
                );
            }),
            (r.addChild = function (e) {
                var t = this;
                this._children.size ||
                    l.each(this.inputs, function (e) {
                        return l.each(e, function (e) {
                            var r = l.getFluidConfig(e);
                            r && r.addChild(t);
                        });
                    }),
                    this._children.add(e);
            }),
            (r.removeChild = function (e) {
                var t = this;
                this._children.delete(e),
                    this._children.size ||
                        l.each(this.inputs, function (e) {
                            return l.each(e, function (e) {
                                var r = l.getFluidConfig(e);
                                r && r.removeChild(t);
                            });
                        });
            }),
            (r.onParentChange = function (e) {
                "change" == e.type && (this._value = null),
                    l.each(this._children, function (t) {
                        t.onParentChange(e);
                    });
            }),
            t
        );
    })(l.FluidValue);
a.Globals.assign({
    colorNames: u,
    createStringInterpolator: i.createStringInterpolator,
    batchedUpdates: o.unstable_batchedUpdates,
});
var k = c.createHost(
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
                a = t.children,
                o = t.scrollTop,
                i = t.scrollLeft,
                u = s(t, ["style", "children", "scrollTop", "scrollLeft"]),
                c = Object.values(u),
                d = Object.keys(u).map(function (t) {
                    return r || e.hasAttribute(t)
                        ? t
                        : p[t] ||
                              (p[t] = t.replace(/([A-Z])/g, function (e) {
                                  return "-" + e.toLowerCase();
                              }));
                });
            l.Globals.frameLoop.onWrite(function () {
                for (var t in (void 0 !== a && (e.textContent = a), n))
                    if (n.hasOwnProperty(t)) {
                        var r,
                            s,
                            u =
                                ((r = t),
                                null == (s = n[t]) || "boolean" == typeof s || "" === s
                                    ? ""
                                    : "number" != typeof s || 0 === s || f.test(r) || (h.hasOwnProperty(r) && h[r])
                                      ? ("" + s).trim()
                                      : s + "px");
                        "float" === t ? (t = "cssFloat") : f.test(t) ? e.style.setProperty(t, u) : (e.style[t] = u);
                    }
                d.forEach(function (t, r) {
                    e.setAttribute(t, c[r]);
                }),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== i && (e.scrollLeft = i);
            });
        },
        createAnimatedStyle: function (e) {
            return new x(e);
        },
        getComponentProps: function (e) {
            return e.scrollTop, e.scrollLeft, s(e, ["scrollTop", "scrollLeft"]);
        },
    },
).animated;
Object.keys(a).forEach(function (e) {
    "default" !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return a[e];
            },
        });
}),
    (t.a = k),
    (t.animated = k);
