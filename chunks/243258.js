i.d(t, { default: () => V }), i(321073);
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    c = i(192308),
    r = i(834730),
    o = i(176781),
    d = i(661531),
    u = i(691540),
    h = i(857250),
    p = i(97483),
    m = i(720149),
    f = i(573435),
    g = i(953832),
    x = i(619517),
    C = i(451909),
    _ = i(378570),
    A = i(223863),
    k = i(95701),
    E = i(734057),
    y = i(31717),
    j = i(174459),
    w = i(403362),
    N = i(518960),
    b = i(372684),
    I = i(974293),
    R = i(315240),
    T = i(74847),
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
                        (0, l.jsxs)(r.E, {
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
                            (0, l.jsx)(r.E, {
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
    let r = n.useCallback(
            async (e, l, n) => {
                let { withMessage: a, transitionToDestination: r, closeAfterSend: o } = l;
                n(!0);
                try {
                    let l = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, R.VO)(e),
                            i = (0, v.A)(e, e.type === b.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        switch (e.type) {
                            case b.nQ.CLIP:
                            case b.nQ.VOICE_CLIP:
                                l.push(new File([t], i, { type: "video/mp4" })), d.push({ clip: e });
                                break;
                            case b.nQ.SCREENSHOT:
                                l.push(new File([t], i, { type: "image/jpeg" })), d.push({});
                                break;
                            default:
                                e.type;
                        }
                    }
                    let f = (await Promise.all(e.map(A.pk))).filter(w.Vq).filter((e) => (0, T.t)(e));
                    if (0 === f.length) {
                        (0, u.P0)((0, h.o)(S.intl.string(S.t.iufib1), p.Ck.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (o && s(), f)) {
                        let n = E.A.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, N.R)(l, n, y.C.ChannelMessage, {
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
                                    clip_runtime: (0, I.GN)(),
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await m.A.sendMessage(n.id, C.Ay.parse(n, a), !1, { location: O.Hx.FORWARDING }));
                        }
                    }
                    r && 1 === f.length && ((0, _.iN)(f[0], { openTextInVoiceIfVoiceChannel: !0 }), c.closeAllModals());
                } catch (e) {
                    (0, u.P0)((0, h.o)(S.intl.string(S.t.iufib1), p.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [t, i, s],
        ),
        o = n.useCallback((e) => {
            if (e instanceof k.YB && !(0, T.t)(e.id)) return { label: S.intl.string(S.t.iufib1) };
        }, []);
    return (0, l.jsx)(g.ForwardModal, {
        ...a,
        onClose: s,
        customTitle: S.intl.string(S.t.I8lglT),
        customSubtitle: S.intl.string(S.t.Ey7mOU),
        customPreview: (0, l.jsx)(M, { clips: t }),
        customSendHandler: r,
        customValidateDestination: o,
    });
}
