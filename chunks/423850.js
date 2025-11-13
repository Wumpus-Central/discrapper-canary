a.d(e, {
    D: () => T,
    N: () => A,
});
var r = a(263449),
    _ = a(696486),
    n = a(988097),
    o = a(152228),
    i = a(101284),
    E = a(467510),
    c = a(370336),
    s = a(395848),
    l = a(501684),
    I = a(108185);
let R = [],
    u = new Map();
function A() {
    if ((0, I.QV)() && i.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                a = (0, r.s3)();
            if (!a || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && N[e.name]);
            if (!l) return;
            let { interactionId: R } = l,
                A = N[l.name],
                T = a.getOptions(),
                d = (0, I.XL)(i.Z1 + l.startTime),
                f = (0, I.XL)(t.value),
                L = (0, r.nZ)(),
                p = (0, _.HN)(),
                O = p ? (0, _.Gx)(p) : void 0,
                h = (null != R ? u.get(R) : void 0) || O,
                P = h ? (0, _.XU)(h).description : L.getScopeData().transactionName,
                C = L.getUser(),
                D = a.getIntegrationByName("Replay"),
                g = D && D.getReplayId(),
                S = void 0 !== C ? C.email || C.id || C.ip_address : void 0;
            try {
                e = L.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let m = (0, E.Rt)(l.target),
                v = (0, c.Jr)({
                    release: T.release,
                    environment: T.environment,
                    transaction: P,
                    [n.JQ]: t.value,
                    [n.S3]: "auto.http.browser.inp",
                    user: S || void 0,
                    profile_id: e || void 0,
                    replay_id: g || void 0,
                    "user_agent.original": s.m.navigator && s.m.navigator.userAgent,
                }),
                y = (0, o.qp)({
                    name: m,
                    op: `ui.interaction.${A}`,
                    attributes: v,
                    startTime: d,
                    experimental: { standalone: !0 },
                });
            y.addEvent("inp", {
                [n.E1]: "millisecond",
                [n.Wb]: t.value,
            }),
                y.end(d + f);
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
function T(t) {
    let e = ({ entries: t }) => {
        let e = (0, _.HN)(),
            a = e && (0, _.Gx)(e);
        t.forEach((t) => {
            if (!(0, l.cN)(t) || !a) return;
            let e = t.interactionId;
            if (null != e && !u.has(e)) {
                if (R.length > 10) {
                    let t = R.shift();
                    u.delete(t);
                }
                R.push(e), u.set(e, a);
            }
        });
    };
    (0, l._j)("event", e), (0, l._j)("first-input", e);
}
