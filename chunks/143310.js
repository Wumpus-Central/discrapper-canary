var e = 'undefined' != typeof navigator && navigator.userAgent.indexOf('AppleWebKit') > -1;
t.exports = function (t) {
    return (t = t || document).scrollingElement ? t.scrollingElement : e || 'CSS1Compat' !== t.compatMode ? t.body : t.documentElement;
};
