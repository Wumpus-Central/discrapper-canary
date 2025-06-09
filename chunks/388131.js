n.d(t, {
    A: () => I,
    default: () => j
}),
    n(388685);
var i = n(255367),
    s = n(73800),
    l = n(442837),
    r = n(481060),
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
function I(e, t) {
    return {
        id: e,
        type: t,
        deny: g.Hn,
        allow: C.yP
    };
}
function j(e) {
    let { transitionState: t, onClose: n, channelId: g } = e,
        j = (0, u.Dt)(),
        b = (0, l.e7)([p.Z], () => p.Z.getChannel(g)),
        O = (0, l.e7)([m.Z], () => m.Z.getGuild(null == b ? void 0 : b.getGuildId())),
        [f, v] = s.useState({}),
        [S, A] = s.useState(!1),
        [_, y] = s.useState(null);
    if (null == b || null == O) return null;
    let L = async () => {
        A(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === N.aC.ROLE ? I(t.id, d.BN.ROLE) : I(t.id, d.BN.MEMBER);
                    });
                return (0, a.hw)(e.id, n, !0);
            })(b, f),
                n();
        } catch (t) {
            let e = new o.Hx(t);
            A(!1), y(e);
        }
    };
    return (0, i.jsxs)(r.Y0X, {
        transitionState: t,
        'aria-labelledby': j,
        size: r.CgR.SMALL,
        className: E.modalRoot,
        parentComponent: 'AddModeratorsModal',
        children: [
            (0, i.jsxs)(r.xBx, {
                separator: !1,
                direction: h.Z.Direction.VERTICAL,
                align: h.Z.Align.CENTER,
                className: E.header,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t.dMJ3Y2)
                    }),
                    (0, i.jsxs)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: E.headerSubtitle,
                        children: [
                            (0, i.jsx)(r.ewx, {
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
                guild: O,
                channel: b,
                permission: C.yP,
                pendingAdditions: f,
                setPendingAdditions: v
            }),
            null != _
                ? (0, i.jsx)(r.Text, {
                      className: E.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: _.getAnyErrorMessage()
                  })
                : null,
            (0, i.jsxs)(r.mzw, {
                children: [
                    (0, i.jsx)(r.zxk, {
                        onClick: L,
                        submitting: S,
                        children: x.intl.string(x.t.OYkgVl)
                    }),
                    (0, i.jsx)(r.zxk, {
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
