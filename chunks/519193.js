i.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => f });
var a = i(951288);
i(647438);
var e = i(793030),
    o = i(481060),
    s = i(535139),
    l = i(877481),
    r = i(579201),
    c = i(683668),
    u = i(55121),
    d = i(438926),
    x = i(388032),
    p = i(786081);
function f(t) {
    let { transitionState: n, onClose: i, sku: f, application: m } = t,
        T = (0, c.a)(m),
        { fetched: h, hasAlreadyLinked: C, canStartAuthorization: I, startAuthorization: v } = (0, s.F)(m),
        g = (0, r.I)(m);
    if (!h || null == T)
        return (0, a.jsx)(e.IX, {
            transitionState: n,
            onClose: i,
            children: (0, a.jsx)(e.fef, { children: (0, a.jsx)(o.$jN, {}) }),
        });
    if (C) {
        let t =
            T && !g
                ? {
                      variant: "primary",
                      text: x.intl.string(x.t["s+J8Dl"]),
                      onClick: () => {
                          l.Z.launchGame(m.id);
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
                    sku: f,
                    title: x.intl.string(x.t["5glWta"]),
                }),
                (0, a.jsx)(e.fef, {
                    children: (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: p.modalBodyText,
                        children: x.intl.formatToPlainString(x.t.W2znvX, {
                            skuName: f.name,
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
            onClick: v,
            icon: e.uIJ,
            disabled: !I,
        };
        return (0, a.jsx)(u.M, {
            sku: f,
            application: m,
            transitionState: n,
            onClose: i,
            hasAlreadyLinked: C,
            canStartAuthorization: I,
            primaryCTAButtonProps: t,
            bodyText: x.intl.formatToPlainString(x.t.Qmkje8, { applicationName: m.name }),
            title: x.intl.string(x.t.GPAtvf),
        });
    }
}
