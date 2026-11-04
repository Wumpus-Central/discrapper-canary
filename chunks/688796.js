var i = A(477900);
A(582128);
var e = A(192308),
    r = A(87719),
    s = A(49792),
    l = A(831318),
    a = A(682901),
    c = A(339984),
    o = A(792996);
A.d(
    n,
    {},
    {
        G: function (t) {
            let { uploadType: n } = t;
            return (
                (0, e.mM)(async () => {
                    let { default: t } = await Promise.resolve().then(A.bind(A, 688796));
                    return (A) => (0, i.jsx)(t, { uploadType: n, onSecondaryClick: e.s7, ...A });
                }),
                !0
            );
        },
        default: function (t) {
            let { uploadType: n, onClose: A, onSecondaryClick: e, ...u } = t,
                d = n === c.HL.AVATAR || n === c.HL.BANNER,
                L = (0, s.A)(n === c.HL.AVATAR ? a.e.ANIMATED_AVATAR_MODAL_UPSELL : a.e.ANIMATED_BANNER_MODAL_UPSELL);
            return d
                ? (0, i.jsx)(l.A, {
                      title: n === c.HL.AVATAR ? o.intl.string(o.t.X7tO60) : o.intl.string(o.t.zXPa2C),
                      subtitle: n === c.HL.AVATAR ? o.intl.string(o.t.ifCRdB) : o.intl.string(o.t.yQAnf4),
                      graphic: L,
                      onSecondaryClick: () => {
                          (e?.(), (0, r.x)(A));
                      },
                      secondaryCTA: o.intl.string(o.t.PcTCB7),
                      onClose: A,
                      ...u,
                  })
                : null;
        },
    },
);
