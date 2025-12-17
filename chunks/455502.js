n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    a = n(970683),
    l = n(893776),
    o = n(493773),
    c = n(129293),
    u = n(80206),
    d = n(17894),
    h = n(108427),
    f = n(626135),
    g = n(981631),
    m = n(388032);
function p(e) {
    n.g.location.assign(e);
}
function x(e) {
    let { location: t, transitionTo: n = p } = e,
        [s, x] = i.useState("submitting"),
        _ = i.useRef(void 0);
    (0, o.ZP)(() => {
        (0, h.e)("verify_email");
        let e = (0, c.Z)(t);
        if (null == e) return void x("failed");
        (async () => {
            try {
                let t = await l.Z.verify(e);
                x("succeeded"), (_.current = t);
            } catch (e) {
                x("failed");
            }
        })();
    });
    let E = i.useCallback(() => {
            n(g.Z5c.LOGIN, { source: "verify_email" });
        }, [n]),
        v = i.useCallback(() => {
            f.default.track(g.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: _.current }),
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
                image: (0, r.jsx)(a.dQ, { alt: m.intl.string(m.t["dAfGb+"]) }),
            })
          : (0, r.jsx)(u.Z, {
                title: m.intl.string(m.t["0c8+5n"]),
                subtitle: m.intl.string(m.t.ULTCBE),
                loading: !0,
            });
}
s.ZP.initialize();
