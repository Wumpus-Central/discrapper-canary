var n = r(169774),
    i = r(581079),
    o = n.isBrowser('IE <= 9');
t.exports = function (t) {
    var e,
        r = null;
    return !o && document.implementation && document.implementation.createHTMLDocument && ((e = document.implementation.createHTMLDocument('foo')).documentElement || i(!1), (e.documentElement.innerHTML = t), (r = e.getElementsByTagName('body')[0])), r;
};
