s.d(t, { A: () => N, e: () => E });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    i = s.n(l),
    r = s(796873),
    o = s.n(r),
    u = s(17928),
    d = s(911608),
    c = s(939249),
    h = s(789645),
    m = s(28863),
    p = s(834730),
    f = s(73153),
    g = s(31717),
    v = s(399263);
let C = {
    cancel(e, t) {
        f.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let s = v.A.getMessageForFile(t.id);
        null == s ||
            ("" === g.A.getDraft(s.channel_id, g.C.ChannelMessage) &&
                f.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: s.channel_id,
                    draft: s.content,
                    draftType: g.C.ChannelMessage,
                }));
    },
};
var A = s(46054),
    x = s(453771),
    y = s(375708),
    S = s(745268);
function _(e) {
    let { filename: t } = e,
        a = (0, x.GD)(t),
        l = s(492313)(`./icon-file-${a}.svg`);
    return (0, n.jsx)("img", {
        className: S.Kk,
        src: l,
        alt: y.intl.formatToPlainString(y.t.g6KdFv, { fileType: a }),
        title: a,
    });
}
function E(e) {
    let { channelId: t, file: s } = e,
        l = (0, u.bG)([v.A], () => v.A.getMessageForFile(s.id)?.content),
        i = a.useMemo(() => {
            let e = s.items;
            return null == e
                ? y.intl.string(y.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : y.intl.formatToPlainString(y.t.D0noUt, { count: e.length });
        }, [s.items]),
        r = a.useCallback(() => {
            C.cancel(t, s);
        }, [t, s]),
        m = 100 === s.progress,
        p = !m && s.currentSize > 0,
        f = a.useMemo(() => (null == l || "" === l.trim() ? null : A.A.parse(l)), [l]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != f && (0, n.jsx)("div", { className: S.Qs, children: f }),
            (0, n.jsx)("div", {
                className: S.Ig,
                children: (0, n.jsxs)("div", {
                    className: S.NJ,
                    children: [
                        (0, n.jsx)(_, { filename: i }),
                        (0, n.jsxs)("div", {
                            className: S.Jg,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: S.tP,
                                    children: [
                                        (0, n.jsx)("div", { className: S.iW, children: i }),
                                        p
                                            ? (0, n.jsx)("div", {
                                                  className: S.Ej,
                                                  children: `\u{2014} ${o().filesize(s.currentSize)}`,
                                              })
                                            : null,
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: S.L$,
                                    children: m
                                        ? y.intl.string(y.t.jfKTes)
                                        : (0, n.jsx)(d.z, { value: s.progress, "aria-label": i }),
                                }),
                            ],
                        }),
                        m
                            ? null
                            : (0, n.jsx)(c.D, {
                                  onClick: r,
                                  children: (0, n.jsx)(h.P, { size: "md", color: "currentColor", className: S.x7 }),
                              }),
                    ],
                }),
            }),
        ],
    });
}
let N = function (e) {
    let { className: t, url: s, fileName: a, fileSize: l, onClick: r, onContextMenu: u, renderAdjacentContent: d } = e;
    return (0, n.jsxs)("div", {
        className: i()(S.Ig, t),
        children: [
            (0, n.jsxs)("div", {
                className: S.NJ,
                children: [
                    (0, n.jsx)(_, { filename: a }),
                    (0, n.jsxs)("div", {
                        className: S.Jg,
                        children: [
                            (0, n.jsx)("div", {
                                className: S.RT,
                                children: (0, n.jsx)(m.Anchor, {
                                    className: S.AD,
                                    href: s,
                                    onClick: r,
                                    onContextMenu: u,
                                    children: a,
                                }),
                            }),
                            (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: o().filesize(l),
                            }),
                        ],
                    }),
                ],
            }),
            null != d && d(),
        ],
    });
};
