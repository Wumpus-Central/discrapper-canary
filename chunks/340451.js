n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(492917),
    a = n(830215),
    o = n(964486),
    c = n(396681),
    u = n(317940),
    d = n(701273),
    h = n(210714),
    f = n(954571),
    p = n(652215),
    g = n(985018);

function m(e) {
    n.g.location.assign(e);
}

function A(e) {
    let { location: t, transitionTo: n = m } = e,
        [s, A] = i.useState("submitting"),
        x = i.useRef(void 0);
    (0, o.Ay)(() => {
        (0, h.d)("verify_email");
        let e = (0, c.A)(t);
        null == e
            ? A("failed")
            : (async () => {
                  try {
                      let t = await a.A.verify(e);
                      A("succeeded"), (x.current = t);
                  } catch (e) {
                      A("failed");
                  }
              })();
    });
    let _ = i.useCallback(() => {
            n(p.BVt.LOGIN, {
                source: "verify_email",
            });
        }, [n]),
        E = i.useCallback(() => {
            f.default.track(p.HAw.VERIFY_ACCOUNT_APP_OPENED, {
                verifying_user_id: x.current,
            }),
                (0, d.A)("verify_email");
        }, []);
    return "failed" === s
        ? (0, r.jsx)(u.A, {
              title: g.intl.string(g.t["PCgG3+"]),
              subtitle: g.intl.string(g.t.tQpeA3),
              buttonText: g.intl.string(g.t.dKhVQN),
              onButtonClick: _,
          })
        : "succeeded" === s
          ? (0, r.jsx)(u.A, {
                title: g.intl.string(g.t["dAfGb+"]),
                buttonText: g.intl.string(g.t["uJWIj/"]),
                onButtonClick: E,
                image: (0, r.jsx)(l.bqQ, {
                    alt: g.intl.string(g.t["dAfGb+"]),
                }),
            })
          : (0, r.jsx)(u.A, {
                title: g.intl.string(g.t["0c8+5n"]),
                subtitle: g.intl.string(g.t.ULTCBE),
                loading: !0,
            });
}
s.Ay.initialize();
