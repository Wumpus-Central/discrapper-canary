n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(626135),
    s = n(981631);
function o(e) {
    let { stickerPack: t, sourceSticker: o, analyticsLocations: l, analyticsLocation: u } = e;
    return (
        a.default.track(s.rMx.STICKER_PACK_VIEW_ALL, {
            sticker_id: null == o ? void 0 : o.id,
            sticker_pack_id: t.id,
            location: u,
            location_stack: l
        }),
        a.default.track(s.rMx.OPEN_MODAL, {
            type: s.jXE.STICKER_PACK_VIEW_ALL,
            location: u
        }),
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('39511').then(n.bind(n, 433550));
            return (n) =>
                (0, i.jsx)(e, {
                    stickerPack: t,
                    ...n
                });
        })
    );
}
