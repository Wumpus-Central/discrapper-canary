n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(335854),
    s = n(481060),
    o = n(626135),
    l = n(981631),
    u = n(388032);
let c = (e) => {
    let { href: t, className: n, iconClassName: c, rel: d, target: f, mimeType: _, fileName: p, focusProps: h, onClick: m, ...g } = e,
        E = r.useMemo(() => a.X.getDefaultLinkInterceptor(t), [t]),
        v = r.useCallback(
            (e) => {
                o.default.track(l.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == _ ? void 0 : _[0],
                    attachment_subtype: null == _ ? void 0 : _[1]
                }),
                    null == m || m(),
                    null == E || E(e);
            },
            [E, _, m]
        );
    return null != p
        ? (0, i.jsx)(s.eee, {
              href: t,
              onClick: v,
              target: f,
              rel: d,
              className: n,
              'aria-label': u.intl.string(u.t['1WjMbG']),
              focusProps: h,
              ...g,
              children: p
          })
        : (0, i.jsx)(s.eee, {
              href: t,
              onClick: v,
              target: f,
              rel: d,
              className: n,
              'aria-label': u.intl.string(u.t['1WjMbG']),
              focusProps: h,
              ...g,
              children: (0, i.jsx)(s._8t, {
                  size: 'md',
                  color: 'currentColor',
                  className: c
              })
          });
};
