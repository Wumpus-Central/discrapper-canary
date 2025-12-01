t.d(e, { default: () => Z });
var r = t(54381);
t(473749);
var i = t(481060),
    l = t(239091),
    c = t(883385),
    o = t(108843),
    a = t(100527),
    s = t(109764),
    u = t(852245),
    d = t(461535),
    f = t(776568),
    b = t(218035),
    h = t(775666),
    O = t(299206),
    p = t(895563),
    j = t(423589),
    y = t(981631),
    g = t(342153),
    P = t(388032);
let Z = (0, o.Z)(
    (0, c.Z)(
        function (n) {
            let { channel: e, onSelect: t } = n,
                c = (0, d.Z)(e),
                o = (0, s.Z)(e),
                a = (0, p.l)(e),
                y = (0, p.P)(e),
                Z = (0, f.ZP)(e),
                v = (0, O.Z)({
                    id: e.id,
                    label: P.intl.string(P.t.gFHI3k),
                }),
                E = (0, u.Z)(e),
                _ = (0, b.Z)(e),
                N = (0, h.ZP)(e),
                A = (0, j.Mn)("ReportToModChannelContextMenu");
            return (0, r.jsxs)(i.v2r, {
                navId: "report-to-mod-channel-context",
                onClose: l.Zy,
                "aria-label": P.intl.string(g.default["zp+z/E"]),
                onSelect: t,
                children: [
                    (0, r.jsxs)(
                        i.kSQ,
                        {
                            children: [c, a],
                        },
                        "mark-as-read-or-favorite",
                    ),
                    (0, r.jsx)(i.kSQ, { children: o }, "channel-actions"),
                    (0, r.jsxs)(
                        i.kSQ,
                        {
                            children: [Z, A ? N : _],
                        },
                        "notifications",
                    ),
                    (0, r.jsx)(i.kSQ, { children: E }),
                    (0, r.jsx)(i.kSQ, { children: y }),
                    (0, r.jsx)(i.kSQ, { children: v }, "developer-actions"),
                ],
            });
        },
        { object: y.qAy.CONTEXT_MENU },
    ),
    [a.Z.CONTEXT_MENU, a.Z.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
