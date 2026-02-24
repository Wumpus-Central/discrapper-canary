n.d(t, { A: () => x });
var l = n(627968),
    s = n(64700),
    r = n(562465),
    i = n(397927),
    a = n(321168),
    o = n(191986),
    d = n(293731),
    u = n(464477),
    c = n(723702),
    h = n(837921),
    g = n(398450),
    m = n(652215),
    f = n(985018);
function x(e) {
    let { mfaChallenge: t, finish: n, setSlide: x, onClose: S, headerAlignStart: p } = e,
        [j, b] = s.useState(!1),
        [A, y] = s.useState(null),
        { enabled: C } = o.V.useConfig({ location: "mfa" }),
        { challenge: k } = t.methods.find((e) => "webauthn" === e.type),
        v = s.useCallback(async () => {
            b(!0), y(null);
            let e = c.isPlatformEmbedded && h.Ay.supportsFeature(m.BYE.WEBAUTHN) ? h.Ay.webAuthnAuthenticate : d.J;
            try {
                let t = await e(k);
                try {
                    await n({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof r.oh
                        ? (e.status >= 400 && e.status < 500 && C && (await a.A.signalUnknownCredential(t)),
                          y(f.intl.string(f.t.xSCvBf)))
                        : ((0, u.Os)(e, {}), y(e.message));
                }
            } catch (e) {
                (0, u.Os)(e, { extra: { error_type: "webauthn_api_error" } }), y(f.intl.string(f.t.xSCvBf));
            } finally {
                b(!1);
            }
        }, [k, n, C]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.A.SlideHeader, { onClose: S, headerAlignStart: p }),
            null != A && (0, l.jsx)(g.A.SlideContent, { children: (0, l.jsx)(g.A.SlideError, { error: A }) }),
            (0, l.jsx)(g.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: x,
                trailingButton: (0, l.jsx)(i.Button, {
                    variant: "primary",
                    text: f.intl.string(f.t.Xr3Eks),
                    loading: j,
                    onClick: v,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
