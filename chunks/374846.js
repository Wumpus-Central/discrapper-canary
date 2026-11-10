var s = t(582128),
    i = t(855986),
    l = t(267102),
    a = t(309010),
    r = t(652215);
let o = s.createContext(void 0);
t.d(
    n,
    {},
    {
        I: function (e) {
            let { guildId: n, context: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = s.useContext(o),
                d = void 0 !== e ? e : c,
                u = (0, l.Us)(),
                m = (0, i.bG)([a.Ay], () => a.Ay.getChannelId(n), [n]);
            return void 0 !== d ? d : (t ?? u) === r.BRT.POPOUT ? null : (m ?? null);
        },
        j: o,
    },
);
