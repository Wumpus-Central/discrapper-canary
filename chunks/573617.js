r.d(t, {
    D: () => R,
    N: () => I,
});
var n = r(990681),
    a = r(82255),
    i = r(509440),
    o = r(8062),
    _ = r(343573),
    s = r(309063),
    c = r(886649),
    E = r(687566),
    l = r(13379);
let u = [],
    d = new Map();
function I() {
    if ((0, l.QV)() && _.Z1) {
        let e = (0, E.YF)(({ metric: e }) => {
            if (void 0 == e.value) return;
            let t = e.entries.find((t) => t.duration === e.value && p[t.name]);
            if (!t) return;
            let { interactionId: r } = t,
                E = p[t.name],
                u = (0, l.XL)(_.Z1 + t.startTime),
                I = (0, l.XL)(e.value),
                R = (0, a.HN)(),
                T = R ? (0, a.Gx)(R) : void 0,
                A = (null != r ? d.get(r) : void 0) || T,
                f = A ? (0, a.XU)(A).description : (0, i.nZ)().getScopeData().transactionName,
                N = (0, s.Rt)(t.target),
                O = (0, c.Jr)({
                    [o.S3]: "auto.http.browser.inp",
                    [o.$J]: `ui.interaction.${E}`,
                    [o.JQ]: t.duration,
                }),
                h = (0, l.fi)({
                    name: N,
                    transaction: f,
                    attributes: O,
                    startTime: u,
                });
            (0, n.x)([
                h,
                "optionalAccess",
                (e) => e.addEvent,
                "call",
                (t) =>
                    t("inp", {
                        [o.E1]: "millisecond",
                        [o.Wb]: e.value,
                    }),
            ]),
                (0, n.x)([h, "optionalAccess", (e) => e.end, "call", (e) => e(u + I)]);
        });
        return () => {
            e();
        };
    }
    return () => void 0;
}
let p = {
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
function R(e) {
    let t = ({ entries: e }) => {
        let t = (0, a.HN)(),
            r = t && (0, a.Gx)(t);
        e.forEach((e) => {
            if (!(0, E.cN)(e) || !r) return;
            let t = e.interactionId;
            if (null != t && !d.has(t)) {
                if (u.length > 10) {
                    let e = u.shift();
                    d.delete(e);
                }
                u.push(t), d.set(t, r);
            }
        });
    };
    (0, E._j)("event", t), (0, E._j)("first-input", t);
}
