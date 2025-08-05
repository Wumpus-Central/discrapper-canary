n.d(t, { $: () => A });
let r = {
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
    a = '[aeiouy]',
    o = '([^aeiou][^aeiouy]*)',
    s = '(' + a + '[aeiou]*)',
    l = RegExp('^' + o + '?' + s + o),
    c = RegExp('^' + o + '?' + s + o + s + '?$'),
    u = RegExp('^' + o + '?(' + s + o + '){2,}'),
    d = RegExp('^' + o + '?' + a),
    f = RegExp('^' + o + a + '[^aeiouwxy]$'),
    _ = /ll$/,
    p = /^(.+?)e$/,
    h = /^(.+?)y$/,
    m = /^(.+?(s|t))(ion)$/,
    g = /^(.+?)(ed|ing)$/,
    E = /(at|bl|iz)$/,
    b = /^(.+?)eed$/,
    y = /^.+?[^s]s$/,
    O = /^.+?(ss|i)es$/,
    v = /([^aeiouylsz])\1$/,
    I = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    S = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function A(e) {
    let t,
        n = String(e).toLowerCase();
    if (n.length < 3) return n;
    let a = !1;
    return (121 === n.codePointAt(0) && ((a = !0), (n = 'Y' + n.slice(1))), O.test(n) ? (n = n.slice(0, -2)) : y.test(n) && (n = n.slice(0, -1)), (t = b.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = g.exec(n)) && d.test(t[1]) && ((n = t[1]), E.test(n) ? (n += 'e') : v.test(n) ? (n = n.slice(0, -1)) : f.test(n) && (n += 'e')), (t = h.exec(n)) && d.test(t[1]) && (n = t[1] + 'i'), (t = I.exec(n)) && l.test(t[1]) && (n = t[1] + r[t[2]]), (t = T.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]), (t = S.exec(n)) ? u.test(t[1]) && (n = t[1]) : (t = m.exec(n)) && u.test(t[1]) && (n = t[1]), (t = p.exec(n)) && (u.test(t[1]) || (c.test(t[1]) && !f.test(t[1]))) && (n = t[1]), _.test(n) && u.test(n) && (n = n.slice(0, -1)), a && (n = 'y' + n.slice(1)), n);
}
