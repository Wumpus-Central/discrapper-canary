"use strict";
n.d(t, { A: () => s });
var r = n(619881),
    i = n(444746);
let s = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
                s = t.attributes[e] || {},
                a = t.elements[e];
            (0, i.sb)(a) &&
                (0, r.A)(a) &&
                (Object.assign(a.style, n),
                Object.keys(s).forEach(function (e) {
                    var t = s[e];
                    !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t);
                }));
        });
    },
    effect: function (e) {
        var t = e.state,
            n = {
                popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
                arrow: { position: "absolute" },
                reference: {},
            };
        return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
                Object.keys(t.elements).forEach(function (e) {
                    var s = t.elements[e],
                        a = t.attributes[e] || {},
                        o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                            return (e[t] = ""), e;
                        }, {});
                    (0, i.sb)(s) &&
                        (0, r.A)(s) &&
                        (Object.assign(s.style, o),
                        Object.keys(a).forEach(function (e) {
                            s.removeAttribute(e);
                        }));
                });
            }
        );
    },
    requires: ["computeStyles"],
};
