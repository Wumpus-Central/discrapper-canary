t.d(n, { Z: () => _ });
var i = t(200651);
t(192379);
var s = t(120356),
    l = t.n(s),
    a = t(481060),
    r = t(600164),
    o = t(548647),
    c = t(696375),
    d = t(800530),
    x = t(388032),
    m = t(891791),
    u = t(5517),
    h = t(160557);
function _(e) {
    let { className: n, onNext: t, onClose: s } = e,
        _ = (0, o.n)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)('div', {
                        className: m.iconContainer,
                        children: (0, i.jsx)('img', {
                            src: h,
                            alt: '',
                            className: m.icon
                        })
                    }),
                    (0, i.jsx)(a.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t.QMbTSk)
                    }),
                    (0, i.jsx)(a.X6q, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: x.intl.string(x.t.Qdx8AA)
                    }),
                    null != s &&
                        (0, i.jsx)(a.olH, {
                            className: u.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: l()(m.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        className: m.actionsHeader,
                        children: x.intl.string(x.t['9BRc1N'])
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.intl.string(x.t.PxL38P),
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => _(d.n0.ClickCommunityGuidelinesLink)
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.intl.string(x.t.qC3XKS),
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => _(d.n0.ClickWarningSystemHelpcenterLink)
                    })
                ]
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    onClick: t,
                    color: a.zxk.Colors.BRAND,
                    children: x.intl.string(x.t.i4jeWV)
                })
            })
        ]
    });
}
