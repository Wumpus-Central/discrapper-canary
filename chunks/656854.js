r.d(t, { G: () => h, O: () => E });
var n = r(627968),
    i = r(64700),
    l = r(990078),
    a = r(834730),
    s = r(821609),
    o = r(849516),
    d = r(830215),
    c = r(31457),
    u = r(985018),
    _ = r(397251);
function m() {
    let [e, t] = i.useState(!1),
        [r, l] = i.useState(!1),
        [o, c] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            r &&
                (e = setTimeout(() => {
                    l(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [r]);
    let m = async () => {
        if (!e) {
            t(!0);
            try {
                await d.A.verifyResend(), l(!0), c(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return r
        ? (0, n.jsx)(a.E, {
              className: _.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: u.intl.string(u.t.H3Q7U8),
          })
        : (0, n.jsx)(s.$, {
              variant: "primary",
              size: "sm",
              text: o ? u.intl.string(u.t.WnX4J2) : u.intl.string(u.t["13ofGu"]),
              loading: e,
              onClick: m,
          });
}
function h() {
    return (0, n.jsx)(c.ZK, {
        className: _.jm,
        icon: o.u,
        text: u.intl.string(u.t.c6EUJI),
        footnote: u.intl.string(u.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(l.m, {
            asContainer: !0,
            text: u.intl.string(u.t.mGlP30),
            children: (0, n.jsx)(s.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: u.intl.string(u.t["13ofGu"]),
            }),
        }),
    });
}
function E(e) {
    let { isUserVerified: t } = e,
        r = t ? u.intl.string(u.t.qY1jHN) : u.intl.string(u.t.c6EUJI);
    return (0, n.jsx)(c.ZK, {
        className: _.jm,
        icon: o.u,
        text: r,
        footnote: u.intl.string(u.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(m, {}),
    });
}
