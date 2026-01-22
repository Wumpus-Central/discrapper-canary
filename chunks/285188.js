r.d(t, { N: () => f }), r(65821), r(896048);
var n = r(975975),
    a = r.n(n),
    l = r(843472),
    o = r(451909),
    s = r(223863),
    c = r(734057),
    i = r(403362),
    u = r(381941);
let d = async (e, t, r) => {
        let n = c.A.getChannel(r);
        if (null == n) throw Error("Unable to find destination channel for message");
        let a = o.Ay.parse(n, t);
        return l.A.sendMessage(n.id, a, !1, {
            location: u.Hx.SHARE_CUSTOM_THEME,
            eagerDispatch: !1,
            sharedCustomTheme: e,
        });
    },
    f = async (e, t, r) => {
        let n = (await Promise.all(e.map(s.pk))).filter(i.Vq);
        return a()(n.map(async (e) => d(t, r, e)));
    };
