r.d(n, {
    L_: function () {
        return d;
    },
    N: function () {
        return u;
    },
    gl: function () {
        return c;
    },
    xS: function () {
        return l;
    },
    yP: function () {
        return s;
    }
});
var i = r(47120);
var a = r(149765),
    o = r(981631);
let s = a.$e(o.Plq.MANAGE_CHANNELS, o.Plq.MUTE_MEMBERS, o.Plq.MOVE_MEMBERS);
a.$e(o.Plq.MANAGE_CHANNELS, o.Plq.MANAGE_ROLES);
let l = new Set([o.Plq.SPEAK, o.Plq.REQUEST_TO_SPEAK, o.Plq.USE_VAD]),
    u = a.$e(s, o.Plq.MANAGE_ROLES),
    c = a.$e(o.Plq.CONNECT, o.Plq.VIEW_CHANNEL),
    d = a.$e(c, o.Plq.READ_MESSAGE_HISTORY, o.Plq.REQUEST_TO_SPEAK, o.Plq.SPEAK, o.Plq.USE_VAD);
