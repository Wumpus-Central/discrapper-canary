n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(98207),
    l = n(235986),
    o = n(670492),
    c = n(957565),
    d = n(985018),
    u = n(139674),
    _ = n(473169);
function m(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        a = `${t.substr(0, 4)}-${t.substr(4)}`,
        l = s.useRef(null),
        o = s.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    c.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, c.C)(a), l?.current?.focus());
            },
            [a],
        );
    return (0, i.jsx)("li", {
        className: _.SX,
        children: (0, i.jsxs)(r.DUT, {
            innerRef: l,
            className: u.Uc,
            onKeyDown: o,
            children: [(0, i.jsx)(r.P7L, { checked: n }), (0, i.jsx)("span", { className: u.aY, children: a })],
        }),
    });
}
function A(e) {
    let { backupCodes: t } = e,
        n = s.useCallback((e) => e.map((e) => (0, i.jsx)(m, { code: e }, e.code)), []),
        c = s.useCallback(async () => {
            let e = o.A.getVerificationKey();
            await a.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, i.jsxs)(r.D0$, {
        label: d.intl.string(d.t.GfqHPn),
        description: d.intl.format(d.t.OhmvYt, {}),
        children: [
            (0, i.jsxs)(l.A, {
                children: [
                    (0, i.jsx)(l.A.Child, {
                        children: (0, i.jsx)("ul", { className: u.Pm, children: n(t.slice(0, t.length / 2)) }),
                    }),
                    (0, i.jsx)(l.A.Child, {
                        children: (0, i.jsx)("ul", { className: u.Pm, children: n(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, i.jsx)(r.QWc, { textVariant: "text-sm/medium", onClick: c, text: d.intl.string(d.t.RIThUu) }),
        ],
    });
}
