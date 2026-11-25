var l = t(582128),
    s = t(855986),
    a = t(267102),
    i = t(309010),
    r = t(652215);
let o = l.createContext(void 0);
t.d(
    n,
    {},
    {
        I: function (e) {
            let { guildId: n, context: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = l.useContext(o),
                c = void 0 !== e ? e : u,
                d = (0, a.Us)(),
                m = (0, s.bG)([i.Ay], () => i.Ay.getChannelId(n), [n]);
            return void 0 !== c ? c : (t ?? d) === r.BRT.POPOUT ? null : (m ?? null);
        },
        j: o,
    },
);
