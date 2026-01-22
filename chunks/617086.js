n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(311907),
    l = n(205184),
    i = n(287809),
    a = n(403362),
    s = n(939496);

function o(e) {
    let { userId: t } = (0, s.E)(),
        n = (0, l.s)(e);
    return (0, r.yK)([i.default], () => {
        let e = i.default.getCurrentUser(),
            r = new Set();
        return (
            n.forEach((e) => {
                r.add(e.author_id),
                    e.participants.forEach((e) => {
                        r.add(e);
                    });
            }),
            Array.from(r)
                .filter((n) => n !== (null == e ? void 0 : e.id) && n !== t)
                .map((e) => i.default.getUser(e))
                .filter(a.Vq)
        );
    }, [n, t]);
}
