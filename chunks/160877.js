n.d(t, {
    $: () => v,
    s: () => C,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(470167),
    s = n(82659),
    c = n(572691),
    u = n(70097),
    d = n(406432),
    p = n(584656),
    m = n(247206),
    f = n(719548),
    g = n(388032),
    _ = n(463300);
let h = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(E, {
                  url: n,
                  description: i,
              });
    },
    b = (e) => {
        var t, n, i;
        let { embed: l } = e;
        if (!f.n2.has(l.type)) return null;
        let o =
            void 0 !== l.video && l.type !== a.h.GIFV
                ? l.video.url
                : null != (i = null == (t = l.thumbnail) ? void 0 : t.url)
                  ? i
                  : null == (n = l.image)
                    ? void 0
                    : n.url;
        return null == o ? null : (0, r.jsx)(E, { url: o });
    },
    E = (e) => {
        let { url: t, description: n } = e,
            i = (0, d.cb)(t);
        return (0, r.jsx)("div", {
            className: _.mediaContainer,
            children: i
                ? (0, r.jsx)(u.Z, {
                      className: o()(_.video, _.media),
                      controls: !0,
                      src: t,
                  })
                : (0, r.jsx)("img", {
                      className: o()(_.image, _.media),
                      src: t,
                      alt: n,
                  }),
        });
    };
function C(e) {
    c.Z.pop(),
        (0, p.t)({
            id: "explicit-media-false-positive-modal",
            text: g.intl.string(g.t.gFsTKi),
        }),
        e();
}
function v(e) {
    let {
            channelId: t,
            messageId: n,
            isReportFalsePositiveLoading: l,
            analyticsContext: o,
            attachmentPreview: a,
            embedPreview: c,
            onConfirmPress: u,
            transitionState: d,
            onClose: p,
        } = e,
        f = i.useCallback(() => {
            (0, m.aP)({
                action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: o,
            }),
                p();
        }, [t, n, o, p]),
        _ = i.useCallback(() => {
            null == u || u(),
                (0, m.aP)({
                    action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: o,
                });
        }, [t, n, o, u]);
    return (
        i.useEffect(() => {
            (0, m.aP)({
                action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: o,
            });
        }, [t, n, o]),
        (0, r.jsxs)(s.Modal, {
            transitionState: d,
            onClose: p,
            title: g.intl.string(g.t.TPpVkJ),
            subtitle: g.intl.string(g.t["z4du/P"]),
            actions: [
                {
                    text: g.intl.string(g.t["ETE/oK"]),
                    onClick: f,
                    variant: "secondary",
                    disabled: l,
                },
                {
                    text: g.intl.string(g.t["cY+Ooa"]),
                    onClick: _,
                    loading: l,
                    disabled: l,
                },
            ],
            children: [null != a && (0, r.jsx)(h, { attachment: a }), null != c && (0, r.jsx)(b, { embed: c })],
        })
    );
}
