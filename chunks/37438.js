n.d(t, { A: () => c });
var i = n(420970),
    r = n(795816),
    a = n(20015),
    l = n(636401),
    s = n(90924),
    o = n(592653),
    d = n(569475),
    u = n(652215);
let c = {
    [u.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, i.T)(u.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: o.WW,
        handler(e) {
            let { socket: t } = e;
            return (0, s.lG)(t.transport), (0, o.Y$)();
        },
    }),
    [u.e$_.REQUEST_PROXY_TICKET_REFRESH]: (0, i.T)(u.e$_.REQUEST_PROXY_TICKET_REFRESH, {
        scope: o.WW,
        async handler(e) {
            let { socket: t } = e;
            (0, s.lG)(t.transport);
            let n = (0, s.D2)(t.application);
            if (!(0, a.n)(t.application, u.gfo.EMBEDDED))
                throw new l.A(
                    { errorCode: u.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                    "This application cannot access this API",
                );
            let i = (0, d.A)();
            try {
                return { ticket: await (0, r.D2)(n, i?.id) };
            } catch (e) {
                throw new l.A({ errorCode: u.Lw6.UNKNOWN_ERROR }, "Failed to create proxy ticket");
            }
        },
    }),
};
