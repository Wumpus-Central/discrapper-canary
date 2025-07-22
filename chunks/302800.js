(n.d(t, {
    R9: () => g,
    UY: () => f,
    k2: () => u,
    v: () => p
}),
    n(73800));
var r = n(215023),
    i = n(497414),
    a = n(252802),
    o = n(452823),
    s = n(744709),
    l = n(39934);
function c(e, t, n) {
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
var u = (function (e) {
    return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.TOOLTIP = 1)] = 'TOOLTIP'), (e[(e.COACHTIP = 2)] = 'COACHTIP'), (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (e[(e.BADGE = 4)] = 'BADGE'), (e[(e.COACHMARK = 5)] = 'COACHMARK'), e);
})({});
class d {
    constructor({ src: e, style: t, animated: n }) {
        var r = this;
        (c(this, 'src', void 0),
            c(this, 'style', void 0),
            c(this, 'animated', void 0),
            c(this, 'getSrc', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return 'string' == typeof r.src ? r.src : e ? r.src.dark : r.src.light;
            }),
            (this.src = e),
            (this.style = t),
            (this.animated = n));
    }
}
let _ = {
        ROBERT: new d({
            src: o.Z,
            style: {
                position: 'absolute',
                width: '400px',
                right: '-200px',
                zIndex: 10
            }
        }),
        SHY: new d({
            src: s.Z,
            style: {
                position: 'absolute',
                width: '600px',
                left: 'calc(50vw - 300px)',
                top: 'calc(50vh - 300px)'
            }
        }),
        STORM: new d({
            src: l.Z,
            style: {
                position: 'absolute',
                width: '850px',
                left: 'calc(50vw - 425px)',
                top: 'calc(50vh - 425px)'
            }
        }),
        ORB_PURCHASE: new d({
            src: {
                dark: i.Z,
                light: a.Z
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
    f = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === r.o8.ORB) return _.ORB_PURCHASE;
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
                return _.STORM;
            case '1220513977683935373':
            case '1220432647453409384':
            case '1220432697718083614':
                return _.SHY;
            default:
                return null;
        }
    },
    p = (e) => ('1262491137386614805' === e ? _.ROBERT : null),
    h = {
        '1333866045236314327': '1333866045261480007',
        '1333866045261480007': '1333866045236314327',
        '1333866045282451527': '1333866045303423026',
        '1333866045303423026': '1333866045282451527'
    },
    m = {
        '1217624148080332820': '1217626219651006495',
        '1217626219651006495': '1217624148080332820',
        '1217625289681801316': '1217625572168044604',
        '1217625572168044604': '1217625289681801316',
        '1217625794382401577': '1217626024540508170',
        '1217626024540508170': '1217625794382401577'
    },
    g = (e, t) => {
        let n = h[e];
        return (null == n && t && (n = m[e]), null != n ? n : null);
    };
