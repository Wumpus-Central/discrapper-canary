n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(970683),
    o = n(893776),
    a = n(493773),
    c = n(129293),
    u = n(80206),
    d = n(17894),
    h = n(108427),
    g = n(626135),
    m = n(981631),
    p = n(388032);
function f(e) {
    n.g.location.assign(e);
}
function _(e) {
    let { location: t, transitionTo: n = f } = e,
        [l, _] = i.useState("submitting"),
        x = i.useRef(void 0);
    (0, a.ZP)(() => {
        (0, h.e)("verify_email");
        let e = (0, c.Z)(t);
        if (null == e) return void _("failed");
        (async () => {
            try {
                let t = await o.Z.verify(e);
                _("succeeded"), (x.current = t);
            } catch (e) {
                _("failed");
            }
        })();
    });
    let E = i.useCallback(() => {
            n(m.Z5c.LOGIN, { source: "verify_email" });
        }, [n]),
        v = i.useCallback(() => {
            g.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: x.current }),
                (0, d.Z)("verify_email");
        }, []);
    return "failed" === l
        ? (0, r.jsx)(u.Z, {
              title: p.intl.string(p.t.PCgG39),
              subtitle: p.intl.string(p.t.tQpeAw),
              buttonText: p.intl.string(p.t.dKhVQE),
              onButtonClick: E,
          })
        : "succeeded" === l
          ? (0, r.jsx)(u.Z, {
                title: p.intl.string(p.t.dAfGb2),
                buttonText: p.intl.string(p.t.uJWIj4),
                onButtonClick: v,
                image: (0, r.jsx)(s.Om, { alt: p.intl.string(p.t.dAfGb2) }),
            })
          : (0, r.jsx)(u.Z, {
                title: p.intl.string(p.t["0c8+5u"]),
                subtitle: p.intl.string(p.t.ULTCBA),
                loading: !0,
            });
}
l.ZP.initialize();
