"use strict";
n.d(t, { A: () => R, e: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(796873),
    l = n.n(o),
    d = n(17928),
    _ = n(911608),
    u = n(939249),
    c = n(789645),
    E = n(349288),
    h = n(834730),
    m = n(228366),
    f = n(31717),
    g = n(399263);
let p = {
    cancel(e, t) {
        m.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = g.A.getMessageForFile(t.id);
        null == n ||
            ("" === f.A.getDraft(n.channel_id, f.C.ChannelMessage) &&
                m.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: f.C.ChannelMessage,
                }));
    },
};
var A = n(46054),
    I = n(453771),
    T = n(985018),
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
function C(e) {
    let { channelId: t, file: n } = e,
        s = (0, d.bG)([g.A], () => g.A.getMessageForFile(n.id)?.content),
        a = r.useMemo(() => {
            let e = n.items;
            return null == e
                ? T.intl.string(T.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : T.intl.formatToPlainString(T.t.D0noUt, { count: e.length });
        }, [n.items]),
        o = r.useCallback(() => {
            p.cancel(t, n);
        }, [t, n]),
        E = 100 === n.progress,
        h = !E && n.currentSize > 0,
        m = r.useMemo(() => (null == s || "" === s.trim() ? null : A.A.parse(s)), [s]);
    return (0, i.jsxs)("div", {
        className: S.Ig,
        children: [
            null != m && (0, i.jsx)("div", { className: S.Qs, children: m }),
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
                                              children: `— ${l().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: S.L$,
                                children: E ? T.intl.string(T.t.jfKTes) : (0, i.jsx)(_.z, { percent: n.progress }),
                            }),
                        ],
                    }),
                    E
                        ? null
                        : (0, i.jsx)(u.D, {
                              onClick: o,
                              children: (0, i.jsx)(c.P, { size: "md", color: "currentColor", className: S.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let R = (e) => {
    let { className: t, url: n, fileName: r, fileSize: s, onClick: o, onContextMenu: d, renderAdjacentContent: _ } = e;
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
                                children: (0, i.jsx)(E.Anchor, {
                                    className: S.AD,
                                    href: n,
                                    onClick: o,
                                    onContextMenu: d,
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
            null != _ && _(),
        ],
    });
};
