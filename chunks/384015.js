"use strict";
n.d(t, { A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(59652),
    r = n(28863),
    a = n(32880),
    o = n(174459),
    u = n(652215),
    c = n(375708);
let d = function (e) {
    let {
            href: t,
            className: n,
            iconClassName: d,
            rel: h,
            target: m,
            mimeType: f,
            fileName: p,
            focusProps: g,
            onClick: x,
            ...A
        } = e,
        E = i.useMemo(() => s.V.getDefaultLinkInterceptor(t), [t]),
        C = i.useCallback(
            (e) => {
                o.default.track(u.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: f?.[0],
                    attachment_subtype: f?.[1],
                }),
                    x?.(),
                    E?.(e);
            },
            [E, f, x],
        );
    return null != p
        ? (0, l.jsx)(r.Anchor, {
              href: t,
              onClick: C,
              target: m,
              rel: h,
              className: n,
              focusProps: g,
              ...A,
              children: p,
          })
        : (0, l.jsx)(r.Anchor, {
              href: t,
              onClick: C,
              target: m,
              rel: h,
              className: n,
              "aria-label": c.intl.string(c.t["1WjMbC"]),
              focusProps: g,
              ...A,
              children: (0, l.jsx)(a.DownloadIcon, { size: "md", color: "currentColor", className: d }),
          });
};
