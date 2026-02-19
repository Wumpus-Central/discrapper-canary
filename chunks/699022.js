"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(688810),
    o = n(274372),
    c = n(572164),
    d = n(399925),
    u = n(670470),
    h = n(709562),
    A = n(616356),
    p = n(961350),
    g = n(313961),
    m = n(384059),
    _ = n(806931),
    f = n(985018),
    x = n(342910);
function C(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, a.Ay)(),
        C = (0, l.bG)([g.A], () => g.A.getSelectedParticipant(t.id)),
        E = C?.type === _.lp.STREAM,
        I = (0, l.bG)([A.A], () => (E ? A.A.getActiveStreamForStreamKey(C.id) : null)),
        { ignoreSenderPreference: b } = u.A.useExperiment(
            { location: "ActionBarClipsButton" },
            { autoTrackExposure: !1 },
        ),
        { viewerClippingAllowed: N, isAtMaxSavingClipOperations: S } = (0, l.cf)([o.A], () => ({
            viewerClippingAllowed: null != I && (o.A.isViewerClippingAllowedForUser(I.ownerId) || b),
            isAtMaxSavingClipOperations: o.A.getIsAtMaxSaveClipOperations(),
        })),
        T = (0, c.Et)(),
        v = I?.ownerId === p.default.getId(),
        y = !T || !(v || N) || S || null == C,
        j = s.useCallback((e) => (0, i.jsx)(r.xpe, { ...e, color: "currentColor" }), []);
    return (0, i.jsx)(h.A, {
        className: x.g,
        onClick: () => {
            y || ((0, m.X)(n, m.O.CLIP), v ? (0, d.l0)() : (0, d.yd)(C.id));
        },
        disabled: y,
        iconComponent: j,
        label:
            null == I
                ? f.intl.string(f.t.eg5qtV)
                : v || N
                  ? T
                      ? S
                          ? void 0
                          : f.intl.string(f.t.U4URzP)
                      : f.intl.string(f.t.wSS1yN)
                  : f.intl.string(f.t.aRifJX),
        grow: !1,
    });
}
