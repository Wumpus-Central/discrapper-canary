let r = n(52878),
    i = n(172959),
    o = n(393808),
    a = n(725616),
    s = n(690217),
    l = n(689478);
e.exports = (e, t, n, c) => {
    switch (t) {
        case '===':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e === n;
        case '!==':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e !== n;
        case '':
        case '=':
        case '==':
            return r(e, n, c);
        case '!=':
            return i(e, n, c);
        case '>':
            return o(e, n, c);
        case '>=':
            return a(e, n, c);
        case '<':
            return s(e, n, c);
        case '<=':
            return l(e, n, c);
        default:
            throw TypeError(`Invalid operator: ${t}`);
    }
};
