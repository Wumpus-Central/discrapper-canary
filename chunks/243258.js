(i.d(t, { default: () => F }), i(321073));
var l = i(477900),
    s = i(582128),
    n = i(503698),
    a = i.n(n),
    r = i(192308),
    c = i(834730),
    o = i(176781),
    d = i(661531),
    h = i(858899),
    u = i(148494),
    m = i(793574),
    p = i(688810),
    x = i(573435),
    g = i(228427),
    f = i(619517),
    A = i(451909),
    C = i(378570),
    y = i(446244),
    E = i(95701),
    j = i(734057),
    b = i(31717),
    k = i(403362),
    w = i(518960),
    N = i(614584),
    v = i(74847),
    T = i(589553),
    _ = i(280483),
    O = i(696016),
    P = i(381941),
    R = i(105292),
    S = i(954646),
    I = i(739126);
function M(e) {
    let { clips: t } = e,
        i = t[0],
        s = i.thumbnail,
        n = null;
    return (
        "" !== s &&
            ((n = (0, l.jsx)("div", {
                className: a()(I.cR, I.JZ),
                children: (0, l.jsx)(f.Ay, { className: I.xn, src: s, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (n = (0, l.jsxs)("div", {
                    className: I.EW,
                    children: [
                        (0, l.jsx)(x.Ay, {
                            mask: x.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: n,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: I.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: I.sq,
            children: [
                (0, l.jsx)("div", {
                    className: I.FG,
                    children: (0, l.jsxs)("div", {
                        className: I.kp,
                        children: [
                            (0, l.jsx)(o.x, { className: S.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (i.name ?? R.intl.string(R.t.Cyxddp))
                                        : R.intl.formatToPlainString(R.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                n,
            ],
        })
    );
}
function F(e) {
    let { clips: t, onClose: i, analyticsLocations: n, ...a } = e;
    (0, _.A)();
    let { analyticsLocations: c } = (0, p.Ay)(...n, m.A.CLIPS_SHARE_MODAL),
        o = s.useCallback(
            async (e, l, s) => {
                let { withMessage: n, transitionToDestination: a, closeAfterSend: o } = l;
                s(!0);
                try {
                    let l = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, N.VO)(e, { analyticsLocations: c }),
                            i = (0, T.A)(e, e.type === O.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        switch (e.type) {
                            case O.nQ.CLIP:
                            case O.nQ.VOICE_CLIP:
                                (l.push(new File([t], i, { type: "video/mp4" })), d.push({ clip: e }));
                                break;
                            case O.nQ.SCREENSHOT:
                                (l.push(new File([t], i, { type: "image/jpeg" })), d.push({}));
                                break;
                            default:
                                e.type;
                        }
                    }
                    let m = (await Promise.all(e.map(y.pk))).filter(k.Vq).filter((e) => (0, v.t)(e));
                    if (0 === m.length) {
                        ((0, h.P0)({ text: R.intl.string(R.t.iufib1), variant: "critical" }), s(!1));
                        return;
                    }
                    for (let e of (o && i(), m)) {
                        let t = j.A.getChannel(e);
                        null != t &&
                            ((0, w.R)(l, t, b.C.ChannelMessage, {
                                filesMetadata: d,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            null != n &&
                                "" !== n.trim() &&
                                (await u.A.sendMessage(t.id, A.Ay.parse(t, n), !1, { location: P.Hx.FORWARDING })));
                    }
                    a && 1 === m.length && ((0, C.iN)(m[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, h.P0)({ text: R.intl.string(R.t.iufib1), variant: "critical" });
                } finally {
                    s(!1);
                }
            },
            [t, i, c],
        ),
        d = s.useCallback((e) => {
            if (e instanceof E.YB && !(0, v.t)(e.id)) return { label: R.intl.string(R.t.iufib1) };
        }, []);
    return (0, l.jsx)(g.ForwardModal, {
        ...a,
        onClose: i,
        customTitle: R.intl.string(R.t.I8lglT),
        customSubtitle: R.intl.string(R.t.Ey7mOU),
        customPreview: (0, l.jsx)(M, { clips: t }),
        customSendHandler: o,
        customValidateDestination: d,
    });
}
