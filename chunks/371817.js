var n = r(593206),
    o = r(183631),
    a = r(733076),
    i = r(689582),
    u = r(909816),
    l = r(114727),
    s = r(377482),
    p = r(797674),
    c = r(208009),
    f = r(47331),
    d = r(980320),
    h = r(862711),
    v = r(678270),
    b = r(476615),
    g = r(430075);
e.exports = function (e, t, r, y, w, m, _) {
    var O = b(e, r),
        x = b(t, r),
        C = _.get(x);
    if (C) return void n(e, r, C);
    var j = m ? m(O, x, r + "", e, t, _) : void 0,
        E = void 0 === j;
    if (E) {
        var M = s(x),
            S = !M && c(x),
            k = !M && !S && v(x);
        (j = x),
            M || S || k
                ? s(O)
                    ? (j = O)
                    : p(O)
                      ? (j = i(O))
                      : S
                        ? ((E = !1), (j = o(x, !0)))
                        : k
                          ? ((E = !1), (j = a(x, !0)))
                          : (j = [])
                : h(x) || l(x)
                  ? ((j = O), l(O) ? (j = g(O)) : (!d(O) || f(O)) && (j = u(x)))
                  : (E = !1);
    }
    E && (_.set(x, j), w(j, x, y, m, _), _.delete(x)), n(e, r, j);
};
