t.d(e, { default: () => h }), t(47120);
var i = t(200651),
    s = t(192379),
    l = t(512722),
    a = t.n(l),
    r = t(481060),
    c = t(935369),
    o = t(728345),
    d = t(313201),
    u = t(577275),
    x = t(829857),
    g = t(388032),
    m = t(103858);
function h(n) {
    var e, t;
    let { transitionState: l, application: h, onClose: N } = n,
        _ = (0, d.Dt)(),
        [p, j] = s.useState(null == h || null == (e = h.team) ? void 0 : e.id),
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
        b = (null == h || null == (t = h.team) ? void 0 : t.id) !== p,
        [W, { loading: f, error: k }] = (0, c.Z)(o.ZP.transferApplication),
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
    return (0, i.jsxs)(r.Y0X, {
        transitionState: l,
        'aria-labelledby': _,
        children: [
            (0, i.jsxs)(r.xBx, {
                children: [
                    (0, i.jsx)(r.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: z ? g.NW.string(g.t['4TveVl']) : g.NW.string(g.t.feBUAQ)
                    }),
                    (0, i.jsx)(r.olH, {
                        className: m.closeButton,
                        onClick: N
                    })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: m.content,
                children: [
                    z
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.R94, { children: g.NW.string(g.t.c7HS0t) }),
                                  (0, i.jsx)(r.LZC, { size: 8 }),
                                  (0, i.jsxs)(r.X6q, {
                                      className: m.warningHeading,
                                      variant: 'text-sm/semibold',
                                      color: 'text-danger',
                                      children: [
                                          (0, i.jsx)(r.P4T, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: m.warningIcon
                                          }),
                                          g.NW.string(g.t.Caz8nJ)
                                      ]
                                  }),
                                  (0, i.jsx)(r.LZC, { size: 4 }),
                                  (0, i.jsx)(r.R94, {
                                      type: r.R94.Types.ERROR,
                                      children: g.NW.string(g.t.u4ddHR)
                                  })
                              ]
                          })
                        : (0, i.jsx)(r.R94, { children: g.NW.string(g.t.atZ50N) }),
                    null != k ? (0, i.jsx)(r.kzN, { children: k.message }) : null,
                    (0, i.jsx)(r.LZC, { size: 16 }),
                    (0, i.jsx)(r.xJW, {
                        title: z ? g.NW.string(g.t.xZ6ZLy) : g.NW.string(g.t.bfmKdH),
                        required: !0,
                        children: (0, i.jsx)(r.q4e, {
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
            (0, i.jsx)(r.mzw, {
                className: m.__invalid_footer,
                children: (0, i.jsx)(r.zxk, {
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
