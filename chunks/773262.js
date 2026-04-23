s.r(t), s.d(t, { default: () => f });
var r = s(627968),
    l = s(64700),
    n = s(189213),
    a = s(17928),
    c = s(534514),
    i = s(661531),
    o = s(834730),
    d = s(116956),
    u = s(798286),
    h = s(814278),
    x = s(998759),
    m = s(75811),
    _ = s(930840);
s(603266);
var p = s(985018),
    j = s(751005);
let f = function (e) {
    let { transitionState: t, streamKey: s, channelId: f, onClose: v } = e,
        g = (0, a.bG)([d.A], () => d.A.getSecureFramesState(s)?.epochAuthenticator),
        E = (0, x.z)({ fingerprintBase64: g, chunkSize: 5, desiredLength: 30 }),
        T = l.useCallback(() => {
            (0, u.y5)({ channelId: f });
        }, [f]),
        k = { transitionState: t, title: p.intl.string(p.t.QogHld), subtitle: p.intl.string(p.t.qODBkW) },
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: j.Ot,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.wx,
                            children: [
                                (0, r.jsx)(c.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: p.intl.string(p.t.cgBTyO),
                                }),
                                null != E &&
                                    (0, r.jsx)(_.c, {
                                        className: j.nJ,
                                        chunks: E,
                                        color: i.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: T,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(m.j, { className: j.aY, chunks: E, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(o.E, {
                    className: j.qr,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: p.intl.format(p.t["H3+ktv"], { helpArticle: (0, h.aW)() }),
                }),
            ],
        });
    return (0, r.jsx)(n.Modal, { ...k, onClose: v, actions: [], children: A });
};
