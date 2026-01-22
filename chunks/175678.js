n.d(t, { A: () => i }), n(896048), n(747238);
var r = n(944181),
    a = n(597807),
    l = n(763424),
    o = n(292177);
let i = {
    id: "aria-attribute-valid-value",
    selector: o.vN,
    tags: [],
    metadata: {
        description: "ARIA attributes must use valid values",
        help: "",
    },
    check: function (e) {
        let t = (function (e) {
            for (let k of o.ye)
                if (e.hasAttribute(k)) {
                    let o = e.getAttribute(k),
                        I = r.aria.get(k);
                    switch (I.type) {
                        case "string":
                            return l.o;
                        case "id":
                            return (
                                (i = k),
                                (u = o),
                                null == document.getElementById(u)
                                    ? "".concat(i, " references #").concat(u, " which does not exist")
                                    : l.o
                            );
                        case "idlist":
                            var t = k,
                                n = o,
                                a = e;
                            if (
                                ("aria-controls" === t &&
                                    ("false" === a.getAttribute("aria-expanded") ||
                                        "false" === a.getAttribute("aria-selected"))) ||
                                ("aria-owns" === t && "false" === a.getAttribute("aria-expanded"))
                            )
                                return l.o;
                            for (let e of n.split(" "))
                                if (null == document.getElementById(e))
                                    return "".concat(t, " references #").concat(n, " which does not exist");
                            return l.o;
                        case "integer":
                            return (
                                (c = k),
                                String(parseInt((s = o), 10)) !== s
                                    ? "".concat(c, " requires an integer but got ").concat(s)
                                    : l.o
                            );
                        case "number":
                            return (
                                (d = k),
                                isFinite((f = o)) ? l.o : "".concat(d, " requires a numeric value but got ").concat(f)
                            );
                        case "boolean":
                            return (
                                (h = k),
                                (b = o),
                                (m = I),
                                "true" === b || "false" === b || ("" === b && !0 === m.allowundefined)
                                    ? l.o
                                    : "".concat(h, ' must be either "true" or "false"')
                            );
                        case "token":
                            return (function (e, t, n) {
                                var r, a;
                                let o = (function (e) {
                                    switch (e) {
                                        case "true":
                                            return !0;
                                        case "false":
                                            return !1;
                                        default:
                                            return e;
                                    }
                                })(t);
                                return (null == (r = n.values) ? void 0 : r.includes(o))
                                    ? l.o
                                    : ""
                                          .concat(e, " was ")
                                          .concat(t, " but must be: ")
                                          .concat(null == (a = n.values) ? void 0 : a.join(", "));
                            })(k, o, I);
                        case "tokenlist":
                            var i,
                                u,
                                c,
                                s,
                                d,
                                f,
                                h,
                                b,
                                m,
                                g,
                                p,
                                v = k,
                                A = o,
                                w = I;
                            for (let e of A.split(" ")) {
                                if (null == (g = w.values) || !g.includes(e))
                                    return ""
                                        .concat(v, " included ")
                                        .concat(A, " but is restricted to: ")
                                        .concat(null == (p = w.values) ? void 0 : p.join(", "));
                            }
                            return l.o;
                        case "tristate":
                            var y = k,
                                x = o;
                            switch (x) {
                                case "true":
                                case "false":
                                case "mixed":
                                    return l.o;
                                default:
                                    return "".concat(y, ' must be "true", "false", or "mixed" not ').concat(x);
                            }
                    }
                }
            return l.o;
        })(e);
        return t !== l.o && ((0, o.i6)(e) || !(0, a.z)(e)) ? l.o : t;
    },
};
