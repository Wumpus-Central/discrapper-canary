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
    A = i(451909),
    C = i(378570),
    y = i(223863),
    _ = i(95701),
    k = i(734057),
    E = i(31717),
    j = i(174459),
    w = i(403362),
    I = i(518960),
    b = i(372684),
    N = i(439818),
    R = i(607814),
    T = i(74847),
    v = i(280483),
    P = i(696016),
    F = i(652215),
    M = i(381941),
    O = i(375708),
    L = i(28289);
function S(e) {
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
                            (0, l.jsx)(o.x, { size: "custom", width: 20, color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(r.E, {
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
function V(e) {
    let { clips: t, analyticsLocations: i, onClose: s, ...a } = e;
    (0, v.A)();
    let r = n.useCallback(
            async (e, l, n) => {
                let { withMessage: a, transitionToDestination: r, closeAfterSend: o } = l;
                n(!0);
                try {
                    let l = [],
                        d = [];
                    for (let e of t) {
                        let t = await (0, R.VO)(e),
                            i = e.name ?? (0, P.cM)(e.createdAt),
                            n = (0, N.A)(i);
                        if (e.type === b.nQ.CLIP || e.type === b.nQ.VOICE_CLIP) {
                            let i = `${"" !== n ? n : "clip"}.mp4`;
                            l.push(new File([t], i, { type: "video/mp4" })), d.push({ clip: e });
                        } else if (e.type === b.nQ.SCREENSHOT) {
                            let e = `${"" !== n ? n : "screenshot"}.jpeg`;
                            l.push(new File([t], e, { type: "image/jpeg" })), d.push({});
                        }
                    }
                    let f = (await Promise.all(e.map(y.pk))).filter(w.Vq).filter((e) => (0, T.t)(e));
                    if (0 === f.length) {
                        (0, u.P0)((0, h.o)(O.intl.string(O.t.iufib1), p.Ck.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (o && s(), f)) {
                        let n = k.A.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, I.R)(l, n, E.C.ChannelMessage, {
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
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await m.A.sendMessage(n.id, A.Ay.parse(n, a), !1, { location: M.Hx.FORWARDING }));
                        }
                    }
                    r && 1 === f.length && ((0, C.iN)(f[0], { openTextInVoiceIfVoiceChannel: !0 }), c.closeAllModals());
                } catch (e) {
                    (0, u.P0)((0, h.o)(O.intl.string(O.t.iufib1), p.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [t, i, s],
        ),
        o = n.useCallback((e) => {
            if (e instanceof _.YB && !(0, T.t)(e.id)) return { label: O.intl.string(O.t.iufib1) };
        }, []);
    return (0, l.jsx)(g.ForwardModal, {
        ...a,
        onClose: s,
        customTitle: O.intl.string(O.t.I8lglT),
        customSubtitle: O.intl.string(O.t.Ey7mOU),
        customPreview: (0, l.jsx)(S, { clips: t }),
        customSendHandler: r,
        customValidateDestination: o,
    });
}
