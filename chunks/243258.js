i.d(t, { default: () => M }), i(321073);
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(192308),
    c = i(834730),
    o = i(176781),
    d = i(661531),
    u = i(691540),
    p = i(857250),
    h = i(97483),
    m = i(720149),
    f = i(573435),
    g = i(953832),
    x = i(619517),
    C = i(451909),
    _ = i(378570),
    A = i(223863),
    y = i(95701),
    E = i(734057),
    k = i(31717),
    j = i(174459),
    w = i(403362),
    I = i(518960),
    N = i(372684),
    R = i(315240),
    T = i(74847),
    b = i(589553),
    v = i(280483),
    P = i(652215),
    F = i(381941),
    O = i(375708),
    S = i(596125),
    H = i(28289);
function L(e) {
    let { clips: t } = e,
        i = t[0],
        n = i.thumbnail,
        s = null;
    return (
        "" !== n &&
            ((s = (0, l.jsx)("div", {
                className: a()(H.cR, H.JZ),
                children: (0, l.jsx)(x.Ay, { className: H.xn, src: n, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (s = (0, l.jsxs)("div", {
                    className: H.EW,
                    children: [
                        (0, l.jsx)(f.Ay, {
                            mask: f.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: s,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: H.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: H.sq,
            children: [
                (0, l.jsx)("div", {
                    className: H.FG,
                    children: (0, l.jsxs)("div", {
                        className: H.kp,
                        children: [
                            (0, l.jsx)(o.x, { className: S.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (i.name ?? O.intl.string(O.t.Cyxddp))
                                        : O.intl.formatToPlainString(O.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                s,
            ],
        })
    );
}
function M(e) {
    let { clips: t, analyticsLocations: i, onClose: s, ...a } = e;
    (0, v.A)();
    let c = n.useCallback(
            async (e, l, n) => {
                let { withMessage: a, transitionToDestination: c, closeAfterSend: o } = l;
                n(!0);
                try {
                    let l = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, R.VO)(e),
                            i = (0, b.A)(e, e.type === N.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        e.type === N.nQ.CLIP || e.type === N.nQ.VOICE_CLIP
                            ? (l.push(new File([t], i, { type: "video/mp4" })), d.push({ clip: e }))
                            : e.type === N.nQ.SCREENSHOT &&
                              (l.push(new File([t], i, { type: "image/jpeg" })), d.push({}));
                    }
                    let f = (await Promise.all(e.map(A.pk))).filter(w.Vq).filter((e) => (0, T.t)(e));
                    if (0 === f.length) {
                        (0, u.P0)((0, p.o)(O.intl.string(O.t.iufib1), h.Ck.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (o && s(), f)) {
                        let n = E.A.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, I.R)(l, n, k.C.ChannelMessage, {
                                filesMetadata: d,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            t))
                                j.default.track(P.HAw.CLIP_SHARED, {
                                    location_stack: i,
                                    guild_id: n.guild_id,
                                    channel_id: n.id,
                                    channel_type: n.type,
                                    application_id: e.applicationId,
                                    clip_uuid: e.id,
                                    remote_clip_id: e.remoteClipId,
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await m.A.sendMessage(n.id, C.Ay.parse(n, a), !1, { location: F.Hx.FORWARDING }));
                        }
                    }
                    c && 1 === f.length && ((0, _.iN)(f[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, u.P0)((0, p.o)(O.intl.string(O.t.iufib1), h.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [t, i, s],
        ),
        o = n.useCallback((e) => {
            if (e instanceof y.YB && !(0, T.t)(e.id)) return { label: O.intl.string(O.t.iufib1) };
        }, []);
    return (0, l.jsx)(g.ForwardModal, {
        ...a,
        onClose: s,
        customTitle: O.intl.string(O.t.I8lglT),
        customSubtitle: O.intl.string(O.t.Ey7mOU),
        customPreview: (0, l.jsx)(L, { clips: t }),
        customSendHandler: c,
        customValidateDestination: o,
    });
}
