n.d(t, { A: () => v, e: () => y });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(796873),
    o = n.n(r),
    c = n(17928),
    u = n(911608),
    d = n(939249),
    m = n(789645),
    h = n(28863),
    f = n(834730),
    p = n(73153),
    g = n(31717),
    A = n(399263);
let C = {
    cancel(e, t) {
        p.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = A.A.getMessageForFile(t.id);
        null == n ||
            ("" === g.A.getDraft(n.channel_id, g.C.ChannelMessage) &&
                p.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: g.C.ChannelMessage,
                }));
    },
};
var x = n(46054),
    E = n(453771),
    _ = n(105292),
    N = n(745268);
function j(e) {
    let { filename: t } = e,
        s = (0, E.GD)(t),
        a = n(492313)(`./icon-file-${s}.svg`);
    return (0, l.jsx)("img", {
        className: N.Kk,
        src: a,
        alt: _.intl.formatToPlainString(_.t.g6KdFv, { fileType: s }),
        title: s,
    });
}
function y(e) {
    let { channelId: t, file: n } = e,
        a = (0, c.bG)([A.A], () => A.A.getMessageForFile(n.id)?.content),
        i = s.useMemo(() => {
            let e = n.items;
            return null == e
                ? _.intl.string(_.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : _.intl.formatToPlainString(_.t.D0noUt, { count: e.length });
        }, [n.items]),
        r = s.useCallback(() => {
            C.cancel(t, n);
        }, [t, n]),
        h = 100 === n.progress,
        f = !h && n.currentSize > 0,
        p = s.useMemo(() => (null == a || "" === a.trim() ? null : x.A.parse(a)), [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != p && (0, l.jsx)("div", { className: N.Qs, children: p }),
            (0, l.jsx)("div", {
                className: N.Ig,
                children: (0, l.jsxs)("div", {
                    className: N.NJ,
                    children: [
                        (0, l.jsx)(j, { filename: i }),
                        (0, l.jsxs)("div", {
                            className: N.Jg,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: N.tP,
                                    children: [
                                        (0, l.jsx)("div", { className: N.iW, children: i }),
                                        f
                                            ? (0, l.jsx)("div", {
                                                  className: N.Ej,
                                                  children: `\u{2014} ${o().filesize(n.currentSize)}`,
                                              })
                                            : null,
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: N.L$,
                                    children: h
                                        ? _.intl.string(_.t.jfKTes)
                                        : (0, l.jsx)(u.z, { value: n.progress, "aria-label": i }),
                                }),
                            ],
                        }),
                        h
                            ? null
                            : (0, l.jsx)(d.D, {
                                  onClick: r,
                                  children: (0, l.jsx)(m.P, { size: "md", color: "currentColor", className: N.x7 }),
                              }),
                    ],
                }),
            }),
        ],
    });
}
let v = function (e) {
    let { className: t, url: n, fileName: s, fileSize: a, onClick: r, onContextMenu: c, renderAdjacentContent: u } = e;
    return (0, l.jsxs)("div", {
        className: i()(N.Ig, t),
        children: [
            (0, l.jsxs)("div", {
                className: N.NJ,
                children: [
                    (0, l.jsx)(j, { filename: s }),
                    (0, l.jsxs)("div", {
                        className: N.Jg,
                        children: [
                            (0, l.jsx)("div", {
                                className: N.RT,
                                children: (0, l.jsx)(h.Anchor, {
                                    className: N.AD,
                                    href: n,
                                    onClick: r,
                                    onContextMenu: c,
                                    children: s,
                                }),
                            }),
                            (0, l.jsx)(f.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: o().filesize(a),
                            }),
                        ],
                    }),
                ],
            }),
            null != u && u(),
        ],
    });
};
