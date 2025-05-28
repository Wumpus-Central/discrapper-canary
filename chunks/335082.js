n.d(t, { Z: () => f }), n(953529);
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    l = n(695346),
    a = n(358085),
    o = n(981631),
    c = n(797910),
    d = n(388032),
    u = n(154947);
function m() {
    let e = l.Wz.useSetting(),
        t = (e) => {
            l.Wz.updateSetting(e);
        },
        n = [
            {
                value: r.E5.ON,
                label: d.intl.string(d.t.UzGMHx)
            },
            {
                value: r.E5.ON_FOR_LARGE_GUILDS,
                label: d.intl.string(d.t.OFqxQU)
            },
            {
                value: r.E5.OFF,
                label: d.intl.string(d.t.MIgNPD)
            }
        ];
    return (0, i.jsx)(s.hjN, {
        tag: s.RB0.H5,
        title: d.intl.string(c.default.o0peVV),
        titleClassName: u.title,
        children: (0, i.jsxs)(s.xJW, {
            tag: s.RB0.H5,
            title: d.intl.string(c.default.eAQM7u),
            className: u.defaultSetting,
            children: [
                (0, i.jsx)(s.R94, {
                    type: s.R94.Types.DESCRIPTION,
                    className: u.description,
                    children: d.intl.string(c.default.lKsV2t)
                }),
                (0, i.jsx)(s.q4e, {
                    options: n,
                    value: e,
                    onChange: (e) => t(e)
                })
            ]
        })
    });
}
function g() {
    let e = l.cP.useSetting(),
        t = l.Ou.useSetting();
    return (0, i.jsxs)(s.hjN, {
        tag: s.RB0.H5,
        title: d.intl.string(d.t['5gexRU']),
        titleClassName: u.title,
        children: [
            (0, i.jsx)(s.j7V, {
                hideBorder: !0,
                onChange: (e) => l.cP.updateSetting(e),
                note: d.intl.string(d.t.IjucAA),
                value: e,
                children: d.intl.string(d.t.eVdoIy)
            }),
            (0, i.jsx)(s.j7V, {
                hideBorder: !0,
                onChange: (e) => l.Ou.updateSetting(e),
                note: d.intl.string(d.t.oCONqK),
                value: t,
                children: d.intl.string(d.t['tuKl+v'])
            })
        ]
    });
}
function p() {
    let e = l.G6.useSetting(),
        t = a.isPlatformEmbedded ? d.intl.string(d.t.MznbeH) : d.intl.string(d.t.oKqC4u);
    return (0, i.jsx)(s.hjN, {
        className: u.allActivitySharingTitle,
        tag: s.RB0.H5,
        title: d.intl.string(d.t.Wspazs),
        children: (0, i.jsx)(s.j7V, {
            value: e,
            onChange: l.G6.updateSetting,
            note: t,
            hideBorder: !0,
            children: d.intl.string(d.t['4q/Ewc'])
        })
    });
}
function h() {
    return (0, i.jsx)(s.hjN, {
        className: u.privacyAndTerms,
        children: (0, i.jsx)(s.ToO, {
            type: s.ToO.Types.PRIMARY,
            body: d.intl.format(d.t.xvCsx8, {
                termsLink: o.EYA.TERMS,
                privacyLink: o.EYA.PRIVACY
            })
        })
    });
}
let f = function (e) {
    let { className: t } = e;
    return (0, i.jsxs)(s.hjN, {
        className: t,
        tag: s.RB0.H1,
        title: d.intl.string(d.t['6x5uWV']),
        children: [(0, i.jsx)(p, {}), (0, i.jsx)(s.$i$, { className: u.divider }), (0, i.jsx)(m, {}), (0, i.jsx)(s.$i$, { className: u.divider }), (0, i.jsx)(g, {}), (0, i.jsx)(h, {})]
    });
};
