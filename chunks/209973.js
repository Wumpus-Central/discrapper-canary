n.d(t, {
    A: () => N,
});
var r = n(627968),
    l = n(64700),
    a = n(299619),
    i = n(158954),
    s = n(311907),
    o = n(499979),
    c = n(397927),
    u = n(775602),
    d = n(854987),
    m = n(719718),
    f = n(57882),
    p = n(109138),
    h = n(771273),
    b = n(818947),
    g = n(155286),
    x = n(573138),
    y = n(182417),
    v = n(877272),
    j = n(359588),
    C = n(532294),
    _ = n(622865),
    A = n(985018),
    O = n(308021),
    E = n(86369),
    S = n(65e4);

function N() {
    let {
            voice: {
                totalVoiceMinutes: e,
                totalVoiceMinutesPercentile: t,
                topMonth: { month: n },
            } = {
                totalVoiceMinutes: 0,
                totalVoiceMinutesPercentile: 0,
                topMonth: {
                    month: 0,
                },
            },
        } = (0, s.bG)([m.A], () => m.A.getCheckpointData()),
        { duration: N, unit: I } = (0, f.oO)(e),
        P = I === o.pJ.HOURS,
        w = l.useContext(h.GD),
        T = l.useRef(null),
        R = l.useContext(y.Aq),
        L = l.useContext(d.P),
        D = (0, c.rdh)(L.primaryColor).hex(),
        k = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        M = l.useCallback(
            (e) => {
                let t = T.current;
                if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
                let n = 0,
                    r = 1,
                    l = 0;
                null == R ||
                    R(
                        (e, t) => (
                            t === C.P7.VOICE &&
                                ((n = Math.max(e.opacity.get(), 0)),
                                (r = e.backgroundScale.get()),
                                (l = e.backgroundY.get())),
                            null
                        ),
                    );
                let { canvas: a, context: i } = e.detail;
                i.save(), (i.globalAlpha = n), (i.globalCompositeOperation = "screen");
                let s = a.width / 2,
                    o = a.height / 2;
                i.translate(s, o),
                    i.scale(r, r),
                    i.translate(-s, -o),
                    i.translate(0, l),
                    (0, p.A)(t, a, i, 100),
                    i.restore();
            },
            [R],
        );
    l.useEffect(() => (w.addEventListener("frame", M), () => w.removeEventListener("frame", M)), [w, M]),
        l.useEffect(() => {
            null != T.current && k && (T.current.currentTime = 1);
        }, [k]);
    let { monthName: H } = (0, f.od)(n, A.intl.currentLocale);
    return (0, r.jsxs)(x.A, {
        children: [
            (0, r.jsx)(a.A, {
                autoPlay: !k,
                muted: !0,
                loop: !0,
                playsInline: !0,
                className: E.R,
                ref: T,
                "aria-hidden": !0,
                children: (0, r.jsx)("source", {
                    src: S.A,
                    type: "video/webm",
                }),
            }),
            (0, r.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.DD,
                        children: [
                            (0, r.jsx)(i.cNw, {
                                size: "refresh_sm",
                                color: D,
                                className: O.gr,
                                colorClass: O.d7,
                            }),
                            P
                                ? (0, r.jsx)(v.A, {
                                      variant: "eyebrow",
                                      className: O.UP,
                                      children: A.intl.format(_.default.Xu0QsX, {
                                          numHours: N,
                                      }),
                                  })
                                : (0, r.jsx)(v.A, {
                                      variant: "eyebrow",
                                      className: O.UP,
                                      children: A.intl.format(_.default.UZbUtl, {
                                          numMinutes: N,
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)(j.A, {
                        end: N,
                        alignment: "center",
                    }),
                    (0, r.jsx)(v.A, {
                        variant: "heading-xxl/medium",
                        className: E.VA,
                        children:
                            null != t
                                ? A.intl.format(_.default["36PZwu"], {
                                      percent: 100 - t,
                                      percentHook: (e, t) =>
                                          (0, r.jsx)(
                                              b.A,
                                              {
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : A.intl.format(_.default.VaydtR, {
                                      month: H,
                                      monthHook: (e, t) =>
                                          (0, r.jsx)(
                                              b.A,
                                              {
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                    }),
                    (0, r.jsx)(g.e, {
                        slide: C.P7.VOICE,
                    }),
                ],
            }),
        ],
    });
}
