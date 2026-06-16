"use strict";
var n = r(387739);
t.exports = function (t, e, r, i) {
    for (var o = e, a = t.getCharacterList(); o < r; ) (a = a.set(o, n.applyEntity(a.get(o), i))), o++;
    return t.set("characterList", a);
};
