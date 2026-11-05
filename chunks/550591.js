var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(866665),
    d = n(785332),
    c = n(728309);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    children: t,
                    text: n,
                    disableWrapper: a = !1,
                    disabled: u = !1,
                    hideOnClick: _ = !0,
                    shouldShow: E,
                    forceOpen: A,
                    selected: f = !1,
                } = e,
                h = r.useMemo(
                    () =>
                        null == n || u
                            ? null
                            : (0, i.jsx)(l.E, {
                                  variant: "body-md/semibold",
                                  color: "text-default",
                                  className: d.A_,
                                  children: n,
                              }),
                    [n, u],
                ),
                I = a ? t : (0, i.jsx)("div", { className: s()(c.p, { [c.w]: f }), children: t });
            return (0, i.jsx)(o.m, {
                __unsupportedReactNodeAsText: h,
                position: "right",
                spacing: 12,
                hideOnClick: _,
                shouldShow: E,
                forceOpen: A,
                ariaHidden: !0,
                asContainer: !a,
                children: I,
            });
        },
    },
);
