r.d(n, {
    GX: function () {
        return b;
    },
    M7: function () {
        return g;
    },
    UY: function () {
        return v;
    },
    k2: function () {
        return i;
    },
    v: function () {
        return y;
    }
});
var i,
    a = r(627341);
r(192379);
var o = r(278074),
    s = r(691324),
    l = r(180650),
    u = r(44315),
    c = r(410154),
    d = r(388032),
    f = r(452823),
    p = r(744709),
    h = r(39934),
    _ = r(681532),
    m = r(12981);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.TOOLTIP = 1)] = 'TOOLTIP'), (e[(e.COACHTIP = 2)] = 'COACHTIP'), (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (e[(e.BADGE = 4)] = 'BADGE');
})(i || (i = {}));
let g = (e) =>
        (0, o.EQ)(e)
            .with(l.T.TIDE, () => ({
                label: () => d.intl.string(d.t.kDb9hY),
                iconSrc: m.Z,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, u.Lq)(s.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    E = {
        TIDE: {
            imageSrc: _.Z,
            style: {
                position: 'absolute',
                width: '600px',
                zIndex: 10
            }
        },
        ROBERT: {
            imageSrc: f.Z,
            style: {
                position: 'absolute',
                width: '400px',
                right: '-200px',
                zIndex: 10
            }
        },
        SHY: {
            imageSrc: p.Z,
            style: {
                position: 'absolute',
                width: '600px'
            }
        },
        STORM: {
            imageSrc: h.Z,
            style: {
                position: 'absolute',
                width: '850px'
            }
        }
    },
    v = (e) =>
        (0, o.EQ)(e)
            .with('1252405010608951358', () => E.TIDE)
            .with('1252405017688936508', () => E.TIDE)
            .with('1267521289330102344', () => E.STORM)
            .with('1267521289355268154', () => E.STORM)
            .with('1266160780928352268', () => E.STORM)
            .with('1266160780978556969', () => E.STORM)
            .with('1266161342801383434', () => E.STORM)
            .with('1220513995308400680', () => E.STORM)
            .with('1220513984273186816', () => E.STORM)
            .with('1220513989729976411', () => E.STORM)
            .with('1220514048068812901', () => E.STORM)
            .with('1266493591207940133', () => E.STORM)
            .with('1266493591275044903', () => E.STORM)
            .with('1220432740638523543', () => E.STORM)
            .with('1220513977683935373', () => E.SHY)
            .with('1220432647453409384', () => E.SHY)
            .with('1220432697718083614', () => E.SHY)
            .otherwise(() => null),
    y = (e) =>
        (0, o.EQ)(e)
            .with('1262491137386614805', () => E.ROBERT)
            .otherwise(() => null),
    b = {
        [c.C5.TIDE]: {
            artSrc: r(94899),
            backgroundSrc: r(987583),
            title: () => d.intl.string(d.t.qFKNgI),
            description: () => d.intl.string(d.t.PgDVTk)
        },
        [c.C5.ROBERT]: {
            artSrc: r(638431),
            backgroundSrc: r(619359),
            title: () => d.intl.string(d.t.pAJTKi),
            description: () => d.intl.string(d.t.EDi1u7)
        },
        [c.C5.EQUINOX_FALL]: {
            artSrc: r(148718),
            backgroundSrc: r(866074)
        }
    };
