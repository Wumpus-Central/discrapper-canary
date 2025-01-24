n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(547972),
    c = n(556296),
    d = n(63063),
    u = n(13140),
    h = n(435064),
    m = n(39604),
    p = n(356659),
    g = n(981631),
    f = n(332325),
    _ = n(388032),
    E = n(690924);
function I(e) {
    (0, o.Z)(f.Z.CLIPS), (0, m.UW)(e);
}
function C() {
    let e = (0, a.e7)([c.Z], () => c.Z.getKeybindForAction(g.kg4.SAVE_CLIP));
    if (null == e) return (0, i.jsx)(i.Fragment, { children: _.intl.string(_.t.miecxM) });
    let t = u.BB(e.shortcut, !0);
    return (0, i.jsx)(i.Fragment, {
        children: _.intl.format(_.t.a3HdiI, {
            keybind: t,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    className: E.keyCombo,
                    children: (0, i.jsx)(s.KeyCombo, { shortcut: t })
                })
        })
    });
}
let v = {
    [p.D5.Error]: {
        textColor: 'text-primary',
        buttonLook: s.Button.Looks.FILLED,
        buttonColor: s.Button.Colors.PRIMARY,
        bodyCopy: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.WarningIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: E.errorWarningIcon
                    }),
                    _.intl.string(_.t.Sr64AA)
                ]
            }),
        buttonCopy: () => _.intl.string(_.t.vDGv9f),
        ctaOnClick: () => {
            window.open(d.Z.getArticleURL(g.BhN.CLIPS), '_blank');
        },
        containerClass: E.container
    },
    [p.D5.Disabled]: {
        textColor: 'text-primary',
        buttonLook: s.Button.Looks.FILLED,
        buttonColor: s.Button.Colors.BRAND,
        bodyCopy: () => _.intl.string(_.t.MhrVg4),
        buttonCopy: () => _.intl.string(_.t.GMLBKS),
        ctaOnClick: () => I(p.D5.Disabled),
        containerClass: E.container
    },
    [p.D5.Enabled]: {
        textColor: 'always-white',
        buttonLook: s.Button.Looks.FILLED,
        buttonColor: s.Button.Colors.BRAND_INVERTED,
        bodyCopy: () => (0, i.jsx)(C, {}),
        buttonCopy: () => _.intl.string(_.t.GMLBKS),
        ctaOnClick: () => I(p.D5.Enabled),
        containerClass: l()(E.container, E.containerEnabled)
    }
};
function N() {
    var e;
    let { decoupledClipsEnabled: t, clipsError: n } = (0, a.cj)([h.Z], () => ({
        decoupledClipsEnabled: h.Z.getSettings().decoupledClipsEnabled,
        clipsError: h.Z.getLastClipsError()
    }));
    let r = ((e = t), null != n ? p.D5.Error : e ? p.D5.Enabled : p.D5.Disabled),
        { bodyCopy: l, buttonCopy: o, ctaOnClick: c, textColor: d, buttonColor: u, buttonLook: g, containerClass: f } = v[r];
    return (0, i.jsxs)('div', {
        className: f,
        children: [
            (0, i.jsx)(s.Text, {
                color: d,
                variant: 'text-sm/medium',
                children: l()
            }),
            (0, i.jsx)(s.Button, {
                onClick: () => (0, m.UW)(r),
                size: s.Button.Sizes.NONE,
                look: s.Button.Looks.BLANK,
                className: E.buttonClose,
                children: (0, i.jsx)(s.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.dismissIcon
                })
            }),
            (0, i.jsx)(s.Button, {
                onClick: c,
                className: E.buttonCTA,
                color: u,
                look: g,
                fullWidth: !0,
                size: s.Button.Sizes.SMALL,
                children: o()
            })
        ]
    });
}
