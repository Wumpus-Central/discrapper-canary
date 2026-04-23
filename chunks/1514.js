"use strict";
r.d(t, { A: () => l });
var a = r(25701),
    n = r(64700),
    o = r(223108),
    s = r.n(o),
    i = function (e) {
        var t = e.nodeType,
            r = e.styling,
            o = e.labelRenderer,
            s = e.keyPath,
            i = e.valueRenderer,
            l = e.value,
            c = e.valueGetter;
        return n.createElement(
            "li",
            r("value", t, s),
            n.createElement("label", r(["label", "valueLabel"], t, s), o(s, t, !1, !1)),
            n.createElement(
                "span",
                r("valueText", t, s),
                i.apply(
                    void 0,
                    [
                        (void 0 === c
                            ? function (e) {
                                  return e;
                              }
                            : c)(l),
                        l,
                    ].concat((0, a.A)(s)),
                ),
            ),
        );
    };
i.propTypes = {
    nodeType: s().string.isRequired,
    styling: s().func.isRequired,
    labelRenderer: s().func.isRequired,
    keyPath: s().arrayOf(s().oneOfType([s().string, s().number]).isRequired).isRequired,
    valueRenderer: s().func.isRequired,
    value: s().any,
    valueGetter: s().func,
};
let l = i;
