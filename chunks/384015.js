"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(752239),
    a = n(349288),
    o = n(32880),
    l = n(174459),
    u = n(652215),
    c = n(375708);
let d = (e) => {
    let {
            href: t,
            className: n,
            iconClassName: d,
            rel: _,
            target: h,
            mimeType: f,
            fileName: p,
            focusProps: E,
            onClick: m,
            ...g
        } = e,
        A = r.useMemo(() => s.V.getDefaultLinkInterceptor(t), [t]),
        I = r.useCallback(
            (e) => {
                l.default.track(u.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: f?.[0],
                    attachment_subtype: f?.[1],
                }),
                    m?.(),
                    A?.(e);
            },
            [A, f, m],
        );
    return null != p
        ? (0, i.jsx)(a.Anchor, {
              href: t,
              onClick: I,
              target: h,
              rel: _,
              className: n,
              focusProps: E,
              ...g,
              children: p,
          })
        : (0, i.jsx)(a.Anchor, {
              href: t,
              onClick: I,
              target: h,
              rel: _,
              className: n,
              "aria-label": c.intl.string(c.t["1WjMbC"]),
              focusProps: E,
              ...g,
              children: (0, i.jsx)(o.s, { size: "md", color: "currentColor", className: d }),
          });
};
