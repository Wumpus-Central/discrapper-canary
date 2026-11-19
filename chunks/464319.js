(e.d(i, { default: () => Q }), e(508300), e(775859));
var l = e(477900),
    n = e(582128),
    a = e(503698),
    r = e.n(a),
    s = e(192308),
    o = e(834730),
    c = e(176781),
    d = e(646514),
    h = e(858899),
    u = e(793574),
    m = e(688810),
    f = e(573435),
    p = e(92961),
    g = e(619517),
    y = e(378570),
    v = e(223863),
    x = e(95701),
    A = e(734057),
    E = e(403362),
    w = e(74847),
    j = e(132319),
    N = e(280483);
e(321073);
var S = e(73153),
    T = e(157559),
    b = e(138399),
    C = e(48325),
    I = e(982024),
    P = e(274652),
    O = e(458914),
    _ = e(451909),
    k = e(518960),
    D = e(382287),
    R = e(341923),
    H = e(538724),
    F = e(489496),
    L = e(589553),
    M = e(767637),
    U = e(696016);
e(652215);
var V = e(381941),
    q = e(792996);
function B(t) {
    (U.GU.error("Failed to share clip", t), (0, h.P0)({ text: q.intl.string(q.t.B3vFdU), variant: "critical" }));
}
var G = e(954646),
    W = e(739126);
function J(t) {
    let { clips: i } = t,
        e = i[0],
        n = e.thumbnail,
        a = null;
    return (
        "" !== n &&
            ((a = (0, l.jsx)("div", {
                className: r()(W.cR, W.JZ),
                children: (0, l.jsx)(g.Ay, { className: W.xn, src: n, width: 56, height: 56 }),
            })),
            i.length > 1 &&
                (a = (0, l.jsxs)("div", {
                    className: W.EW,
                    children: [
                        (0, l.jsx)(f.Ay, {
                            mask: f.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: a,
                        }),
                        (0, l.jsxs)(o.E, {
                            className: W.mB,
                            variant: "body-xs/semibold",
                            color: "text-default",
                            children: ["+", i.length - 1],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: W.sq,
            children: [
                (0, l.jsx)("div", {
                    className: W.FG,
                    children: (0, l.jsxs)("div", {
                        className: W.kp,
                        children: [
                            (0, l.jsx)(c.ClipsIcon, {
                                className: G.$,
                                size: "refresh_sm",
                                color: d.A.colors.TEXT_MUTED,
                            }),
                            (0, l.jsx)(o.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children:
                                    1 === i.length
                                        ? (0, j.l)(e)
                                        : q.intl.formatToPlainString(q.t.SJ6pPX, { count: i.length }),
                            }),
                        ],
                    }),
                }),
                a,
            ],
        })
    );
}
function Q(t) {
    let { clips: i, onClose: e, onShared: a, analyticsLocations: r, ...o } = t;
    (0, N.A)();
    let { analyticsLocations: c } = (0, m.Ay)(...r, u.A.CLIPS_SHARE_MODAL),
        d = n.useCallback(
            async (t, l, n) => {
                let { withMessage: r, transitionToDestination: o, closeAfterSend: d } = l,
                    u = structuredClone(i);
                n(!0);
                try {
                    let i = (await Promise.all(t.map(v.pk)))
                        .filter(E.Vq)
                        .filter((t) => (0, w.t)(t))
                        .map((t) => A.A.getChannel(t))
                        .filter(E.Vq);
                    if (0 === i.length) return void (0, h.P0)({ text: q.intl.string(q.t.iufib1), variant: "critical" });
                    if (
                        !(function (t, i, e, l) {
                            if (0 === t.length || 0 === i.length) return !1;
                            if (t.length > 10)
                                return (
                                    T.A.show({
                                        title: q.intl.string(q.t.wOr6hB),
                                        body: q.intl.formatToPlainString(q.t["qqyp/e"], { limit: 10 }),
                                    }),
                                    !1
                                );
                            let n = (0, H.D)(t.map((t) => t.id));
                            if (null == n) return ((0, M.A)(), !1);
                            let a = (0, R.s)(),
                                r = i.map((i) => {
                                    let {
                                        nonce: e,
                                        uploader: l,
                                        setPreparedCount: n,
                                    } = (0, I.lH)({ channelId: i.id, content: "" }, void 0, t.length);
                                    return { channel: i, nonce: e, uploader: l, setPreparedCount: n };
                                }),
                                s = new Set();
                            return (
                                !(async function () {
                                    try {
                                        await (async function () {
                                            let i = [];
                                            try {
                                                for (let l of t) {
                                                    let t = await (0, F.VO)(l, { analyticsLocations: e, watermark: a });
                                                    for (let { setPreparedCount: e } of (i.push(
                                                        new File(
                                                            [t],
                                                            (0, L.A)(l, l.type === U.nQ.SCREENSHOT ? "jpeg" : "mp4"),
                                                            {
                                                                type:
                                                                    l.type === U.nQ.SCREENSHOT
                                                                        ? "image/jpeg"
                                                                        : "video/mp4",
                                                            },
                                                        ),
                                                    ),
                                                    r))
                                                        e(i.length);
                                                }
                                            } finally {
                                                n();
                                            }
                                            await Promise.all(
                                                r.map(async (n) => {
                                                    let { channel: a, nonce: r, uploader: o } = n;
                                                    try {
                                                        if (!(0, w.t)(a.id))
                                                            throw Error("Cannot attach clips to destination");
                                                        if ((0, D.fJ)({ files: i, guildId: a.getGuildId() }))
                                                            return void (0, k.V)(a, i);
                                                        let n = i.map(
                                                            (i, e) =>
                                                                new C.bK(
                                                                    {
                                                                        file: i,
                                                                        platform: P.x.WEB,
                                                                        origin: "unknown:clip_share",
                                                                        clip:
                                                                            t[e].type === U.nQ.SCREENSHOT
                                                                                ? void 0
                                                                                : (0, j.J)(t[e]),
                                                                    },
                                                                    a.id,
                                                                ),
                                                        );
                                                        s.add(a.id);
                                                        let c = [
                                                            b.A.sendMessage(
                                                                a.id,
                                                                {
                                                                    content: "",
                                                                    tts: !1,
                                                                    invalidEmojis: [],
                                                                    validNonShortcutEmojis: [],
                                                                },
                                                                void 0,
                                                                {
                                                                    nonce: r,
                                                                    eagerDispatch: !1,
                                                                    pendingUploadId: o.id,
                                                                    attachmentsToUpload: n,
                                                                    location: V.Hx.INSTANT_UPLOAD,
                                                                    onAttachmentUploadError: (t, i, l) => {
                                                                        (0, O.k)({
                                                                            file: t,
                                                                            guildId: a.getGuildId(),
                                                                            analyticsLocations: e,
                                                                            code: i,
                                                                            reason: l,
                                                                        }) || B({ code: i, reason: l });
                                                                    },
                                                                },
                                                            ),
                                                        ];
                                                        for (let t of (null != l &&
                                                            "" !== l.trim() &&
                                                            c.push(
                                                                b.A.sendMessage(a.id, _.Ay.parse(a, l), !1, {
                                                                    location: V.Hx.FORWARDING,
                                                                }),
                                                            ),
                                                        await Promise.allSettled(c)))
                                                            "rejected" === t.status && B(t.reason);
                                                    } catch (t) {
                                                        B(t);
                                                    }
                                                }),
                                            );
                                        })();
                                    } catch (t) {
                                        B(t);
                                    } finally {
                                        for (let { channel: t, uploader: i } of r)
                                            (S.h.dispatch({
                                                type: "UPLOAD_COMPLETE",
                                                channelId: t.id,
                                                file: i._file,
                                                aborted: !1,
                                            }),
                                                s.has(t.id) || (0, I.Dx)(t.id));
                                    }
                                })(),
                                !0
                            );
                        })(u, i, c, r)
                    )
                        return;
                    (d && e(),
                        a?.(),
                        o && 1 === i.length && ((0, y.iN)(i[0].id, { openTextInVoiceIfVoiceChannel: !0 }), s.s7()));
                } catch {
                    (0, h.P0)({ text: q.intl.string(q.t.iufib1), variant: "critical" });
                } finally {
                    n(!1);
                }
            },
            [i, e, a, c],
        ),
        f = n.useCallback((t) => {
            if (t instanceof x.YB && !(0, w.t)(t.id)) return { label: q.intl.string(q.t.iufib1) };
        }, []);
    return (0, l.jsx)(p.ForwardModal, {
        ...o,
        onClose: e,
        customTitle: q.intl.string(q.t.I8lglT),
        customSubtitle: q.intl.string(q.t.Ey7mOU),
        customPreview: (0, l.jsx)(J, { clips: i }),
        customSendHandler: d,
        customValidateDestination: f,
    });
}
