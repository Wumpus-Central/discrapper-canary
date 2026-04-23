"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(752239),
    r = n(349288),
    a = n(32880),
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
        A = l.useMemo(() => s.V.getDefaultLinkInterceptor(t), [t]),
        C = l.useCallback(
            (e) => {
                o.default.track(c.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: p?.[0],
                    attachment_subtype: p?.[1],
                }),
                    _?.(),
                    A?.(e);
            },
            [A, p, _],
        );
    return null != f
        ? (0, i.jsx)(r.Anchor, {
              href: t,
              onClick: C,
              target: m,
              rel: h,
              className: n,
              focusProps: g,
              ...x,
              children: f,
          })
        : (0, i.jsx)(r.Anchor, {
              href: t,
              onClick: C,
              target: m,
              rel: h,
              className: n,
              "aria-label": u.intl.string(u.t["1WjMbC"]),
              focusProps: g,
              ...x,
              children: (0, i.jsx)(a.s, { size: "md", color: "currentColor", className: d }),
          });
};
