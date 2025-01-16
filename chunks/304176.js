var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(493773),
    l = r(367907),
    u = r(111028),
    c = r(91218),
    d = r(829883),
    f = r(623624),
    _ = r(973542),
    h = r(703656),
    p = r(592125),
    m = r(430824),
    g = r(944486),
    E = r(709586),
    v = r(626135),
    I = r(524444),
    T = r(981631),
    b = r(176505),
    y = r(388032),
    S = r(623105);
let A = 40,
    N = (e) => {
        let { roleIcon: n, guild: r } = e,
            { name: N } = n;
        (0, o.Z)(() => {
            v.default.track(T.rMx.OPEN_POPOUT, {
                type: 'Role Icon Popout',
                guild_id: r.id,
                ...(0, l.v_)(p.Z.getChannel(g.Z.getChannelId(r.id)))
            });
        });
        let C = (0, a.e7)([m.Z], () => (null != n.roleId ? m.Z.getRole(r.id, n.roleId) : void 0)),
            R = (0, _.Z)(C),
            O = R ? y.intl.formatToPlainString(y.t.t0928f, { name: N }) : y.intl.formatToPlainString(y.t.UDDkGx, { name: N }),
            D = {
                ...n,
                src: null == n.src ? n.src : (0, d.o)(n.src, A),
                size: A
            },
            L = () => {
                (0, f.f)({
                    guildId: r.id,
                    location: { section: T.jXE.ROLE_ICON_POPOUT }
                });
            },
            x = () => {
                (0, h.uL)(T.Z5c.CHANNEL(r.id, b.oC.ROLE_SUBSCRIPTIONS));
            },
            w = R ? x : L;
        return (0, i.jsx)(s.Dialog, {
            children: (0, i.jsx)(I.W_, {
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
                                        (0, i.jsx)(s.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: S.roleName,
                                            children: (0, i.jsx)(u.Z, { children: N })
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            children: O
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
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
                                y.intl.string(y.t['H930+P'])
                            ]
                        })
                    ]
                })
            })
        });
    };
n.Z = N;
