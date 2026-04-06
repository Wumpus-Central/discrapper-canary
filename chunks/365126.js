n.d(t, { A: () => f });
var l = n(627968),
    s = n(64700),
    r = n(562465),
    i = n(397927),
    a = n(3928),
    o = n(293731),
    d = n(464477),
    u = n(723702),
    c = n(837921),
    h = n(398450),
    g = n(652215),
    m = n(985018);
function f(e) {
    let { mfaChallenge: t, finish: n, setSlide: f, onClose: x, headerAlignStart: S } = e,
        [p, j] = s.useState(!1),
        [b, A] = s.useState(null),
        { challenge: y } = t.methods.find((e) => "webauthn" === e.type),
        C = s.useCallback(async () => {
            j(!0), A(null);
            let e = u.isPlatformEmbedded && c.Ay.supportsFeature(g.BYE.WEBAUTHN) ? c.Ay.webAuthnAuthenticate : o.J;
            try {
                let t = await e(y);
                try {
                    await n({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof r.oh
                        ? (e.status >= 400 && e.status < 500 && (await a.A.signalUnknownCredential(t)),
                          A(m.intl.string(m.t.xSCvBf)))
                        : ((0, d.Os)(e, {}), A(e.message));
                }
            } catch (e) {
                (0, d.Os)(e, { extra: { error_type: "webauthn_api_error" } }), A(m.intl.string(m.t.xSCvBf));
            } finally {
                j(!1);
            }
        }, [y, n]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.A.SlideHeader, { onClose: x, headerAlignStart: S }),
            null != b && (0, l.jsx)(h.A.SlideContent, { children: (0, l.jsx)(h.A.SlideError, { error: b }) }),
            (0, l.jsx)(h.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: f,
                trailingButton: (0, l.jsx)(i.Button, {
                    variant: "primary",
                    text: m.intl.string(m.t.Xr3Eks),
                    loading: p,
                    onClick: C,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
