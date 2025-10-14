t.d(r, { o: () => d });
var a = t(798413),
    o = t(365106),
    n = t(145268);
function l(e, r) {
    if (!(0, n.kK)(e)) return !1;
    if ("range" === r) return (0, n.xO)(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    throw TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("));
}
function i(e, r) {
    var t = (0, a.Z)(e.querySelectorAll(r));
    return (
        (0, n.SS)(e, "aria-owns").forEach(function (e) {
            t.push.apply(t, (0, a.Z)(e.querySelectorAll(r)));
        }),
        t
    );
}
function s(e) {
    var r = e.getPropertyValue("content");
    return /^["'].*["']$/.test(r) ? r.slice(1, -1) : "";
}
function u(e) {
    var r = (0, n.$Q)(e);
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
function d(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = new o.Z(),
        d = "undefined" == typeof Map ? void 0 : new Map(),
        c = (0, n.pG)(e),
        p = r.compute,
        m = void 0 === p ? "name" : p,
        f = r.computedStyleSupportsPseudoElements,
        b = void 0 === f ? void 0 !== r.getComputedStyle : f,
        v = r.getComputedStyle,
        h = void 0 === v ? c.getComputedStyle.bind(c) : v,
        C = r.hidden,
        q = void 0 !== C && C,
        x = function (e, r) {
            if (void 0 !== r) throw Error("use uncachedGetComputedStyle directly for pseudo elements");
            if (void 0 === d) return h(e);
            var t = d.get(e);
            if (t) return t;
            var a = h(e, r);
            return d.set(e, a), a;
        };
    function P(e, r) {
        var t,
            o = "";
        if ((0, n.kK)(e) && b) {
            var l = s(h(e, "::before"));
            o = "".concat(l, " ").concat(o);
        }
        if (
            (((0, n.rO)(e)
                ? 0 === (t = e.assignedNodes()).length
                    ? (0, a.Z)(e.childNodes)
                    : t
                : (0, a.Z)(e.childNodes).concat((0, n.SS)(e, "aria-owns"))
            ).forEach(function (e) {
                var t = R(e, {
                        isEmbeddedInLabel: r.isEmbeddedInLabel,
                        isReferenced: !1,
                        recursion: !0,
                    }),
                    a = "inline" !== ((0, n.kK)(e) ? x(e).getPropertyValue("display") : "inline") ? " " : "";
                o += "".concat(a).concat(t).concat(a);
            }),
            (0, n.kK)(e) && b)
        ) {
            var i = s(h(e, "::after"));
            o = "".concat(o, " ").concat(i);
        }
        return o.trim();
    }
    function y(e, r) {
        var a = e.getAttributeNode(r);
        return null === a || t.has(a) || "" === a.value.trim() ? null : (t.add(a), a.value);
    }
    function R(e, r) {
        if (t.has(e)) return "";
        if (
            !q &&
            (function (e, r) {
                if (!(0, n.kK)(e)) return !1;
                if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
                var t = r(e);
                return "none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility");
            })(e, x) &&
            !r.isReferenced
        )
            return t.add(e), "";
        var o = (0, n.kK)(e) ? e.getAttributeNode("aria-labelledby") : null,
            s = null === o || t.has(o) ? [] : (0, n.SS)(e, "aria-labelledby");
        if ("name" === m && !r.isReferenced && s.length > 0)
            return (
                t.add(o),
                s
                    .map(function (e) {
                        return R(e, {
                            isEmbeddedInLabel: r.isEmbeddedInLabel,
                            isReferenced: !0,
                            recursion: !1,
                        });
                    })
                    .join(" ")
            );
        var d =
            r.recursion &&
            ((0, n.xO)(e, ["button", "combobox", "listbox", "textbox"]) || l(e, "range")) &&
            "name" === m;
        if (!d) {
            var c = (((0, n.kK)(e) && e.getAttribute("aria-label")) || "").trim();
            if ("" !== c && "name" === m) return t.add(e), c;
            if (!(0, n.xO)(e, n.y7)) {
                var p = (function (e) {
                    if (!(0, n.kK)(e)) return null;
                    if ((0, n.zO)(e)) {
                        t.add(e);
                        for (var r = (0, a.Z)(e.childNodes), o = 0; o < r.length; o += 1) {
                            var l = r[o];
                            if ((0, n.CD)(l))
                                return R(l, {
                                    isEmbeddedInLabel: !1,
                                    isReferenced: !1,
                                    recursion: !1,
                                });
                        }
                    } else if ((0, n.bS)(e)) {
                        t.add(e);
                        for (var i = (0, a.Z)(e.childNodes), s = 0; s < i.length; s += 1) {
                            var d = i[s];
                            if ((0, n.GD)(d))
                                return R(d, {
                                    isEmbeddedInLabel: !1,
                                    isReferenced: !1,
                                    recursion: !1,
                                });
                        }
                    } else if ((0, n.r4)(e)) {
                        t.add(e);
                        for (var c = (0, a.Z)(e.childNodes), p = 0; p < c.length; p += 1) {
                            var m = c[p];
                            if ((0, n.$2)(m)) return m.textContent;
                        }
                        return null;
                    } else if ("img" === (0, n.$Q)(e) || "area" === (0, n.$Q)(e)) {
                        var f = y(e, "alt");
                        if (null !== f) return f;
                    } else if ((0, n.yR)(e)) {
                        var b = y(e, "label");
                        if (null !== b) return b;
                    }
                    if ((0, n.LL)(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
                        var v = y(e, "value");
                        if (null !== v) return v;
                        if ("submit" === e.type) return "Submit";
                        if ("reset" === e.type) return "Reset";
                    }
                    var h = (function (e) {
                        var r = e.labels;
                        if (null === r) return r;
                        if (void 0 !== r) return (0, a.Z)(r);
                        if (!u(e)) return null;
                        var t = e.ownerDocument;
                        return (0, a.Z)(t.querySelectorAll("label")).filter(function (r) {
                            return (
                                (function (e) {
                                    if (void 0 !== e.control) return e.control;
                                    var r = e.getAttribute("for");
                                    return null !== r
                                        ? e.ownerDocument.getElementById(r)
                                        : (function e(r) {
                                              if (u(r)) return r;
                                              var t = null;
                                              return (
                                                  r.childNodes.forEach(function (r) {
                                                      if (null === t && (0, n.kK)(r)) {
                                                          var a = e(r);
                                                          null !== a && (t = a);
                                                      }
                                                  }),
                                                  t
                                              );
                                          })(e);
                                })(r) === e
                            );
                        });
                    })(e);
                    if (null !== h && 0 !== h.length)
                        return (
                            t.add(e),
                            (0, a.Z)(h)
                                .map(function (e) {
                                    return R(e, {
                                        isEmbeddedInLabel: !0,
                                        isReferenced: !1,
                                        recursion: !0,
                                    });
                                })
                                .filter(function (e) {
                                    return e.length > 0;
                                })
                                .join(" ")
                        );
                    if ((0, n.LL)(e) && "image" === e.type) {
                        var C = y(e, "alt");
                        if (null !== C) return C;
                        var q = y(e, "title");
                        return null !== q ? q : "Submit Query";
                    }
                    if ((0, n.xO)(e, ["button"])) {
                        var x = P(e, {
                            isEmbeddedInLabel: !1,
                            isReferenced: !1,
                        });
                        if ("" !== x) return x;
                    }
                    return null;
                })(e);
                if (null !== p) return t.add(e), p;
            }
        }
        if ((0, n.xO)(e, ["menu"])) return t.add(e), "";
        if (d || r.isEmbeddedInLabel || r.isReferenced) {
            if ((0, n.xO)(e, ["combobox", "listbox"])) {
                t.add(e);
                var f = (0, n.RV)(e) ? e.selectedOptions || i(e, "[selected]") : i(e, '[aria-selected="true"]');
                return 0 === f.length
                    ? (0, n.LL)(e)
                        ? e.value
                        : ""
                    : (0, a.Z)(f)
                          .map(function (e) {
                              return R(e, {
                                  isEmbeddedInLabel: r.isEmbeddedInLabel,
                                  isReferenced: !1,
                                  recursion: !0,
                              });
                          })
                          .join(" ");
            }
            if (l(e, "range"))
                return (t.add(e), e.hasAttribute("aria-valuetext"))
                    ? e.getAttribute("aria-valuetext")
                    : e.hasAttribute("aria-valuenow")
                      ? e.getAttribute("aria-valuenow")
                      : e.getAttribute("value") || "";
            if ((0, n.xO)(e, ["textbox"]))
                return t.add(e), (0, n.LL)(e) || (0, n.ZH)(e) ? e.value : e.textContent || "";
        }
        if (
            (0, n.xO)(e, [
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
            ((0, n.kK)(e) && r.isReferenced) ||
            (0, n.GD)(e)
        ) {
            var b = P(e, {
                isEmbeddedInLabel: r.isEmbeddedInLabel,
                isReferenced: !1,
            });
            if ("" !== b) return t.add(e), b;
        }
        if (e.nodeType === e.TEXT_NODE) return t.add(e), e.textContent || "";
        if (r.recursion)
            return (
                t.add(e),
                P(e, {
                    isEmbeddedInLabel: r.isEmbeddedInLabel,
                    isReferenced: !1,
                })
            );
        var v = (0, n.kK)(e) ? y(e, "title") : null;
        return null !== v ? (t.add(e), v) : (t.add(e), "");
    }
    return R(e, {
        isEmbeddedInLabel: !1,
        isReferenced: "description" === m,
        recursion: !1,
    })
        .trim()
        .replace(/\s\s+/g, " ");
}
