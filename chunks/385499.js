var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(981729),
    l = r(481060),
    u = r(674563),
    c = r(388032),
    d = r(63442);
let f = (e) => {
    let n,
        { invertColor: r = !1, type: a = u.Hb.BOT, className: f, verified: _, hideIcon: h = !1, useRemSizes: p = !1, children: m = [] } = e,
        g = null,
        E = c.intl.string(c.t.g76OcH);
    switch (a) {
        case u.Hb.SYSTEM_DM:
        case u.Hb.OFFICIAL:
            (_ = !0), (E = c.intl.string(c.t['7s687u'])), (g = c.intl.string(c.t.lKQ7Wl));
            break;
        case u.Hb.SERVER:
            g = c.intl.string(c.t.PuJGuL);
            break;
        case u.Hb.ORIGINAL_POSTER:
            g = c.intl.string(c.t.fyE8sL);
            break;
        case u.Hb.STAFF_ONLY_DM:
            g = c.intl.string(c.t.oMx98P);
            break;
        case u.Hb.AI:
            (_ = !0), (E = c.intl.string(c.t.d5YwQE)), (g = c.intl.string(c.t.pLTJZG));
            break;
        case u.Hb.REMIX:
            (_ = !1), (g = c.intl.string(c.t.uXDG39));
            break;
        case u.Hb.BOT:
        default:
            g = c.intl.string(c.t['9RNkeH']);
    }
    let v = a === u.Hb.ORIGINAL_POSTER,
        I = a === u.Hb.REMIX,
        T = null;
    _ &&
        (T = (0, i.jsx)(o.u, {
            text: E,
            align: 'center',
            position: 'top',
            children: (e) =>
                (0, i.jsx)(l.CheckmarkSmallBoldIcon, {
                    ...e,
                    className: d.botTagVerified,
                    color: l.tokens.colors.WHITE
                })
        })),
        (n = a === u.Hb.AI ? d.botTagAI : r ? d.botTagInvert : d.botTagRegular);
    let b = (e) =>
        (0, i.jsxs)('span', {
            ...e,
            className: s()(f, n, p ? d.rem : d.px, {
                [d.botTagOP]: v,
                [d.botTagRemix]: I
            }),
            children: [
                h ? null : T,
                m,
                (0, i.jsx)('span', {
                    className: d.botText,
                    children: g
                })
            ]
        });
    switch (a) {
        case u.Hb.REMIX:
            return (0, i.jsx)(o.u, {
                text: c.intl.string(c.t.xb0str),
                position: 'top',
                children: (e) => b(e)
            });
        case u.Hb.ORIGINAL_POSTER:
            return (0, i.jsx)(o.u, {
                text: c.intl.string(c.t.uN6Emp),
                position: 'top',
                children: (e) => b(e)
            });
        default:
            return b();
    }
};
(f.Types = u.Hb), (n.Z = f);
