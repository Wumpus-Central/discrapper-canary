"use strict";
r.d(t, { A: () => c });
var a = r(25701),
    n = r(64700),
    s = r(223108),
    o = r.n(s),
    i = function (e) {
        var t = e.nodeType,
            r = e.styling,
            s = e.labelRenderer,
            o = e.keyPath,
            i = e.valueRenderer,
            c = e.value,
            l = e.valueGetter;
        return n.createElement(
            "li",
            r("value", t, o),
            n.createElement("label", r(["label", "valueLabel"], t, o), s(o, t, !1, !1)),
            n.createElement(
                "span",
                r("valueText", t, o),
                i.apply(
                    void 0,
                    [
                        (void 0 === l
                            ? function (e) {
                                  return e;
                              }
                            : l)(c),
                        c,
                    ].concat((0, a.A)(o)),
                ),
            ),
        );
    };
i.propTypes = {
    nodeType: o().string.isRequired,
    styling: o().func.isRequired,
    labelRenderer: o().func.isRequired,
    keyPath: o().arrayOf(o().oneOfType([o().string, o().number]).isRequired).isRequired,
    valueRenderer: o().func.isRequired,
    value: o().any,
    valueGetter: o().func,
};
let c = i;
