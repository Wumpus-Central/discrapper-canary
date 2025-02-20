n.d(t, { Z: () => s }), n(47120);
var r = n(710845),
    i = n(914946),
    l = n(452426),
    o = n(981631);
let a = new r.Z(o.BZL),
    s = {
        [o.Etm.CAPTURE_LOG]: {
            validation: (e) =>
                (0, l.Z)(e)
                    .required()
                    .keys({
                        level: e.string().max(10).required(),
                        message: e.string().max(1000).required()
                    }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: r }
                } = e;
                (0, i.bu)(t.transport);
                let l = t.application.id,
                    o = ''.concat(l, ' - ').concat(r);
                switch (n) {
                    case 'log':
                        a.log(o);
                        break;
                    case 'warn':
                        a.warn(o);
                        break;
                    case 'debug':
                        a.verbose(o);
                        break;
                    case 'info':
                        a.info(o);
                        break;
                    case 'error':
                        a.error(o);
                }
            }
        }
    };
