n.d(t, {
    A: () => o,
});
var r = n(420970),
    i = n(287809),
    l = n(639621),
    a = n(613057),
    s = n(652215);
let o = {
    [s.e$_.GET_USER]: (0, r.T)(s.e$_.GET_USER, {
        scope: {
            [a.sm.ANY]: [a.W_, a.hj],
        },
        handler(e) {
            let {
                    args: { id: t },
                } = e,
                n = i.default.getUser(t);
            return null == n ? null : (0, l.A)(n);
        },
    }),
};
