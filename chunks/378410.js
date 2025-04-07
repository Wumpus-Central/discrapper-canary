n.d(t, { Z: () => s }), n(388685);
var r = n(710845),
    i = n(914946),
    l = n(452426),
    a = n(981631);
let o = new r.Z(a.BZL),
    s = {
        [a.Etm.CAPTURE_LOG]: {
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
                    a = ''.concat(l, ' - ').concat(r);
                switch (n) {
                    case 'log':
                        o.log(a);
                        break;
                    case 'warn':
                        o.warn(a);
                        break;
                    case 'debug':
                        o.verbose(a);
                        break;
                    case 'info':
                        o.info(a);
                        break;
                    case 'error':
                        o.error(a);
                }
            }
        }
    };
