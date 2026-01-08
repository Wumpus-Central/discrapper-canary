n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(772848),
    a = n(873546),
    o = n(159691),
    s = n(481060),
    c = n(857458),
    u = n(358085),
    d = n(981631),
    p = n(186901),
    f = n(388032),
    g = n(123591);
function m(e) {
    let { applicationId: t } = e,
        [m, h] = i.useState(null),
        [b, _] = i.useState(!1),
        E = i.useRef(!1),
        O = !u.isPlatformEmbedded && !a.tq,
        v = i.useMemo(() => (0, l.Z)(), []);
    if (
        (i.useEffect(() => {
            O && !0 !== E.current
                ? (Promise.resolve()
                      .then(n.bind(n, 536285))
                      .then((e) => {
                          let { default: n } = e;
                          n.request(d.Etm.DEEP_LINK, {
                              type: p.jE.ACTIVITIES,
                              params: {
                                  applicationId: t,
                                  url: location.href,
                                  attemptId: v,
                              },
                          })
                              .then((e) => {
                                  let t = null != e && e;
                                  h(t), t || _(!0);
                              })
                              .catch(() => {
                                  h(!1), _(!0);
                              })
                              .then(() => n.disconnect());
                      }),
                  (E.current = !0))
                : O || _(!0);
        }, [t, O, v]),
        b)
    )
        return (0, r.jsx)(c.Z, {});
    if (O && !1 !== m)
        if (!0 === m)
            return (0, r.jsxs)("div", {
                className: g.container,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xxl/bold",
                        children: f.intl.string(f.t.csrAMJ),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        children: f.intl.string(f.t["m1+IBn"]),
                    }),
                    (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        text: f.intl.string(f.t.fIv16B),
                        onClick: () => _(!0),
                    }),
                ],
            });
        else
            return (0, r.jsxs)("div", {
                className: g.container,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xxl/bold",
                        children: f.intl.string(f.t["Z+hCVU"]),
                    }),
                    (0, r.jsx)(s.$jN, {}),
                ],
            });
    return (0, r.jsx)(c.Z, {});
}
