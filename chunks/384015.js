"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(752239),
    s = n(397927),
    o = n(954571),
    l = n(652215),
    u = n(985018);
let c = (e) => {
    let {
            href: t,
            className: n,
            iconClassName: c,
            rel: d,
            target: _,
            mimeType: f,
            fileName: p,
            focusProps: h,
            onClick: m,
            ...g
        } = e,
        E = i.useMemo(() => a.V.getDefaultLinkInterceptor(t), [t]),
        A = i.useCallback(
            (e) => {
                o.default.track(l.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: f?.[0],
                    attachment_subtype: f?.[1],
                }),
                    m?.(),
                    E?.(e);
            },
            [E, f, m],
        );
    return null != p
        ? (0, r.jsx)(s.MzZ, {
              href: t,
              onClick: A,
              target: _,
              rel: d,
              className: n,
              "aria-label": u.intl.string(u.t["1WjMbC"]),
              focusProps: h,
              ...g,
              children: p,
          })
        : (0, r.jsx)(s.MzZ, {
              href: t,
              onClick: A,
              target: _,
              rel: d,
              className: n,
              "aria-label": u.intl.string(u.t["1WjMbC"]),
              focusProps: h,
              ...g,
              children: (0, r.jsx)(s.s3U, { size: "md", color: "currentColor", className: c }),
          });
};
