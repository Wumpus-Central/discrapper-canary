r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(626135),
    s = r(981631);
function l(e) {
    let { stickerPack: n, sourceSticker: l, analyticsLocations: u, analyticsLocation: c } = e;
    return (
        o.default.track(s.rMx.STICKER_PACK_VIEW_ALL, {
            sticker_id: null == l ? void 0 : l.id,
            sticker_pack_id: n.id,
            location: c,
            location_stack: u
        }),
        o.default.track(s.rMx.OPEN_MODAL, {
            type: s.jXE.STICKER_PACK_VIEW_ALL,
            location: c
        }),
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('39511').then(r.bind(r, 433550));
            return (r) =>
                (0, i.jsx)(e, {
                    stickerPack: n,
                    ...r
                });
        })
    );
}
