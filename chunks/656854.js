l.d(t, {
    G: () => f,
    O: () => m,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(990078),
    i = l(397927),
    a = l(830215),
    o = l(31457),
    c = l(985018),
    d = l(712104);
function u() {
    let [e, t] = r.useState(!1),
        [l, s] = r.useState(!1),
        [o, u] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            l &&
                (e = setTimeout(() => {
                    s(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [l]);
    let f = async () => {
        if (!e) {
            t(!0);
            try {
                await a.A.verifyResend(), s(!0), u(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return l
        ? (0, n.jsx)(i.Text, {
              className: d.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: c.intl.string(c.t.H3Q7U8),
          })
        : (0, n.jsx)(i.Button, {
              variant: "primary",
              size: "sm",
              text: o ? c.intl.string(c.t.WnX4J2) : c.intl.string(c.t["13ofGu"]),
              loading: e,
              onClick: f,
          });
}
function f() {
    return (0, n.jsx)(o.ZK, {
        className: d.jm,
        icon: i.u6c,
        text: c.intl.string(c.t.c6EUJI),
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(s.m, {
            asContainer: !0,
            text: c.intl.string(c.t.mGlP30),
            children: (0, n.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: c.intl.string(c.t["13ofGu"]),
            }),
        }),
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        l = t ? c.intl.string(c.t.qY1jHN) : c.intl.string(c.t.c6EUJI);
    return (0, n.jsx)(o.ZK, {
        className: d.jm,
        icon: i.u6c,
        text: l,
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(u, {}),
    });
}
