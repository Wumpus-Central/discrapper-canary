n.d(t, { Z: () => y });
var a = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    r = n(493773),
    s = n(367907),
    l = n(111028),
    c = n(91218),
    u = n(829883),
    d = n(623624),
    p = n(973542),
    m = n(703656),
    g = n(592125),
    _ = n(430824),
    h = n(944486),
    f = n(709586),
    C = n(626135),
    x = n(524444),
    v = n(981631),
    b = n(176505),
    T = n(388032),
    I = n(303913);
let y = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: y } = t;
    (0, r.ZP)(() => {
        C.default.track(v.rMx.OPEN_POPOUT, {
            type: 'Role Icon Popout',
            guild_id: n.id,
            ...(0, s.v_)(g.Z.getChannel(h.Z.getChannelId(n.id)))
        });
    });
    let N = (0, o.e7)([_.Z], () => (null != t.roleId ? _.Z.getRole(n.id, t.roleId) : void 0)),
        M = (0, p.Z)(N),
        k = M ? T.intl.formatToPlainString(T.t.t0928f, { name: y }) : T.intl.formatToPlainString(T.t.UDDkGx, { name: y }),
        R = {
            ...t,
            src: null == t.src ? t.src : (0, u.o)(t.src, 40),
            size: 40
        },
        j = M
            ? () => {
                  (0, m.uL)(v.Z5c.CHANNEL(n.id, b.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, d.f)({
                      guildId: n.id,
                      location: { section: v.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, a.jsx)(i.VqE, {
        children: (0, a.jsx)(x.W_, {
            children: (0, a.jsxs)('div', {
                className: I.popoutContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: I.mainContent,
                        children: [
                            (0, a.jsx)('div', {
                                className: I.roleIconContainer,
                                children: (0, a.jsx)(c.Z, {
                                    ...R,
                                    enableTooltip: !1,
                                    className: I.__invalid_roleIcon,
                                    enableHeight: !1
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: I.truncatingText,
                                children: [
                                    (0, a.jsx)(i.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: I.roleName,
                                        children: (0, a.jsx)(l.Z, { children: y })
                                    }),
                                    (0, a.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        children: k
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsxs)(i.zxk, {
                        size: i.zxk.Sizes.SMALL,
                        color: i.zxk.Colors.PRIMARY,
                        className: I.ctaButton,
                        innerClassName: I.ctaButtonContent,
                        fullWidth: !0,
                        onClick: j,
                        autoFocus: !0,
                        children: [
                            (0, a.jsx)(f.Z, {
                                width: 14,
                                height: 14,
                                className: I.boosterBadge
                            }),
                            T.intl.string(T.t['H930+P'])
                        ]
                    })
                ]
            })
        })
    });
};
