n.d(t, { w: () => a });
var i = n(477900);
n(582128);
var r = n(512950);
function a(e) {
    let { type: t, hidden: n, iconAlign: a, children: s } = e;
    return (0, i.jsx)(r.p, {
        messageType: (function (e) {
            switch (e) {
                case "critical":
                    return r.Y.ERROR;
                case "warning":
                    return r.Y.WARNING;
                case "info":
                    return r.Y.INFO;
                case "success":
                    return r.Y.POSITIVE;
            }
        })(t),
        hidden: n,
        iconAlign: a,
        children: s,
    });
}
