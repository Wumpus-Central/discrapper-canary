(l.d(t, { default: () => L }), l(321073));
var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(192308),
    c = l(834730),
    o = l(176781),
    d = l(661531),
    h = l(376357),
    u = l(148494),
    m = l(793574),
    p = l(688810),
    x = l(573435),
    g = l(914718),
    f = l(619517),
    A = l(451909),
    C = l(378570),
    E = l(446244),
    y = l(95701),
    k = l(734057),
    j = l(31717),
    b = l(403362),
    w = l(518960),
    N = l(614584),
    R = l(74847),
    T = l(589553),
    I = l(280483),
    _ = l(696016),
    v = l(381941),
    O = l(660183),
    P = l(954646),
    S = l(739126);
function F(e) {
    let { clips: t } = e,
        l = t[0],
        i = l.thumbnail,
        n = null;
    return (
        "" !== i &&
            ((n = (0, s.jsx)("div", {
                className: a()(S.cR, S.JZ),
                children: (0, s.jsx)(f.Ay, { className: S.xn, src: i, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (n = (0, s.jsxs)("div", {
                    className: S.EW,
                    children: [
                        (0, s.jsx)(x.Ay, {
                            mask: x.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: n,
                        }),
                        (0, s.jsxs)(c.E, {
                            className: S.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, s.jsxs)("div", {
            className: S.sq,
            children: [
                (0, s.jsx)("div", {
                    className: S.FG,
                    children: (0, s.jsxs)("div", {
                        className: S.kp,
                        children: [
                            (0, s.jsx)(o.x, { className: P.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (l.name ?? O.intl.string(O.t.Cyxddp))
                                        : O.intl.formatToPlainString(O.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                n,
            ],
        })
    );
}
function L(e) {
    let { clips: t, onClose: l, analyticsLocations: n, ...a } = e;
    (0, I.A)();
    let { analyticsLocations: c } = (0, p.Ay)(...n, m.A.CLIPS_SHARE_MODAL),
        o = i.useCallback(
            async (e, s, i) => {
                let { withMessage: n, transitionToDestination: a, closeAfterSend: o } = s;
                i(!0);
                try {
                    let s = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, N.VO)(e, { analyticsLocations: c }),
                            l = (0, T.A)(e, e.type === _.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        switch (e.type) {
                            case _.nQ.CLIP:
                            case _.nQ.VOICE_CLIP:
                                (s.push(new File([t], l, { type: "video/mp4" })), d.push({ clip: e }));
                                break;
                            case _.nQ.SCREENSHOT:
                                (s.push(new File([t], l, { type: "image/jpeg" })), d.push({}));
                                break;
                            default:
                                e.type;
                        }
                    }
                    let m = (await Promise.all(e.map(E.pk))).filter(b.Vq).filter((e) => (0, R.t)(e));
                    if (0 === m.length) {
                        ((0, h.P0)((0, h.ox)(O.intl.string(O.t.iufib1), h.Ck.FAILURE)), i(!1));
                        return;
                    }
                    for (let e of (o && l(), m)) {
                        let t = k.A.getChannel(e);
                        null != t &&
                            ((0, w.R)(s, t, j.C.ChannelMessage, {
                                filesMetadata: d,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            null != n &&
                                "" !== n.trim() &&
                                (await u.A.sendMessage(t.id, A.Ay.parse(t, n), !1, { location: v.Hx.FORWARDING })));
                    }
                    a && 1 === m.length && ((0, C.iN)(m[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, h.P0)((0, h.ox)(O.intl.string(O.t.iufib1), h.Ck.FAILURE));
                } finally {
                    i(!1);
                }
            },
            [t, l, c],
        ),
        d = i.useCallback((e) => {
            if (e instanceof y.YB && !(0, R.t)(e.id)) return { label: O.intl.string(O.t.iufib1) };
        }, []);
    return (0, s.jsx)(g.ForwardModal, {
        ...a,
        onClose: l,
        customTitle: O.intl.string(O.t.I8lglT),
        customSubtitle: O.intl.string(O.t.Ey7mOU),
        customPreview: (0, s.jsx)(F, { clips: t }),
        customSendHandler: o,
        customValidateDestination: d,
    });
}
