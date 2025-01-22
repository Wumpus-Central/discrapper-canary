let i = r(52878),
    a = r(172959),
    o = r(393808),
    s = r(725616),
    l = r(690217),
    u = r(689478),
    c = (e, n, r, c) => {
        switch (n) {
            case '===':
                return 'object' == typeof e && (e = e.version), 'object' == typeof r && (r = r.version), e === r;
            case '!==':
                return 'object' == typeof e && (e = e.version), 'object' == typeof r && (r = r.version), e !== r;
            case '':
            case '=':
            case '==':
                return i(e, r, c);
            case '!=':
                return a(e, r, c);
            case '>':
                return o(e, r, c);
            case '>=':
                return s(e, r, c);
            case '<':
                return l(e, r, c);
            case '<=':
                return u(e, r, c);
            default:
                throw TypeError(`Invalid operator: ${n}`);
        }
    };
e.exports = c;
