(i.d(t, { default: () => L }), i(321073));
var l = i(477900),
    s = i(582128),
    a = i(503698),
    n = i.n(a),
    r = i(192308),
    c = i(834730),
    o = i(176781),
    d = i(661531),
    h = i(858899),
    u = i(148494),
    m = i(793574),
    p = i(688810),
    x = i(573435),
    f = i(228427),
    g = i(619517),
    A = i(451909),
    C = i(378570),
    y = i(223863),
    E = i(95701),
    j = i(734057),
    b = i(31717),
    k = i(403362),
    w = i(518960),
    N = i(614584),
    v = i(74847),
    T = i(132319),
    _ = i(589553),
    O = i(280483),
    P = i(696016),
    R = i(381941),
    S = i(105292),
    I = i(954646),
    M = i(739126);
function F(e) {
    let { clips: t } = e,
        i = t[0],
        s = i.thumbnail,
        a = null;
    return (
        "" !== s &&
            ((a = (0, l.jsx)("div", {
                className: n()(M.cR, M.JZ),
                children: (0, l.jsx)(g.Ay, { className: M.xn, src: s, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (a = (0, l.jsxs)("div", {
                    className: M.EW,
                    children: [
                        (0, l.jsx)(x.Ay, {
                            mask: x.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: a,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: M.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: M.sq,
            children: [
                (0, l.jsx)("div", {
                    className: M.FG,
                    children: (0, l.jsxs)("div", {
                        className: M.kp,
                        children: [
                            (0, l.jsx)(o.x, { className: I.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (0, T.l)(i)
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
function L(e) {
    let { clips: t, onClose: i, analyticsLocations: a, ...n } = e;
    (0, O.A)();
    let { analyticsLocations: c } = (0, p.Ay)(...a, m.A.CLIPS_SHARE_MODAL),
        o = s.useCallback(
            async (e, l, s) => {
                let { withMessage: a, transitionToDestination: n, closeAfterSend: o } = l;
                s(!0);
                try {
                    let l = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, N.VO)(e, { analyticsLocations: c }),
                            i = (0, _.A)(e, e.type === P.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        switch (e.type) {
                            case P.nQ.CLIP:
                            case P.nQ.VOICE_CLIP:
                                (l.push(new File([t], i, { type: "video/mp4" })), d.push({ clip: (0, T.J)(e) }));
                                break;
                            case P.nQ.SCREENSHOT:
                                (l.push(new File([t], i, { type: "image/jpeg" })), d.push({}));
                                break;
                            default:
                                e.type;
                        }
                    }
                    let m = (await Promise.all(e.map(y.pk))).filter(k.Vq).filter((e) => (0, v.t)(e));
                    if (0 === m.length) {
                        ((0, h.P0)({ text: S.intl.string(S.t.iufib1), variant: "critical" }), s(!1));
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
                            null != a &&
                                "" !== a.trim() &&
                                (await u.A.sendMessage(t.id, A.Ay.parse(t, a), !1, { location: R.Hx.FORWARDING })));
                    }
                    n && 1 === m.length && ((0, C.iN)(m[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, h.P0)({ text: S.intl.string(S.t.iufib1), variant: "critical" });
                } finally {
                    s(!1);
                }
            },
            [t, i, c],
        ),
        d = s.useCallback((e) => {
            if (e instanceof E.YB && !(0, v.t)(e.id)) return { label: S.intl.string(S.t.iufib1) };
        }, []);
    return (0, l.jsx)(f.ForwardModal, {
        ...n,
        onClose: i,
        customTitle: S.intl.string(S.t.I8lglT),
        customSubtitle: S.intl.string(S.t.Ey7mOU),
        customPreview: (0, l.jsx)(F, { clips: t }),
        customSendHandler: o,
        customValidateDestination: d,
    });
}
