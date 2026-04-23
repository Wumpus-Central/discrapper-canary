a.d(t, { N: () => c });
var s = a(975975),
    n = a.n(s),
    l = a(843472),
    r = a(451909),
    i = a(223863),
    _ = a(734057),
    A = a(403362),
    o = a(381941);
let u = async (e, t, a) => {
        let s = _.A.getChannel(a);
        if (null == s) throw Error("Unable to find destination channel for message");
        let n = r.Ay.parse(s, t);
        return l.A.sendMessage(s.id, n, !1, {
            location: o.Hx.SHARE_CUSTOM_THEME,
            eagerDispatch: !1,
            sharedCustomTheme: e,
        });
    },
    c = async (e, t, a) => {
        let s = (await Promise.all(e.map(i.pk))).filter(A.Vq);
        return n()(s.map(async (e) => u(t, a, e)));
    };
