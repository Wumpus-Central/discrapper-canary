"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(158954),
    a = n(933297);
let s = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case a.Xi.NEW:
            return (0, r.jsx)(i.Exy, { type: "new", variant: "brand" });
        case a.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, r.jsx)(n, {});
    }
};
