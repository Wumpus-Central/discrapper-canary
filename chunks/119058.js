n.r(t), n.d(t, { default: () => b });
var r = n(310644),
    i = n(465735),
    a = n(528734),
    o = n(570289),
    s = n(128961),
    l = n(424421),
    c = n(198050),
    u = n(217224),
    d = n(951516),
    f = n(633605),
    _ = n(393655),
    p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    m = /^'([^]*?)'?$/,
    g = /''/g,
    E = /[a-zA-Z]/;
function b(e, t, n) {
    (0, d.Z)(2, arguments);
    var m,
        g,
        b,
        O,
        v,
        I,
        T,
        S,
        A,
        C,
        N,
        R,
        P,
        D,
        w,
        L,
        x,
        M,
        k = String(t),
        j = (0, f.j)(),
        U = null != (m = null != (g = null == n ? void 0 : n.locale) ? g : j.locale) ? m : _.Z,
        G = (0, u.Z)(
            null !=
                (b =
                    null !=
                    (O =
                        null !=
                        (v =
                            null != (I = null == n ? void 0 : n.firstWeekContainsDate)
                                ? I
                                : null == n || null == (T = n.locale) || null == (S = T.options)
                                  ? void 0
                                  : S.firstWeekContainsDate)
                            ? v
                            : j.firstWeekContainsDate)
                        ? O
                        : null == (A = j.locale) || null == (C = A.options)
                          ? void 0
                          : C.firstWeekContainsDate)
                ? b
                : 1,
        );
    if (!(G >= 1 && G <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var B = (0, u.Z)(
        null !=
            (N =
                null !=
                (R =
                    null !=
                    (P =
                        null != (D = null == n ? void 0 : n.weekStartsOn)
                            ? D
                            : null == n || null == (w = n.locale) || null == (L = w.options)
                              ? void 0
                              : L.weekStartsOn)
                        ? P
                        : j.weekStartsOn)
                    ? R
                    : null == (x = j.locale) || null == (M = x.options)
                      ? void 0
                      : M.weekStartsOn)
            ? N
            : 0,
    );
    if (!(B >= 0 && B <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!U.localize) throw RangeError("locale must contain localize property");
    if (!U.formatLong) throw RangeError("locale must contain formatLong property");
    var Z = (0, a.default)(e);
    if (!(0, r.default)(Z)) throw RangeError("Invalid time value");
    var F = (0, l.Z)(Z),
        V = (0, i.Z)(Z, F),
        H = {
            firstWeekContainsDate: G,
            weekStartsOn: B,
            locale: U,
            _originalDate: Z,
        };
    return k
        .match(h)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, s.Z[t])(e, U.formatLong) : e;
        })
        .join("")
        .match(p)
        .map(function (r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i) return y(r);
            var a = o.Z[i];
            if (a)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, c.Do)(r) && (0, c.qp)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, c.Iu)(r) && (0, c.qp)(r, t, String(e)),
                    a(V, r, U.localize, H)
                );
            if (i.match(E))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return r;
        })
        .join("");
}
function y(e) {
    var t = e.match(m);
    return t ? t[1].replace(g, "'") : e;
}
