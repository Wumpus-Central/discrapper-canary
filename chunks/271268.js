n.d(t, { Z: () => R });
var r = n(54381),
    i = n(473749),
    a = n(92951),
    o = n(793030),
    s = n(442837),
    l = n(379649),
    c = n(481060),
    u = n(607070),
    d = n(324060),
    f = n(5888),
    p = n(26118),
    _ = n(687581),
    m = n(193869),
    h = n(489658),
    g = n(909397),
    E = n(198358),
    b = n(225055),
    y = n(391876),
    O = n(947189),
    v = n(612776),
    S = n(860076),
    I = n(388032),
    T = n(417788),
    C = n(284788),
    A = n(228137);
let N = 100,
    P = 1;
function R() {
    let {
            voice: {
                totalVoiceMinutes: e,
                totalVoiceMinutesPercentile: t,
                topMonth: { month: n },
            } = {
                totalVoiceMinutes: 0,
                totalVoiceMinutesPercentile: 0,
                topMonth: { month: 0 },
            },
        } = (0, s.e7)([f.Z], () => f.Z.getCheckpointData()),
        { duration: R, unit: D } = (0, p.Bi)(e),
        w = D === l.J6.HOURS,
        x = i.useContext(m.$r),
        L = i.useRef(null),
        j = i.useContext(b.xS),
        M = i.useContext(d.Q),
        k = (0, c.dQu)(M.primaryColor).hex(),
        U = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        G = i.useCallback(
            (e) => {
                let t = L.current;
                if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
                let n = 0,
                    r = 1,
                    i = 0;
                null == j ||
                    j(
                        (e, t) => (
                            t === v.yD.VOICE &&
                                ((n = Math.max(e.opacity.get(), 0)),
                                (r = e.backgroundScale.get()),
                                (i = e.backgroundY.get())),
                            null
                        ),
                    );
                let { canvas: a, context: o } = e.detail;
                o.save(), (o.globalAlpha = n), (o.globalCompositeOperation = "screen");
                let s = a.width / 2,
                    l = a.height / 2;
                o.translate(s, l),
                    o.scale(r, r),
                    o.translate(-s, -l),
                    o.translate(0, i),
                    (0, _.Z)(t, a, o, N),
                    o.restore();
            },
            [j],
        );
    i.useEffect(() => (x.addEventListener("frame", G), () => x.removeEventListener("frame", G)), [x, G]),
        i.useEffect(() => {
            null != L.current && U && (L.current.currentTime = P);
        }, [U]);
    let { monthName: Z } = (0, p.CE)(n, I.intl.currentLocale),
        B = null != t;
    return (0, r.jsxs)(E.Z, {
        children: [
            (0, r.jsx)(a.Z, {
                autoPlay: !U,
                muted: !0,
                loop: !0,
                playsInline: !0,
                className: C.hidden,
                ref: L,
                "aria-hidden": !0,
                children: (0, r.jsx)("source", {
                    src: A.Z,
                    type: "video/webm",
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.title,
                        children: [
                            (0, r.jsx)(o.S6n, {
                                size: "refresh_sm",
                                color: k,
                                className: T.titleIcon,
                                colorClass: T.iconColor,
                            }),
                            w
                                ? (0, r.jsx)(y.Z, {
                                      variant: "eyebrow",
                                      className: T.eyebrow,
                                      children: I.intl.format(S.default.Xu0QsX, { numHours: R }),
                                  })
                                : (0, r.jsx)(y.Z, {
                                      variant: "eyebrow",
                                      className: T.eyebrow,
                                      children: I.intl.format(S.default.UZbUtl, { numMinutes: R }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)(O.Z, {
                        end: R,
                        alignment: "center",
                    }),
                    (0, r.jsx)(y.Z, {
                        variant: "heading-xxl/medium",
                        className: C.subtitle,
                        children: B
                            ? I.intl.format(S.default["36PZwu"], {
                                  percent: 100 - t,
                                  percentHook: (e, t) => (0, r.jsx)(h.Z, { children: e }, t),
                              })
                            : I.intl.format(S.default.VaydtR, {
                                  month: Z,
                                  monthHook: (e, t) => (0, r.jsx)(h.Z, { children: e }, t),
                              }),
                    }),
                    (0, r.jsx)(g.o, { slide: v.yD.VOICE }),
                ],
            }),
        ],
    });
}
