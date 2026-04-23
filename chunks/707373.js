"use strict";
t.d(r, { D0: () => E, Lw: () => v });
var a,
    l,
    o = Object.prototype.toString;
function s(e) {
    return "function" == typeof e || "[object Function]" === o.call(e);
}
function i(e, r) {
    var t,
        a,
        l = Array,
        o = Object(e);
    if (null == e) throw TypeError("Array.from requires an array-like object - not null or undefined");
    if (void 0 !== r && !s(r)) throw TypeError("Array.from: when provided, the second argument must be a function");
    for (
        var i = Math.min(
                Math.max(
                    isNaN((t = Number(o.length)))
                        ? 0
                        : 0 !== t && isFinite(t)
                          ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
                          : t,
                    0,
                ),
                0x1fffffffffffff,
            ),
            n = s(l) ? Object(new l(i)) : Array(i),
            u = 0;
        u < i;
    )
        (a = o[u]), r ? (n[u] = r(a, u)) : (n[u] = a), (u += 1);
    return (n.length = i), n;
}
function n(e) {
    return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function u(e) {
    var r = (function (e, r) {
        if ("object" != n(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
            var a = t.call(e, r || "default");
            if ("object" != n(a)) return a;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(e);
    })(e, "string");
    return "symbol" == n(r) ? r : r + "";
}
var d =
    ((a = function e() {
        var r,
            t,
            a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
        (t = void 0),
            (r = u((r = "items"))) in this
                ? Object.defineProperty(this, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
                : (this[r] = t),
            (this.items = a);
    }),
    (l = [
        {
            key: "add",
            value: function (e) {
                return !1 === this.has(e) && this.items.push(e), this;
            },
        },
        {
            key: "clear",
            value: function () {
                this.items = [];
            },
        },
        {
            key: "delete",
            value: function (e) {
                var r = this.items.length;
                return (
                    (this.items = this.items.filter(function (r) {
                        return r !== e;
                    })),
                    r !== this.items.length
                );
            },
        },
        {
            key: "forEach",
            value: function (e) {
                var r = this;
                this.items.forEach(function (t) {
                    e(t, t, r);
                });
            },
        },
        {
            key: "has",
            value: function (e) {
                return -1 !== this.items.indexOf(e);
            },
        },
        {
            key: "size",
            get: function () {
                return this.items.length;
            },
        },
    ]),
    (function (e, r) {
        for (var t = 0; t < r.length; t++) {
            var a = r[t];
            (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, u(a.key), a);
        }
    })(a.prototype, l),
    Object.defineProperty(a, "prototype", { writable: !1 }),
    a);
let c = "u" < typeof Set ? Set : d;
function p(e) {
    var r;
    return null != (r = e.localName) ? r : e.tagName.toLowerCase();
}
var m = {
        article: "article",
        aside: "complementary",
        button: "button",
        datalist: "listbox",
        dd: "definition",
        details: "group",
        dialog: "dialog",
        dt: "term",
        fieldset: "group",
        figure: "figure",
        form: "form",
        footer: "contentinfo",
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: "banner",
        hr: "separator",
        html: "document",
        legend: "legend",
        li: "listitem",
        math: "math",
        main: "main",
        menu: "list",
        nav: "navigation",
        ol: "list",
        optgroup: "group",
        option: "option",
        output: "status",
        progress: "progressbar",
        section: "region",
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        textarea: "textbox",
        tfoot: "rowgroup",
        td: "cell",
        th: "columnheader",
        thead: "rowgroup",
        tr: "row",
        ul: "list",
    },
    b = {
        caption: new Set(["aria-label", "aria-labelledby"]),
        code: new Set(["aria-label", "aria-labelledby"]),
        deletion: new Set(["aria-label", "aria-labelledby"]),
        emphasis: new Set(["aria-label", "aria-labelledby"]),
        generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
        insertion: new Set(["aria-label", "aria-labelledby"]),
        none: new Set(["aria-label", "aria-labelledby"]),
        paragraph: new Set(["aria-label", "aria-labelledby"]),
        presentation: new Set(["aria-label", "aria-labelledby"]),
        strong: new Set(["aria-label", "aria-labelledby"]),
        subscript: new Set(["aria-label", "aria-labelledby"]),
        superscript: new Set(["aria-label", "aria-labelledby"]),
    };
function f(e, r) {
    return [
        "aria-atomic",
        "aria-busy",
        "aria-controls",
        "aria-current",
        "aria-description",
        "aria-describedby",
        "aria-details",
        "aria-dropeffect",
        "aria-flowto",
        "aria-grabbed",
        "aria-hidden",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-owns",
        "aria-relevant",
        "aria-roledescription",
    ].some(function (t) {
        var a;
        return e.hasAttribute(t) && !(null != (a = b[r]) && a.has(t));
    });
}
function v(e) {
    var r = (function (e) {
        var r = e.getAttribute("role");
        if (null !== r) {
            var t = r.trim().split(" ")[0];
            if (t.length > 0) return t;
        }
        return null;
    })(e);
    if (null === r || -1 !== h.indexOf(r)) {
        var t = (function (e) {
            var r = m[p(e)];
            if (void 0 !== r) return r;
            switch (p(e)) {
                case "a":
                case "area":
                case "link":
                    if (e.hasAttribute("href")) return "link";
                    break;
                case "img":
                    if ("" === e.getAttribute("alt") && !f(e, "img")) return "presentation";
                    return "img";
                case "input":
                    var t = e.type;
                    switch (t) {
                        case "button":
                        case "image":
                        case "reset":
                        case "submit":
                            return "button";
                        case "checkbox":
                        case "radio":
                            return t;
                        case "range":
                            return "slider";
                        case "email":
                        case "tel":
                        case "text":
                        case "url":
                            if (e.hasAttribute("list")) return "combobox";
                            return "textbox";
                        case "search":
                            if (e.hasAttribute("list")) return "combobox";
                            return "searchbox";
                        case "number":
                            return "spinbutton";
                        default:
                            return null;
                    }
                case "select":
                    if (e.hasAttribute("multiple") || e.size > 1) return "listbox";
                    return "combobox";
            }
            return null;
        })(e);
        if (-1 === h.indexOf(r || "") || f(e, t || "")) return t;
    }
    return r;
}
var h = ["presentation", "none"];
function C(e) {
    return null !== e && e.nodeType === e.ELEMENT_NODE;
}
function q(e) {
    return C(e) && "caption" === p(e);
}
function P(e) {
    return C(e) && "input" === p(e);
}
function x(e, r) {
    if (C(e) && e.hasAttribute(r)) {
        var t = e.getAttribute(r).split(" "),
            a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t
            .map(function (e) {
                return a.getElementById(e);
            })
            .filter(function (e) {
                return null !== e;
            });
    }
    return [];
}
function y(e, r) {
    return !!C(e) && -1 !== r.indexOf(v(e));
}
function R(e, r) {
    if (!C(e)) return !1;
    if ("range" === r) return y(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    throw TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("));
}
function g(e, r) {
    var t = i(e.querySelectorAll(r));
    return (
        x(e, "aria-owns").forEach(function (e) {
            t.push.apply(t, i(e.querySelectorAll(r)));
        }),
        t
    );
}
function w(e) {
    var r = e.getPropertyValue("content");
    return /^["'].*["']$/.test(r) ? r.slice(1, -1) : "";
}
function _(e) {
    var r = p(e);
    return (
        "button" === r ||
        ("input" === r && "hidden" !== e.getAttribute("type")) ||
        "meter" === r ||
        "output" === r ||
        "progress" === r ||
        "select" === r ||
        "textarea" === r
    );
}
function E(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return y(e, [
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "none",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
    ])
        ? ""
        : (function (e) {
              var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  t = new c(),
                  a = "u" < typeof Map ? void 0 : new Map(),
                  l = (function (e) {
                      var r = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
                      if (null === r) throw TypeError("no window available");
                      return r;
                  })(e),
                  o = r.compute,
                  s = void 0 === o ? "name" : o,
                  n = r.computedStyleSupportsPseudoElements,
                  u = void 0 === n ? void 0 !== r.getComputedStyle : n,
                  d = r.getComputedStyle,
                  m = void 0 === d ? l.getComputedStyle.bind(l) : d,
                  b = r.hidden,
                  f = void 0 !== b && b,
                  v = function (e, r) {
                      if (void 0 !== r) throw Error("use uncachedGetComputedStyle directly for pseudo elements");
                      if (void 0 === a) return m(e);
                      var t = a.get(e);
                      if (t) return t;
                      var l = m(e, r);
                      return a.set(e, l), l;
                  };
              function E(e, r) {
                  var t,
                      a = "";
                  if (C(e) && u) {
                      var l = w(m(e, "::before"));
                      a = "".concat(l, " ").concat(a);
                  }
                  if (
                      ((C(e) && "slot" === p(e)
                          ? 0 === (t = e.assignedNodes()).length
                              ? i(e.childNodes)
                              : t
                          : i(e.childNodes).concat(x(e, "aria-owns"))
                      ).forEach(function (e) {
                          var t = N(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
                              l = "inline" !== (C(e) ? v(e).getPropertyValue("display") : "inline") ? " " : "";
                          a += "".concat(l).concat(t).concat(l);
                      }),
                      C(e) && u)
                  ) {
                      var o = w(m(e, "::after"));
                      a = "".concat(a, " ").concat(o);
                  }
                  return a.trim();
              }
              function M(e, r) {
                  var a = e.getAttributeNode(r);
                  return null === a || t.has(a) || "" === a.value.trim() ? null : (t.add(a), a.value);
              }
              function N(e, r) {
                  if (t.has(e)) return "";
                  if (
                      !f &&
                      (function (e, r) {
                          if (!C(e)) return !1;
                          if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
                          var t = r(e);
                          return (
                              "none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility")
                          );
                      })(e, v) &&
                      !r.isReferenced
                  )
                      return t.add(e), "";
                  var a = C(e) ? e.getAttributeNode("aria-labelledby") : null,
                      l = null === a || t.has(a) ? [] : x(e, "aria-labelledby");
                  if ("name" === s && !r.isReferenced && l.length > 0)
                      return (
                          t.add(a),
                          l
                              .map(function (e) {
                                  return N(e, {
                                      isEmbeddedInLabel: r.isEmbeddedInLabel,
                                      isReferenced: !0,
                                      recursion: !1,
                                  });
                              })
                              .join(" ")
                      );
                  var o =
                      r.recursion &&
                      (y(e, ["button", "combobox", "listbox", "textbox"]) || R(e, "range")) &&
                      "name" === s;
                  if (!o) {
                      var n = ((C(e) && e.getAttribute("aria-label")) || "").trim();
                      if ("" !== n && "name" === s) return t.add(e), n;
                      if (!y(e, h)) {
                          var u = (function (e) {
                              if (!C(e)) return null;
                              if (C(e) && "fieldset" === p(e)) {
                                  t.add(e);
                                  for (var r, a = i(e.childNodes), l = 0; l < a.length; l += 1) {
                                      var o = a[l];
                                      if (C(o) && "legend" === p(o))
                                          return N(o, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
                                  }
                              } else if (C(e) && "table" === p(e)) {
                                  t.add(e);
                                  for (var s = i(e.childNodes), n = 0; n < s.length; n += 1) {
                                      var u = s[n];
                                      if (q(u)) return N(u, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
                                  }
                              } else if (C(e) && "svg" === p(e)) {
                                  t.add(e);
                                  for (var d = i(e.childNodes), c = 0; c < d.length; c += 1) {
                                      var m = d[c];
                                      if (
                                          (function (e) {
                                              return C(e) && void 0 !== e.ownerSVGElement && "title" === p(e);
                                          })(m)
                                      )
                                          return m.textContent;
                                  }
                                  return null;
                              } else if ("img" === p(e) || "area" === p(e)) {
                                  var b = M(e, "alt");
                                  if (null !== b) return b;
                              } else if (C(e) && "optgroup" === p(e)) {
                                  var f = M(e, "label");
                                  if (null !== f) return f;
                              }
                              if (P(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
                                  var v = M(e, "value");
                                  if (null !== v) return v;
                                  if ("submit" === e.type) return "Submit";
                                  if ("reset" === e.type) return "Reset";
                              }
                              var h =
                                  null === (r = e.labels)
                                      ? r
                                      : void 0 !== r
                                        ? i(r)
                                        : _(e)
                                          ? i(e.ownerDocument.querySelectorAll("label")).filter(function (r) {
                                                return (
                                                    (function (e) {
                                                        if (void 0 !== e.control) return e.control;
                                                        var r = e.getAttribute("for");
                                                        return null !== r
                                                            ? e.ownerDocument.getElementById(r)
                                                            : (function e(r) {
                                                                  if (_(r)) return r;
                                                                  var t = null;
                                                                  return (
                                                                      r.childNodes.forEach(function (r) {
                                                                          if (null === t && C(r)) {
                                                                              var a = e(r);
                                                                              null !== a && (t = a);
                                                                          }
                                                                      }),
                                                                      t
                                                                  );
                                                              })(e);
                                                    })(r) === e
                                                );
                                            })
                                          : null;
                              if (null !== h && 0 !== h.length)
                                  return (
                                      t.add(e),
                                      i(h)
                                          .map(function (e) {
                                              return N(e, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
                                          })
                                          .filter(function (e) {
                                              return e.length > 0;
                                          })
                                          .join(" ")
                                  );
                              if (P(e) && "image" === e.type) {
                                  var x = M(e, "alt");
                                  if (null !== x) return x;
                                  var R = M(e, "title");
                                  return null !== R ? R : "Submit Query";
                              }
                              if (y(e, ["button"])) {
                                  var g = E(e, { isEmbeddedInLabel: !1, isReferenced: !1 });
                                  if ("" !== g) return g;
                              }
                              return null;
                          })(e);
                          if (null !== u) return t.add(e), u;
                      }
                  }
                  if (y(e, ["menu"])) return t.add(e), "";
                  if (o || r.isEmbeddedInLabel || r.isReferenced) {
                      if (y(e, ["combobox", "listbox"])) {
                          t.add(e);
                          var d =
                              C(e) && "select" === p(e)
                                  ? e.selectedOptions || g(e, "[selected]")
                                  : g(e, '[aria-selected="true"]');
                          return 0 === d.length
                              ? P(e)
                                  ? e.value
                                  : ""
                              : i(d)
                                    .map(function (e) {
                                        return N(e, {
                                            isEmbeddedInLabel: r.isEmbeddedInLabel,
                                            isReferenced: !1,
                                            recursion: !0,
                                        });
                                    })
                                    .join(" ");
                      }
                      if (R(e, "range"))
                          return (t.add(e), e.hasAttribute("aria-valuetext"))
                              ? e.getAttribute("aria-valuetext")
                              : e.hasAttribute("aria-valuenow")
                                ? e.getAttribute("aria-valuenow")
                                : e.getAttribute("value") || "";
                      if (y(e, ["textbox"]))
                          return t.add(e), P(e) || (C(e) && "textarea" === p(e)) ? e.value : e.textContent || "";
                  }
                  if (
                      y(e, [
                          "button",
                          "cell",
                          "checkbox",
                          "columnheader",
                          "gridcell",
                          "heading",
                          "label",
                          "legend",
                          "link",
                          "menuitem",
                          "menuitemcheckbox",
                          "menuitemradio",
                          "option",
                          "radio",
                          "row",
                          "rowheader",
                          "switch",
                          "tab",
                          "tooltip",
                          "treeitem",
                      ]) ||
                      (C(e) && r.isReferenced) ||
                      q(e)
                  ) {
                      var c = E(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1 });
                      if ("" !== c) return t.add(e), c;
                  }
                  if (e.nodeType === e.TEXT_NODE) return t.add(e), e.textContent || "";
                  if (r.recursion) return t.add(e), E(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1 });
                  var m = C(e) ? M(e, "title") : null;
                  return null !== m ? (t.add(e), m) : (t.add(e), "");
              }
              return N(e, { isEmbeddedInLabel: !1, isReferenced: "description" === s, recursion: !1 })
                  .trim()
                  .replace(/\s\s+/g, " ");
          })(e, r);
}
