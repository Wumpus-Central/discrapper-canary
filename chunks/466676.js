t.d(n, { default: () => P });
var r = t(255367);
t(73800);
var i = t(481060),
    o = t(239091),
    l = t(883385),
    c = t(108843),
    a = t(100527),
    u = t(109764),
    s = t(461535),
    d = t(776568),
    f = t(218035),
    b = t(775666),
    h = t(299206),
    p = t(895563),
    O = t(423589),
    j = t(981631),
    y = t(776571),
    g = t(388032);
let P = (0, c.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: n, onSelect: t } = e,
                l = (0, s.Z)(n),
                c = (0, u.Z)(n),
                a = (0, p.l)(n),
                j = (0, p.P)(n),
                P = (0, d.ZP)(n),
                v = (0, h.Z)({
                    id: n.id,
                    label: g.intl.string(g.t.gFHI3t)
                }),
                Z = (0, f.Z)(n),
                m = (0, b.ZP)(n),
                w = (0, O.Mn)('ReportToModChannelContextMenu');
            return (0, r.jsxs)(i.v2r, {
                navId: 'report-to-mod-channel-context',
                onClose: o.Zy,
                'aria-label': g.intl.string(y.default['zp+z/P']),
                onSelect: t,
                children: [
                    (0, r.jsxs)(
                        i.kSQ,
                        {
                            children: [l, a]
                        },
                        'mark-as-read-or-favorite'
                    ),
                    (0, r.jsx)(i.kSQ, { children: c }, 'channel-actions'),
                    (0, r.jsxs)(
                        i.kSQ,
                        {
                            children: [P, w ? m : Z]
                        },
                        'notifications'
                    ),
                    (0, r.jsx)(i.kSQ, { children: j }),
                    (0, r.jsx)(i.kSQ, { children: v }, 'developer-actions')
                ]
            });
        },
        { object: j.qAy.CONTEXT_MENU }
    ),
    [a.Z.CONTEXT_MENU, a.Z.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU]
);
