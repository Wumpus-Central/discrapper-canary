n.d(t, { A: () => u }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    l = n(920569),
    c = n(788868);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: d, idleAnimationState: f } = e,
        p = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        [_, h] = i.useState(d),
        m = i.useRef((0, l.z)(t, _)),
        [g, E] = i.useState(null == f),
        [b, y] = i.useState(!1),
        [O, A] = i.useState(-1),
        v = () => {
            (m.current = (0, l.z)(t, _)), A((e) => e + 1);
        },
        S = () => {
            E(!1), y(!0), A(-1), h(d);
        };
    i.useEffect(() => {
        null == f && h(d);
    }, [f, d]);
    let I = {
            applyAnimation: v,
            idleAnimationState: f,
            isChanging: b,
            resetAnimation: S,
            versionKey: O,
        },
        T = i.useRef(I);
    i.useEffect(() => {
        T.current = I;
    }),
        i.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = T.current;
            null != f && t >= 0 ? e() : n();
        }, [t, f]),
        i.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = T.current;
            (t && null != n) || e();
        }, [_]),
        i.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = T.current;
            b && (E(null == t), y(!1), e());
        }, [b]);
    let C = () => {
        null != f && (h(f), E(!0));
    };
    if (!c.o2.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
    return (0, r.jsx)(s.akl, {
        importData: m.current,
        shouldAnimate: !p && u,
        className: n,
        versionKey: O,
        onComplete: null != f ? C : void 0,
        loop: g,
    });
}
