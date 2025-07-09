(n.d(t, {
    A: () => j,
    default: () => I
}),
    n(388685));
var i = n(255367),
    s = n(73800),
    r = n(442837),
    l = n(481060),
    a = n(741361),
    o = n(881052),
    d = n(911969),
    c = n(185413),
    h = n(600164),
    u = n(313201),
    p = n(592125),
    m = n(430824),
    g = n(700785),
    C = n(146085),
    N = n(71080),
    x = n(388032),
    E = n(441609);
function j(e, t) {
    return {
        id: e,
        type: t,
        deny: g.Hn,
        allow: C.yP
    };
}
function I(e) {
    let { transitionState: t, onClose: n, channelId: g } = e,
        I = (0, u.Dt)(),
        b = (0, r.e7)([p.Z], () => p.Z.getChannel(g)),
        f = (0, r.e7)([m.Z], () => m.Z.getGuild(null == b ? void 0 : b.getGuildId())),
        [v, O] = s.useState({}),
        [S, _] = s.useState(!1),
        [y, A] = s.useState(null);
    if (null == b || null == f) return null;
    let T = async () => {
        _(!0);
        try {
            (await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === N.aC.ROLE ? j(t.id, d.BN.ROLE) : j(t.id, d.BN.MEMBER);
                    });
                return (0, a.hw)(e.id, n, !0);
            })(b, v),
                n());
        } catch (t) {
            let e = new o.Hx(t);
            (_(!1), A(e));
        }
    };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: t,
        'aria-labelledby': I,
        size: l.CgR.SMALL,
        className: E.modalRoot,
        parentComponent: 'AddModeratorsModal',
        children: [
            (0, i.jsxs)(l.xBx, {
                separator: !1,
                direction: h.Z.Direction.VERTICAL,
                align: h.Z.Align.CENTER,
                className: E.header,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t.dMJ3Y2)
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: E.headerSubtitle,
                        children: [
                            (0, i.jsx)(l.ewx, {
                                size: 'xs',
                                color: 'currentColor',
                                className: E.headerSubtitleIcon
                            }),
                            b.name
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.U, {
                guild: f,
                channel: b,
                permission: C.yP,
                pendingAdditions: v,
                setPendingAdditions: O
            }),
            null != y
                ? (0, i.jsx)(l.Text, {
                      className: E.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: y.getAnyErrorMessage()
                  })
                : null,
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsxs)(l.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(l.zxk, {
                            variant: 'primary',
                            text: x.intl.string(x.t.OYkgVl),
                            onClick: T,
                            loading: S
                        }),
                        (0, i.jsx)(l.zxk, {
                            variant: 'secondary',
                            text: x.intl.string(x.t['ETE/oK']),
                            onClick: n
                        })
                    ]
                })
            })
        ]
    });
}
