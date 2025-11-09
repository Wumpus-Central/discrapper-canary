i.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => p });
var a = i(951288);
i(647438);
var e = i(793030),
    l = i(481060),
    s = i(535139),
    o = i(877481),
    r = i(579201),
    c = i(683668),
    u = i(55121),
    d = i(438926),
    x = i(388032),
    f = i(40399);
function p(t) {
    let { transitionState: n, onClose: i, sku: p, application: m } = t,
        h = (0, c.a)(m),
        { fetched: T, hasAlreadyLinked: v, canStartAuthorization: I, startAuthorization: g } = (0, s.F)(m),
        C = (0, r.I)(m);
    if (!T || null == h)
        return (0, a.jsx)(e.IX, {
            transitionState: n,
            onClose: i,
            children: (0, a.jsx)(e.fef, { children: (0, a.jsx)(l.$jN, {}) }),
        });
    if (v) {
        let t =
            h && !C
                ? {
                      variant: "primary",
                      text: x.intl.string(x.t["s+J8Dl"]),
                      onClick: () => {
                          o.Z.launchGame(m.id);
                      },
                      icon: e.rgF,
                  }
                : {
                      variant: "primary",
                      text: x.intl.string(x.t.cpT0Cq),
                      onClick: i,
                  };
        return (0, a.jsxs)(e.IX, {
            transitionState: n,
            onClose: i,
            children: [
                (0, a.jsx)(d.y, {
                    sku: p,
                    title: x.intl.string(x.t["5glWta"]),
                }),
                (0, a.jsx)(e.fef, {
                    children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: f.modalBodyText,
                        children: x.intl.formatToPlainString(x.t.W2znvX, {
                            skuName: p.name,
                            applicationName: m.name,
                        }),
                    }),
                }),
                (0, a.jsx)(e.Go$, {
                    actions: [t],
                    actionsFullWidth: !0,
                }),
            ],
        });
    }
    {
        let t = {
            variant: "primary",
            text: x.intl.string(x.t["VDAhr+"]),
            onClick: g,
            icon: e.uIJ,
            disabled: !I,
        };
        return (0, a.jsx)(u.M, {
            sku: p,
            application: m,
            transitionState: n,
            onClose: i,
            hasAlreadyLinked: v,
            canStartAuthorization: I,
            primaryCTAButtonProps: t,
            bodyText: x.intl.formatToPlainString(x.t.Qmkje8, { applicationName: m.name }),
            title: x.intl.string(x.t.GPAtvf),
        });
    }
}
