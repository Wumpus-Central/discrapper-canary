n.d(t, { Z: () => s });
var r = n(45792),
    i = n(594174),
    l = n(863141),
    o = n(186901),
    a = n(981631);
let s = {
    [a.Etm.GET_USER]: (0, r.S)(a.Etm.GET_USER, {
        scope: {
            [o.Gp.ANY]: [o.b_, o.lH]
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
