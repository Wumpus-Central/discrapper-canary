n.d(t, {
    $: () => O,
    s: () => y,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(470167),
    l = n(793030),
    c = n(572691),
    u = n(70097),
    d = n(406432),
    f = n(584656),
    _ = n(247206),
    p = n(719548),
    h = n(388032),
    m = n(463300);
let g = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(b, {
                  url: n,
                  description: i,
              });
    },
    E = (e) => {
        var t, n, i;
        let { embed: a } = e;
        if (!p.n2.has(a.type)) return null;
        let o =
            void 0 !== a.video && a.type !== s.h.GIFV
                ? a.video.url
                : null != (i = null == (t = a.thumbnail) ? void 0 : t.url)
                  ? i
                  : null == (n = a.image)
                    ? void 0
                    : n.url;
        return null == o ? null : (0, r.jsx)(b, { url: o });
    },
    b = (e) => {
        let { url: t, description: n } = e,
            i = (0, d.cb)(t);
        return (0, r.jsx)("div", {
            className: m.mediaContainer,
            children: i
                ? (0, r.jsx)(u.Z, {
                      className: o()(m.video, m.media),
                      controls: !0,
                      src: t,
                  })
                : (0, r.jsx)("img", {
                      className: o()(m.image, m.media),
                      src: t,
                      alt: n,
                  }),
        });
    };
function y(e) {
    c.Z.pop(),
        (0, f.t)({
            id: "explicit-media-false-positive-modal",
            text: h.intl.string(h.t.gFsTKu),
        }),
        e();
}
function O(e) {
    let {
            channelId: t,
            messageId: n,
            isReportFalsePositiveLoading: a,
            analyticsContext: o,
            attachmentPreview: s,
            embedPreview: c,
            onConfirmPress: u,
            transitionState: d,
            onClose: f,
        } = e,
        p = i.useCallback(() => {
            (0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: o,
            }),
                f();
        }, [t, n, o, f]),
        m = i.useCallback(() => {
            null == u || u(),
                (0, _.aP)({
                    action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: o,
                });
        }, [t, n, o, u]);
    return (
        i.useEffect(() => {
            (0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: o,
            });
        }, [t, n, o]),
        (0, r.jsxs)(l.Modal, {
            transitionState: d,
            onClose: f,
            title: h.intl.string(h.t.TPpVkI),
            subtitle: h.intl.string(h.t["z4du/I"]),
            actions: [
                {
                    text: h.intl.string(h.t["ETE/oC"]),
                    onClick: p,
                    variant: "secondary",
                    disabled: a,
                },
                {
                    text: h.intl.string(h.t["cY+Oob"]),
                    onClick: m,
                    loading: a,
                    disabled: a,
                },
            ],
            children: [null != s && (0, r.jsx)(g, { attachment: s }), null != c && (0, r.jsx)(E, { embed: c })],
        })
    );
}
