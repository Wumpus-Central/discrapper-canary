t.d(n, { Z: () => h });
var i = t(200651);
t(192379);
var s = t(120356),
    a = t.n(s),
    l = t(481060),
    r = t(600164),
    o = t(548647),
    c = t(696375),
    d = t(800530),
    x = t(388032),
    m = t(395494),
    N = t(91463),
    u = t(160557);
function h(e) {
    let { className: n, onNext: t, onClose: s } = e,
        h = (0, o.n)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, i.jsx)('div', {
                        className: m.iconContainer,
                        children: (0, i.jsx)('img', {
                            src: u,
                            alt: '',
                            className: m.icon
                        })
                    }),
                    (0, i.jsx)(l.X6q, {
                        className: N.title,
                        variant: 'heading-xl/semibold',
                        children: x.NW.string(x.t.QMbTSk)
                    }),
                    (0, i.jsx)(l.X6q, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: x.NW.string(x.t.Qdx8AA)
                    }),
                    null != s &&
                        (0, i.jsx)(l.olH, {
                            className: N.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: a()(m.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        className: m.actionsHeader,
                        children: x.NW.string(x.t['9BRc1N'])
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.NW.string(x.t.PxL38P),
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => h(d.n0.ClickCommunityGuidelinesLink)
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.NW.string(x.t.qC3XKS),
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => h(d.n0.ClickWarningSystemHelpcenterLink)
                    })
                ]
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsx)(l.zxk, {
                    onClick: t,
                    color: l.zxk.Colors.BRAND,
                    children: x.NW.string(x.t.i4jeWV)
                })
            })
        ]
    });
}
