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
            rel: m,
            target: h,
            mimeType: p,
            fileName: f,
            focusProps: g,
            onClick: x,
            ...A
        } = e,
        C = i.useMemo(() => s.V.getDefaultLinkInterceptor(t), [t]),
        E = i.useCallback(
            (e) => {
                (o.default.track(u.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: p?.[0],
                    attachment_subtype: p?.[1],
                }),
                    x?.(),
                    C?.(e));
            },
            [C, p, x],
        );
    return null != f
        ? (0, l.jsx)(r.Anchor, {
              href: t,
              onClick: E,
              target: h,
              rel: m,
              className: n,
              focusProps: g,
              ...A,
              children: f,
          })
        : (0, l.jsx)(r.Anchor, {
              href: t,
              onClick: E,
              target: h,
              rel: m,
              className: n,
              "aria-label": c.intl.string(c.t["1WjMbC"]),
              focusProps: g,
              ...A,
              children: (0, l.jsx)(a.DownloadIcon, { size: "md", color: "currentColor", className: d }),
          });
};
