n.d(t, { $: () => E });
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
    c = '([^aeiou][^aeiouy]*)',
    r = '(' + i + '[aeiou]*)',
    l = RegExp('^' + c + '?' + r + c),
    s = RegExp('^' + c + '?' + r + c + r + '?$'),
    u = RegExp('^' + c + '?(' + r + c + '){2,}'),
    d = RegExp('^' + c + '?' + i),
    m = RegExp('^' + c + i + '[^aeiouwxy]$'),
    p = /ll$/,
    _ = /^(.+?)e$/,
    f = /^(.+?)y$/,
    g = /^(.+?(s|t))(ion)$/,
    b = /^(.+?)(ed|ing)$/,
    h = /(at|bl|iz)$/,
    T = /^(.+?)eed$/,
    y = /^.+?[^s]s$/,
    C = /^.+?(ss|i)es$/,
    x = /([^aeiouylsz])\1$/,
    v = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    I = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function E(e) {
    let t,
        n = String(e).toLowerCase();
    if (n.length < 3) return n;
    let i = !1;
    return (121 === n.codePointAt(0) && ((i = !0), (n = 'Y' + n.slice(1))), C.test(n) ? (n = n.slice(0, -2)) : y.test(n) && (n = n.slice(0, -1)), (t = T.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = b.exec(n)) && d.test(t[1]) && ((n = t[1]), h.test(n) ? (n += 'e') : x.test(n) ? (n = n.slice(0, -1)) : m.test(n) && (n += 'e')), (t = f.exec(n)) && d.test(t[1]) && (n = t[1] + 'i'), (t = v.exec(n)) && l.test(t[1]) && (n = t[1] + a[t[2]]), (t = O.exec(n)) && l.test(t[1]) && (n = t[1] + o[t[2]]), (t = I.exec(n)) ? u.test(t[1]) && (n = t[1]) : (t = g.exec(n)) && u.test(t[1]) && (n = t[1]), (t = _.exec(n)) && (u.test(t[1]) || (s.test(t[1]) && !m.test(t[1]))) && (n = t[1]), p.test(n) && u.test(n) && (n = n.slice(0, -1)), i && (n = 'y' + n.slice(1)), n);
}
