i.d(e, { default: () => h }), i(47120);
var t = i(200651),
    s = i(192379),
    l = i(512722),
    a = i.n(l),
    r = i(481060),
    o = i(935369),
    c = i(728345),
    d = i(313201),
    u = i(577275),
    x = i(829857),
    g = i(388032),
    m = i(379593);
function h(n) {
    var e, i;
    let { transitionState: l, application: h, onClose: N } = n,
        _ = (0, d.Dt)(),
        [p, j] = s.useState(null == h ? void 0 : null === (e = h.team) || void 0 === e ? void 0 : e.id),
        { teams: v } = (0, u.Z)(),
        C = s.useMemo(
            () =>
                v
                    .filter((n) => n.payout_account_status === x.C.ACTIVE)
                    .map((n) => ({
                        label: n.name,
                        value: n.id
                    })),
            [v]
        ),
        b = (null == h ? void 0 : null === (i = h.team) || void 0 === i ? void 0 : i.id) !== p,
        [W, { loading: f, error: k }] = (0, o.Z)(c.ZP.transferApplication),
        w = async () => {
            a()(null != h, 'no application'),
                a()(null != p, 'no team selected'),
                null !=
                    (await W({
                        applicationId: h.id,
                        teamId: p
                    })) && N();
        },
        z = (null == h ? void 0 : h.team) != null;
    return (0, t.jsxs)(r.Y0X, {
        transitionState: l,
        'aria-labelledby': _,
        children: [
            (0, t.jsxs)(r.xBx, {
                children: [
                    (0, t.jsx)(r.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: z ? g.NW.string(g.t['4TveVl']) : g.NW.string(g.t.feBUAQ)
                    }),
                    (0, t.jsx)(r.olH, {
                        className: m.closeButton,
                        onClick: N
                    })
                ]
            }),
            (0, t.jsxs)(r.hzk, {
                className: m.content,
                children: [
                    z
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(r.R94, { children: g.NW.string(g.t.c7HS0t) }),
                                  (0, t.jsx)(r.LZC, { size: 8 }),
                                  (0, t.jsxs)(r.X6q, {
                                      className: m.warningHeading,
                                      variant: 'text-sm/semibold',
                                      color: 'text-danger',
                                      children: [
                                          (0, t.jsx)(r.P4T, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: m.warningIcon
                                          }),
                                          g.NW.string(g.t.Caz8nJ)
                                      ]
                                  }),
                                  (0, t.jsx)(r.LZC, { size: 4 }),
                                  (0, t.jsx)(r.R94, {
                                      type: r.R94.Types.ERROR,
                                      children: g.NW.string(g.t.u4ddHR)
                                  })
                              ]
                          })
                        : (0, t.jsx)(r.R94, { children: g.NW.string(g.t.atZ50N) }),
                    null != k ? (0, t.jsx)(r.kzN, { children: k.message }) : null,
                    (0, t.jsx)(r.LZC, { size: 16 }),
                    (0, t.jsx)(r.xJW, {
                        title: z ? g.NW.string(g.t.xZ6ZLy) : g.NW.string(g.t.bfmKdH),
                        required: !0,
                        children: (0, t.jsx)(r.q4e, {
                            className: m.__invalid_teamSelect,
                            options: C,
                            placeholder: g.NW.string(g.t.QXf93N),
                            value: p,
                            isDisabled: 0 === C.length,
                            onChange: (n) => j(n),
                            'aria-label': g.NW.string(g.t.QXf93N)
                        })
                    })
                ]
            }),
            (0, t.jsx)(r.mzw, {
                className: m.__invalid_footer,
                children: (0, t.jsx)(r.zxk, {
                    color: r.zxk.Colors.RED,
                    className: m.__invalid_goBackButton,
                    submitting: f,
                    disabled: !b,
                    onClick: w,
                    children: g.NW.string(g.t.R3BPHx)
                })
            })
        ]
    });
}
