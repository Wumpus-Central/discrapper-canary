"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(713186),
    a = n(830215),
    o = n(964486),
    c = n(396681),
    d = n(317940),
    u = n(701273),
    _ = n(210714),
    h = n(954571),
    m = n(652215),
    p = n(985018);
function g(e) {
    n.g.location.assign(e);
}
function A(e) {
    let { location: t, transitionTo: n = g } = e,
        [r, A] = s.useState("submitting"),
        f = s.useRef(void 0);
    (0, o.Ay)(() => {
        (0, _.d)("verify_email");
        let e = (0, c.A)(t);
        null == e
            ? A("failed")
            : (async () => {
                  try {
                      let t = await a.A.verify(e);
                      A("succeeded"), (f.current = t);
                  } catch (e) {
                      A("failed");
                  }
              })();
    });
    let x = s.useCallback(() => {
            n(m.BVt.LOGIN, { source: "verify_email" });
        }, [n]),
        E = s.useCallback(() => {
            h.default.track(m.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: f.current }),
                (0, u.A)("verify_email");
        }, []);
    return "failed" === r
        ? (0, i.jsx)(d.A, {
              title: p.intl.string(p.t["PCgG3+"]),
              subtitle: p.intl.string(p.t.tQpeA3),
              buttonText: p.intl.string(p.t.dKhVQN),
              onButtonClick: x,
          })
        : "succeeded" === r
          ? (0, i.jsx)(d.A, {
                title: p.intl.string(p.t["dAfGb+"]),
                buttonText: p.intl.string(p.t["uJWIj/"]),
                onButtonClick: E,
                image: (0, i.jsx)(l.b, { alt: p.intl.string(p.t["dAfGb+"]) }),
            })
          : (0, i.jsx)(d.A, { title: p.intl.string(p.t["0c8+5n"]), subtitle: p.intl.string(p.t.ULTCBE), loading: !0 });
}
r.Ay.initialize();
