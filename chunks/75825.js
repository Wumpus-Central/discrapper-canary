n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    l = n(17928),
    s = n(604121),
    a = n(775602),
    u = n(920569),
    o = n(788868);
function c(e) {
    let { giftStyle: t, className: n, shouldAnimate: c = !0, defaultAnimationState: d, idleAnimationState: p } = e,
        h = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        [C, m] = r.useState(d),
        I = r.useRef((0, u.z)(t, C)),
        [E, f] = r.useState(null == p),
        [_, A] = r.useState(!1),
        [P, b] = r.useState(-1);
    r.useEffect(() => {
        null == p && m(d);
    }, [p, d]);
    let y = {
            applyAnimation: () => {
                (I.current = (0, u.z)(t, C)), b((e) => e + 1);
            },
            idleAnimationState: p,
            isChanging: _,
            resetAnimation: () => {
                f(!1), A(!0), b(-1), m(d);
            },
            versionKey: P,
        },
        S = r.useRef(y);
    if (
        (r.useEffect(() => {
            S.current = y;
        }),
        r.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = S.current;
            null != p && t >= 0 ? e() : n();
        }, [t, p]),
        r.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = S.current;
            (t && null != n) || e();
        }, [C]),
        r.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = S.current;
            _ && (f(null == t), A(!1), e());
        }, [_]),
        !o.o2.hasOwnProperty(t))
    )
        throw Error(`Unexpected giftStyle ${t}`);
    return (0, i.jsx)(s.a, {
        importData: I.current,
        shouldAnimate: !h && c,
        className: n,
        versionKey: P,
        onComplete:
            null != p
                ? () => {
                      null != p && (m(p), f(!0));
                  }
                : void 0,
        loop: E,
    });
}
