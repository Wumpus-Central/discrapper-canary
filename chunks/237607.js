n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(403362),
    o = n(274372),
    c = n(372684),
    d = n(226421),
    u = n(732774);
function h() {
    let e = (0, s.yK)([o.A], () => {
        let e = o.A.getLastClipsSession()?.newClipIds;
        return null == e
            ? []
            : o.A.getClipIds()
                  .slice(0, 4)
                  .filter((t) => e.includes(t))
                  .map((e) => o.A.getClipById(e))
                  .filter(r.Vq);
    });
    return (0, i.jsx)("div", {
        className: a()(u.vH, {
            [u.gb]: 1 === e.length,
            [u.$d]: 2 === e.length,
            [u.gS]: 3 === e.length,
            [u.hA]: e.length >= 4,
        }),
        children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
                null != e
                    ? e.type === c.nQ.VOICE_CLIP
                        ? (0, i.jsx)(d.A, { className: u.xn }, e.id)
                        : (0, i.jsx)("img", { alt: "", className: u.xn, src: e.thumbnail }, e.id)
                    : (0, i.jsx)("div", {}, `placeholder-${t}`),
            )
            .reverse(),
    });
}
