n.d(t, { O: () => f }), n(415506), n(388685);
var r = n(991637),
    a = n.n(r),
    o = n(904245),
    l = n(957730),
    s = n(987509),
    i = n(592125),
    c = n(823379),
    u = n(959517);
let d = async (e, t, n) => {
        let r = i.Z.getChannel(n);
        if (null == r) throw Error("Unable to find destination channel for message");
        let a = l.ZP.parse(r, t);
        return o.Z.sendMessage(r.id, a, !1, {
            location: u.dy.SHARE_CUSTOM_THEME,
            eagerDispatch: !1,
            sharedCustomTheme: e,
        });
    },
    f = async (e, t, n) => {
        let r = (await Promise.all(e.map(s.qx))).filter(c.lm);
        return a()(r.map(async (e) => d(t, n, e)));
    };
