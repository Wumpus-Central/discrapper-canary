"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(752239),
    s = n(349288),
    l = n(32880),
    o = n(174459),
    d = n(652215),
    c = n(375708);
let u = function (e) {
    let {
            href: t,
            className: n,
            iconClassName: u,
            rel: _,
            target: E,
            mimeType: A,
            fileName: h,
            focusProps: I,
            onClick: f,
            ...p
        } = e,
        T = r.useMemo(() => a.V.getDefaultLinkInterceptor(t), [t]),
        m = r.useCallback(
            (e) => {
                o.default.track(d.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: A?.[0],
                    attachment_subtype: A?.[1],
                }),
                    f?.(),
                    T?.(e);
            },
            [T, A, f],
        );
    return null != h
        ? (0, i.jsx)(s.Anchor, {
              href: t,
              onClick: m,
              target: E,
              rel: _,
              className: n,
              focusProps: I,
              ...p,
              children: h,
          })
        : (0, i.jsx)(s.Anchor, {
              href: t,
              onClick: m,
              target: E,
              rel: _,
              className: n,
              "aria-label": c.intl.string(c.t["1WjMbC"]),
              focusProps: I,
              ...p,
              children: (0, i.jsx)(l.s, { size: "md", color: "currentColor", className: u }),
          });
};
