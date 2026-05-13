"use strict";
n.d(t, { A: () => C, e: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(796873),
    l = n.n(o),
    u = n(17928),
    c = n(911608),
    d = n(939249),
    _ = n(789645),
    f = n(349288),
    h = n(834730),
    p = n(228366),
    E = n(31717),
    m = n(399263);
let g = {
    cancel(e, t) {
        p.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = m.A.getMessageForFile(t.id);
        null == n ||
            ("" === E.A.getDraft(n.channel_id, E.C.ChannelMessage) &&
                p.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: E.C.ChannelMessage,
                }));
    },
};
var A = n(46054),
    I = n(453771),
    T = n(375708),
    S = n(490563);
let N = (e) => {
    let { filename: t } = e,
        r = (0, I.GD)(t),
        s = n(714694)(`./icon-file-${r}.svg`);
    return (0, i.jsx)("img", {
        className: S.Kk,
        src: s,
        alt: T.intl.formatToPlainString(T.t.g6KdFv, { fileType: r }),
        title: r,
    });
};
function y(e) {
    let { channelId: t, file: n } = e,
        s = (0, u.bG)([m.A], () => m.A.getMessageForFile(n.id)?.content),
        a = r.useMemo(() => {
            let e = n.items;
            return null == e
                ? T.intl.string(T.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : T.intl.formatToPlainString(T.t.D0noUt, { count: e.length });
        }, [n.items]),
        o = r.useCallback(() => {
            g.cancel(t, n);
        }, [t, n]),
        f = 100 === n.progress,
        h = !f && n.currentSize > 0,
        p = r.useMemo(() => (null == s || "" === s.trim() ? null : A.A.parse(s)), [s]);
    return (0, i.jsxs)("div", {
        className: S.Ig,
        children: [
            null != p && (0, i.jsx)("div", { className: S.Qs, children: p }),
            (0, i.jsxs)("div", {
                className: S.NJ,
                children: [
                    (0, i.jsx)(N, { filename: a }),
                    (0, i.jsxs)("div", {
                        className: S.Jg,
                        children: [
                            (0, i.jsxs)("div", {
                                className: S.tP,
                                children: [
                                    (0, i.jsx)("div", { className: S.iW, children: a }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: S.Ej,
                                              children: `\u{2014} ${l().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: S.L$,
                                children: f
                                    ? T.intl.string(T.t.jfKTes)
                                    : (0, i.jsx)(c.z, { value: n.progress, "aria-label": a }),
                            }),
                        ],
                    }),
                    f
                        ? null
                        : (0, i.jsx)(d.D, {
                              onClick: o,
                              children: (0, i.jsx)(_.P, { size: "md", color: "currentColor", className: S.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let C = (e) => {
    let { className: t, url: n, fileName: r, fileSize: s, onClick: o, onContextMenu: u, renderAdjacentContent: c } = e;
    return (0, i.jsxs)("div", {
        className: a()(S.Ig, t),
        children: [
            (0, i.jsxs)("div", {
                className: S.NJ,
                children: [
                    (0, i.jsx)(N, { filename: r }),
                    (0, i.jsxs)("div", {
                        className: S.Jg,
                        children: [
                            (0, i.jsx)("div", {
                                className: S.RT,
                                children: (0, i.jsx)(f.Anchor, {
                                    className: S.AD,
                                    href: n,
                                    onClick: o,
                                    onContextMenu: u,
                                    children: r,
                                }),
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l().filesize(s),
                            }),
                        ],
                    }),
                ],
            }),
            null != c && c(),
        ],
    });
};
