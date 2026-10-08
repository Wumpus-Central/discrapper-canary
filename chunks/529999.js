(i.d(e, { default: () => F }), i(323874), i(14289), i(35956));
var l = i(477900),
    n = i(582128),
    a = i(503698),
    s = i.n(a),
    r = i(17928),
    o = i(65154),
    c = i(834730),
    d = i(376357),
    u = i(173936),
    h = i(148494),
    m = i(280889),
    f = i(342384),
    g = i(429913),
    x = i(573435),
    p = i(914718),
    v = i(619517),
    k = i(274652),
    C = i(823099),
    A = i(451909),
    j = i(135621),
    w = i(446244),
    y = i(734057),
    E = i(287809),
    P = i(957565),
    R = i(403362),
    U = i(381941),
    b = i(660183),
    L = i(476765),
    S = i(739126);
function T(t) {
    let { title: e, subtitle: i, imageUrl: n, fileUrl: a, isVideo: r, overflowCount: d } = t,
        u = null;
    return (
        null != a &&
            ((u = (0, l.jsx)("div", {
                className: s()(S.cR, { [S.JZ]: r }),
                children: r
                    ? (0, l.jsx)(o.S, { className: S.uZ, size: "md", color: "white" })
                    : (0, l.jsx)("img", { className: L.$, src: a, alt: "", width: 56, height: 56 }),
            })),
            d > 0 &&
                (u = (0, l.jsxs)("div", {
                    className: S.EW,
                    children: [
                        (0, l.jsx)(x.Ay, {
                            mask: x.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: u,
                        }),
                        (0, l.jsxs)(c.E, {
                            className: S.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", d],
                        }),
                    ],
                }))),
        (0, l.jsxs)("div", {
            className: S.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: S.FG,
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
                        className: S.cR,
                        children: (0, l.jsx)(v.Ay, { src: n, alt: "", width: 56, height: 56 }),
                    }),
                u,
            ],
        })
    );
}
function F(t) {
    let e,
        i,
        {
            applicationId: a,
            content: s,
            link: o,
            customId: c,
            linkId: x,
            imageUrl: v,
            files: L,
            previewTitle: S,
            previewSubtitle: F,
            onClose: I,
            onCopyLink: W,
            onShare: N,
            ..._
        } = t,
        [M] = (0, g.A)([a]),
        O = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        V = L?.[0],
        q = n.useMemo(() => (null != V ? URL.createObjectURL(V) : void 0), [V]);
    n.useEffect(() => {
        if (null != q) return () => URL.revokeObjectURL(q);
    }, [q]);
    let H = n.useMemo(
            () => o ?? (0, f.W)({ applicationId: a, referrerId: O?.id, customId: c, linkId: x }),
            [o, a, O?.id, c, x],
        ),
        Z = n.useCallback(
            async (t, e, i) => {
                let l,
                    { withMessage: n, closeAfterSend: a } = e;
                (i(!0),
                    N(
                        new Promise((t) => {
                            l = t;
                        }),
                    ));
                let r = 0,
                    o = 0;
                try {
                    let e = (await Promise.all(t.map(w.pk)))
                        .filter(R.Vq)
                        .map((t) => y.A.getChannel(t))
                        .filter(R.Vq);
                    if (((o = t.length - e.length), 0 === e.length))
                        return void (0, d.P0)((0, d.ox)(b.intl.string(b.t.iufib1), d.Ck.FAILURE));
                    let i = [v, s, n]
                        .filter(R.Vq)
                        .join("\n")
                        .slice(0, (0, j.a)());
                    for (let t of e) {
                        let e;
                        try {
                            e = await h.A.sendMessage(t.id, A.Ay.parse(t, i), !1, {
                                location: U.Hx.ACTIVITY_SHARE,
                                attachmentsToUpload:
                                    null != L && L.length > 0
                                        ? L.map(
                                              (e) =>
                                                  new m.bK(
                                                      {
                                                          file: new File([e], e.name, { type: e.type }),
                                                          platform: k.x.WEB,
                                                          origin: "unknown:activity_share",
                                                      },
                                                      t.id,
                                                  ),
                                          )
                                        : void 0,
                                onAttachmentUploadError: (e, i, l) => {
                                    (0, C.k)({
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
                    (o > 0
                        ? (0, d.P0)((0, d.ox)(b.intl.string(b.t.iufib1), d.Ck.FAILURE))
                        : (0, d.P0)((0, d.ox)(b.intl.string(b.t.kwmYkt), d.Ck.FORWARD)),
                        a && r > 0 && I());
                } catch {
                    (0, d.P0)((0, d.ox)(b.intl.string(b.t.iufib1), d.Ck.FAILURE));
                } finally {
                    (l(r > 0), i(!1));
                }
            },
            [s, L, v, I, N],
        ),
        G = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": b.intl.string(b.t.WqhZss),
                    onClick: () => {
                        (0, P.C)(H, () => {
                            (W(), (0, d.P0)((0, d.ox)(b.intl.string(b.t["L/PwZf"]), d.Ck.SUCCESS)));
                        });
                    },
                    icon: u.LinkIcon,
                },
            ],
            [W, H],
        ),
        B = M?.name ?? "";
    return (0, l.jsx)(p.ForwardModal, {
        ..._,
        onClose: I,
        source: "frame",
        customPreview: (0, l.jsx)(T, {
            title: S ?? B,
            subtitle:
                F ??
                (null != L && L.length > 0
                    ? ((e = L.filter((t) => t.type.startsWith("image/")).length),
                      (i = L.filter((t) => t.type.startsWith("video/")).length),
                      e > 0 && i > 0
                          ? b.intl.formatToPlainString(b.t.Lr0Top, { image_count: e, video_count: i })
                          : i > 0
                            ? b.intl.formatToPlainString(b.t.SJ6pPX, { count: i })
                            : e > 0
                              ? b.intl.formatToPlainString(b.t.h4pFfU, { count: e })
                              : b.intl.formatToPlainString(b.t["89ihS8"], { count: L.length }))
                    : void 0),
            imageUrl: v,
            fileUrl: q,
            isVideo: V?.type.startsWith("video/") ?? !1,
            overflowCount: Math.max((L?.length ?? 1) - 1, 0),
        }),
        customSendHandler: Z,
        additionalActions: G,
    });
}
