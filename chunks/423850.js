a.d(e, {
    D: () => f,
    N: () => d
});
var r = a(263449),
    n = a(696486),
    _ = a(988097),
    o = a(152228),
    i = a(101284),
    c = a(467510),
    s = a(370336),
    E = a(395848),
    l = a(501684),
    u = a(108185);
let I = [],
    R = new Map();
function d() {
    if ((0, u.QV)() && i.Z1) {
        let t = (0, l.YF)(({ metric: t }) => {
            let e,
                a = (0, r.s3)();
            if (!a || void 0 == t.value) return;
            let l = t.entries.find((e) => e.duration === t.value && A[e.name]);
            if (!l) return;
            let { interactionId: I } = l,
                d = A[l.name],
                f = a.getOptions(),
                p = (0, u.XL)(i.Z1 + l.startTime),
                N = (0, u.XL)(t.value),
                T = (0, r.nZ)(),
                L = (0, n.HN)(),
                h = L ? (0, n.Gx)(L) : void 0,
                O = (null != I ? R.get(I) : void 0) || h,
                D = O ? (0, n.XU)(O).description : T.getScopeData().transactionName,
                g = T.getUser(),
                P = a.getIntegrationByName('Replay'),
                m = P && P.getReplayId(),
                y = void 0 !== g ? g.email || g.id || g.ip_address : void 0;
            try {
                e = T.getScopeData().contexts.profile.profile_id;
            } catch (t) {}
            let v = (0, c.Rt)(l.target),
                C = (0, s.Jr)({
                    release: f.release,
                    environment: f.environment,
                    transaction: D,
                    [_.JQ]: t.value,
                    [_.S3]: 'auto.http.browser.inp',
                    user: y || void 0,
                    profile_id: e || void 0,
                    replay_id: m || void 0,
                    'user_agent.original': E.m.navigator && E.m.navigator.userAgent
                }),
                S = (0, o.qp)({
                    name: v,
                    op: `ui.interaction.${d}`,
                    attributes: C,
                    startTime: p,
                    experimental: { standalone: !0 }
                });
            S.addEvent('inp', {
                [_.E1]: 'millisecond',
                [_.Wb]: t.value
            }),
                S.end(p + N);
        });
        return () => {
            t();
        };
    }
    return () => void 0;
}
let A = {
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
        let e = (0, n.HN)(),
            a = e && (0, n.Gx)(e);
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
