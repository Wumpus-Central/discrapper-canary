"use strict";
n.d(t, { A: () => b, e: () => y });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(796873),
    o = n.n(r),
    c = n(17928),
    u = n(911608),
    d = n(939249),
    h = n(789645),
    m = n(349288),
    p = n(834730),
    f = n(228366),
    g = n(31717),
    _ = n(399263);
let x = {
    cancel(e, t) {
        f.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = _.A.getMessageForFile(t.id);
        null == n ||
            ("" === g.A.getDraft(n.channel_id, g.C.ChannelMessage) &&
                f.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: g.C.ChannelMessage,
                }));
    },
};
var C = n(46054),
    A = n(453771),
    E = n(985018),
    I = n(490563);
let v = (e) => {
    let { filename: t } = e,
        i = (0, A.GD)(t),
        s = n(714694)(`./icon-file-${i}.svg`);
    return (0, l.jsx)("img", {
        className: I.Kk,
        src: s,
        alt: E.intl.formatToPlainString(E.t.g6KdFv, { fileType: i }),
        title: i,
    });
};
function y(e) {
    let { channelId: t, file: n } = e,
        s = (0, c.bG)([_.A], () => _.A.getMessageForFile(n.id)?.content),
        a = i.useMemo(() => {
            let e = n.items;
            return null == e
                ? E.intl.string(E.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : E.intl.formatToPlainString(E.t.D0noUt, { count: e.length });
        }, [n.items]),
        r = i.useCallback(() => {
            x.cancel(t, n);
        }, [t, n]),
        m = 100 === n.progress,
        p = !m && n.currentSize > 0,
        f = i.useMemo(() => (null == s || "" === s.trim() ? null : C.A.parse(s)), [s]);
    return (0, l.jsxs)("div", {
        className: I.Ig,
        children: [
            null != f && (0, l.jsx)("div", { className: I.Qs, children: f }),
            (0, l.jsxs)("div", {
                className: I.NJ,
                children: [
                    (0, l.jsx)(v, { filename: a }),
                    (0, l.jsxs)("div", {
                        className: I.Jg,
                        children: [
                            (0, l.jsxs)("div", {
                                className: I.tP,
                                children: [
                                    (0, l.jsx)("div", { className: I.iW, children: a }),
                                    p
                                        ? (0, l.jsx)("div", {
                                              className: I.Ej,
                                              children: `— ${o().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: I.L$,
                                children: m ? E.intl.string(E.t.jfKTes) : (0, l.jsx)(u.z, { percent: n.progress }),
                            }),
                        ],
                    }),
                    m
                        ? null
                        : (0, l.jsx)(d.D, {
                              onClick: r,
                              children: (0, l.jsx)(h.P, { size: "md", color: "currentColor", className: I.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let b = (e) => {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: r, onContextMenu: c, renderAdjacentContent: u } = e;
    return (0, l.jsxs)("div", {
        className: a()(I.Ig, t),
        children: [
            (0, l.jsxs)("div", {
                className: I.NJ,
                children: [
                    (0, l.jsx)(v, { filename: i }),
                    (0, l.jsxs)("div", {
                        className: I.Jg,
                        children: [
                            (0, l.jsx)("div", {
                                className: I.RT,
                                children: (0, l.jsx)(m.Anchor, {
                                    className: I.AD,
                                    href: n,
                                    onClick: r,
                                    onContextMenu: c,
                                    children: i,
                                }),
                            }),
                            (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: o().filesize(s),
                            }),
                        ],
                    }),
                ],
            }),
            null != u && u(),
        ],
    });
};
