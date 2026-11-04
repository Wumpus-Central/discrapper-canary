var r = t(477900),
    i = t(803805),
    n = t(11187),
    s = t(439401),
    a = t(803931);
t.d(
    l,
    {},
    {
        b: (e, l, t, o, u) => () => {
            let d = l ?? t;
            if (null == d) return null;
            let { url: h, proxyURL: c, width: m, height: p } = d,
                g = null != c && "" !== c ? c : h,
                x = (0, n.mW)({ providerName: u, thumbnail: o });
            return (0, r.jsx)(s.A, {
                width: m,
                height: p,
                src: g,
                gifSrc: x,
                url: null != e && "" !== e ? e : null != c && "" !== c ? c : h,
                format: null != t ? i.TL.VIDEO : i.TL.IMAGE,
                className: a.jj,
            });
        },
    },
);
