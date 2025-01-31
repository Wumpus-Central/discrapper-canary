n.d(t, { T: () => r });
var i = n(176540);
function r(e, t) {
    for (var n = '', i = 0; i < e.length; i++) {
        var r = e.charAt(i);
        if ('j' === r) {
            for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === r; ) s++, i++;
            var o = 1 + (1 & s),
                l = s < 2 ? 1 : 3 + (s >> 1),
                u = 'a',
                c = a(t);
            for (('H' == c || 'k' == c) && (l = 0); l-- > 0; ) n += u;
            for (; o-- > 0; ) n = c + n;
        } else 'J' === r ? (n += 'H') : (n += r);
    }
    return n;
}
function a(e) {
    var t,
        n = e.hourCycle;
    if ((void 0 === n && e.hourCycles && e.hourCycles.length && (n = e.hourCycles[0]), n))
        switch (n) {
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
    var r = e.language;
    return 'root' !== r && (t = e.maximize().region), (i._[t || ''] || i._[r || ''] || i._[''.concat(r, '-001')] || i._['001'])[0];
}
