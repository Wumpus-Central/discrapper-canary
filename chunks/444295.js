n.d(t, {
    A: () => o,
    o: () => u
});
var i = n(615287),
    r = n(77498),
    a = n(626135),
    s = n(981631),
    o = (function (e) {
        return (e.OOP = 'oop'), (e.OOP_GAME = 'oop game'), (e.LEGACY = 'legacy'), (e.LEGACY_GAME = 'legacy game'), e;
    })({});
function l(e) {
    switch (e) {
        case 'oop':
        case 'oop game':
        default:
            return 'overlay toggled - global';
        case 'legacy':
        case 'legacy game':
            return 'overlay toggled - game';
    }
}
function u(e, t, o) {
    var u, c, d;
    let f = null != o ? r.Z.getDetectableGame(o) : null,
        { default: _ } = n(371651),
        p = null !== (u = null == _ ? void 0 : _.getMostRecentOverlayRenderMethod()) && void 0 !== u ? u : void 0,
        h = null != p ? i.gl[p] : void 0;
    a.default.track(s.rMx.OVERLAY_TOGGLED, {
        enabled: e,
        setting_type: l(t),
        client_setting_type: t,
        application_id: null !== (c = null == f ? void 0 : f.id) && void 0 !== c ? c : void 0,
        application_name: null !== (d = null == f ? void 0 : f.name) && void 0 !== d ? d : void 0,
        most_recent_overlay_render_method: h
    });
}
