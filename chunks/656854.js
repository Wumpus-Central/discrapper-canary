n.d(t, { G: () => m, O: () => h });
var r = n(627968),
    s = n(64700),
    l = n(990078),
    i = n(397927),
    a = n(830215),
    o = n(31457),
    d = n(985018),
    c = n(712104);
function u() {
    let [e, t] = s.useState(!1),
        [n, l] = s.useState(!1),
        [o, u] = s.useState(!1);
    s.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    l(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]);
    let m = async () => {
        if (!e) {
            t(!0);
            try {
                await a.A.verifyResend(), l(!0), u(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(i.Text, {
              className: c.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: d.intl.string(d.t.H3Q7U8),
          })
        : (0, r.jsx)(i.Button, {
              variant: "primary",
              size: "sm",
              text: o ? d.intl.string(d.t.WnX4J2) : d.intl.string(d.t["13ofGu"]),
              loading: e,
              onClick: m,
          });
}
function m() {
    return (0, r.jsx)(o.ZK, {
        className: c.jm,
        icon: i.u6c,
        text: d.intl.string(d.t.c6EUJI),
        footnote: d.intl.string(d.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.m, {
            asContainer: !0,
            text: d.intl.string(d.t.mGlP30),
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: d.intl.string(d.t["13ofGu"]),
            }),
        }),
    });
}
function h(e) {
    let { isUserVerified: t } = e,
        n = t ? d.intl.string(d.t.qY1jHN) : d.intl.string(d.t.c6EUJI);
    return (0, r.jsx)(o.ZK, {
        className: c.jm,
        icon: i.u6c,
        text: n,
        footnote: d.intl.string(d.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, r.jsx)(u, {}),
    });
}
