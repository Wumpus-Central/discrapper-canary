n.d(t, { A: () => l });
var i = n(985018);
function l(e) {
    return e > 0 && e % 7 == 0
        ? i.intl.formatToPlainString(i.t.EmoBD2, { weeks: e / 7 })
        : i.intl.formatToPlainString(i.t["k2UNz+"], { days: e });
}
