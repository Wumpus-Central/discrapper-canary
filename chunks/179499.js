var e = r(582128),
    a = r(284009),
    i = r.n(a),
    c = r(164636),
    o = r(554830),
    s = r(32880),
    l = r(871109),
    h = r(228105),
    u = r(960427),
    d = r(792996);
r.d(
    n,
    {},
    {
        A: function (t) {
            let { guildId: n, productId: r } = t,
                a = (0, c.bG)([l.A], () => l.A.getGuildProduct(r)),
                { isLoading: y, downloadAttachment: _ } = (0, h.A)(n, r),
                T = e.useCallback(() => {
                    let t = a?.attachments?.[0]?.id;
                    (i()(null != t, "No attachment"), _(t));
                }, [_, a?.attachments]),
                p = e.useCallback(() => u.A.open({ guildId: n, productId: r }), [n, r]);
            return (a?.attachments?.length ?? 0) > 1
                ? {
                      variant: "primary",
                      text: d.intl.string(d.t.UyuiUE),
                      icon: o.ArrowLargeRightIcon,
                      iconPosition: "end",
                      onClick: p,
                  }
                : {
                      variant: "primary",
                      text: d.intl.string(d.t.t9bE9b),
                      icon: s.DownloadIcon,
                      iconPosition: "end",
                      loading: y,
                      onClick: T,
                  };
        },
    },
);
