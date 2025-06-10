a.d(e, {
    D: () => A,
    N: () => N
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
    u = a(108185);
let I = [],
    R = new Map();
function N() {
    if ((0, u.QV)() && i.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                a = (0, r.s3)();
            if (!a || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && d[e.name]);
            if (!l) return;
            let { interactionId: I } = l,
                N = d[l.name],
                A = a.getOptions(),
                f = (0, u.XL)(i.Z1 + l.startTime),
                T = (0, u.XL)(t.value),
                p = (0, r.nZ)(),
                L = (0, _.HN)(),
                h = L ? (0, _.Gx)(L) : void 0,
                O = (null != I ? R.get(I) : void 0) || h,
                D = O ? (0, _.XU)(O).description : p.getScopeData().transactionName,
                g = p.getUser(),
                P = a.getIntegrationByName('Replay'),
                C = P && P.getReplayId(),
                y = void 0 !== g ? g.email || g.id || g.ip_address : void 0;
            try {
                e = p.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let m = (0, c.Rt)(l.target),
                v = (0, E.Jr)({
                    release: A.release,
                    environment: A.environment,
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
                    op: `ui.interaction.${N}`,
                    attributes: v,
                    startTime: f,
                    experimental: { standalone: !0 }
                });
            U.addEvent('inp', {
                [n.E1]: 'millisecond',
                [n.Wb]: t.value
            }),
                U.end(f + T);
        });
        return () => {
            t();
        };
    }
    return () => void 0;
}
let d = {
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
function A(t) {
    let e = ({ entries: t }) => {
        let e = (0, _.HN)(),
            a = e && (0, _.Gx)(e);
        t.forEach((t) => {
            if (!(0, l.cN)(t) || !a) return;
            let e = t.interactionId;
            if (null != e && !R.has(e)) {
                if (I.length > 10) {
                    let t = I.shift();
                    R.delete(t);
                }
                I.push(e), R.set(e, a);
            }
        });
    };
    (0, l._j)('event', e), (0, l._j)('first-input', e);
}
