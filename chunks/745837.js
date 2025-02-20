n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(547972),
    c = n(556296),
    u = n(63063),
    d = n(13140),
    p = n(435064),
    h = n(39604),
    g = n(356659),
    f = n(981631),
    m = n(332325),
    b = n(388032),
    _ = n(596259);
function E(e) {
    (0, s.Z)(m.Z.CLIPS), (0, h.UW)(e);
}
function O() {
    let e = (0, o.e7)([c.ZP], () => c.ZP.getKeybindForAction(f.kg4.SAVE_CLIP));
    if (null == e) return (0, r.jsx)(r.Fragment, { children: b.NW.string(b.t.miecxM) });
    let t = d.BB(e.shortcut, !0);
    return (0, r.jsx)(r.Fragment, {
        children: b.NW.format(b.t.a3HdiI, {
            keybind: t,
            keybindHook: () =>
                (0, r.jsx)('span', {
                    className: _.keyCombo,
                    children: (0, r.jsx)(a.M2$, { shortcut: t })
                })
        })
    });
}
let N = {
    [g.D5.Error]: {
        textColor: 'text-primary',
        buttonLook: a.zxk.Looks.FILLED,
        buttonColor: a.zxk.Colors.PRIMARY,
        bodyCopy: () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.aNP, {
                        size: 'xs',
                        color: 'currentColor',
                        className: _.errorWarningIcon
                    }),
                    b.NW.string(b.t.Sr64AA)
                ]
            }),
        buttonCopy: () => b.NW.string(b.t.vDGv9f),
        ctaOnClick: () => {
            window.open(u.Z.getArticleURL(f.BhN.CLIPS), '_blank');
        },
        containerClass: _.container
    },
    [g.D5.Disabled]: {
        textColor: 'text-primary',
        buttonLook: a.zxk.Looks.FILLED,
        buttonColor: a.zxk.Colors.BRAND,
        bodyCopy: () => b.NW.string(b.t.MhrVg4),
        buttonCopy: () => b.NW.string(b.t.GMLBKS),
        ctaOnClick: () => E(g.D5.Disabled),
        containerClass: _.container
    },
    [g.D5.Enabled]: {
        textColor: 'always-white',
        buttonLook: a.zxk.Looks.FILLED,
        buttonColor: a.zxk.Colors.BRAND_INVERTED,
        bodyCopy: () => (0, r.jsx)(O, {}),
        buttonCopy: () => b.NW.string(b.t.GMLBKS),
        ctaOnClick: () => E(g.D5.Enabled),
        containerClass: l()(_.container, _.containerEnabled)
    }
};
function v() {
    let { decoupledClipsEnabled: e, clipsError: t } = (0, o.cj)([p.Z], () => ({
            decoupledClipsEnabled: p.Z.getSettings().decoupledClipsEnabled,
            clipsError: p.Z.getLastClipsError()
        })),
        n = null != t ? g.D5.Error : e ? g.D5.Enabled : g.D5.Disabled,
        { bodyCopy: i, buttonCopy: l, ctaOnClick: s, textColor: c, buttonColor: u, buttonLook: d, containerClass: f } = N[n];
    return (0, r.jsxs)('div', {
        className: f,
        children: [
            (0, r.jsx)(a.Text, {
                color: c,
                variant: 'text-sm/medium',
                children: i()
            }),
            (0, r.jsx)(a.zxk, {
                onClick: () => (0, h.UW)(n),
                size: a.zxk.Sizes.NONE,
                look: a.zxk.Looks.BLANK,
                className: _.buttonClose,
                children: (0, r.jsx)(a.Dio, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.dismissIcon
                })
            }),
            (0, r.jsx)(a.zxk, {
                onClick: s,
                className: _.buttonCTA,
                color: u,
                look: d,
                fullWidth: !0,
                size: a.zxk.Sizes.SMALL,
                children: l()
            })
        ]
    });
}
