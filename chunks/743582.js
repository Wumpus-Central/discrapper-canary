(i.d(t, { default: () => p }), i(388685));
var l = i(255367),
    e = i(73800),
    s = i(512722),
    a = i.n(s),
    r = i(481060),
    o = i(935369),
    c = i(728345),
    d = i(313201),
    u = i(577275),
    x = i(829857),
    g = i(388032),
    m = i(103858);
function p(n) {
    var t, i;
    let { transitionState: s, application: p, onClose: h } = n,
        _ = (0, d.Dt)(),
        [j, C] = e.useState(null == p || null == (t = p.team) ? void 0 : t.id),
        { teams: v } = (0, u.Z)(),
        b = e.useMemo(
            () =>
                v
                    .filter((n) => n.payout_account_status === x.C.ACTIVE)
                    .map((n) => ({
                        label: n.name,
                        value: n.id
                    })),
            [v]
        ),
        f = (null == p || null == (i = p.team) ? void 0 : i.id) !== j,
        [k, { loading: N, error: w }] = (0, o.Z)(c.ZP.transferApplication),
        z = async () => {
            (a()(null != p, 'no application'),
                a()(null != j, 'no team selected'),
                null !=
                    (await k({
                        applicationId: p.id,
                        teamId: j
                    })) && h());
        },
        R = (null == p ? void 0 : p.team) != null;
    return (0, l.jsxs)(r.Y0X, {
        transitionState: s,
        'aria-labelledby': _,
        parentComponent: 'TransferApplicationModal',
        children: [
            (0, l.jsxs)(r.xBx, {
                children: [
                    (0, l.jsx)(r.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: R ? g.intl.string(g.t['4TveVl']) : g.intl.string(g.t.feBUAQ)
                    }),
                    (0, l.jsx)(r.olH, {
                        className: m.closeButton,
                        onClick: h
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
                            onChange: (n) => C(n),
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
