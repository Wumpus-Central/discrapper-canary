n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    c = n(547972),
    u = n(556296),
    d = n(63063),
    p = n(13140),
    h = n(435064),
    f = n(39604),
    g = n(356659),
    m = n(981631),
    b = n(332325),
    _ = n(388032),
    E = n(318098);
function O(e) {
    ((0, c.Z)(b.Z.CLIPS), (0, f.UW)(e));
}
function y() {
    let e = (0, a.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP));
    if (null == e) return (0, r.jsx)(r.Fragment, { children: _.intl.string(_.t.miecxM) });
    let t = p.BB(e.shortcut, !0);
    return (0, r.jsx)(r.Fragment, {
        children: _.intl.format(_.t.a3HdiI, {
            keybind: t,
            keybindHook: () =>
                (0, r.jsx)('span', {
                    className: E.keyCombo,
                    children: (0, r.jsx)(s.M2$, { shortcut: t })
                })
        })
    });
}
let I = {
    [g.D5.Error]: {
        textColor: 'text-primary',
        buttonLook: o.zx.Looks.FILLED,
        buttonColor: o.zx.Colors.PRIMARY,
        bodyCopy: () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.aNP, {
                        size: 'xs',
                        color: 'currentColor',
                        className: E.errorWarningIcon
                    }),
                    _.intl.string(_.t.Sr64AA)
                ]
            }),
        buttonCopy: () => _.intl.string(_.t.vDGv9f),
        ctaOnClick: () => {
            window.open(d.Z.getArticleURL(m.BhN.CLIPS), '_blank');
        },
        containerClass: E.container
    },
    [g.D5.Disabled]: {
        textColor: 'text-primary',
        buttonLook: o.zx.Looks.FILLED,
        buttonColor: o.zx.Colors.BRAND,
        bodyCopy: () => _.intl.string(_.t.MhrVg4),
        buttonCopy: () => _.intl.string(_.t.GMLBKS),
        ctaOnClick: () => O(g.D5.Disabled),
        containerClass: E.container
    },
    [g.D5.Enabled]: {
        textColor: 'always-white',
        buttonLook: o.zx.Looks.FILLED,
        buttonColor: o.zx.Colors.BRAND_INVERTED,
        bodyCopy: () => (0, r.jsx)(y, {}),
        buttonCopy: () => _.intl.string(_.t.GMLBKS),
        ctaOnClick: () => O(g.D5.Enabled),
        containerClass: l()(E.container, E.containerEnabled)
    }
};
function v() {
    let { decoupledClipsEnabled: e, clipsError: t } = (0, a.cj)([h.Z], () => ({
            decoupledClipsEnabled: h.Z.getSettings().decoupledClipsEnabled,
            clipsError: h.Z.getLastClipsError()
        })),
        n = null != t ? g.D5.Error : e ? g.D5.Enabled : g.D5.Disabled,
        { bodyCopy: i, buttonCopy: l, ctaOnClick: c, textColor: u, buttonColor: d, buttonLook: p, containerClass: m } = I[n];
    return (0, r.jsxs)('div', {
        className: m,
        children: [
            (0, r.jsx)(s.Text, {
                color: u,
                variant: 'text-sm/medium',
                children: i()
            }),
            (0, r.jsx)(o.zx, {
                onClick: () => (0, f.UW)(n),
                size: o.zx.Sizes.NONE,
                look: o.zx.Looks.BLANK,
                className: E.buttonClose,
                children: (0, r.jsx)(s.Dio, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.dismissIcon
                })
            }),
            (0, r.jsx)(o.zx, {
                onClick: c,
                className: E.buttonCTA,
                color: d,
                look: p,
                fullWidth: !0,
                size: o.zx.Sizes.SMALL,
                children: l()
            })
        ]
    });
}
