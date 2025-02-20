function n(e) {
    return Object.entries(e)
        .filter(function (e) {
            e[0];
            var t = e[1];
            return t || !1 === t;
        })
        .map(function (e) {
            var t = e[0],
                r = e[1];
            return encodeURIComponent(t) + '=' + encodeURIComponent(r);
        })
        .join('&');
}
function a(e) {
    var t = (e && e.ownerDocument) || document,
        r = t.defaultView || t.parentWindow || window;
    return {
        document: t,
        window: r
    };
}
function i(e) {
    return e || document.head;
}
r.d(t, {
    $h: () => a,
    Ku: () => n,
    as: () => i
});
