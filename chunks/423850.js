r.d(t, {
    D: () => T,
    N: () => p,
});
var n = r(263449),
    a = r(696486),
    i = r(988097),
    o = r(152228),
    _ = r(101284),
    s = r(467510),
    c = r(370336),
    E = r(395848),
    l = r(501684),
    u = r(108185);
let d = [],
    I = new Map();
function p() {
    if ((0, u.QV)() && _.Z1) {
        let e = (0, l.YF)(({ metric: e }) => {
            let t,
                r = (0, n.s3)();
            if (!r || void 0 == e.value) return;
            let l = e.entries.find((t) => t.duration === e.value && R[t.name]);
            if (!l) return;
            let { interactionId: d } = l,
                p = R[l.name],
                T = r.getOptions(),
                A = (0, u.XL)(_.Z1 + l.startTime),
                N = (0, u.XL)(e.value),
                f = (0, n.nZ)(),
                O = (0, a.HN)(),
                h = O ? (0, a.Gx)(O) : void 0,
                D = (null != d ? I.get(d) : void 0) || h,
                S = D ? (0, a.XU)(D).description : f.getScopeData().transactionName,
                L = f.getUser(),
                C = r.getIntegrationByName("Replay"),
                g = C && C.getReplayId(),
                m = void 0 !== L ? L.email || L.id || L.ip_address : void 0;
            try {
                t = f.getScopeData().contexts.profile.profile_id;
            } catch (e) {}
            let y = (0, s.Rt)(l.target),
                P = (0, c.Jr)({
                    release: T.release,
                    environment: T.environment,
                    transaction: S,
                    [i.JQ]: e.value,
                    [i.S3]: "auto.http.browser.inp",
                    user: m || void 0,
                    profile_id: t || void 0,
                    replay_id: g || void 0,
                    "user_agent.original": E.m.navigator && E.m.navigator.userAgent,
                }),
                v = (0, o.qp)({
                    name: y,
                    op: `ui.interaction.${p}`,
                    attributes: P,
                    startTime: A,
                    experimental: { standalone: !0 },
                });
            v.addEvent("inp", {
                [i.E1]: "millisecond",
                [i.Wb]: e.value,
            }),
                v.end(A + N);
        });
        return () => {
            e();
        };
    }
    return () => void 0;
}
let R = {
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
function T(e) {
    let t = ({ entries: e }) => {
        let t = (0, a.HN)(),
            r = t && (0, a.Gx)(t);
        e.forEach((e) => {
            if (!(0, l.cN)(e) || !r) return;
            let t = e.interactionId;
            if (null != t && !I.has(t)) {
                if (d.length > 10) {
                    let e = d.shift();
                    I.delete(e);
                }
                d.push(t), I.set(t, r);
            }
        });
    };
    (0, l._j)("event", t), (0, l._j)("first-input", t);
}
