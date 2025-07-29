(n.d(t, {
    A: () => y,
    default: () => C
}),
    n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    i = n(481060),
    d = n(741361),
    o = n(881052),
    s = n(911969),
    c = n(185413),
    u = n(600164),
    h = n(313201),
    x = n(592125),
    g = n(430824),
    m = n(700785),
    p = n(146085),
    b = n(71080),
    j = n(388032),
    _ = n(441609);
function y(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: p.yP
    };
}
function C(e) {
    let { transitionState: t, onClose: n, channelId: m } = e,
        C = (0, h.Dt)(),
        E = (0, a.e7)([x.Z], () => x.Z.getChannel(m)),
        S = (0, a.e7)([g.Z], () => g.Z.getGuild(null == E ? void 0 : E.getGuildId())),
        [k, v] = l.useState({}),
        [w, R] = l.useState(!1),
        [f, A] = l.useState(null);
    if (null == E || null == S) return null;
    let N = async () => {
        R(!0);
        try {
            (await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === b.aC.ROLE ? y(t.id, s.BN.ROLE) : y(t.id, s.BN.MEMBER);
                    });
                return (0, d.hw)(e.id, n, !0);
            })(E, k),
                n());
        } catch (t) {
            let e = new o.Hx(t);
            (R(!1), A(e));
        }
    };
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        'aria-labelledby': C,
        size: i.CgR.SMALL,
        className: _.modalRoot,
        parentComponent: 'AddModeratorsModal',
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                className: _.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-xl/semibold',
                        children: j.intl.string(j.t.dMJ3Y2)
                    }),
                    (0, r.jsxs)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: _.headerSubtitle,
                        children: [
                            (0, r.jsx)(i.ewx, {
                                size: 'xs',
                                color: 'currentColor',
                                className: _.headerSubtitleIcon
                            }),
                            E.name
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.U, {
                guild: S,
                channel: E,
                permission: p.yP,
                pendingAdditions: k,
                setPendingAdditions: v
            }),
            null != f
                ? (0, r.jsx)(i.Text, {
                      className: _.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: f.getAnyErrorMessage()
                  })
                : null,
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)(i.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, r.jsx)(i.zxk, {
                            variant: 'primary',
                            text: j.intl.string(j.t.OYkgVl),
                            onClick: N,
                            loading: w
                        }),
                        (0, r.jsx)(i.zxk, {
                            variant: 'secondary',
                            text: j.intl.string(j.t['ETE/oK']),
                            onClick: n
                        })
                    ]
                })
            })
        ]
    });
}
