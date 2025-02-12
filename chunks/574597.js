l.d(n, { Z: () => S });
var t = l(200651),
    i = l(192379),
    r = l(866442),
    a = l(481060),
    s = l(129861),
    o = l(91218),
    u = l(829883),
    c = l(518738),
    d = l(14263),
    m = l(592125),
    h = l(430824),
    p = l(158776),
    x = l(594174),
    v = l(970184),
    f = l(280501),
    C = l(811654),
    g = l(344991),
    j = l(981631),
    N = l(222343);
function S(e) {
    var n;
    let l = (0, v.CJ)(),
        S = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        E = m.Z.getChannel(S),
        I = h.Z.getGuild(null == E ? void 0 : E.getGuildId()),
        Z = (0, d.Z)(null == I ? void 0 : I.id, C.HI),
        T = i.useMemo(() => (0, C.tx)(e.defaultValues, null == I ? void 0 : I.id), [e.defaultValues, I]);
    return (0, t.jsx)(g.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, C._H)(e.type, n, S),
        renderIcon: (e, n) => {
            let l = n === g.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === f.tM.USER) {
                let i = x.default.getUser(e.value);
                if (null == i) return;
                return (0, t.jsx)(a.qEK, {
                    size: l ? a.EFr.SIZE_16 : a.EFr.SIZE_24,
                    src: i.getAvatarURL(null == I ? void 0 : I.id, n),
                    status: l ? null : p.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === f.tM.ROLE) {
                var i;
                let l = null != I ? h.Z.getRole(I.id, e.value) : void 0;
                if (null == l || null == I) return;
                let s = (0, u._b)(I, l) ? (0, c.Kz)(l, n) : null;
                return null != s
                    ? (0, t.jsx)(o.Z, { ...s })
                    : (0, t.jsx)(a.lZ8, {
                          size: 'custom',
                          color: null !== (i = l.colorString) && void 0 !== i ? i : (0, r.Rf)(j.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === f.tM.USER) {
                let l = x.default.getUser(e.value);
                null != l &&
                    (n = (0, t.jsx)(s.Z, {
                        className: N.tag,
                        usernameClass: N.username,
                        discriminatorClass: N.discriminator,
                        botClass: N.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === f.tM.ROLE) {
                let l = null != I ? h.Z.getRole(I.id, e.value) : void 0,
                    i = null == l ? null : null == Z ? void 0 : Z[l.id];
                null != i &&
                    (n = (0, t.jsxs)('div', {
                        className: N.roleCountContainer,
                        children: [
                            (0, t.jsx)(a.tBG, {
                                size: 'sm',
                                color: 'currentColor',
                                className: N.roleCountIcon
                            }),
                            (0, t.jsx)('span', {
                                className: N.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, t.jsxs)('span', {
                className: N.label,
                children: [
                    (0, t.jsx)('span', {
                        className: N.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: T
    });
}
