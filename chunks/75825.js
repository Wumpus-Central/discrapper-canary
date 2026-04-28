u.d(t, { A: () => i });
var n = u(627968),
    r = u(64700),
    s = u(17928),
    l = u(604121),
    c = u(775602),
    a = u(920569),
    o = u(788868);
function i(e) {
    let { giftStyle: t, className: u, shouldAnimate: i = !0, defaultAnimationState: f, idleAnimationState: p } = e,
        d = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        [h, m] = r.useState(f),
        A = r.useRef((0, a.z)(t, h)),
        [E, S] = r.useState(null == p),
        [k, w] = r.useState(!1),
        [y, b] = r.useState(-1);
    r.useEffect(() => {
        null == p && m(f);
    }, [p, f]);
    let v = {
            applyAnimation: () => {
                (A.current = (0, a.z)(t, h)), b((e) => e + 1);
            },
            idleAnimationState: p,
            isChanging: k,
            resetAnimation: () => {
                S(!1), w(!0), b(-1), m(f);
            },
            versionKey: y,
        },
        C = r.useRef(v);
    if (
        (r.useEffect(() => {
            C.current = v;
        }),
        r.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: u } = C.current;
            null != p && t >= 0 ? e() : u();
        }, [t, p]),
        r.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: u } = C.current;
            (t && null != u) || e();
        }, [h]),
        r.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = C.current;
            k && (S(null == t), w(!1), e());
        }, [k]),
        !o.o2.hasOwnProperty(t))
    )
        throw Error(`Unexpected giftStyle ${t}`);
    return (0, n.jsx)(l.a, {
        importData: A.current,
        shouldAnimate: !d && i,
        className: u,
        versionKey: y,
        onComplete:
            null != p
                ? () => {
                      null != p && (m(p), S(!0));
                  }
                : void 0,
        loop: E,
    });
}
