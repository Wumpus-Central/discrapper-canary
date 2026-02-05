"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(492917),
    a = n(830215),
    o = n(964486),
    c = n(396681),
    d = n(317940),
    u = n(701273),
    h = n(210714),
    _ = n(954571),
    p = n(652215),
    g = n(985018);
function m(e) {
    n.g.location.assign(e);
}
function f(e) {
    let { location: t, transitionTo: n = m } = e,
        [r, f] = s.useState("submitting"),
        A = s.useRef(void 0);
    (0, o.Ay)(() => {
        (0, h.d)("verify_email");
        let e = (0, c.A)(t);
        null == e
            ? f("failed")
            : (async () => {
                  try {
                      let t = await a.A.verify(e);
                      f("succeeded"), (A.current = t);
                  } catch (e) {
                      f("failed");
                  }
              })();
    });
    let E = s.useCallback(() => {
            n(p.BVt.LOGIN, { source: "verify_email" });
        }, [n]),
        x = s.useCallback(() => {
            _.default.track(p.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: A.current }),
                (0, u.A)("verify_email");
        }, []);
    return "failed" === r
        ? (0, i.jsx)(d.A, {
              title: g.intl.string(g.t["PCgG3+"]),
              subtitle: g.intl.string(g.t.tQpeA3),
              buttonText: g.intl.string(g.t.dKhVQN),
              onButtonClick: E,
          })
        : "succeeded" === r
          ? (0, i.jsx)(d.A, {
                title: g.intl.string(g.t["dAfGb+"]),
                buttonText: g.intl.string(g.t["uJWIj/"]),
                onButtonClick: x,
                image: (0, i.jsx)(l.bqQ, { alt: g.intl.string(g.t["dAfGb+"]) }),
            })
          : (0, i.jsx)(d.A, { title: g.intl.string(g.t["0c8+5n"]), subtitle: g.intl.string(g.t.ULTCBE), loading: !0 });
}
r.Ay.initialize();
