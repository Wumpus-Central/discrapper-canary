var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(470562),
    o = n(59652),
    d = n(531142),
    c = n(939249),
    u = n(559106),
    _ = n(975533);
n.d(
    t,
    {},
    {
        Anchor: function (e) {
            let {
                href: t,
                onClick: n,
                className: a,
                children: E,
                rel: A,
                target: f,
                useDefaultUnderlineStyles: h = !0,
                title: I,
                style: p,
                focusProps: m,
                ref: T,
                role: g,
                ...S
            } = e;
            null != t && null == n && (n = o.V.getDefaultLinkInterceptor(t));
            let N = r.useContext(d.g),
                C = {
                    className: s()(_.Y, { [_.D]: h }, a),
                    href: t,
                    onClick: n,
                    rel: null != A ? A : void 0,
                    target: null != f ? f : void 0,
                    title: null != I ? I : void 0,
                    style: null != p ? p : void 0,
                };
            return (null == t || (0, l.e)(t) || ((C.rel = "noreferrer noopener"), (C.target = "_blank")),
            N && delete C.href,
            null != n)
                ? (0, i.jsx)(c.D, {
                      tag: "a",
                      ...S,
                      ...C,
                      onClick: n,
                      focusProps: m,
                      innerRef: T,
                      role: "link",
                      children: E,
                  })
                : (0, i.jsx)(u.vN, { ...m, children: (0, i.jsx)("a", { ...S, ...C, ref: T, children: E }) });
        },
    },
);
