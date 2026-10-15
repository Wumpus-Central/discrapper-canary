n.d(t, { r: () => A });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    u = n(750943),
    s = n(22231),
    o = n(331322),
    d = n(95477),
    c = n(834730),
    f = n(103557),
    p = n(946274),
    h = n(951178),
    g = n(535466),
    m = n(261425),
    b = n(105292),
    v = n(154600);
function x(e) {
    let { iconURL: t, disabled: n, onChange: r, onError: o } = e,
        d = i.useRef(null),
        c = null == t;
    return (0, l.jsxs)("div", {
        className: v.iA,
        children: [
            (0, l.jsx)("button", {
                type: "button",
                className: a()(v.Vs, { [v.A6]: c }),
                "aria-label": b.intl.string(c ? b.t["MsUY/S"] : b.t["6yrpFR"]),
                disabled: n,
                onClick: () => d.current?.activateUploadDialogue(),
                children: c
                    ? (0, l.jsx)(u.X, { size: "md", color: "currentColor" })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: v.uP, src: t, alt: "" }),
                              (0, l.jsx)("span", {
                                  className: v.Jx,
                                  children: (0, l.jsx)(s.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, l.jsx)(p.Ay, {
                ref: d,
                className: v.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: g.En }],
                maxFileSizeBytes: g.Q0,
                onChange: (e) => {
                    (o(null), r(e));
                },
                onFileSizeError: () => o(b.intl.string(m.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function y(e, t, n) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, t) {
            let n = t.offsetHeight;
            for (let l = t; null != l && l !== e; l = l.offsetParent) n += l.offsetTop;
            return n;
        })(t, n)}px`,
    );
}
function A(e) {
    let t,
        n,
        {
            iconURL: r,
            onIconChange: a,
            name: u,
            nameError: s,
            onNameChange: p,
            description: g,
            onDescriptionChange: A,
            disabled: j = !1,
        } = e,
        [S, C] = i.useState(null),
        { rowRef: w, fieldRef: k } =
            ((t = i.useRef(null)),
            (n = i.useRef(null)),
            i.useLayoutEffect(() => {
                let e = t.current,
                    l = n.current,
                    i = l?.querySelector("input")?.parentElement;
                if (null == e || null == l || null == i) return;
                y(e, l, i);
                let r = new ResizeObserver(() => y(e, l, i));
                return (r.observe(l), r.observe(i), () => r.disconnect());
            }, []),
            { rowRef: t, fieldRef: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, l.jsxs)("div", {
                        ref: w,
                        className: v.S7,
                        children: [
                            (0, l.jsx)(x, { iconURL: r, disabled: j, onChange: a, onError: C }),
                            (0, l.jsx)("div", {
                                ref: k,
                                className: v.yD,
                                children: (0, l.jsx)(d.k, {
                                    label: b.intl.string(m.default.GWBCF9),
                                    value: u,
                                    onChange: p,
                                    error: s,
                                    maxLength: h.eq,
                                    disabled: j,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != S
                        ? (0, l.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: S,
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(f.f, {
                label: b.intl.string(m.default.ynaGa1),
                placeholder: b.intl.string(m.default["I+3UTL"]),
                value: g,
                onChange: A,
                maxLength: h.HR,
                disabled: j,
            }),
        ],
    });
}
