"use strict";
n.d(t, { AB: () => f, FF: () => c, K9: () => p }), n(64700);
var r,
    i = n(758836),
    s = n(955971),
    a = n(536769),
    o = n(205942),
    l = n(550879),
    u = n(731242),
    c =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.TOOLTIP = 1)] = "TOOLTIP"),
        (r[(r.BADGE = 2)] = "BADGE"),
        (r[(r.COACHMARK = 3)] = "COACHMARK"),
        (r[(r.TAB_TOOLTIP = 4)] = "TAB_TOOLTIP"),
        r);
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
let _ = {
        ROBERT: new d({ src: o.A, style: { position: "absolute", width: "400px", right: "-200px", zIndex: 10 } }),
        SHY: new d({
            src: l.A,
            style: { position: "absolute", width: "600px", left: "calc(50vw - 300px)", top: "calc(50vh - 300px)" },
        }),
        STORM: new d({
            src: u.A,
            style: { position: "absolute", width: "850px", left: "calc(50vw - 425px)", top: "calc(50vh - 425px)" },
        }),
        ORB_PURCHASE: new d({
            src: { dark: s.A, light: a.A },
            animated: !0,
            style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover" },
        }),
    },
    f = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === i.gs.ORB) return _.ORB_PURCHASE;
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
                return _.STORM;
            case "1220513977683935373":
            case "1220432647453409384":
            case "1220432697718083614":
                return _.SHY;
            default:
                return null;
        }
    },
    p = (e) => ("1262491137386614805" === e ? _.ROBERT : null);
