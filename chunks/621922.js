var n = r(310958);
t.exports = function (t, e, r, i) {
    for (var o = e, a = t.getCharacterList(); o < r; ) (a = a.set(o, n.applyEntity(a.get(o), i))), o++;
    return t.set('characterList', a);
};
