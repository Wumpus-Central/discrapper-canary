n.d(t, { M: () => o });
var r = n(54381);
n(473749);
var i = n(861974);
function a(e) {
    switch (e) {
        case "critical":
            return i.Q.ERROR;
        case "warning":
            return i.Q.WARNING;
        case "info":
            return i.Q.INFO;
        case "success":
            return i.Q.POSITIVE;
    }
}
function o(e) {
    let { type: t, children: n } = e;
    return (0, r.jsx)(i.W, {
        messageType: a(t),
        children: n,
    });
}
