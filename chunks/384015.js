var a = s(477900),
    i = s(582128),
    n = s(59652),
    l = s(28863),
    r = s(32880),
    o = s(129230),
    u = s(652215),
    h = s(792996);
s.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    href: t,
                    className: s,
                    iconClassName: d,
                    rel: c,
                    target: m,
                    mimeType: p,
                    fileName: f,
                    focusProps: g,
                    onClick: y,
                    ...v
                } = e,
                S = i.useMemo(() => n.V.getDefaultLinkInterceptor(t), [t]),
                C = i.useCallback(
                    (e) => {
                        (o.default.track(u.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                            attachment_type: p?.[0],
                            attachment_subtype: p?.[1],
                        }),
                            y?.(),
                            S?.(e));
                    },
                    [S, p, y],
                );
            return null != f
                ? (0, a.jsx)(l.Anchor, {
                      href: t,
                      onClick: C,
                      target: m,
                      rel: c,
                      className: s,
                      focusProps: g,
                      ...v,
                      children: f,
                  })
                : (0, a.jsx)(l.Anchor, {
                      href: t,
                      onClick: C,
                      target: m,
                      rel: c,
                      className: s,
                      "aria-label": h.intl.string(h.t["1WjMbC"]),
                      focusProps: g,
                      ...v,
                      children: (0, a.jsx)(r.DownloadIcon, { size: "md", color: "currentColor", className: d }),
                  });
        },
    },
);
