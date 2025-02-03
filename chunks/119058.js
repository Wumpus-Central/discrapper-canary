n.r(t), n.d(t, { default: () => v });
var i = n(310644),
    r = n(465735),
    a = n(528734),
    s = n(570289),
    o = n(128961),
    l = n(424421),
    u = n(198050),
    c = n(217224),
    d = n(951516),
    f = n(633605),
    _ = n(393655),
    p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    m = /^'([^]*?)'?$/,
    g = /''/g,
    E = /[a-zA-Z]/;
function v(e, t, n) {
    (0, d.Z)(2, arguments);
    var m,
        g,
        v,
        I,
        b,
        T,
        S,
        A,
        N,
        C,
        R,
        O,
        D,
        x,
        L,
        P,
        w,
        M,
        k = String(t),
        U = (0, f.j)(),
        G = null !== (m = null !== (g = null == n ? void 0 : n.locale) && void 0 !== g ? g : U.locale) && void 0 !== m ? m : _.Z,
        B = (0, c.Z)(null !== (v = null !== (I = null !== (b = null !== (T = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== T ? T : null == n ? void 0 : null === (S = n.locale) || void 0 === S ? void 0 : null === (A = S.options) || void 0 === A ? void 0 : A.firstWeekContainsDate) && void 0 !== b ? b : U.firstWeekContainsDate) && void 0 !== I ? I : null === (N = U.locale) || void 0 === N ? void 0 : null === (C = N.options) || void 0 === C ? void 0 : C.firstWeekContainsDate) && void 0 !== v ? v : 1);
    if (!(B >= 1 && B <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var Z = (0, c.Z)(null !== (R = null !== (O = null !== (D = null !== (x = null == n ? void 0 : n.weekStartsOn) && void 0 !== x ? x : null == n ? void 0 : null === (L = n.locale) || void 0 === L ? void 0 : null === (P = L.options) || void 0 === P ? void 0 : P.weekStartsOn) && void 0 !== D ? D : U.weekStartsOn) && void 0 !== O ? O : null === (w = U.locale) || void 0 === w ? void 0 : null === (M = w.options) || void 0 === M ? void 0 : M.weekStartsOn) && void 0 !== R ? R : 0);
    if (!(Z >= 0 && Z <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!G.localize) throw RangeError('locale must contain localize property');
    if (!G.formatLong) throw RangeError('locale must contain formatLong property');
    var F = (0, a.default)(e);
    if (!(0, i.default)(F)) throw RangeError('Invalid time value');
    var V = (0, l.Z)(F),
        j = (0, r.Z)(F, V),
        H = {
            firstWeekContainsDate: B,
            weekStartsOn: Z,
            locale: G,
            _originalDate: F
        };
    return k
        .match(h)
        .map(function (e) {
            var t = e[0];
            return 'p' === t || 'P' === t ? (0, o.Z[t])(e, G.formatLong) : e;
        })
        .join('')
        .match(p)
        .map(function (i) {
            if ("''" === i) return "'";
            var r = i[0];
            if ("'" === r) return y(i);
            var a = s.Z[r];
            if (a) return !(null != n && n.useAdditionalWeekYearTokens) && (0, u.Do)(i) && (0, u.qp)(i, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.Iu)(i) && (0, u.qp)(i, t, String(e)), a(j, i, G.localize, H);
            if (r.match(E)) throw RangeError('Format string contains an unescaped latin alphabet character `' + r + '`');
            return i;
        })
        .join('');
}
function y(e) {
    var t = e.match(m);
    return t ? t[1].replace(g, "'") : e;
}
