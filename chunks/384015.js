"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(752239),
    a = n(349288),
    r = n(32880),
    o = n(954571),
    c = n(652215),
    u = n(985018);
let d = (e) => {
    let {
            href: t,
            className: n,
            iconClassName: d,
            rel: h,
            target: m,
            mimeType: p,
            fileName: f,
            focusProps: g,
            onClick: _,
            ...x
        } = e,
        C = i.useMemo(() => s.V.getDefaultLinkInterceptor(t), [t]),
        A = i.useCallback(
            (e) => {
                o.default.track(c.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: p?.[0],
                    attachment_subtype: p?.[1],
                }),
                    _?.(),
                    C?.(e);
            },
            [C, p, _],
        );
    return null != f
        ? (0, l.jsx)(a.Anchor, {
              href: t,
              onClick: A,
              target: m,
              rel: h,
              className: n,
              focusProps: g,
              ...x,
              children: f,
          })
        : (0, l.jsx)(a.Anchor, {
              href: t,
              onClick: A,
              target: m,
              rel: h,
              className: n,
              "aria-label": u.intl.string(u.t["1WjMbC"]),
              focusProps: g,
              ...x,
              children: (0, l.jsx)(r.s, { size: "md", color: "currentColor", className: d }),
          });
};
