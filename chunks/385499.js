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
            (d = !0), (m = c.intl.string(c.t["7s687u"])), (h = c.intl.string(c.t.lKQ7Wl));
            break;
        case l.Hb.SERVER:
            h = c.intl.string(c.t.PuJGuL);
            break;
        case l.Hb.ORIGINAL_POSTER:
            h = c.intl.string(c.t.fyE8sL);
            break;
        case l.Hb.STAFF_ONLY_DM:
            h = c.intl.string(c.t.oMx98P);
            break;
        case l.Hb.NOT_STAFF_WARNING:
            (h = c.intl.string(c.t.UWhXbG)), (g = u.botTagNotStaffWarning);
            break;
        case l.Hb.REMIX:
            (d = !1), (h = c.intl.string(c.t.uXDG39));
            break;
        case l.Hb.BOT:
        default:
            h = c.intl.string(c.t["9RNkeH"]);
    }
    let E = n === l.Hb.ORIGINAL_POSTER,
        b = n === l.Hb.REMIX,
        y = null;
    d &&
        (y = (0, r.jsx)(o.u, {
            text: m,
            align: "center",
            position: "top",
            children: (0, r.jsx)(s.kSu, {
                className: u.botTagVerified,
                color: s.TVs.colors.WHITE,
            }),
        }));
    let O = () =>
        (0, r.jsxs)("span", {
            className: a()(i, g, _ ? u.rem : u.px, {
                [u.botTagOP]: E,
                [u.botTagRemix]: b,
            }),
            children: [
                f ? null : y,
                p,
                (0, r.jsx)("span", {
                    className: u.botText,
                    children: h,
                }),
            ],
        });
    switch (n) {
        case l.Hb.REMIX:
            return (0, r.jsx)(o.u, {
                text: c.intl.string(c.t.xb0str),
                position: "top",
                asContainer: !0,
                children: O(),
            });
        case l.Hb.ORIGINAL_POSTER:
            return (0, r.jsx)(o.u, {
                text: c.intl.string(c.t.uN6Emp),
                position: "top",
                asContainer: !0,
                children: O(),
            });
        default:
            return O();
    }
};
d.Types = l.Hb;
let f = d;
