let i = n(52878),
    r = n(172959),
    a = n(393808),
    s = n(725616),
    o = n(690217),
    l = n(689478),
    u = (e, t, n, u) => {
        switch (t) {
            case '===':
                return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e === n;
            case '!==':
                return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e !== n;
            case '':
            case '=':
            case '==':
                return i(e, n, u);
            case '!=':
                return r(e, n, u);
            case '>':
                return a(e, n, u);
            case '>=':
                return s(e, n, u);
            case '<':
                return o(e, n, u);
            case '<=':
                return l(e, n, u);
            default:
                throw TypeError(`Invalid operator: ${t}`);
        }
    };
e.exports = u;
