r.r(n),
    r.d(n, {
        default: function () {
            return y;
        }
    });
var i = r(310644),
    a = r(465735),
    o = r(528734),
    s = r(570289),
    l = r(128961),
    u = r(424421),
    c = r(198050),
    d = r(217224),
    f = r(951516),
    p = r(633605),
    h = r(393655),
    _ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    g = /^'([^]*?)'?$/,
    E = /''/g,
    v = /[a-zA-Z]/;
function y(e, n, r) {
    (0, f.Z)(2, arguments);
    var g,
        E,
        y,
        I,
        T,
        S,
        A,
        C,
        N,
        R,
        O,
        D,
        L,
        x,
        w,
        P,
        M,
        k,
        U = String(n),
        B = (0, p.j)(),
        G = null !== (g = null !== (E = null == r ? void 0 : r.locale) && void 0 !== E ? E : B.locale) && void 0 !== g ? g : h.Z,
        Z = (0, d.Z)(null !== (y = null !== (I = null !== (T = null !== (S = null == r ? void 0 : r.firstWeekContainsDate) && void 0 !== S ? S : null == r ? void 0 : null === (A = r.locale) || void 0 === A ? void 0 : null === (C = A.options) || void 0 === C ? void 0 : C.firstWeekContainsDate) && void 0 !== T ? T : B.firstWeekContainsDate) && void 0 !== I ? I : null === (N = B.locale) || void 0 === N ? void 0 : null === (R = N.options) || void 0 === R ? void 0 : R.firstWeekContainsDate) && void 0 !== y ? y : 1);
    if (!(Z >= 1 && Z <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var F = (0, d.Z)(null !== (O = null !== (D = null !== (L = null !== (x = null == r ? void 0 : r.weekStartsOn) && void 0 !== x ? x : null == r ? void 0 : null === (w = r.locale) || void 0 === w ? void 0 : null === (P = w.options) || void 0 === P ? void 0 : P.weekStartsOn) && void 0 !== L ? L : B.weekStartsOn) && void 0 !== D ? D : null === (M = B.locale) || void 0 === M ? void 0 : null === (k = M.options) || void 0 === k ? void 0 : k.weekStartsOn) && void 0 !== O ? O : 0);
    if (!(F >= 0 && F <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!G.localize) throw RangeError('locale must contain localize property');
    if (!G.formatLong) throw RangeError('locale must contain formatLong property');
    var V = (0, o.default)(e);
    if (!(0, i.default)(V)) throw RangeError('Invalid time value');
    var j = (0, u.Z)(V),
        H = (0, a.Z)(V, j),
        Y = {
            firstWeekContainsDate: Z,
            weekStartsOn: F,
            locale: G,
            _originalDate: V
        };
    return U.match(m)
        .map(function (e) {
            var n = e[0];
            return 'p' === n || 'P' === n ? (0, l.Z[n])(e, G.formatLong) : e;
        })
        .join('')
        .match(_)
        .map(function (i) {
            if ("''" === i) return "'";
            var a = i[0];
            if ("'" === a) return b(i);
            var o = s.Z[a];
            if (o) return !(null != r && r.useAdditionalWeekYearTokens) && (0, c.Do)(i) && (0, c.qp)(i, n, String(e)), !(null != r && r.useAdditionalDayOfYearTokens) && (0, c.Iu)(i) && (0, c.qp)(i, n, String(e)), o(H, i, G.localize, Y);
            if (a.match(v)) throw RangeError('Format string contains an unescaped latin alphabet character `' + a + '`');
            return i;
        })
        .join('');
}
function b(e) {
    var n = e.match(g);
    return n ? n[1].replace(E, "'") : e;
}
