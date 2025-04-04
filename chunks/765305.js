n.d(t, {
    $I: () => d,
    Fc: () => y,
    Ku: () => c,
    VF: () => v,
    WX: () => f,
    X_: () => I,
    _U: () => m,
    fL: () => E,
    gG: () => s,
    gv: () => S,
    j8: () => p,
    nz: () => h,
    p: () => o,
    p1: () => u,
    pg: () => g,
    rC: () => b,
    sy: () => _,
    wm: () => a,
    zV: () => O,
    zw: () => l
}),
    n(47120);
var r = n(70956),
    i = n(981631);
let o = 100,
    a = 1000,
    s = 100,
    l = 'Guild Events Modal',
    c = '-1';
var u = (function (e) {
    return (e[(e.SCHEDULED = 1)] = 'SCHEDULED'), (e[(e.ACTIVE = 2)] = 'ACTIVE'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CANCELED = 4)] = 'CANCELED'), e;
})({});
let d = new Set([3, 4]);
var f = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.STAGE_INSTANCE = 1)] = 'STAGE_INSTANCE'), (e[(e.VOICE = 2)] = 'VOICE'), (e[(e.EXTERNAL = 3)] = 'EXTERNAL'), (e[(e.PRIME_TIME = 4)] = 'PRIME_TIME'), e;
    })({}),
    _ = (function (e) {
        return (e[(e.EVENT_START = 1)] = 'EVENT_START'), e;
    })({}),
    p = (function (e) {
        return (e[(e.PUBLIC = 1)] = 'PUBLIC'), (e[(e.GUILD_ONLY = 2)] = 'GUILD_ONLY'), e;
    })({});
let h = {
        1: i.d4z.GUILD_STAGE_VOICE,
        2: i.d4z.GUILD_VOICE
    },
    m = new Set([3]),
    g = new Set([1, 2]);
var E = (function (e) {
    return (e[(e.EVENT_INFO = 0)] = 'EVENT_INFO'), (e[(e.RSVP_LIST = 1)] = 'RSVP_LIST'), e;
})({});
let b = 100,
    y = 2 * r.Z.Millis.DAY,
    v = 12 * r.Z.Millis.HOUR,
    O = 4;
var I = (function (e) {
        return (e.NEW_EVENT = 'Upcoming Event Notice'), (e.EVENT_STARTING_SOON = 'Event Starting Soon Notice'), e;
    })({}),
    S = (function (e) {
        return (e[(e.UNINTERESTED = 0)] = 'UNINTERESTED'), (e[(e.INTERESTED = 1)] = 'INTERESTED'), e;
    })({});
