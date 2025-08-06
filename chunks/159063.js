var r = n(359282);
e.exports = function (e, t, n, i) {
    for (var o = t, a = e.getCharacterList(); o < n; ) ((a = a.set(o, r.applyEntity(a.get(o), i))), o++);
    return e.set('characterList', a);
};
