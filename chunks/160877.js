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
    p = n(247206),
    _ = n(719548),
    m = n(388032),
    h = n(44332);
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
        if (!_.n2.has(a.type)) return null;
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
            className: h.mediaContainer,
            children: i
                ? (0, r.jsx)(u.Z, {
                      className: o()(h.video, h.media),
                      controls: !0,
                      src: t,
                  })
                : (0, r.jsx)("img", {
                      className: o()(h.image, h.media),
                      src: t,
                      alt: n,
                  }),
        });
    };
function y(e) {
    c.Z.pop(),
        (0, f.t)({
            id: "explicit-media-false-positive-modal",
            text: m.intl.string(m.t.gFsTKu),
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
        _ = i.useCallback(() => {
            (0, p.aP)({
                action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: o,
            }),
                f();
        }, [t, n, o, f]),
        h = i.useCallback(() => {
            null == u || u(),
                (0, p.aP)({
                    action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: o,
                });
        }, [t, n, o, u]);
    return (
        i.useEffect(() => {
            (0, p.aP)({
                action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: o,
            });
        }, [t, n, o]),
        (0, r.jsxs)(l.Modal, {
            transitionState: d,
            onClose: f,
            title: m.intl.string(m.t.TPpVkI),
            subtitle: m.intl.string(m.t["z4du/I"]),
            actions: [
                {
                    text: m.intl.string(m.t["ETE/oC"]),
                    onClick: _,
                    variant: "secondary",
                    disabled: a,
                },
                {
                    text: m.intl.string(m.t["cY+Oob"]),
                    onClick: h,
                    loading: a,
                    disabled: a,
                },
            ],
            children: [null != s && (0, r.jsx)(g, { attachment: s }), null != c && (0, r.jsx)(E, { embed: c })],
        })
    );
}
