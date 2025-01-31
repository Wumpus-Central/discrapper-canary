n.d(t, {
    GX: () => v,
    M7: () => h,
    UY: () => g,
    k2: () => p,
    v: () => E
}),
    n(627341),
    n(192379);
var i = n(278074),
    r = n(691324),
    a = n(180650),
    s = n(44315),
    o = n(410154),
    l = n(388032),
    u = n(452823),
    c = n(744709),
    d = n(39934),
    f = n(681532),
    _ = n(12981),
    p = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.TOOLTIP = 1)] = 'TOOLTIP'), (e[(e.COACHTIP = 2)] = 'COACHTIP'), (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (e[(e.BADGE = 4)] = 'BADGE'), e;
    })({});
let h = (e) =>
        (0, i.EQ)(e)
            .with(a.T.TIDE, () => ({
                label: () => l.intl.string(l.t.kDb9hY),
                iconSrc: _.Z,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, s.Lq)(r.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    m = {
        TIDE: {
            imageSrc: f.Z,
            style: {
                position: 'absolute',
                width: '600px',
                zIndex: 10
            }
        },
        ROBERT: {
            imageSrc: u.Z,
            style: {
                position: 'absolute',
                width: '400px',
                right: '-200px',
                zIndex: 10
            }
        },
        SHY: {
            imageSrc: c.Z,
            style: {
                position: 'absolute',
                width: '600px'
            }
        },
        STORM: {
            imageSrc: d.Z,
            style: {
                position: 'absolute',
                width: '850px'
            }
        }
    },
    g = (e) =>
        (0, i.EQ)(e)
            .with('1252405010608951358', () => m.TIDE)
            .with('1252405017688936508', () => m.TIDE)
            .with('1267521289330102344', () => m.STORM)
            .with('1267521289355268154', () => m.STORM)
            .with('1266160780928352268', () => m.STORM)
            .with('1266160780978556969', () => m.STORM)
            .with('1266161342801383434', () => m.STORM)
            .with('1220513995308400680', () => m.STORM)
            .with('1220513984273186816', () => m.STORM)
            .with('1220513989729976411', () => m.STORM)
            .with('1220514048068812901', () => m.STORM)
            .with('1266493591207940133', () => m.STORM)
            .with('1266493591275044903', () => m.STORM)
            .with('1220432740638523543', () => m.STORM)
            .with('1220513977683935373', () => m.SHY)
            .with('1220432647453409384', () => m.SHY)
            .with('1220432697718083614', () => m.SHY)
            .otherwise(() => null),
    E = (e) =>
        (0, i.EQ)(e)
            .with('1262491137386614805', () => m.ROBERT)
            .otherwise(() => null),
    v = {
        [o.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => l.intl.string(l.t.qFKNgI),
            description: () => l.intl.string(l.t.PgDVTk)
        },
        [o.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => l.intl.string(l.t.pAJTKi),
            description: () => l.intl.string(l.t.EDi1u7)
        },
        [o.C5.EQUINOX_FALL]: {
            artSrc: n(148718),
            backgroundSrc: n(866074)
        }
    };
