n.d(t, { AB: () => u, FF: () => E, K9: () => I }), n(64700);
var i,
    r = n(758836),
    a = n(955971),
    s = n(536769),
    _ = n(205942),
    l = n(550879),
    o = n(731242),
    E =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.TOOLTIP = 1)] = "TOOLTIP"),
        (i[(i.BADGE = 2)] = "BADGE"),
        (i[(i.COACHMARK = 3)] = "COACHMARK"),
        (i[(i.TAB_TOOLTIP = 4)] = "TAB_TOOLTIP"),
        i);
class d {
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
let c = {
        ROBERT: new d({ src: _.A, style: { position: "absolute", width: "400px", right: "-200px", zIndex: 10 } }),
        SHY: new d({
            src: l.A,
            style: { position: "absolute", width: "600px", left: "calc(50vw - 300px)", top: "calc(50vh - 300px)" },
        }),
        STORM: new d({
            src: o.A,
            style: { position: "absolute", width: "850px", left: "calc(50vw - 425px)", top: "calc(50vh - 425px)" },
        }),
        ORB_PURCHASE: new d({
            src: { dark: a.A, light: s.A },
            animated: !0,
            style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover" },
        }),
    },
    u = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === r.gs.ORB) return c.ORB_PURCHASE;
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
                return c.STORM;
            case "1220513977683935373":
            case "1220432647453409384":
            case "1220432697718083614":
                return c.SHY;
            default:
                return null;
        }
    },
    I = (e) => ("1262491137386614805" === e ? c.ROBERT : null);
