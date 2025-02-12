n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(435064),
    o = n(39604),
    c = n(441167),
    d = n(871499),
    u = n(199902),
    h = n(314897),
    p = n(358221),
    m = n(354459),
    f = n(388032),
    g = n(717688);
function _(e) {
    let { channel: t } = e,
        n = (0, a.e7)([p.Z], () => p.Z.getSelectedParticipant(t.id)),
        _ = (null == n ? void 0 : n.type) === m.fO.STREAM,
        C = (0, a.e7)([u.Z], () => (_ ? u.Z.getActiveStreamForStreamKey(n.id) : null)),
        { ignoreSenderPreference: x } = c.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
        { viewerClippingAllowed: v, isAtMaxSavingClipOperations: E } = (0, a.cj)([s.Z], () => ({
            viewerClippingAllowed: null != C && (s.Z.isViewerClippingAllowedForUser(C.ownerId) || x),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
        })),
        I = s.Z.getSettings().clipsEnabled,
        b = (null == C ? void 0 : C.ownerId) === h.default.getId(),
        Z = !I || !(b || v) || E || null == n,
        N = l.useCallback(
            (e) =>
                (0, i.jsx)(r.xmR, {
                    ...e,
                    color: 'currentColor'
                }),
            []
        );
    return (0, i.jsx)(d.Z, {
        className: g.actionBarButton,
        onClick: () => {
            Z || (b ? (0, o.C1)() : (0, o.C1)(n.id));
        },
        disabled: Z,
        iconComponent: N,
        label: null == C ? f.intl.string(f.t.eg5qtb) : b || v ? (I ? (E ? void 0 : f.intl.string(f.t.U4URzM)) : f.intl.string(f.t.wSS1yM)) : f.intl.string(f.t.aRifJS),
        grow: !1
    });
}
