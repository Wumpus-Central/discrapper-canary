n(47120);
var i = n(232567),
    r = n(996106),
    l = n(452426),
    a = n(863141),
    s = n(186901),
    o = n(981631);
t.Z = {
    [o.Etm.GET_USER]: {
        scope: s.lH,
        validation: (e) => (0, l.Z)(e).required().keys({ id: e.string().required() }),
        handler(e) {
            let {
                args: { id: t }
            } = e;
            return (0, i.PR)(t)
                .then(a.Z)
                .catch(() => {
                    throw new r.Z({ errorCode: o.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
                });
        }
    }
};
