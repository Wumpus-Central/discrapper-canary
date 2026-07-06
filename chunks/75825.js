u.d(t, { A: () => i });
var n = u(627968),
    s = u(64700),
    l = u(17928),
    r = u(604121),
    c = u(775602),
    o = u(920569),
    a = u(202541);
function i(e) {
    let { giftStyle: t, className: u, shouldAnimate: i = !0, defaultAnimationState: f, idleAnimationState: p } = e,
        d = a.o2.hasOwnProperty(t) ? t : a.o2.STANDARD_BOX,
        A = (0, l.bG)([c.Ay], () => c.Ay.useReducedMotion),
        [h, m] = s.useState(f),
        y = s.useRef((0, o.z)(d, h)),
        [E, S] = s.useState(null == p),
        [k, R] = s.useState(!1),
        [b, v] = s.useState(-1);
    s.useEffect(() => {
        null == p && m(f);
    }, [p, f]);
    let w = {
            applyAnimation: function () {
                (y.current = (0, o.z)(d, h)), v((e) => e + 1);
            },
            idleAnimationState: p,
            isChanging: k,
            resetAnimation: function () {
                S(!1), R(!0), v(-1), m(f);
            },
            versionKey: b,
        },
        C = s.useRef(w);
    return (
        s.useEffect(() => {
            C.current = w;
        }),
        s.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: u } = C.current;
            null != p && t >= 0 ? e() : u();
        }, [d, p]),
        s.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: u } = C.current;
            (t && null != u) || e();
        }, [h]),
        s.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = C.current;
            k && (S(null == t), R(!1), e());
        }, [k]),
        (0, n.jsx)(r.a, {
            importData: y.current,
            shouldAnimate: !A && i,
            className: u,
            versionKey: b,
            onComplete:
                null != p
                    ? () => {
                          null != p && (m(p), S(!0));
                      }
                    : void 0,
            loop: E,
        })
    );
}
