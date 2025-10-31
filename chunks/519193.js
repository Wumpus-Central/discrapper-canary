e.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => m }), e(388685), e(539854);
var i = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(442837),
    o = e(481060),
    r = e(535139),
    c = e(757266),
    u = e(885110),
    d = e(877481),
    p = e(438926),
    x = e(388032),
    f = e(786081);
function m(t) {
    let { transitionState: n, onClose: e, sku: m, application: C } = t,
        [h, g] = a.useState(null),
        { fetched: S, hasAlreadyLinked: _, canStartAuthorization: T, startAuthorization: y } = (0, r.F)(C),
        I = (0, l.e7)(
            [u.Z, c.Z],
            () => null != u.Z.getApplicationActivity(C.id, !0) || null != c.Z.getApplication(C.id),
            [C.id],
        );
    a.useEffect(() => {
        d.Z.isLaunchable(C).then(g);
    }, [C]);
    let E = (0, i.jsx)(o.$jN, {}),
        j = [];
    return (
        null != h && _
            ? ((E = (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: f.modalBodyText,
                  children: x.intl.formatToPlainString(x.t.W2znvX, {
                      skuName: m.name,
                      applicationName: C.name,
                  }),
              })),
              h && !I
                  ? j.push({
                        variant: "primary",
                        text: x.intl.string(x.t["s+J8Dl"]),
                        onClick: () => {
                            d.Z.launchGame(C.id);
                        },
                        icon: s.rgF,
                    })
                  : j.push({
                        variant: "primary",
                        text: x.intl.string(x.t.cpT0Cq),
                        onClick: e,
                    }))
            : null != h &&
              S &&
              !_ &&
              ((E = (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: f.modalBodyText,
                  children: x.intl.formatToPlainString(x.t["EgCl+Q"], {
                      skuName: m.name,
                      applicationName: C.name,
                  }),
              })),
              j.push({
                  variant: "primary",
                  text: x.intl.string(x.t["VDAhr+"]),
                  onClick: () => {
                      y();
                  },
                  icon: s.rgF,
                  disabled: !T,
              })),
        (0, i.jsxs)(s.IX, {
            transitionState: n,
            onClose: e,
            children: [
                (0, i.jsx)(p.y, {
                    sku: m,
                    title: x.intl.string(x.t["5glWta"]),
                }),
                (0, i.jsx)(s.fef, { children: E }),
                j.length > 0
                    ? (0, i.jsx)(s.Go$, {
                          actions: j,
                          actionsFullWidth: !0,
                      })
                    : null,
            ],
        })
    );
}
