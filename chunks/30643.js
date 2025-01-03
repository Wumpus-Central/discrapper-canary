n(47120);
var i = n(237997),
    r = n(998502),
    l = n(576027),
    a = n(13838),
    s = n(812967),
    o = n(350085),
    c = n(910484),
    d = n(443952),
    u = n(266572),
    h = n(177698),
    m = n(121826),
    p = n(753335),
    g = n(567481),
    f = n(498164),
    _ = n(111097),
    E = n(908711),
    I = n(197941),
    C = n(462414),
    N = n(662194),
    v = n(188861);
let S = {
        ...l.A,
        ...d.Z,
        ...u.Z,
        ...m.Z,
        ...p.Z,
        ...g.Z,
        ...f.Z,
        ..._.Z,
        ...I.Z,
        ...N.Z,
        ...C.Z,
        ...h.Z,
        ...E.Z
    },
    T = {
        ...a.Z,
        ...o.M,
        ...c.n
    };
t.Z = {
    server: s.Z,
    commands: S,
    events: T,
    stores: [i.Z],
    transports: [v.Z],
    registerTransportsForEmbeddedPlatform: function () {
        r.ZP.ensureModule('discord_rpc').then(() => {
            for (let e of [n(178318).Z, n(967351).Z]) s.Z.registerTransport(e);
        });
    }
};
