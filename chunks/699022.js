n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(688810),
    o = n(274372),
    d = n(572164),
    c = n(399925),
    u = n(670470),
    h = n(709562),
    A = n(616356),
    g = n(961350),
    m = n(313961),
    p = n(384059),
    _ = n(806931),
    x = n(985018),
    f = n(342910);
function E(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, r.Ay)(),
        E = (0, s.bG)([m.A], () => m.A.getSelectedParticipant(t.id)),
        C = E?.type === _.lp.STREAM,
        I = (0, s.bG)([A.A], () => (C ? A.A.getActiveStreamForStreamKey(E.id) : null)),
        { ignoreSenderPreference: S } = u.A.useExperiment(
            { location: "ActionBarClipsButton" },
            { autoTrackExposure: !1 },
        ),
        { viewerClippingAllowed: b, isAtMaxSavingClipOperations: N } = (0, s.cf)([o.A], () => ({
            viewerClippingAllowed: null != I && (o.A.isViewerClippingAllowedForUser(I.ownerId) || S),
            isAtMaxSavingClipOperations: o.A.getIsAtMaxSaveClipOperations(),
        })),
        T = (0, d.Et)(),
        j = I?.ownerId === g.default.getId(),
        v = !T || !(j || b) || N || null == E,
        y = l.useCallback((e) => (0, i.jsx)(a.xpe, { ...e, color: "currentColor" }), []);
    return (0, i.jsx)(h.A, {
        className: f.g,
        onClick: () => {
            v || ((0, p.X)(n, p.O.CLIP), j ? (0, c.l0)() : (0, c.yd)(E.id));
        },
        disabled: v,
        iconComponent: y,
        label:
            null == I
                ? x.intl.string(x.t.eg5qtV)
                : j || b
                  ? T
                      ? N
                          ? void 0
                          : x.intl.string(x.t.U4URzP)
                      : x.intl.string(x.t.wSS1yN)
                  : x.intl.string(x.t.aRifJX),
        grow: !1,
    });
}
