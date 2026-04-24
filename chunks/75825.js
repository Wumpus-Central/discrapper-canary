"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(17928),
    r = n(604121),
    a = n(775602),
    o = n(920569),
    c = n(788868);
function d(e) {
    let { giftStyle: t, className: n, shouldAnimate: d = !0, defaultAnimationState: u, idleAnimationState: _ } = e,
        h = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        [p, m] = s.useState(u),
        g = s.useRef((0, o.z)(t, p)),
        [A, f] = s.useState(null == _),
        [E, x] = s.useState(!1),
        [I, v] = s.useState(-1);
    s.useEffect(() => {
        null == _ && m(u);
    }, [_, u]);
    let N = {
            applyAnimation: () => {
                (g.current = (0, o.z)(t, p)), v((e) => e + 1);
            },
            idleAnimationState: _,
            isChanging: E,
            resetAnimation: () => {
                f(!1), x(!0), v(-1), m(u);
            },
            versionKey: I,
        },
        C = s.useRef(N);
    if (
        (s.useEffect(() => {
            C.current = N;
        }),
        s.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = C.current;
            null != _ && t >= 0 ? e() : n();
        }, [t, _]),
        s.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = C.current;
            (t && null != n) || e();
        }, [p]),
        s.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = C.current;
            E && (f(null == t), x(!1), e());
        }, [E]),
        !c.o2.hasOwnProperty(t))
    )
        throw Error(`Unexpected giftStyle ${t}`);
    return (0, i.jsx)(r.a, {
        importData: g.current,
        shouldAnimate: !h && d,
        className: n,
        versionKey: I,
        onComplete:
            null != _
                ? () => {
                      null != _ && (m(_), f(!0));
                  }
                : void 0,
        loop: A,
    });
}
