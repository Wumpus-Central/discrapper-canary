var l = a(477900),
    t = a(582128),
    i = a(520923),
    r = a(557768),
    c = a(129230),
    d = a(652215);
function s(n, e) {
    c.default.track(d.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { ...e, notice_type: n });
}
function u(n, e) {
    c.default.track(d.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: n, href: e });
}
a.d(
    e,
    {},
    {
        Ux: u,
        g1: s,
        qg: function (n) {
            var e, a, _, o, C;
            let { noticeType: f, analyticsProperties: h, legacy: k, stateKey: A, className: p, ref: b, ...g } = n,
                m = (0, r.x)("app_global_banner"),
                [E, I] = t.useState(0);
            if (!m) return k;
            let { onDismiss: P, primaryAction: v, link: w } = g,
                x = g;
            return (
                null != v &&
                    (x = {
                        ...x,
                        primaryAction:
                            ((e = f),
                            (a = h),
                            {
                                ...(_ = v),
                                onClick: (n) => {
                                    (_.onClick(n), s(e, a));
                                },
                            }),
                    }),
                null != w &&
                    (x = {
                        ...x,
                        link:
                            ((o = f),
                            {
                                ...(C = w),
                                onClick: (n) => {
                                    (C.onClick?.(n), u(o, C.href));
                                },
                            }),
                    }),
                null != P &&
                    (x = {
                        ...x,
                        onDismiss: () => {
                            var n;
                            (c.default.track(d.HAw.APP_NOTICE_CLOSED, {
                                ...((n = h), n?.trial_id == null ? {} : { trial_id: n.trial_id }),
                                notice_type: f,
                            }),
                                P(),
                                I((n) => n + 1));
                        },
                    }),
                (0, l.jsx)(
                    t.Fragment,
                    { children: (0, l.jsx)("div", { ref: b, className: p, children: (0, l.jsx)(i.q, { ...x }) }, E) },
                    null == A ? f : `${f}:${A}`,
                )
            );
        },
    },
);
