a.d(e, {
    D: () => f,
    N: () => R
});
var r = a(263449),
    _ = a(696486),
    n = a(988097),
    o = a(152228),
    i = a(101284),
    c = a(467510),
    s = a(370336),
    E = a(395848),
    l = a(501684),
    u = a(108185);
let I = [],
    d = new Map();
function R() {
    if ((0, u.QV)() && i.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                a = (0, r.s3)();
            if (!a || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && N[e.name]);
            if (!l) return;
            let { interactionId: I } = l,
                R = N[l.name],
                f = a.getOptions(),
                A = (0, u.XL)(i.Z1 + l.startTime),
                T = (0, u.XL)(t.value),
                p = (0, r.nZ)(),
                L = (0, _.HN)(),
                h = L ? (0, _.Gx)(L) : void 0,
                O = (null != I ? d.get(I) : void 0) || h,
                P = O ? (0, _.XU)(O).description : p.getScopeData().transactionName,
                g = p.getUser(),
                D = a.getIntegrationByName('Replay'),
                C = D && D.getReplayId(),
                m = void 0 !== g ? g.email || g.id || g.ip_address : void 0;
            try {
                e = p.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let v = (0, c.Rt)(l.target),
                y = (0, s.Jr)({
                    release: f.release,
                    environment: f.environment,
                    transaction: P,
                    [n.JQ]: t.value,
                    [n.S3]: 'auto.http.browser.inp',
                    user: m || void 0,
                    profile_id: e || void 0,
                    replay_id: C || void 0,
                    'user_agent.original': E.m.navigator && E.m.navigator.userAgent
                }),
                S = (0, o.qp)({
                    name: v,
                    op: `ui.interaction.${R}`,
                    attributes: y,
                    startTime: A,
                    experimental: { standalone: !0 }
                });
            S.addEvent('inp', {
                [n.E1]: 'millisecond',
                [n.Wb]: t.value
            }),
                S.end(A + T);
        });
        return () => {
            t();
        };
    }
    return () => void 0;
}
let N = {
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
function f(t) {
    let e = ({ entries: t }) => {
        let e = (0, _.HN)(),
            a = e && (0, _.Gx)(e);
        t.forEach((t) => {
            if (!(0, l.cN)(t) || !a) return;
            let e = t.interactionId;
            if (null != e && !d.has(e)) {
                if (I.length > 10) {
                    let t = I.shift();
                    d.delete(t);
                }
                I.push(e), d.set(e, a);
            }
        });
    };
    (0, l._j)('event', e), (0, l._j)('first-input', e);
}
