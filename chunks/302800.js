n.d(e, {
    GX: function () {
        return C;
    },
    M7: function () {
        return h;
    },
    UY: function () {
        return m;
    },
    k2: function () {
        return r;
    },
    v: function () {
        return x;
    }
}),
    n(627341),
    n(192379);
var r,
    a,
    i = n(278074),
    o = n(691324),
    s = n(180650),
    l = n(44315),
    c = n(410154),
    d = n(388032),
    u = n(452823),
    f = n(744709),
    p = n(39934),
    g = n(681532);
if (12633 == n.j) var v = n(12981);
((a = r || (r = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.TOOLTIP = 1)] = 'TOOLTIP'), (a[(a.COACHTIP = 2)] = 'COACHTIP'), (a[(a.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (a[(a.BADGE = 4)] = 'BADGE');
let h = (t) =>
        (0, i.EQ)(t)
            .with(s.T.TIDE, () => ({
                label: () => d.intl.string(d.t.kDb9hY),
                iconSrc: v.Z,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, l.Lq)(o.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    b = {
        TIDE: {
            imageSrc: g.Z,
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
            imageSrc: f.Z,
            style: {
                position: 'absolute',
                width: '600px'
            }
        },
        STORM: {
            imageSrc: p.Z,
            style: {
                position: 'absolute',
                width: '850px'
            }
        }
    },
    m = (t) =>
        (0, i.EQ)(t)
            .with('1252405010608951358', () => b.TIDE)
            .with('1252405017688936508', () => b.TIDE)
            .with('1267521289330102344', () => b.STORM)
            .with('1267521289355268154', () => b.STORM)
            .with('1266160780928352268', () => b.STORM)
            .with('1266160780978556969', () => b.STORM)
            .with('1266161342801383434', () => b.STORM)
            .with('1220513995308400680', () => b.STORM)
            .with('1220513984273186816', () => b.STORM)
            .with('1220513989729976411', () => b.STORM)
            .with('1220514048068812901', () => b.STORM)
            .with('1266493591207940133', () => b.STORM)
            .with('1266493591275044903', () => b.STORM)
            .with('1220432740638523543', () => b.STORM)
            .with('1220513977683935373', () => b.SHY)
            .with('1220432647453409384', () => b.SHY)
            .with('1220432697718083614', () => b.SHY)
            .otherwise(() => null),
    x = (t) =>
        (0, i.EQ)(t)
            .with('1262491137386614805', () => b.ROBERT)
            .otherwise(() => null),
    C = {
        [c.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => d.intl.string(d.t.qFKNgI),
            description: () => d.intl.string(d.t.PgDVTk)
        },
        [c.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => d.intl.string(d.t.pAJTKi),
            description: () => d.intl.string(d.t.EDi1u7)
        },
        [c.C5.EQUINOX_FALL]: {
            artSrc: n(148718),
            backgroundSrc: n(866074)
        }
    };
