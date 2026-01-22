n.d(t, {
    Cn: () => x,
    Dc: () => M,
    M9: () => P,
    NH: () => k,
    QT: () => R,
    gn: () => j,
    sQ: () => L,
    ti: () => D,
    wN: () => w,
    zT: () => N,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(990078),
    s = n(397927),
    o = n(565645),
    l = n(730134),
    c = n(775602),
    u = n(376943),
    d = n(465365),
    f = n(78390),
    p = n(678473),
    _ = n(332173),
    h = n(37632),
    m = n(967144);
n(209932);
var g = n(734057),
    E = n(760751),
    b = n(317525),
    y = n(351906),
    O = n(287809),
    A = n(486020),
    v = n(147036),
    S = n(562153),
    I = n(427262),
    T = n(985018),
    C = n(790704);

function N(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, {
            src: t.src,
            emojiName: t.name,
            animated: !1,
            surrogate: t.surrogate,
        }),
    });
}

function R(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, {
            emojiId: t.emojiId,
            emojiName: t.name,
            animated: t.animated,
        }),
    });
}

function w(e) {
    let { text: t } = e;
    return (0, r.jsx)(_.A, {
        children: t,
    });
}

function P(e) {
    let { id: t, guildId: n, channelId: o } = e,
        c = (0, i.bG)([O.default], () => O.default.getUser(t)),
        u = (0, i.bG)([y.A], () => y.A.hidePersonalInformation),
        d = S.Ay.useName(n, o, c),
        f = (0, r.jsx)(_.A, {
            children: null == d ? "<@".concat(t, ">") : "@".concat(d),
        });
    if (null != c) {
        let e = u || c.hasUniqueUsername() ? null : "#".concat(c.discriminator);
        return (0, r.jsx)(a.m, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: C.fX,
                children: [
                    (0, r.jsx)(l.A, {
                        user: c,
                        animate: !0,
                        size: s._3J.SIZE_16,
                        className: C.my,
                    }),
                    I.Ay.getUserTag(c, {
                        mode: "username",
                        identifiable: u ? "never" : "always",
                    }),
                    (0, r.jsx)("span", {
                        className: C.D2,
                        children: e,
                    }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": I.Ay.getUserTag(c, {
                decoration: "never",
            }),
            asContainer: !0,
            children: (0, r.jsx)(s.DUT, {
                tag: "span",
                children: f,
            }),
        });
    }
    return f;
}

function D(e) {
    let { id: t, guildId: n } = e,
        a = (0, i.bG)([b.A], () => (null != n ? b.A.getRole(n, t) : void 0)),
        o = (0, i.bG)([c.A], () => c.A.roleStyle),
        l = (0, m.X_)(n, a, null == a ? void 0 : a.colorStrings);
    if (null == a)
        return (0, r.jsxs)("span", {
            children: ["@", T.intl.string(T.t["YV4F/n"])],
        });
    let u = null != a.color && 0 !== a.color,
        d = "dot" === o,
        f = "username" === o && u;
    return (0, r.jsxs)(_.A, {
        color: f ? a.color : null,
        roleColors: f ? l : null,
        children: [
            d &&
                (0, r.jsx)(s.WYI, {
                    color: a.colorString,
                    colors: l,
                    background: !1,
                    tooltip: !1,
                }),
            "@",
            a.name,
        ],
    });
}

function x(e) {
    let { id: t } = e,
        n = (0, i.bG)([g.A], () => g.A.getChannel(t)),
        a = T.intl.string(T.t.zLZPmk).toLowerCase(),
        s = "text",
        o = !0;
    if (null != n) {
        var l;
        (a = (0, u.nc)(n) ? n.name : T.intl.string(T.t["/YzI63"])),
            (s = (0, u.nc)(n) ? (null != (l = (0, v.QG)(n)) ? l : "text") : "locked"),
            (o = (0, d.Y)(n.type));
    }
    return o
        ? (0, r.jsx)(_.A, {
              iconType: s,
              children: a,
          })
        : (0, r.jsx)("span", {
              children: "#" + a,
          });
}

function L(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, f.Q)(t),
        s = (0, f.f)(t, n, i);
    return (0, r.jsxs)(_.A, {
        iconType: t,
        children: [a, null != s && (0, r.jsx)(h.A, {}), s],
    });
}

function j(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(_.A, {
        children: [t, "(", n, ")"],
    });
}

function M(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(p.A, {
        node: t,
        className: "R" === t.format ? C.gS : null,
    });
}

function k(e) {
    var t;
    let { id: n } = e,
        a = (0, i.bG)([E.A], () => E.A.getDetectableGame(n)),
        s =
            null != a
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: C.Kk,
                      src: A.Ay.getApplicationIconURL({
                          id: a.id,
                          icon: a.icon,
                          size: 32,
                      }),
                  })
                : null;
    return (0, r.jsxs)(_.A, {
        children: [s, null != (t = null == a ? void 0 : a.name) ? t : T.intl.string(T.t["11pdXZ"])],
    });
}
