n.d(t, { $: () => M });
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
    l = '[aeiouy]',
    s = '([^aeiou][^aeiouy]*)',
    o = '(' + l + '[aeiou]*)',
    r = RegExp('^' + s + '?' + o + s),
    c = RegExp('^' + s + '?' + o + s + o + '?$'),
    d = RegExp('^' + s + '?(' + o + s + '){2,}'),
    u = RegExp('^' + s + '?' + l),
    m = RegExp('^' + s + l + '[^aeiouwxy]$'),
    p = /ll$/,
    g = /^(.+?)e$/,
    _ = /^(.+?)y$/,
    h = /^(.+?(s|t))(ion)$/,
    f = /^(.+?)(ed|ing)$/,
    C = /(at|bl|iz)$/,
    E = /^(.+?)eed$/,
    v = /^.+?[^s]s$/,
    y = /^.+?(ss|i)es$/,
    x = /([^aeiouylsz])\1$/,
    T = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    b = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function M(e) {
    let t,
        n = String(e).toLowerCase();
    if (n.length < 3) return n;
    let l = !1;
    return 121 === n.codePointAt(0) && ((l = !0), (n = 'Y' + n.slice(1))), y.test(n) ? (n = n.slice(0, -2)) : v.test(n) && (n = n.slice(0, -1)), (t = E.exec(n)) ? r.test(t[1]) && (n = n.slice(0, -1)) : (t = f.exec(n)) && u.test(t[1]) && ((n = t[1]), C.test(n) ? (n += 'e') : x.test(n) ? (n = n.slice(0, -1)) : m.test(n) && (n += 'e')), (t = _.exec(n)) && u.test(t[1]) && (n = t[1] + 'i'), (t = T.exec(n)) && r.test(t[1]) && (n = t[1] + a[t[2]]), (t = I.exec(n)) && r.test(t[1]) && (n = t[1] + i[t[2]]), (t = b.exec(n)) ? d.test(t[1]) && (n = t[1]) : (t = h.exec(n)) && d.test(t[1]) && (n = t[1]), (t = g.exec(n)) && (d.test(t[1]) || (c.test(t[1]) && !m.test(t[1]))) && (n = t[1]), p.test(n) && d.test(n) && (n = n.slice(0, -1)), l && (n = 'y' + n.slice(1)), n;
}
