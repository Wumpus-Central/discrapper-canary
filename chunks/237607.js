n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(274372),
    o = n(372684),
    c = n(226421),
    d = n(461583);
function u() {
    let e = (0, s.yK)([r.A], () => {
        let e = r.A.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : r.A.getClips()
                  .slice(0, 4)
                  .filter((t) => e.includes(t.id));
    });
    return (0, i.jsx)("div", {
        className: a()(d.vH, {
            [d.gb]: 1 === e.length,
            [d.$d]: 2 === e.length,
            [d.gS]: 3 === e.length,
            [d.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === o.nQ.VOICE_CLIP
                        ? (0, i.jsx)(c.A, { className: d.xn }, e.id)
                        : (0, i.jsx)("img", { alt: "", className: d.xn, src: e.thumbnail }, e.id)
                    : (0, i.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
