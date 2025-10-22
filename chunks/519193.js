e.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => f }), e(388685), e(539854);
var i = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(442837),
    o = e(481060),
    r = e(20471),
    c = e(757266),
    u = e(885110),
    d = e(877481),
    p = e(438926),
    x = e(388032),
    m = e(40399);
function f(t) {
    let { transitionState: n, onClose: e, sku: f, application: h } = t,
        [C, g] = a.useState(null),
        { fetched: S, hasAlreadyLinked: _, canStartAuthorization: T, startAuthorization: I } = (0, r.FG)(h),
        y = (0, l.e7)(
            [u.Z, c.Z],
            () => null != u.Z.getApplicationActivity(h.id, !0) || null != c.Z.getApplication(h.id),
            [h.id],
        );
    a.useEffect(() => {
        d.Z.isLaunchable(h).then(g);
    }, [h]);
    let E = (0, i.jsx)(o.$jN, {}),
        j = [];
    return (
        null != C && _
            ? ((E = (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: m.modalBodyText,
                  children: x.intl.formatToPlainString(x.t.W2znvX, {
                      skuName: f.name,
                      applicationName: h.name,
                  }),
              })),
              C &&
                  !y &&
                  j.push({
                      variant: "primary",
                      text: x.intl.string(x.t["s+J8Dl"]),
                      onClick: () => {
                          d.Z.launchGame(h.id);
                      },
                      icon: s.rgF,
                  }))
            : null != C &&
              S &&
              !_ &&
              ((E = (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: m.modalBodyText,
                  children: x.intl.formatToPlainString(x.t["EgCl+Q"], {
                      skuName: f.name,
                      applicationName: h.name,
                  }),
              })),
              j.push({
                  variant: "primary",
                  text: x.intl.string(x.t["VDAhr+"]),
                  onClick: () => {
                      I();
                  },
                  icon: s.rgF,
                  disabled: !T,
              })),
        (0, i.jsxs)(s.IX, {
            transitionState: n,
            onClose: e,
            children: [
                (0, i.jsx)(p.y, {
                    sku: f,
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
