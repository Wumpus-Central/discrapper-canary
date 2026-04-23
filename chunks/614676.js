n.d(t, { A: () => o });
var i = n(626584),
    r = n(90924),
    a = n(629471),
    l = n(652215);
let s = new i.A(l.meB),
    o = {
        [l.e$_.CAPTURE_LOG]: {
            validation: (e) =>
                (0, a.A)(e)
                    .required()
                    .keys({ level: e.string().max(10).required(), message: e.string().max(1e3).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: i },
                } = e;
                (0, r.lG)(t.transport);
                let a = t.application.id,
                    l = `${a} - ${i}`;
                switch (n) {
                    case "log":
                        s.log(l);
                        break;
                    case "warn":
                        s.warn(l);
                        break;
                    case "debug":
                        s.verbose(l);
                        break;
                    case "info":
                        s.info(l);
                        break;
                    case "error":
                        s.error(l);
                }
            },
        },
    };
