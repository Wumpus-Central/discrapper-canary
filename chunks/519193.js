a.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => h });
var i = a(951288);
a(647438);
var s = a(793030),
    e = a(481060),
    o = a(535139),
    r = a(877481),
    c = a(579201),
    l = a(683668),
    d = a(55121),
    u = a(438926),
    x = a(388032),
    m = a(786081);
function h(t) {
    let { transitionState: n, onClose: a, sku: h, application: p } = t,
        f = (0, l.a)(p),
        { fetched: j, hasAlreadyLinked: g, canStartAuthorization: v, startAuthorization: C } = (0, o.F)(p),
        y = (0, c.I)(p);
    if (!j || null == f)
        return (0, i.jsx)(s.IX, {
            transitionState: n,
            onClose: a,
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(e.$jN, {}) }),
        });
    if (g) {
        let t =
            f && !y
                ? {
                      variant: "primary",
                      text: x.intl.string(x.t["s+J8Dl"]),
                      onClick: () => {
                          r.Z.launchGame(p.id);
                      },
                      icon: s.rgF,
                  }
                : {
                      variant: "primary",
                      text: x.intl.string(x.t.cpT0Cq),
                      onClick: a,
                  };
        return (0, i.jsxs)(s.IX, {
            transitionState: n,
            onClose: a,
            children: [
                (0, i.jsx)(u.y, {
                    sku: h,
                    title: x.intl.string(x.t["5glWta"]),
                }),
                (0, i.jsx)(s.fef, {
                    children: (0, i.jsx)(e.Text, {
                        variant: "text-md/normal",
                        className: m.modalBodyText,
                        children: x.intl.formatToPlainString(x.t.W2znvX, {
                            skuName: h.name,
                            applicationName: p.name,
                        }),
                    }),
                }),
                (0, i.jsx)(s.Go$, {
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
            onClick: C,
            icon: s.uIJ,
            disabled: !v,
        };
        return (0, i.jsx)(d.M, {
            sku: h,
            application: p,
            transitionState: n,
            onClose: a,
            hasAlreadyLinked: g,
            canStartAuthorization: v,
            primaryCTAButtonProps: t,
            bodyText: x.intl.formatToPlainString(x.t.Qmkje8, { applicationName: p.name }),
            title: x.intl.string(x.t.GPAtvf),
        });
    }
}
