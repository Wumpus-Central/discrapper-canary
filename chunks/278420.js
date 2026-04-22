"use strict";
function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = r(n(901012)),
    s = n(442696),
    a = n(340287),
    o = n(111806),
    l = r(n(165423)),
    u = n(294814),
    d = n(843455),
    c = r(n(269274)),
    _ = /^--/,
    f = {},
    E = {
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
    h = ["Webkit", "Ms", "Moz", "O"];
E = Object.keys(E).reduce(function (e, t) {
    return (
        h.forEach(function (n) {
            return (e[n + t.charAt(0).toUpperCase() + t.substring(1)] = e[t]);
        }),
        e
    );
}, E);
var p = /^(matrix|translate|scale|rotate|skew)/,
    m = /^(translate)/,
    g = /^(rotate|skew)/,
    A = function (e, t) {
        return d.is.num(e) && 0 !== e ? e + t : e;
    },
    I = function e(t, n) {
        return d.is.arr(t)
            ? t.every(function (t) {
                  return e(t, n);
              })
            : d.is.num(t)
              ? t === n
              : parseFloat(t) === n;
    },
    T = (function (e) {
        function t(t) {
            var n = t.x,
                r = t.y,
                s = t.z,
                a = i(t, ["x", "y", "z"]),
                o = [],
                l = [];
            return (
                (n || r || s) &&
                    (o.push([n || 0, r || 0, s || 0]),
                    l.push(function (e) {
                        return [
                            "translate3d(" +
                                e
                                    .map(function (e) {
                                        return A(e, "px");
                                    })
                                    .join(",") +
                                ")",
                            I(e, 0),
                        ];
                    })),
                d.each(a, function (e, t) {
                    if ("transform" === t)
                        o.push([e || ""]),
                            l.push(function (e) {
                                return [e, "" === e];
                            });
                    else if (p.test(t)) {
                        if ((delete a[t], d.is.und(e))) return;
                        var n = m.test(t) ? "px" : g.test(t) ? "deg" : "";
                        o.push(d.toArray(e)),
                            l.push(
                                "rotate3d" === t
                                    ? function (e) {
                                          var t = e[0],
                                              r = e[1],
                                              i = e[2],
                                              s = e[3];
                                          return ["rotate3d(" + t + "," + r + "," + i + "," + A(s, n) + ")", I(s, 0)];
                                      }
                                    : function (e) {
                                          return [
                                              t +
                                                  "(" +
                                                  e
                                                      .map(function (e) {
                                                          return A(e, n);
                                                      })
                                                      .join(",") +
                                                  ")",
                                              I(e, +!!t.startsWith("scale")),
                                          ];
                                      },
                            );
                    }
                }),
                o.length && (a.transform = new S(o, l)),
                e.call(this, a) || this
            );
        }
        return c(t, e), t;
    })(u.AnimatedObject),
    S = (function (e) {
        function t(t, n) {
            var r;
            return (
                ((r = e.call(this) || this).inputs = t),
                (r.transforms = n),
                (r._value = null),
                (r._children = new Set()),
                r
            );
        }
        c(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                return this._value || (this._value = this._get());
            }),
            (n._get = function () {
                var e = this,
                    t = "",
                    n = !0;
                return (
                    d.each(this.inputs, function (r, i) {
                        var s = d.getFluidValue(r[0]),
                            a = e.transforms[i](d.is.arr(s) ? s : r.map(d.getFluidValue)),
                            o = a[0],
                            l = a[1];
                        (t += " " + o), (n = n && l);
                    }),
                    n ? "none" : t
                );
            }),
            (n.addChild = function (e) {
                var t = this;
                this._children.size ||
                    d.each(this.inputs, function (e) {
                        return d.each(e, function (e) {
                            var n = d.getFluidConfig(e);
                            n && n.addChild(t);
                        });
                    }),
                    this._children.add(e);
            }),
            (n.removeChild = function (e) {
                var t = this;
                this._children.delete(e),
                    this._children.size ||
                        d.each(this.inputs, function (e) {
                            return d.each(e, function (e) {
                                var n = d.getFluidConfig(e);
                                n && n.removeChild(t);
                            });
                        });
            }),
            (n.onParentChange = function (e) {
                "change" == e.type && (this._value = null),
                    d.each(this._children, function (t) {
                        t.onParentChange(e);
                    });
            }),
            t
        );
    })(d.FluidValue);
s.Globals.assign({
    colorNames: l,
    createStringInterpolator: o.createStringInterpolator,
    batchedUpdates: a.unstable_batchedUpdates,
});
var y = u.createHost(
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
            var n = "filter" === e.nodeName || (e.parentNode && "filter" === e.parentNode.nodeName),
                r = t.style,
                s = t.children,
                a = t.scrollTop,
                o = t.scrollLeft,
                l = i(t, ["style", "children", "scrollTop", "scrollLeft"]),
                u = Object.values(l),
                c = Object.keys(l).map(function (t) {
                    return n || e.hasAttribute(t)
                        ? t
                        : f[t] ||
                              (f[t] = t.replace(/([A-Z])/g, function (e) {
                                  return "-" + e.toLowerCase();
                              }));
                });
            d.Globals.frameLoop.onWrite(function () {
                for (var t in (void 0 !== s && (e.textContent = s), r))
                    if (r.hasOwnProperty(t)) {
                        var n,
                            i,
                            l =
                                ((n = t),
                                null == (i = r[t]) || "boolean" == typeof i || "" === i
                                    ? ""
                                    : "number" != typeof i || 0 === i || _.test(n) || (E.hasOwnProperty(n) && E[n])
                                      ? ("" + i).trim()
                                      : i + "px");
                        "float" === t ? (t = "cssFloat") : _.test(t) ? e.style.setProperty(t, l) : (e.style[t] = l);
                    }
                c.forEach(function (t, n) {
                    e.setAttribute(t, u[n]);
                }),
                    void 0 !== a && (e.scrollTop = a),
                    void 0 !== o && (e.scrollLeft = o);
            });
        },
        createAnimatedStyle: function (e) {
            return new T(e);
        },
        getComponentProps: function (e) {
            return e.scrollTop, e.scrollLeft, i(e, ["scrollTop", "scrollLeft"]);
        },
    },
).animated;
Object.keys(s).forEach(function (e) {
    "default" !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return s[e];
            },
        });
}),
    (t.a = y),
    (t.animated = y);
