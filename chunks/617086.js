n.d(t, { A: () => o });
var i = n(311907),
    l = n(205184),
    a = n(287809),
    r = n(403362),
    s = n(939496);
function o(e) {
    let { userId: t } = (0, s.E)(),
        n = (0, l.s)(e);
    return (0, i.yK)([a.default], () => {
        let e = a.default.getCurrentUser(),
            i = new Set();
        return (
            n.forEach((e) => {
                i.add(e.author_id),
                    e.participants.forEach((e) => {
                        i.add(e);
                    });
            }),
            Array.from(i)
                .filter((n) => n !== e?.id && n !== t)
                .map((e) => a.default.getUser(e))
                .filter(r.Vq)
        );
    }, [n, t]);
}
