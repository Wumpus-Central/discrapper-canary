t.d(e, { default: () => Z });
var r = t(255367);
t(73800);
var i = t(481060),
    l = t(239091),
    a = t(883385),
    c = t(108843),
    o = t(100527),
    s = t(109764),
    u = t(852245),
    d = t(461535),
    f = t(776568),
    h = t(218035),
    b = t(775666),
    O = t(299206),
    p = t(895563),
    j = t(423589),
    g = t(981631),
    y = t(877021),
    P = t(388032);
let Z = (0, c.Z)(
    (0, a.Z)(
        function (n) {
            let { channel: e, onSelect: t } = n,
                a = (0, d.Z)(e),
                c = (0, s.Z)(e),
                o = (0, p.l)(e),
                g = (0, p.P)(e),
                Z = (0, f.ZP)(e),
                v = (0, O.Z)({
                    id: e.id,
                    label: P.intl.string(P.t.gFHI3t)
                }),
                E = (0, u.Z)(e),
                _ = (0, h.Z)(e),
                m = (0, b.ZP)(e),
                C = (0, j.Mn)('ReportToModChannelContextMenu');
            return (0, r.jsxs)(i.v2r, {
                navId: 'report-to-mod-channel-context',
                onClose: l.Zy,
                'aria-label': P.intl.string(y.default['zp+z/P']),
                onSelect: t,
                children: [
                    (0, r.jsxs)(
                        i.kSQ,
                        {
                            children: [a, o]
                        },
                        'mark-as-read-or-favorite'
                    ),
                    (0, r.jsx)(i.kSQ, { children: c }, 'channel-actions'),
                    (0, r.jsxs)(
                        i.kSQ,
                        {
                            children: [Z, C ? m : _]
                        },
                        'notifications'
                    ),
                    (0, r.jsx)(i.kSQ, { children: E }),
                    (0, r.jsx)(i.kSQ, { children: g }),
                    (0, r.jsx)(i.kSQ, { children: v }, 'developer-actions')
                ]
            });
        },
        { object: g.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU]
);
