_.d(e, {
    D: () => T,
    N: () => A,
});
var a = _(263449),
    r = _(696486),
    n = _(988097),
    o = _(152228),
    E = _(101284),
    i = _(467510),
    c = _(370336),
    s = _(395848),
    l = _(501684),
    I = _(108185);
let R = [],
    N = new Map();
function A() {
    if ((0, I.QV)() && E.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                _ = (0, a.s3)();
            if (!_ || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && u[e.name]);
            if (!l) return;
            let { interactionId: R } = l,
                A = u[l.name],
                T = _.getOptions(),
                d = (0, I.XL)(E.Z1 + l.startTime),
                f = (0, I.XL)(t.value),
                O = (0, a.nZ)(),
                L = (0, r.HN)(),
                p = L ? (0, r.Gx)(L) : void 0,
                C = (null != R ? N.get(R) : void 0) || p,
                P = C ? (0, r.XU)(C).description : O.getScopeData().transactionName,
                h = O.getUser(),
                D = _.getIntegrationByName("Replay"),
                S = D && D.getReplayId(),
                g = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
            try {
                e = O.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let y = (0, i.Rt)(l.target),
                m = (0, c.Jr)({
                    release: T.release,
                    environment: T.environment,
                    transaction: P,
                    [n.JQ]: t.value,
                    [n.S3]: "auto.http.browser.inp",
                    user: g || void 0,
                    profile_id: e || void 0,
                    replay_id: S || void 0,
                    "user_agent.original": s.m.navigator && s.m.navigator.userAgent,
                }),
                G = (0, o.qp)({
                    name: y,
                    op: `ui.interaction.${A}`,
                    attributes: m,
                    startTime: d,
                    experimental: { standalone: !0 },
                });
            G.addEvent("inp", {
                [n.E1]: "millisecond",
                [n.Wb]: t.value,
            }),
                G.end(d + f);
        });
        return () => {
            t();
        };
    }
    return () => void 0;
}
let u = {
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
        let e = (0, r.HN)(),
            _ = e && (0, r.Gx)(e);
        t.forEach((t) => {
            if (!(0, l.cN)(t) || !_) return;
            let e = t.interactionId;
            if (null != e && !N.has(e)) {
                if (R.length > 10) {
                    let t = R.shift();
                    N.delete(t);
                }
                R.push(e), N.set(e, _);
            }
        });
    };
    (0, l._j)("event", e), (0, l._j)("first-input", e);
}
