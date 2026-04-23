"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(604121),
    o = n(775602),
    l = n(920569),
    u = n(788868);
function c(e) {
    let { giftStyle: t, className: n, shouldAnimate: c = !0, defaultAnimationState: d, idleAnimationState: _ } = e,
        f = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        [p, h] = i.useState(d),
        E = i.useRef((0, l.z)(t, p)),
        [m, g] = i.useState(null == _),
        [A, I] = i.useState(!1),
        [T, S] = i.useState(-1);
    i.useEffect(() => {
        null == _ && h(d);
    }, [_, d]);
    let y = {
            applyAnimation: () => {
                (E.current = (0, l.z)(t, p)), S((e) => e + 1);
            },
            idleAnimationState: _,
            isChanging: A,
            resetAnimation: () => {
                g(!1), I(!0), S(-1), h(d);
            },
            versionKey: T,
        },
        N = i.useRef(y);
    if (
        (i.useEffect(() => {
            N.current = y;
        }),
        i.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = N.current;
            null != _ && t >= 0 ? e() : n();
        }, [t, _]),
        i.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = N.current;
            (t && null != n) || e();
        }, [p]),
        i.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = N.current;
            A && (g(null == t), I(!1), e());
        }, [A]),
        !u.o2.hasOwnProperty(t))
    )
        throw Error(`Unexpected giftStyle ${t}`);
    return (0, r.jsx)(a.a, {
        importData: E.current,
        shouldAnimate: !f && c,
        className: n,
        versionKey: T,
        onComplete:
            null != _
                ? () => {
                      null != _ && (h(_), g(!0));
                  }
                : void 0,
        loop: m,
    });
}
