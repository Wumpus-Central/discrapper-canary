n.d(t, {
    A: () => E,
    default: () => I,
}),
    n(388685);
var i = n(255367),
    s = n(73800),
    r = n(442837),
    l = n(82659),
    a = n(481060),
    o = n(741361),
    d = n(881052),
    c = n(911969),
    h = n(185413),
    u = n(592125),
    p = n(430824),
    m = n(700785),
    g = n(146085),
    C = n(71080),
    N = n(388032),
    x = n(878713);
function E(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: g.yP,
    };
}
function I(e) {
    let { transitionState: t, onClose: n, channelId: m } = e,
        I = (0, r.e7)([u.Z], () => u.Z.getChannel(m)),
        j = (0, r.e7)([p.Z], () => p.Z.getGuild(null == I ? void 0 : I.getGuildId())),
        [b, f] = s.useState({}),
        [v, O] = s.useState(!1),
        [S, y] = s.useState(null);
    if (null == I || null == j) return null;
    let A = async () => {
        O(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === C.aC.ROLE ? E(t.id, c.BN.ROLE) : E(t.id, c.BN.MEMBER);
                    });
                return (0, o.hw)(e.id, n, !0);
            })(I, b),
                n();
        } catch (t) {
            let e = new d.Hx(t);
            O(!1), y(e);
        }
    };
    return (0, i.jsxs)(l.Modal, {
        transitionState: t,
        title: N.intl.string(N.t.dMJ3Y2),
        onClose: n,
        actions: [
            {
                variant: "secondary",
                text: N.intl.string(N.t["ETE/oK"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: N.intl.string(N.t.OYkgVl),
                onClick: A,
                loading: v,
            },
        ],
        children: [
            (0, i.jsxs)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: x.headerSubtitle,
                children: [
                    (0, i.jsx)(a.ewx, {
                        size: "xs",
                        color: "currentColor",
                        className: x.headerSubtitleIcon,
                    }),
                    I.name,
                ],
            }),
            (0, i.jsx)(h.U, {
                guild: j,
                channel: I,
                permission: g.yP,
                pendingAdditions: b,
                setPendingAdditions: f,
            }),
            null != S
                ? (0, i.jsx)(a.Text, {
                      className: x.error,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: S.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
