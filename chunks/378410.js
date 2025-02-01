n.d(t, { Z: () => o }), n(47120);
var i = n(710845),
    l = n(914946),
    r = n(452426),
    a = n(981631);
let s = new i.Z(a.BZL),
    o = {
        [a.Etm.CAPTURE_LOG]: {
            validation: (e) =>
                (0, r.Z)(e)
                    .required()
                    .keys({
                        level: e.string().max(10).required(),
                        message: e.string().max(1000).required()
                    }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: i }
                } = e;
                (0, l.bu)(t.transport);
                let r = t.application.id,
                    a = ''.concat(r, ' - ').concat(i);
                switch (n) {
                    case 'log':
                        s.log(a);
                        break;
                    case 'warn':
                        s.warn(a);
                        break;
                    case 'debug':
                        s.verbose(a);
                        break;
                    case 'info':
                        s.info(a);
                        break;
                    case 'error':
                        s.error(a);
                }
            }
        }
    };
