n.d(t, { Z: () => A });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(493773),
    o = n(367907),
    l = n(111028),
    u = n(91218),
    c = n(829883),
    d = n(623624),
    f = n(973542),
    _ = n(703656),
    p = n(592125),
    h = n(430824),
    m = n(944486),
    g = n(709586),
    E = n(626135),
    v = n(524444),
    y = n(981631),
    I = n(176505),
    b = n(388032),
    T = n(623105);
let S = 40,
    A = (e) => {
        let { roleIcon: t, guild: n } = e,
            { name: A } = t;
        (0, s.Z)(() => {
            E.default.track(y.rMx.OPEN_POPOUT, {
                type: 'Role Icon Popout',
                guild_id: n.id,
                ...(0, o.v_)(p.Z.getChannel(m.Z.getChannelId(n.id)))
            });
        });
        let N = (0, r.e7)([h.Z], () => (null != t.roleId ? h.Z.getRole(n.id, t.roleId) : void 0)),
            C = (0, f.Z)(N),
            R = C ? b.intl.formatToPlainString(b.t.t0928f, { name: A }) : b.intl.formatToPlainString(b.t.UDDkGx, { name: A }),
            O = {
                ...t,
                src: null == t.src ? t.src : (0, c.o)(t.src, S),
                size: S
            },
            D = () => {
                (0, d.f)({
                    guildId: n.id,
                    location: { section: y.jXE.ROLE_ICON_POPOUT }
                });
            },
            x = () => {
                (0, _.uL)(y.Z5c.CHANNEL(n.id, I.oC.ROLE_SUBSCRIPTIONS));
            },
            L = C ? x : D;
        return (0, i.jsx)(a.VqE, {
            children: (0, i.jsx)(v.W_, {
                children: (0, i.jsxs)('div', {
                    className: T.popoutContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.mainContent,
                            children: [
                                (0, i.jsx)('div', {
                                    className: T.roleIconContainer,
                                    children: (0, i.jsx)(u.Z, {
                                        ...O,
                                        enableTooltip: !1,
                                        className: T.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.truncatingText,
                                    children: [
                                        (0, i.jsx)(a.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: T.roleName,
                                            children: (0, i.jsx)(l.Z, { children: A })
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            children: R
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.zxk, {
                            size: a.zxk.Sizes.SMALL,
                            color: a.zxk.Colors.PRIMARY,
                            className: T.ctaButton,
                            innerClassName: T.ctaButtonContent,
                            fullWidth: !0,
                            onClick: L,
                            autoFocus: !0,
                            children: [
                                (0, i.jsx)(g.Z, {
                                    width: 14,
                                    height: 14,
                                    className: T.boosterBadge
                                }),
                                b.intl.string(b.t['H930+P'])
                            ]
                        })
                    ]
                })
            })
        });
    };
