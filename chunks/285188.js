n.d(t, { N: () => _ });
var a = n(975975),
    l = n.n(a),
    r = n(843472),
    s = n(451909),
    o = n(223863),
    i = n(734057),
    c = n(403362),
    u = n(381941);
let d = async (e, t, n) => {
        let a = i.A.getChannel(n);
        if (null == a) throw Error("Unable to find destination channel for message");
        let l = s.Ay.parse(a, t);
        return r.A.sendMessage(a.id, l, !1, {
            location: u.Hx.SHARE_CUSTOM_THEME,
            eagerDispatch: !1,
            sharedCustomTheme: e,
        });
    },
    _ = async (e, t, n) => {
        let a = (await Promise.all(e.map(o.pk))).filter(c.Vq);
        return l()(a.map(async (e) => d(t, n, e)));
    };
