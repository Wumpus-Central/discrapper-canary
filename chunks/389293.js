"use strict";
var t = "%[a-f0-9]{2}",
    n = RegExp("(" + t + ")|([^%]+?)", "gi"),
    r = RegExp("(" + t + ")+", "gi");
e.exports = function (e) {
    if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch (t) {
        return (function (e) {
            for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, i = r.exec(e); i; ) {
                try {
                    t[i[0]] = decodeURIComponent(i[0]);
                } catch (e) {
                    var s = (function (e) {
                        try {
                            return decodeURIComponent(e);
                        } catch (i) {
                            for (var t = e.match(n) || [], r = 1; r < t.length; r++)
                                t =
                                    (e = (function e(t, n) {
                                        try {
                                            return [decodeURIComponent(t.join(""))];
                                        } catch (e) {}
                                        if (1 === t.length) return t;
                                        n = n || 1;
                                        var r = t.slice(0, n),
                                            i = t.slice(n);
                                        return Array.prototype.concat.call([], e(r), e(i));
                                    })(t, r).join("")).match(n) || [];
                            return e;
                        }
                    })(i[0]);
                    s !== i[0] && (t[i[0]] = s);
                }
                i = r.exec(e);
            }
            t["%C2"] = "�";
            for (var a = Object.keys(t), o = 0; o < a.length; o++) {
                var l = a[o];
                e = e.replace(RegExp(l, "g"), t[l]);
            }
            return e;
        })(e);
    }
};
