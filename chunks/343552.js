var r = t(477900),
    n = t(803805),
    i = t(11187),
    s = t(439401),
    a = t(803931);
t.d(
    l,
    {},
    {
        b: (e, l, t, o, d) => () => {
            let u = l ?? t;
            if (null == u) return null;
            let { url: h, proxyURL: c, width: m, height: p } = u,
                g = null != c && "" !== c ? c : h,
                x = (0, i.mW)({ providerName: d, thumbnail: o });
            return (0, r.jsx)(s.A, {
                width: m,
                height: p,
                src: g,
                gifSrc: x,
                url: null != e && "" !== e ? e : null != c && "" !== c ? c : h,
                format: null != t ? n.TL.VIDEO : n.TL.IMAGE,
                className: a.jj,
            });
        },
    },
);
