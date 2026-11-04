i(321073);
var l = i(477900),
    s = i(582128),
    n = i(503698),
    a = i.n(n),
    r = i(192308),
    c = i(834730),
    o = i(176781),
    d = i(646514),
    h = i(858899),
    u = i(138399),
    m = i(793574),
    p = i(688810),
    f = i(573435),
    g = i(92961),
    x = i(619517),
    y = i(451909),
    A = i(378570),
    C = i(223863),
    b = i(95701),
    E = i(734057),
    j = i(31717),
    k = i(403362),
    w = i(518960),
    N = i(489496),
    v = i(74847),
    T = i(132319),
    _ = i(589553),
    O = i(280483),
    P = i(696016),
    R = i(381941),
    S = i(792996),
    I = i(954646),
    F = i(739126);
function L(e) {
    let { clips: t } = e,
        i = t[0],
        s = i.thumbnail,
        n = null;
    return (
        "" !== s &&
            ((n = (0, l.jsx)("div", {
                className: a()(F.cR, F.JZ),
                children: (0, l.jsx)(x.Ay, { className: F.xn, src: s, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (n = (0, l.jsxs)("div", {
                    className: F.EW,
                    children: [
                        (0, l.jsx)(f.Ay, {
                            mask: f.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: n,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: F.mB,
                            variant: "body-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: F.sq,
            children: [
                (0, l.jsx)("div", {
                    className: F.FG,
                    children: (0, l.jsxs)("div", {
                        className: F.kp,
                        children: [
                            (0, l.jsx)(o.x, { className: I.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(c.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (0, T.l)(i)
                                        : S.intl.formatToPlainString(S.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                n,
            ],
        })
    );
}
i.d(
    t,
    {},
    {
        default: function (e) {
            let { clips: t, onClose: i, onShared: n, analyticsLocations: a, ...c } = e;
            (0, O.A)();
            let { analyticsLocations: o } = (0, p.Ay)(...a, m.A.CLIPS_SHARE_MODAL),
                d = s.useCallback(
                    async (e, l, s) => {
                        let { withMessage: a, transitionToDestination: c, closeAfterSend: d } = l;
                        s(!0);
                        try {
                            let l = [],
                                m = [];
                            for (let e of t) {
                                let t = await (0, N.VO)(e, { analyticsLocations: o }),
                                    i = (0, _.A)(e, e.type === P.nQ.SCREENSHOT ? "jpeg" : "mp4");
                                switch (e.type) {
                                    case P.nQ.CLIP:
                                    case P.nQ.VOICE_CLIP:
                                        (l.push(new File([t], i, { type: "video/mp4" })),
                                            m.push({ clip: (0, T.J)(e) }));
                                        break;
                                    case P.nQ.SCREENSHOT:
                                        (l.push(new File([t], i, { type: "image/jpeg" })), m.push({}));
                                        break;
                                    default:
                                        e.type;
                                }
                            }
                            let p = (await Promise.all(e.map(C.pk))).filter(k.Vq).filter((e) => (0, v.t)(e));
                            if (0 === p.length) {
                                ((0, h.P0)({ text: S.intl.string(S.t.iufib1), variant: "critical" }), s(!1));
                                return;
                            }
                            for (let e of (d && i(), p)) {
                                let t = E.A.getChannel(e);
                                null != t &&
                                    ((0, w.R)(l, t, j.C.ChannelMessage, {
                                        filesMetadata: m,
                                        origin: "unknown:clip_share",
                                        requireConfirm: !1,
                                    }),
                                    null != a &&
                                        "" !== a.trim() &&
                                        (await u.A.sendMessage(t.id, y.Ay.parse(t, a), !1, {
                                            location: R.Hx.FORWARDING,
                                        })));
                            }
                            (n?.(),
                                c &&
                                    1 === p.length &&
                                    ((0, A.iN)(p[0], { openTextInVoiceIfVoiceChannel: !0 }), r.s7()));
                        } catch (e) {
                            (0, h.P0)({ text: S.intl.string(S.t.iufib1), variant: "critical" });
                        } finally {
                            s(!1);
                        }
                    },
                    [t, i, n, o],
                ),
                f = s.useCallback((e) => {
                    if (e instanceof b.YB && !(0, v.t)(e.id)) return { label: S.intl.string(S.t.iufib1) };
                }, []);
            return (0, l.jsx)(g.ForwardModal, {
                ...c,
                onClose: i,
                customTitle: S.intl.string(S.t.I8lglT),
                customSubtitle: S.intl.string(S.t.Ey7mOU),
                customPreview: (0, l.jsx)(L, { clips: t }),
                customSendHandler: d,
                customValidateDestination: f,
            });
        },
    },
);
