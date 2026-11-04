var i = n(887924);
let r = new (n(626584).A)("codedLinkQueue"),
    a = new i.A({ concurrency: 5, intervalCap: 10, interval: 2e3 });
(a.on("add", () => {
    a.size > 0 && r.warn("Message link fetch queue backlog:", a.size);
}),
    n.d(
        t,
        {},
        {
            f: function (e) {
                a.add(e);
            },
        },
    ));
