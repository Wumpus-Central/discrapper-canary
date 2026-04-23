n.d(t, { default: () => U }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(192308),
    c = n(834730),
    u = n(65154),
    o = n(827734),
    d = n(691540),
    f = n(857250),
    m = n(97483),
    p = n(843472),
    A = n(573435),
    h = n(911269),
    g = n(619517),
    L = n(451909),
    E = n(378570),
    x = n(223863),
    _ = n(95701),
    b = n(734057),
    M = n(31717),
    I = n(954571),
    v = n(403362),
    y = n(518960),
    R = n(372684),
    C = n(439818),
    S = n(399925),
    j = n(74847),
    k = n(696016),
    w = n(652215),
    N = n(381941),
    D = n(985018),
    G = n(28289);
function T(e) {
    let { clips: t } = e,
        n = t[0],
        i = n.thumbnail,
        s = null;
    return (
        "" !== i &&
            ((s = (0, l.jsx)("div", {
                className: a()(G.cR, G.JZ),
                children: (0, l.jsx)(g.Ay, { className: G.xn, src: i, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (s = (0, l.jsxs)("div", {
                    className: G.EW,
                    children: [
                        (0, l.jsx)(A.Ay, {
                            mask: A.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: s,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: G.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: G.sq,
            children: [
                (0, l.jsx)("div", {
                    className: G.FG,
                    children: (0, l.jsxs)("div", {
                        className: G.kp,
                        children: [
                            (0, l.jsx)(u.S, { size: "custom", width: 20, color: o.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (n.name ?? D.intl.string(D.t.Cyxddp))
                                        : D.intl.formatToPlainString(D.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                s,
            ],
        })
    );
}
function U(e) {
    let { clips: t, analyticsLocations: n, onClose: s, ...a } = e,
        c = i.useCallback(
            async (e, l, i) => {
                let { withMessage: a, transitionToDestination: c, closeAfterSend: u } = l;
                i(!0);
                try {
                    let l = [],
                        o = [];
                    for (let e of t) {
                        let t = await (0, S.VO)(e),
                            n = e.name ?? (0, k.cM)(e.createdAt),
                            i = (0, C.A)(n);
                        if (e.type === R.nQ.CLIP || e.type === R.nQ.VOICE_CLIP) {
                            let n = `${"" !== i ? i : "clip"}.mp4`;
                            l.push(new File([t], n, { type: "video/mp4" })), o.push({ clip: e });
                        } else if (e.type === R.nQ.SCREENSHOT) {
                            let e = `${"" !== i ? i : "screenshot"}.jpeg`;
                            l.push(new File([t], e, { type: "image/jpeg" })), o.push({});
                        }
                    }
                    let A = (await Promise.all(e.map(x.pk))).filter(v.Vq).filter((e) => (0, j.t)(e));
                    if (0 === A.length) {
                        (0, d.P0)((0, f.o)(D.intl.string(D.t.iufib1), m.Ck.FAILURE)), i(!1);
                        return;
                    }
                    for (let e of (u && s(), A)) {
                        let i = b.A.getChannel(e);
                        if (null != i) {
                            for (let e of ((0, y.R)(l, i, M.C.ChannelMessage, {
                                filesMetadata: o,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            t))
                                I.default.track(w.HAw.CLIP_SHARED, {
                                    location_stack: n,
                                    guild_id: i.guild_id,
                                    channel_id: i.id,
                                    channel_type: i.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await p.A.sendMessage(i.id, L.Ay.parse(i, a), !1, { location: N.Hx.FORWARDING }));
                        }
                    }
                    c && 1 === A.length && ((0, E.iN)(A[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, d.P0)((0, f.o)(D.intl.string(D.t.iufib1), m.Ck.FAILURE));
                } finally {
                    i(!1);
                }
            },
            [t, n, s],
        ),
        u = i.useCallback((e) => {
            if (e instanceof _.YB && !(0, j.t)(e.id)) return { label: D.intl.string(D.t.iufib1) };
        }, []);
    return (0, l.jsx)(h.ForwardModal, {
        ...a,
        onClose: s,
        customTitle: D.intl.string(D.t.I8lglT),
        customSubtitle: D.intl.string(D.t.Ey7mOU),
        customPreview: (0, l.jsx)(T, { clips: t }),
        customSendHandler: c,
        customValidateDestination: u,
    });
}
