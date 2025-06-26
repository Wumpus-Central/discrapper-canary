r.d(t, { $: () => O });
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
    o = {
        icate: 'ic',
        ative: '',
        alize: 'al',
        iciti: 'ic',
        ical: 'ic',
        ful: '',
        ness: ''
    },
    i = '[aeiouy]',
    a = '([^aeiou][^aeiouy]*)',
    s = '(' + i + '[aeiou]*)',
    c = RegExp('^' + a + '?' + s + a),
    u = RegExp('^' + a + '?' + s + a + s + '?$'),
    d = RegExp('^' + a + '?(' + s + a + '){2,}'),
    l = RegExp('^' + a + '?' + i),
    p = RegExp('^' + a + i + '[^aeiouwxy]$'),
    f = /ll$/,
    h = /^(.+?)e$/,
    v = /^(.+?)y$/,
    y = /^(.+?(s|t))(ion)$/,
    g = /^(.+?)(ed|ing)$/,
    b = /(at|bl|iz)$/,
    m = /^(.+?)eed$/,
    D = /^.+?[^s]s$/,
    k = /^.+?(ss|i)es$/,
    x = /([^aeiouylsz])\1$/,
    w = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    j = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    C = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function O(e) {
    let t,
        r = String(e).toLowerCase();
    if (r.length < 3) return r;
    let i = !1;
    return 121 === r.codePointAt(0) && ((i = !0), (r = 'Y' + r.slice(1))), k.test(r) ? (r = r.slice(0, -2)) : D.test(r) && (r = r.slice(0, -1)), (t = m.exec(r)) ? c.test(t[1]) && (r = r.slice(0, -1)) : (t = g.exec(r)) && l.test(t[1]) && ((r = t[1]), b.test(r) ? (r += 'e') : x.test(r) ? (r = r.slice(0, -1)) : p.test(r) && (r += 'e')), (t = v.exec(r)) && l.test(t[1]) && (r = t[1] + 'i'), (t = w.exec(r)) && c.test(t[1]) && (r = t[1] + n[t[2]]), (t = j.exec(r)) && c.test(t[1]) && (r = t[1] + o[t[2]]), (t = C.exec(r)) ? d.test(t[1]) && (r = t[1]) : (t = y.exec(r)) && d.test(t[1]) && (r = t[1]), (t = h.exec(r)) && (d.test(t[1]) || (u.test(t[1]) && !p.test(t[1]))) && (r = t[1]), f.test(r) && d.test(r) && (r = r.slice(0, -1)), i && (r = 'y' + r.slice(1)), r;
}
