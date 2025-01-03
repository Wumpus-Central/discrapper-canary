n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var a = n(209173),
    l = n(782568),
    r = n(626135),
    c = n(924489),
    o = n(132871),
    s = n(147890),
    d = n(824606),
    u = n(112884),
    m = n(639002),
    g = n(781627),
    f = n(981631),
    p = n(388032),
    h = n(4080);
let _ = new Map([['890343617762304070', { imageSrc: n(336662) }]]),
    x = new Map(),
    C = new Map([[f.ABu.SPOTIFY, { imageSrc: n(655130) }]]);
function v(e) {
    var t, n;
    let { result: a } = e,
        l = a.data,
        r = (0, d.Z)({ application: l }),
        o = _.get(a.data.id);
    if (null == o) return null;
    let u =
            r.length > 0
                ? (0, i.jsx)(c.Z, {
                      application: a.data,
                      textVariant: 'text-sm/semibold',
                      mutualGuilds: r,
                      mutualGuildShownMax: 3,
                      guildIconSize: c.x.SMALL,
                      compact: !0
                  })
                : null,
        m = null !== (n = null === (t = l.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        f = m > 0 ? p.intl.formatToPlainString(p.t['eoUw+v'], { guildCount: m }) : void 0;
    return (0, i.jsx)(g.Z, {
        imageSrc: o.imageSrc,
        header: a.data.name,
        description: a.data.description,
        secondaryInfo: f,
        ctaLabel: p.intl.string(p.t.NgXl3N),
        mutualGuildCount: u,
        onCtaClick: () => (0, s.goToApplication)({ applicationId: l.id })
    });
}
function b(e) {
    let { result: t } = e,
        n = x.get(t.data.id);
    return null == n
        ? null
        : (0, i.jsx)(g.Z, {
              imageSrc: n.imageSrc,
              header: t.data.name,
              description: t.data.description,
              secondaryInfo: p.intl.string(p.t.fhY6s7)
          });
}
function j(e) {
    let t,
        n,
        a,
        { result: c, guildId: s } = e,
        d = C.get(c.data.name);
    return null == d
        ? null
        : (c.data.name === f.ABu.SPOTIFY &&
                ((t = p.intl.string(p.t.LcNDLS)),
                (n = p.intl.format(p.t['8JiYOT'], {})),
                (a = () => {
                    r.default.track(f.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        current_page: o.ApplicationDirectoryViews.SEARCH,
                        cta: 'spotify',
                        guild_id: s
                    }),
                        (0, l.Z)('https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection');
                })),
            null == t || null == n || null == a)
          ? null
          : (0, i.jsx)(g.Z, {
                imageSrc: d.imageSrc,
                header: t,
                description: n,
                ctaLabel: p.intl.string(p.t.hvVgAQ),
                onCtaClick: a,
                secondaryInfo: p.intl.string(p.t['tF+47u'])
            });
}
function I(e) {
    let { results: t, guildId: n } = e;
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)(u.Z, {}),
            (0, i.jsx)('div', {
                className: h.list,
                children: t.map((e, t) => {
                    let l = ''.concat(t).concat(e.type);
                    if (e.type === a.s.APPLICATION) return (0, i.jsx)(v, { result: e }, l);
                    if (e.type === a.s.ACTIVITY_APPLICATION) return (0, i.jsx)(b, { result: e }, l);
                    if (e.type === a.s.CONNECTION)
                        return (0, i.jsx)(
                            j,
                            {
                                guildId: n,
                                result: e
                            },
                            l
                        );
                })
            }),
            (0, i.jsx)(m.Z, { guildId: n })
        ]
    });
}
