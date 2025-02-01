n.d(t, { Z: () => x }), n(47120);
var i = n(237997),
    l = n(998502),
    r = n(576027),
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
    _ = n(567481),
    f = n(498164),
    E = n(111097),
    I = n(908711),
    C = n(197941),
    v = n(462414),
    N = n(662194),
    T = n(188861);
let S = {
        ...r.A,
        ...d.Z,
        ...u.Z,
        ...m.Z,
        ...p.Z,
        ...g.Z,
        ..._.Z,
        ...f.Z,
        ...E.Z,
        ...C.Z,
        ...N.Z,
        ...v.Z,
        ...h.Z,
        ...I.Z
    },
    Z = {
        ...a.Z,
        ...o.M,
        ...c.n
    },
    x = {
        server: s.Z,
        commands: S,
        events: Z,
        stores: [i.Z],
        transports: [T.Z],
        registerTransportsForEmbeddedPlatform: function () {
            l.ZP.ensureModule('discord_rpc').then(() => {
                for (let e of [n(178318).Z, n(967351).Z]) s.Z.registerTransport(e);
            });
        }
    };
