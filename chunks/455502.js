n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    l = n(970683),
    a = n(893776),
    o = n(493773),
    c = n(129293),
    u = n(80206),
    d = n(17894),
    h = n(108427),
    g = n(626135),
    p = n(981631),
    m = n(388032);
function f(e) {
    n.g.location.assign(e);
}
function _(e) {
    let { location: t, transitionTo: n = f } = e,
        [s, _] = i.useState("submitting"),
        x = i.useRef(void 0);
    (0, o.ZP)(() => {
        (0, h.e)("verify_email");
        let e = (0, c.Z)(t);
        if (null == e) return void _("failed");
        (async () => {
            try {
                let t = await a.Z.verify(e);
                _("succeeded"), (x.current = t);
            } catch (e) {
                _("failed");
            }
        })();
    });
    let E = i.useCallback(() => {
            n(p.Z5c.LOGIN, { source: "verify_email" });
        }, [n]),
        v = i.useCallback(() => {
            g.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: x.current }),
                (0, d.Z)("verify_email");
        }, []);
    return "failed" === s
        ? (0, r.jsx)(u.Z, {
              title: m.intl.string(m.t["PCgG3+"]),
              subtitle: m.intl.string(m.t.tQpeA3),
              buttonText: m.intl.string(m.t.dKhVQN),
              onButtonClick: E,
          })
        : "succeeded" === s
          ? (0, r.jsx)(u.Z, {
                title: m.intl.string(m.t["dAfGb+"]),
                buttonText: m.intl.string(m.t["uJWIj/"]),
                onButtonClick: v,
                image: (0, r.jsx)(l.dQ, { alt: m.intl.string(m.t["dAfGb+"]) }),
            })
          : (0, r.jsx)(u.Z, {
                title: m.intl.string(m.t["0c8+5n"]),
                subtitle: m.intl.string(m.t.ULTCBE),
                loading: !0,
            });
}
s.ZP.initialize();
