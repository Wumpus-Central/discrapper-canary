a.d(e, {
    D: () => N,
    N: () => A
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
function A() {
    if ((0, I.QV)() && i.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                a = (0, r.s3)();
            if (!a || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && T[e.name]);
            if (!l) return;
            let { interactionId: u } = l,
                A = T[l.name],
                N = a.getOptions(),
                d = (0, I.XL)(i.Z1 + l.startTime),
                L = (0, I.XL)(t.value),
                p = (0, r.nZ)(),
                f = (0, _.HN)(),
                O = f ? (0, _.Gx)(f) : void 0,
                h = (null != u ? R.get(u) : void 0) || O,
                D = h ? (0, _.XU)(h).description : p.getScopeData().transactionName,
                P = p.getUser(),
                g = a.getIntegrationByName('Replay'),
                C = g && g.getReplayId(),
                y = void 0 !== P ? P.email || P.id || P.ip_address : void 0;
            try {
                e = p.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let m = (0, c.Rt)(l.target),
                v = (0, E.Jr)({
                    release: N.release,
                    environment: N.environment,
                    transaction: D,
                    [n.JQ]: t.value,
                    [n.S3]: 'auto.http.browser.inp',
                    user: y || void 0,
                    profile_id: e || void 0,
                    replay_id: C || void 0,
                    'user_agent.original': s.m.navigator && s.m.navigator.userAgent
                }),
                U = (0, o.qp)({
                    name: m,
                    op: `ui.interaction.${A}`,
                    attributes: v,
                    startTime: d,
                    experimental: { standalone: !0 }
                });
            U.addEvent('inp', {
                [n.E1]: 'millisecond',
                [n.Wb]: t.value
            }),
                U.end(d + L);
        });
        return () => {
            t();
        };
    }
    return () => void 0;
}
let T = {
    click: 'click',
    pointerdown: 'click',
    pointerup: 'click',
    mousedown: 'click',
    mouseup: 'click',
    touchstart: 'click',
    touchend: 'click',
    mouseover: 'hover',
    mouseout: 'hover',
    mouseenter: 'hover',
    mouseleave: 'hover',
    pointerover: 'hover',
    pointerout: 'hover',
    pointerenter: 'hover',
    pointerleave: 'hover',
    dragstart: 'drag',
    dragend: 'drag',
    drag: 'drag',
    dragenter: 'drag',
    dragleave: 'drag',
    dragover: 'drag',
    drop: 'drag',
    keydown: 'press',
    keyup: 'press',
    keypress: 'press',
    input: 'press'
};
function N(t) {
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
    (0, l._j)('event', e), (0, l._j)('first-input', e);
}
