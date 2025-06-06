n.d(t, {
    A: () => _,
    default: () => j
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(741361),
    d = n(881052),
    s = n(911969),
    c = n(185413),
    u = n(600164),
    h = n(313201),
    x = n(592125),
    g = n(430824),
    m = n(700785),
    p = n(146085),
    b = n(71080),
    k = n(388032),
    C = n(441609);
function _(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: p.yP
    };
}
function j(e) {
    let { transitionState: t, onClose: n, channelId: m } = e,
        j = (0, h.Dt)(),
        R = (0, i.e7)([x.Z], () => x.Z.getChannel(m)),
        S = (0, i.e7)([g.Z], () => g.Z.getGuild(null == R ? void 0 : R.getGuildId())),
        [E, w] = l.useState({}),
        [y, A] = l.useState(!1),
        [N, f] = l.useState(null);
    if (null == R || null == S) return null;
    let M = async () => {
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
                        return t.rowType === b.aC.ROLE ? _(t.id, s.BN.ROLE) : _(t.id, s.BN.MEMBER);
                    });
                return (0, o.hw)(e.id, n, !0);
            })(R, E),
                n();
        } catch (t) {
            let e = new d.Hx(t);
            A(!1), f(e);
        }
    };
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        'aria-labelledby': j,
        size: a.CgR.SMALL,
        className: C.modalRoot,
        parentComponent: 'AddModeratorsModal',
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                className: C.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: k.intl.string(k.t.dMJ3Y2)
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: C.headerSubtitle,
                        children: [
                            (0, r.jsx)(a.ewx, {
                                size: 'xs',
                                color: 'currentColor',
                                className: C.headerSubtitleIcon
                            }),
                            R.name
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.U, {
                guild: S,
                channel: R,
                permission: p.yP,
                pendingAdditions: E,
                setPendingAdditions: w
            }),
            null != N
                ? (0, r.jsx)(a.Text, {
                      className: C.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: N.getAnyErrorMessage()
                  })
                : null,
            (0, r.jsxs)(a.mzw, {
                children: [
                    (0, r.jsx)(a.zxk, {
                        onClick: M,
                        submitting: y,
                        children: k.intl.string(k.t.OYkgVl)
                    }),
                    (0, r.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: k.intl.string(k.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
