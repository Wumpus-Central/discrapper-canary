n.d(t, {
    A: () => j,
    default: () => C
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    s = n(741361),
    o = n(881052),
    d = n(911969),
    c = n(185413),
    u = n(600164),
    h = n(313201),
    x = n(592125),
    g = n(430824),
    m = n(700785),
    b = n(146085),
    k = n(71080),
    p = n(388032),
    _ = n(105167);
function j(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: b.yP
    };
}
function C(e) {
    let { transitionState: t, onClose: n, channelId: m } = e,
        C = (0, h.Dt)(),
        R = (0, i.e7)([x.Z], () => x.Z.getChannel(m)),
        S = (0, i.e7)([g.Z], () => g.Z.getGuild(null == R ? void 0 : R.getGuildId())),
        [E, w] = r.useState({}),
        [y, N] = r.useState(!1),
        [f, A] = r.useState(null);
    if (null == R || null == S) return null;
    let z = async () => {
        N(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === k.aC.ROLE ? j(t.id, d.BN.ROLE) : j(t.id, d.BN.MEMBER);
                    });
                return (0, s.hw)(e.id, n, !0);
            })(R, E),
                n();
        } catch (t) {
            let e = new o.Hx(t);
            N(!1), A(e);
        }
    };
    return (0, l.jsxs)(a.Y0X, {
        transitionState: t,
        'aria-labelledby': C,
        size: a.CgR.SMALL,
        className: _.modalRoot,
        children: [
            (0, l.jsxs)(a.xBx, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                className: _.header,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: p.intl.string(p.t.dMJ3Y2)
                    }),
                    (0, l.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: _.headerSubtitle,
                        children: [
                            (0, l.jsx)(a.ewx, {
                                size: 'xs',
                                color: 'currentColor',
                                className: _.headerSubtitleIcon
                            }),
                            R.name
                        ]
                    })
                ]
            }),
            (0, l.jsx)(c.U, {
                guild: S,
                channel: R,
                permission: b.yP,
                pendingAdditions: E,
                setPendingAdditions: w
            }),
            null != f
                ? (0, l.jsx)(a.Text, {
                      className: _.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: f.getAnyErrorMessage()
                  })
                : null,
            (0, l.jsxs)(a.mzw, {
                children: [
                    (0, l.jsx)(a.zxk, {
                        onClick: z,
                        submitting: y,
                        children: p.intl.string(p.t.OYkgVl)
                    }),
                    (0, l.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: p.intl.string(p.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
