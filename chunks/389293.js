"use strict";
var t = "%[a-f0-9]{2}",
    n = RegExp("(" + t + ")|([^%]+?)", "gi"),
    i = RegExp("(" + t + ")+", "gi");
e.exports = function (e) {
    if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch (t) {
        return (function (e) {
            for (var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, r = i.exec(e); r; ) {
                try {
                    t[r[0]] = decodeURIComponent(r[0]);
                } catch (e) {
                    var s = (function (e) {
                        try {
                            return decodeURIComponent(e);
                        } catch (r) {
                            for (var t = e.match(n) || [], i = 1; i < t.length; i++)
                                t =
                                    (e = (function e(t, n) {
                                        try {
                                            return [decodeURIComponent(t.join(""))];
                                        } catch (e) {}
                                        if (1 === t.length) return t;
                                        n = n || 1;
                                        var i = t.slice(0, n),
                                            r = t.slice(n);
                                        return Array.prototype.concat.call([], e(i), e(r));
                                    })(t, i).join("")).match(n) || [];
                            return e;
                        }
                    })(r[0]);
                    s !== r[0] && (t[r[0]] = s);
                }
                r = i.exec(e);
            }
            t["%C2"] = "\uFFFD";
            for (var a = Object.keys(t), o = 0; o < a.length; o++) {
                var l = a[o];
                e = e.replace(RegExp(l, "g"), t[l]);
            }
            return e;
        })(e);
    }
};
