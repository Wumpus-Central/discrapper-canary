var r = n(359282);
e.exports = function (e, t, n, i) {
    for (var a = t, o = e.getCharacterList(); a < n; ) ((o = o.set(a, r.applyEntity(o.get(a), i))), a++);
    return e.set('characterList', o);
};
