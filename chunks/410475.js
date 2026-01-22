var r = n(541635),
    i = n(59061);
e.exports = function (e, t) {
    var n = t.getStartKey(),
        a = t.getStartOffset(),
        s = t.getEndKey(),
        o = t.getEndOffset(),
        l = i(e, t).getBlockMap(),
        c = l.keySeq(),
        u = c.indexOf(n),
        d = c.indexOf(s) + 1;
    return r(
        l.slice(u, d).map(function (e, t) {
            var r = e.getText(),
                i = e.getCharacterList();
            return n === s
                ? e.merge({
                      text: r.slice(a, o),
                      characterList: i.slice(a, o),
                  })
                : t === n
                  ? e.merge({
                        text: r.slice(a),
                        characterList: i.slice(a),
                    })
                  : t === s
                    ? e.merge({
                          text: r.slice(0, o),
                          characterList: i.slice(0, o),
                      })
                    : e;
        }),
    );
};
