i.d(e, { default: () => W }), i(323874), i(14289), i(35956);
var l = i(477900),
    n = i(582128),
    a = i(503698),
    s = i.n(a),
    r = i(17928),
    o = i(65154),
    c = i(834730),
    d = i(691540),
    u = i(857250),
    h = i(97483),
    m = i(173936),
    f = i(148494),
    g = i(280889),
    p = i(565150),
    x = i(342384),
    v = i(429913),
    k = i(573435),
    C = i(953832),
    A = i(619517),
    j = i(823099),
    w = i(451909),
    y = i(135621),
    E = i(223863),
    P = i(734057),
    R = i(287809),
    U = i(957565),
    b = i(403362),
    L = i(381941),
    S = i(375708),
    T = i(476765),
    F = i(739126);
function I(t) {
    let { title: e, subtitle: i, imageUrl: n, fileUrl: a, isVideo: r, overflowCount: d } = t,
        u = null;
    return (
        null != a &&
            ((u = (0, l.jsx)("div", {
                className: s()(F.cR, { [F.JZ]: r }),
                children: r
                    ? (0, l.jsx)(o.S, { className: F.uZ, size: "md", color: "white" })
                    : (0, l.jsx)("img", { className: T.$, src: a, alt: "", width: 56, height: 56 }),
            })),
            d > 0 &&
                (u = (0, l.jsxs)("div", {
                    className: F.EW,
                    children: [
                        (0, l.jsx)(k.Ay, {
                            mask: k.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: u,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: F.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", d],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: F.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: F.FG,
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
                        className: F.cR,
                        children: (0, l.jsx)(A.Ay, { src: n, alt: "", width: 56, height: 56 }),
                    }),
                u,
            ],
        })
    );
}
function W(t) {
    let e,
        i,
        {
            applicationId: a,
            content: s,
            link: o,
            customId: c,
            linkId: k,
            imageUrl: A,
            files: T,
            previewTitle: F,
            previewSubtitle: W,
            onClose: N,
            onCopyLink: _,
            onShare: M,
            ...O
        } = t,
        [V] = (0, v.A)([a]),
        q = (0, r.bG)([R.default], () => R.default.getCurrentUser()),
        H = T?.[0],
        Z = n.useMemo(() => (null != H ? URL.createObjectURL(H) : void 0), [H]);
    n.useEffect(() => {
        if (null != Z) return () => URL.revokeObjectURL(Z);
    }, [Z]);
    let G = n.useMemo(
            () => o ?? (0, x.W)({ applicationId: a, referrerId: q?.id, customId: c, linkId: k }),
            [o, a, q?.id, c, k],
        ),
        z = n.useCallback(
            async (t, e, i) => {
                let l,
                    { withMessage: n, closeAfterSend: a } = e;
                i(!0),
                    M(
                        new Promise((t) => {
                            l = t;
                        }),
                    );
                let r = 0,
                    o = 0;
                try {
                    let e = (await Promise.all(t.map(E.pk)))
                        .filter(b.Vq)
                        .map((t) => P.A.getChannel(t))
                        .filter(b.Vq);
                    if (((o = t.length - e.length), 0 === e.length))
                        return void (0, d.P0)((0, u.o)(S.intl.string(S.t.iufib1), h.Ck.FAILURE));
                    let i = [A, s, n]
                        .filter(b.Vq)
                        .join("\n")
                        .slice(0, (0, y.a)());
                    for (let t of e) {
                        let e;
                        try {
                            e = await f.A.sendMessage(t.id, w.Ay.parse(t, i), !1, {
                                location: L.Hx.ACTIVITY_SHARE,
                                attachmentsToUpload:
                                    null != T && T.length > 0
                                        ? T.map(
                                              (e) =>
                                                  new g.bK(
                                                      {
                                                          file: new File([e], e.name, { type: e.type }),
                                                          platform: p.xz.WEB,
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
                        null == e ? (o += 1) : (r += 1);
                    }
                    o > 0
                        ? (0, d.P0)((0, u.o)(S.intl.string(S.t.iufib1), h.Ck.FAILURE))
                        : (0, d.P0)((0, u.o)(S.intl.string(S.t.kwmYkt), h.Ck.FORWARD)),
                        a && r > 0 && N();
                } catch {
                    (0, d.P0)((0, u.o)(S.intl.string(S.t.iufib1), h.Ck.FAILURE));
                } finally {
                    l(r > 0), i(!1);
                }
            },
            [s, T, A, N, M],
        ),
        B = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": S.intl.string(S.t.WqhZss),
                    onClick: () => {
                        (0, U.C)(G, () => {
                            _(), (0, d.P0)((0, u.o)(S.intl.string(S.t["L/PwZf"]), h.Ck.SUCCESS));
                        });
                    },
                    icon: m.LinkIcon,
                },
            ],
            [_, G],
        ),
        D = V?.name ?? "";
    return (0, l.jsx)(C.ForwardModal, {
        ...O,
        onClose: N,
        source: "frame",
        customPreview: (0, l.jsx)(I, {
            title: F ?? D,
            subtitle:
                W ??
                (null != T && T.length > 0
                    ? ((e = T.filter((t) => t.type.startsWith("image/")).length),
                      (i = T.filter((t) => t.type.startsWith("video/")).length),
                      e > 0 && i > 0
                          ? S.intl.formatToPlainString(S.t.Lr0Top, { image_count: e, video_count: i })
                          : i > 0
                            ? S.intl.formatToPlainString(S.t.SJ6pPX, { count: i })
                            : e > 0
                              ? S.intl.formatToPlainString(S.t.h4pFfU, { count: e })
                              : S.intl.formatToPlainString(S.t["89ihS8"], { count: T.length }))
                    : void 0),
            imageUrl: A,
            fileUrl: Z,
            isVideo: H?.type.startsWith("video/") ?? !1,
            overflowCount: Math.max((T?.length ?? 1) - 1, 0),
        }),
        customSendHandler: z,
        additionalActions: B,
    });
}
