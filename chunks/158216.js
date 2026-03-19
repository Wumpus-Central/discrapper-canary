"use strict";
n.d(t, { AB: () => _, FF: () => u, K9: () => f }), n(64700);
var r = n(758836),
    i = n(955971),
    s = n(536769),
    a = n(205942),
    o = n(550879),
    l = n(731242),
    u = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.TOOLTIP = 1)] = "TOOLTIP"),
            (e[(e.COACHTIP = 2)] = "COACHTIP"),
            (e[(e.COACHTIP_HEADLINE_ONLY = 3)] = "COACHTIP_HEADLINE_ONLY"),
            (e[(e.BADGE = 4)] = "BADGE"),
            (e[(e.COACHMARK = 5)] = "COACHMARK"),
            (e[(e.TAB_TOOLTIP = 6)] = "TAB_TOOLTIP"),
            e
        );
    })({});
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
let d = {
        ROBERT: new c({ src: a.A, style: { position: "absolute", width: "400px", right: "-200px", zIndex: 10 } }),
        SHY: new c({
            src: o.A,
            style: { position: "absolute", width: "600px", left: "calc(50vw - 300px)", top: "calc(50vh - 300px)" },
        }),
        STORM: new c({
            src: l.A,
            style: { position: "absolute", width: "850px", left: "calc(50vw - 425px)", top: "calc(50vh - 425px)" },
        }),
        ORB_PURCHASE: new c({
            src: { dark: i.A, light: s.A },
            animated: !0,
            style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover" },
        }),
    },
    _ = (e) => {
        let { purchaseType: t, skuId: n } = e;
        if (t === r.gs.ORB) return d.ORB_PURCHASE;
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
                return d.STORM;
            case "1220513977683935373":
            case "1220432647453409384":
            case "1220432697718083614":
                return d.SHY;
            default:
                return null;
        }
    },
    f = (e) => ("1262491137386614805" === e ? d.ROBERT : null);
