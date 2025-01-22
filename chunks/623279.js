e.exports.parse = function (e) {
    var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
    if (!n) return null;
    n.shift();
    var r = null,
        i = [];
    n[2] && ((r = (s = n[2].split('-')).shift()), (i = s));
    var a = [];
    n[5] && (a = n[5].split('-')).shift();
    var o = [];
    if (n[6]) {
        (s = n[6].split('-')).shift();
        for (var s, l, u = []; s.length; ) {
            var c = s.shift();
            1 === c.length
                ? l
                    ? (o.push({
                          singleton: l,
                          extension: u
                      }),
                      (l = c),
                      (u = []))
                    : (l = c)
                : u.push(c);
        }
        o.push({
            singleton: l,
            extension: u
        });
    }
    var d = [];
    n[7] && ((d = n[7].split('-')).shift(), d.shift());
    var f = [];
    return (
        n[8] && (f = n[8].split('-')).shift(),
        {
            langtag: {
                language: {
                    language: r,
                    extlang: i
                },
                script: n[3] || null,
                region: n[4] || null,
                variant: a,
                extension: o,
                privateuse: d
            },
            privateuse: f,
            grandfathered: {
                irregular: n[0] || null,
                regular: n[1] || null
            }
        }
    );
};
