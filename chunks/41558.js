"use strict";
n.d(t, { S: () => A });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(2553),
    o = n(664007),
    d = n(486020),
    c = n(997509),
    u = n(695800),
    m = n(652215),
    g = n(874864),
    x = n(478644),
    h = n(985018),
    _ = n(340736);
function A(e) {
    let { guild: t, canManageGuild: n } = e,
        A = t.features.has(m.GuildFeatures.INVITE_SPLASH),
        p = n && A,
        { analyticsLocations: f } = (0, r.Ay)(),
        j = s.useCallback((e) => {
            c.A.updateGuild({ splash: e });
        }, []),
        N = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: f,
                        analyticsSection: m.JJy.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.ZSU.UPLOAD_IMAGE,
                        perks: (0, g.Lp)(),
                    });
            },
            [f, t],
        ),
        E = (0, i.jsx)(o.A, {
            image: t.splash,
            makeURL: (e) => (null != e ? d.Ay.getGuildSplashURL({ id: t.id, splash: e }) : null),
            disabled: !p,
            onChange: j,
            hint: h.intl.string(h.t.uPvxqJ),
            enabled: p,
            maxFileSizeBytes: x.j,
            onFileSizeError: () => (0, a.A)(x.j),
        });
    return A ? E : (0, i.jsx)(l.DUT, { "aria-hidden": !0, tabIndex: -1, className: _.U, onClick: N, children: E });
}
