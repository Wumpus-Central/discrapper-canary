i.d(t, { default: () => S }), i(321073);
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    c = i(192308),
    r = i(834730),
    o = i(65154),
    _ = i(827734),
    d = i(691540),
    p = i(857250),
    u = i(97483),
    h = i(843472),
    m = i(573435),
    f = i(911269),
    g = i(619517),
    x = i(451909),
    b = i(378570),
    w = i(223863),
    k = i(95701),
    v = i(734057),
    A = i(31717),
    C = i(954571),
    y = i(403362),
    I = i(518960),
    P = i(372684),
    E = i(439818),
    R = i(399925),
    j = i(74847),
    L = i(696016),
    N = i(652215),
    T = i(381941),
    F = i(985018),
    M = i(808961);
function O(e) {
    let { clips: t } = e,
        i = t[0],
        a = i.thumbnail,
        l = null;
    return (
        "" !== a &&
            ((l = (0, n.jsx)("div", {
                className: s()(M.cR, M.JZ),
                children: (0, n.jsx)(g.Ay, { className: M.xn, src: a, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (l = (0, n.jsxs)("div", {
                    className: M.EW,
                    children: [
                        (0, n.jsx)(m.Ay, {
                            mask: m.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: l,
                        }),
                        (0, n.jsxs)(r.E, {
                            className: M.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, n.jsxs)("div", {
            className: M.sq,
            children: [
                (0, n.jsx)("div", {
                    className: M.FG,
                    children: (0, n.jsxs)("div", {
                        className: M.kp,
                        children: [
                            (0, n.jsx)(o.S, { size: "custom", width: 20, color: _.A.colors.TEXT_MUTED }),
                            (0, n.jsx)(r.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (i.name ?? F.intl.string(F.t.Cyxddp))
                                        : F.intl.formatToPlainString(F.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                l,
            ],
        })
    );
}
function S(e) {
    let { clips: t, analyticsLocations: i, onClose: l, ...s } = e,
        r = a.useCallback(
            async (e, n, a) => {
                let { withMessage: s, transitionToDestination: r, closeAfterSend: o } = n;
                a(!0);
                try {
                    let n = [],
                        _ = [];
                    for (let e of t) {
                        let t = await (0, R.VO)(e),
                            i = e.name ?? (0, L.cM)(e.createdAt),
                            a = (0, E.A)(i);
                        if (e.type === P.nQ.CLIP || e.type === P.nQ.VOICE_CLIP) {
                            let i = `${"" !== a ? a : "clip"}.mp4`;
                            n.push(new File([t], i, { type: "video/mp4" })), _.push({ clip: e });
                        } else if (e.type === P.nQ.SCREENSHOT) {
                            let e = `${"" !== a ? a : "screenshot"}.jpeg`;
                            n.push(new File([t], e, { type: "image/jpeg" })), _.push({});
                        }
                    }
                    let m = (await Promise.all(e.map(w.pk))).filter(y.Vq).filter((e) => (0, j.t)(e));
                    if (0 === m.length) {
                        (0, d.P0)((0, p.o)(F.intl.string(F.t.iufib1), u.Ck.FAILURE)), a(!1);
                        return;
                    }
                    for (let e of (o && l(), m)) {
                        let a = v.A.getChannel(e);
                        if (null != a) {
                            for (let e of ((0, I.R)(n, a, A.C.ChannelMessage, {
                                filesMetadata: _,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            t))
                                C.default.track(N.HAw.CLIP_SHARED, {
                                    location_stack: i,
                                    guild_id: a.guild_id,
                                    channel_id: a.id,
                                    channel_type: a.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != s &&
                                "" !== s.trim() &&
                                (await h.A.sendMessage(a.id, x.Ay.parse(a, s), !1, { location: T.Hx.FORWARDING }));
                        }
                    }
                    r && 1 === m.length && ((0, b.iN)(m[0], { openTextInVoiceIfVoiceChannel: !0 }), c.closeAllModals());
                } catch (e) {
                    (0, d.P0)((0, p.o)(F.intl.string(F.t.iufib1), u.Ck.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [t, i, l],
        ),
        o = a.useCallback((e) => {
            if (e instanceof k.YB && !(0, j.t)(e.id)) return { label: F.intl.string(F.t.iufib1) };
        }, []);
    return (0, n.jsx)(f.ForwardModal, {
        ...s,
        onClose: l,
        customTitle: F.intl.string(F.t.I8lglT),
        customSubtitle: F.intl.string(F.t.Ey7mOU),
        customPreview: (0, n.jsx)(O, { clips: t }),
        customSendHandler: r,
        customValidateDestination: o,
    });
}
