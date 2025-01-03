t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var a = t(200651),
    i = t(192379),
    r = t(793030),
    l = t(442837),
    o = t(481060),
    s = t(924489),
    c = t(214912),
    d = t(824606),
    u = t(703656),
    m = t(314897),
    p = t(900849),
    _ = t(881294),
    g = t(682807),
    v = t(953989),
    f = t(981631),
    C = t(388032),
    h = t(37903);
let x = 'redirect_to_support_server';
function b(e) {
    let { className: n, application: t, onSelectCategory: b } = e,
        I = (0, d.Z)({ application: t }),
        { onGoToSupportServer: S } = (function (e) {
            let n = (0, _.nu)(),
                t = (0, l.e7)([m.default], () => m.default.getSessionId()),
                a = i.useCallback(async () => {
                    try {
                        var n;
                        let t = null == e ? void 0 : null === (n = e.guild) || void 0 === n ? void 0 : n.id;
                        if (null != t) {
                            (0, _.zZ)(f.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                                application_id: e.id,
                                support_guild_id: t
                            });
                            let n = { page: f.ZY5.APPLICATION_DIRECTORY };
                            await (0, p.Ub)(t, n, { setsHistorySnapshot: !1 });
                        }
                    } catch {}
                }, [e]);
            return (
                i.useEffect(() => {
                    let i = new URL(location.href);
                    if (null != e && n && null != t && 'true' === i.searchParams.get(x)) {
                        i.searchParams.delete(x);
                        let e = i.pathname + i.search;
                        (0, u.dL)(e), a();
                    }
                }, [n, a, t, e]),
                {
                    onGoToSupportServer: i.useCallback(() => {
                        var t;
                        null != (null == e ? void 0 : null === (t = e.guild) || void 0 === t ? void 0 : t.id) && (n ? a() : (0, _.rf)({ [x]: 'true' }));
                    }, [e, a, n])
                }
            );
        })(t);
    return (0, a.jsxs)('div', {
        className: n,
        children: [
            (0, a.jsx)(s.Z, {
                application: t,
                mutualGuilds: I,
                mutualGuildShownMax: 3,
                className: h.guildCountContainer,
                guildIconSize: s.x.SMALL,
                guildsClassName: h.guildsIconContainer,
                compact: !0
            }),
            (0, a.jsxs)('div', {
                className: h.sidebar,
                children: [
                    null != t.categories &&
                        t.categories.length > 0 &&
                        (0, a.jsxs)('div', {
                            className: h.sidebarSection,
                            children: [
                                (0, a.jsx)(r.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: C.intl.string(C.t.s7ialZ)
                                }),
                                (0, a.jsx)('div', {
                                    className: h.categories,
                                    children: t.categories.map((e) =>
                                        (0, a.jsx)(
                                            o.Clickable,
                                            {
                                                className: h.category,
                                                onClick: () => b(e),
                                                children: (0, a.jsx)(r.xv, {
                                                    variant: 'text-sm/semibold',
                                                    color: 'redesign-button-tertiary-text',
                                                    children: e.name
                                                })
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        }),
                    (0, a.jsx)(v.Z, {
                        application: t,
                        className: h.sidebarSection
                    }),
                    (0, a.jsx)(g.Z, {
                        application: t,
                        className: h.sidebarSection
                    }),
                    null != t.guild &&
                        t.guild.features.includes(f.oNc.DISCOVERABLE) &&
                        (0, a.jsxs)('div', {
                            className: h.sidebarSection,
                            children: [
                                (0, a.jsx)(r.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: C.intl.string(C.t.KJEO29)
                                }),
                                (0, a.jsx)(c.Z, {
                                    guild: t.guild,
                                    onClick: S
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
