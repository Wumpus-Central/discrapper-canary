n.d(t, { A: () => o });
var i = n(17928),
    a = n(205184),
    l = n(287809),
    s = n(403362),
    r = n(939496);
function o(e) {
    let { userId: t } = (0, r.E)(),
        n = (0, a.s)(e);
    return (0, i.yK)([l.default], () => {
        let e = l.default.getCurrentUser(),
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
                .map((e) => l.default.getUser(e))
                .filter(s.Vq)
        );
    }, [n, t]);
}
