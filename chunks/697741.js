n.d(t, { $: () => P });
let a = {
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
    r = '[aeiouy]',
    o = '([^aeiou][^aeiouy]*)',
    l = '(' + r + '[aeiou]*)',
    s = RegExp('^' + o + '?' + l + o),
    c = RegExp('^' + o + '?' + l + o + l + '?$'),
    d = RegExp('^' + o + '?(' + l + o + '){2,}'),
    u = RegExp('^' + o + '?' + r),
    m = RegExp('^' + o + r + '[^aeiouwxy]$'),
    p = /ll$/,
    g = /^(.+?)e$/,
    h = /^(.+?)y$/,
    _ = /^(.+?(s|t))(ion)$/,
    f = /^(.+?)(ed|ing)$/,
    b = /(at|bl|iz)$/,
    y = /^(.+?)eed$/,
    x = /^.+?[^s]s$/,
    C = /^.+?(ss|i)es$/,
    v = /([^aeiouylsz])\1$/,
    O = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    j = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    T = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function P(e) {
    let t,
        n = String(e).toLowerCase();
    if (n.length < 3) return n;
    let r = !1;
    return 121 === n.codePointAt(0) && ((r = !0), (n = 'Y' + n.slice(1))), C.test(n) ? (n = n.slice(0, -2)) : x.test(n) && (n = n.slice(0, -1)), (t = y.exec(n)) ? s.test(t[1]) && (n = n.slice(0, -1)) : (t = f.exec(n)) && u.test(t[1]) && ((n = t[1]), b.test(n) ? (n += 'e') : v.test(n) ? (n = n.slice(0, -1)) : m.test(n) && (n += 'e')), (t = h.exec(n)) && u.test(t[1]) && (n = t[1] + 'i'), (t = O.exec(n)) && s.test(t[1]) && (n = t[1] + a[t[2]]), (t = j.exec(n)) && s.test(t[1]) && (n = t[1] + i[t[2]]), (t = T.exec(n)) ? d.test(t[1]) && (n = t[1]) : (t = _.exec(n)) && d.test(t[1]) && (n = t[1]), (t = g.exec(n)) && (d.test(t[1]) || (c.test(t[1]) && !m.test(t[1]))) && (n = t[1]), p.test(n) && d.test(n) && (n = n.slice(0, -1)), r && (n = 'y' + n.slice(1)), n;
}
