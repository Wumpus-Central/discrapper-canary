i.d(t, { default: () => N }), i(321073);
var a = i(627968),
    l = i(64700),
    n = i(503698),
    s = i.n(n),
    o = i(192308),
    c = i(397927),
    r = i(843472),
    _ = i(573435),
    d = i(911269),
    p = i(619517),
    h = i(451909),
    u = i(378570),
    m = i(223863),
    f = i(95701),
    x = i(734057),
    g = i(31717),
    w = i(954571),
    b = i(403362),
    T = i(661191),
    y = i(518960),
    v = i(372684),
    I = i(439818),
    k = i(399925),
    A = i(74847),
    C = i(696016),
    P = i(652215),
    R = i(381941),
    j = i(985018),
    E = i(28289);
function L(e) {
    let { clips: t } = e,
        i = t[0],
        l = i.thumbnail,
        n = null;
    return (
        "" !== l &&
            ((n = (0, a.jsx)("div", {
                className: s()(E.cR, E.JZ),
                children: (0, a.jsx)(p.Ay, { className: E.xn, src: l, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (n = (0, a.jsxs)("div", {
                    className: E.EW,
                    children: [
                        (0, a.jsx)(_.Ay, {
                            mask: _.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: n,
                        }),
                        (0, a.jsxs)(c.Text, {
                            className: E.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, a.jsxs)("div", {
            className: E.sq,
            children: [
                (0, a.jsx)("div", {
                    className: E.FG,
                    children: (0, a.jsxs)("div", {
                        className: E.kp,
                        children: [
                            (0, a.jsx)(c.SfG, { size: "custom", width: 20, color: c.LU0.colors.TEXT_MUTED }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (i.name ?? j.intl.string(j.t.Cyxddp))
                                        : j.intl.formatToPlainString(j.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                n,
            ],
        })
    );
}
function N(e) {
    let { clips: t, analyticsLocations: i, onClose: n, ...s } = e,
        _ = l.useCallback(
            async (e, a, l) => {
                let { withMessage: s, transitionToDestination: _, closeAfterSend: d } = a;
                l(!0);
                try {
                    let a = [],
                        p = [];
                    for (let e of t) {
                        let t = await (0, k.VO)(e),
                            i = e.name ?? (0, C.cM)(T.default.extractTimestamp(e.id)),
                            l = (0, I.A)(i);
                        if (e.type === v.nQ.CLIP || e.type === v.nQ.VOICE_CLIP) {
                            let i = `${"" !== l ? l : "clip"}.mp4`;
                            a.push(new File([t], i, { type: "video/mp4" })), p.push({ clip: e });
                        } else if (e.type === v.nQ.SCREENSHOT) {
                            let e = `${"" !== l ? l : "screenshot"}.jpeg`;
                            a.push(new File([t], e, { type: "image/jpeg" })), p.push({});
                        }
                    }
                    let f = (await Promise.all(e.map(m.pk))).filter(b.Vq).filter((e) => (0, A.t)(e));
                    if (0 === f.length) {
                        (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.iufib1), c.ToastType.FAILURE)), l(!1);
                        return;
                    }
                    for (let e of (d && n(), f)) {
                        let l = x.A.getChannel(e);
                        if (null != l) {
                            for (let e of ((0, y.R)(a, l, g.C.ChannelMessage, {
                                filesMetadata: p,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            t))
                                w.default.track(P.HAw.CLIP_SHARED, {
                                    location_stack: i,
                                    guild_id: l.guild_id,
                                    channel_id: l.id,
                                    channel_type: l.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != s &&
                                "" !== s.trim() &&
                                (await r.A.sendMessage(l.id, h.Ay.parse(l, s), !1, { location: R.Hx.FORWARDING }));
                        }
                    }
                    _ && 1 === f.length && ((0, u.iN)(f[0], { openTextInVoiceIfVoiceChannel: !0 }), o.closeAllModals());
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.iufib1), c.ToastType.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [t, i, n],
        ),
        p = l.useCallback((e) => {
            if (e instanceof f.YB && !(0, A.t)(e.id)) return { label: j.intl.string(j.t.iufib1) };
        }, []);
    return (0, a.jsx)(d.ForwardModal, {
        ...s,
        onClose: n,
        customTitle: j.intl.string(j.t.I8lglT),
        customSubtitle: j.intl.string(j.t.Ey7mOU),
        customPreview: (0, a.jsx)(L, { clips: t }),
        customSendHandler: _,
        customValidateDestination: p,
    });
}
