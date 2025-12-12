n.d(t, {
    D: () => I,
    N: () => p,
});
var r = n(990681),
    i = n(82255),
    a = n(509440),
    o = n(8062),
    _ = n(343573),
    s = n(309063),
    c = n(886649),
    E = n(687566),
    l = n(13379);
let u = [],
    d = new Map();
function p() {
    if ((0, l.QV)() && _.Z1) {
        let e = (0, E.YF)(({ metric: e }) => {
            if (void 0 == e.value) return;
            let t = e.entries.find((t) => t.duration === e.value && f[t.name]);
            if (!t) return;
            let { interactionId: n } = t,
                E = f[t.name],
                u = (0, l.XL)(_.Z1 + t.startTime),
                p = (0, l.XL)(e.value),
                I = (0, i.HN)(),
                T = I ? (0, i.Gx)(I) : void 0,
                R = (null != n ? d.get(n) : void 0) || T,
                A = R ? (0, i.XU)(R).description : (0, a.nZ)().getScopeData().transactionName,
                N = (0, s.Rt)(t.target),
                h = (0, c.Jr)({
                    [o.S3]: "auto.http.browser.inp",
                    [o.$J]: `ui.interaction.${E}`,
                    [o.JQ]: t.duration,
                }),
                O = (0, l.fi)({
                    name: N,
                    transaction: A,
                    attributes: h,
                    startTime: u,
                });
            (0, r.x)([
                O,
                "optionalAccess",
                (e) => e.addEvent,
                "call",
                (t) =>
                    t("inp", {
                        [o.E1]: "millisecond",
                        [o.Wb]: e.value,
                    }),
            ]),
                (0, r.x)([O, "optionalAccess", (e) => e.end, "call", (e) => e(u + p)]);
        });
        return () => {
            e();
        };
    }
    return () => void 0;
}
let f = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press",
};
function I(e) {
    let t = ({ entries: e }) => {
        let t = (0, i.HN)(),
            n = t && (0, i.Gx)(t);
        e.forEach((e) => {
            if (!(0, E.cN)(e) || !n) return;
            let t = e.interactionId;
            if (null != t && !d.has(t)) {
                if (u.length > 10) {
                    let e = u.shift();
                    d.delete(e);
                }
                u.push(t), d.set(t, n);
            }
        });
    };
    (0, E._j)("event", t), (0, E._j)("first-input", t);
}
