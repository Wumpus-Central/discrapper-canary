"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    l = n(920569),
    u = n(788868);
function c(e) {
    let { giftStyle: t, className: n, shouldAnimate: c = !0, defaultAnimationState: d, idleAnimationState: _ } = e,
        f = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        [p, h] = i.useState(d),
        m = i.useRef((0, l.z)(t, p)),
        [g, E] = i.useState(null == _),
        [A, I] = i.useState(!1),
        [T, y] = i.useState(-1),
        S = () => {
            (m.current = (0, l.z)(t, p)), y((e) => e + 1);
        },
        v = () => {
            E(!1), I(!0), y(-1), h(d);
        };
    i.useEffect(() => {
        null == _ && h(d);
    }, [_, d]);
    let C = { applyAnimation: S, idleAnimationState: _, isChanging: A, resetAnimation: v, versionKey: T },
        b = i.useRef(C);
    i.useEffect(() => {
        b.current = C;
    }),
        i.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = b.current;
            null != _ && t >= 0 ? e() : n();
        }, [t, _]),
        i.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = b.current;
            (t && null != n) || e();
        }, [p]),
        i.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = b.current;
            A && (E(null == t), I(!1), e());
        }, [A]);
    let N = () => {
        null != _ && (h(_), E(!0));
    };
    if (!u.o2.hasOwnProperty(t)) throw Error(`Unexpected giftStyle ${t}`);
    return (0, r.jsx)(s.akl, {
        importData: m.current,
        shouldAnimate: !f && c,
        className: n,
        versionKey: T,
        onComplete: null != _ ? N : void 0,
        loop: g,
    });
}
