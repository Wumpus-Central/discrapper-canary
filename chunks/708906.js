"use strict";
r.d(t, { A: () => l });
var a = r(1139),
    n = r(64700),
    o = r(223108),
    s = r.n(o),
    i = function (e) {
        var t = e.styling,
            r = e.arrowStyle,
            o = e.expanded,
            s = e.nodeType,
            i = e.onClick;
        return n.createElement(
            "div",
            (0, a.A)({}, t("arrowContainer", r), { onClick: i }),
            n.createElement(
                "div",
                t(["arrow", "arrowSign"], s, o, r),
                "▶",
                "double" === r && n.createElement("div", t(["arrowSign", "arrowSignInner"]), "▶"),
            ),
        );
    };
(i.propTypes = {
    styling: s().func.isRequired,
    arrowStyle: s().oneOf(["single", "double"]),
    expanded: s().bool.isRequired,
    nodeType: s().string.isRequired,
    onClick: s().func.isRequired,
}),
    (i.defaultProps = { arrowStyle: "single" });
let l = i;
