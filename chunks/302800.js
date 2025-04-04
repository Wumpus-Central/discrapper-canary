n.d(t, {
    M7: () => m,
    R9: () => I,
    UY: () => b,
    k2: () => h,
    v: () => y
}),
    n(192379);
var r = n(691324),
    i = n(180650),
    o = n(44315),
    a = n(215023),
    s = n(388032),
    l = n(497414),
    c = n(252802),
    u = n(452823),
    d = n(744709),
    f = n(39934),
    _ = n(12981);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var h = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.TOOLTIP = 1)] = 'TOOLTIP'), (e[(e.COACHTIP = 2)] = 'COACHTIP'), (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (e[(e.BADGE = 4)] = 'BADGE'), e;
})({});
let m = (e) =>
    e === i.T.TIDE
        ? {
              label: () => s.NW.string(s.t['h/uBCQ']),
              iconSrc: _.Z,
              style: {
                  background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                  boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                  color: (0, o.Lq)(r.I.WHITE_100)
              }
          }
        : null;
class g {
    constructor({ src: e, style: t, animated: n }) {
        var r = this;
        p(this, 'src', void 0),
            p(this, 'style', void 0),
            p(this, 'animated', void 0),
            p(this, 'getSrc', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return 'string' == typeof r.src ? r.src : e ? r.src.dark : r.src.light;
            }),
            (this.src = e),
            (this.style = t),
            (this.animated = n);
    }
}
let E = {
        ROBERT: new g({
            src: u.Z,
            style: {
                position: 'absolute',
                width: '400px',
                right: '-200px',
                zIndex: 10
            }
        }),
        SHY: new g({
            src: d.Z,
            style: {
                position: 'absolute',
                width: '600px',
                left: 'calc(50vw - 300px)',
                top: 'calc(50vh - 300px)'
            }
        }),
        STORM: new g({
            src: f.Z,
            style: {
                position: 'absolute',
                width: '850px',
                left: 'calc(50vw - 425px)',
                top: 'calc(50vh - 425px)'
            }
        }),
        ORB_PURCHASE: new g({
            src: {
                dark: l.Z,
                light: c.Z
            },
            animated: !0,
            style: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                objectFit: 'cover'
            }
        })
    },
    b = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === a.o8.ORB) return E.ORB_PURCHASE;
        switch (n) {
            case '1267521289330102344':
            case '1267521289355268154':
            case '1266160780928352268':
            case '1266160780978556969':
            case '1266161342801383434':
            case '1220513995308400680':
            case '1220513984273186816':
            case '1220513989729976411':
            case '1220514048068812901':
            case '1266493591207940133':
            case '1266493591275044903':
            case '1220432740638523543':
                return E.STORM;
            case '1220513977683935373':
            case '1220432647453409384':
            case '1220432697718083614':
                return E.SHY;
            default:
                return null;
        }
    },
    y = (e) => ('1262491137386614805' === e ? E.ROBERT : null),
    v = {
        '1333866045236314327': '1333866045261480007',
        '1333866045261480007': '1333866045236314327',
        '1333866045282451527': '1333866045303423026',
        '1333866045303423026': '1333866045282451527'
    },
    O = {
        '1217624148080332820': '1217626219651006495',
        '1217626219651006495': '1217624148080332820',
        '1217625289681801316': '1217625572168044604',
        '1217625572168044604': '1217625289681801316',
        '1217625794382401577': '1217626024540508170',
        '1217626024540508170': '1217625794382401577'
    },
    I = (e, t) => {
        let n = v[e];
        return null == n && t && (n = O[e]), null != n ? n : null;
    };
