s.r(t), s.d(t, { default: () => p });
var r = s(627968),
    l = s(64700),
    n = s(158954),
    a = s(311907),
    c = s(397927),
    i = s(162605),
    o = s(798286),
    d = s(814278),
    u = s(998759),
    x = s(75811),
    h = s(930840);
s(603266);
var m = s(985018),
    _ = s(250950);
let p = function (e) {
    let { transitionState: t, streamKey: s, channelId: p, onClose: f } = e,
        j = (0, a.bG)([i.A], () => i.A.getSecureFramesState(s)?.epochAuthenticator),
        T = (0, u.z)({ fingerprintBase64: j, chunkSize: 5, desiredLength: 30 }),
        v = l.useCallback(() => {
            (0, o.y5)({ channelId: p });
        }, [p]),
        g = { transitionState: t, title: m.intl.string(m.t.QogHld), subtitle: m.intl.string(m.t.qODBkW) },
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: _.Ot,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.wx,
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: m.intl.string(m.t.cgBTyO),
                                }),
                                null != T &&
                                    (0, r.jsx)(h.c, {
                                        className: _.nJ,
                                        chunks: T,
                                        color: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: v,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(x.j, { className: _.aY, chunks: T, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(c.Text, {
                    className: _.qr,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: m.intl.format(m.t["H3+ktv"], { helpArticle: (0, d.aW)() }),
                }),
            ],
        });
    return (0, r.jsx)(n.Modal, { ...g, onClose: f, actions: [], children: k });
};
