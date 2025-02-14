n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(547972),
    d = n(556296),
    c = n(63063),
    u = n(13140),
    h = n(435064),
    m = n(39604),
    p = n(356659),
    g = n(981631),
    _ = n(332325),
    f = n(388032),
    E = n(548392);
function I(e) {
    (0, o.Z)(_.Z.CLIPS), (0, m.UW)(e);
}
function C() {
    let e = (0, a.e7)([d.ZP], () => d.ZP.getKeybindForAction(g.kg4.SAVE_CLIP));
    if (null == e) return (0, i.jsx)(i.Fragment, { children: f.intl.string(f.t.miecxM) });
    let t = u.BB(e.shortcut, !0);
    return (0, i.jsx)(i.Fragment, {
        children: f.intl.format(f.t.a3HdiI, {
            keybind: t,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    className: E.keyCombo,
                    children: (0, i.jsx)(s.M2$, { shortcut: t })
                })
        })
    });
}
let N = {
    [p.D5.Error]: {
        textColor: 'text-primary',
        buttonLook: s.zxk.Looks.FILLED,
        buttonColor: s.zxk.Colors.PRIMARY,
        bodyCopy: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.aNP, {
                        size: 'xs',
                        color: 'currentColor',
                        className: E.errorWarningIcon
                    }),
                    f.intl.string(f.t.Sr64AA)
                ]
            }),
        buttonCopy: () => f.intl.string(f.t.vDGv9f),
        ctaOnClick: () => {
            window.open(c.Z.getArticleURL(g.BhN.CLIPS), '_blank');
        },
        containerClass: E.container
    },
    [p.D5.Disabled]: {
        textColor: 'text-primary',
        buttonLook: s.zxk.Looks.FILLED,
        buttonColor: s.zxk.Colors.BRAND,
        bodyCopy: () => f.intl.string(f.t.MhrVg4),
        buttonCopy: () => f.intl.string(f.t.GMLBKS),
        ctaOnClick: () => I(p.D5.Disabled),
        containerClass: E.container
    },
    [p.D5.Enabled]: {
        textColor: 'always-white',
        buttonLook: s.zxk.Looks.FILLED,
        buttonColor: s.zxk.Colors.BRAND_INVERTED,
        bodyCopy: () => (0, i.jsx)(C, {}),
        buttonCopy: () => f.intl.string(f.t.GMLBKS),
        ctaOnClick: () => I(p.D5.Enabled),
        containerClass: r()(E.container, E.containerEnabled)
    }
};
function v() {
    let { decoupledClipsEnabled: e, clipsError: t } = (0, a.cj)([h.Z], () => ({
            decoupledClipsEnabled: h.Z.getSettings().decoupledClipsEnabled,
            clipsError: h.Z.getLastClipsError()
        })),
        n = null != t ? p.D5.Error : e ? p.D5.Enabled : p.D5.Disabled,
        { bodyCopy: l, buttonCopy: r, ctaOnClick: o, textColor: d, buttonColor: c, buttonLook: u, containerClass: g } = N[n];
    return (0, i.jsxs)('div', {
        className: g,
        children: [
            (0, i.jsx)(s.Text, {
                color: d,
                variant: 'text-sm/medium',
                children: l()
            }),
            (0, i.jsx)(s.zxk, {
                onClick: () => (0, m.UW)(n),
                size: s.zxk.Sizes.NONE,
                look: s.zxk.Looks.BLANK,
                className: E.buttonClose,
                children: (0, i.jsx)(s.Dio, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.dismissIcon
                })
            }),
            (0, i.jsx)(s.zxk, {
                onClick: o,
                className: E.buttonCTA,
                color: c,
                look: u,
                fullWidth: !0,
                size: s.zxk.Sizes.SMALL,
                children: r()
            })
        ]
    });
}
