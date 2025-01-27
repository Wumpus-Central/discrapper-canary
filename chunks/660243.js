n.d(t, {
    re: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var r = n(793030),
    s = n(442837),
    a = n(780384),
    l = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(726542),
    u = n(835473),
    m = n(594190),
    g = n(553795),
    h = n(823379),
    p = n(981631),
    x = n(701488),
    f = n(388032),
    E = n(707288),
    _ = n(146036),
    C = n(510176);
function T(e) {
    let { headerAssetSrc: t, headerText: n, description: s, assets: a = [], assetCount: o = 0, onClick: c } = e;
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsxs)('div', {
                className: E.headerContainer,
                children: [
                    (0, i.jsx)('img', {
                        src: t,
                        alt: '',
                        className: E.headerAsset
                    }),
                    (0, i.jsx)(r.X6, {
                        variant: 'heading-lg/normal',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, i.jsx)(r.xv, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: s
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: E.sharingContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: E.sharingTitleSpacer,
                        children:
                            o > 0 &&
                            (0, i.jsx)(r.xv, {
                                variant: 'text-sm/semibold',
                                children: f.intl.string(f.t['9b/+6e'])
                            })
                    }),
                    (0, i.jsxs)('div', {
                        className: E.manageContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: E.iconRow,
                                children: [
                                    a.map((e, t) => {
                                        let { src: n, alt: r } = e;
                                        return (0, i.jsx)(
                                            'img',
                                            {
                                                src: n,
                                                alt: r,
                                                className: E.icon
                                            },
                                            t
                                        );
                                    }),
                                    o > 4 &&
                                        (0, i.jsx)('div', {
                                            className: E.overflow,
                                            children: (0, i.jsx)(r.xv, {
                                                variant: 'text-sm/normal',
                                                children: '+'.concat(o - 3)
                                            })
                                        })
                                ]
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: c,
                                color: l.Button.Colors.PRIMARY,
                                children: 'Manage'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function S() {
    let { assets: e, count: t } = (function () {
            let e = (0, s.Wu)([m.ZP], () => m.ZP.getGamesSeen(!1).map((e) => e.id)),
                t = e.length,
                n = e.filter(h.lm).slice(0, t > 4 ? 3 : 4);
            return {
                assets: (0, u.Z)(n)
                    .filter(h.lm)
                    .map((e) => {
                        var t;
                        return {
                            src: null !== (t = e.getIconURL(x.Si.LARGE)) && void 0 !== t ? t : '',
                            alt: e.name
                        };
                    }),
                count: t
            };
        })(),
        { assets: n, count: r } = (function () {
            let e = (0, s.e7)([g.Z], () => g.Z.getAccounts()),
                t = (0, c.ZP)(),
                n = e.length;
            return {
                assets: e.slice(0, n > 4 ? 3 : 4).map((e) => {
                    let n = d.Z.get(e.type);
                    return {
                        src: (0, a.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                        alt: n.name
                    };
                }),
                count: n
            };
        })();
    return (0, i.jsxs)('div', {
        className: E.cardsContainer,
        children: [
            (0, i.jsx)(T, {
                headerAssetSrc: _,
                headerText: f.intl.string(f.t.URyqtL),
                description: f.intl.string(f.t['3uTjaG']),
                assets: e,
                assetCount: t,
                onClick: () => o.Z.open(p.oAB.REGISTERED_GAMES)
            }),
            (0, i.jsx)(T, {
                headerAssetSrc: C,
                headerText: f.intl.string(f.t['3fe7U1']),
                description: f.intl.string(f.t.IoN1am),
                assets: n,
                assetCount: r,
                onClick: () => o.Z.open(p.oAB.CONNECTIONS)
            })
        ]
    });
}
