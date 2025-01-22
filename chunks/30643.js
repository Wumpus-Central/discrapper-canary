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
    p = n(822746),
    g = n(753335),
    f = n(567481),
    _ = n(498164),
    E = n(111097),
    I = n(908711),
    C = n(197941),
    N = n(462414),
    v = n(662194),
    S = n(188861);
let T = {
        ...l.A,
        ...d.Z,
        ...u.Z,
        ...m.Z,
        ...p.Z,
        ...g.Z,
        ...f.Z,
        ..._.Z,
        ...E.Z,
        ...C.Z,
        ...v.Z,
        ...N.Z,
        ...h.Z,
        ...I.Z
    },
    b = {
        ...a.Z,
        ...o.M,
        ...c.n
    };
t.Z = {
    server: s.Z,
    commands: T,
    events: b,
    stores: [i.Z],
    transports: [S.Z],
    registerTransportsForEmbeddedPlatform: function () {
        r.ZP.ensureModule('discord_rpc').then(() => {
            for (let e of [n(178318).Z, n(967351).Z]) s.Z.registerTransport(e);
        });
    }
};
