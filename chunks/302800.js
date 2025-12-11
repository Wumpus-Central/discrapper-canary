n.d(t, {
    UY: () => p,
    k2: () => u,
    v: () => _,
}),
    n(473749);
var r = n(215023),
    i = n(950268),
    a = n(973123),
    o = n(135126),
    s = n(274123),
    l = n(807832);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var u = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.TOOLTIP = 1)] = "TOOLTIP"),
        (e[(e.COACHTIP = 2)] = "COACHTIP"),
        (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = "COACHTIP_HEADLINE_ONLY"),
        (e[(e.BADGE = 4)] = "BADGE"),
        (e[(e.COACHMARK = 5)] = "COACHMARK"),
        e
    );
})({});
class d {
    constructor({ src: e, style: t, animated: n }) {
        var r = this;
        c(this, "src", void 0),
            c(this, "style", void 0),
            c(this, "animated", void 0),
            c(this, "getSrc", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return "string" == typeof r.src ? r.src : e ? r.src.dark : r.src.light;
            }),
            (this.src = e),
            (this.style = t),
            (this.animated = n);
    }
}
let f = {
        ROBERT: new d({
            src: o.Z,
            style: {
                position: "absolute",
                width: "400px",
                right: "-200px",
                zIndex: 10,
            },
        }),
        SHY: new d({
            src: s.Z,
            style: {
                position: "absolute",
                width: "600px",
                left: "calc(50vw - 300px)",
                top: "calc(50vh - 300px)",
            },
        }),
        STORM: new d({
            src: l.Z,
            style: {
                position: "absolute",
                width: "850px",
                left: "calc(50vw - 425px)",
                top: "calc(50vh - 425px)",
            },
        }),
        ORB_PURCHASE: new d({
            src: {
                dark: i.Z,
                light: a.Z,
            },
            animated: !0,
            style: {
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectFit: "cover",
            },
        }),
    },
    p = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === r.o8.ORB) return f.ORB_PURCHASE;
        switch (n) {
            case "1267521289330102344":
            case "1267521289355268154":
            case "1266160780928352268":
            case "1266160780978556969":
            case "1266161342801383434":
            case "1220513995308400680":
            case "1220513984273186816":
            case "1220513989729976411":
            case "1220514048068812901":
            case "1266493591207940133":
            case "1266493591275044903":
            case "1220432740638523543":
                return f.STORM;
            case "1220513977683935373":
            case "1220432647453409384":
            case "1220432697718083614":
                return f.SHY;
            default:
                return null;
        }
    },
    _ = (e) => ("1262491137386614805" === e ? f.ROBERT : null);
