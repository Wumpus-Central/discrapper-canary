var i = n(730602),
    r = n(627363),
    a = n(587895),
    s = n(982844),
    l = n(197184),
    o = n(91242),
    d = n(967657),
    c = n(182025),
    u = n(700224),
    _ = n(165610);
let E = {
    [s.jv.SKIPPED]: c.xo.SKIPPED,
    [s.jv.CACHED]: c.xo.CACHED,
    [s.jv.IN_FLIGHT]: c.xo.IN_FLIGHT,
    [s.jv.FETCHED]: c.xo.OK,
};
function A(e, t) {
    return e.span(c.aY.CSP, async (e) => {
        let n = await (0, s.Ay)(t);
        e.setStatus(E[n]);
    });
}
n.d(
    t,
    {},
    {
        U: A,
        a: function (e, t, n) {
            let s = (0, _.VA)(t, n),
                E = null != o.A.getFrame(s) ? u.m : (0, d.U)(e, s, t, n);
            Promise.allSettled([
                E.span(c.aY.PROXY_TICKET, async (e) => {
                    let r = (0, l.A)(n),
                        { alreadyPrefetched: a } = await (0, i.M)(t, r, n.type);
                    a && e.setStatus(c.xo.PREFETCHED);
                }),
                A(E, t),
                E.span(c.aY.APPLICATION, async (e) => {
                    (a.A.isHydrated(t) && e.setStatus(c.xo.CACHED), await r.YY.fetchMany([t]));
                }),
            ]);
        },
    },
);
