s.d(i, { default: () => _ }), s(47120);
var t = s(200651);
s(192379);
var e = s(512722),
    a = s.n(e),
    l = s(481060),
    c = s(935369),
    o = s(313201),
    r = s(53365),
    d = s(981631),
    u = s(388032),
    x = s(103858);
function _(n) {
    let { transitionState: i, guild: s, onClose: e } = n,
        _ = (0, o.Dt)(),
        [g, { loading: h, error: j }] = (0, c.Z)(r.oL),
        m = async () => {
            a()(null != s, 'no guild'), null != (await g(s.id)) && e();
        };
    return (0, t.jsxs)(l.Y0X, {
        transitionState: i,
        'aria-labelledby': _,
        children: [
            (0, t.jsxs)(l.xBx, {
                children: [
                    (0, t.jsx)(l.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: u.NW.string(u.t.rRpcEx)
                    }),
                    (0, t.jsx)(l.olH, {
                        className: x.closeButton,
                        onClick: e
                    })
                ]
            }),
            (0, t.jsxs)(l.hzk, {
                className: x.content,
                children: [
                    null != j
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [(0, t.jsx)(l.kzN, { children: j.message }), (0, t.jsx)(l.LZC, { size: 24 })]
                          })
                        : null,
                    (0, t.jsx)(l.R94, {
                        type: l.R94.Types.ERROR,
                        children: u.NW.format(u.t['Oa5P6+'], {
                            guildName: s.toString(),
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS
                        })
                    }),
                    (0, t.jsx)(l.LZC, { size: 16 })
                ]
            }),
            (0, t.jsx)(l.mzw, {
                className: x.__invalid_footer,
                children: (0, t.jsx)(l.zxk, {
                    color: l.zxk.Colors.RED,
                    className: x.__invalid_goBackButton,
                    submitting: h,
                    onClick: m,
                    children: u.NW.string(u.t.R3BPHx)
                })
            })
        ]
    });
}
