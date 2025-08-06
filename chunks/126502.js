function t() {
    var e;
    return (
        document.documentElement && (e = document.documentElement.clientWidth),
        !e && document.body && (e = document.body.clientWidth),
        e || 0
    );
}
function n() {
    var e;
    return (
        document.documentElement && (e = document.documentElement.clientHeight),
        !e && document.body && (e = document.body.clientHeight),
        e || 0
    );
}
function r() {
    return {
        width: window.innerWidth || t(),
        height: window.innerHeight || n(),
    };
}
(r.withoutScrollbars = function () {
    return {
        width: t(),
        height: n(),
    };
}),
    (e.exports = r);
