n.d(t, {
    W: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(206295),
    a = n(572004),
    o = n(388032),
    s = n(702249);
function c(e) {
    let { title: t, info: n, bannerSrc: c, iconSrc: d, embedUrl: u, actions: m = [] } = e,
        { primaryColor: h, secondaryColor: f } = (0, l.Z)(null != d ? d : c),
        p = 'linear-gradient(45deg, '.concat(h, ', ').concat(f, ')');
    return (0, i.jsxs)('div', {
        className: s.embed,
        children: [
            null != c &&
                (0, i.jsx)('div', {
                    className: s.banner,
                    style: { backgroundImage: 'url('.concat(c, ')') }
                }),
            (0, i.jsxs)('div', {
                className: s.contentContainer,
                style: { background: p },
                children: [
                    (0, i.jsxs)('div', {
                        className: s.contentWrapper,
                        children: [
                            null != d &&
                                (0, i.jsx)('div', {
                                    className: s.img,
                                    style: { backgroundImage: 'url('.concat(d, ')') }
                                }),
                            (0, i.jsxs)('div', {
                                className: s.content,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-md/bold',
                                        color: 'always-white',
                                        children: t
                                    }),
                                    n
                                ]
                            }),
                            a.wS &&
                                null != u &&
                                (0, i.jsx)(r.Button, {
                                    look: r.Button.Looks.BLANK,
                                    size: r.Button.Sizes.ICON,
                                    'aria-label': o.intl.string(o.t.WqhZsr),
                                    className: s.linkIcon,
                                    onClick: () => {
                                        (0, a.JG)(u), (0, r.showToast)((0, r.createToast)(o.intl.string(o.t['L/PwZW']), r.ToastType.SUCCESS));
                                    },
                                    children: (0, i.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: '#fff'
                                    })
                                })
                        ]
                    }),
                    m.length > 0 &&
                        (0, i.jsx)('div', {
                            className: s.actionWrapper,
                            children: m.map((e, t) => {
                                let { label: n, onClick: l } = e;
                                return (0, i.jsx)(
                                    r.Button,
                                    {
                                        color: 0 === t ? r.Button.Colors.WHITE : r.Button.Colors.TRANSPARENT,
                                        fullWidth: !0,
                                        onClick: l,
                                        children: n
                                    },
                                    n
                                );
                            })
                        })
                ]
            })
        ]
    });
}
