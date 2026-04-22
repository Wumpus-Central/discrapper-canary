"use strict";
r.d(t, { G: () => m, O: () => h });
var i = r(627968),
    a = r(64700),
    n = r(990078),
    s = r(834730),
    l = r(821609),
    o = r(849516),
    c = r(830215),
    d = r(31457),
    _ = r(985018),
    u = r(397251);
function p() {
    let [e, t] = a.useState(!1),
        [r, n] = a.useState(!1),
        [o, d] = a.useState(!1);
    a.useEffect(() => {
        let e;
        return (
            r &&
                (e = setTimeout(() => {
                    n(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [r]);
    let p = async () => {
        if (!e) {
            t(!0);
            try {
                await c.A.verifyResend(), n(!0), d(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return r
        ? (0, i.jsx)(s.E, {
              className: u.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: _.intl.string(_.t.H3Q7U8),
          })
        : (0, i.jsx)(l.$, {
              variant: "primary",
              size: "sm",
              text: o ? _.intl.string(_.t.WnX4J2) : _.intl.string(_.t["13ofGu"]),
              loading: e,
              onClick: p,
          });
}
function m() {
    return (0, i.jsx)(d.ZK, {
        className: u.jm,
        icon: o.u,
        text: _.intl.string(_.t.c6EUJI),
        footnote: _.intl.string(_.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, i.jsx)(n.m, {
            asContainer: !0,
            text: _.intl.string(_.t.mGlP30),
            children: (0, i.jsx)(l.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: _.intl.string(_.t["13ofGu"]),
            }),
        }),
    });
}
function h(e) {
    let { isUserVerified: t } = e,
        r = t ? _.intl.string(_.t.qY1jHN) : _.intl.string(_.t.c6EUJI);
    return (0, i.jsx)(d.ZK, {
        className: u.jm,
        icon: o.u,
        text: r,
        footnote: _.intl.string(_.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, i.jsx)(p, {}),
    });
}
