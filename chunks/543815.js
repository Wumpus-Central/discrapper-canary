n.d(t, { Z: () => c }), n(47120);
var i = n(232567),
    l = n(996106),
    r = n(452426),
    a = n(863141),
    s = n(186901),
    o = n(981631);
let c = {
    [o.Etm.GET_USER]: {
        scope: s.lH,
        validation: (e) => (0, r.Z)(e).required().keys({ id: e.string().required() }),
        handler(e) {
            let {
                args: { id: t }
            } = e;
            return (0, i.PR)(t)
                .then(a.Z)
                .catch(() => {
                    throw new l.Z({ errorCode: o.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
                });
        }
    }
};
