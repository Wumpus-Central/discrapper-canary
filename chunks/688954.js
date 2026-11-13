(n(323874), n(14289), n(35956));
var r = n(649121);
n.d(
    t,
    {},
    {
        h: async function (e, t) {
            let {
                query: n,
                json: s,
                headers: i,
                ...l
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            function a(e) {
                let { ticket: r, baseUrl: a } = e,
                    u = `${a}${t}?${new URLSearchParams({ ticket: r, ...n })}`;
                return void 0 === s
                    ? fetch(u, { ...l, headers: i })
                    : fetch(u, {
                          ...l,
                          headers: { ...i, "content-type": "application/json" },
                          body: JSON.stringify(s),
                      });
            }
            let u = await a(await (0, r.BK)(e));
            return 401 !== u.status ? u : ((0, r.yn)(e), a(await (0, r.BK)(e)));
        },
    },
);
