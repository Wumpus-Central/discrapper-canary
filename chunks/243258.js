i.d(t, { default: () => V }), i(321073);
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
    N = i(403362),
    w = i(518960),
    I = i(372684),
    R = i(974293),
    T = i(61302),
    b = i(74847),
    v = i(589553),
    P = i(280483),
    F = i(652215),
    O = i(381941),
    S = i(375708),
    H = i(596125),
    L = i(28289);
function M(e) {
    let { clips: t } = e,
        i = t[0],
        n = i.thumbnail,
        s = null;
    return (
        "" !== n &&
            ((s = (0, l.jsx)("div", {
                className: a()(L.cR, L.JZ),
                children: (0, l.jsx)(x.Ay, { className: L.xn, src: n, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (s = (0, l.jsxs)("div", {
                    className: L.EW,
                    children: [
                        (0, l.jsx)(f.Ay, {
                            mask: f.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: s,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: L.mB,
                            variant: "text-xs/semibold",
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
                            (0, l.jsx)(o.x, { className: H.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (i.name ?? S.intl.string(S.t.Cyxddp))
                                        : S.intl.formatToPlainString(S.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                s,
            ],
        })
    );
}
function V(e) {
    let { clips: t, analyticsLocations: i, onClose: s, ...a } = e;
    (0, P.A)();
    let c = n.useCallback(
            async (e, l, n) => {
                let { withMessage: a, transitionToDestination: c, closeAfterSend: o } = l;
                n(!0);
                try {
                    let l = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, T.VO)(e),
                            i = (0, v.A)(e, e.type === I.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        e.type === I.nQ.CLIP || e.type === I.nQ.VOICE_CLIP
                            ? (l.push(new File([t], i, { type: "video/mp4" })), d.push({ clip: e }))
                            : e.type === I.nQ.SCREENSHOT &&
                              (l.push(new File([t], i, { type: "image/jpeg" })), d.push({}));
                    }
                    let f = (await Promise.all(e.map(A.pk))).filter(N.Vq).filter((e) => (0, b.t)(e));
                    if (0 === f.length) {
                        (0, u.P0)((0, p.o)(S.intl.string(S.t.iufib1), h.Ck.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (o && s(), f)) {
                        let n = E.A.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, w.R)(l, n, k.C.ChannelMessage, {
                                filesMetadata: d,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            t))
                                j.default.track(F.HAw.CLIP_SHARED, {
                                    location_stack: i,
                                    guild_id: n.guild_id,
                                    channel_id: n.id,
                                    channel_type: n.type,
                                    application_id: e.applicationId,
                                    clip_uuid: e.id,
                                    remote_clip_id: e.remoteClipId,
                                    clip_runtime: (0, R.GN)(),
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await m.A.sendMessage(n.id, C.Ay.parse(n, a), !1, { location: O.Hx.FORWARDING }));
                        }
                    }
                    c && 1 === f.length && ((0, _.iN)(f[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, u.P0)((0, p.o)(S.intl.string(S.t.iufib1), h.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [t, i, s],
        ),
        o = n.useCallback((e) => {
            if (e instanceof y.YB && !(0, b.t)(e.id)) return { label: S.intl.string(S.t.iufib1) };
        }, []);
    return (0, l.jsx)(g.ForwardModal, {
        ...a,
        onClose: s,
        customTitle: S.intl.string(S.t.I8lglT),
        customSubtitle: S.intl.string(S.t.Ey7mOU),
        customPreview: (0, l.jsx)(M, { clips: t }),
        customSendHandler: c,
        customValidateDestination: o,
    });
}
