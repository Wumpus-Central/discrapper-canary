(i.d(e, { default: () => U }), i(323874), i(14289), i(35956));
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(17928),
    o = i(65154),
    c = i(834730),
    d = i(858899),
    u = i(292801),
    h = i(661531),
    m = i(173936),
    f = i(148494),
    g = i(280889),
    x = i(342384),
    v = i(429913),
    p = i(573435),
    j = i(914718),
    w = i(619517),
    y = i(274652),
    A = i(823099),
    C = i(451909),
    P = i(135621),
    k = i(446244),
    E = i(734057),
    b = i(287809),
    T = i(957565),
    _ = i(403362),
    I = i(381941),
    L = i(105292),
    N = i(476765),
    R = i(739126);
function S(t) {
    let { title: e, subtitle: i, imageUrl: n, fileUrl: a, isVideo: s, overflowCount: d } = t,
        u = null;
    return (
        null != a &&
            ((u = (0, l.jsx)("div", {
                className: r()(R.cR, { [R.JZ]: s }),
                children: s
                    ? (0, l.jsx)(o.S, { className: R.uZ, size: "md", color: "white" })
                    : (0, l.jsx)("img", { className: N.$, src: a, alt: "", width: 56, height: 56 }),
            })),
            d > 0 &&
                (u = (0, l.jsxs)("div", {
                    className: R.EW,
                    children: [
                        (0, l.jsx)(p.Ay, {
                            mask: p.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: u,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: R.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", d],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: R.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: R.FG,
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: e,
                        }),
                        null != i &&
                            (0, l.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: i,
                            }),
                    ],
                }),
                null != n &&
                    (0, l.jsx)("div", {
                        className: R.cR,
                        children: (0, l.jsx)(w.Ay, { src: n, alt: "", width: 56, height: 56 }),
                    }),
                u,
            ],
        })
    );
}
function U(t) {
    let e,
        i,
        {
            applicationId: a,
            content: r,
            link: o,
            customId: c,
            linkId: p,
            channelId: w,
            imageUrl: N,
            files: R,
            previewTitle: U,
            previewSubtitle: W,
            onClose: M,
            onCopyLink: F,
            onShare: O,
            ...V
        } = t,
        [q] = (0, v.A)([a]),
        H = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        Z = R?.[0],
        B = n.useMemo(() => (null != Z ? URL.createObjectURL(Z) : void 0), [Z]);
    n.useEffect(() => {
        if (null != B) return () => URL.revokeObjectURL(B);
    }, [B]);
    let G = n.useMemo(
            () => o ?? (0, x.W)({ applicationId: a, referrerId: H?.id, customId: c, linkId: p, channelId: w }),
            [o, a, H?.id, c, p, w],
        ),
        D = n.useCallback(
            async (t, e, i) => {
                let l,
                    { withMessage: n, closeAfterSend: a } = e;
                (i(!0),
                    O(
                        new Promise((t) => {
                            l = t;
                        }),
                    ));
                let s = 0,
                    o = 0;
                try {
                    let e = (await Promise.all(t.map(k.pk)))
                        .filter(_.Vq)
                        .map((t) => E.A.getChannel(t))
                        .filter(_.Vq);
                    if (((o = t.length - e.length), 0 === e.length))
                        return void (0, d.P0)({ text: L.intl.string(L.t.iufib1), variant: "critical" });
                    let i = [N, r, n]
                        .filter(_.Vq)
                        .join("\n")
                        .slice(0, (0, P.a)());
                    for (let t of e) {
                        let e;
                        try {
                            e = await f.A.sendMessage(t.id, C.Ay.parse(t, i), !1, {
                                location: I.Hx.ACTIVITY_SHARE,
                                attachmentsToUpload:
                                    null != R && R.length > 0
                                        ? R.map(
                                              (e) =>
                                                  new g.bK(
                                                      {
                                                          file: new File([e], e.name, { type: e.type }),
                                                          platform: y.x.WEB,
                                                          origin: "unknown:activity_share",
                                                      },
                                                      t.id,
                                                  ),
                                          )
                                        : void 0,
                                onAttachmentUploadError: (e, i, l) => {
                                    (0, A.k)({
                                        file: e,
                                        guildId: t.getGuildId(),
                                        analyticsLocations: [],
                                        code: i,
                                        reason: l,
                                    });
                                },
                            });
                        } catch {
                            e = null;
                        }
                        null == e ? (o += 1) : (s += 1);
                    }
                    (o > 0
                        ? (0, d.P0)({ text: L.intl.string(L.t.iufib1), variant: "critical" })
                        : (0, d.P0)({
                              text: L.intl.string(L.t.kwmYkt),
                              icon: u.t,
                              iconColor: h.A.colors.ICON_FEEDBACK_POSITIVE,
                          }),
                        a && s > 0 && M());
                } catch {
                    (0, d.P0)({ text: L.intl.string(L.t.iufib1), variant: "critical" });
                } finally {
                    (l(s > 0), i(!1));
                }
            },
            [r, R, N, M, O],
        ),
        J = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": L.intl.string(L.t.WqhZss),
                    onClick: () => {
                        (0, T.C)(G, () => {
                            (F(), (0, d.P0)({ text: L.intl.string(L.t["L/PwZf"]), variant: "success" }));
                        });
                    },
                    icon: m.LinkIcon,
                },
            ],
            [F, G],
        ),
        K = q?.name ?? "";
    return (0, l.jsx)(j.ForwardModal, {
        ...V,
        onClose: M,
        source: "frame",
        customPreview: (0, l.jsx)(S, {
            title: U ?? K,
            subtitle:
                W ??
                (null != R && R.length > 0
                    ? ((e = R.filter((t) => t.type.startsWith("image/")).length),
                      (i = R.filter((t) => t.type.startsWith("video/")).length),
                      e > 0 && i > 0
                          ? L.intl.formatToPlainString(L.t.Lr0Top, { image_count: e, video_count: i })
                          : i > 0
                            ? L.intl.formatToPlainString(L.t.SJ6pPX, { count: i })
                            : e > 0
                              ? L.intl.formatToPlainString(L.t.h4pFfU, { count: e })
                              : L.intl.formatToPlainString(L.t["89ihS8"], { count: R.length }))
                    : void 0),
            imageUrl: N,
            fileUrl: B,
            isVideo: Z?.type.startsWith("video/") ?? !1,
            overflowCount: Math.max((R?.length ?? 1) - 1, 0),
        }),
        customSendHandler: D,
        additionalActions: J,
    });
}
