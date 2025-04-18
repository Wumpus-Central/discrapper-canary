n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(547972),
    c = n(556296),
    u = n(63063),
    d = n(13140),
    p = n(435064),
    h = n(39604),
    f = n(356659),
    g = n(981631),
    m = n(332325),
    b = n(388032),
    _ = n(318098);
function E(e) {
    (0, s.Z)(m.Z.CLIPS), (0, h.UW)(e);
}
function O() {
    let e = (0, a.e7)([c.ZP], () => c.ZP.getKeybindForAction(g.kg4.SAVE_CLIP));
    if (null == e) return (0, r.jsx)(r.Fragment, { children: b.NW.string(b.t.miecxM) });
    let t = d.BB(e.shortcut, !0);
    return (0, r.jsx)(r.Fragment, {
        children: b.NW.format(b.t.a3HdiI, {
            keybind: t,
            keybindHook: () =>
                (0, r.jsx)('span', {
                    className: _.keyCombo,
                    children: (0, r.jsx)(o.M2$, { shortcut: t })
                })
        })
    });
}
let N = {
    [f.D5.Error]: {
        textColor: 'text-primary',
        buttonLook: o.zxk.Looks.FILLED,
        buttonColor: o.zxk.Colors.PRIMARY,
        bodyCopy: () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.aNP, {
                        size: 'xs',
                        color: 'currentColor',
                        className: _.errorWarningIcon
                    }),
                    b.NW.string(b.t.Sr64AA)
                ]
            }),
        buttonCopy: () => b.NW.string(b.t.vDGv9f),
        ctaOnClick: () => {
            window.open(u.Z.getArticleURL(g.BhN.CLIPS), '_blank');
        },
        containerClass: _.container
    },
    [f.D5.Disabled]: {
        textColor: 'text-primary',
        buttonLook: o.zxk.Looks.FILLED,
        buttonColor: o.zxk.Colors.BRAND,
        bodyCopy: () => b.NW.string(b.t.MhrVg4),
        buttonCopy: () => b.NW.string(b.t.GMLBKS),
        ctaOnClick: () => E(f.D5.Disabled),
        containerClass: _.container
    },
    [f.D5.Enabled]: {
        textColor: 'always-white',
        buttonLook: o.zxk.Looks.FILLED,
        buttonColor: o.zxk.Colors.BRAND_INVERTED,
        bodyCopy: () => (0, r.jsx)(O, {}),
        buttonCopy: () => b.NW.string(b.t.GMLBKS),
        ctaOnClick: () => E(f.D5.Enabled),
        containerClass: l()(_.container, _.containerEnabled)
    }
};
function y() {
    let { decoupledClipsEnabled: e, clipsError: t } = (0, a.cj)([p.Z], () => ({
            decoupledClipsEnabled: p.Z.getSettings().decoupledClipsEnabled,
            clipsError: p.Z.getLastClipsError()
        })),
        n = null != t ? f.D5.Error : e ? f.D5.Enabled : f.D5.Disabled,
        { bodyCopy: i, buttonCopy: l, ctaOnClick: s, textColor: c, buttonColor: u, buttonLook: d, containerClass: g } = N[n];
    return (0, r.jsxs)('div', {
        className: g,
        children: [
            (0, r.jsx)(o.Text, {
                color: c,
                variant: 'text-sm/medium',
                children: i()
            }),
            (0, r.jsx)(o.zxk, {
                onClick: () => (0, h.UW)(n),
                size: o.zxk.Sizes.NONE,
                look: o.zxk.Looks.BLANK,
                className: _.buttonClose,
                children: (0, r.jsx)(o.Dio, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.dismissIcon
                })
            }),
            (0, r.jsx)(o.zxk, {
                onClick: s,
                className: _.buttonCTA,
                color: u,
                look: d,
                fullWidth: !0,
                size: o.zxk.Sizes.SMALL,
                children: l()
            })
        ]
    });
}
