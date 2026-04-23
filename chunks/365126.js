n.d(t, { A: () => p });
var a = n(627968),
    r = n(64700),
    i = n(562465),
    s = n(821609),
    l = n(3928),
    o = n(293731),
    d = n(464477),
    c = n(723702),
    u = n(837921),
    h = n(398450),
    g = n(652215),
    m = n(985018);
function p(e) {
    let { mfaChallenge: t, finish: n, setSlide: p, onClose: f, headerAlignStart: x } = e,
        [S, b] = r.useState(!1),
        [A, j] = r.useState(null),
        { challenge: y } = t.methods.find((e) => "webauthn" === e.type),
        C = r.useCallback(async () => {
            b(!0), j(null);
            let e = c.isPlatformEmbedded && u.Ay.supportsFeature(g.BYE.WEBAUTHN) ? u.Ay.webAuthnAuthenticate : o.J;
            try {
                let t = await e(y);
                try {
                    await n({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof i.oh
                        ? (e.status >= 400 && e.status < 500 && (await l.A.signalUnknownCredential(t)),
                          j(m.intl.string(m.t.xSCvBf)))
                        : ((0, d.Os)(e, {}), j(e.message));
                }
            } catch (e) {
                (0, d.Os)(e, { extra: { error_type: "webauthn_api_error" } }), j(m.intl.string(m.t.xSCvBf));
            } finally {
                b(!1);
            }
        }, [y, n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.A.SlideHeader, { onClose: f, headerAlignStart: x }),
            null != A && (0, a.jsx)(h.A.SlideContent, { children: (0, a.jsx)(h.A.SlideError, { error: A }) }),
            (0, a.jsx)(h.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: p,
                trailingButton: (0, a.jsx)(s.$, {
                    variant: "primary",
                    text: m.intl.string(m.t.Xr3Eks),
                    loading: S,
                    onClick: C,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
