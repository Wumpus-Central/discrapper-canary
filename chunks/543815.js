n.d(t, { Z: () => s });
var r = n(45792),
    i = n(594174),
    l = n(863141),
    a = n(186901),
    o = n(981631);
let s = {
    [o.Etm.GET_USER]: (0, r.S)(o.Etm.GET_USER, {
        scope: {
            [a.Gp.ANY]: [a.b_, a.lH]
        },
        handler(e) {
            let {
                    args: { id: t }
                } = e,
                n = i.default.getUser(t);
            return null == n ? null : (0, l.Z)(n);
        }
    })
};
