n.d(t, { A: () => m });
var l = n(627968),
    s = n(64700),
    r = n(562465),
    i = n(397927),
    a = n(293731),
    o = n(464477),
    d = n(723702),
    c = n(837921),
    u = n(398450),
    h = n(652215),
    g = n(985018);
function m(e) {
    let { mfaChallenge: t, finish: n, setSlide: m, onClose: f, headerAlignStart: x } = e,
        [S, p] = s.useState(!1),
        [j, b] = s.useState(null),
        { challenge: A } = t.methods.find((e) => "webauthn" === e.type),
        y = async () => {
            p(!0), b(null);
            let e =
                    d.isPlatformEmbedded && c.Ay.supportsFeature(h.BYE.WEBAUTHN)
                        ? c.Ay.webAuthnAuthenticate(A)
                        : (0, a.J)(A),
                t = async (e) => {
                    try {
                        await n({ mfaType: "webauthn", data: e });
                    } catch (e) {
                        e instanceof r.oh ? b(g.intl.string(g.t.xSCvBf)) : ((0, o.Os)(e, {}), b(e.message));
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                (0, o.Os)(e, { extra: { error_type: "webauthn_api_error" } }), b(g.intl.string(g.t.xSCvBf));
            } finally {
                p(!1);
            }
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(u.A.SlideHeader, { onClose: f, headerAlignStart: x }),
            null != j && (0, l.jsx)(u.A.SlideContent, { children: (0, l.jsx)(u.A.SlideError, { error: j }) }),
            (0, l.jsx)(u.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: m,
                trailingButton: (0, l.jsx)(i.Button, {
                    variant: "primary",
                    text: g.intl.string(g.t.Xr3Eks),
                    loading: S,
                    onClick: y,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
