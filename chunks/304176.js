var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(493773),
    l = r(367907),
    u = r(111028),
    c = r(91218),
    d = r(829883),
    f = r(623624),
    p = r(973542),
    h = r(703656),
    _ = r(592125),
    m = r(430824),
    g = r(944486),
    E = r(709586),
    v = r(626135),
    y = r(524444),
    b = r(981631),
    I = r(176505),
    T = r(388032),
    S = r(623105);
let A = 40,
    C = (e) => {
        let { roleIcon: n, guild: r } = e,
            { name: C } = n;
        (0, s.Z)(() => {
            v.default.track(b.rMx.OPEN_POPOUT, {
                type: 'Role Icon Popout',
                guild_id: r.id,
                ...(0, l.v_)(_.Z.getChannel(g.Z.getChannelId(r.id)))
            });
        });
        let N = (0, a.e7)([m.Z], () => (null != n.roleId ? m.Z.getRole(r.id, n.roleId) : void 0)),
            R = (0, p.Z)(N),
            O = R ? T.intl.formatToPlainString(T.t.t0928f, { name: C }) : T.intl.formatToPlainString(T.t.UDDkGx, { name: C }),
            D = {
                ...n,
                src: null == n.src ? n.src : (0, d.o)(n.src, A),
                size: A
            },
            L = () => {
                (0, f.f)({
                    guildId: r.id,
                    location: { section: b.jXE.ROLE_ICON_POPOUT }
                });
            },
            x = () => {
                (0, h.uL)(b.Z5c.CHANNEL(r.id, I.oC.ROLE_SUBSCRIPTIONS));
            },
            w = R ? x : L;
        return (0, i.jsx)(o.Dialog, {
            children: (0, i.jsx)(y.W_, {
                children: (0, i.jsxs)('div', {
                    className: S.popoutContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.mainContent,
                            children: [
                                (0, i.jsx)('div', {
                                    className: S.roleIconContainer,
                                    children: (0, i.jsx)(c.Z, {
                                        ...D,
                                        enableTooltip: !1,
                                        className: S.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: S.truncatingText,
                                    children: [
                                        (0, i.jsx)(o.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: S.roleName,
                                            children: (0, i.jsx)(u.Z, { children: C })
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            children: O
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            className: S.ctaButton,
                            innerClassName: S.ctaButtonContent,
                            fullWidth: !0,
                            onClick: w,
                            autoFocus: !0,
                            children: [
                                (0, i.jsx)(E.Z, {
                                    width: 14,
                                    height: 14,
                                    className: S.boosterBadge
                                }),
                                T.intl.string(T.t['H930+P'])
                            ]
                        })
                    ]
                })
            })
        });
    };
n.Z = C;
