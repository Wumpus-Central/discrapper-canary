n.d(t, { Z: () => _ }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(704215),
    l = n(481060),
    o = n(243778),
    c = n(643879),
    d = n(373230),
    u = n(598989),
    m = n(87478),
    g = n(654904),
    p = n(993413),
    h = n(921944),
    f = n(486324),
    b = n(388032),
    x = n(50719);
let N = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function _(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: i, sectionTitle: _, changeAvatarButtonText: E, guildId: j, className: C, disabled: O = !1, isTryItOutFlow: v = !1, forcedDivider: S, withHighlight: T = !1 } = e,
        I = T ? l.gtL : l.zxk,
        y = (0, d.Tq)({ location: 'AvatarSection' }),
        A = [];
    y && A.push(a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [P, R] = (0, o.US)(A),
        D = P === a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        Z = (0, u._)(),
        { recentAvatarsLimit: w } = (0, c.pC)(Z);
    return (0, r.jsx)(p.Z, {
        className: C,
        title: _,
        titleIcon: D ? (0, r.jsx)(m.Z, { className: x.newBadge }) : void 0,
        description: y ? b.NW.format(b.t['+CyJu7'], { recentAvatarsLimit: w }) : void 0,
        errors: n,
        disabled: O,
        forcedDivider: S,
        children: (0, r.jsxs)('div', {
            className: x.buttonsContainer,
            children: [
                (0, r.jsx)(I, {
                    className: s()({ [x.buttonHighlighted]: T }),
                    size: l.zxk.Sizes.SMALL,
                    onClick: () => {
                        R(h.L.TAKE_ACTION), (0, g.$r)(f.pC.AVATAR, j, v, v ? N : void 0);
                    },
                    children: null != E ? E : b.NW.string(b.t['4OynCA'])
                }),
                t &&
                    (0, r.jsx)(l.zxk, {
                        className: x.removeButton,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => i(null),
                        children: null != j ? b.NW.string(b.t.TDjKDg) : b.NW.string(b.t.twB3f3)
                    })
            ]
        })
    });
}
