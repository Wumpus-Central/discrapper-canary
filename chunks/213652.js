n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(435064),
    o = n(39604),
    c = n(441167),
    d = n(871499),
    u = n(199902),
    h = n(314897),
    p = n(358221),
    m = n(354459),
    f = n(388032),
    g = n(638411);
function C(e) {
    let { channel: t } = e,
        n = (0, r.e7)([p.Z], () => p.Z.getSelectedParticipant(t.id)),
        C = (null == n ? void 0 : n.type) === m.fO.STREAM,
        x = (0, r.e7)([u.Z], () => (C ? u.Z.getActiveStreamForStreamKey(n.id) : null)),
        { ignoreSenderPreference: v } = c.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
        { viewerClippingAllowed: _, isAtMaxSavingClipOperations: I } = (0, r.cj)([s.Z], () => ({
            viewerClippingAllowed: null != x && (s.Z.isViewerClippingAllowedForUser(x.ownerId) || v),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
        })),
        E = s.Z.getSettings().clipsEnabled,
        b = (null == x ? void 0 : x.ownerId) === h.default.getId(),
        Z = !E || !(b || _) || I || null == n,
        S = l.useCallback(
            (e) =>
                (0, i.jsx)(a.CameraIcon, {
                    ...e,
                    color: 'currentColor'
                }),
            []
        );
    return (0, i.jsx)(d.Z, {
        className: g.actionBarButton,
        onClick: () => {
            !Z && (b ? (0, o.C1)() : (0, o.C1)(n.id));
        },
        disabled: Z,
        iconComponent: S,
        label: null == x ? f.intl.string(f.t.eg5qtb) : b || _ ? (E ? (I ? void 0 : f.intl.string(f.t.U4URzM)) : f.intl.string(f.t.wSS1yM)) : f.intl.string(f.t.aRifJS),
        grow: !1
    });
}
