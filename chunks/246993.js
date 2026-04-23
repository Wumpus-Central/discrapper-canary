a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(834730),
    r = a(513520),
    o = a(209390),
    d = a(734057),
    c = a(303054),
    u = a(907360),
    m = a(505206);
let h = [
    {
        key: "channel",
        cellClassName: u._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, n.jsx)(s.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: u.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function p() {
    l.useEffect(() => {
        (0, r.I)();
    }, []);
    let e = (0, i.yK)([o.A, d.A], () =>
        o.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: d.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, n.jsx)(c.A, { className: m.nd, columns: h, rowClassName: u.nM, data: e });
}
