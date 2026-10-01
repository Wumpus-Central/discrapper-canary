s.d(t, { A: () => c });
var n = s(477900),
    a = s(582128),
    l = s(59652),
    i = s(28863),
    r = s(32880),
    o = s(174459),
    u = s(652215),
    d = s(375708);
let c = function (e) {
    let {
            href: t,
            className: s,
            iconClassName: c,
            rel: h,
            target: m,
            mimeType: p,
            fileName: f,
            focusProps: g,
            onClick: v,
            ...C
        } = e,
        A = a.useMemo(() => l.V.getDefaultLinkInterceptor(t), [t]),
        x = a.useCallback(
            (e) => {
                (o.default.track(u.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: p?.[0],
                    attachment_subtype: p?.[1],
                }),
                    v?.(),
                    A?.(e));
            },
            [A, p, v],
        );
    return null != f
        ? (0, n.jsx)(i.Anchor, {
              href: t,
              onClick: x,
              target: m,
              rel: h,
              className: s,
              focusProps: g,
              ...C,
              children: f,
          })
        : (0, n.jsx)(i.Anchor, {
              href: t,
              onClick: x,
              target: m,
              rel: h,
              className: s,
              "aria-label": d.intl.string(d.t["1WjMbC"]),
              focusProps: g,
              ...C,
              children: (0, n.jsx)(r.DownloadIcon, { size: "md", color: "currentColor", className: c }),
          });
};
