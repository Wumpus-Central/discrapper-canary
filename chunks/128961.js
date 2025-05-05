n.d(t, { Z: () => o });
var r = function (e, t) {
        switch (e) {
            case 'P':
                return t.date({ width: 'short' });
            case 'PP':
                return t.date({ width: 'medium' });
            case 'PPP':
                return t.date({ width: 'long' });
            default:
                return t.date({ width: 'full' });
        }
    },
    i = function (e, t) {
        switch (e) {
            case 'p':
                return t.time({ width: 'short' });
            case 'pp':
                return t.time({ width: 'medium' });
            case 'ppp':
                return t.time({ width: 'long' });
            default:
                return t.time({ width: 'full' });
        }
    },
    a = function (e, t) {
        var n,
            a = e.match(/(P+)(p+)?/) || [],
            o = a[1],
            s = a[2];
        if (!s) return r(e, t);
        switch (o) {
            case 'P':
                n = t.dateTime({ width: 'short' });
                break;
            case 'PP':
                n = t.dateTime({ width: 'medium' });
                break;
            case 'PPP':
                n = t.dateTime({ width: 'long' });
                break;
            default:
                n = t.dateTime({ width: 'full' });
        }
        return n.replace('{{date}}', r(o, t)).replace('{{time}}', i(s, t));
    };
let o = {
    p: i,
    P: a
};
