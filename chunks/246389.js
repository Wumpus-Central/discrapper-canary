n.d(l, { default: () => E });
var t = n(200651);
n(192379);
var i = n(481060),
    o = n(239091),
    r = n(883385),
    u = n(108843),
    d = n(100527),
    a = n(906732),
    c = n(931617),
    _ = n(981631),
    s = n(388032);
let E = (0, u.Z)(
    (0, r.Z)(
        function (e) {
            var l;
            let { user: n, guildId: r, onSelect: u, analyticsLocations: _, onCloseContextMenu: E, isViewOnly: M } = e,
                { analyticsLocations: f } = (0, a.ZP)(d.Z.CONTEXT_MENU),
                A = null !== (l = null == _ ? void 0 : _[0]) && void 0 !== l ? l : f[0],
                R = (0, c.Z)(n.id, r, !0, A, M);
            return (0, t.jsx)(i.v2r, {
                navId: 'guild-moderation-roles',
                onClose: () => {
                    (0, o.Zy)(), null == E || E();
                },
                'aria-label': s.intl.string(s.t.liqwPD),
                onSelect: u,
                children: (0, t.jsx)(i.kSQ, { children: R })
            });
        },
        { object: _.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU]
);
