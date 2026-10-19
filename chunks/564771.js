n.d(t, { A: () => S, e: () => v });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(796873),
    c = n.n(r),
    o = n(17928),
    u = n(911608),
    d = n(939249),
    m = n(789645),
    h = n(28863),
    f = n(834730),
    g = n(73153),
    p = n(31717),
    A = n(399263);
let x = {
    cancel(e, t) {
        g.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = A.A.getMessageForFile(t.id);
        null == n ||
            ("" === p.A.getDraft(n.channel_id, p.C.ChannelMessage) &&
                g.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: p.C.ChannelMessage,
                }));
    },
};
var C = n(46054),
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
function v(e) {
    let { channelId: t, file: n } = e,
        a = (0, o.bG)([A.A], () => A.A.getMessageForFile(n.id)?.content),
        i = s.useMemo(() => {
            let e = n.items;
            return null == e
                ? _.intl.string(_.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : _.intl.formatToPlainString(_.t.D0noUt, { count: e.length });
        }, [n.items]),
        r = s.useCallback(() => {
            x.cancel(t, n);
        }, [t, n]),
        h = 100 === n.progress,
        f = !h && n.currentSize > 0,
        g = s.useMemo(() => (null == a || "" === a.trim() ? null : C.A.parse(a)), [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != g && (0, l.jsx)("div", { className: N.Qs, children: g }),
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
                                                  children: `\u{2014} ${c().filesize(n.currentSize)}`,
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
let S = function (e) {
    let { className: t, url: n, fileName: s, fileSize: a, onClick: r, onContextMenu: o, renderAdjacentContent: u } = e;
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
                                    onContextMenu: o,
                                    children: s,
                                }),
                            }),
                            (0, l.jsx)(f.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: c().filesize(a),
                            }),
                        ],
                    }),
                ],
            }),
            null != u && u(),
        ],
    });
};
