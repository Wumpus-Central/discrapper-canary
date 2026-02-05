n.d(t, { V: () => A });
var i = n(627968);
n(64700);
var r = n(342494),
    a = n(397927),
    l = n(793574),
    s = n(954571),
    o = n(727949),
    d = n(652215),
    c = n(985018),
    u = n(954457);
let A = (e) => {
    let { targetElementRef: t } = e,
        A = (0, o.Tp)(),
        h = () => {
            (0, o.ne)();
        };
    return (0, i.jsx)(r.AM, {
        targetElementRef: t,
        title: c.intl.string(c.t.K2DyeS),
        body: c.intl.string(c.t["JICo+3"]),
        graphic: { type: "image", src: u.A },
        size: "md",
        shouldShow: A,
        align: "top",
        position: "right",
        gradientColor: "nitro-pink",
        caretConfig: { align: "start" },
        actions: [
            {
                text: c.intl.string(c.t.t2N81y),
                onClick: () => {
                    s.default.track(d.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: [l.A.HOME_PAGE_PREMIUM_TAB],
                    }),
                        h(),
                        (0, a.mMO)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                            return (t) => (0, i.jsx)(e, { ...t });
                        });
                },
            },
        ],
        onRequestClose: h,
    });
};
