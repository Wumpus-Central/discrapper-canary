s.d(t, { A: () => d });
var a = s(477900),
    i = s(582128),
    n = s(59652),
    l = s(28863),
    r = s(32880),
    o = s(174459),
    u = s(652215),
    h = s(105292);
let d = function (e) {
    let {
            href: t,
            className: s,
            iconClassName: d,
            rel: c,
            target: p,
            mimeType: m,
            fileName: g,
            focusProps: f,
            onClick: v,
            ...y
        } = e,
        S = i.useMemo(() => n.V.getDefaultLinkInterceptor(t), [t]),
        C = i.useCallback(
            (e) => {
                (o.default.track(u.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: m?.[0],
                    attachment_subtype: m?.[1],
                }),
                    v?.(),
                    S?.(e));
            },
            [S, m, v],
        );
    return null != g
        ? (0, a.jsx)(l.Anchor, {
              href: t,
              onClick: C,
              target: p,
              rel: c,
              className: s,
              focusProps: f,
              ...y,
              children: g,
          })
        : (0, a.jsx)(l.Anchor, {
              href: t,
              onClick: C,
              target: p,
              rel: c,
              className: s,
              "aria-label": h.intl.string(h.t["1WjMbC"]),
              focusProps: f,
              ...y,
              children: (0, a.jsx)(r.DownloadIcon, { size: "md", color: "currentColor", className: d }),
          });
};
