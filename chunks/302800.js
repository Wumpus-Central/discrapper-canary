n.d(t, {
    M7: () => p,
    R9: () => b,
    UY: () => m,
    k2: () => _,
    v: () => g
}),
    n(627341),
    n(192379);
var r = n(278074),
    i = n(691324),
    o = n(180650),
    a = n(44315),
    s = n(388032),
    l = n(452823),
    c = n(744709),
    u = n(39934),
    d = n(681532),
    f = n(12981),
    _ = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.TOOLTIP = 1)] = 'TOOLTIP'), (e[(e.COACHTIP = 2)] = 'COACHTIP'), (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (e[(e.BADGE = 4)] = 'BADGE'), e;
    })({});
let p = (e) =>
        (0, r.EQ)(e)
            .with(o.T.TIDE, () => ({
                label: () => s.NW.string(s.t.kDb9hY),
                iconSrc: f.Z,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, a.Lq)(i.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    h = {
        TIDE: {
            imageSrc: d.Z,
            style: {
                position: 'absolute',
                width: '600px',
                zIndex: 10
            }
        },
        ROBERT: {
            imageSrc: l.Z,
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
            imageSrc: u.Z,
            style: {
                position: 'absolute',
                width: '850px'
            }
        }
    },
    m = (e) =>
        (0, r.EQ)(e)
            .with('1252405010608951358', () => h.TIDE)
            .with('1252405017688936508', () => h.TIDE)
            .with('1267521289330102344', () => h.STORM)
            .with('1267521289355268154', () => h.STORM)
            .with('1266160780928352268', () => h.STORM)
            .with('1266160780978556969', () => h.STORM)
            .with('1266161342801383434', () => h.STORM)
            .with('1220513995308400680', () => h.STORM)
            .with('1220513984273186816', () => h.STORM)
            .with('1220513989729976411', () => h.STORM)
            .with('1220514048068812901', () => h.STORM)
            .with('1266493591207940133', () => h.STORM)
            .with('1266493591275044903', () => h.STORM)
            .with('1220432740638523543', () => h.STORM)
            .with('1220513977683935373', () => h.SHY)
            .with('1220432647453409384', () => h.SHY)
            .with('1220432697718083614', () => h.SHY)
            .otherwise(() => null),
    g = (e) =>
        (0, r.EQ)(e)
            .with('1262491137386614805', () => h.ROBERT)
            .otherwise(() => null),
    E = {
        '1333866045236314327': '1333866045261480007',
        '1333866045261480007': '1333866045236314327',
        '1333866045282451527': '1333866045303423026',
        '1333866045303423026': '1333866045282451527'
    },
    v = {
        '1217624148080332820': '1217626219651006495',
        '1217626219651006495': '1217624148080332820',
        '1217625289681801316': '1217625572168044604',
        '1217625572168044604': '1217625289681801316',
        '1217625794382401577': '1217626024540508170',
        '1217626024540508170': '1217625794382401577'
    },
    b = (e, t) => {
        let n = E[e];
        return null == n && t && (n = v[e]), null != n ? n : null;
    };
