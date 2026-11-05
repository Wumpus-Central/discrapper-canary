i(321073);
var l = i(477900),
    s = i(582128),
    a = i(503698),
    n = i.n(a),
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
    C = i(451909),
    y = i(378570),
    A = i(223863),
    b = i(95701),
    E = i(734057),
    j = i(31717),
    k = i(403362),
    w = i(518960),
    N = i(341923),
    v = i(489496),
    T = i(74847),
    _ = i(132319),
    I = i(589553),
    O = i(280483),
    P = i(696016),
    R = i(381941),
    S = i(792996),
    F = i(954646),
    L = i(739126);
function M(e) {
    let { clips: t } = e,
        i = t[0],
        s = i.thumbnail,
        a = null;
    return (
        "" !== s &&
            ((a = (0, l.jsx)("div", {
                className: n()(L.cR, L.JZ),
                children: (0, l.jsx)(x.Ay, { className: L.xn, src: s, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (a = (0, l.jsxs)("div", {
                    className: L.EW,
                    children: [
                        (0, l.jsx)(f.Ay, {
                            mask: f.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: a,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: L.mB,
                            variant: "body-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: L.sq,
            children: [
                (0, l.jsx)("div", {
                    className: L.FG,
                    children: (0, l.jsxs)("div", {
                        className: L.kp,
                        children: [
                            (0, l.jsx)(o.ClipsIcon, {
                                className: F.$,
                                size: "refresh_sm",
                                color: d.A.colors.TEXT_MUTED,
                            }),
                            (0, l.jsx)(c.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (0, _.l)(i)
                                        : S.intl.formatToPlainString(S.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                a,
            ],
        })
    );
}
i.d(
    t,
    {},
    {
        default: function (e) {
            let { clips: t, onClose: i, onShared: a, analyticsLocations: n, ...c } = e;
            (0, O.A)();
            let { analyticsLocations: o } = (0, p.Ay)(...n, m.A.CLIPS_SHARE_MODAL),
                d = s.useCallback(
                    async (e, l, s) => {
                        let { withMessage: n, transitionToDestination: c, closeAfterSend: d } = l;
                        s(!0);
                        try {
                            let l = [],
                                m = [];
                            for (let e of t) {
                                let t = await (0, v.VO)(e, { analyticsLocations: o, watermark: (0, N.s)() }),
                                    i = (0, I.A)(e, e.type === P.nQ.SCREENSHOT ? "jpeg" : "mp4");
                                switch (e.type) {
                                    case P.nQ.CLIP:
                                    case P.nQ.VOICE_CLIP:
                                        (l.push(new File([t], i, { type: "video/mp4" })),
                                            m.push({ clip: (0, _.J)(e) }));
                                        break;
                                    case P.nQ.SCREENSHOT:
                                        (l.push(new File([t], i, { type: "image/jpeg" })), m.push({}));
                                        break;
                                    default:
                                        e.type;
                                }
                            }
                            let p = (await Promise.all(e.map(A.pk))).filter(k.Vq).filter((e) => (0, T.t)(e));
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
                                    null != n &&
                                        "" !== n.trim() &&
                                        (await u.A.sendMessage(t.id, C.Ay.parse(t, n), !1, {
                                            location: R.Hx.FORWARDING,
                                        })));
                            }
                            (a?.(),
                                c &&
                                    1 === p.length &&
                                    ((0, y.iN)(p[0], { openTextInVoiceIfVoiceChannel: !0 }), r.s7()));
                        } catch (e) {
                            (0, h.P0)({ text: S.intl.string(S.t.iufib1), variant: "critical" });
                        } finally {
                            s(!1);
                        }
                    },
                    [t, i, a, o],
                ),
                f = s.useCallback((e) => {
                    if (e instanceof b.YB && !(0, T.t)(e.id)) return { label: S.intl.string(S.t.iufib1) };
                }, []);
            return (0, l.jsx)(g.ForwardModal, {
                ...c,
                onClose: i,
                customTitle: S.intl.string(S.t.I8lglT),
                customSubtitle: S.intl.string(S.t.Ey7mOU),
                customPreview: (0, l.jsx)(M, { clips: t }),
                customSendHandler: d,
                customValidateDestination: f,
            });
        },
    },
);
