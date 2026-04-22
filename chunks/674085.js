"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(508770),
    a = n(933297);
let l = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case a.Xi.NEW:
            return (0, r.jsx)(i.E, { type: "new", variant: "brand" });
        case a.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, r.jsx)(n, {});
    }
};
