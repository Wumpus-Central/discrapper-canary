var a = s(477900),
    i = s(582128),
    n = s(59652),
    l = s(28863),
    r = s(32880),
    o = s(129230),
    h = s(652215),
    u = s(792996);
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
                    fileName: g,
                    focusProps: f,
                    onClick: v,
                    ...y
                } = e,
                S = i.useMemo(() => n.V.getDefaultLinkInterceptor(t), [t]),
                C = i.useCallback(
                    (e) => {
                        (o.default.track(h.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                            attachment_type: p?.[0],
                            attachment_subtype: p?.[1],
                        }),
                            v?.(),
                            S?.(e));
                    },
                    [S, p, v],
                );
            return null != g
                ? (0, a.jsx)(l.Anchor, {
                      href: t,
                      onClick: C,
                      target: m,
                      rel: c,
                      className: s,
                      focusProps: f,
                      ...y,
                      children: g,
                  })
                : (0, a.jsx)(l.Anchor, {
                      href: t,
                      onClick: C,
                      target: m,
                      rel: c,
                      className: s,
                      "aria-label": u.intl.string(u.t["1WjMbC"]),
                      focusProps: f,
                      ...y,
                      children: (0, a.jsx)(r.DownloadIcon, { size: "md", color: "currentColor", className: d }),
                  });
        },
    },
);
