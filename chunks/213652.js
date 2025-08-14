n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(906732),
    l = n(435064),
    c = n(39604),
    u = n(441167),
    d = n(871499),
    f = n(199902),
    _ = n(314897),
    p = n(358221),
    h = n(522651),
    m = n(354459),
    g = n(388032),
    E = n(689598);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, s.ZP)(),
        b = (0, o.e7)([p.Z], () => p.Z.getSelectedParticipant(t.id)),
        O = (null == b ? void 0 : b.type) === m.fO.STREAM,
        I = (0, o.e7)([f.Z], () => (O ? f.Z.getActiveStreamForStreamKey(b.id) : null)),
        { ignoreSenderPreference: T } = u.Z.useExperiment(
            { location: "ActionBarClipsButton" },
            { autoTrackExposure: !1 },
        ),
        { viewerClippingAllowed: S, isAtMaxSavingClipOperations: A } = (0, o.cj)([l.Z], () => ({
            viewerClippingAllowed: null != I && (l.Z.isViewerClippingAllowedForUser(I.ownerId) || T),
            isAtMaxSavingClipOperations: l.Z.getIsAtMaxSaveClipOperations(),
        })),
        N = l.Z.getSettings().clipsEnabled,
        C = (null == I ? void 0 : I.ownerId) === _.default.getId(),
        R = !N || !(C || S) || A || null == b,
        P = () => {
            R || ((0, h.v)(n, h.d.CLIP), C ? (0, c.C1)() : (0, c.C1)(b.id));
        },
        w = () =>
            null == I
                ? g.intl.string(g.t.eg5qtb)
                : C || S
                  ? N
                      ? A
                          ? void 0
                          : g.intl.string(g.t.U4URzM)
                      : g.intl.string(g.t.wSS1yM)
                  : g.intl.string(g.t.aRifJS),
        D = i.useCallback((e) => (0, r.jsx)(a.xmR, v(y({}, e), { color: "currentColor" })), []);
    return (0, r.jsx)(d.Z, {
        className: E.actionBarButton,
        onClick: P,
        disabled: R,
        iconComponent: D,
        label: w(),
        grow: !1,
    });
}
