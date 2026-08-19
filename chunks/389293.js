"use strict";
var t = "%[a-f0-9]{2}",
    r = RegExp("(" + t + ")|([^%]+?)", "gi"),
    n = RegExp("(" + t + ")+", "gi");
e.exports = function (e) {
    if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch (t) {
        return (function (e) {
            for (var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, o = n.exec(e); o; ) {
                try {
                    t[o[0]] = decodeURIComponent(o[0]);
                } catch (e) {
                    var i = (function (e) {
                        try {
                            return decodeURIComponent(e);
                        } catch (o) {
                            for (var t = e.match(r) || [], n = 1; n < t.length; n++)
                                t =
                                    (e = (function e(t, r) {
                                        try {
                                            return [decodeURIComponent(t.join(""))];
                                        } catch (e) {}
                                        if (1 === t.length) return t;
                                        r = r || 1;
                                        var n = t.slice(0, r),
                                            o = t.slice(r);
                                        return Array.prototype.concat.call([], e(n), e(o));
                                    })(t, n).join("")).match(r) || [];
                            return e;
                        }
                    })(o[0]);
                    i !== o[0] && (t[o[0]] = i);
                }
                o = n.exec(e);
            }
            t["%C2"] = "\uFFFD";
            for (var a = Object.keys(t), s = 0; s < a.length; s++) {
                var l = a[s];
                e = e.replace(RegExp(l, "g"), t[l]);
            }
            return e;
        })(e);
    }
};
