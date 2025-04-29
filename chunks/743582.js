i.d(t, { default: () => h }), i(388685);
var l = i(255367),
    e = i(73800),
    s = i(512722),
    a = i.n(s),
    r = i(481060),
    c = i(935369),
    o = i(728345),
    d = i(313201),
    u = i(577275),
    x = i(829857),
    g = i(388032),
    m = i(103858);
function h(n) {
    var t, i;
    let { transitionState: s, application: h, onClose: _ } = n,
        p = (0, d.Dt)(),
        [j, v] = e.useState(null == h || null == (t = h.team) ? void 0 : t.id),
        { teams: C } = (0, u.Z)(),
        b = e.useMemo(
            () =>
                C.filter((n) => n.payout_account_status === x.C.ACTIVE).map((n) => ({
                    label: n.name,
                    value: n.id
                })),
            [C]
        ),
        f = (null == h || null == (i = h.team) ? void 0 : i.id) !== j,
        [k, { loading: N, error: w }] = (0, c.Z)(o.ZP.transferApplication),
        z = async () => {
            a()(null != h, 'no application'),
                a()(null != j, 'no team selected'),
                null !=
                    (await k({
                        applicationId: h.id,
                        teamId: j
                    })) && _();
        },
        R = (null == h ? void 0 : h.team) != null;
    return (0, l.jsxs)(r.Y0X, {
        transitionState: s,
        'aria-labelledby': p,
        children: [
            (0, l.jsxs)(r.xBx, {
                children: [
                    (0, l.jsx)(r.X6q, {
                        id: p,
                        variant: 'heading-md/semibold',
                        children: R ? g.intl.string(g.t['4TveVl']) : g.intl.string(g.t.feBUAQ)
                    }),
                    (0, l.jsx)(r.olH, {
                        className: m.closeButton,
                        onClick: _
                    })
                ]
            }),
            (0, l.jsxs)(r.hzk, {
                className: m.content,
                children: [
                    R
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(r.R94, { children: g.intl.string(g.t.c7HS0t) }),
                                  (0, l.jsx)(r.LZC, { size: 8 }),
                                  (0, l.jsxs)(r.X6q, {
                                      className: m.warningHeading,
                                      variant: 'text-sm/semibold',
                                      color: 'text-danger',
                                      children: [
                                          (0, l.jsx)(r.P4T, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: m.warningIcon
                                          }),
                                          g.intl.string(g.t.Caz8nJ)
                                      ]
                                  }),
                                  (0, l.jsx)(r.LZC, { size: 4 }),
                                  (0, l.jsx)(r.R94, {
                                      type: r.R94.Types.ERROR,
                                      children: g.intl.string(g.t.u4ddHR)
                                  })
                              ]
                          })
                        : (0, l.jsx)(r.R94, { children: g.intl.string(g.t.atZ50N) }),
                    null != w ? (0, l.jsx)(r.kzN, { children: w.message }) : null,
                    (0, l.jsx)(r.LZC, { size: 16 }),
                    (0, l.jsx)(r.xJW, {
                        title: R ? g.intl.string(g.t.xZ6ZLy) : g.intl.string(g.t.bfmKdH),
                        required: !0,
                        children: (0, l.jsx)(r.q4e, {
                            className: m.__invalid_teamSelect,
                            options: b,
                            placeholder: g.intl.string(g.t.QXf93N),
                            value: j,
                            isDisabled: 0 === b.length,
                            onChange: (n) => v(n),
                            'aria-label': g.intl.string(g.t.QXf93N)
                        })
                    })
                ]
            }),
            (0, l.jsx)(r.mzw, {
                className: m.__invalid_footer,
                children: (0, l.jsx)(r.zxk, {
                    color: r.zxk.Colors.RED,
                    className: m.__invalid_goBackButton,
                    submitting: N,
                    disabled: !f,
                    onClick: z,
                    children: g.intl.string(g.t.R3BPHx)
                })
            })
        ]
    });
}
