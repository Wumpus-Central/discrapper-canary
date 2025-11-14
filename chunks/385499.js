n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(674563),
    c = n(388032),
    u = n(182171);
let d = (e) => {
    let {
            invertColor: t = !1,
            type: n = l.Hb.BOT,
            className: i,
            verified: d,
            hideIcon: f = !1,
            useRemSizes: _ = !1,
            children: p = [],
        } = e,
        h = null,
        m = c.intl.string(c.t.g76OcH),
        g = t ? u.botTagInvert : u.botTagRegular;
    switch (n) {
        case l.Hb.SYSTEM_DM:
        case l.Hb.OFFICIAL:
            (d = !0), (m = c.intl.string(c.t["7s687k"])), (h = c.intl.string(c.t.lKQ7Wt));
            break;
        case l.Hb.SERVER:
            h = c.intl.string(c.t.PuJGuM);
            break;
        case l.Hb.ORIGINAL_POSTER:
            h = c.intl.string(c.t.fyE8sH);
            break;
        case l.Hb.STAFF_ONLY_DM:
            h = c.intl.string(c.t.oMx98L);
            break;
        case l.Hb.NOT_STAFF_WARNING:
            (h = c.intl.string(c.t.UWhXbK)), (g = u.botTagNotStaffWarning);
            break;
        case l.Hb.BOT:
        default:
            h = c.intl.string(c.t["9RNkeF"]);
    }
    let E = n === l.Hb.ORIGINAL_POSTER,
        b = null;
    d &&
        (b = (0, r.jsx)(o.u, {
            text: m,
            align: "center",
            position: "top",
            children: (0, r.jsx)(s.kSu, {
                className: u.botTagVerified,
                color: s.TVs.colors.WHITE,
            }),
        }));
    let y = () =>
        (0, r.jsxs)("span", {
            className: a()(i, g, _ ? u.rem : u.px, { [u.botTagOP]: E }),
            children: [
                f ? null : b,
                p,
                (0, r.jsx)("span", {
                    className: u.botText,
                    children: h,
                }),
            ],
        });
    return n === l.Hb.ORIGINAL_POSTER
        ? (0, r.jsx)(o.u, {
              text: c.intl.string(c.t.uN6Emt),
              position: "top",
              asContainer: !0,
              children: y(),
          })
        : y();
};
d.Types = l.Hb;
let f = d;
