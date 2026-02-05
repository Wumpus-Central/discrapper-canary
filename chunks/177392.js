n.d(t, { H: () => h });
var i = n(627968),
    l = n(64700),
    a = n(563495),
    s = n(311907),
    r = n(397927),
    o = n(971778),
    c = n(652215),
    d = n(985018),
    u = n(144958);
function h() {
    let e = (0, s.bG)([o.A], () => o.A.getError());
    return e ? (0, i.jsx)(m, { error: e }) : null;
}
let m = (e) => {
    let { error: t } = e,
        [n, s] = (0, l.useState)(!1),
        h = (0, r.pnh)(
            !n,
            {
                from: { opacity: 0, translateY: 20 },
                enter: { opacity: 1, translateY: 0 },
                leave: { opacity: 0, translateY: 80 },
            },
            "respect-motion-settings",
        ),
        m = (() => {
            switch (t) {
                case o.L.ERROR_DOWNLOADING_DEPENDENCY:
                    return d.intl.string(d.t.D9neaH);
                case o.L.ERROR_ACTIVATING_VOICE_FILTER:
                    return d.intl.string(d.t.mNMZZg);
                default:
                    return d.intl.string(d.t.F8FvUy);
            }
        })();
    return h((e) =>
        n
            ? null
            : (0, i.jsx)(a.animated.div, {
                  style: e,
                  className: u.z,
                  children: (0, i.jsxs)("div", {
                      className: u.A,
                      children: [
                          (0, i.jsx)(r.Text, { variant: "text-sm/semibold", color: "always-white", children: m }),
                          (0, i.jsx)(r.PMB, { noticeType: c.kqX.VOICE_FILTERS_ERROR, onClick: () => s(!0) }),
                      ],
                  }),
              }),
    );
};
