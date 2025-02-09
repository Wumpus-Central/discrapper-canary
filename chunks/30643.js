n.d(t, { Z: () => A }), n(47120);
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
    p = n(753335),
    g = n(567481),
    _ = n(498164),
    f = n(111097),
    E = n(908711),
    I = n(197941),
    C = n(462414),
    v = n(662194),
    N = n(188861);
let T = {
        ...r.A,
        ...d.Z,
        ...u.Z,
        ...m.Z,
        ...p.Z,
        ...g.Z,
        ..._.Z,
        ...f.Z,
        ...I.Z,
        ...v.Z,
        ...C.Z,
        ...h.Z,
        ...E.Z
    },
    S = {
        ...a.Z,
        ...o.M,
        ...c.n
    },
    A = {
        server: s.Z,
        commands: T,
        events: S,
        stores: [i.Z],
        transports: [N.Z],
        registerTransportsForEmbeddedPlatform: function () {
            l.ZP.ensureModule('discord_rpc').then(() => {
                for (let e of [n(178318).Z, n(967351).Z]) s.Z.registerTransport(e);
            });
        }
    };
