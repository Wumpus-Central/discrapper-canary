var r = n(250010),
    i = n(999296);
e.exports = function (e, t) {
    var n = t.getStartKey(),
        o = t.getStartOffset(),
        a = t.getEndKey(),
        s = t.getEndOffset(),
        l = i(e, t).getBlockMap(),
        c = l.keySeq(),
        u = c.indexOf(n),
        d = c.indexOf(a) + 1;
    return r(
        l.slice(u, d).map(function (e, t) {
            var r = e.getText(),
                i = e.getCharacterList();
            return n === a
                ? e.merge({
                      text: r.slice(o, s),
                      characterList: i.slice(o, s)
                  })
                : t === n
                  ? e.merge({
                        text: r.slice(o),
                        characterList: i.slice(o)
                    })
                  : t === a
                    ? e.merge({
                          text: r.slice(0, s),
                          characterList: i.slice(0, s)
                      })
                    : e;
        })
    );
};
