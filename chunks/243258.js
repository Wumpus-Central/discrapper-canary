i.d(e, { default: () => L }), i(321073);
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
    g = i(573435),
    f = i(953832),
    x = i(619517),
    C = i(451909),
    A = i(378570),
    y = i(223863),
    E = i(95701),
    _ = i(734057),
    k = i(31717),
    j = i(174459),
    w = i(403362),
    I = i(518960),
    N = i(372684),
    R = i(607814),
    T = i(74847),
    b = i(589553),
    v = i(280483),
    P = i(652215),
    F = i(381941),
    O = i(375708),
    S = i(28289);
function H(t) {
    let { clips: e } = t,
        i = e[0],
        n = i.thumbnail,
        s = null;
    return (
        "" !== n &&
            ((s = (0, l.jsx)("div", {
                className: a()(S.cR, S.JZ),
                children: (0, l.jsx)(x.Ay, { className: S.xn, src: n, width: 56, height: 56 }),
            })),
            e.length > 1 &&
                (s = (0, l.jsxs)("div", {
                    className: S.EW,
                    children: [
                        (0, l.jsx)(g.Ay, {
                            mask: g.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: s,
                        }),
                        (0, l.jsxs)(r.E, {
                            className: S.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", e.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: S.sq,
            children: [
                (0, l.jsx)("div", {
                    className: S.FG,
                    children: (0, l.jsxs)("div", {
                        className: S.kp,
                        children: [
                            (0, l.jsx)(o.x, { size: "custom", width: 20, color: d.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === e.length
                                        ? (i.name ?? O.intl.string(O.t.Cyxddp))
                                        : O.intl.formatToPlainString(O.t.SJ6pPX, { count: e.length }),
                            }),
                        ],
                    }),
                }),
                s,
            ],
        })
    );
}
function L(t) {
    let { clips: e, analyticsLocations: i, onClose: s, ...a } = t;
    (0, v.A)();
    let r = n.useCallback(
            async (t, l, n) => {
                let { withMessage: a, transitionToDestination: r, closeAfterSend: o } = l;
                n(!0);
                try {
                    let l = [],
                        d = [];
                    for (let t of e) {
                        let e = await (0, R.VO)(t),
                            i = (0, b.A)(t, t.type === N.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        t.type === N.nQ.CLIP || t.type === N.nQ.VOICE_CLIP
                            ? (l.push(new File([e], i, { type: "video/mp4" })), d.push({ clip: t }))
                            : t.type === N.nQ.SCREENSHOT &&
                              (l.push(new File([e], i, { type: "image/jpeg" })), d.push({}));
                    }
                    let g = (await Promise.all(t.map(y.pk))).filter(w.Vq).filter((t) => (0, T.t)(t));
                    if (0 === g.length) {
                        (0, u.P0)((0, h.o)(O.intl.string(O.t.iufib1), p.Ck.FAILURE)), n(!1);
                        return;
                    }
                    for (let t of (o && s(), g)) {
                        let n = _.A.getChannel(t);
                        if (null != n) {
                            for (let t of ((0, I.R)(l, n, k.C.ChannelMessage, {
                                filesMetadata: d,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            e))
                                j.default.track(P.HAw.CLIP_SHARED, {
                                    location_stack: i,
                                    guild_id: n.guild_id,
                                    channel_id: n.id,
                                    channel_type: n.type,
                                    application_id: t.applicationId,
                                    clip_uuid: t.id,
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await m.A.sendMessage(n.id, C.Ay.parse(n, a), !1, { location: F.Hx.FORWARDING }));
                        }
                    }
                    r && 1 === g.length && ((0, A.iN)(g[0], { openTextInVoiceIfVoiceChannel: !0 }), c.closeAllModals());
                } catch (t) {
                    (0, u.P0)((0, h.o)(O.intl.string(O.t.iufib1), p.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [e, i, s],
        ),
        o = n.useCallback((t) => {
            if (t instanceof E.YB && !(0, T.t)(t.id)) return { label: O.intl.string(O.t.iufib1) };
        }, []);
    return (0, l.jsx)(f.ForwardModal, {
        ...a,
        onClose: s,
        customTitle: O.intl.string(O.t.I8lglT),
        customSubtitle: O.intl.string(O.t.Ey7mOU),
        customPreview: (0, l.jsx)(H, { clips: e }),
        customSendHandler: r,
        customValidateDestination: o,
    });
}
