n.d(t, { Z: () => a });
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
    o = function (e, t) {
        var n,
            o = e.match(/(P+)(p+)?/) || [],
            a = o[1],
            s = o[2];
        if (!s) return r(e, t);
        switch (a) {
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
        return n.replace('{{date}}', r(a, t)).replace('{{time}}', i(s, t));
    };
let a = {
    p: i,
    P: o
};
