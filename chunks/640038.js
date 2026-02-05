"use strict";
t.d(r, { a: () => d });
var a = t(566515),
    l = t(659609),
    o = t(101603);
function s(e, r) {
    if (!(0, o.vq)(e)) return !1;
    if ("range" === r) return (0, o.NU)(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    throw TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("));
}
function n(e, r) {
    var t = (0, a.A)(e.querySelectorAll(r));
    return (
        (0, o.QB)(e, "aria-owns").forEach(function (e) {
            t.push.apply(t, (0, a.A)(e.querySelectorAll(r)));
        }),
        t
    );
}
function i(e) {
    var r = e.getPropertyValue("content");
    return /^["'].*["']$/.test(r) ? r.slice(1, -1) : "";
}
function u(e) {
    var r = (0, o.Jk)(e);
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
        t = new l.A(),
        d = "u" < typeof Map ? void 0 : new Map(),
        c = (0, o.Ke)(e),
        p = r.compute,
        m = void 0 === p ? "name" : p,
        b = r.computedStyleSupportsPseudoElements,
        f = void 0 === b ? void 0 !== r.getComputedStyle : b,
        v = r.getComputedStyle,
        h = void 0 === v ? c.getComputedStyle.bind(c) : v,
        C = r.hidden,
        q = void 0 !== C && C,
        P = function (e, r) {
            if (void 0 !== r) throw Error("use uncachedGetComputedStyle directly for pseudo elements");
            if (void 0 === d) return h(e);
            var t = d.get(e);
            if (t) return t;
            var a = h(e, r);
            return d.set(e, a), a;
        };
    function x(e, r) {
        var t,
            l = "";
        if ((0, o.vq)(e) && f) {
            var s = i(h(e, "::before"));
            l = "".concat(s, " ").concat(l);
        }
        if (
            (((0, o.IV)(e)
                ? 0 === (t = e.assignedNodes()).length
                    ? (0, a.A)(e.childNodes)
                    : t
                : (0, a.A)(e.childNodes).concat((0, o.QB)(e, "aria-owns"))
            ).forEach(function (e) {
                var t = R(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
                    a = "inline" !== ((0, o.vq)(e) ? P(e).getPropertyValue("display") : "inline") ? " " : "";
                l += "".concat(a).concat(t).concat(a);
            }),
            (0, o.vq)(e) && f)
        ) {
            var n = i(h(e, "::after"));
            l = "".concat(l, " ").concat(n);
        }
        return l.trim();
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
                if (!(0, o.vq)(e)) return !1;
                if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
                var t = r(e);
                return "none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility");
            })(e, P) &&
            !r.isReferenced
        )
            return t.add(e), "";
        var l = (0, o.vq)(e) ? e.getAttributeNode("aria-labelledby") : null,
            i = null === l || t.has(l) ? [] : (0, o.QB)(e, "aria-labelledby");
        if ("name" === m && !r.isReferenced && i.length > 0)
            return (
                t.add(l),
                i
                    .map(function (e) {
                        return R(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !0, recursion: !1 });
                    })
                    .join(" ")
            );
        var d =
            r.recursion &&
            ((0, o.NU)(e, ["button", "combobox", "listbox", "textbox"]) || s(e, "range")) &&
            "name" === m;
        if (!d) {
            var c = (((0, o.vq)(e) && e.getAttribute("aria-label")) || "").trim();
            if ("" !== c && "name" === m) return t.add(e), c;
            if (!(0, o.NU)(e, o.UC)) {
                var p = (function (e) {
                    if (!(0, o.vq)(e)) return null;
                    if ((0, o.Er)(e)) {
                        t.add(e);
                        for (var r = (0, a.A)(e.childNodes), l = 0; l < r.length; l += 1) {
                            var s = r[l];
                            if ((0, o.Jb)(s)) return R(s, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
                        }
                    } else if ((0, o.SS)(e)) {
                        t.add(e);
                        for (var n = (0, a.A)(e.childNodes), i = 0; i < n.length; i += 1) {
                            var d = n[i];
                            if ((0, o.UA)(d)) return R(d, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
                        }
                    } else if ((0, o.h1)(e)) {
                        t.add(e);
                        for (var c = (0, a.A)(e.childNodes), p = 0; p < c.length; p += 1) {
                            var m = c[p];
                            if ((0, o.nW)(m)) return m.textContent;
                        }
                        return null;
                    } else if ("img" === (0, o.Jk)(e) || "area" === (0, o.Jk)(e)) {
                        var b = y(e, "alt");
                        if (null !== b) return b;
                    } else if ((0, o.SY)(e)) {
                        var f = y(e, "label");
                        if (null !== f) return f;
                    }
                    if ((0, o.A3)(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
                        var v = y(e, "value");
                        if (null !== v) return v;
                        if ("submit" === e.type) return "Submit";
                        if ("reset" === e.type) return "Reset";
                    }
                    var h = (function (e) {
                        var r = e.labels;
                        if (null === r) return r;
                        if (void 0 !== r) return (0, a.A)(r);
                        if (!u(e)) return null;
                        var t = e.ownerDocument;
                        return (0, a.A)(t.querySelectorAll("label")).filter(function (r) {
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
                                                      if (null === t && (0, o.vq)(r)) {
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
                            (0, a.A)(h)
                                .map(function (e) {
                                    return R(e, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
                                })
                                .filter(function (e) {
                                    return e.length > 0;
                                })
                                .join(" ")
                        );
                    if ((0, o.A3)(e) && "image" === e.type) {
                        var C = y(e, "alt");
                        if (null !== C) return C;
                        var q = y(e, "title");
                        return null !== q ? q : "Submit Query";
                    }
                    if ((0, o.NU)(e, ["button"])) {
                        var P = x(e, { isEmbeddedInLabel: !1, isReferenced: !1 });
                        if ("" !== P) return P;
                    }
                    return null;
                })(e);
                if (null !== p) return t.add(e), p;
            }
        }
        if ((0, o.NU)(e, ["menu"])) return t.add(e), "";
        if (d || r.isEmbeddedInLabel || r.isReferenced) {
            if ((0, o.NU)(e, ["combobox", "listbox"])) {
                t.add(e);
                var b = (0, o.q4)(e) ? e.selectedOptions || n(e, "[selected]") : n(e, '[aria-selected="true"]');
                return 0 === b.length
                    ? (0, o.A3)(e)
                        ? e.value
                        : ""
                    : (0, a.A)(b)
                          .map(function (e) {
                              return R(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1, recursion: !0 });
                          })
                          .join(" ");
            }
            if (s(e, "range"))
                return (t.add(e), e.hasAttribute("aria-valuetext"))
                    ? e.getAttribute("aria-valuetext")
                    : e.hasAttribute("aria-valuenow")
                      ? e.getAttribute("aria-valuenow")
                      : e.getAttribute("value") || "";
            if ((0, o.NU)(e, ["textbox"]))
                return t.add(e), (0, o.A3)(e) || (0, o.QY)(e) ? e.value : e.textContent || "";
        }
        if (
            (0, o.NU)(e, [
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
            ((0, o.vq)(e) && r.isReferenced) ||
            (0, o.UA)(e)
        ) {
            var f = x(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1 });
            if ("" !== f) return t.add(e), f;
        }
        if (e.nodeType === e.TEXT_NODE) return t.add(e), e.textContent || "";
        if (r.recursion) return t.add(e), x(e, { isEmbeddedInLabel: r.isEmbeddedInLabel, isReferenced: !1 });
        var v = (0, o.vq)(e) ? y(e, "title") : null;
        return null !== v ? (t.add(e), v) : (t.add(e), "");
    }
    return R(e, { isEmbeddedInLabel: !1, isReferenced: "description" === m, recursion: !1 })
        .trim()
        .replace(/\s\s+/g, " ");
}
