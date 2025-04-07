r.d(e, { $: () => E });
let n = {
        ational: 'ate',
        tional: 'tion',
        enci: 'ence',
        anci: 'ance',
        izer: 'ize',
        bli: 'ble',
        alli: 'al',
        entli: 'ent',
        eli: 'e',
        ousli: 'ous',
        ization: 'ize',
        ation: 'ate',
        ator: 'ate',
        alism: 'al',
        iveness: 'ive',
        fulness: 'ful',
        ousness: 'ous',
        aliti: 'al',
        iviti: 'ive',
        biliti: 'ble',
        logi: 'log'
    },
    i = {
        icate: 'ic',
        ative: '',
        alize: 'al',
        iciti: 'ic',
        ical: 'ic',
        ful: '',
        ness: ''
    },
    o = '[aeiouy]',
    a = '([^aeiou][^aeiouy]*)',
    u = '(' + o + '[aeiou]*)',
    s = RegExp('^' + a + '?' + u + a),
    c = RegExp('^' + a + '?' + u + a + u + '?$'),
    l = RegExp('^' + a + '?(' + u + a + '){2,}'),
    f = RegExp('^' + a + '?' + o),
    p = RegExp('^' + a + o + '[^aeiouwxy]$'),
    h = /ll$/,
    d = /^(.+?)e$/,
    g = /^(.+?)y$/,
    y = /^(.+?(s|t))(ion)$/,
    v = /^(.+?)(ed|ing)$/,
    m = /(at|bl|iz)$/,
    _ = /^(.+?)eed$/,
    b = /^.+?[^s]s$/,
    S = /^.+?(ss|i)es$/,
    w = /([^aeiouylsz])\1$/,
    x = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    k = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    C = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function E(t) {
    let e,
        r = String(t).toLowerCase();
    if (r.length < 3) return r;
    let o = !1;
    return 121 === r.codePointAt(0) && ((o = !0), (r = 'Y' + r.slice(1))), S.test(r) ? (r = r.slice(0, -2)) : b.test(r) && (r = r.slice(0, -1)), (e = _.exec(r)) ? s.test(e[1]) && (r = r.slice(0, -1)) : (e = v.exec(r)) && f.test(e[1]) && ((r = e[1]), m.test(r) ? (r += 'e') : w.test(r) ? (r = r.slice(0, -1)) : p.test(r) && (r += 'e')), (e = g.exec(r)) && f.test(e[1]) && (r = e[1] + 'i'), (e = x.exec(r)) && s.test(e[1]) && (r = e[1] + n[e[2]]), (e = k.exec(r)) && s.test(e[1]) && (r = e[1] + i[e[2]]), (e = C.exec(r)) ? l.test(e[1]) && (r = e[1]) : (e = y.exec(r)) && l.test(e[1]) && (r = e[1]), (e = d.exec(r)) && (l.test(e[1]) || (c.test(e[1]) && !p.test(e[1]))) && (r = e[1]), h.test(r) && l.test(r) && (r = r.slice(0, -1)), o && (r = 'y' + r.slice(1)), r;
}
