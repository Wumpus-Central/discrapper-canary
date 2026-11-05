e.d(s, { default: () => y });
var i = e(477900),
    n = e(582128),
    l = e(855986),
    a = e(189213),
    d = e(834730),
    r = e(28863),
    c = e(414121),
    o = e(266080),
    u = e(975571),
    m = e(643501),
    h = e(620632),
    f = e(47167),
    g = e(71393),
    N = e(754712),
    x = e(994500),
    j = e(287809),
    A = e(544105),
    p = e(652215),
    b = e(792996),
    v = e(350701),
    C = e(259784);
function R(t) {
    let { step: s, instructions: e } = t;
    return (0, i.jsxs)("div", {
        className: C.RA,
        children: [
            (0, i.jsx)("div", {
                className: C.RY,
                children: (0, i.jsx)(d.E, { variant: "body-sm/semibold", className: C.CD, children: s }),
            }),
            (0, i.jsx)(d.E, { variant: "body-sm/normal", color: "text-strong", className: C.GA, children: e }),
        ],
    });
}
function y(t) {
    let { channel: s, transitionState: e, onClose: y } = t,
        E = (0, l.bG)([m.default], () => null != m.default.getRemoteSessionId()),
        O = (function (t, s) {
            let { nonce: e, forQRCode: i } = s,
                n = t.getGuildId(),
                l = g.A.getGuild(n),
                a = (0, A.hw)({
                    guildId: n ?? "0",
                    channelId: t.id,
                    channelName: (0, f.m1)(t, j.default, x.A),
                    guildName: l?.name ?? b.intl.string(b.t.LJpTRF),
                    muted: N.Ay.isSelfMute(),
                    deafened: N.Ay.isSelfDeaf(),
                    nonce: e,
                });
            return i ? `${(0, h.TP)()}${p.Rsh.XBOX_HANDOFF}?${a.toString()}` : `${A.Gp}?${a.toString()}`;
        })(s, { forQRCode: !0 });
    return (
        n.useEffect(() => {
            E && y();
        }, [E, y]),
        n.useEffect(() => {
            (0, v.A)(s.id, A.f$.XBOX);
        }, [s.id]),
        (0, i.jsx)(a.a, {
            title: b.intl.string(b.t["f+Aijq"]),
            subtitle: b.intl.string(b.t.mYFmDY),
            actions: [],
            onClose: y,
            transitionState: e,
            children: (0, i.jsxs)("div", {
                className: C.Nr,
                children: [
                    (0, i.jsxs)("div", {
                        className: C.O,
                        children: [
                            (0, i.jsxs)(d.E, {
                                variant: "body-lg/semibold",
                                color: "text-strong",
                                className: C.RA,
                                children: [(0, i.jsx)(o.A, { className: C.Fp }), b.intl.string(b.t.ZNlYbK)],
                            }),
                            (0, i.jsx)(R, { step: 1, instructions: b.intl.string(b.t.dDtkl9) }),
                            (0, i.jsx)(R, { step: 2, instructions: b.intl.string(b.t.IWuXjC) }),
                            (0, i.jsx)(d.E, {
                                variant: "body-sm/medium",
                                children: (0, i.jsx)(r.Anchor, {
                                    className: C.C2,
                                    href: u.A.getArticleURL(p.MVz.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.Ay, { className: C.JB, size: 120, text: O }),
                ],
            }),
        })
    );
}
