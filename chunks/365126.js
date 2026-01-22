n.d(t, {
    A: () => g,
}),
    n(896048),
    n(457529);
var r = n(627968),
    l = n(64700),
    i = n(460648),
    s = n(562465),
    a = n(397927),
    o = n(464477),
    d = n(723702),
    c = n(837921),
    u = n(398450),
    f = n(652215),
    h = n(985018);

function g(e) {
    let { mfaChallenge: t, finish: n, setSlide: g, onClose: p, headerAlignStart: m } = e,
        [b, j] = l.useState(!1),
        [y, S] = l.useState(null),
        { challenge: x } = t.methods.find((e) => "webauthn" === e.type),
        v = async () => {
            j(!0), S(null);
            let e =
                    d.isPlatformEmbedded && c.Ay.supportsFeature(f.BYE.WEBAUTHN)
                        ? c.Ay.webAuthnAuthenticate(x)
                        : i.Jt(JSON.parse(x)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: "webauthn",
                            data: e,
                        });
                    } catch (e) {
                        e instanceof s.oh ? S(h.intl.string(h.t.xSCvBf)) : ((0, o.Os)(e, {}), S(e.message));
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                (0, o.Os)(e, {
                    extra: {
                        error_type: "webauthn_api_error",
                    },
                }),
                    S(h.intl.string(h.t.xSCvBf));
            } finally {
                j(!1);
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.A.SlideHeader, {
                onClose: p,
                headerAlignStart: m,
            }),
            null != y &&
                (0, r.jsx)(u.A.SlideContent, {
                    children: (0, r.jsx)(u.A.SlideError, {
                        error: y,
                    }),
                }),
            (0, r.jsx)(u.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: g,
                trailingButton: (0, r.jsx)(a.Button, {
                    variant: "primary",
                    text: h.intl.string(h.t.Xr3Eks),
                    loading: b,
                    onClick: v,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
