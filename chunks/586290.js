t.d(n, { Z: () => Z }), t(388685);
var l = t(54381),
    r = t(473749),
    i = t(512722),
    s = t.n(i),
    a = t(392711),
    c = t.n(a),
    o = t(856901),
    u = t(481060),
    d = t(670863),
    m = t(72897),
    g = t(537135),
    x = t(176940),
    h = t(65154),
    j = t(388032),
    v = t(591554),
    p = t(542257),
    f = t(197571);
function Z(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: i } = e;
    s()(null != n, "Camera capture device cannot be null");
    let a = (0, x.Z)(),
        [Z, N] = (0, m.Ls)(h.h7.AUDIO_INPUT, { location: "CaptureDeviceConfig" }),
        S = Z.concat(N),
        [b, C] = r.useState(
            (function (e, n, t) {
                var l;
                let r = n.find((n) => n.id === e);
                if (null == r) return null;
                let i = c().reduce(t, (e, n) =>
                    (0, o.stringSimilarity)(r.name, n.name) > (0, o.stringSimilarity)(r.name, e.name) ? n : e,
                );
                return null != (l = null == i ? void 0 : i.id) ? l : null;
            })(n.id, a, S),
        );
    return (
        null != b && i(b),
        (0, l.jsxs)("div", {
            className: p.modalContent,
            children: [
                (0, l.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: p.formItemTitle,
                    children: "Capture Device",
                }),
                (0, l.jsxs)(u.Kqy, {
                    gap: 8,
                    children: [
                        (0, l.jsx)("div", {
                            className: f.marginTop8,
                            children: (0, l.jsxs)(g.Z, {
                                children: [
                                    (0, l.jsx)("span", {
                                        className: v.ellipsisText,
                                        children: n.name,
                                    }),
                                    (0, l.jsx)("div", {
                                        className: v.changeButton,
                                        children: (0, l.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            onClick: t,
                                            text: j.intl.string(j.t.GEgsA4),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(d.j, {
                            label: j.intl.string(j.t.y4ooer),
                            deviceType: h.h7.AUDIO_INPUT,
                            location: "CaptureDeviceConfig",
                            className: f.__invalid_marginaTop8,
                            selectedDeviceId: b,
                            onSelectDevice: (e) => (C(e), i(e), !1),
                        }),
                    ],
                }),
            ],
        })
    );
}
