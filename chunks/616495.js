n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(816814),
    s = n(600164),
    l = n(325067),
    c = n(572004),
    u = n(388032),
    d = n(335094),
    f = n(478411);
function p(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        o = "".concat(t.substr(0, 4), "-").concat(t.substr(4)),
        s = i.useRef(null),
        l = i.useCallback(
            (e) => {
                if ("c" === e.key && e.metaKey && c.wS) {
                    var t;
                    e.preventDefault(),
                        e.stopPropagation(),
                        (0, c.JG)(o),
                        null == s || null == (t = s.current) || t.focus();
                }
            },
            [o],
        );
    return (0, r.jsx)("li", {
        className: f.marginBottom20,
        children: (0, r.jsxs)(a.P3F, {
            innerRef: s,
            className: d.backupCode,
            onKeyDown: l,
            children: [
                (0, r.jsx)(a.FZ5, { checked: n }),
                (0, r.jsx)("span", {
                    className: d.code,
                    children: o,
                }),
            ],
        }),
    });
}
function _(e) {
    let { backupCodes: t } = e,
        n = i.useCallback((e) => e.map((e) => (0, r.jsx)(p, { code: e }, e.code)), []),
        c = i.useCallback(async () => {
            let e = l.Z.getVerificationKey();
            await o.Z.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, r.jsxs)(a.gNt, {
        label: u.intl.string(u.t.GfqHPn),
        description: u.intl.format(u.t.OhmvYt, {}),
        children: [
            (0, r.jsxs)(s.Z, {
                children: [
                    (0, r.jsx)(s.Z.Child, {
                        children: (0, r.jsx)("ul", {
                            className: d.checkboxGroup,
                            children: n(t.slice(0, t.length / 2)),
                        }),
                    }),
                    (0, r.jsx)(s.Z.Child, {
                        children: (0, r.jsx)("ul", {
                            className: d.checkboxGroup,
                            children: n(t.slice(t.length / 2)),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(a.Avr, {
                textVariant: "text-sm/medium",
                onClick: c,
                text: u.intl.string(u.t.RIThUu),
            }),
        ],
    });
}
