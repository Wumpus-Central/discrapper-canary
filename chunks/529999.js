(i(323874), i(14289), i(35956));
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(855986),
    o = i(65154),
    c = i(834730),
    d = i(858899),
    u = i(292801),
    h = i(646514),
    m = i(173936),
    f = i(138399),
    g = i(48325),
    x = i(342384),
    p = i(429913),
    v = i(573435),
    y = i(92961),
    w = i(619517),
    A = i(274652),
    j = i(458914),
    C = i(451909),
    P = i(135621),
    b = i(223863),
    k = i(734057),
    E = i(287809),
    I = i(957565),
    T = i(403362),
    R = i(381941),
    U = i(792996),
    _ = i(476765),
    L = i(739126);
function N(t) {
    let { title: e, subtitle: i, imageUrl: n, fileUrl: a, isVideo: s, overflowCount: d } = t,
        u = null;
    return (
        null != a &&
            ((u = (0, l.jsx)("div", {
                className: r()(L.cR, { [L.JZ]: s }),
                children: s
                    ? (0, l.jsx)(o.CirclePlayIcon, { className: L.uZ, size: "md", color: "white" })
                    : (0, l.jsx)("img", { className: _.$, src: a, alt: "", width: 56, height: 56 }),
            })),
            d > 0 &&
                (u = (0, l.jsxs)("div", {
                    className: L.EW,
                    children: [
                        (0, l.jsx)(v.Ay, {
                            mask: v.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: u,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: L.mB,
                            variant: "body-xs/semibold",
                            color: "text-default",
                            children: ["+", d],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: L.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: L.FG,
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: e,
                        }),
                        null != i &&
                            (0, l.jsx)(c.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: i,
                            }),
                    ],
                }),
                null != n &&
                    (0, l.jsx)("div", {
                        className: L.cR,
                        children: (0, l.jsx)(w.Ay, { src: n, alt: "", width: 56, height: 56 }),
                    }),
                u,
            ],
        })
    );
}
i.d(
    e,
    {},
    {
        default: function (t) {
            let e,
                i,
                {
                    applicationId: a,
                    content: r,
                    link: o,
                    customId: c,
                    linkId: v,
                    channelId: w,
                    imageUrl: _,
                    files: L,
                    previewTitle: S,
                    previewSubtitle: W,
                    onClose: M,
                    onCopyLink: F,
                    onShare: O,
                    ...V
                } = t,
                [q] = (0, p.A)([a]),
                H = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
                Z = L?.[0],
                B = n.useMemo(() => (null != Z ? URL.createObjectURL(Z) : void 0), [Z]);
            n.useEffect(() => {
                if (null != B) return () => URL.revokeObjectURL(B);
            }, [B]);
            let G = n.useMemo(
                    () => o ?? (0, x.W)({ applicationId: a, referrerId: H?.id, customId: c, linkId: v, channelId: w }),
                    [o, a, H?.id, c, v, w],
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
                            let e = (await Promise.all(t.map(b.pk)))
                                .filter(T.Vq)
                                .map((t) => k.A.getChannel(t))
                                .filter(T.Vq);
                            if (((o = t.length - e.length), 0 === e.length))
                                return void (0, d.P0)({ text: U.intl.string(U.t.iufib1), variant: "critical" });
                            let i = [_, r, n]
                                .filter(T.Vq)
                                .join("\n")
                                .slice(0, (0, P.a)());
                            for (let t of e) {
                                let e;
                                try {
                                    e = await f.A.sendMessage(t.id, C.Ay.parse(t, i), !1, {
                                        location: R.Hx.ACTIVITY_SHARE,
                                        attachmentsToUpload:
                                            null != L && L.length > 0
                                                ? L.map(
                                                      (e) =>
                                                          new g.bK(
                                                              {
                                                                  file: new File([e], e.name, { type: e.type }),
                                                                  platform: A.x.WEB,
                                                                  origin: "unknown:activity_share",
                                                              },
                                                              t.id,
                                                          ),
                                                  )
                                                : void 0,
                                        onAttachmentUploadError: (e, i, l) => {
                                            (0, j.k)({
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
                                ? (0, d.P0)({ text: U.intl.string(U.t.iufib1), variant: "critical" })
                                : (0, d.P0)({
                                      text: U.intl.string(U.t.kwmYkt),
                                      icon: u.ArrowAngleRightUpIcon,
                                      iconColor: h.A.colors.ICON_FEEDBACK_POSITIVE,
                                  }),
                                a && s > 0 && M());
                        } catch {
                            (0, d.P0)({ text: U.intl.string(U.t.iufib1), variant: "critical" });
                        } finally {
                            (l(s > 0), i(!1));
                        }
                    },
                    [r, L, _, M, O],
                ),
                J = n.useMemo(
                    () => [
                        {
                            variant: "secondary",
                            text: void 0,
                            "aria-label": U.intl.string(U.t.WqhZss),
                            onClick: () => {
                                (0, I.C)(G, () => {
                                    (F(), (0, d.P0)({ text: U.intl.string(U.t["L/PwZf"]), variant: "success" }));
                                });
                            },
                            icon: m.LinkIcon,
                        },
                    ],
                    [F, G],
                ),
                K = q?.name ?? "";
            return (0, l.jsx)(y.ForwardModal, {
                ...V,
                onClose: M,
                source: "frame",
                customPreview: (0, l.jsx)(N, {
                    title: S ?? K,
                    subtitle:
                        W ??
                        (null != L && L.length > 0
                            ? ((e = L.filter((t) => t.type.startsWith("image/")).length),
                              (i = L.filter((t) => t.type.startsWith("video/")).length),
                              e > 0 && i > 0
                                  ? U.intl.formatToPlainString(U.t.Lr0Top, { image_count: e, video_count: i })
                                  : i > 0
                                    ? U.intl.formatToPlainString(U.t.SJ6pPX, { count: i })
                                    : e > 0
                                      ? U.intl.formatToPlainString(U.t.h4pFfU, { count: e })
                                      : U.intl.formatToPlainString(U.t["89ihS8"], { count: L.length }))
                            : void 0),
                    imageUrl: _,
                    fileUrl: B,
                    isVideo: Z?.type.startsWith("video/") ?? !1,
                    overflowCount: Math.max((L?.length ?? 1) - 1, 0),
                }),
                customSendHandler: D,
                additionalActions: J,
            });
        },
    },
);
