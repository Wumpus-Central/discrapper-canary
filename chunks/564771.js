"use strict";
n.d(t, { A: () => v, e: () => N });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(796873),
    o = n.n(a),
    u = n(17928),
    c = n(911608),
    d = n(939249),
    h = n(789645),
    m = n(28863),
    f = n(834730),
    p = n(228366),
    g = n(31717),
    x = n(399263);
let A = {
    cancel(e, t) {
        p.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = x.A.getMessageForFile(t.id);
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
var C = n(46054),
    E = n(453771),
    I = n(375708),
    y = n(745268);
function S(e) {
    let { filename: t } = e,
        i = (0, E.GD)(t),
        s = n(492313)(`./icon-file-${i}.svg`);
    return (0, l.jsx)("img", {
        className: y.Kk,
        src: s,
        alt: I.intl.formatToPlainString(I.t.g6KdFv, { fileType: i }),
        title: i,
    });
}
function N(e) {
    let { channelId: t, file: n } = e,
        s = (0, u.bG)([x.A], () => x.A.getMessageForFile(n.id)?.content),
        r = i.useMemo(() => {
            let e = n.items;
            return null == e
                ? I.intl.string(I.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : I.intl.formatToPlainString(I.t.D0noUt, { count: e.length });
        }, [n.items]),
        a = i.useCallback(() => {
            A.cancel(t, n);
        }, [t, n]),
        m = 100 === n.progress,
        f = !m && n.currentSize > 0,
        p = i.useMemo(() => (null == s || "" === s.trim() ? null : C.A.parse(s)), [s]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != p && (0, l.jsx)("div", { className: y.Qs, children: p }),
            (0, l.jsx)("div", {
                className: y.Ig,
                children: (0, l.jsxs)("div", {
                    className: y.NJ,
                    children: [
                        (0, l.jsx)(S, { filename: r }),
                        (0, l.jsxs)("div", {
                            className: y.Jg,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: y.tP,
                                    children: [
                                        (0, l.jsx)("div", { className: y.iW, children: r }),
                                        f
                                            ? (0, l.jsx)("div", {
                                                  className: y.Ej,
                                                  children: `\u{2014} ${o().filesize(n.currentSize)}`,
                                              })
                                            : null,
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: y.L$,
                                    children: m
                                        ? I.intl.string(I.t.jfKTes)
                                        : (0, l.jsx)(c.z, { value: n.progress, "aria-label": r }),
                                }),
                            ],
                        }),
                        m
                            ? null
                            : (0, l.jsx)(d.D, {
                                  onClick: a,
                                  children: (0, l.jsx)(h.P, { size: "md", color: "currentColor", className: y.x7 }),
                              }),
                    ],
                }),
            }),
        ],
    });
}
let v = function (e) {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: a, onContextMenu: u, renderAdjacentContent: c } = e;
    return (0, l.jsxs)("div", {
        className: r()(y.Ig, t),
        children: [
            (0, l.jsxs)("div", {
                className: y.NJ,
                children: [
                    (0, l.jsx)(S, { filename: i }),
                    (0, l.jsxs)("div", {
                        className: y.Jg,
                        children: [
                            (0, l.jsx)("div", {
                                className: y.RT,
                                children: (0, l.jsx)(m.Anchor, {
                                    className: y.AD,
                                    href: n,
                                    onClick: a,
                                    onContextMenu: u,
                                    children: i,
                                }),
                            }),
                            (0, l.jsx)(f.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: o().filesize(s),
                            }),
                        ],
                    }),
                ],
            }),
            null != c && c(),
        ],
    });
};
