a.d(e, {
    D: () => A,
    N: () => d,
});
var r = a(263449),
    _ = a(696486),
    n = a(988097),
    o = a(152228),
    i = a(101284),
    c = a(467510),
    E = a(370336),
    s = a(395848),
    l = a(501684),
    I = a(108185);
let u = [],
    R = new Map();
function d() {
    if ((0, I.QV)() && i.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                a = (0, r.s3)();
            if (!a || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && N[e.name]);
            if (!l) return;
            let { interactionId: u } = l,
                d = N[l.name],
                A = a.getOptions(),
                T = (0, I.XL)(i.Z1 + l.startTime),
                f = (0, I.XL)(t.value),
                L = (0, r.nZ)(),
                p = (0, _.HN)(),
                h = p ? (0, _.Gx)(p) : void 0,
                O = (null != u ? R.get(u) : void 0) || h,
                P = O ? (0, _.XU)(O).description : L.getScopeData().transactionName,
                D = L.getUser(),
                g = a.getIntegrationByName("Replay"),
                C = g && g.getReplayId(),
                m = void 0 !== D ? D.email || D.id || D.ip_address : void 0;
            try {
                e = L.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let v = (0, c.Rt)(l.target),
                S = (0, E.Jr)({
                    release: A.release,
                    environment: A.environment,
                    transaction: P,
                    [n.JQ]: t.value,
                    [n.S3]: "auto.http.browser.inp",
                    user: m || void 0,
                    profile_id: e || void 0,
                    replay_id: C || void 0,
                    "user_agent.original": s.m.navigator && s.m.navigator.userAgent,
                }),
                y = (0, o.qp)({
                    name: v,
                    op: `ui.interaction.${d}`,
                    attributes: S,
                    startTime: T,
                    experimental: { standalone: !0 },
                });
            y.addEvent("inp", {
                [n.E1]: "millisecond",
                [n.Wb]: t.value,
            }),
                y.end(T + f);
        });
        return () => {
            t();
        };
    }
    return () => void 0;
}
let N = {
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
function A(t) {
    let e = ({ entries: t }) => {
        let e = (0, _.HN)(),
            a = e && (0, _.Gx)(e);
        t.forEach((t) => {
            if (!(0, l.cN)(t) || !a) return;
            let e = t.interactionId;
            if (null != e && !R.has(e)) {
                if (u.length > 10) {
                    let t = u.shift();
                    R.delete(t);
                }
                u.push(e), R.set(e, a);
            }
        });
    };
    (0, l._j)("event", e), (0, l._j)("first-input", e);
}
