n.d(t, {
    A: () => E,
    default: () => j
}),
    n(388685);
var s = n(200651),
    r = n(192379),
    i = n(442837),
    l = n(481060),
    a = n(741361),
    o = n(881052),
    d = n(911969),
    c = n(185413),
    h = n(600164),
    u = n(313201),
    p = n(592125),
    N = n(430824),
    m = n(700785),
    g = n(146085),
    C = n(71080),
    x = n(388032),
    I = n(441609);
function E(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: g.yP
    };
}
function j(e) {
    let { transitionState: t, onClose: n, channelId: m } = e,
        j = (0, u.Dt)(),
        b = (0, i.e7)([p.Z], () => p.Z.getChannel(m)),
        O = (0, i.e7)([N.Z], () => N.Z.getGuild(null == b ? void 0 : b.getGuildId())),
        [f, S] = r.useState({}),
        [v, A] = r.useState(!1),
        [T, D] = r.useState(null);
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
                        return t.rowType === C.aC.ROLE ? E(t.id, d.BN.ROLE) : E(t.id, d.BN.MEMBER);
                    });
                return (0, a.hw)(e.id, n, !0);
            })(b, f),
                n();
        } catch (t) {
            let e = new o.Hx(t);
            A(!1), D(e);
        }
    };
    return (0, s.jsxs)(l.Y0X, {
        transitionState: t,
        'aria-labelledby': j,
        size: l.CgR.SMALL,
        className: I.modalRoot,
        children: [
            (0, s.jsxs)(l.xBx, {
                separator: !1,
                direction: h.Z.Direction.VERTICAL,
                align: h.Z.Align.CENTER,
                className: I.header,
                children: [
                    (0, s.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.NW.string(x.t.dMJ3Y2)
                    }),
                    (0, s.jsxs)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: I.headerSubtitle,
                        children: [
                            (0, s.jsx)(l.ewx, {
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
                permission: g.yP,
                pendingAdditions: f,
                setPendingAdditions: S
            }),
            null != T
                ? (0, s.jsx)(l.Text, {
                      className: I.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: T.getAnyErrorMessage()
                  })
                : null,
            (0, s.jsxs)(l.mzw, {
                children: [
                    (0, s.jsx)(l.zxk, {
                        onClick: L,
                        submitting: v,
                        children: x.NW.string(x.t.OYkgVl)
                    }),
                    (0, s.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: x.NW.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
