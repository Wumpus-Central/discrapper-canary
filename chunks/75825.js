a.d(t, { A: () => o });
var r = a(627968),
    n = a(64700),
    l = a(311907),
    s = a(604121),
    i = a(775602),
    c = a(920569),
    d = a(788868);
function o(e) {
    let { giftStyle: t, className: a, shouldAnimate: o = !0, defaultAnimationState: u, idleAnimationState: _ } = e,
        f = (0, l.bG)([i.A], () => i.A.useReducedMotion),
        [E, A] = n.useState(u),
        h = n.useRef((0, c.z)(t, E)),
        [p, m] = n.useState(null == _),
        [I, b] = n.useState(!1),
        [g, T] = n.useState(-1);
    n.useEffect(() => {
        null == _ && A(u);
    }, [_, u]);
    let R = {
            applyAnimation: () => {
                (h.current = (0, c.z)(t, E)), T((e) => e + 1);
            },
            idleAnimationState: _,
            isChanging: I,
            resetAnimation: () => {
                m(!1), b(!0), T(-1), A(u);
            },
            versionKey: g,
        },
        S = n.useRef(R);
    if (
        (n.useEffect(() => {
            S.current = R;
        }),
        n.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: a } = S.current;
            null != _ && t >= 0 ? e() : a();
        }, [t, _]),
        n.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: a } = S.current;
            (t && null != a) || e();
        }, [E]),
        n.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = S.current;
            I && (m(null == t), b(!1), e());
        }, [I]),
        !d.o2.hasOwnProperty(t))
    )
        throw Error(`Unexpected giftStyle ${t}`);
    return (0, r.jsx)(s.a, {
        importData: h.current,
        shouldAnimate: !f && o,
        className: a,
        versionKey: g,
        onComplete:
            null != _
                ? () => {
                      null != _ && (A(_), m(!0));
                  }
                : void 0,
        loop: p,
    });
}
