n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    d = n(866442),
    c = n(442837),
    u = n(481060),
    m = n(239091),
    h = n(895924),
    p = n(581364),
    g = n(471445),
    x = n(91218),
    f = n(518738),
    v = n(592125),
    b = n(271383),
    C = n(430824),
    I = n(246946),
    N = n(594174),
    j = n(51144),
    T = n(981631),
    _ = n(388032),
    Z = n(316983);
function E(e) {
    let { guild: t, id: r, type: a, isLocked: o, lockTooltipText: d } = e,
        c = !o || null != d;
    s()(c, 'No lockTooltipText provided while isLocked=true');
    let u = l.useCallback(
        (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        id: r,
                        label: _.intl.string(_.t.oJ1Mu7)
                    });
            });
        },
        [r]
    );
    switch (a) {
        case h.Kw.CHANNEL:
            return (0, i.jsx)(S, {
                guild: t,
                id: r,
                isLocked: o,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case h.Kw.ROLE:
            return (0, i.jsx)(y, {
                guild: t,
                id: r,
                isLocked: o,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case h.Kw.USER:
            return (0, i.jsx)(A, {
                guild: t,
                id: r,
                isLocked: o,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
    }
}
function S(e) {
    let { guild: t, id: n, isLocked: r, lockTooltipText: o, openEntryContextMenu: s } = e,
        d = (0, p.bD)(t.id),
        {
            icon: m,
            name: h,
            categoryName: x
        } = (0, c.cj)(
            [v.Z],
            () => {
                if (d === n)
                    return {
                        name: _.intl.string(_.t['7YqSGx']),
                        icon: u.TextIcon
                    };
                let e = v.Z.getChannel(n),
                    i = (null == e ? void 0 : e.parent_id) != null ? v.Z.getChannel(e.parent_id) : null;
                return {
                    icon: null != e ? (0, g.KS)(e, t) : null,
                    name: null == e ? void 0 : e.name,
                    categoryName: null == i ? void 0 : i.name
                };
            },
            [d, t, n]
        ),
        f = l.useCallback(
            (e) => {
                n !== d && s(e);
            },
            [d, n, s]
        );
    return null == m || null == h
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: f,
              className: Z.identifier,
              children: [
                  (0, i.jsx)(m, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: a()(Z.channelIcon, Z.image)
                  }),
                  (0, i.jsx)(u.Text, {
                      className: Z.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: h
                  }),
                  null != x
                      ? (0, i.jsxs)(u.Text, {
                            className: Z.tag,
                            variant: 'text-sm/normal',
                            children: ['(', x, ')']
                        })
                      : null,
                  r ? (0, i.jsx)(L, { tooltipText: o }) : null
              ]
          });
}
function y(e) {
    var t;
    let { guild: r, id: o, isLocked: s, lockTooltipText: h } = e,
        p = (0, c.e7)([C.Z], () => C.Z.getRole(r.id, o)),
        g = (0, f.p9)({
            guildId: r.id,
            roleId: o,
            size: 24
        }),
        v = l.useCallback(
            (e) => {
                if (null != r && null != p)
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('14486').then(n.bind(n, 786746));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: r,
                                role: p
                            });
                    });
            },
            [r, p]
        );
    return (null == p ? void 0 : p.name) == null
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: v,
              className: Z.identifier,
              children: [
                  null != g
                      ? (0, i.jsx)(x.Z, {
                            className: a()(Z.__invalid_icon, Z.image),
                            ...g
                        })
                      : (0, i.jsx)(u.ShieldUserIcon, {
                            size: 'custom',
                            width: 23,
                            height: 23,
                            className: a()(Z.shield, Z.image),
                            color: null !== (t = p.colorString) && void 0 !== t ? t : (0, d.Rf)(T.p6O)
                        }),
                  (0, i.jsx)(u.Text, {
                      className: Z.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: p.name
                  }),
                  s ? (0, i.jsx)(L, { tooltipText: h }) : null
              ]
          });
}
function A(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: r, openEntryContextMenu: a } = e,
        o = (0, c.e7)([N.default], () => N.default.getUser(n)),
        s = (0, c.e7)(
            [b.ZP],
            () => {
                var e;
                return null === (e = b.ZP.getMember(t.id, n)) || void 0 === e ? void 0 : e.nick;
            },
            [t.id, n]
        ),
        d = (0, c.e7)([I.Z], () => I.Z.hidePersonalInformation);
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: a,
              className: Z.identifier,
              children: [
                  (0, i.jsx)(u.Avatar, {
                      className: Z.image,
                      src: o.getAvatarURL(t.id, 24),
                      'aria-label': o.username,
                      size: u.AvatarSizes.SIZE_24
                  }),
                  (0, i.jsx)(u.Text, {
                      className: Z.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: null != s ? s : o.username
                  }),
                  d
                      ? null
                      : (0, i.jsx)(u.Text, {
                            className: Z.tag,
                            variant: 'text-sm/normal',
                            children: j.ZP.getUserTag(o)
                        }),
                  l ? (0, i.jsx)(L, { tooltipText: r }) : null
              ]
          });
}
function L(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(u.Tooltip, {
        text: t,
        children: (e) =>
            (0, i.jsx)('div', {
                className: Z.lockIcon,
                ...e,
                children: (0, i.jsx)(u.LockIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
