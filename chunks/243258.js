l.d(t, { default: () => V }), l(321073);
var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(192308),
    c = l(834730),
    o = l(176781),
    d = l(661531),
    h = l(691540),
    u = l(857250),
    m = l(97483),
    p = l(148494),
    g = l(793574),
    f = l(688810),
    x = l(573435),
    A = l(953832),
    C = l(619517),
    E = l(451909),
    y = l(378570),
    k = l(223863),
    j = l(95701),
    b = l(734057),
    w = l(31717),
    N = l(403362),
    R = l(518960),
    T = l(430795),
    I = l(74847),
    _ = l(589553),
    v = l(280483),
    O = l(696016),
    P = l(381941),
    S = l(375708),
    F = l(434581),
    L = l(964105);
function M(e) {
    let { clips: t } = e,
        l = t[0],
        i = l.thumbnail,
        n = null;
    return (
        "" !== i &&
            ((n = (0, s.jsx)("div", {
                className: a()(L.cR, L.JZ),
                children: (0, s.jsx)(C.Ay, { className: L.xn, src: i, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (n = (0, s.jsxs)("div", {
                    className: L.EW,
                    children: [
                        (0, s.jsx)(x.Ay, {
                            mask: x.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: n,
                        }),
                        (0, s.jsxs)(c.E, {
                            className: L.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, s.jsxs)("div", {
            className: L.sq,
            children: [
                (0, s.jsx)("div", {
                    className: L.FG,
                    children: (0, s.jsxs)("div", {
                        className: L.kp,
                        children: [
                            (0, s.jsx)(o.x, { className: F.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (l.name ?? S.intl.string(S.t.Cyxddp))
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
function V(e) {
    let { clips: t, onClose: l, analyticsLocations: n, ...a } = e;
    (0, v.A)();
    let { analyticsLocations: c } = (0, f.Ay)(...n, g.A.CLIPS_SHARE_MODAL),
        o = i.useCallback(
            async (e, s, i) => {
                let { withMessage: n, transitionToDestination: a, closeAfterSend: o } = s;
                i(!0);
                try {
                    let s = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, T.VO)(e, { analyticsLocations: c }),
                            l = (0, _.A)(e, e.type === O.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        switch (e.type) {
                            case O.nQ.CLIP:
                            case O.nQ.VOICE_CLIP:
                                s.push(new File([t], l, { type: "video/mp4" })), d.push({ clip: e });
                                break;
                            case O.nQ.SCREENSHOT:
                                s.push(new File([t], l, { type: "image/jpeg" })), d.push({});
                                break;
                            default:
                                e.type;
                        }
                    }
                    let g = (await Promise.all(e.map(k.pk))).filter(N.Vq).filter((e) => (0, I.t)(e));
                    if (0 === g.length) {
                        (0, h.P0)((0, u.o)(S.intl.string(S.t.iufib1), m.Ck.FAILURE)), i(!1);
                        return;
                    }
                    for (let e of (o && l(), g)) {
                        let t = b.A.getChannel(e);
                        null != t &&
                            ((0, R.R)(s, t, w.C.ChannelMessage, {
                                filesMetadata: d,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            null != n &&
                                "" !== n.trim() &&
                                (await p.A.sendMessage(t.id, E.Ay.parse(t, n), !1, { location: P.Hx.FORWARDING })));
                    }
                    a && 1 === g.length && ((0, y.iN)(g[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, h.P0)((0, u.o)(S.intl.string(S.t.iufib1), m.Ck.FAILURE));
                } finally {
                    i(!1);
                }
            },
            [t, l, c],
        ),
        d = i.useCallback((e) => {
            if (e instanceof j.YB && !(0, I.t)(e.id)) return { label: S.intl.string(S.t.iufib1) };
        }, []);
    return (0, s.jsx)(A.ForwardModal, {
        ...a,
        onClose: l,
        customTitle: S.intl.string(S.t.I8lglT),
        customSubtitle: S.intl.string(S.t.Ey7mOU),
        customPreview: (0, s.jsx)(M, { clips: t }),
        customSendHandler: o,
        customValidateDestination: d,
    });
}
