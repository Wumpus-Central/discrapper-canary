t.d(n, { Z: () => S }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(512722),
    s = t.n(i),
    a = t(392711),
    c = t.n(a),
    o = t(856901),
    u = t(755721),
    d = t(481060),
    m = t(670863),
    x = t(72897),
    g = t(537135),
    h = t(176940),
    j = t(65154),
    p = t(388032),
    v = t(591554),
    f = t(542257),
    Z = t(197571);
function S(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: i } = e;
    s()(null != n, "Camera capture device cannot be null");
    let a = (0, h.Z)(),
        [S, N] = (0, x.Ls)(j.h7.AUDIO_INPUT, { location: "CaptureDeviceConfig" }),
        C = S.concat(N),
        [b, T] = r.useState(
            (function (e, n, t) {
                var l;
                let r = n.find((n) => n.id === e);
                if (null == r) return null;
                let i = c().reduce(t, (e, n) =>
                    (0, o.stringSimilarity)(r.name, n.name) > (0, o.stringSimilarity)(r.name, e.name) ? n : e,
                );
                return null != (l = null == i ? void 0 : i.id) ? l : null;
            })(n.id, a, C),
        );
    return (
        null != b && i(b),
        (0, l.jsxs)("div", {
            className: f.modalContent,
            children: [
                (0, l.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: f.formItemTitle,
                    children: "Capture Device",
                }),
                (0, l.jsxs)(d.Kqy, {
                    gap: 8,
                    children: [
                        (0, l.jsx)("div", {
                            className: Z.marginTop8,
                            children: (0, l.jsxs)(g.Z, {
                                children: [
                                    (0, l.jsx)("span", {
                                        className: v.ellipsisText,
                                        children: n.name,
                                    }),
                                    (0, l.jsx)(u.zx, {
                                        className: v.changeButton,
                                        color: u.zx.Colors.PRIMARY,
                                        size: u.zx.Sizes.SMALL,
                                        onClick: t,
                                        children: p.intl.string(p.t.GEgsA4),
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(m.j, {
                            label: p.intl.string(p.t.y4ooer),
                            deviceType: j.h7.AUDIO_INPUT,
                            location: "CaptureDeviceConfig",
                            className: Z.__invalid_marginaTop8,
                            selectedDeviceId: b,
                            onSelectDevice: (e) => (T(e), i(e), !1),
                        }),
                    ],
                }),
            ],
        })
    );
}
