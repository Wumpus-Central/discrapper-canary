n.d(t, { Z: () => E });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    d = n(866442),
    c = n(442837),
    u = n(481060),
    m = n(239091),
    h = n(895924),
    x = n(581364),
    g = n(471445),
    p = n(91218),
    f = n(518738),
    b = n(592125),
    v = n(271383),
    _ = n(430824),
    N = n(246946),
    j = n(594174),
    C = n(51144),
    I = n(981631),
    Z = n(388032),
    T = n(649397);
function E(e) {
    let { guild: t, id: a, type: r, isLocked: s, lockTooltipText: d } = e,
        c = !s || null != d;
    o()(c, 'No lockTooltipText provided while isLocked=true');
    let u = l.useCallback(
        (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        id: a,
                        label: Z.intl.string(Z.t.oJ1Mu7)
                    });
            });
        },
        [a]
    );
    switch (r) {
        case h.Kw.CHANNEL:
            return (0, i.jsx)(S, {
                guild: t,
                id: a,
                isLocked: s,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case h.Kw.ROLE:
            return (0, i.jsx)(y, {
                guild: t,
                id: a,
                isLocked: s,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case h.Kw.USER:
            return (0, i.jsx)(A, {
                guild: t,
                id: a,
                isLocked: s,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
    }
}
function S(e) {
    let { guild: t, id: n, isLocked: a, lockTooltipText: s, openEntryContextMenu: o } = e,
        d = (0, x.bD)(t.id),
        {
            icon: m,
            name: h,
            categoryName: p
        } = (0, c.cj)(
            [b.Z],
            () => {
                if (d === n)
                    return {
                        name: Z.intl.string(Z.t['7YqSGx']),
                        icon: u.VL1
                    };
                let e = b.Z.getChannel(n),
                    i = (null == e ? void 0 : e.parent_id) != null ? b.Z.getChannel(e.parent_id) : null;
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
                n !== d && o(e);
            },
            [d, n, o]
        );
    return null == m || null == h
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: f,
              className: T.identifier,
              children: [
                  (0, i.jsx)(m, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: r()(T.channelIcon, T.image)
                  }),
                  (0, i.jsx)(u.Text, {
                      className: T.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: h
                  }),
                  null != p
                      ? (0, i.jsxs)(u.Text, {
                            className: T.tag,
                            variant: 'text-sm/normal',
                            children: ['(', p, ')']
                        })
                      : null,
                  a ? (0, i.jsx)(k, { tooltipText: s }) : null
              ]
          });
}
function y(e) {
    var t;
    let { guild: a, id: s, isLocked: o, lockTooltipText: h } = e,
        x = (0, c.e7)([_.Z], () => _.Z.getRole(a.id, s)),
        g = (0, f.p9)({
            guildId: a.id,
            roleId: s,
            size: 24
        }),
        b = l.useCallback(
            (e) => {
                null != a &&
                    null != x &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('14486').then(n.bind(n, 786746));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: a,
                                role: x
                            });
                    });
            },
            [a, x]
        );
    return (null == x ? void 0 : x.name) == null
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: b,
              className: T.identifier,
              children: [
                  null != g
                      ? (0, i.jsx)(p.Z, {
                            className: r()(T.__invalid_icon, T.image),
                            ...g
                        })
                      : (0, i.jsx)(u.lZ8, {
                            size: 'custom',
                            width: 23,
                            height: 23,
                            className: r()(T.shield, T.image),
                            color: null !== (t = x.colorString) && void 0 !== t ? t : (0, d.Rf)(I.p6O)
                        }),
                  (0, i.jsx)(u.Text, {
                      className: T.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: x.name
                  }),
                  o ? (0, i.jsx)(k, { tooltipText: h }) : null
              ]
          });
}
function A(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: a, openEntryContextMenu: r } = e,
        s = (0, c.e7)([j.default], () => j.default.getUser(n)),
        o = (0, c.e7)(
            [v.ZP],
            () => {
                var e;
                return null === (e = v.ZP.getMember(t.id, n)) || void 0 === e ? void 0 : e.nick;
            },
            [t.id, n]
        ),
        d = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation);
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: r,
              className: T.identifier,
              children: [
                  (0, i.jsx)(u.qEK, {
                      className: T.image,
                      src: s.getAvatarURL(t.id, 24),
                      'aria-label': s.username,
                      size: u.EFr.SIZE_24
                  }),
                  (0, i.jsx)(u.Text, {
                      className: T.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: null != o ? o : s.username
                  }),
                  d
                      ? null
                      : (0, i.jsx)(u.Text, {
                            className: T.tag,
                            variant: 'text-sm/normal',
                            children: C.ZP.getUserTag(s)
                        }),
                  l ? (0, i.jsx)(k, { tooltipText: a }) : null
              ]
          });
}
function k(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(u.ua7, {
        text: t,
        children: (e) =>
            (0, i.jsx)('div', {
                className: T.lockIcon,
                ...e,
                children: (0, i.jsx)(u.mBM, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
