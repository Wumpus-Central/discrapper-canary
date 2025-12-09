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
    p = n(393655),
    _ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    h = /^'([^]*?)'?$/,
    g = /''/g,
    E = /[a-zA-Z]/;
function b(e, t, n) {
    (0, d.Z)(2, arguments);
    var h,
        g,
        b,
        O,
        v,
        S,
        I,
        T,
        A,
        C,
        N,
        P,
        R,
        D,
        w,
        x,
        L,
        j,
        M = String(t),
        k = (0, f.j)(),
        U = null != (h = null != (g = null == n ? void 0 : n.locale) ? g : k.locale) ? h : p.Z,
        G = (0, u.Z)(
            null !=
                (b =
                    null !=
                    (O =
                        null !=
                        (v =
                            null != (S = null == n ? void 0 : n.firstWeekContainsDate)
                                ? S
                                : null == n || null == (I = n.locale) || null == (T = I.options)
                                  ? void 0
                                  : T.firstWeekContainsDate)
                            ? v
                            : k.firstWeekContainsDate)
                        ? O
                        : null == (A = k.locale) || null == (C = A.options)
                          ? void 0
                          : C.firstWeekContainsDate)
                ? b
                : 1,
        );
    if (!(G >= 1 && G <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var Z = (0, u.Z)(
        null !=
            (N =
                null !=
                (P =
                    null !=
                    (R =
                        null != (D = null == n ? void 0 : n.weekStartsOn)
                            ? D
                            : null == n || null == (w = n.locale) || null == (x = w.options)
                              ? void 0
                              : x.weekStartsOn)
                        ? R
                        : k.weekStartsOn)
                    ? P
                    : null == (L = k.locale) || null == (j = L.options)
                      ? void 0
                      : j.weekStartsOn)
            ? N
            : 0,
    );
    if (!(Z >= 0 && Z <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!U.localize) throw RangeError("locale must contain localize property");
    if (!U.formatLong) throw RangeError("locale must contain formatLong property");
    var B = (0, a.default)(e);
    if (!(0, r.default)(B)) throw RangeError("Invalid time value");
    var F = (0, l.Z)(B),
        V = (0, i.Z)(B, F),
        H = {
            firstWeekContainsDate: G,
            weekStartsOn: Z,
            locale: U,
            _originalDate: B,
        };
    return M.match(m)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, s.Z[t])(e, U.formatLong) : e;
        })
        .join("")
        .match(_)
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
    var t = e.match(h);
    return t ? t[1].replace(g, "'") : e;
}
