t.d(n, {
    Z: function () {
        return I;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(866442),
    a = t(481060),
    o = t(129861),
    s = t(91218),
    c = t(829883),
    u = t(518738),
    d = t(14263),
    m = t(592125),
    f = t(430824),
    p = t(158776),
    h = t(594174),
    x = t(970184),
    v = t(280501),
    g = t(811654),
    C = t(344991),
    _ = t(981631),
    b = t(826987);
function I(e) {
    var n;
    let t = (0, x.CJ)(),
        I = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        S = m.Z.getChannel(I),
        j = f.Z.getGuild(null == S ? void 0 : S.getGuildId()),
        y = (0, d.Z)(null == j ? void 0 : j.id, g.HI),
        T = i.useMemo(() => (0, g.tx)(e.defaultValues, null == j ? void 0 : j.id), [e.defaultValues, j]);
    return (0, l.jsx)(C.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, g._H)(e.type, n, I),
        renderIcon: (e, n) => {
            let t = n === C.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === v.tM.USER) {
                let i = h.default.getUser(e.value);
                if (null == i) return;
                return (0, l.jsx)(a.Avatar, {
                    size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == j ? void 0 : j.id, n),
                    status: t ? null : p.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === v.tM.ROLE) {
                var i;
                let t = null != j ? f.Z.getRole(j.id, e.value) : void 0;
                if (null == t || null == j) return;
                let o = (0, c._b)(j, t) ? (0, u.Kz)(t, n) : null;
                return null != o
                    ? (0, l.jsx)(s.Z, { ...o })
                    : (0, l.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = t.colorString) && void 0 !== i ? i : (0, r.Rf)(_.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === v.tM.USER) {
                let t = h.default.getUser(e.value);
                null != t &&
                    (n = (0, l.jsx)(o.Z, {
                        className: b.tag,
                        usernameClass: b.username,
                        discriminatorClass: b.discriminator,
                        botClass: b.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === v.tM.ROLE) {
                let t = null != j ? f.Z.getRole(j.id, e.value) : void 0,
                    i = null == t ? null : null == y ? void 0 : y[t.id];
                null != i &&
                    (n = (0, l.jsxs)('div', {
                        className: b.roleCountContainer,
                        children: [
                            (0, l.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: b.roleCountIcon
                            }),
                            (0, l.jsx)('span', {
                                className: b.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, l.jsxs)('span', {
                className: b.label,
                children: [
                    (0, l.jsx)('span', {
                        className: b.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: T
    });
}
