i.d(t, { default: () => L }), i(321073);
var a = i(627968),
    n = i(64700),
    l = i(503698),
    s = i.n(l),
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
    y = i(518960),
    T = i(372684),
    v = i(439818),
    A = i(399925),
    I = i(74847),
    k = i(696016),
    C = i(652215),
    P = i(381941),
    R = i(985018),
    j = i(28289);
function E(e) {
    let { clips: t } = e,
        i = t[0],
        n = i.thumbnail,
        l = null;
    return (
        "" !== n &&
            ((l = (0, a.jsx)("div", {
                className: s()(j.cR, j.JZ),
                children: (0, a.jsx)(p.Ay, { className: j.xn, src: n, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (l = (0, a.jsxs)("div", {
                    className: j.EW,
                    children: [
                        (0, a.jsx)(_.Ay, {
                            mask: _.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: l,
                        }),
                        (0, a.jsxs)(c.Text, {
                            className: j.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, a.jsxs)("div", {
            className: j.sq,
            children: [
                (0, a.jsx)("div", {
                    className: j.FG,
                    children: (0, a.jsxs)("div", {
                        className: j.kp,
                        children: [
                            (0, a.jsx)(c.SfG, { size: "custom", width: 20, color: c.LU0.colors.TEXT_MUTED }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (i.name ?? R.intl.string(R.t.Cyxddp))
                                        : R.intl.formatToPlainString(R.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                l,
            ],
        })
    );
}
function L(e) {
    let { clips: t, analyticsLocations: i, onClose: l, ...s } = e,
        _ = n.useCallback(
            async (e, a, n) => {
                let { withMessage: s, transitionToDestination: _, closeAfterSend: d } = a;
                n(!0);
                try {
                    let a = [],
                        p = [];
                    for (let e of t) {
                        let t = await (0, A.VO)(e),
                            i = e.name ?? (0, k.cM)(e.createdAt),
                            n = (0, v.A)(i);
                        if (e.type === T.nQ.CLIP || e.type === T.nQ.VOICE_CLIP) {
                            let i = `${"" !== n ? n : "clip"}.mp4`;
                            a.push(new File([t], i, { type: "video/mp4" })), p.push({ clip: e });
                        } else if (e.type === T.nQ.SCREENSHOT) {
                            let e = `${"" !== n ? n : "screenshot"}.jpeg`;
                            a.push(new File([t], e, { type: "image/jpeg" })), p.push({});
                        }
                    }
                    let f = (await Promise.all(e.map(m.pk))).filter(b.Vq).filter((e) => (0, I.t)(e));
                    if (0 === f.length) {
                        (0, c.showToast)((0, c.createToast)(R.intl.string(R.t.iufib1), c.ToastType.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (d && l(), f)) {
                        let n = x.A.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, y.R)(a, n, g.C.ChannelMessage, {
                                filesMetadata: p,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            t))
                                w.default.track(C.HAw.CLIP_SHARED, {
                                    location_stack: i,
                                    guild_id: n.guild_id,
                                    channel_id: n.id,
                                    channel_type: n.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != s &&
                                "" !== s.trim() &&
                                (await r.A.sendMessage(n.id, h.Ay.parse(n, s), !1, { location: P.Hx.FORWARDING }));
                        }
                    }
                    _ && 1 === f.length && ((0, u.iN)(f[0], { openTextInVoiceIfVoiceChannel: !0 }), o.closeAllModals());
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(R.intl.string(R.t.iufib1), c.ToastType.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [t, i, l],
        ),
        p = n.useCallback((e) => {
            if (e instanceof f.YB && !(0, I.t)(e.id)) return { label: R.intl.string(R.t.iufib1) };
        }, []);
    return (0, a.jsx)(d.ForwardModal, {
        ...s,
        onClose: l,
        customTitle: R.intl.string(R.t.I8lglT),
        customSubtitle: R.intl.string(R.t.Ey7mOU),
        customPreview: (0, a.jsx)(E, { clips: t }),
        customSendHandler: _,
        customValidateDestination: p,
    });
}
