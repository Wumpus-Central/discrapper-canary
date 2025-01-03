n(47120);
var i = n(710845),
    r = n(914946),
    l = n(452426),
    a = n(981631);
let s = new i.Z(a.BZL);
t.Z = {
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
                args: { level: n, message: i }
            } = e;
            (0, r.bu)(t.transport);
            let l = t.application.id,
                a = ''.concat(l, ' - ').concat(i);
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
