r.d(n, {
    LM: function () {
        return E;
    },
    Rf: function () {
        return y;
    },
    UW: function () {
        return g;
    },
    to: function () {
        return m;
    }
});
var i = r(697),
    a = r(165352);
let o = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    s = /^(\d{4})-(\d{2})-(\d{2})$/,
    l = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    u = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/,
    c = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,
    d = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/,
    f = ['hours', 'minutes', 'seconds'],
    p = ['years', 'months', 'weeks', 'days', ...f];
function h(e, n) {
    var r;
    let i = e.match(c);
    if (!i) throw Error('Invalid ISO 8601 date time string: ' + e);
    let a = new $35ea8db9cb2ccb90$export$d3b7288e7994edea(_(i[1], 1, 9999), _(i[2], 1, 12), 1, n, 0, i[4] ? _(i[4], 0, 23) : 0, i[5] ? _(i[5], 0, 59) : 0, i[6] ? _(i[6], 0, 59) : 0, i[7] ? 1000 * _(i[7], 0, 1 / 0) : 0);
    return (a.day = _(i[3], 0, a.calendar.getDaysInMonth(a))), i[8] && (a.offset = 3600000 * _(i[8], -23, 23) + 60000 * _(null !== (r = i[9]) && void 0 !== r ? r : '0', 0, 59)), $11d87f3f76e88657$export$538b00033cc11c75(a, n);
}
function _(e, n, r) {
    let i = Number(e);
    if (i < n || i > r) throw RangeError(`Value out of range: ${n} <= ${i} <= ${r}`);
    return i;
}
function m(e) {
    return `${String(e.hour).padStart(2, '0')}:${String(e.minute).padStart(2, '0')}:${String(e.second).padStart(2, '0')}${e.millisecond ? String(e.millisecond / 1000).slice(1) : ''}`;
}
function g(e) {
    let n = (0, i.Mw)(e, new a.IQ());
    return `${String(n.year).padStart(4, '0')}-${String(n.month).padStart(2, '0')}-${String(n.day).padStart(2, '0')}`;
}
function E(e) {
    return `${g(e)}T${m(e)}`;
}
function v(e) {
    let n = 0 > Math.sign(e) ? '-' : '+',
        r = Math.floor((e = Math.abs(e)) / 3600000),
        i = (e % 3600000) / 60000;
    return `${n}${String(r).padStart(2, '0')}:${String(i).padStart(2, '0')}`;
}
function y(e) {
    return `${E(e)}${v(e.offset)}[${e.timeZone}]`;
}
