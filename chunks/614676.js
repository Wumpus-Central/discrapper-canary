n.d(t, { A: () => o }), n(896048);
var r = n(626584),
    i = n(90924),
    l = n(629471),
    a = n(652215);
let s = new r.A(a.meB),
    o = {
        [a.e$_.CAPTURE_LOG]: {
            validation: (e) =>
                (0, l.A)(e)
                    .required()
                    .keys({
                        level: e.string().max(10).required(),
                        message: e.string().max(1000).required(),
                    }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: r },
                } = e;
                (0, i.lG)(t.transport);
                let l = t.application.id,
                    a = "".concat(l, " - ").concat(r);
                switch (n) {
                    case "log":
                        s.log(a);
                        break;
                    case "warn":
                        s.warn(a);
                        break;
                    case "debug":
                        s.verbose(a);
                        break;
                    case "info":
                        s.info(a);
                        break;
                    case "error":
                        s.error(a);
                }
            },
        },
    };
