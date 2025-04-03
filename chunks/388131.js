n.d(t, {
    A: () => _,
    default: () => j
}),
    n(47120);
var r = n(200651),
    l = n(192379),
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
    N = n(441609);
function _(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: b.yP
    };
}
function j(e) {
    let { transitionState: t, onClose: n, channelId: m } = e,
        j = (0, h.Dt)(),
        C = (0, i.e7)([x.Z], () => x.Z.getChannel(m)),
        R = (0, i.e7)([g.Z], () => g.Z.getGuild(null == C ? void 0 : C.getGuildId())),
        [S, E] = l.useState({}),
        [w, y] = l.useState(!1),
        [f, A] = l.useState(null);
    if (null == C || null == R) return null;
    let z = async () => {
        y(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === k.aC.ROLE ? _(t.id, d.BN.ROLE) : _(t.id, d.BN.MEMBER);
                    });
                return (0, s.hw)(e.id, n, !0);
            })(C, S),
                n();
        } catch (t) {
            let e = new o.Hx(t);
            y(!1), A(e);
        }
    };
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        'aria-labelledby': j,
        size: a.CgR.SMALL,
        className: N.modalRoot,
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                className: N.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: p.NW.string(p.t.dMJ3Y2)
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: N.headerSubtitle,
                        children: [
                            (0, r.jsx)(a.ewx, {
                                size: 'xs',
                                color: 'currentColor',
                                className: N.headerSubtitleIcon
                            }),
                            C.name
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.U, {
                guild: R,
                channel: C,
                permission: b.yP,
                pendingAdditions: S,
                setPendingAdditions: E
            }),
            null != f
                ? (0, r.jsx)(a.Text, {
                      className: N.error,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: f.getAnyErrorMessage()
                  })
                : null,
            (0, r.jsxs)(a.mzw, {
                children: [
                    (0, r.jsx)(a.zxk, {
                        onClick: z,
                        submitting: w,
                        children: p.NW.string(p.t.OYkgVl)
                    }),
                    (0, r.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: p.NW.string(p.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
