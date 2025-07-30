s.d(i, { $: () => q });
let t = {
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
    r = {
        icate: 'ic',
        ative: '',
        alize: 'al',
        iciti: 'ic',
        ical: 'ic',
        ful: '',
        ness: ''
    },
    a = '[aeiouy]',
    n = '([^aeiou][^aeiouy]*)',
    h = '(' + a + '[aeiou]*)',
    o = RegExp('^' + n + '?' + h + n),
    u = RegExp('^' + n + '?' + h + n + h + '?$'),
    c = RegExp('^' + n + '?(' + h + n + '){2,}'),
    _ = RegExp('^' + n + '?' + a),
    l = RegExp('^' + n + a + '[^aeiouwxy]$'),
    w = /ll$/,
    $ = /^(.+?)e$/,
    v = /^(.+?)y$/,
    f = /^(.+?(s|t))(ion)$/,
    k = /^(.+?)(ed|ing)$/,
    d = /(at|bl|iz)$/,
    b = /^(.+?)eed$/,
    m = /^.+?[^s]s$/,
    j = /^.+?(ss|i)es$/,
    g = /([^aeiouylsz])\1$/,
    p = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    y = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    I = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function q(e) {
    let i,
        s = String(e).toLowerCase();
    if (s.length < 3) return s;
    let a = !1;
    return (121 === s.codePointAt(0) && ((a = !0), (s = 'Y' + s.slice(1))), j.test(s) ? (s = s.slice(0, -2)) : m.test(s) && (s = s.slice(0, -1)), (i = b.exec(s)) ? o.test(i[1]) && (s = s.slice(0, -1)) : (i = k.exec(s)) && _.test(i[1]) && ((s = i[1]), d.test(s) ? (s += 'e') : g.test(s) ? (s = s.slice(0, -1)) : l.test(s) && (s += 'e')), (i = v.exec(s)) && _.test(i[1]) && (s = i[1] + 'i'), (i = p.exec(s)) && o.test(i[1]) && (s = i[1] + t[i[2]]), (i = y.exec(s)) && o.test(i[1]) && (s = i[1] + r[i[2]]), (i = I.exec(s)) ? c.test(i[1]) && (s = i[1]) : (i = f.exec(s)) && c.test(i[1]) && (s = i[1]), (i = $.exec(s)) && (c.test(i[1]) || (u.test(i[1]) && !l.test(i[1]))) && (s = i[1]), w.test(s) && c.test(s) && (s = s.slice(0, -1)), a && (s = 'y' + s.slice(1)), s);
}
