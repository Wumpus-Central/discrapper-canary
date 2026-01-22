var r = n(573750),
    i = n(797686),
    a = r.isBrowser("IE <= 9");
e.exports = function (e) {
    var t,
        n = null;
    return (
        !a &&
            document.implementation &&
            document.implementation.createHTMLDocument &&
            ((t = document.implementation.createHTMLDocument("foo")).documentElement || i(!1),
            (t.documentElement.innerHTML = e),
            (n = t.getElementsByTagName("body")[0])),
        n
    );
};
