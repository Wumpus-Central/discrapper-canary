r.d(n, {
    T: function () {
        return a;
    }
});
var i = r(176540);
function a(e, n) {
    for (var r = '', i = 0; i < e.length; i++) {
        var a = e.charAt(i);
        if ('j' === a) {
            for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === a; ) s++, i++;
            var l = 1 + (1 & s),
                u = s < 2 ? 1 : 3 + (s >> 1),
                c = 'a',
                d = o(n);
            for (('H' == d || 'k' == d) && (u = 0); u-- > 0; ) r += c;
            for (; l-- > 0; ) r = d + r;
        } else 'J' === a ? (r += 'H') : (r += a);
    }
    return r;
}
function o(e) {
    var n,
        r = e.hourCycle;
    if ((void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r))
        switch (r) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw Error('Invalid hourCycle');
        }
    var a = e.language;
    return 'root' !== a && (n = e.maximize().region), (i._[n || ''] || i._[a || ''] || i._[''.concat(a, '-001')] || i._['001'])[0];
}
