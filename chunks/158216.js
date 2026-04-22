n.d(t, { AB: () => p, FF: () => d, K9: () => m }), n(64700);
var l,
    r = n(758836),
    i = n(955971),
    s = n(536769),
    a = n(205942),
    o = n(550879),
    u = n(731242),
    d =
        21552 == n.j
            ? (((l = {})[(l.NONE = 0)] = "NONE"),
              (l[(l.TOOLTIP = 1)] = "TOOLTIP"),
              (l[(l.BADGE = 2)] = "BADGE"),
              (l[(l.COACHMARK = 3)] = "COACHMARK"),
              (l[(l.TAB_TOOLTIP = 4)] = "TAB_TOOLTIP"),
              l)
            : null;
class c {
    src;
    style;
    animated;
    constructor({ src: e, style: t, animated: n }) {
        (this.src = e), (this.style = t), (this.animated = n);
    }
    getSrc = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return "string" == typeof e.src ? e.src : t ? e.src.dark : e.src.light;
        };
    })();
}
let C = {
        ROBERT: new c({ src: a.A, style: { position: "absolute", width: "400px", right: "-200px", zIndex: 10 } }),
        SHY: new c({
            src: o.A,
            style: { position: "absolute", width: "600px", left: "calc(50vw - 300px)", top: "calc(50vh - 300px)" },
        }),
        STORM: new c({
            src: u.A,
            style: { position: "absolute", width: "850px", left: "calc(50vw - 425px)", top: "calc(50vh - 425px)" },
        }),
        ORB_PURCHASE: new c({
            src: { dark: i.A, light: s.A },
            animated: !0,
            style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover" },
        }),
    },
    p = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === r.gs.ORB) return C.ORB_PURCHASE;
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
                return C.STORM;
            case "1220513977683935373":
            case "1220432647453409384":
            case "1220432697718083614":
                return C.SHY;
            default:
                return null;
        }
    },
    m = (e) => ("1262491137386614805" === e ? C.ROBERT : null);
