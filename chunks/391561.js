var r = n(387739);
e.exports = function (e, t, n, i) {
    for (var a = t, s = e.getCharacterList(); a < n; ) (s = s.set(a, r.applyEntity(s.get(a), i))), a++;
    return e.set("characterList", s);
};
