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
    s = n(210550);
function c(e) {
    let { title: t, header: n, info: c, bannerSrc: u, iconSrc: d, embedUrl: m, actions: h = [] } = e,
        { primaryColor: f, secondaryColor: p } = (0, l.Z)(null != d ? d : u),
        _ = 'linear-gradient(45deg, '.concat(f, ', ').concat(p, ')'),
        g =
            a.wS && null != m
                ? (0, i.jsx)(r.Button, {
                      look: r.Button.Looks.BLANK,
                      size: r.Button.Sizes.ICON,
                      'aria-label': o.intl.string(o.t.WqhZsr),
                      className: s.linkIcon,
                      onClick: () => {
                          (0, a.JG)(m), (0, r.showToast)((0, r.createToast)(o.intl.string(o.t['L/PwZW']), r.ToastType.SUCCESS));
                      },
                      children: (0, i.jsx)(r.LinkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null;
    return (0, i.jsxs)('div', {
        className: s.embed,
        children: [
            null != u &&
                (0, i.jsx)('div', {
                    className: s.banner,
                    style: { backgroundImage: 'url('.concat(u, ')') }
                }),
            (0, i.jsxs)('div', {
                className: s.contentContainer,
                style: { background: _ },
                children: [
                    null != n &&
                        (0, i.jsxs)('div', {
                            className: s.header,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'eyebrow',
                                    color: 'none',
                                    children: n
                                }),
                                g
                            ]
                        }),
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
                                        variant: 'text-md/semibold',
                                        color: 'none',
                                        lineClamp: 1,
                                        children: t
                                    }),
                                    (0, i.jsx)('div', {
                                        className: s.contentInfo,
                                        children: c
                                    })
                                ]
                            }),
                            null == n && g
                        ]
                    }),
                    h.length > 0 &&
                        (0, i.jsx)('div', {
                            className: s.actionWrapper,
                            children: h.map((e, t) => {
                                let { label: n, onClick: l, disabledReason: a, submitting: o } = e,
                                    c = null != a,
                                    u = 0 === t,
                                    d = {
                                        color: u ? r.Button.Colors.WHITE : r.Button.Colors.TRANSPARENT,
                                        className: u ? void 0 : s.alwaysWhiteText,
                                        onClick: l,
                                        disabled: c,
                                        submitting: o,
                                        children: n
                                    };
                                return c
                                    ? (0, i.jsx)(
                                          r.Tooltip,
                                          {
                                              text: a,
                                              children: (e) => {
                                                  let { ...t } = e;
                                                  return (0, i.jsx)(r.Button, {
                                                      ...d,
                                                      ...t
                                                  });
                                              }
                                          },
                                          n
                                      )
                                    : (0, i.jsx)(r.Button, { ...d }, n);
                            })
                        })
                ]
            })
        ]
    });
}
