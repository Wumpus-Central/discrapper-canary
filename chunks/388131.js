n.d(t, {
    A: () => E,
    default: () => j
}),
    n(388685);
var s = n(255367),
    i = n(73800),
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
    I = n(441609);
function E(e, t) {
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
        [f, S] = i.useState({}),
        [v, A] = i.useState(!1),
        [T, D] = i.useState(null);
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
                        return t.rowType === N.aC.ROLE ? E(t.id, d.BN.ROLE) : E(t.id, d.BN.MEMBER);
                    });
                return (0, a.hw)(e.id, n, !0);
            })(b, f),
                n();
        } catch (t) {
            let e = new o.Hx(t);
            A(!1), D(e);
        }
    };
    return (0, s.jsxs)(r.Y0X, {
        transitionState: t,
        'aria-labelledby': j,
        size: r.CgR.SMALL,
        className: I.modalRoot,
        children: [
            (0, s.jsxs)(r.xBx, {
                separator: !1,
                direction: h.Z.Direction.VERTICAL,
                align: h.Z.Align.CENTER,
                className: I.header,
                children: [
                    (0, s.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t.dMJ3Y2)
                    }),
                    (0, s.jsxs)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: I.headerSubtitle,
                        children: [
                            (0, s.jsx)(r.ewx, {
                                size: 'xs',
                                color: 'currentColor',
                                className: I.headerSubtitleIcon
                            }),
                            b.name
                        ]
                    })
                ]
            }),
            (0, s.jsx)(c.U, {
                guild: O,
                channel: b,
                permission: C.yP,
                pendingAdditions: f,
                setPendingAdditions: S
            }),
            null != T
                ? (0, s.jsx)(r.Text, {
                      className: I.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: T.getAnyErrorMessage()
                  })
                : null,
            (0, s.jsxs)(r.mzw, {
                children: [
                    (0, s.jsx)(r.zxk, {
                        onClick: L,
                        submitting: v,
                        children: x.intl.string(x.t.OYkgVl)
                    }),
                    (0, s.jsx)(r.zxk, {
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
