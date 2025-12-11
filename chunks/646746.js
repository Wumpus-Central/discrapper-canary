n.d(t, { O: () => j });
var l = n(54381),
    a = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(392711),
    o = n(481060),
    u = n(911969),
    c = n(830960),
    d = n(26118),
    h = n(686546),
    m = n(627050),
    g = n(124347),
    f = n(499376),
    p = n(937889),
    v = n(930282),
    w = n(695346),
    b = n(318616),
    x = n(388032),
    y = n(547081),
    C = n(655428);
function j(e) {
    var t, n, r, j, O, E;
    let { message: T, forwardOptions: _, channel: P } = e,
        S = w.jU.useSetting(),
        {
            attachments: D,
            embeds: M,
            hasContent: I,
            contentMessage: R,
        } = (0, b.c)({
            message: T,
            channel: P,
            forwardOptions: _,
        }),
        A =
            R.components.length > 0 && R.components[0].type === u.re.CHECKPOINT_CARD
                ? R.components[0].checkpointData
                : null,
        Z = c.F[null != (t = null == A ? void 0 : A.cardId) ? t : 0],
        N = (0, o.dQu)(Z.primaryColor).hex(),
        k = m.d.useExperiment({ location: "forward_preview" }).enabled,
        F = a.useMemo(
            () =>
                I
                    ? (0, p.ZP)(T, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: k,
                          hideSimpleEmbedContent: !1,
                          contentMessage: R,
                      }).content
                    : null,
            [R, I, T, k],
        ),
        U = D.length,
        L = null,
        G = null,
        V = null;
    if (U > 0 || M.length > 0) {
        let e = (0, s.countBy)(D, (e) => (0, f.aw)(e, !0)),
            t = null != (j = e.IMAGE) ? j : 0,
            a = null != (O = e.VIDEO) ? O : 0;
        t > 0 && a > 0
            ? ((L = x.intl.formatToPlainString(x.t.Lr0Top, {
                  image_count: t,
                  video_count: a,
              })),
              (G = o.Ka2))
            : a > 0
              ? ((L = x.intl.formatToPlainString(x.t.SJ6pPX, { count: a })), (G = o.g8d))
              : t > 0
                ? ((L = x.intl.formatToPlainString(x.t.h4pFfU, { count: t })), (G = 1 === t ? o.XBm : o.Ka2))
                : ((L = x.intl.formatToPlainString(x.t["89ihS8"], { count: U })), (G = o.Ujz)),
            a > 0 && U === a
                ? (V = (0, l.jsxs)("div", {
                      className: i()(C.attachmentPreview, C.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(g.ZP, {
                              className: C.thumbnail,
                              src: D[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: C.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : U > 0
                  ? (V = (0, l.jsx)("div", {
                        className: C.attachmentPreview,
                        children: (0, l.jsx)(g.ZP, {
                            src: D[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (r = M[0]) || null == (n = r.thumbnail) ? void 0 : n.proxyURL) != null &&
                    (V = (0, l.jsx)("div", {
                        className: C.attachmentPreview,
                        children: (0, l.jsx)(g.ZP, {
                            src: M[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        U > 1 &&
            null != V &&
            (V = (0, l.jsxs)("div", {
                className: C.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(h.ZP, {
                        mask: h.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: V,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: C.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", U - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: C.forwardPreview,
            children: [
                (0, l.jsxs)("div", {
                    className: C.contentWrapper,
                    children: [
                        null != A &&
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: x.intl.string(y.default.goiR2u),
                            }),
                        I &&
                            (0, l.jsx)(v.ZP, {
                                className: i()(C.forwardPreviewMessage, U > 0 && C.hasAttachments),
                                message: T,
                                content: F,
                                compact: S,
                            }),
                        U > 0 &&
                            (0, l.jsxs)("div", {
                                className: C.attachmentRow,
                                children: [
                                    null != G &&
                                        (0, l.jsx)(G, {
                                            size: "custom",
                                            width: I ? 18 : 20,
                                            color: o.TVs.colors.TEXT_MUTED,
                                        }),
                                    null != L &&
                                        (0, l.jsx)(o.Text, {
                                            variant: I ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: L,
                                        }),
                                ],
                            }),
                    ],
                }),
                V,
                null != A &&
                    (0, l.jsx)("div", {
                        className: C.attachmentPreview,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: N },
                            width: 56,
                            height: 56,
                            src: (0, d.UN)(null != (E = A.cardId) ? E : 0),
                        }),
                    }),
            ],
        })
    );
}
