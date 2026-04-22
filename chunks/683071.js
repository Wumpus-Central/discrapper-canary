"use strict";
n.d(t, { w: () => s });
var r = n(627968);
n(64700);
var i = n(512950);
function s(e) {
    let { type: t, hidden: n, children: s } = e;
    return (0, r.jsx)(i.p, {
        messageType: (function (e) {
            switch (e) {
                case "critical":
                    return i.Y.ERROR;
                case "warning":
                    return i.Y.WARNING;
                case "info":
                    return i.Y.INFO;
                case "success":
                    return i.Y.POSITIVE;
            }
        })(t),
        hidden: n,
        children: s,
    });
}
