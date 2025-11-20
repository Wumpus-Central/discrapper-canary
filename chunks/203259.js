n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(907862),
    s = n(435064),
    o = n(894694),
    c = n(39604),
    u = n(572720),
    d = n(388032);
function p(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: p } = e,
        f = (0, l.e7)([s.Z], () => {
            var e;
            let t = null == (e = s.Z.getLastClipsSession()) ? void 0 : e.newClipIds;
            return null == t ? null : s.Z.getClips().filter((e) => t.includes(e.id))[0];
        }),
        h = (0, u.l)(f),
        g = i.useCallback(() => {
            (0, c.eL)();
        }, []);
    return null == f
        ? null
        : f.type !== o.NJ.SCREENSHOT && f.type !== o.NJ.VOICE_CLIP && null != h
          ? (0, r.jsx)(a.Mb, {
                targetElementRef: { current: n },
                position: "bottom",
                title: d.intl.string(d.t.JugHO7),
                body: d.intl.format(d.t["+qxkzC"], { count: p.newClipIds.length }),
                assetUrl: h,
                disableMediaViewer: !0,
                caretConfig: { align: "center" },
                action: {
                    text: d.intl.string(d.t.tQPBml),
                    onClick: t,
                },
                onRequestClose: g,
            })
          : (0, r.jsx)(a.J2, {
                targetElementRef: { current: n },
                position: "bottom",
                title: d.intl.string(d.t.JugHO7),
                body: d.intl.format(d.t["+qxkzC"], { count: p.newClipIds.length }),
                graphic:
                    null != f.thumbnail
                        ? {
                              type: "image",
                              src: f.thumbnail,
                          }
                        : void 0,
                caretConfig: { align: "center" },
                actions: [
                    {
                        text: d.intl.string(d.t.tQPBml),
                        onClick: t,
                    },
                ],
                onRequestClose: g,
            });
}
